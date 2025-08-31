(function () {
  // Estrai la data dall'URL o dal localStorage
  const urlParams = new URLSearchParams(window.location.search);
  let raw = urlParams.get("start") || localStorage.getItem("start_data_offerta");
  if (!raw) return;

  // Salva in localStorage se non c'è già
  if (!localStorage.getItem("start_data_offerta")) {
    localStorage.setItem("start_data_offerta", raw);
  }

  // Pulisci e converte la data
  const cleaned = raw.replace(/(\d+)(st|nd|rd|th)/, '$1');
  const parsedDate = new Date(cleaned);
  if (isNaN(parsedDate.getTime())) return;

  // Calcola giorni passati
  const now = new Date();
  const diff = Math.floor((now - parsedDate) / (1000 * 60 * 60 * 24));

  // Redirect se > 7 giorni
  if (diff > 7) {
    // Schermata nera istantanea per confondere eventuali "click su X"
    document.body.innerHTML = '';
    document.body.style.backgroundColor = '#000';

    // Redirect immediato e senza cronologia
    window.location.replace("https://notaxstrategy.com/taxconsultation197");
  }
})();
