import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';

interface CustomCheckboxRendererProps extends ICellRendererParams {
  data: any;
  value: boolean;
  api: any;
  node: any;
}

const CustomCheckboxRenderer: React.FC<CustomCheckboxRendererProps> = ({ data, api, node }) => {
  const isChecked = data?.selected || false;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;
    if (data) {
      data.selected = newValue;
      
      // 刷新当前行
      if (node) {
        api.refreshCells({ rowNodes: [node] });
      }
      
      // 触发选择变化事件
      setTimeout(() => {
        api.dispatchEvent({ type: 'selectionChanged' });
      }, 0);
    }
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
        checked={isChecked}
        onChange={handleChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        style={{ margin: 0 }}
      />
    </div>
  );
};

export default CustomCheckboxRenderer;