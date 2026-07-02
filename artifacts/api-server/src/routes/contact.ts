import { Router, type IRouter } from "express";
import { SendContactMessageBody, SendContactMessageResponse } from "@workspace/api-zod";
import { sendGmailMessage } from "../lib/gmail";

const CONTACT_RECIPIENT = "martin.schd@gmail.com";

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
    await sendGmailMessage({
      to: CONTACT_RECIPIENT,
      from: CONTACT_RECIPIENT,
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
