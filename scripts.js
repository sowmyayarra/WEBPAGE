document.getElementById('event-details-btn').addEventListener('click', function() {
    alert('Event Details button clicked!');
});

document.getElementById('search-event-btn').addEventListener('click', function() {
    var city = document.getElementById('city-select').value;
    var category = document.getElementById('category-select').value;
    var date = document.getElementById('date-select').value;
    alert('Searching for events in ' + city + ' with category ' + category + ' on ' + date);
});
