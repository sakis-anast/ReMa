import React from 'react';

export const Hybrid = React.forwardRef((props, ref) => {
    return (
      <div className='remote' ref={ref}>Hybrid</div>
    );
  });