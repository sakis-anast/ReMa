import React from 'react';

export const RemoteFirst = React.forwardRef((props, ref) => {
    return (
      <div className='remote' ref={ref}>RemoteFirst</div>
    );
  });