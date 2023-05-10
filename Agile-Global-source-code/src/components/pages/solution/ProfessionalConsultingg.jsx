import React , {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import tick from '../../../images/solution/professional/tick.svg'
import lady from '../../../images/solution/professional/lady.svg'

import twIcon from '../../../images/solution/custom-app/tw.svg'
import instaIcon from '../../../images/solution/custom-app/insta.svg'
import inIcon from '../../../images/solution/custom-app/in.svg'
const ProfessionalConsultingg = () => {

    useEffect(()=>{
        Aos.init({duration : 2000})
      } , [])



    return (
        <>

            <div data-aos="zoom-in">
                {/* custom application bg div  */}
                <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] professional-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

                    <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4'>PROFESSIONAL CONSULTING
                    </h1>
                    <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>Through our professional consulting service offering we provide talent acquisition and augmentation services to help clients with their project peaks and lows. With our flexible delivery approach, strong global recruiting/training engine and over 50,000 subject matter experts in our databank, we are able to find and deliver highly qualified professionals in a short period of time.
                    </p>


                </div>
            </div>



            {/* enterprise application div blue  */}
            <div data-aos="fade-up" className='bg-[#023267] flex flex-col items-center justify-center p-3 py-10 lg:py-10'>

                <p className='text-center sm:text-start leading-[32px] text-white text-[18px] sm:text-[20px] md:text-[24px] mb-6 lg:px-10 xl:px-44'>WE PROVIDE STRONG INDUSTRY EXPERTISE THROUGH OUR BUSINESS ANALYSTS AND TECHNOLOGY EXPERTISE THROUGH:</p>

                {/* outer div of nos.  */}
                <div className=' w-full flex flex-col md:flex-row items-center justify-center md:justify-around gap-5'>
                    {/* no div  1 to 4*/}
                    <div className=' flex flex-col items-start justify-start gap-5'>
                        <div className='flex items-center justify-center gap-2'>
                            <img src={tick} alt="" />
                            <p className='text-white text-start text-[20px] leading-[32px]'>Program/Project Managers</p>
                        </div>

                        <div className='flex items-center justify-center gap-2'>
                            <img src={tick} alt="" />
                            <p className='text-white text-start text-[20px] leading-[32px]'>Architects</p>
                        </div>

                        <div className='flex items-center justify-center gap-2'>
                            <img src={tick} alt="" />
                            <p className='text-white text-start text-[20px] leading-[32px]'>Designers</p>
                        </div>

                        <div className='flex items-center justify-center gap-2'>
                            <img src={tick} alt="" />
                            <p className='text-white text-start text-[20px] leading-[32px]'>Instructions Designers/Trainers</p>
                        </div>

                    </div>
                    {/* no div  5 to 8*/}
                    <div className=' flex flex-col items-start justify-start gap-5'>
                        <div className='flex items-center justify-center gap-2'>
                            <img src={tick} alt="" />
                            <p className='text-white text-start text-[20px] leading-[32px]'>Metadata management</p>
                        </div>

                        <div className='flex items-center justify-center gap-2'>
                            <img src={tick} alt="" />
                            <p className='text-white text-start text-[20px] leading-[32px]'>Enterprise Reporting Solutions</p>
                        </div>

                        <div className='flex items-center justify-center gap-2'>
                            <img src={tick} alt="" />
                            <p className='text-white text-start text-[20px] leading-[32px]'>Architecture and Implementation</p>
                        </div>


                        <div className='flex items-center justify-center gap-2'>
                            <img src={tick} alt="" />
                            <p className='text-white text-start text-[20px] leading-[32px]'>Executive Dashboards</p>
                        </div>

                    </div>
                </div>

            </div>

            {/* Talent Acquisition with with a emphasis on quality, speed, professionalism and reliability */}

            <div data-aos="fade-up" className='my-10 px-3 sm:px-3 md:px-6 lg:px-10 xl:px-44' >
                <p className='text-[24px] sm:text-[32px] text-center font-semibold text-[#17519BFC]'>Talent Acquisition with with a emphasis on quality, speed, professionalism and reliability</p>

                {/* text and image div */}
                <div className='mt-5 flex flex-col items-center justify-center md:flex-row'>
                    {/* text div */}
                    <div className='text-center lg:text-start'>
                        <p className='text-[20px]'>Our technical global recruiting engine, stringent recruiting procedures in conjunction with our large network of experts makes us proficient in supplying clients with subject matter experts and talented/qualified individuals with tough-to-find skills in a cost-effective manner to assist in successful project completion.
                            <br />
                            We can provide such professionals in a flexible time and material delivery model which includes Contract, Contract-to-hire or Permanent basis. From a technology perspective we specialize in:</p>


                        <ul className='pl-4 mt-4 text-[20px]'>
                            <li className='list-disc text-start'>Enterprise Applications implementation and support</li>
                            <li className='list-disc text-start'>Custom Application development on various platforms</li>
                            <li className='list-disc text-start'>Infrastructure support</li>
                            <li className='list-disc text-start'>Enterprise Application Integration</li>
                            <li className='list-disc text-start'>Business Intelligence and Security</li>
                            <li className='list-disc text-start'>Virtual and Augmented Reality </li>
                        </ul>
                    </div>

                    {/* img  */}
                    <img className='transition  ease-in-out delay-150  hover:scale-105 md:w-[300px] lg:w-full' src={lady} alt="" />
                </div>
            </div>


            {/* box 3 */}
            <div data-aos="fade-up" className='flex items-center justify-center mt-20'>
            <div className='emerging-tech-white-div-drop-shadow flex flex-col items-start justify-star gap-2 text-start p-5 mx-3 sm:w-[80%] lg:w-[78%] rounded-[10px] hover:bg-[#023267] hover:text-white transition-all-2s'>
                    <p className='text-[20px] sm:text-[20px] leading-[30px] text-center '>
                    PROFESSIONALS WITH DECADES IN THIS INDUSTRY IN COMBINATION WITH EXTENSIVE HANDS-ON EXPERIENCE ALLOWS AGILE GLOBAL TO OFFER QUALIFIED STAFF TO AUGMENT A CLIENT’S PROJECT TEAM. WITH OUR TECHNOLOGY SAVVY BUSINESS PROFESSIONALS WE GET A GOOD UNDERSTANDING OF THE CUSTOMER’S BUSINESS AND TECHNICAL REQUIREMENTS.</p>
                </div>
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

export default ProfessionalConsultingg