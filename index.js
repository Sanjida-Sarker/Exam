const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const mail = document.getElementById("mail");
const phn = document.getElementById("phn");
const address = document.getElementById("address");
const reset = document.getElementsByClassName("reset")[0];
const save = document.getElementById("save");
const dataBody = document.getElementById("dataBody");


reset.addEventListener("click",Reset);


function Reset(){
    fName.value = "";
    lName.value = "";
    mail.value = "";
    phn.value = "";
    address.value = "";
}


save.addEventListener("click",saveData);


function saveData (){
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td_6 = document.createElement("td");
    let edit = document.createElement("a");
    let dlt = document.createElement("a");
    td1.innerText = fName.value;
    td2.innerText = lName.value;
    td3.innerText = mail.value;
    td4.innerText = phn.value;
    td5.innerText = address.value;
    edit.innerText = "Edit";
    dlt.innerText = "Delete";
    td_6.classList.add("buttons");
    edit.classList.add("edit");
    dlt.classList.add("insert");
    edit.href = "#";
    dlt.href = "#"
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    td_6.appendChild(edit);
    td_6.appendChild(dlt);
    tr.appendChild(td_6);
    dataBody.appendChild(tr);
}