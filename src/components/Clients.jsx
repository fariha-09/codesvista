import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaStar } from "react-icons/fa";
import 'swiper/css';
import { motion } from 'framer-motion';
import grids from '../assets/grids.png';

export default function Clients() {
  const reviews = [
    {
      name: "Sara Thompson",
      text: "“Working with Codes Techvista was a game-changer for our online store. Their team built a sleek website that boosted our conversions significantly.”",
    },
    {
      name: "Jason Lee",
      text: "“The mobile app developed by CodesVista is intuitive and fast. Their communication was excellent and they accommodated all our changes.”",
    },
    {
      name: "Ahad Murtaza",
      text: "“We've been using CodesVista for maintenance, and their response time has been outstanding. They are reliable and proactive.”",
    },
    {
      name: "Asad Abbas",
      text: "“CodesVista built a custom eLearning platform that's user-friendly and visually appealing. Their team really cares about your success.”",
    },
    {
      name: "Ayesha Rehman",
      text: "“From design to execution, CodesVista delivered a world-class user experience. Their branding work helped us stand out.”",
    }
  ];

  return (
    <section className="relative bg-white flex justify-center" 
    style={{ backgroundImage: `url(${grids})`, 
    backgroundSize: 'cover'
     }}>
        <div className="relative w-full overflow-hidden bg-white/[98%] p-10 md:p-20">
          
          {/* Header Content */}
          <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 mb-16">
           <motion.h2
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text "
                style={{
                  textShadow: `
                              0 0 38px rgba(0, 206, 209, 0.45),
                              0 0 20px rgba(0, 206, 209, 0.25)
                            `,
                }}
              >
                What Our Clients Say
              </motion.h2>
            <p className="text-gray-600 text-[16px] md:text-xl max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our clients have to say about our<br className="hidden md:block"/> work
            </p>
          </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40} 
          slidesPerView={1.1} 
          centeredSlides={true}
          loop={true}
          speed={4000}
          autoplay={{ 
            delay: 3, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Recommended false for seamless ticker effect
          }}
          breakpoints={{
            1024: {
              slidesPerView: 2.2, 
              spaceBetween: 50,
            },
          }}
          className="pb-10 linear-swiper" // Added a class for the CSS override
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#F1F3F480]/50 border border-white/20 backdrop-blur-sm rounded-[44px] flex flex-col items-center text-center p-8 md:px-18 min-h-[220px] md:min-h-[250px] justify-center">
                <div className="flex gap-3 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#F6D021] text-xl" />
                  ))}
                </div>
                <p className="text-[#4C4480] md:text-[21px] font-normal italic leading-relaxed max-w-90 mb-4">
                  {review.text}
                </p>                
                <h3 className="text-[#4C4480] font-bold text-[18px]">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        /* 3. Force linear transition for the "Seamless" feel */
        .linear-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }

        .swiper-slide {
          opacity: 0.3;
          transform: scale(0.9);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </section>
  );
}