/* ==========================================================
   Derick M. Morales - Portfolio Script
   Features: EN/TL language switch, typing effect, scroll
   reveal, skill bars, resume preview (no download), contact form
   ========================================================== */

(() => {
  "use strict";

  /* ---------- 1. TRANSLATIONS ---------- */
  const translations = {
    en: {
      nav_home: "Home", nav_about: "About", nav_education: "Education",
      nav_skills: "Skills", nav_resume: "Resume", nav_contact: "Contact",
      hero_greeting: "Hi, I'm", hero_role: "Web Technologies",
      hero_desc: "Information Technology student focused on computer systems, programming, and building things for the web.",
      btn_contact: "Contact Me", btn_resume: "View Resume", btn_preview: "Preview Resume",
      badge_it: "IT Student", badge_web: "Web Dev",
      about_title: "About Me",
      about_text: "A motivated and responsible individual seeking an opportunity to gain experience, improve skills, and contribute positively to the company. I am eager to learn new technologies and to grow with every task I take on. I enjoy programming, editing and designing, and exploring how technology solves everyday problems. I work well with a team, manage my time carefully, and always do my best to finish what I start. Willing to learn and grow professionally.",
      back_title: "Tech Stack",
      back_hint: "Click again to face forward",
      bg_text: "I am a motivated and hardworking Information Technology student currently studying at St. Louis Anne Colleges. I am eager to gain experience, improve my skills, and contribute positively in a professional environment.",
      personal_title: "Personal Information",
      lbl_age: "Age", lbl_dob: "Date of Birth", lbl_nat: "Nationality", lbl_civil: "Civil Status",
      lbl_lang: "Languages", lbl_religion: "Religion",
      val_filipino: "Filipino", val_single: "Single", val_langs: "Filipino, English", val_catholic: "Catholic",
      obj_title: "Objective",
      obj_text: "To gain experience and improve my skills while contributing positively to the company through hard work, responsibility, and willingness to learn.",
      edu_title: "Education",
      edu1_deg: "Bachelor of Science in Information Technology",
      edu1_desc: "Currently studying with focus on computer systems, programming, and technology-related skills. Developing problem-solving, teamwork, and communication skills through academic projects and activities.",
      edu2_deg: "Senior High School",
      edu2_desc: "Completed Senior High School with experiences that strengthened communication, responsibility, teamwork, and adaptability in both academic and extracurricular activities.",
      skills_title: "Skills", sk_soft: "Soft Skills", sk_tech: "Technical Skills",
      sk_mgmt: "Management Skills", sk_time: "Time Management", sk_critical: "Critical Thinking", sk_fast: "Fast Learner",
      sk_prog: "Basic Programming Knowledge", sk_comp: "Basic Computer Troubleshooting", sk_web: "Web Technologies (HTML, CSS, JS)",
      int_tech: "Technology", int_design: "Editing and Designing", int_prog: "Programming",
      ach_title: "Achievements", ach1: "With Honor", ach2: "Academic Award",
      res_title: "Resume",
      res_text: "Want to see my full resume? Click the button below to preview it. It opens inside this page only.",
      contact_title: "Contact",
      lbl_address: "Address", lbl_phone: "Phone", lbl_email: "Email",
      form_name: "Your Name", form_email: "Your Email", form_subject: "Subject", form_msg: "Your Message",
      btn_send: "Send Message",
      form_note: "This opens your email app with your message ready to send.",
      foot: "Made with ❤️ and lots of coffee.",
      typing: ["Front-End Developer", "IT Student", "Problem Solver"],
      msg_fill: "Please fill out all fields.",
      mail_subject_prefix: "[Portfolio] "
    },
    tl: {
      nav_home: "Home", nav_about: "Tungkol", nav_education: "Edukasyon",
      nav_skills: "Kakayahan", nav_resume: "Resume", nav_contact: "Kontak",
      hero_greeting: "Hi, ako si", hero_role: "Web Technologies",
      hero_desc: "Estudyante ng Information Technology na nakatuon sa computer systems, programming, at paggawa ng mga proyekto para sa web.",
      btn_contact: "Kontakin Ako", btn_resume: "Tingnan ang Resume", btn_preview: "I-preview ang Resume",
      badge_it: "IT Student", badge_web: "Web Dev",
      about_title: "Tungkol sa Akin",
      about_text: "Isang masipag at responsableng indibidwal na naghahanap ng pagkakataon para makakuha ng karanasan, mapabuti ang kakayahan, at makatulong nang positibo sa kompanya. Sabik akong matuto ng mga bagong teknolohiya at lumago sa bawat gawaing hahawakan ko. Mahilig ako sa programming, sa pag-e-edit at disenyo, at sa pag-aaral kung paano nalulutas ng teknolohiya ang mga pang-araw-araw na problema. Mahusay akong makisama sa team, maayos kong pinamamahalaan ang oras ko, at lagi kong sinisikap tapusin ang anumang sinimulan ko. Handang matuto at lumago sa propesyon.",
      back_title: "Teknolohiyang Ginagamit Ko",
      back_hint: "Pindutin ulit para humarap",
      bg_text: "Ako ay isang masipag at may dedikasyong estudyante ng Information Technology sa St. Louis Anne Colleges. Sabik akong makakuha ng karanasan, mapabuti ang aking kakayahan, at makatulong nang positibo sa propesyonal na kapaligiran.",
      personal_title: "Personal na Impormasyon",
      lbl_age: "Edad", lbl_dob: "Petsa ng Kapanganakan", lbl_nat: "Nasyonalidad", lbl_civil: "Katayuang Sibil",
      lbl_lang: "Mga Wika", lbl_religion: "Relihiyon",
      val_filipino: "Pilipino", val_single: "Single", val_langs: "Filipino, English", val_catholic: "Katoliko",
      obj_title: "Layunin",
      obj_text: "Makakuha ng karanasan at mapabuti ang aking kakayahan habang positibong nakakatulong sa kompanya sa pamamagitan ng sipag, responsibilidad, at kagustuhang matuto.",
      edu_title: "Edukasyon",
      edu1_deg: "Bachelor of Science in Information Technology",
      edu1_desc: "Kasalukuyang nag-aaral na nakatuon sa computer systems, programming, at mga kasanayang may kinalaman sa teknolohiya. Patuloy na nililinang ang problem-solving, teamwork, at komunikasyon sa pamamagitan ng mga proyekto at gawain sa paaralan.",
      edu2_deg: "Senior High School",
      edu2_desc: "Nakatapos ng Senior High School na nagpatibay ng komunikasyon, responsibilidad, teamwork, at kakayahang umangkop sa akademiko at extracurricular na gawain.",
      skills_title: "Kakayahan", sk_soft: "Soft Skills", sk_tech: "Technical Skills",
      sk_mgmt: "Kasanayan sa Pamamahala", sk_time: "Time Management", sk_critical: "Critical Thinking", sk_fast: "Mabilis Matuto",
      sk_prog: "Basic na Kaalaman sa Programming", sk_comp: "Basic na Troubleshooting ng Computer", sk_web: "Web Technologies (HTML, CSS, JS)",
      int_tech: "Teknolohiya", int_design: "Pag-edit at Disenyo", int_prog: "Programming",
      ach_title: "Mga Tagumpay", ach1: "With Honor", ach2: "Academic Award",
      res_title: "Resume",
      res_text: "Gusto mo bang makita ang buong resume ko? Pindutin ang button sa ibaba para i-preview. Bubukas ito sa loob lang ng page na ito.",
      contact_title: "Kontak",
      lbl_address: "Tirahan", lbl_phone: "Telepono", lbl_email: "Email",
      form_name: "Pangalan Mo", form_email: "Email Mo", form_subject: "Paksa", form_msg: "Mensahe Mo",
      btn_send: "Ipadala ang Mensahe",
      form_note: "Magbubukas ang email app mo na handa na ang mensahe para ipadala.",
      foot: "Ginawa nang may ❤️ at maraming kape.",
      typing: ["Front-End Developer", "Estudyante ng IT", "Problem Solver"],
      msg_fill: "Pakisagutan ang lahat ng field.",
      mail_subject_prefix: "[Portfolio] "
    }
  };

  let currentLang = "en";
  let typingTimer = null;

  /* ---------- 2. LANGUAGE ---------- */
  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    const dict = translations[lang];

    document.documentElement.lang = lang === "tl" ? "tl" : "en";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined && typeof dict[key] === "string") {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    startTyping();

    try { localStorage.setItem("portfolio-lang", lang); } catch (e) { /* storage unavailable */ }
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  /* ---------- 3. TYPING EFFECT ---------- */
  function startTyping() {
    const el = document.getElementById("typing");
    if (!el) return;
    clearTimeout(typingTimer);

    const words = translations[currentLang].typing;
    let wordIndex = 0, charIndex = 0, deleting = false;

    const tick = () => {
      const word = words[wordIndex];
      el.textContent = deleting ? word.substring(0, charIndex--) : word.substring(0, charIndex++);

      let delay = deleting ? 50 : 100;
      if (!deleting && charIndex > word.length) {
        delay = 1600; deleting = true;
      } else if (deleting && charIndex < 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
        delay = 400;
      }
      typingTimer = setTimeout(tick, delay);
    };
    tick();
  }

  /* ---------- 4. NAVBAR: scrolled state, active link, mobile menu ---------- */
  const navbar = document.getElementById("navbar");
  const navLinks = document.getElementById("navLinks");
  const menuToggle = document.getElementById("menuToggle");
  const progress = document.getElementById("scrollProgress");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menuToggle.classList.remove("open");
      navLinks.classList.remove("open");
    })
  );

  function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle("scrolled", y > 50);

    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = max > 0 ? (y / max) * 100 + "%" : "0%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Highlight active section in nav
  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");
  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navAnchors.forEach((a) =>
            a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id)
          );
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => activeObserver.observe(s));

  /* ---------- 5. SCROLL REVEAL + SKILL BARS ---------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");

        // Animate skill bars inside this card
        entry.target.querySelectorAll(".bar i").forEach((bar) => {
          bar.style.width = bar.dataset.w + "%";
        });

        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---------- 6. CURSOR GLOW (desktop only) ---------- */
  const glow = document.getElementById("cursorGlow");
  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  } else {
    glow.style.display = "none";
  }

  /* ---------- 7. RESUME PREVIEW MODAL (no download) ---------- */
  const modal = document.getElementById("resumeModal");
  const frame = document.getElementById("resumeFrame");

  function openResume(e) {
    if (e) e.preventDefault();
    // Load the PDF only when the user asks to preview it
    if (!frame.getAttribute("src")) {
      frame.setAttribute("src", frame.dataset.src);
    }
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeResume() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.getElementById("openResume").addEventListener("click", openResume);
  document.getElementById("openResumeHero").addEventListener("click", openResume);
  document.getElementById("closeResume").addEventListener("click", closeResume);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeResume();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeResume();
  });

  /* ---------- 8. CONTACT FORM (opens email app) ---------- */
  const form = document.getElementById("contactForm");
  const RECEIVER = "Derzky033@gmail.com";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      alert(translations[currentLang].msg_fill);
      return;
    }

    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `${message}`;

    const mailto =
      `mailto:${RECEIVER}` +
      `?subject=${encodeURIComponent(translations[currentLang].mail_subject_prefix + subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    form.reset();
  });

  /* ---------- 9. MISC ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  // Restore saved language, default English
  let savedLang = "en";
  try { savedLang = localStorage.getItem("portfolio-lang") || "en"; } catch (e) { /* ignore */ }
  applyLanguage(savedLang);
})();


/* ---------- 9. MORNING / EVENING THEME ---------- */
(function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  function setTheme(mode) {
    root.setAttribute("data-theme", mode);
    toggle.setAttribute("aria-checked", String(mode === "dark"));
    try { localStorage.setItem("portfolio-theme", mode); } catch (e) { /* storage unavailable */ }
  }

  setTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
  toggle.addEventListener("click", () => {
    setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
})();

/* ---------- 10. FLIP PHOTO: face and tech stack ---------- */
(function initFlip() {
  const hero = document.getElementById("heroPhoto");
  const card = document.getElementById("flipCard");
  if (!hero || !card) return;

  const flip = () => hero.classList.toggle("is-flipped");
  card.addEventListener("click", flip);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      flip();
    }
  });
})();
