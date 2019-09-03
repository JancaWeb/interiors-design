import React from 'react';

import { ChooseProject } from './ChooseProject';
import { Project } from './Project';

export const Projects  = () => {
  const [project, setProject] = React.useState(null);

  const chooseProject = React.useCallback(
    (event) => setProject(event.currentTarget.id),
    []
  );

  return (
    <>
      {project
        ? <Project project={project} setProject={setProject}/>
        : <ChooseProject chooseProject={chooseProject} />}
    </>
  )
};
