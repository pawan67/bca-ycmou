import Header from "../components/Header";
import SecondPage from "../components/SecondPage";
import Head from "next/head";
function FirstyearDashboard() {
  return (<><Head>
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700&display=swap');
    </style>
  </Head>
  
  <SecondPage syllabusLink="/fysyl1" booksLink="" pyqLink=""/>
  </>
  );
}

export default FirstyearDashboard;
