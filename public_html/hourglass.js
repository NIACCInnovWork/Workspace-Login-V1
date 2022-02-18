if (dataSaved === false) {
    window.addEventListener("beforeunload", printData);
} 

var dataSaved = false;


var clockIns = [];

var clockOuts = [];

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

    clockIns[_arrayName] = [_arrayName];
    clockIns[_arrayName].push("Date: " + today);
    clockIns[_arrayName].push("Arrival Time: " + currentTime);
    
    var name = document.createElement('dt');
    name.id = [_arrayName];
    name.className = "home-dt";
    name.style.textDecoration = 'none';
    name.appendChild(document.createTextNode([_arrayName]));
 
    document.querySelector('dl').appendChild(name);
}//put a clockIns array, have it detect when someone clocks out, and delete, keep files for those still clocked in on close, and make print with clockOuts

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
     based on the name input through the prompt*/ //add a delete method to remove names from clockedIn file of names when clocking out
    clockIns[_arrayName].push("Departure Time: " + currentTime);
    var spaceUse = prompt("What did you use the space for today?");
    clockIns[_arrayName].push("Usage of space: " + spaceUse);
    var toolUse = prompt("What tools did you use today?");
    clockIns[_arrayName].push("Tools used: " + toolUse);

    clockIns[_arrayName] = clockIns[_arrayName].join(" | ");

    clockOuts.push(clockIns[_arrayName]);
    
    //clockOuts[_arrayName] = clockOuts[_arrayName].join(" | ");
    
    delete clockIns[_arrayName];
        
//    let names = document.getElementById('clockedInList');
//    let removedName = document.querySelector('dt:[_arrayName]');
//    names.removeChild(removedNames);


    var removedName = document.getElementById([_arrayName]);
    removedName.remove();

}

function printData() {
  //create a FOR loop to turn every index item in clockedIn into a string with .join
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
    a.href = "data:application/octet-stream," + encodeURIComponent(clockIns.join("\n"));
    a.download = 'INCOMPLETE DATA' + today + ', ' + currentTime + '.txt';
    a.click();





    let b = document.createElement('b');
    b.href = "data:application/octet-stream," + encodeURIComponent(clockOuts.join("\n"));
    b.download = 'DATA' + today + ', ' + currentTime + '.txt';
    b.click();
    
    var dataSaved = true;


}


//make a test for whetheror not the program has been saved





