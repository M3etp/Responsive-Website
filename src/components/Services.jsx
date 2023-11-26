import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="py-10 px-5 max-w-full flex items-center gap-7 md:overflow-x-auto scrollbar-hide md:flex-row flex-col">
      <div className="flex flex-col md:min-w-[440px] md:text-start text-center ">
        <h2 className="text-pink-500 text-3xl font-bold tracking-widest">
          SERVICES
        </h2>
        <p className="text-2xl font-bold">Our top value categories for you</p>
      </div>
      
      <ServiceCard
        emoji="🌏"
        heading={"Best Tour Guide"}
        para={
          "What looked like a small patch of purple grass, above five feet."
        }
      />
      <ServiceCard
        emoji="🔖"
        heading={"Easy Booking"}
        para={"Square, was moving across the sand in their direction."}
        
      />
      <ServiceCard
        emoji="☁️"
        heading={"Weather Podcast"}
        para={
          "What looked like a small patch of purple grass, above five feet."
        }
      />
      </div>
    
  );
}

export default Services;
