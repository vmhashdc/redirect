(function () {
  const urlParams = new URLSearchParams(window.location.search);
  let raw = urlParams.get("start");

  console.log("📩 Data da URL:", raw);

  if (!raw) {
    raw = localStorage.getItem("start_data_offerta");
    console.log("💾 Data da localStorage:", raw);
  } else {
    if (!localStorage.getItem("start_data_offerta")) {
      localStorage.setItem("start_data_offerta", raw);
      console.log("✅ Data salvata in localStorage:", raw);
    } else {
      console.log("⚠️ LocalStorage già presente, non sovrascrivo.");
    }
  }

  if (!raw) {
    console.warn("❌ Nessuna data trovata. Nessun redirect.");
    return;
  }

  const cleaned = raw.replace(/(\d+)(st|nd|rd|th)/, '$1');
  const parsedDate = new Date(cleaned);
  if (isNaN(parsedDate.getTime())) {
    console.error("❌ Data non valida:", cleaned);
    return;
  }

  const now = new Date();
  const diff = Math.floor((now - parsedDate) / (1000 * 60 * 60 * 24));

  console.log("📅 Giorni passati:", diff);

  if (diff > 7) {
    console.warn("⏳ Offerta scaduta. Redirect a prezzo pieno.");
    window.location.href = "https://notaxstrategy.com/taxconsultation197";
  } else {
    console.log("✅ Offerta ancora valida");
  }
})();
