import dbConnect from "./db";
import Destination from "@/models/Destination";

const seedData = [
  {
    city: "Paris",
    country: "France",
    clues: [
      "This city is home to a famous tower that sparkles every night.",
      "Known as the 'City of Love' and a hub for fashion and art.",
    ],
    fun_fact: [
      "The Eiffel Tower was supposed to be dismantled after 20 years but was saved because it was useful for radio transmissions!",
      "Paris has only one stop sign in the entire city—most intersections rely on priority-to-the-right rules.",
    ],
    trivia: [
      "This city is famous for its croissants and macarons. Bon appétit!",
      "Paris was originally a Roman city called Lutetia.",
    ],
  },
  {
    city: "Tokyo",
    country: "Japan",
    clues: [
      "This city has the busiest pedestrian crossing in the world.",
      "You can visit an entire district dedicated to anime, manga, and gaming.",
    ],
    fun_fact: [
      "Tokyo was originally a small fishing village called Edo before becoming the bustling capital it is today!",
      "More than 14 million people live in Tokyo, making it one of the most populous cities in the world.",
    ],
    trivia: [
      "The city has over 160,000 restaurants, more than any other city in the world.",
      "Tokyo’s subway system is so efficient that train delays of just a few minutes come with formal apologies.",
    ],
  },
  {
    city: "New York",
    country: "USA",
    clues: [
      "Home to a green statue gifted by France in the 1800s.",
      "Nicknamed 'The Big Apple' and known for its Broadway theaters.",
    ],
    fun_fact: [
      "The Statue of Liberty was originally a copper color before oxidizing to its iconic green patina.",
      "Times Square was once called Longacre Square before being renamed in 1904.",
    ],
    trivia: [
      "New York City has 468 subway stations, making it one of the most complex transit systems in the world.",
      "The Empire State Building has its own zip code: 10118.",
    ],
  },
  {
    city: "London",
    country: "UK",
    clues: [
      "Home to the Queen's residence and iconic red phone booths.",
      "Ride the 'Tube' to see Big Ben and explore historic sites.",
    ],
    fun_fact: [
      "London is home to over 170 museums, many of which offer free admission!",
      "The Great Fire of London in 1666 destroyed a large part of the city, leading to its modern design.",
    ],
    trivia: [
      "London is one of the most linguistically diverse cities in the world, with over 300 languages spoken.",
      "The London Eye was originally intended to be a temporary structure.",
    ],
  },
  {
    city: "Rome",
    country: "Italy",
    clues: [
      "Walk in the footsteps of gladiators and toss a coin in a famous fountain.",
      "The 'Eternal City' with ancient ruins and delicious pasta.",
    ],
    fun_fact: [
      "Rome wasn't built in a day, but the Colosseum was completed in just 8 years!",
      "Cats in Rome are protected by law and considered part of the city's bio-heritage.",
    ],
    trivia: [
      "Vatican City, the smallest country in the world, is located within Rome.",
      "Rome has more fountains than any other city in the world.",
    ],
  },
  {
    city: "Cairo",
    country: "Egypt",
    clues: [
      "Visit ancient pyramids and explore the land of pharaohs.",
      "The city on the Nile, where history and mystery intertwine.",
    ],
    fun_fact: [
      "The Great Pyramid of Giza is the oldest and largest of the three pyramids and the only one of the Seven Wonders of the Ancient World still standing.",
      "Cairo is home to the Egyptian Museum, which houses the largest collection of Egyptian antiquities in the world.",
    ],
    trivia: [
      "Cairo is often called 'The City of a Thousand Minarets' due to its numerous mosques.",
      "The Nile River is the longest river in the world, flowing through Cairo.",
    ],
  },
  {
    city: "Sydney",
    country: "Australia",
    clues: [
      "Home to an iconic Opera House and Harbour Bridge.",
      "Surf's up in this sunny city down under.",
    ],
    fun_fact: [
      "The Sydney Opera House took 14 years to build and was designed by Danish architect Jørn Utzon.",
      "Sydney Harbour Bridge is the largest steel arch bridge in the world and can expand up to 18 cm in hot weather.",
    ],
    trivia: [
      "Sydney is the largest city in Australia, but not the capital (which is Canberra).",
      "Bondi Beach is one of the most famous beaches in the world, located in Sydney.",
    ],
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    clues: [
      "Carnival celebrations and Christ the Redeemer statue overlook this vibrant city.",
      "Beaches like Copacabana and Ipanema are world-famous here.",
    ],
    fun_fact: [
      "The Christ the Redeemer statue is made of soapstone and stands 30 meters tall, with an arm span of 28 meters.",
      "Rio de Janeiro was the capital of Brazil until 1960 when the capital moved to Brasília.",
    ],
    trivia: [
      "Rio de Janeiro is known for its 'carioca' culture, a relaxed and joyful way of life.",
      "The Tijuca National Park in Rio is one of the largest urban rainforests in the world.",
    ],
  },
  {
    city: "Barcelona",
    country: "Spain",
    clues: [
      "Explore Gaudi's architectural wonders and stroll down Las Ramblas.",
      "A city of art, beaches, and delicious tapas in Catalonia.",
    ],
    fun_fact: [
      "The Sagrada Familia, Gaudi's masterpiece, has been under construction since 1882 and is still not finished!",
      "FC Barcelona's stadium, Camp Nou, is the largest stadium in Europe.",
    ],
    trivia: [
      "Barcelona is the capital of Catalonia, a region with its own distinct culture and language.",
      "Park Güell, another Gaudi creation, was originally intended to be a housing development.",
    ],
  },
  {
    city: "Dubai",
    country: "UAE",
    clues: [
      "Home to the Burj Khalifa, the tallest building in the world.",
      "Luxury shopping, modern architecture, and desert adventures await.",
    ],
    fun_fact: [
      "The Burj Khalifa is so tall you can watch the sunset twice in one day—once from the ground and again from the top!",
      "Dubai is home to the world's largest shopping mall, the Dubai Mall.",
    ],
    trivia: [
      "Dubai was once a small fishing village before transforming into a global metropolis.",
      "Palm Jumeirah, one of Dubai's artificial islands, is shaped like a palm tree.",
    ],
  },
  {
    city: "Beijing",
    country: "China",
    clues: [
      "Explore the Forbidden City and walk along the Great Wall nearby.",
      "The capital of China, rich in history and culture.",
    ],
    fun_fact: [
      "The Forbidden City was home to emperors for almost 500 years and is the largest palace complex in the world.",
      "The Great Wall of China is not visible from space with the naked eye, contrary to popular belief.",
    ],
    trivia: [
      "Beijing literally means 'Northern Capital'.",
      "Peking duck is a famous dish originating from Beijing.",
    ],
  },
  {
    city: "Moscow",
    country: "Russia",
    clues: [
      "Visit Red Square, the Kremlin, and colorful onion-domed cathedrals.",
      "A city of grand history and architecture on the Moskva River.",
    ],
    fun_fact: [
      "Saint Basil's Cathedral in Red Square is actually made up of nine separate chapels.",
      "The Moscow Metro is known as one of the most beautiful subway systems in the world, with ornate stations.",
    ],
    trivia: [
      "Moscow is the largest city entirely within Europe.",
      "The Kremlin is not just one building but a fortified complex containing palaces, cathedrals, and museums.",
    ],
  },
  {
    city: "Istanbul",
    country: "Turkey",
    clues: [
      "Straddling two continents, explore the Hagia Sophia and Blue Mosque.",
      "A city where East meets West, with vibrant bazaars and rich history.",
    ],
    fun_fact: [
      "The Hagia Sophia has served as a church, a mosque, and now a museum.",
      "Istanbul is the only city in the world located on two continents—Europe and Asia.",
    ],
    trivia: [
      "Istanbul was formerly known as Constantinople and Byzantium.",
      "The Grand Bazaar in Istanbul is one of the oldest and largest covered markets in the world.",
    ],
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    clues: [
      "Cycle along canals, visit Anne Frank's House, and admire tulip fields nearby.",
      "A city of canals, windmills, and artistic heritage.",
    ],
    fun_fact: [
      "Amsterdam has more canals than Venice!",
      "The city is built on wooden piles, as the ground is very soft and marshy.",
    ],
    trivia: [
      "Amsterdam's Schiphol Airport is located below sea level.",
      "There are more bicycles than residents in Amsterdam.",
    ],
  },
  {
    city: "Berlin",
    country: "Germany",
    clues: [
      "Visit the Brandenburg Gate, remnants of the Berlin Wall, and explore its vibrant arts scene.",
      "A city of history, reunification, and cutting-edge culture.",
    ],
    fun_fact: [
      "Berlin has more museums than rainy days in a year!",
      "Berlin is nine times bigger than Paris.",
    ],
    trivia: [
      "Berlin was divided into East and West Berlin during the Cold War.",
      "Currywurst is a popular fast food dish invented in Berlin.",
    ],
  },
  {
    city: "Kyoto",
    country: "Japan",
    clues: [
      "Ancient temples, geishas in Gion, and serene gardens define this cultural heart of Japan.",
      "The former imperial capital, a city of tradition and tranquility.",
    ],
    fun_fact: [
      "Kyoto was the capital of Japan for over 1,000 years!",
      "Fushimi Inari Shrine in Kyoto has thousands of vibrant red torii gates.",
    ],
    trivia: [
      "Kyoto is known for its traditional wooden machiya houses.",
      "The Golden Pavilion (Kinkaku-ji) is covered in gold leaf.",
    ],
  },
  {
    city: "San Francisco",
    country: "USA",
    clues: [
      "Ride a cable car, visit Alcatraz Island, and see the Golden Gate Bridge.",
      "A city by the bay, known for its hills, fog, and tech innovation.",
    ],
    fun_fact: [
      "The Golden Gate Bridge was originally supposed to be painted black and yellow stripes!",
      "Alcatraz Island was once a maximum-security prison, and no inmate ever successfully escaped.",
    ],
    trivia: [
      "San Francisco is famous for its sourdough bread.",
      "The city is built on over 50 hills.",
    ],
  },
  {
    city: "Venice",
    country: "Italy",
    clues: [
      "Glide through canals in a gondola and explore St. Mark's Square.",
      "A city of canals, bridges, and romantic waterways.",
    ],
    fun_fact: [
      "Venice is built on over 100 small islands connected by canals and bridges.",
      "Gondolas in Venice have been traditionally black for centuries.",
    ],
    trivia: [
      "Venice is sinking at a rate of about 1-2 millimeters per year.",
      "Carnival of Venice is a famous festival with elaborate masks and costumes.",
    ],
  },
  {
    city: "Cape Town",
    country: "South Africa",
    clues: [
      "Table Mountain overlooks this city known for its stunning natural beauty.",
      "At the tip of Africa, where oceans meet and vineyards flourish.",
    ],
    fun_fact: [
      "Table Mountain is one of the New7Wonders of Nature.",
      "Robben Island, where Nelson Mandela was imprisoned, is a short ferry ride from Cape Town.",
    ],
    trivia: [
      "Cape Town is the oldest city in South Africa.",
      "The Cape of Good Hope is not actually the southernmost point of Africa (it's Cape Agulhas).",
    ],
  },
  {
    city: "Bangkok",
    country: "Thailand",
    clues: [
      "Visit ornate temples, bustling markets, and cruise along the Chao Phraya River.",
      "The 'City of Angels', known for its street food and vibrant nightlife.",
    ],
    fun_fact: [
      "Bangkok's full ceremonial name is the longest city name in the world!",
      "Wat Arun (Temple of Dawn) is decorated with millions of pieces of colorful Chinese porcelain.",
    ],
    trivia: [
      "Bangkok is known for its tuk-tuks, a type of motorized rickshaw.",
      "Floating markets are a unique feature of Bangkok and surrounding areas.",
    ],
  },
  {
    city: "Seoul",
    country: "South Korea",
    clues: [
      "Explore K-pop culture, ancient palaces, and bustling shopping districts.",
      "A city of high-tech modernity and traditional charm in South Korea.",
    ],
    fun_fact: [
      "Seoul is surrounded by mountains, offering hiking opportunities within the city.",
      "The DMZ (Demilitarized Zone) separating North and South Korea is a short distance from Seoul.",
    ],
    trivia: [
      "Seoul means 'Capital City' in Korean.",
      "Kimchi, a fermented cabbage dish, is a staple food in Korean cuisine.",
    ],
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    clues: [
      "Tango dance, European-style architecture, and passionate culture define this South American capital.",
      "The 'Paris of South America', known for its steak and vibrant nightlife.",
    ],
    fun_fact: [
      "Buenos Aires is home to the widest avenue in the world, Avenida 9 de Julio.",
      "Tango originated in the working-class neighborhoods of Buenos Aires in the late 19th century.",
    ],
    trivia: [
      "Buenos Aires is named after 'good airs' or 'fair winds'.",
      "Football (soccer) is a national passion in Argentina, and Buenos Aires is home to numerous famous clubs.",
    ],
  },
  {
    city: "Toronto",
    country: "Canada",
    clues: [
      "Visit the CN Tower, explore diverse neighborhoods, and experience multicultural cuisine.",
      "Canada's largest city, a melting pot of cultures and home to the Raptors.",
    ],
    fun_fact: [
      "The CN Tower was once the tallest freestanding structure in the world.",
      "Toronto has over 8,000 restaurants representing almost every cuisine in the world.",
    ],
    trivia: [
      "Toronto is derived from a Mohawk word meaning 'place where trees are standing in the water'.",
      "Casa Loma, a castle-like mansion, is a popular tourist attraction in Toronto.",
    ],
  },
  {
    city: "Vienna",
    country: "Austria",
    clues: [
      "City of music, palaces, and classical elegance on the Danube River.",
      "Explore imperial palaces, attend a classical concert, and enjoy Sachertorte.",
    ],
    fun_fact: [
      "Vienna is often called the 'City of Music' because of its rich musical heritage, home to composers like Mozart and Beethoven.",
      "The Schönbrunn Palace was the summer residence of the Habsburg emperors.",
    ],
    trivia: [
      "Vienna is home to the oldest zoo in the world, Tiergarten Schönbrunn.",
      "Coffee houses in Vienna are a traditional and important part of the city's culture.",
    ],
  },
  {
    city: "Prague",
    country: "Czech Republic",
    clues: [
      "Walk across Charles Bridge, explore Prague Castle, and admire the Astronomical Clock.",
      "A city of fairytale charm, medieval architecture, and Bohemian spirit.",
    ],
    fun_fact: [
      "Prague Castle is the largest ancient castle complex in the world, according to the Guinness Book of World Records.",
      "The Astronomical Clock in Prague's Old Town Square is one of the oldest and most elaborate astronomical clocks still working.",
    ],
    trivia: [
      "Prague is known as 'The City of a Hundred Spires' because of its numerous church towers.",
      "Czech beer is famous worldwide, and Prague has many traditional pubs.",
    ],
  },
  {
    city: "Mexico City",
    country: "Mexico",
    clues: [
      "Explore ancient Aztec ruins, vibrant markets, and colorful neighborhoods.",
      "A sprawling metropolis with rich history, delicious street food, and Frida Kahlo's legacy.",
    ],
    fun_fact: [
      "Mexico City is built on the ruins of the ancient Aztec capital, Tenochtitlan.",
      "The Zocalo, Mexico City's main square, is one of the largest city squares in the world.",
    ],
    trivia: [
      "Mexico City is one of the highest major cities in the world, located at an altitude of over 7,000 feet.",
      "Chapultepec Park in Mexico City is one of the largest city parks in the Western Hemisphere.",
    ],
  },
  {
    city: "Singapore",
    country: "Singapore",
    clues: [
      "Gardens by the Bay, futuristic architecture, and diverse culinary scene define this island city-state.",
      "A modern metropolis, known for its cleanliness, innovation, and delicious hawker food.",
    ],
    fun_fact: [
      "Singapore is one of the greenest cities in the world, with a focus on urban greenery and sustainability.",
      "Chewing gum is banned in Singapore to maintain cleanliness.",
    ],
    trivia: [
      "Singapore is actually made up of 63 islands, although the main island is the largest.",
      "The Merlion, a mythical creature with a lion's head and a fish's body, is the national symbol of Singapore.",
    ],
  },
  {
    city: "Lisbon",
    country: "Portugal",
    clues: [
      "Ride historic trams, explore Alfama district, and enjoy Fado music.",
      "A city of hills, colorful tiles, and maritime history on the Tagus River.",
    ],
    fun_fact: [
      "Lisbon is one of the oldest cities in Western Europe, predating other modern European capitals such as London, Paris and Rome by centuries.",
      "The 25 de Abril Bridge in Lisbon is often compared to the Golden Gate Bridge in San Francisco due to its similar color and design.",
    ],
    trivia: [
      "Lisbon is known for its custard tarts, 'Pastéis de Nata'.",
      "Jerónimos Monastery is a UNESCO World Heritage site and a masterpiece of Manueline architecture.",
    ],
  },
  {
    city: "Dublin",
    country: "Ireland",
    clues: [
      "Visit Trinity College, enjoy Guinness in a traditional pub, and explore historic castles.",
      "A city of literature, music, and Irish charm on the River Liffey.",
    ],
    fun_fact: [
      "The Guinness Storehouse is Ireland's most popular tourist attraction.",
      "Phoenix Park in Dublin is one of the largest enclosed city parks in Europe.",
    ],
    trivia: [
      "Dublin is named from the Gaelic 'Dubh Linn', meaning 'Black Pool'.",
      "St. Patrick's Day is celebrated globally but originated in Ireland.",
    ],
  },
  {
    city: "Budapest",
    country: "Hungary",
    clues: [
      "Relax in thermal baths, explore Buda Castle, and cruise along the Danube River.",
      "A city of thermal springs, grand architecture, and vibrant nightlife in Eastern Europe.",
    ],
    fun_fact: [
      "Budapest is known as the 'City of Spas' due to its numerous thermal springs and bathhouses.",
      "The Hungarian Parliament Building is one of the oldest legislative buildings in Europe and a stunning example of Gothic Revival architecture.",
    ],
    trivia: [
      "Budapest was originally two separate cities, Buda and Pest, which merged in 1873.",
      "Ruin bars are a unique feature of Budapest's nightlife, located in abandoned buildings and courtyards.",
    ],
  },
  {
    city: "Madrid",
    country: "Spain",
    clues: [
      "Visit the Royal Palace, explore art museums like Prado, and enjoy tapas in lively plazas.",
      "The capital of Spain, a city of art, history, and vibrant Spanish culture.",
    ],
    fun_fact: [
      "The Royal Palace of Madrid is the largest functioning royal palace in Europe.",
      "Madrid's Retiro Park was once the royal gardens and is now a popular public park.",
    ],
    trivia: [
      "Madrid is located almost exactly in the geographical center of Spain.",
      "Churros con chocolate are a popular sweet treat in Madrid.",
    ],
  },
  {
    city: "Athens",
    country: "Greece",
    clues: [
      "Explore the Acropolis, walk through ancient streets, and discover the birthplace of democracy.",
      "A city of ancient wonders, mythology, and Mediterranean charm.",
    ],
    fun_fact: [
      "The Acropolis of Athens is a UNESCO World Heritage Site and home to iconic structures like the Parthenon.",
      "Athens is one of the oldest continuously inhabited cities in the world.",
    ],
    trivia: [
      "The Olympic Games originated in ancient Greece.",
      "Plaka is the oldest neighborhood in Athens, located beneath the Acropolis.",
    ],
  },
  {
    city: "Oslo",
    country: "Norway",
    clues: [
      "Explore Viking history, visit the Munch Museum, and enjoy fjord cruises.",
      "A city surrounded by nature, known for its fjords, museums, and Scandinavian design.",
    ],
    fun_fact: [
      "Oslo is one of the world's most expensive cities, but also consistently ranks high in quality of life.",
      "Viking ships dating back over 1,000 years are preserved in the Viking Ship Museum in Oslo.",
    ],
    trivia: [
      "Oslo was originally called Christiania.",
      "Norway is famous for its fjords, and Oslofjord is easily accessible from the city center.",
    ],
  },
  {
    city: "Stockholm",
    country: "Sweden",
    clues: [
      "Explore Gamla Stan (Old Town), visit the Vasa Museum, and island hop in the archipelago.",
      "A city built on islands, known for its design, history, and Scandinavian cool.",
    ],
    fun_fact: [
      "Stockholm is built on 14 islands connected by 57 bridges.",
      "The Vasa Museum houses a remarkably well-preserved 17th-century warship that sank on its maiden voyage.",
    ],
    trivia: [
      "Stockholm is home to the Nobel Prize ceremonies.",
      "Fika, the Swedish coffee break, is an important part of the culture.",
    ],
  },
  {
    city: "Helsinki",
    country: "Finland",
    clues: [
      "Visit Suomenlinna Fortress, enjoy Finnish saunas, and explore modern design.",
      "A city by the sea, known for its architecture, design, and Nordic nature.",
    ],
    fun_fact: [
      "Helsinki is known as the 'Daughter of the Baltic' because of its seaside location and maritime history.",
      "Finland is known as the 'Land of a Thousand Lakes', and there are many lakes and islands near Helsinki.",
    ],
    trivia: [
      "Sauna is a big part of Finnish culture, and there are public saunas in Helsinki.",
      "Marimekko, a famous Finnish design house known for its bold patterns, is based in Helsinki.",
    ],
  },
  {
    city: "Copenhagen",
    country: "Denmark",
    clues: [
      "Visit the Little Mermaid statue, explore Tivoli Gardens, and cycle through colorful streets.",
      "A city of hygge, design, and fairy tales, known for its canals and cycling culture.",
    ],
    fun_fact: [
      "Copenhagen is one of the most bike-friendly cities in the world.",
      "Tivoli Gardens is one of the oldest amusement parks in the world.",
    ],
    trivia: [
      "Denmark is consistently ranked as one of the happiest countries in the world.",
      "Smørrebrød, open-faced sandwiches, are a Danish culinary specialty.",
    ],
  },
  {
    city: "Zurich",
    country: "Switzerland",
    clues: [
      "Explore Old Town, enjoy lakeside views, and indulge in Swiss chocolate.",
      "A city of finance, lakes, and mountains, known for its high quality of life.",
    ],
    fun_fact: [
      "Zurich is located on Lake Zurich and surrounded by the Swiss Alps.",
      "Bahnhofstrasse in Zurich is one of the most expensive and exclusive shopping streets in the world.",
    ],
    trivia: [
      "Switzerland has four official languages: German, French, Italian, and Romansh.",
      "Swiss chocolate and cheese are world-famous.",
    ],
  },
  {
    city: "Brussels",
    country: "Belgium",
    clues: [
      "Grand Place, Belgian chocolate, and quirky Manneken Pis fountain define this European capital.",
      "The heart of Europe, known for its waffles, beer, and Art Nouveau architecture.",
    ],
    fun_fact: [
      "Brussels is considered the unofficial capital of the European Union.",
      "Belgium produces over 220,000 tons of chocolate per year.",
    ],
    trivia: [
      "French fries are believed to have originated in Belgium, not France.",
      "Brussels sprouts are named after the city.",
    ],
  },
  {
    city: "Edinburgh",
    country: "UK",
    clues: [
      "Explore Edinburgh Castle, walk the Royal Mile, and hike Arthur's Seat.",
      "Scotland's capital, a city of history, castles, and dramatic landscapes.",
    ],
    fun_fact: [
      "Edinburgh Castle is built on an extinct volcano.",
      "The Royal Mile is actually longer than a mile (it's about 1.8 km or 1.1 miles).",
    ],
    trivia: [
      "Edinburgh is known for its festivals, especially the Edinburgh Festival Fringe, the world's largest arts festival.",
      "Haggis, a savory pudding containing sheep's pluck, is a traditional Scottish dish.",
    ],
  },
  {
    city: "Kyiv",
    country: "Ukraine",
    clues: [
      "Visit St. Sophia's Cathedral, explore Independence Square, and discover Eastern European culture.",
      "A historic city on the Dnieper River, known for its golden-domed churches and resilience.",
    ],
    fun_fact: [
      "Kyiv is one of the oldest cities in Eastern Europe.",
      "The Kyiv Metro is one of the deepest metro systems in the world, partly due to the city's hilly terrain.",
    ],
    trivia: [
      "Chicken Kyiv is a famous dish, though its exact origin is debated.",
      "Independence Square (Maidan Nezalezhnosti) has been the site of major protests and historical events in Ukraine.",
    ],
  },
  {
    city: "Saint Petersburg",
    country: "Russia",
    clues: [
      "Explore the Hermitage Museum, cruise along canals, and admire imperial palaces.",
      "Russia's 'Venice of the North', a city of art, culture, and opulent architecture.",
    ],
    fun_fact: [
      "The Hermitage Museum is one of the largest and oldest museums in the world, housing over three million items.",
      "Saint Petersburg is known for its 'White Nights' during summer, when the sun barely sets.",
    ],
    trivia: [
      "Saint Petersburg was founded by Tsar Peter the Great and was the capital of Russia for over 200 years.",
      "The Winter Palace is part of the Hermitage Museum complex and was the former residence of Russian emperors.",
    ],
  },
  {
    city: "Montreal",
    country: "Canada",
    clues: [
      "Explore Old Montreal, visit Notre-Dame Basilica, and experience French-Canadian culture.",
      "A bilingual city in Quebec, known for its European charm and vibrant festivals.",
    ],
    fun_fact: [
      "Montreal is the second-largest French-speaking city in the world after Paris.",
      "The Montreal Underground City (RESO) is a network of tunnels beneath the city with shops, restaurants, and metro stations.",
    ],
    trivia: [
      "Montreal is named after Mount Royal, a hill in the city's center.",
      "Poutine, a dish of french fries, cheese curds, and gravy, originated in Quebec.",
    ],
  },
  {
    city: "Vancouver",
    country: "Canada",
    clues: [
      "Stanley Park, Granville Island Market, and stunning mountain and ocean views define this coastal city.",
      "A city surrounded by nature, known for its outdoor activities, rainforests, and multiculturalism.",
    ],
    fun_fact: [
      "Stanley Park is one of the largest urban parks in North America, larger than New York's Central Park.",
      "Vancouver is a major film production center, often called 'Hollywood North'.",
    ],
    trivia: [
      "Vancouver hosted the 2010 Winter Olympics.",
      "Gastown is Vancouver's oldest neighborhood, known for its Victorian architecture and steam clock.",
    ],
  },
  {
    city: "Los Angeles",
    country: "USA",
    clues: [
      "Hollywood Walk of Fame, beaches like Santa Monica and Venice, and theme parks await.",
      "The 'City of Angels', known for its entertainment industry, sunny weather, and diverse culture.",
    ],
    fun_fact: [
      "The Hollywood sign originally said 'Hollywoodland' and was meant to be temporary.",
      "Los Angeles has more museums and theaters than any other U.S. city.",
    ],
    trivia: [
      "Los Angeles is often abbreviated as L.A.",
      "Disneyland, the first Disney theme park, is located near Los Angeles in Anaheim.",
    ],
  },
  {
    city: "Miami",
    country: "USA",
    clues: [
      "South Beach, Art Deco architecture, and Cuban culture define this vibrant Floridian city.",
      "A city of beaches, nightlife, and Latin American influences in South Florida.",
    ],
    fun_fact: [
      "Miami Beach is home to the largest collection of Art Deco architecture in the world.",
      "Everglades National Park, a unique wetland ecosystem, is located near Miami.",
    ],
    trivia: [
      "Miami is often called the 'Capital of Latin America' due to its large Hispanic population.",
      "South Beach is famous for its colorful lifeguard stands.",
    ],
  },
  {
    city: "San Diego",
    country: "USA",
    clues: [
      "Balboa Park, beaches like Coronado, and historic Old Town define this Californian city.",
      "A city known for its pleasant climate, beaches, and naval history in Southern California.",
    ],
    fun_fact: [
      "Balboa Park is larger than New York's Central Park and home to numerous museums, gardens, and the San Diego Zoo.",
      "The USS Midway Museum is located on a historic aircraft carrier in San Diego Bay.",
    ],
    trivia: [
      "San Diego is the oldest town in California.",
      "The San Diego Zoo is one of the largest and most famous zoos in the world.",
    ],
  },
  {
    city: "Seattle",
    country: "USA",
    clues: [
      "Space Needle, Pike Place Market, and coffee culture define this Pacific Northwest city.",
      "The 'Emerald City', known for its coffee, music scene, and tech industry (home to Amazon and Microsoft).",
    ],
    fun_fact: [
      "The Space Needle was built for the 1962 World's Fair.",
      "Pike Place Market is one of the oldest continuously operating public farmers' markets in the United States.",
    ],
    trivia: [
      "Seattle is considered the birthplace of grunge music.",
      "Starbucks originated in Seattle.",
    ],
  },
  {
    city: "Boston",
    country: "USA",
    clues: [
      "Freedom Trail, Fenway Park, and prestigious universities define this historic East Coast city.",
      "A city rich in American history, known for its universities (Harvard and MIT) and sports teams.",
    ],
    fun_fact: [
      "The Freedom Trail is a 2.5-mile path that leads to 16 historically significant sites in Boston.",
      "Fenway Park is the oldest ballpark in Major League Baseball still in use.",
    ],
    trivia: [
      "Boston is known as 'Beantown'.",
      "The Boston Marathon is the world's oldest annual marathon.",
    ],
  },
  {
    city: "Chicago",
    country: "USA",
    clues: [
      "Cloud Gate ('The Bean'), deep-dish pizza, and skyscrapers define this Midwestern metropolis.",
      "The 'Windy City', known for its architecture, museums, and blues music.",
    ],
    fun_fact: [
      "The Willis Tower (formerly Sears Tower) was once the tallest building in the world.",
      "Chicago's Art Institute is home to iconic paintings like 'American Gothic' and 'Nighthawks'.",
    ],
    trivia: [
      "Chicago is famous for its deep-dish pizza.",
      "The Chicago River is famously dyed green every year for St. Patrick's Day.",
    ],
  },
  {
    city: "Las Vegas",
    country: "USA",
    clues: [
      "The Strip, casinos, and spectacular shows define this entertainment capital in the desert.",
      "The 'Entertainment Capital of the World', known for its nightlife, casinos, and extravagant hotels.",
    ],
    fun_fact: [
      "Las Vegas has more hotel rooms than any other city in the world.",
      "The Las Vegas Strip is not actually located within the city limits of Las Vegas but in Paradise, Nevada.",
    ],
    trivia: [
      "Las Vegas is located in the Mojave Desert.",
      "Wedding chapels in Las Vegas are famous for quick and easy weddings.",
    ],
  },
  {
    city: "Austin",
    country: "USA",
    clues: [
      "Live music scene, food trucks, and 'Keep Austin Weird' slogan define this Texas capital.",
      "The 'Live Music Capital of the World', known for its tech industry, outdoor activities, and breakfast tacos.",
    ],
    fun_fact: [
      "Austin is home to the largest urban bat colony in North America at the Congress Avenue Bridge.",
      "South by Southwest (SXSW) is a major music, film, and interactive media festival held annually in Austin.",
    ],
    trivia: [
      "Austin is the capital of Texas.",
      "The slogan 'Keep Austin Weird' promotes local businesses and the city's unique culture.",
    ],
  },
  {
    city: "Nashville",
    country: "USA",
    clues: [
      "Country Music Hall of Fame, live music venues, and hot chicken define this Tennessee city.",
      "The 'Music City', known for its country music scene, barbecue, and Southern hospitality.",
    ],
    fun_fact: [
      "The Grand Ole Opry is a legendary country music venue in Nashville.",
      "Nashville hot chicken is a spicy fried chicken dish that originated in the city.",
    ],
    trivia: [
      "Nashville is the capital of Tennessee.",
      "The Country Music Hall of Fame and Museum is located in Nashville.",
    ],
  },
  {
    city: "New Orleans",
    country: "USA",
    clues: [
      "French Quarter, jazz music, and Mardi Gras celebrations define this Louisiana city.",
      "The 'Big Easy', known for its Creole cuisine, vibrant nightlife, and unique culture.",
    ],
    fun_fact: [
      "New Orleans is considered the birthplace of jazz music.",
      "Mardi Gras is a famous carnival celebration held annually in New Orleans.",
    ],
    trivia: [
      "Beignets and gumbo are famous New Orleans dishes.",
      "New Orleans is located below sea level and is protected by levees.",
    ],
  },
  {
    city: "Philadelphia",
    country: "USA",
    clues: [
      "Liberty Bell, Independence Hall, and cheesesteaks define this historic Pennsylvania city.",
      "The 'City of Brotherly Love', known for its American history, art museums, and sports teams.",
    ],
    fun_fact: [
      "The Liberty Bell is a symbol of American independence and is located in Philadelphia.",
      "Independence Hall is where the Declaration of Independence and the U.S. Constitution were debated and signed.",
    ],
    trivia: [
      "Philadelphia cheesesteaks are a famous local sandwich.",
      "The Philadelphia Museum of Art is known for the 'Rocky Steps' featured in the 'Rocky' movies.",
    ],
  },
  {
    city: "Denver",
    country: "USA",
    clues: [
      "Rocky Mountains views, craft breweries, and outdoor activities define this Colorado city.",
      "The 'Mile High City', known for its proximity to the mountains, outdoor recreation, and craft beer scene.",
    ],
    fun_fact: [
      "Denver is located exactly one mile above sea level, hence the nickname 'Mile High City'.",
      "Red Rocks Amphitheatre, a natural open-air amphitheater, is located near Denver.",
    ],
    trivia: [
      "Denver is the capital of Colorado.",
      "The Rocky Mountains are easily accessible from Denver, offering skiing, hiking, and other outdoor activities.",
    ],
  },
  {
    city: "Atlanta",
    country: "USA",
    clues: [
      "World of Coca-Cola, CNN Center, and civil rights history define this Georgia city.",
      "The 'ATL', known for its Southern hospitality, history, and as a major transportation hub.",
    ],
    fun_fact: [
      "Atlanta is the birthplace of Coca-Cola, and the World of Coca-Cola museum is located there.",
      "The Martin Luther King Jr. National Historical Park is located in Atlanta, preserving sites related to the civil rights leader.",
    ],
    trivia: [
      "Atlanta is the capital of Georgia.",
      "Hartsfield-Jackson Atlanta International Airport is one of the busiest airports in the world.",
    ],
  },
  {
    city: "Honolulu",
    country: "USA",
    clues: [
      "Waikiki Beach, Pearl Harbor, and Polynesian culture define this Hawaiian capital.",
      "Paradise in the Pacific, known for its beaches, surfing, and Aloha spirit.",
    ],
    fun_fact: [
      "Pearl Harbor is a historic site and memorial to the attack that led to the U.S. entering World War II.",
      "Waikiki Beach is one of the most famous beaches in the world.",
    ],
    trivia: [
      "Honolulu is the capital of Hawaii.",
      "Aloha is a Hawaiian greeting that means love, affection, peace, compassion, and mercy.",
    ],
  },
  {
    city: "Portland",
    country: "USA",
    clues: [
      "Rose Garden, craft breweries, and 'Keep Portland Weird' slogan define this Oregon city.",
      "The 'City of Roses', known for its coffee, food carts, and independent spirit.",
    ],
    fun_fact: [
      "Portland is home to the International Rose Test Garden, one of the oldest public rose test gardens in the United States.",
      "Portland is known for its numerous food carts offering diverse cuisines.",
    ],
    trivia: [
      "Portland is considered one of the most environmentally friendly cities in the U.S.",
      "Powell's City of Books in Portland is one of the largest independent bookstores in the world.",
    ],
  },
  {
    city: "Minneapolis",
    country: "USA",
    clues: [
      "Chain of Lakes, Mill City Museum, and 'Mini-Apple' nickname define this Minnesota city.",
      "A city of lakes, parks, and arts, known for its Scandinavian heritage and cold winters.",
    ],
    fun_fact: [
      "Minneapolis and Saint Paul are known as the 'Twin Cities'.",
      "The Mall of America, one of the largest shopping malls in the United States, is located in nearby Bloomington.",
    ],
    trivia: [
      "Minneapolis is known for its Chain of Lakes, a series of interconnected lakes and parks.",
      "Prince, the famous musician, was from Minneapolis.",
    ],
  },
  {
    city: "Rome",
    country: "Italy",
    clues: [
      "Ancient ruins, Vatican City, and pizza define this Italian capital.",
      "The 'Eternal City', known for its history, art, and delicious food.",
    ],
    fun_fact: [
      "The Colosseum is one of the most iconic ancient Roman structures.",
      "Vatican City is the smallest country in the world and located within Rome.",
    ],
    trivia: [
      "Tossing a coin into the Trevi Fountain is said to ensure a return to Rome.",
      "Gelato, Italian ice cream, is a popular treat in Rome.",
    ],
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    clues: [
      "Canals, Anne Frank House, and tulips define this Dutch capital.",
      "A city of canals, bicycles, and art museums, known for its liberal culture.",
    ],
    fun_fact: [
      "Amsterdam has more canals than Venice.",
      "Anne Frank House is a poignant museum dedicated to Anne Frank and her diary.",
    ],
    trivia: [
      "Bicycles are a primary mode of transportation in Amsterdam.",
      "The Rijksmuseum houses a vast collection of Dutch Masters paintings.",
    ],
  },
  {
    city: "Sydney",
    country: "Australia",
    clues: [
      "Opera House, Harbour Bridge, and Bondi Beach define this Australian city.",
      "A sunny city down under, known for its beaches, harbor, and outdoor lifestyle.",
    ],
    fun_fact: [
      "The Sydney Opera House is a UNESCO World Heritage Site and an iconic architectural masterpiece.",
      "Bondi Beach is one of the most famous beaches in the world and a surfing hotspot.",
    ],
    trivia: [
      "Sydney is the largest city in Australia, but not the capital (which is Canberra).",
      "Kangaroos and koalas are native Australian animals.",
    ],
  },
  {
    city: "Tokyo",
    country: "Japan",
    clues: [
      "Shibuya Crossing, cherry blossoms, and sushi define this Japanese capital.",
      "A bustling metropolis, known for its technology, fashion, and unique culture.",
    ],
    fun_fact: [
      "Shibuya Crossing is the world's busiest intersection.",
      "Cherry blossoms (sakura) are a symbol of Japan and bloom beautifully in spring.",
    ],
    trivia: [
      "Sushi is a famous Japanese cuisine.",
      "Mount Fuji is Japan's highest mountain and a symbol of the country.",
    ],
  },
  {
    city: "Paris",
    country: "France",
    clues: [
      "Eiffel Tower, Louvre Museum, and croissants define this French capital.",
      "The 'City of Love', known for its romance, art, and fashion.",
    ],
    fun_fact: [
      "The Eiffel Tower was originally built for the 1889 World's Fair.",
      "The Louvre Museum is home to masterpieces like the Mona Lisa and Venus de Milo.",
    ],
    trivia: [
      "Croissants and macarons are famous French pastries.",
      "French is the official language of France.",
    ],
  },
  {
    city: "London",
    country: "UK",
    clues: [
      "Big Ben, Buckingham Palace, and red double-decker buses define this British capital.",
      "A historic city, known for its landmarks, museums, and diverse culture.",
    ],
    fun_fact: [
      "Big Ben is actually the nickname for the Great Bell inside the Elizabeth Tower at the Houses of Parliament.",
      "Buckingham Palace is the official residence of the Queen of England.",
    ],
    trivia: [
      "The London Underground is the world's oldest underground railway network.",
      "Fish and chips is a classic British dish.",
    ],
  },
  {
    city: "New York City",
    country: "USA",
    clues: [
      "Statue of Liberty, Times Square, and Broadway shows define this American metropolis.",
      "The 'Big Apple', known for its skyscrapers, museums, and vibrant energy.",
    ],
    fun_fact: [
      "The Statue of Liberty was a gift from France to the United States.",
      "Times Square is famous for its bright lights and New Year's Eve ball drop.",
    ],
    trivia: [
      "New York City is made up of five boroughs: Manhattan, Brooklyn, Queens, Bronx, and Staten Island.",
      "Pizza and bagels are iconic New York foods.",
    ],
  },
  {
    city: "Cairo",
    country: "Egypt",
    clues: [
      "Pyramids of Giza, Nile River, and ancient history define this Egyptian capital.",
      "A city of pharaohs, pyramids, and bustling markets, known for its ancient wonders.",
    ],
    fun_fact: [
      "The Pyramids of Giza are among the Seven Wonders of the Ancient World.",
      "The Nile River is the longest river in the world and flows through Cairo.",
    ],
    trivia: [
      "Arabic is the official language of Egypt.",
      "Kushari, a mix of pasta, rice, lentils, and chickpeas, is a popular Egyptian street food.",
    ],
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    clues: [
      "Christ the Redeemer, Copacabana Beach, and Carnival define this Brazilian city.",
      "A vibrant city of beaches, samba, and stunning views, known for its festive spirit.",
    ],
    fun_fact: [
      "Christ the Redeemer statue overlooks Rio de Janeiro from Corcovado Mountain.",
      "Copacabana Beach is one of the most famous beaches in the world.",
    ],
    trivia: [
      "Portuguese is the official language of Brazil.",
      "Feijoada, a black bean stew, is considered Brazil's national dish.",
    ],
  },
  {
    city: "Barcelona",
    country: "Spain",
    clues: [
      "Sagrada Familia, Park Güell, and tapas define this Spanish city.",
      "A city of Gaudi architecture, beaches, and Catalan culture, known for its art and vibrant streets.",
    ],
    fun_fact: [
      "The Sagrada Familia is an unfinished basilica designed by Antoni Gaudí.",
      "Park Güell is another famous park designed by Gaudí, known for its mosaics and whimsical architecture.",
    ],
    trivia: [
      "Catalan and Spanish are both official languages in Barcelona.",
      "Paella, a rice dish, is a famous Spanish cuisine.",
    ],
  },
  {
    city: "Dubai",
    country: "UAE",
    clues: [
      "Burj Khalifa, Palm Jumeirah, and luxury shopping define this UAE city.",
      "A modern metropolis, known for its skyscrapers, shopping malls, and desert adventures.",
    ],
    fun_fact: [
      "The Burj Khalifa is the tallest building in the world.",
      "Palm Jumeirah is an artificial archipelago shaped like a palm tree.",
    ],
    trivia: [
      "Arabic is the official language of the UAE.",
      "Shawarma and falafel are popular Middle Eastern street foods.",
    ],
  },
  {
    city: "Beijing",
    country: "China",
    clues: [
      "Forbidden City, Great Wall of China, and Peking duck define this Chinese capital.",
      "A historic city, known for its imperial palaces, temples, and rich culture.",
    ],
    fun_fact: [
      "The Forbidden City was the imperial palace from the Ming dynasty to the end of the Qing dynasty.",
      "The Great Wall of China is one of the Seven Wonders of the World.",
    ],
    trivia: [
      "Mandarin Chinese is the official language of China.",
      "Peking duck is a famous Beijing dish.",
    ],
  },
  {
    city: "Moscow",
    country: "Russia",
    clues: [
      "Red Square, Kremlin, and St. Basil's Cathedral define this Russian capital.",
      "A city of grand architecture, history, and culture, known for its iconic landmarks.",
    ],
    fun_fact: [
      "Red Square is the central square of Moscow and Russia.",
      "The Kremlin is a fortified complex containing palaces, cathedrals, and museums.",
    ],
    trivia: [
      "Russian is the official language of Russia.",
      "Borscht, a beetroot soup, is a traditional Russian dish.",
    ],
  },
  {
    city: "Istanbul",
    country: "Turkey",
    clues: [
      "Hagia Sophia, Blue Mosque, and Turkish bazaars define this Turkish city.",
      "A city straddling two continents, known for its history, culture, and vibrant markets.",
    ],
    fun_fact: [
      "Hagia Sophia was originally a church, then a mosque, and now a museum.",
      "The Blue Mosque is famous for its blue tiles and impressive architecture.",
    ],
    trivia: [
      "Turkish is the official language of Turkey.",
      "Turkish delight and baklava are popular Turkish sweets.",
    ],
  },
  {
    city: "Kyoto",
    country: "Japan",
    clues: [
      "Golden Pavilion, Fushimi Inari Shrine, and geishas define this Japanese city.",
      "A city of traditional gardens, temples, and geisha districts, known for its cultural heritage.",
    ],
    fun_fact: [
      "The Golden Pavilion (Kinkaku-ji) is a Zen Buddhist temple covered in gold leaf.",
      "Fushimi Inari Shrine is famous for its thousands of vermilion torii gates.",
    ],
    trivia: [
      "Matcha, powdered green tea, is a traditional Japanese drink.",
      "Kimono is a traditional Japanese garment.",
    ],
  },
  {
    city: "San Francisco",
    country: "USA",
    clues: [
      "Golden Gate Bridge, Alcatraz Island, and cable cars define this Californian city.",
      "A city by the bay, known for its hills, fog, and iconic landmarks.",
    ],
    fun_fact: [
      "The Golden Gate Bridge is an iconic suspension bridge and a symbol of San Francisco.",
      "Alcatraz Island was a former prison and is now a popular tourist attraction.",
    ],
    trivia: [
      "Sourdough bread is a San Francisco specialty.",
      "Cable cars are a historic mode of transportation unique to San Francisco.",
    ],
  },
  {
    city: "Venice",
    country: "Italy",
    clues: [
      "Grand Canal, Rialto Bridge, and gondolas define this Italian city.",
      "A city of canals, bridges, and romantic waterways, known for its unique charm.",
    ],
    fun_fact: [
      "Venice is built on a group of 118 small islands separated by canals and linked by bridges.",
      "Gondolas are traditional Venetian rowing boats.",
    ],
    trivia: [
      "Italian is the official language of Italy.",
      "Pizza and pasta are famous Italian cuisines.",
    ],
  },
  {
    city: "Cape Town",
    country: "South Africa",
    clues: [
      "Table Mountain, Robben Island, and penguins define this South African city.",
      "A city at the tip of Africa, known for its natural beauty, beaches, and diverse culture.",
    ],
    fun_fact: [
      "Table Mountain overlooks Cape Town and is a prominent landmark.",
      "Robben Island is where Nelson Mandela was imprisoned and is now a museum.",
    ],
    trivia: [
      "English, Afrikaans, and Xhosa are official languages of South Africa.",
      "Biltong, dried cured meat, is a popular South African snack.",
    ],
  },
  {
    city: "Bangkok",
    country: "Thailand",
    clues: [
      "Wat Arun, Grand Palace, and street food define this Thai capital.",
      "A city of temples, markets, and vibrant nightlife, known for its exotic charm.",
    ],
    fun_fact: [
      "Wat Arun (Temple of Dawn) is a stunning Buddhist temple on the Chao Phraya River.",
      "The Grand Palace was the official residence of the Kings of Siam (and later Thailand).",
    ],
    trivia: [
      "Thai is the official language of Thailand.",
      "Pad Thai, stir-fried rice noodles, is a famous Thai dish.",
    ],
  },
  {
    city: "Seoul",
    country: "South Korea",
    clues: [
      "Gyeongbokgung Palace, Myeongdong shopping, and K-pop define this South Korean capital.",
      "A city of high-tech modernity and traditional culture, known for its fashion and entertainment.",
    ],
    fun_fact: [
      "Gyeongbokgung Palace is the largest of Seoul's Five Grand Palaces.",
      "Myeongdong is a famous shopping district in Seoul known for cosmetics and fashion.",
    ],
    trivia: [
      "Korean is the official language of South Korea.",
      "Kimchi, fermented cabbage, is a staple food in Korean cuisine.",
    ],
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    clues: [
      "Tango, Recoleta Cemetery, and steak define this Argentinian capital.",
      "A city of European architecture, passionate culture, and vibrant nightlife, known as the 'Paris of South America'.",
    ],
    fun_fact: [
      "Tango originated in Buenos Aires.",
      "Recoleta Cemetery is famous for its elaborate mausoleums, including Eva Perón's grave.",
    ],
    trivia: [
      "Spanish is the official language of Argentina.",
      "Asado, barbecue, is a popular Argentinean social event and cuisine.",
    ],
  },
  {
    city: "Toronto",
    country: "Canada",
    clues: [
      "CN Tower, Niagara Falls (nearby), and multiculturalism define this Canadian city.",
      "Canada's largest city, known for its diversity, skyscrapers, and cultural attractions.",
    ],
    fun_fact: [
      "The CN Tower was once the world's tallest freestanding structure.",
      "Niagara Falls, a natural wonder, is a short trip from Toronto.",
    ],
    trivia: [
      "English and French are official languages of Canada.",
      "Poutine, french fries with cheese curds and gravy, is a Canadian dish.",
    ],
  },
  {
    city: "Vienna",
    country: "Austria",
    clues: [
      "Schönbrunn Palace, Mozart's House, and classical music define this Austrian capital.",
      "The 'City of Music', known for its imperial palaces, classical concerts, and elegant atmosphere.",
    ],
    fun_fact: [
      "Schönbrunn Palace was the summer residence of the Habsburg emperors.",
      "Mozart lived and composed music in Vienna.",
    ],
    trivia: [
      "German is the official language of Austria.",
      "Sachertorte, a chocolate cake, is a famous Viennese dessert.",
    ],
  },
  {
    city: "Prague",
    country: "Czech Republic",
    clues: [
      "Prague Castle, Charles Bridge, and beer define this Czech capital.",
      "A city of fairytale castles, medieval architecture, and Bohemian charm, known for its beer and history.",
    ],
    fun_fact: [
      "Prague Castle is one of the largest ancient castle complexes in the world.",
      "Charles Bridge is a historic bridge crossing the Vltava river.",
    ],
    trivia: [
      "Czech is the official language of the Czech Republic.",
      "Czech beer is world-renowned.",
    ],
  },
  {
    city: "Mexico City",
    country: "Mexico",
    clues: [
      "Teotihuacan pyramids (nearby), Frida Kahlo Museum, and tacos define this Mexican capital.",
      "A sprawling metropolis, known for its ancient ruins, museums, and vibrant street life.",
    ],
    fun_fact: [
      "Teotihuacan, an ancient Mesoamerican city, is located near Mexico City.",
      "The Frida Kahlo Museum (Casa Azul) was Frida Kahlo's birthplace and home.",
    ],
    trivia: [
      "Spanish is the official language of Mexico.",
      "Tacos and enchiladas are famous Mexican dishes.",
    ],
  },
  {
    city: "Singapore",
    country: "Singapore",
    clues: [
      "Gardens by the Bay, Marina Bay Sands, and hawker food define this island city-state.",
      "A modern and efficient city-state, known for its futuristic architecture, gardens, and diverse cuisine.",
    ],
    fun_fact: [
      "Gardens by the Bay features Supertree Grove and Cloud Forest.",
      "Marina Bay Sands is an iconic resort with a rooftop infinity pool.",
    ],
    trivia: [
      "English, Malay, Mandarin, and Tamil are official languages of Singapore.",
      "Hawker centers offer a wide variety of affordable and delicious food.",
    ],
  },
  {
    city: "Lisbon",
    country: "Portugal",
    clues: [
      "Belém Tower, Jerónimos Monastery, and pastel de nata define this Portuguese capital.",
      "A city of hills, historic neighborhoods, and Fado music, known for its maritime history.",
    ],
    fun_fact: [
      "Belém Tower is a UNESCO World Heritage Site on the Tagus River.",
      "Jerónimos Monastery is another UNESCO site and a masterpiece of Manueline architecture.",
    ],
    trivia: [
      "Portuguese is the official language of Portugal.",
      "Pastel de nata, custard tart, is a famous Portuguese pastry.",
    ],
  },
  {
    city: "Dublin",
    country: "Ireland",
    clues: [
      "Guinness Storehouse, Trinity College, and Irish pubs define this Irish capital.",
      "A city of literature, music, and friendly locals, known for its pubs and history.",
    ],
    fun_fact: [
      "The Guinness Storehouse is a popular tourist attraction dedicated to Guinness beer.",
      "Trinity College is Ireland's oldest university and home to the Book of Kells.",
    ],
    trivia: [
      "English and Irish (Gaeilge) are official languages of Ireland.",
      "Irish stew and fish and chips are traditional Irish dishes.",
    ],
  },
  {
    city: "Budapest",
    country: "Hungary",
    clues: [
      "Thermal baths, Buda Castle, and ruin bars define this Hungarian capital.",
      "A city of thermal springs, historic castles, and vibrant nightlife, known for its spas and beauty.",
    ],
    fun_fact: [
      "Budapest is known as the 'City of Spas' for its numerous thermal baths.",
      "Buda Castle is a historic castle and palace complex in Budapest.",
    ],
    trivia: [
      "Hungarian is the official language of Hungary.",
      "Goulash, a meat stew, is a famous Hungarian dish.",
    ],
  },
  {
    city: "Madrid",
    country: "Spain",
    clues: [
      "Royal Palace of Madrid, Prado Museum, and tapas define this Spanish capital.",
      "A city of art museums, royal palaces, and vibrant plazas, known for its culture and nightlife.",
    ],
    fun_fact: [
      "The Royal Palace of Madrid is the official residence of the Spanish Royal Family.",
      "The Prado Museum is one of the world's greatest art museums.",
    ],
    trivia: [
      "Spanish is the official language of Spain.",
      "Tapas, small savory dishes, are a staple of Spanish cuisine.",
    ],
  },
  {
    city: "Athens",
    country: "Greece",
    clues: [
      "Acropolis, Parthenon, and Greek mythology define this Greek capital.",
      "A city of ancient ruins, mythology, and Mediterranean charm, known as the birthplace of democracy.",
    ],
    fun_fact: [
      "The Acropolis is an ancient citadel and UNESCO World Heritage Site.",
      "The Parthenon is a temple on the Acropolis dedicated to the goddess Athena.",
    ],
    trivia: [
      "Greek is the official language of Greece.",
      "Souvlaki and gyros are popular Greek street foods.",
    ],
  },
  {
    city: "Oslo",
    country: "Norway",
    clues: [
      "Viking Ship Museum, fjords (nearby), and Nobel Peace Center define this Norwegian capital.",
      "A city surrounded by nature, known for its fjords, Viking history, and modern architecture.",
    ],
    fun_fact: [
      "The Viking Ship Museum houses well-preserved Viking ships.",
      "Oslofjord is a fjord easily accessible from the city.",
    ],
    trivia: [
      "Norwegian is the official language of Norway.",
      "Brown cheese (brunost) and salmon are Norwegian specialties.",
    ],
  },
  {
    city: "Stockholm",
    country: "Sweden",
    clues: [
      "Gamla Stan, Vasa Museum, and Swedish meatballs define this Swedish capital.",
      "A city of islands, historic Old Town, and modern design, known for its Scandinavian style.",
    ],
    fun_fact: [
      "Gamla Stan is Stockholm's Old Town with cobblestone streets and historic buildings.",
      "The Vasa Museum houses the Vasa warship, a well-preserved 17th-century ship.",
    ],
    trivia: [
      "Swedish is the official language of Sweden.",
      "Swedish meatballs and lingonberry jam are classic Swedish dishes.",
    ],
  },
  {
    city: "Helsinki",
    country: "Finland",
    clues: [
      "Suomenlinna Fortress, Finnish saunas, and design district define this Finnish capital.",
      "A city by the sea, known for its architecture, saunas, and Nordic nature.",
    ],
    fun_fact: [
      "Suomenlinna Fortress is a UNESCO World Heritage Site on islands near Helsinki.",
      "Saunas are an important part of Finnish culture.",
    ],
    trivia: [
      "Finnish and Swedish are official languages of Finland.",
      "Rye bread and Karelian pies are Finnish culinary specialties.",
    ],
  },
  {
    city: "Copenhagen",
    country: "Denmark",
    clues: [
      "Little Mermaid statue, Tivoli Gardens, and pastries define this Danish capital.",
      "A city of fairy tales, design, and cycling culture, known for its 'hygge' atmosphere.",
    ],
    fun_fact: [
      "The Little Mermaid statue is a famous Copenhagen landmark inspired by Hans Christian Andersen's fairy tale.",
      "Tivoli Gardens is one of the oldest amusement parks in the world.",
    ],
    trivia: [
      "Danish is the official language of Denmark.",
      "Smørrebrød, open-faced sandwiches, and Danish pastries are popular Danish foods.",
    ],
  },
  {
    city: "Zurich",
    country: "Switzerland",
    clues: [
      "Lake Zurich, Old Town (Niederdorf), and Swiss chocolate define this Swiss city.",
      "A city of finance, lakes, and mountains, known for its high quality of life and chocolate.",
    ],
    fun_fact: [
      "Lake Zurich is a beautiful lake in the heart of Zurich.",
      "Niederdorf is Zurich's charming Old Town with narrow streets and shops.",
    ],
    trivia: [
      "German, French, Italian, and Romansh are official languages of Switzerland.",
      "Swiss chocolate and cheese are world-famous.",
    ],
  },
  {
    city: "Brussels",
    country: "Belgium",
    clues: [
      "Grand Place, Manneken Pis, and Belgian waffles define this Belgian capital.",
      "The heart of Europe, known for its waffles, chocolate, and beer.",
    ],
    fun_fact: [
      "Grand Place is a UNESCO World Heritage Site and Brussels' central square.",
      "Manneken Pis is a famous little bronze fountain sculpture.",
    ],
    trivia: [
      "Dutch, French, and German are official languages of Belgium.",
      "Belgian waffles, chocolate, and beer are world-renowned.",
    ],
  },
  {
    city: "Edinburgh",
    country: "UK",
    clues: [
      "Edinburgh Castle, Royal Mile, and Scotch whisky define this Scottish capital.",
      "A city of castles, history, and Scottish culture, known for its festivals and dramatic landscapes.",
    ],
    fun_fact: [
      "Edinburgh Castle is perched atop Castle Rock and has a long history.",
      "The Royal Mile is a historic street connecting Edinburgh Castle and Holyrood Palace.",
    ],
    trivia: [
      "English is the official language, but Scots and Scottish Gaelic are also spoken.",
      "Haggis, neeps, and tatties, and Scotch whisky are Scottish specialties.",
    ],
  },
  {
    city: "Kyiv",
    country: "Ukraine",
    clues: [
      "St. Sophia's Cathedral, Maidan Nezalezhnosti, and borscht define this Ukrainian capital.",
      "A historic city, known for its golden-domed churches, resilience, and Eastern European culture.",
    ],
    fun_fact: [
      "St. Sophia's Cathedral is a UNESCO World Heritage Site and a beautiful example of Byzantine architecture.",
      "Maidan Nezalezhnosti (Independence Square) is Kyiv's central square and a site of major events.",
    ],
    trivia: [
      "Ukrainian is the official language of Ukraine.",
      "Borscht and varenyky (dumplings) are traditional Ukrainian dishes.",
    ],
  },
  {
    city: "Saint Petersburg",
    country: "Russia",
    clues: [
      "Hermitage Museum, Winter Palace, and canals define this Russian city.",
      "Russia's 'Venice of the North', known for its art, imperial palaces, and canals.",
    ],
    fun_fact: [
      "The Hermitage Museum is one of the world's largest art museums and is housed in the Winter Palace.",
      "Saint Petersburg is famous for its canals and bridges.",
    ],
    trivia: [
      "Russian is the official language of Russia.",
      "Pelmeni (dumplings) and beef stroganoff are Russian culinary specialties.",
    ],
  },
  {
    city: "Montreal",
    country: "Canada",
    clues: [
      "Old Montreal, Notre-Dame Basilica, and poutine define this Canadian city.",
      "A bilingual city with European charm, known for its festivals, culture, and French-Canadian heritage.",
    ],
    fun_fact: [
      "Old Montreal is a historic district with cobblestone streets and 17th-century buildings.",
      "Notre-Dame Basilica is a stunning basilica in Old Montreal.",
    ],
    trivia: [
      "French and English are widely spoken in Montreal.",
      "Poutine, smoked meat sandwiches, and bagels are Montreal culinary specialties.",
    ],
  },
  {
    city: "Vancouver",
    country: "Canada",
    clues: [
      "Stanley Park, Granville Island, and sushi define this Canadian city.",
      "A coastal city surrounded by mountains and ocean, known for its outdoor lifestyle and natural beauty.",
    ],
    fun_fact: [
      "Stanley Park is a large urban park in Vancouver.",
      "Granville Island Market is a popular public market with food stalls and artisan shops.",
    ],
    trivia: [
      "English and French are official languages of Canada.",
      "Salmon and sushi are popular cuisines in Vancouver.",
    ],
  },
  {
    city: "Los Angeles",
    country: "USA",
    clues: [
      "Hollywood sign, Disneyland (nearby), and beaches define this Californian city.",
      "The 'City of Angels', known for its entertainment industry, sunny weather, and diverse culture.",
    ],
    fun_fact: [
      "The Hollywood sign is an iconic landmark representing the entertainment industry.",
      "Disneyland, the original Disney theme park, is located near Los Angeles.",
    ],
    trivia: [
      "English is the primary language in Los Angeles.",
      "Tacos and In-N-Out Burger are iconic Los Angeles foods.",
    ],
  },
  {
    city: "Miami",
    country: "USA",
    clues: [
      "South Beach, Art Deco District, and Cuban sandwiches define this Floridian city.",
      "A vibrant city of beaches, nightlife, and Latin American culture, known for its Art Deco architecture.",
    ],
    fun_fact: [
      "South Beach is famous for its Art Deco architecture and beaches.",
      "Little Havana is a Cuban neighborhood in Miami with vibrant culture.",
    ],
    trivia: [
      "English and Spanish are widely spoken in Miami.",
      "Cuban sandwiches and key lime pie are Miami culinary specialties.",
    ],
  },
  {
    city: "Johannesburg",
    country: "South Africa",
    clues: [
      "Apartheid Museum, Gold Reef City, and vibrant townships define this South African city.",
      "A city of gold, history, and resilience, known for its role in the fight against apartheid.",
    ],
    fun_fact: [
      "Johannesburg was built on gold and is known as 'Egoli', the city of gold in Zulu.",
      "The Apartheid Museum offers a powerful look into South Africa's apartheid era.",
    ],
    trivia: [
      "Johannesburg is the largest city in South Africa.",
      "Braai (barbecue) is a popular South African social event.",
    ],
  },
  {
    city: "Nairobi",
    country: "Kenya",
    clues: [
      "Nairobi National Park, Giraffe Centre, and coffee plantations define this Kenyan capital.",
      "The 'Safari Capital of the World', known for its wildlife, national parks, and vibrant culture.",
    ],
    fun_fact: [
      "Nairobi National Park is unique as it's a wildlife park within a city.",
      "The Giraffe Centre allows close encounters with Rothschild's giraffes.",
    ],
    trivia: [
      "Swahili and English are official languages of Kenya.",
      "Ugali (cornmeal porridge) and nyama choma (grilled meat) are Kenyan staples.",
    ],
  },
  {
    city: "Marrakech",
    country: "Morocco",
    clues: [
      "Jemaa el-Fnaa square, souks, and riads define this Moroccan city.",
      "The 'Red City', known for its bustling markets, palaces, and vibrant culture.",
    ],
    fun_fact: [
      "Jemaa el-Fnaa is a famous square and marketplace in Marrakech's medina.",
      "Riads are traditional Moroccan houses or palaces with interior gardens or courtyards.",
    ],
    trivia: [
      "Arabic and Berber are official languages of Morocco.",
      "Tagine and couscous are famous Moroccan dishes.",
    ],
  },
  {
    city: "Kyoto",
    country: "Japan",
    clues: [
      "Golden Pavilion, Fushimi Inari Shrine, and geishas define this Japanese city.",
      "A city of traditional gardens, temples, and geisha districts, known for its cultural heritage.",
    ],
    fun_fact: [
      "The Golden Pavilion (Kinkaku-ji) is a Zen Buddhist temple covered in gold leaf.",
      "Fushimi Inari Shrine is famous for its thousands of vermilion torii gates.",
    ],
    trivia: [
      "Matcha, powdered green tea, is a traditional Japanese drink.",
      "Kimono is a traditional Japanese garment.",
    ],
  },
  {
    city: "Medellín",
    country: "Colombia",
    clues: [
      "Comuna 13, Fernando Botero sculptures, and coffee region access define this Colombian city.",
      "The 'City of Eternal Spring', known for its innovation, transformation, and vibrant culture.",
    ],
    fun_fact: [
      "Comuna 13 has undergone a remarkable transformation and is now known for its street art and escalators.",
      "Fernando Botero is a famous Colombian artist, and Medellín is home to many of his sculptures.",
    ],
    trivia: [
      "Spanish is the official language of Colombia.",
      "Coffee is a major export of Colombia, and Medellín is close to coffee-growing regions.",
    ],
  },
  {
    city: "Lisbon",
    country: "Portugal",
    clues: [
      "Belém Tower, Jerónimos Monastery, and pastel de nata define this Portuguese capital.",
      "A city of hills, historic neighborhoods, and Fado music, known for its maritime history.",
    ],
    fun_fact: [
      "Belém Tower is a UNESCO World Heritage Site on the Tagus River.",
      "Jerónimos Monastery is another UNESCO site and a masterpiece of Manueline architecture.",
    ],
    trivia: [
      "Portuguese is the official language of Portugal.",
      "Pastel de nata, custard tart, is a famous Portuguese pastry.",
    ],
  },
  {
    city: "Kathmandu",
    country: "Nepal",
    clues: [
      "Durbar Square, Boudhanath Stupa, and gateway to the Himalayas define this Nepalese capital.",
      "A city of temples, stupas, and vibrant culture, known as the gateway to Mount Everest.",
    ],
    fun_fact: [
      "Durbar Square is a UNESCO World Heritage Site with historic palaces and temples.",
      "Boudhanath Stupa is one of the largest spherical stupas in Nepal.",
    ],
    trivia: [
      "Nepali is the official language of Nepal.",
      "Dal bhat (lentil soup and rice) is a staple food in Nepal.",
    ],
  },
  {
    city: "Hanoi",
    country: "Vietnam",
    clues: [
      "Old Quarter, Hoan Kiem Lake, and street food define this Vietnamese capital.",
      "A city of lakes, temples, and colonial architecture, known for its pho and rich history.",
    ],
    fun_fact: [
      "Hanoi's Old Quarter is a historic commercial district with narrow streets.",
      "Hoan Kiem Lake is a scenic lake in the heart of Hanoi.",
    ],
    trivia: [
      "Vietnamese is the official language of Vietnam.",
      "Pho (noodle soup) and banh mi (sandwich) are famous Vietnamese dishes.",
    ],
  },
  {
    city: "Cairo",
    country: "Egypt",
    clues: [
      "Pyramids of Giza, Sphinx, and Egyptian Museum define this Egyptian capital.",
      "A city of ancient wonders, pharaohs, and bustling markets, known for its history and culture.",
    ],
    fun_fact: [
      "The Pyramids of Giza and the Sphinx are iconic ancient Egyptian monuments.",
      "The Egyptian Museum houses a vast collection of Egyptian antiquities.",
    ],
    trivia: [
      "Arabic is the official language of Egypt.",
      "Kushari and falafel are popular Egyptian street foods.",
    ],
  },
  {
    city: "Auckland",
    country: "New Zealand",
    clues: [
      "Sky Tower, Harbour Bridge, and volcanic cones define this New Zealand city.",
      "The 'City of Sails', known for its harbors, volcanic landscapes, and Maori culture.",
    ],
    fun_fact: [
      "Auckland is built on volcanic cones and has a unique volcanic landscape.",
      "The Sky Tower is the tallest structure in New Zealand, offering panoramic views.",
    ],
    trivia: [
      "English and Maori are official languages of New Zealand.",
      "Hangi, food cooked in an underground oven, is a traditional Maori dish.",
    ],
  },
  {
    city: "Jerusalem",
    country: "Israel",
    clues: [
      "Western Wall, Dome of the Rock, and religious significance define this ancient city.",
      "A holy city for Judaism, Christianity, and Islam, known for its history and religious sites.",
    ],
    fun_fact: [
      "The Western Wall is a significant religious site for Judaism.",
      "The Dome of the Rock is a sacred Islamic shrine on the Temple Mount.",
    ],
    trivia: [
      "Hebrew and Arabic are official languages of Israel.",
      "Hummus and falafel are popular Middle Eastern dishes common in Jerusalem.",
    ],
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    clues: [
      "Christ the Redeemer, Sugarloaf Mountain, and samba define this Brazilian city.",
      "A city of beaches, mountains, and vibrant culture, known for its Carnival and stunning scenery.",
    ],
    fun_fact: [
      "Christ the Redeemer statue overlooks Rio de Janeiro from Corcovado Mountain.",
      "Sugarloaf Mountain offers breathtaking views of the city and coastline.",
    ],
    trivia: [
      "Portuguese is the official language of Brazil.",
      "Caipirinha, a cocktail, and feijoada are Brazilian specialties.",
    ],
  },
  {
    city: "Amman",
    country: "Jordan",
    clues: [
      "Citadel, Roman Theatre, and gateway to Petra define this Jordanian capital.",
      "A city of ancient ruins, modern life, and Middle Eastern hospitality, known as a starting point for exploring Jordan.",
    ],
    fun_fact: [
      "The Amman Citadel offers panoramic views and ancient Roman and Islamic ruins.",
      "The Roman Theatre is a well-preserved ancient theatre in the heart of Amman.",
    ],
    trivia: [
      "Arabic is the official language of Jordan.",
      "Mansaf (lamb and rice dish) and falafel are Jordanian cuisine staples.",
    ],
  },
];

const seedDatabase = async () => {
  await dbConnect();
  await Destination.deleteMany({}); // Clear existing data
  await Destination.insertMany(seedData);
  console.log(seedData.length)
  console.log("Database seeded successfully!");
  process.exit();
};

seedDatabase().catch((err) => {
  console.error("Database seeding error:", err);
  process.exit(1);
});
