import React, { useEffect } from "react";
import ContactForm from "./components/ContactForm";

function App() {
  useEffect(() => {
    // 1) grab IANA timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // 2) now as ISO
    const visitedAt = new Date().toISOString();

    // 3) POST to FastAPI
    fetch(`${process.env.REACT_APP_API_URL}/visits`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ timezone, visited_at: visitedAt }),
    })
      .then(res => {
        if (!res.ok) {
          console.error("Visit logging failed:", res.status, res.statusText);
        } else {
          console.log("✅ Visit recorded");
        }
      })
      .catch(err => console.error("Visit logging error:", err));
  }, []); // runs once when App mounts

  return (
    <div className="app">
      <header className="header">My Portfolio</header>
      <ContactForm />
    </div>
  );
}

export default App;