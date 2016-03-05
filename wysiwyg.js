var famousPeepsDiv = document.getElementById("famousPeeps");


// Create an array of objects that represents famous people (see structure below)
var famousPeople = [

    {
      title: "Leprechaun",
      name: "Lucky",
      bio: "He was briefly replaced by a forgetful wizard name Waldo (Waldo the Wizard) in 1975.",
      image: "<img src=imgs/Lucky.jpg>",
      lifespan: {
        birth: 1963,
        death: "Living"
      }
    },

    {
      title: "Tiger",
      name: "Tony",
      bio: "In 1974, where he was deemed 'Tiger of the Year' in an advertising theme taken from the Chinese Lunar Calendar.",
      image: "<img src=imgs/Tony.jpg>",
      lifespan: {
        birth: 1951,
        death: "Living"
      }
    },

    {
      title: "Cap'n",
      name: "Horatio Magellan Crunch",
      bio: "Captains a ship called the Guppy, and was born on Crunch Island in the Sea of Milk – a magical place with talking trees, crazy creatures and a whole mountain made out of Cap’n Crunch cereal.",
      image: "<img src=imgs/Capn.jpg>",
      lifespan: {
        birth: 1963,
        death: "Living"

      }
    }
]

//Takes famousPeople array, loops through and then outputs it to DOM to match specs
//Create a DOM element for each of the objects inside the container. Style your person elements however you like.
function addFamousPeepsToDOM(famousPeople){
    var buildString = "";
    for (var i = 0; i < famousPeople.length; i++) {
        buildString += "<person> <header>" + famousPeople[i].title + ": " + famousPeople[i].name + "</header> <section>" + famousPeople[i].bio + famousPeople[i].image + "</section> <footer>" + famousPeople[i].lifespan.birth + " - " + famousPeople[i].lifespan.death + "</footer> </person>";  
    }
    famousPeepsDiv.innerHTML += buildString
}

addFamousPeepsToDOM(famousPeople)


// When you click on one of the person elements, a dotted border should appear around it.
famousPeepsDiv.addEventListener("click", addBorder)

function addBorder(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentNode.parentNode.classList.toggle("dottedBorder");
    } else if (e.target.tagName !== "PERSON") {
        e.target.parentNode.classList.toggle("dottedBorder");
    } else {
        e.target.classList.toggle("dottedBorder");
    }
    
}