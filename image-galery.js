
function onHoverImage() {
    let m_columnArray = document.getElementsByClassName("column");
    let m_imageArray = [];

    m_columnArray[0].children[0].style.opacity = .5;

    for(f_column in m_columnArray) {
        for(f_image in f_column.children) {
            m_imageArray.push(f_image);
        }
    }

    for(f_image in m_imageArray) {
        f_image.style.opacity = .5;
    }
}

onHoverImage();