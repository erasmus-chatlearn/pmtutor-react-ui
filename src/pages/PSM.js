import "./progressPages.css";
import Header from "../components/Header";
import { BiArrowBack } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const PSM = () => {
  document.documentElement.style.setProperty('--window-width', `${window.innerWidth}px`); //enables the use of the current viewport width in the CSS file
  document.documentElement.style.setProperty('--window-height', `${window.innerHeight}px`); //enables the use of the current viewport height in the CSS file

  const navigate = useNavigate();

  //with this function user is able to get back to progress page
  const handleClick = () => {
    navigate('/Progress');
  };

    return (
      <div className="moreprogress">
      <Header />
      <div className="content">
        <h2 style={{textAlign: "left"}}><BiArrowBack style={{ zIndex: 1000, cursor: 'pointer'}} onClick={handleClick}/> &nbsp;&nbsp;Project Scope Management</h2>
        <p>In this section you will learn to:</p>
        <ul>
              <li>Describe the principles and concept of earned value method</li>
              <li>
                Calculate project performance indexes using earned value method
              </li>
              <li>
                Apply earned value method to compare project progress against
                baseline budget and schedule
              </li>
              <li>
                Estimate project’s total cost and schedule using earned value method
              </li>
            </ul>
      <div className="exercises">
      <br />
      <hr style={{borderTop: "1px solid black"}}/>

        <h4 style={{paddingRight:"15%"}}>Project scope management fundamentals <div style={{position:"absolute", left: "93%"}}><ImCheckmark style={{fontSize:"32px", color: "lightgrey"}}/></div></h4>
        <p style={{paddingRight:"15%"}}>At the end of this exercise, you will be able to know the main definition of scope management, the artifacts and tools used to manage scope, and  the main problems affecting project scope management.</p>
        <hr style={{borderTop: "1px solid black"}}/>
        
        

      </div>
      </div>
    </div>
    );
};

export default PSM;