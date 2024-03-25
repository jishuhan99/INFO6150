document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('in-us').addEventListener('change', function () {
        document.getElementById('zipcode').required = this.checked;
    });

    document.getElementById("registration-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;
        let messages = [];

        const name = document.getElementById("name").value;
        if (name.length < 3) {
            isValid = false;
            messages.push("Name must be at least 3 characters long.");
        }

        const yearOfBirth = parseInt(document.getElementById("year").value, 10);
        if (isNaN(yearOfBirth) || yearOfBirth <= 1900 || yearOfBirth >= 2100) {
            isValid = false;
            messages.push("Year of birth must be between 1901 and 2099.");
        }

        const liveInUS = document.getElementById("in-us").checked;
        const zipcode = document.getElementById("zipcode").value;
        if (liveInUS && (zipcode.length !== 5 || isNaN(parseInt(zipcode, 10)))) {
            isValid = false;
            messages.push("Zipcode must be 5 digits long.");
        }

        const password = document.getElementById("password").value;
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        const pizzaTypeSelected = document.querySelector('input[name="pizza"]:checked') != null;
        if (!pizzaTypeSelected) {
            isValid = false;
            messages.push("Preferred type of pizza: ");
        }

        const messageElement = document.getElementById("message");
        if (isValid) {
            messageElement.textContent = "Accepted";
            messageElement.className = "success";
        } else {
            messageElement.textContent = messages.join("\n");
            messageElement.className = "error";
        }
    });
});

