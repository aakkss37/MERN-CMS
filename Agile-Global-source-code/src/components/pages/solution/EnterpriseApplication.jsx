import React , {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import serviceImg from '../../../images/solution/custom-app/services-img.svg'
import tickIcon from '../../../images/solution/custom-app/tick.svg'
import serviceBlueBg from '../../../images/solution/enterprise-app/service-inclued-bg.svg'
import serviceFrontImg from '../../../images/solution/enterprise-app/service-include-img.svg'
import twIcon from '../../../images/solution/custom-app/tw.svg'
import instaIcon from '../../../images/solution/custom-app/insta.svg'
import inIcon from '../../../images/solution/custom-app/in.svg'

const EnterpriseApplication = () => {

    useEffect(()=>{
        Aos.init({duration : 2000})
      } , [])

    return (
        <>
            {/* custom application bg div  */}
            <div data-aos="zoom-in" className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] enterprise-app-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

                <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4'>ENTERPRISE APPLICATION MANAGEMENT
                </h1>
                <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>Agile Global can customize, implement, integrate, upgrade, maintain and support Custom Off the Shelf applications based on customer’s needs.
                </p>

            </div>


            {/* hr line */}
            <div data-aos="fade-up" className='flex flex-col items-center justify-center'>

                <div className='line w-[85vw] md:w-[70vw] lg:w-[70vw] bg-black h-[2px] mt-12 mb-6 ' ></div>
                <p className='text-center text-[20px] leading-[30px] px-3 md:px-20 lg:px-36 xl:px-52'>In today’s enterprise, myriad applications run in parallel, processing and presenting pertinent information to executives and staff from the various functional silos within an organization. We add value by providing functional, technical, and project management expertise for product customizations, implementations, conversions, upgrades, migrations, and production support of such applications.</p>

            </div>



            {/* below hero section */}
            <div data-aos="fade-up"  className='my-8 flex flex-col items-center justify-center'>
                <p className='text-[20px] font-semibold text-clip sm:text-[25px] md:text-[35px] lg:text-[40px] mb-7'>Our services include:</p>

                {/* image and text div */}
                <div className='flex flex-col items-center justify-center gap-9 lg:flex-row px-3 lg:px-20'>
                    {/* img div */}
                    <div className='enterprise-outter-card-eff rounded-[60px] relative'>
                    <img className='' src={serviceBlueBg} alt="" />
                    <img className='enterprise-inner-card-img enterprise-service-front-img-tilt absolute bottom-4 sm:left-8  sm:w-auto' src={serviceFrontImg} alt="" />
                    </div>
                  
                    {/* content div */}
                    <div className='flex items-center justify-center bg-[#023267] text-white rounded-[15px] lg:w-[40%] p-4'>
                        <ul className='flex items-start flex-col justify-center gap-3'>
                            <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p> Supply Chain Management (SCM)</p>  </li>
                            <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3 '> <img src={tickIcon} alt="" /> <p>Customer Relationship Management (CRM)</p>  </li>
                            <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p>HRMS, Financials, e-Procurement</p>  </li>
                            <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p>Manufacturing</p>  </li>
                           
                        </ul>
                    </div>
                </div>

    

            </div>


                 {/*  below service div   */}

            <div data-aos="fade-up" className='flex items-center justify-center flex-col my-16'>
                <p className='text-[24px] sm:text-[30px] leading-[30px] text-center px-3 md:px-20 lg:px-36 xl:px-52 mb-9'>WE HAVE EXPERTS IN VARIOUS MODULES OF THE FOLLOWING BUT NOT ALL INCLUSIVE LIST OF PACKAGED ENTERPRISE APPLICATIONS:</p>

            {/* small blue boxes div  */}
            <div className='flex items-center justify-center flex-col sm:flex-row flex-wrap gap-4 md:px-11 xl:px-24'>
                {/* box 1  */}
                <div className='w-[265px] h-[82px] flex items-center justify-center bg-[#023267] rounded-[10px] '> <p className='text-[22px] text-[white] text-center '> Oracle Applications </p> </div>

                  {/* box 2  */}
                  <div className='w-[265px] h-[82px] flex items-center justify-center bg-[#023267] rounded-[10px] '> <p className='text-[22px] text-[white] text-center '> Peoplesoft </p> </div>

                    {/* box 3 */}
                <div className='w-[265px] h-[82px] flex items-center justify-center bg-[#023267] rounded-[10px] '> <p className='text-[22px] text-[white] text-center '>SAP </p> </div>

                  {/* box 4  */}
                  <div className='w-[265px] h-[82px] flex items-center justify-center bg-[#023267] rounded-[10px] '> <p className='text-[22px] text-[white] text-center '>Lawson </p> </div>

                    {/* box 5  */}
                <div className='w-[265px] h-[82px] flex items-center justify-center bg-[#023267] rounded-[10px] '> <p className='text-[22px] text-[white] text-center '> JD Edwards </p> </div>

                  {/* box 6 */}
                  <div className='w-[265px] h-[82px] flex items-center justify-center bg-[#023267] rounded-[10px] '> <p className='text-[22px] text-[white] text-center '>JDA MMS </p> </div>

                    {/* box 7  */}
                <div className='w-[265px] h-[82px] flex items-center justify-center bg-[#023267] rounded-[10px] '> <p className='text-[22px] text-[white] text-center '> Siebel </p> </div>

                  {/* box 8 */}
                  <div className='w-[265px] h-[82px] flex items-center justify-center bg-[#023267] rounded-[10px] '> <p className='text-[22px] text-[white] text-center '>BPICS/MAPICS </p> </div>

                  
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

export default EnterpriseApplication