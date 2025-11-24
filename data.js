const leaksData = [
  {
    id: 1,
    organization: "STENIK Group",
    type: "private",
    description: {
      en: "eCommerce development company database breach - 2M records",
      bg: "Пробив в базата данни на компания за уеб дизайн и eCommerce - 2М записа"
    },
    source: "https://darkforums.st/Thread-Selling-STENIK-Group-Bulgaria-Company-2M",
    images: ["images/stenik.png", "images/stenik2.png", "images/stenik3.png"],
    
  },
  {
    id: 2,
    organization: "Unknown Bulgarian Database",
    type: "private",
    description: {
      en: "Comprehensive Bulgarian database breach",
      bg: "Цялостен пробив в българска база данни"
    },
    source: "https://darkforums.st/Thread-Selling-Bulgaria-Database",
    images: ["images/unknown.png"],
    
  },
  {
    id: 3,
    organization: "DallBogg.bg",
    type: "private",
    description: {
      en: "20k Greek insurance identity records",
      bg: "20 хил. записа с гръцки застрахователни самоличности"
    },
    source: "https://darkforums.st/Thread-DallBogg-bg-20k-greece-insurance-identity",
    images: ["images/dallbogg.png"],
    
  },
  {
    id: 4,
    organization: "SpiderSport.com",
    type: "private",
    description: {
      en: "Sports retail company database breach",
      bg: "Пробив в базата данни на компания за спортни стоки"
    },
    source: "https://darkforums.st/Thread-Bulgaria-database%C2%A0-spidersport-com",
    images: ["images/spidersport.png"],
    
  },
  {
    id: 5,
    organization: "Lira.bg",
    type: "private",
    description: {
      en: "WordPress database breach",
      bg: "Пробив в WordPress база данни"
    },
    source: "https://darkforums.st/Thread-Bulgaria-lira-bg-Wordpress-Database",
    images: ["images/lira.png"],
    
  },
  {
    id: 6,
    organization: "MK Brokers Bank",
    type: "private",
    description: {
      en: "Investment company database breach - 7GB",
      bg: "Пробив в базата данни на инвестиционен посредник - 7GB"
    },
    source: "https://darkforums.st/Thread-DATABASE-7GB-MK-Brokers-Bank-Bulgaria",
    images: ["images/mkbrokers.png"],
    
  },
  {
    id: 7,
    organization: "SportVision",
    type: "private",
    description: {
      en: "Retail database breach - 1,390,766M records",
      bg: "Пробив в база данни на магазин - 1,390,766М записа"
    },
    source: "https://darkforums.st/Thread-Selling-SportVision-1-390-766M-Bulgaria",
    images: ["images/sportvision.png", "images/sportvision2.png"],
    
  },
  {
    id: 8,
    organization: "Pilini.bg",
    type: "private",
    description: {
      en: "E-commerce platform breach",
      bg: "Пробив в платформа за електронна търговия"
    },
    source: "https://darkforums.st/Thread-pilini-bg",
    images: ["images/pilini.png"],
    
  },
  {
    id: 9,
    organization: "Kasida.bg",
    type: "private",
    description: {
      en: "Online retail database breach",
      bg: "Пробив в база данни на онлайн магазин"
    },
    source: "https://darkforums.st/Thread-kasida-bg",
    images: ["images/kasida.png"],
    
  },
  {
    id: 10,
    organization: "B2B Bulgaria",
    type: "private",
    description: {
      en: "Business-to-business platform breach",
      bg: "Пробив в бизнес платформа"
    },
    source: "https://leakbase.la/threads/16198-b2b-bulgaria.33522/",
    images: ["images/unknown2.png"],
    
  },
  {
    id: 11,
    organization: "8hristo.com",
    type: "private",
    description: {
      en: "Database breach - 162 MB",
      bg: "Пробив в база данни - 162 MB"
    },
    source: "https://leakbase.la/threads/bulgaria-8hristo-com-162-mb.27792/",
    images: ["images/8hristo.png"],
    
  },
  {
    id: 12,
    organization: "Douglas.bg",
    type: "private",
    description: {
      en: "Retail database breach - 589 MB",
      bg: "Пробив в база данни на магазин - 589 MB"
    },
    source: "https://leakbase.la/threads/bulgaria-douglas-bg-589-mb.27790/",
    images: ["images/douglas.png"],
    
  },
  {
    id: 13,
    organization: "LillyDrogerie.bg",
    type: "private",
    description: {
      en: "Drugstore database breach - 413 MB",
      bg: "Пробив в база данни на аптека - 413 MB"
    },
    source: "https://leakbase.la/threads/bulgaria-shop-llillydrogerie-bg-413-mb.27787/",
    images: ["images/lillydrogerie.png"],
    
  },
  {
    id: 14,
    organization: "TransCard Bulgaria",
    type: "private",
    description: {
      en: "Payment card system breach",
      bg: "Пробив в система за платежни карти"
    },
    source: "https://leakbase.la/threads/transcard-bulgaria.31367/",
    images: ["images/transcard.png"],
    
  },
  {
    id: 15,
    organization: "iLife.bg",
    type: "private",
    description: {
      en: "E-commerce platform breach",
      bg: "Пробив в платформа за електронна търговия"
    },
    source: "https://darkforums.st/Thread-ilife-bg",
    images: ["images/ilife.png"],
    
  },
  {
    id: 16,
    organization: "ELD.bg",
    type: "private",
    description: {
      en: "DragonForce ransomware attack",
      bg: "Атака с DragonForce ransomware"
    },
    source: "http://dragonforxxbp3awc7mzs5dkswrua3znqyx5roefmi4smjrsdi22xwqd.onion/eld.bg/",
    images: ["images/eld.png"],
    
  },
  {
    id: 17,
    organization: "MKB (en.mkb.bg)",
    type: "private",
    description: {
      en: "LockBit ransomware attack on investment company",
      bg: "LockBit ransomware атака"
    },
    source: "http://lockbit7z355oalq4hiy5p7de64l6rsqutwlvydqje56uvevcc57r6qd.onion/en.mkb.bg/",
    images: ["images/mkb.png"],
    
  },
  {
    id: 18,
    organization: "Generali.bg",
    type: "private",
    description: {
      en: "Insurance company data breach",
      bg: "Пробив в данни на застрахователна компания"
    },
    source: "https://x.com/H4ckManac/status/1760969176372421015",
    images: ["images/generali.jpeg"],
    
  },
  {
    id: 19,
    organization: "iCard.bg",
    type: "private",
    description: {
      en: "Financial services breach - 1,800 individuals",
      bg: "Пробив на финансови услуги - 1,800 лица"
    },
    source: "https://bird.bg/en/hacker-breached-icard-and-published-the-personal-data-of-1800-individuals/",
    images: ["images/icard.webp"],
    
  },
  {
    id: 20,
    organization: "National Revenue Agency (NRA)",
    type: "public",
    description: {
      en: "Major government breach affecting millions",
      bg: "Голям правителствен пробив, засягащ милиони"
    },
    source: "https://haveibeenpwned.com/Breach/BulgarianNationalRevenueAgency",
    images: ["images/nra.webp", "images/nra2.jpeg"],
    
  },
  {
    id: 21,
    organization: "Videnov.bg",
    type: "private",
    description: {
      en: "Seized from breachforums.st",
      bg: "Иззето от breachforums.st"
    },
    source: "https://breachforums.hn",
    images: ["images/videnov.png"],
    
  },
  {
    id: 22,
    organization: "Toplina",
    type: "private",
    description: {
      en: "Heating company breach",
      bg: "Пробив на топлофикационна компания"
    },
    source: "https://breachforums.hn",
    images: ["images/toplina.png"],
    
  },
  {
    id: 23,
    organization: "Alessa.bg",
    type: "private",
    description: {
      en: "E-commerce platform breach",
      bg: "Пробив в платформа за електронна търговия"
    },
    source: "https://breachforums.hn",
    images: ["images/alessa.png"],
    
  },
  {
    id: 24,
    organization: "BGTOLL",
    type: "public/private",
    description: {
      en: "Toll system database breach",
      bg: "Пробив в база данни на тол система"
    },
    source: "https://breachforums.hn",
    images: ["images/bgtoll.png"],
    
  },
  {
    id: 25,
    organization: "Sting AD",
    type: "private",
    description: {
      en: "Hunters International ransomware group attack",
      bg: "Атака от ransomware групата Hunters International"
    },
    source: "https://huntersinternational.org",
    images: ["images/huntersinternational.org.png"],
    
  },
  {
    id: 26,
    organization: "I&G Brokers",
    type: "private",
    description: {
      en: "Insurance brokers data breach",
      bg: "Пробив в данни на застрахователни брокери"
    },
    source: "https://breachforums.is",
    images: ["images/i&G_leak.png", "images/I&G_leak_2.png"],
    
  },
  {
    id: 27,
    organization: "Prosecutor's Office (prb.bg)",
    type: "public",
    description: {
      en: "Government prosecutor's office breach",
      bg: "Пробив в прокуратурата"
    },
    source: "https://darkforums.st",
    images: ["images/prb.bg.jpeg", "images/prb.bg.2.png"],
    
  },
  {
    id: 28,
    organization: "Lev Ins",
    type: "private",
    description: {
      en: "Insurance company breach",
      bg: "Пробив в застрахователна компания"
    },
    source: "https://naglite.com",
    images: ["images/levins.png"],
    
  },
  {
    id: 29,
    organization: "Econt",
    type: "private",
    description: {
      en: "Logistics company data breach",
      bg: "Пробив в данни на логистична компания"
    },
    source: "https://leakbase.la",
    images: ["images/econt.jpeg"],
    
  },
  {
    id: 30,
    organization: "Multiple Bulgarian Sites",
    type: "private",
    description: {
      en: "bezplatno.bg, bg.elmarkstore.eu, brigadiri.com, casioshop.bg, investclub.bg, comfort.bg, bgtime.tv, address.bg, stylewish.bg",
      bg: "bezplatno.bg, bg.elmarkstore.eu, brigadiri.com, casioshop.bg, investclub.bg, comfort.bg, bgtime.tv, address.bg, stylewish.bg"
    },
    source: "https://predpriemach.com",
    images: ["images/predpriemach.com.png"],
    
  },
  {
    id: 31,
    organization: "Multiple BreachForums Leaks",
    type: "private",
    description: {
      en: "A1 Telecom, baumit.bg, kasida.bg, pilini.bg, airelec.bg, bnm.bg, punto.bg, footshop.bg, districtshoes.bg, ecco.bg, myshoes.bg, ardes.bg, andrews.bg, popolo.bg, ebag.bg, mango.bg, dallbogg.bg, ilife.bg",
      bg: "A1 Telecom, baumit.bg, kasida.bg, pilini.bg, airelec.bg, bnm.bg, punto.bg, footshop.bg, districtshoes.bg, ecco.bg, myshoes.bg, ardes.bg, andrews.bg, popolo.bg, ebag.bg, mango.bg, dallbogg.bg, ilife.bg"
    },
    source: "https://breachforums.is",
    images: ["images/ransomed.vc_bulgarian_breaches.png"],
    
  },
  {
    id: 32,
    organization: "Multiple Sites by 'Soni'",
    type: "private",
    description: {
      en: "Multiple Bulgarian e-commerce breaches by threat actor 'Soni'",
      bg: "Множество пробиви в български сайтове за електронна търговия от заплахата 'Soni'"
    },
    source: "https://breachforums.is",
    images: ["images/soni_selling.png"],
    
  },
  {
    id: 33,
    organization: "A1.bg",
    type: "private",
    description: {
      en: "Telecommunications company breach",
      bg: "Пробив в телекомуникационна компания"
    },
    source: "https://breachforums.is",
    images: ["images/a1.bg.png"],
    
  },
  {
    id: 34,
    organization: "MVR.bg (Ministry of Interior)",
    type: "public",
    description: {
      en: "Ministry of Interior database breach by 'crime'",
      bg: "Пробив в база данни на МВР от потребител 'crime'"
    },
    source: "https://breachforums.is",
    images: ["images/mvr.bg.png"],
    
  },
  {
    id: 35,
    organization: "culture-mfa.bg",
    type: "public",
    description: {
      en: "Ministry of Culture and Foreign Affairs breach",
      bg: "Пробив в Министерството на културата и външните работи"
    },
    source: "https://breachforums.is",
    images: ["images/culture-mfa.bg.png"],
    
  },
  {
    id: 36,
    organization: "Multiple Sites by 'crime'",
    type: "private",
    description: {
      en: "Multiple Bulgarian breaches by threat actor 'crime'",
      bg: "Множество български пробиви от заплахата 'crime'"
    },
    source: "https://breachforums.is",
    images: ["images/crime_selling.png"],
    
  },
  {
    id: 37,
    organization: "hreu.eu",
    type: "private",
    description: {
      en: "Human resources solutions company - Funksec ransomware attack",
      bg: "Компания за човешки ресурси - Funksec ransomware атака"
    },
    source: "https://www.ransomware.live/id/aHJldS5ldUBmdW5rc2Vj",
    images: [],
    
  },
  {
    id: 38,
    organization: "Supreme Administrative Court (Ransomhouse)",
    type: "public",
    description: {
      en: "Supreme Administrative Court - Ransomhouse attack (January 2025)",
      bg: "Върховен административен съд - Ransomhouse атака (януари 2025)"
    },
    source: "https://www.ransomware.live/id/U3VwcmVtZSBBZG1pbmlzdHJhdGl2ZSBDb3VydCBvZiBCdWxnYXJpYUByYW5zb21ob3VzZQ==",
    images: ["images/vas_leak_ransomhouse.png"],
    
  },
  {
    id: 39,
    organization: "Smart Media Group Bulgaria",
    type: "private",
    description: {
      en: "Advertising services company - Sarcoma ransomware group attack",
      bg: "Рекламна компания - Sarcoma ransomware групова атака"
    },
    source: "https://www.ransomware.live/id/U21hcnQgTWVkaWEgR3JvdXAgQnVsZ2FyaWFAc2FyY29tYQ==",
    images: [],
    
  },
  {
    id: 40,
    organization: "EasyPay",
    type: "private",
    description: {
      en: "Payment services company - Sarcoma ransomware attack, leak size: 5GB",
      bg: "Компания за платежни услуги - Sarcoma ransomware атака, размер на изтичането: 5GB"
    },
    source: "https://www.ransomware.live/id/RWFzeVBheUBzYXJjb21h",
    images: [],
    
  },
  {
    id: 41,
    organization: "intrama-bg.com",
    type: "private",
    description: {
      en: "Manufacturing company - Stormous ransomware attack",
      bg: "Производствена компания - Stormous ransomware атака"
    },
    source: "https://www.ransomware.live/id/aW50cmFtYS1iZ0BzdG9ybW91cw==",
    images: [],
    
  },
  {
    id: 42,
    organization: "Regas Energy (regasenergy.com)",
    type: "private",
    description: {
      en: "Energy sector company (Electricity, Oil & Gas) - Monti ransomware attack",
      bg: "Енергийна компания (Електричество, петрол и газ) - Monti ransomware атака"
    },
    source: "https://www.ransomware.live/id/UmVnYXMgKHJlZ2FzZW5lcmd5LmNvbSlAbW9udGk=",
    images: [],
    
  },
  {
    id: 43,
    organization: "GERB Political Party (gerb.bg)",
    type: "public",
    description: {
      en: "Political party headed by former PM Boyko Borisov - LockBit3 ransomware attack",
      bg: "Политическа партия, ръководена от бившия министър-председател Бойко Борисов - LockBit3 ransomware атака"
    },
    source: "https://www.ransomware.live/id/Z2VyYi5iZ0Bsb2NrYml0Mw==",
    images: [],
    
  }
];
