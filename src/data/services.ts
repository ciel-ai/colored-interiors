export interface Service {
  slug: string
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    slug: 'residential-interior-design',
    title: 'Residential Interior Design',
    description: 'End-to-end design of your home — from concept boards to the final styled reveal — tailored to how you actually live.',
    icon: 'home',
  },
  {
    slug: 'space-planning',
    title: 'Space Planning',
    description: 'Smart layouts that make every square foot work harder, with clear circulation and furniture placement drawn to scale.',
    icon: 'layout',
  },
  {
    slug: 'design-consultation',
    title: 'Design Consultation',
    description: 'A focused session with our designers to map out style direction, budget and priorities before work begins.',
    icon: 'chat',
  },
  {
    slug: 'lighting-design',
    title: 'Lighting Design',
    description: 'Layered ambient, task and accent lighting plans that shape mood and highlight architecture and art.',
    icon: 'bulb',
  },
  {
    slug: 'custom-furniture-design',
    title: 'Custom Furniture Design',
    description: 'Bespoke furniture pieces designed and fabricated to fit your space, style and storage needs precisely.',
    icon: 'sofa',
  },
  {
    slug: 'art-accessory-procurement',
    title: 'Art and Accessory Procurement',
    description: 'Curated art, decor and accessories sourced to complete the story of every room.',
    icon: 'frame',
  },
  {
    slug: 'color-consultation',
    title: 'Color Consultation',
    description: 'Whole-home colour palettes tested against light, materials and mood before a single wall is painted.',
    icon: 'palette',
  },
  {
    slug: 'renovation-remodeling',
    title: 'Renovation and Remodeling',
    description: 'Structural and cosmetic renovations managed from demolition to handover with certified contractors.',
    icon: 'hammer',
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    description: 'A single point of contact coordinating vendors, timelines and quality checks so you don’t have to.',
    icon: 'clipboard',
  },
  {
    slug: 'styling-staging',
    title: 'Styling and Staging',
    description: 'Final-day styling that dresses your space for everyday living or for a picture-perfect resale listing.',
    icon: 'sparkle',
  },
]
