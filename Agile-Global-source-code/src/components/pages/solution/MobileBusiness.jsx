import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import ArrowImg from '../../../images/solution/mobile/arrow.svg'

import twIcon from '../../../images/solution/custom-app/tw.svg'
import instaIcon from '../../../images/solution/custom-app/insta.svg'
import inIcon from '../../../images/solution/custom-app/in.svg'

const MobileBusiness = () => {


  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <>
      <div data-aos="fade-up">
        {/* custom application bg div  */}
        <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] mobile-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

          <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4'>MOBILE BUSINESS
          </h1>
          <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>We provide expertise in all mobile platforms as well as cross platform porting of applications.</p>


        </div>
      </div>

      {/* Agile Global’s Mobile Business Solutions
 */}
      <div data-aos="fade-down" className='my-7'>
        <p className='mb-6 text-[22px] sm:text-[36px] font-semibold text-center text-[#17519BFC]'>Agile Global’s Mobile Business Solutions
        </p>
        {/*  para and image div  */}
        <div className='flex flex-col lg:flex-row items-center justify-center px-3 lg:px-10 xl:px-44'>
          <p className='text-[17px] sm:text-[20px] text-center md:text-start leading-[30px] text-[#2E2A2A]'>Agile Global’s Mobile Business Solutions (MBS) is a custom development arm that provides product development and consulting services for the development of mobile applications on embedded platforms. MBS provides a turnkey solution from design inception to development, testing, and delivery of products. Our dedicated team of full-time developers, quality assurance engineers, and strong project managers come together to provide high-quality solutions to clients.
            MBS also provides device testing, pre-IOT (inter-operability testing), conducting IOT in network labs, flashing LTE devices with new releases of software, validation of devices and scripts on various equipment, certification processes for handsets, pre-FIT, FIT, and operation submission processes, and RF/network testing.
            <br />
            We have core experience in the following technology domains:
            Operating System: iPhone, Android, BlackBerry, Brew, Windows Mobile, Symbian
            <br />
            Wireless: GPRS, UMTS, GSM, CDMA, 1xRTT, 3G/4G, and LTE Network</p>

          {/*  imgae */}
        
          <img className='  transition  ease-in-out delay-150  hover:scale-125' src={ArrowImg} alt="" />
     
        
        </div>
      </div>

      {/* blue div */}
      {/* box 2 */}
      <div data-aos="fade-up" className='flex items-center justify-center'>
        <div className='emerging-tech-white-div-drop-shadow bg-[#023267] flex w-full flex-col items-start justify-star gap-2 text-start p-5 mx-3 sm:w-[80%] lg:w-[78%] rounded-[10px] text-white'>
          <p className='text-[22px] sm:text-[23px] text-center sm:text-start '>Agile Global has vast experience developing Smartphone applications on various devices and operating systems. You will gain a competitive advantage by leveraging our technology expertise, solutions development and testing experience in mobile phones, SmartPhones, PDA’s and other handheld devices, and reduce time to market for your products.</p>

        </div>
      </div>


      {/* see what we have.... */}
      <div data-aos="fade-up" className='flex flex-col items-center justify-center mt-16'>
        <p className='text-[24px] font-semibold text-center'>See what we have been recently</p>
        {/* hr line */}
        <div className='line w-[85vw] md:w-[70vw] lg:w-[70vw] bg-black h-[2px] mt-3 mb-6 ' ></div>

        {/* social media icons */}
        <div className='flex items-center justify-center gap-2'>
          <img src={inIcon} alt="" />
          <img src={instaIcon} alt="" />
          <img src={twIcon} alt="" />
        </div>
      </div>
    </>
  )
}

export default MobileBusiness