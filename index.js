//create a separate variable for each set of pics, to be able to select them separately
let coffeePics = document.querySelectorAll('.coffeeGrp');
let cookiePics = document.querySelectorAll('.cookieGrp');
let dogPics = document.querySelectorAll('.dogGrp');
let seatPics = document.querySelectorAll('.seatGrp');



//each for loop runs through the length of the group of pics, this is also where the function is called
// i = the index of the picture we are applying to click function to (and when we click it, the index of the picture we are marking as selected)
// [whatever]Pics = the group of photos, so that we can loop through the whole group and mark every one in the group that we didn't select as not selected
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

//this is selecing the submit button
let submitClick = document.querySelector(".submit");


//this is what needs to be completed when you click on submit
submitClick.onclick = function () {
    //selectedGrp is the variable name for all of the pics that you click on
    let selectedGrp = document.querySelectorAll(".selected");
    //the total is for when we add tog all the values we assigned in our html, the total starts at zero and keeps going up by the parsedNum we add to it
    let total = 0;
    for (i = 0; i < selectedGrp.length; i++) {
        //we need to use parseInt because we end up getting a string otherwise
        //we made a variable for which item we click and then we needed to specifically get the value we assigned to it
        let parsedNum = parseInt(selectedGrp[i].getAttribute("value"));
        total += parsedNum;
    }
    let resultString = "";
    let srcFileName = "";
    if (total > 0 && total <= 8) {
        resultString = "You are a fork";
        srcFileName = "public/images/results/fork.jpg";
        console.log("You are a fork");
    } else if (total > 8 && total <= 16) {
        resultString = "You are a spoon";
        srcFileName = "public/images/results/spoon.jpg";
        console.log("You are a spoon");
    } else {
        resultString = "You are a knife";
        srcFileName = "public/images/results/knife.jpg";
        console.log("You are a knife");
    }
    //we are hiding the button container once the submit is clicked...adding hidden on click to the class
    let buttonContainer = document.querySelector('.buttonContainer');
    buttonContainer.classList.add("hidden");



    //we are showing the results when we click by removing the class hidden
    let result = document.querySelector('.resultsContainer');
    result.classList.remove("hidden");

    //we create a new element to show our results

    let resultTitle = document.createElement("h1");
    resultTitle.innerHTML = resultString;
    //appendChild puts the element below
    result.appendChild(resultTitle);

    let resultImg = document.createElement("img");
    resultImg.src = srcFileName;
    resultImg.className = "resultImg";
    result.appendChild(resultImg);

    let coorDiv = document.querySelector(".resultsContainer");
    console.log(coorDiv.offsetTop);
    window.scroll(0, 4000);



    //we are disabling the click so that we can't change selections after we hit submit
    let allImages = document.querySelectorAll('.picture');
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].onclick = null;
    }

    //we are disabling the hover zoom effect so the user doesn't get confused and think they can still click on things
    for (let h = 0; h < allImages.length; h++) {
        allImages[h].classList.remove("zoom");
    }

    console.log("total equals " + total);
}


//this is the function, called selectPicture and we named the parameter choice because it signifies we are selecting one choice when we onclick
function selectPicture(choice, groupPics) {
    //we are substituting in our variable pictures, which is all of our coffee pictures, then 'choice' is the number which we are clicking.
    //onclick works with an equal sign and then the function after it.  it can also be written as such:  object.addEventListener("click", myScript);
    groupPics[choice].onclick = function () {
        //our for loop needs a new variable bc i has already been used


        for (let j = 0; j < groupPics.length; j++) {
            //if the variable is clicked, then change the background color to red
            if (j == choice) {
                //adds another class to whichever classgroup you are in, here we added the class selected to our div class
                this.classList.add("selected");
                this.classList.remove("not-selected");
            } else {
                groupPics[j].classList.remove("selected");
                groupPics[j].classList.add("not-selected");
            }
        }
    }
}
