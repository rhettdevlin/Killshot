var adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
var pastTenseBludgeonVerbs = ["crushed", "smashed", "smooshed", "eradicated", "smoked", "slammed", "shattered"];
var presentTenseBludgeonVerbs = ["crush", "smash", "smoosh", "eradicate", "smoke", "slam", "shatter"];

var pastTensePiercingVerbs = ["pierced", "penetrated", "punctured", "punched", "perforated", "pricked", "probed", "spiked", "sticked", "impaled"];
var presentTensePiercingVerbs = ["pierce", "penetrate", "puncture", "punch", "perforate", "prick", "probe", "spike", "stick", "impale"];

var pastTenseSlashingVerbs = ["slashed", "slit", "lacerated", "cut", "gashed", "severed", "cleaved", "carved"];
var presentTenseSlashingVerbs = ["slash", "slit", "lacerate", "cut", "gash", "sever", "cleave", "carve"];


var killingBlowWords = ["killing", "destroying", "eradicating", "annihilating","obliterating", "eliminating", "exterminating", "terminating", "slaughtering", "decimating"];
var dieVerbs = ["dies", "perishes", "breathes its last breathe", "is eradicated", "passes away", "bleeds out", "bites the dust", "deceases", "meets it maker", "succumbs to its wounds", "rendered lifeless"];

var adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];


//check if weapon and enemy has been choosen
    function emptyCheck(){
        if (weapon != "" && enemy != "" && weapon != "Choose a Weapon!" && enemy != "Choose an Enemy!") {
            $('#killButton').prop("disabled", false);
            document.getElementById("killButton").innerHTML = "Kill Em!"
        } else{
          document.getElementById("killButton").innerHTML = "Choose a weapon and enemy!"
          $('#killButton').prop("disabled", true);
        }
        
      }



//create sentence
function sentence(){
    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 11);
    var sentenceStructureRand = Math.floor(Math.random() * 4);  
    var verbs = getVerbs();
    var presentTenseVerb = verbs.presentTenseVerb;
    var pastTenseVerb = verbs.pastTenseVerb;
    var adjective = adjectives[rand1];

   var sentenceStructures = [["The " + enemy +  " is " + adverbs[rand1] + " " + pastTenseVerb + " " + "by your " + weapon + "!"],
                              ["You " +adverbs[rand1] + " " + presentTenseVerb + " the " +adjective+ " " + enemy + "!" ], 
                              ["Your target the " + adjective + " " + enemy + " " + adverbs[rand1] + " "+killingBlowWords[rand1] +  " it with your " + weapon + "!"],
                              [capitalizeFirstLetter(pastTenseVerb) + " "+adverbs[rand1] + " by your " + weapon + " the " + enemy+ " " +dieVerbs[rand2]  +"!"],
                              ["Cowering before you the " +adjective+ " " + enemy + " is finished off " + adverbs[rand1] + " by your " + weapon + "!"]];
  
    return sentenceStructures[sentenceStructureRand][0];
  }    
    
    
    //returns specific verb based on weapon 
    function getVerbs(){
        //Rand number
         var bludgeoningRand = Math.floor(Math.random() * 7);
         var piercingRand = Math.floor(Math.random() * 10);
         var slashingRand = Math.floor(Math.random() * 8);
         var presentTenseVerb;
         var pastTenseVerb;
   
         //Check weapon types and set verb variables accordingly
         if (weaponType == "Bludgeoning") {
             pastTenseVerb = pastTenseBludgeonVerbs[bludgeoningRand];
             presentTenseVerb = presentTenseBludgeonVerbs[bludgeoningRand];
             return {
               pastTenseVerb: pastTenseVerb,
               presentTenseVerb: presentTenseVerb
             };
         } else if(weaponType == "Piercing") {
               pastTenseVerb = pastTensePiercingVerbs[piercingRand];
               presentTenseVerb = presentTensePiercingVerbs[piercingRand];
             return {
               pastTenseVerb: pastTenseVerb,
               presentTenseVerb: presentTenseVerb
             };
         } else if(weaponType == "Slashing") {
               pastTenseVerb = pastTenseSlashingVerbs[slashingRand];
               presentTenseVerb = presentTenseSlashingVerbs[slashingRand];
             return {
               pastTenseVerb: pastTenseVerb,
               presentTenseVerb: presentTenseVerb
             };
     
          }
    
       }

       
    //Capitalize first letter of string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }