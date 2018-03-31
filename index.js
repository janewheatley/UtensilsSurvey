//next time, we would like to only select one variable per category.  Jamie suggested using "selected" in html


//selects only one picture from the coffee group

//create a variable called pictures, where you select all of the pictures within the first question about coffee
let coffeePics = document.querySelectorAll('.coffeeGrp');

//create a loop that runs through the total length, 6, of the pictures.  then, after the function is run, this is where the function is called.  the function name is selectPicture and i stands for the invidivual picture that is clicked
for (let i = 0; i < coffeePics.length; i++) {
    selectPicture(i);

}

//this is the function, called selectPicture and we named the parameter choice because it signifies we are selecting one choice when we onclick
function selectPicture(choice) {
    //we are substituting in our variable pictures, which is all of our coffee pictures, then 'choice' is the number which we are clicking.  onclick works with an equal sign and then the function after it.  it can also be written as such:  object.addEventListener("click", myScript);
    coffeePics[choice].onclick = function () {
        //our for loop needs a new variable bc i has already been used 
        //****question about why using variable j, we are essentially doing the for loop from above again..do we need to??
        for (let j = 0; coffeePics.length; j++) {
            //if the variable is clicked, then change the background color to red
            if (j == choice) {
                this.style.backgroundColor = "red";
                //otherwise, turn the background color white
            } else {
                //****question about why coffeePicsj here bc it seems like that would only be one coffee pic at a time???
                coffeePics[j].style.backgroundColor = "white";
            }
        }
    }
}


//**can we change this so that the function runs through the pics in only a given group and then we can call each group separately so that you can highlight in more than one group??





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


//
//let pictureMouseover = document.querySelectorAll(".picture");
//
//for (let i = 0; pictureMouseover.length; i++) {
//    mouseoverColor(i);
//}
//
//function mouseoverColor(choice) {
//    pictureMouseover[choice].onmouseover = function () {
//        for (let j = 0; pictureMouseover.length; j++) {
//            if (j == choice) {
//                this.style.backgroundColor = "blue";
//            } else {
//                pictureMouseover[j].style.backgroundColor = "white";
//            }
//        }
//    }
//
//}