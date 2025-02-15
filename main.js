document.addEventListener("DOMContentLoaded", function () {
    const bookButton = document.getElementById("book-btn");

    if (bookButton) {
        bookButton.addEventListener("click", function (event) {
            event.preventDefault(); 

            const userName = encodeURIComponent(document.querySelector("input[name='name']").value);
            const userEmail = encodeURIComponent(document.querySelector("input[name='email']").value);
            const tutorName = encodeURIComponent(document.querySelector("select[name='tutor']").value);
            const sessionDate = encodeURIComponent(document.querySelector("input[name='date']").value);
            const sessionTime = encodeURIComponent(document.querySelector("input[name='time']").value);
            const learningGoals = encodeURIComponent(document.querySelector("textarea[name='description']").value);
            const bookingNumber = Math.floor(10000 + Math.random() * 90000); // Generate random ID

            window.location.href = `confirmation.html?bookingNumber=${bookingNumber}&name=${userName}&email=${userEmail}&tutor=${tutorName}&date=${sessionDate}&time=${sessionTime}&goals=${learningGoals}`;
        });
    }

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
