import { useRef, useLayoutEffect } from 'react'
import React , {useEffect , useState} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bg from '../../images/contact/hero-bg.svg'
import fb from '../../images/contact/contact-fb.svg'
import ig from '../../images/contact/contact-ig.svg'
import linkedin from '../../images/contact/contact-in.svg'
import tw from '../../images/contact/contact-tw.svg'

import ourHeadquater from '../../images/contact/contact-our-headquater.png'
import officeImg1 from '../../images/contact/contact-office-1.svg'


const Contact = () => {

  useEffect(()=>{
    Aos.init({duration : 2000})
  } , [])


  gsap.registerPlugin(ScrollTrigger);
  const firstCircle = useRef();
  const secondCircle = useRef();
  const thirdCircle = useRef();



  useLayoutEffect(() => {


    let ctx = gsap.context(() => {
      gsap.to(firstCircle.current, {
        y: -200,
        scrollTrigger: {
          trigger: "#test",
          // markers: true,
          start: "top 78%",
          end: "top 40%",
          scrub: true,
        }
      });


      gsap.to(secondCircle.current, {
        y: -200,
        scrollTrigger: {
          trigger: "#test2",
          // markers: true,
          start: "top 78%",
          end: "top 40%",
          scrub: true,
        }
      });

      gsap.to(thirdCircle.current, {
        y: -200,
        scrollTrigger: {
          trigger: "#test3",
          // markers: true,
          start: "top 78%",
          end: "top 40%",
          scrub: true,
        }
      });


    });
    return () => ctx.revert();

  }, []);
  return (
    <>
      {/* hero section starts */}
      <section data-aos="zoom-in">
        {/* contact bg div  */}
        <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] contact-bg-img flex items-center justify-center'>

          <h1 className='text-[34px]  sm:text-[64px] font-bold text-white'>Contact Us</h1>

        </div>

        {/* we want to hear div  */}
        <div data-aos="fade-up" className='px-3 sm:px-20 md:px-44 '>
          <p className='text-[28px] font-semibold leading-[38px] sm:leading-[58px] lg:my-9 text-center mt-5'>WE WANT TO HEAR FROM YOU</p>

          <p className='text-[18px] md:text-[20px] text-center my-3 mt-5 lg:px-54'>  Have a question for us?
            Want to learn more about what we do or how to partner with us?
            <br className='my-2' />
            OR
            <br className='my-2' />
            Maybe you just want to chat about our technology and know why we are so excited about it?
            <br />
            We would love to hear from you. You can reach us through any of the ways below, and we will take it from there!</p>
        </div>
      </section>
      {/* hero section ends */}





      {/* our headquater div */}
      <div data-aos="fade-up" className='contact-our-headquater-bg w-screen   mt-24 md:mt-24 flex flex-col-reverse items-center justify-center md:flex-row md:items-center md:justify-evenly md:h-[450px] '>
        {/* text content */}
        <div className=' text-white flex flex-col items-center justify-center md:items-start md:justify-start gap-1 mt-[50px] mb-[-10px] lg:mb-[-30px] px-5'>
          <p className='text-[34px] md:text-[48px] font-bold mb-2'>Our Headquater</p>
          <p className='text-[24px] text-center md:text-start md:w-[317px] lg:w-[327px] xl:w-full'>California Office
            <br />
            193 Blue Ravine Road, Suite 160, Folsom, CA 95630</p>
          <br />
          <p className='text-[24px]'>
            (916) 655-7745 [Office]
            <br />
            (916) 848-3659 [Fax]</p>
          <br />
          <p className='text-[24px] mb-3'><a className='underline' href="mailto:info@agileglobal.com">info@agileglobal.com</a></p>
          {/* social imgs */}
          <div className='flex items-center justify-center gap-4'>
            <img src={fb} alt="" />
            <img src={linkedin} alt="" />
            <img src={ig} alt="" />
            <img src={tw} alt="" />
          </div>
        </div>
        {/* img div */}
        <div>
          <img className='h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px] mt-[-50px] md:mt-[80px]' src={ourHeadquater} alt="" />
        </div>
      </div>






      {/* our inter natioal offices div sarts  */}
      <div data-aos="fade-up" className='mt-16 mb-16 flex items-center justify-center'>
        <div className='px-3'>
          <p className='text-[34px] md:text-[48px] font-semibold mb-2 text-center'>Our International Office</p>
        </div>
      </div>


      {/* headquater div starts */}
      <div data-aos="fade-up" className='flex flex-col md:flex-row md:flex-wrap items-center justify-center md:justify-evenly gap-[165px] md:gap-x-[150px] xl:gap-5'>
        {/* both circle div 1 */}
        <div className=' relative'>
          {/* static circle 1 */}
          <div className='static-c-1 w-[354px] h-[354px] rounded-full flex items-center justify-center '>
            <div className='  w-[346px] h-[346px] rounded-full  bg-white flex flex-col items-center pt-[50px]'>
              <p className='text-[24px] leading-[32px] my-2'>California</p>
              <p className='text-[16px]'>(916) 655-7745 [Work]</p>
              <p className='text-[16px]'>(916) 848-3659 [Fax]</p>
            </div>
          </div>
          {/* dynamic circle 1 */}
          <span id='test' ></span>
          <div ref={firstCircle} className='dynamic-c-1 absolute bottom-[-200px]'>
            <img src={officeImg1} alt="" />
          </div>
        </div>

        {/* both circle div 2 */}
        <div className=' relative'>
          {/* static circle 2 */}
          <div className='static-c-1 w-[354px] h-[354px] rounded-full flex items-center justify-center '>
            <div className='  w-[346px] h-[346px] rounded-full  bg-white flex flex-col items-center pt-[50px]'>
              <p className='text-[24px] leading-[32px] my-2'>California</p>
              <p className='text-[16px]'>(916) 655-7745 [Work]</p>
              <p className='text-[16px]'>(916) 848-3659 [Fax]</p>
            </div>
          </div>
          {/* dynamic circle 2 */}
          <span id='test2'></span>
          <div ref={secondCircle} className='dynamic-c-1 absolute bottom-[-200px]'>
            <img src={officeImg1} alt="" />
          </div>
        </div>



        {/* both circle div 3*/}
        <div className=' relative'>
          {/* static circle 3 */}
          <div className='static-c-1 w-[354px] h-[354px] rounded-full flex items-center justify-center '>
            <div className='  w-[346px] h-[346px] rounded-full  bg-white flex flex-col items-center pt-[50px]'>
              <p className='text-[24px] leading-[32px] my-2'>California</p>
              <p className='text-[16px]'>(916) 655-7745 [Work]</p>
              <p className='text-[16px]'>(916) 848-3659 [Fax]</p>
            </div>
          </div>
          {/* dynamic circle 3 */}
          <span id='test3'></span>
          <div ref={thirdCircle} className='dynamic-c-1 absolute bottom-[-200px]'>
            <img src={officeImg1} alt="" />
          </div>
        </div>
      </div>





      {/* form section */}
      <div data-aos="fade-up" className=' py-10 contact-form-drop-shadow flex flex-col items-center justify-center mt-32 px-3 md:px-10  sm:mx-5 md:mx-20 lg:mx-36 xl:mx-64'>
        {/* inner div */}
        {/* headidng */}
        <p className='text-[34px] sm:text-[48px] font-bold mb-11'>Have any queries?</p>
        {/* form input fields */}
        <div className=' w-full flex flex-col items-center justify-center gap-2'>
          {/* full name */}
          <div className='flex w-full  flex-col sm:flex-row items-center justify-evenly  sm:gap-3 my-2'>
            {/* first name div */}
            <div className='flex w-full sm:w-[50%] flex-col items-start justify-start'>
              <p className='text-[18px]  '>First Name</p>
              <input className='px-3 w-full h-[40px] rounded-[8px]' type="text" />
            </div>

            {/* last name div */}
            <div className='flex w-full sm:w-[50%] flex-col items-start justify-start '>
              <p className='text-[18px]'>Last Name</p>
              <input className='px-3 w-full h-[40px] rounded-[8px]' type="text" />
            </div>
          </div>
          {/* email and phone  */}
          <div className='flex w-full flex-col sm:flex-row  gap-3 my-2'>
            {/* femaildiv */}
            <div className='flex flex-col sm:w-[50%] items-start justify-start '>
              <p className='text-[18px]'>email</p>
              <input className='px-3 w-full h-[40px] rounded-[8px]' type="email" />
            </div>
            {/* number div */}
            <div className='flex w-full sm:w-[50%] flex-col items-start justify-start'>
              <p className='text-[18px]'>Phone Number</p>
              <input className='px-3 w-full h-[40px] rounded-[8px]' type="tel" />
            </div>
          </div>
          {/* subjects */}
         {/* subject div */}
     <div className='flex w-full flex-col items-start justify-start '>
     <p className='text-[18px]'>Subject</p>
     <input className='px-3 w-full h-[40px] rounded-[8px]' type="text" />
    </div>
    {/*  checkbox */}
    <div className='flex items-center justify-start gap-3 mt-3 sm:items-start sm:justify-start'>
      <input className='text-[18px] h-[20px] w-[20px]' type="checkbox" />
      <p className='text-[18px]'>You accept the terms of service and the privacy policy</p>
    </div>

    <button className='my-4 font-bold w-[216px] h-[60px] rounded-[55px] text-white bg-[#094C99] opacity-50'>Send message</button>
        </div>
      </div>





    </>
  )
}

export default Contact