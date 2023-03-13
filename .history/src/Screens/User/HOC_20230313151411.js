import React, { useState } from "react";
import UserNav from "./UserNav";
import UserSide from "./UserSide";

const HOC = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(false);
    return (
      <>
        <section className="flex overflow-x-hidden">
          {/* Sidebar */}
          <div
            className={
              hamb
                ? " absolute top-0 z-30 md:w-auto shadow-md bg-slate-200  w-60 transition-all md:-left-full left duration-150  h-auto  left-0 "
                : " md:w-72 z-30 bg-slate-200  shadow-md  md:static absolute top-0 -left-full  h-auto transition-all duration-150 "
            }
          >
            <UserSide hamb={hamb} setHamb={setHamb} />
          </div>
          {/* Components & Navbar */}
          <div
            className={
              hamb
                ? " transition-all px-4 py-2  bg-white duration-150 w-full h-screen"
                : " w-full h-screen  px-4 py-2  bg-white z-50 transition-all duration-150 "
            }
          >
            <UserNav hamb={hamb} setHamb={setHamb} />
            <div className="my-6  h-[87%] wcomp overflow-y-auto" id='wcomp'>
              <Wcomponenet />
            </div>
          </div>
        </section>
      </>
    );
  };
};

export default HOC;
