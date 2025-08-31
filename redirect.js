(function () {
  const raw = "{{ contact.custom_fields.data_inizio_offerta }}";
  console.log("🧪 DATA GREZZA:", raw);

  if (!raw || raw.includes("{{")) {
    console.warn("❌ Campo vuoto o merge field non interpretato");
    return;
  }

  // Rimuove 'st', 'nd', 'rd', 'th' dai giorni
  const cleaned = raw.replace(/(\d+)(st|nd|rd|th)/, '$1');
  const parsedDate = new Date(cleaned);

  console.log("📆 DATA PARSATA:", parsedDate);

  if (isNaN(parsedDate.getTime())) {
    console.error("❌ Data non valida anche dopo la pulizia:", cleaned);
    return;
  }

  const now = new Date();
  const diff = Math.floor((now - parsedDate) / (1000 * 60 * 60 * 24));

  console.log("📅 Giorni passati:", diff);

  if (diff > 7) {
    console.log("⏳ Offerta scaduta, redirect in corso...");
    window.location.href = "https://notaxstrategy.com/taxconsultation197";
  } else {
    console.log("✅ Offerta ancora valida");
  }
})();
