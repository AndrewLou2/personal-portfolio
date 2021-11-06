import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/andrew-lou/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.facebook.com/loandrew10">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/louandrew01/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/AndrewLou2">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi, I'm <span className="highlighted-text">Andrew.</span>
            </span>
            <h1 className="profile-role-tagline">
              Currently a software engineering student.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
