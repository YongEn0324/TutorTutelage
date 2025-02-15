document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    const bookButton = document.getElementById("book-btn");

    if (bookButton) {
        bookButton.addEventListener("click", function (event) {
            event.preventDefault(); // Stop form from refreshing the page

            // Select form inputs
            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const tutorInput = document.getElementById("tutor");
            const dateInput = document.getElementById("date");
            const timeInput = document.getElementById("time");
            const goalsInput = document.getElementById("goals");

            // Ensure all elements exist
            if (!nameInput || !emailInput || !tutorInput || !dateInput || !timeInput || !goalsInput) {
                return;
            }

            // Get user input values
            const userName = encodeURIComponent(nameInput.value);
            const userEmail = encodeURIComponent(emailInput.value);
            const tutorName = encodeURIComponent(tutorInput.value);
            const sessionDate = encodeURIComponent(dateInput.value);
            const sessionTime = encodeURIComponent(timeInput.value);
            const learningGoals = encodeURIComponent(goalsInput.value);
            const bookingNumber = Math.floor(10000 + Math.random() * 90000); // Generate random booking number


            // Redirect with parameters
            window.location.href = `https://yongen0324.github.io/Tutor-Website/confirmation.html`;
        });
    }

    // Populate confirmation page
    if (window.location.pathname.includes("confirmation.html")) {

        const urlParams = new URLSearchParams(window.location.search);

        document.getElementById("booking-number").innerText = urlParams.get("bookingNumber") || "N/A";
        document.getElementById("user-name").innerText = urlParams.get("name") || "N/A";
        document.getElementById("user-email").innerText = urlParams.get("email") || "N/A";
        document.getElementById("tutor-name").innerText = urlParams.get("tutor") || "N/A";
        document.getElementById("session-date").innerText = urlParams.get("date") || "N/A";
        document.getElementById("session-time").innerText = urlParams.get("time") || "N/A";
        document.getElementById("learning-goals").innerText = urlParams.get("goals") || "N/A";
    }
});
