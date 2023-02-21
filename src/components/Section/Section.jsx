import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div>
    <main>
      <h1>{title}</h1>
      {children}
    </main>
  </div>
);
export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};
