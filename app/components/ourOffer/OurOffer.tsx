import { FaStar } from "react-icons/fa";
import Typography from "../typography/Typography";

export default function OurOfferSection() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <Typography
            variant="h2"
            className="font-semibold mb-4 text-semantic-gray-bg-weak"
          >
            Naša ponudba
          </Typography>
          <Typography variant="body" className="text-gray-600 mb-6">
            Naše podjetje se ponaša s kakovostno izbiro vozil, ki so preverjena
            in opremljena z garancijo. Zadovoljstvo naših strank je naša
            prioriteta, zato si vsak dan prizadevamo najti nove načine za
            izpolnjevanje vaših želja in potreb.
          </Typography>

          <Typography
            variant="bodyBold"
            className="mb-2 text-semantic-gray-bg-weak"
          >
            Zakaj izbrati nas?
          </Typography>
          <ul className="list-disc list-outside pl-5 marker:text-gray-500 space-y-3">
            <li>
              <Typography
                variant="bodyBold"
                className="text-semantic-gray-bg-weak mb-0.5"
              >
                Vozila z jamstvom
              </Typography>
              <Typography variant="body" className="text-gray-600">
                Ponujamo eno- ali dvoletno jamstvo, ki vam zagotavlja brezskrbno
                vožnjo.
              </Typography>
            </li>
            <li>
              <Typography
                variant="bodyBold"
                className="text-semantic-gray-bg-weak mb-0.5"
              >
                Preverljiva zgodovina
              </Typography>
              <Typography variant="body" className="text-gray-600">
                Vsa naša vozila imajo preverljivo zgodovino. Brezplačno lahko
                preverite vse informacije na spletni strani{" "}
                <a
                  href="https://www.autodna.si/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic hover:underline"
                >
                  AutoDNA.si
                </a>
                .
              </Typography>
            </li>
            <li>
              <Typography
                variant="bodyBold"
                className="text-semantic-gray-bg-weak mb-0.5"
              >
                Vse na enem mestu
              </Typography>
              <Typography variant="body" className="text-gray-600">
                Pri nas uredite vse: zavarovanje, registracijo in ugodno
                financiranje – hitro in preprosto.
              </Typography>
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          <img
            src="/car-offer.jpg"
            alt="Car Offer"
            className="rounded-xl shadow-lg w-full max-w-md lg:max-w-full"
          />
        </div>
      </div>

      <div className="mt-10 border-t pt-6 flex flex-wrap justify-between text-center">
        <div className="w-1/2 sm:w-1/4">
          <Typography
            variant="display2"
            className="font-bold text-semantic-gray-bg-weak"
          >
            70+
          </Typography>
          <Typography variant="body" className="text-gray-600">
            AVTOMOBILOV NA ZALOGI
          </Typography>
        </div>
        <div className="w-1/2 sm:w-1/4">
          <Typography
            variant="display2"
            className="font-bold text-semantic-gray-bg-weak"
          >
            1000+
          </Typography>
          <Typography variant="body" className="text-gray-600">
            ZADOVOLJNIH STRANK
          </Typography>
        </div>
        <div className="w-1/2 sm:w-1/4 mt-6 sm:mt-0">
          <Typography
            variant="display2"
            className="font-bold text-semantic-gray-bg-weak"
          >
            14+
          </Typography>
          <Typography variant="body" className="text-gray-600">
            LET IZKUŠENJ
          </Typography>
        </div>
        <div className="w-1/2 sm:w-1/4 mt-6 sm:mt-0 flex flex-col items-center text-center">
          <Typography
            variant="display2"
            className="font-bold flex items-center text-semantic-gray-bg-weak"
          >
            4,5 <FaStar className="ml-2 text-yellow-400" />
          </Typography>
          <Typography variant="body" className="text-gray-600">
            OCENA KUPCEV
          </Typography>
        </div>
      </div>
    </div>
  );
}
