'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import { fetchMeData } from '@/services/service'
import { Project_ } from '../types'
import { Me } from '../types'
import Footer from '@/components/Footer'
import Basic from '@/components/Basic'
import Button from '@/components/ButtonPage'
import Description from '@/components/Description'
import Personal from '@/components/Personal'
import Contact from '@/components/Contact'

const Home = () => {
  const [meData, setMeData] = useState<Me[]>([])
  const [projects, setProjects] = useState<Project_[]>([])

  useEffect(() => {
    fetchMeData().then((res) => {
      setMeData(res)
    })
  }, [])

  useEffect(() => {
    console.log(meData)
  }, [meData])

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
          <div className="title">About me... </div>
          <div className="small-desc">
            ✨ Enthusiastic about coding and art, I joyfully craft unique projects at ETNA. Dive into my vibrant world
            and stay tuned for more about my exciting journey! 🚀✨
          </div>
        </div>
      </div>

      <div className="summary-about">
        <div className="gay">
          <Link href="#1">00 Little basic information</Link>
          <br />
          <Link href="#2">01 Professional background</Link>
          <br />
          <Link href="#3">02 Personal background </Link>
          <br />
          <Link href="#4">03 How to contact me ? </Link>
        </div>

        <div className="hearts">
          <img src="hearts_gif.gif" alt="" />
        </div>
      </div>
      <br />
      <br />

      <div className="about-content-div">
        <div className="basic-section">
          <Basic />
          <div className="paper-pic">
            <img src="paper.png" alt="" />
          </div>
        </div>
        <div className="pro-section">
          <div className="pro-pic">
            <img src="pc.png" alt="" />
          </div>
          <Description />
        </div>
        <br />
        <br />
        <div className="perso-section">
          <Personal />
          <div className="personal-pic">
            <img src="art.png" alt="" />
          </div>
        </div>
        <br />
        <div className="contact-section">
          <div className="contact-pic">
            <img src="phone.png" alt="" />
          </div>
          <Contact />
        </div>
      </div>

      <Button />
      <br />

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
