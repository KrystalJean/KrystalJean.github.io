document.addEventListener('DOMContentLoaded', function () {
  const menuOptions = document.querySelectorAll('.menu-options a');
  const projectCards = document.querySelectorAll('.project-card');
  const profileName = document.getElementById('profile-name');
  const profileImg = document.getElementById('profile-img');
  const footer = document.getElementById('footer');
  const technologies = document.querySelector('.technologies');
  
  function handleProfileClick() {
    profileName.classList.add('active');
    profileImg.classList.add('active');
    technologies.classList.add('hide');
    footer.style.marginBottom = '0px';
  }

  function checkProfileActive() {
    if (profileName.classList.contains('active')) {
      profileImg.classList.add('active');
    } else {
      profileImg.classList.remove('active');
    }

    if (profileImg.classList.contains('active')) {
      profileName.classList.add('active');
    } else {
      profileName.classList.remove('active');
    }
  }

  menuOptions.forEach(option => {
    option.addEventListener('click', function (event) {
      event.preventDefault();

      // Remove 'active' class from all options
      menuOptions.forEach(option => {
        option.classList.remove('active');
        technologies.classList.remove('hide');
        footer.style.marginBottom = '-150px';
      });

      // Add 'active' class to the clicked option
      this.classList.add('active');
      checkProfileActive();

      const filter = this.dataset.filter;

      projectCards.forEach(card => {
        if (filter === 'all' || card.classList.contains(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Handle profileName and profileImg clicks
  profileName.addEventListener('click', handleProfileClick);

  profileImg.addEventListener('click', handleProfileClick);
});
