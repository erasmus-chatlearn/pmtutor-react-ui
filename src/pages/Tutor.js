import "./Tutor.css";
import Header from "../components/Header";
import Assistant from "../components/Assistant";
import loading from "../Images/loading.gif";

const Tutor = () => {
  document.documentElement.style.setProperty(
    "--window-width",
    `${window.innerWidth}px`
  ); //enables the use of the current viewport width in the CSS file
  document.documentElement.style.setProperty(
    "--window-height",
    `${window.innerHeight}px`
  ); //enables the use of the current viewport height in the CSS file

  if (window.innerWidth > `769`) {
    return (
      <div className="tutor">
        <Header />
        <Assistant />
        <img className="loading" src={loading} alt="Loading..." />
        <h3 className="content">Tutor is loading...</h3>
      </div>
    );
        }
        else{
          return (
            <div className="tutor">
      <Header />
      <Assistant />
        <img className="loading" src={loading} alt="Loading..." />
        <h3 className="content">Tutor is loading...</h3>
      </div>
    );
  }
};

export default Tutor;
