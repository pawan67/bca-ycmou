import Link from "next/link";
import FirstPage from "../components/FirstPage";
import Header from "../components/Header";
import Head from "next/head";
function Firstyear() {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700&display=swap');
        </style>
      </Head>
      <FirstPage
        firstLink="/firstyearDashboardFirstSem"
        secondLink="/firstyearDashboardSecondSem"
        firstSem="1st Semester"
        secondSem="2nd Semester"
      />
    </>
  );
}

export default Firstyear;
