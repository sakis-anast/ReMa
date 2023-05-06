import styled from 'styled-components';

const MetalaxisModal = ({ open, onClose }) => {
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

        {/* <h2 class="title"> Metalaxis sro</h2> */}
        <Div>
        <span>Metalaxis s.r.o.</span>
          <br></br>
          Country: Brno , Czech Republic
          <br></br>
          Metalaxis s.r.o. is a specialized management consulting firm that
          helps organizations and enterprises grow remotely. Metalaxis s.r.o.
          main focus is to facilitate the transition and transformation of
          enterprises and organizations to the new digital era providing them
          the appropriate training, guidance and IT tools required to succeed.
          <br />
          Services include:
          <ul className="partnerslist">
            <li>Remote management consulting</li>
            <li>Virtual project management</li>
            <li>Agile team coaching</li>
            <li>Transition and transformation project management</li>
            <li>Knowledge management and workflow management </li>
            <li>Remote team design and management</li>
            <li>Business process design</li>
          </ul>
          Metalaxis s.r.o aims to utilize and repackage the best practices and
          management approaches used by the cutting-edge technology leading
          corporations and institutes in order to serve traditional SME’s and
          organizations so they can effectively adapt to the new demands of the
          global digital markets.
        </Div>
      </div>
    </div>
  );
};

export default MetalaxisModal;
