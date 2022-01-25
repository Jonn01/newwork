import "./about.css";
import Award from "../../img/bg2.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/10570919/pexels-photo-10570919.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          it is a long established fact that a reader will be a good listener to
          be able to develop a readable content.
        </p>
        <p className="a-desc">
          it is a long established fact that a reader will be a good listener to
          be able to develop a readable content. it is a long established fact
          that a reader will be a good listener to be able to develop a readable
          content. it is a long established fact that a reader will be a good
          listener to be able to develop a readable content. it is a long
          established fact that a reader will be a good listener to be able to
          develop a readable content. it is a long established fact that a
          reader will be a good listener to be able to develop a readable
          content.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
        </div>
      </div>
    </div>
  );
};

export default About;