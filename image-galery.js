let m_imageArray = document.images;
// Get the modal
var modal = document.getElementById('myModal');

for (f_index = 0; f_index < m_imageArray.length; f_index++) {
    let f_image = m_imageArray[f_index];

    if(f_image.complete) {
        showImage(f_image);
    }

    else {
        f_image.addEventListener('load', showImage(f_image));
    }
}

function showImage(p_image) {
    p_image.style.visibility = 'visible';
    p_image.classList.add("on-image-loaded");

    setModalLogic(p_image);
}

// Modal stuff.

function setModalLogic(p_image) {
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    p_image.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
    modal.style.display = "none";
    }
}