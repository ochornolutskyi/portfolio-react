import React from 'react'
import './ProjectInfoTitle.scss'

const ProjectInfoTitle = (props) => {

   return(
   <h2 className='project-info-title'>{props.infoTitle.toUpperCase()}</h2>
   )
}

export default ProjectInfoTitle;
