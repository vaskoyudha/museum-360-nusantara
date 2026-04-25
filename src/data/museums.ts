export type Museum = {
  id: string;
  name: string;
  city: string;
  province: string;
  description: string;
  category: string;
  highlight: string;
  panorama?: string;
  image: string;
  accent: string;
};

const sceneAssets = [
  ['1', 'Area 1 · Entrance Gate', '01-1.jpg', 'Museum entrance and arrival point outside the red brick gateway.'],
  ['2', 'Area 2 · Front Courtyard', '02-2.jpg', 'Open transition area that introduces the museum route.'],
  ['3-ke-kanan', 'Area 3 · Turn Right', '03-3-ke-kanan.jpg', 'Right-side route from the early museum approach.'],
  ['3-ke-kiri', 'Area 3 · Turn Left', '04-3-ke-kiri.jpg', 'Left-side route from the early museum approach.'],
  ['4', 'Area 4 · Gallery Approach', '05-4.jpg', 'A connected path toward the exhibition rooms.'],
  ['4-ke-kanan', 'Area 4 · Right Route', '06-4-ke-kanan.jpg', 'A branch route for moving deeper through the museum.'],
  ['5', 'Area 5 · Interior Node', '07-5.jpg', 'Central interior route point for continuing the tour.'],
  ['5-ke-kanan-terus-lurus', 'Area 5 · Right then Straight', '08-5-ke-kanan-terus-lurus.jpg', 'Guided direction continuing through the museum route.'],
  ['5-masuk-tunanetra', 'Area 5 · Tunanetra Access', '09-5-masuk-tunanetra.jpg', 'Accessible route area connected to the museum experience.'],
  ['6-ke-kanan', 'Area 6 · Turn Right', '10-6-ke-kanan.jpg', 'Right route from the sixth scene point.'],
  ['6-ke-kiri', 'Area 6 · Turn Left', '11-6-ke-kiri.jpg', 'Left route from the sixth scene point.'],
  ['7', 'Area 7 · Collection Path', '12-7.jpg', 'A later path through the museum collection route.'],
  ['8-keluar', 'Area 8 · Exit Direction', '13-8-keluar.jpg', 'Exit-facing direction for route orientation.'],
  ['8-lurus', 'Area 8 · Straight Ahead', '14-8-lurus.jpg', 'Forward route toward the next museum space.'],
  ['9', 'Area 9 · Upper Route Base', '15-9.jpg', 'Route point near the transition toward upper areas.'],
  ['9-lurus-naik-tangga', 'Area 9 · Straight Up Stairs', '16-9-lurus-naik-tangga.jpg', 'Stair direction scene for continuing the tour upward.'],
  ['10', 'Area 10 · Gallery Stop', '17-10.jpg', 'A gallery stop in the Mpu Tantular route.'],
  ['10-ke-kiri', 'Area 10 · Turn Left', '18-10-ke-kiri.jpg', 'Left branch from the tenth scene.'],
  ['10-lurus', 'Area 10 · Straight Ahead', '19-10-lurus.jpg', 'Forward continuation from the tenth scene.'],
  ['11', 'Area 11 · Exhibition Route', '20-11.jpg', 'Exhibition route scene near the later sequence.'],
  ['11-lurus', 'Area 11 · Straight Ahead', '21-11-lurus.jpg', 'Forward route from the eleventh scene.'],
  ['12-naik-tangga', 'Area 12 · Up the Stairs', '22-12-naik-tangga.jpg', 'Stair route scene toward the final area.'],
  ['13', 'Area 13 · Final Stop', '23-13.jpg', 'Final captured point in the available Mpu Tantular panorama set.'],
] as const;

export const museums: Museum[] = sceneAssets.map(([id, highlight, file, description], index) => ({
  id: `mpu-${id}`,
  name: 'Museum Mpu Tantular',
  city: 'Sidoarjo',
  province: 'East Java',
  category: index === 0 ? 'Entrance' : index < 6 ? 'Route Orientation' : index < 16 ? 'Gallery Path' : 'Upper Gallery',
  description,
  highlight,
  panorama: `/panoramas/mpu-tantular/${file}`,
  image: `/images/mpu-tantular/${file}`,
  accent: ['bronze', 'sand', 'stone', 'forest'][index % 4],
}));

export const museumProfile = {
  name: 'Museum Mpu Tantular',
  location: 'Sidoarjo, East Java',
  summary: 'A focused 360° route through Museum Mpu Tantular using the panorama photographs supplied in the project assets.',
  sceneCount: museums.length,
};

export const audienceBenefits = [
  { title: 'Students', copy: 'Learn East Java history through spatial routes and visual context.' },
  { title: 'Travelers', copy: 'Preview Museum Mpu Tantular before visiting Sidoarjo.' },
  { title: 'Educators', copy: 'Use the 360 scenes as guided classroom prompts.' },
  { title: 'Culture Seekers', copy: 'Move through the museum route and follow heritage details at your own pace.' },
];

export const galleryItems = [
  { title: 'Entrance', copy: 'Begin outside the Museum Mpu Tantular gate.', image: museums[0].image },
  { title: 'Route Choices', copy: 'Follow left, right, straight, and stair directions from the captured scenes.', image: museums[3].image },
  { title: 'Accessible Path', copy: 'A dedicated route point marks the tunanetra access area.', image: museums[8].image },
  { title: 'Upper Areas', copy: 'Continue through later route points and stair transitions.', image: museums[21].image },
];
