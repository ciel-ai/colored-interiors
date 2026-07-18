// One-off script: query Wikimedia Commons for real, keyword-relevant interior
// design photos and print titles + URLs so we can sanity-check relevance
// before baking results into the app's data files.
const API = 'https://commons.wikimedia.org/w/api.php'

async function search(term, limit = 30) {
  const url = `${API}?action=query&generator=search&gsrsearch=${encodeURIComponent(
    'filetype:bitmap ' + term
  )}&gsrnamespace=6&gsrlimit=${limit}&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=1000&format=json`
  const res = await fetch(url, { headers: { 'User-Agent': 'colored-interiors-build-script/1.0' } })
  const data = await res.json()
  const pages = data?.query?.pages ?? {}
  return Object.values(pages)
    .map((p) => ({
      title: p.title,
      width: p.imageinfo?.[0]?.width,
      height: p.imageinfo?.[0]?.height,
      thumb: p.imageinfo?.[0]?.thumburl,
      full: p.imageinfo?.[0]?.url,
    }))
    .filter((p) => p.thumb && p.width >= 400)
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const queries = process.argv.slice(2)
for (const q of queries) {
  const results = await search(q, 25)
  console.log(`\n=== "${q}" -> ${results.length} results ===`)
  results.slice(0, 25).forEach((r) => console.log(`  [${r.width}x${r.height}] ${r.title}`))
  await sleep(1500)
}
