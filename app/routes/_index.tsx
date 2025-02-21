import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import LogoCarousel from "~/components/carousel/LogoCarousel";
import Hero from "~/components/hero/Hero";
import { LocationInfo } from "~/components/locationInfo/LocationInfo";
import NewCarsSection from "~/components/newCars/NewCars";
import OurOfferSection from "~/components/ourOffer/OurOffer";
import { JSDOM } from "jsdom";
import { ICar } from "~/types/interfaces/ICar";
import LeasingsLogos from "~/components/leasings/leasings";

export const meta: MetaFunction = () => {
  return [
    { title: "5ER avtomobili" },
    { name: "description", content: "Prodaja avtomobilov" },
  ];
};

export const loader: LoaderFunction = async () => {
  try {
    const response = await fetch(
      "https://www.avto.net/_INDIVIDUAL/?broker=14015&subSORT=3&subTIPSORT=DESC",
      {
        headers: {
          "User-Agent": "PostmanRuntime/7.43.0",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          Cookie:
            "__cf_bm=xwy0FUw2OjoMY4Z.AzpMxgIzObyeD.Z5XkQrjkm54lo-1740161401-1.0.1.1-FxQ...",
        },
      }
    );

    if (!response.ok) throw new Error("Failed to fetch data");

    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const carElements = Array.from(
      document.querySelectorAll("a[href*='details.asp?ID']")
    ).slice(0, 3);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cars: ICar[] = carElements.map((carElement: any, index) => {
      const title =
        carElement.querySelector("td.h3.text-dark")?.textContent?.trim() || "/";
      const details =
        carElement.querySelector("td.h4.text-dark")?.textContent?.trim() || "";
      const price =
        carElement
          .querySelector(".badge-light p.h3")
          ?.textContent?.replace(/�/g, "€")
          .trim() || "?";
      const year =
        carElement
          .querySelector(".flaticon-time")
          ?.closest("div")
          ?.textContent?.replace(/\s+/g, " ")
          .trim() || "?";

      const km =
        carElement
          .querySelector(".flaticon-dashboard-2")
          ?.closest("div")
          ?.textContent?.replace(/\s+/g, " ")
          .trim() || "?";

      const image = carElement.querySelector("img")?.getAttribute("src") || "";
      const link = `https://www.avto.net/Ads/${carElement.getAttribute(
        "href"
      )}`;

      const transmissionElement = carElement.querySelector(
        ".flaticon-gearbox-2, .flaticon-gearbox-5"
      );
      const transmission = transmissionElement
        ? transmissionElement
            .closest("div")
            ?.textContent?.replace(/�/g, "č")
            .trim()
        : "?";

      return {
        id: `car-${index}`,
        title: title,
        details: details,
        price,
        year,
        km,
        transmission,
        image,
        link,
      };
    });

    return json(cars);
  } catch (error) {
    console.error("Error fetching car data:", error);
    return json([]);
  }
};

export default function Index() {
  const cars = useLoaderData<typeof loader>();

  return (
    <>
      <Hero />

      <LogoCarousel />
      <NewCarsSection cars={cars} />
      <OurOfferSection />

      <LeasingsLogos className="mx-6" />
      <LocationInfo />
    </>
  );
}
