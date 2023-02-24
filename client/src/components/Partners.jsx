import "../style/Partners.scss"
import MetalaxisModal from "./MetalaxisModal";
import EcteModal from "./EcteModal";
import LdiModal from "./LdiModal";

import { useState } from 'react';

function Partners() {
  const metalaxis = require("../logos/metalaxis.png");
  const ldi = require("../logos/LDI_logo.JPG");
  const ecte = require("../logos/ECTE_logo_EN.jpg");
  const meeting = require("../logos/meeting.jpg");
  const [openMetalaxisModal, setOpenMetalaxisModal] = useState(false);
  const [openLdiModal, setOpenLdiModal] = useState(false);
  const [openEcteModal, setOpenEcteModal] = useState(false);

    return (
    <>
    <h2>Our Team</h2>
     <div className="partners-container">
     <div className="partner-logo">
<img src={metalaxis} alt="Metalxis Logo" onClick={() => {
              setOpenMetalaxisModal(true);
            }} />


             
</div>

<div className="partner-logo">
<img src={ldi} alt="Ldi Logo" onClick={() => {
              setOpenLdiModal(true);
            }} />


</div>

<div className="partner-logo">
<img src={ecte} alt="Ecte Logo" onClick={() => {
              setOpenEcteModal(true);
            }} />
</div>

</div>
<MetalaxisModal
        open={openMetalaxisModal}
        onClose={() => {
          setOpenMetalaxisModal(false);
        }}
      />
      <EcteModal
        open={openEcteModal}
        onClose={() => {
          setOpenEcteModal(false);
        }}
      />
      <LdiModal
        open={openLdiModal}
        onClose={() => {
          setOpenLdiModal(false);
        }}
      />
    </>

       
    
    );
  }
  
  export default Partners;


