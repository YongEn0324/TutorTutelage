document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    const bookButton = document.getElementById("book-btn");

    if (bookButton) {
        bookButton.addEventListener("click", function (event) {
            event.preventDefault(); 

            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const tutorInput = document.getElementById("tutor");
            const dateInput = document.getElementById("date");
            const timeInput = document.getElementById("time");
            const goalsInput = document.getElementById("goals");

            if (!nameInput || !emailInput || !tutorInput || !dateInput || !timeInput || !goalsInput) {
                console.error("One or more input elements not found!");
                return;
            }

            const userName = encodeURIComponent(nameInput.value);
            const userEmail = encodeURIComponent(emailInput.value);
            const tutorName = encodeURIComponent(tutorInput.value);
            const sessionDate = encodeURIComponent(dateInput.value);
            const sessionTime = encodeURIComponent(timeInput.value);
            const learningGoals = encodeURIComponent(goalsInput.value);
            const bookingNumber = Math.floor(10000 + Math.random() * 90000); 

            window.location.href = `https://yongen0324.github.io/TutorTutelage/comfirmation.html?bookingNumber=${bookingNumber}&name=${userName}&email=${userEmail}&tutor=${tutorName}&date=${sessionDate}&time=${sessionTime}&goals=${learningGoals}`;
        });
    }

    if (window.location.pathname.includes("confirmation.html")) {
        console.log("Confirmation Page Loaded");

        const urlParams = new URLSearchParams(window.location.search);

        document.getElementById("booking-number").innerText = urlParams.get("bookingNumber") || "N/A";
        document.getElementById("user-name").innerText = decodeURIComponent(urlParams.get("name") || "N/A");
        document.getElementById("user-email").innerText = decodeURIComponent(urlParams.get("email") || "N/A");
        document.getElementById("tutor-name").innerText = decodeURIComponent(urlParams.get("tutor") || "N/A");
        document.getElementById("session-date").innerText = decodeURIComponent(urlParams.get("date") || "N/A");
        document.getElementById("session-time").innerText = decodeURIComponent(urlParams.get("time") || "N/A");
        document.getElementById("learning-goals").innerText = decodeURIComponent(urlParams.get("goals") || "N/A");
    }
});
