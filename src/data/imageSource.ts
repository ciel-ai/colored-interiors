/**
 * Placeholder image sourcing helper.
 *
 * NOTE FOR THE CLIENT / DEV TEAM:
 * Every photo in this app is a real, rights-cleared Pexels stock photo
 * (free license, no attribution required), picked to match its section
 * topically (living rooms in the living-room gallery, kitchens in the
 * kitchen gallery, etc). They stand in for real project photography
 * until the studio's own shoots are ready — swap the id lists below for
 * real photo URLs whenever that happens, no component changes needed.
 *
 * Two categories — Shoe Rack Designs and Pooja Unit Designs — have very
 * little genuine matching stock coverage (these are India-specific
 * built-ins that generic stock libraries rarely shoot), so those two
 * galleries reuse the closest adjacent real photos (closet/storage/
 * console shots) rather than showing something unrelated. Treat those
 * two as the first candidates to replace with the client's own project
 * photos.
 */

export function pexelsImage(id: number, w = 900, h = 1125) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`
}
