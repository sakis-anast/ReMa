import styled from 'styled-components';

const LdiModal = ({ open, onClose }) => {
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

        {/* <h2 class="title"> Ldi</h2> */}
        <Div>
          <span>Ldi</span>
          <br></br>
          Country: Berlin, Germany
          <br></br>
          LDI is a private educational institute, located in Berlin. It
          concentrates on European educational projects and activities in the
          areas of vocational training and education, adult education, and
          labor. LDI aims are to initiate European exchange within these fields,
          to integrate into educational processes gender & diversity as concepts
          for more equal chances and acknowledgment, and to bring innovative
          approaches with European dimensions into education and labor.
          <br></br>
          Services include: <br></br>
          <ul className="partnerslist">
            <li>The arrangement of work-based training</li>
            <li>Observatory technical visits in Europe and in Berlin</li>
            <li>
              Evaluation and assessments of training programs, educational
              projects, and events
            </li>
            <li>
              Counsel to vocational schools, colleges, universities and
              enterprises Ldi also offers their trainees, apprentices, or
              employees a work-related exchange abroad in order to deepen their
              professional knowledge and skills.
            </li>
          </ul>
        </Div>
      </div>
    </div>
  );
};

export default LdiModal;
