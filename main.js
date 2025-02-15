document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    const bookButton = document.getElementById("book-appointment");

    if (bookButton) {
        console.log("Book Appointment button found!");

        bookButton.addEventListener("click", function (event) {
            event.preventDefault(); 

            console.log("Book Appointment button clicked!");

            
            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            const tutor = document.querySelector("#tutor").value;
            const date = document.querySelector("#date").value;
            const time = document.querySelector("#time").value;
            const goals = document.querySelector("#learning-goals").value;

            console.log("Form values captured:", { name, email, tutor, date, time, goals });

            
            const bookingNumber = Math.floor(10000 + Math.random() * 90000);
            console.log("Generated Booking Number:", bookingNumber);

            
            const url = `confirmation.html?bookingNumber=${bookingNumber}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&tutor=${encodeURIComponent(tutor)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}&goals=${encodeURIComponent(goals)}`;

            console.log("Redirecting to:", url);
            window.location.href = url;
        });
    } else {
        console.error("Book Appointment button NOT found!");
    }

    
    if (window.location.pathname.includes("confirmation.html")) {
        console.log("Confirmation Page Detected!");
        
        const urlParams = new URLSearchParams(window.location.search);
        document.getElementById("booking-number").textContent = urlParams.get("bookingNumber") || "N/A";
        document.getElementById("user-name").textContent = urlParams.get("name") || "N/A";
        document.getElementById("user-email").textContent = urlParams.get("email") || "N/A";
        document.getElementById("tutor-name").textContent = urlParams.get("tutor") || "N/A";
        document.getElementById("session-date").textContent = urlParams.get("date") || "N/A";
        document.getElementById("session-time").textContent = urlParams.get("time") || "N/A";
        document.getElementById("learning-goals").textContent = urlParams.get("goals") || "N/A";
        
        console.log("Booking details displayed successfully.");
    }
});
