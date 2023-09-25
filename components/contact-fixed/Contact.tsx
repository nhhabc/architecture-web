import { Link } from "@chakra-ui/react";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div id="button-contact-vr" className="">
        <div id="gom-all-in-one">
          <div id="zalo-vr" className="button-contact">
            <div className="phone-vr">
              <div className="phone-vr-circle-fill"></div>
              <div className="zalo-vr-circle-filled"></div>
              <div className="phone-vr-img-circle">
                <Link className="img_icon" target="_blank" href="https://zalo.me/pc">
                  {/* <img src="/assets/img/zalo.png" alt="" /> */}
                  <FaFacebook fontSize={"28px"} color={"#fff"} />
                </Link>
              </div>
            </div>
          </div>

          <div id="phone-vr" className="button-contact">
            <div className="phone-vr">
              <div className="phone-vr-circle-fill"></div>
              <div className="phone-vr-circle-filled"></div>
              <div className="phone-vr-img-circle">
                <Link className="img_icon" href="tel:0974750222 - 0763888333">
                  <img src="/images/zalo.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
