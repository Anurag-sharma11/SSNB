import Contact from "../models/contactModel.js";

export const submitContactForm = async (req, res) => {
  try {
    const { name, contact, location, email, message } = req.body;

    if (!name || !contact || !location || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    const newContact = await Contact.create({ name, contact, location, email, message });
    res.status(201).json({ success: true, data: newContact, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ success: false, message: "Server error while submitting form." });
  }
};
