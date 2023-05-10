import React , {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import yellow from '../../../images/solution/co-managed/yellow.svg'
import twIcon from '../../../images/solution/custom-app/tw.svg'
import instaIcon from '../../../images/solution/custom-app/insta.svg'
import inIcon from '../../../images/solution/custom-app/in.svg'
const CoManagedServices = () => {

    useEffect(()=>{
        Aos.init({duration : 2000})
      } , [])
    
    return (
        <>
            <div  data-aos="fade-up">
                {/* custom application bg div  */}
                <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] co-managed-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

                    <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4'>CO MANAGED SERVICES
                    </h1>
                    <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>Our customers really enjoy and reap the benefits of us co-managing time and material projects along with their project management team.</p>


                </div>
            </div>

            {/*  */}
            <div data-aos="zoom-in" className='mt-10 px-3 sm:px-3 md:px-6 lg:px-10 xl:px-44'>
                <p className='text-[24px] sm:text-[32px] text-center font-semibold text-[#023267]'>We capture the best of both worlds through our Co-Managed T&M solution.</p>
            </div>

            {/* text content div */}
            <div  data-aos="fade-up" className='text-[16px] sm:text-[18px] text-center md:text-start leading-[30px]  flex flex-col items-center justify-center gap-5 md:gap-10 md:flex-row my-5  py-10 px-3 md:px-6 lg:px-10 xl:px-44'>
                <p>In this service we provide teams of resources. The project/technical lead from AGILE GLOBAL undertakes certain project coordination responsibilities such as resource management, task allocation, QA etc thus freeing the client Project Manager from day-to-day administrative activities. <br />
                    The leads are also responsible for team building, career pathing, and consultant performance measurement and evaluation activities. This cost-effective option promotes higher retention and motivation of employees ensuring project continuity.</p>


                <img className=' transition  ease-in-out delay-150  hover:scale-110 hover-drop-shadow ' src={yellow} alt="" />
            </div>


             {/* see what we have.... */}
      <div data-aos="fade-down" className='flex flex-col items-center justify-center mt-16'>
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

export default CoManagedServices