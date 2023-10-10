document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');
  const technologies = document.querySelectorAll('.technologies img');

  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const classes = Array.from(this.classList);
      const matchingTechnologies = Array.from(technologies).filter(tech => classes.includes(tech.id));
      
      technologies.forEach(tech => {
        if (matchingTechnologies.includes(tech)) {
          tech.style.opacity = '1';
        } else {
          tech.style.opacity = '0.3';
        }
      });
    });

    card.addEventListener('mouseleave', function() {
      technologies.forEach(tech => {
        tech.style.opacity = '1';
      });
    });
  });
});
