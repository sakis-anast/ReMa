const EcteModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modalOverlay">
      <div className="modalContainer">
        <a className="modalBtn" onClick={onClose}>
          X
        </a>

        <h2 class="title"> EUROPEAN CENTER IN TRAINING FOR EMPLOYMENT</h2>
        <div>
          Country: Rethymno, Greece <br></br>
          ECTE offers upskilling and/or re-skilling of labor, to cover skills
          gap, according to the market needs, which integrate innovation and a
          European dimension. <br></br>
          More specifically the spectrum of ECTE activities involve:<br></br>
          <ul className="partnerslist">
            <li>
              Implementation of formal training programs (physical presence).
            </li>
            <li>
              Development of curricula and training courses, in line with ECVET
              and EQAVET procedures, adapted to market needs (micro-credential
              approach).
            </li>
            <li>
              Elaboration of researches related to the skills needs of the labor
              market.
            </li>
            <li>
              Offering courses based in both face-to-face and e-learning in a
              ubiquitous form.
            </li>
            <li>
              Development of emerging professional profiles and official
              certification of the emerging qualifications according to ISO
              27024 norms.
            </li>
            <li>
              Hosting of international students in Summer schools as well as for
              work-based learning.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EcteModal;
