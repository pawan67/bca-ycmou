import Link from "next/link";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function SecondPage({syllabusLink}) {
  return (
    <div className=" background">
      <div className=" innerdiv">
        <Header />
        <div className=" space-y-4 mt-24">
          <Link href={syllabusLink}>
            <button
              data-aos-duration="500"
              data-aos="fade-down"
              data-aos-delay="200"
              className=" button"
            >
              Syllabus
            </button>
          </Link>
          <Link href="">
            <button
              data-aos-duration="500"
              data-aos="fade-down"
              data-aos-delay="300"
              className=" button"
            >
              {" "}
              Books PDF{" "}
            </button>
          </Link>
          <Link href="">
            <button
              data-aos-duration="500"
              data-aos="fade-down"
              data-aos-delay="400"
              className=" button"
            >
              {" "}
              Previous Year questions
            </button>
          </Link>
        </div>
        <div
          data-aos-duration="500"
          data-aos="fade-up"
          data-aos-delay="200"
          className=" mt-20 "
        >
          <img src="svg/teaching.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
