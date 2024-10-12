import React from 'react';

function Messages({ messages }) {
  return (
    <div className="messages-container">
      <h2>Messages</h2>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              <strong>{message.name}</strong> - {message.date}<br />
              {message.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Messages;
