// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scrollspy: highlight the current section link in the sidenav
// (only runs on pages that have a .sidenav)
const sidenavLinks = document.querySelectorAll('.sidenav a[href^="#"]');

if (sidenavLinks.length) {
  const sections = [...sidenavLinks].map(link =>
    document.querySelector(link.getAttribute('href'))
  ).filter(Boolean);

  const setActive = (id) => {
    sidenavLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      // pick the entry closest to the top of the viewport that's intersecting
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length) {
        setActive(visible[0].target.id);
      }
    },
    { rootMargin: '-90px 0px -70% 0px', threshold: 0 }
  );

  sections.forEach(section => observer.observe(section));

  // set the first section active by default
  if (sections[0]) setActive(sections[0].id);
}
