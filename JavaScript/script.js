// ===============================
// LADY LEAH'S TRANSPORT WEBSITE JS
// ===============================

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  console.log("Lady Leah’s Transport website loaded successfully.");

  // ===== SMOOTH SCROLLING FOR NAV LINKS =====
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ===== HEADER SCROLL ANIMATION =====
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // ===== FORM HANDLING (CONTACT & FREIGHT) =====
  const contactForm = document.querySelector(".contact-form");
  const quoteForm = document.querySelector(".quote-form");

  // Contact Form Validation
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();

      const name = contactForm.querySelector("input[type='text']").value.trim();
      const email = contactForm.querySelector("input[type='email']").value.trim();
      const message = contactForm.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        alert("⚠️ Please fill in all fields before submitting.");
        return;
      }

      if (!validateEmail(email)) {
        alert("⚠️ Please enter a valid email address.");
        return;
      }

      alert(`✅ Thank you, ${name}! Your message has been sent successfully.`);
      contactForm.reset();
    });
  }

  // Freight Analysis Form Validation
  if (quoteForm) {
    quoteForm.addEventListener("submit", e => {
      e.preventDefault();

      const pickup = quoteForm.querySelector("input[placeholder*='pick-up']").value.trim();
      const delivery = quoteForm.querySelector("input[placeholder*='destination']").value.trim();
      const weight = quoteForm.querySelector("input[type='number']").value.trim();

      if (!pickup || !delivery || !weight) {
        alert("⚠️ Please complete all fields to get an estimate.");
        return;
      }

      alert(`📦 Estimated cost for your ${weight}kg delivery from ${pickup} to ${delivery}: R${(weight * 12.5).toFixed(2)}.`);
      quoteForm.reset();
    });
  }

  // ===== IMAGE LIGHTBOX (for gallery or service images) =====
  const galleryImages = document.querySelectorAll(".responsive-img");
  galleryImages.forEach(img => {
    img.addEventListener("click", () => openLightbox(img.src, img.alt));
  });

  // ===== LIGHTBOX FUNCTION =====
  function openLightbox(src, alt) {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <span class="close-btn">&times;</span>
        <img src="${src}" alt="${alt}" />
      </div>
    `;
    document.body.appendChild(lightbox);

    const closeBtn = lightbox.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => lightbox.remove());
    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) lightbox.remove();
    });
  }

  // ===== EMAIL VALIDATION FUNCTION =====
  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  // ===== SIMPLE PAGE FADE-IN =====
  document.body.classList.add("fade-in");

  // ===== FUTURE MAP PLACEHOLDER =====
  if (document.querySelector("#map-container")) {
    console.log("Map placeholder ready — integrate Google Maps or Leaflet here.");
  }
});
// ===== ACCORDION FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", function() {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function() {
      // Toggle active state
      this.classList.toggle("active");

      // Toggle the panel display
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});
