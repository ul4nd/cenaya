/**
 * CENAYA - Konfigurasi Terpusat (Centralized Configuration)
 * Mudah diedit untuk mengganti nomor WhatsApp, tautan toko, data produk, variasi warna, dan FAQ.
 */

const CENAYA_CONFIG = {
  // Informasi Kontak & WhatsApp Resmi
  contact: {
    whatsappNumber: "+62 896-6477-9300",
    whatsappDisplay: "0896-6477-9300",
    whatsappRaw: "6289664779300",
    instagram: "https://instagram.com/cenaya_id",
    instagramHandle: "@cenaya_id",
    tiktok: "https://www.tiktok.com/@cenaya_id",
    tiktokHandle: "@cenaya_id",
    email: "cenaya.id@gmail.com"
  },

  // Tautan Eksternal Platform Belanja (Tokopedia sudah dihilangkan sesuai permintaan)
  shoppingLinks: {
    main: "https://your-shopping-platform.com",
    collection: "https://your-shopping-platform.com/collection",
    shopee: "https://shopee.co.id/cenaya_id",
    tiktok: "https://www.tiktok.com/@cenaya_id",
    whatsapp: "https://wa.me/6289664779300?text=Halo%20Mince%20Admin%20CENAYA!%20Saya%20ingin%20belanja%20koleksi%20hijab%20Cenaya."
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
      image: "assets/images/Koleksi Summer.png",
      badge: "Series 01"
    },
    {
      id: "autumn",
      name: "Autumn",
      title: "CENAYA Autumn",
      desc: "Paduan palet hangat musim gugur yang anggun dan berkarakter.",
      image: "assets/images/Koleksi Autumn.png",
      badge: "Series 02"
    },
    // {
    //   id: "renda-pastel",
    //   name: "Renda Pastel",
    //   title: "CENAYA Renda Pastel",
    //   desc: "Pola renda pastel manis yang menawan, lembut, dan aesthetic.",
    //   image: "assets/images/Koleksi Renda Pastel.png",
    //   badge: "Series 03"
    // },
    // {
    //   id: "renda-moody",
    //   name: "Renda Moody",
    //   title: "CENAYA Renda Moody",
    //   desc: "Sentuhan motif lace elegan yang simpel dan nyaman untuk sehari-hari.",
    //   image: "assets/images/Koleksi Renda Moody.png",
    //   badge: "Series 04"
    // }
  ],

  // Data Produk Lengkap dengan Variasi Warna
  products: [
    // --- 1. 4 KARTU KOLEKSI UTAMA (Tampil di Opsi "Semua Koleksi", Total 6 Foto: 1 Foto Utama + 5 Detail Warna) ---
    {
      id: "cenaya-series-summer",
      name: "Cenaya Summer Series",
      category: "all",
      isMainSeries: true,
      shortDesc: "Motif kelopak bunga ceria khas musim panas dengan 5 variasi warna manis.",
      fullDesc: "Cenaya Summer hadir dengan kombinasi motif kelopak bunga ceria yang memberikan nuansa youthful dan memancarkan pesona ceria. Terbuat dari bahan Ceruty yang sangat halus, adem, flowy, serta mengikuti bentuk wajah dengan 5 pilihan warna spesial (Sunny, Oreny, Lillywayly, Ocean, Breeze).",
      material: "Ceruty (180 x 70 cm)",
      features: ["Mengikuti bentuk wajah dan tidak mudah kusut", "Adem & menyerap keringat", "Jahitan tepi jahit rapi", "Motif Orisinal & 5 Pilihan Warna"],
      price: "Rp125.000",
      priceNum: 125000,
      badge: "Series 01",
      image: "assets/images/Koleksi Summer.png",
      variants: [
        { name: "Sunny", hex: "#FDF9BC", image: "assets/images/katalog/summer_Sunny.png" },
        { name: "Oreny", hex: "#FF9A49", image: "assets/images/katalog/summer_Oreny.png" },
        { name: "Lillywayly", hex: "#FDAEC8", image: "assets/images/katalog/summer_Lillywayly.png" },
        { name: "Ocean", hex: "#47BEFF", image: "assets/images/katalog/summer_Ocean.png" },
        { name: "Breeze", hex: "#95FFF8", image: "assets/images/katalog/summer_Breeze.png" }
      ]
    },
    {
      id: "cenaya-series-autumn",
      name: "CENAYA Autumn Series",
      category: "all",
      isMainSeries: true,
      shortDesc: "Paduan palet warna hangat musim gugur yang anggun dan berkarakter.",
      fullDesc: "Ekspresikan pesonamu bersama CENAYA Autumn Series! Menggunakan kain Viscose & Ceruty premium yang flowy dan bertekstur halus, memberikan efek layering anggun saat distyling dengan 5 pilihan warna earth-tone hangat (Ranumi, Truffle, Sienna, Maple, Amber).",
      material: "Ceruty (180 x 75 cm)",
      features: ["Jatuh anggun & flowy", "Ringan & tidak bikin gerah", "Finishing tepi jahit berkualitas", "5 Warna Earth-tone Eksklusif"],
      price: "Rp125.000",
      priceNum: 125000,
      badge: "Series 02",
      image: "assets/images/Koleksi Autumn.png",
      variants: [
        { name: "Ranumi", hex: "#70383E", image: "assets/images/katalog/autumn_Ranumi.png" },
        { name: "Truffle", hex: "#735041", image: "assets/images/katalog/autumn_Truffle.png" },
        { name: "Sienna", hex: "#8A313F", image: "assets/images/katalog/autumn_Sienna.png" },
        { name: "Maple", hex: "#BE523C", image: "assets/images/katalog/autumn_Maple.png" },
        { name: "Amber", hex: "#EAD5B3", image: "assets/images/katalog/autumn_Amber.png" }
      ]
    },
    // {
    //   id: "cenaya-series-renda-pastel",
    //   name: "CENAYA Renda Pastel Series",
    //   category: "all",
    //   isMainSeries: true,
    //   shortDesc: "Pola renda pastel manis yang menawan, lembut, dan aesthetic di setiap momen.",
    //   fullDesc: "CENAYA Renda Pastel membawa atmosfer ceria dengan aksen renda manis dan gradasi warna pastel modern. Menggunakan bahan Viscose lembut yang adem dan membuatmu tetap nyaman percaya diri sepanjang hari (Butter, Meringue, Chiffon, Alabaster, Creamy).",
    //   material: "Viscose (180 x 75 cm)",
    //   features: ["Aksen renda manis menawan", "Gradasi warna lembut estetik", "Breathable & sejuk", "Kain lemas mudah distyle"],
    //   price: "Rp70.000",
    //   priceNum: 70000,
    //   badge: "Series 03",
    //   image: "assets/images/Koleksi Renda Pastel.png",
    //   variants: [
    //     { name: "Butter", hex: "#FFFBEF", image: "assets/images/katalog/pastel_Butter.png" },
    //     { name: "Meringue", hex: "#FFDDEB", image: "assets/images/katalog/pastel_Meringue.png" },
    //     { name: "Chiffon", hex: "#FFEAEA", image: "assets/images/katalog/pastel_Chiffon.png" },
    //     { name: "Alabaster", hex: "#FAEBDA", image: "assets/images/katalog/pastel_Alabaster.png" },
    //     { name: "Creamy", hex: "#E6C9C1", image: "assets/images/katalog/pastel_Creamy.png" }
    //   ]
    // },
    // {
    //   id: "cenaya-series-renda-moody",
    //   name: "CENAYA Renda Moody Series",
    //   category: "all",
    //   isMainSeries: true,
    //   shortDesc: "Sentuhan motif lace moody elegan yang simpel dan versatile untuk harian.",
    //   fullDesc: "Koleksi simpel yang siap menemanimu dari aktivitas pagi hingga malam. Berbahan Viscose premium dengan motif lace anggun yang lembut, rapi seketika, dan tidak perlu sering diperbaiki seharian (Obsidian, Eclipse, Slate, Ashsoot, Navyer).",
    //   material: "Viscose (180 x 75 cm)",
    //   features: ["Anti letoy & tegak paripurna", "Serat rapat tidak terawang", "Bahan ringan tidak gerah", "Finishing jahit tepi super rapi"],
    //   price: "Rp70.000",
    //   priceNum: 70000,
    //   badge: "Series 04",
    //   image: "assets/images/Koleksi Renda Moody.png",
    //   variants: [
    //     { name: "Obsidian", hex: "#000000", image: "assets/images/katalog/moody_Obsidian.png" },
    //     { name: "Eclipse", hex: "#331403", image: "assets/images/katalog/moody_Eclipse.png" },
    //     { name: "Slate", hex: "#D8C5C8", image: "assets/images/katalog/moody_Slate.png" },
    //     { name: "Ashsoot", hex: "#837C86", image: "assets/images/katalog/moody_Ashsoot.png" },
    //     { name: "Navyer", hex: "#1D2134", image: "assets/images/katalog/moody_Navyer.png" }
    //   ]
    // },

    // --- 2. SERIES SUMMER (5 Produk Detail Warna) ---
    {
      id: "cenaya-summer-sunny",
      name: "Cenaya Summer - Sunny",
      category: "summer",
      shortDesc: "Varian Sunny dengan nuansa kuning lembut cerah nan ceria.",
      fullDesc: "Cenaya Summer varian Sunny menghadirkan perpaduan motif kelopak bunga ceria dengan dasar warna kuning pastel yang hangat. Bahan Ceruty premium yang flowy, adem, dan mudah dibentuk.",
      material: "Ceruty (180 x 70 cm)",
      features: ["Warna kuning pastel hangat", "Flowy & jatuh anggun", "Adem dipakai seharian", "Jahitan tepi rapi"],
      price: "Rp125.000",
      priceNum: 125000,
      badge: "Summer 01",
      image: "assets/images/katalog/summer_sunny.png",
      variants: [
        { name: "Sunny", hex: "#FDF9BC", image: "assets/images/katalog/summer_sunny.png" }
      ]
    },
    {
      id: "cenaya-summer-oreny",
      name: "Cenaya Summer - Oreny",
      category: "summer",
      shortDesc: "Varian Oreny dengan sentuhan warna peach orange yang segar.",
      fullDesc: "Cenaya Summer varian Oreny memancarkan pesona fresh dengan sentuhan gradasi peach orange yang manis dan energik. Memberikan rona ceria pada wajah pemakainya.",
      material: "Ceruty (180 x 70 cm)",
      features: ["Warna peach orange segar", "Serat kain lembut halus", "Mudah diatur berbagai gaya", "Tidak mudah kusut"],
      price: "Rp125.000",
      priceNum: 125000,
      badge: "Summer 02",
      image: "assets/images/katalog/summer_oreny.png",
      variants: [
        { name: "Oreny", hex: "#FF9A49", image: "assets/images/katalog/summer_oreny.png" }
      ]
    },
    {
      id: "cenaya-summer-lillywayly",
      name: "Cenaya Summer - Lillywayly",
      category: "summer",
      shortDesc: "Varian Lillywayly bernuansa pink manis feminin yang anggun.",
      fullDesc: "Cenaya Summer varian Lillywayly hadir dengan sentuhan pink blossom lembut yang manis dan feminin, menciptakan pesona youthful nan memikat untuk momen istimewa.",
      material: "Ceruty (180 x 70 cm)",
      features: ["Sentuhan pink feminin", "Sangat lembut & tidak menerawang", "Tegak alami di kening", "Kualitas jahitan premium"],
      price: "Rp125.000",
      priceNum: 125000,
      badge: "Summer 03",
      image: "assets/images/katalog/summer_lillywayly.png",
      variants: [
        { name: "Lillywayly", hex: "#FDAEC8", image: "assets/images/katalog/summer_lillywayly.png" }
      ]
    },
    {
      id: "cenaya-summer-ocean",
      name: "Cenaya Summer - Ocean",
      category: "summer",
      shortDesc: "Varian Ocean dengan kesegaran biru laut yang sejuk dan menenangkan.",
      fullDesc: "Cenaya Summer varian Ocean membawa kesegaran palet biru laut yang sejuk di mata. Memberikan kesan adem, tenang, dan elegan untuk gaya kasual maupun semi-formal.",
      material: "Ceruty (180 x 70 cm)",
      features: ["Nuansa biru laut menyejukkan", "Bahan sejuk bernapas", "Ringan tanpa membuat gerah", "Finishing jahit tepi rapi"],
      price: "Rp125.000",
      priceNum: 125000,
      badge: "Summer 04",
      image: "assets/images/katalog/summer_ocean.png",
      variants: [
        { name: "Ocean", hex: "#47BEFF", image: "assets/images/katalog/summer_ocean.png" }
      ]
    },
    {
      id: "cenaya-summer-breeze",
      name: "Cenaya Summer - Breeze",
      category: "summer",
      shortDesc: "Varian Breeze dengan perpaduan mint tosca yang ceria dan stylish.",
      fullDesc: "Cenaya Summer varian Breeze melengkapi hari-harimu dengan nuansa tosca mint cerah. Bahan Ceruty yang sangat halus, tidak mudah kusut, dan tegak rapi di dahi sepanjang hari.",
      material: "Ceruty (180 x 70 cm)",
      features: ["Warna mint tosca modern", "Super nyaman dipakai seharian", "Mudah diatur & tidak kaku", "Motif eksklusif Cenaya"],
      price: "Rp125.000",
      priceNum: 125000,
      badge: "Summer 05",
      image: "assets/images/katalog/summer_breeze.png",
      variants: [
        { name: "Breeze", hex: "#95FFF8", image: "assets/images/katalog/summer_breeze.png" }
      ]
    },

    // --- 3. SERIES AUTUMN (5 Produk Detail Warna) ---
    {
      id: "cenaya-autumn-ranumi",
      name: "CENAYA Autumn - Ranumi",
      category: "autumn",
      shortDesc: "Varian Ranumi dengan nuansa deep burgundy hangat dan anggun.",
      fullDesc: "Ekspresikan pesonamu bersama CENAYA Autumn varian Ranumi. Menggunakan kain Viscose premium yang flowy dan bertekstur halus, memberikan efek layering anggun saat distyling.",
      material: "Ceruty (180 x 75 cm)",
      features: ["Warna deep burgundy eksklusif", "Jatuh anggun & flowy", "Ringan & tidak bikin gerah", "Warna tahan lama"],
      price: "Rp125.000",
      priceNum: 125000,
      badge: "Autumn 01",
      image: "assets/images/katalog/autumn_Ranumi.png",
      variants: [
        { name: "Ranumi", hex: "#70383E", image: "assets/images/katalog/autumn_Ranumi.png" }
      ]
    },
    {
      id: "cenaya-autumn-truffle",
      name: "CENAYA Autumn - Truffle",
      category: "autumn",
      shortDesc: "Varian Truffle bernuansa cokelat hangat earth-tone yang versatile.",
      fullDesc: "CENAYA Autumn varian Truffle menghadirkan pesona warna earth-tone cokelat lembut yang sangat mudah dipadupadankan dengan busana harianmu.",
      material: "Ceruty (180 x 75 cm)",
      features: ["Nuansa cokelat earth-tone", "Bahan sejuk dan flowy", "Tidak mudah kusut", "Jahitan rapi presisi"],
      price: "Rp125.000",
      priceNum: 125000,
      badge: "Autumn 02",
      image: "assets/images/katalog/autumn_Truffle.png",
      variants: [
        { name: "Truffle", hex: "#735041", image: "assets/images/katalog/autumn_Truffle.png" }
      ]
    },
    {
      id: "cenaya-autumn-sienna",
      name: "CENAYA Autumn - Sienna",
      category: "autumn",
      shortDesc: "Varian Sienna dengan palet merah marun hangat yang berani dan percaya diri.",
      fullDesc: "CENAYA Autumn varian Sienna memancarkan pesona berani dan penuh percaya diri dengan sentuhan warna merah marun hangat khas musim gugur.",
      material: "Ceruty (180 x 75 cm)",
      features: ["Warna merah marun memikat", "Tegak alami di kening", "Nyaman dipakai seharian", "Tekstur halus berkualitas"],
      price: "Rp125.000",
      priceNum: 125000,
      badge: "Autumn 03",
      image: "assets/images/katalog/autumn_Sienna.png",
      variants: [
        { name: "Sienna", hex: "#8A313F", image: "assets/images/katalog/autumn_Sienna.png" }
      ]
    },
    {
      id: "cenaya-autumn-maple",
      name: "CENAYA Autumn - Maple",
      category: "autumn",
      shortDesc: "Varian Maple dengan nuansa terracotta hangat yang aesthetic.",
      fullDesc: "CENAYA Autumn varian Maple terinspirasi dari dedaunan musim gugur dengan warna terracotta hangat yang memberikan kesan aesthetic pada setiap foto OOTD-mu.",
      material: "Ceruty (180 x 75 cm)",
      features: ["Warna terracotta aesthetic", "Ringan dan sejuk", "Mudah dibentuk berbagai gaya", "Finishing tepi jahit rapi"],
      price: "Rp125.000",
      priceNum: 125000,
      badge: "Autumn 04",
      image: "assets/images/katalog/autumn_Maple.png",
      variants: [
        { name: "Maple", hex: "#BE523C", image: "assets/images/katalog/autumn_Maple.png" }
      ]
    },
    {
      id: "cenaya-autumn-amber",
      name: "CENAYA Autumn - Amber",
      category: "autumn",
      shortDesc: "Varian Amber dengan kelembutan warna krem hangat yang manis.",
      fullDesc: "CENAYA Autumn varian Amber menghadirkan kelembutan warna krem hangat yang manis, menciptakan nuansa feminin yang anggun dan meneduhkan.",
      material: "Ceruty (180 x 75 cm)",
      features: ["Warna krem amber manis", "Breathable & sejuk", "Kain lemas mudah distyle", "Cocok untuk semua acara"],
      price: "Rp125.000",
      priceNum: 125000,
      badge: "Autumn 05",
      image: "assets/images/katalog/autumn_Amber.png",
      variants: [
        { name: "Amber", hex: "#EAD5B3", image: "assets/images/katalog/autumn_Amber.png" }
      ]
    },

    // --- 4. SERIES RENDA PASTEL (5 Produk Detail Warna) ---
    {
      id: "cenaya-renda-butter",
      name: "CENAYA Renda Pastel - Butter",
      category: "renda-pastel",
      shortDesc: "Pola renda pastel Butter dengan nuansa broken white krem lembut.",
      fullDesc: "CENAYA Renda Pastel varian Butter membawa atmosfer ceria dengan gradasi warna broken white krem lembut modern yang manis dan aesthetic.",
      material: "Viscose (180 x 75 cm)",
      features: ["Aksen motif renda manis", "Breathable & sejuk", "Kain lemas mudah distyle", "Cocok dipadukan dengan baju polos"],
      price: "Rp70.000",
      priceNum: 70000,
      badge: "Pastel 01",
      image: "assets/images/katalog/pastel_Butter.png",
      variants: [
        { name: "Butter", hex: "#FFFBEF", image: "assets/images/katalog/pastel_Butter.png" }
      ]
    },
    {
      id: "cenaya-renda-meringue",
      name: "CENAYA Renda Pastel - Meringue",
      category: "renda-pastel",
      shortDesc: "Pola renda pastel Meringue dengan sentuhan baby pink manis.",
      fullDesc: "CENAYA Renda Pastel varian Meringue memancarkan kelembutan warna baby pink yang manis dan imut, mempercantik penampilan femininmu.",
      material: "Viscose (180 x 75 cm)",
      features: ["Sentuhan baby pink lembut", "Serat kain halus sejuk", "Mudah distyling", "Jahitan rapi"],
      price: "Rp70.000",
      priceNum: 70000,
      badge: "Pastel 02",
      image: "assets/images/katalog/pastel_Meringue.png",
      variants: [
        { name: "Meringue", hex: "#FFDDEB", image: "assets/images/katalog/pastel_Meringue.png" }
      ]
    },
    {
      id: "cenaya-renda-chiffon",
      name: "CENAYA Renda Pastel - Chiffon",
      category: "renda-pastel",
      shortDesc: "Pola renda pastel Chiffon dengan nuansa peach blush lembut.",
      fullDesc: "CENAYA Renda Pastel varian Chiffon menghadirkan kehangatan warna peach blush yang lembut dan mempesona untuk pemakaian sehari-hari.",
      material: "Viscose (180 x 75 cm)",
      features: ["Warna peach blush manis", "Bahan adem tidak gerah", "Finishing tepi jahit rapi", "Tegak alami di dahi"],
      price: "Rp70.000",
      priceNum: 70000,
      badge: "Pastel 03",
      image: "assets/images/katalog/pastel_Chiffon.png",
      variants: [
        { name: "Chiffon", hex: "#FFEAEA", image: "assets/images/katalog/pastel_Chiffon.png" }
      ]
    },
    {
      id: "cenaya-renda-alabaster",
      name: "CENAYA Renda Pastel - Alabaster",
      category: "renda-pastel",
      shortDesc: "Pola renda pastel Alabaster dengan nuansa nude ivory anggun.",
      fullDesc: "CENAYA Renda Pastel varian Alabaster memberikan kesan bersih, anggun, dan netral yang sangat cocok dipadukan dengan berbagai outfit kuliah maupun hangout.",
      material: "Viscose (180 x 75 cm)",
      features: ["Warna nude ivory netral", "Bahan lembut & ringan", "Mudah dirapikan", "Motif renda estetik"],
      price: "Rp70.000",
      priceNum: 70000,
      badge: "Pastel 04",
      image: "assets/images/katalog/pastel_Alabaster.png",
      variants: [
        { name: "Alabaster", hex: "#FAEBDA", image: "assets/images/katalog/pastel_Alabaster.png" }
      ]
    },
    {
      id: "cenaya-renda-creamy",
      name: "CENAYA Renda Pastel - Creamy",
      category: "renda-pastel",
      shortDesc: "Pola renda pastel Creamy dengan gradasi rose-beige yang hangat.",
      fullDesc: "CENAYA Renda Pastel varian Creamy melengkapi koleksimu dengan gradasi rose-beige hangat yang unik, lembut, dan elegan.",
      material: "Viscose (180 x 75 cm)",
      features: ["Warna rose-beige anggun", "Sangat adem dipakai", "Jatuh kain flowy", "Kualitas terjamin"],
      price: "Rp70.000",
      priceNum: 70000,
      badge: "Pastel 05",
      image: "assets/images/katalog/pastel_Creamy.png",
      variants: [
        { name: "Creamy", hex: "#E6C9C1", image: "assets/images/katalog/pastel_Creamy.png" }
      ]
    },

    // --- 5. SERIES RENDA MOODY (5 Produk Detail Warna) ---
    {
      id: "cenaya-moody-obsidian",
      name: "CENAYA Renda Moody - Obsidian",
      category: "renda-moody",
      shortDesc: "Motif lace moody Obsidian bernuansa hitam elegan dan misterius.",
      fullDesc: "Koleksi simpel dan elegan bernuansa hitam obsidian dengan motif lace yang anggun. Berbahan Viscose berkualitas yang lembut, rapi seketika, dan tidak perlu sering diperbaiki seharian.",
      material: "Viscose (180 x 75 cm)",
      features: ["Warna hitam obsidian pekat", "Serat rapat tidak terawang", "Bahan ringan tidak gerah", "Finishing jahit tepi super rapi"],
      price: "Rp70.000",
      priceNum: 70000,
      badge: "Moody 01",
      image: "assets/images/katalog/moody_Obsidian.png",
      variants: [
        { name: "Obsidian", hex: "#000000", image: "assets/images/katalog/moody_Obsidian.png" }
      ]
    },
    {
      id: "cenaya-moody-eclipse",
      name: "CENAYA Renda Moody - Eclipse",
      category: "renda-moody",
      shortDesc: "Motif lace moody Eclipse dengan warna dark coffee yang dalam.",
      fullDesc: "CENAYA Renda Moody varian Eclipse memberikan sentuhan warna dark coffee cokelat pekat yang memberikan kesan tegas, dewasa, dan modis.",
      material: "Viscose (180 x 75 cm)",
      features: ["Warna dark coffee eksklusif", "Bahan adem dan jatuh", "Mudah dibentuk", "Anti letoy di dahi"],
      price: "Rp70.000",
      priceNum: 70000,
      badge: "Moody 02",
      image: "assets/images/katalog/moody_Eclipse.png",
      variants: [
        { name: "Eclipse", hex: "#331403", image: "assets/images/katalog/moody_Eclipse.png" }
      ]
    },
    {
      id: "cenaya-moody-slate",
      name: "CENAYA Renda Moody - Slate",
      category: "renda-moody",
      shortDesc: "Motif lace moody Slate dengan warna abu-abu lembut bernuansa sejuk.",
      fullDesc: "CENAYA Renda Moody varian Slate memadukan warna abu-abu slate lembut dengan motif lace yang manis, cocok untuk gaya kasual modern sehari-hari.",
      material: "Viscose (180 x 75 cm)",
      features: ["Warna abu-abu slate sejuk", "Ringan & sejuk", "Jahitan tepi berkualitas", "Serat rapat halus"],
      price: "Rp70.000",
      priceNum: 70000,
      badge: "Moody 03",
      image: "assets/images/katalog/moody_Slate.png",
      variants: [
        { name: "Slate", hex: "#D8C5C8", image: "assets/images/katalog/moody_Slate.png" }
      ]
    },
    {
      id: "cenaya-moody-ashsoot",
      name: "CENAYA Renda Moody - Ashsoot",
      category: "renda-moody",
      shortDesc: "Motif lace moody Ashsoot dengan warna abu-abu gelap charcoal.",
      fullDesc: "CENAYA Renda Moody varian Ashsoot bernuansa abu-abu gelap charcoal yang memberikan kesan minimalis dan aesthetic untuk berbagai paduan outfit.",
      material: "Viscose (180 x 75 cm)",
      features: ["Warna charcoal ash minimalis", "Bahan lemas & flowy", "Tidak licin saat dipakai", "Tegak rapi"],
      price: "Rp70.000",
      priceNum: 70000,
      badge: "Moody 04",
      image: "assets/images/katalog/moody_Ashsoot.png",
      variants: [
        { name: "Ashsoot", hex: "#837C86", image: "assets/images/katalog/moody_Ashsoot.png" }
      ]
    },
    {
      id: "cenaya-moody-navyer",
      name: "CENAYA Renda Moody - Navyer",
      category: "renda-moody",
      shortDesc: "Motif lace moody Navyer dengan keanggunan warna biru dongker gelap.",
      fullDesc: "CENAYA Renda Moody varian Navyer menghadirkan pesona warna navy dongker klasik yang abadi, memberikan kesan profesional, rapi, dan menawan.",
      material: "Viscose (180 x 75 cm)",
      features: ["Warna navy gelap klasik", "Mudah dibentuk berbagai gaya", "Adem untuk kegiatan padat", "Jahitan rapi"],
      price: "Rp70.000",
      priceNum: 70000,
      badge: "Moody 05",
      image: "assets/images/katalog/moody_Navyer.png",
      variants: [
        { name: "Navyer", hex: "#1D2134", image: "assets/images/katalog/moody_Navyer.png" }
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
      productName: "CENAYA Pastel",
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
      answer: "Saat ini pemesanan resmi Cenaya dilayani via Direct Message (DM) Instagram resmi @cenaya_id dan pemesanan WhatsApp Customer Care kami."
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
