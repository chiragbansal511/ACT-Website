import Main from "../../components/Layout/Layout";
import "./Evaluation.css";

export default function Evaluation() {
  return (
    <div>
      <Main
        Heading="Evaluation"
        SubHead="Get to know us better"
        Body={Body()}
      />
    </div>
  );
}

const Body = () => {
  return (
    <div>
      <div className="body">
        <p>
          The approval of a proposal involves evaluating its feasibility,
          originality, relevance, innovation and potential impact across
          multiple disciplines, the potential academic impact (publications) and
          its practical impact.
          <br />
          <br />
          The various criteria will have a different weight in the final grading
          of the proposal. A minimum grade is required for a proposal to be
          accepted. All issues mentioned must be addressed in the proposal.
        </p>
        
        <p>
            <br />
            <ol>
                <li>Integration of disciplines</li>
                <li>Research Problem and Objectives</li>
                <li>Methodological Rigor</li>
                <li>Academic Relevance and Societal Impact</li>
                <li>Effective Communication and Collaboration Plan and Effective Dissemination</li>
                <li>Feasibility and Resources</li>
                <li>Ethical Considerations</li>
            </ol>
        </p>
      </div>
    </div>
  );
};
