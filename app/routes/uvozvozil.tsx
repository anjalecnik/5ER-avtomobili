import { json, MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useState, useEffect } from "react";
import Typography from "~/components/typography/Typography";
import { sendEmail } from "~/utils/send-email";

type ActionResponse = {
  success?: string;
  error?: string;
};

export const meta: MetaFunction = () => {
  return [
    { title: "Uvoz vozil" },
    { name: "description", content: "Prodaja avtomobilov uvoz" },
  ];
};

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  const emailResponse = await sendEmail(data);

  if (!emailResponse.success) {
    return json({ error: emailResponse.error }, { status: 400 });
  }

  return json({ success: "Vaše povpraševanje je bilo uspešno poslano!" });
};

export default function CarImport() {
  const actionData = useActionData<ActionResponse>();
  const navigation = useNavigation();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (actionData?.success) {
      setSuccessMessage(actionData.success);
    }
  }, [actionData]);

  return (
    <div className="max-w-7xl mx-auto p-8 mt-24 relative">
      <Typography
        variant="h2"
        className="font-semibold text-gray-700 mb-6 text-center"
      >
        Uvoz avtomobila po vaši meri
      </Typography>

      <Typography variant="body" className="text-gray-600 text-center mb-8">
        Postopek uvoza vozila je enostaven in varen. Poskrbimo za vse - od
        izbire pravega avtomobila, preverjanja zgodovine, ureditve carinskih
        formalnosti do registracije in dostave. Naša ekipa bo za vas našla
        optimalno rešitev in zagotovila brezskrbno izkušnjo.
      </Typography>

      <Form
        method="post"
        className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold" htmlFor="name">
              Ime in priimek
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 border rounded-lg mt-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-semantic-gray-bg-weak"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="email"
            >
              E-pošta
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 border rounded-lg mt-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-semantic-gray-bg-weak"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="phone"
            >
              Telefon
            </label>
            <input
              type="text"
              name="phone"
              required
              className="w-full p-3 border rounded-lg mt-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-semantic-gray-bg-weak"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="carBrand"
            >
              Znamka avtomobila
            </label>
            <input
              type="text"
              name="carBrand"
              required
              className="w-full p-3 border rounded-lg mt-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-semantic-gray-bg-weak"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="carModel"
            >
              Model avtomobila
            </label>
            <input
              type="text"
              name="carModel"
              required
              className="w-full p-3 border rounded-lg mt-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-semantic-gray-bg-weak"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold" htmlFor="year">
              Letnik
            </label>
            <input
              type="number"
              name="year"
              required
              className="w-full p-3 border rounded-lg mt-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-semantic-gray-bg-weak"
            />
          </div>
        </div>

        <div className="mt-4">
          <label
            className="block text-gray-700 font-semibold"
            htmlFor="message"
          >
            Dodatne informacije
          </label>
          <textarea
            name="message"
            className="w-full p-3 border rounded-lg mt-2 h-32 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-semantic-gray-bg-weak"
          ></textarea>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            disabled={navigation.state === "submitting"}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 
              ${
                navigation.state === "submitting"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
          >
            {navigation.state === "submitting"
              ? "Pošiljanje..."
              : "Pošlji povpraševanje"}
          </button>
        </div>
      </Form>
      {successMessage && (
        <div className="bg-green-100 text-green-700 p-4 rounded-lg my-6 text-center max-w-3xl mx-auto">
          {successMessage}
        </div>
      )}
    </div>
  );
}
