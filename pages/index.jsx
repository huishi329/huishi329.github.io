import dynamic from "next/dynamic";
import Resume from "../src/components/Resume";
import Layout from "../src/layouts/Layout";
const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const Index = () => {
  return (
    <Layout pageClassName={"home"}>
      {/* Section - Hero Started */}
      <section
        className="lui-section lui-section-hero lui-gradient-top"
        id="started-section"
      >
        <div className="container">
          {/* Hero Started */}
          <div className="lui-started v-line v-line-left">
            <div className="section hero-started">
              <div
                className="content scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="titles">
                  <div className="lui-subtitle">
                    <span>
                      {" "}
                      Hello, <b>my name is</b>
                    </span>
                  </div>
                  <h1
                    className="title splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <span>
                      <b>Huishi</b> An{" "}
                    </span>
                  </h1>
                  <div className="label lui-subtitle">
                    {" "}
                    I am a<strong>Web Developer</strong>
                  </div>
                </div>
                <div className="description">
                  <div>
                    <p>
                      From Shenzhen, China, currently living in Vancouver, Canada. I have rich experience in web development,
                      especially React.js. I would love to talk with you about anything about coding.
                    </p>
                  </div>
                  <div className="social-links">
                    <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/huishi-an-8397311b1/">
                      <img src="https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=fff&style=for-the-badge" alt="linkedin"></img>
                    </a>
                    <a target="_blank" rel="nofollow" href="https://github.com/huishi329">
                      <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff&style=for-the-badge" alt="github"></img>
                    </a>
                    <a target="_blank" rel="nofollow" href="mailto:anhuishi95@gmail.com">
                      <img src="https://img.shields.io/badge/Gmail-EA4335?logo=gmail&logoColor=fff&style=for-the-badge" alt="gmail"></img>
                    </a>
                  </div>
                </div>
                <div className="bts">
                  <a
                    target="_blank"
                    href="https://huishi.s3.us-west-2.amazonaws.com/Huishi+Resume.pdf"
                    className="btn"
                  >
                    <span>Download CV</span>
                  </a>
                  <a href="#skills-section" className="btn-lnk">
                    {" "}
                    My Skills{" "}
                  </a>
                </div>
              </div>
              <div
                className="slide scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img
                  decoding="async"
                  src="assets/images/profile2.png"
                  alt="<b>Huishi</b> An"
                />
                <span className="circle circle-1" />
                <span
                  className="circle img-1"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="circle img-2"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <span
                  className="circle img-3"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <div className="info-list">
                  <ul>
                    <li>
                      <span className="num">
                        1000<strong>+</strong>
                      </span>
                      <span className="value">
                        Hours of <strong>Experience</strong>
                      </span>
                    </li>
                    <li>
                      <span className="num">3</span>
                      <span className="value">
                        Completed <strong>Web Apps</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Web Developer </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Skills */}
      <section className="lui-section lui-gradient-bottom" id="skills-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Professional Skills </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Talent</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff&style=for-the-badge" alt="python"></img></span>
                    </h6>
                    <div className="text">
                      <div>
                        <img src="https://img.shields.io/badge/Flask-000?logo=flask&logoColor=fff&style=for-the-badge" alt="flask"></img>
                        <img src="https://img.shields.io/badge/sqlalchemy-424242?style=for-the-badge&logo=academia&logoColor=d71f00" alt="sqlalchemy"></img>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "100%" }}>
                        <span />
                      </div>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> SQL </span>
                    </h6>
                    <div className="text">
                      <div>
                        <img alt="sqlite" src="https://img.shields.io/badge/SQLite-003B57?logo=sqlite&logoColor=fff&style=for-the-badge"></img>
                        <img alt="postgresql" src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=for-the-badge"></img>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "100%" }}>
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> <img alt="javscript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge"></img></span>
                    </h6>
                    <div className="text">
                      <div>
                        <img alt="node.js" src="https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=for-the-badge"></img>
                        <img alt="express" src="https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=for-the-badge"></img>
                        <img alt="sequelize" src="https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=for-the-badge"></img>
                        {/* Node.js, Express.js, Sequelize */}
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "100%" }}>
                        <span />
                      </div>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> <img alt="html5" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=for-the-badge"></img> </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Semantic HTML, accessibility
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "100%" }}>
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> <img alt="react" src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge"></img></span>
                    </h6>
                    <div className="text">
                      <div>
                        <img alt="redux" src="https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=fff&style=for-the-badge"></img>
                        <img alt="react-router" src="https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=for-the-badge"></img>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "100%" }}>
                        <span />
                      </div>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> <img alt="css3" src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=for-the-badge"></img> </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Flexbox, grid, animation...
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "100%" }}>
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Skills </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Works */}
      <section className="lui-section lui-gradient-top" id="works-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Portfolio </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Projects</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Works */}
        <div className="v-line v-line-right">
          <div className="container">
            <PortfolioIsotope />
            <div className="lui-bgtitle">
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Resume */}
      <Resume />
    </Layout>
  );
};
export default Index;
