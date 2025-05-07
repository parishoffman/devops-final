import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import Work from "./components/Work";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const REACT_APP_API_URL = "http://a2323f91955df4a00bd008f86bdb0659-1012515975.us-east-1.elb.amazonaws.com/api";

function App() {
  const [status, setStatus] = useState("");
  
  // Initialize dark mode based on user preference or localStorage
  const [darkMode, setDarkMode] = useState(() => {
    // Check if there's a saved preference in localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    // Otherwise check for system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode class when component mounts and when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Log a visit on initial load - KEEPING YOUR ORIGINAL CODE
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
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        {/* Hero Section */}
        <section id="intro" className="pt-24 lg:pt-36 pb-16 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
              <div className="lg:w-1/2 animate-float">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
                  Welcome to <span className="text-blue-600 dark:text-blue-400">My Portfolio</span>
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
    </div>
  );
}

export default App;