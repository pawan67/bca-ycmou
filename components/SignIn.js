import React, { useRef } from "react";
//FcGoogle
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useUserContext } from "../context/userContext";
function SignIn() {
  const emailRef = useRef();

  const passwordRef = useRef();
  const { signInUser, forgotPassword, signInWithGoogle } = useUserContext();
  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPassHandler = () => {
    const email = emailRef.current.value;
    if (email) forgotPassword(email).then(() => (emailRef.current.value = " "));
  };
  return (
    <>
      <div className=" font-nunito bg-[#191720] w-screen min-h-screen">
        <div className=" innerdiv">
          <div
            data-aos-duration="500"
            data-aos="fade"
            data-aos-delay="500"
            className=" mx-auto max-w-sm"
          >
            <img className="  mt-5 " src="svg/coding.svg" alt="" />
          </div>
          <div className=" mt-10 text-2xl sm:ml-10   text-white ">
            <h1
              data-aos-duration="500"
              data-aos="fade-left"
              data-aos-delay="300"
              className=" font-bold"
            >
              Let's sign you in.
            </h1>
            <h1
              data-aos-duration="500"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              Welcome back.
            </h1>
            <h1
              data-aos-duration="500"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              You've been missed!
            </h1>
          </div>
          <div>
            <form onSubmit={onSubmit}>
              <div className=" text-white flex flex-col">
                <input
                  data-aos-duration="500"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  ref={emailRef}
                  className=" border-[#3f3e47] border-[1px] mt-5 px-4 py-3 w-[280px] lg:w-[320px] rounded-2xl bg-[#1e1c24] outline-none   mx-auto"
                  type="text"
                  placeholder="Email"
                />

                <input
                  data-aos-duration="500"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  ref={passwordRef}
                  className=" border-[#3f3e47] border-[1px] mt-3 px-4 py-3 lg:w-[320px]  w-[280px]  rounded-2xl bg-[#1e1c24] outline-none   mx-auto"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <button
                data-aos-duration="500"
                data-aos="fade-up"
                data-aos-delay="500"
                className=" flex justify-center font-bold mt-5 px-4 py-3 lg:w-[320px]  w-[280px]  rounded-2xl bg-[#ffffff] outline-none   mx-auto"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>

          {/* Google signup */}
          <div
            data-aos-duration="500"
            data-aos="fade-up"
            data-aos-delay="600"
            onClick={signInWithGoogle}
            className=" cursor-pointer bg-white flex items-center justify-center py-3 rounded-2xl lg:w-[320px]  w-[280px]  mx-auto mt-5"
          >
            <FcGoogle className=" text-xl mr-1" />
            <span className=" font-bold">Sign in with Google</span>
          </div>
          <div className=" text-[#cacaca] mt-5 flex justify-center">
            <h1>
              Don't have an account ?
              <Link href="/">
                <span className=" underline ml-1 cursor-pointer text-white">
                  Register
                </span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
