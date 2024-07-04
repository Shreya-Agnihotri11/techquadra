document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('trainOptions').style.display = 'block';
});

document.getElementById('trainList').addEventListener('click', function(e) {
    if (e.target && e.target.nodeName == "BUTTON") {
        const trainItem = e.target.parentElement;
        const trainDetails = {
            name: trainItem.querySelector('.train-name').innerText,
            number: trainItem.querySelector('.train-number').innerText,
            departure: trainItem.querySelector('.train-departure').innerText,
            arrival: trainItem.querySelector('.train-arrival').innerText,
            duration: trainItem.querySelector('.train-duration').innerText,
            classes: trainItem.querySelector('.train-classes').innerText
        };
        populateBookingDetails(trainDetails);
        document.getElementById('bookingDetails').style.display = 'block';
    }
});

function populateTrainList() {
    const trainList = document.getElementById('trainList');
    const trains = [
        { name: 'Vidharbha Express', number: '001', departure: '08:00', arrival: '12:00', duration: '4h', classes: 'Economy, Business' },
        { name: 'Pune SF Express', number: '002', departure: '09:00', arrival: '13:00', duration: '4h', classes: 'Economy, First Class' },
        { name: 'Vande Bharat Express', number: '003', departure: '10:00', arrival: '12:30', duration: '2.5h', classes: 'Economy, First Class' },
        { name: 'Duranto', number: '004', departure: '14:00', arrival: '19:00', duration: '5h', classes: 'Business, First Class' },
        
    ];

    trains.forEach(train => {
        const trainItem = document.createElement('div');
        trainItem.className = 'train-item';
        trainItem.innerHTML = `
            <p class="train-name">${train.name}</p>
            <p class="train-number">${train.number}</p>
            <p class="train-departure">Departure: ${train.departure}</p>
            <p class="train-arrival">Arrival: ${train.arrival}</p>
            <p class="train-duration">Duration: ${train.duration}</p>
            <p class="train-classes">Classes: ${train.classes}</p>
            <button>Select Train</button>
        `;
        trainList.appendChild(trainItem);
    });
}

function populateBookingDetails(trainDetails) {
    const selectedTrain = document.getElementById('selectedTrain');
    selectedTrain.innerHTML = `
        <p>Train: ${trainDetails.name} (${trainDetails.number})</p>
        <p>Departure: ${trainDetails.departure}</p>
        <p>Arrival: ${trainDetails.arrival}</p>
        <p>Duration: ${trainDetails.duration}</p>
        <p>Classes: ${trainDetails.classes}</p>
    `;

    const passengerDetails = document.getElementById('passengerDetails');
    passengerDetails.innerHTML = `
        <label for="passengerName">Name:</label>
        <input type="text" id="passengerName" name="passengerName" required>

        <label for="passengerAge">Age:</label>
        <input type="number" id="passengerAge" name="passengerAge" required>

        <label for="passengerGender">Gender:</label>
        <select id="passengerGender" name="passengerGender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
    `;
}

populateTrainList();
