import Header from "./Header";
import { useUserContext } from "../context/userContext";
import Link from "next/link";

function SubDashboard() {
  const { subject, setSubject } = useUserContext();
  console.log(subject);
  return (
    <div className="background">
      <div className="innerdiv">
        <Header />
        <div
          data-aos-duration="300"
          data-aos="fade-down"
          className=" w-3/4 mx-auto mt-20  "
        >
          <img src="svg/maths.svg" alt="" />
        </div>
        <div className=" space-y-4 mt-10">
          <Link href="/syllabus">
            <button
              data-aos-duration="300"
              data-aos="fade-up"
              data-aos-delay="100"
              className="button"
            >
              Syllabus
            </button>
          </Link>
          <Link href="/notes">
            <button
              data-aos-duration="300"
              data-aos="fade-up"
              data-aos-delay="200"
              className="button"
            >
              Notes
            </button>
          </Link>
          <Link href="/pyq">
            <button
              data-aos-duration="300"
              data-aos="fade-up"
              data-aos-delay="300"
              className="button"
            >
              Previous Year Questions papers
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SubDashboard;
