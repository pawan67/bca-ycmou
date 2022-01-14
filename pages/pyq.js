import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Pyq() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className=" background">
      <div className="innerdiv">
        <Header />
        <div className=" w-3/4  mx-auto mt-20">
            <img src="svg/landing.svg" alt="" />
        </div>
        <div className=" space-y-4 mt-20">
          <button
            data-aos-duration="300"
            data-aos="fade-up"
            data-aos-delay="100"
            className="button"
          >
            2017
          </button>
          <button
            data-aos-duration="300"
            data-aos="fade-up"
            data-aos-delay="200"
            className="button"
          >
            2018
          </button>
          <button
            data-aos-duration="300"
            data-aos="fade-up"
            data-aos-delay="300"
            className="button"
          >
            2019
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pyq;
