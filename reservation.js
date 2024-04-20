function initializeDatePicker() {
    var dateInput = document.getElementById('date');
  
    var today = new Date();
    var minDate = today.toISOString().split('T')[0];
    dateInput.min = minDate;
  }
  
  window.onload = function() {
    initializeDatePicker();
  };

function displayConfirmation() {
    alert('Your reservation has been booked! An email Notification would be sent to You Shortly');
  }
  
  var bookButton = document.querySelector('button[type="submit"]');
  
  bookButton.addEventListener('click', displayConfirmation);