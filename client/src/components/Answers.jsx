import {  useNavigate } from "react-router-dom";
import React , {useState , useEffect , useRef, useCallback } from "react";
import { useReactToPrint } from 'react-to-print';
import axios from "axios";
import {RemoteOnly} from "./RemoteOnly";
import {RemoteFirst} from "./RemoteFirst";
import {RemoteAllowed} from "./RemoteAllowed";
import {Hybrid} from "./Hybrid";
import {Physical} from "./Physical";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash , faDownload  } from "@fortawesome/free-solid-svg-icons";
import "../style/Style.scss"

function Answers({loggedIn , answers,user , setAnswers }) {
  const navigate = useNavigate();
  useEffect(() => {
    if(!loggedIn){
      navigate("/");
    }else{
      getAnswers() 
    }
  },[]);

  async function getAnswers() {
    await axios
    .post("http://localhost:3636/survey/get", { owner: user._id })
    .then(({ data }) => {
      setAnswers(data);
      console.log(data)

      });
  }
  async function  remove(id){
await axios.delete("http://localhost:3636/survey/"+id)
getAnswers()
}
const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);
  return [state, toggle]
};


const [toggle, setToggle] = useToggle();
const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
    return (
      <>
      <div className="dis-ans">
        <button 
onClick={setToggle}      >
     {!toggle ? 'Show answers' : 'Hide answers'}
   </button>   
   </div>
   <div className="grid-answers">
      
     
      {answers &&
            answers.map((answers) => {
              return ( < div className="answers" key={answers._id}> 
              <h5>
        Created At: {answers.createdAt}

       </h5>
      {toggle &&  <div>
         <div>
         Industry of the organization : {answers.industry}
       </div>
       <div>
       Location of the organization : {answers.location}
       </div>
       <div>
       Staff number of the organization : {answers.size}
       </div>
       <div>
         Current structure: {answers.currentStructure}
       </div>
       <div>
         Optimal structure : {answers.bestStructure}
       </div>
       <h3>
       How would you characterize your organization in terms of its Cultural Readiness for Remote Work?
       </h3>
       <div>
       Transparency of management/ownership with their team: {answers.q1}
       </div>
       <div>
       Environment of Trust: {answers.q2}
       </div>
       <div>
       Transparency in communication and documentation: {answers.q3}
       </div>
       <div>
       Willingness of Management/ownership to gather feedback from the remote workers regarding their needs : {answers.q4}
       </div>
       <div>
       Documentation of company processes: {answers.q5}
       </div>
       <h3>
       How would you characterize your organization in terms of its Technical Readiness for Remote Work?
       </h3>
       <div>
       Digital communication tools : {answers.q6}
       </div>
       <div>
       Secure access of sensitive information (e.g. VPN) : {answers.q7}
       </div>
       <div>
       Remote IT infrastructure to enable remote work (IT protocols/tools/laptops) : {answers.q8}
       </div>
       <h4>
       Have you created documented procedures about remote working in your company? : {answers.q9}
       </h4>
       <h4>
       Do you use any project management platforms for remote working in your company? : {answers.q10}
       </h4>
       <div>
       How would you equip and educate your team members?: {answers.comments}
       </div>

       </div>}

      

       <div>
        
       Action Plan <a onClick={handlePrint}>   <FontAwesomeIcon className="download" icon={faDownload} /></a>
 
      <div className="hid">
      {answers.result > 16 &&
      < RemoteOnly  ref={componentRef} />
      }
      {answers.result > 12 && answers.result <=16 &&
     < RemoteFirst ref={componentRef} />
      }
      {answers.result >8 && answers.result <=12 &&
      < RemoteAllowed ref={componentRef} />
      }
      {answers.result > 4 && answers.result <=8 &&
< Hybrid ref={componentRef} />      
      }
       {answers.result <= 4 &&
      < Physical ref={componentRef} />
      }
      </div>
       </div>
       <a onClick={() => {
                          remove(answers._id);
                        }}>  <FontAwesomeIcon className="trash" icon={faTrash} /></a>
       </ div> );
            })}
            </div>
      </>
    );
  }
  
  export default Answers;