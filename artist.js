function getInspiration(name) {
switch (name) {

 case "colin":
   console.log("Japanese pop artists Maywa Denki");
   break;
 case "alden":
   console.log("@BadlandsNPS on Twitter spitting science facts");
   break;
 case "sea":
   console.log("Home Land Security, the new exhibit by the For-Site Foundation");
   break;
 case "christian":
   console.log("NASA video of solar flares in slow motion");
   break;
 default:
    console.log("Who the fuck is that?");

}
}

var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

prompt.get(['name'], function (err, result) {
  getInspiration(result.name);

  ;
});
