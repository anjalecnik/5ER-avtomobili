import { Resend } from "resend";
import "dotenv/config";

const resend = new Resend(process.env.RESEND_API_KEY);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sendEmail(formData: any) {
  const formatDateTime = () => {
    const now = new Date();
    return now.toLocaleString("sl-SI", {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  try {
    const response = await resend.emails.send({
      from: "5ER_avtomobili.si <onboarding@resend.dev>",
      to: ["anjas.lecnik@gmail.com"],
      subject: `Povpraševanje za uvoz avtomobila - ${formatDateTime()}`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #F9FAFB;">
        <h2 style="color: #333; text-align: center;">🛠️ Povpraševanje za uvoz avtomobila</h2>
        <p style="font-size: 16px; color: #555; text-align: center;">Prejeli ste novo povpraševanje.</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
        
        <table style="width: 100%; font-size: 16px; color: #333;">
          <tr>
            <td style="padding: 8px; font-weight: bold;">👤 Ime:</td>
            <td style="padding: 8px;">${formData.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">📧 Email:</td>
            <td style="padding: 8px;">${formData.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">📞 Telefon:</td>
            <td style="padding: 8px;">${formData.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">🚗 Znamka:</td>
            <td style="padding: 8px;">${formData.carBrand}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">🚘 Model:</td>
            <td style="padding: 8px;">${formData.carModel}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">📅 Letnik:</td>
            <td style="padding: 8px;">${formData.year}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">📝 Dodatne informacije:</td>
            <td style="padding: 8px;">${formData.message || "/"}</td>
          </tr>
        </table>
  
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
        <p style="font-size: 14px; color: #888; text-align: center;">📩 Ta e-pošta je bila avtomatsko poslana iz vaše spletne strani.</p>
      </div>
    `,
    });

    return { success: true, response };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}
