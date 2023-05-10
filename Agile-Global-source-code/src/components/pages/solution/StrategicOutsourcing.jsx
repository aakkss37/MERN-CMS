import React , {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import twIcon from '../../../images/solution/custom-app/tw.svg'
import instaIcon from '../../../images/solution/custom-app/insta.svg'
import inIcon from '../../../images/solution/custom-app/in.svg'
const StrategicOutsourcing = () => {

  useEffect(()=>{
    Aos.init({duration : 2000})
  } , [])


  return (
    <>
         <div data-aos="fade-down">
        {/* custom application bg div  */}
        <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] strategic-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

          <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4'>STRATEGIC OUTSOURCING
          </h1>
          <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>We help translate defined project scopes into quality solutions, understand and meet customer’s vision, reduce time to market, enhance ROI using relevant technology, proven processes and best practices, delivering positive customer experience every time through cost effective solutions, execution through proven methodologies and timely deliverables within project constraints.</p>


        </div>
      </div>
      {/* below white div */}
      <div data-aos="fade-down" className='startegic-drop-shadow flex items-center justify-center w-full py-10 px-3 md:px-6 lg:px-10 xl:px-44'>
        <p className='text-center text-[18px] sm:text-[20px] leading-[30px]'>AGILE GLOBAL’s proven and proprietary engagement management methodology, expertise and global delivery capability helps create the ideal solution for our clients</p>
      </div>


      {/* text content div */}
      <div data-aos="fade-up" className='text-[16px] sm:text-[18px] text-center md:text-start leading-[30px]  flex flex-col items-center justify-center gap-5 md:gap-10 md:flex-row my-5  py-10 px-3 md:px-6 lg:px-10 xl:px-44'>
         <p>Outsourcing is definitely not the panacea for all problems. Our senior managers/analysts evaluate the client’s current and targeted environment, process, methodology and set-up, before determining if outsourcing is a viable option. When it is a practical, feasible and beneficial alternative, a detailed proposal along with the engagement framework inclusive of execution components and process guidelines are documented and approved by the client before work begins.</p>

         <p>Our strong project management expertise, development and QA methodologies, stringent quality standards, Knowledge Repository and an online Project Management Information System that provides client managers the visibility from high-level to drilled down task level details, all contribute towards a controlled environment leading to a systematic and seamless execution of the project.</p>
      </div>

       {/* below blue div */}
       <div data-aos="fade-up" className='bg-[#023267] text-white flex items-center justify-center w-full py-10 px-3 md:px-6 lg:px-10 xl:px-44'>
        <p className='text-center text-[22px] sm:text-[24px] leading-[30px]'>Our experienced team can offer you expert customized consulting services and solutions by leveraging best of breed technologies to deliver business critical solutions.</p>
      </div>

      {/* see what we have.... */}
      <div data-aos="zoom-in" className='flex flex-col items-center justify-center mt-16'>
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

export default StrategicOutsourcing