import Contact from "../models/contactModel.js";
import twilio from "twilio";

export const submitContactForm = async (req, res) => {
  try {
    const { name, contact, location, email, message } = req.body;

    if (!name || !contact || !location || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required!" });
    }

    // ✅ Save contact data to MongoDB
    const newContact = await Contact.create({
      name,
      contact,
      location,
      email,
      message,
    });

    // 🧩 WhatsApp integration
    try {
      // Initialize Twilio client
      const client = twilio(
        process.env.TWILIO_SID,
        process.env.TWILIO_AUTH_TOKEN
      );

      // Compose WhatsApp message
      const whatsappMessage = `
📩 *New Contact Form Submission*

👤 *Name:* ${name}
📞 *Contact:* ${contact}
📍 *Location:* ${location}
✉️ *Email:* ${email}
💬 *Message:* ${message}

🕒 Received: ${new Date().toLocaleString()}
      `;

      // Send message
      await client.messages.create({
        from: process.env.TWILIO_WHATSAPP_FROM, // e.g., 'whatsapp:+14155238886'
        to: process.env.RECIPIENT_WHATSAPP_TO, // e.g., 'whatsapp:+91XXXXXXXXXX'
        body: whatsappMessage,
      });

      console.log("✅ WhatsApp message sent successfully!");
    } catch (whatsappError) {
      console.error("⚠️ Error sending WhatsApp message:", whatsappError.message);
    }

    // ✅ Respond to frontend
    res.status(201).json({
      success: true,
      data: newContact,
      message: "Form submitted successfully & WhatsApp sent!",
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error while submitting form." });
  }
};
