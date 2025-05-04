import React, { useEffect } from "react";
import ContactForm from "./components/ContactForm";

export default function App() {
  useEffect(() => {
    const timezone   = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const visited_at = new Date().toISOString();

    fetch(`${process.env.REACT_APP_API_URL}/visits`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ timezone, visited_at }),
    }).catch(console.error);
  }, []);

  return (
    <div className="app">
      <header className="header">My Portfolio</header>
      <ContactForm />
    </div>
  );
}
