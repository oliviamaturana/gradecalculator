function calculateGrade(){

    var homeworkPoints = document.getElementById("homweworkPoints").value;
    var homeworkWeight = document.getElementById("homeworkWeight").value;

    console.log(homeworkPoints);
    console.log(homeworkWeight);

    var classworkPoints = document.getElementById("classworkPoints").value;
    var classworkWeight = document.getElementById("classworkWeight").value;

    console.log(classworkPoints);
    console.log(classworkWeight);

    var assessmentPoints = document.getElementById("assessmentPoints").value;
    var assessmentWeight = document.getElementById("assessmentWeight").value;

    console.log(assessmentPoints);
    console.log(assessmentWeight);

    var participationPoints = document.getElementById("participationPoints").value;
    var participationWeight = document.getElementById("partcipationWeight").value;

    console.log(participationPoints);
    console.log(participationWeight);

    var hwAvg = average(newNumber(homeworkPoints));
    console.log(hwAvg);

    var cwAvg = average(newNumber(classworkPoints));
    console.log(cwAvg);

    var assAvg = average(newNumber(assessmentPoints));
    console.log(assAvg);

    var parAvg = average(newNumber(participationPoints));
    console.log(parAvg);

    parseInt(homeworkWeight);
    parseInt(classworkWeight);
    parseInt(assessmentWeight);
    parseInt(participationWeight);

    var hwTotal = (hwAvg*(homeworkWeight/100));
    console.log(hwTotal);

    var cwTotal = (cwAvg*(classworkWeight/100));
    console.log(cwTotal);

    var assTotal = (assAvg*(assessmentWeight/100));
    console.log(assTotal);

    var parTotal = (parAvg*(partcipationWeight/100));
    console.log(parTotal);

    var currentGrade = (hwTotal + cwTotal + assTotal + parTotal);
    console.log(currentGrade);


}

var newNumber(str){
    var arr = str.split(",");
    for(var i=0; i<arr.length; i++){
        arr[i] = parseInt(arr[i]);
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

