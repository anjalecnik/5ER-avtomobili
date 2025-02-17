import { FaPhoneAlt } from "react-icons/fa";

export function LocationInfo() {
  return (
    <div id="kontakt" className="relative scroll-mt-4 overflow-auto">
      <iframe
        title="Location Map"
        src="https://www.google.com/maps?q=5er+Avtomobili+Peter+Antoli%C4%8D+S.P.&z=15&output=embed&amp;iwloc=near"
        className="w-full h-96"
        allowFullScreen
        loading="lazy"
      ></iframe>

      <div className="absolute bottom-6 left-[10px] bg-white max-md: rounded-lg shadow-lg p-6 w-[250px] md:w-[330px]">
        <h2 className="text-2xl font-bold mb-2 text-semantic-gray-bg-weak">
          Stopite v stik
        </h2>
        <p className="text-gray-600">5ER avtomobili s.p.</p>
        <p className="text-gray-600 mb-3">Slance 3, 3211 TEHARJE</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between border rounded-lg p-2">
            <FaPhoneAlt className="text-gray-600" />
            <a href="tel:041777988" className="text-blue-600 font-medium">
              041 / 777-988
            </a>
            <span className="text-gray-600">Peter</span>
          </div>
          <div className="flex items-center justify-between border rounded-lg p-2">
            <FaPhoneAlt className="text-gray-600" />
            <a href="tel:041734425" className="text-blue-600 font-medium">
              041 / 734-425
            </a>
            <span className="text-gray-600">Zvone</span>
          </div>
        </div>
      </div>
    </div>
  );
}
