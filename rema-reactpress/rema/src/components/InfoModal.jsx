import "../style/Partners.scss";
import styled from 'styled-components';

const InfoModal = ({ open, onClose }) => {
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

        <Div >
        Remote Management for SMEs (Re.Ma) is a project aimed at equipping managers and professionals involved in the management of small and medium-sized enterprises (SMEs) with a set of relevant skills for adopting remote management tools and strategies. The outbreak of the coronavirus pandemic has severely affected the global economy, with SMEs being the major victims. To respond to the challenges brought about by the pandemic, most enterprises have introduced remote work to their employees. However, the training system is not prepared for the challenges and considerations of managing remote teams, leaving many managers ill-equipped to handle this new form of work.

The objective of the Re.Ma project is to promote the acquisition of competencies of SMEs managers in the adoption of remote management strategies and the use of related tools.
        </Div >
      </div>
    </div>
  );
};

export default InfoModal;
