const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-lewagon');
  const snapcontainer = document.querySelector('.scrollsnap');
  if (navbar && snapcontainer) {
    snapcontainer.addEventListener('scroll', () => {
      if (snapcontainer.scrollTop >= window.innerHeight) {
        navbar.classList.add('navbar-lewagon-visible');
      } else {
        navbar.classList.remove('navbar-lewagon-visible');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
// event.currentTarget.scrollTop
