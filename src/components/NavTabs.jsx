import React, { useState } from "react";
import london from "../assets/images/png/london.jpg";
import paris from "../assets/images/png/paris.jpg";
import canada from "../assets/images/png/canada.jpg";

const NavTabs = () => {
  const [Show, setShow] = useState("0");
  const changetab = (e) => {
    setShow(e.target.id);
  };
  return (
    <>
      <section className="bg-black min_100vh">
        <div className="d-flex justify-content-center py-5 align-items-center">
          <div className="mw_800 min_h_800">
            <div className="d-flex justify-content-between py-5 align-items-center">
              <button
                onClick={changetab}
                id="0"
                className="fs-2 py-3 mx-5 px-3 br_15 border-0"
              >
                London
              </button>
              <button
                onClick={changetab}
                id="1"
                className="fs-2 py-3 mx-5 px-3 br_15  border-0"
              >
                Paris
              </button>
              <button
                onClick={changetab}
                id="2"
                className="fs-2 py-3 mx-5 px-3 br_15 border-0"
              >
                Canada
              </button>
            </div>
            <div>
              <div className={Show === "0" ? "d-block" : "d-none"}>
                <h2 className="text-white">This is content of london</h2>
                <img src={london} alt="london image" className="mw_500 h_500" />
              </div>
              <div className={Show === "1" ? "d-block" : "d-none"}>
                <h2 className="text-white">This is content of paris</h2>
                <img src={paris} alt="paris image" className="mw_500 h_500" />
              </div>
              <div className={Show === "2" ? "d-block" : "d-none"}>
                <h2 className="text-white">This is content of canada</h2>
                <img src={canada} alt="canada image" className="mw_500 h_500" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavTabs;
