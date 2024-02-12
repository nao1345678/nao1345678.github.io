import React from 'react'
import Link from 'next/link'

export type IContact = {}

const Contact = ({}: IContact) => {
  return (
    <div className="contact" id="4">
      <div className="rubric-title-1">How to contact me ?</div>
      <br />
      <div className="contact-desc">
        <ul>
          <li className="about-li">→ You can call me on the : 07 68 36 84 62</li>
          <li className="about-li">→ You can email me at : elchei_n@etna-alternance.net </li>
        </ul>
        <br />
      </div>
    </div>
  )
}

export default Contact
