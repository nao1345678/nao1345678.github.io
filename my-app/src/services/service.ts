'use server'
import { PrismaClient } from '@prisma/client'
import { Me } from '@prisma/client'

const prisma = new PrismaClient()

export const fetchMeData = async () => {
  try {
    //interagir avec la base de données
    const usersData = await prisma.me.findMany()

    return usersData
  } catch (error) {
    //erreurs
    console.error('Error fetching data:', error)
    throw new Error('Failed to fetch data from database')
  }
}
