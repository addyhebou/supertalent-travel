import type { NavCategory } from "./nav-items";

export type MenuEntry = string | { label: string; items: string[] };

export type MenuSection = {
  heading: string;
  entries: MenuEntry[];
};

export type MenuCategoryData = {
  // "grid" places one section per explicit column, in reading order.
  // "columns" hands the sections to a CSS multi-column flow (balanced),
  // which is what naturally reproduces the mockups' masonry-like stacking
  // for sections of very different lengths.
  layout: "grid" | "columns";
  columnCount: number;
  sections: MenuSection[];
};

export const NAV_MENU_DATA: Partial<Record<NavCategory, MenuCategoryData>> = {
  "Free Travel": {
    layout: "grid",
    columnCount: 4,
    sections: [
      {
        heading: "Asia & Oceania",
        entries: [
          "China",
          "Indonesia",
          "Japan",
          "Kazakhstan",
          "Malaysia",
          "Mongolia",
          "New Zealand",
          "Philippines",
          "Singapore",
          "South Korea",
          "Taiwan",
          "Thailand",
          "Uzbekistan",
          "Vietnam",
        ],
      },
      {
        heading: "Western & Southern Europe",
        entries: ["Belgium", "France", "Greece", "Italy", "Netherlands", "Portugal", "Spain", "Switzerland", "UK"],
      },
      {
        heading: "Eastern Europe & Middle East & Africa",
        entries: [
          "Austria",
          "Bosnia & Herzegovina",
          "Croatia",
          "Czechia",
          "Denmark",
          "Egypt",
          "Estonia",
          "Finland",
          "Germany",
          "Hungary",
          "Latvia",
          "Lithuania",
          "Montenegro",
          "Norway",
          "Poland",
          "Qatar",
          "Saudi Arabia",
          "Slovakia",
          "Slovenia",
          "Sweden",
          "Turkey",
          "UAE",
        ],
      },
      {
        heading: "The Americas",
        entries: ["Canada", "USA"],
      },
    ],
  },

  Exhibitions: {
    layout: "columns",
    columnCount: 2,
    sections: [
      {
        heading: "Europe High-end",
        entries: [
          { label: "Amsterdam", items: ["IBC", "METSTRADE"] },
          { label: "Barcelona", items: ["Mobile World Congress (MWC)", "ISE"] },
          { label: "Basel", items: ["Art Basel"] },
          { label: "Berlin", items: ["IFA", "InnoTrans"] },
          { label: "Birmingham", items: ["Autosport International", "MACH", "Spring Fair"] },
          { label: "Bologna", items: ["Cosmoprof Worldwide", "CERSAIE"] },
          { label: "Cannes", items: ["Cannes Yachting Festival", "Cannes Lions"] },
          { label: "Cologne", items: ["Anuga", "gamescom", "imm cologne"] },
          { label: "Dusseldorf", items: ["MEDICA", "ProWein", "boot Dusseldorf", "drupa"] },
          { label: "Frankfurt", items: ["Automechanika", "Frankfurt Book Fair", "Ambiente"] },
          { label: "Geneva", items: ["Watches and Wonders", "EBACE"] },
          { label: "Hannover", items: ["Hannover Messe", "AGRITECHNICA", "IAA Transportation"] },
          { label: "Lisbon", items: ["Web Summit"] },
          { label: "London", items: ["Frieze London", "World Travel Market (WTM)", "Chelsea Flower Show"] },
          { label: "Madrid", items: ["FITUR", "ARCOmadrid"] },
          { label: "Milan", items: ["Salone del Mobile", "EICMA"] },
          { label: "Monaco", items: ["Monaco Yacht Show", "Top Marques"] },
          { label: "Munich", items: ["bauma", "IAA Mobility", "ISPO"] },
          { label: "Nuremberg", items: ["Spielwarenmesse", "Embedded World"] },
          { label: "Stuttgart", items: ["CMT", "LogiMAT", "Retro Classics"] },
          { label: "Venice", items: ["Venice Biennale"] },
          { label: "Verona", items: ["Vinitaly", "Marmomac"] },
        ],
      },
      {
        heading: "Americas Tech & Art",
        entries: [
          { label: "Chicago", items: ["IMTS"] },
          { label: "Las Vegas", items: ["CES", "NAB Show", "SEMA Show"] },
          { label: "Los Angeles", items: ["Frieze LA", "LA Auto Show"] },
          { label: "Miami", items: ["Art Basel Miami Beach", "Miami International Boat Show"] },
          { label: "New York", items: ["The Armory Show"] },
          { label: "Orlando", items: ["IAAPA Expo"] },
          { label: "San Francisco", items: ["GDC"] },
        ],
      },
      {
        heading: "Asia Premium",
        entries: [
          { label: "Hong Kong", items: ["Art Basel Hong Kong", "Hong Kong Watch & Clock Fair"] },
          { label: "Macau", items: ["G2E Asia"] },
          { label: "Seoul", items: ["Frieze Seoul", "KIAF"] },
          { label: "Shanghai", items: ["ART021", "Auto Shanghai", "ChinaJoy"] },
          { label: "Singapore", items: ["Singapore Airshow", "Singapore FinTech Festival"] },
          { label: "Taipei", items: ["COMPUTEX"] },
          { label: "Tokyo", items: ["Art Fair Tokyo", "Tokyo Game Show", "Tokyo Motor Show"] },
        ],
      },
      {
        heading: "Middle East & Oceania",
        entries: [
          { label: "Abu Dhabi", items: ["ADIPEC", "IDEX"] },
          { label: "Doha", items: ["Project Qatar"] },
          { label: "Dubai", items: ["Arab Health", "Dubai International Boat Show", "GITEX"] },
          { label: "Melbourne", items: ["Australian Auto Aftermarket Expo"] },
          { label: "Riyadh", items: ["Future Investment Initiative", "LEAP"] },
          { label: "Sydney", items: ["Sydney International Boat Show"] },
        ],
      },
    ],
  },

  Honeymoon: {
    layout: "columns",
    columnCount: 2,
    sections: [
      {
        heading: "Indian Ocean & Asia Romance",
        entries: [
          { label: "Indonesia", items: ["Bali", "Lombok", "Sumba"] },
          { label: "Maldives", items: ["Belle Mare", "Le Morne", "North Male Atoll", "South Male Atoll"] },
          { label: "Philippines", items: ["El Nido", "Palawan"] },
          { label: "Seychelles", items: ["La Digue", "Mahe", "Praslin"] },
          { label: "Thailand", items: ["Khao Lak", "Koh Samui", "Krabi", "Phuket"] },
          { label: "Vietnam", items: ["Da Nang", "Nha Trang", "Phu Quoc", "Vinh Hy Bay"] },
        ],
      },
      {
        heading: "Europe Classic Romance",
        entries: [
          { label: "Croatia", items: ["Dubrovnik", "Hvar", "Split"] },
          { label: "France", items: ["French Riviera", "Paris", "Provence"] },
          { label: "Greece", items: ["Crete", "Mykonos", "Santorini", "Zakynthos"] },
          { label: "Italy", items: ["Amalfi Coast", "Capri", "Lake Como", "Portofino", "Positano", "Venice"] },
          { label: "Spain", items: ["Canary Islands", "Ibiza", "Mallorca", "Tenerife"] },
          { label: "Switzerland", items: ["Interlaken", "Lauterbrunnen", "Lucerne"] },
        ],
      },
      {
        heading: "Pacific & Oceania Retreats",
        entries: [
          { label: "Australia", items: ["Gold Coast", "Hamilton Island", "Whitsundays"] },
          { label: "Fiji", items: ["Mamanuca Islands", "Viti Levu", "Yasawa Islands"] },
          { label: "French Polynesia", items: ["Bora Bora", "Moorea", "Tahiti", "Tetiaroa"] },
          { label: "Hawaii", items: ["Honolulu", "Kauai", "Lanai", "Maui"] },
          { label: "New Zealand", items: ["Queenstown", "Rotorua", "Waiheke Island"] },
        ],
      },
      {
        heading: "Caribbean & Americas",
        entries: [
          { label: "Antigua and Barbuda", items: ["Antigua"] },
          { label: "Bahamas", items: ["Exuma", "Nassau", "Paradise Island"] },
          { label: "Costa Rica", items: ["Arenal", "Guanacaste"] },
          { label: "Dominican Republic", items: ["Punta Cana"] },
          { label: "Mexico", items: ["Cancun"] },
          { label: "Saint Lucia", items: ["Soufriere"] },
          { label: "Turks and Caicos", items: ["Providenciales"] },
          { label: "USA", items: ["Aspen", "Key West", "Miami", "Napa Valley", "New York"] },
        ],
      },
    ],
  },

  Golf: {
    layout: "grid",
    columnCount: 2,
    sections: [
      {
        heading: "Asia Pacific",
        entries: [
          { label: "Australia", items: ["Gold Coast", "Melbourne", "Perth", "Sydney", "Tasmania"] },
          { label: "Cambodia", items: ["Phnom Penh", "Siem Reap"] },
          { label: "China", items: ["Hainan", "Kunming", "Shenzhen"] },
          { label: "Indonesia", items: ["Bali", "Bintan", "Jakarta"] },
          { label: "Japan", items: ["Gotemba", "Hokkaido", "Kawana", "Miyazaki", "Okinawa"] },
          { label: "Malaysia", items: ["Johor", "Kuala Lumpur", "Langkawi"] },
          { label: "New Zealand", items: ["Auckland", "Hawke's Bay", "Kauri Cliffs", "Queenstown"] },
          { label: "Singapore", items: ["Sentosa"] },
          { label: "South Korea", items: ["Chuncheon", "Incheon", "Jeju", "Namhae"] },
          { label: "Thailand", items: ["Chiang Mai", "Hua Hin", "Khao Yai", "Pattaya", "Phuket"] },
          { label: "Vietnam", items: ["Da Nang", "Ho Tram", "Nha Trang", "Phu Quoc"] },
        ],
      },
      {
        heading: "Scotland & UK",
        entries: [
          { label: "England", items: ["Royal Birkdale", "Southport", "Sunningdale", "Wentworth"] },
          { label: "Ireland", items: ["Ballybunion", "Dublin", "Kerry", "Kildare", "Lahinch"] },
          { label: "Northern Ireland", items: ["Royal County Down", "Royal Portrush"] },
          { label: "Scotland", items: ["Carnoustie", "Gleneagles", "Muirfield", "St Andrews", "Turnberry"] },
        ],
      },
      {
        heading: "Europe & Middle East",
        entries: [
          { label: "France", items: ["Paris", "Provence"] },
          { label: "Oman", items: ["Muscat"] },
          { label: "Portugal", items: ["Algarve", "Lisbon", "Vilamoura"] },
          { label: "Spain", items: ["Costa del Sol", "Girona", "Mallorca", "Sotogrande"] },
          { label: "Turkey", items: ["Belek"] },
          { label: "UAE", items: ["Abu Dhabi", "Dubai"] },
        ],
      },
      {
        heading: "USA & Americas",
        entries: [
          { label: "Bahamas", items: ["Nassau"] },
          { label: "Dominican Republic", items: ["Casa de Campo", "Punta Cana"] },
          { label: "Mexico", items: ["Los Cabos", "Punta Mita", "Riviera Maya"] },
          { label: "Puerto Rico", items: ["Rio Grande"] },
          {
            label: "USA",
            items: [
              "Augusta",
              "Bandon",
              "Kiawah Island",
              "Las Vegas",
              "Miami",
              "Monterey",
              "Orlando",
              "Pinehurst",
              "Scottsdale",
            ],
          },
        ],
      },
    ],
  },

  Castle: {
    layout: "grid",
    columnCount: 1,
    sections: [
      {
        heading: "Western Europe Castle",
        entries: [
          { label: "France", items: ["Bagnols", "Carcassonne", "Eze", "Mirambeau", "Montbazon", "Onzain"] },
          {
            label: "Germany",
            items: ["Bergisch Gladbach", "Colmberg", "Kronberg", "Krun", "Lieser", "Wernberg-Koblitz"],
          },
          { label: "Portugal", items: ["Evora", "Luso", "Obidos"] },
          { label: "Spain", items: ["Alarcon", "Cardona", "Jaen", "Mallorca", "Santiago de Compostela"] },
          { label: "Switzerland", items: ["Ascona", "Lucerne", "Thun"] },
        ],
      },
      {
        heading: "Central/Southern Europe & The Americas",
        entries: [
          { label: "Austria", items: ["Bernstein", "Durnstein", "Hof bei Salzburg"] },
          { label: "Canada", items: ["Banff", "Lake Louise", "Quebec City"] },
          { label: "Croatia", items: ["Solta"] },
          { label: "Czech Republic", items: ["Mcely"] },
          {
            label: "Italy",
            items: ["Casole d'Elsa", "Cernobbio", "Guarene", "Lisciano Niccone", "Montalcino"],
          },
          { label: "USA", items: ["Asheville", "Bolton Landing", "Huntington", "Tarrytown"] },
        ],
      },
      {
        heading: "UK & Ireland Castles",
        entries: [
          {
            label: "Ireland",
            items: ["Adare", "Cong", "Galway", "Kingscourt", "Newmarket-on-Fergus", "Waterford"],
          },
          {
            label: "United Kingdom",
            items: [
              "Amberley",
              "Ballantrae",
              "Edinburgh",
              "Fort William",
              "Glasgow",
              "Hexham",
              "Masham",
              "Moretonhampstead",
              "Pitlochry",
              "Ruthin",
              "St Davids",
              "Thornbury",
            ],
          },
        ],
      },
      {
        heading: "Asia, Middle East & Africa Heritage",
        entries: [
          { label: "China", items: ["Dalian"] },
          { label: "India", items: ["Hyderabad", "Jaipur", "Jodhpur", "Udaipur"] },
          { label: "Japan", items: ["Hirado", "Ozu"] },
          { label: "Morocco", items: ["Marrakech", "Skoura"] },
          { label: "Oman", items: ["Nizwa"] },
        ],
      },
    ],
  },

  Villas: {
    layout: "columns",
    columnCount: 2,
    sections: [
      {
        heading: "Asia Pool Villas & Retreats",
        entries: [
          { label: "Azerbaijan", items: ["Baku"] },
          { label: "Cambodia", items: ["Siem Reap"] },
          {
            label: "China",
            items: ["Beijing", "Chengdu", "Guangzhou", "Qingdao", "Sanya", "Shanghai", "Xi'an", "Xiamen"],
          },
          { label: "Georgia", items: ["Tbilisi"] },
          { label: "Hong Kong", items: ["Hong Kong"] },
          { label: "India", items: ["Goa", "Jaipur", "Kerala"] },
          { label: "Indonesia", items: ["Bali", "Bintan", "Jakarta", "Lombok", "Sumba"] },
          {
            label: "Japan",
            items: ["Furano", "Hakone", "Kyoto", "Mount Fuji", "Niseko", "Okinawa", "Osaka", "Sapporo", "Tokyo"],
          },
          { label: "Kazakhstan", items: ["Almaty", "Astana"] },
          { label: "Kyrgyzstan", items: ["Bishkek", "Issyk-Kul"] },
          { label: "Macau", items: ["Macau"] },
          { label: "Malaysia", items: ["Kota Kinabalu", "Kuala Lumpur", "Langkawi", "Penang"] },
          { label: "Maldives", items: ["Baa Atoll", "North Male Atoll", "South Male Atoll"] },
          { label: "Mongolia", items: ["Gobi Desert", "Ulaanbaatar"] },
          { label: "Philippines", items: ["Boracay", "Cebu", "El Nido", "Palawan"] },
          { label: "Singapore", items: ["Singapore"] },
          {
            label: "South Korea",
            items: [
              "Busan",
              "Gangneung",
              "Gapyeong",
              "Geoje",
              "Gyeongju",
              "Jeju",
              "Namhae",
              "Pohang",
              "Pyeongchang",
              "Seoul",
              "Sokcho",
              "Tongyeong",
              "Yeosu",
            ],
          },
          { label: "Sri Lanka", items: ["Galle", "Tangalle"] },
          { label: "Taiwan", items: ["Taipei"] },
          { label: "Tajikistan", items: ["Dushanbe"] },
          { label: "Thailand", items: ["Bangkok", "Chiang Mai", "Hua Hin", "Koh Samui", "Krabi", "Pattaya", "Phuket"] },
          { label: "Uzbekistan", items: ["Bukhara", "Khiva", "Samarkand", "Tashkent"] },
          { label: "Vietnam", items: ["Da Nang", "Hoi An", "Nha Trang", "Phu Quoc"] },
        ],
      },
      {
        heading: "Europe Chalets & Private Villas",
        entries: [
          { label: "Albania", items: ["Tirana"] },
          { label: "Bosnia and Herzegovina", items: ["Mostar", "Neum"] },
          {
            label: "Croatia",
            items: ["Dubrovnik", "Hvar", "Istria", "Plitvice", "Split", "Trogir", "Zadar", "Zagreb"],
          },
          { label: "Estonia", items: ["Tallinn"] },
          {
            label: "France",
            items: ["Bordeaux", "Cannes", "Corsica", "Courchevel", "Megeve", "Nice", "Paris", "Provence", "Saint-Tropez"],
          },
          { label: "Greece", items: ["Corfu", "Crete", "Mykonos", "Paros", "Santorini", "Zakynthos"] },
          {
            label: "Italy",
            items: [
              "Amalfi Coast",
              "Capri",
              "Cinque Terre",
              "Florence",
              "Lake Como",
              "Lake Garda",
              "Milan",
              "Puglia",
              "Rome",
              "Sardinia",
              "Sicily",
              "Tuscany",
              "Venice",
            ],
          },
          { label: "Latvia", items: ["Riga"] },
          { label: "Lithuania", items: ["Vilnius"] },
          { label: "Monaco", items: ["Monte Carlo"] },
          { label: "Montenegro", items: ["Budva"] },
          { label: "Portugal", items: ["Algarve", "Lisbon", "Madeira", "Porto"] },
          { label: "Slovenia", items: ["Bled", "Ljubljana", "Maribor", "Piran", "Postojna"] },
          {
            label: "Spain",
            items: ["Barcelona", "Canary Islands", "Costa del Sol", "Ibiza", "Madrid", "Mallorca", "Marbella", "Menorca", "Seville"],
          },
          {
            label: "Switzerland",
            items: ["Crans-Montana", "Davos", "Gstaad", "Klosters", "St. Moritz", "Verbier", "Zermatt"],
          },
          { label: "United Kingdom", items: ["Cornwall", "Cotswolds", "Scottish Highlands"] },
        ],
      },
      {
        heading: "Oceania & Americas Private Villas",
        entries: [
          {
            label: "Australia",
            items: ["Byron Bay", "Gold Coast", "Hamilton Island", "Melbourne", "Perth", "Sydney", "Whitsundays"],
          },
          { label: "Bahamas", items: ["Nassau", "Paradise Island"] },
          { label: "Barbados", items: ["Bridgetown"] },
          { label: "Costa Rica", items: ["Guanacaste", "Papagayo"] },
          { label: "Dominican Republic", items: ["Punta Cana"] },
          { label: "Fiji", items: ["Mamanuca Islands", "Viti Levu"] },
          { label: "French Polynesia", items: ["Bora Bora", "Moorea"] },
          { label: "Jamaica", items: ["Montego Bay"] },
          { label: "Mexico", items: ["Cabo San Lucas", "Cancun", "Punta Mita", "Riviera Maya", "Tulum"] },
          {
            label: "New Zealand",
            items: ["Auckland", "Christchurch", "Queenstown", "Waiheke Island", "Wellington"],
          },
          { label: "Saint Barthelemy", items: ["St. Barts"] },
          { label: "Turks and Caicos", items: ["Providenciales"] },
          {
            label: "USA",
            items: ["Aspen", "Hamptons", "Honolulu", "Lake Tahoe", "Malibu", "Maui", "Miami", "Napa Valley", "Palm Springs"],
          },
        ],
      },
      {
        heading: "Middle East & Africa Desert Estates",
        entries: [
          { label: "Morocco", items: ["Marrakech"] },
          { label: "Oman", items: ["Muscat", "Zighy Bay"] },
          { label: "Qatar", items: ["Doha"] },
          { label: "Saudi Arabia", items: ["AlUla", "Jeddah", "Medina", "Riyadh"] },
          { label: "Seychelles", items: ["Mahe", "Praslin"] },
          { label: "South Africa", items: ["Cape Town", "Kruger National Park"] },
          { label: "Turkey", items: ["Antalya", "Bodrum", "Cappadocia", "Fethiye", "Istanbul", "Pamukkale"] },
          { label: "UAE", items: ["Abu Dhabi", "Dubai", "Ras Al Khaimah"] },
        ],
      },
    ],
  },
};
