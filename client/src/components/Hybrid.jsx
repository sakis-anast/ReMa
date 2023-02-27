import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import "../style/Answers.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faDownload  } from "@fortawesome/free-solid-svg-icons";
const Remote = React.forwardRef((props, ref) => {
    return (
      <div className='remote' ref={ref}>hybrid</div>
    );
  });
const Hybrid = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div className='hid'>
      <Remote ref={componentRef}  />
      </div>
      Action Plan <a onClick={handlePrint}>   <FontAwesomeIcon className="download" icon={faDownload} /></a>
    </div>
  );
};
export default Hybrid;