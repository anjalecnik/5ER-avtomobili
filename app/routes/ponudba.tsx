import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Ponudba" },
    { name: "description", content: "Prodaja avtomobilov zaloga" },
  ];
};

export default function Offers() {
  return (
    <div className="bg-[#F8F9FA]">
      <div className="relative z-[1] pt-[140px]">
        <iframe
          id="iframe"
          title="avtonet"
          src="https://www.avto.net/_INDIVIDUAL/index.asp?izpis=2&broker=14015&stran=1&subSORT=3&subTIPSORT=DESC"
          className="w-full h-screen"
        ></iframe>
      </div>
    </div>
  );
}
