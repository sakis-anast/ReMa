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
          Country: Berlin, Germany
          <br ></br>
LDI is a private educational institute, located in Berlin. It concentrates on European educational projects and activities in
the areas of vocational training and education, adult education, and labor. LDI aims are to initiate European exchange
within these fields, to integrate into educational processes gender & diversity as concepts for more equal chances and
acknowledgment, and to bring innovative approaches with European dimensions into education and labor.
<br></br>
Services include: <br></br>
<ul className="partnerslist">
  <li>The arrangement of work-based training</li>
  <li>Observatory technical visits in Europe and in Berlin</li>
  <li>Evaluation and assessments of training programs, educational projects, and events</li>
  <li>Counsel to vocational schools, colleges, universities and enterprises Ldi also offers  their
trainees, apprentices, or employees a work-related exchange abroad in order to deepen their professional knowledge and
skills.</li>
 
</ul>

          </div>
        </div>
      </div>
    );
  };
  
  export default LdiModal;