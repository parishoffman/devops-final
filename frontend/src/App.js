import React, { useState, useEffect } from "react";
// Import CSS in the correct order - index.css first, then component-specific styles
import "./index.css";
import "./App.css";
import "./components/ContactForm.css";

// Component imports
import Header from "./components/Header";
import Services from "./components/Services";
import Work from "./components/Work";
import Work from "./components/Work";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./index.css"
import "./components/ContactForm.css"

const REACT_APP_API_URL = "http://a2323f91955df4a00bd008f86bdb0659-1012515975.us-east-1.elb.amazonaws.com/api";
// const REACT_APP_API_URL = "http://localhost:8080/api"

function App() {
  const [status, setStatus] = useState("");
  
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply dark mode class when component mounts and when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Log a visit on initial load
  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const visited_at = new Date().toISOString();

    console.log(`REACT_APP_API_URL: ${REACT_APP_API_URL}`);
    
    fetch(`${REACT_APP_API_URL}/visits`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ timezone, visited_at }),
    })
      .then(res => res.ok ? setStatus("Visit recorded") : setStatus("Visit recorded"))
      .catch(() => setStatus("Visit recorded"));
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      
      {/* Hero Section */}
      <section id="intro" className="pt-24 lg:pt-36 pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <div className="lg:w-1/2 animate-float">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
                Hello! <span className="text-blue-600 dark:text-blue-400">My name is Paris Hoffman.</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                I design and develop experiences that make people's lives simpler.
              </p>
              {status && (
                <p className="text-gray-500 dark:text-gray-400 italic mb-8">
                  {status}
                </p>
              )}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                >
                  Get in Touch
                </a>
                <a 
                  href="#work" 
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-md transition-colors"
                >
                  View Projects
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-full h-80 lg:h-96 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                  {/* Replace with your hero image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <span className="text-lg">Hero Image</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Services />
      <Work />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;