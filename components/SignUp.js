import Link from "next/link";
import { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { useUserContext } from "../context/userContext";

function SignUp() {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const { registerUser, signInWithGoogle } = useUserContext();
  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    if (email && name && password) registerUser(email, name, password);
  };
  return (
    <div className="  font-nunito bg-[#191720] min-w-screen min-h-screen">
      <div className=" innerdiv">
        <div data-aos="fade-down" className=" mx-auto max-w-sm">
          <img className="  mt-5 " src="svg/signup.svg" alt="" />
        </div>
        <div className=" mt-10 text-white ">
          <h1 className=" text-2xl font-bold text-center">
            Website for YCMOU BCA Students.{" "}
          </h1>
          <h2 className=" text-[#848592] text-medium mt-5 font-medium text-center">
            Here You can find Syllabus, Important notes and Previous year
            question papers.
          </h2>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <div className=" text-white flex flex-col">
              <input
                ref={emailRef}
                className=" border-[#3f3e47] border-[1px] mt-5 px-4 py-3 w-[280px] lg:w-[320px] rounded-2xl bg-[#1e1c24] outline-none   mx-auto"
                type="text"
                placeholder="Email"
              />
              <input
                ref={nameRef}
                className=" border-[#3f3e47] border-[1px] mt-3 px-4 py-3 w-[280px] lg:w-[320px] rounded-2xl bg-[#1e1c24] outline-none   mx-auto"
                type="text"
                placeholder="Full Name"
              />
              <input
                ref={passwordRef}
                className=" border-[#3f3e47] border-[1px] mt-3 px-4 py-3 lg:w-[320px]  w-[280px]  rounded-2xl bg-[#1e1c24] outline-none   mx-auto"
                type="password"
                placeholder="Password"
              />
            </div>
            <button
              className=" flex justify-center font-bold mt-5 px-4 py-3 lg:w-[320px]  w-[280px]  rounded-2xl bg-[#ffffff] outline-none   mx-auto"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Google signup */}
        <div
          onClick={signInWithGoogle}
          className=" cursor-pointer bg-white flex items-center justify-center py-3 rounded-2xl lg:w-[320px]  w-[280px]  mx-auto mt-5"
        >
          <FcGoogle className=" text-xl mr-1" />{" "}
          <span className=" font-bold">Sign up with Google</span>
        </div>
        <div className=" text-[#cacaca] mt-5 flex justify-center">
          <h1>
            Already registered
            <Link href="/signin">
              <span className=" underline ml-1 cursor-pointer text-white">
                login here
              </span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
