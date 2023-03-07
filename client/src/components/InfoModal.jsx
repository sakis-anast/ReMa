import "../style/Partners.scss";

const InfoModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modalOverlay">
      <div className="modalContainer">
        <a className="modalBtn" onClick={onClose}>
          X
        </a>
        <h2 class="title"> Why ReMa</h2>

        <div>
          The outbreak of the coronavirus pandemic (COVID-19) has severely
          affected the global economy. Major victims of the COVID-19 outbreak,
          as studies show, were small, and medium-sized enterprises (SMEs). One
          of the main response strategies for most of the enterprises was
          introducing Remote Work to their employees/businesses. While there are
          still no precise figures on the scale of teleworking during the COVID
          crisis, there are some early estimations that suggest a much larger
          prevalence than before the crisis. An ad hoc online survey from
          Eurofound (2020) estimated that close to 40% of those currently
          working in the EU began to telework full-time as a result of the
          pandemic. More specifically, according to the EU Joint Research Center
          analysis (jrc120945), the prevalence of remote work varied strongly
          across sectors and occupations and was already particularly high in
          knowledge- and ICT-intensive services. Business managers and leaders
          especially those of SMEs, have to deal with new challenges related to
          coordinating a team across multiple office locations and managing
          full-time remote workers. However, the training system is not prepared
          for the challenges and considerations of managing remote teams. The
          training market, however, has not yet caught up with these challenges
          as only 15% of remote employee managers have received specialized
          training (the “2020 State of Remote Work Report”.)
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
