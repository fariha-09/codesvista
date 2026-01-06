import React from 'react';
import { FaPenToSquare } from "react-icons/fa6";
import { FaEye, FaDownload } from "react-icons/fa";
import { LuSquareCode } from "react-icons/lu";
import { MdOutlineLaunch } from "react-icons/md";



export default function OurDevelopmentProcess() {
  const steps = [
    {
      id: "01",
      title: "Consultation",
      desc: "We discuss your requirements, goals, and vision for the website.",
      icon: (props) => (
        <svg {...props} viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 22.6667C7.72083 22.6667 7.05382 22.3892 6.49896 21.8344C5.9441 21.2795 5.66667 20.6125 5.66667 19.8333V6.72917L0 0H26.9167C27.6958 0 28.3628 0.277431 28.9177 0.832292C29.4726 1.38715 29.75 2.05417 29.75 2.83333V19.8333C29.75 20.6125 29.4726 21.2795 28.9177 21.8344C28.3628 22.3892 27.6958 22.6667 26.9167 22.6667H8.5ZM6.09167 2.83333L8.5 5.66667V19.8333H26.9167V2.83333H6.09167ZM17.7083 19.125L19.6917 17.1417L18.1333 15.5833H24.0833V12.75H11.3333L17.7083 19.125ZM11.3333 9.91667H24.0833L17.7083 3.54167L15.725 5.525L17.2833 7.08333H11.3333V9.91667Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      id: "02",
      title: "Design & Planning",
      desc: "We create wireframes and designs that align with your brand identity.",
      icon: ({ className }) => (
        <svg className={className} viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1667 28.3333C12.2069 28.3333 10.3653 27.9615 8.64167 27.2177C6.91806 26.474 5.41875 25.4646 4.14375 24.1896C2.86875 22.9146 1.85938 21.4153 1.11563 19.6917C0.371875 17.9681 0 16.1264 0 14.1667C0 12.2069 0.371875 10.3653 1.11563 8.64167C1.85938 6.91806 2.86875 5.41875 4.14375 4.14375C5.41875 2.86875 6.91806 1.85938 8.64167 1.11563C10.3653 0.371875 12.2069 0 14.1667 0C15.7014 0 17.1535 0.224306 18.5229 0.672917C19.8924 1.12153 21.1556 1.74722 22.3125 2.55L20.2583 4.63958C19.3611 4.07292 18.4049 3.63021 17.3896 3.31146C16.3743 2.99271 15.3 2.83333 14.1667 2.83333C11.0264 2.83333 8.35243 3.93715 6.14479 6.14479C3.93715 8.35243 2.83333 11.0264 2.83333 14.1667C2.83333 17.3069 3.93715 19.9809 6.14479 22.1885C8.35243 24.3962 11.0264 25.5 14.1667 25.5C14.9222 25.5 15.6542 25.4292 16.3625 25.2875C17.0708 25.1458 17.7556 24.9451 18.4167 24.6854L20.5417 26.8458C19.5736 27.3181 18.5583 27.684 17.4958 27.9438C16.4333 28.2035 15.3236 28.3333 14.1667 28.3333ZM24.0833 25.5V21.25H19.8333V18.4167H24.0833V14.1667H26.9167V18.4167H31.1667V21.25H26.9167V25.5H24.0833ZM12.1833 20.6833L6.1625 14.6625L8.14583 12.6792L12.1833 16.7167L26.35 2.51458L28.3333 4.49792L12.1833 20.6833Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      id: "03",
      title: "Development",
      desc: "Our developers build your website using the latest technologies.",
      icon: (props) => <LuSquareCode {...props} />,
    },
    {
      id: "04",
      title: "Testing",
      desc: "We discuss your requirements, goals, and vision for the website.",
      icon: ({ className }) => (
        <svg className={className} viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg"> <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0187 25.4646L15.0167 21.4625L17 19.4792L19.0187 21.4979L23.5167 17L25.5 18.9833L19.0187 25.4646ZM0 25.5V22.6667H12.75V25.5H0ZM0 19.8333V17H12.75V19.8333H0ZM0 14.1667V11.3333H25.5V14.1667H0ZM0 8.5V5.66667H25.5V8.5H0ZM0 2.83333V0H25.5V2.83333H0Z" fill="currentColor"/>
</svg>
 </svg>
      ),
    },
    {
      id: "05",
      title: "Launch",
      desc: "We create wireframes and designs that align with your brand identity.",
      icon: (props) => <MdOutlineLaunch {...props} />,
    },
    {
      id: "06",
      title: "Support",
      desc: "Our developers build your website using the latest technologies.",
      icon:  ({ className }) => (
        <svg className={className} viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg"> <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"> 
<path d="M14.1667 7.08333C14.5681 7.08333 14.9045 6.94757 15.176 6.67604C15.4476 6.40451 15.5833 6.06806 15.5833 5.66667C15.5833 5.26528 15.4476 4.92882 15.176 4.65729C14.9045 4.38576 14.5681 4.25 14.1667 4.25C13.7653 4.25 13.4288 4.38576 13.1573 4.65729C12.8858 4.92882 12.75 5.26528 12.75 5.66667C12.75 6.06806 12.8858 6.40451 13.1573 6.67604C13.4288 6.94757 13.7653 7.08333 14.1667 7.08333ZM12.75 18.4167H15.5833V9.91667H12.75V18.4167ZM0 28.3333V2.83333C0 2.05417 0.277431 1.38715 0.832292 0.832292C1.38715 0.277431 2.05417 0 2.83333 0H25.5C26.2792 0 26.9462 0.277431 27.501 0.832292C28.0559 1.38715 28.3333 2.05417 28.3333 2.83333V19.8333C28.3333 20.6125 28.0559 21.2795 27.501 21.8344C26.9462 22.3892 26.2792 22.6667 25.5 22.6667H5.66667L0 28.3333ZM4.4625 19.8333H25.5V2.83333H2.83333V21.4271L4.4625 19.8333Z" fill="currentColor"/>
</svg>
</svg>
)
    }
  ];

  return (
    <section className="bg-[#2B2C34] py-20 px-6">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#F1F3F4] text-4xl md:text-6xl font-serif font-bold">
            Our Development Process
          </h2>
          <p className="text-[#F1F3F4] text-lg md:text-xl max-w-3xl mx-auto">
            Our proven 6-step process ensures quality delivery and client satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {steps.map((step, index) => {
            // FIX: Identify the component here, inside the map
            const StepIcon = step.icon;

            return (
              <div 
                key={index} 
                className="relative bg-[#F1F3F41A]/10 border border-white/20 p-8 rounded-[40px] flex flex-col items-center text-center transition-all duration-300 hover:bg-[#F1F3F466]"
              >
                <div className="absolute top-5 right-7 border border-white/40 text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-xs">
                  {step.id}
                </div>

                <div className="bg-[#F1F3F4] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                   {/* FIX: Render as a component tag */}
                   <StepIcon className="w-8 h-8 text-[#0E9C9D]" />
                </div>

                <h3 className="text-white text-2xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-[#F1F3F4CC]/80 text-[14px] leading-relaxed font-medium px-2">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


// import { IoIosChatbubbles } from "react-icons/io";
// import { FaLightbulb,FaPalette,FaPenToSquare } from "react-icons/fa6";
// import { FaEye,FaDownload } from "react-icons/fa";





// export default function OurWorkProcess() {
//   const steps = [
//     {
//       id: "01",
//       title: "Brief Research",
//       desc: "We understand your business, target audience, and design preferences.",
//       icon: <IoIosChatbubbles size={32} className="text-[#0E9C9D]" />,
//     },
//     {
//       id: "02",
//       title: "Concept Development",
//       desc: "We brainstorm and create initial design concepts based on your requirements.",
//       icon: <FaLightbulb size={32} className="text-[#0E9C9D]" />,
//     },
//     {
//       id: "03",
//       title: "Design Creation",
//       desc: "Our designers create the initial designs using professional tools.",
//       icon: <FaPalette size={32} className="text-[#0E9C9D]" />,
//     },
//     {
//       id: "04",
//       title: "Review & Feedback",
//       desc: "We review the designs and provide feedback for improvements.",
//       icon: <FaEye size={32} className="text-[#0E9C9D]" />,
//     },
//     {
//       id: "05",
//       title: "Revisions",
//       desc: "We refine the designs based on your feedback until you're satisfied.",
//       icon: <FaPenToSquare size={32} className="text-[#0E9C9D]" />,
//     },
//     {
//       id: "06",
//       title: "Final Delivery",
//       desc: "We deliver all final files in the required formats for immediate use.",
//       icon: <FaDownload size={32} className="text-[#0E9C9D]" />,
//     }
//   ];

//   return (
    // <section className="bg-[#0E9C9D] py-20 px-6">
    //   <div className="max-w-6xl mx-auto px-4 md:px-12">
        
    //     {/* Header Section */}
    //     <div className="text-center mb-16 space-y-4">
    //       <h2 className="text-[#F1F3F4] text-4xl md:text-6xl font-serif font-bold">
    //         Our Work Process
    //       </h2>
    //       <p className="text-[#F1F3F4] text-lg md:text-xl max-w-3xl mx-auto">
    //         Our creative process ensures we deliver designs that exceed your expectations.
    //       </p>
    //     </div>

//         {/* Process Steps Grid */}
        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        //   {steps.map((step, index) => (
        //     <div 
        //       key={index} 

        //       className="relative bg-[#F1F3F44D] border border-white/20 p-8 rounded-[40px] flex flex-col items-center text-center transition-all duration-300 hover:bg-[#F1F3F466]"
        //     >
        //       {/* Step Number Badge */}
        //       <div className="absolute top-5 right-7 border border-white/40 text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-xs">
        //         {step.id}
        //       </div>

        //       {/* Icon Container (White Box) */}
        //       <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
        //          {step.icon}
        //       </div>

        //       {/* Text Content */}
        //       <h3 className="text-white text-2xl font-bold mb-3">
        //         {step.title}
        //       </h3>
        //       <p className="text-[#F1F3F4CC]/80 text-[14px] leading-relaxed font-medium px-2">
        //         {step.desc}
        //       </p>
        //     </div>
        //   ))}
        // </div>
        
//       </div>
//     </section>
//   );
// }