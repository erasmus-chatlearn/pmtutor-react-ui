import React, { useState, useEffect } from 'react';
import "./Profile.css";
import Header from "../components/Header";

const Profile = () => {
  document.documentElement.style.setProperty('--window-width', `${window.innerWidth}px`); //enables the use of the current viewport width in the CSS file
  document.documentElement.style.setProperty('--window-height', `${window.innerHeight}px`); //enables the use of the current viewport height in the CSS file

  const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/user')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []); /* <-- this is equivalent to componentDidMount in React class components,
        and makes this fetch request only run once after the component is added to the DOM */

  return (
    <div className="profile">
      <Header />
      <div className="content">
        <h1>Profile<br /><br /></h1>
        <h3>{data["name"]}<br /><br /></h3>
        <h3>Information:</h3>
        <p><b>User ID:</b> {data["sub"]}</p>
        <p><b>Email:</b> {data["email"]}</p>
        <p><b>Education:</b> University of Oulu, Master’s degree programme</p>
        <p><b>Work:</b> Software Developer</p>
      </div>
    </div>
  );
};

export default Profile;
