import React from 'react'

export type IHeader = {
  logo: any
  name: string
  home: any
  about_me: any
  projects: any
}

const Header = ({ logo, name, home, about_me, projects }: IHeader) => {
  return (
    <div className="header">
      <div className="menu">
        <div className="logo">{logo}</div>
        <div className="name">{name}</div>
      </div>

      <div className="navigation">
        <ul className="ul-nav">
          <li className="li_">{home}</li>
          <li className="li_">{about_me}</li>
          <li className="li_">{projects}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
