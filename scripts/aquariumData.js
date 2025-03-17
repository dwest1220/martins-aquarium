export const database = {
    fish: [
        {
            name: "Nemo",
            species: "Clownfish",
            length: 3,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://2.bp.blogspot.com/-0aMlLqUGGLI/TV9-haWanCI/AAAAAAAAAzk/goTrWowOCZE/s1600/2c64d3bfebwnfish.jpg.jpg" 
        },
        {
            name: "Dory",
            species: "Blue Tang",
            length: 5,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://www.americanoceans.org/wp-content/uploads/2021/01/blue-tang-characteristics.jpg"
        },
        {
            name: "Bubbles",
            species: "Yellow Tang",
            length: 6,
            location: "Hawaii",
            diet: "Herbivore",
            image: "https://www.algaebarn.com/wp-content/uploads/2018/10/tang.jpg"
        },
        {
            name: "Finny",
            species: "Betta Fish",
            length: 2,
            location: "Southeast Asia",
            diet: "Carnivore",
            image: "https://dailyhousehold.com/wp-content/uploads/2014/08/493202359.jpg"
        },
        {
            name: "Stripe",
            species: "Sergeant Major",
            length: 4,
            location: "Caribbean Sea",
            diet: "Omnivore",
            image: "https://farm1.staticflickr.com/48/117824627_07c64b6a6c.jpg"
        },
        {
            name: "Glimmer",
            species: "Angelfish",
            length: 8,
            location: "Amazon River",
            diet: "Omnivore",
            image: "https://www.thoughtco.com/thmb/PaqRCw7Goy9b6OkbH4UMYjD7rEs=/3500x2625/filters:fill(auto,1)/Queen_Angelfish-bc749243c9324ed6ba6f6a939bcb0471.jpg"
        },
        {
            name: "Spike",
            species: "Lionfish",
            length: 12,
            location: "Indo-Pacific",
            diet: "Carnivore",
            image: "https://www.itsnature.org/wp-content/uploads/2011/03/lionfish.jpg"
        },
        {
          name: "Marlin",
          species: "Clownfish",
          length: 5,
          location: "Pacific Ocean",
          diet: "Omnivore",
          image: "https://remixfavoriteshowandgame.fandom.com/wiki/Animals_in_Finding_Nemo" // :contentReference[oaicite:2]{index=2}
        },
        {
          name: "Bruce",
          species: "Great White Shark",
          length: 18,
          location: "Open Ocean",
          diet: "Carnivore",
          image: "https://remixfavoriteshowandgame.fandom.com/wiki/Animals_in_Finding_Nemo" // :contentReference[oaicite:10]{index=10}
        },
        {
          name: "Gill",
          species: "Moorish Idol",
          length: 8,
          location: "Indian Ocean",
          diet: "Omnivore",
          image: "https://memes.getyarn.io/yarn-clip/3fbe25bb-5ebf-454a-bde2-c3f4d62e4c77/gif" // :contentReference[oaicite:4]{index=4}
        },
        {
          name: "Flo",
          species: "Striped Damselfish",
          length: 9,
          location: "Andaman Sea",
          diet: "Planktivore",
          image: "https://remixfavoriteshowandgame.fandom.com/wiki/Animals_in_Finding_Nemo" // :contentReference[oaicite:5]{index=5}
        },
        {
          name: "Bloat",
          species: "Pufferfish",
          length: 10,
          location: "Caribbean Sea",
          diet: "Carnivore",
          image: "https://remixfavoriteshowandgame.fandom.com/wiki/Animals_in_Finding_Nemo" // :contentReference[oaicite:6]{index=6}
        },
        {
          name: "Jacques",
          species: "Cleaner Shrimp",
          length: 3,
          location: "Tropical Reefs",
          diet: "Scavenger",
          image: "https://remixfavoriteshowandgame.fandom.com/wiki/Animals_in_Finding_Nemo" // :contentReference[oaicite:7]{index=7}
        },
        {
          name: "Crush",
          species: "Green Sea Turtle",
          length: 15,
          location: "East Australian Current",
          diet: "Herbivore",
          image: "https://remixfavoriteshowandgame.fandom.com/wiki/Animals_in_Finding_Nemo" // :contentReference[oaicite:8]{index=8}
        },
        {
          name: "Peach",
          species: "Starfish",
          length: 4,
          location: "Pacific Coast",
          diet: "Omnivore",
          image: "https://remixfavoriteshowandgame.fandom.com/wiki/Animals_in_Finding_Nemo" // :contentReference[oaicite:9]{index=9}
        },
    ],
    tips: [
        {
            topic: "Water Temperature",
            text: "Maintain a consistent water temperature between 75-82°F (24-28°C) to keep tropical fish like these healthy and active."
          },
          {
            topic: "Water Quality",
            text: "Test and maintain a pH between 6.5-7.8 and keep ammonia and nitrate levels low with regular water changes (20-25% weekly)."
          },
          {
            topic: "Tank Size",
            text: "Provide at least a 30-50 gallon tank to give your fish enough space to swim and reduce stress, adjusting for larger species."
          },
          {
            topic: "Feeding Basics",
            text: "Feed your fish small amounts 1-2 times daily, offering a mix of flakes, pellets, or live food suited to their herbivore, carnivore, or omnivore diets."
          }
    ],
    location: [
        {
            name: "Great Barrier Reef",
            country: "Australia",
            description: "The Great Barrier Reef is the world's largest coral reef system, supporting a diverse array of marine life."
         },
         {
            name: "Hawaii",
            country: "United States",
            description: "Hawaii is a volcanic archipelago in the Pacific Ocean, known for its vibrant coral reefs and diverse marine ecosystems, home to species like the Yellow Tang."
          },
          {
            name: "Southeast Asia",
            country: "Multiple (e.g., Thailand, Vietnam, Cambodia)",
            description: "Southeast Asia features warm tropical waters and rich biodiversity, with rivers and coastal areas that nurture species like the Betta Fish."
          },
          {
            name: "Caribbean Sea",
            country: "Multiple (e.g., Bahamas, Jamaica, Dominican Republic)",
            description: "The Caribbean Sea is a warm, tropical region with extensive coral reefs and clear waters, ideal for species like the Sergeant Major."
          },
          {
            name: "Amazon River",
            country: "Brazil (and others like Peru, Colombia)",
            description: "The Amazon River is the world’s largest river by volume, flowing through dense rainforests and hosting unique freshwater species like the Angelfish."
          },
          {
            name: "Indo-Pacific",
            country: "Multiple (e.g., Indonesia, Philippines, Australia)",
            description: "The Indo-Pacific region spans vast tropical waters between the Indian and Pacific Oceans, known for its coral reefs and exotic species like the Lionfish."
          }
        ]
};