
const tableData = [
    ["Finch",   "Harold", "programmer", "000-00-xxxx"],
    ["Reeve",   "John",   "assassin",   "111-11-xxxx"],
    ["Fusco",   "Lionel", "detective",  "222-22-xxxx"],
    ["Morgan",  "Zoe",    "fixer",      "333-33-xxxx"],
    ["Cause",   "Root",   "angel",      "444-44-xxxx"],
    ["Carter",  "Joss",   "detective",  "555-55-xxxx"],
    ["Shaw",    "Sameen", "assassin",   "666-66-xxxx"]
];

function loadTable(data, index) {
    var tableBody = document.getElementById("tbody");

    var row = tableBody.insertRow(index);

    var cell0 = row.insertCell();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();

    cell0.innerHTML = index;
    cell1.innerHTML = data[index, 0];
    cell2.innerHTML = data[index, 1];
    cell3.innerHTML = data[index, 2];
    cell4.innerHTML = data[index, 3];
}
