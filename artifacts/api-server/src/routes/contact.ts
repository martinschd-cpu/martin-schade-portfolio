import { Router, type IRouter } from "express";
import { SendContactMessageBody, SendContactMessageResponse } from "@workspace/api-zod";
import { sendMail } from "../lib/mailer";

const CONTACT_RECIPIENT =
  process.env["CONTACT_RECIPIENT"] ?? "martin.schd@gmail.com";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parsed = SendContactMessageBody.safeParse(req.body);

  if (!parsed.success) {
    const data = SendContactMessageResponse.parse({
      success: false,
      error: parsed.error.issues[0]?.message ?? "Ungültige Eingabe",
    });
    res.status(400).json(data);
    return;
  }

  const { name, email, topic, message } = parsed.data;

  try {
    await sendMail({
      to: CONTACT_RECIPIENT,
      replyTo: email,
      subject: `Neue Kontaktanfrage: ${topic}`,
      text: [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Thema: ${topic}`,
        "",
        message,
      ].join("\n"),
    });

    try {
      await sendMail({
        to: email,
        replyTo: CONTACT_RECIPIENT,
        subject: "Deine Nachricht ist angekommen",
        text: [
          `Hallo ${name},`,
          "",
          "danke für deine Nachricht. Ich melde mich bald bei dir.",
          "",
          "Zur Übersicht, das hast du geschrieben:",
          `Thema: ${topic}`,
          "",
          message,
          "",
          "Viele Grüße",
          "Martin Schade",
        ].join("\n"),
      });
    } catch (confirmationError) {
      req.log.error(
        { err: confirmationError },
        "Failed to send contact form confirmation email",
      );
    }

    const data = SendContactMessageResponse.parse({ success: true });
    res.json(data);
  } catch (error) {
    req.log.error({ err: error }, "Failed to send contact form email");
    const data = SendContactMessageResponse.parse({
      success: false,
      error: "Nachricht konnte nicht gesendet werden",
    });
    res.status(502).json(data);
  }
});

export default router;
