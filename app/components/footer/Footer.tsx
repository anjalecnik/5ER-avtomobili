import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative pt-4 bg-[#F7F7F7]">
      <div className="relative py-10 px-4 mx-auto text-center">
        <h3 className="text-2xl font-semibold text-gray-800">
          Niste našli, kar ste iskali?
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Včasih želje presegajo trenutno zalogo. Pustite nam svoje podatke in
          obvestili vas bomo, ko najdemo točno takšno vozilo, kot si želite!
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <input
            type="email"
            placeholder="Vaš e-poštni naslov"
            className="w-full max-w-[18rem] px-4 py-2 border rounded-lg focus:outline-none bg-gray-200 text-gray-700"
          />
          <button className="w-full max-w-[12rem] bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Obvestite me
          </button>
        </div>
        <p className="text-gray-500 text-xs mt-2">
          Z oddajo obrazca soglašate z našimi pogoji uporabe in politiko
          zasebnosti.
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-10 px-4 text-gray-800 relative z-10 flex flex-col gap-6 md:flex-row md:flex-nowrap md:justify-center md:items-center">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h4 className="text-lg font-semibold mb-2">Kontakt</h4>
          <p>
            <a href="tel:041777988" className="text-gray-600 underline">
              041 / 777-988
            </a>
            &nbsp;Peter
          </p>
          <p>
            <a href="tel:041734425" className="text-gray-600 underline">
              041 / 734-425
            </a>
            &nbsp; Zvone
          </p>
          <p>
            <a href="mailto:5eravtomobili@gmail.com" className="text-gray-600">
              5eravtomobili@gmail.com
            </a>
          </p>
        </div>

        <div className="w-full md:w-1/3 text-center">
          <h4 className="text-lg font-semibold mb-2">Delovni čas</h4>
          <p>Ponedeljek - petek: 09:00-17:00</p>
          <p>Sobota: 08:00-12:00</p>
          <p>Nedelja in prazniki: zaprto</p>
        </div>

        <div className="w-full md:w-1/3 text-center md:text-right">
          <h4 className="text-lg font-semibold mb-2">Spremljajte nas</h4>
          <div className="flex justify-center md:justify-end space-x-4 text-gray-600">
            <a
              href="https://www.facebook.com/5ER.avtomobili"
              className="hover:text-blue-600"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/5er_avtomobili/"
              className="hover:text-blue-600"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-full flex justify-center">
        <img
          src="/5er_logo.png"
          alt="5er Logo"
          className="absolute bottom-0 w-5/6 opacity-[.03] grayscale z-0"
        />
      </div>

      <div className="ml-5 text-gray-600 py-4 text-sm border-t bg-opacity-80 relative z-10 text-center">
        © 2025 Avtorske pravice so pridržane in so last 5ER Avtomobili
      </div>
    </footer>
  );
}
