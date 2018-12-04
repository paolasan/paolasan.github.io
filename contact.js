inputArray = document.getElementsByClassName('sub-input-parent');

for(f_index = 0; f_index < inputArray.length; f_index++) {
    
    let m_parent = inputArray[f_index];

    m_parent.children[0].addEventListener('focus', function() {
        m_parent.children[1].classList.add('show-line');
        m_parent.children[1].classList.remove('hide-line');
    });

    m_parent.children[0].addEventListener('focusout', function() {
        m_parent.children[1].classList.remove('show-line');
        m_parent.children[1].classList.add('hide-line');
    });
}