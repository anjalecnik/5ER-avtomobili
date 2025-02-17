import { MetaFunction } from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Ponudba" },
    { name: "description", content: "Prodaja avtomobilov zaloga" },
  ];
};

export default function Offers() {
  const [searchParams] = useSearchParams();
  const urlBrand = searchParams.get("brand");

  const [selectedBrand, setSelectedBrand] = useState(urlBrand || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState(urlBrand || "");

  const brands = [
    "Audi",
    "BMW",
    "Citroen",
    "Ford",
    "Honda",
    "Land Rover",
    "Mercedes-Benz",
    "Nissan",
    "Opel",
    "Peugeot",
    "Renault",
    "Seat",
    "Toyota",
    "Volkswagen",
    "Volvo",
    "Škoda",
  ];

  useEffect(() => {
    if (urlBrand) {
      setSearchTerm(urlBrand);
      setSelectedBrand(urlBrand);
    }
  }, [urlBrand]);

  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const baseUrl =
    "https://www.avto.net/_INDIVIDUAL/index.asp?izpis=2&broker=14015&stran=1&subSORT=3&subTIPSORT=DESC";
  const iframeSrc = selectedBrand
    ? `${baseUrl}&SUBmakesearch=${selectedBrand}`
    : baseUrl;

  return (
    <div className="bg-[#F8F9FA] min-h-screen p-4 pb-0 mt-24">
      <div className="flex flex-col items-center mt-4 mb-4 max-md:mx-4 md:w-1/2 mx-auto relative">
        <div className="w-full relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(true);
            }}
            placeholder="⌕ Išči po znamki"
            className="w-full px-4 py-2 border text-semantic-background-base border-gray-400 rounded-lg bg-[#FFFFFF] pr-10"
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSelectedBrand("");
                setSearchTerm("");
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
          )}
        </div>
        {showDropdown && (
          <ul className="absolute z-20 bg-white border border-gray-300 w-full mt-[42px] rounded-lg shadow-lg max-h-40 overflow-y-auto">
            {filteredBrands.map((brand) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <li
                key={brand}
                onClick={() => {
                  setSelectedBrand(brand);
                  setSearchTerm(brand);
                  setShowDropdown(false);
                }}
                className="px-4 py-2 text-gray-600 hover:bg-gray-200 cursor-pointer"
              >
                {brand}
              </li>
            ))}
            {filteredBrands.length === 0 && (
              <li className="px-4 py-2 text-gray-500">Ni zadetkov</li>
            )}
          </ul>
        )}
      </div>
      <div className="relative z-[1]">
        <iframe
          id="iframe"
          title="avtonet"
          src={iframeSrc}
          className="w-full h-screen border-none"
        ></iframe>
      </div>
    </div>
  );
}
