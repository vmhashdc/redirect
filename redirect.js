(function () {
  const dataInizio = "{{ contact.custom_fields.data_inizio_offerta }}";
  if (!dataInizio) return;

  const start = new Date(dataInizio);
  const now = new Date();
  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));

  if (diff > 7) {
    window.location.href = "https://notaxstrategy.com/taxconsultation197";
  }
})();
