import React, { useState, useEffect } from 'react';
import { IHeaderParams } from 'ag-grid-community';

interface CustomCheckboxHeaderRendererProps extends IHeaderParams {
  api: any;
  columnApi: any;
}

const CustomCheckboxHeaderRenderer: React.FC<CustomCheckboxHeaderRendererProps> = ({ api }) => {
  const [checkboxState, setCheckboxState] = useState<'none' | 'some' | 'all'>('none');

  // 计算当前表格的选择状态
  const calculateSelectionState = () => {
    const allRowNodes: any[] = [];
    api.forEachNode((node: any) => {
      if (node.data) {
        allRowNodes.push(node);
      }
    });

    if (allRowNodes.length === 0) {
      return 'none';
    }

    const selectedCount = allRowNodes.filter(node => node.data?.selected).length;
    
    if (selectedCount === 0) {
      return 'none';
    } else if (selectedCount === allRowNodes.length) {
      return 'all';
    } else {
      return 'some';
    }
  };

  // 更新选择状态
  const updateSelectionState = () => {
    const newState = calculateSelectionState();
    setCheckboxState(newState);
  };

  // 监听数据变化
  useEffect(() => {
    const onSelectionChanged = () => {
      updateSelectionState();
    };

    const onModelUpdated = () => {
      updateSelectionState();
    };

    api.addEventListener('selectionChanged', onSelectionChanged);
    api.addEventListener('modelUpdated', onModelUpdated);

    // 初始化状态
    updateSelectionState();

    return () => {
      api.removeEventListener('selectionChanged', onSelectionChanged);
      api.removeEventListener('modelUpdated', onModelUpdated);
    };
  }, [api]);

  // 处理表头复选框点击
  const handleHeaderCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    
    // 更新所有行的选择状态
    api.forEachNode((node: any) => {
      if (node.data) {
        node.data.selected = isChecked;
      }
    });

    // 刷新表格显示
    api.refreshCells();
    
    // 触发选择变化事件
    setTimeout(() => {
      api.dispatchEvent({ type: 'selectionChanged' });
    }, 0);
  };

  return (
    <div 
      className="w-full h-full flex items-center justify-center"
      style={{ 
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '32px'
      }}
    >
      <input
        type="checkbox"
        checked={checkboxState === 'all'}
        ref={(input) => {
          if (input) {
            input.indeterminate = checkboxState === 'some';
          }
        }}
        onChange={handleHeaderCheckboxChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        style={{ margin: 0 }}
        title={
          checkboxState === 'all' ? '取消全选' : 
          checkboxState === 'some' ? '全选' : 
          '全选'
        }
      />
    </div>
  );
};

export default CustomCheckboxHeaderRenderer;