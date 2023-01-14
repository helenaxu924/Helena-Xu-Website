import "./AboutContentStyles.css";
import photo from "../assets/photo.JPG";
// import Form from "./Form";

const AboutContent = () => {
  return (
    <div className="aboutContact">
      <div className="about">
        <div className="left">
          <img src={photo} className="img" alt="true" />
        </div>
        <div className="right">
          <h1>Student. Programmer. Leader. Innovator.</h1>
          <p>
            Hello there! I'm a first year CS student at the University of
            Waterloo. Working towards a career in the CS field, I started off by
            learning Python and Java in high school, primarily building simple
            console and GUI applications as well as game recreations. Now at the
            University of Waterloo, I have used languages such as Racket to
            better understand concepts such as functional programming and the
            techniques and analysis behind designing algorithms. Furthering my
            passion even more, you can always find me working on portfolio
            pieces and self-directed side-projects involving languages such as
            React, Javascript and HTML/CSS, as well as experimenting with
            different APIs, tools, and new technologies as I progress!
          </p>
          <h1>Find my contact information and links to my Github and LinkedIn in the footer below!</h1>
        </div>
      </div>

      {/* <div className="contact">
        <h1>Contact me with the following :</h1>
        <Form />
      </div> */}
    </div>
  );
};

export default AboutContent;
