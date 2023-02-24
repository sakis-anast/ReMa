const EcteModal = ({ open, onClose }) => {
    if (!open) return null;
    return (
      <div className="modalOverlay">
        <div className="modalContainer">
          <a className="modalBtn" onClick={onClose}>
            X
          </a>
  
          <h2 class="title"> ECTE</h2>
          <div>
          EUROPEAN CENTER IN TRAINING FOR EMPLOYMENT
        Greece
Region Κρήτη (Kriti)
City RETHYMNO
Website www.ecte.gr
upskilling and/or re-skilling of labor, to cover skills gap, according to the market needs, which integrate innovation and a
European dimension. More specifically the spectrum of ECTE activities involve:
• Implementation of formal training programs (physical presence).
• Development of curricula and training courses, in line with ECVET and EQAVET procedures, adapted to market needs
(micro-credential approach).
• Elaboration of researches related to the skills needs of the labor market.
• Offering courses based in both face-to-face and e-learning in a ubiquitous form.
• Development of emerging professional profiles and official certification of the emerging qualifications according to ISO
27024 norms.
• Hosting of international students in Summer schools as well as for work-based learning.
         
          </div>
        </div>
      </div>
    );
  };
  
  export default EcteModal;