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
total.innerText = localStorage.getItem("total")

//Final table tableoutput
const tdateOutput5 = document.getElementById("mobile");
const timeOutput5 = document.getElementById("email");
const tsladultOutput5 = document.getElementById("gender");

//Final table use local storage data
tdateOutput5.innerHTML=localStorage.getItem("Phone number");
timeOutput5.innerHTML=localStorage.getItem("Email address");
tsladultOutput5.innerHTML=localStorage.getItem("Gender");
