import React, { useState } from "react";
import "./Help.css";
import Header from "../components/Header";
import EU from "../Images/EN V Co-funded by_POS.png";

const Help = () => {
  document.documentElement.style.setProperty(
    "--window-width",
    `${window.innerWidth}px`
  ); //enables the use of the current viewport width in the CSS file
  document.documentElement.style.setProperty(
    "--window-height",
    `${window.innerHeight}px`
  ); //enables the use of the current viewport height in the CSS file

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="help">
      <Header />
      <div className="content">
        <h1>How can we help you?</h1>

        <div className="select">
          <select
            style={{ position: "absolute", width: "100%", height: "50%" }}
            defaultValue="Choose"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="Choose"> Select an option...</option>
            <option value="About">About PM Tutor</option>
            <option value="UG">User Guide</option>
            <option value="KI">Known Issues</option>
            <option value="CI">Give Feedback</option>
          </select>
        </div>

        <div className="selection">
          {selectedOption === "About" ? (
            <section>
              {/*<img
                className="Eu-logo"
                src={EU}
                alt="Co-funded by the European Union"
              />*/}
              <h2>About PM Tutor</h2>
              <p>
                PM Tutor is developed using IBM Watson Assistant and OpenAI GPT-4 for learning project management.
                Building on Watson Assistant, it can provide you with interactive learning experience on structured
                content. Upon your request, it will fetch content designed by project management experts from its
                database. Meanwhile, we leverage GPT-4 for answering your questions which are beyond the tutor's
                dialog scope and for generating customized feedback on your answers to open-ended questions during a
                case study assignment. As we are experimenting generative AI, we anticipate the limitations stated
                by OpenAI might occur every now and then, such as producing incorrect answer occasionally. Your feedback
                would help us improve PM Tutor.
              </p>
              <p>
                The content is organized by topics and case studies. A topic focuses on a core knowledge area in
                project management. It contains one or more learning modules, each module has learning material(s) and
                one or more exercises. A case study, on the other hand, could cover one or more knowledge areas. The
                content of a case study is organized into sections. A case study section might contain one or more
                assignments.
              </p>
              <p>
                Both topic exercises and case study assignments are designed to help you study project management by
                providing you feedback during the activities. The tutor will ask you a set of questions designed by
                the project management experts, and give you feedback based on your answer. After receiving the feedback
                and before proceeding to the next exercise or assignment question, you can ask the tutor to explain
                a terminology or ask any other questions related to project management.
              </p>
            </section>
          ) : selectedOption === "CI" ? (
            <section>
              <h2>Give Feedback</h2>
              <p>
                You can give feedback anonymously when you are interacting with PM Tutor, simply tell the tutor that
                you want to give feedback or select "Give feedback" by first requesting for the main option list in the
                chat. It will store the feedback to our database without the user id. Please note, the input field
                in the chat can only take 300 characters.
              </p>
              <p>
                For technical issues, please take a screenshot and provide a description of the issue and send it
                to <a href="mailto:ville.laakso@student.oulu.fi">Ville</a> and <a href="mailto:da-lun.chen@oulu.fi">Dalun</a>.
                We will attend to the issue as soon as possible. Besides reporting technical issues, you can also use
                the emails to give longer feedback.
              </p>
            </section>
          ) : selectedOption === "KI" ? (
              <section>
                <h2>Known Issues</h2>
                <p>
                  <b>The chat window sometimes doesn't render in PM Tutor view</b>
                </p>
                <p>
                  The issue is under investigation. Meanwhile, you can try to refresh the PM Tutor view
                  one or couple times, often the chat window will be rendered after that. If the issue prevents you from
                  interacting with the tutor, please contact us and we could provide you with a link to our classic UI,
                  which is a basic UI and does not have the issue.
                </p>
                <p>
                  <b>Receiving timeout or resource related error message from the tutor</b>
                </p>
                <p>
                  It is likely due to the cold start issue of cloud services or the large language model service
                  is taking longer time to generate a response than the backend server allowed. If you receive an error message
                  immediately after the chat window is rendered, logout and sign in again usually help. If you receive the
                  message when asking an open question, you could try to ask it again. If it happens after you answered a
                  case study assignment question, you could request the tutor to return to the case study and then
                  select the assignment again, or to show your other options.
                </p>
              </section>
          ) : selectedOption === "UG" ? (
            <section>
              <h2>User Guide</h2>
              <p>
                Most of the time, PM Tutor will offer you buttons or a list of dropdown options which you could select to
                proceed. You can also give your request in natural language. It understands better if the request is
                concise, e.g., "show options", "list topics", "show case studies", "what is 3-point estimation".
              </p>
              <p>
                Below is a demo video recorded earlier, it shows how you can interact with the tutor.
              </p>
              <div className={"iframe-container"}>
                <iframe className={"responsive-iframe"} title={"Basic Interactions"} src={
                  "https://a3s.fi/swift/v1/AUTH_bdc38b1f0b274326adf929ac803c1ef6/chatlearn/pm-tutor/pm-tutor-basic-usage.mp4"
                }></iframe>
              </div>
            </section>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Help;
