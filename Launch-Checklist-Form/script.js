// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json){
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[1].name}</li>
            <li>Diameter: ${json[1].diameter}</li>
            <li>Star: ${json[1].star}</li>
            <li>Distance from Earth: ${json[1].distance}</li>
            <li>Number of Moons: ${json[1].moon}</li>
         </ol>
         <img src="${"https://www.nasa.gov/centers/langley/images/content/698148main_Brains_904_2.jpg"}">`
   });
   
});


   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let copilotNameInput = document.querySelector("input[name=copilotName]");
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let cargoMassInput = document.querySelector("input[name=cargoMass]"); 
   let fuelStatus =  document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus"); 
   let faultyItems = document.getElementById("faultyItems");
   let launchStatus = document.getElementById("launchStatus");
   let formTextColor = document.getElementById("#launchStatusCheck");
   
   function visibilityStatus(){
      document.getElementById("faultyItems").style.visibility = "visible";
   }
   
   
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput === "") {
         alert("Please enter information in all fields");
         event.preventDefault();
      }
      
      if(!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) ||isNaN(cargoMassInput.value)){
         alert("Please enter a text or a number!");
         event.preventDefault();
      }
      

         let pilotStatus = document.getElementById("pilotStatus");
         pilotStatus.innerHTML = `${pilotNameInput.value} is ready to launch`
         let copilotStatus = document.getElementById("copilotStatus");
         copilotStatus.innerHTML = `${copilotNameInput.value} is ready to launch`
         
         
         if (fuelLevelInput.value < 10000){
            fuelStatus.innerHTML = "Fuel level is too low for launch"
            launchStatus.innerHTML = "Shuttle not ready for launch"
            launchStatus.style.color = "red";
            visibilityStatus();
            event.preventDefault()
         }else if (cargoMassInput.value > 10000){
         cargoStatus.innerHTML = "Cargo is too heavy for launch"
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red";
         visibilityStatus()
         event.preventDefault()
      } else {
         launchStatus.innerHTML = "Shuttle is ready for launch"
         launchStatus.style.color = "green"
         event.preventDefault();
      }
   });
});




// }

// if (!isNaN(pilotNameInput.value)){    
//    alert("Please enter text for the Pilot's name");
//    event.preventDefault();
// }

// if (!isNaN(copilotNameInput.value)){
//    alert("Please enter text for the Copilot's name")
//    event.preventDefault();
// }

// if (isNaN(fuelLevelInput.value)){
//    alert("Please enter a number for the Fuel Level")
//    event.preventDefault();
// }

// if(isNaN(cargoMassInput.value)){
//    alert("Please enter a number for the Cargo Mass")
//    event.preventDefault();
// }


// if (cargoMassInput.value >= 10000){
   
// }
   // if (isNan(fuelLevelInput)){
      //    console.log("Please enter a number for the Fuel Level");
   // }

   // if (isNaN(cargoMassInput)){
      //    console.log("Please enter a number for the Cargo Mass")
   // }

   


//  This block of code shows how to format the HTML once you fetch some planetary JSON!

