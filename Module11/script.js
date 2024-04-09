document.getElementById('zipForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const zipCode = document.getElementById('zipCode').value;
    const apiUrl = `http://api.zippopotam.us/us/${zipCode}`;

    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed');
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("locationInfo").innerHTML = "Failed to retrieve data.";
        });
});

function displayData(data) {
    if (data && data.places && data.places.length > 0) {
        const location = data.places[0];
        document.getElementById("locationInfo").innerHTML = `
            <strong>Location:</strong> ${location["place name"]}, ${location.state}, ${data.country} <br>
            <strong>Latitude:</strong> ${location.latitude} <br>
            <strong>Longitude:</strong> ${location.longitude}
        `;
    } else {
        document.getElementById("locationInfo").innerHTML = "No information found for this zip code.";
    }
}


