//alarm
// (function () {
//     emailjs.init("oJmY6qRa4EPP-tvKg");
// })();

// function setReminder() {
//     var reminderText = document.getElementById("reminderText").value;   
//      var email=document.getElementById("email").value;
//     var reminderTime = new Date(document.getElementById("reminderTime").value).getTime();
//     var currentTime = new Date().getTime();

//     if (reminderText.trim() === "" || isNaN(reminderTime) || reminderTime <= currentTime) {
//         alert("Please enter a valid reminder time in the future.");
//         return;
//     }

//     // Calculate the time difference between the current time and the reminder time
//     var timeDiff = reminderTime - currentTime;

//     // Set a timeout to display a browser notification and send an email when the reminder time is reached
//     setTimeout(function () {
//         // Display browser notification
//         if (Notification.permission === "granted") {
//             var notification = new Notification("Reminder", {
//                 body: reminderText,
//             });
//         } else if (Notification.permission !== "denied") {
//             Notification.requestPermission().then(function (permission) {
//                 if (permission === "granted") {
//                     var notification = new Notification("Reminder", {
//                         body: reminderText,
//                     });
//                 }
//             });
//         }

//         // Send email using EmailJS
//         sendEmailReminder(reminderText);

//     }, timeDiff);
// }
  
// setInterval(clock, 1000)
// function sendEmailReminder(reminderText) {
//     emailjs.send("service_hkon59c", "template_rfyn61t", {
//         to_email:email.value,
//         message: reminderText,
//     })
//     .then(function (response) {
//         promt("Email sent..........")
//         console.log("Email sent successfully!", response.status, response.text);
//     }, function (error) {
//         console.log("Error sending email:", error);
//     });
// }
(function () {
    emailjs.init("oJmY6qRa4EPP-tvKg");
})();

function setReminder() {
    // Get reminder text and email from input fields
    var reminderText = document.getElementById("reminderText").value;
    var email = document.getElementById("email").value;  // Capture the email input
    var reminderTime = new Date(document.getElementById("reminderTime").value).getTime();
    var currentTime = new Date().getTime();

    // Validate input data
    if (reminderText.trim() === "" || email.trim() === "" || isNaN(reminderTime) || reminderTime <= currentTime) {
        alert("Please enter a valid reminder, email, and time in the future.");
        return;
    }

    // Calculate the time difference between the current time and the reminder time
    var timeDiff = reminderTime - currentTime;

    // Set a timeout to display a browser notification and send an email when the reminder time is reached
    setTimeout(function () {
        // Display browser notification
        if (Notification.permission === "granted") {
            var notification = new Notification("Reminder", {
                body: reminderText,
            });
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                    var notification = new Notification("Reminder", {
                        body: reminderText,
                    });
                }
            });
        }

        // Send email using EmailJS
        sendEmailReminder(reminderText, email);  // Pass the email to the function

    }, timeDiff);
}

// Function to send email reminder using EmailJS
function sendEmailReminder(reminderText, email) {
    emailjs.send("service_hkon59c", "template_rfyn61t", {
        to_email: email,  // Pass dynamic email here
        message: reminderText,  // Reminder message
    })
    .then(function (response) {
        alert("Email sent successfully to " + email);  // Alert success with recipient email
        console.log("Email sent successfully!", response.status, response.text);
    }, function (error) {
        console.log("Error sending email:", error);
    });
}
