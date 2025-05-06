import React, { useState, useEffect } from "react";
// import ContactForm from "./components/ContactForm";

const REACT_APP_API_URL = "http://a2323f91955df4a00bd008f86bdb0659-1012515975.us-east-1.elb.amazonaws.com/api"

function App() {
  const [status, setStatus] = useState("");

  // Log a visit on initial load
  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const visited_at = new Date().toISOString();

    console.log(`REACT_APP_API_URL: ${REACT_APP_API_URL}`)


    
    fetch(`${REACT_APP_API_URL}/visits`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ timezone, visited_at }),
    })
      .then(res => res.ok ? setStatus("Visit recorded") : setStatus("Visit recorded"))
      .catch(() => setStatus("Visit recorded"));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    fetch(`${REACT_APP_API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => setStatus(res.ok ? "Email sent!" : "Email failed"))
      .catch(() => setStatus("Email error"));
    e.target.reset();
  };

  return (
    <>
      <header>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="intro">
          <h1>Welcome to My Portfolio</h1>
          <p style={{ textAlign: "center" }}>
            A showcase of my work, skills, and experiences.
          </p>
          <p style={{ textAlign: "center", fontStyle: "italic", color: "#777" }}>
            {status}
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            {/* Replace with dynamic data or add more cards */}
            <div className="project-card">
              <h3>Project One</h3>
              <p>Brief description goes here.</p>
              <a href="#">View Details →</a>
            </div>
            <div className="project-card">
              <h3>Project Two</h3>
              <p>Another description.</p>
              <a href="#">View Details →</a>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <input name="first_name" placeholder="First Name" required />
            <input name="last_name" placeholder="Last Name" required />
            <input name="email" type="email" placeholder="Email" required />
            <textarea name="message" rows="4" placeholder="Your message..." required />
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer>
        &copy; {new Date().getFullYear()} Paris. Built with ♥ in React.
      </footer>
    </>
  );
}

export default App;
