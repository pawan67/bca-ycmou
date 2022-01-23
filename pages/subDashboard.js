import SubDashboard from "../components/SubDashboard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function SubDash() {
  useEffect(() => {
    AOS.init();
  });
  return <SubDashboard />;
}

export default SubDash;
