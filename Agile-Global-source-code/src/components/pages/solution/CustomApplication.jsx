import React, { useState , useEffect} from 'react'

import Aos from "aos";
import "aos/dist/aos.css";
import serviceImg from '../../../images/solution/custom-app/services-img.svg'
import tickIcon from '../../../images/solution/custom-app/tick.svg'
import globeImg from '../../../images/solution/custom-app/globe.svg'
import serviceIcon from '../../../images/solution/custom-app/service.svg'
import twIcon from '../../../images/solution/custom-app/tw.svg'
import instaIcon from '../../../images/solution/custom-app/insta.svg'
import inIcon from '../../../images/solution/custom-app/in.svg'


const CustomApplication = () => {

    useEffect(()=>{
        Aos.init({duration : 2000})
      } , [])

    const [showServiceImg1, setShowServiceImg1] = useState(false)
    const [showServiceImg2, setShowServiceImg2] = useState(false)
    const [showServiceImg3, setShowServiceImg3] = useState(false)
    const [showServiceImg4, setShowServiceImg4] = useState(false)

    const [showGlobeImg1, setShowGlobeImg1] = useState(false)
    const [showGlobeImg2, setShowGlobeImg2] = useState(false)
    const [showGlobeImg3, setShowGlobeImg3] = useState(false)
    const [showGlobeImg4, setShowGlobeImg4] = useState(false)




    return (
        <>
            {/* custom application bg div  */}
            <div data-aos="zoom-in" className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] custom-app-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

                <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4'>CUSTOM APPLICATION MANAGEMENT
                </h1>
                <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>Whether a customer wants to build custom software from scratch or enhance and maintain an existing home-built application, Agile Global can provide the right expertise, delivery and execution model to assist in all phases of the Software Development Life Cycle.
                </p>

            </div>

            {/* below hero section */}
            <div data-aos="fade-up" className='my-8 flex flex-col items-center justify-center'>
                <p className='text-[20px] font-semibold text-clip sm:text-[25px] md:text-[35px] lg:text-[40px] mb-7'>Our services include:</p>

                {/* image and text div */}
                <div className='flex flex-col items-center justify-center gap-5 lg:flex-row px-3 lg:px-20'>
                    {/* img div */}

                    <div className='testting-outter-card-eff rounded-[60px]'>
                    <img className='testing-inner-card-img' src={serviceImg} alt="" />
                    </div>
                    
                    {/* content div */}
                    <div className='flex items-center justify-center bg-[#023267] text-white rounded-[15px] lg:w-[40%] p-4'>
                        <ul className='flex items-start flex-col justify-center gap-3'>
                            <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p>Project management</p>  </li>
                            <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3 '> <img src={tickIcon} alt="" /> <p>Business analysis</p>  </li>
                            <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p>Application design and development</p>  </li>
                            <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p>Migrations and conversions</p>  </li>
                            <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p>Quality Assurance and Testing</p>  </li>
                            <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p>Technical Writing</p>  </li>
                            <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p>Implementation</p>  </li>
                            <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p>Post-production support</p>  </li>
                        </ul>
                    </div>
                </div>

                {/* hr line */}
                <div className='line w-[85vw] md:w-[70vw] lg:w-[70vw] bg-black h-[2px] mt-12 mb-6 ' ></div>
                <p className='text-center text-[20px] leading-[30px] px-3 md:px-20 lg:px-36 xl:px-48'>Considering every client’s business is unique, both in the solutions they offer as well as their operations, AGILE GLOBAL’s Custom Application Management solution focuses on creating, integrating, enhancing and supporting core and add-on scalable applications and systems that help achieve your current and future business objectives.
                    AGILE GLOBAL offers the range of solutions you need for optimized quality, enhanced business value and a reduced total cost of ownership (TCO).</p>


            </div>

            {/* recognization div */}
            <div data-aos="fade-up" className='flex flex-col items-center justify-center mt-10 '>
                <p className='text-[28px] sm:text-[34px] md:text-[48px] font-bold text-center my-5 mb-20'>Our <span className='text-[#17519B]'>Recognitions</span> & Awards</p>

                {/* blue and white boxs div starts  */}
                <div className='flex flex-col items-center justify-center sm:flex-row sm:flex-wrap gap-7 md:px-11 xl:px-24'>
                    {/*blue box 1  */}
                    <div onMouseEnter={() => setShowServiceImg1(prev => !prev)} onMouseLeave={() => setShowServiceImg1(prev => !prev)} className='transition-all-2s custom-app-box-drop-shadow p-3 flex flex-col items-start justify-start gap-2 bg-[#023267] text-white hover:bg-white hover:text-black mx-3  sm:w-[263px] sm:mx-0 rounded-[5px]'>
                        {showServiceImg1 ? (<img src={serviceIcon} alt="" />) : (<img src={globeImg} alt="" />)}
                        <p className='text-[24px] font-semibold'>Best Services</p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px]'>Read more...</p>
                    </div>



                    {/* white box 1*/}
                    <div onMouseEnter={() => setShowGlobeImg1(prev => !prev)} onMouseLeave={() => setShowGlobeImg1(prev => !prev)} className='transition-all-2s custom-app-box-drop-shadow p-3 flex flex-col items-start justify-start gap-2 bg-white text-black hover:bg-[#023267] hover:text-white mx-3  sm:w-[263px] sm:mx-0 rounded-[5px]'>
                        {showGlobeImg1 ? (<img src={globeImg} alt="" />) : (<img src={serviceIcon} alt="" />)}
                        <p className='text-[24px] font-semibold'>Globe Best </p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px]'>Read more...</p>
                    </div>


                    {/*blue box 2  */}
                    <div onMouseEnter={() => setShowServiceImg2(prev => !prev)} onMouseLeave={() => setShowServiceImg2(prev => !prev)} className='custom-app-box-drop-shadow p-3 flex flex-col items-start justify-start gap-2 bg-[#023267] text-white hover:bg-white hover:text-black mx-3  sm:w-[263px] sm:mx-0 rounded-[5px]'>
                        {showServiceImg2 ? (<img src={serviceIcon} alt="" />) : (<img src={globeImg} alt="" />)}
                        <p className='text-[24px] font-semibold'>Best Services</p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px]'>Read more...</p>
                    </div>


                    {/* white box 2 */}
                    <div onMouseEnter={() => setShowGlobeImg2(prev => !prev)} onMouseLeave={() => setShowGlobeImg2(prev => !prev)} className='transition-all-2s custom-app-box-drop-shadow p-3 flex flex-col items-start justify-start gap-2 bg-white text-black hover:bg-[#023267] hover:text-white mx-3  sm:w-[263px] sm:mx-0 rounded-[5px]'>
                        {showGlobeImg2 ? (<img src={globeImg} alt="" />) : (<img src={serviceIcon} alt="" />)}
                        <p className='text-[24px] font-semibold'>Globe Best </p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px]'>Read more...</p>
                    </div>


                    {/* white box 3  */}
                    <div onMouseEnter={() => setShowGlobeImg3(prev => !prev)} onMouseLeave={() => setShowGlobeImg3(prev => !prev)} className='transition-all-2s custom-app-box-drop-shadow p-3 flex flex-col items-start justify-start gap-2 bg-white text-black hover:bg-[#023267] hover:text-white mx-3  sm:w-[263px] sm:mx-0 rounded-[5px]'>
                        {showGlobeImg3 ? (<img src={globeImg} alt="" />) : (<img src={serviceIcon} alt="" />)}
                        <p className='text-[24px] font-semibold'>Globe Best </p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px]'>Read more...</p>
                    </div>


                    {/*blue box 3  */}
                    <div onMouseEnter={() => setShowServiceImg3(prev => !prev)} onMouseLeave={() => setShowServiceImg3(prev => !prev)} className='transition-all-2s custom-app-box-drop-shadow p-3 flex flex-col items-start justify-start gap-2 bg-[#023267] text-white hover:bg-white hover:text-black mx-3  sm:w-[263px] sm:mx-0 rounded-[5px]'>
                        {showServiceImg3 ? (<img src={serviceIcon} alt="" />) : (<img src={globeImg} alt="" />)}
                        <p className='text-[24px] font-semibold'>Best Services</p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px]'>Read more...</p>
                    </div>

                     {/* white box 4  */}
                     <div onMouseEnter={() => setShowGlobeImg4(prev => !prev)} onMouseLeave={() => setShowGlobeImg4(prev => !prev)} className='transition-all-2s custom-app-box-drop-shadow p-3 flex flex-col items-start justify-start gap-2 bg-white text-black hover:bg-[#023267] hover:text-white mx-3  sm:w-[263px] sm:mx-0 rounded-[5px]'>
                        {showGlobeImg4 ? (<img src={globeImg} alt="" />) : (<img src={serviceIcon} alt="" />)}
                        <p className='text-[24px] font-semibold'>Globe Best </p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px]'>Read more...</p>
                    </div>





                    {/*blue box 4 */}
                    <div onMouseEnter={() => setShowServiceImg4(prev => !prev)} onMouseLeave={() => setShowServiceImg4(prev => !prev)} className='transition-all-2s custom-app-box-drop-shadow p-3 flex flex-col items-start justify-start gap-2 bg-[#023267] text-white hover:bg-white hover:text-black mx-3  sm:w-[263px] sm:mx-0 rounded-[5px]'>
                        {showServiceImg4 ? (<img src={serviceIcon} alt="" />) : (<img src={globeImg} alt="" />)}
                        <p className='text-[24px] font-semibold'>Best Services</p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px]'>Read more...</p>
                    </div>



                   




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

export default CustomApplication