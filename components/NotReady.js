import Header from "../components/Header";

function NotReady() {
  return (
    <div>
      <div className="background">
        <div className="innerdiv">
          <Header />
          <img className=" mt-32 w-3/4 mx-auto" src="svg/coding.svg" alt="" />
          <h1 className=" animate-pulse text-center mt-10 text-xl">
            Under Development...
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NotReady;
