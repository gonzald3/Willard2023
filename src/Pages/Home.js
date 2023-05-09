import React from "react";
import Navibar from "../Tools/Navibar";




function Home() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <Navibar />
      <div className="page-header">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: "url(" + require("../Img/ReceptionDeskCompressed.jpg") + ")",
                    }}
                ></div>
                <div className="content">

                </div>

                
        </div>
        <div>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
        </div>
    </>
  );
}

export default Home;
