// App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Messages from './components/Messages';

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact addMessage={addMessage} />} />
        <Route path="/messages" element={<Messages messages={messages} />} />
      </Routes>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <section className="App-header">
      <div className="content">
        <div className="text">
          <h2>Hi, my name is <span className="bold-text">Miracle</span>.</h2>
          <p>I'm a 3rd year <span className="bold-text">Computer Science MComp</span> undergraduate at the University of Leicester. From Front-End technologies to game development, if it involves technology and problem solving <span className="bold-text">I want to be a part of it.</span></p>
        </div>
        <div className="image-container">
          <img
            src={`${process.env.PUBLIC_URL}/img/Me - Copy - Copy.jpg`}
            alt="Miracle - Computer Science Student"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
}

// Ensure you have the export statement here
export default App;
