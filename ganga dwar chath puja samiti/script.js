/* ============================================================
   GANGA DWAR CHHATH PUJA SAMITI
   script.js — Starting Page Logic (Voice + Crackers)
   ============================================================ */

(function () {
  "use strict";

  const CONFIG = {
    nextPage: "home.html"
  };

  const continueBtn = document.getElementById("continueBtn");
  const welcomeVoice = document.getElementById("welcomeVoice");
  const crackerAudio = document.getElementById("crackerSoundStart");

  if (!continueBtn) {
    console.warn("[script.js] Continue button not found.");
    return;
  }

  let navigating = false;
  let soundStarted = false;

  // 🎵 आवाज़ और पटाखे चालू करने का फंक्शन
  function playIntroSounds() {
    if (soundStarted) return;

    // 1. ElevenLabs की आवाज़ (Welcome to Ganga Dwar...)
    if (welcomeVoice) {
      welcomeVoice.volume = 1.0; // आवाज़ पूरी तेज़
      const vPromise = welcomeVoice.play();
      if (vPromise) vPromise.catch(() => {}); // अगर ब्लॉक हो तो इग्नोर करें
    }

    // 2. पटाखों की आवाज़
    if (crackerAudio) {
      crackerAudio.volume = 0.4; // पटाखे थोड़े धीमे ताकि आवाज़ सुनाई दे
      const cPromise = crackerAudio.play();
      if (cPromise) cPromise.catch(() => {});
    }

    soundStarted = true;
  }

  // जैसे ही यूज़र स्क्रीन पर कहीं भी क्लिक करेगा, दोनों आवाज़ें चालू हो जाएंगी
  document.addEventListener("click", playIntroSounds, { once: true });
  document.addEventListener("touchstart", playIntroSounds, { once: true });

  // CONTINUE बटन का लॉजिक
  function handleContinue() {
    if (navigating) return;
    navigating = true;
    continueBtn.disabled = true;
    continueBtn.textContent = "LOADING...";

    // होम पेज पर पटाखे चालू रखने के लिए सेव करें
    try {
      localStorage.setItem("start_cracker_sound", "true");
    } catch (e) {}

    window.setTimeout(function () {
      window.location.href = CONFIG.nextPage;
    }, 150);
  }

  continueBtn.addEventListener("click", handleContinue);

})();