import React from 'react';

import projectsImage1 from '../../../images/projectsImage1.jpg';
import projectsImage2 from '../../../images/projectsImage2.jpg';
import projectsImage3 from '../../../images/projectsImage3.jpg';
import projectsImage4 from '../../../images/projectsImage4.jpg';
import projectsImage5 from '../../../images/projectsImage5.jpg';
import projectsImage6 from '../../../images/projectsImage6.jpg';
import projectsImage7 from '../../../images/projectsImage7.jpg';
import projectsImage10 from '../../../images/projectsImage10.jpg';
import projectsImage11 from '../../../images/projectsImage11.jpg';
import projectsImage12 from '../../../images/projectsImage12.jpg';
import projectsImage13 from '../../../images/projectsImage13.jpg';

import './chooseProject.css';

export const ChooseProject = ({chooseProject}) => (
  <>
    <div className="blackTitleWrapper">
      <h3 className="blackTitle">Выберите проект</h3>
    </div>
    <div className="projectsImagesWrapper">
      <div 
        id={`Project-1`}
        className="projectsIndividualImageWrapper grow"
        onClick={chooseProject}
      >
        <img src={projectsImage1} alt="projectsImage1" />
      </div>
      <div 
        id={`Project-2`}
        className="projectsIndividualImageWrapper grow"
        onClick={chooseProject}
      >
        <img src={projectsImage2} alt="projectsImage2" />
      </div>
      <div 
        id={`Project-3`}
        className="projectsIndividualImageWrapper grow"
        onClick={chooseProject}
      >
        <img src={projectsImage3} alt="projectsImage3" />
      </div>
      <div 
        id={`Project-4`}
        className="projectsIndividualImageWrapper grow"
        onClick={chooseProject}
      >
        <img src={projectsImage4} alt="projectsImage4" />
      </div>
      <div 
        id={`Project-5`}
        className="projectsIndividualImageWrapper grow"
        onClick={chooseProject}
      >
        <img src={projectsImage5} alt="projectsImage5" />
      </div>
      <div 
        id={`Project-6`}
        className="projectsIndividualImageWrapper grow"
        onClick={chooseProject}
      >
        <img src={projectsImage6} alt="projectsImage6" />
      </div>
      <div 
        id={`Project-7`}
        className="projectsIndividualImageWrapper grow"
        onClick={chooseProject}
      >
        <img src={projectsImage7} alt="projectsImage7" />
      </div>
      <div 
        id={`Project-10`}
        className="projectsIndividualImageWrapper grow"
        onClick={chooseProject}
      >
        <img src={projectsImage10} alt="projectsImage10" />
      </div>
      <div 
        id={`Project-11`}
        className="projectsIndividualImageWrapper grow"
        onClick={chooseProject}
      >
        <img src={projectsImage11} alt="projectsImage11" />
      </div>
      <div 
        id={`Project-12`}
        className="projectsIndividualImageWrapper grow"
        onClick={chooseProject}
      >
        <img src={projectsImage12} alt="projectsImage12" />
      </div>
      <div 
        id={`Project-13`}
        className="projectsIndividualImageWrapper grow"
        onClick={chooseProject}
      >
        <img src={projectsImage13} alt="projectsImage13" />
      </div>
    </div>
  </>
)