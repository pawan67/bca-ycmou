import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/userContext";

function Pyq() {
  const { subject, setSubject } = useUserContext();
  const [year, setYear] = useState();
  useEffect(() => {
    AOS.init();
  });
  if (year == "2018") {
    return (
      <div className="background">
        <div className="innerdiv">
          <Header />
          <div className=" mt-32">
            <a
              className="button"
              href={`pdf/pyqs/Jan_2018/Sem_1/${subject}.pdf`}
            >
              {year} January{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
  if (year == "2019") {
    return (
      <div className="background">
        <div className="innerdiv">
          <Header />
          <div className=" mt-32">
            <a
              className="button"
              href={`pdf/pyqs/Jan_2019/Sem_1/${subject}.pdf`}
            >
              {year} January{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" background">
      <div className="innerdiv">
        <Header />
        <div className=" w-3/4  mx-auto mt-20">
          <img src="svg/landing.svg" alt="" />
        </div>
        <div className=" space-y-4 mt-20">
          <button
            onClick={() => setYear("2018")}
            data-aos-duration="300"
            data-aos="fade-up"
            data-aos-delay="200"
            className="button"
          >
            2018
          </button>
          <button
            onClick={() => setYear("2019")}
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
