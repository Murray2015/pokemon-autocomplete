const data = [
  {
    _id: "557a723880a20c9db3bc31c2",
    pkdx_id: 1,
    name: "Bulbasaur",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    types: ["poison", "grass"],
    evolutions: [
      {
        level: 16,
        method: "level_up",
        to: "Ivysaur",
        _id: "557a723880a20c9db3bc31c3"
      }
    ]
  },
  {
    _id: "557a723980a20c9db3bc31e3",
    pkdx_id: 2,
    name: "Ivysaur",
    description:
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    types: ["poison", "grass"],
    evolutions: [
      {
        level: 32,
        method: "level_up",
        to: "Venusaur",
        _id: "557a723980a20c9db3bc31e4"
      }
    ]
  },
  {
    _id: "557a723880a20c9db3bc31cc",
    pkdx_id: 3,
    name: "Venusaur",
    description:
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    types: ["poison", "grass"],
    evolutions: [
      {
        method: "other",
        to: "Venusaur-mega",
        _id: "557a723880a20c9db3bc31cd"
      }
    ]
  },
  {
    _id: "557a723880a20c9db3bc31c8",
    pkdx_id: 4,
    name: "Charmander",
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    types: ["fire"],
    evolutions: [
      {
        level: 16,
        method: "level_up",
        to: "Charmeleon",
        _id: "557a723880a20c9db3bc31c9"
      }
    ]
  },
  {
    _id: "557a723980a20c9db3bc31e8",
    pkdx_id: 5,
    name: "Charmeleon",
    description:
      "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    types: ["fire"],
    evolutions: [
      {
        level: 36,
        method: "level_up",
        to: "Charizard",
        _id: "557a723980a20c9db3bc31e9"
      }
    ]
  },
  {
    _id: "557a723880a20c9db3bc31d1",
    pkdx_id: 6,
    name: "Charizard",
    description:
      "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    types: ["flying", "fire"],
    evolutions: [
      {
        method: "other",
        to: "Charizard-mega-y",
        _id: "557a723880a20c9db3bc31d3"
      },
      {
        method: "other",
        to: "Charizard-mega-x",
        _id: "557a723880a20c9db3bc31d2"
      }
    ]
  },
  {
    _id: "557a723980a20c9db3bc31d7",
    pkdx_id: 7,
    name: "Squirtle",
    description:
      "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    types: ["water"],
    evolutions: [
      {
        level: 16,
        method: "level_up",
        to: "Wartortle",
        _id: "557a723980a20c9db3bc31d8"
      }
    ]
  },
  {
    _id: "557a723980a20c9db3bc31df",
    pkdx_id: 8,
    name: "Wartortle",
    description:
      "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    types: ["water"],
    evolutions: [
      {
        level: 36,
        method: "level_up",
        to: "Blastoise",
        _id: "557a723980a20c9db3bc31e0"
      }
    ]
  },
  {
    _id: "557a723980a20c9db3bc31db",
    pkdx_id: 9,
    name: "Blastoise",
    description:
      "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    types: ["water"],
    evolutions: [
      {
        method: "other",
        to: "Blastoise-mega",
        _id: "557a723980a20c9db3bc31dc"
      }
    ]
  },
  {
    _id: "557a72aa7276d341b41edda6",
    pkdx_id: 10,
    name: "Caterpie",
    description:
      "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    types: ["bug"],
    evolutions: [
      {
        level: 7,
        method: "level_up",
        to: "Metapod",
        _id: "557a72aa7276d341b41edda7"
      }
    ]
  },
  {
    _id: "557a72ad7276d341b41eddfa",
    pkdx_id: 11,
    name: "Metapod",
    description:
      "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    types: ["bug"],
    evolutions: [
      {
        level: 10,
        method: "level_up",
        to: "Butterfree",
        _id: "557a72ad7276d341b41eddfb"
      }
    ]
  },
  {
    _id: "557a72aa7276d341b41eddbf",
    pkdx_id: 12,
    name: "Butterfree",
    description:
      "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    types: ["flying", "bug"],
    evolutions: []
  },
  {
    _id: "557a72a97276d341b41edd99",
    pkdx_id: 13,
    name: "Weedle",
    description:
      "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose). ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    types: ["poison", "bug"],
    evolutions: [
      {
        level: 7,
        method: "level_up",
        to: "Kakuna",
        _id: "557a72a97276d341b41edd9a"
      }
    ]
  },
  {
    _id: "557a72ac7276d341b41edde8",
    pkdx_id: 14,
    name: "Kakuna",
    description:
      "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/014.png",
    types: ["poison", "bug"],
    evolutions: [
      {
        level: 10,
        method: "level_up",
        to: "Beedrill",
        _id: "557a72ac7276d341b41edde9"
      }
    ]
  },
  {
    _id: "557a72a97276d341b41edd9e",
    pkdx_id: 15,
    name: "Beedrill",
    description:
      "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/015.png",
    types: ["poison", "bug"],
    evolutions: []
  },
  {
    _id: "557a72a97276d341b41edd91",
    pkdx_id: 16,
    name: "Pidgey",
    description:
      "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    types: ["normal", "flying"],
    evolutions: [
      {
        level: 18,
        method: "level_up",
        to: "Pidgeotto",
        _id: "557a72a97276d341b41edd92"
      }
    ]
  },
  {
    _id: "557a72ac7276d341b41edded",
    pkdx_id: 17,
    name: "Pidgeotto",
    description:
      "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/017.png",
    types: ["normal", "flying"],
    evolutions: [
      {
        level: 36,
        method: "level_up",
        to: "Pidgeot",
        _id: "557a72ac7276d341b41eddee"
      }
    ]
  },
  {
    _id: "557a72aa7276d341b41eddaa",
    pkdx_id: 18,
    name: "Pidgeot",
    description:
      "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/018.png",
    types: ["normal", "flying"],
    evolutions: []
  },
  {
    _id: "557a72ab7276d341b41eddc9",
    pkdx_id: 19,
    name: "Rattata",
    description:
      "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/019.png",
    types: ["normal"],
    evolutions: [
      {
        level: 20,
        method: "level_up",
        to: "Raticate",
        _id: "557a72ab7276d341b41eddca"
      }
    ]
  },
  {
    _id: "557a72a97276d341b41edd96",
    pkdx_id: 20,
    name: "Raticate",
    description:
      "Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/020.png",
    types: ["normal"],
    evolutions: []
  },
  {
    _id: "557a72aa7276d341b41eddba",
    pkdx_id: 21,
    name: "Spearow",
    description:
      "Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/021.png",
    types: ["normal", "flying"],
    evolutions: [
      {
        level: 20,
        method: "level_up",
        to: "Fearow",
        _id: "557a72aa7276d341b41eddbb"
      }
    ]
  },
  {
    _id: "557a72aa7276d341b41eddae",
    pkdx_id: 22,
    name: "Fearow",
    description:
      "Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/022.png",
    types: ["normal", "flying"],
    evolutions: []
  },
  {
    _id: "557a72aa7276d341b41eddb6",
    pkdx_id: 23,
    name: "Ekans",
    description:
      "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    types: ["poison"],
    evolutions: [
      {
        level: 22,
        method: "level_up",
        to: "Arbok",
        _id: "557a72aa7276d341b41eddb7"
      }
    ]
  },
  {
    _id: "557a72ac7276d341b41edddc",
    pkdx_id: 24,
    name: "Arbok",
    description:
      "This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/024.png",
    types: ["poison"],
    evolutions: []
  },
  {
    _id: "557a72a97276d341b41edda2",
    pkdx_id: 25,
    name: "Pikachu",
    description:
      "This Pokémon has electricity-storing pouches on its cheeks. These appear to become electrically charged during the night while Pikachu sleeps. It occasionally discharges electricity when it is dozy after ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    types: ["electric"],
    evolutions: [
      { method: "stone", to: "Raichu", _id: "557a72a97276d341b41edda3" }
    ]
  },
  {
    _id: "557a72ab7276d341b41eddc6",
    pkdx_id: 26,
    name: "Raichu",
    description:
      "This Pokémon exudes a weak electrical charge from all over its body that makes it take on a slight glow in darkness. Raichu plants its tail in the ground to discharge electric",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/026.png",
    types: ["electric"],
    evolutions: []
  },
  {
    _id: "557a72ac7276d341b41eddf2",
    pkdx_id: 27,
    name: "Sandshrew",
    description:
      "Sandshrew has a very dry hide that is extremely tough. The Pokémon can roll into a ball that repels any attack. At night, it burrows into the desert sand to sleep.",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/027.png",
    types: ["ground"],
    evolutions: [
      {
        level: 22,
        method: "level_up",
        to: "Sandslash",
        _id: "557a72ac7276d341b41eddf3"
      }
    ]
  },
  {
    _id: "557a72ac7276d341b41edde5",
    pkdx_id: 28,
    name: "Sandslash",
    description:
      "Sandslash can roll up its body as if it were a ball covered with large spikes. In battle, this Pokémon will try to make the foe flinch by jabbing it with its spines. It then leaps at the stunned foe to tear wildly wi",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/028.png",
    types: ["ground"],
    evolutions: []
  },
  {
    _id: "557a72ac7276d341b41eddd8",
    pkdx_id: 29,
    name: "Nidoran-f",
    description:
      "Nidoran has barbs that secrete a powerful poison. They are thought to have developed as prote",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/029.png",
    types: ["poison"],
    evolutions: [
      {
        level: 16,
        method: "level_up",
        to: "Nidorina",
        _id: "557a72ac7276d341b41eddd9"
      }
    ]
  },
  {
    _id: "557a72d07276d341b41ee1f0",
    pkdx_id: 30,
    name: "Nidorina",
    description:
      "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/030.png",
    types: ["poison"],
    evolutions: [
      {
        method: "stone",
        to: "Nidoqueen",
        _id: "557a72d07276d341b41ee1f1"
      }
    ]
  },
  {
    _id: "557a72aa7276d341b41eddb2",
    pkdx_id: 31,
    name: "Nidoqueen",
    description:
      "Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/031.png",
    types: ["poison", "ground"],
    evolutions: []
  },
  {
    _id: "557a72ad7276d341b41eddfe",
    pkdx_id: 32,
    name: "Nidoran-m",
    description:
      "Nidoran has developed muscles for moving its ears. Thanks to them, the ears can be freel",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/032.png",
    types: ["poison"],
    evolutions: [
      {
        level: 16,
        method: "level_up",
        to: "Nidorino",
        _id: "557a72ad7276d341b41eddff"
      }
    ]
  },
  {
    _id: "557a72ad7276d341b41ede12",
    pkdx_id: 33,
    name: "Nidorino",
    description:
      "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/033.png",
    types: ["poison"],
    evolutions: [
      { method: "stone", to: "Nidoking", _id: "557a72ad7276d341b41ede13" }
    ]
  },
  {
    _id: "557a72ab7276d341b41eddcd",
    pkdx_id: 34,
    name: "Nidoking",
    description:
      "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/034.png",
    types: ["poison", "ground"],
    evolutions: []
  },
  {
    _id: "557a72ab7276d341b41eddd4",
    pkdx_id: 35,
    name: "Clefairy",
    description:
      "On every night of a full moon, groups of this Pokémon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/035.png",
    types: ["fairy"],
    evolutions: [
      { method: "stone", to: "Clefable", _id: "557a72ab7276d341b41eddd5" }
    ]
  },
  {
    _id: "557a72ab7276d341b41eddd1",
    pkdx_id: 36,
    name: "Clefable",
    description:
      "Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/036.png",
    types: ["fairy"],
    evolutions: []
  },
  {
    _id: "557a72ae7276d341b41ede2d",
    pkdx_id: 37,
    name: "Vulpix",
    description:
      "Inside Vulpix's body burns a flame that never goes out. During the daytime, when the temperatures rise, this Pokémon releases flames from its mouth to prevent its body from growing too h",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/037.png",
    types: ["fire"],
    evolutions: [
      {
        method: "stone",
        to: "Ninetales",
        _id: "557a72ae7276d341b41ede2e"
      }
    ]
  },
  {
    _id: "557a72ab7276d341b41eddc3",
    pkdx_id: 38,
    name: "Ninetales",
    description:
      "Legend has it that Ninetales came into being when nine wizards possessing sacred powers merged into one. This Pokémon is highly intelligent—it can understand huma",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/038.png",
    types: ["fire"],
    evolutions: []
  },
  {
    _id: "557a72b07276d341b41ede4b",
    pkdx_id: 39,
    name: "Jigglypuff",
    description:
      "When this Pokémon sings, it never pauses to breathe. If it is in a battle against an opponent that does not easily fall asleep, Jigglypuff cannot breathe, endangering its life.",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    types: ["normal", "fairy"],
    evolutions: [
      {
        method: "stone",
        to: "Wigglytuff",
        _id: "557a72b07276d341b41ede4c"
      }
    ]
  },
  {
    _id: "557a72ac7276d341b41eddf6",
    pkdx_id: 40,
    name: "Wigglytuff",
    description:
      "Wigglytuff's body is very flexible. By inhaling deeply, this Pokémon can inflate itself seemingly without end. Once inflated, Wigglytuff bounces along lightly like a balloon.  W",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/040.png",
    types: ["normal", "fairy"],
    evolutions: []
  },
  {
    _id: "557a72b27276d341b41ede82",
    pkdx_id: 41,
    name: "Zubat",
    description:
      "Zubat avoids sunlight because exposure causes it to become unhealthy. During the daytime, it stays in caves or under the eaves of old houses, sleeping while hanging upside dow",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/041.png",
    types: ["flying", "poison"],
    evolutions: [
      {
        level: 22,
        method: "level_up",
        to: "Golbat",
        _id: "557a72b27276d341b41ede83"
      }
    ]
  },
  {
    _id: "557a72ae7276d341b41ede28",
    pkdx_id: 42,
    name: "Golbat",
    description:
      "Golbat bites down on prey with its four fangs and drinks the victim's blood. It becomes active on inky dark moonless nights, flying around to attack people and Pokémon.  ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/042.png",
    types: ["flying", "poison"],
    evolutions: [
      { method: "other", to: "Crobat", _id: "557a72ae7276d341b41ede29" }
    ]
  },
  {
    _id: "557a72ad7276d341b41ede16",
    pkdx_id: 43,
    name: "Oddish",
    description:
      "Oddish searches for fertile, nutrient-rich soil, then plants itself. During the daytime, while it is planted, this Pokémon's feet are thought to change shape and become similar to the",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/043.png",
    types: ["poison", "grass"],
    evolutions: [
      {
        level: 21,
        method: "level_up",
        to: "Gloom",
        _id: "557a72ad7276d341b41ede17"
      }
    ]
  },
  {
    _id: "557a72ac7276d341b41edddf",
    pkdx_id: 44,
    name: "Gloom",
    description:
      "From its mouth Gloom drips honey that smells absolutely horrible. Apparently, it loves the horrid stench. It sniffs the noxious fumes and then drools even more of its honey.  Gloom rel",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/044.png",
    types: ["poison", "grass"],
    evolutions: [
      {
        method: "stone",
        to: "Bellossom",
        _id: "557a72ac7276d341b41edde1"
      },
      {
        method: "stone",
        to: "Vileplume",
        _id: "557a72ac7276d341b41edde0"
      }
    ]
  },
  {
    _id: "557a72ad7276d341b41ede02",
    pkdx_id: 45,
    name: "Vileplume",
    description:
      "Vileplume has the world's largest petals. They are used to attract prey that are then doused with toxic spores. Once the prey are immobilized, this Pokémon catches and devours ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/045.png",
    types: ["poison", "grass"],
    evolutions: []
  },
  {
    _id: "557a72ae7276d341b41ede23",
    pkdx_id: 46,
    name: "Paras",
    description:
      "Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pokémon host. They are highly valued as a medicine for extending life. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/046.png",
    types: ["bug", "grass"],
    evolutions: [
      {
        level: 24,
        method: "level_up",
        to: "Parasect",
        _id: "557a72ae7276d341b41ede24"
      }
    ]
  },
  {
    _id: "557a72af7276d341b41ede44",
    pkdx_id: 47,
    name: "Parasect",
    description:
      "Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/047.png",
    types: ["bug", "grass"],
    evolutions: []
  },
  {
    _id: "557a72ad7276d341b41ede06",
    pkdx_id: 48,
    name: "Venonat",
    description:
      "Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/048.png",
    types: ["poison", "bug"],
    evolutions: [
      {
        level: 31,
        method: "level_up",
        to: "Venomoth",
        _id: "557a72ad7276d341b41ede07"
      }
    ]
  },
  {
    _id: "557a72b07276d341b41ede5b",
    pkdx_id: 49,
    name: "Venomoth",
    description:
      "Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/049.png",
    types: ["poison", "bug"],
    evolutions: []
  },
  {
    _id: "557a72ad7276d341b41ede0e",
    pkdx_id: 50,
    name: "Diglett",
    description:
      "Diglett are raised in most farms. The reason is simple— wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/050.png",
    types: ["ground"],
    evolutions: [
      {
        level: 26,
        method: "level_up",
        to: "Dugtrio",
        _id: "557a72ad7276d341b41ede0f"
      }
    ]
  },
  {
    _id: "557a72af7276d341b41ede48",
    pkdx_id: 51,
    name: "Dugtrio",
    description:
      "Dugtrio are actually triplets that emerged from one body. As a result, each triplet thinks exactly like the other two triplets. They work cooperatively to burrow endlessly. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/051.png",
    types: ["ground"],
    evolutions: []
  },
  {
    _id: "557a72ae7276d341b41ede31",
    pkdx_id: 52,
    name: "Meowth",
    description:
      "Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pokémon loves shiny coins that glitter with light. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/052.png",
    types: ["normal"],
    evolutions: [
      {
        level: 28,
        method: "level_up",
        to: "Persian",
        _id: "557a72ae7276d341b41ede32"
      }
    ]
  },
  {
    _id: "557a72b07276d341b41ede5f",
    pkdx_id: 53,
    name: "Persian",
    description:
      "Persian has six bold whiskers that give it a look of toughness. The whiskers sense air movements to determine what is in the Pokémon's surrounding vicinity. It becomes docile if grabbed by the whiskers. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/053.png",
    types: ["normal"],
    evolutions: []
  },
  {
    _id: "557a72b07276d341b41ede57",
    pkdx_id: 54,
    name: "Psyduck",
    description:
      "If it uses its mysterious power, Psyduck can't remember having done so. It apparently can't form a memory of such an event because it goes into an altered state that is much like deep s",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/054.png",
    types: ["water"],
    evolutions: [
      {
        level: 33,
        method: "level_up",
        to: "Golduck",
        _id: "557a72b07276d341b41ede58"
      }
    ]
  },
  {
    _id: "557a72ad7276d341b41ede0b",
    pkdx_id: 55,
    name: "Golduck",
    description:
      "Golduck is the fastest swimmer among all Pokémon. It swims effortlessly, even in a rough, stormy sea. It sometimes rescues people from wrecked ships floundering in high seas.  The we",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/055.png",
    types: ["water"],
    evolutions: []
  },
  {
    _id: "557a72d17276d341b41ee20a",
    pkdx_id: 56,
    name: "Mankey",
    description:
      "When Mankey starts shaking and its nasal breathing turns rough, it's a sure sign that it is becoming angry. However, because it goes into a towering rage almost instantly, it is impossible for anyone to flee its wrath. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/056.png",
    types: ["fighting"],
    evolutions: [
      {
        level: 28,
        method: "level_up",
        to: "Primeape",
        _id: "557a72d17276d341b41ee20b"
      }
    ]
  },
  {
    _id: "557a72af7276d341b41ede3d",
    pkdx_id: 57,
    name: "Primeape",
    description:
      "When Primeape becomes furious, its blood circulation is boosted. In turn, its muscles are made even stronger. However, it also becomes much less intelligent at the same time. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/057.png",
    types: ["fighting"],
    evolutions: []
  },
  {
    _id: "557a72ae7276d341b41ede1b",
    pkdx_id: 58,
    name: "Growlithe",
    description:
      "Growlithe has a superb sense of smell. Once it smells anything, this Pokémon won't forget the scent, no matter what. It uses its advanced olfactory sense to determine the emotions of other living things. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/058.png",
    types: ["fire"],
    evolutions: [
      { method: "stone", to: "Arcanine", _id: "557a72ae7276d341b41ede1c" }
    ]
  },
  {
    _id: "557a72af7276d341b41ede3a",
    pkdx_id: 59,
    name: "Arcanine",
    description:
      "Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pokémon's body is its source of power. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/059.png",
    types: ["fire"],
    evolutions: []
  },
  {
    _id: "557a72ae7276d341b41ede1f",
    pkdx_id: 60,
    name: "Poliwag",
    description:
      "Poliwag has a very thin skin. It is possible to see the Pokémon's spiral innards right through the skin. Despite its thinness, however, the skin is also very flexible. Even sharp fangs bounce right off it. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/060.png",
    types: ["water"],
    evolutions: [
      {
        level: 25,
        method: "level_up",
        to: "Poliwhirl",
        _id: "557a72ae7276d341b41ede20"
      }
    ]
  },
  {
    _id: "557a72af7276d341b41ede35",
    pkdx_id: 61,
    name: "Poliwhirl",
    description:
      "The surface of Poliwhirl's body is always wet and slick with a slimy fluid. Because of this slippery covering, it can easily slip and slide out of the clutches of any enemy in battle. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/061.png",
    types: ["water"],
    evolutions: [
      {
        method: "trade",
        to: "Politoed",
        _id: "557a72af7276d341b41ede37"
      },
      {
        method: "stone",
        to: "Poliwrath",
        _id: "557a72af7276d341b41ede36"
      }
    ]
  },
  {
    _id: "557a72d17276d341b41ee201",
    pkdx_id: 62,
    name: "Poliwrath",
    description:
      "Poliwrath's highly developed, brawny muscles never grow fatigued, however much it exercises. It is so tirelessly strong, this Pokémon can swim back and forth across the ocean without effort. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/062.png",
    types: ["fighting", "water"],
    evolutions: []
  },
  {
    _id: "557a72d17276d341b41ee212",
    pkdx_id: 63,
    name: "Abra",
    description:
      "Abra needs to sleep for eighteen hours a day. If it doesn't, this Pokémon loses its ability to use telekinetic powers. If it is attacked, Abra escapes using Teleport while it is still ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/063.png",
    types: ["psychic"],
    evolutions: [
      {
        level: 16,
        method: "level_up",
        to: "Kadabra",
        _id: "557a72d17276d341b41ee213"
      }
    ]
  },
  {
    _id: "557a72cf7276d341b41ee1bf",
    pkdx_id: 64,
    name: "Kadabra",
    description:
      "Kadabra holds a silver spoon in its hand. The spoon is used to amplify the alpha waves in its brain. Without the spoon, the Pokémon is said to be limited to half the usual amount of i",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/064.png",
    types: ["psychic"],
    evolutions: [
      { method: "trade", to: "Alakazam", _id: "557a72cf7276d341b41ee1c0" }
    ]
  },
  {
    _id: "557a72d07276d341b41ee1de",
    pkdx_id: 65,
    name: "Alakazam",
    description:
      "Alakazam's brain continually grows, infinitely multiplying brain cells. This amazing brain gives this Pokémon an astoundingly high IQ of 5,000. It has a thorough memory of everything that ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/065.png",
    types: ["psychic"],
    evolutions: [
      {
        method: "other",
        to: "Alakazam-mega",
        _id: "557a72d07276d341b41ee1df"
      }
    ]
  },
  {
    _id: "557a72d07276d341b41ee1f9",
    pkdx_id: 66,
    name: "Machop",
    description:
      "Machop exercises by hefting around a Graveler as if it were a barbell. There are some Machop that travel the world in a quest to master all kinds of martial arts.",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/066.png",
    types: ["fighting"],
    evolutions: [
      {
        level: 28,
        method: "level_up",
        to: "Machoke",
        _id: "557a72d07276d341b41ee1fa"
      }
    ]
  },
  {
    _id: "557a72b07276d341b41ede50",
    pkdx_id: 67,
    name: "Machoke",
    description:
      "Machoke undertakes bodybuilding every day even as it helps people with tough, physically demanding labor. On its days off, this Pokémon heads to the fields and mountains to exer",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/067.png",
    types: ["fighting"],
    evolutions: [
      { method: "trade", to: "Machamp", _id: "557a72b07276d341b41ede51" }
    ]
  },
  {
    _id: "557a72b07276d341b41ede54",
    pkdx_id: 68,
    name: "Machamp",
    description:
      "Machamp is known as the Pokémon that has mastered every kind of martial arts. If it grabs hold of the foe with its four arms, the battle is all but over. The hapless foe is thrown far over the horiz",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/068.png",
    types: ["fighting"],
    evolutions: []
  },
  {
    _id: "557a72d07276d341b41ee1f4",
    pkdx_id: 69,
    name: "Bellsprout",
    description:
      "Bellsprout's thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pokémon spits a corrosive fluid that melts even iron. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/069.png",
    types: ["poison", "grass"],
    evolutions: [
      {
        level: 21,
        method: "level_up",
        to: "Weepinbell",
        _id: "557a72d07276d341b41ee1f5"
      }
    ]
  },
  {
    _id: "557a72cf7276d341b41ee1d4",
    pkdx_id: 70,
    name: "Weepinbell",
    description:
      "Weepinbell has a large hook on its rear end. At night, the Pokémon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/070.png",
    types: ["poison", "grass"],
    evolutions: [
      {
        method: "stone",
        to: "Victreebel",
        _id: "557a72cf7276d341b41ee1d5"
      }
    ]
  },
  {
    _id: "557a72af7276d341b41ede40",
    pkdx_id: 71,
    name: "Victreebel",
    description:
      "Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/071.png",
    types: ["poison", "grass"],
    evolutions: []
  },
  {
    _id: "557a72c07276d341b41ee007",
    pkdx_id: 72,
    name: "Tentacool",
    description:
      "Tentacool absorbs sunlight and refracts it using water inside its body to convert it into beam energy. This Pokémon shoots beams from the small round organ above its eyes.  Te",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/072.png",
    types: ["poison", "water"],
    evolutions: [
      {
        level: 30,
        method: "level_up",
        to: "Tentacruel",
        _id: "557a72c07276d341b41ee008"
      }
    ]
  },
  {
    _id: "557a72d17276d341b41ee20e",
    pkdx_id: 73,
    name: "Tentacruel",
    description:
      "Tentacruel has tentacles that can be freely elongated and shortened at will. It ensnares prey with its tentacles and weakens the prey by dosing it with a harsh toxin. It can catch up to 80 pr",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/073.png",
    types: ["poison", "water"],
    evolutions: []
  },
  {
    _id: "557a72d17276d341b41ee205",
    pkdx_id: 74,
    name: "Geodude",
    description:
      "When Geodude sleeps deeply, it buries itself halfway into the ground. It will not awaken even if hikers step on it unwittingly. In the morning, this Pokémon rolls downhill in search of foo",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/074.png",
    types: ["ground", "rock"],
    evolutions: [
      {
        level: 25,
        method: "level_up",
        to: "Graveler",
        _id: "557a72d17276d341b41ee206"
      }
    ]
  },
  {
    _id: "557a72b17276d341b41ede6a",
    pkdx_id: 75,
    name: "Graveler",
    description:
      "Rocks are Graveler's favorite food. This Pokémon will climb a mountain from the base to the summit, crunchingly feasting on rocks all the while. Upon reaching the peak, it rolls back d",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/075.png",
    types: ["ground", "rock"],
    evolutions: [
      { method: "trade", to: "Golem", _id: "557a72b17276d341b41ede6b" }
    ]
  },
  {
    _id: "557a72b17276d341b41ede73",
    pkdx_id: 76,
    name: "Golem",
    description:
      "Golem is known for rolling down from mountains. To prevent them from rolling into the homes of people downhill, grooves have been dug into the sides of mountains to serve as guideways ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/076.png",
    types: ["ground", "rock"],
    evolutions: []
  },
  {
    _id: "557a72d17276d341b41ee1fd",
    pkdx_id: 77,
    name: "Ponyta",
    description:
      "Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/077.png",
    types: ["fire"],
    evolutions: [
      {
        level: 40,
        method: "level_up",
        to: "Rapidash",
        _id: "557a72d17276d341b41ee1fe"
      }
    ]
  },
  {
    _id: "557a72cf7276d341b41ee1cc",
    pkdx_id: 78,
    name: "Rapidash",
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pokémon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/078.png",
    types: ["fire"],
    evolutions: []
  },
  {
    _id: "557a72d07276d341b41ee1e2",
    pkdx_id: 79,
    name: "Slowpoke",
    description:
      "Slowpoke uses its tail to catch prey by dipping it in water at the side of a river. However, this Pokémon often forgets what it's doing and often spends entire days just loafing at water's edge. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/079.png",
    types: ["water", "psychic"],
    evolutions: [
      {
        method: "trade",
        to: "Slowking",
        _id: "557a72d07276d341b41ee1e4"
      },
      {
        level: 37,
        method: "level_up",
        to: "Slowbro",
        _id: "557a72d07276d341b41ee1e3"
      }
    ]
  },
  {
    _id: "557a72b17276d341b41ede66",
    pkdx_id: 80,
    name: "Slowbro",
    description:
      "Slowbro's tail has a Shellder firmly attached with a bite. As a result, the tail can't be used for fishing anymore. This causes Slowbro to grudgingly swim and catch prey instead. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/080.png",
    types: ["water", "psychic"],
    evolutions: []
  },
  {
    _id: "557a72b47276d341b41edebc",
    pkdx_id: 81,
    name: "Magnemite",
    description:
      "Magnemite floats in the air by emitting electromagnetic waves from the units at its sides. These waves block gravity. This Pokémon becomes incapable of flight if its internal electrical supply is deplete",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/081.png",
    types: ["steel", "electric"],
    evolutions: [
      {
        level: 30,
        method: "level_up",
        to: "Magneton",
        _id: "557a72b47276d341b41edebd"
      }
    ]
  },
  {
    _id: "557a72b27276d341b41ede87",
    pkdx_id: 82,
    name: "Magneton",
    description:
      "Magneton emits a powerful magnetic force that is fatal to electronics and precision instruments. Because of this, it is said that some towns warn people to keep this Pokémon inside a Po",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/082.png",
    types: ["steel", "electric"],
    evolutions: [
      {
        method: "other",
        to: "Magnezone",
        _id: "557a72b27276d341b41ede88"
      }
    ]
  },
  {
    _id: "557a72d07276d341b41ee1ec",
    pkdx_id: 83,
    name: "Farfetchd",
    description:
      "Farfetch'd is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fight with others over stalks. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/083.png",
    types: ["normal", "flying"],
    evolutions: []
  },
  {
    _id: "557a72cf7276d341b41ee1d9",
    pkdx_id: 84,
    name: "Doduo",
    description:
      "Doduo's two heads contain completely identical brains. A scientific study reported that on rare occasions, there will be examples of this Pokémon possessing different set",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/084.png",
    types: ["normal", "flying"],
    evolutions: [
      {
        level: 31,
        method: "level_up",
        to: "Dodrio",
        _id: "557a72cf7276d341b41ee1da"
      }
    ]
  },
  {
    _id: "557a72cf7276d341b41ee1c3",
    pkdx_id: 85,
    name: "Dodrio",
    description:
      "Apparently, the heads aren't the only parts of the body that Dodrio has three of. It has three sets of hearts and lungs as well, so it is capable of running long distances without rest.  W",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/085.png",
    types: ["normal", "flying"],
    evolutions: []
  },
  {
    _id: "557a72b17276d341b41ede6f",
    pkdx_id: 86,
    name: "Seel",
    description:
      "Seel hunts for prey in the frigid sea underneath sheets of ice. When it needs to breathe, it punches a hole through the ice with the sharply protruding section of its head. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/086.png",
    types: ["water"],
    evolutions: [
      {
        level: 34,
        method: "level_up",
        to: "Dewgong",
        _id: "557a72b17276d341b41ede70"
      }
    ]
  },
  {
    _id: "557a72b47276d341b41edecf",
    pkdx_id: 87,
    name: "Dewgong",
    description:
      "Dewgong loves to snooze on bitterly cold ice. The sight of this Pokémon sleeping on a glacier was mistakenly thought to be a mermaid by a mariner long ago. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/087.png",
    types: ["water", "ice"],
    evolutions: []
  },
  {
    _id: "557a72b27276d341b41ede8c",
    pkdx_id: 88,
    name: "Grimer",
    description:
      "Grimer emerged from the sludge that settled on a polluted seabed. This Pokémon loves anything filthy. It constantly leaks a horribly germ-infested fluid from all ove",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/088.png",
    types: ["poison"],
    evolutions: [
      {
        level: 38,
        method: "level_up",
        to: "Muk",
        _id: "557a72b27276d341b41ede8d"
      }
    ]
  },
  {
    _id: "557a72b27276d341b41ede90",
    pkdx_id: 89,
    name: "Muk",
    description:
      "This Pokémon's favorite food is anything that is repugnantly filthy. In dirty towns where people think nothing of throwing away litter on the streets, Muk are certain to g",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/089.png",
    types: ["poison"],
    evolutions: []
  },
  {
    _id: "557a72b17276d341b41ede62",
    pkdx_id: 90,
    name: "Shellder",
    description:
      "At night, this Pokémon uses its broad tongue to burrow a hole in the seafloor sand and then sleep in it. While it is sleeping, Shellder closes its shell, but leaves its tongue hanging out. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/090.png",
    types: ["water"],
    evolutions: [
      { method: "stone", to: "Cloyster", _id: "557a72b17276d341b41ede63" }
    ]
  },
  {
    _id: "557a72b27276d341b41ede93",
    pkdx_id: 91,
    name: "Cloyster",
    description:
      "Cloyster is capable of swimming in the sea. It does so by swallowing water, then jetting it out toward the rear. This Pokémon shoots spikes from its shell using the same system. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/091.png",
    types: ["water", "ice"],
    evolutions: []
  },
  {
    _id: "557a72b27276d341b41ede97",
    pkdx_id: 92,
    name: "Gastly",
    description:
      "Gastly is largely composed of gaseous matter. When exposed to a strong wind, the gaseous body quickly dwindles away. Groups of this Pokémon cluster under the eaves of houses to escape the ravages of wind. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/092.png",
    types: ["poison", "ghost"],
    evolutions: [
      {
        level: 25,
        method: "level_up",
        to: "Haunter",
        _id: "557a72b27276d341b41ede98"
      }
    ]
  },
  {
    _id: "557a72b37276d341b41edeb0",
    pkdx_id: 93,
    name: "Haunter",
    description:
      "Haunter is a dangerous Pokémon. If one beckons you while floating in darkness, you must never approach it. This Pokémon will try to lick you with its tongue and steal your life away. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/093.png",
    types: ["poison", "ghost"],
    evolutions: [
      { method: "trade", to: "Gengar", _id: "557a72b37276d341b41edeb1" }
    ]
  },
  {
    _id: "557a72b47276d341b41edeca",
    pkdx_id: 94,
    name: "Gengar",
    description:
      "Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a Gengar running past you, pretending to be your shadow. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/094.png",
    types: ["poison", "ghost"],
    evolutions: [
      {
        method: "other",
        to: "Gengar-mega",
        _id: "557a72b47276d341b41edecb"
      }
    ]
  },
  {
    _id: "557a72b47276d341b41edec5",
    pkdx_id: 95,
    name: "Onix",
    description:
      "Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/095.png",
    types: ["ground", "rock"],
    evolutions: [
      { method: "trade", to: "Steelix", _id: "557a72b47276d341b41edec6" }
    ]
  },
  {
    _id: "557a72b27276d341b41ede9c",
    pkdx_id: 96,
    name: "Drowzee",
    description:
      "If your nose becomes itchy while you are sleeping, it's a sure sign that one of these Pokémon is standing above your pillow and trying to eat your dream through your nostrils. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/096.png",
    types: ["psychic"],
    evolutions: [
      {
        level: 26,
        method: "level_up",
        to: "Hypno",
        _id: "557a72b27276d341b41ede9d"
      }
    ]
  },
  {
    _id: "557a72b87276d341b41edf45",
    pkdx_id: 97,
    name: "Hypno",
    description:
      "Hypno holds a pendulum in its hand. The arcing movement and glitter of the pendulum lull the foe into a deep state of hypnosis. While this Pokémon searches for prey, it polishes the pendulum. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/097.png",
    types: ["psychic"],
    evolutions: []
  },
  {
    _id: "557a72b27276d341b41ede7e",
    pkdx_id: 98,
    name: "Krabby",
    description:
      "Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pokémon can be seen squabbling with each other over territory. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/098.png",
    types: ["water"],
    evolutions: [
      {
        level: 28,
        method: "level_up",
        to: "Kingler",
        _id: "557a72b27276d341b41ede7f"
      }
    ]
  },
  {
    _id: "557a72b37276d341b41edea4",
    pkdx_id: 99,
    name: "Kingler",
    description:
      "Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/099.png",
    types: ["water"],
    evolutions: []
  },
  {
    _id: "557a72b37276d341b41edea7",
    pkdx_id: 100,
    name: "Voltorb",
    description:
      "Voltorb is extremely sensitive—it explodes at the slightest of shocks. It is rumored that it was first created when a Poké Ball was exposed to a powerful pulse of energy.  Volto",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/100.png",
    types: ["electric"],
    evolutions: [
      {
        level: 30,
        method: "level_up",
        to: "Electrode",
        _id: "557a72b37276d341b41edea8"
      }
    ]
  },
  {
    _id: "557a72b47276d341b41eded3",
    pkdx_id: 101,
    name: "Electrode",
    description:
      "One of Electrode's characteristics is its attraction to electricity. It is a problematical Pokémon that congregates mostly at electrical power plants to feed on electricity that has ju",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/101.png",
    types: ["electric"],
    evolutions: []
  },
  {
    _id: "557a72b37276d341b41edeab",
    pkdx_id: 102,
    name: "Exeggcute",
    description:
      "This Pokémon consists of six eggs that form a closely knit cluster. The six eggs attract each other and spin around. When cracks increasingly appear on the eggs, Exeggcute is close to evolution. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/102.png",
    types: ["grass", "psychic"],
    evolutions: [
      {
        method: "stone",
        to: "Exeggutor",
        _id: "557a72b37276d341b41edeac"
      }
    ]
  },
  {
    _id: "557a72b47276d341b41edec1",
    pkdx_id: 103,
    name: "Exeggutor",
    description:
      "Exeggutor originally came from the tropics. Its heads steadily grow larger from exposure to strong sunlight. It is said that when the heads fall off, they group together to form Exeggcute. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/103.png",
    types: ["grass", "psychic"],
    evolutions: []
  },
  {
    _id: "557a72b47276d341b41eded6",
    pkdx_id: 104,
    name: "Cubone",
    description:
      "Cubone pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull the Pokémon wears are made by the tears it sheds. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/104.png",
    types: ["ground"],
    evolutions: [
      {
        level: 28,
        method: "level_up",
        to: "Marowak",
        _id: "557a72b47276d341b41eded7"
      }
    ]
  },
  {
    _id: "557a72b37276d341b41edeb9",
    pkdx_id: 105,
    name: "Marowak",
    description:
      "Marowak is the evolved form of a Cubone that has overcome its sadness at the loss of its mother and grown tough. This Pokémon's tempered and hardened spirit is not easily broken. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/105.png",
    types: ["ground"],
    evolutions: []
  },
  {
    _id: "557a72b77276d341b41edf17",
    pkdx_id: 106,
    name: "Hitmonlee",
    description:
      "Hitmonlee's legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/106.png",
    types: ["fighting"],
    evolutions: []
  },
  {
    _id: "557a72b57276d341b41edeef",
    pkdx_id: 107,
    name: "Hitmonchan",
    description:
      "Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pokémon has an indomitable spirit and will never give up in the face of adversity. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/107.png",
    types: ["fighting"],
    evolutions: []
  },
  {
    _id: "557a72b37276d341b41edeb5",
    pkdx_id: 108,
    name: "Lickitung",
    description:
      "Whenever Lickitung comes across something new, it will unfailingly give it a lick. It does so because it memorizes things by texture and by taste. It is somewhat put off by sour things. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/108.png",
    types: ["normal"],
    evolutions: [
      {
        method: "level_up",
        to: "Lickilicky",
        _id: "557a72b37276d341b41edeb6"
      }
    ]
  },
  {
    _id: "557a72b47276d341b41ededa",
    pkdx_id: 109,
    name: "Koffing",
    description:
      "Koffing embodies toxic substances. It mixes the toxins with raw garbage to set off a chemical reaction that results in a terribly powerful poison gas. The higher the temperature, the more gas is concoc",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/109.png",
    types: ["poison"],
    evolutions: [
      {
        level: 35,
        method: "level_up",
        to: "Weezing",
        _id: "557a72b47276d341b41ededb"
      }
    ]
  },
  {
    _id: "557a72b77276d341b41edf1a",
    pkdx_id: 110,
    name: "Weezing",
    description:
      "Weezing alternately shrinks and inflates its twin bodies to mix together toxic gases inside. The more the gases are mixed, the more powerful the toxins become. The Pokémon also becomes more putrid.  Weezi",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/110.png",
    types: ["poison"],
    evolutions: []
  },
  {
    _id: "557a72b57276d341b41edee6",
    pkdx_id: 111,
    name: "Rhyhorn",
    description:
      "Rhyhorn's brain is very small. It is so dense, while on a run it forgets why it started running in the first place. It apparently remembers sometimes if it demolishes something.  Rhyhorn runs i",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/111.png",
    types: ["ground", "rock"],
    evolutions: [
      {
        level: 42,
        method: "level_up",
        to: "Rhydon",
        _id: "557a72b57276d341b41edee7"
      }
    ]
  },
  {
    _id: "557a72b67276d341b41edf07",
    pkdx_id: 112,
    name: "Rhydon",
    description:
      "Rhydon has a horn that serves as a drill. It is used for destroying rocks and boulders. This Pokémon occasionally rams into streams of magma, but the armor-like hide prevents it from feeling th",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/112.png",
    types: ["ground", "rock"],
    evolutions: [
      {
        method: "trade",
        to: "Rhyperior",
        _id: "557a72b67276d341b41edf08"
      }
    ]
  },
  {
    _id: "557a72b97276d341b41edf4f",
    pkdx_id: 113,
    name: "Chansey",
    description:
      "Chansey lays nutritionally excellent eggs on an everyday basis. The eggs are so delicious, they are easily and eagerly devoured by even those people who have lost their appetite. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/113.png",
    types: ["normal"],
    evolutions: [
      {
        method: "level_up",
        to: "Blissey",
        _id: "557a72b97276d341b41edf50"
      }
    ]
  },
  {
    _id: "557a72b87276d341b41edf3d",
    pkdx_id: 114,
    name: "Tangela",
    description:
      "Tangela's vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/114.png",
    types: ["grass"],
    evolutions: [
      {
        method: "level_up",
        to: "Tangrowth",
        _id: "557a72b87276d341b41edf3e"
      }
    ]
  },
  {
    _id: "557a72b77276d341b41edf28",
    pkdx_id: 115,
    name: "Kangaskhan",
    description:
      "If you come across a young Kangaskhan playing by itself, you must never disturb it or attempt to catch it. The baby Pokémon's parent is sure to be in the area, and it will become violently enraged at you. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/115.png",
    types: ["normal"],
    evolutions: [
      {
        method: "other",
        to: "Kangaskhan-mega",
        _id: "557a72b77276d341b41edf29"
      }
    ]
  },
  {
    _id: "557a72b67276d341b41edf0f",
    pkdx_id: 116,
    name: "Horsea",
    description:
      "If Horsea senses danger, it will reflexively spray a dense black ink from its mouth and try to escape. This Pokémon swims by cleverly flapping the fin on its back.  Horsea e",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/116.png",
    types: ["water"],
    evolutions: [
      {
        level: 32,
        method: "level_up",
        to: "Seadra",
        _id: "557a72b67276d341b41edf10"
      }
    ]
  },
  {
    _id: "557a72b87276d341b41edf2c",
    pkdx_id: 117,
    name: "Seadra",
    description:
      "Seadra generates whirlpools by spinning its body. The whirlpools are strong enough to swallow even fishing boats. This Pokémon weakens prey with these currents, then swallows it whol",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/117.png",
    types: ["water"],
    evolutions: [
      { method: "trade", to: "Kingdra", _id: "557a72b87276d341b41edf2d" }
    ]
  },
  {
    _id: "557a72b77276d341b41edf1d",
    pkdx_id: 118,
    name: "Goldeen",
    description:
      "Goldeen loves swimming wild and free in rivers and ponds. If one of these Pokémon is placed in an aquarium, it will shatter even the thickest glass with one ram of its horn and make its",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/118.png",
    types: ["water"],
    evolutions: [
      {
        level: 33,
        method: "level_up",
        to: "Seaking",
        _id: "557a72b77276d341b41edf1e"
      }
    ]
  },
  {
    _id: "557a72b67276d341b41edf0c",
    pkdx_id: 119,
    name: "Seaking",
    description:
      "Seaking is very protective of its eggs. The male and female will take turns patrolling around their nest and eggs. The guarding of eggs by these Pokémon goes on for over a month",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/119.png",
    types: ["water"],
    evolutions: []
  },
  {
    _id: "557a72b57276d341b41edede",
    pkdx_id: 120,
    name: "Staryu",
    description:
      "Staryu apparently communicates with the stars in the night sky by flashing the red core at the center of its body. If parts of its body are torn, this Pokémon simply regenerates the missing pieces an",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/120.png",
    types: ["water"],
    evolutions: [
      { method: "stone", to: "Starmie", _id: "557a72b57276d341b41ededf" }
    ]
  },
  {
    _id: "557a72b67276d341b41edf13",
    pkdx_id: 121,
    name: "Starmie",
    description:
      "Starmie swims through water by spinning its star-shaped body as if it were a propeller on a ship. The core at the center of this Pokémon's body glows in seven color",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/121.png",
    types: ["water", "psychic"],
    evolutions: []
  },
  {
    _id: "557a72b97276d341b41edf48",
    pkdx_id: 122,
    name: "Mr-mime",
    description:
      "Mr. Mime is a master of pantomime. Its gestures and motions convince watchers that something unseeable actually exists. Once the watchers are convinced, the unseeable thing exists as if it were real. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/122.png",
    types: ["fairy", "psychic"],
    evolutions: []
  },
  {
    _id: "557a72b57276d341b41edef7",
    pkdx_id: 123,
    name: "Scyther",
    description:
      "Scyther is blindingly fast. Its blazing speed enhances the effectiveness of the twin scythes on its forearms. This Pokémon's scythes are so effective, they can slice through thick logs in one wicked stroke. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/123.png",
    types: ["flying", "bug"],
    evolutions: [
      { method: "trade", to: "Scizor", _id: "557a72b57276d341b41edef8" }
    ]
  },
  {
    _id: "557a72b57276d341b41edee2",
    pkdx_id: 124,
    name: "Jynx",
    description:
      "Jynx walks rhythmically, swaying and shaking its hips as if it were dancing. Its motions are so bouncingly alluring, people seeing it are compelled to shake their hips without giving any thought to what they are doing. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/124.png",
    types: ["ice", "psychic"],
    evolutions: []
  },
  {
    _id: "557a72b67276d341b41edf03",
    pkdx_id: 125,
    name: "Electabuzz",
    description:
      "When a storm arrives, gangs of this Pokémon compete with each other to scale heights that are likely to be stricken by lightning bolts. Some towns use Electabuzz in place of lightning rods. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/125.png",
    types: ["electric"],
    evolutions: [
      {
        method: "trade",
        to: "Electivire",
        _id: "557a72b67276d341b41edf04"
      }
    ]
  },
  {
    _id: "557a72b87276d341b41edf39",
    pkdx_id: 126,
    name: "Magmar",
    description:
      "In battle, Magmar blows out intensely hot flames from all over its body to intimidate its opponent. This Pokémon's fiery bursts create heat waves that ignite grass and trees in its surroundings. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/126.png",
    types: ["fire"],
    evolutions: [
      {
        method: "trade",
        to: "Magmortar",
        _id: "557a72b87276d341b41edf3a"
      }
    ]
  },
  {
    _id: "557a72b87276d341b41edf35",
    pkdx_id: 127,
    name: "Pinsir",
    description:
      "Pinsir has a pair of massive horns. Protruding from the surface of these horns are thorns. These thorns are driven deeply into the foe's body when the pincer closes, making it tough fo",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/127.png",
    types: ["bug"],
    evolutions: [
      {
        method: "other",
        to: "Pinsir-mega",
        _id: "557a72b87276d341b41edf36"
      }
    ]
  },
  {
    _id: "557a72b67276d341b41edefc",
    pkdx_id: 128,
    name: "Tauros",
    description:
      "This Pokémon is not satisfied unless it is rampaging at all times. If there is no opponent for Tauros to battle, it will charge at thick trees and knock them down to calm itself. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/128.png",
    types: ["normal"],
    evolutions: []
  },
  {
    _id: "557a72b57276d341b41edeeb",
    pkdx_id: 129,
    name: "Magikarp",
    description:
      "Magikarp is virtually useless in battle as it can only splash around. As a result, it is considered to be weak. However, it is actually a very hardy Pokémon that can survive in any body of wa",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    types: ["water"],
    evolutions: [
      {
        level: 20,
        method: "level_up",
        to: "Gyarados",
        _id: "557a72b57276d341b41edeec"
      }
    ]
  },
  {
    _id: "557a72b57276d341b41edef2",
    pkdx_id: 130,
    name: "Gyarados",
    description:
      "Once Gyarados goes on a rampage, its ferociously violent blood doesn't calm until it has burned everything down. There are records of this Pokémon's rampages lasting a whole month.",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/130.png",
    types: ["flying", "water"],
    evolutions: [
      {
        method: "other",
        to: "Gyarados-mega",
        _id: "557a72b57276d341b41edef3"
      }
    ]
  },
  {
    _id: "557a72b67276d341b41edeff",
    pkdx_id: 131,
    name: "Lapras",
    description:
      "People have driven Lapras almost to the point of extinction. In the evenings, this Pokémon is said to sing plaintively as it seeks what few others of its kind still remain. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/131.png",
    types: ["water", "ice"],
    evolutions: []
  },
  {
    _id: "557a72b97276d341b41edf4c",
    pkdx_id: 132,
    name: "Ditto",
    description:
      "Ditto rearranges its cell structure to transform itself into other shapes. However, if it tries to transform itself into something by relying on its memory, this Pokémon manages to get details wrong. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/132.png",
    types: ["normal"],
    evolutions: []
  },
  {
    _id: "557a72bb7276d341b41edf8e",
    pkdx_id: 133,
    name: "Eevee",
    description:
      "Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    types: ["normal"],
    evolutions: [
      { method: "other", to: "Umbreon", _id: "557a72bb7276d341b41edf96" },
      {
        method: "level_up",
        to: "Sylveon",
        _id: "557a72bb7276d341b41edf95"
      },
      { method: "other", to: "Leafeon", _id: "557a72bb7276d341b41edf94" },
      { method: "other", to: "Glaceon", _id: "557a72bb7276d341b41edf93" },
      {
        method: "stone",
        to: "Vaporeon",
        _id: "557a72bb7276d341b41edf92"
      },
      { method: "stone", to: "Jolteon", _id: "557a72bb7276d341b41edf91" },
      { method: "stone", to: "Flareon", _id: "557a72bb7276d341b41edf90" },
      { method: "other", to: "Espeon", _id: "557a72bb7276d341b41edf8f" }
    ]
  },
  {
    _id: "557a72ba7276d341b41edf61",
    pkdx_id: 134,
    name: "Vaporeon",
    description:
      "Vaporeon underwent a spontaneous mutation and grew fins and gills that allow it to live underwater. This Pokémon has the ability to freely control water. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/134.png",
    types: ["water"],
    evolutions: []
  },
  {
    _id: "557a72b77276d341b41edf21",
    pkdx_id: 135,
    name: "Jolteon",
    description:
      "Jolteon's cells generate a low level of electricity. This power is amplified by the static electricity of its fur, enabling the Pokémon to drop thunderbolts. The bristling fur is made of electrically charged needles. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/135.png",
    types: ["electric"],
    evolutions: []
  },
  {
    _id: "557a72bd7276d341b41edfbd",
    pkdx_id: 136,
    name: "Flareon",
    description:
      "Flareon's fluffy fur has a functional purpose—it releases heat into the air so that its body does not get excessively hot. This Pokémon's body temperature can rise to a maximum of 1,650 degrees Fahrenheit. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/136.png",
    types: ["fire"],
    evolutions: []
  },
  {
    _id: "557a72b87276d341b41edf41",
    pkdx_id: 137,
    name: "Porygon",
    description:
      "Porygon is capable of reverting itself entirely back to program data and entering cyberspace. This Pokémon is copy protected so it cannot be duplicated by copying. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/137.png",
    types: ["normal"],
    evolutions: [
      { method: "trade", to: "Porygon2", _id: "557a72b87276d341b41edf42" }
    ]
  },
  {
    _id: "557a72b87276d341b41edf30",
    pkdx_id: 138,
    name: "Omanyte",
    description:
      "Omanyte is one of the ancient and long-since-extinct Pokémon that have been regenerated from fossils by people. If attacked by an enemy, it withdraws itself inside its hard shell. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/138.png",
    types: ["rock", "water"],
    evolutions: [
      {
        level: 40,
        method: "level_up",
        to: "Omastar",
        _id: "557a72b87276d341b41edf31"
      }
    ]
  },
  {
    _id: "557a72ba7276d341b41edf67",
    pkdx_id: 139,
    name: "Omastar",
    description:
      "Omastar uses its tentacles to capture its prey. It is believed to have become extinct because its shell grew too large and heavy, causing its movements to become too slow and ponderous. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/139.png",
    types: ["rock", "water"],
    evolutions: []
  },
  {
    _id: "557a72bc7276d341b41edf9d",
    pkdx_id: 140,
    name: "Kabuto",
    description:
      "Kabuto is a Pokémon that has been regenerated from a fossil. However, in extremely rare cases, living examples have been discovered. The Pokémon has not changed at all for 300 million years. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/140.png",
    types: ["rock", "water"],
    evolutions: [
      {
        level: 40,
        method: "level_up",
        to: "Kabutops",
        _id: "557a72bc7276d341b41edf9e"
      }
    ]
  },
  {
    _id: "557a72b77276d341b41edf24",
    pkdx_id: 141,
    name: "Kabutops",
    description:
      "Kabutops swam underwater to hunt for its prey in ancient times. The Pokémon was apparently evolving from being a water dweller to living on land as evident from the beginnings of change in its gills and legs. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/141.png",
    types: ["rock", "water"],
    evolutions: []
  },
  {
    _id: "557a72b97276d341b41edf53",
    pkdx_id: 142,
    name: "Aerodactyl",
    description:
      "Aerodactyl is a Pokémon from the age of dinosaurs. It was regenerated from genetic material extracted from amber. It is imagined to have been the king of the skies in ancient times. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/142.png",
    types: ["flying", "rock"],
    evolutions: [
      {
        method: "other",
        to: "Aerodactyl-mega",
        _id: "557a72b97276d341b41edf54"
      }
    ]
  },
  {
    _id: "557a72bb7276d341b41edf80",
    pkdx_id: 143,
    name: "Snorlax",
    description:
      "Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its expansive belly as a place to play. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    types: ["normal"],
    evolutions: []
  },
  {
    _id: "557a72ba7276d341b41edf74",
    pkdx_id: 144,
    name: "Articuno",
    description:
      "Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/144.png",
    types: ["flying", "ice"],
    evolutions: []
  },
  {
    _id: "557a72bb7276d341b41edf78",
    pkdx_id: 145,
    name: "Zapdos",
    description:
      "Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/145.png",
    types: ["flying", "electric"],
    evolutions: []
  },
  {
    _id: "557a72b97276d341b41edf58",
    pkdx_id: 146,
    name: "Moltres",
    description:
      "Moltres is a legendary bird Pokémon that has the ability to control fire. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/146.png",
    types: ["flying", "fire"],
    evolutions: []
  },
  {
    _id: "557a72bd7276d341b41edfb5",
    pkdx_id: 147,
    name: "Dratini",
    description:
      "Dratini continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/147.png",
    types: ["dragon"],
    evolutions: [
      {
        level: 30,
        method: "level_up",
        to: "Dragonair",
        _id: "557a72bd7276d341b41edfb6"
      }
    ]
  },
  {
    _id: "557a72c07276d341b41ee019",
    pkdx_id: 148,
    name: "Dragonair",
    description:
      "Dragonair stores an enormous amount of energy inside its body. It is said to alter weather conditions in its vicinity by discharging energy from the crystals on its neck and tail. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/148.png",
    types: ["dragon"],
    evolutions: [
      {
        level: 55,
        method: "level_up",
        to: "Dragonite",
        _id: "557a72c07276d341b41ee01a"
      }
    ]
  },
  {
    _id: "557a72bc7276d341b41edf99",
    pkdx_id: 149,
    name: "Dragonite",
    description:
      "Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/149.png",
    types: ["flying", "dragon"],
    evolutions: []
  },
  {
    _id: "557a72b97276d341b41edf5c",
    pkdx_id: 150,
    name: "Mewtwo",
    description:
      "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    types: ["psychic"],
    evolutions: [
      {
        method: "other",
        to: "Mewtwo-mega-x",
        _id: "557a72b97276d341b41edf5e"
      },
      {
        method: "other",
        to: "Mewtwo-mega-y",
        _id: "557a72b97276d341b41edf5d"
      }
    ]
  },
  {
    _id: "557a72ba7276d341b41edf64",
    pkdx_id: 151,
    name: "Mew",
    description:
      "Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/151.png",
    types: ["psychic"],
    evolutions: []
  },
  {
    _id: "557a723880a20c9db3bc31c2",
    pkdx_id: 1,
    name: "Debora Meaden",
    description:
      "Debora Meaden can be seen napping in bright sunlight. There is a chip on its shoulder. By soaking up the contenstents stupidity, the chip grows progressively larger. ",
    img_url:
      "https://www.businessleader.co.uk/wp-content/uploads/2018/02/Deborah-Meaden.jpg",
    types: ["dragon"],
    evolutions: [
      {
        level: 15,
        method: "level_up",
        to: "Peter Jones",
        _id: "557a723880a20c9db3bc31c3"
      }
    ]
  }
];
