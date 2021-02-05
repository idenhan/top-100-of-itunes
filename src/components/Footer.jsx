import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__content container">
        <p>
          Developed by{" "}
          <a
            href="https://www.idenhan.com"
            rel="noreferrer"
            target="_blank"
            className="link"
          >
            Iden Han
          </a>
        </p>
        <p>
          Built with{" "}
          <a href="https://reactjs.org/" className="link">
            React JS
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
