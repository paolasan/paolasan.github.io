let animationDuration = .05;


function animate(p_id, p_duration, p_amount) {

    let m_element = document.getElementById(p_id);

    for(f_index = 0; f_index < p_amount; f_index++) {
        m_element.children[f_index].classList.add("ball-fill");

        m_element.children[f_index].style.animationDuration = p_duration + "s";
        m_element.children[f_index].style.animationDelay = (p_duration * f_index) + "s";
    }
}

animate("autocad", animationDuration, 9);
animate("archicad", animationDuration, 8);
animate("sketchup", animationDuration, 9);
animate("photoshop", animationDuration, 6);
animate("illustrator", animationDuration, 7);
animate("ix-cube", animationDuration, 7);