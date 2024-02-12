import React from 'react'

export type IFooter = {
  linkedin: any
  instagram: any
  github: any
  pinterest: any
  copyright: string
}

const Footer = ({ linkedin, instagram, github, pinterest, copyright }: IFooter) => {
  return (
    <div className="footer">
      <div className="social-media">
        <a href="https://www.linkedin.com/in/naledi-el-cheikh-89ab2229a" rel="noopener noreferrer">
          {linkedin}
        </a>
        <a href="https://www.instagram.com/_je_suis_thanos_/_blank" rel="noopener noreferrer">
          {instagram}
        </a>
        <a href="https://github.com/nao1345678" rel="noopener noreferrer">
          {github}
        </a>
        <a href="https://pin.it/4gvlVPQ7j" rel="noopener noreferrer" className="pinterest.svg">
          {pinterest}
        </a>
      </div>

      <div className="copyright">
        <p>{copyright}</p>
      </div>
    </div>
  )
}

export default Footer
