export type Museum = {
  id: string;
  name: string;
  city: string;
  province: string;
  description: string;
  category: string;
  highlight: string;
  panorama?: string;
  accent: string;
};

export const museums: Museum[] = [
  {
    id: 'museum-nasional',
    name: 'Museum Nasional Indonesia',
    city: 'Jakarta',
    province: 'DKI Jakarta',
    category: 'History & Culture',
    description: 'Indonesia’s largest museum of archaeology, ethnography, history, and cultural memory.',
    highlight: 'Main Hall',
    panorama: '/panoramas/demo-museum-hall.jpg',
    accent: 'bronze',
  },
  {
    id: 'sonobudoyo',
    name: 'Museum Sonobudoyo',
    city: 'Yogyakarta',
    province: 'DI Yogyakarta',
    category: 'Arts & Culture',
    description: 'Javanese heritage, performance, manuscripts, and craft traditions in the heart of Yogyakarta.',
    highlight: 'Javanese Heritage',
    panorama: '/panoramas/demo-museum-hall.jpg',
    accent: 'sand',
  },
  {
    id: 'geologi',
    name: 'Museum Geologi',
    city: 'Bandung',
    province: 'West Java',
    category: 'Science & Nature',
    description: 'Geological collections, fossils, minerals, and stories of Indonesia’s natural formation.',
    highlight: 'Fossil Gallery',
    panorama: '/panoramas/demo-museum-hall.jpg',
    accent: 'stone',
  },
  {
    id: 'ullen-sentalu',
    name: 'Museum Ullen Sentalu',
    city: 'Sleman',
    province: 'DI Yogyakarta',
    category: 'Heritage & Royalty',
    description: 'A poetic journey through Javanese royal history, visual culture, and intimate archives.',
    highlight: 'Royal Stories',
    panorama: '/panoramas/demo-museum-hall.jpg',
    accent: 'forest',
  },
];

export const audienceBenefits = [
  { title: 'Students', copy: 'Learn history visually through spatial storytelling and guided context.' },
  { title: 'Travelers', copy: 'Preview destinations before building a real itinerary.' },
  { title: 'Educators', copy: 'Use museum scenes as classroom material and discussion prompts.' },
  { title: 'Culture Seekers', copy: 'Follow heritage stories across islands, eras, and collections.' },
];

export const galleryItems = [
  { title: 'Artifacts', copy: 'Timeless objects that carry stories across generations.' },
  { title: 'Architecture', copy: 'Spaces and structures that reflect identity and ingenuity.' },
  { title: 'Stories', copy: 'Legends, knowledge, and voices from the past to the present.' },
  { title: 'Routes', copy: 'Curated journeys across regions, themes, and time.' },
];
