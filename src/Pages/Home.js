import React from "react";
import Navibar from "../Tools/Navibar";
import {Col, Container, Row} from "reactstrap";



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
      

        <div className="wrapper">
        

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



        


        <div className="main">

            <div className="section section-about-us">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="8">
                    <h2 style={{color: "#c9d0d4", fontFamily: "Helvetica Neue, sans-serif", fontSize: "46px", fontWeight: "100", lineHeight: "50px", letterSpacing: "1px", padding: "0 0 40px", borderBottom: "double #555"}} className="title">Company History</h2>
                    <h4  style={{ color: "#000000", textAlign: "center", fontFamily: 'Verdana, sans-serif', fontSize: "16px", lineHeight: "26px", padding: "5%", margin: "0"}}>
                      Willard Development is a privately held, real
                      estate firm, engaged in the acquisition,
                      construction and development, and property
                      management of medical, professional, and
                      industrial properties in the South Florida
                      commercial real estate market. The Willard
                      Development organization has been one of the most active
                      commercial contractor/developer in Port Saint
                      Lucie, Florida, over the past decade.
                      Willard Development has been headquartered in
                      Port Saint Lucie for the past 13 years and looks
                      to the bright future that St. Lucie is poised
                      for as a source of inspiration to continue to
                      build high quality commercial real estate in
                      the market.
                    </h4>
                  </Col>
                </Row>
                <div className="separator separator-primary"></div>
                <div className="section-story-overview">
                  <Row>
                    <Col md="6">
                      <div
                          className="image-container image-left"
                          style={{
                            backgroundImage:
                                "url(" + require("../Img/teamProject-minCompressed.jpg") + ")",
                          }}
                      >
                        <p className="blockquote blockquote-info">
                          "We are dedicated to bringing you the
                          space you need to succeed" <br></br>
                          <br></br>
                          <small>-Our Motto</small>
                        </p>

                      </div>
                      <br></br>
                      <br></br>
                      <br></br><br></br>
                      <br></br>
                      <br></br>
                      <br></br>


                      {/*
                      <div
                          className="image-container"
                          style={{
                            backgroundImage:
                                "url(" + require("assets/img/lakeWhitney-min.jpg") + ")",
                          }}
                      ></div>
                      */}
                    </Col>
                    <Col md="5">
                      <div
                          className="image-container image-right"
                          style={{
                            backgroundImage:
                                "url(" + require("../Img/lakeWitney2-min.jpeg") + ")",
                          }}
                      ></div>
                      <br></br>
                      <br></br>

                      <h3>
                        Visit one of our many locations here in South Florida . . .
                      </h3>
                      <p>

                      </p>

                    </Col>
                  </Row>
                  {/* <Row><Testimonials /></Row> */}

                </div>
              </Container>
            </div>


        </div>
        {/* <DefaultFooter /> */}
      </div>


        
    </>
  );
}

export default Home;
