import "./progressPages.css";
import Header from "../components/Header";
import { BiArrowBack } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const SME = () => {
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
        <h2 style={{textAlign: "left"}}><BiArrowBack style={{ zIndex: 1000, cursor: 'pointer'}} onClick={handleClick}/> &nbsp;&nbsp;Stakeholder Management and Engagement</h2>
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
      
        <h4 style={{paddingRight:"15%"}}>Basic Theory Stakeholder Management / Stakeholder Engagement <div style={{position:"absolute", left: "93%"}}><ImCheckmark style={{fontSize:"32px", color: "lightgrey"}}/></div></h4>
        <p style={{paddingRight:"15%"}}>You will learn and train the basic theory behind stakeholder management and stakeholder engagement.</p>
        <hr style={{borderTop: "1px solid black"}}/>
      
        <h4 style={{paddingRight:"15%"}}>Stakeholder Theory <div style={{position:"absolute", left: "93%"}}><ImCheckmark style={{fontSize:"32px", color: "lightgrey"}}/></div></h4>
        <p style={{paddingRight:"15%"}}>You will understand and train different concepts and understandings regarding stakeholder management.</p>
        <hr style={{borderTop: "1px solid black"}}/>
      
        <h4 style={{paddingRight:"15%"}}>Stakeholder Analysis <div style={{position:"absolute", left: "93%"}}><ImCheckmark style={{fontSize:"32px", color: "lightgrey"}}/></div></h4>
        <p style={{paddingRight:"15%"}}>In this exercise you will get questions regarding the stakeholder analysis.</p>
        <hr style={{borderTop: "1px solid black"}}/>
      
        <h4 style={{paddingRight:"15%"}}>Practice Stakeholder Management <div style={{position:"absolute", left: "93%"}}><ImCheckmark style={{fontSize:"32px", color: "lightgrey"}}/></div></h4>
        <p style={{paddingRight:"15%"}}>This exercise focus on practice and not on theory. In this section you will get support if you develop a stakeholder analysis. The questions will support and guide you through the process of developing a stakeholder analysis and defining strategies and measures for your project stakeholder. Before you start this module you need a project assignment.</p>
        <hr style={{borderTop: "1px solid black"}}/>

      </div>
      </div>
    </div>
    );
};

export default SME;