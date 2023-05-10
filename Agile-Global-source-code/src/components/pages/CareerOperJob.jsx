import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { HiArrowRight } from 'react-icons/hi'

import btnBg from '../../images/career-open-job/btn-bg.svg'


import twIcon from '../../images/solution/custom-app/tw.svg'
import instaIcon from '../../images/solution/custom-app/insta.svg'
import inIcon from '../../images/solution/custom-app/in.svg'

const CareerOperJob = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    return (
        <>
            {/* current openings  */}
            <div data-aos="fade-up" className='mt-10 flex flex-col items-center justify-center px-3 '>
                <p className='text-[24px] sm:text-[30px] md:text-[36px] text-center text-[#023267]  ' >Current Openings</p>

                {/* view all div  */}
                <div className='flex flex-col md:flex-row items-center justify-center gap-5 px-3 sm:px-5 md:px-10 lg:px-20 xl:px-44'>
                    <p className='text-[18px] sm:text-[20px] text-start leading-[27px] mt-7 md:w-[70%] lg:w-[85%] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper vestibulum fermentum. Cras venenatis, nisl sit amet molestie viverra, </p>


                    <div className='relative flex items-center justify-center'>
                        <img className='absoute z-0' src={btnBg} alt="" />
                        <button className='absolute left-0 right-0 mx-auto z-10 text-[18px] text-white font-semibold flex
            items-center justify-center gap-2 py-2 px-4  rounded-[10px] '>View Other  <HiArrowRight></HiArrowRight>
                        </button>
                    </div>

                </div>

            </div>

            {/* Frontend Developer */}
            <div data-aos="fade-up" className=' px-3 sm:px-5 md:px-10 lg:px-20 xl:px-44 text-start flex flex-col items-start justify-center mt-10'>
                <p className='text-[32px] text-[#17519B] mb-5'>Frontend Developer</p>


                {/* apply now btn */}
                <div data-aos="fade-up" className='relative flex items-center justify-center '>
                    <img className='absoute z-0' src={btnBg} alt="" />
                    <button className='absolute left-0 right-0 mx-auto z-10 text-[18px] text-white font-semibold flex
            items-center justify-center gap-2 py-2 px-4  rounded-[10px] '>Apply now  <HiArrowRight></HiArrowRight>
                    </button>
                </div>

                {/* we are looking... */}
                <p className='text-[16px] lg:text-[18px] mt-5'>We are looking for a Frontend developer who is proficient with React.js. Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows. You will ensure that these components and the overall application are robust and easy to maintain. You will coordinate with the rest of the team working on different layers of the infrastructure. Therefore, a commitment to collaborative problem solving, sophisticated design, and quality products are important.</p>


                {/* responsibility */}
                <p className='text-[16px] lg:text-[18px] mt-5'>Responsibilities: • Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model <br />
 • Thorough understanding of React.js and its core principles <br />
 • Experience with popular React.js workflows (such as Flux or Redux) <br />
 • Familiarity with newer specifications of EcmaScript <br />
 • Experience with data structure libraries (e.g., Immutable.js) <br />
 • Knowledge of isomorphic React is a plus • Familiarity with RESTful APIs <br />
 • Knowledge of modern authorization mechanisms, such as JSON Web Token <br />
 • Familiarity with modern front-end build pipelines and tools <br />
 • Experience with common front-end development tools such as Babel, Webpack, NPM, etc. <br /> 
 • Ability to understand business requirements and translate them into technical  requirements <br />
 • A knack for benchmarking and optimization • Familiarity with code versioning tools</p>



     {/*  good to have */}
     <p className='text-[16px] lg:text-[18px] mt-5'>Good To Have: · Bachelor's degree in a technology-related field from a premier college. <br />
 · Prior 3+ years of experience in front-end development (ReactJS) in a start-up or a dynamic work environment. <br />
 · Strong knowledge of JavaScript/Typescript and technologies like React (with Redux/Thunk/Saga) / React-Native etc. <br />
 · Experience with HTML5/CSS and CSS pre-processor (e.g., SASS, SCSS, LESS) is a must for front-end experts. <br />
· Knowledge of Responsive design, Webpack, Babel, Code splitting, Progressive Web Applications, Client and Server-Side Rendering, Service Worker etc. <br />
· User oriented, responsive to changes, and able to multi-task in a fast-paced environment. We offer an innovative, fast paced,      and entrepreneurial work environment where you’ll be at the centre of leading change by leveraging technology and creating boundless impact in the Global Visual E-commerce ecosystem</p>

            </div>



               {/* Perks and Benefits */}
      <div data-aos="fade-up" className='flex flex-col items-center justify-center mt-12'>
        <p className='text-[24px] sm:text-[30px] md:text-[32px] text-center leading-[44px] '>Perks and Benefits</p>

        {/* hr line */}
        <div className='line w-[85vw] md:w-[80vw] lg:w-[70vw] xl:w-[70vw] bg-black h-[2px] mt-3 mb-12 ' ></div>

        {/* nos div starts */}
        <div className='flex flex-col items-center justify-center ml-3 px-2 gap-3 md:flex-row md:gap-5 md:justify-between md:w-[80vw] lg:w-[70vw] xl:w-[70vw]'>


          {/* no from 1 to 5 */}
          <div className='flex flex-col items-center justify-center gap-3'>
            {/* no 1 */}
            <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>1. Healthcare Insurance</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>

            {/* no 2 */}
            <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>2. Vacation / Paid Time Off</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>


             {/* no 3 */}
             <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>3. Performance Bonus</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>


             {/* no 4 */}
             <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>4. Paid Sick Days</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>



             {/* no 5 */}
             <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>5. 401(K) Plan, Retirement Plan and/or Pension</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>





          </div>





             {/* no from 6 to 10 */}
             <div className='flex flex-col items-center justify-center gap-3'>
            {/* no 6*/}
            <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>6. Flexible Schedule (WFH/WFO)</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>

            {/* no 7 */}
            <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>7. Office Perks</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>


             {/* no 8 */}
             <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>8. Employee Development Plans</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>


             {/* no 9*/}
             <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>9. Tuition Reimbursement</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>



             {/* no 10 */}
             <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>10. Employee Discounts</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>





          </div>


          


        </div>




      </div>


        {/* Take a snapshot of daily life at Agile Global  */}

        <div data-aos="fade-up" className='mt-16 px-3 sm:px-7 md:px-10 lg:px-20 xl:px-44'>
        <p className='text-[24px] sm:text-[30px] md:text-[32px] leading-[44px] text-[#17519B] text-center font-semibold mt- '>Take a snapshot of daily life at Agile Global</p>

        <p className='text-[20px] text-center leading-[27px]   mt-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper vestibulum fermentum. Cras venenatis, nisl sit amet molestie viverra, </p>
      </div>


      {/* slider div starts  */}




      {/* slider div ends  */}


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

export default CareerOperJob