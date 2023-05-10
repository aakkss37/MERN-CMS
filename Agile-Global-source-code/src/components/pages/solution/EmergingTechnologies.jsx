import React , {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import LastCardImg1 from '../../../images/solution/emerging-technologies/last-card-img-1.svg'
import LastCardImg2 from '../../../images/solution/emerging-technologies/last-card-img-2.svg'
import LastCardImg3 from '../../../images/solution/emerging-technologies/last-card-img-3.svg'

const EmergingTechnologies = () => {


    useEffect(()=>{
        Aos.init({duration : 2000})
      } , [])
    

    return (
        <>
            {/* emerding technologies bg div  */}
            <div data-aos="fade-up" className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] emerging-technologies-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

                <h1 className='text-[24px]  sm:text-[47px] md:text-[57px] font-bold text-white'>EMERGING TECHNOLOGIES</h1>
                <p className='text-[18px] sm:text-[24px] text-white text-center'>Big ideas aren’t enough: Agile Global understands that ambitious ideas require acute skills and capabilities to make them a reality.</p>

            </div>

            {/* we provide services that include.... */}
            <div data-aos="flip-up" className='px-3 sm:px-20 md:px-44 mb-10'>
                <p className='text-[28px] font-semibold leading-[38px] sm:leading-[58px] lg:my-9 text-center mt-5'>WE WANT TO HEAR FROM YOU</p>
            </div>

            {/* cards div */}
            <div data-aos="flip-up" className='flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 px-3'>
                {/* card 1 */}
                <div className='hover-drop-shadow relative emerg-tech-card-1-front-img'>
                    {/* front div text  starts*/}
                    <div className='absolute px-3 left-0 right-0 ml-auto mr-auto w-full flex flex-col items-center justify-center top-4  text-white '>
                        <div className='emerg-tech-card-1-white-tick-img'></div>
                        <div>
                            <p className='  font-semibold  text-[24px] text-start my-3'>Proof of Concept</p>
                            <p className='text-start text-white text-[16px] mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sem id purus viverra porttitor.</p>
                            <p>Read more...</p>
                        </div>

                    </div>
                    {/* front div text  ends*/}
                    <div className='emerg-tech-card-1-back-img flex items-center justify-center'>
                        <p className='text-center text-white text-[20px] px-2 font-semibold mb-10'>Lorem ipsum dolor sit amet, consverra porttitor.</p>
                    </div>
                </div>


                {/* card 2*/}
                <div className='hover-drop-shadow relative emerg-tech-card-1-front-img'>
                    {/* front div text  starts*/}
                    <div className='absolute px-3 left-0 right-0 ml-auto mr-auto w-full flex flex-col items-center justify-center top-4  text-white '>
                        <div className='emerg-tech-card-1-white-tick-img'></div>
                        <div>
                            <p className='  font-semibold  text-[24px] text-start my-3'>Proof of Concept</p>
                            <p className='text-start text-white text-[16px] mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sem id purus viverra porttitor.</p>
                            <p>Read more...</p>
                        </div>

                    </div>
                    {/* front div text  ends*/}
                    <div className='emerg-tech-card-1-back-img flex items-center justify-center'>
                        <p className='text-center text-white text-[20px] px-2 font-semibold mb-10'>Lorem ipsum dolor sit amet, consverra porttitor.</p>
                    </div>
                </div>

                {/* card 3 */}
                <div className='hover-drop-shadow relative emerg-tech-card-1-front-img'>
                    {/* front div text  starts*/}
                    <div className='absolute px-3 left-0 right-0 ml-auto mr-auto w-full flex flex-col items-center justify-center top-4  text-white '>
                        <div className='emerg-tech-card-1-white-tick-img'></div>
                        <div>
                            <p className='  font-semibold  text-[24px] text-start my-3'>Proof of Concept</p>
                            <p className='text-start text-white text-[16px] mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sem id purus viverra porttitor.</p>
                            <p>Read more...</p>
                        </div>

                    </div>
                    {/* front div text  ends*/}
                    <div className='emerg-tech-card-1-back-img flex items-center justify-center'>
                        <p className='text-center text-white text-[20px] px-2 font-semibold mb-10'>Lorem ipsum dolor sit amet, consverra porttitor.</p>
                    </div>
                </div>


                {/* card 4 */}
                <div className='hover-drop-shadow relative emerg-tech-card-1-front-img'>
                    {/* front div text  starts*/}
                    <div className='absolute px-3 left-0 right-0 ml-auto mr-auto w-full flex flex-col items-center justify-center top-4  text-white '>
                        <div className='emerg-tech-card-1-white-tick-img'></div>
                        <div>
                            <p className='  font-semibold  text-[24px] text-start my-3'>Proof of Concept</p>
                            <p className='text-start text-white text-[16px] mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sem id purus viverra porttitor.</p>
                            <p>Read more...</p>
                        </div>

                    </div>
                    {/* front div text  ends*/}
                    <div className='emerg-tech-card-1-back-img flex items-center justify-center'>
                        <p className='text-center text-white text-[20px] px-2 font-semibold mb-10'>Lorem ipsum dolor sit amet, consverra porttitor.</p>
                    </div>
                </div>
            </div>

            {/* blue bg  div  */}
            <div data-aos="fade-up" className='emerg-tech-blue-div px-3 py-14 my-10 md:px-20 lg:px-28 xl:px-36 mb-20'>
                <p className='text-[20px] sm:text-[24px] text-white text-center '>OUR EMERGING TECHNOLOGIES PRACTICE HELPS CUSTOMERS REALIZE THE DREAM THAT WILL SHAPE TOMORROW’S WORLD TO STAY COMPETITIVE AND AHEAD OF THE CURVE.</p>
            </div>
            {/* 3 wide text boxes */}
            <div data-aos="fade-up" className='flex flex-col items-center justify-center gap-9'>
                {/* box 1 */}
                <div className='emerging-tech-white-div-drop-shadow flex flex-col items-start justify-start gap-2 text-start p-5  sm:w-[80%] lg:w-[70%] rounded-[10px] mx-3 '>
                    <p className='text-[22px] sm:text-[24px] font-semibold'>The Internet of Things (IoT):</p>
                    <p className='text-[20px] sm:text-[20px] leading-[30px] text-start'>IoT impacts everything from the way smart homes function to Manufacturing 4.0. Agile Global is in a unique position to help you implement IoT solutions from Proof of Concept (POC) to full scale implementation.</p>
                </div>

                {/* box 2 */}
                <div data-aos="fade-up" className='emerging-tech-white-div-drop-shadow bg-[#023267] flex flex-col items-start justify-star gap-2 text-start p-5 mx-3 sm:w-[80%] lg:w-[70%] rounded-[10px] text-white'>
                    <p className='text-[22px] sm:text-[24px] font-semibold'>Artificial Intelligence/Machine Learning (AI/ML):</p>
                    <p className='text-[20px] sm:text-[20px] leading-[30px] text-start'>
                        Unlock the value of unstructured to structured data. Agile Global can help analyze and implement AI/ML functionality from Integrated Analytics, Performance Dashboards to complex AI/ML applications. </p>
                </div>

                {/* box 3 */}
                <div data-aos="fade-up" className='emerging-tech-white-div-drop-shadow flex flex-col items-start justify-star gap-2 text-start p-5 mx-3 sm:w-[80%] lg:w-[70%] rounded-[10px]'>
                    <p className='text-[22px] sm:text-[24px] font-semibold'>Robotics Process Automation (RPA):</p>
                    <p className='text-[20px] sm:text-[20px] leading-[30px] text-start'>
                        More CIOs are turning to robotic process automation to eliminate tedious tasks, freeing corporate workers to focus on higher value work. But RPA requires proper design, planning and governance if it's to bolster the business, experts say.</p>
                </div>
            </div>


            {/* Our Recognitions & Awards div */}
            <div data-aos="zoom-in" className='flex flex-col items-center justify-center px-3 my-10'>
                <p className='text-[28px] sm:text-[34px] md:text-[48px] font-bold text-center my-5'>Our <span className='text-[#17519B]'>Recognitions</span> & Awards</p>

                {/* cards div */}
                <div className='flex flex-col sm:flex-row flex-wrap items-center justify-center gap-14 lg:gap-4'>
                    {/* card 1 */}
                    <div className='hover-drop-shadow px-3 py-2 cursor-pointer sm:w-[387px] flex flex-col items-start justify-start gap-4'>
                        <img src={LastCardImg1} alt="" />
                        <p className='font-semibold text-[24px]'>Selfie with Earth</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Tortor amet placerat sed malesuada quisque mauris est. Egestas non dictum purus.</p>
                    </div>

                    {/* card 2*/}
                    <div className='hover-drop-shadow px-3 py-2 cursor-pointer sm:w-[387px] flex flex-col items-start justify-start gap-4'>
                        <img src={LastCardImg2} alt="" />
                        <p className='font-semibold text-[24px]'>Beautiful View </p>
                        <p>Lorem ipsum dolor sit amet consectetur. Tortor amet placerat sed malesuada quisque mauris est. Egestas non dictum purus.</p>
                    </div>

                    {/* card 3 */}
                    <div className='hover-drop-shadow px-3 py-2 cursor-pointer sm:w-[387px] flex flex-col items-start justify-start gap-4'>
                        <img src={LastCardImg3} alt="" />
                        <p className='font-semibold text-[24px]'>Fixing Rocket with Your Hand</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Tortor amet placerat sed malesuada quisque mauris est. Egestas non dictum purus.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EmergingTechnologies