import "./progressPages.css";
import Header from "../components/Header";
import { BiArrowBack } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const RM = () => {
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
        <h2 style={{textAlign: "left"}}><BiArrowBack style={{ zIndex: 1000, cursor: 'pointer'}} onClick={handleClick}/> &nbsp;&nbsp;Risk Management</h2>
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
      
        <h4 style={{paddingRight:"15%"}}>Basics <div style={{position:"absolute", left: "93%"}}><ImCheckmark style={{fontSize:"32px", color: "lightgrey"}}/></div></h4>
        <p style={{paddingRight:"15%"}}>After this exercise, you will be able to describe the principles and concept of risk management.</p>
        <hr style={{borderTop: "1px solid black"}}/>
      
        <h4 style={{paddingRight:"15%"}}>Basic Concepts and Calculations <div style={{position:"absolute", left: "93%"}}><ImCheckmark style={{fontSize:"32px", color: "lightgrey"}}/></div></h4>
        <p style={{paddingRight:"15%"}}>After this exercise, you will be able to do simple calculations within the topic of risk management.</p>
        <hr style={{borderTop: "1px solid black"}}/>

      </div>
      </div>
    </div>
    );
};

export default RM;