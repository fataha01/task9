function submission() {
    document.getElementById("result").textContent = "";
    document.getElementById("result2").textContent = "";
    document.getElementById("result3").textContent = "";
    document.getElementById("result4").textContent = "";

    const a = document.getElementById("name").value.trim();
    const b = document.getElementById("mail").value.trim();
    const c = document.getElementById("org").value.trim();
    const d = document.getElementById("phone").value.trim();

    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^(?!.*\.\.)([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
    const phoneRegex = /^0\d{3}-\d{7}$/;

    let isValid = true;
    // for name
    if (a === "") {
        document.getElementById("result").textContent = "Name field cannot be empty.";
        isValid = false;
    } else if (!nameRegex.test(a)) {
        document.getElementById("result").textContent = "Name should only contain letters and spaces.";
        isValid = false;
    }
    // for email
    if (b === "") {
        document.getElementById("result2").textContent = "Email field cannot be empty.";
        isValid = false;
    } else if (!emailRegex.test(b)) {
        document.getElementById("result2").textContent = "Please enter a valid email address.";
        isValid = false;
    }
    // for org
    if (c === "") {
        document.getElementById("result3").textContent = "org field cannot be empty.";
        isValid = false;
    }
    // for phone
    if (d === "") {
        document.getElementById("result4").textContent = "Phone field cannot be empty.";
        isValid = false;
    } else if (!phoneRegex.test(d)) {
        document.getElementById("result4").textContent = "Phone number must have exactly 11 digits.";
        isValid = false;
    }
    if (isValid) {
        alert("Form submitted successfully!");
    }
}