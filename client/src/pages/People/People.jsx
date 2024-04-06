import { Fragment } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

const People = () => {
  return (
    <Fragment>
      <Navbar />
      <Header title="People" desc="The heroes without cape" />
      <h1>Coming Soon!</h1>
    </Fragment>
  );
};

export default People;
