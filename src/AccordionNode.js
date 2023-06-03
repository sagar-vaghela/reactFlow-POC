import { Button } from '@material-tailwind/react';
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import Example from './TailwindAccordion';

export default memo(({ data, isConnectable }) => {
  return (
    <>
    <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Example />
      
    </>
  );
});