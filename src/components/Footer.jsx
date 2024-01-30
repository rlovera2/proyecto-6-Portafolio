// import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="contenedor_footer">
        <span>
          <br />
          <center>
            <div>
              <a href="#landing">Landing</a> | <a href="#crud">Crud</a> |{" "}
              <a href="#dashboard">Dashboard</a> |{" "}
              <a href="#restaurant">Restaurant</a> |{" "}
              <a href="#ecommerce">Ecommerce</a>
              <br />
              <br />
              Para cualquier información puede ponerse en contacto con el
              adminisrador del sistema.
              <br />
              <a href="mailto:rlovera1@gmail.com" title="informacion">
                rlovera1@gmail.com
              </a>
              <br />
              <br />
            </div>
          </center>
        </span>
      </footer>
    </>
  );
};

export default Footer;
