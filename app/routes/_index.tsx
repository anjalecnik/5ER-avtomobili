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
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
          "Accept-Language": "en-US,en;q=0.9",
          "Accept-Encoding": "gzip, deflate, br",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
          Referer: "https://www.google.com/",
          DNT: "1",
          Connection: "keep-alive",
          "Upgrade-Insecure-Requests": "1",
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
