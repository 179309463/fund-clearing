<template>
  <div class="operation-panel">
    <!-- Status Filters Row -->
    <div class="status-filters">
      <a-checkbox
        v-for="option in statusOptions"
        :key="option.key"
        v-model:checked="localStatusFilters[option.key]"
        @change="handleStatusFilterChange"
        class="status-checkbox"
      >
        {{ option.label }}
      </a-checkbox>
    </div>

    <!-- Operation Buttons Row -->
    <div class="operation-buttons">
      <!-- Left: Selected Count -->
      <div class="selected-count">
        <a-tag color="blue">
          已选：{{ tradeOrderSelectedCount }}/{{ tradeOrderTotalCount }}
        </a-tag>
      </div>

      <!-- Right: Operation Buttons -->
      <div class="buttons-group">
        <a-button
          v-for="button in operationButtons"
          :key="button.key"
          :type="button.variant === 'primary' ? 'primary' : 'default'"
          :disabled="selectedCount === 0 && button.variant === 'primary'"
          class="operation-button"
        >
          {{ button.label }}
        </a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { StatusFilters } from '../types/fundData';

interface Props {
  selectedCount: number;
  totalCount: number;
  tradeOrderSelectedCount?: number;
  tradeOrderTotalCount?: number;
  statusFilters: StatusFilters;
}

interface Emits {
  (e: 'update:statusFilters', filters: StatusFilters): void;
}

const props = withDefaults(defineProps<Props>(), {
  tradeOrderSelectedCount: 0,
  tradeOrderTotalCount: 0,
});

const emit = defineEmits<Emits>();

const localStatusFilters = ref<StatusFilters>({ ...props.statusFilters });

const statusOptions = [
  { key: 'bondDistribution', label: '有债券分销未发起' },
  { key: 'fundManagerUnconfirmed', label: '有基金经理未确认' },
  { key: 'multipleReminders', label: '含有多项未办提醒' },
  { key: 'noReminders', label: '无未办提醒' },
  { key: 't0TradeUnsettled', label: '有T+0交易未成交' },
  { key: 'accountingTimeout', label: '核算超时' },
  { key: 'custodyTimeout', label: '托管行超时' },
  { key: 'awaitingUnlocking', label: '待解券' },
] as const;

const operationButtons = [
  { key: 'accountingInitiate', label: '申请核算发起流程', variant: 'primary' },
  { key: 'accountingCancel', label: '申请核算撤销流程', variant: 'secondary' },
  { key: 'accountingManual', label: '申请核算手动流程', variant: 'secondary' },
  { key: 'accountingDept', label: '申请核算部流程', variant: 'secondary' },
  { key: 'noGeneration', label: '无需生成', variant: 'secondary' },
  { key: 'dvpTransfer', label: 'DVP互转', variant: 'secondary' },
  { key: 'autoClearing', label: '自动清算', variant: 'primary' },
  { key: 'securityDelivery', label: '证券交收', variant: 'secondary' },
  { key: 'setDelivery', label: '置为交收', variant: 'secondary' },
];

const handleStatusFilterChange = () => {
  emit('update:statusFilters', { ...localStatusFilters.value });
};

// 监听外部状态变化
watch(() => props.statusFilters, (newFilters) => {
  localStatusFilters.value = { ...newFilters };
}, { deep: true });
</script>

<style scoped>
.operation-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #d9d9d9;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.status-filters {
  padding: 12px 24px;
  border-bottom: 1px solid #f0f0f0;
  background: #fafafa;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.status-checkbox {
  color: #666;
  transition: color 0.2s;
}

.status-checkbox:hover {
  color: #1890ff;
}

.operation-buttons {
  padding: 16px 24px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.selected-count {
  display: flex;
  align-items: center;
}

.buttons-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.operation-button {
  transition: all 0.2s;
}
</style>