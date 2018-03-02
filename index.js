pictures = document.querySelectorAll('.picture');

for ( let i = 0; i < pictures.length; i++) {
    pictures[i].onClick(selectPicture(pictures[i]));
}

selectPicture(picture) {
    picture.style.borderColor = 'red';
}

