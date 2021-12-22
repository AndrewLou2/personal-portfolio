import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work Experience", logoSrc: "work-history.svg" },
    { label: "Software Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Hobbies", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "TypeScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "HTML/CSS", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 70 },
    { skill: "Java", ratingPercentage: 80 },
    { skill: "SQL", ratingPercentage: 80 },
    { skill: "MySQL", ratingPercentage: 80 },
    { skill: "C++", ratingPercentage: 80 },
    { skill: "C#", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "UWO Sunstang Project Team Lead",
      duration: { fromDate: "Sep", toDate: "Present" },
      description:
        "Managed a team of 12 engineering students for the steering wheel and chase car telemetry project",
      subHeading: "Technologies Used: Java",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "Nov", toDate: "Nov" },
      description:
        "A Full-Stack Responsive Personal Portfolio website for show-casing myself.",
      subHeading: "Technologies Used: React JS, Bootsrap, Express Js, Node Js",
    },
    {
      title: "Discord Server Bot ",
      duration: { fromDate: "Jul", toDate: "Jul" },
      description:
        "A discord bot that provides 140+ user with a fun experience.",

      subHeading: "Technologies Used: Python, Discord.py, RESTful API, Heroku",
    },

  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Western Ontario"}
        subHeading={"Bachelor of Engineering in Software Engineering"}
        fromDate={"2023"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"A.B Lucas Secondary School "}
        subHeading={"Highschool diploma"}
        fromDate={"2019"}
        toDate={"2015"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Godwise International"}
          subHeading={"Software Engineer Intern"}
          fromDate={"May2021"}
          toDate={"Aug2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Designed, developed, and tested three features using Python and
            Django.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Implemented an automated cost tracker using Amazon Web Services
            API.{" "}
          </span>
          <br />
          <br />
        </div>
        <ResumeHeading
          heading={"Magna International"}
          subHeading={"CAD/CAM Engineer Intern"}
          fromDate={"Jul2019"}
          toDate={"Aug2019"}
        />
        <div className="experience-description-text">
          <span className="resume-description-text">
            - Generated engineering drawings per automotive tooling standards
            using SolidWorks and AutoCAD.
          </span>
          <br />
          <span className="resume-description-text">
            - Performed updates to existing designs using SMIRT, CIMCO,
            PowerMILL and Tebis Programming.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          {/* <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div> */}
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Soccer"
        description="Apart from being a tech enthusiast, I love to play soccer and am on the Western Intramurals team."
      />
      <ResumeHeading
        heading="Art"
        description="I have been attempting all forms of art on all sorts of mediums. From oil painting at 8 to generating web design on the computer."
      />
      <ResumeHeading
        heading="Gaming"
        description="Video games have surrounded me ever since I was little. My current favourites are Valorant, CS:GO and League of Legends (TFT included). However, these games are likely to change in the future..."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
