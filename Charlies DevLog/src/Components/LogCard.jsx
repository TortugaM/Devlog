import React from 'react';

function LogCard({ title, children, date }) {
  return (
    <div className="log-card">
      <span className="date">{date}</span>
      <h3>Log: {title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default LogCard;
