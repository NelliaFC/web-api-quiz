var timeElement = document.querySelector("#time");
var wrapperElement = document.querySelector(".wrapper");
var btnElement = document.querySelector("#start");
var divContEL = document.querySelector(".divContainer");



/*question array*/

var questions = [
    {
        title: "",
        choices: [""],
        answer: "",
    },
    {
        title: "",
        choices: [""],
        answer: "",
    },
    {
        title: "",
        choices: [""],
        answer: "",
    },
    {
        title: "",
        choices: [""],
        answer: "",
    },
    {
        title: "",
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
}
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
    liTag2.appendChild(btn)appendChild(btn)
    oderListEl.appendChild(liTag2);
    divContEL.appendChild(oderListEl);  