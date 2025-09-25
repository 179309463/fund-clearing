<template>
  <a-tag :color="getStatusColor(status, type)">
    {{ status }}
  </a-tag>
</template>

<script setup lang="ts">
interface Props {
  status: string;
  type: 'clearing' | 'application' | 'reminder' | 'progress' | 'instruction' | 'valid' | 'settlement';
}

const props = defineProps<Props>();

const getStatusColor = (status: string, type: string) => {
  switch (type) {
    case 'clearing':
      return status === '已开启' ? 'green' :
             status === '已生成' ? 'blue' :
             'default';
    
    case 'application':
      return status === '已生成' ? 'green' :
             status === '未生成' ? 'orange' :
             'default';
    
    case 'reminder':
      return status === '未办' ? 'red' :
             status === '已办' ? 'green' :
             'default';
    
    case 'progress':
      return status === '进行中' ? 'blue' :
             status === '已完成' ? 'green' :
             status === '超时' ? 'red' :
             'default';
    
    case 'instruction':
      return status === '已生成' ? 'green' :
             status === '未生成' ? 'orange' :
             'default';
    
    case 'valid':
      return status === '正常' ? 'green' :
             status === '异常' ? 'red' :
             'default';
    
    case 'settlement':
      return status === '成功' ? 'green' :
             status === '失败' ? 'red' :
             status === '处理中' ? 'blue' :
             'default';
    
    default:
      return 'default';
  }
};
</script>