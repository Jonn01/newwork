import "./intro.css";
import bg from "../../img/bg.jpg";
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is</h2>
          <h1 className="i-name">John Olaleru</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Student</div>
              <div className="i-title-item">BSC Holder</div>
              <div className="i-title-item">MSC Aspirant</div>
              <div className="i-title-item">Nigerian</div>
            </div>
          </div>
          <div>
            <div className="i-desc">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services,
              online stores.
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={bg} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;