import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { getPathMapping, stringToSlug } from "../utils/index.js";
import { useEffect } from "react";
import { NotFound } from "../components/NotFound.js";
import { Attributions } from "../contents/index.js";


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
      {/* Routes */}
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/attributions" element={<Attributions />} />
        </Routes>
    </>
  );
};

export default App;
