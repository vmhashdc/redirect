(function () {
  const dataInizio = "{{ contact.custom_fields.data_inizio_offerta }}";
  console.log("DATA INIZIO OFFERTA:", dataInizio);

  if (!dataInizio || dataInizio.trim() === "") {
    console.warn("❌ Merge field vuoto: contatto non identificato");
    return;
  }

  const start = new Date(dataInizio);
  const now = new Date();
  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));

  console.log("📆 Giorni passati:", diff);

  if (diff > 7) {
    console.log("⏳ Offerta scaduta, redirect in corso...");
    window.location.href = "https://notaxstrategy.com/taxconsultation197";
  } else {
    console.log("✅ Offerta ancora valida");
  }
})();
