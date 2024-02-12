'use client'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <div className="up">
        <Header
          logo={
            <Link href={'http://localhost:3000'}>
              <img src="heart.svg" alt="Logo"></img>
            </Link>
          }
          name={'NALEDI EL CHEIKH'}
          home={<Link href={'http://localhost:3000'}>00 HOME</Link>}
          about_me={<Link href="/about_me">01 ABOUT ME</Link>}
          projects={<Link href="/projects">02 PROJECTS</Link>}
        />

        <hr className="line-nav" />
        <div className="home-txt">
          <div className="title">Welcome to </div>
          <div className="title">My Portfolio !</div>
          <div className="small-desc">
            🚀 Immerse yourself in the realm of my projects where learning is at the core of each achievement. Explore
            my school projects from ETNA, enriched with a personal touch, reflecting my learning journey in development.
            Whether you're a technology enthusiast, a potential collaborator, or simply curious, I invite you to browse
            through my creations and potentially reach out for future collaborations. 🌟
          </div>
          <Link href="/projects">
            <button className="projects-button">SEE MY PROJECTS</button>
          </Link>
          <img src="deco.png" className="deco" />
        </div>
      </div>

      <div className="content-app"></div>

      <br />
      <div className="down">
        <Footer
          linkedin={<img src="LinkedIn.svg"></img>}
          instagram={<img src="Instagram.svg"></img>}
          pinterest={<img src="Pinterest.svg"></img>}
          github={<img src="GitHub.svg"></img>}
          copyright="All rights reserved. 
        © 2024 Naledi El Cheikh"
        ></Footer>
      </div>
    </div>
  )
}
