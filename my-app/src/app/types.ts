export type Me = {
  id: number
  firstname: string
  lastname: string
  email: string
  phone: string
  address: string
  city: string
  country: string
  birthdate: Date
  description: string
}

export type Project_ = {
  id: number
  tags: string[]
  url: any
  title: string
  description: string
  picture: string
  date_created: Date
  date_update: Date
  enabled: boolean
}
