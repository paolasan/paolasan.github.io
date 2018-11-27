let m_imageArray = document.images;
// Get the modal
var modal = document.getElementById('myModal');

let selectedImageIndex = 0;

for (f_index = 0; f_index < m_imageArray.length; f_index++) {
    let f_image = m_imageArray[f_index];

    if(f_image.complete) {
        showImage(f_image);
    }

    else {
        f_image.addEventListener('load', showImage(f_image));
    }

    setModalLogic(f_index);
}

function showImage(p_image) {
    p_image.style.visibility = 'visible';
    p_image.classList.add("on-image-loaded");
}

// Modal stuff.

function setModalLogic(p_index) {

    let m_image = m_imageArray[p_index];
    selectedImageIndex = p_index;

    m_image.onclick = function(){
        setModalImage(p_index);
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
    modal.style.display = "none";
    }
}

function setModalImage(p_index) {
    var m_image = m_imageArray[p_index];
    modal.style.display = "block";
    let m_modal = document.getElementById("img01");
    m_modal.src = m_image.src;
}

document.addEventListener('keydown', function (p_event) {
    var m_keyCode = p_event.keyCode;
   
    let m_next = 0;

    if(m_keyCode == 37) {
        m_next = 1;
    }

    else if (m_keyCode == 39) {
        m_next = -1;
    }

    nextImage(m_next);
});

function nextImage(p_next) {
    selectedImageIndex += p_next;

    if(selectedImageIndex > m_imageArray.length) {
        selectedImageIndex = 0;
    }

    if(selectedImageIndex < 0) {
        selectedImageIndex = m_imageArray.length -1;
    }
}