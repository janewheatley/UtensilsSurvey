//next time, we would like to only select one variable per category.  Jamie suggested using "selected" in html

let pictures = document.querySelectorAll('.picture');

for (let i = 0; i < pictures.length; i++) {
    selectPicture(i);

}

function selectPicture(choice) {
    pictures[choice].onclick = function () {
        for (let j = 0; pictures.length; j++) {
            if (j == choice) {
                this.style.backgroundColor = "red";
            } else {
                pictures[j].style.backgroundColor = "white";
            }
        }

        console.log("hello2")
    }
}
