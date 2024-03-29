import React from "react";
import logout from "../assets/banner.jpg";
function LoggedOut() {
  return (
    <div className="mt-8 h-fit md:mt-16 md:pl-36 flex justify-center items-center flex-col relative">
      <p className="p-2 text-3xl font-bold text-white antialiased mb-3">
        Welcome to PlayNow
      </p>
      <div className="absolute top-32">
        <img
          src={logout}
          className="rounded-bl-[150px] rounded-tr-[150px]  opacity-10 w-full z-1  sticky border-collapse shadow-cyan-600 shadow-md"
        />
      </div>
    </div>
  );
}

export default LoggedOut;
