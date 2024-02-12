'use server'
import { PrismaClient } from '@prisma/client'
import { Me } from '@prisma/client'
import { Project } from '@prisma/client'

const prisma = new PrismaClient()

export const fetchProjects = async () => {
  try {
    //interagir avec la base de données
    const projectData = await prisma.project.findMany()

    return projectData
  } catch (error) {
    //erreurs
    console.error('Error fetching data:', error)
    throw new Error('Failed to fetch data from database')
  }
}

export const fetchProjectDataById = async (projectId: number) => {
  try {
    //interagir avec la base de données
    const projectData = await prisma.project.findUnique({
      where: {
        id: projectId
      }
    })
    return projectData
  } catch (error) {
    //erreurs
    console.error('Error fetching data:', error)
    throw new Error('Failed to fetch data from database')
  }
}
