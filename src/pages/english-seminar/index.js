import React from "react";
import LandingPage from "../../projects/english-seminar/components/LandingPage";
import getNavBar from "../../projects/english-seminar/js/getNavBar";

const Index = () => <LandingPage navigationBar={getNavBar(0, false)}/>;

export default Index;