import Link from "next/link";
import FirstPage from "../components/FirstPage";
import Header from "../components/Header";

function Firstyear() {
  return (
    <FirstPage
      firstLink="/firstyearDashboardFirstSem"
      secondLink="/firstyearDashboardSecondSem"
      firstSem="1st Semester"
      secondSem="2nd Semester"
    />
  );
}

export default Firstyear;
