import React , {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import vrLogos from '../../../images/solution/virtual-reality/vr-logos.svg'
import serviceImg from '../../../images/solution/virtual-reality/service-img.svg'


const VirtutalAndAgumented = () => {

    useEffect(()=>{
        Aos.init({duration : 2000})
      } , [])


    return (
        <>
            {/* virtual and agmented reality bg div  */}
            <div data-aos="zoom-in" className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] virtual-and-agumented-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

                <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] font-bold text-white text-center mt-5 mb-4'>VIRTUAL AND AUGMENTED REALITY SOLUTIONS</h1>
                <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>The future is here. From building APIs and 360 degree content to reducing your time to market with our VR/AR staff experienced on different SDKs and VR lenses, embrace and immerse yourself successfully in the next big thing.
                </p>

            </div>

            {/*  below hero section  */}
            <div data-aos="fade-up" className='flex flex-col-reverse lg:flex-row gap-0 items-center justify-center lg:w-full lg:mx-0 mx-3 mt-9'>
                {/* text div */}
                <div className='bg-[#023267] text-white text-[18px] text-start flex flex-col items-start justify-start p-4 mx-3 w-full lg:w-[70%] rounded-[10px]'>
                    <p className='text-[16px] text-start '>
                        Agile Global is passionate about innovative technology. We are a leader in IT Consulting, Virtual and Augmented Reality, and Emerging Technology Solutions.
                    </p>
                    <br />
                    <p>The future is here. From building APIs and 360 degree content to reducing your time to market with our VR/AR staff experienced on different SDKs and VR lenses, embrace and immerse yourself successfully in the next big thing.</p>
                    <br />
                    <p>Our Virtual Reality and Augmented Reality technology development teams support most major platforms including; Unity, Oculus VR, Oculus RiFT, zSpace, Unreal, VR Healthcare, 3D Graphics, Samsung Gear VR, Web VR, 3D animation, and gaming.</p>
                </div>
                {/* image div */}
                <img className='lg:w-[47%] ' src={vrLogos} alt="" />
            </div>

            {/* 3 wide text boxes */}
            <div data-aos="fade-up" className='flex flex-col items-center justify-center gap-9 mt-10'>
                {/* box 1 */}
                <div className='emerging-tech-white-div-drop-shadow flex flex-col items-start justify-start gap-2 text-start p-5  sm:w-[80%] lg:w-[70%] rounded-[10px] mx-3 '>
                    <p className='text-[22px] sm:text-[24px] font-semibold'>The Internet of Things (IoT):</p>
                    <p className='text-[20px] sm:text-[20px] leading-[30px] text-start'>IoT impacts everything from the way smart homes function to Manufacturing 4.0. Agile Global is in a unique position to help you implement IoT solutions from Proof of Concept (POC) to full scale implementation.</p>
                </div>

                {/* box 2 */}
                <div className='emerging-tech-white-div-drop-shadow bg-[#023267] flex flex-col items-start justify-star gap-2 text-start p-5 mx-3 sm:w-[80%] lg:w-[70%] rounded-[10px] text-white'>
                    <p className='text-[22px] sm:text-[24px] font-semibold'>Artificial Intelligence/Machine Learning (AI/ML):</p>
                    <p className='text-[20px] sm:text-[20px] leading-[30px] text-start'>
                        Unlock the value of unstructured to structured data. Agile Global can help analyze and implement AI/ML functionality from Integrated Analytics, Performance Dashboards to complex AI/ML applications. </p>
                </div>

                {/* box 3 */}
                <div className='emerging-tech-white-div-drop-shadow flex flex-col items-start justify-star gap-2 text-start p-5 mx-3 sm:w-[80%] lg:w-[70%] rounded-[10px]'>
                    <p className='text-[22px] sm:text-[24px] font-semibold'>Robotics Process Automation (RPA):</p>
                    <p className='text-[20px] sm:text-[20px] leading-[30px] text-start'>
                        More CIOs are turning to robotic process automation to eliminate tedious tasks, freeing corporate workers to focus on higher value work. But RPA requires proper design, planning and governance if it's to bolster the business, experts say.</p>
                </div>
            </div>


       {/*   more services div      */}
        <div data-aos="zoom-in" className='flex flex-col items-center justify-center gap-4 my-16 px-3'>
             {/* title */}
           <h2 className='text-[28px] text-center md:text-[35px] leading-[35px] font-bold '>More Services at Your Fingertips</h2>

           <p className='text-[18px] md:text-[18px] text-center mb-5 leading-[27px] w-full md:w-[80vw] lg:w-[70vw]'>We're on a mission to make Teletherapy smarter, simpler, and more accessible</p>

        {/* cards div */}
        <div className='flex items-center flex-wrap justify-center gap-7 md:gap-4 xl:px-20'>
            {/* card 1 */}
            <div className='hover-drop-shadow flex flex-col items-start justify-start gap-2 p-2 hover:rounded-[10px]'>
                <img className='mb-3' src={serviceImg} alt="" />
                <p className='text-[18px] font-bold leading-[27px]'>Scheduke and to-do</p>
                <p className='text-[15px]'>Digital Organization</p>
            </div>

            {/* card 2 */}
            <div className='hover-drop-shadow flex flex-col items-start justify-start gap-2 p-2 hover:rounded-[10px]'>
                <img className='mb-3' src={serviceImg} alt="" />
                <p className='text-[18px] font-bold leading-[27px]'>Scheduke and to-do</p>
                <p className='text-[15px]'>Digital Organization</p>
            </div>

            {/* card 3 */}
            <div className='hover-drop-shadow flex flex-col items-start justify-start gap-2 p-2 hover:rounded-[10px]'>
                <img className='mb-3' src={serviceImg} alt="" />
                <p className='text-[18px] font-bold leading-[27px]'>Scheduke and to-do</p>
                <p className='text-[15px]'>Digital Organization</p>
            </div>

            {/* card 4 */}
            <div className='hover-drop-shadow flex flex-col items-start justify-start gap-2 p-2 hover:rounded-[10px] '>
                <img className='mb-3' src={serviceImg} alt="" />
                <p className='text-[18px] font-bold leading-[27px]'>Scheduke and to-do</p>
                <p className='text-[15px]'>Digital Organization</p>
            </div>

            {/* card 5 */}
            <div className='hover-drop-shadow flex flex-col items-start justify-start gap-2 p-2 hover:rounded-[10px]'>
                <img className='mb-3' src={serviceImg} alt="" />
                <p className='text-[18px] font-bold leading-[27px]'>Scheduke and to-do</p>
                <p className='text-[15px]'>Digital Organization</p>
            </div>

            {/* card 6 */}
            <div className='hover-drop-shadow flex flex-col items-start justify-start gap-2 p-2 hover:rounded-[10px]'>
                <img className='mb-3' src={serviceImg} alt="" />
                <p className='text-[18px] font-bold leading-[27px]'>Scheduke and to-do</p>
                <p className='text-[15px]'>Digital Organization</p>
            </div>

            {/* card 7 */}
            <div className='hover-drop-shadow flex flex-col items-start justify-start gap-2 p-2 hover:rounded-[10px]'>
                <img className='mb-3' src={serviceImg} alt="" />
                <p className='text-[18px] font-bold leading-[27px]'>Scheduke and to-do</p>
                <p className='text-[15px]'>Digital Organization</p>
            </div>

            {/* card 8*/}
            <div className='hover-drop-shadow flex flex-col items-start justify-start gap-2 p-2 hover:rounded-[10px]'>
                <img className='mb-3' src={serviceImg} alt="" />
                <p className='text-[18px] font-bold leading-[27px]'>Scheduke and to-do</p>
                <p className='text-[15px]'>Digital Organization</p>
            </div>

        </div>

        </div>






        </>
    )
}

export default VirtutalAndAgumented