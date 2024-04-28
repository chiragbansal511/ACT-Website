import Main from "../../components/Layout/Layout";
import "./Submission.css";

export default function Submission() {
  return (
    <div>
      <Main
        Heading="Submissions"
        SubHead="Get to know us better"
        Body={Body()}
      />
    </div>
  );
}

const Body = () => {
  return (
    <div className="body">

      <h1>Guidelines</h1>
      <p>
        Submissions of proposals will be done online, on the ACT online
        platform, according to the Submission specifications (see Appendix 1).
        The maximum duration of a project can be two years.
      </p>
      <br />
      <p>
        A plan of the project must be submitted identifying the project
        objectives/targets on the basis of half-year intervals (interim progress
        reports). The deliverables will be reviewed every six months on the
        basis of the project objectives/targets for the period in question. A
        progress report will be submitted by the research team on a bi-yearly
        basis and meeting the objectives/targets will be the criterion for the
        financing of the following project face. The proposals submitted will be
        reviewed and evaluated by the ACT Center.
      </p>
      <br />
      <p>
        The interim and final evaluations will be done by the Center’s
        management based on a clear and transparent evaluation method (See
        Appendix 2). In case a project falls outside the knowledge domains of
        the management, an ad-hoc scientific committee will be put together to
        evaluate the project.
      </p>
      <h1>Example Projects</h1>

      <div className="bodysubsec2listview">
        <ul className="bodysubsec2listviewul1">
          <li>
            {listitem(
              "Smart Cities (Sustainable) Development",
              "Involves collaboration between Urban Planning, Environmental Science, Computer Science & Engineering, and Business Administration."
            )}
          </li>

          <li>
            {listitem(
              "Neuroeconomics/Neuromarketing and Decision-Making",
              "Integrating Economics, Marketing, Psychology, and Cognitive Science to understand the neural mechanisms underlying consumer decision-making processes. It could also utilize Computer science for data Analysis and Modeling"
            )}
          </li>

          <li>
            {listitem(
              "Biomedical Nanotechnology",
              "Combining Chemical engineering for nanomaterial synthesis, Biotechnology for applications in healthcare, and Electrical Engineering & Instrumentation Engineering for economic viability and policy implications"
            )}
          </li>

          <li>
            {listitem(
              "Historical Impact of Technological Innovations",
              "Requires collaboration between History, Engineering, and Economics/Marketing to review and study the historical implications and economic and commercial impact of technological innovations"
            )}
          </li>
        </ul>
        <ul className="bodysubsec2listviewul2">
          <li>
            {listitem(
              "Environmental Policy and Economics",
              "Involves collaboration between Environmental Science, Economics, and Political Science to identify and propose effective policies for environmental conservation."
            )}
          </li>

          <li>
            {listitem(
              "Fostering Innovation Using (Big) Data",
              "Integrating Computer/Data Science for cognitive computing and analyzing market data, Computer engineering, Cognitive Science to understand neural mechanisms, and Marketing for analysis of consumer behavior and development of marketing plans for commercializing knowledge"
            )}
          </li>

          <li>
            {listitem(
              "Philosophical Ethics in Artificial Intelligence (AI)",
              "Integrating Computer/Data Science for cognitive computing and analyzing market data, Computer engineering, Cognitive Science to understand neural mechanisms, and Marketing for analysis of consumer behavior and development of marketing plans for commercializing knowledge"
            )}
          </li>

          <li>
            {listitem(
              "Psychological Impact of Robotics in Elderly Care",
              "Integrates Psychology, Sociology, and Mechanical Engineering to study the psychological and social effects of introducing robotics in elderly care"
            )}
          </li>
        </ul>
      </div>

      <h1>Submission Form</h1>
      <form action="" className="submissionForm">
        <div className="row">
          <div className="col">
            <input type="text" name="" id="" placeholder="Full Name"/>
          </div>

          <div className="col">
            <input type="text" name="" id="" placeholder="Email"/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <input type="text" name="" id="" placeholder="Project Title"/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <input type="text" name="" id="" placeholder="Keywords"/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <textarea name="" id="" cols="30" rows="10" placeholder="Abstract"></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <input type="file" placeholder="File Submission"/>
          </div>

          <div className="col">
            <input type="file" placeholder="Supplementary Material"/>
          </div>

          <div className="col">
            <button className="button">Submit</button>
          </div>
        </div>

      </form>

    </div>
  );
};

const listitem = (Heading, title) => {
  return (
    <div className="listitem">
      <div className="listitemheading">{Heading}</div>
      <div className="listitemtitle">{title}</div>
    </div>
  );
};
