import React from "react";
import "./about.scss";

function About() {
  return (
    <div className="about">
      <h1 className="about__title">About Page (Sample Page)</h1>
      <h1 className="about__subTitle">This is a sample page!</h1>
      <p className="about__text about__text-p">💯👋</p>

      <p className="about__text about__text-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        imperdiet eros leo, eget consequat orci viverra nec. Suspendisse
        pellentesque sem metus, et mollis purus auctor in.
      </p>
      <p className="about__text about__text-p">
        Suspendisse congue quam eros, vel cursus ante semper id. Nam malesuada
        tempus risus, ut ullamcorper risus elementum eu. Morbi lacus quam,
        mattis sit amet ipsum sed, vestibulum consectetur tortor. Vestibulum
        interdum convallis mauris, eget dictum nisl.
      </p>
      <p className="about__text about__text-p">
        Nam tellus justo, auctor sed malesuada id, consequat nec ante. Vivamus
        tempor massa arcu, et hendrerit est pulvinar non. Nam tempus velit
        justo. Praesent pulvinar lobortis sem quis tristique.{" "}
      </p>
    </div>
  );
}

export default About;
