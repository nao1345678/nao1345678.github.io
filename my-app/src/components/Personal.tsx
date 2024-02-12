import React from 'react'
import Link from 'next/link'

export type IPersonal = {}

const Personal = ({}: IPersonal) => {
  return (
    <div className="about-desc" id="3">
      <div className="rubric-title-1">Personal background</div>
      <div className="perso-desc">
        With nine years of karate and four years of painting under my belt, I've honed qualities like patience and
        determination. These skills have become my secret weapons, enabling me to tackle problems head-on and see my
        projects through to the finish line. 🌟
        <br />
        🎨 By the way, some of my artworks are available on my Instagram!
      </div>
    </div>
  )
}

export default Personal
