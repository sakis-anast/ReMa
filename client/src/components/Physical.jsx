import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "../style/Answers.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const Remote = React.forwardRef((props, ref) => {
  return (
    <div className="remote" ref={ref}>
      {" "}
      <div>
        <h3>Physical</h3>
        The ideal approach will vary from company to company. Here’s how to make
        the transition successful:{" "}
      </div>
      <h6>MAKE THE EXECUTIVE TEAM REMOTE </h6>
      <p>
        Starting at the top of the organizational chart is the quickest way to
        send the clearest signal that remote is the future. It will also help
        leadership understand the remote experience, ensuring that remote-first
        practices are taken seriously. ESTABLISH A REMOTE INFRASTRUCTURE Ask
        yourself if your company could function if every team member chose to
        work from their home tomorrow. What gaps would you notice? What areas of
        communication could fail? This will help you identify the tools and
        practices you’ll need.{" "}
      </p>
      <h6> DOCUMENT THE CULTURE </h6>
      <p>
        If you do not have a living, evolving company handbook, start one now.
        Consider each aspect of your company culture that is unwritten or
        implied, and document them. In a fully remote setting, there are no
        daily in-person interactions where cues are absorbed. It’s vital to over
        communicate in detailing values that company culture is built upon.{" "}
      </p>
      <h6> EQUIP, EDUCATE, AND EMPOWER THE TEAM </h6>
      <p>
        {" "}
        Remote work is liberating and empowering when done intentionally. But it
        can also be jarring and isolating for those who are not equipped to
        manage the change, or whose only “remote” experience has been during a
        global pandemic. Clear and proactive internal communication is essential
        to removing fear and instilling excitement about the increased autonomy.
      </p>
      <h6> CLOSE THE OFFICE </h6>
      <p>
        {" "}
        This is the clearest signal that you're all-in on remote, and leaders
        are serious about ensuring that no one is treated as an outsider.{" "}
      </p>
      <h6> EMBRACE ITERATION AND TRANSPARENCY IN TRANSITION</h6>
      <p>
        {" "}
        Expect bumps along the way. Communicate this proactively to team
        members, customers, and investors, and be completely transparent with
        your team throughout the transition. Implement the smallest viable
        change, solicit feedback, and tweak or revert if needed.
      </p>
      <h6>STRUCTURE THE COMPANY AS IF EVERY TEAM MEMBER IS REMOTE</h6>
      <p>
        {" "}
        If you intend to hire remotely but still maintain any physical office
        space, you must take added care to ensure that the usual downsides of
        hybrid remote (see page 4) are not tolerated.{" "}
      </p>
      <h6>WHAT NOT TO DO </h6>
      <p>
        Here are a few common pitfalls you’ll want to avoid as you’re
        incorporating remote work to your organization and culture:{" "}
      </p>
      <ul>
        <li>DO NOT assume that there are no resources available yet</li>
        <li>DO NOT replicate the in-office/colocated experience, remotely</li>
        <li>DO NOT transfer all in-person meetings to virtual </li>
        <li>DO NOT assume that everyone has access to an optimal workspace</li>
        <li>DO NOT assume that remote management is drastically different</li>
        <li>DO NOT assume that remote happens overnight</li>
        <li> DO NOT assume your existing values can remain static</li>
      </ul>
    </div>
  );
});
const Physical = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div className="hid">
        <Remote ref={componentRef} />
      </div>
      Action Plan{" "}
      <a onClick={handlePrint}>
        {" "}
        <FontAwesomeIcon className="download" icon={faDownload} />
      </a>
    </div>
  );
};
export default Physical;
