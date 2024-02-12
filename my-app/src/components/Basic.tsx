import React from 'react'
import Link from 'next/link'

export type IBasic = {}

const Basic = ({}: IBasic) => {
  return (
    <div className="basic">
      <div className="about-content" id="1">
        <div className="rubric-title-1">Basic Info</div>
        <br />
        <ul className="jpp">
          <li className="about-li">→ I'm Naledi El Cheikh.</li>
          <li className="about-li">→ I'm 18.</li>
          <li className="about-li">
            → I live in Charenton-Le-Pont and I'm willing to find a job within a 1 hour radius of Charenton, with
            flexible hours !
          </li>
          <li className="about-li">
            → You can find my CV{' '}
            <Link
              className="cv"
              href={
                'https://www.linkedin.com/posts/naledi-el-cheikh-89ab2229a_cv-recherche-dalternance-activity-7151219972080377857-VdHI?utm_source=share&utm_medium=member_desktop'
              }
            >
              there.
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Basic
