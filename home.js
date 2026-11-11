/* ============================================================
   GANGA DWAR CHHATH PUJA SAMITI
   home.js — Full Logic (Fixed Audio, Voice & Text)
   ============================================================ */

(function () {
  "use strict";

  /* ---------- CONFIG ---------- */
  const CONFIG = {
    googleForms: {
      feedback: "https://forms.gle/SuEi8oxuKM31fEWC8", 
      addPhoto: "https://docs.google.com/forms/d/e/1FAIpQLSctN-z9I9Kk3tbEfuPHWHK-BEMJWExnkgG-T3s7mkFYpLjQ0A/viewform?usp=publish-editor"      
    },
    social: {
      instagram: "https://www.instagram.com/ganga_dwar_official?vrfl=MTBlc2s2dGNzaDAzZw==",
      facebook:  "https://www.facebook.com/share/1CAy3GuTdv/",
      youtube:   "https://youtube.com/@gangadwarmurauwatpur?si=RKsAIUME_4GT2nTX"
    },
    liveUrl: "",
    galleryImages: [
      { src: "assets/images/photo1.jpg", alt: "Chhath Puja 1" },
      { src: "assets/images/photo2.jpg", alt: "Chhath Puja 2" },
      { src: "assets/images/photo3.jpg", alt: "Chhath Puja 3" },
      { src: "assets/images/photo4.jpg", alt: "Chhath Puja 4" },
      { src: "assets/images/photo5.jpg", alt: "Chhath Puja 5" },
      { src: "assets/images/photo6.jpg", alt: "Chhath Puja 6" },
      { src: "assets/images/photo7.jpg", alt: "Chhath Puja 7" },
      { src: "assets/images/photo8.jpg", alt: "Chhath Puja 8" },
      { src: "assets/images/photo9.jpg", alt: "Chhath Puja 9" }
    ],
    audio: { crackerVolume: 0.4, voiceVolume: 1.0 },
    storageKeys: { lang: "gd_chhath_lang", theme: "gd_chhath_theme" }
  };

  /* ---------- TRANSLATIONS ---------- */
  const TRANSLATIONS = {
    hi: {
      brandName: "गंगा द्वार छठ पूजा समिति",
      heroTitle: "गंगा द्वार छठ पूजा समिति",
      heroSubtitle: "छठ पूजा — आस्था, श्रद्धा और परंपरा का महापर्व",
      liveGoLive: "Go Live", 
      liveNote: "(Live coming soon)",
      feedbackTitle: "Give Me Your Feedback",
      feedbackLead: "कृपया नीचे दिए गए बटन पर क्लिक करके अपना सुझाव दें।",
      historyTitle: "छठ पूजा का इतिहास",
      historyLead: "छठ पूजा के बारे में जानने के लिए नीचे दिए गए प्रश्नों पर क्लिक करें।",
      historyQ1: "1. छठ पूजा किस देवता को समर्पित है?",
      historyA1: "छठ पूजा सूर्य देव और छठी मैया की उपासना का महापर्व है। इसमें डूबते और उगते सूर्य दोनों की पूजा की जाती है।",
      historyQ2: "2. छठ पूजा का इतिहास कितना पुराना है?",
      historyA2: "यह पर्व अत्यंत प्राचीन है। माना जाता है कि यह वैदिक काल से भी पहले का है। रामायण और महाभारत काल में भी इसका उल्लेख मिलता है।",
      historyQ3: "3. छठ पूजा में कितने दिनों का व्रत रखा जाता है?",
      historyA3: "छठ पूजा का व्रत चार दिनों तक चलता है। इसमें नहाय खाय, खरना, संध्या अर्घ्य और उषा अर्घ्य शामिल हैं।",
      historyQ4: "4. छठ पूजा में अर्घ्य क्यों दिया जाता है?",
      historyA4: "सूर्य देव को जीवन शक्ति और ऊर्जा का स्रोत माना जाता है। अर्घ्य देकर हम उनका आभार व्यक्त करते हैं और संतान के सुख-समृद्धि की कामना करते हैं।",
      historyQ5: "5. छठ पूजा सबसे पहले किसने मनाई थी?",
      historyA5: "पौराणिक मान्यताओं के अनुसार, राजा प्रियव्रत को सबसे पहले छठ पूजा करने वाला माना जाता है।",
      galleryTitle: "छठ पूजा फोटो गैलरी",
      galleryLead: "समिति की ओर से आयोजित छठ पूजा के कुछ यादगार क्षण।",
      facilitiesTitle: "हमारी सुविधाएँ",
      facilitiesLead: "श्रद्धालुओं की सुविधा के लिए समिति द्वारा उपलब्ध कराई जाने वाली सेवाएँ।",
      facility1: "चेंजिंग रूम", 
      facility2: "लाइटिंग", // <-- यहाँ पार्किंग की जगह लाइटिंग कर दिया है
      facility3: "दंतवन व्यवस्था", 
      facility4: "गोइठा बिक्री", 
      facility5: "मूर्ति सजावट",
      footerCard1Title: "समिति प्रमुख विवरण", footerLeaderName: "बिट्टू साह", footerLeaderPosition: "अध्यक्ष, गंगा द्वार छठ पूजा समिति",
      footerCard2Title: "Developed By", footerDevName: "Abhishek Kumar",
      footerLocation: "मुरौवतपुर, बिहार", footerCopyright: "© 2026 Ganga Dwar Chhath Puja Samiti. All Rights Reserved."
    },
    en: {
      brandName: "Ganga Dwar Chhath Puja Samiti",
      heroTitle: "Ganga Dwar Chhath Puja Samiti",
      heroSubtitle: "Chhath Puja — The Great Festival of Faith, Devotion & Tradition",
      liveGoLive: "Go Live", 
      liveNote: "(Live coming soon)",
      feedbackTitle: "Give Me Your Feedback",
      feedbackLead: "Please click the button below to give your feedback.",
      historyTitle: "History of Chhath Puja",
      historyLead: "Click on the questions below to learn more about Chhath Puja.",
      historyQ1: "1. Which deity is Chhath Puja dedicated to?",
      historyA1: "Chhath Puja is dedicated to Lord Surya (Sun God) and Chhathi Maiya. Both the setting and rising sun are worshipped.",
      historyQ2: "2. How old is the history of Chhath Puja?",
      historyA2: "This festival is extremely ancient. It is believed to predate the Vedic period. Mentions are also found in the Ramayana and Mahabharata eras.",
      historyQ3: "3. How many days is the Chhath Puja fast observed?",
      historyA3: "The Chhath Puja fast lasts for four days. It includes Nahay Khay, Kharna, Sandhya Arghya, and Usha Arghya.",
      historyQ4: "4. Why is Arghya offered in Chhath Puja?",
      historyA4: "Sun God is considered the source of life force and energy. By offering Arghya, we express gratitude and pray for the happiness of our children.",
      historyQ5: "5. Who celebrated Chhath Puja for the first time?",
      historyA5: "According to mythological beliefs, King Priyavrat is considered the first person to celebrate Chhath Puja.",
      galleryTitle: "Chhath Puja Photo Gallery",
      galleryLead: "Some memorable moments from Chhath Puja celebrations organised by the Samiti.",
      facilitiesTitle: "Our Facilities", facilitiesLead: "Services provided by the Samiti for the convenience of devotees.",
      facility1: "Changing Room", 
      facility2: "Lighting", // <-- यहाँ Parking की जगह Lighting कर दिया है
      facility3: "Dantvan Arrangement", 
      facility4: "Goitha Sale", 
      facility5: "Idol Decoration",
      footerCard1Title: "Samiti Leader Details", footerLeaderName: "Bittu Sah", footerLeaderPosition: "President, Ganga Dwar Chhath Puja Samiti",
      footerCard2Title: "Developed By", footerDevName: "Abhishek Kumar",
      footerLocation: "Murauwatpur, Bihar", footerCopyright: "© 2026 Ganga Dwar Chhath Puja Samiti. All Rights Reserved."
    }
  };

  /* ---------- UTILITIES ---------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  function safeStorageGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function safeStorageSet(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }

  /* ---------- GOOGLE FORM LINKS SETUP ---------- */
  function initGoogleForms() {
    const fbLink = $("#googleFeedbackLink");
    const photoLink = $("#googleAddPhotoLink");
    if (fbLink && CONFIG.googleForms.feedback) fbLink.href = CONFIG.googleForms.feedback;
    if (photoLink && CONFIG.googleForms.addPhoto) photoLink.href = CONFIG.googleForms.addPhoto;
  }

  /* ---------- LANGUAGE SYSTEM ---------- */
  let currentLang = "hi";
  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = "hi";
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);

    $$("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (TRANSLATIONS[lang][key] !== undefined) el.textContent = TRANSLATIONS[lang][key];
    });

    $("#langHiBtn").classList.toggle("active", lang === "hi");
    $("#langEnBtn").classList.toggle("active", lang === "en");
    safeStorageSet(CONFIG.storageKeys.lang, lang);
  }

  function initLanguage() {
    const saved = safeStorageGet(CONFIG.storageKeys.lang);
    applyLanguage(saved === "en" ? "en" : "hi");
    $("#langHiBtn").addEventListener("click", () => applyLanguage("hi"));
    $("#langEnBtn").addEventListener("click", () => applyLanguage("en"));
  }

  /* ---------- THEME (DARK MODE) ---------- */
  function applyTheme(theme) {
    if (theme !== "dark") theme = "light";
    document.documentElement.setAttribute("data-theme", theme);
    const icon = $("#themeIcon");
    const text = $(".theme-text");
    if (icon) icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    if (text) text.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
    safeStorageSet(CONFIG.storageKeys.theme, theme);
  }

  function initTheme() {
    const saved = safeStorageGet(CONFIG.storageKeys.theme);
    applyTheme(saved === "dark" ? "dark" : "light");
    $("#themeToggleBtn").addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  /* ---------- NAVIGATION & SCROLL SPY ---------- */
  function initNavigation() {
    const navToggle = $("#navToggle"), navLinks = $("#navLinks"), navBtns = $$(".nav-btn");
    navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));

    navBtns.forEach(function (link) {
      link.addEventListener("click", function (e) {
        const href = link.getAttribute("href");
        if (!href || href.charAt(0) !== "#") return;
        const target = document.getElementById(href.slice(1));
        if (!target) return;
        e.preventDefault();
        const headerHeight = $("#topHeader").offsetHeight + $("#mainNav").offsetHeight;
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight + 1;
        window.scrollTo({ top: top, behavior: "smooth" });
        navLinks.classList.remove("open");
        navBtns.forEach(btn => btn.classList.remove("active"));
        link.classList.add("active");
      });
    });

    window.addEventListener("scroll", function () {
      const sections = ["homeSection", "feedbackSection", "historySection", "gallerySection", "facilitiesSection"];
      const headerHeight = $("#topHeader").offsetHeight + $("#mainNav").offsetHeight;
      let currentId = "homeSection";
      sections.forEach(function (id) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= headerHeight + 50) currentId = id;
      });
      navBtns.forEach(function (btn) {
        btn.classList.remove("active");
        if (btn.getAttribute("href") === "#" + currentId) btn.classList.add("active");
      });
    });
  }

  /* ---------- ACCORDION ---------- */
  function initAccordion() {
    const headers = $$(".accordion-header");
    headers.forEach(function(header) {
      header.addEventListener("click", function() {
        const item = header.parentElement;
        const isActive = item.classList.contains("active");
        $$(".accordion-item").forEach(el => el.classList.remove("active"));
        if (!isActive) item.classList.add("active");
      });
    });
  }

  /* ---------- SOCIAL & LIVE ---------- */
  function initSocialLinks() {
    const map = { instagramBtn: CONFIG.social.instagram, facebookBtn: CONFIG.social.facebook, youtubeBtn: CONFIG.social.youtube };
    Object.keys(map).forEach(function (id) {
      const el = document.getElementById(id);
      if (el && map[id]) el.setAttribute("href", map[id]);
    });
  }

  function initLiveButton() {
    const btn = $("#liveBtn");
    btn.addEventListener("click", function () {
      if (CONFIG.liveUrl && /^https?:\/\//i.test(CONFIG.liveUrl)) {
        window.open(CONFIG.liveUrl, "_blank", "noopener,noreferrer");
      } else {
        console.log("Live link not set yet.");
      }
    });
  }

  /* ---------- GALLERY & LIGHTBOX ---------- */
  function initGallery() {
    const grid = $("#galleryGrid"); if (!grid) return;
    const lightbox = $("#imageLightbox");
    const lightboxImg = $("#lightboxImg");
    const closeBtn = $(".lightbox-close");

    grid.innerHTML = "";
    CONFIG.galleryImages.forEach(function (item) {
      const figure = document.createElement("figure"); figure.className = "gallery-item";
      const img = document.createElement("img"); img.src = item.src; img.alt = item.alt; img.loading = "lazy";
      
      img.addEventListener("error", function () { img.remove(); figure.classList.add("missing"); figure.textContent = "Photo coming soon"; });
      
      // Open Lightbox on click
      figure.addEventListener("click", function() {
        if (lightbox && lightboxImg) {
          lightboxImg.src = item.src;
          lightbox.classList.add("active");
        }
      });

      figure.appendChild(img); grid.appendChild(figure);
    });

    // Close Lightbox Logic
    if (closeBtn) closeBtn.addEventListener("click", () => lightbox.classList.remove("active"));
    if (lightbox) lightbox.addEventListener("click", function(e) { if (e.target === lightbox) lightbox.classList.remove("active"); });
  }

  /* ---------- AUDIO (Crackers + Voice) ---------- */
  function initAudioControls() {
    const crackerAudio = $("#crackerSound");
    const welcomeVoice = $("#welcomeVoiceHome");
    const crackerBtn = $("#crackerToggleBtn");
    const crackerIcon = $("#crackerIcon");

    if (!crackerBtn || !crackerAudio) return;

    crackerAudio.volume = CONFIG.audio.crackerVolume;
    if (welcomeVoice) welcomeVoice.volume = CONFIG.audio.voiceVolume;

    let crackerOn = false;

    function setCrackerState(on) {
      crackerOn = on;
      crackerBtn.classList.toggle("active", on);
      crackerBtn.setAttribute("aria-pressed", on ? "true" : "false");
      if (crackerIcon) {
        crackerIcon.className = on ? "fa-solid fa-bomb" : "fa-solid fa-bomb";
      }
    }

    crackerBtn.addEventListener("click", function () {
      if (crackerOn) {
        crackerAudio.pause();
        try { crackerAudio.currentTime = 0; } catch (e) {}
        setCrackerState(false);
      } else {
        try { crackerAudio.currentTime = 0; } catch (e) {}
        const p = crackerAudio.play();
        if (p && typeof p.then === "function") {
          p.then(() => setCrackerState(true)).catch(() => setCrackerState(false));
        } else {
          setCrackerState(true);
        }
      }
    });

    crackerAudio.addEventListener("error", () => setCrackerState(false));
    setCrackerState(false);

    // 🎵 index.html से CONTINUE दबाकर आने पर आवाज़ और पटाखे चालू करें
    try {
      if (localStorage.getItem("start_cracker_sound") === "true") {
        
        // 1. ElevenLabs की आवाज़ एक बार बजाएँ
        if (welcomeVoice) {
          welcomeVoice.play().catch(e => console.log("Voice autoplay blocked"));
        }

        // 2. पटाखे चालू करें (0.5 सेकंड बाद ताकि आवाज़ सुनाई दे)
        setTimeout(() => {
          crackerAudio.play().then(() => {
            setCrackerState(true);
          }).catch(e => console.log("Cracker autoplay blocked"));
        }, 500);

        localStorage.removeItem("start_cracker_sound"); // बार-बार न चले
      }
    } catch (e) {}
  }

  /* ---------- BOOT ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initLanguage();
    initNavigation();
    initAccordion();
    initSocialLinks();
    initLiveButton();
    initGallery();
    initGoogleForms();
    initAudioControls();
  });

})();