import Main from "../../components/Layout/Layout";
import "./Aboutus.css";

export default function Aboutus() {
  return (
    <div>
      <Main Heading="About Us" SubHead="Get to know us better" Body={Body()} />
    </div>
  );
}

const Body = () => {
  return (
    <div>
      <div className="body">
        <p>
          ACT Center strategically aims to instigate and promote
          transdisciplinary research within the Thapar Institute of Engineering
          and Technology. This goal aligns with the Thapar Institute’s
          commitment to staff personal and professional development, and the
          goal of advancing and disseminating academic knowledge in domains
          related to the institute’s scientific domains. By achieving these
          goals Thapar Institute aims at obtaining a prominent position as a
          technological university in India and internationally.
          <br />
          <br />
          The ACT Center extends an invitation to all academic personnel to
          actively engage in this initiative by identifying transdisciplinary
          research topics connecting with colleagues from diverse knowledge
          domains and proposing projects that promise novel and high-quality
          publications.
          <br />
          <br />
          To ensure the depth and breadth of transdisciplinary engagement, the
          ACT Center stipulates that a minimum of three disciplines must be
          involved in the proposal to be eligible for financial support. This
          requirement underscores our commitment to fostering truly integrative
          research endeavors that contribute meaningfully to the collective
          pursuit of knowledge and the common good.
        </p>

        <button className="homeButton aboutButton">Submission</button>
      </div>
    </div>
  );
};
