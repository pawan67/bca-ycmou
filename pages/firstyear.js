import Link from "next/link";

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
      <div className="background">
        <div className=" innerdiv">
          <Header />
          <div className=" w-80 mx-auto mt-16">
            <img src="svg/teaching.svg" alt="" />
          </div>
          <div className=" mt-16 space-y-5">
            <button className=" button">1st Semester</button>
            <button className=" button">2nd Semester</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Firstyear;
