function scuberGreetingForFeet(number){
  let answer
  if (number <= 400){
  answer = "This one is on me!"
}
  else if (number > 400 && number < 2001){
    answer = "That will be twenty bucks."
  }
  else if (number > 2000 && number < 2500){
    answer = "I will gladly take your thirty bucks."
  }
  else if (number > 2500){
    answer = "No can do."
  }
  return answer
}
function ternaryCheckCity(city){ 
  
 const cityMessage = city ? "Ok, sounds good." : "No go.";

 return cityMessage
 
 
  }

function switchOnCharmFromTip(){
const tip = "generous";

let charm;

 switch (tip) {
  case 'generous':
    charm = "Thank you so much.";
    break;
  case "not as generous":
    charm = "Thank you.";
    break;
  default:
    console.log("Bye.")
    break;
 }


}