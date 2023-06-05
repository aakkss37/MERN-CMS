// import { useRef, useLayoutEffect,  } from 'react'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

import ourHeadquater from "../../../images/contact/contact-our-headquater.png";


import OfficeAdd from "../utils/OfficeAdd";
import { contactMediaList, officeAddList } from "./contactData";
import Header from "../../Regular/Header";


const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");

  const messageSendHandler = async () => {
    try {
      const resp = await axios.post(
        "https://mern-cms-server.onrender.com/contact-page/add-query",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          subject: subject,
        }
      );
      console.log("responce: ", resp.data.data);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setSubject("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* hero section starts */}
      <section data-aos="zoom-in">
        <Header image="contact-bg-img" title="Contact Us" />
        {/* we want to hear div  */}
        <div data-aos="fade-up" className="px-3 sm:px-20 md:px-44 ">
          <p className="text-[24px] font-semibold leading-[38px] sm:leading-[58px] lg:my-9 text-center mt-5">
            WE WANT TO HEAR FROM YOU
          </p>

          <p className="text-[16px] md:text-[16px] text-center my-3 mt-5 lg:px-54">
            Have a question for us? Want to learn more about what we do or how
            to partner with us?
            <br className="my-2" />
            OR
            <br className="my-2" />
            Maybe you just want to chat about our technology and know why we are
            so excited about it?
            <br />
            We would love to hear from you. You can reach us through any of the
            ways below, and we will take it from there!
          </p>
        </div>
      </section>
      {/* hero section ends */}

      {/* our headquater div */}
      <div
        data-aos="fade-up"
        className="contact-our-headquater-bg w-screen   mt-24 md:mt-24 flex flex-col-reverse items-center justify-center md:flex-row md:items-center md:justify-evenly md:h-[450px] "
      >
        {/* text content */}
        <div className=" text-white flex flex-col items-center justify-center md:items-start md:justify-start gap-1 mt-[50px] mb-[-10px] lg:mb-[-30px] px-5">
          <p className="text-[30px] md:text-[40px] font-bold mb-2">
            Our Headquater
          </p>
          <p className="text-[20px] text-center md:text-start md:w-[317px] lg:w-[327px] xl:w-full">
            California Office
            <br />
            193 Blue Ravine Road, Suite 160, Folsom, CA 95630
          </p>
          <br />
          <p className="text-[18px]">
            (916) 655-7745 [Office]
            <br />
            (916) 848-3659 [Fax]
          </p>
          <br />
          <p className="text-[18px] mb-3">
            <a className="underline" href="mailto:info@agileglobal.com">
              info@agileglobal.com
            </a>
          </p>
          {/* social imgs */}
          <div className="flex items-center justify-center gap-4">
            {contactMediaList?.map((elem) => (
              <img
                key={elem?.icon}
                src={elem?.icon}
                alt=""
                className="h-[30px] w-[30px]"
              />
            ))}
          </div>
        </div>
        {/* img div */}
        <div>
          <img
            className="h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px] mt-[-50px] md:mt-[80px]"
            src={ourHeadquater}
            alt=""
          />
        </div>
      </div>

      {/* our inter natioal offices div sarts  */}
      <div
        data-aos="fade-up"
        className="mt-16 mb-16 flex items-center justify-center"
      >
        <div className="px-3">
          <p className="text-[34px] md:text-[34px] font-semibold mb-2 text-center">
            Our International Office
          </p>
        </div>
      </div>

      {/* headquater div starts */}
      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row md:flex-wrap items-center justify-center md:justify-evenly gap-[165px] md:gap-x-[150px] xl:gap-5"
      >
        {officeAddList?.map((elem) => (
          <OfficeAdd key={elem?.place} hq={elem?.icon} place={elem?.place} />
        ))}
      </div>

      {/* form section */}
      <div
        data-aos="fade-up"
        className=" py-10 contact-form-drop-shadow flex flex-col items-center justify-center mt-32 px-3 md:px-10  sm:mx-5 md:mx-20 lg:mx-36 xl:mx-64"
      >
        {/* inner div */}
        {/* headidng */}
        <p className="text-[34px] sm:text-[40px] font-bold mb-11">
          Have any queries?
        </p>
        {/* form input fields */}
        <div className=" w-full flex flex-col items-center justify-center gap-2">
          {/* full name */}
          <div className="flex w-full  flex-col sm:flex-row items-center justify-evenly  sm:gap-3 my-2">
            {/* first name div */}
            <div className="flex w-full sm:w-[50%] flex-col items-start justify-start">
              <p className="text-[16px]  ">First Name</p>
              <input
                className="px-3 w-full h-[30px] rounded-[8px]"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            {/* last name div */}
            <div className="flex w-full sm:w-[50%] flex-col items-start justify-start ">
              <p className="text-[16px]">Last Name</p>
              <input
                className="px-3 w-full h-[30px] rounded-[8px]"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          {/* email and phone  */}
          <div className="flex w-full flex-col sm:flex-row  gap-3 my-2">
            {/* femaildiv */}
            <div className="flex flex-col sm:w-[50%] items-start justify-start ">
              <p className="text-[16px]">email</p>
              <input
                className="px-3 w-full h-[30px] rounded-[8px]"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* number div */}
            <div className="flex w-full sm:w-[50%] flex-col items-start justify-start">
              <p className="text-[16px]">Phone Number</p>
              <input
                className="px-3 w-full h-[30px] rounded-[8px]"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          {/* subjects */}
          {/* subject div */}
          <div className="flex w-full flex-col items-start justify-start ">
            <p className="text-[16px]">Subject</p>
            <input
              className="px-3 w-full h-[30px] rounded-[8px]"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          {/*  checkbox */}
          <div className="flex items-center justify-start gap-3 mt-3 sm:items-start sm:justify-start">
            <input className="text-[18px] h-[14px] w-[14px]" type="checkbox" />
            <p className="text-[14px]">
              You accept the terms of service and the privacy policy
            </p>
          </div>

          <button
            className="my-4 font-bold w-[170px] h-[40px] rounded-[55px] text-white bg-[#094C99] "
            onClick={messageSendHandler}
          >
            Send message
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
