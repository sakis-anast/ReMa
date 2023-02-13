import React from 'react';

export const RemoteOnly = React.forwardRef((props, ref) => {
    return (
      <div className='remote' ref={ref}>Remote only</div>
    );
  });