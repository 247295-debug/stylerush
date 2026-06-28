export type Look = {
  id: number
  src: string
  alt: string
  title: string
  tag: string
  saves: string
  span: 'tall' | 'short' | 'mid'
}

export const looks: Look[] = [
  {
    id: 1,
    src: '/looks/look-1.png',
    alt: 'Cottagecore floral pastel dress look',
    title: 'Soft Cottagecore',
    tag: 'cottagecore',
    saves: '12.4k',
    span: 'tall',
  },
  {
    id: 2,
    src: '/looks/look-2.png',
    alt: 'Y2K lilac hoodie streetwear look',
    title: 'Lilac Y2K Fit',
    tag: 'y2k',
    saves: '9.1k',
    span: 'mid',
  },
  {
    id: 3,
    src: '/looks/look-3.png',
    alt: 'Soft girl pastel outfit flatlay',
    title: 'Soft Girl Flatlay',
    tag: 'soft girl',
    saves: '15.7k',
    span: 'short',
  },
  {
    id: 4,
    src: '/looks/look-4.png',
    alt: 'Coquette lace top with bow look',
    title: 'Coquette Dream',
    tag: 'coquette',
    saves: '22.3k',
    span: 'tall',
  },
  {
    id: 5,
    src: '/looks/look-5.png',
    alt: 'Minimalist pastel knit menswear look',
    title: 'Soft Minimal',
    tag: 'minimal',
    saves: '7.8k',
    span: 'mid',
  },
  {
    id: 6,
    src: '/looks/look-6.png',
    alt: 'Clean girl lavender loungewear look',
    title: 'Clean Girl Era',
    tag: 'clean girl',
    saves: '18.9k',
    span: 'short',
  },
  {
    id: 7,
    src: '/looks/look-7.png',
    alt: 'Y2K accessories flatlay',
    title: 'Y2K Accessories',
    tag: 'y2k',
    saves: '6.2k',
    span: 'mid',
  },
  {
    id: 8,
    src: '/looks/look-8.png',
    alt: 'Balletcore tulle skirt look',
    title: 'Balletcore',
    tag: 'balletcore',
    saves: '20.1k',
    span: 'tall',
  },
  {
    id: 9,
    src: '/looks/look-9.png',
    alt: 'Pastel preppy menswear look',
    title: 'Pastel Preppy',
    tag: 'preppy',
    saves: '5.4k',
    span: 'short',
  },
]

export type Brand = {
  name: string
  vibe: string
  category: string
  followers: string
  initial: string
}

export const brands: Brand[] = [
  { name: 'Petal & Co', vibe: 'Coquette · Lace', category: 'Womenswear', followers: '482k', initial: 'P' },
  { name: 'Lilac Lab', vibe: 'Y2K · Streetwear', category: 'Unisex', followers: '356k', initial: 'L' },
  { name: 'Soft Static', vibe: 'Minimal · Knitwear', category: 'Menswear', followers: '291k', initial: 'S' },
  { name: 'Bloomé', vibe: 'Cottagecore · Floral', category: 'Womenswear', followers: '410k', initial: 'B' },
  { name: 'Mauve Studio', vibe: 'Clean Girl · Basics', category: 'Unisex', followers: '224k', initial: 'M' },
  { name: 'Pointe', vibe: 'Balletcore · Tulle', category: 'Womenswear', followers: '188k', initial: 'P' },
  { name: 'Haze Atelier', vibe: 'Preppy · Tailoring', category: 'Menswear', followers: '147k', initial: 'H' },
  { name: 'Sugar Rush', vibe: 'Kawaii · Pastel', category: 'Unisex', followers: '512k', initial: 'S' },
]

export type QuizQuestion = {
  id: number
  question: string
  options: { label: string; value: string; emoji: string }[]
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Pick your dream weekend',
    options: [
      { label: 'Picnic in a flower field', value: 'cottagecore', emoji: '🌼' },
      { label: 'Thrifting in the city', value: 'y2k', emoji: '🛍️' },
      { label: 'Matcha & journaling', value: 'clean', emoji: '🍵' },
      { label: 'Ballet class', value: 'balletcore', emoji: '🩰' },
    ],
  },
  {
    id: 2,
    question: 'Your go-to color palette',
    options: [
      { label: 'Buttery creams & sage', value: 'cottagecore', emoji: '🧈' },
      { label: 'Hot pink & chrome', value: 'y2k', emoji: '💿' },
      { label: 'Beige & soft white', value: 'clean', emoji: '🤍' },
      { label: 'Blush & baby pink', value: 'balletcore', emoji: '🎀' },
    ],
  },
  {
    id: 3,
    question: 'Choose an accessory',
    options: [
      { label: 'Woven straw basket', value: 'cottagecore', emoji: '🧺' },
      { label: 'Butterfly hair clips', value: 'y2k', emoji: '🦋' },
      { label: 'Gold hoops', value: 'clean', emoji: '✨' },
      { label: 'Satin hair ribbon', value: 'balletcore', emoji: '🎀' },
    ],
  },
  {
    id: 4,
    question: 'Your ideal fabric',
    options: [
      { label: 'Floral cotton', value: 'cottagecore', emoji: '🌸' },
      { label: 'Denim & mesh', value: 'y2k', emoji: '🧵' },
      { label: 'Ribbed knit', value: 'clean', emoji: '🧶' },
      { label: 'Sheer tulle', value: 'balletcore', emoji: '☁️' },
    ],
  },
]

export type QuizResult = {
  title: string
  emoji: string
  description: string
}

export const quizResults: Record<string, QuizResult> = {
  cottagecore: {
    title: 'Cottagecore Darling',
    emoji: '🌼',
    description:
      'Soft florals, breezy silhouettes, and a love for all things whimsical. Your wardrobe feels like a sun-dappled meadow.',
  },
  y2k: {
    title: 'Y2K It Girl',
    emoji: '🦋',
    description:
      'Playful, nostalgic, and unapologetically bold. You mix chrome, denim, and butterfly clips like it is 2003 again.',
  },
  clean: {
    title: 'Clean Girl Minimalist',
    emoji: '🤍',
    description:
      'Effortless, polished, and quietly luxe. Neutral tones and perfect basics are your signature.',
  },
  balletcore: {
    title: 'Balletcore Romantic',
    emoji: '🎀',
    description:
      'Delicate ribbons, blush tones, and graceful layers. Your aesthetic floats somewhere between a daydream and a dance studio.',
  },
}

export type OutfitItem = { name: string; src: string }

export const outfitWardrobe: Record<
  'female' | 'male',
  Record<'tops' | 'bottoms' | 'shoes', OutfitItem[]>
> = {
  female: {
    tops: [
      { name: 'Pink Cropped Cardigan', src: '/items/w-top-1.png' },
      { name: 'Lace Bow Blouse', src: '/items/w-top-2.png' },
    ],
    bottoms: [
      { name: 'Lavender Pleated Skirt', src: '/items/w-bottom-1.png' },
      { name: 'Baggy Mom Jeans', src: '/items/w-bottom-2.png' },
    ],
    shoes: [
      { name: 'Ribbon Ballet Flats', src: '/items/w-shoe-1.png' },
      { name: 'Platform Sneakers', src: '/items/w-shoe-2.png' },
    ],
  },
  male: {
    tops: [
      { name: 'Oversized Lilac Hoodie', src: '/items/m-top-1.png' },
      { name: 'Pastel Knit Sweater', src: '/items/m-top-2.png' },
    ],
    bottoms: [
      { name: 'Baggy Light Jeans', src: '/items/m-bottom-1.png' },
      { name: 'Cream Trousers', src: '/items/m-bottom-2.png' },
    ],
    shoes: [
      { name: 'Retro Sneakers', src: '/items/m-shoe-1.png' },
      { name: 'Suede Loafers', src: '/items/m-shoe-2.png' },
    ],
  },
}
