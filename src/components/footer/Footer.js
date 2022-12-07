import React from "react";
import Logo from "../../assets/Logo.png";
import {
  HiOutlineLocationMarker,
  HiPhone,
  HiOutlineQuestionMarkCircle,
  HiOutlineExternalLink,
} from "react-icons/hi";

function Footer() {
  return (
    <div className="section container-fluid pt-5 ">
      <hr className="pb-4" />
      <div className="row text-start ">
        <div className="col-4 d-flex justify-content-center p-5">
          <img src={Logo} alt="" className="w-50" />
        </div>
        <div className="col me-4">
          <h4 className="mb-4">Contact Us</h4>
          <div className="mb-2">
            <HiOutlineLocationMarker className="me-2" />
            <span>111 north avenue Orlando</span>
          </div>

          <HiPhone className="me-2" />
          <span>222-244-6779</span>
        </div>
        <div className="col">
          <h4 className="mb-4">Company</h4>
          <HiOutlineQuestionMarkCircle className="me-2" />
          <span>About Us</span>
        </div>
        <div className="col">
          <h4 className="mb-4">Resources</h4>
          <HiOutlineExternalLink className="me-2" />
          <span>Follow The Link </span>
        </div>
        <div className="col">
          <h4 className="mb-4">Resources</h4>
          <HiOutlineExternalLink className="me-2" />
          <span>Follow The Link </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
