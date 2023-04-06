let count = 0
let countg = 0
document.getElementById("scoreh").textContent = count
document.getElementById("scoreg").textContent = count
document.getElementById("rst").textContent = "Reset"


function incrh1() {
    count += 1
    document.getElementById("scoreh").textContent = count
}
function incrh2() {
    count += 2
    document.getElementById("scoreh").textContent = count
}
function incrh3() {
    count += 3
    document.getElementById("scoreh").textContent = count
}

// ---------------------guest----------------------------------

function incrg1() {
    countg += 1
    document.getElementById("scoreg").textContent = countg
}
function incrg2() {
    countg += 2
    document.getElementById("scoreg").textContent = countg
}
function incrg3() {
    countg += 3
    document.getElementById("scoreg").textContent = countg
}

// ---------------reset----------------------------------------
function reset() {
    scoreh = 0
    scoreg = 0
    document.getElementById("scoreh").textContent = scoreh
    document.getElementById("scoreg").textContent = scoreg
}