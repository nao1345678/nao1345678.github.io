import React from 'react'
import Link from 'next/link'

export type IProject = {
  title: any
  tags: any
  description: any
  picture: any
  url: any
}

const Project = ({ title, tags, description, picture, url }: IProject) => {
  return (
    <div className="Project">
      <div className="text-project">
        {' '}
        <h2 className="project-title">{title}</h2>
        <p className="tags">{tags}</p>
        <p className="project-description">{description}</p>
        <div className="repo">{url}</div>
      </div>

      <div className="container">
        <img className="project-picture" src={picture} alt={title} />
      </div>
    </div>
  )
}

export default Project
