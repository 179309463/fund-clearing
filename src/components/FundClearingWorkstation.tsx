import React, { useState, useCallback, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridApi, GridReadyEvent, SelectionChangedEvent, IDetailCellRendererParams, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { MasterDetailModule } from 'ag-grid-enterprise';

import { fundData } from '../data/fundData';
import OperationPanel from './OperationPanel';
import StatusBadge from './StatusBadge';

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule, MasterDetailModule]);

const FundClearingWorkstation: React.FC = () => {
  const gridRef = useRef<AgGridReact>(null);
  const operationPanelRef = useRef<HTMLDivElement>(null);
  const [operationPanelHeight, setOperationPanelHeight] = useState(160);
  const [selectedCount, setSelectedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [statusFilters, setStatusFilters] = useState({
    bondDistribution: false,
    fundManagerUnconfirmed: false,
    multipleReminders: false,
    noReminders: false,
    t0TradeUnsettled: false,
    accountingTimeout: false,
    custodyTimeout: false,
    awaitingUnlocking: false,
  });

  // 动态计算操作面板高度
  useEffect(() => {
    const updateOperationPanelHeight = () => {
      if (operationPanelRef.current) {
        const height = operationPanelRef.current.offsetHeight;
        setOperationPanelHeight(height);
      }
    };

    // 初始计算
    updateOperationPanelHeight();

    // 监听窗口大小变化
    window.addEventListener('resize', updateOperationPanelHeight);

    // 使用 ResizeObserver 监听操作面板大小变化
    const resizeObserver = new ResizeObserver(updateOperationPanelHeight);
    if (operationPanelRef.current) {
      resizeObserver.observe(operationPanelRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateOperationPanelHeight);
      resizeObserver.disconnect();
    };
  }, []);
  const calculateTotalCount = useCallback((data: any[]): number => {
    let count = 0;
    
    const countRows = (items: any[]) => {
      items.forEach(item => {
        count++;
        if (item.custodyInstitutions) {
          item.custodyInstitutions.forEach((custody: any) => {
            count++;
            if (custody.transferInstructions) {
              custody.transferInstructions.forEach((transfer: any) => {
                count++;
                if (transfer.tradeOrders) {
                  count += transfer.tradeOrders.length;
                }
              });
            }
          });
        }
      });
    };
    
    countRows(data);
    return count;
  }, []);

  useEffect(() => {
    const total = calculateTotalCount(fundData);
    setTotalCount(total);
  }, [calculateTotalCount]);

  const onSelectionChanged = useCallback((event: SelectionChangedEvent) => {
    const selectedNodes = event.api.getSelectedNodes();
    setSelectedCount(selectedNodes.length);
  }, []);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    params.api.sizeColumnsToFit();
  }, []);

  const defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    flex: 1,
    minWidth: 100,
  };

  const columnDefs: ColDef[] = [
    {
      headerName: '',
      field: 'expand',
      cellRenderer: 'agGroupCellRenderer',
      width: 54,
      maxWidth: 54,
      minWidth: 54,
      resizable: false,
      suppressSizeToFit: true,
      pinned: 'left',
    },
    {
      headerName: '',
      field: 'selected',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 54,
      maxWidth: 54,
      minWidth: 54,
      resizable: false,
      suppressSizeToFit: true,
      pinned: 'left',
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
      valueFormatter: (params) => params.value?.toLocaleString() || '0',
    },
    {
      headerName: '日终活期银行存款',
      field: 'endDayBankDeposit',
      type: 'numericColumn',
      valueFormatter: (params) => params.value?.toLocaleString() || '0',
    },
    {
      headerName: '日终活期银行存款(含询价结果未成)',
      field: 'endDayBankDepositWithInquiry',
      type: 'numericColumn',
      valueFormatter: (params) => params.value?.toLocaleString() || '0',
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
      valueFormatter: (params) => params.value?.toLocaleString() || '0',
      cellStyle: { color: '#ef4444', fontWeight: 'bold' },
      minWidth: 150,
    },
  ];

  const level2ColumnDefs: ColDef[] = [
    {
      headerName: '',
      field: 'expand',
      cellRenderer: 'agGroupCellRenderer',
      width: 54,
      maxWidth: 54,
      minWidth: 54,
      resizable: false,
      suppressSizeToFit: true,
      pinned: 'left',
    },
    {
      headerName: '',
      field: 'selected',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 54,
      maxWidth: 54,
      minWidth: 54,
      resizable: false,
      suppressSizeToFit: true,
      pinned: 'left',
    },
    {
      headerName: '托管机构',
      field: 'custodyInstitution',
      minWidth: 262,
      pinned: 'left',
    },
    {
      headerName: '自动清算状态',
      field: 'autoClearingStatus',
      cellRenderer: (params: any) => <StatusBadge status={params.value} type="clearing" />,
      minWidth: 120,
    },
    {
      headerName: '划款申请状态',
      field: 'transferApplicationStatus',
      cellRenderer: (params: any) => <StatusBadge status={params.value} type="application" />,
      minWidth: 120,
    },
    {
      headerName: '未办提醒',
      field: 'pendingReminder',
      cellRenderer: (params: any) => <StatusBadge status={params.value} type="reminder" />,
    },
    {
      headerName: '核算进度',
      field: 'accountingProgress',
      cellRenderer: (params: any) => <StatusBadge status={params.value} type="progress" />,
    },
    {
      headerName: '托管行进度',
      field: 'custodyProgress',
      cellRenderer: (params: any) => <StatusBadge status={params.value} type="progress" />,
    },
    {
      headerName: '账户余额',
      field: 'accountBalance',
      type: 'numericColumn',
      valueFormatter: (params) => params.value?.toLocaleString() || '0',
    },
    {
      headerName: '有效结算余额',
      field: 'effectiveSettlementBalance',
      type: 'numericColumn',
      valueFormatter: (params) => params.value?.toLocaleString() || '0',
    },
    {
      headerName: '统计有效已生成划款金额',
      field: 'generatedTransferAmount',
      type: 'numericColumn',
      valueFormatter: (params) => params.value?.toLocaleString() || '0',
      minWidth: 180,
    },
    {
      headerName: '统计有效未生成划款金额',
      field: 'ungeneratedTransferAmount',
      type: 'numericColumn',
      valueFormatter: (params) => params.value?.toLocaleString() || '0',
      minWidth: 180,
    },
  ];

  const level3ColumnDefs: ColDef[] = [
    {
      headerName: '',
      field: 'expand',
      cellRenderer: 'agGroupCellRenderer',
      width: 54,
      maxWidth: 54,
      minWidth: 54,
      resizable: false,
      suppressSizeToFit: true,
      pinned: 'left',
    },
    {
      headerName: '',
      field: 'selected',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 54,
      maxWidth: 54,
      minWidth: 54,
      resizable: false,
      suppressSizeToFit: true,
      pinned: 'left',
    },
    {
      headerName: '划款指令编号',
      field: 'transferInstructionNumber',
      minWidth: 230,
      pinned: 'left',
    },
    {
      headerName: '划款指令金额',
      field: 'transferInstructionAmount',
      type: 'numericColumn',
      valueFormatter: (params) => params.value?.toLocaleString() || '0',
    },
    {
      headerName: '划款进度',
      field: 'transferProgress',
      cellRenderer: (params: any) => <StatusBadge status={params.value} type="progress" />,
    },
  ];

  const level4ColumnDefs: ColDef[] = [
    {
      headerName: '',
      field: 'indent',
      width: 54,
      maxWidth: 54,
      minWidth: 54,
      resizable: false,
      suppressSizeToFit: true,
      pinned: 'left',
      cellRenderer: () => '',
    },
    {
      headerName: '',
      field: 'selected',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 54,
      maxWidth: 54,
      minWidth: 54,
      resizable: false,
      suppressSizeToFit: true,
      pinned: 'left',
    },
    {
      headerName: '成交单编号',
      field: 'tradeOrderNumber',
      minWidth: 150,
      pinned: 'left',
    },
    {
      headerName: '指令状态',
      field: 'instructionStatus',
      cellRenderer: (params: any) => <StatusBadge status={params.value} type="instruction" />,
    },
    {
      headerName: '有效状态',
      field: 'validStatus',
      cellRenderer: (params: any) => <StatusBadge status={params.value} type="valid" />,
    },
    {
      headerName: '资金结算状态',
      field: 'fundSettlementStatus',
      cellRenderer: (params: any) => <StatusBadge status={params.value} type="settlement" />,
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
      valueFormatter: (params) => params.value?.toLocaleString() || '0',
    },
    {
      headerName: '用途',
      field: 'purpose',
    },
  ];

  const detailCellRendererParams: IDetailCellRendererParams = {
    detailGridOptions: {
      columnDefs: level2ColumnDefs,
      defaultColDef: {
        ...defaultColDef,
        suppressSizeToFit: false,
      },
      masterDetail: true,
      detailRowAutoHeight: true,
      rowSelection: 'multiple',
      suppressRowClickSelection: true,
      suppressCellFocus: true,
      detailCellRendererParams: {
        detailGridOptions: {
          columnDefs: level3ColumnDefs,
          defaultColDef: {
            ...defaultColDef,
            suppressSizeToFit: false,
          },
          masterDetail: true,
          detailRowAutoHeight: true,
          rowSelection: 'multiple',
          suppressRowClickSelection: true,
          suppressCellFocus: true,
          detailCellRendererParams: {
            detailGridOptions: {
              columnDefs: level4ColumnDefs,
              defaultColDef: {
                ...defaultColDef,
                suppressSizeToFit: false,
              },
              rowSelection: 'multiple',
              suppressRowClickSelection: true,
              detailRowAutoHeight: true,
              suppressCellFocus: true,
            },
            getDetailRowData: (params: any) => {
              params.successCallback(params.data.tradeOrders || []);
            },
          },
        },
        getDetailRowData: (params: any) => {
          params.successCallback(params.data.transferInstructions || []);
        },
      },
    },
    getDetailRowData: (params: any) => {
      params.successCallback(params.data.custodyInstitutions || []);
    },
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-6 py-4">
        <h1 className="text-2xl font-semibold text-gray-900">基金清算工作台</h1>
        <p className="text-sm text-gray-600 mt-1">Fund Clearing Workstation - Multi-Level Nested Grid</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="bg-white h-full" style={{ paddingBottom: `${operationPanelHeight}px` }}>
          <div className="ag-theme-alpine h-full">
            <AgGridReact
              ref={gridRef}
              rowData={fundData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              masterDetail={true}
              detailRowAutoHeight={true}
              detailCellRendererParams={detailCellRendererParams}
              rowSelection="multiple"
              suppressRowClickSelection={true}
              onGridReady={onGridReady}
              onSelectionChanged={onSelectionChanged}
              groupDefaultExpanded={0}
              animateRows={false}
              enableCellTextSelection={true}
             suppressCellFocus={true}
            />
          </div>
        </div>
      </div>

      {/* Bottom Operation Panel */}
      <OperationPanel
        ref={operationPanelRef}
        selectedCount={selectedCount}
        totalCount={totalCount}
        statusFilters={statusFilters}
        onStatusFilterChange={setStatusFilters}
      />
    </div>
  );
};

export default FundClearingWorkstation;