import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Software Engineering",
    academy: "App Academy",
    dec: "1000+ hour immersive full-stack web development intensive coding bootcamp, with <5% acceptance rate.",
    startYear: "Aug 2022",
    endYear: "Jan 2023",
  },
  {
    id: 2,
    title: "MEd Adult Learning and Education",
    academy: "University of British Columbia",
    dec: "I learned that adults need reasons to take action. I reason with myself every day to keep motivated.",
    startYear: "Sep 2019",
    endYear: "Apr 2021",
  },
  {
    id: 3,
    title: "BA Human Resources Management",
    academy: "Guangdong University of Foreign Studies",
    dec: "I learned that a people-centered approach is the best way to get your feet into any field.",
    startYear: "Sep 2013",
    endYear: "May 2017",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Center for Accessibility - Exam Coordinator",
    company: "University of British Columbia",
    decs: ["Onboarded and managed 80 invigilators, which agilely made the post-pandemic transition from 100% online to hybrid work model in 2 months.",
      "Utilized and maintained thousands of student and exam information in the database,  which informed the center of the best practice of student service and reduced the chance of human errors."],
    startYear: "Jan 2021",
    endYear: "Aug 2022",
  },
  {
    id: 2,
    title: "Sales and Marketing Specialist",
    company: "China Southern Airlines",
    decs: ["Undertook market analyses by using Sabre database, which informed the decision of setting prices against competitors.",
      "Identified target customers and organized promotion campaigns with third party vendors to increase the exposure of products and thus boosted sales by 10%."],
    startYear: "Jul 2017",
    endYear: "Jul 2019",
  },
];

const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Education </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${educationToggle === education.id ? "opened" : ""
                      }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${educationToggle == education.id ? "active" : ""
                        }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {education.startYear} - {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${experience.id == experienceToggle ? "opened" : ""
                      }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${experienceToggle == experience.id ? " active" : ""
                        }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          {experience.decs.map(dec => (<p>- {dec}</p>))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
