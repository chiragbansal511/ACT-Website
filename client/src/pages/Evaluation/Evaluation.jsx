import { Fragment } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Evaluation.module.scss";
import Footer from "../../components/Footer/Footer";
const Evaluation = () => {
  return (
    <Fragment>
      <Navbar />
      <Header title="Evaluation" desc="For you to shine" />
      <div className={styles.tooMuchContent}>
        <div className={styles.content}>
          The approval of a proposal involves evaluating its feasibility,
          originality, relevance, innovation and potential impact across
          multiple disciplines, the potential academic impact (publications) and
          its practical impact.
        </div>
        <div className={styles.content}>
          The various criteria will have a different weight in the final grading
          of the proposal. A minimum grade is required for a proposal to be
          accepted. All issues mentioned must be addressed in the proposal.
        </div>
        <div className={styles.content}>
          <ol>
            <li>Integration of disciplines</li>
            <li>Research Problem and Objectives</li>
            <li>Methodological Rigor</li>
            <li>Academic Relevance and Societal Impact</li>
            <li>
              Effective Communication and Collaboration Plan and Effective
              Dissemination
            </li>
            <li>Feasibility and Resources</li>
            <li>Ethical Considerations</li>
          </ol>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Evaluation;
