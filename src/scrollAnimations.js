export function initScrollAnimations() {
  const items = document.querySelectorAll('.animate-on-scroll, .tech-item')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    })
  })

  items.forEach((item) => observer.observe(item))
}
