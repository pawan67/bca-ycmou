import Head from "next/head";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect, useState } from "react";
import Subject from "../components/Subject";

// ..
function Fybca() {
  const [sem, setSem] = useState();

  useEffect(() => {
    AOS.init();
  });

  if (sem == "sem1") {
    return (
      <Subject
        sub1="English Communication"
        sub2="Mathematics"
        sub3="Programming with C++"
        sub4="Problem solving using computers"
        subName1="english"
        subName2="maths"
        subName3="c++"
        subName4="c"
      />
    );
  }
  if (sem == "sem2") {
    return (
      <Subject
        sub1="Environmental studies"
        sub2="Statistics"
        sub3="Data structures using C++"
        sub4="Computer Networks"
        subName1="evs"
        subName2="statistics"
        subName3="dsc++"
        subName4="computernetworks"
      />
    );
  }
  return (
    <>
      
      <Head>
        <title>Fybca</title>
      </Head>
        
      <div className=" background">
        <div className="innerdiv">
          <Header />
          <div
            data-aos-duration="300"
            data-aos="fade-down"
            data-aos-delay="200"
            className=" w-80 mx-auto mt-20"
          >
            <img src="svg/onlinetest.svg" alt="" />
          </div>
          <div className=" mt-20 space-y-5">
            <button
              onClick={() => setSem("sem1")}
              data-aos-duration="300"
              data-aos="fade-up"
              data-aos-delay="200"
              className=" button"
            >
              1st Semester
            </button>
            <button
              onClick={() => setSem("sem2")}
              data-aos-duration="300"
              data-aos="fade-up"
              data-aos-delay="300"
              className=" button"
            >
              2nd Semester
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fybca;
