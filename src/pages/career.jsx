import React from 'react';
import '../styles/career.css';

function Career() {
  return (
    <div className="main">
      <h3 className="head">Experience</h3>
      <div className="container-experience">
        <ul>
          <li>
            <h3 className="heading">Applications engineer</h3>
            <p>Developing springboot applications, helping clients</p>
            <span className="date">2022 Dec - Present</span>
            <span className="circle"></span>
          </li>
        </ul>
      </div>

      {/* Education section with the same classes */}
      <h3 className="head">Education</h3>
      <div className="container-education">
        <ul>
          
          <li>
            <h3 className="heading">BE Computer Science</h3>
            <p>Completed my  Bachelors Degree in Atria Institute of Technology</p>
            <span className="date">2017-2021</span>
            <span className="circle"></span>
          </li>
         
          <li>
            <h3 className="heading">PUC</h3>
            <p>Completed my  12th Grade in Sheshadripuram Composite PU College</p>
            <span className="date">2016-2017</span>
            <span className="circle"></span>
          </li>
          <li>
            <h3 className="heading">High School</h3>
            <p>Completed my  10th Grade in St.Josephs's Indian High School</p>
            <span className="date">2014-2015</span>
            <span className="circle"></span>
          </li>
        
        </ul>
      </div>
    </div>
  );
}

export default Career;
