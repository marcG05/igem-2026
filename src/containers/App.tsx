import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { getPathMapping, stringToSlug } from "../utils/index.js";
import { useEffect } from "react";
import { Navbar }  from "../components/Navbar.js";
import { NotFound } from "../components/NotFound.js";
import { Footer } from "../components/Footer.js";
import { Home } from "../contents/home.js";
import { Project } from "../contents/Project/Project.js";
import { DryLab, Wetlab, Members, Math } from "../contents/index.js";
import { Attributions } from "../contents/index.js";
import { HumanPractices } from "../contents/index.js";

import "../contents/CSS/home/coulds.scss";
import "../contents/CSS/home/home.scss";
import { LoadingPage } from "../contents/LoadingPage.js";
import { BusinessModelCanvas } from "../contents/Engagement/Entrep";
import { Education } from "../contents/Engagement/Education.js";
import { Safety } from "../contents/Lab/safety.js";
import { Contribution } from "../contents/Team/contributions.js";
import Award from "../contents/Award.js";


const App = () => {
  const pathMapping = getPathMapping();
  const currentPath =
    location.pathname
      .split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`) 
      .pop() || "/";

  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);

  return (
    <>
      <Navbar />
      {/* Routes */}
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Members />} />
          <Route path="/attributions" element={<Attributions />} />
          <Route path="/engineering" element={<Project />} />
          <Route path="/wetlab" element={<Wetlab />} />
          <Route path="/drylab" element={<DryLab />} />
          <Route path="/human-practices" element={<HumanPractices />} />
          <Route path="/loadingpage" element={<LoadingPage />} />
          <Route path="/entrepreneurship" element={<BusinessModelCanvas />} />
          <Route path="/education" element={<Education />} />
          <Route path="/model" element={<Math />} />
          <Route path="/safety-and-security" element={<Safety />} />
          <Route path="/contribution" element={<Contribution />} />
          <Route path="/awards" element={<Award />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;
