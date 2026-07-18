export interface Review {
  name: string
  location: string
  project: string
  rating: number
  quote: string
  /** Only the featured (carousel) reviews carry a project photo. */
  photoId?: number
}

// Featured reviews — shown in the auto-scrolling carousel at the top of
// the Reviews section, each paired with a real project-style photo.
export const featuredReviews: Review[] = [
  {
    name: 'Ananya & Karthik Rao',
    location: 'Whitefield, Bengaluru',
    project: 'Villa Interior',
    rating: 5,
    quote: 'From the first mood board to the final styling day, the team understood exactly how we wanted to live in our home — not just how it should look. The stone and brass palette they proposed still feels timeless a year on.',
    photoId: 20390760,
  },
  {
    name: 'Meera Iyengar',
    location: 'Indiranagar, Bengaluru',
    project: '2BHK Apartment',
    rating: 5,
    quote: 'We had a tiny apartment and a long wish list. The space planning session alone was worth it — every corner is now used, and it never feels cramped. Highly recommend the design consultation before you touch anything.',
    photoId: 6180674,
  },
  {
    name: 'Rohit Subramaniam',
    location: 'Adyar, Chennai',
    project: 'Penthouse',
    rating: 5,
    quote: 'Professional, punctual and genuinely creative. The custom furniture pieces they designed for our dining lounge get compliments from every guest. Project management was seamless — no surprises, no delays.',
    photoId: 22702955,
  },
  {
    name: 'Priya & Anand Reddy',
    location: 'Gachibowli, Hyderabad',
    project: 'Family Duplex',
    rating: 5,
    quote: 'Balancing a traditional pooja unit with a modern duplex layout was tricky, but they nailed the brief. Three generations of our family are happy, which is not an easy thing to pull off in one house.',
    photoId: 10168692,
  },
  {
    name: 'Devika Joshi',
    location: 'Baner, Pune',
    project: 'Row House',
    rating: 4,
    quote: 'Loved the warm wood tones and the reading nook under the stairs — such a thoughtful touch. Renovation took a couple of weeks longer than planned, but the finish quality made it worth the wait.',
    photoId: 35505452,
  },
  {
    name: 'Farah Contractor',
    location: 'Juhu, Mumbai',
    project: 'Sea View Residence',
    rating: 5,
    quote: 'They designed the entire apartment around the sea view — low furniture, sheer curtains, nothing blocking the light. It genuinely feels like a resort. Worth every rupee of the quote.',
    photoId: 34153693,
  },
  {
    name: 'Sanjay Nair',
    location: 'HSR Layout, Bengaluru',
    project: 'Modular Kitchen',
    rating: 5,
    quote: 'Got three quotes before choosing this team, and it was the right call. The modular kitchen layout is so much more efficient than our old one, and the lighting design makes cooking at night actually pleasant.',
    photoId: 15062155,
  },
  {
    name: 'Lakshmi Venkataraman',
    location: 'T. Nagar, Chennai',
    project: 'Wardrobe & Storage',
    rating: 5,
    quote: 'Custom wardrobes that finally fit our silk saree collection properly! Small detail, but it mattered to me, and the designer took the time to get the internal layout exactly right.',
    photoId: 6782348,
  },
  {
    name: 'Rahul & Nandini Verma',
    location: 'Kondapur, Hyderabad',
    project: 'Full Home Interior',
    rating: 5,
    quote: 'Six rooms, one moving family, zero chaos. Every vendor was coordinated by one point of contact, which meant we never had to chase anyone. The final styling day felt like a movie reveal.',
    photoId: 8135502,
  },
  {
    name: 'Divya Krishnan',
    location: 'Velachery, Chennai',
    project: 'Kids Bedroom',
    rating: 5,
    quote: 'My daughter still talks about the day her room was revealed. Practical storage for toys, a proper study corner, and colours that will actually age well as she grows up — exactly what we asked for.',
    photoId: 15625991,
  },
]

const names = [
  'Arjun Mehta', 'Kavya Subramanian', 'Vikram Desai', 'Shalini Pillai', 'Rajesh Kumar',
  'Nithya Raman', 'Suresh Babu', 'Pooja Agarwal', 'Manoj Iyer', 'Deepika Menon',
  'Aravind Krishnan', 'Swathi Reddy', 'Naveen Chandra', 'Ritu Malhotra', 'Kiran Rao',
  'Anjali Nambiar', 'Prakash Shetty', 'Vidya Sundaram', 'Harish Gowda', 'Sneha Kulkarni',
  'Gopal Krishnan', 'Meenakshi Iyer', 'Ashwin Bhat', 'Radhika Nair', 'Vinay Kamath',
  'Preethi Rangan', 'Sundar Raj', 'Kavitha Balan', 'Mahesh Varma', 'Anitha Suresh',
  'Ramesh Chandran', 'Lavanya Prasad', 'Dinesh Kumar', 'Yamini Rao', 'Srikanth Reddy',
  'Bhavana Shah', 'Nikhil Saxena', 'Geetha Murthy', 'Arun Prabhu', 'Tara Fernandes',
]

const locations = [
  'Koramangala, Bengaluru', 'Jayanagar, Bengaluru', 'Banjara Hills, Hyderabad',
  'Madhapur, Hyderabad', 'Anna Nagar, Chennai', 'Besant Nagar, Chennai',
  'Kothrud, Pune', 'Viman Nagar, Pune', 'Powai, Mumbai', 'Andheri, Mumbai',
  'Electronic City, Bengaluru', 'Whitefield, Bengaluru', 'Nungambakkam, Chennai',
  'Gachibowli, Hyderabad', 'Aundh, Pune', 'Bandra, Mumbai', 'Malleswaram, Bengaluru',
  'OMR, Chennai', 'Miyapur, Hyderabad', 'Wakad, Pune',
]

const projectTypes = [
  'Modular Kitchen', 'Master Bedroom', 'Living Room Makeover', 'Full Home Interior',
  'Wardrobe & Storage', 'Dining Room', 'Foyer Design', 'TV Unit & Living Room',
  'Guest Bedroom', 'Renovation & Remodeling', '3BHK Apartment', '2BHK Apartment',
  'Villa Interior', 'Duplex Interior', 'Kids Bedroom',
]

// Every entry below is unique — each of the 40 reviews gets its own
// distinct quote so no two named clients ever show the same text.
const quoteBank = [
  'The design consultation alone gave us more clarity than months of scrolling Pinterest ever did. Genuinely worth it.',
  'Space planning made all the difference — the same square footage now feels twice as large.',
  'Our lighting design completely changed how the house feels in the evening. Small change, huge impact.',
  'The custom furniture fits so precisely you would think the rooms were built around it, not the other way round.',
  'Color consultation saved us from a repainting job — they got the palette right on the first try.',
  'The project manager kept us updated every single week. No chasing, no surprises at handover.',
  'Styling day was the best part — they brought in art and accessories that pulled the whole home together.',
  'They respected our budget without making the design feel like it was compromised anywhere.',
  'Renovation of a 15-year-old flat is never simple, but they handled the structural surprises calmly and kept timelines honest.',
  'Our modular kitchen layout is dramatically more efficient — everything is exactly where it should be.',
  'The wardrobe interiors are so well thought out that unpacking after the move took a single afternoon.',
  'They listened first and designed second, which is rarer than it should be in this industry.',
  'Every vendor, electrician and carpenter was coordinated by one team — we never had to manage anyone ourselves.',
  'The finished home looks like the render they showed us on day one, which almost never happens.',
  'Our dining room finally feels like a place to linger rather than just eat and leave.',
  'The kids room design has held up beautifully even with two boys and a lot of energy in that house.',
  'They found us furniture within budget that still looked like it belonged in a showroom.',
  'Honest advice, even when it meant recommending something cheaper than what we asked for.',
  'The pooja unit they designed keeps tradition intact while still looking like it belongs in a modern home.',
  'From first sketch to last cushion, the whole process took less time than we expected.',
  'We interviewed four design studios and this was the only one that asked about our daily routine before talking materials.',
  'The foyer was an afterthought for us until they showed us what it could look like — now it is everyone\'s favourite corner.',
  'Three site visits, zero disagreements with the contractor — that alone was worth the design fee.',
  'Our TV unit design finally hides the cable mess we\'d been living with for six years.',
  'They pushed back gently when we asked for a trend that would have dated badly, and they were right to.',
  'What impressed us most was how the small details were thought through — plug points exactly where we needed them.',
  'The guest bedroom now gets used more than our own, which was not the plan but is a nice problem to have.',
  'Every quote item was itemised clearly, so there were no awkward conversations about scope creep.',
  'We changed our minds twice mid-project and they adjusted without any drama or extra charges.',
  'The 3D render matched the final space so closely that walking in felt like déjà vu, in a good way.',
  'Our old flat felt dated within a year of any renovation. This one still looks fresh two years later.',
  'They sourced a local carpenter for our custom pieces who turned out to be the best find of the whole project.',
  'The colour palette they chose photographs beautifully, which matters more than we expected once family started visiting.',
  'A small home office nook was squeezed into what used to be dead space by the staircase — genuinely clever.',
  'They flagged a plumbing issue during the site visit that our previous contractor had missed entirely.',
  'Our building\'s fire safety norms made the kitchen layout tricky, but they worked around every constraint without complaint.',
  'The whole family got a say during the design consultation, which made the final result feel like everyone\'s home.',
  'Storage was our biggest worry going in, and it turned out to be the strongest part of the entire design.',
  'They matched our existing furniture into the new design instead of pushing us to replace everything.',
  'Handover day included a full walkthrough of every fitting and warranty, which no other vendor had offered us before.',
]

function reviewFrom(i: number): Review {
  const name = names[i % names.length]
  const location = locations[(i * 3 + 1) % locations.length]
  const project = projectTypes[(i * 5 + 2) % projectTypes.length]
  const quote = quoteBank[i]
  const rating = i % 9 === 0 ? 4 : 5
  return { name, location, project, rating, quote }
}

// 40 additional reviews shown in the standard grid below the carousel.
export const moreReviews: Review[] = Array.from({ length: quoteBank.length }, (_, i) => reviewFrom(i))

export const reviews: Review[] = [...featuredReviews, ...moreReviews]
