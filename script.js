var currentGrade;

function calculateCurrentGrade(){
    try {
        var hwAvg = parseBoxAvg("homeworkPoints");
        var homeworkWeight = parseBoxValue("homeworkWeight");

        var cwAvg = parseBoxAvg("classworkPoints");
        var classworkWeight = parseBoxValue("classworkWeight");

        var assAvg = parseBoxAvg("assessmentPoints");
        var assessmentWeight = parseBoxValue("assessmentWeight");


        var parAvg = parseBoxAvg("participationPoints");
        var participationWeight = parseBoxValue("participationWeight");


        var hwTotal = (hwAvg * (homeworkWeight / 100));
        console.log(hwTotal);

        var cwTotal = (cwAvg * (classworkWeight / 100));
        console.log(cwTotal);

        var assTotal = (assAvg * (assessmentWeight / 100));
        console.log(assTotal);

        var parTotal = (parAvg * (participationWeight / 100));
        console.log(parTotal);

        currentGrade = (hwTotal + cwTotal + assTotal + parTotal);
        console.log("Your current grade is " + currentGrade + ".");

        document.getElementById("currentGrade").innerHTML = "Your current grade is " + currentGrade + "%";
    }
    catch(error){
        console.log("Error in current grade calculation " + error);
        document.getElementById("currentGrade").innerHTML = "Error in current grade calculation " + error;
    }
    return currentGrade;

}

function calculateRequiredFinalGrade(){
    try {

        var desiredGrade = parseBoxValue("desiredGrade");

        var finalWeight = parseBoxValue("finalWeight");

        var requiredFinalGrade = (desiredGrade - currentGrade * (1 - finalWeight / 100)) / (finalWeight / 100);
        console.log(requiredFinalGrade);

        document.getElementById("requiredFinalGrade").innerHTML = "You need a " + requiredFinalGrade.toFixed(1) +
            " to get a " + desiredGrade + " in the class.";
    }
    catch(error) {
        console.log("Error in required grade calculation " + error);
        document.getElementById("requiredFinalGrade").innerHTML = "Error in required final grade calculation " + error;
    }
}

function parseBoxValue(boxId){
    var valueString = document.getElementById(boxId).value;
    var value = parseInt(valueString);
    if (isNaN(value)){
        throw new Error("The data in " + boxId + " is not an integer.");
    }
    console.log(boxId + " is " + value);
    return value;
}

function parseBoxAvg(boxId){
    var valueString = document.getElementById(boxId).value;
    var values = newNumber(valueString, boxId);
    var averageValue = average(values);
    console.log(boxId + " average is " + averageValue);
    return averageValue;
}

function newNumber(str, boxId){
    var arr = str.split(",");
    for(var i=0; i<arr.length; i++){
        arr[i] = parseInt(arr[i]);
        if(isNaN(arr[i])){
            throw new Error("The data in " + boxId + " is not a list of integers.");
        }
    }

    console.log(arr);
    return arr;
}

function average(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum/(arr.length);
}
