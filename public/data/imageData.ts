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
    // Ketapang
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

    // Pucuk Merah
    {   src: '/images/pucukMerah.png', 
        alt: 'Pucuk Merah', 
        title: 'Pucuk Merah', 
        subtitle:'Syzygium myrtifolium', 
        description: 'Pucuk Merah memiliki akar tunggang yang merambat dan terus membesar.', 
        klasifikasi:
            { kingdom:'Plantae', 
              divisi:'Magnoliophyta', 
              kelas: 'Magnoliopsida',
              ordo: 'Myrtales', 
              famili: 'Myrtaceae', 
              genus: 'Syzygium', 
              spesies: 'Syzygium myrtifolium'
            },
        habitat: 'Suhu udara yang ideal yaitu 28-36°C dan 24-30°C waktu malam. Agar tanaman ini tumbuh dengan indah, diperlukan cahaya matahari yang cukup agar warna tunasnya tetap berwarna merah dan bentuk tajuk tanaman tetap terjaga.',
        manfaat: [   
            'Tanaman Hias',
            'Potensi Bahan Kosmetik dan Parfum',
            'Bahan Pestisida Alami',
            'Penyerapan karbon',
            'Daun Mengandung Antioksidan',
            'Pakan Lebah Madu'
        ],
        morfologi: 'Pucuk Merah memiliki akar tunggang yang merambat dan terus membesar. Akarnya berbentuk bulat dan berwarna coklat. Batang tanaman Pucuk Merah memiliki bentuk yang bulat, berkayu, dan mempunyai kambium didalamnya. Tinggi dari batang pucuk merah ini bisa mencapai ketinggian 5 meter. Bentuk dari daun Pucuk Merah ini berbentuk oval dengan lancip pada ujung daunnya. Daun pucuk merah yang masih muda akan berwarna merah dan seiring waktu berubah menjadi hijau.'
    },

    // Bokor
    {   src: '/images/bokor.JPG', 
        alt: 'Bokor', 
        title: 'Bokor', 
        subtitle:'Hydrangea macrophylla', 
        description: 'Hydrangea tumbuh subur di daerah yang sejuk di bawah naungan.', 
        klasifikasi:
            { kingdom:'Plantae', 
              divisi:'Magnoliophyta', 
              kelas: 'Magnoliopsida',
              ordo: 'Rosales', 
              famili: 'Hydrangeaceae', 
              genus: 'Hydrangea', 
              spesies: 'Hydrangea macrophylla'
            },
        habitat: 'Hydrangea tumbuh subur di daerah yang sejuk di bawah naungan. Namun, tanaman ini masih bisa tumbuh dengan baik di daerah tropis. Beberapa spesies cukup tahan terhadap panas, cuaca hangat, dan iklim yang kering.',
        manfaat: [   
            'Daun dan akar hydrangea berpotensi sebagai obat.',
            'Orang Budha menggunakan daunnya untuk menyeduh teh manis.', 
            'Tanaman Hias'
        ],
        morfologi: 'Tanaman semak dengan tinggi 1 sampai 3 meter, tetapi ada juga yang merambat di tanaman lain hingga mencapai ketinggian 30 meter. Daun berbentuk bulat telur, tepi beringgit, warna hijau muda berkilau. Perbungaan majemuk, berbentuk malai, keluar dari ujung tangkai, membentuk rangkaian membulat seperti sanggul, di daerah beriklim sejuk mekar di awal musim semi hingga akhir musim gugur.'
    },

    // Angsana
    {   src: '/images/angsana.png', 
        alt: 'Angsana', 
        title: 'Angsana', 
        subtitle:'Pterocarpus indicus', 
        description: 'Angsana menyukai lingkungan hutan hujan tropika.', 
        klasifikasi:
            { kingdom:'Plantae', 
              divisi:'Spermatophyta', 
              kelas: 'Dicotyledonae',
              ordo: 'Resales', 
              famili: 'Fabaceae', 
              genus: 'Pterocarpus', 
              spesies: 'Pterocarpus indicus'
            },
        habitat: 'Angsana menyukai lingkungan hutan hujan tropika. Di Jawa, banyak ditemukan tumbuh tersebar di hutan-hutan hingga ketinggian 500 mdpl. Di Kalimantan didapati tumbuh di rawa pantai, dan sepanjang tepi sungai.',
        manfaat: [   
            'Kayu Material Bangunan',
            'Bahan Baku Alat Musik',
            'Bahan Baku Dekorasi',
            'Getah Untuk Obat',
            'Tanaman Pelindung',
            'Tanaman Peneduh',
            'Getah Bahan Pewarna Merah Kino'
        ],
        morfologi: 'Tinggi dapat mencapai 40 meter dan gemang mencapai 350cm. Batang sering beralur atau berbonggol. Bunga berkumpul dalam malai di ketiak, 9–15 cm panjangnya. Buah polong bundar pipih. Daun majemuk menyirip gasal, panjang 12–30 cm. Anak daun 5-13, berseling pada poros daun, bundar telur hingga agak jorong, 6-10 × 4–5 cm, dengan pangkal bundar dan ujung meruncing, hijau terang, gundul, dan tipis.'
    },

    // Beringin
    {   src: '/images/beringin.png', 
        alt: 'Beringin', 
        title: 'Beringin', 
        subtitle:'Ficus benjamina', 
        description: 'Banyak ditemukan di hutan tropis sekitar 600 mdpl, hutan dataran rendah hingga tinggi, bahkan di daerah terbuka.', 
        klasifikasi:
            { kingdom:'Plantae', 
              divisi:'Magnoliophyta', 
              kelas: 'Magnoliopsida',
              ordo: 'Urticales', 
              famili: 'Moraceae', 
              genus: 'Ficus', 
              spesies: 'Ficus benjamina'
            },
        habitat: 'Banyak ditemukan di hutan tropis sekitar 600 mdpl, hutan dataran rendah hingga tinggi, bahkan di daerah terbuka. Habitat Beringin sendiri memang umumnya dekat dengan sumber air seperti mata air, telaga, danau, dan sebagainya.',
        manfaat: [   
            'Penghasil Oksigen yang baik',
            'Pohon Pelindung',
            'Pohon Peneduh',
            'Menyimpan Cadangan Air Tanah',
            'Daun dan Akar Berpotensi Obat',
            'Pohon Dekorasi Lanskap',
            'Tanaman Bonsai'
        ],
        morfologi: 'Beringin memiliki batang tegak, bulat, bentuk silindris, percabangan simpodial, permukaan kasar. berakar tunggang dan berwarna coklat dan saat dewasa menumbuhkan akar gantung pada batang yang menjadi ciri khas. Daun berbentuk oval, daun tunggal, bersilang berhadapan, lonjong, tepi rata, ujung runcing, pangkal tumpul, panjang 3-6 cm, lebar 2-4 cm, bertangkai pendek, pertulangan menyirip, berwarna hijau. Bunga berjenis tunggal dan bentuk kelopak seperti corong dengan warna hijau. Mahkota bunga beringin berbentuk bulat yang berwarna kuning kehijauan'
    },

    // Trembesi
    {   src: '/images/trembesi.png', 
        alt: 'Trembesi', 
        title: 'Trembesi', 
        subtitle:'Samanea saman', 
        description: 'Tanaman ini mempunyai akar yang kuat dan mudah untuk menjalar ke dalam tanah.', 
        klasifikasi:
            { kingdom:'Plantae', 
              divisi:'Magnoliophyta', 
              kelas: 'Magnoliopsida',
              ordo: 'Fabales', 
              famili: 'Fabaceae', 
              genus: 'Samanea', 
              spesies: 'Samanea saman'
            },
        habitat: 'Trembesi dapat tumbuh pada dataran rendah maupun tinggi hingga ketinggian 1.300 mdpl. Tingkat pH tanah yang cocok sekitar 4,7 – 8,5 dengan perairan yang baik. Lebih jauh, habitat trembesi meliputi padang rumput kering, semak-semak pesisir, dan sabana rerumputan.',
        manfaat: [   
            'Pencadang Air Tanah',
            'Kayu Material Bangunan',
            'Biji dan Daun Berpotensi Obat',
            'Penyerap Karbon yang Baik',
            'Tanaman Peneduh',
            'Penghasil Oksigen yang Baik',
            'Penyerap Polutan di Udara'
        ],
        morfologi: 'Tanaman ini mempunyai akar yang kuat dan mudah untuk menjalar ke dalam tanah. Bentuk batang trembesi tidak beraturan. Warna kulit batang cenderung coklat kehitaman ketika berumur tua. Permukaan kulit kasar, belarur dan nampak seperti terkelupas. Daun trembesi majemuk dan pangkal tangkai berukuran 7–15 cm. Saat mendung, gelap atau malam, daun dari tanaman ini akan menutup atau berlipat. Bunga berwarna putih disertai bercak merah muda atau merah kekuningan dan panjangnya sekitar 10 cm.'
    },

    // Tusam
    {   src: '/images/tusam.jpg', 
        alt: 'Tusam', 
        title: 'Tusam', 
        subtitle:'Pinus sp. (caribaea)', 
        description: 'Tusam dapat tumbuh tinggi mencapai 40 meter.', 
        klasifikasi:
            { kingdom:'Plantae', 
              divisi:'Spermatophyta', 
              kelas: 'Pinopsida',
              ordo: 'Pinales', 
              famili: 'Pinaceae', 
              genus: 'Pinus', 
              spesies: 'Pinus sp. (caribaea)'
            },
        habitat: 'Kondisi tanah yang cocok untuk tusam, yaitu tanah asam, berpasir, dan memiliki serapan air yang baik. Kawasan hutan tersebut dapat ditemukan di daerah dataran tinggi dan bersuhu 18⁰ C hingga -3⁰ C. Tusam sangat mudah beradapatasi, bahkan terhadap perubahan cuaca ekstrim.',
        manfaat: [   
            'Kayu Material Furnitur',
            'Getah : Gondorukem dan Terpentin',
            'Jenis Pilihan Reboisasi',
            'Daun : Antioksidan dan Vitamin C',
            'Tanaman Peneduh'
        ],
        morfologi: 'Tusam dapat tumbuh tinggi mencapai 40 meter. Batang tusam silinder kokoh, keras, tegak lurus dan bawahnya cenderung membesar, serta memiliki guratan dalam dengan tekstur putaran yang teratur. Akar tusam adalah akar tunggang yang juga memiliki banyak cabang. Daun tusam berbentuk jarum dan termasuk majemuk 2-5 daun per tangkai. Bunga tusam disebut dengan strobilus, yaitu berbentuk silindris (jantan) dan lonjong-kerucut (betina) berwarna coklat dan keras. Bentuk biji pipih bulat hingga oval.'
    },

    // Kecrutan
    {   src: '/images/kecrutan.png', 
        alt: 'Kecrutan', 
        title: 'Kecrutan', 
        subtitle:'Spathodea campanulata', 
        description: 'Tanaman ini secara alami tumbuh di hutan, pinggir sungai, dan semak belukar, hingga ketinggian 2.000 m dpl, pH 5-7,5.', 
        klasifikasi:
            { kingdom:'Plantae', 
              divisi:'Magnoliophyta', 
              kelas: 'Magnoliopsida',
              ordo: 'Scrophulariales', 
              famili: 'Bignoniaceae', 
              genus: 'Spathodea', 
              spesies: 'Spathodea campanulata'
            },
        habitat: 'Tanaman ini secara alami tumbuh di hutan, pinggir sungai, dan semak belukar, hingga ketinggian 2.000 m dpl, pH 5-7,5. Tidak tahan angin kencang dan naungan, membutuhkan cahaya matahari penuh untuk pertumbuhannya. Suhu berkisar 27-30 °C pada siang hari.',
        manfaat: [   
            'Pohon Peneduh', 
            'Jenis Pilihan Reboisasi', 
            'Tanaman Pagar',
            'Tanaman Hias',
            'Pewarna Alami',
            'Bunga Berpotensi Obat'
        ],
        morfologi: 'Pohon dengan tinggi 10-35 m. Daun majemuk menyirip dengan jumlah anak daun 5-7 buah, meruncing dibagian ujung, Berwarna hijau tua dibagian adaksial dan hijau muda dibagian abaksial. Kulit kayu retak. Batang berwarna abu-abu cokelat saat muda dan berubah menjadi abu-abu kehitaman saat menua.. Bunga besar majemuk berwarna merah atau oranye dengan mahkota berbentuk lonceng. Buah berbentuk polong berwarna coklat dan memiliki katup yang berbentuk perahu.'
    },
  ];