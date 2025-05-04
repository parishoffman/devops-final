import React, { useState } from "react";

export default function ContactForm() {
  const [form,   setForm]   = useState({
    first_name: "",
    last_name:  "",
    email:      "",
    message:    ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending…");

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/contact`,
        {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body:    JSON.stringify(form),
        }
      );
      if (res.ok) {
        setStatus("Thank you! We'll be in touch.");
        setForm({ first_name: "", last_name: "", email: "", message: "" });
      } else {
        setStatus("Error sending message.");
      }
    } catch {
      setStatus("Error sending message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contact Me</h2>

      <input
        name="first_name"
        value={form.first_name}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        name="last_name"
        value={form.last_name}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your message"
        required
      />

      <button type="submit">Send</button>
      {status && <p>{status}</p>}
    </form>
  );
}