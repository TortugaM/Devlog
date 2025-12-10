import React from 'react';

function LogCard({ title, children, date }) {
  return (
    <div className="log-card">
      <h3>Log Title: {title}</h3>
      <p>{children}</p>
      <span className="date">{date}</span>
    </div>
  );
}

export default LogCard;
