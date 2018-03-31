//next time, we would like to only select one variable per category.  Jamie suggested using "selected" in html


//selects only one picture from the coffee group

//create a variable called pictures, where you select all of the pictures within the first question about coffee
let coffeePics = document.querySelectorAll('.coffeeGrp');

//create a loop that runs through the total length, 6, of the pictures.  then, after the function is run, this is where the function is called.
// the function name is selectPicture and i stands for the invidivual picture that is clicked
//here we are salying "go to every picture and set the onclick so that when we click it, it does work"
for (let i = 0; i < coffeePics.length; i++) {
    selectPicture(i);

}

//this is the function, called selectPicture and we named the parameter choice because it signifies we are selecting one choice when we onclick
function selectPicture(choice) {
    //we are substituting in our variable pictures, which is all of our coffee pictures, then 'choice' is the number which we are clicking.
    //onclick works with an equal sign and then the function after it.  it can also be written as such:  object.addEventListener("click", myScript);
    coffeePics[choice].onclick = function () {
        //our for loop needs a new variable bc i has already been used
        //****question about why using variable j, we are essentially doing the for loop from above again..do we need to??
        //answer: above we are looping to set the click for each picture. below, we are looping once we have clicked the button to change the settings once one is clicked
        //so here, we are saying "we clicked a button. now lets go through every button to seee if it is hte one we clicked and change the settings accordingly"
        for (let j = 0; coffeePics.length; j++) {
            //if the variable is clicked, then change the background color to red
            if (j == choice) {
                this.style.backgroundColor = "red";
                //otherwise, turn the background color white
            } else {
                //****question about why coffeePicsj here bc it seems like that would only be one coffee pic at a time???
                //answer: correct. the loop is going through each element and one at a time, the if statement is saying "for this element,
                //is the index == choice?" and then changes the setting accordingly. you have to change each one individually because an array doesn't
                //have the same properties as an object from the dom. doing coffeePics.style.backgroundColor wouldn't work.
                coffeePics[j].style.backgroundColor = "white";
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
