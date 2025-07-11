const sections = document.querySelectorAll('.screen');

function scrollToSection(index) {
  if (sections[index]) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
  }
}
