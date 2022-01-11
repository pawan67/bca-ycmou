import Header from "./Header";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function FirstPage({ firstLink, secondLink, firstSem, secondSem }) {
  return (
    <div>
      <div className=" overflow-hidden background">
        <div className=" innerdiv">
          <Header />
          <div
            data-aos-duration="500"
            data-aos="fade-down"
            data-aos-delay="300"
            className=" w-64 mx-auto mt-20"
          >
            <img src="svg/coding.svg" alt="" />
          </div>
          <div className=" space-y-5 mt-36">
            <Link href={firstLink}>
              <button
                data-aos-duration="500"
                data-aos="fade-up"
                data-aos-delay="100"
                className=" button"
              >
                {firstSem}
              </button>
            </Link>
            <Link href={secondLink}>
              <button
                data-aos-duration="500"
                data-aos="fade-up"
                data-aos-delay="200"
                className=" button"
              >
                {secondSem}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
