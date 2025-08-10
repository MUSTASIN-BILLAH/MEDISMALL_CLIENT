import React from "react";
import Banner1 from "../assets/BannerImage/Banner1.jpg";
import Banner2 from "../assets/BannerImage/Banner2.jpg";
import Banner3 from "../assets/BannerImage/Banner3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Typewriter from "typewriter-effect";

const Banner = () => {
  const slides = [
    {
      img: Banner1,
      header: "Your Trusted Online Pharmacy Marketplace",
      desc: "Discover a wide range of medicines from verified vendors — fast, safe, and reliable delivery at your doorstep.",
    },
    {
      img: Banner2,
      header: "Shop Medicines from Multiple Sellers in One Place",
      desc: "Compare prices and find the best deals on genuine healthcare products, all with just a few clicks.",
    },
    {
      img: Banner3,
      header: "Secure & Convenient Medicine Shopping",
      desc: "Powered by cutting-edge technology to ensure quick orders, easy payments, and authentic products you can trust.",
    },
  ];

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} interval={8000}>
      {slides.map((slide) => {
        return (
          <div className="relative">
            <img className="max-h-screen" src={slide.img} alt="bannar image" />
            <div
              className="absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2 bg-black text-white bg-opacity-40 px-8 py-4 rounded-lg"
            >
              {/* Typewriter animation start*/}

              <div className="text-4xl mb-4">
                <Typewriter
                  options={{
                    strings: [slide.header],
                    autoStart: true,
                    loop: true,
                    delay: 25,
                    deleteSpeed: 20,
                    pauseFor: 4000,
                  }}
                />
              </div>
              <div className="text-2xl">
                <Typewriter
                  options={{
                    strings: [slide.desc],
                    autoStart: true,
                    loop: true,
                    delay: 15,
                    deleteSpeed: 25,
                    pauseFor: 4000,
                    
                  }}
                />
              </div>
              {/* Typewriter animation end*/}
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Banner;
