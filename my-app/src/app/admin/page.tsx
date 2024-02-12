'use client'
import { fetchMeData } from '@/services/service'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'
import { Me } from '@prisma/client'
import { Project } from '@prisma/client'
import { Project_ } from '../types'

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
          <div className="title-admin">Projects management</div>
          {meData.length > 0 ? <span>Files loaded.</span> : <span>Loading...</span>}
        </div>
      </div>
    </div>
  )
}
export default Home
