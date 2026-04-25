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
  ['1', 'Area 1 · Gerbang Masuk', '01-1.jpg', 'Titik kedatangan di luar gerbang merah Museum Mpu Tantular.'],
  ['2', 'Area 2 · Halaman Depan', '02-2.jpg', 'Area transisi terbuka yang memperkenalkan rute museum.'],
  ['3-ke-kanan', 'Area 3 · Belok Kanan', '03-3-ke-kanan.jpg', 'Rute sisi kanan dari area awal museum.'],
  ['3-ke-kiri', 'Area 3 · Belok Kiri', '04-3-ke-kiri.jpg', 'Rute sisi kiri dari area awal museum.'],
  ['4', 'Area 4 · Menuju Galeri', '05-4.jpg', 'Jalur penghubung menuju ruang-ruang pamer.'],
  ['4-ke-kanan', 'Area 4 · Rute Kanan', '06-4-ke-kanan.jpg', 'Cabang rute untuk bergerak lebih jauh ke dalam museum.'],
  ['5', 'Area 5 · Titik Interior', '07-5.jpg', 'Titik rute interior sebagai pusat lanjutan tur.'],
  ['5-ke-kanan-terus-lurus', 'Area 5 · Kanan Lalu Lurus', '08-5-ke-kanan-terus-lurus.jpg', 'Arah lanjutan untuk menyusuri rute museum.'],
  ['5-masuk-tunanetra', 'Area 5 · Akses Tunanetra', '09-5-masuk-tunanetra.jpg', 'Area aksesibel yang terhubung dengan pengalaman museum.'],
  ['6-ke-kanan', 'Area 6 · Belok Kanan', '10-6-ke-kanan.jpg', 'Rute kanan dari titik scene keenam.'],
  ['6-ke-kiri', 'Area 6 · Belok Kiri', '11-6-ke-kiri.jpg', 'Rute kiri dari titik scene keenam.'],
  ['7', 'Area 7 · Jalur Koleksi', '12-7.jpg', 'Jalur lanjutan di dalam rute koleksi museum.'],
  ['8-keluar', 'Area 8 · Arah Keluar', '13-8-keluar.jpg', 'Arah keluar untuk membantu orientasi rute.'],
  ['8-lurus', 'Area 8 · Lurus', '14-8-lurus.jpg', 'Rute maju menuju ruang museum berikutnya.'],
  ['9', 'Area 9 · Dasar Rute Atas', '15-9.jpg', 'Titik rute dekat transisi menuju area atas.'],
  ['9-lurus-naik-tangga', 'Area 9 · Lurus Naik Tangga', '16-9-lurus-naik-tangga.jpg', 'Scene arah tangga untuk melanjutkan tur ke atas.'],
  ['10', 'Area 10 · Titik Galeri', '17-10.jpg', 'Titik galeri dalam rute Museum Mpu Tantular.'],
  ['10-ke-kiri', 'Area 10 · Belok Kiri', '18-10-ke-kiri.jpg', 'Cabang kiri dari scene kesepuluh.'],
  ['10-lurus', 'Area 10 · Lurus', '19-10-lurus.jpg', 'Lanjutan rute dari scene kesepuluh.'],
  ['11', 'Area 11 · Rute Pameran', '20-11.jpg', 'Scene rute pameran pada bagian akhir urutan.'],
  ['11-lurus', 'Area 11 · Lurus', '21-11-lurus.jpg', 'Rute maju dari scene kesebelas.'],
  ['12-naik-tangga', 'Area 12 · Naik Tangga', '22-12-naik-tangga.jpg', 'Scene tangga menuju area akhir.'],
  ['13', 'Area 13 · Titik Akhir', '23-13.jpg', 'Titik terakhir dari kumpulan panorama Mpu Tantular yang tersedia.'],
] as const;

export const museums: Museum[] = sceneAssets.map(([id, highlight, file, description], index) => ({
  id: `mpu-${id}`,
  name: 'Museum Mpu Tantular',
  city: 'Sidoarjo',
  province: 'Jawa Timur',
  category: index === 0 ? 'Gerbang Masuk' : index < 6 ? 'Orientasi Rute' : index < 16 ? 'Jalur Galeri' : 'Galeri Atas',
  description,
  highlight,
  panorama: `/panoramas/mpu-tantular/${file}`,
  image: `/images/mpu-tantular/${file}`,
  accent: ['bronze', 'sand', 'stone', 'forest'][index % 4],
}));

export const museumProfile = {
  name: 'Museum Mpu Tantular',
  location: 'Sidoarjo, Jawa Timur',
  summary: 'Rute 360° terfokus melalui Museum Mpu Tantular menggunakan foto panorama yang disediakan dalam aset proyek.',
  sceneCount: museums.length,
};

export const audienceBenefits = [
  { title: 'Pelajar', copy: 'Belajar sejarah Jawa Timur melalui rute visual dan konteks ruang.' },
  { title: 'Wisatawan', copy: 'Melihat pratinjau Museum Mpu Tantular sebelum berkunjung ke Sidoarjo.' },
  { title: 'Pendidik', copy: 'Menggunakan scene 360 sebagai bahan pembelajaran dan diskusi kelas.' },
  { title: 'Pencinta Budaya', copy: 'Menyusuri rute museum dan memperhatikan detail warisan budaya dengan tempo sendiri.' },
];

export const galleryItems = [
  { title: 'Gerbang Masuk', copy: 'Mulai dari area luar gerbang Museum Mpu Tantular.', image: museums[0].image },
  { title: 'Pilihan Rute', copy: 'Ikuti arah kiri, kanan, lurus, dan tangga dari scene yang tersedia.', image: museums[3].image },
  { title: 'Akses Tunanetra', copy: 'Salah satu titik rute menandai area akses tunanetra.', image: museums[8].image },
  { title: 'Area Atas', copy: 'Lanjutkan perjalanan melalui titik akhir dan transisi tangga.', image: museums[21].image },
];
