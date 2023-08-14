// references to the output elements of the table
let date_out = document.getElementById("dateout");
date_out.innerText = localStorage.getItem("date_out");

let time_out = document.getElementById("timeout");
time_out.innerText = localStorage.getItem("time_out");

let duration_out = document.getElementById("durationout");
duration_out.innerText = localStorage.getItem("Duration_out");

let sl_adult_out = document.getElementById("sladultout");
sl_adult_out.innerText = localStorage.getItem("sl_adult_out");

let sl_adult_amount = document.getElementById("sladultamount");
sl_adult_amount.innerText = localStorage.getItem("sl_adult_amount");

let sl_child_out = document.getElementById("slchildout");
sl_child_out.innerText = localStorage.getItem("sl_child_out");

let sl_child_amount = document.getElementById("slchildamount");
sl_child_amount.innerText = localStorage.getItem("sl_child_amount");

let fr_adult_out = document.getElementById("fradultout");
fr_adult_out.innerText = localStorage.getItem("fr_adult_out");

let fr_adult_amount = document.getElementById("fradultamount");
fr_adult_amount.innerText = localStorage.getItem("fr_adult_amount");

let fr_child_out = document.getElementById("frchildout");
fr_child_out.innerText = localStorage.getItem("fr_child_out");

let fr_child_amount = document.getElementById("frchildamount");
fr_child_amount.innerText = localStorage.getItem("fr_child_amount");

let infant_out = document.getElementById("infantout");
infant_out.innerText = localStorage.getItem("infant_out")

let total = document.getElementById("totalamount");
total.innerText = localStorage.getItem("total");



//get references to the interactive elements
//no.of guests input
const fnameInput = document.getElementById("crdname");
const phnoInput = document.getElementById("crdnum");
const mailInput = document.getElementById("expdate");
const confirmmailInput = document.getElementById("cvcnum");

//continue with purchase button
const btnsubmitit=document.getElementById("submitit");

//add event listners
//continue with purchase button
btnsubmitit.addEventListener("click",storedetailsLS1);

// store data and use function
function storedetailsLS1(){
    //get input data
    fnameChoice2 = document.getElementById("crdname").value;
    phnoChoice2 = document.getElementById("crdnum").value;
    mailChoice2 = document.getElementById("expdate").value;
    timeChoices2 = document.getElementById("cvcnum").value;

    //set input data in local storage
    fnamefornInput = localStorage.setItem("Card holder", fnameChoice2);
    phnoformInput = localStorage.setItem("Card number", phnoChoice2);
    mailformInput = localStorage.setItem("Expiry date", mailChoice2);
    timedueformInput = localStorage.setItem("CVC", timeChoices2);
}

const payamt = document.getElementById("payamt");

payamt.innerHTML=" ="+localStorage.getItem("total");