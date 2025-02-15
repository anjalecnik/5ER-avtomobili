import LeasingsLogos from "~/components/leasings/leasings";
import Typography from "~/components/typography/Typography";

export default function Financing() {
  return (
    <div className="max-w-7xl mx-auto p-8 mt-24 relative">
      <Typography
        variant="h2"
        className="font-semibold text-gray-700 mb-6 text-center"
      >
        Ugodne možnosti financiranja
      </Typography>

      <div className="space-y-6">
        <div className="border border-gray-200 rounded-lg shadow-lg p-6 cursor-default hover:shadow-xl transition bg-white">
          <Typography variant="h3" className="font-medium text-gray-700 mb-4">
            Prilagodljive rešitve za nakup vozila
          </Typography>
          <Typography variant="body" className="text-gray-600 mb-4">
            Razumemo, da ima vsak kupec svoje želje in potrebe, zato smo
            pripravili več možnosti financiranja:
          </Typography>
          <ul className="list-disc pl-5 space-y-3 text-gray-600">
            <li>
              <strong>Menjava starega vozila kot del plačila:&nbsp;</strong>
              Zmanjšajte skupni znesek financiranja s starim vozilom.
            </li>
            <li>
              <strong>12-mesečno jamstvo:&nbsp;</strong> Zagotovite si enoletno
              jamstvo za vozila mlajša od 10 let.
            </li>
            <li>
              <strong>Do 50 % popusta na zavarovanje:&nbsp;</strong> Možnost
              obročnega plačevanja.
            </li>
            <li>
              <strong>Bančni kredit brez pologa:&nbsp;</strong> Do 84 mesecev
              odplačevanja.
            </li>
            <li>
              <strong>Financiranje s položnicami:&nbsp;</strong> Minimalni
              polog, odplačevanje do 72 mesecev.
            </li>
            <li>
              <strong>Obročno odplačevanje za starejša vozila.</strong>
            </li>
            <li>
              <strong>Takojšnji odkup vozil.</strong>
            </li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg shadow-lg p-6 cursor-default hover:shadow-xl transition bg-white">
          <Typography variant="h3" className="font-medium text-gray-700 mb-4">
            Pogoji za odobritev financiranja
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <ul className="list-disc pl-5 space-y-3 text-gray-600">
                <li>Veljavna pogodba o zaposlitvi.</li>
                <li>Zadnje tri plačilne liste ali bančni izpiski.</li>
                <li>Osebni dokument (osebna izkaznica ali potni list).</li>
                <li>Davčna številka.</li>
                <li>Bančna kartica.</li>
              </ul>
              <Typography variant="body" className="text-gray-600 mt-4">
                V določenih primerih lahko zahtevamo dodatno dokumentacijo.
              </Typography>
            </div>
            <div className="flex justify-end">
              <img
                src="/public/financing.jpg"
                alt="Financing options"
                className="rounded-lg shadow-md h-auto max-h-48 object-cover lg:mr-7"
              />
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg shadow-lg p-6 cursor-default hover:shadow-xl transition bg-white">
          <Typography variant="h3" className="font-medium text-gray-700 mb-4">
            Financiranje za tujce
          </Typography>
          <Typography variant="body" className="text-gray-600">
            Tudi tujci s stalnim prebivališčem v Sloveniji lahko pri nas uredijo
            financiranje vozila.
          </Typography>
        </div>

        <div className="border border-gray-200 rounded-lg shadow-lg p-6 cursor-default hover:shadow-xl transition bg-white">
          <Typography variant="h3" className="font-medium text-gray-700 mb-4">
            Avto kredit do 15.000 EUR
          </Typography>
          <Typography variant="body" className="text-gray-600 mb-4">
            Nudimo možnost pridobitve avtomobilskega kredita do 15.000 EUR z
            dobo odplačevanja do 72 mesecev.
          </Typography>
          <ul className="list-disc pl-5 space-y-3 text-gray-600">
            <li>Osebni dokument.</li>
            <li>Davčna številka.</li>
            <li>Zadnja plačilna lista.</li>
            <li>Zadnja dva bančna izpiska.</li>
            <li>Bančna kartica.</li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg shadow-lg p-6 cursor-default hover:shadow-xl transition bg-white">
          <Typography
            variant="h3"
            className="font-medium text-gray-700 mb-4 text-center"
          >
            Naši leasing partnerji
          </Typography>
          <LeasingsLogos />
        </div>
      </div>
    </div>
  );
}
