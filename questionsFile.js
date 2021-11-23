var timeElement = document.querySelector("#time");
var wrapperElement = document.querySelector(".wrapper");
var btnElement = document.querySelector("#start");
var divContEL = document.querySelector(".divContainer");



/*question array*/

var questions = [
    {
        title: "What are the different data types present in Java script?",
        choices: ["strings", "numbers", "booleans", "null", "all of the above"],
        answer: "all of the above",
    },
    {
        title: "What is a Nan property in JavaScript?",
        choices: ["Not-a-Null", "Not Nothing", "Not-a-Number", "all of the above"],
        answer: "Not-a-Number",
    },
    {
        title: "What kind of brackets are used to create an array in JavaScript?",
        choices: ["{}", "()", "{)", "[]"],
        answer: "[]",
    },
    {
        title: " ",
        choices: [""],
        answer: "",
    },
    {
        title: "",
        choices: [""],
        answer: "",
    },
]  

function displayQuestions() {
    var holdQ1Title = questions[i].title
    hElement.textContent = holdQ1Title
    var holdq1Choice1 = questions[i].choices[0];
    var holdq1Choice2 = questions[i].choices[1];
    var holdq1Choice3 = questions[i].choices[2];
    var holdq1Choice4 = questions[i].choices[3];

    oderListEl.innerHTML = '';

var liTag1 = document.createElement("li");
    liTag1.setAttribute("class", "all_li")
    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = holdq1Choice1;
    liTag1.appendChild(btn)
    oderListEl.appendChild(liTag1);
    divContEL.appendChild(oderListEl);

    var liTag2 = document.createElement("li");
    liTag2.setAttribute("class", "all_li")
    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = holdq1Choice2;
    liTag2.appendChild(btn)
    oderListEl.appendChild(liTag2);
    divContEL.appendChild(oderListEl);  

    var liTag3 = document.createElement("li");
    liTag3.setAttribute("class", "all_li")
    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = holdq1Choice3;
    liTag3.appendChild(btn)
    oderListEl.appendChild(liTag3);
    divContEL.appendChild(oderListEl);  

    var liTag4 = document.createElement("li");
    liTag4.setAttribute("class", "all_li")
    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = holdq1Choice;
    liTag4.appendChild(btn)
    oderListEl.appendChild(liTag4);
    divContEL.appendChild(oderListEl);  

    var allBtnEl = Document.querySecectirAll(".all_btn")
    allBtnEl.forEach(function (event) {
        eventaddEventListener('click', onclickHandler)
    });
}