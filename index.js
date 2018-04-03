//next time, we would like to only select one variable per category.  Jamie suggested using "selected" in html


//selects only one picture from the coffee group

//create a variable called pictures, where you select all of the pictures within the first question about coffee
let coffeePics = document.querySelectorAll('.coffeeGrp');
let cookiePics = document.querySelectorAll('.cookieGrp');
let dogPics = document.querySelectorAll('.dogGrp');
let seatPics = document.querySelectorAll('.seatGrp');

//create a loop that runs through the total length, 6, of the pictures.  then, after the function is run, this is where the function is called.
// the function name is selectPicture and i stands for the invidivual picture that is clicked
//here we are salying "go to every picture and set the onclick so that when we click it, it does work"
for (let i = 0; i < coffeePics.length; i++) {
    selectPicture(i, coffeePics);
}

for (let i = 0; i < cookiePics.length; i++) {
    selectPicture(i, cookiePics);
}

for (let i = 0; i < dogPics.length; i++) {
    selectPicture(i, dogPics);
}

for (let i = 0; i < seatPics.length; i++) {
    selectPicture(i, seatPics);
}

let submitClick = document.querySelector(".submit");

submitClick.onclick = function () {
    let selectedGrp = document.querySelectorAll(".selected");
    let total = 0;
    for (i = 0; i < selectedGrp.length; i++) {
        let parsedNum = parseInt(selectedGrp[i].getAttribute("value"));
        total += parsedNum;
    }
    if (total > 0 && total <= 8) {
        console.log("You are a fork");
    } else if (total > 8 && total <= 16) {
        console.log("You are a spoon");
    } else {
        console.log("You are a knife");
    }
    this.classList.add("hidden");
    console.log("total equals " + total);
}

//this is the function, called selectPicture and we named the parameter choice because it signifies we are selecting one choice when we onclick
function selectPicture(choice, groupPics) {
    //we are substituting in our variable pictures, which is all of our coffee pictures, then 'choice' is the number which we are clicking.
    //onclick works with an equal sign and then the function after it.  it can also be written as such:  object.addEventListener("click", myScript);
    groupPics[choice].onclick = function () {
        //our for loop needs a new variable bc i has already been used
        //****question about why using variable j, we are essentially doing the for loop from above again..do we need to??
        //answer: above we are looping to set the click for each picture. below, we are looping once we have clicked the button to change the settings once one is clicked
        //so here, we are saying "we clicked a button. now lets go through every button to seee if it is hte one we clicked and change the settings accordingly"

        for (let j = 0; j < groupPics.length; j++) {
            //if the variable is clicked, then change the background color to red
            if (j == choice) {
                //adds another class to whichever classgroup you are in, here we added the class selected to our div class
                this.classList.add("selected");
            } else {
                groupPics[j].classList.remove("selected");
            }
        }
    }
}



//examples to explain a little
//ourNames = ['jamie','jane','catie'] <-- this is an array. if you were to do ourNames.style.backgroundColor it would be like doing
//['jamie','jane','catie'].style.backgroundColor
//you can't do that to an array. an array is just a container to hold other objects. it has some of its own properties (like length), but not the same as the ones inside
//but if you loop through it, ourNames[0] is like doing
//'jamie'.style.backgroundColor


//**can we change this so that the function runs through the pics in only a given group and then we can call each group separately so that you can highlight in more than one group??
// yeah. we can do that. one way is to do this `let coffeePics = document.querySelectorAll('.coffeeGrp');` for each question, and then put a loop that calls the function for each question.
//there may be a better way but i this it's using more complex stuff




//****EXPERIMENTING WITH FUNCTIONS****

//changing header color




//let headerSelect = document.querySelector(".jumbotron");
//
//function headerColor() {
//    headerSelect.onclick = function () {
//        this.style.color = "purple";
//    }
//}
//headerColor()





//changing background color on pictures when mousing over

//let pictureMouseover = document.querySelectorAll(".picture");
//
//for (let i = 0; pictureMouseover.length; i++) {
//    mouseoverColor(i);
//}
//
//function mouseoverColor(choice) {
//    pictureMouseover[choice].onmouseover = function () {
//        for (let j = 0; j < pictureMouseover.length; j++) {
//            if (j == choice) {
//                this.style.backgroundColor = "blue";
//            } else {
//                pictureMouseover[j].style.backgroundColor = "white";
//            }
//        }
//    }
//
//}
