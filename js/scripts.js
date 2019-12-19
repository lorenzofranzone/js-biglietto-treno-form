var buttonGenerate = document.getElementById('generate');
buttonGenerate.addEventListener('click',
  function() {

    var inputName = document.getElementById('name');
    var userName = inputName.value;
    console.log(userName);

    var inputKm = document.getElementById('km');
    var userKm = parseInt(inputKm.value);
    console.log(userKm);

    var selectAge = document.getElementById('age');
    var userAge = selectAge.value;
    console.log(userAge);

    // Determino il prezzo base a km del biglietto
    var prezzoStandard = 0.21 * userKm;
    console.log(prezzoStandard);

    var userType = 'Tariffa Standard';
    var randomCarr = Math.floor(Math.random() * 9) + 1;
    var randomCode = Math.floor(Math.random() * (100000 - 90000 + 1)) + 90000;

    // Determino le condizioni di sconto sul prezzo del biglietto

    // Se l'utente è minorenne ricalcolo il valore della variabile prezzoBase

    // Al prezzoBase sottraggo il 20% di sconto
    if (userAge == 'Minorenne') {
      // prezzoBase = prezzoBase - (prezzoBase / 100 * 20);
      prezzoStandard = prezzoStandard * 0.80;
      userType = 'Tariffa Junior';
    }

    // Se l'utente è over 65 ricalcolo il valore della variabile prezzoBase

    // Al prezzoBase sottraggo il 40% di sconto
    else if (userAge == 'Over 65') {
      // prezzoBase = prezzoBase - (prezzoBase / 100 * 40);
      prezzoStandard = prezzoStandard * 0.60;
      userType = 'Tariffa Senior';
    }
    console.log(prezzoStandard);

    // Stampo in HTML il nome dell'utente
    document.getElementById('ticketUserName').innerHTML = userName;

    // Stampo in HTML l'età dell'utente
    document.getElementById('ticketType').innerHTML = userType;

    // Stampo in HTML la carrozza random
    document.getElementById('ticketCarr').innerHTML = randomCarr;

    // Stampo in HTML il codice random
    document.getElementById('ticketCode').innerHTML = randomCode;

    // Stampo in HTML il prezzo generato dal calcolo con le variabili
    document.getElementById('ticketPrice').innerHTML = '€' + prezzoStandard.toFixed(2);

    var divTicketPrint = document.getElementById('generatedTicket');
    divTicketPrint.classList.remove('hide');
    divTicketPrint.classList.add('show');

  }
);

var buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click',
  function() {

    document.getElementById('ticketUserName').innerHTML = '';

    document.getElementById('ticketType').innerHTML = '';

    document.getElementById('ticketCarr').innerHTML = '';

    document.getElementById('ticketCode').innerHTML = '';

    document.getElementById('ticketPrice').innerHTML = '';

    document.getElementById('name').value = '';

    document.getElementById('km').value = '';

    document.getElementById('age').value = '';

    var divTicketPrint = document.getElementById('generatedTicket');
    divTicketPrint.classList.remove('show');
    divTicketPrint.classList.add('hide');

  }
);
