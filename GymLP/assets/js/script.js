
// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Navbar scroll effect
    const navbar = document.querySelector(".navbar")
    const backToTop = document.querySelector(".back-to-top")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled")
        backToTop.classList.add("active")
      } else {
        navbar.classList.remove("scrolled")
        backToTop.classList.remove("active")
      }
  
      // Reveal elements on scroll
      revealElements()
    })
  
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const navMenu = document.querySelector(".nav-menu")
  
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
    })
  
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll(".nav-menu a")
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active")
  
        // Add active class to current link
        navLinks.forEach((link) => link.classList.remove("active"))
        this.classList.add("active")
      })
    })
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Testimonial slider
    const testimonialDots = document.querySelectorAll(".testimonial-dots .dot")
    const testimonialCards = document.querySelectorAll(".testimonial-card")
    let currentTestimonial = 0
  
    function showTestimonial(index) {
      testimonialCards.forEach((card) => card.classList.remove("active"))
      testimonialDots.forEach((dot) => dot.classList.remove("active"))
  
      testimonialCards[index].classList.add("active")
      testimonialDots[index].classList.add("active")
      currentTestimonial = index
    }
  
    testimonialDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showTestimonial(index)
      })
    })
  
    // Auto slide testimonials
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonialCards.length
      showTestimonial(currentTestimonial)
    }, 5000)
  
    // Counter animation
    const counters = document.querySelectorAll(".counter")
    let counted = false
  
    function startCounting() {
      if (counted) return
  
      counters.forEach((counter) => {
        const target = +counter.dataset.target
        let count = 0
        const duration = 2000 // 2 seconds
        const increment = target / (duration / 30) // Update every 30ms
  
        const updateCount = () => {
          count += increment
          if (count < target) {
            counter.innerText = Math.floor(count)
            setTimeout(updateCount, 30)
          } else {
            counter.innerText = target
          }
        }
  
        updateCount()
      })
  
      counted = true
    }
  
    // Form submission
    const signupForm = document.getElementById("signup-form")
    const successModal = document.getElementById("success-modal")
    const closeModal = document.querySelector(".close-modal")
    const modalBtn = document.querySelector(".modal-btn")
  
    if (signupForm) {
      signupForm.addEventListener("submit", (e) => {
        e.preventDefault()
        successModal.classList.add("active")
      })
    }
  
    if (closeModal) {
      closeModal.addEventListener("click", () => {
        successModal.classList.remove("active")
      })
    }
  
    if (modalBtn) {
      modalBtn.addEventListener("click", () => {
        successModal.classList.remove("active")
      })
    }
  
    // Reveal elements on scroll function
    function revealElements() {
      const revealLeft = document.querySelectorAll(".reveal-left")
      const revealRight = document.querySelectorAll(".reveal-right")
      const revealUp = document.querySelectorAll(".reveal-up")
      const revealText = document.querySelectorAll(".reveal-text")
  
      // Check if counters are in view
      const statsSection = document.querySelector(".stats-container")
      if (statsSection && isInViewport(statsSection)) {
        startCounting()
      }
  
      // Reveal elements when they come into view
      revealLeft.forEach((el) => {
        if (isInViewport(el)) {
          el.classList.add("active")
        }
      })
  
      revealRight.forEach((el) => {
        if (isInViewport(el)) {
          el.classList.add("active")
        }
      })
  
      revealUp.forEach((el) => {
        if (isInViewport(el)) {
          el.classList.add("active")
        }
      })
  
      revealText.forEach((el) => {
        if (isInViewport(el)) {
          el.classList.add("active")
        }
      })
    }
  
    // Check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 && rect.bottom >= 0
    }
  
    // Initial call to reveal elements
    revealElements()
  
    // Class card hover effect
    const classCards = document.querySelectorAll(".class-card")
  
    classCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.querySelector(".class-overlay").style.opacity = "1"
      })
  
      card.addEventListener("mouseleave", function () {
        this.querySelector(".class-overlay").style.opacity = "0"
      })
    })
  
    // Parallax effect for hero section
    const heroSection = document.querySelector(".hero")
  
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset
      if (heroSection) {
        heroSection.style.backgroundPositionY = scrollPosition * 0.5 + "px"
      }
    })
  })
  