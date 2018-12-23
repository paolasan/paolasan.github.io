var accordion = document.getElementsByClassName("accordion");
var index;

for (index = 0; index < accordion.length; index++) {
  accordion[index].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var m_panel = this.nextElementSibling;
    if (m_panel.style.maxHeight){
        m_panel.style.maxHeight = null;
        m_panel.classList.remove("animate-panel");
      } else {
        m_panel.style.maxHeight = m_panel.scrollHeight + "px";
        m_panel.classList.add("animate-panel");
      } 
  });
}