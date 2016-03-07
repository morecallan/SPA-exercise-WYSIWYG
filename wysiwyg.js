var famousPeepsDiv = document.getElementById("famousPeeps");
var cards = document.getElementsByClassName("person");
var textInput = document.getElementById("textBox");

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
        buildString += "<person class='person'> <header>" + famousPeople[i].title + ": " + famousPeople[i].name + "</header> <section>" + "<p>" + famousPeople[i].bio + "</p>"+ famousPeople[i].image + "</section> <footer>" + famousPeople[i].lifespan.birth + " - " + famousPeople[i].lifespan.death + "</footer> </person>";  
    }
    famousPeepsDiv.innerHTML += buildString
}

addFamousPeepsToDOM(famousPeople)



function addEventListener() {
    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function() {
            // Unselects all boxes after click and before the new one is added
            for (var j = 0; j < cards.length; j++) {
                cards[j].classList.remove("dottedBorder");
            }
            // When you click on one of the person elements, a dotted border should appear around it.
            this.classList.toggle("dottedBorder"); //THIS adds the classlist to overall card vs e.target which would add it to the actual element.

            // When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
            textInput.focus();
        });
    }
}
addEventListener();

// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
textInput.addEventListener("keyup", changeBio); 

function changeBio(e) {
    var selectedCard = document.getElementsByClassName("dottedBorder")[0];
    if (selectedCard !== undefined) {
        var userText = textInput.value;
        var bio = selectedCard.getElementsByTagName("p")[0];
        bio.innerHTML = userText;
    }
    
    if (e.code === "Enter") {
        textInput.value = "";
    }
}


//When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.





