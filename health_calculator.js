document.getElementById("bodyfat").addEventListener("submit", function (e) {

    e.preventDefault(); // stop page refresh

    // get values
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let age = document.getElementById("Age").value;
    let hip = document.getElementById("Hip").value;
    let height = document.getElementById("Height").value;
    let neck = document.getElementById("Neck").value;
    let waist = document.getElementById("Waist").value;



    let bodyfat;

    // simple formula example
    if (gender === "male") {
        bodyfat = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
    }
    else {
        let height = 165 / 2.54;
        let neck = 32 / 2.54;
        let waist = 70 / 2.54;
        let hip = 95 / 2.54;
        bodyfat = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
    }

    bodyfat = bodyfat.toFixed(2);
    let category = getCategory(bodyfat , gender);
    document.getElementById("result").innerText =
        "Estimated Body Fat: " + bodyfat + "%" + " " + category;

});

function getCategory(bodyFat, gender) {
    if (gender === "male") {
        if (bodyFat < 6) {
            return "Essential fat";
        }
        else if (bodyFat >= 6 && bodyFat <= 13) {
            return "Athletic";
        }
        else if (bodyFat >= 14 && bodyFat <= 17) {
            return "Fitness";
        }
        else if (bodyFat >= 18 && bodyFat <= 24) {
            return "Average";
        }
        else {
            return "Obese";
        }
    }
    else {
        if (bodyFat < 14) {
            return "Essential fat";
        }
        else if (bodyFat >= 14 && bodyFat <= 20) {
            return "Athletic";
        }
        else if (bodyFat >= 21 && bodyFat <= 24) {
            return "Fitness";
        }
        else if (bodyFat >= 25 && bodyFat <= 31) {
            return "Average";
        }
        else {
            return "Obese";
        }
    }
}