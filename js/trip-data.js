// ============================================================
// Pacific Loop — Trip Data
// Edit stops, food, lodging, and Clark commentary here.
// ============================================================

const tripMeta = {
  departing: 'Aug 6, 2026',
  returning: 'Aug 18, 2026',
  distance: '~3,150 mi',
  duration: '13 days',
  vehicle: 'Defender V6'
};

const stops = [
  {
    day: "Day 1 · Wed Aug 6",
    name: "Palm Springs → Paso Robles",
    drive: "5h 15m · 320mi",
    arrival: "Depart 5:30am · Arrive 1pm",
    tagline: "Pre-dawn desert escape into California wine country. Cool down with a glass of GSM by 4pm.",
    badges: [["heat", "Bowie heat day"], ["short", "Wine country evening"]],
    art: 'paso',
    caption: "Vineyards stretch to the coast range",
    bowie: "Tin City has a fenced grass area in front of Tin Canteen. Hotel Cheval has a 'dog mayor' and welcomes Bowie with treats. Avoid midday outdoor — temps hit 95°F+. Pre-dawn drive means he's chilling in the AC for the worst hours.",
    food: [
      ["sweet", "Tin Canteen at Tin City", "Casual outdoor patio · craft beer + tacos · dog welcome"],
      ["treat", "Six Test Kitchen", "James Beard nominated · local farm dinner (no Bowie)"],
      ["cheap", "Pier 46 Seafood", "Fresh fish counter to-go · eat at hotel patio"]
    ],
    stay: [
      ["sweet", "Hotel Cheval", "12-room luxury inn near downtown · dog-friendly, $20/night fee · ~$280"],
      ["cheap", "La Quinta Paso Robles", "Reliable, free breakfast, no pet fee · ~$135"],
      ["treat", "Allegretto Vineyard Resort", "Tuscan-themed, vineyard views, two pools · ~$420"]
    ],
    clark: "If you've never had wine in a town named after a saint who literally translates to 'thick pass,' you haven't lived. Tablas Creek is the GOAT here — Rhône varietals on California dirt."
  },
  {
    day: "Day 2 · Thu Aug 7",
    name: "Paso Robles → Carmel",
    drive: "2h 45m · 130mi",
    arrival: "Depart 8am · Arrive 11am",
    tagline: "Short hop. Roll into Carmel by lunch and unleash Bowie on the most famously dog-friendly beach in America.",
    badges: [["bowie", "Off-leash beach"], ["short", "Half driving day"]],
    art: 'carmel',
    caption: "Cypress on the Pacific shore",
    bowie: "Carmel Beach is the holy grail — fully off-leash with voice control. Get him there at golden hour (7-8pm). Bring extra water; the white sand reflects sun. Cypress Inn (literally Doris Day's hotel) has a dog menu in their dining room.",
    food: [
      ["sweet", "Cultura Comida y Bebida", "Oaxacan small plates · cozy patio · dogs welcome"],
      ["eat", "Brophy's Tavern", "Best burger in town · classic dive · dog-friendly patio"],
      ["treat", "La Bicyclette", "French bistro · sidewalk seating with Bowie at your feet"]
    ],
    stay: [
      ["sweet", "Cypress Inn", "Iconic 1929 building, co-owned by Doris Day, dog-obsessed staff · ~$290"],
      ["cheap", "Carmel Mission Inn", "Solid, quiet, walk to downtown · ~$160"],
      ["treat", "L'Auberge Carmel", "Relais & Châteaux, Aubergine restaurant on-site · ~$650"]
    ],
    clark: "Carmel-by-the-Sea has a town ordinance against high heels. Real thing. Doris Day owned the hotel until she died at 97. The whole town reads like a movie set built by people who really, truly love dogs."
  },
  {
    day: "Day 3 · Fri Aug 8",
    name: "Carmel → San Francisco (via PCH)",
    drive: "3h 15m · 130mi",
    arrival: "Depart 8am · Arrive 12pm (with stops)",
    tagline: "Drive PCH up the coast. Half Moon Bay oysters for lunch. SF skyline by mid-afternoon.",
    badges: [["bowie", "Pacifica beach stop"], ["short", "Lunch on the pier"]],
    art: 'pch',
    caption: "Cliffs above the highway",
    bowie: "Crissy Field is a 90-acre off-leash beach RIGHT under the Golden Gate Bridge. Fort Funston is the local dog mecca — cliffs, beach, hang gliders overhead. Both are walking-distance from typical SF/Marina hotels. Pack his swim towel.",
    food: [
      ["sweet", "Sam's Chowder House (Half Moon Bay)", "Lobster roll on the deck · pier views · dogs on patio"],
      ["eat", "Devil's Teeth Baking Co.", "Best breakfast sandwich in SF · take to Crissy Field"],
      ["treat", "Foreign Cinema (Mission)", "Brunch in courtyard with films projected on wall · weekend institution"]
    ],
    stay: [
      ["sweet", "Hotel Drisco (Pacific Heights)", "Boutique 1903 hotel, walking distance to dog parks · ~$310"],
      ["cheap", "Hotel del Sol", "Restored motor lodge, courtyard pool, free parking (rare!) · ~$170"],
      ["treat", "Hotel Vitale", "Embarcadero waterfront, soaking tubs, view rooms · ~$480"]
    ],
    clark: "Half Moon Bay grows the largest pumpkins in the world — like, world-record big. In August they're still growing, but you can see the patches from the highway. Stop at Sam's. Get the lobster roll. Don't share with Bowie. (You will share with Bowie.)"
  },
  {
    day: "Day 4 · Sat Aug 9",
    name: "San Francisco + Marin",
    drive: "30 min · 15mi",
    arrival: "Cross to Sausalito mid-day",
    tagline: "Slow morning in the city, cross the Golden Gate, base in Marin for nature + privacy.",
    badges: [["bowie", "Rodeo + Muir Beach"], ["rest", "Settle in"]],
    art: 'marin',
    caption: "The Golden Gate at golden hour",
    bowie: "Muir Beach (off-leash before 10am, on-leash after) is 25 min from Sausalito and you'll have it nearly to yourselves at sunrise. Rodeo Beach in the Marin Headlands is reliably empty even on weekends. Tennessee Valley Trail is a flat 2-mile dog walk to a hidden cove.",
    food: [
      ["sweet", "Hog Island Oyster Co. (Tomales Bay)", "Buy a dozen, they shuck on the picnic table · Bowie under the bench"],
      ["eat", "Fish. (Sausalito)", "Sustainable seafood shack, wharf seating, casual"],
      ["treat", "Saltwater Oyster Depot (Inverness)", "Tiny, perfect, oysters from the bay 50ft away"]
    ],
    stay: [
      ["sweet", "Airbnb in Mill Valley or Sausalito hills", "Privacy + nature · easy Bowie space · ~$280/night"],
      ["cheap", "The Inn Above Tide (Sausalito)", "Pricier but waterfront views, walk everywhere · ~$390"],
      ["treat", "Cavallo Point Lodge", "Old fort at the foot of the GG Bridge, spa, 2 restaurants · ~$520"]
    ],
    clark: "Hog Island shucks oysters in front of you at picnic tables on Tomales Bay. Bring bread, bring wine, bring a dog who likes the beach. It's the platonic ideal of California for about $50."
  },
  {
    day: "Day 5 · Sun Aug 10",
    name: "Marin → Eureka (Avenue of the Giants)",
    drive: "5h 30m · 280mi",
    arrival: "Depart 8am · Arrive 2:30pm",
    tagline: "Up the 101 through wine country, then 30 minutes among 300-foot redwoods. Eureka by mid-afternoon.",
    badges: [["bowie", "Forest stretch breaks"], ["short", "Easy drive day"]],
    art: 'redwoods',
    caption: "Among trees older than Christianity",
    bowie: "Avenue of the Giants has multiple pull-offs with short, shaded paths through the redwoods. Founders Grove (1.5mi marker) is flat, dog-friendly, and humbling. Sequoia Park in Eureka has a free dog park inside the redwoods.",
    food: [
      ["eat", "Avenue Cafe (Miranda)", "Roadside breakfast/lunch · halfway through the Avenue · easy stop"],
      ["sweet", "Brick & Fire (Eureka)", "Wood-fired pizza in old downtown · patio dogs welcome"],
      ["treat", "Restaurant 511 (Eureka)", "Coastal fine dining in a Victorian · book ahead"]
    ],
    stay: [
      ["sweet", "Carter House Inns (Eureka)", "Iconic Victorian inn, dog-friendly cottages, on-site restaurant · ~$240"],
      ["cheap", "Best Western Plus Humboldt Bay", "Bay views, dog-friendly, predictable · ~$140"],
      ["treat", "Benbow Historic Inn (Garberville)", "1920s English Tudor, 30 min south of Eureka, gardens · ~$310"]
    ],
    clark: "The Avenue of the Giants parallels the 101 for 31 miles. It adds 20 minutes. Take it. The trees here predate Christianity. Some predate language. Bowie will sniff one for 15 minutes and you'll let him because what else are you gonna do, rush a redwood?"
  },
  {
    day: "Day 6 · Mon Aug 11",
    name: "Eureka → Bandon",
    drive: "4h 30m · 240mi",
    arrival: "Depart 8am · Arrive 1pm",
    tagline: "Cross into Oregon. Lunch in Brookings on the south coast. Land in Bandon for a sunset on Face Rock.",
    badges: [["bowie", "Sporthaven Beach"], ["short", "Sunset arrival"]],
    art: 'bandon',
    caption: "Sea stacks at the edge of America",
    bowie: "Sporthaven Beach in Brookings is dog-friendly with a calm cove for swimming. In Bandon, the entire stretch of beach below Face Rock is off-leash with voice control. Bandon Dog Park is a fenced backup for energy-burn before bed.",
    food: [
      ["sweet", "Tony's Crab Shack (Bandon)", "Walk-up window on the bayfront · whole crab + chowder"],
      ["eat", "Oxenfre Pub (Brookings)", "Lunch stop · gastropub · solid sandwiches"],
      ["treat", "Alloro Wine Bar (Bandon)", "Italian fine dining in old downtown · ask for patio"]
    ],
    stay: [
      ["sweet", "Best Western Inn at Face Rock", "Across the street from the beach, dog-friendly, partial ocean views · ~$190"],
      ["cheap", "Bandon Inn", "Hilltop bay views, free hot breakfast, pet welcome bag · ~$160"],
      ["treat", "Bandon Dunes Lodge (room only)", "If you golf — iconic, expensive, treat night · ~$450"]
    ],
    clark: "Bandon is what Cannon Beach was before everyone Instagrammed it. Face Rock allegedly looks like a face. (It does, kinda, after the second Pinot.) Bowie can run for a literal mile here without hitting another dog."
  },
  {
    day: "Day 7 · Tue Aug 12",
    name: "Bandon → Cannon Beach",
    drive: "5h 30m · 290mi",
    arrival: "Depart 8am · Arrive 2pm",
    tagline: "Northbound 101 — the iconic Oregon coast stretch. Pull-offs, lighthouses, and arrival at Haystack Rock by mid-afternoon.",
    badges: [["bowie", "3 beach stops"], ["long", "Most scenic day"]],
    art: 'oregon',
    caption: "Lighthouses every fifty miles",
    bowie: "Heceta Head Lighthouse pull-off — shaded, 10-min path, dog-welcome. Cape Perpetua viewpoint — quick stretch with massive views. Manzanita Beach 25 min before Cannon — quieter alternative for a final off-leash run.",
    food: [
      ["sweet", "Mo's Seafood (Newport)", "Iconic chowder pit-stop · 70 years on the bay · pup on patio"],
      ["eat", "Tillamook Creamery", "Free factory tour, ice cream, cheese tasting · roadside legend"],
      ["treat", "Local Ocean Seafoods (Newport)", "Bayfront fish market + restaurant · upscale lunch"]
    ],
    stay: [
      ["sweet", "Surfsand Resort", "On the beach, walking distance to Haystack, dog welcome bag, fire pits · ~$310"],
      ["cheap", "Tolovana Inn", "South end of beach, pet-friendly studios, ocean views · ~$210"],
      ["treat", "Stephanie Inn (room w/o ocean)", "Adults-only, fine dining on-site, white-glove · ~$520"]
    ],
    clark: "Mo's clam chowder has been featured in every PNW road trip article since 1946 because it's actually that good. Tillamook gives you free cheese samples. Bring a cooler. You're in Oregon now."
  },
  {
    day: "Day 8 · Wed Aug 13",
    name: "Cannon Beach (rest day)",
    drive: "0 mi",
    arrival: "Slow morning · No alarm",
    tagline: "Unpack the suitcase. Haystack Rock at low tide. Bowie running flat-out on three miles of off-leash beach. This is the soul of the trip.",
    badges: [["bowie", "Bowie heaven"], ["rest", "Recharge day"]],
    art: 'haystack',
    caption: "Haystack Rock at sunset",
    bowie: "Check the tide chart — low tide morning means tide pools at Haystack (puffins nest there in summer!). Ecola State Park has dog-friendly forest trails with viewpoints. End the day at Pelican Brewing's dog patio with fish & chips.",
    food: [
      ["sweet", "Pelican Brewing Co.", "Beachfront brewpub · dog patio with water bowls · best fish & chips on coast"],
      ["eat", "Sleepy Monk Coffee", "Local roaster · breakfast pastries · dogs at outdoor counter"],
      ["treat", "Newmans at 988", "Tiny French/Italian spot in town · book ahead · no Bowie"]
    ],
    stay: [
      ["", "Same as Day 7", "Settled in for night two — make a fire pit reservation if Surfsand"]
    ],
    clark: "Haystack Rock is a 235-foot sea stack and a federally protected wildlife refuge. In summer it has actual puffins. Bowie won't care, but you will. Bring binoculars."
  },
  {
    day: "Day 9 · Thu Aug 14",
    name: "Cannon Beach → Bend",
    drive: "5h 15m · 300mi",
    arrival: "Depart 8am · Arrive 1:30pm",
    tagline: "Cross over to Portland for lunch, then up over the Cascades to high-desert Bend. A complete climate change in 5 hours.",
    badges: [["bowie", "Drake Park"], ["short", "Brewery town"]],
    art: 'bend',
    caption: "High desert beneath the Three Sisters",
    bowie: "Drake Park in downtown Bend is a 13-acre riverside lawn — Bowie can swim in the Deschutes. Pine Marsh Trail (5 min from town) is shaded and dog-loving. Bend has more dog-friendly patios than restaurants without them.",
    food: [
      ["sweet", "Tin Shed Garden Cafe (Portland)", "Iconic Portland brunch · garden patio · dog menu (literal)"],
      ["sweet", "Spork (Bend)", "Eclectic Asian-fusion · garage-door patio · casual"],
      ["treat", "Ariana (Bend)", "Tasting-menu fine dining in a converted house · no Bowie"]
    ],
    stay: [
      ["sweet", "Oxford Hotel", "Boutique downtown, walk to Drake Park, generous pet policy · ~$230"],
      ["cheap", "Best Western Premier Peppertree", "Reliable, pool, dog-friendly, west side · ~$145"],
      ["treat", "Tetherow Lodges", "Resort condos near golf, kitchen, mountain views · ~$340"]
    ],
    clark: "Bend has 30+ breweries in a town of 100k. Math says Bowie has a brewery for every dog he meets. Tin Shed in Portland has an actual menu for dogs — yes, you order it for him. Yes, he will judge your choices."
  },
  {
    day: "Day 10 · Fri Aug 15",
    name: "Bend → Truckee",
    drive: "6h 30m · 380mi",
    arrival: "Depart 8am · Arrive 3pm",
    tagline: "Across eastern Oregon high desert, into the Sierras. Truckee by mid-afternoon — alpine lake town for the next two nights.",
    badges: [["long", "Longest stretch"], ["bowie", "Donner Lake swim"]],
    art: 'truckee',
    caption: "Sierra peaks above the lake",
    bowie: "Donner Lake (5 min from downtown Truckee) has a public dog beach with fresh-water swimming and zero waves — perfect for a Weim. Tahoe Donner Trails are 50 miles of dog-friendly forest paths. The Truckee River walk through downtown is a flat 2-mile leashed stroll.",
    food: [
      ["eat", "Cottonwood Restaurant", "Old railroad-era building above downtown · sunset views · dog patio"],
      ["sweet", "Moody's Bistro & Beats", "Live jazz nights · bistro fare · pet-friendly garden seating"],
      ["treat", "Cellar Door (Truckee)", "Wine bar with elevated small plates · cozy, romantic, no Bowie"]
    ],
    stay: [
      ["sweet", "Cedar House Sport Hotel", "Modern alpine boutique, 5 min to Donner, dog welcome treats · ~$240"],
      ["cheap", "Truckee Donner Lodge", "Solid mid-range, walking to historic downtown · ~$155"],
      ["treat", "VRBO cabin in Tahoe Donner", "Privacy + hot tub + Bowie can be Bowie · ~$310/night"]
    ],
    clark: "Donner Pass — yes, that Donner Pass — is right above Truckee. The Donner Party tried to cross in 1846, got snowed in, and history happened. Today there's a free dog beach where the lake meets the railroad tracks. America's a complicated place."
  },
  {
    day: "Day 11 · Sat Aug 16",
    name: "Truckee (rest day)",
    drive: "0 mi",
    arrival: "Slow morning · Lake day",
    tagline: "Donner Lake morning swim. Lunch in Tahoe City. Hike or kayak in the afternoon. Sunset cocktails on the deck.",
    badges: [["bowie", "Lake all day"], ["rest", "Recharge day"]],
    art: 'donner',
    caption: "Donner Lake morning glass",
    bowie: "Kings Beach (north shore Tahoe) has a designated dog beach. Sand Harbor is gorgeous but no dogs allowed — skip it. Hiking option: Five Lakes Trail (5mi RT, dog-friendly, alpine lakes for swimming). Pack his life jacket if you're kayaking.",
    food: [
      ["sweet", "Soule Domain (Crystal Bay)", "Storybook log-cabin restaurant · romantic dinner · book ahead"],
      ["eat", "Burger Me!", "Local burger institution · grass-fed · outdoor seating"],
      ["treat", "Manzanita at the Ritz-Carlton", "Lake views from a clifftop · open lunch · classy"]
    ],
    stay: [
      ["", "Same as Day 10", "Sleep in. Make breakfast in the cabin. Don't rush."]
    ],
    clark: "Lake Tahoe is the second-deepest lake in the United States — 1,645 feet. The water is cold enough year-round to preserve a body forever. Don't think about that. Just throw a stick for Bowie and watch him lose his mind."
  },
  {
    day: "Day 12 · Sun Aug 17",
    name: "Truckee → Mammoth Lakes (via 395)",
    drive: "3h 45m · 215mi",
    arrival: "Depart 8am · Arrive 12pm",
    tagline: "South down 395 — Mono Lake tufa towers, lunch with a Sierra view, into Mammoth by midday for an alpine afternoon.",
    badges: [["bowie", "Lakes Basin"], ["short", "Half drive · half play"]],
    art: 'mammoth',
    caption: "Eastern Sierra at 8,000 feet",
    bowie: "Mammoth Lakes is in Inyo National Forest — way more dog-friendly than Yosemite. Horseshoe Lake allows dogs to swim from the sandy beach. Twin Lakes has a flat 1-mile loop. Convict Lake is 15 min south, dog-friendly, and arguably the most beautiful lake in California. Devil's Postpile shuttle allows leashed/muzzled dogs if you want the full Rainbow Falls hike.",
    food: [
      ["eat", "Whoa Nellie Deli (Lee Vining)", "Famous gas-station gourmet · lobster taquitos · Sierra views · halfway lunch stop"],
      ["sweet", "Toomey's (Mammoth)", "Local fish-camp fare · oysters + lobster rolls · dog patio"],
      ["sweet", "Black Doubt Brewing (Mammoth)", "Belgian-style ales · pet-friendly indoors and out · order in pizza next door"]
    ],
    stay: [
      ["sweet", "Sierra Nevada Resort & Spa", "Walk-everywhere downtown location, dog-welcome, on-site dining + spa · ~$240"],
      ["cheap", "Mammoth Mountain Inn", "Slope-side location, dog-friendly rooms, $50/night pet fee · ~$185"],
      ["treat", "Tamarack Lodge (Twin Lakes)", "1924 historic cabin colony ON Twin Lakes · pet-friendly cabins · ~$340"]
    ],
    clark: "Highway 395 is the road every car commercial gets shot on. Mono Lake's tufa towers look like Mars. Lee Vining has a gas station that serves lobster taquitos that are genuinely award-winning. Mammoth itself sits at 7,800 feet — Bowie may be panting at altitude for the first hour, then he'll be fine. So will you, after the second beer."
  },
  {
    day: "Day 13 · Mon Aug 18",
    name: "Mammoth Lakes → Palm Springs",
    drive: "5h 45m · 330mi",
    arrival: "Depart 8am · Home by 2:30pm",
    tagline: "Down 395 through the Owens Valley, past the Alabama Hills and up over the San Gabriels. Bishop bakery breakfast. Home in time for a real shower.",
    badges: [["heat", "Owens Valley heat"], ["long", "Final push"]],
    art: 'desert',
    caption: "Palms on the desert horizon",
    bowie: "One last alpine walk on the Twin Lakes loop before descending. Bishop has a small park behind Schat's Bakery for a leg-stretch. After Lone Pine, temps climb fast — keep him in the AC, frozen water bottles in the kennel. Final off-leash run waiting at home.",
    food: [
      ["sweet", "Erick Schat's Bakkery (Bishop)", "100-year-old institution · sandwiches on Sheepherder bread · perfect road breakfast"],
      ["eat", "Alabama Hills Cafe (Lone Pine)", "Hearty mountain breakfast · across from where every Western was filmed"],
      ["", "Home for dinner", "Order whatever you've been craving. You've earned it."]
    ],
    stay: [
      ["", "Home", "Hot shower. Real bed. Bowie will sleep for 18 hours straight."]
    ],
    clark: "Highway 395 down the Owens Valley is a 200-mile cinematic credit roll for your road trip. Mt. Whitney on your right (tallest peak in the lower 48), Death Valley on your left (lowest point in North America), and you're driving right between them in a Land Rover with a dog losing his mind in the back seat. Pull off in Lone Pine. Look at the Alabama Hills. That's where Butch Cassidy and Iron Man both got shot. America!"
  }
];

const budgetTiers = [
  {
    tier: 'Vagabonding',
    amount: '$2,950',
    rows: [
      ['Lodging (12n)', '$1,500'],
      ['Fuel @ $6.30/gal', '$905'],
      ['Food', '$430'],
      ['Activities', '$115']
    ],
    vibe: 'Motel 6, Best Western basics. Cook breakfast in the room, picnic lunches at scenic pullouts, occasional splurge dinner.'
  },
  {
    tier: 'Sweet spot',
    amount: '$3,950',
    featured: true,
    rows: [
      ['Lodging (12n)', '$2,200'],
      ['Fuel @ $6.30/gal', '$905'],
      ['Food', '$620'],
      ['Activities', '$225']
    ],
    vibe: 'Iconic stays at the 2-night spots, mid-tier roadside chains for sleep-only nights. Eat out most meals, splurge twice.'
  },
  {
    tier: 'Treat yo self',
    amount: '$5,400',
    rows: [
      ['Lodging (12n)', '$3,200'],
      ['Fuel @ $6.30/gal', '$905'],
      ['Food', '$950'],
      ['Activities', '$345']
    ],
    vibe: 'Cypress Inn, Surfsand, Cottonwood. Tasting menu in Carmel, oyster splurge in Marin, a real dinner in Truckee.'
  }
];

if (typeof window !== 'undefined') {
  window.tripMeta = tripMeta;
  window.stops = stops;
  window.budgetTiers = budgetTiers;
}
