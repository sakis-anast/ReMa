import styled from 'styled-components';

const EcteModal = ({ open, onClose }) => {
  if (!open) return null;
  const Div = styled.div`
  font-size: 20px;
  padding: 20px;
  width: 100%;
  max-width: 700px;
  margin: auto;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  
  @media (max-width: 650px) {
    font-size: 16px;
  }
  @media (max-width: 550px) {
    font-size: 14px;
  }
  @media (max-width: 450px) {
    font-size: 12px;
  }
  @media (max-width: 400px) {
    font-size: 11px;
  }
  @media (max-width: 350px) {
    font-size: 10px;
  }
  @media (max-width: 300px) {
    font-size: 9px;
  }
  @media (max-width: 250px) {
    font-size: 8px;
  }
`;
  return (
    <div className="modalOverlay">
      <div className="modalContainer">
        <a className="modalBtn" onClick={onClose}>
          X
        </a>

        {/* <h2 class="title"> EUROPEAN CENTER IN TRAINING FOR EMPLOYMENT</h2> */}
        <Div>
        <span>EUROPEAN CENTER IN TRAINING FOR EMPLOYMENT</span>
          <br></br>          Country: Rethymno, Greece <br></br>
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
        </Div>
      </div>
    </div>
  );
};

export default EcteModal;
