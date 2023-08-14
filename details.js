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



//get references to the interactive elements
//no.of guests input
const fnameInput = document.getElementById("fnameinpt");
const phnoInput = document.getElementById("phno");
const mailInput = document.getElementById("emailinpt");
const confirmmailInput = document.getElementById("confomail");
const form = document.getElementById("form");





//continue with purchase button
const btnsubmitit=document.getElementById("submitit");

//add event listners
//continue with purchase button
btnsubmitit.addEventListener("click",storedetailsLS);

//form
form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

// store data and use function
function storedetailsLS(){
    //get input data
    fnameChoice = document.getElementById("fnameinpt").value;
    phnoChoice = document.getElementById("phno").value;
    mailChoice = document.getElementById("emailinpt").value;

    //set input data in local storage
    fnamefornInput = localStorage.setItem("Full name", fnameChoice);
    phnoformInput = localStorage.setItem("Phone number", phnoChoice);
    mailformInput = localStorage.setItem("Email address", mailChoice);
}

//Form validation function
function checkInputs(){
    const firstnameValue = fnameInput.value.trim();
    const phonenoValue = phnoInput.value.trim();
    const emailaddressValue = mailInput.value.trim();
    const confoemailValue = confirmmailInput.value.trim();

    //form validation conditions
    if(firstnameValue === '') {
		setErrorFor(fnameinpt, 'Please add the Full Name');
	} else {
		setSuccessFor(fnameinpt);
	}

    if(phonenoValue === '') {
		setErrorFor(phno, 'Please add the Phone number');
	} else {
		setSuccessFor(phno);
	}

    if(emailaddressValue === '') {
		setErrorFor(emailinpt, 'Email cannot be blank');
	} else {
		setSuccessFor(emailinpt);
	}

    if(confoemailValue === '') {
		setErrorFor(confirmmailInput, 'Email cannot be blank');
	} else{
		setSuccessFor(confirmmailInput);
        window.location.href = "./payment.html";
	}
}

function setErrorFor(input, message) {
	const inputbox = input.parentElement;
	const small = inputbox.querySelector('small');
	inputbox.className = 'input-box error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const inputbox = input.parentElement;
	inputbox.className = 'input-box success';
}

//Display gender name
let radioBtns = document.querySelectorAll("input[name='gender']");
let result = document.getElementById("result");

radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("click",findSelected);
});

function findSelected(){
    let selected = document.querySelector("input[name='gender']:checked").value;
    result.textContent = `Gender - ${selected}`;

    gender123Input = localStorage.setItem("Gender", selected);
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//Gender selection

function selectfun(){
    timeChoices = document.getElementById("timedue").value;

	selectinput = localStorage.setItem("Gender", timeChoices);
}