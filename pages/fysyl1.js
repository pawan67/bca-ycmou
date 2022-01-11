import Header from "../components/Header";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// AOS.init();
function Fysl1() {
  const [sub, setSub] = useState("");
  if (sub == "cpp") {
    return (
      <div className=" mx-auto">
        <div className="  bg-green-400 inline-block px-3 py-2 rounded-xl font-semibold">
          <a href="pdf/syllabus/C++Syllabus.pdf">Download PDF</a>
        </div>
        <img className=" mx-auto" src="img/c++.png" alt="" />
      </div>
    );
  }
  if (sub == "maths") {
    return (
      <div className=" mx-auto">
        <div className="  bg-green-400 inline-block px-3 py-2 rounded-xl font-semibold">
          <a href="pdf/syllabus/MathematicsSyllabus.pdf">Download PDF</a>
        </div>
        <img className=" mx-auto" src="img/maths.png" alt="" />
      </div>
    );
  }
  if (sub == "english") {
    return (
      <div className=" mx-auto">
        <div className="  bg-green-400 inline-block px-3 py-2 rounded-xl font-semibold">
          <a href="pdf/syllabus/English_Communication.pdf">Download PDF</a>
        </div>
        <img className=" mx-auto" src="img/english.png" alt="" />
      </div>
    );
  }
  if (sub == "c") {
    return (
      <div className=" mx-auto">
        <div className="  bg-green-400 inline-block px-3 py-2 rounded-xl font-semibold">
          <a href="pdf/syllabus/CSyllabus.pdf">Download PDF</a>
        </div>
        <img className=" mx-auto" src="img/c.png" alt="" />
      </div>
    );
  }
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700&display=swap');
        </style>
      </Head>
      <div className=" background">
        <div className=" innerdiv">
          <Header />
          <div className=" space-y-4 mt-20">
            <button
              onClick={() => setSub("english")}
              data-aos-duration="500"
              data-aos="fade-up"
              data-aos-delay="300"
              className=" button"
            >
              English Communication
            </button>

            <Link href="">
              <button
                onClick={() => setSub("maths")}
                data-aos-duration="500"
                data-aos="fade-up"
                data-aos-delay="400"
                className=" button"
              >
                Maths
              </button>
            </Link>
            <Link href="">
              <button
                onClick={() => setSub("c")}
                data-aos-duration="500"
                data-aos="fade-up"
                data-aos-delay="500"
                className=" button"
              >
                Problem solving using computers
              </button>
            </Link>
            <Link href="">
              <button
                onClick={() => setSub("cpp")}
                data-aos-duration="500"
                data-aos="fade-up"
                data-aos-delay="600"
                className=" button"
              >
                {" "}
                Programming with C++
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fysl1;
