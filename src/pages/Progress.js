import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import "./Progress.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";

const percentage = 66;

const Progress = () => {
  document.documentElement.style.setProperty('--window-width', `${window.innerWidth}px`); //enables the use of the current viewport width in the CSS file
  document.documentElement.style.setProperty('--window-height', `${window.innerHeight}px`); //enables the use of the current viewport height in the CSS file
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const navigate = useNavigate();

  //with this function user is able to get to earned value management detailed progress page
  const handleClick1 = () => {
    navigate('/EVM');
  };

  //with this function user is able to get to project control skills detailed progress page
  const handleClick2 = () => {
    navigate('/PCS');
  };

  //with this function user is able to get to project communication management detailed progress page
  const handleClick3 = () => {
    navigate('/PCM');
  };

  //with this function user is able to get to project initiation and project planning detailed progress page
  const handleClick4 = () => {
    navigate('/PIPP');
  };

  //with this function user is able to get to project scope management detailed progress page
  const handleClick5 = () => {
    navigate('/PSM');
  };

  //with this function user is able to get to risk management detailed progress page
  const handleClick6 = () => {
    navigate('/RM');
  };

  //with this function user is able to get to stakeholder management and engagement detailed progress page
  const handleClick7 = () => {
    navigate('/SME');
  };

  useEffect(() => {
    //changes width and height values when viewport is resizing
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if(window.innerWidth > `769`){
    return (
      <div className="progress">
      <Header />
      <div className="progressbarbasics progressbar1">
        <div style={{ cursor: "pointer"}} onClick={handleClick1}><CircularProgressbar value={percentage} maxValue={100} text={`${percentage}%`} /></div>
        <h3 style={{width: "100%", position: "absolute", textAlign: "center" }}>Earned Value Management</h3>
        <br /><br /><br /><br /><br /><br />
        <div style={{ cursor: "pointer"}} onClick={handleClick4}><CircularProgressbar value={percentage} maxValue={100} text={`${percentage}%`} /></div>
        <h3 style={{ width: "100%", position: "absolute", textAlign: "center" }}>Project Initiation & Project Planning</h3>
        <br /><br /><br /><br /><br /><br />
        <div style={{ cursor: "pointer"}} onClick={handleClick7}><CircularProgressbar value={percentage} maxValue={100} text={`${percentage}%`} /></div>
        <h3 style={{ width: "100%", position: "absolute", textAlign: "center" }}>Stakeholder Management & Engagement</h3>
      </div>
      <div className="progressbarbasics progressbar2">
        <div style={{ cursor: "pointer"}} onClick={handleClick2}><CircularProgressbar value={percentage} maxValue={100} text={`${percentage}%`} /></div>
        <h3 style={{ width: "100%", position: "absolute", textAlign: "center" }}>Project control skills</h3>
        <br /><br /><br /><br /><br /><br />
        <div style={{ cursor: "pointer"}} onClick={handleClick5}><CircularProgressbar value={percentage} maxValue={100} text={`${percentage}%`} /></div>
        <h3 style={{ width: "100%", position: "absolute", textAlign: "center" }}>Project Scope Management</h3>
      </div>
      <div className="progressbarbasics progressbar3">
        <div style={{ cursor: "pointer"}} onClick={handleClick3}><CircularProgressbar value={percentage} maxValue={100} text={`${percentage}%`} /></div>
        <h3 style={{width: "100%", position: "absolute", textAlign: "center"}}>Project Communication Management</h3>
        <br /><br /><br /><br /><br /><br />
        <div style={{ cursor: "pointer"}} onClick={handleClick6}><CircularProgressbar value={percentage} maxValue={100} text={`${percentage}%`} /></div>
        <h3 style={{ width: "100%", position: "absolute", textAlign: "center" }}>Risk Management</h3>
      </div>
    </div>
    );
        }
        else{
          return (
            <div className="progress">
      <Header />
      
      <div className="progressbars">
      <div className="progressbarbasics progressbar1">
        <div onClick={handleClick1}><CircularProgressbar value={percentage} maxValue={100} text={`${percentage}%`} /></div>
        <h3 style={{fontSize: window.innerWidth/25, width: "100%", position: "absolute", textAlign: "center" }}>Earned Value Management</h3>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div onClick={handleClick3}><CircularProgressbar value={percentage} maxValue={100} text={`${percentage}%`} /></div>
        <h3 style={{ fontSize: window.innerWidth/25, width: "100%", position: "absolute", textAlign: "center" }}>Project Communication Management</h3>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div onClick={handleClick5}><CircularProgressbar value={percentage} maxValue={100} text={`${percentage}%`} /></div>
        <h3 style={{ fontSize: window.innerWidth/25, width: "100%", position: "absolute", textAlign: "center" }}>Project Scope Management</h3>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div onClick={handleClick7}><CircularProgressbar value={percentage} maxValue={100} text={`${percentage}%`} /></div>
        <h3 style={{ fontSize: window.innerWidth/25, width: "100%", position: "absolute", textAlign: "center" }}>Stakeholder Management & Engagement</h3>
        <br /><br /><br /><br /><br />
        <hr style={{ borderTop: "2px solid #ffffff ", position:"absolute" }}/>
      </div>
      <div className="progressbarbasics progressbar2">
        <div onClick={handleClick2}><CircularProgressbar value={percentage} maxValue={100} text={`${percentage}%`} /></div>
        <h3 style={{fontSize: window.innerWidth/25, width: "100%", position: "absolute", textAlign: "center" }}>Project control skills</h3>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div onClick={handleClick4}><CircularProgressbar value={percentage} maxValue={100} text={`${percentage}%`} /></div>
        <h3 style={{ fontSize: window.innerWidth/25, width: "100%", position: "absolute", textAlign: "center" }}>Project Initiation & Project Planning</h3>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div onClick={handleClick6}><CircularProgressbar value={percentage} maxValue={100} text={`${percentage}%`} /></div>
        <h3 style={{ fontSize: window.innerWidth/25, width: "100%", position: "absolute", textAlign: "center" }}>Risk Management</h3>
      </div>
      </div>
    </div>
          );
        }

};

export default Progress;
