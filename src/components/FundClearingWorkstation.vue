<template>
  <div class="fund-clearing-workstation">
    <!-- Header -->
    <div class="header">
      <h1>基金清算工作台</h1>
      <p>Fund Clearing Workstation - Multi-Level Nested Grid</p>
    </div>

    <!-- Main Content -->
    <div class="main-content" :style="{ paddingBottom: `${operationPanelHeight}px` }">
      <div class="ag-theme-balham grid-container">
        <ag-grid-vue
          ref="gridRef"
          :rowData="fundData"
          :columnDefs="columnDefs"
          :defaultColDef="defaultColDef"
          :masterDetail="true"
          :detailRowAutoHeight="true"
          :detailCellRendererParams="detailCellRendererParams"
          :groupDefaultExpanded="0"
          :animateRows="false"
          :enableCellTextSelection="true"
          :suppressCellFocus="true"
          @grid-ready="onGridReady"
          @selection-changed="onSelectionChanged"
          @row-double-clicked="onRowDoubleClicked"
        />
      </div>
    </div>

    <!-- Bottom Operation Panel -->
    <OperationPanel
      ref="operationPanelRef"
      :selectedCount="selectedCount"
      :totalCount="totalCount"
      :tradeOrderSelectedCount="tradeOrderSelectedCount"
      :tradeOrderTotalCount="tradeOrderTotalCount"
      :statusFilters="statusFilters"
      @update:statusFilters="statusFilters = $event"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { AgGridVue } from 'ag-grid-vue3';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { MasterDetailModule } from 'ag-grid-enterprise';
import { fundData } from '../data/fundData';
import { NodeType } from '../types/fundData';
import type { StatusFilters } from '../types/fundData';
import OperationPanel from './OperationPanel.vue';
import StatusBadge from './StatusBadge.vue';
import CustomCheckboxRenderer from './CustomCheckboxRenderer.vue';
import CustomCheckboxHeaderRenderer from './CustomCheckboxHeaderRenderer.vue';

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule, MasterDetailModule]);

const gridRef = ref();
const operationPanelRef = ref();
const operationPanelHeight = ref(160);
const selectedCount = ref(0);
const totalCount = ref(0);
const tradeOrderSelectedCount = ref(0);
const tradeOrderTotalCount = ref(0);
const statusFilters = ref<StatusFilters>({
  bondDistribution: false,
  fundManagerUnconfirmed: false,
  multipleReminders: false,
  noReminders: false,
  t0TradeUnsettled: false,
  accountingTimeout: false,
  custodyTimeout: false,
  awaitingUnlocking: false,
});

// 用于存储所有网格实例的引用
const gridInstances = ref<Set<any>>(new Set());

// 默认列配置
const defaultColDef = {
  resizable: true,
  sortable: true,
  flex: 1,
  minWidth: 100,
};

// 第1层表格列定义（基金层）
const columnDefs = [
  {
    headerName: '',
    field: 'expand',
    cellRenderer: 'agGroupCellRenderer',
    width: 36,
    maxWidth: 36,
    minWidth: 36,
    resizable: false,
    suppressSizeToFit: true,
    pinned: 'left',
  },
  {
    headerName: '',
    field: 'selected',
    cellRenderer: CustomCheckboxRenderer,
    headerComponent: CustomCheckboxHeaderRenderer,
    width: 28,
    maxWidth: 28,
    minWidth: 28,
    resizable: false,
    suppressSizeToFit: true,
    pinned: 'left',
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0'
    },
    headerClass: 'custom-checkbox-header',
    valueGetter: (params: any) => params.data?.selected || false,
  },
  {
    headerName: '基金代码',
    field: 'fundCode',
    width: 120,
    maxWidth: 120,
    resizable: false,
    suppressSizeToFit: true,
    pinned: 'left',
  },
  {
    headerName: '基金名称',
    field: 'fundName',
    width: 173,
    maxWidth: 173,
    resizable: false,
    suppressSizeToFit: true,
    pinned: 'left',
  },
  {
    headerName: 'OSS银行头寸',
    field: 'ossBankBalance',
    type: 'numericColumn',
    valueFormatter: (params: any) => params.value?.toLocaleString() || '0',
  },
  {
    headerName: '日终活期银行存款',
    field: 'endDayBankDeposit',
    type: 'numericColumn',
    valueFormatter: (params: any) => params.value?.toLocaleString() || '0',
  },
  {
    headerName: '日终活期银行存款(含询价结果未成)',
    field: 'endDayBankDepositWithInquiry',
    type: 'numericColumn',
    valueFormatter: (params: any) => params.value?.toLocaleString() || '0',
    minWidth: 200,
  },
  {
    headerName: '托管行',
    field: 'custodyBank',
    minWidth: 150,
  },
  {
    headerName: '交易员1',
    field: 'trader1',
    minWidth: 100,
  },
  {
    headerName: '交易员2',
    field: 'trader2',
    minWidth: 100,
  },
  {
    headerName: '需补划出金额(元)',
    field: 'requiredTransferAmount',
    type: 'numericColumn',
    valueFormatter: (params: any) => params.value?.toLocaleString() || '0',
    cellStyle: { color: '#ff4d4f', fontWeight: 'bold' },
    minWidth: 150,
  },
];

// 第2层表格列定义（托管机构层）
const level2ColumnDefs = [
  {
    headerName: '',
    field: 'expand',
    cellRenderer: 'agGroupCellRenderer',
    width: 36,
    maxWidth: 36,
    minWidth: 36,
    resizable: false,
    suppressSizeToFit: true,
    pinned: 'left',
  },
  {
    headerName: '',
    field: 'selected',
    cellRenderer: CustomCheckboxRenderer,
    width: 28,
    maxWidth: 28,
    minWidth: 28,
    resizable: false,
    suppressSizeToFit: true,
    pinned: 'left',
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0'
    },
    headerClass: 'custom-checkbox-header',
    valueGetter: (params: any) => params.data?.selected || false,
  },
  {
    headerName: '托管机构',
    field: 'custodyInstitution',
    minWidth: 262,
    resizable: false,
    pinned: 'left',
  },
  {
    headerName: '自动清算状态',
    field: 'autoClearingStatus',
    cellRenderer: StatusBadge,
    cellRendererParams: { type: 'clearing' },
    minWidth: 120,
  },
  {
    headerName: '划款申请状态',
    field: 'transferApplicationStatus',
    cellRenderer: StatusBadge,
    cellRendererParams: { type: 'application' },
    minWidth: 120,
  },
  {
    headerName: '未办提醒',
    field: 'pendingReminder',
    cellRenderer: StatusBadge,
    cellRendererParams: { type: 'reminder' },
  },
  {
    headerName: '核算进度',
    field: 'accountingProgress',
    cellRenderer: StatusBadge,
    cellRendererParams: { type: 'progress' },
  },
  {
    headerName: '托管行进度',
    field: 'custodyProgress',
    cellRenderer: StatusBadge,
    cellRendererParams: { type: 'progress' },
  },
  {
    headerName: '账户余额',
    field: 'accountBalance',
    type: 'numericColumn',
    valueFormatter: (params: any) => params.value?.toLocaleString() || '0',
  },
  {
    headerName: '有效结算余额',
    field: 'effectiveSettlementBalance',
    type: 'numericColumn',
    valueFormatter: (params: any) => params.value?.toLocaleString() || '0',
  },
  {
    headerName: '统计有效已生成划款金额',
    field: 'generatedTransferAmount',
    type: 'numericColumn',
    valueFormatter: (params: any) => params.value?.toLocaleString() || '0',
    minWidth: 180,
  },
  {
    headerName: '统计有效未生成划款金额',
    field: 'ungeneratedTransferAmount',
    type: 'numericColumn',
    valueFormatter: (params: any) => params.value?.toLocaleString() || '0',
    minWidth: 180,
  },
];

// 第3层表格列定义（划款指令层）
const level3ColumnDefs = [
  {
    headerName: '',
    field: 'expand',
    cellRenderer: 'agGroupCellRenderer',
    width: 36,
    maxWidth: 36,
    minWidth: 36,
    resizable: false,
    suppressSizeToFit: true,
    pinned: 'left',
  },
  {
    headerName: '',
    field: 'selected',
    cellRenderer: CustomCheckboxRenderer,
    width: 28,
    maxWidth: 28,
    minWidth: 28,
    resizable: false,
    suppressSizeToFit: true,
    pinned: 'left',
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0'
    },
    headerClass: 'custom-checkbox-header',
    valueGetter: (params: any) => params.data?.selected || false,
  },
  {
    headerName: '划款指令编号',
    field: 'transferInstructionNumber',
    minWidth: 230,
    resizable: false,
    pinned: 'left',
  },
  {
    headerName: '划款指令金额',
    field: 'transferInstructionAmount',
    type: 'numericColumn',
    valueFormatter: (params: any) => params.value?.toLocaleString() || '0',
  },
  {
    headerName: '划款进度',
    field: 'transferProgress',
    cellRenderer: StatusBadge,
    cellRendererParams: { type: 'progress' },
  },
];

// 第4层表格列定义（成交单层）
const level4ColumnDefs = [
  {
    headerName: '',
    field: 'indent',
    width: 36,
    maxWidth: 36,
    minWidth: 36,
    resizable: false,
    suppressSizeToFit: true,
    pinned: 'left',
    cellRenderer: () => '',
  },
  {
    headerName: '',
    field: 'selected',
    cellRenderer: CustomCheckboxRenderer,
    width: 28,
    maxWidth: 28,
    minWidth: 28,
    resizable: false,
    suppressSizeToFit: true,
    pinned: 'left',
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0'
    },
    headerClass: 'custom-checkbox-header',
    valueGetter: (params: any) => params.data?.selected || false,
  },
  {
    headerName: '成交单编号',
    field: 'tradeOrderNumber',
    minWidth: 150,
    resizable: false,
    pinned: 'left',
  },
  {
    headerName: '指令状态',
    field: 'instructionStatus',
    cellRenderer: StatusBadge,
    cellRendererParams: { type: 'instruction' },
  },
  {
    headerName: '有效状态',
    field: 'validStatus',
    cellRenderer: StatusBadge,
    cellRendererParams: { type: 'valid' },
  },
  {
    headerName: '资金结算状态',
    field: 'fundSettlementStatus',
    cellRenderer: StatusBadge,
    cellRendererParams: { type: 'settlement' },
  },
  {
    headerName: '交易类型',
    field: 'tradeType',
  },
  {
    headerName: '交易品种代码',
    field: 'tradeVarietyCode',
    minWidth: 120,
  },
  {
    headerName: '交易品种',
    field: 'tradeVariety',
    minWidth: 120,
  },
  {
    headerName: '债券名称',
    field: 'bondName',
    minWidth: 150,
  },
  {
    headerName: '结算日期',
    field: 'settlementDate',
    minWidth: 120,
  },
  {
    headerName: '结算方式',
    field: 'settlementMethod',
    minWidth: 120,
  },
  {
    headerName: '结算金额',
    field: 'settlementAmount',
    type: 'numericColumn',
    valueFormatter: (params: any) => params.value?.toLocaleString() || '0',
  },
  {
    headerName: '用途',
    field: 'purpose',
  },
];

// 详情单元格渲染器参数配置
const detailCellRendererParams = computed(() => ({
  detailGridOptions: {
    columnDefs: level2ColumnDefs,
    defaultColDef: {
      ...defaultColDef,
      suppressSizeToFit: false,
    },
    masterDetail: true,
    detailRowAutoHeight: true,
    suppressCellFocus: true,
    groupDefaultExpanded: -1,
    onGridReady: (params: any) => {
      gridInstances.value.add(params.api);
    },
    onSelectionChanged: updateSelectionCounts,
    onRowDoubleClicked: onRowDoubleClicked,
    detailCellRendererParams: {
      detailGridOptions: {
        columnDefs: level3ColumnDefs,
        defaultColDef: {
          ...defaultColDef,
          suppressSizeToFit: false,
        },
        masterDetail: true,
        detailRowAutoHeight: true,
        suppressCellFocus: true,
        groupDefaultExpanded: -1,
        onGridReady: (params: any) => {
          gridInstances.value.add(params.api);
        },
        onSelectionChanged: updateSelectionCounts,
        onRowDoubleClicked: onRowDoubleClicked,
        detailCellRendererParams: {
          detailGridOptions: {
            columnDefs: level4ColumnDefs,
            defaultColDef: {
              ...defaultColDef,
              suppressSizeToFit: false,
            },
            detailRowAutoHeight: true,
            suppressCellFocus: true,
            onGridReady: (params: any) => {
              gridInstances.value.add(params.api);
            },
            onSelectionChanged: updateSelectionCounts,
          },
          getDetailRowData: (params: any) => {
            params.successCallback(params.data.children || []);
          },
        },
      },
      getDetailRowData: (params: any) => {
        params.successCallback(params.data.children || []);
      },
    },
  },
  getDetailRowData: (params: any) => {
    params.successCallback(params.data.children || []);
  },
}));

// 计算总数量
const calculateTotalCount = (data: any[]): number => {
  let count = 0;

  const countRows = (items: any[]) => {
    items.forEach(item => {
      count++;
      if (item.children) {
        item.children.forEach((custody: any) => {
          count++;
          if (custody.children) {
            custody.children.forEach((transfer: any) => {
              count++;
              if (transfer.children) {
                count += transfer.children.length;
              }
            });
          }
        });
      }
    });
  };

  countRows(data);
  return count;
};

// 计算成交单总数量
const calculateTradeOrderTotalCount = (data: any[]): number => {
  let count = 0;
  data.forEach(fund => {
    fund.children?.forEach((custody: any) => {
      custody.children?.forEach((transfer: any) => {
        count += transfer.children?.length || 0;
      });
    });
  });
  return count;
};

// 更新选择统计
const updateSelectionCounts = () => {
  let totalSelected = 0;
  let tradeOrderSelected = 0;

  // 统计所有层级的选中数量，使用nodeType进行精确识别
  const countSelected = (items: any[]) => {
    items.forEach(item => {
      if (item.selected) {
        totalSelected++;
        // 如果是成交单节点，同时计入成交单统计
        if (item.nodeType === NodeType.TRADE_ORDER) {
          tradeOrderSelected++;
        }
      }
      if (item.children) {
        countSelected(item.children);
      }
    });
  };

  countSelected(fundData);
  selectedCount.value = totalSelected;
  tradeOrderSelectedCount.value = tradeOrderSelected;
};

// 选择变化事件处理
const onSelectionChanged = () => {
  updateSelectionCounts();
};

// 网格准备就绪事件处理
const onGridReady = (params: any) => {
  params.api.sizeColumnsToFit();
};

// 双击行切换展开/收起状态
const onRowDoubleClicked = (event: any) => {
  const node = event.node;
  if (node && node.master) {
    // 切换展开状态
    node.setExpanded(!node.expanded);
  }
};

// 动态计算操作面板高度
const updateOperationPanelHeight = () => {
  if (operationPanelRef.value?.$el) {
    const height = operationPanelRef.value.$el.offsetHeight;
    operationPanelHeight.value = height;
  }
};

// 全局刷新处理
const handleRefreshAllGrids = () => {
  console.log('=== Global checkbox refresh triggered ===');
  console.log('Grid instances count:', gridInstances.value.size);

  // 只刷新主网格的复选框列
  if (gridRef.value?.api) {
    console.log('Refreshing main grid checkboxes...');
    gridRef.value.api.refreshCells({
      columns: ['selected'],
      force: true
    });
  }

  // 只刷新所有子网格的复选框列
  let refreshCount = 0;
  gridInstances.value.forEach(gridApi => {
    if (gridApi && gridApi.refreshCells) {
      console.log(`Refreshing sub-grid ${refreshCount} checkboxes...`);
      gridApi.refreshCells({
        columns: ['selected'],
        force: true
      });
      refreshCount++;
    }
  });

  console.log(`Refreshed checkboxes in ${refreshCount} sub-grids`);
};

onMounted(() => {
  // 计算总数量
  totalCount.value = calculateTotalCount(fundData);
  tradeOrderTotalCount.value = calculateTradeOrderTotalCount(fundData);

  // 初始化操作面板高度
  setTimeout(() => {
    updateOperationPanelHeight();
  }, 100);

  // 监听窗口大小变化
  window.addEventListener('resize', updateOperationPanelHeight);

  // 使用 ResizeObserver 监听操作面板大小变化
  const resizeObserver = new ResizeObserver(updateOperationPanelHeight);
  if (operationPanelRef.value?.$el) {
    resizeObserver.observe(operationPanelRef.value.$el);
  }

  // 添加全局刷新监听器
  window.addEventListener('refreshAllGrids', handleRefreshAllGrids);

  // 清理函数
  onUnmounted(() => {
    window.removeEventListener('resize', updateOperationPanelHeight);
    window.removeEventListener('refreshAllGrids', handleRefreshAllGrids);
    resizeObserver.disconnect();
  });
});
</script>

<style scoped>
.fund-clearing-workstation {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
}

.header {
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #d9d9d9;
  padding: 16px 24px;
}

.header h1 {
  font-size: 24px;
  font-weight: 600;
  color: #262626;
  margin: 0 0 4px 0;
}

.header p {
  font-size: 14px;
  color: #8c8c8c;
  margin: 0;
}

.main-content {
  flex: 1;
  overflow: hidden;
  background: white;
}

.grid-container {
  height: 100%;
}
</style>