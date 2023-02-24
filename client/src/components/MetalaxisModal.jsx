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
          Metalaxis s.r.o. is a specialized management consulting firm that helps organizations and enterprises grow remotely.
Metalaxis s.r.o. main focus is to facilitate the transition and transformation of enterprises and organizations to the new
 digital era providing them the appropriate training, guidance and IT tools required to succeed.
Services include remote management consulting, virtual project management, agile team coaching, transition and
transformation project management, knowledge management, workflow management, remote team design and
 management and business process design.
 Metalaxis s.r.o aims to utilize and repackage the best practices and management approaches used by the cutting-edge
 technology leading corporations and institutes in order to serve traditional SME’s and organizations so they can
 effectively adapt to the new demands of the global digital markets.
          </div>
        </div>
      </div>
    );
  };
  
  export default MetalaxisModal;