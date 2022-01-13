import Header from "./Header";
import { RiCloseLine, RiArrowGoBackLine } from "react-icons/ri";
import Link from "next/link";

function Subject({ sub1, sub2, sub3, sub4 }) {
  return (
    <div className="background">
      <div className="innerdiv">
        <div className="  flex justify-between">
          <Header />
          
            <RiArrowGoBackLine onClick={()=> location.reload(true)} className=" text-2xl m-1 " />
          
        </div>
        <div className=" space-y-4 mt-20">
          <button
            data-aos-duration="300"
            data-aos="fade-up"
            data-aos-delay="100"
            className=" button"
          >
            {sub1}
          </button>
          <button
            data-aos-duration="300"
            data-aos="fade-up"
            data-aos-delay="200"
            className=" button"
          >
            {sub2}
          </button>
          <button
            data-aos-duration="300"
            data-aos="fade-up"
            data-aos-delay="300"
            className=" button"
          >
            {sub3}
          </button>
          <button
            data-aos-duration="300"
            data-aos="fade-up"
            data-aos-delay="400"
            className=" button"
          >
            {sub4}
          </button>
        </div>
        <div
          data-aos-duration="300"
          data-aos="fade-down"
          data-aos-delay="300"
          className=" mt-10"
        >
          <img src="svg/product.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Subject;
