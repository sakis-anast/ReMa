import React from 'react';

export const RemoteAllowed = React.forwardRef((props, ref) => {
    return (
      <div className='remote' ref={ref}>RemoteAllowed</div>
    );
  });