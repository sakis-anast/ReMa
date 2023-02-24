const LdiModal = ({ open, onClose }) => {
    if (!open) return null;
    return (
      <div className="modalOverlay">
        <div className="modalContainer">
          <a className="modalBtn" onClick={onClose}>
            X
          </a>
  
          <h2 class="title"> Ldi</h2>
          <div>
          Country Germany
Region BERLIN
City Berlin
Website www.ldi-berlin.de
LDI is a private educational institute, located in Berlin. It concentrates on European educational projects and activities in
the areas of vocational training and education, adult education, and labor. LDI aims are to initiate European exchange
within these fields, to integrate into educational processes gender & diversity as concepts for more equal chances and
acknowledgment, and to bring innovative approaches with European dimensions into education and labor.
Services include the arrangement of work-based training and observatory technical visits in Europe and in Berlin. LDI
offers to counsel to vocational schools, colleges, universities, and enterprises, who are interested in offering their
trainees, apprentices, or employees a work-related exchange abroad in order to deepen their professional knowledge and
skills. It also offers services for evaluation and assessments of training programs, educational projects, and events.
          </div>
        </div>
      </div>
    );
  };
  
  export default LdiModal;