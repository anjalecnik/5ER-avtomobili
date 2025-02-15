import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "Audi", src: "/logos/brands/audi.png" },
  { name: "BMW", src: "/logos/brands/bmw.png" },
  { name: "Citroen", src: "/logos/brands/citroen.png" },
  { name: "Ford", src: "/logos/brands/ford.png" },
  { name: "Land Rover", src: "/logos/brands/land-rover.png" },
  { name: "Mercedes Benz", src: "/logos/brands/mercedes.png" },
  { name: "Nissan", src: "/logos/brands/nissan.png" },
  { name: "Opel", src: "/logos/brands/opel.png" },
  { name: "Peugeot", src: "/logos/brands/peugeot.png" },
  { name: "Seat", src: "/logos/brands/seat.png" },
  { name: "Škoda", src: "/logos/brands/skoda.png" },
  { name: "Volkswagen", src: "/logos/brands/volkswagen.png" },
  { name: "Volvo", src: "/logos/brands/volvo.png" },
];

export default function LogoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white py-10 relative flex justify-center">
      <motion.div
        className="flex space-x-8 w-max"
        animate={{ x: `-${index * 160}px` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="p-4 md:p-6 bg-white shadow-lg rounded-xl flex flex-col items-center w-[45vw] md:w-[30vw] lg:w-[15vw] h-auto flex-shrink-0"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="mb-2 w-20 h-20 object-contain"
            />
            <p className="text-lg font-medium text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis">
              {logo.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
