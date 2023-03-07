const MetalaxisModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modalOverlay">
      <div className="modalContainer">
        <a className="modalBtn" onClick={onClose}>
          X
        </a>

        <h2 class="title"> Metalaxis sro</h2>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default MetalaxisModal;
