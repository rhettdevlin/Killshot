
//Arrays of different types of enemies
var abberations = ["Aboleth","Chuul", "Cloaker", "Gibbering Mouther", "Otyugh"];
var beasts = ["Ape ","Axe Beak ","Baboon ","Badger ","Bat ","Black bear ","Blood Hawk ","Boar ","Brown Bear ","Camel ","Cat ","Constrictor Snake ","Crab ","Crocodile ","Deer ","Dire Wolf ","Draft Horse ","Eagle ","Elephant ","Elk ","Flying Snake ","Frog ","Giant Ape ","Giant Badger ","Giant Bat ","Giant Boar ","Giant Centipede ","Giant Constrictor Snake ","Giant Crab ","Giant Crocodile ","Giant Eagle ","Giant Elk ","Giant Fire Beetle ","Giant Frog ","Giant Goat ","Giant Hyena ","Giant Lizard ","Giant Octopus ","Giant Owl ","Giant Poisonous Snake ","Giant Rat ","Giant Scorpion ","Giant Sea Horse ","Giant Shark ","Giant Spider ","Giant Toad ","Giant Vulture ","Giant Wasp ","Giant Weasel ","Giant Wolf Spider ","Goat ","Hawk ","Hunter Shark ","Hyena ","Jackal ","Killer Whale ","Lion ","Lizard ","Mammoth ","Mastiff ","Mule ","Octopus ","Owl ","Panther ","Phase Spider ","Plesiosaurus ","Poisonous Snake ","Polar Bear ","Pony ","Quipper ","Rat ","Raven ","Reef Shark ","Rhinoceros ","Riding Horse ","Saber-Toothed Tiger ","Scorpion ","Sea Horse ","Spider ","Stirge ","Tiger ","Triceratops ","Tyrannosaurus Rex ","Vulture ","Warhorse ","Weasel ","Wolf"];
var celestials = ["Couatl", "Deva", "Pegasus", "Planetar", "Solar", "Unicorn"];
var constructs = ["Animated Armor ","Clay Golem","Flesh Golem ","Flying Sword ","Homunculus ","Iron Golem ","Rug of Smothering ","Shield Guardian ","Stone Golem"];
var dragons = ["Adult Black Dragon ","Adult Blue Dragon ","Adult Brass Dragon ","Adult Bronze Dragon ","Adult Copper Dragon ","Adult Gold Dragon ","Adult Green Dragon ","Adult Red Dragon ","Adult Silver Dragon ","Adult White Dragon ","Ancient Black Dragon ","Ancient Blue Dragon ","Ancient Brass Dragon ","Ancient Bronze Dragon ","Ancient Copper Dragon ","Ancient Gold Dragon ","Ancient Green Dragon ","Ancient Red Dragon ","Ancient Silver Dragon ","Ancient White Dragon ","Black Dragon Wyrmling ","Blue Dragon Wyrmling ","Brass Dragon Wyrmling ","Bronze Dragon Wyrmling ","Copper Dragon Wyrmling ","Dragon Turtle ","Gold Dragon Wyrmling ","Green Dragon Wyrmling ","Pseudodragon ","Red Dragon Wyrmling ","Silver Dragon Wyrmling ","White Dragon Wyrmling ","Wyvern ","Young Black Dragon ","Young Blue Dragon ","Young Brass Dragon ","Young Bronze Dragon ","Young Copper Dragon ","Young Gold Dragon ","Young Green Dragon ","Young Red Dragon ","Young Silver Dragon ","Young White Dragon"];
var elementals = ["Air Elemental ","Azer ","Djinni ","Dust Mephit ","Earth Elemental ","Efreeti ","Fire Elemental ","Gargoyle ","Ice Mephit ","Invisible Stalker ","Magma Mephit ","Magmin ","Salamander ","Steam Mephit ","Water Elemental ","Xorn"];
var fey = ["Blink Dog ","Dryad ","Green Hag ","Satyr ","Sea Hag ","Sprite"];
var fiends = ["Hell Hound ","Night Hag ","Nightmare ","Rakshasa","Balor ","Dretch ","Glabrezu ","Hezrou ","Marilith ","Nalfeshnee ","Quasit ","Vrock","Barbed Devil ","Bearded Devil ","Bone Devil ","Chain Devil ","Erinyes ","Horned Devil ","Ice Devil ","Imp ","Lemure ","Pit Fiend","Succubus/Incubus"];
var giants = ["Cloud Giant ","Ettin ","Fire Giant ","Frost Giant ","Hill Giant ","Ogre ","Oni ","Stone Giant ","Storm Giant ","Troll"]
var monstrosities = ["Androsphinx ","Ankheg ","Basilisk ","Behir ","Bulette ","Centaur ","Chimera ","Cockatrice ","Darkmantle ","Death Dog ","Doppelganger ","Drider ","Ettercap ","Gorgon ","Grick ","Griffon ","Guardian Naga ","Gynosphinx ","Harpy ","Hippogriff ","Hydra ","Kraken","Lamia ","Manticore ","Medusa ","Merrow ","Minotaur ","Owlbear ","Purple Worm ","Remorhaz ","Roc ","Roper ","Rust Monster ","Spirit Naga ","Tarrasque ","Winter Wolf ","Worg"];
var ooze = ["Black Pudding", "Gelatinous Cube", "Gray Ooze", "Ochre Jelly"];
var plants = ["Awakened Shrub ","Awakened Tree ","Shambling Mound ","Shrieker ","Treant ", "Violet Fungus"];
var shapechangers = ["Mimic","Vampire", "Werebear ","Wereboar ","Wererat ","Weretiger ", "Werewolf"];
var undeads = ["Ghast ","Ghost ","Ghoul ","Lich ","Minotaur Skeleton ","Mummy ","Mummy Lord ","Ogre Zombie ","Shadow ","Skeleton ","Specter ","Vampire Spawn ","Warhorse Skeleton ","Wight ","Will-o'-Wisp ","Wraith ","Zombie"];

//Modular load enemies function that adds enemy and enemyType to selectable dropdown
function loadEnemies(enemies, enemyType){
    var str = '';
    enemies.forEach(function(enemy) {
        console.log(enemy);
        if (enemy) {
        str += '<option data-subtext = "'+enemyType+'">'+ enemy.trim() + '</option>';
      }
      });
      document.getElementById("enemy").innerHTML += str;
}
