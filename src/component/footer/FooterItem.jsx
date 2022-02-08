import "./footerItem.scss";

function FooterItem(props) {
  return (
    <ul className="footer-item">
      <li>{props.title}</li>

      <a href={props.link1}>
        <li>{props.textLink1}</li>
      </a>
      <a href={props.link2}>
        <li>{props.textLink2}</li>
      </a>
      <a href={props.link3}>
        <li>{props.textLink3}</li>
      </a>
      <a href={props.link4}>
        <li>{props.textLink4}</li>
      </a>
      <a href={props.link5}>
        <li>{props.textLink5}</li>
      </a>
    </ul>
  );
}

export default FooterItem;
