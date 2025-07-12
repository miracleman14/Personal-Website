// App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'; // Main CSS file

// Import Components
import Header from './components/Header';
import Home from './components/Home'; // Import the new Home component
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Messages from './components/Messages'; // Assuming this is for an admin view or similar

function App() {
  // State for messages (if needed across app, otherwise could be localized in Contact/Messages)
  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) => {
    setMessages(prevMessages => [...prevMessages, newMessage]); // Use functional update
  };

  return (
    // Using a fragment <> or a div with a more general App container class is fine
    <>
      <Header />
      {/* Main content area could have padding to prevent overlap with fixed Header/Footer if needed */}
      <main className="main-content">
        <Routes>
          {/* Use element prop correctly */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* Pass addMessage function to Contact */}
          <Route path="/contact" element={<Contact addMessage={addMessage} />} />
          {/* Pass messages array to Messages */}
          <Route path="/messages" element={<Messages messages={messages} />} />
          {/* Consider adding a 404 Not Found route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </> // Use React.Fragment shorthand
  );
}

// Home component is now in its own file, so it's removed from here.

export default App;