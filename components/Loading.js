function loading() {
  return (
    <div className=" flex bg-white justify-center items-center background">
      <div className=" animate-pulse w-80">
        <img src="svg/loading.svg" alt="" />
        <h1 className=" text-2xl text-center text-black font-bold  mt-10 ">
          Loading...
        </h1>
      </div>
    </div>
  );
}

export default loading;
