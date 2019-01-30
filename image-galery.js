let m_imageArray = [];
// Get the modal
var modal = document.getElementById('myModal');

let selectedImageIndex = 0;

let m_rowArray = document.getElementsByClassName('row');

let isModalOpen = false;

for(f_rowIndex = 0; f_rowIndex < m_rowArray.length; f_rowIndex ++) {

    let f_row = m_rowArray[f_rowIndex];
    for(f_columnIndex = 0; f_columnIndex < f_row.children.length; f_columnIndex++) {
        let f_column = f_row.children[f_columnIndex];
        for(f_imageIndex = 0; f_imageIndex < f_column.children.length; f_imageIndex ++) {
            //let f_image = f_column.children[f_imageIndex].nextElementSibling;
            let f_image = f_column.children[f_imageIndex].children[0];
            m_imageArray.push(f_image);
        }
    }
}

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
}

function setModalLogic(p_index) {
    let m_image = m_imageArray[p_index];

    m_image.onclick = function() {
        isModalOpen = true;
        setModalImage(p_index);
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        closeModal();
    }
}

function setModalImage(p_index) {
    selectedImageIndex = p_index;
    var m_image = m_imageArray[p_index];
    modal.style.display = "block";
    let m_modal = document.getElementById("img01");
    m_modal.src = m_image.src;
}

function closeModal() {
    isModalOpen = false;
    modal.style.display = "none";
}

document.addEventListener('keydown', function (p_event) {
    var m_keyCode = p_event.keyCode;
   
    let m_next = 0;

    if(m_keyCode == 27) {
        closeModal();
    }

    if(m_keyCode == 37) {
        m_next = 1;
    }

    else if (m_keyCode == 39) {
        m_next = -1;
    }

    if(m_next != 0 && isModalOpen) {
        nextImage(m_next);
    }
});

function nextImage(p_next) {
    selectedImageIndex += p_next;

    if(selectedImageIndex >= m_imageArray.length) {
        selectedImageIndex = 0;
    }

    if(selectedImageIndex < 0) {
        selectedImageIndex = m_imageArray.length -1;
    }

    setModalImage(selectedImageIndex);
}