import React from 'react';

function MessageViewer() {
  const messages = JSON.parse(localStorage.getItem('messages')) || [];

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <p><strong>Name:</strong> {message.name}</p>
            <p><strong>Email:</strong> {message.email}</p>
            <p><strong>Message:</strong> {message.message}</p>
            <p><strong>Date:</strong> {new Date(message.date).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessageViewer;
