const fill = document.querySelector(".fill");

// select .empty classes and put into nodelist
const emptyBoxes = document.querySelectorAll(".empty");


// event listenters for drag fill
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);


// loop through empty boxxes / drag containers

for(const empty of emptyBoxes){
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}
//#region drag functions 

function dragStart(event){
    console.log("dragstart called!");
    this.className += " hold";
    // var statOne = document.getElementById("stat-one");
    var x = event.clientX;
    var y = event.clientY;
    console.log(x);
    console.log(y);
    positionStat = document.getElementById("stat-three");
    positionStat.textContent = `Drag Position: x-coord:${x} \n \r 
    postition: y-coord: ${y}`;
    positionStat.style.fontWeight = "bolder";
    // statOne.textContent = "Drag and Drop Started!";

    setTimeout(() =>(this.className = "invisible"),
     0, 
    );

}

function dragEnd(){
    console.log("drag end event fired!");
    this.className = "fill";
}

function dragOver(e){
    e.preventDefault();
    document.getElementById("stat-one").textContent = "status:container detected";
    document.getElementById("stat-two").textContent = "status:drag started";
}
function dragEnter(){
    e.preventDefault();
    this.className += "hovered";

}

function dragLeave(){
    this.className = "empty";
}

function dragDrop(){
    
    this.className = "empty";
    this.append(fill);
    var statOne = document.getElementById("stat-one");
    statOne.textContent = "status: Drag and Drop Complete!";
    document.getElementById("stat-two").textContent = "status: Container Found";
    var dragPosX = e.clientX;
    var dragPosY = e.clientY;
    var dropPosition = document.getElementById("stat-three");
    dropPosition.textContent = `x:${dragPosX} , y:${dragPosY}`;


}

// #region drag position logger
// function logDragStats(e){
//     console.log(e, "EVENT!");
// }


// var statOne = document.querySelector("#stat-one");
// var statTwo = document.querySelector("#stat-two");

// // stat one will print back event information for drag and drop
// // logEventType will read click event from proper place and print back(log) event info
// //stat one is the wrong element to add event listener, 
// // event listener should be on the empty/fill boxes for the drag event logging
// statOne.addEventListener("click", logEventType);

// function logEventType(event){
//     var eTarg = event.target;
//     console.log(eTarg);
// }