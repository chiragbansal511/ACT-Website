import { Fragment } from "react";
import styles from "./About.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const About = () => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.aboutWrapper}>
        <Header title="About" desc="For you to get to know us better" />
        <div className={styles.tooMuchContent}>
          <div className={styles.content}>
            ACT Center strategically aims to instigate and promote
            transdisciplinary research within the Thapar Institute of
            Engineering and Technology. This goal aligns with the Thapar
            Institute’s commitment to staff personal and professional
            development, and the goal of advancing and disseminating academic
            knowledge in domains related to the institute’s scientific domains.
            By achieving these goals Thapar Institute aims at obtaining a
            prominent position as a technological university in India and
            internationally.
          </div>
          <div className={styles.content}>
            The ACT Center extends an invitation to all academic personnel to
            actively engage in this initiative by identifying transdisciplinary
            research topics connecting with colleagues from diverse knowledge
            domains and proposing projects that promise novel and high-quality
            publications.
          </div>
          <div className={styles.content}>
            To ensure the depth and breadth of transdisciplinary engagement, the
            ACT Center stipulates that a minimum of three disciplines must be
            involved in the proposal to be eligible for financial support. This
            requirement underscores our commitment to fostering truly
            integrative research endeavors that contribute meaningfully to the
            collective pursuit of knowledge and the common good.
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button color="#F4970F">Submissions</Button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default About;
