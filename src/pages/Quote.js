import React from 'react';
import '../styles/Global.css';

const Quote = () => (
  <>
    <div className="container">
      <h2 style={{ visibility: 'hidden', display: 'none' }}>Quote</h2>
      <blockquote className="quote flex-column">
        Mathematics is not about numbers, equations, computations,
        or algorithms: it is about understanding.
        <br />
        <cite>William Paul Thurston</cite>
      </blockquote>
    </div>
  </>
);
export default Quote;
