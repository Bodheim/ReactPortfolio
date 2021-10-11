import React from 'react';

function Footer() {
  const mystyle = {
    backgroundColor: '#BEFFC7',
    padding: '10px',
  };

  return (
    <>
      <footer
        className="
        d-flex
        justify-content-around
        align-items-center
        pt-4
        pb-4
        text-light
        text-center
        container-fluid
        navUL
        footer"
        style={{ backgroundColor: '#46b1c9' }}
      >
        <span style={mystyle}>
          <a href="https://github.com/Bodheim" clasName="github">
            Github
          </a>
        </span>
        <div style={mystyle}>
          <a className="phone">(865) 809-8085</a>
        </div>
        <span style={mystyle}>
          <a href="mailto:abby.castelow@gmail.com" className="email">
            abby.castelow@gmail.com
          </a>
        </span>
      </footer>
    </>
  );
}

export default Footer;
