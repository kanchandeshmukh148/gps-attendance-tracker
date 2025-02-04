
// const tabs = document.querySelectorAll('.login-tab');
// const label = document.querySelector('.label');

// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         // Remove active class from all tabs
//         tabs.forEach(t => t.classList.remove('active'));

//         // Add active class to the clicked tab
//         tab.classList.add('active');

//         // You can access the selected tab using tab.dataset.tab
//         console.log("Selected tab:", tab.dataset.tab);

//         // Perform actions based on the selected tab (e.g., show different content)
//         // ... your logic here ...
//         // console.log(label.innerHTML);
//         label.innerHTML=tab.innerHTML+" ID";
//         // console.log(tab.innerHTML);
//     });
// });



// document.addEventListener("DOMContentLoaded", function () {
//     const loginButton = document.querySelector(".login-button");
    
//     loginButton.addEventListener("click", function (event) {
//         event.preventDefault(); // Prevent form submission

//         let studentId = document.getElementById("student-id").value.trim();
//         let password = document.getElementById("password").value.trim();

//         // Validation checks
//         if (studentId === "") {
//             alert("❌ Student ID is required!");
//             return;
//         }
//         if (!/^\d+$/.test(studentId)) {
//             alert("❌ Student ID must be numeric!");
//             return;
//         }
//         if (password === "") {
//             alert("❌ Password is required!");
//             return;
//         }
//         if (password.length < 6) {
//             alert("❌ Password must be at least 6 characters long!");
//             return;
//         }

//         // If validation passes, proceed with login
//         alert("✅ Login successful!");
//         // You can replace this with form submission or AJAX request
//     });
// });

// const forms = document.querySelector('');

//             forms.forEach(form => {
//                 form.addEventListener('submit', (event) => {
//                     event.preventDefault();
//                     // Handle form submission here (e.g., using fetch)
//                     console.log(`Submitting ${currentForm} form...`);

//                     // Redirect based on form type
//                     if (currentForm === 'student') {
//                         window.location.href = 'student_dashboard.html'; // Redirect to student dashboard
//                     } else if (currentForm === 'faculty') {
//                         window.location.href = 'faculty_dashboard.html'; // Redirect to faculty dashboard
//                     } else if (currentForm === 'admin') {
//                         window.location.href = 'admin_dashboard.html'; // Redirect to admin dashboard
//                     }
//                 });
//             });




document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-button");
    const loginTabs = document.querySelectorAll(".login-tab");
    let selectedRole = "student"; // Default role

    // Handle tab switching
    loginTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            loginTabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            selectedRole = this.getAttribute("data-tab"); // Get selected role
        });
    });

    // Handle login validation and redirection
    loginButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        let studentId = document.getElementById("student-id").value.trim();
        let password = document.getElementById("password").value.trim();

        // Validation checks
        if (studentId === "") {
            alert("❌ ID is required!");
            return;
        }
        if (!/^\d+$/.test(studentId)) {
            alert("❌ ID must be numeric!");
            return;
        }
        if (password === "") {
            alert("❌ Password is required!");
            return;
        }
        if (password.length < 6) {
            alert("❌ Password must be at least 6 characters long!");
            return;
        }

        // Redirect to the respective dashboard based on selected role
        if (selectedRole === "student") {
            window.location.href = "student-dashboard.html";
        } else if (selectedRole === "faculty") {
            window.location.href = "faculty-dashboard.html";
        } else if (selectedRole === "admin") {
            window.location.href = "admin-dashboard.html";
        }
    });
});
