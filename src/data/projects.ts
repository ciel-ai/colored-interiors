import { pexelsImage } from './imageSource'

export interface Project {
  slug: string
  title: string
  location: string
  type: string
  area: string
  photoIds: number[]
  description: string
  images: string[]
}

const raw: Omit<Project, 'images'>[] = [
  {
    slug: 'whitefield-villa',
    title: 'The Whitefield Villa',
    location: 'Whitefield, Bengaluru',
    type: '4BHK Villa',
    area: '3,800 sq.ft.',
    photoIds: [28729467, 8583697, 6035369, 8135502, 15062155, 22702955],
    description: 'A warm, contemporary villa interior built around natural stone, brass accents and a soft neutral palette.',
  },
  {
    slug: 'indiranagar-apartment',
    title: 'Indiranagar Compact Apartment',
    location: 'Indiranagar, Bengaluru',
    type: '2BHK Apartment',
    area: '1,150 sq.ft.',
    photoIds: [3316922, 6180674, 7147298, 6492402, 1501272, 6588580],
    description: 'Space-efficient modular solutions and multi-purpose furniture for a young couple’s first home.',
  },
  {
    slug: 'adyar-penthouse',
    title: 'Adyar Skyline Penthouse',
    location: 'Adyar, Chennai',
    type: 'Penthouse',
    area: '4,200 sq.ft.',
    photoIds: [34672503, 6207825, 11160491, 28991200, 4067763, 3968056],
    description: 'A statement penthouse with a moody dining lounge, custom joinery and a dedicated home bar.',
  },
  {
    slug: 'gachibowli-duplex',
    title: 'Gachibowli Family Duplex',
    location: 'Gachibowli, Hyderabad',
    type: 'Duplex',
    area: '2,900 sq.ft.',
    photoIds: [10168692, 15625991, 6782465, 3932930, 8251914, 2001944],
    description: 'A duplex designed for three generations under one roof, balancing traditional pooja spaces with modern living.',
  },
  {
    slug: 'baner-row-house',
    title: 'Baner Row House',
    location: 'Baner, Pune',
    type: 'Row House',
    area: '2,300 sq.ft.',
    photoIds: [35505452, 6758773, 3016430, 7745994, 932095, 6636320],
    description: 'Warm wood tones, an open-plan kitchen and a reading nook tucked under the staircase.',
  },
  {
    slug: 'jvpd-sea-view',
    title: 'JVPD Sea View Residence',
    location: 'Juhu, Mumbai',
    type: '3BHK Apartment',
    area: '2,050 sq.ft.',
    photoIds: [6180674, 18738880, 34153693, 4740580, 12127444, 3623785],
    description: 'Light-filled interiors designed to frame the sea view, with low-profile furniture and sheer drapery.',
  },
]

export const projects: Project[] = raw.map((p) => ({
  ...p,
  images: p.photoIds.map((id) => pexelsImage(id, 1000, 750)),
}))

export const totalProjectPhotos = projects.reduce((sum, p) => sum + p.images.length, 0)
