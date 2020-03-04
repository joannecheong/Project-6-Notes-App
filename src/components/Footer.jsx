import React from "react";

function Footer() {
  const yearNow = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; {yearNow}</p>
      <p>Joanne Cheong</p>
    </footer>
  );
}

export default Footer;
