import Header from "./Header";
import { RiCloseLine, RiArrowGoBackLine } from "react-icons/ri";
import Link from "next/link";
import { useUserContext } from "../context/userContext";
import Head from "next/head"
function Subject({
  sub1,
  sub2,
  sub3,
  sub4,
  subName1,
  subName2,
  subName3,
  subName4,
}) {
  const { subject, setSubject } = useUserContext();
  return (
    <>
      <Head>
        <title>Fybca</title>
      </Head>

      <div className="background">
        <div className="innerdiv">
          <div className="  flex justify-between">
            <Header />

            <RiArrowGoBackLine
              onClick={() => location.reload(true)}
              className=" text-2xl m-1 "
            />
          </div>
          <div className=" space-y-4 mt-20">
            <Link href="/subDashboard">
              <button
                onClick={() => setSubject(`${subName1}`)}
                data-aos-duration="300"
                data-aos="fade-up"
                data-aos-delay="100"
                className=" button"
              >
                {sub1}
              </button>
            </Link>
            <Link href="/subDashboard">
              <button
                onClick={() => setSubject(`${subName2}`)}
                data-aos-duration="300"
                data-aos="fade-up"
                data-aos-delay="200"
                className=" button"
              >
                {sub2}
              </button>
            </Link>
            <Link href="/subDashboard">
              <button
                onClick={() => setSubject(`${subName3}`)}
                data-aos-duration="300"
                data-aos="fade-up"
                data-aos-delay="300"
                className=" button"
              >
                {sub3}
              </button>
            </Link>
            <Link href="/subDashboard">
              <button
                onClick={() => setSubject(`${subName4}`)}
                data-aos-duration="300"
                data-aos="fade-up"
                data-aos-delay="400"
                className=" button"
              >
                {sub4}
              </button>
            </Link>
          </div>
          <div
            data-aos-duration="300"
            data-aos="zoom-in"
            data-aos-delay="500"
            className=" mt-10"
          >
            <img src="svg/product.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Subject;
