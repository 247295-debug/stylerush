// ─── LOOKS ───────────────────────────────────────────────────────────────────
export type Look = {
  id: number
  src: string
  alt: string
  title: string
  tag: string
  saves: string
  span: 'tall' | 'short' | 'mid'
}

export const looks: Look[] = []

// ─── CATEGORIES ──────────────────────────────────────────────────────────────
export type Category = {
  id: string
  label: string
  emoji: string
  query: string
}

export const categories: Category[] = [
  { id: 'all',            label: 'All Looks',        emoji: '✨', query: 'women fashion outfit style' },
  { id: 'pakistani',      label: 'Pakistani',         emoji: '🌸', query: 'pakistani women fashion shalwar kameez eastern wear' },
  { id: 'tops',           label: 'Tops',              emoji: '👚', query: 'women fashion tops blouse shirt stylish' },
  { id: 'dresses',        label: 'Dresses & Frocks',  emoji: '👗', query: 'women dress frock elegant fashion' },
  { id: 'skirts',         label: 'Skirts',            emoji: '🩷', query: 'women skirt fashion outfit stylish' },
  { id: 'shalwar-qameez', label: 'Shalwar Qameez',   emoji: '🪷', query: 'shalwar kameez pakistani women fashion lawn' },
  { id: 'shoes',          label: 'Shoes',             emoji: '👠', query: 'women shoes heels sandals sneakers fashion' },
  { id: 'accessories',    label: 'Accessories',       emoji: '💍', query: 'women fashion accessories jewelry handbag' },
]

// ─── BRANDS ──────────────────────────────────────────────────────────────────
export type Brand = {
  name: string
  vibe: string
  category: string
  country: 'pakistani' | 'international'
  url: string
  initial: string
  color: string
}

export const brands: Brand[] = [
  // Pakistani Brands
  { name: 'Khaadi',           vibe: 'Eastern · Lawn · Pret',       category: 'Pakistani',      country: 'pakistani',      url: 'https://khaadi.com',             initial: 'K', color: '#7C3AED' },
  { name: 'Sapphire',         vibe: 'Trendy · Modern · Pret',      category: 'Pakistani',      country: 'pakistani',      url: 'https://sapphireonline.pk',      initial: 'S', color: '#0EA5E9' },
  { name: 'Gul Ahmed',        vibe: 'Classic · Lawn · Formal',     category: 'Pakistani',      country: 'pakistani',      url: 'https://gulahmedshop.com',       initial: 'G', color: '#059669' },
  { name: 'Sana Safinaz',     vibe: 'Luxury · Formal · Bridal',    category: 'Pakistani',      country: 'pakistani',      url: 'https://sanasafinaz.com',        initial: 'SS', color: '#BE185D' },
  { name: 'Alkaram',          vibe: 'Affordable · Lawn · Casual',  category: 'Pakistani',      country: 'pakistani',      url: 'https://alkaramstudio.com',      initial: 'A', color: '#D97706' },
  { name: 'Limelight',        vibe: 'Trendy · Youth · Casual',     category: 'Pakistani',      country: 'pakistani',      url: 'https://limelightpk.com',        initial: 'L', color: '#10B981' },
  { name: 'Bonanza Satrangi', vibe: 'Colorful · Festive · Lawn',   category: 'Pakistani',      country: 'pakistani',      url: 'https://bonanzastore.pk',        initial: 'B', color: '#EF4444' },
  { name: 'Zeen',             vibe: 'Contemporary · Chic · Pret',  category: 'Pakistani',      country: 'pakistani',      url: 'https://zeenwomen.com',          initial: 'Z', color: '#8B5CF6' },
  // International Brands
  { name: 'Zara',             vibe: 'Minimalist · Trendy · Chic',  category: 'International',  country: 'international',  url: 'https://zara.com',               initial: 'Z', color: '#1a1a1a' },
  { name: 'H&M',              vibe: 'Affordable · Basics · Trendy', category: 'International', country: 'international',  url: 'https://hm.com',                 initial: 'H', color: '#CC0000' },
  { name: 'Shein',            vibe: 'Budget · Y2K · Fast Fashion',  category: 'International', country: 'international',  url: 'https://shein.com',              initial: 'S', color: '#000000' },
  { name: 'Mango',            vibe: 'Elegant · Mediterranean · Chic', category: 'International', country: 'international', url: 'https://mango.com',             initial: 'M', color: '#C8973A' },
  { name: 'ASOS',             vibe: 'Diverse · Youth · Trendy',    category: 'International',  country: 'international',  url: 'https://asos.com',               initial: 'A', color: '#2C7BE5' },
  { name: 'Forever 21',       vibe: 'Y2K · Affordable · Fun',      category: 'International',  country: 'international',  url: 'https://forever21.com',          initial: 'F', color: '#C41E3A' },
  { name: 'Uniqlo',           vibe: 'Minimal · Quality · Basics',  category: 'International',  country: 'international',  url: 'https://uniqlo.com',             initial: 'U', color: '#E60012' },
  { name: 'Urban Outfitters', vibe: 'Boho · Vintage · Cool',       category: 'International',  country: 'international',  url: 'https://urbanoutfitters.com',    initial: 'UO', color: '#5F4B8B' },
]

// ─── QUIZ ─────────────────────────────────────────────────────────────────────
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
      { label: 'Thrifting in the city',    value: 'y2k',         emoji: '🛍️' },
      { label: 'Matcha & journaling',      value: 'clean',       emoji: '🍵' },
      { label: 'Ballet class',             value: 'balletcore',  emoji: '🩰' },
    ],
  },
  {
    id: 2,
    question: 'Your go-to color palette',
    options: [
      { label: 'Buttery creams & sage', value: 'cottagecore', emoji: '🧈' },
      { label: 'Hot pink & chrome',     value: 'y2k',         emoji: '💿' },
      { label: 'Beige & soft white',    value: 'clean',       emoji: '🤍' },
      { label: 'Blush & baby pink',     value: 'balletcore',  emoji: '🎀' },
    ],
  },
  {
    id: 3,
    question: 'Choose an accessory',
    options: [
      { label: 'Woven straw basket',  value: 'cottagecore', emoji: '🧺' },
      { label: 'Butterfly hair clips', value: 'y2k',        emoji: '🦋' },
      { label: 'Gold hoops',          value: 'clean',       emoji: '✨' },
      { label: 'Satin hair ribbon',   value: 'balletcore',  emoji: '🎀' },
    ],
  },
  {
    id: 4,
    question: 'Your ideal fabric',
    options: [
      { label: 'Floral cotton', value: 'cottagecore', emoji: '🌸' },
      { label: 'Denim & mesh', value: 'y2k',          emoji: '🧵' },
      { label: 'Ribbed knit',  value: 'clean',        emoji: '🧶' },
      { label: 'Sheer tulle',  value: 'balletcore',   emoji: '☁️' },
    ],
  },
]

export type QuizResult = {
  title: string
  emoji: string
  description: string
  shopQuery: string
}

export const quizResults: Record<string, QuizResult> = {
  cottagecore: {
    title: 'Cottagecore Darling',
    emoji: '🌼',
    description: 'Soft florals, breezy silhouettes, and a love for all things whimsical. Your wardrobe feels like a sun-dappled meadow.',
    shopQuery: 'floral dress cottagecore fashion',
  },
  y2k: {
    title: 'Y2K It Girl',
    emoji: '🦋',
    description: 'Playful, nostalgic, and unapologetically bold. You mix chrome, denim, and butterfly clips like it is 2003 again.',
    shopQuery: 'y2k fashion trendy outfit',
  },
  clean: {
    title: 'Clean Girl Minimalist',
    emoji: '🤍',
    description: 'Effortless, polished, and quietly luxe. Neutral tones and perfect basics are your signature.',
    shopQuery: 'minimalist clean girl fashion neutral',
  },
  balletcore: {
    title: 'Balletcore Romantic',
    emoji: '🎀',
    description: 'Delicate ribbons, blush tones, and graceful layers. Your aesthetic floats somewhere between a daydream and a dance studio.',
    shopQuery: 'balletcore ballet fashion tulle',
  },
}

// ─── OUTFIT WARDROBE ──────────────────────────────────────────────────────────
export type OutfitItem = { name: string; src: string; category: string }

export const outfitWardrobe: Record<
  'female' | 'male',
  Record<'tops' | 'bottoms' | 'shoes' | 'accessories', OutfitItem[]>
> = {
  female: {
    tops: [
      { name: 'Pink Cropped Cardigan',  src: '/items/w-top-1.png', category: 'tops' },
      { name: 'Lace Bow Blouse',        src: '/items/w-top-2.png', category: 'tops' },
      { name: 'White Shirt',            src: '/items/w-top-3.png', category: 'tops' },
      { name: 'Floral Kurti',           src: '/items/w-top-4.png', category: 'tops' },
    ],
    bottoms: [
      { name: 'Lavender Pleated Skirt', src: '/items/w-bottom-1.png', category: 'skirts' },
      { name: 'Baggy Mom Jeans',        src: '/items/w-bottom-2.png', category: 'dresses' },
      { name: 'Lawn Shalwar Qameez',    src: '/items/w-bottom-3.png', category: 'shalwar-qameez' },
      { name: 'Mini Frock',             src: '/items/w-bottom-4.png', category: 'dresses' },
    ],
    shoes: [
      { name: 'Ribbon Ballet Flats',    src: '/items/w-shoe-1.png', category: 'shoes' },
      { name: 'Platform Sneakers',      src: '/items/w-shoe-2.png', category: 'shoes' },
      { name: 'Strappy Heels',          src: '/items/w-shoe-3.png', category: 'shoes' },
      { name: 'Embroidered Khussa',     src: '/items/w-shoe-4.png', category: 'shoes' },
    ],
    accessories: [
      { name: 'Gold Hoops',             src: '/items/w-acc-1.png', category: 'accessories' },
      { name: 'Silk Scrunchie',         src: '/items/w-acc-2.png', category: 'accessories' },
      { name: 'Pearl Necklace',         src: '/items/w-acc-3.png', category: 'accessories' },
      { name: 'Mini Handbag',           src: '/items/w-acc-4.png', category: 'accessories' },
    ],
  },
  male: {
    tops: [
      { name: 'Oversized Lilac Hoodie', src: '/items/m-top-1.png', category: 'tops' },
      { name: 'Pastel Knit Sweater',    src: '/items/m-top-2.png', category: 'tops' },
      { name: 'White Kurta',            src: '/items/m-top-3.png', category: 'tops' },
      { name: 'Graphic Tee',            src: '/items/m-top-4.png', category: 'tops' },
    ],
    bottoms: [
      { name: 'Baggy Light Jeans',      src: '/items/m-bottom-1.png', category: 'dresses' },
      { name: 'Cream Trousers',         src: '/items/m-bottom-2.png', category: 'dresses' },
      { name: 'Shalwar',                src: '/items/m-bottom-3.png', category: 'shalwar-qameez' },
      { name: 'Cargo Pants',            src: '/items/m-bottom-4.png', category: 'dresses' },
    ],
    shoes: [
      { name: 'Retro Sneakers',         src: '/items/m-shoe-1.png', category: 'shoes' },
      { name: 'Suede Loafers',          src: '/items/m-shoe-2.png', category: 'shoes' },
      { name: 'White Trainers',         src: '/items/m-shoe-3.png', category: 'shoes' },
      { name: 'Leather Khussa',         src: '/items/m-shoe-4.png', category: 'shoes' },
    ],
    accessories: [
      { name: 'Silver Chain',           src: '/items/m-acc-1.png', category: 'accessories' },
      { name: 'Cap',                    src: '/items/m-acc-2.png', category: 'accessories' },
      { name: 'Watch',                  src: '/items/m-acc-3.png', category: 'accessories' },
      { name: 'Leather Belt',           src: '/items/m-acc-4.png', category: 'accessories' },
    ],
  },
}
