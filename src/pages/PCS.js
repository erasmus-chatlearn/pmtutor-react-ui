import "./progressPages.css";
import Header from "../components/Header";
import { BiArrowBack } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const PCS = () => {
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
        <h2 style={{textAlign: "left"}}><BiArrowBack style={{ zIndex: 1000, cursor: 'pointer'}} onClick={handleClick}/> &nbsp;&nbsp;Project control skills</h2>
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

        <h4 style={{paddingRight:"15%"}}>Basics of schedule and resource management <div style={{position:"absolute", left: "93%"}}><ImCheckmark style={{fontSize:"32px", color: "lightgrey"}}/></div></h4>
        <p style={{paddingRight:"15%"}}>Upon completion of this exercise, you will understand the purpose of scheduling, the benefits of examining it, and some key tasks involved in schedule management.</p>
        <hr style={{borderTop: "1px solid black"}}/>
      
        <h4 style={{paddingRight:"15%"}}>Fundamentals of schedule management techniques <div style={{position:"absolute", left: "93%"}}><ImCheckmark style={{fontSize:"32px", color: "lightgrey"}}/></div></h4>
        <p style={{paddingRight:"15%"}}>By the end of this exercise, you will be familiar with the significance and key concepts of activity networks in project management.</p>
        <hr style={{borderTop: "1px solid black"}}/>
        
        <h4 style={{paddingRight:"15%"}}>Fundamentals of activity network <div style={{position:"absolute", left: "93%"}}><ImCheckmark style={{fontSize:"32px", color: "lightgrey"}}/></div></h4>
        <p style={{paddingRight:"15%"}}>By the end of this exercise, you will understand the importance and key concepts of activity network in project management</p>
        <hr style={{borderTop: "1px solid black"}}/>
      
        <h4 style={{paddingRight:"15%"}}>Calculations in activity network <div style={{position:"absolute", left: "93%"}}><ImCheckmark style={{fontSize:"32px", color: "lightgrey"}}/></div></h4>
        <p style={{paddingRight:"15%"}}>It's time to put theory into practice. You'll take on the role of project leader in a simple housing project and start by forming an activity network.</p>
        <hr style={{borderTop: "1px solid black"}}/>
      
        <h4 style={{paddingRight:"15%"}}>Management of activity network <div style={{position:"absolute", left: "93%"}}><ImCheckmark style={{fontSize:"32px", color: "lightgrey"}}/></div></h4>
        <p style={{paddingRight:"15%"}}>Let's examine how the activity network can be applied in project management.</p>
        <hr style={{borderTop: "1px solid black"}}/>

        <h4 style={{paddingRight:"15%"}}>Introduction to the Three-point Estimate <div style={{position:"absolute", left: "93%"}}><ImCheckmark style={{fontSize:"32px", color: "lightgrey"}}/></div></h4>
        <p style={{paddingRight:"15%"}}>In this exercise, we will learn about the Three-point Estimate, a statistical method that incorporates estimates from experts. We'll briefly touch on mathematics, but don't worry, it's straightforward.</p>
        <hr style={{borderTop: "1px solid black"}}/>
      
        <h4 style={{paddingRight:"15%"}}>Practicing the Three-point Estimate <div style={{position:"absolute", left: "93%"}}><ImCheckmark style={{fontSize:"32px", color: "lightgrey"}}/></div></h4>
        <p style={{paddingRight:"15%"}}>Now it's time to test your skills and apply the Three-point Method to a simplified project scenario.</p>
        <hr style={{borderTop: "1px solid black"}}/>

      
      </div>
      </div>
    </div>
    );
};

export default PCS;