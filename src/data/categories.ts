export interface GalleryCategory {
  slug: string
  label: string
  /** Verified real Pexels photo IDs, topically matched to this room type — every id in a category's list is unique, no repeats. */
  photoIds: number[]
}

export const galleryCategories: GalleryCategory[] = [
  {
    slug: 'living-room',
    label: 'Living Room Designs',
    photoIds: [
      20390760, 12285892, 3316922, 10168692, 28729467, 8583697, 28991200, 6035369,
      6636320, 6180674, 6312360, 11701115, 6312357, 6782353, 1125135, 6969824,
    ],
  },
  {
    slug: 'tv-unit',
    label: 'TV Unit Designs',
    photoIds: [
      7767067, 19866446, 34153693, 1444416, 15580493, 275497, 3385437, 4067763,
      23017767, 17552445, 13722886,
    ],
  },
  {
    slug: 'master-bedroom',
    label: 'Master Bedroom Designs',
    photoIds: [8135502, 34672503, 6207825, 31737843, 18738880, 7745994, 19836795, 8135527, 5824522],
  },
  {
    slug: 'guest-bedroom',
    label: 'Guest Bedroom Designs',
    photoIds: [1501272, 15404863, 1034584, 7598137, 4740580, 8251914, 6636262, 7045846, 6487951],
  },
  {
    slug: 'kids-bedroom',
    label: 'Kids Bedroom Designs',
    photoIds: [15625991, 3932930, 10854908, 3958960, 7167274],
  },
  {
    slug: 'foyer',
    label: 'Foyer Designs',
    photoIds: [7546771, 7018377, 19227221, 6588580, 19846390, 7533836, 6587823],
  },
  {
    slug: 'shoe-rack',
    label: 'Shoe Rack Designs',
    // Thin real-photo coverage on free stock libraries for this specific
    // built-in — nearest real matches are closet/entryway storage shots.
    photoIds: [6585745, 7005019, 1682699, 3958953, 6585750, 6670657],
  },
  {
    slug: 'wardrobe',
    label: 'Wardrobe Designs',
    photoIds: [6782348, 6312079, 6782465, 6585745, 1682699, 3958953, 6670657],
  },
  {
    slug: 'pooja-unit',
    label: 'Pooja Unit Designs',
    // Virtually no genuine home-pooja-unit stock photography exists on
    // free libraries; these are elegant wooden console/cabinet shots
    // used as the closest visual proxy until real project photos exist.
    photoIds: [6782465, 6585745, 7005019],
  },
  {
    slug: 'modular-kitchen',
    label: 'Modular Kitchen Designs',
    photoIds: [
      15062155, 7147298, 4221389, 2001944, 3623785, 3016430, 35505452, 6492402,
      11701162, 7533765, 10827395, 6032225,
    ],
  },
  {
    slug: 'dining-room',
    label: 'Dining Room Designs',
    photoIds: [22702955, 12127444, 3968056, 5774927, 932095, 2306282, 11160491, 6758773, 534172],
  },
]
