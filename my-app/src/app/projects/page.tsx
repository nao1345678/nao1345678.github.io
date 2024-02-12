'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Project from '@/components/Project'
import { Project_ } from '../types'
import { useEffect } from 'react'
import { fetchProjects } from '@/services/service_project'
import { fetchProjectDataById } from '@/services/service_project'
import Button from '@/components/ButtonPage'

const Home = () => {
  const [Projects, setProjects] = useState<Project_[]>([])

  useEffect(() => {
    fetchProjects().then((res) => {
      setProjects(res)
    })
  }, [])

  useEffect(() => {
    console.log(Projects)
  }, [setProjects])

  // Beggining of HTML

  return (
    <div>
      <div className="up" id="#">
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
          <div className="title">Here are my projects... </div>
          <div className="small-desc">
            ⭐ My captivating projects have originated within the realm of school assignments provided by ETNA, where I
            dive into the stimulating challenges of programming. I infuse a personal touch into each project,
            incorporating my creativity. Explore them below! ✨
          </div>
        </div>
      </div>

      <div className="content">
        <div className="summary">
          <div>
            <Link href="#empaktor">Empaktor</Link>
            <br />
            <Link href="#hyrule-castle">Hyrule Castle</Link>
            <br />
            <Link href="#to-do-list">To-Do List</Link>
            <br />
            <Link href="#proto-rh">Proto RH</Link>
            <br />
            <Link href="#world-view">World View</Link>
            <br />
            <Link href="#portfolio">My Portfolio</Link>
            <br />
          </div>

          <div className="heart_gif">
            <img src="heart_gif.gif" alt="" />
          </div>
        </div>

        <Button />

        {Projects.map((index, number) => (
          <div>
            <br />
            <br />
            <div className="pixel-fail">
              <Project
                title={Projects[number].title}
                tags={Projects[number].tags.map((element, index) => (
                  <li className="html-tags" key={index}>
                    {element}
                  </li>
                ))}
                description={Projects[number].description}
                picture={Projects[number].picture}
                url={
                  <Link href={Projects[number].url}>
                    <button className="repo-button">SEE THE REPOSITORY</button>
                  </Link>
                }
              ></Project>
            </div>
            <br />
            <br />
          </div>
        ))}

        <br />
        <br />
        <br />
      </div>

      <Footer
        linkedin={<img src="LinkedIn.svg"></img>}
        instagram={<img src="Instagram.svg"></img>}
        pinterest={<img src="Pinterest.svg"></img>}
        github={<img src="GitHub.svg"></img>}
        copyright="All rights reserved. 
      © 2024 Naledi El Cheikh
    "
      ></Footer>
    </div>
  )
}

export default Home
