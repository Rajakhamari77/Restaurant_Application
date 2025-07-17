import React from "react";

const Footer = () => {
  return (
    <footer className="light-elegant-footer">
      <div className="footer-wrapper">
        {/* Top Section */}
        <div className="footer-row top">
          <div className="footer-logo">💼 RajaTech Solutions</div>
          <div className="footer-contact">
            <p>📌 Bhubaneswar, Kalinga Vihar, Odisha - 751019</p>
            <p>🕒 Open Hours: 05:00 PM – 12:00 AM</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-row bottom">
          <div className="footer-author">
            <p>
              🧑‍💻 Designed & Developed by <span>Raja</span>
            </p>
          </div>
          <div className="footer-rights">
            <p>
              © 2025 <strong>RajaTech Solutions</strong> • All rights reserved ⚖️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
