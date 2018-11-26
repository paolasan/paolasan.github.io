let m_imageArray = document.images;

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

    // p_image.addEventListener('mouseover', function(p_event) {
    //     for (f_index = 0; f_index < m_imageArray.length; f_index++) {
    //         let f_image = m_imageArray[f_index];

    //         f_image.style.opacity = .5;
    //     }

    //     p_image.style.opacity = 1;
    // });

    // p_image.addEventListener('mouseout', function (p_event) {
    //     for (f_index = 0; f_index < m_imageArray.length; f_index++) {
    //         let f_image = m_imageArray[f_index];

    //         f_image.style.opacity = 1;
    //     }
    // });
}