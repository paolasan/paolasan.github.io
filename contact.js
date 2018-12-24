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

submintButton = document.getElementById('submit-button');

nameField = document.getElementById('contact-name');
subjectField = document.getElementById('contact-subject');
emailField = document.getElementById('contact-email');
contentField = document.getElementById('contact-body');

submintButton.addEventListener('click', function() {
    
    // TODO: don't send function with empty field ( like email, body).

    // Create Message.
    let m_content = contentField.value + "\n" + nameField.value;

    let m_json = JSON.stringify({
        email : emailField.value,
        subject : subjectField.value,
        content : m_content
    });

    console.log(m_json);

    postRequest(m_json);
});

function postRequest(p_json) {
    const m_url = 'https://us-central1-portfolio-1717.cloudfunctions.net/contact';

    const m_parameters = {
        headers: {
            'content-type':'application/json'
        },
        body: p_json,
        method: 'POST'
    }

    fetch(m_url, m_parameters);
}