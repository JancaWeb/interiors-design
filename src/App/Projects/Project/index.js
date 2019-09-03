import React from "react";

import projectsImage13 from "../../../images/projectsImage13.jpg";
import projectsImage8 from "../../../images/projectsImage8.jpg";
import projectsImage9 from "../../../images/projectsImage9.jpg";
import chosenImage1 from "../../../images/chosenImage1.jpg";
import arrowBack from "../../../images/arrowBack.svg";

import "./project.css";

export const Project = ({ project, setProject }) => (
  <>
    <div className="blackTitleWrapper">
      <h3 className="blackTitle">{project}</h3>
    </div>
    <div className="chosenProjectImagesWrapper">
      <img className="arrowBack" src={arrowBack} alt="arrowBack" onClick={() => setProject(null)}/>
      <div className="chosenProjectWrapper">
        <div className="chosenProjectTwoImagesWrapper">
          <div className="chosenProjectIndividualWrapper grow">
            <img
              src={projectsImage13}
              alt="projectsImage13"
              className="choosenProjectimage"
            />
          </div>
          <div className="chosenProjectIndividualWrapper grow">
            <img
              src={projectsImage8}
              alt="projectsImage8"
              className="choosenProjectimage"
            />
          </div>
        </div>
        <div className="projectDescriptionWrapper">
          <h3 className="projectDescriptionTitle">Описание проекта</h3>
          <p>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vivamus eu eleifend lacus, ultrices scelerisque nisi. 
          Curabitur hendrerit, augue nec egestas vehicula, nulla libero ornare ante, eget efficitur massa odio sed tellus. 
          Donec facilisis a tellus quis dapibus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vivamus eu eleifend lacus, ultrices scelerisque nisi. 
          Curabitur hendrerit, augue nec egestas vehicula, nulla libero ornare ante, eget efficitur massa odio sed tellus. 
          Donec facilisis a tellus quis dapibus.`}
          </p>
        </div>
      </div>
      <div className="chosenProjectIndividualWrapper grow">
        <img
          src={projectsImage9}
          alt="projectsImage9"
          className="choosenProjectimage"
        />
      </div>
      <div className="chosenProjectIndividualWrapper grow">
        <img
          src={chosenImage1}
          alt="chosenImage1"
          className="choosenProjectimage"
        />
      </div>
    </div>
  </>
);
