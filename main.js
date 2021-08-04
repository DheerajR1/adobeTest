var creativeCloudAll = document.querySelector("All");
var allCheck = document.getElementsByTagName("input");
var chosenProductID = [];

let totalAmount = 0;

function allSelected() {
    for(var i=0; i<allCheck.length;i++) {
        allCheck[i].checked = document.getElementById("0").checked;
    }
}

function placeOrder() {
    for (var i=0;i<allCheck.length;i++) {
        if (allCheck[i].checked) {
           chosenProductID.push(allCheck[i].id);
           totalAmount = parseInt(totalAmount)+parseInt(allCheck[i].value);
        }
    }
    console.log(totalAmount);
    location.href = "./invoice.html";
    confirmOrder();
}

function confirmOrder() {
    
    for (var i=0;i<chosenProductID.length;i++) {
        console.log(chosenProductID[i]);
        document.getElementById(chosenProductID[i]).style.display = "block";
    }
    console.log(totalAmount);
    document.getElementById("cost").innerText = totalAmount;
}