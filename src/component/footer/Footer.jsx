import "./footer.scss";
import { FooterItem } from "../components";
import { footerItem } from "../db";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          {footerItem.map((item, id) => {
            return (
              <div className="footer__nav" key={item + id}>
                <FooterItem
                  title={item.title}
                  textLink1={item.textLink1}
                  link1={item.link1}
                  textLink2={item.textLink2}
                  link2={item.link2}
                  textLink3={item.textLink3}
                  link3={item.link3}
                  textLink4={item.textLink4}
                  link4={item.link4}
                  textLink5={item.textLink5}
                  link5={item.link5}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer-down">© 2022. All Rights Reserved.</div>
    </footer>
  );
}

export default Footer;
