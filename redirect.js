(function () {
  const urlParams = new URLSearchParams(window.location.search);
  let raw = urlParams.get("start");

  console.log("📩 Data da URL:", raw);

  // Se non c'è 'start' nell'URL, prova da localStorage
  if (!raw) {
    raw = localStorage.getItem("start_data_offerta");
    console.log("💾 Data da localStorage:", raw);
  } else {
    // Se arriva dall'URL e non c'è ancora in localStorage, salvalo
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

  // Pulizia formato (es. rimuove 'th', 'st', ecc. se presenti)
  const cleaned = raw.replace(/(\d+)(st|nd|rd|th)/, '$1');

  // Parsing della data
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
