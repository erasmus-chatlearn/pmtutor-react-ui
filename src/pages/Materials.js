import React, { useState } from "react";
import "./Materials.css";
import Header from "../components/Header";

const Materials = () => {
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
    <div className="materials">
      <Header />
      <div className="content">
        <h1>Learning Materials</h1>

        <div className="select">
          <select
            style={{ position: "absolute", width: "100%", height: "50%" }}
            defaultValue="Choose"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="Choose">--Choose topic--</option>
            <option value="EValue">Earned Value Management</option>
            <option value="PCS">Project control skills</option>
            <option value="PCM">Project Communication Management</option>
            <option value="PIPP">
              Project Initiation and Project Planning
            </option>
            <option value="PSM">Project Scope Management</option>
            <option value="RM">Risk Management</option>
            <option value="SME">Stakeholder Management and Engagement</option>
          </select>

          <br />
          <br />
          <br />
          <hr className="lining" style={{ top: "100%" }} />
        </div>

        <div className="selection">
          {selectedOption === "EValue" ? (
            <section>
              <br />
              <br />
              <br />
              <p>Basics</p>
              <p>
                <a
                  href="https://pmchatbotpilotti.s3.eu-de.cloud-object-storage.appdomain.cloud/Project_business.pdf#page=206"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "4.9.3 Monitoring project progress: earned-value calculation"
                </a>{" "}
                (PDF)
              </p>
              <hr className="lining" />
              <br />
              <p>Basic Concepts and Calculations</p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=SXK8Goujc3w&t=4m41s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Analyzing project progress and producing estimate at
                  completion – earned value"
                </a>{" "}
                (video)
              </p>
              <hr className="lining" />
            </section>
          ) : selectedOption === "PCS" ? (
            <section>
              <br />
              <br />
              <br />
              <p>Basics</p>
              <p>
                <a
                  href="https://pmchatbotpilotti.s3.eu-de.cloud-object-storage.appdomain.cloud/Project_business.pdf#page=104"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Schedule and resource management (chapter 4.3)"
                </a>{" "}
                (PDF)
              </p>
              <p>
                <a
                  href="https://oulu.yuja.com/V/Video?v=87463&node=354678&a=805856076&autoplay=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Schedule and resource management video (chapter 4.3)"
                </a>{" "}
                (video)
              </p>
              <hr className="lining" />
              <br />
              <p>Basic techniques</p>
              <p>
                <a
                  href="https://pmchatbotpilotti.s3.eu-de.cloud-object-storage.appdomain.cloud/Project_business.pdf#page=105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Basic techniques for schedule management (chapter 4.3.2 )"
                </a>{" "}
                (PDF)
              </p>
              <hr className="lining" />
              <br />
              <p>Activity network</p>
              <p>
                <a
                  href="https://pmchatbotpilotti.s3.eu-de.cloud-object-storage.appdomain.cloud/Project_business.pdf#page=110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Activity network (chapter 4.3.3 )"
                </a>{" "}
                (PDF)
              </p>
              <p>
                <a
                  href="https://oulu.yuja.com/V/Video?v=87464&node=354679&a=493199234&autoplay=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Activity network video (chapter 4.3.3)"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://pmchatbotpilotti.s3.eu-de.cloud-object-storage.appdomain.cloud/Project_business.pdf#page=114"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Example: Drawing the activity network, network calculations,
                  and the critical path"
                </a>{" "}
                (PDF)
              </p>
              <hr className="lining" />
              <br />
              <p>Three point estimate</p>
              <p>
                <a
                  href="https://pmchatbotpilotti.s3.eu-de.cloud-object-storage.appdomain.cloud/Project_business.pdf#page=109"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "three-point estimate"
                </a>{" "}
                (PDF)
              </p>
              <p>
                <a
                  href="https://oulu.yuja.com/V/Video?v=87468&node=354683&a=732930098&autoplay=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Three-point method in cost estimation video (chapter 4.4.3)"
                </a>{" "}
                (video)
              </p>
              <hr className="lining" />
              <br />
            </section>
          ) : selectedOption === "PCM" ? (
            <section>
              <br />
              <br />
              <br />
              <p>Communication Management Fundamentals</p>
              <p>
                <a
                  href="https://unioulu.sharepoint.com/:p:/r/sites/ErasmusChatLearnproject/Shared%20Documents/Result%205%20Open%20PM%20education%20resources%20material%20bank/6_Communications%20skills%20(POLIMI)/26%20PPMB%20%20-%20Communication%20Management.pptx?d=wcf8add5b8fdb41c3986faf665a3b58f9&csf=1&web=1&e=QuTYTl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "The basics pricinciple of communication management and how to
                  structure an effective communication management plan"
                </a>{" "}
                (?)
              </p>
              <hr className="lining" />
              <br />
            </section>
          ) : selectedOption === "PIPP" ? (
            <section>
              <br />
              <br />
              <br />
              <p>Theory and process: Project Initiation</p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=hIhTtzo0eBg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "What is project initiation?"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=28vZa0qOHkg&list=PLTZYG7bZ1u6okIKm_B_BlIzuqTI85AKR7&index=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Key parts project initiation"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=ZKOwOZBvAzI&list=PLTZYG7bZ1u6okIKm_B_BlIzuqTI85AKR7&index=4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Cost benefit analysis and project charter development"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=jz7tPVDwb50&list=PLTZYG7bZ1u6okIKm_B_BlIzuqTI85AKR7&index=2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Project stakeholders and project initiation"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=1eiTXSkKFtE&list=PLTZYG7bZ1u6okIKm_B_BlIzuqTI85AKR7&index=3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Define SMART project objectives"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=xuAxYwembwU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "What is a project definition?"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=HGkYDw7kxPs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Project definition"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.tandfonline.com/doi/pdf/10.1080/21573727.2013.775942"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Paper: Exploring the front-end of project management"
                </a>{" "}
                (PDF)
              </p>
              <p>
                <a
                  href="http://196.190.117.157:8080/jspui/bitstream/123456789/63663/1/98.pdf#page=53"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Chapter: Implementing Strategy Through Project Management:
                  The Importance of Managing the Project Front-end"
                </a>{" "}
                (?)
              </p>
              <p>
                <a
                  href="https://d1wqtxts1xzle7.cloudfront.net/64870008/j.ijproman.2010.04.00820201106-19765-1i1p8yp-libre.pdf?1604701509=&response-content-disposition=inline%3B+filename%3DGuided_reflection_on_project_definition.pdf&Expires=1671456258&Signature=VtaQ5n5IM~z8oZvN0JqXZzd8uG-1qdCNCz4Wxurl5mOO0pB-8IELK78xxMP7hgsRKh3Y~I-pSLx5csmcm~4w-L0oPZXE5LzFMb4kWxKwiIUv42muSjCQUZp4FjQ8myVrHWZ63Urw86~G35arXHubXyqdBpBvN7XxtixJ99Yg-i2VltaseOUbJwO2zo5CcKZO9fgDjNwSU2EOofMmprQJceNt9o7ZxYhKXHQEDZin7Cyv0NWkkK1l2ov5QLJmza35J4QOMawXvPvCWp6LCdlTw7NqnWka5gTkYvi6CE8arOeYo2E8hp-hQFsywKGXel5PQVW3WWA7StZDdG4KpopKfA__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Paper: Guided reflection on project definition"
                </a>{" "}
                (?)
              </p>
              <p>
                <a
                  href="https://eprints.soton.ac.uk/148941/1/PDF_verson_of_total.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Paper: Issues in front-end decision-making on projects"
                </a>{" "}
                (PDF)
              </p>
              <hr className="lining" />
              <br />
              <p>Theory and process: Project Planning</p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=bLZ9MNwV2vE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Difference between waterfall, agile and hybrid project
                  management"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=ygVXGSn2DIQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Agile vs. Waterfall"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=N3N9-RLSbvo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "4 stages of project life cycle"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=ZWmXi3TW1yA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Overview Project Planning"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=9G_LwG8ozpo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Project Planning Process"
                </a>{" "}
                (video)
              </p>
              <p>
                <a href="ICB4.0_eng" target="_blank" rel="noopener noreferrer">
                  "International Competence Baseline 4.0 (ICB 4.0) - complete
                  PRACTICE competence part"
                </a>{" "}
                (?)
              </p>
              <hr className="lining" />
              <br />
            </section>
          ) : selectedOption === "PSM" ? (
            <section>
              <br />
              <br />
              <br />
              <p>Project scope management fundamentals</p>
              <p>
                <a
                  href="06 PPMB - Scope Management CM.pptx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Project Scope Management detailed slides"
                </a>{" "}
                (?)
              </p>
              <p>
                <a
                  href="08 PPMB - WBS CM.pptx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "WBS detailed slides"
                </a>{" "}
                (?)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=oacSSamqP6s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Scope management plan"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=wEWhnodF6ig"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "WBS explaining video"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=LyhI7Nwi0nM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Project context diagram video"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=64bHiW6K77c"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Project Baseline"
                </a>{" "}
                (video)
              </p>
              <hr className="lining" />
              <br />
            </section>
          ) : selectedOption === "RM" ? (
            <section>
              <br />
              <br />
              <br />
              <p>Basics</p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=nbhLDJkNnzY&t=112s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "What is risk in projects?"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=BLAEuVSAlVM&t=195s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "What is the essence of risk management?"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.apm.org.uk/resources/what-is-project-management/what-is-risk-management/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "How can risk be assessed?"
                </a>{" "}
                (website)
              </p>
              <p>
                <a
                  href="Section 4.5.11 of the Individual Competence Baseline by IPMA (ICB4). This document can be downloaded free of charge from www.ipma.world"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "What is risk management in projects?"
                </a>{" "}
                (?)
              </p>
              <p>
                <a
                  href="https://www.academia.edu/download/52864522/1-s2.0-S0263786301000801-main.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "On transforming risk management into uncertainty management"
                </a>{" "}
                (?)
              </p>
              <p>
                <a
                  href="https://www.pmi.org/learning/library/characterizing-unknown-unknowns-6077"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "What is an unknown unknown?"
                </a>{" "}
                (conference paper)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=BDbuJtAiABA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "What is a black swan?"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://answerbook.ir/wp-content/uploads/2019/02/Black-Swan-Summary-Nassim-Taleb-Economist.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "A black swan - further explanation"
                </a>{" "}
                (PDF)
              </p>
              <hr className="lining" />
              <br />
              <p>Basic Concepts and Calculations</p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=thDrGy7rgnQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "What is a risk assessment matrix?"
                </a>{" "}
                (video)
              </p>
              <hr className="lining" />
              <br />
            </section>
          ) : selectedOption === "SME" ? (
            <section>
              <br />
              <br />
              <br />
              <p>
                Basic Theory Stakeholder Management / Stakeholder Engagement
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=17hnaKFjDU8&list=PL15B809B055A2C795&index=2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "What are stakeholders?"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=pwqZCptLTjE&list=PL15B809B055A2C795&index=4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Differentiation of stakeholder"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=-tNHplQ_-hw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "What is stakeholder management?"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://opentextbc.ca/projectmanagement/chapter/chapter-5-project-stakeholders-project-management/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Project Stakeholder Management"
                </a>{" "}
                (chapter)
              </p>
              <p>
                <a
                  href="https://www.pmi.org/learning/library/stakeholder-management-task-project-success-7736"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Project Stakeholder Management 2"
                </a>{" "}
                (conference paper)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=VHGTsEwbOJY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "What is stakeholder engagement?"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=TFnLHwOuliM&list=PL15B809B055A2C795&index=5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Stakeholder approach to value creation"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=0EkufUCo5qI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "How to management stakeholder expectations"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.academia.edu/35352355/Project_Stakeholder_Management_Past_and_Present?from=cover_page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Project stakeholder management: Past and present"
                </a>{" "}
                (conference paper)
              </p>
              <p>
                <a
                  href="https://www.researchgate.net/profile/Tuan-Son-Nguyen/publication/326507031_STAKEHOLDER_MANAGEMENT_IN_COMPLEX_PROJECTS/links/5b517d7545851507a7b20fd0/STAKEHOLDER-MANAGEMENT-IN-COMPLEX-PROJECTS.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Stakeholder Management in complex projects"
                </a>{" "}
                (PDF)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=ZzqvF9uJ1hA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Stakeholder engagement"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="Document name: Overview project stakeholder management"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Overview Project Stakeholder Management"
                </a>{" "}
                (?)
              </p>
              <p>
                <a
                  href="https://journals.sagepub.com/doi/pdf/10.1177/00076503211066595"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Paper: Stakeholder Engagement: past, present and future"
                </a>{" "}
                (PDF)
              </p>
              <p>
                <a
                  href="Document name: ICB4.0_eng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "ICB 4.0 - Stakeholder (4.5.12)"
                </a>{" "}
                (?)
              </p>
              <hr className="lining" />
              <br />
              <p>Stakeholder Theory</p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=bIRUaLcvPe8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "What is stakeholder theory?"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=_sNKIEzYM7M"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Shareholder vs. Stakeholder"
                </a>{" "}
                (video)
              </p>
              <hr className="lining" />
              <br />
              <p>Stakeholder Analysis</p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=PXCo92Iag3g"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "What is a stakeholder analysis?"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=OkyVirNorAc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "How to build a stakeholder map"
                </a>{" "}
                (video)
              </p>
              <p>
                <a
                  href="Document name: Overview stakeholder analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Overview Stakeholder Analysis"
                </a>{" "}
                (?)
              </p>
              <hr className="lining" />
              <br />
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Materials;
