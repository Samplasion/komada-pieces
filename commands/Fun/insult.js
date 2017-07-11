const start = ["a lazy", "a stupid", "an insecure", "an idiotic", "a slimy", "a slutty", "a smelly", "a pompous", "a communist", "a dicknose", "a pie-eating", "a racist", "an elitist", "a white trash", "a drug-loving", "a butterface", "a tone deaf", "a ugly", "a creepy", "an artless", "a bawdy", "a beslubbering", "a bootless", "a churlish", "a cockered", "a clouted", "a craven", "a currish", "a dankish", "a dissembling", "a droning", "an errant", "a fawning", "a fobbing", "a frothy", "a gleeking", "a goatfish", "a gorbellied", "an impertinent", "an infectious", "a jarring", "a loggerheaded", "a lumpish", "a mammering", "a mangled", "a mewling", "a paunchy", "a pribbling", "a puking", "a puny", "a qualling", "a rank", "a reeky", "a roguish", "a ruttish", "a saucy", "a spleeny", "a spongy", "a surly", "a tottering", "an unmuzzled", "a vain", "a venomed", "a villainous", "a warped", "a wayward", "a weedy", "a yeasty", "a lilly-livered", "a rotten", "a stinky", "a lame", "a dim-witted", "a funky", "a crusty", "a steamy", "a drizzly", "a grizzly", "a squirty", "an uptight", "a hairy", "a husky", "an arrogant", "a nippy", "a chunky", "a smelly", "a drooling", "a crusty", "a decrepic", "a stupid", "a moronic", "a greasy", "a poxy", "an ugly", "a smelly", "a putrid", "a shitty", "an assinine", "a sickening"];

const middle = ["douche", "ass", "turd", "rectum", "butt", "cock", "shit", "crotch", "bitch", "turd", "prick", "slut", "taint", "fuck", "dick", "boner", "shart", "nut", "sphincter", "base-court", "bat-fowling", "beef-witted", "beetle-headed", "boil-brained", "clapper-clawed", "clay-brained", "common-kissing", "crook-pated", "dismal-dreaming", "dizzy-eyed", "doghearted", "dread-bolted", "earth-vexing", "elf-skinned", "fat-kidneyed", "fen-sucked", "flap-mouthed", "fly-bitten", "folly-fallen", "fool-born", "full-gorged", "guts-gripping", "half-faced", "hasty-witted", "hedge-born", "hell-hated", "idle-headed", "ill-breeding", "ill-nurtured", "knotty-pated", "milk-livered", "motly-minded", "onion-eyed", "plume-plucked", "pottle-deep", "pox-marked", "reeling-ripe", "rough-hewn", "rude-growing", "rump-red", "shard-borne", "sheep-biting", "spur-galled", "swag-bellied", "tardy-gaited", "tickle-brained", "toad-spotted", "unchin-snouted", "weather-bitten", "hiney", "poop", "toot", "wedgie", "stool", "fudge", "bum", "potty", "dookie", "pudding", "sphincter", "booger", "feces", "snot", "crust", "badonk-a", "crud", "sludge", "tool", "shit-kicking", "monkey-licking", "butt-munching", "crotch-sniffing", "donkey-spanking", "fashion-illiterate", "worm-ridden", "grub-fucking", "lathered-up", "pasty-waisted", "snot-flicking", "fart-eating"];

const end = ["pilot", "canoe", "captain", "pirate", "hammer", "knob", "box", "jockey", "nazi", "waffle", "goblin", "blossom", "biscuit", "clown", "socket", "monster", "hound", "dragon", "balloon", "apple-john", "baggage", "barnacle", "bladder", "boar-pig", "bugbear", "bum-bailey", "canker-blossom", "clack-dish", "clotpole", "coxcomb", "codpiece", "death-token", "dewberry", "flap-dragon", "flax-wench", "flirt-gill", "foot-licker", "fustilarian", "giglet", "gudgeon", "haggard", "harpy", "hedge-pig", "horn-beast", "hugger-mugger", "joithead", "lewdster", "lout", "maggot-pie", "malt-worm", "mammet", "measle", "minnow", "miscreant", "moldwarp", "mumble-news", "nut-hook", "pigeon-egg", "pignut", "puttock", "pumpion", "ratsbane", "scut", "skinsmate", "strumpet", "varlot", "vassal", "whey-face", "wagtail", "squeegee", "turtle", "cabbage", "bomb", "sniffer", "binkie", "stump", "nugget", "whistle", "twig", "knuckle", "burger", "hotdog", "loaf", "freckle", "soldier", "kernal", "shingle", "warrior", "hemorrhoid", "fuckface", "asshole", "scumbucket", "toerag", "hackwack", "imbecile", "stunodigan", "maggot", "hipster", "gargabe", "jerkstore"];

const roll = type => type[Math.floor(Math.random() * type.length)];

exports.run = (client, msg, [user]) => msg.channel.send(`${user}, you know what? you're nothing but ${roll(start)} ${roll(middle)} ${roll(end)}.`);

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "insult",
  description: "Insults who you mention",
  usage: "<user:mention>",
  usageDelim: "",
  type: "commands",
};
