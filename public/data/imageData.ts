export interface Klasifikasi{
    kingdom: string,
    divisi: string,
    kelas: string,
    ordo: string,
    famili: string,
    genus: string,
    spesies: string
}

export type Image = {
    src: string;
    alt: string;
    title: string;
    subtitle: string;
    description: string;
    klasifikasi: Klasifikasi;
    habitat: string,
    manfaat: string[],
    morfologi: string
}

export const images: Image[] = [
    {   src: '/images/ketapang.png', 
        alt: 'Ketapang', 
        title: 'Ketapang', 
        subtitle:'Terminalia catappa', 
        description: 'Ketapang tergolong dalam tumbuhan dikotil atau berkeping dua dan berakar tunggang bercabang.', 
        klasifikasi:
            { kingdom:'Plantae', 
              divisi:'Magnoliophyta', 
              kelas: 'Magnoliopsida',
              ordo: 'Myrtales', 
              famili: 'Combretaceae', 
              genus: 'Terminalia', 
              spesies: 'Terminalia catappa'
            },
        habitat: 'Pohon ketapang secara alami tumbuh dengan baik di daerah pesisir pantai. Namun, ketapang juga dikenal karena kemampuannya beradaptasi dengan mudah di lingkungan yang berbeda-beda.',
        manfaat: [   
            'Pohon Peneduh', 
            'Bahan Pewarna Alami', 
            'Membantu Menetralkan pH Air',
            'Material Bangunan',
            'Tanaman Hias',
            'Pengganti Kacang Almond',
            'Meredakan Peradangan',
            'Daun Mengandung Antioksidan'
        ],
        morfologi: 'Ketapang tergolong dalam tumbuhan dikotil atau berkeping dua dan berakar tunggang bercabang. Permukaan kulit batangnya memiliki alur atau sulcatus sehingga tekstur kulit batang kasar. Daun ketapang berbentuk menyerupai telur terbalik atau seperti jantung. Tekstur permukaan bagian atas licin. Sedangkan permukaannya bawah berambut halus. Tulang daun pohon ketapang menyirip. Daunnya berwarna hijau muda segar yang ketika musing gugur tiba, daun ketapang memerah atau menguning.'
    },
  ];