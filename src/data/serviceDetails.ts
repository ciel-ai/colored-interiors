export interface ServicePoint {
  title: string
  description: string
}

export interface ServiceDetail {
  slug: string
  intro: string
  benefits: ServicePoint[]
  included: ServicePoint[]
  process: ServicePoint[]
  heroImageIds: number[]
  galleryImageIds: number[]
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'residential-interior-design',
    intro:
      'Our residential interior design service takes your home from first sketch to final styling as one coordinated project. Whether it is a single apartment or a full villa, we design around how you actually live — not just how a room photographs — so the result holds up to daily use, not just launch day.',
    benefits: [
      { title: 'One Design Language', description: 'Every room is designed against a single palette and material story, so the home feels like one project, not ten disconnected rooms.' },
      { title: 'Lives-In Layouts', description: 'Furniture and circulation planned around your actual routines, not just what looks good in a render.' },
      { title: 'Single Point of Contact', description: 'One designer and one project manager across the entire home, from concept to handover.' },
      { title: 'Budget Clarity', description: 'A room-by-room budget breakdown before work starts, so there are no surprises mid-project.' },
      { title: 'Long-Term Value', description: 'Material and furniture choices selected for durability, not just how they look in the first six months.' },
    ],
    included: [
      { title: 'Home Walkthrough', description: 'A full walkthrough of every room to understand your lifestyle, storage needs and priorities.' },
      { title: 'Concept Boards', description: 'Mood boards and material palettes for every room, reviewed and refined with you.' },
      { title: '3D Visualisation', description: 'Photorealistic 3D renders of each space before any material is ordered.' },
      { title: 'Custom Furniture Design', description: 'Bespoke furniture drawings for wardrobes, TV units, beds and storage, sized to your rooms.' },
      { title: 'Vendor Coordination', description: 'Carpenters, electricians, painters and civil contractors managed under one schedule.' },
      { title: 'Styling Day', description: 'Final art, accessories and soft furnishings styled in place before handover.' },
    ],
    process: [
      { title: 'Discovery Consultation', description: 'We walk through your home and discuss how your family lives, your must-haves and your budget.' },
      { title: 'Concept & Layout', description: 'We propose a floor plan, material palette and mood board for every room.' },
      { title: '3D Design Sign-off', description: 'You review photorealistic renders and request changes before anything is fabricated.' },
      { title: 'Procurement & Production', description: 'Materials are ordered and custom furniture goes into production against the approved design.' },
      { title: 'Site Execution', description: 'Our project manager coordinates every vendor on-site, with weekly updates to you.' },
      { title: 'Styling & Handover', description: 'We style the finished home and walk you through every fitting before handing over the keys.' },
    ],
    heroImageIds: [28729467, 8135502, 15062155],
    galleryImageIds: [20390760, 12285892, 10168692, 6180674, 34672503, 6207825, 7745994, 7147298, 3623785, 22702955],
  },
  {
    slug: 'space-planning',
    intro:
      'Good space planning is the difference between a home that feels larger than its floor plan and one that feels cramped despite the square footage. We map circulation, sightlines and furniture placement to scale before a single piece is ordered, so every room works harder for you.',
    benefits: [
      { title: 'More Usable Space', description: 'Smarter layouts free up floor area that was previously lost to awkward furniture placement.' },
      { title: 'Better Flow', description: 'Circulation paths planned so rooms never feel like an obstacle course.' },
      { title: 'Right-Sized Furniture', description: 'Furniture selected and drawn to scale for your actual room dimensions, not showroom guesswork.' },
      { title: 'Fewer Costly Mistakes', description: 'Layout issues are caught on paper, not after furniture has already been delivered.' },
      { title: 'Future-Proofed Rooms', description: 'Layouts that can flex as your needs change — a nursery today, a study tomorrow.' },
    ],
    included: [
      { title: 'Site Measurement', description: 'Precise measurement of every room, including doors, windows and services.' },
      { title: 'Zoning Plan', description: 'A functional zoning plan for each room — seating, storage, work and circulation areas.' },
      { title: 'Scaled Furniture Layout', description: 'To-scale furniture layouts so you know exactly what fits before you buy anything.' },
      { title: 'Traffic Flow Analysis', description: 'Circulation paths reviewed to avoid bottlenecks and awkward pinch points.' },
      { title: 'Storage Planning', description: 'Storage worked into the layout itself, not added as an afterthought.' },
      { title: 'Alternate Layout Options', description: 'Two to three layout options for key rooms so you can compare trade-offs.' },
    ],
    process: [
      { title: 'Site Visit & Measurement', description: 'We measure every room precisely, noting doors, windows, switches and services.' },
      { title: 'Needs Assessment', description: 'We discuss how each room needs to function day-to-day.' },
      { title: 'Layout Options', description: 'We draw multiple scaled layout options for you to compare.' },
      { title: 'Furniture Selection', description: 'We recommend furniture sized correctly for the chosen layout.' },
      { title: 'Final Layout Sign-off', description: 'You approve the final floor plan before any furniture is ordered.' },
      { title: 'Installation Support', description: 'We guide placement on-site to match the approved plan exactly.' },
    ],
    heroImageIds: [10168692, 6180674, 3316922],
    galleryImageIds: [28991200, 6035369, 6636320, 11701115, 6312357, 6782353, 1125135, 6969824, 12285892, 8583697],
  },
  {
    slug: 'design-consultation',
    intro:
      'Our design consultation is a focused session to map out style direction, budget and priorities before any work begins — ideal if you want expert clarity on a room or your whole home before committing to a full project.',
    benefits: [
      { title: 'Professional Expertise', description: 'Direct access to designers who can turn a vague idea into a workable design direction.' },
      { title: 'Personalised Recommendations', description: 'Suggestions built around your style, household and budget, not generic trends.' },
      { title: 'Efficient Planning', description: 'A clear plan for what to prioritise first, so your budget goes where it matters most.' },
      { title: 'Resource Access', description: 'Recommendations for trusted materials, furnishings and contractors from our vendor network.' },
      { title: 'Enhanced Aesthetics & Function', description: 'Advice that improves both how a space looks and how it actually works for you.' },
    ],
    included: [
      { title: 'Initial Consultation', description: 'A comprehensive discussion to understand your goals, preferences and challenges.' },
      { title: 'Space Assessment', description: 'A detailed evaluation of your current space, including measurements and existing conditions.' },
      { title: 'Design Ideas & Inspiration', description: 'Design concepts, mood boards and inspiration tailored to your style.' },
      { title: 'Colour & Material Selection', description: 'Guidance on choosing colours, materials and finishes for your space.' },
      { title: 'Furniture & Layout Recommendations', description: 'Advice on furniture selection and layout to maximise space and flow.' },
      { title: 'Lighting & Accessory Suggestions', description: 'Recommendations for lighting and decorative accessories to complete the room.' },
      { title: 'Budget Planning', description: 'Help building a realistic budget and timeline for your project.' },
    ],
    process: [
      { title: 'Initial Consultation', description: 'We start with a detailed discussion of your vision, style preferences and any specific challenges.' },
      { title: 'Space Assessment', description: 'Our designers evaluate your space, taking measurements and noting existing features.' },
      { title: 'Design Concept Development', description: 'We develop initial design concepts based on our discussion and present them for feedback.' },
      { title: 'Client Review & Feedback', description: 'We review proposed concepts with you and adjust based on your feedback.' },
      { title: 'Final Recommendations', description: 'We provide final design recommendations — colour schemes, layouts and material selections.' },
      { title: 'Implementation Guidance', description: 'We share resources and contacts to help you implement the design, including trusted contractors.' },
    ],
    heroImageIds: [22702955, 12127444, 3968056],
    galleryImageIds: [5774927, 932095, 2306282, 11160491, 6758773, 534172, 10168692, 6180674, 20390760, 28729467],
  },
  {
    slug: 'lighting-design',
    intro:
      'Lighting is the fastest way to change how a home feels morning to night. We layer ambient, task and accent lighting for every room so your space looks considered at 9am and inviting at 9pm, without a single harsh overhead bulb doing all the work.',
    benefits: [
      { title: 'Mood on Demand', description: 'Layered circuits let you shift a room from bright and functional to warm and relaxed.' },
      { title: 'Architecture Highlighted', description: 'Accent lighting draws attention to art, textures and ceiling details that flat lighting hides.' },
      { title: 'Energy-Conscious', description: 'LED-first specifications that reduce running costs without compromising warmth.' },
      { title: 'Task-Appropriate Light', description: 'Reading corners, kitchen counters and study desks get the light level they actually need.' },
      { title: 'No Afterthought Wiring', description: 'Lighting planned alongside the layout, not retrofitted once the false ceiling is done.' },
    ],
    included: [
      { title: 'Lighting Audit', description: 'A review of natural light, existing fixtures and problem areas in every room.' },
      { title: 'Layered Lighting Plan', description: 'Ambient, task and accent lighting mapped for each space.' },
      { title: 'Fixture Selection', description: 'Fixtures chosen to match your material palette and ceiling design.' },
      { title: 'Switching & Circuit Plan', description: 'Practical switch layouts so controlling different lighting zones is intuitive.' },
      { title: 'Smart Lighting Options', description: 'Optional app or voice-controlled circuits for key rooms.' },
      { title: 'On-Site Fixture Placement', description: 'Final positioning checked on-site before electrical work is closed up.' },
    ],
    process: [
      { title: 'Lighting Audit', description: 'We assess natural light and existing fixtures across your home.' },
      { title: 'Concept Development', description: 'We propose a layered lighting scheme matched to each room\'s function.' },
      { title: 'Fixture Selection', description: 'We shortlist fixtures that fit your palette, ceiling design and budget.' },
      { title: 'Electrical Coordination', description: 'We coordinate wiring and switch points with your electrician before ceiling work closes up.' },
      { title: 'Installation Supervision', description: 'We supervise fixture installation to match the approved plan.' },
      { title: 'Final Adjustment', description: 'We fine-tune brightness, angles and colour temperature on-site after installation.' },
    ],
    heroImageIds: [6035369, 28991200, 6636320],
    galleryImageIds: [8135502, 34672503, 6207825, 19836795, 8135527, 5824522, 7745994, 18738880, 31737843, 6312360],
  },
  {
    slug: 'custom-furniture-design',
    intro:
      'Off-the-shelf furniture rarely fits an Indian home\'s odd corners, tight balconies or specific storage needs. We design and fabricate furniture to fit your space precisely — wardrobes that use every inch to the ceiling, TV units built around your actual electronics, beds sized for the room they live in.',
    benefits: [
      { title: 'Exact Fit', description: 'Furniture measured and built for your room, not adjusted to fit a standard size.' },
      { title: 'Maximised Storage', description: 'Every wardrobe and cabinet designed to use the full height and depth available.' },
      { title: 'Consistent Material Story', description: 'Furniture finishes matched to your flooring, doors and overall palette.' },
      { title: 'Built to Last', description: 'Solid construction and hardware chosen for daily use, not showroom display.' },
      { title: 'Fully Personalised', description: 'Configurations built around how you actually store and use your things.' },
    ],
    included: [
      { title: 'Requirement Mapping', description: 'A review of what needs to be stored or displayed in each piece of furniture.' },
      { title: 'Scaled Furniture Drawings', description: 'Detailed drawings and 3D views before fabrication begins.' },
      { title: 'Material & Finish Selection', description: 'Laminate, veneer and hardware options selected to match your interiors.' },
      { title: 'Internal Layout Design', description: 'Shelves, drawers and hanging space configured to your actual belongings.' },
      { title: 'Factory Fabrication', description: 'Furniture manufactured under quality checks before delivery.' },
      { title: 'On-Site Installation', description: 'Professional installation and final adjustment in your home.' },
    ],
    process: [
      { title: 'Requirement Discussion', description: 'We understand what each piece of furniture needs to hold and how it will be used.' },
      { title: 'Design & Drawings', description: 'We produce scaled drawings and 3D views for your approval.' },
      { title: 'Material Selection', description: 'You choose finishes and hardware from curated options that match your interiors.' },
      { title: 'Fabrication', description: 'Approved designs go into production with quality checks at each stage.' },
      { title: 'Delivery & Installation', description: 'Furniture is delivered and installed by our team, not a third-party courier.' },
      { title: 'Final Walkthrough', description: 'We check every drawer, shutter and hinge with you before signing off.' },
    ],
    heroImageIds: [6312079, 6782348, 7005019],
    galleryImageIds: [6585745, 6585750, 3958953, 1682699, 6670657, 6782465, 1501272, 15404863, 7598137, 1034584],
  },
  {
    slug: 'art-accessory-procurement',
    intro:
      'The last ten percent of a design — the art, the cushions, the vases on the shelf — is often what makes a home feel finished. We source and curate art and accessories that complete the story of every room, rather than leaving it to whatever is left over after furniture and fittings.',
    benefits: [
      { title: 'Considered, Not Cluttered', description: 'Every piece chosen to add to the room\'s story, not just fill empty surfaces.' },
      { title: 'Access to Curated Sources', description: 'Art and decor sourced from vendors and artisans not typically available to individual buyers.' },
      { title: 'Scale-Appropriate Pieces', description: 'Art and objects sized correctly for your walls and furniture, avoiding the "too small" look.' },
      { title: 'Cohesive Styling', description: 'Accessories chosen to tie your palette and material story together across rooms.' },
      { title: 'Time Saved', description: 'No more months of browsing — we shortlist options that already fit your home.' },
    ],
    included: [
      { title: 'Style Profiling', description: 'Understanding your taste in art, colour and decorative objects.' },
      { title: 'Art Curation', description: 'A shortlist of art pieces scaled and toned for each wall.' },
      { title: 'Accessory Sourcing', description: 'Cushions, throws, vases and decorative objects selected to complement your interiors.' },
      { title: 'Layout & Placement Plan', description: 'A plan for where each piece goes, including shelf and gallery-wall arrangements.' },
      { title: 'Procurement Coordination', description: 'Ordering, tracking and delivery of every selected piece.' },
      { title: 'Final Styling Visit', description: 'A dedicated styling session to place everything in your home.' },
    ],
    process: [
      { title: 'Style Discussion', description: 'We understand your taste in art, colour and materials.' },
      { title: 'Curated Shortlist', description: 'We present art and accessory options scaled to your rooms.' },
      { title: 'Selection & Approval', description: 'You choose your favourites from the curated shortlist.' },
      { title: 'Procurement', description: 'We order and track every piece through to delivery.' },
      { title: 'Placement Planning', description: 'We plan exact placement for art, shelving and surfaces.' },
      { title: 'Styling Day', description: 'Our team styles every piece in place for the final reveal.' },
    ],
    heroImageIds: [12285892, 8583697, 6969824],
    galleryImageIds: [6312360, 11701115, 6312357, 6782353, 1125135, 20390760, 10168692, 6180674, 28729467, 28991200],
  },
  {
    slug: 'color-consultation',
    intro:
      'Colour decided from a small paint chip almost never looks the same on a full wall under your home\'s actual light. We test whole-home palettes against your natural light, materials and mood before a single wall is painted, so the colour you approve is the colour you get.',
    benefits: [
      { title: 'No Repainting Regret', description: 'Palettes tested against your actual lighting, not just a paint store swatch.' },
      { title: 'Whole-Home Cohesion', description: 'Colours planned to flow logically from room to room, not chosen in isolation.' },
      { title: 'Mood-Matched Palettes', description: 'Colour choices matched to how each room is used — calm bedrooms, energising kitchens.' },
      { title: 'Material Harmony', description: 'Paint colours checked against your flooring, furniture and fixtures before approval.' },
      { title: 'Confidence to Commit', description: 'See the palette applied to your actual room renders before committing to paint.' },
    ],
    included: [
      { title: 'Light Assessment', description: 'A review of natural and artificial light in every room at different times of day.' },
      { title: 'Palette Development', description: 'A whole-home colour palette developed around your style and existing materials.' },
      { title: 'Sample Testing', description: 'Large sample swatches tested on your actual walls before final approval.' },
      { title: 'Room-by-Room Application', description: 'Specific colour and finish recommendations for walls, ceilings and trims.' },
      { title: 'Material Cross-Check', description: 'Colours checked against flooring, furniture and fixtures for harmony.' },
      { title: 'Painter Coordination', description: 'Specifications shared directly with your painting contractor to avoid mix-ups.' },
    ],
    process: [
      { title: 'Light & Mood Assessment', description: 'We study your rooms\' natural light and how you want each space to feel.' },
      { title: 'Palette Proposal', description: 'We propose a whole-home colour palette for your review.' },
      { title: 'On-Wall Sample Testing', description: 'We test large swatches on your actual walls before anything is finalised.' },
      { title: 'Final Selection', description: 'You approve the final colours and finishes for every room.' },
      { title: 'Painter Handoff', description: 'We share exact specifications with your painting contractor.' },
      { title: 'Quality Check', description: 'We review the finished paintwork against the approved palette.' },
    ],
    heroImageIds: [19836795, 6636262, 8135527],
    galleryImageIds: [7045846, 6487951, 5824522, 1501272, 15404863, 1034584, 7598137, 4740580, 8251914, 6207825],
  },
  {
    slug: 'renovation-remodeling',
    intro:
      'Structural renovations bring surprises — old wiring, uneven floors, plumbing that does not match the drawings. We manage renovation and remodelling from demolition to handover with certified contractors, so those surprises get handled calmly instead of derailing your timeline.',
    benefits: [
      { title: 'Certified Contractors', description: 'Structural and civil work handled by vetted, certified contractors, not informal labour.' },
      { title: 'Honest Timelines', description: 'Realistic schedules that account for the unpredictability structural work brings.' },
      { title: 'Fewer Surprises', description: 'A thorough site survey upfront catches most issues before they become delays.' },
      { title: 'Single Accountability', description: 'One team accountable for civil, electrical, plumbing and finishing work together.' },
      { title: 'Design Continuity', description: 'The renovated space designed to flow with the rest of your home, not patched in isolation.' },
    ],
    included: [
      { title: 'Structural Site Survey', description: 'An inspection of walls, plumbing, wiring and load-bearing elements before work begins.' },
      { title: 'Demolition Planning', description: 'A safe, sequenced demolition plan that protects the rest of your home.' },
      { title: 'Civil & MEP Coordination', description: 'Masonry, electrical and plumbing work coordinated under one schedule.' },
      { title: 'Design Integration', description: 'The renovated space designed to match your home\'s existing material palette.' },
      { title: 'Quality Checkpoints', description: 'Scheduled inspections at each construction stage before moving to the next.' },
      { title: 'Snag List & Handover', description: 'A final walkthrough addressing every finishing detail before handover.' },
    ],
    process: [
      { title: 'Site Survey', description: 'We inspect the existing structure, wiring and plumbing before any planning begins.' },
      { title: 'Renovation Design', description: 'We design the renovated space to integrate with your home\'s existing style.' },
      { title: 'Permits & Planning', description: 'We handle any required approvals and sequence the work to minimise disruption.' },
      { title: 'Demolition & Civil Work', description: 'Certified contractors carry out demolition and structural work under supervision.' },
      { title: 'Finishing & Fit-Out', description: 'Flooring, painting and fixtures are installed once civil work is complete.' },
      { title: 'Final Inspection & Handover', description: 'We walk the site with you, resolving any snags before handover.' },
    ],
    heroImageIds: [35505452, 4221389, 2001944],
    galleryImageIds: [7147298, 3623785, 3016430, 6492402, 11701162, 7533765, 10827395, 6032225, 22702955, 12127444],
  },
  {
    slug: 'project-management',
    intro:
      'A design is only as good as its execution. Our project management service gives you a single point of contact coordinating vendors, timelines and quality checks — so you get weekly clarity on progress instead of chasing five different contractors yourself.',
    benefits: [
      { title: 'One Point of Contact', description: 'A single project manager accountable for every vendor and every deadline.' },
      { title: 'Weekly Visibility', description: 'Regular updates so you always know exactly where the project stands.' },
      { title: 'Quality Enforcement', description: 'Scheduled quality checks at each stage, not just a final inspection at handover.' },
      { title: 'Vendor Accountability', description: 'Contractors managed against agreed timelines, with issues escalated before they compound.' },
      { title: 'Reduced Stress', description: 'You focus on decisions, not day-to-day site coordination.' },
    ],
    included: [
      { title: 'Master Schedule', description: 'A single project timeline covering every vendor and milestone.' },
      { title: 'Vendor Coordination', description: 'Carpenters, electricians, painters and civil contractors scheduled and supervised.' },
      { title: 'Weekly Progress Reports', description: 'Regular updates with photos and status against the schedule.' },
      { title: 'Quality Checkpoints', description: 'Scheduled site inspections at each construction and installation stage.' },
      { title: 'Budget Tracking', description: 'Ongoing tracking of spend against the approved budget.' },
      { title: 'Snag Resolution', description: 'A final punch list resolved before handover, not left for you to discover later.' },
    ],
    process: [
      { title: 'Project Kickoff', description: 'We align on scope, budget and timeline with all stakeholders before work starts.' },
      { title: 'Vendor Scheduling', description: 'We schedule every contractor against a single master timeline.' },
      { title: 'Weekly Site Reviews', description: 'We inspect progress on-site every week and report back to you.' },
      { title: 'Quality Checkpoints', description: 'We check work at each stage against the approved design and specifications.' },
      { title: 'Issue Resolution', description: 'We resolve vendor or timeline issues directly, without needing your daily involvement.' },
      { title: 'Handover', description: 'We conduct a final walkthrough and resolve every snag before handing over.' },
    ],
    heroImageIds: [7147298, 3623785, 3016430],
    galleryImageIds: [15062155, 4221389, 2001944, 6492402, 11701162, 7533765, 10827395, 6032225, 35505452, 20390760],
  },
  {
    slug: 'styling-staging',
    intro:
      'Final-day styling is what turns a finished construction site into a home. Whether you are settling in or preparing to list the property, we dress your space for everyday living or for a picture-perfect resale listing that photographs and shows beautifully.',
    benefits: [
      { title: 'Picture-Perfect Finish', description: 'A styled reveal that photographs well for your own memories or for listing photos.' },
      { title: 'Buyer-Ready Appeal', description: 'Neutral, aspirational staging that helps buyers imagine themselves in the space.' },
      { title: 'Everyday Livability', description: 'Styling that still works for daily life, not just a one-time photoshoot.' },
      { title: 'Fast Turnaround', description: 'Staging completed in a single dedicated session close to handover or listing date.' },
      { title: 'Cohesive Final Look', description: 'Every cushion, throw and accessory chosen to tie the whole home together.' },
    ],
    included: [
      { title: 'Styling Brief', description: 'A discussion of whether the space is being styled to live in or to sell.' },
      { title: 'Furniture Arrangement', description: 'Final placement and arrangement of furniture for maximum visual impact.' },
      { title: 'Soft Furnishing Styling', description: 'Cushions, throws, rugs and curtains styled to complete each room.' },
      { title: 'Accessory Placement', description: 'Decorative objects and art placed for a considered, magazine-ready finish.' },
      { title: 'Photography-Ready Setup', description: 'Rooms arranged and lit for the best possible photographs.' },
      { title: 'Final Walkthrough', description: 'A last check of every room before reveal, listing photos, or move-in.' },
    ],
    process: [
      { title: 'Styling Brief', description: 'We confirm whether the goal is everyday living or a resale listing.' },
      { title: 'Prop & Accessory Sourcing', description: 'We source or use existing cushions, art and decor for the styling session.' },
      { title: 'On-Site Styling', description: 'Our team arranges furniture, soft furnishings and accessories on-site.' },
      { title: 'Photography Setup', description: 'We arrange lighting and staging for photography, if required.' },
      { title: 'Client Walkthrough', description: 'We walk you through the styled space before the final reveal.' },
      { title: 'Final Touches', description: 'Last-minute adjustments based on your feedback before handover.' },
    ],
    heroImageIds: [6758773, 932095, 2306282],
    galleryImageIds: [534172, 11160491, 5774927, 12127444, 22702955, 3968056, 6969824, 1125135, 6782353, 6312357],
  },
]

export function getServiceDetail(slug: string) {
  return serviceDetails.find((s) => s.slug === slug)
}
