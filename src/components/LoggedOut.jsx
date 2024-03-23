import React from "react";
import logout from "../assets/banner.jpg";
function LoggedOut() {
  return (
    <div className="mt-8 h-fit md:mt-16 md:pl-36 flex justify-center items-center flex-col">
      <p className="p-2 text-3xl font-bold text-white antialiased mb-3">
        Welcome to PlayNow
      </p>
      <img src={logout} className="rounded" />
    </div>
  );
}

export default LoggedOut;
