
// Check the source code for the questions
const wordList = [
    {
      word: "guitar",
      hint: "A musical instrument with strings.",
    },
    {
      word: "oxygen",
      hint: "A colorless, odorless gas essential for life.",
    },
    
    
    {
      word: "football",
      hint: "A popular sport played with a spherical ball.",
    },
    
    {
      word: "history",
      hint: "The study of past events and human civilization.",
    },
    {
      word: "pizza",
      hint: "A savory dish consisting of a round, flattened base with toppings.",
    },
    {
      word: "jazz",
      hint: "A genre of music characterized by improvisation and syncopation.",
    },
    {
      word: "camera",
      hint: "A device used to capture and record images or videos.",
    },
    {
      word: "diamond",
      hint: "A precious gemstone known for its brilliance and hardness.",
    },
    
    {
      word: "science",
      hint: "The systematic study of the structure and behavior of the physical and natural world.",
    },
    {
      word: "bicycle",
      hint: "A human-powered vehicle with two wheels.",
    },
    {
      word: "sunset",
      hint: "The daily disappearance of the sun below the horizon.",
    },
    {
      word: "coffee",
      hint: "A popular caffeinated beverage made from roasted coffee beans.",
    },
    {
      word: "dance",
      hint: "A rhythmic movement of the body often performed to music.",
    },
    {
      word: "galaxy",
      hint: "A vast system of stars, gas, and dust held together by gravity.",
    },
    
  
    {
      word: "volcano",
      hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected.",
    },
    {
      word: "novel",
      hint: "A long work of fiction, typically with a complex plot and characters.",
    },
    
    {
      word: "ballet",
      hint: "A classical dance form characterized by precise and graceful movements.",
    },
    {
      word: "astronaut",
      hint: "A person trained to travel and work in space.",
    },
    {
      word: "waterfall",
      hint: "A cascade of water falling from a height.",
    },
   
    {
      word: "rainbow",
      hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light.",
    },
    {
      word: "universe",
      hint: "All existing matter, space, and time as a whole.",
    },
    {
      word: "piano",
      hint: "A musical instrument played by pressing keys that cause hammers to strike strings.",
    },
    {
      word: "vacation",
      hint: "A period of time devoted to pleasure, rest, or relaxation.",
    },
  
    {
      word: "theater",
      hint: "A building or outdoor area in which plays, movies, or other performances are staged.",
    },
    
    {
      word: "desert",
      hint: "A barren or arid land with little or no precipitation.",
    },
    {
      word: "sunflower",
      hint: "A tall plant with a large yellow flower head.",
    },
    {
      word: "fantasy",
      hint: "A genre of imaginative fiction involving magic and supernatural elements.",
    },
  
    {
      word: "breeze",
      hint: "A gentle wind.",
    },
    {
      word: "oasis",
      hint: "A fertile spot in a desert where water is found.",
    },
    
    {
      word: "safari",
      hint: "An expedition or journey, typically to observe wildlife in their natural habitat.",
    },
    {
      word: "planet",
      hint: "A celestial body that orbits a star and does not produce light of its own.",
    },
    {
      word: "river",
      hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.",
    },
  
    {
      word: "mysterious",
      hint: "Difficult or impossible to understand, explain, or identify.",
    },
    {
      word: "enigma",
      hint: "Something that is mysterious, puzzling, or difficult to understand.",
    },
    {
      word: "paradox",
      hint: "A statement or situation that contradicts itself or defies intuition.",
    },
    {
      word: "puzzle",
      hint: "A game, toy, or problem designed to test ingenuity or knowledge.",
    },
    {
      word: "whisper",
      hint: "To speak very softly or quietly, often in a secretive manner.",
    },
    {
      word: "shadow",
      hint: "A dark area or shape produced by an object blocking the light.",
    },
    {
      word: "secret",
      hint: "Something kept hidden or unknown to others.",
    },
    
    {
      word: "unveil",
      hint: "To make known or reveal something previously secret or unknown.",
    },
    {
      word: "illusion",
      hint: "A false perception or belief; a deceptive appearance or impression.",
    },
  
    {
      word: "vibrant",
      hint: "Full of energy, brightness, and life.",
    },

    {
      word: "Elephant",
      hint: "Which mammal has the largest brain among land animals?",
    },

    {
      word: "colony",
      hint: "What is the term for a group of rabbits?",
    },

    {
      word: "mare",
      hint: "What is the term for a female horse?",
    },

    {
      word: "eight",
      hint: "How many legs does a spider have?",
    },

    {
      word: "crow",
      hint: "Which bird species is known for its intelligence and problem-solving skills?",
    },

    {
      word: "ant",
      hint: "What is the largest  species in the world?",
    },

    {
      word: "hop",
      hint: " How do kangaroos move?",
    },

    {
      word: "banana",
      hint: "What yellow fruit is a good source of potassium?",
    },

    {
      word: "orange",
      hint: "What citrus fruit is known for its high vitamin C content?",
    },

    {
      word: "strawberry",
      hint: "What red fruit is known for its tiny seeds on the outer surface?",
    },
     
    {
      word: "apple",
      hint: "An _____ a day keeps the doctor away? ",
    },
    
       
    {
      word: "grape",
      hint: "What small, round fruit is often used to make wine",
    },
       
    {
      word: "watermelon",
      hint: "What fruit has green skin, red or pink flesh, and is often enjoyed in the summertime?",
    },
       
    {
      word: "pineapple",
      hint: "What tropical fruit has a spiky exterior and a sweet, juicy interior?",
    },
       
    {
      word: "mango",
      hint: "What tropical fruit has a sweet and juicy orange flesh and a large, flat pit?",
    },
       
    {
      word: "lemon",
      hint: "What sour citrus fruit is often used to add flavor to foods and beverages?",
    },
       
    {
      word: "carrot",
      hint: " What orange vegetable is known for its high beta-carotene content?",
    },
       
    {
      word: "fruit",
      hint: "Is a tomato a fruit or a vegetable?",
    },
       
    {
      word: "cucumber",
      hint: "What green vegetable is known for its high water content and is commonly used in salads?",
    },
       
    {
      word: "hydrogen",
      hint: "What is the lightest and most abundant element in the universe?",
    },
       
    {
      word: "oxygen",
      hint: "Which element is essential for respiration and supports combustion",
    },
       
    {
      word: "gold",
      hint: "What precious metal is known for its lustrous yellow color and is often used in jewelry?",
    },
       
    {
      word: "iron",
      hint: "Which metal is crucial for the production of steel and is found in abundance in the Earth's crust?",
    },
       
    {
      word: "tonystark",
      hint: "Who is the genius, billionaire, playboy, philanthropist who becomes the armored superhero known as Iron Man?",
    },
       
    {
      word: "thor",
      hint: " Who is the Norse god of thunder and wielder of the enchanted hammer Mjolnir?",
    },
       
    {
      word: "avengers",
      hint: "What superhero team is formed to defend Earth against powerful threats and is led by Nick Fury?",
    },
       
    {
      word: "snap",
      hint: "What catastrophic event occurs when Thanos uses the Infinity Gauntlet to erase half of all life in the universe?",
    },
       
    {
      word: "shield",
      hint: "What organization, led by Nick Fury, is tasked with protecting Earth from supernatural and extraterrestrial threats?",
    },
       
    {
      word: "asgard",
      hint: "What realm, home to Thor and the Asgardians, is depicted as a majestic, otherworldly kingdom?",
    },
       
    {
      word: "loki",
      hint: "Who is the mischievous and adoptive brother of Thor, known for his cunning and shape-shifting abilities?",
    },
       
    {
      word: "may",
      hint: "What is the name of Peter Parker's elderly aunt, who raised him after the death of his parents?",
    },
       
    {
      word: "venom",
      hint: "Eddie Brock becomes the villain Venom after bonding with an alien symbiote. What is the name of the alien symbiote?",
    },
       
    {
      word: "power",
      hint: "with great _____ comes great responsibility",
    },
        
    {
      word: "batman",
      hint: "What is the alter ego of Bruce Wayne, a billionaire philanthropist who fights crime in Gotham City?",
    },
          
    {
      word: "kalel",
      hint: "What is the Kryptonian name of the last son of Krypton, who is powered by Earth's yellow sun?",
    },
          
    {
      word: "wonderwoman",
      hint: "What Amazonian princess, armed with the Lasso of Truth and indestructible bracelets, fights for justice as a member of the Justice League?",
    },
          
    {
      word: "aquaman",
      hint: "What superhero, the king of Atlantis, possesses the ability to communicate with sea creatures and control the oceans?",
    },
          
    {
      word: "zeus",
      hint: "Who is the king of the gods in Greek mythology, ruler of Mount Olympus and the sky?",
    },
          
    {
      word: "hades",
      hint: "Who is the god of the Underworld, ruling over the realm of the dead and the afterlife?",
    },
          
    {
      word: "diwali",
      hint: "What Hindu festival, also known as the Festival of Lights, is celebrated with the lighting of lamps, fireworks, and the exchange of sweets?",
    },
          
    {
      word: "yoga",
      hint: "What ancient practice, originating in India, combines physical postures, breath control, and meditation for spiritual and physical well-being?",
    },
          
    {
      word: "clownfish",
      hint: " animated film Finding .Nemo,  what type of fish is Nemo, known for its vibrant colors and symbiotic relationship with sea anemones?",
    },
          
    {
      word: "genie",
      hint: "In Disney's Aladdin, who is the magical, wish-granting character who emerges from a magical lamp?",
    },
    
  ];
  