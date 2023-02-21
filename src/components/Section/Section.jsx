import React from 'react';

const Section = ({ title, children }) => (
  <div>
    <main>
      <h1>{title}</h1>
      {children}
    </main>
  </div>
);
export default Section;
