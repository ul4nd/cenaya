/**
 * CENAYA - Konfigurasi Terpusat (Centralized Configuration)
 * Mudah diedit untuk mengganti nomor WhatsApp, tautan toko, data produk, variasi warna, dan FAQ.
 */

const CENAYA_CONFIG = {
  // Informasi Kontak & WhatsApp Resmi
  contact: {
    whatsappNumber: "+62 812-3456-7890",
    whatsappDisplay: "0812-3456-7890",
    whatsappRaw: "6281234567890",
    instagram: "https://instagram.com/cenayahijab",
    instagramHandle: "@cenayahijab",
    tiktok: "https://www.tiktok.com/@cenayahijab",
    tiktokHandle: "@cenayahijab",
    email: "halo@cenayahijab.com"
  },

  // Tautan Eksternal Platform Belanja (Tokopedia sudah dihilangkan sesuai permintaan)
  shoppingLinks: {
    main: "https://your-shopping-platform.com",
    collection: "https://your-shopping-platform.com/collection",
    shopee: "https://shopee.co.id/cenaya.official",
    tiktok: "https://www.tiktok.com/@cenayahijab",
    whatsapp: "https://wa.me/6281234567890"
  },

  // Brand Info (Brand baru rilis - fokus orisinalitas & material premium)
  brand: {
    name: "CENAYA",
    tagline: "Penuh Warna. Ceria. Dirimu.",
    description: "Koleksi perdana hijab ceria & modern karya desainer muda Indonesia. Dibuat dengan material Viscose & Ceruty premium yang adem, mudah dibentuk, dan manis untuk penampilan sehari-hari.",
    heroTitle: "Warnai Gayamu bersama CENAYA",
    heroSubtitle: "Cheerful hijabs designed for young women who want to express their style with confidence."
  },

  // Kategori Produk
  categories: [
    {
      id: "all",
      name: "Semua Koleksi",
      badge: "Rilisan Perdana"
    },
    {
      id: "summer",
      name: "Summer",
      title: "Cenaya Summer",
      desc: "Sentuhan motif bunga manis & feminin yang mencerahkan harimu.",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
      badge: "Koleksi Perdana"
    },
    {
      id: "colorful",
      name: "Colorful",
      title: "CENAYA Colorful",
      desc: "Paduan warna ceria dan berani untuk pancarkan energi positifmu.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
      badge: "Playful & Vibrant"
    },
    {
      id: "pastel",
      name: "Pastel",
      title: "CENAYA Pastel",
      desc: "Nuansa lembut yang manis, anggun, dan aesthetic di setiap momen.",
      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=800&q=80",
      badge: "Soft & Sweet"
    },
    {
      id: "everyday",
      name: "Everyday",
      title: "CENAYA Everyday",
      desc: "Simpel, versatile, dan super nyaman untuk rutinitas kuliah & hangout.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      badge: "Nyaman Seharian"
    }
  ],

  // Data Produk Lengkap dengan Variasi Warna
  products: [
    {
      id: "cenaya-bloom",
      name: "Cenaya Summer",
      category: "summer",
      shortDesc: "Motif summer ceria dengan sentuhan warna kelopak manis dan segar.",
      fullDesc: "Cenaya Summer hadir dengan kombinasi motif kelopak bunga ceria yang memberikan nuansa youthful dan memancarkan pesona anggun. Terbuat dari Viscose Premium grade A yang sangat halus, adem saat bersentuhan dengan kulit, jatuh lembut, serta tegak sempurna di dahi.",
      material: "Viscose Premium (115 x 115 cm)",
      features: ["Mengikuti betuk wajah dan bahan tanpa kusut", "Adem & menyerap keringat", "Jahitan tepi jahit rapi butik", "Motif eksklusif tidak pasaran"],
      price: "Rp89.000",
      priceNum: 89000,
      badge: "Rilisan Perdana",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
      variants: [
        { name: "Soft Blossom", hex: "#FFB4D3" },
        { name: "Peach Coral", hex: "#FFC5AF" },
        { name: "Lilac Petal", hex: "#E8C5FF" },
        { name: "Creamy Vanilla", hex: "#FFF1DC" }
      ]
    },
    {
      id: "cenaya-candy",
      name: "CENAYA Candy",
      category: "colorful",
      shortDesc: "Paduan palet warna ceria yang lembut, playful, dan menyenangkan.",
      fullDesc: "Ekspresikan keceriaanmu bersama CENAYA Candy! Menggunakan kain Ceruty Baby Doll impor yang flowy dan bertekstur pasir halus, memberikan efek layering anggun saat distyling. Cocok untuk kuliah, nongkrong santai, maupun konten OOTD aesthetic.",
      material: "Ceruty Baby Doll Impor (115 x 115 cm)",
      features: ["Jatuh anggun & flowy", "Ringan & tidak bikin gerah", "Finishing jahit tepi berkualitas", "Warna tahan lama tidak mudah luntur"],
      price: "Rp95.000",
      priceNum: 95000,
      badge: "Edisi Khusus",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      variants: [
        { name: "Candy Pink", hex: "#FF8EBF" },
        { name: "Minty Fresh", hex: "#BAF2E9" },
        { name: "Lemon Sorbet", hex: "#FFF0A5" },
        { name: "Sky Pastel", hex: "#BEE1E6" }
      ]
    },
    {
      id: "cenaya-blossom",
      name: "CENAYA Blossom",
      category: "summer",
      shortDesc: "Motif kelopak mekar feminin bernuansa elegan dan anggun.",
      fullDesc: "Bagi kamu yang menyukai tampilan feminin yang lebih anggun dan kalem, CENAYA Blossom adalah pilihan sempurna. Pola bunganya dilukis dengan harmoni warna lembut di atas serat Viscose Premium sejuk yang sangat mudah diatur.",
      material: "Viscose Premium (115 x 115 cm)",
      features: ["Sangat lembut & tidak menerawang", "Mudah dibentuk berbagai gaya hijab", "Nyaman dipakai lebih dari 12 jam", "Desain eksklusif artistik"],
      price: "Rp89.000",
      priceNum: 89000,
      badge: "Koleksi Baru",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
      variants: [
        { name: "Rose Whisper", hex: "#FF70A6" },
        { name: "Dusty Mauve", hex: "#D4A5B8" },
        { name: "Blush Champagne", hex: "#FFE5EC" },
        { name: "Warm Ivory", hex: "#FAF3DD" }
      ]
    },
    {
      id: "cenaya-pastel-pop",
      name: "CENAYA Pastel Pop",
      category: "pastel",
      shortDesc: "Pola gradasi warna pastel manis yang menawan dan aesthetic.",
      fullDesc: "CENAYA Pastel Pop membawa atmosfer ceria dengan gradasi warna pastel modern. Menggunakan Ceruty Baby Doll yang breathable dan tidak pekak di telinga, membuatmu tetap nyaman dan percaya diri sepanjang hari.",
      material: "Ceruty Baby Doll (115 x 115 cm)",
      features: ["Gradasi warna cerah & estetik", "Breathable & sejuk", "Kain lemas mudah distyle", "Cocok dipadukan dengan baju polos"],
      price: "Rp95.000",
      priceNum: 95000,
      badge: "Favorit Ceria",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      variants: [
        { name: "Pastel Pop Pink", hex: "#FFB4D3" },
        { name: "Melon Peach", hex: "#FFD6BA" },
        { name: "Baby Lavender", hex: "#E7C6FF" },
        { name: "Matcha Mist", hex: "#C8E6C9" }
      ]
    },
    {
      id: "cenaya-daisy-dream",
      name: "CENAYA Daisy Dream",
      category: "everyday",
      shortDesc: "Aksen bunga daisy mungil dengan warna dasar ivory yang menawan.",
      fullDesc: "Koleksi simpel yang siap menemanimu dari kelas pagi hingga sore hari. Berbahan Voal Ultrafine yang lembut, tegak rapi seketika, dan tidak perlu sering diperbaiki seharian.",
      material: "Voal Ultrafine (115 x 115 cm)",
      features: ["Anti letoy & tegak paripurna", "Serat rapat tidak terawang", "Bahan ringan tidak gerah", "Finishing jahit tepi super rapi"],
      price: "Rp85.000",
      priceNum: 85000,
      badge: "Harian Praktis",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      variants: [
        { name: "Daisy Ivory", hex: "#FFF9EC" },
        { name: "Soft Sage", hex: "#D8E2DC" },
        { name: "Blush Nude", hex: "#FFE5EC" }
      ]
    },
    {
      id: "cenaya-rainbow-mellow",
      name: "CENAYA Rainbow Mellow",
      category: "colorful",
      shortDesc: "Sapuan warna ceria harmonis yang memikat hati.",
      fullDesc: "Nuansa spektrum warna pastel pelangi yang lembut dan tidak mencolok. Sempurna untuk kamu yang ingin tampil unik dan beda dari yang lain.",
      material: "Ceruty Baby Doll (115 x 115 cm)",
      features: ["Efek jatuh yang flowy", "Bahan bertekstur nyaman", "Koleksi limited batch perdana", "Pilihan warna cheerful chic"],
      price: "Rp95.000",
      priceNum: 95000,
      badge: "Edisi Terbatas",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
      variants: [
        { name: "Sunset Mellow", hex: "#FFB4A2" },
        { name: "Sweet Berry", hex: "#FF85A1" },
        { name: "Cloud Rainbow", hex: "#E8DFF5" }
      ]
    },
    {
      id: "cenaya-rosy-spark",
      name: "CENAYA Rosy Spark",
      category: "summer",
      shortDesc: "Sentuhan bunga mawar ceria dengan aksen pink merona.",
      fullDesc: "Beri sentuhan kemewahan feminin pada tampilan harianmu dengan CENAYA Rosy Spark. Pola kelopak mawar abstrak yang fresh dipadukan dengan kenyamanan Viscose pilihan.",
      material: "Viscose Premium (115 x 115 cm)",
      features: ["Aksen warna cerah memikat", "Sejuk & adem saat berangin", "Tidak licin di rambut", "Jahitan rapi khas CENAYA"],
      price: "Rp89.000",
      priceNum: 89000,
      badge: "Fresh Release",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      variants: [
        { name: "Spark Pink", hex: "#FF006A" },
        { name: "Rosy Blush", hex: "#FFAFCC" },
        { name: "Petal Glow", hex: "#FFC2D1" }
      ]
    },
    {
      id: "cenaya-breeze-soft",
      name: "CENAYA Breeze Soft",
      category: "everyday",
      shortDesc: "Hijab harian super adem dengan jahitan tepi rapi khas CENAYA.",
      fullDesc: "Definisi kenyamanan hakiki untuk mahasiswi aktif. Voal Ultrafine yang lembut, sejuk, dan tidak pekak di telinga, siap menemani aktivitas padatmu dari pagi hingga malam.",
      material: "Voal Ultrafine (115 x 115 cm)",
      features: ["Sangat adem & ringan", "Gampang disetrika & tidak mudah kusut", "Tegak alami di kening", "Warna versatile untuk segala baju"],
      price: "Rp85.000",
      priceNum: 85000,
      badge: "Wajib Punya",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      variants: [
        { name: "Powder Pink", hex: "#FFE3EC" },
        { name: "Breeze Sky", hex: "#E8F0FE" },
        { name: "Sandy Cream", hex: "#F5EBE0" }
      ]
    }
  ],

  // Interactive Product Showcase Points
  showcasePoints: [
    {
      id: "comfortable",
      title: "Nyaman Dipakai",
      desc: "Material lembut, flowy, dan sejuk untuk aktivitas aktif seharian.",
      icon: "feather",
      position: { top: "25%", left: "20%" }
    },
    {
      id: "patterns",
      title: "Motif Ceria",
      desc: "Pilihan motif warna-warni yang cerah dirancang untuk mengeksresikan gayamu.",
      icon: "sparkles",
      position: { top: "28%", right: "18%" }
    },
    {
      id: "styling",
      title: "Mudah Dibentuk",
      desc: "Menyesuaikan wajah dan fleksibel dipadukan dengan berbagai outfit harian maupun hangout.",
      icon: "smile",
      position: { bottom: "25%", left: "18%" }
    },
    {
      id: "affordable",
      title: "Harga Terjangkau",
      desc: "Desain hijab kekinian berkualitas premium dengan harga yang sangat ramah kantong.",
      icon: "tag",
      position: { bottom: "22%", right: "20%" }
    }
  ],

  // 4 Nilai Keunggulan / Why CENAYA
  whyCenaya: [
    {
      number: "01",
      title: "Warna Ceria & Menawan",
      desc: "Membawa lebih banyak warna dan energi positif ke dalam gaya harianmu agar selalu tampil ceria dan memukau.",
      iconSvg: "palette"
    },
    {
      number: "02",
      title: "Mengutamakan Kenyamanan",
      desc: "Material pilihan berkualitas (Viscose & Ceruty) yang adem, lembut, dan tidak mudah kusut.",
      iconSvg: "heart"
    },
    {
      number: "03",
      title: "Motif Unik & Orisinal",
      desc: "Koleksi motif handmade-inspired eksklusif yang fresh, trendi, dan pastinya tidak pasaran.",
      iconSvg: "star"
    },
    {
      number: "04",
      title: "Gaya Modis & Harga Terjangkau",
      desc: "Tampil kekinian dan penuh percaya diri tanpa harus mengeluarkan budget yang mahal.",
      iconSvg: "shopping-bag"
    }
  ],

  // Lookbook / Style Inspiration Data
  lookbook: [
    {
      id: "look-1",
      title: "Campus Casual Vibes",
      productName: "Cenaya Summer",
      desc: "Padukan Cenaya Summer dengan knit cardigan pastel dan tote bag canvas untuk penampilan ngampus yang manis, rapi, dan santai.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      tag: "Kuliah & Hangout"
    },
    {
      id: "look-2",
      title: "Weekend Cafe Hopping",
      productName: "CENAYA Candy",
      desc: "Tampil playful dan aesthetic saat nongkrong di cafe favorit dengan hijab CENAYA Candy yang dipadukan bersama blazer warna mint.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      tag: "Cafe Aesthetic"
    },
    {
      id: "look-3",
      title: "Sunny Picnic Dream",
      productName: "CENAYA Blossom",
      desc: "Kombinasi feminin antara hijab CENAYA Blossom dengan flowy white midi dress untuk momen foto estetik di taman terbuka.",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
      tag: "Girly & Soft"
    },
    {
      id: "look-4",
      title: "Chic Seminar & Presentation",
      productName: "CENAYA Pastel Pop",
      desc: "Tampil percaya diri saat presentasi tugas kuliah dengan hijab bertekstur rapi dan kemeja oversized warna broken white.",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      tag: "Semi Formal"
    }
  ],

  // Pertanyaan Umum / FAQ Accordion Data
  faqs: [
    {
      question: "Bahan apa yang digunakan hijab Cenaya?",
      answer: "Cenaya menggunakan material pilihan berkualitas seperti Viscose Premium dan Ceruty Baby Doll yang lembut, ringan, flowy, dan nyaman untuk pemakaian sehari-hari."
    },
    {
      question: "Apa yang membuat Cenaya berbeda?",
      answer: "Cenaya berfokus pada desain hijab yang ceria, penuh warna, dan kontemporer khusus untuk perempuan muda yang ingin tampil modis, berjiwa muda, dan percaya diri dengan motif orisinal yang fresh."
    },
    {
      question: "Di mana saya bisa membeli produk Cenaya?",
      answer: "Sebagai brand baru yang baru rilis, kamu bisa memesan produk resmi Cenaya melalui Shopee, TikTok Shop, serta pemesanan cepat via WhatsApp resmi kami."
    },
    {
      question: "Apakah saya bisa melihat seluruh koleksi lengkapnya?",
      answer: "Tentu saja! Klik tombol 'Lihat Produk' pada setiap katalog untuk melihat detail bahan, ukuran, dan pilihan variasi warna yang tersedia."
    }
  ]
};

// Export ke window agar mudah diakses di script lain
if (typeof window !== "undefined") {
  window.CENAYA_CONFIG = CENAYA_CONFIG;
}
