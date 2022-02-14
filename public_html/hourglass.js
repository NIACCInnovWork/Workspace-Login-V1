//window.onbeforeunload = (printData);

window.addEventListener("beforeunload", printData);

var globalObj = [];

var clockOuts = [];

var nameList = "No Names";

function clockIn() {
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    var currentTime = new Date();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();

    currentTime = hour + ':' + minute;

    var _arrayName = prompt('Please Enter Your First And Last Name').toUpperCase();

    globalObj[_arrayName] = [_arrayName];
    globalObj[_arrayName].push("Date: " + today);
    globalObj[_arrayName].push("Arrival Time: " + currentTime);
    
    updateNames();
}

function clockOut() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    var currentTime = new Date();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();

    currentTime = hour + ':' + minute;

    var _arrayName = prompt("Please enter your first and last name.").toUpperCase(); /*should input "return" data from addName()
     based on the name input through the prompt*/
    globalObj[_arrayName].push("Departure Time: " + currentTime);
    var spaceUse = prompt("What did you use the space for today?");
    globalObj[_arrayName].push("Usage of space: " + spaceUse);
    var toolUse = prompt("What tools did you use today?");
    globalObj[_arrayName].push("Tools used: " + toolUse);
    globalObj[_arrayName] = globalObj[_arrayName].join(" | ");

    clockOuts.push(globalObj[_arrayName]);
}

function printData() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    var currentTime = new Date();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();

    currentTime = hour + ':' + minute;

    let a = document.createElement('a');
    a.href = "data:application/octet-stream," + encodeURIComponent(clockOuts.join("\n"));
    a.download = 'DATA' + today + ', ' + currentTime + '.txt';
    a.click();
}

function updateNames() {
    nameList = globalObj.toString();
}