/*eslint-disable*/
import React from "react";
import styles from "../assets/css/footer.css";
import './DefaultFooter.css'

// reactstrap components
import { Container, Row , Col} from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="footer-widget">
                <h4>Visit</h4>

                <a href="https://www.google.com/maps/dir/42.2412288,-71.0148096/1860+SW+Fountainview+Blvd,+Port+St.+Lucie,+FL+34986/@34.4430033,-85.3523432,5z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x88deeb7f6a4ac5c1:0x7fc1901a84852bba!2m2!1d-80.4115919!2d27.3092625">
                    <span>
                        <div>
                        <i className="fa fa-home" aria-hidden="true" style={{color: "black"}}></i>
                        </div>
                        <a href="https://www.google.com/maps/dir/42.2412288,-71.0148096/1860+SW+Fountainview+Blvd,+Port+St.+Lucie,+FL+34986/@34.4430033,-85.3523432,5z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x88deeb7f6a4ac5c1:0x7fc1901a84852bba!2m2!1d-80.4115919!2d27.3092625" style={{color: "black"}} className="contact-link">1860 SW Fountainview Blvd. <br></br> Port Saint Lucie, FL 34986</a>
                    </span>
                </a>


              </div>
            </div>

            <div className="col-sm-1">
              </div>
                <div className="col-xl-3">
                  <div className="footer-widget-content">
                    <h4>Stay in touch</h4>


                    <div className="footer-widget-content">
                        <a href="mailto:info@WillardDevelopment.com" className="contact-link blue">
                            <i className="fa fa-mail-bulk" aria-hidden="true"></i>   Info@Willarddevelopment.com
                        </a>
                        <div><br></br></div>
                        <a href="tel:7723403444" className="contact-link">
                            <i className="fa fa-phone" aria-hidden="true"></i>   772.340.3444
                        </a>
                        <div className="footer-widget">
                            <ul>
                            {/* Add a space using CSS */}
                            <div><br></br></div>
                            <li className="spacer">&nbsp;</li>
                            <div>
                                <li><a href="https://www.facebook.com/pages/category/Construction-Company/Willard-Development-Inc-254837794688114/" className="contact-link"><i className="fab fa-facebook-square"></i></a></li>
                                <li><a href="https://twitter.com/WillardDevelop" className="contact-link"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.instagram.com/willarddevelopmentinc/" className="contact-link"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UCmmmebZjDlNpqaOVKHZr0ZA" className="contact-link"><i className="fab fa-youtube"></i></a></li>
                            </div>
                            </ul>
                        </div>
                    </div>


                  </div>
                </div>

            <div className="col-sm-1">
            </div>
            <div className="col-xl-3">





                    <ul className="opening-time2">

                      <li><h4>Opening Hours</h4><p><strong><i className="fa fa-check"></i> &nbsp;Mon-Fri : </strong> 9am - 5pm</p></li>
                    </ul>
                    <ul className="opening-time">
                      <li><p><strong><i className="fa fa-times"></i> &nbsp; Sat-Sun : </strong> Closed</p></li>
                    </ul>




            </div>





          </div>

        </div>


      </footer>
    </>
  );
}

export default DefaultFooter;
