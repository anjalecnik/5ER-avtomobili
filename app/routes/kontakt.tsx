import { FaEnvelope, FaPhoneAlt, FaClock, FaRegClock } from "react-icons/fa";
import Typography from "~/components/typography/Typography";
import { useState } from "react";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Kontakt" },
    { name: "description", content: "Prodaja avtomobilov delovni čas" },
  ];
};

export default function Contact() {
  const [currentDay] = useState(new Date().getDay());

  const openingHours = [
    { day: "PON - PET", hours: "9:00 – 17:00" },
    { day: "SOB", hours: "08:00 – 12:00" },
    { day: "NED", hours: "ZAPRTO" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 mt-20 relative">
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-gray-300 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition">
        <div>
          <Typography variant="h3" className="font-semibold text-gray-700">
            Sedež podjetja
          </Typography>
          <Typography variant="body" className="text-gray-800 mb-4">
            <strong>5ER Avtomobili, d.o.o.</strong>
            <br />
            Slance 3<br />
            3211 Teharje
          </Typography>
          <div className="w-fit">
            <div className="flex items-center space-x-3 border border-gray-300 p-1 rounded-[2rem] shadow-sm hover:bg-gray-100 transition bg-white mb-1">
              <div className="p-2 w-10 h-10 bg-gray-200 rounded-[50%]">
                <FaPhoneAlt className="text-gray-600 w-6 h-6" />
              </div>
              <a
                href="tel:041777988"
                className="text-gray-700 font-medium text-base"
              >
                041 / 777-988
              </a>
            </div>
            <div className="flex items-center space-x-3 border border-gray-300 p-1 pr-4 rounded-[2rem] shadow-sm hover:bg-gray-100 transition bg-white mb-1">
              <div className="p-2 w-10 h-10 bg-gray-200 rounded-[50%]">
                <FaPhoneAlt className="text-gray-600 w-6 h-6" />
              </div>
              <a
                href="tel:041734425"
                className="text-gray-700 font-medium text-base"
              >
                041 / 734-425
              </a>
            </div>
            <div className="flex items-center space-x-3 border border-gray-300 p-1 rounded-[2rem] shadow-sm hover:bg-gray-100 transition bg-white">
              <div className="p-2 w-10 h-10 bg-gray-200 rounded-[50%]">
                <FaEnvelope className="text-gray-600 w-6 h-6" />
              </div>
              <a
                href="mailto:info@5eravtomobili.si"
                className="text-gray-700 font-medium text-base pr-4"
              >
                info@5eravtomobili.si
              </a>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] w-full">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps?q=5er+Avtomobili+Peter+Antoli%C4%8D+S.P.&z=15&output=embed"
            className="w-full h-full rounded-lg shadow-lg border"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center border border-gray-300 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition">
        <Typography
          variant="h3"
          className="font-semibold text-gray-700 text-center md:col-span-3"
        >
          ODPIRALNI ČAS
        </Typography>
        {openingHours.map((item, index) => {
          const isCurrentDay =
            (currentDay >= 1 && currentDay <= 5 && index === 0) ||
            (currentDay === 6 && index === 1) ||
            (currentDay === 0 && index === 2);

          return (
            <div
              key={index}
              className={`flex flex-col items-center border p-4 rounded-lg shadow-sm transition bg-white ${
                isCurrentDay ? "border-blue-500" : "border-gray-300"
              }`}
            >
              {isCurrentDay ? (
                <FaClock className="text-[2rem] text-blue-500" />
              ) : (
                <FaRegClock className="text-[2rem] text-gray-600" />
              )}
              <Typography
                variant="body"
                className="font-semibold text-gray-700 mt-2"
              >
                {item.day}
              </Typography>
              <Typography variant="body" className="text-gray-600">
                {item.hours}
              </Typography>
            </div>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-gray-300 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition">
        <div className="relative h-80 overflow-hidden rounded-lg">
          <img
            src="/salon.jpeg"
            alt="Salon"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <Typography variant="h3" className="font-semibold text-gray-700">
            Obiščite naš salon in izberite svoj popoln avto
          </Typography>
          <Typography variant="body" className="text-gray-600">
            Pri <b>5ER Avtomobili</b> se zavzemamo za kakovost in zaupanje. Naša
            ekipa vam bo z veseljem svetovala pri izbiri vozila, vam pomagala
            pri financiranju ter poskrbela za brezskrbno izkušnjo nakupa.
          </Typography>
        </div>
      </div>
    </div>
  );
}
