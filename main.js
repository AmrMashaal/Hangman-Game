let letters = document.querySelector(".letters");
let array = Array.from("abcdefghijklmnopqrstuvwxyz");
let country = ["egypt", "qatar", "palestine", "saudi arabia"];
let wordFrom = document.querySelector(".wordFrom");
let wordBox = document.querySelector(".wordBox");
let bodyHang = document.querySelector(".body");
let lose = document.querySelector(".lose");
let theWinScreen = document.querySelector(".win");
let beforeLose = document.querySelector(".beforeLose");
let success = document.querySelector("#success");
let fail = document.querySelector("#fail");
let wordLetter;
let wrongChoose = 0;
let takeInner;
let isSuccess = 0;
let isThereMinus = false;

for (i = 0; i < array.length; i++) {
  let div = document.createElement("div");
  div.className = "letterColor";
  div.innerHTML = array[i];
  letters.appendChild(div);
}

let Allletters = document.querySelectorAll(".letterColor");

Allletters.forEach(function (e) {
  e.addEventListener("mousedown", function () {
    e.style.boxShadow = "inset -7px 6px 0 2px #00000017";
    e.style.transform = "scale(0.98)";
  });
  e.addEventListener("mouseup", function () {
    e.style.boxShadow = "-5px 4px 0 0 #00000017";
    e.style.transform = "scale(1)";
  });
  e.onclick = function () {
    e.classList.add("selected");
    e.classList.add("selectedStop");
    wordLetter = e.innerHTML;
    isIt(e);
  };
});

let objWords = {
  country: [
    "egypt",
    "palestine",
    "united states",
    "brazil",
    "australia",
    "france",
    "japan",
    "canada",
    "germany",
    "mexico",
    "india",
    "saudi arabia",
    "emirates",
    "china",
    "argentina",
    "spain",
    "italy",
    "russia",
    "south africa",
    "south korea",
    "turkey",
    "sweden",
    "netherlands",
    "belgium",
    "switzerland",
    "poland",
    "norway",
    "denmark",
    "finland",
    "greece",
    "iran",
    "iraq",
    "syria",
    "afghanistan",
    "pakistan",
    "bangladesh",
    "sri lanka",
    "thailand",
    "vietnam",
    "philippines",
    "indonesia",
    "malaysia",
    "singapore",
    "new zealand",
    "jamaica",
    "haiti",
    "cuba",
    "dominican republic",
    "puerto rico",
    "colombia",
    "venezuela",
    "peru",
    "chile",
    "ecuador",
    "bolivia",
    "paraguay",
    "uruguay",
    "canary islands",
    "morocco",
    "algeria",
    "tunisia",
    "libya",
    "sudan",
    "ethiopia",
    "kenya",
    "tanzania",
    "uganda",
    "nigeria",
    "ghana",
    "cameroon",
    "ivory coast",
    "madagascar",
    "fiji",
    "papua new guinea",
    "solomon islands",
    "samoa",
    "tonga",
    "vanuatu",
  ],
  programming: [
    "javascript",
    "python",
    "java",
    "c++",
    "ruby",
    "swift",
    "go",
    "php",
    "typescript",
    "kotlin",
    "html",
    "css",
    "react",
  ],
  famous: [
    "albert einstein",
    "alexander",
    "cleopatra",
    "mahatma ghandi",
    "mohamed salah",
    "ahmed zewail",
    "cristiano ronaldo",
    "jeff bezos",
    "elon musk",
    "barack obama",
    "bill gates",
    "mark zuckerberg",
    "lebron jamessss",
    "mbappe",
    "lionel messi",
    "neymar jr.",
    "kylian mbappé",
    "luka modrić",
    "virgil vandijk",
    "sadio mané",
    "kevin debruyne",
    "robert lewandowski",
    "sergio agüero",
    "manuel neuer",
    "harry kane",
    "raheem sterling",
    "paul pogba",
    "gareth bale",
    "eden hazard",
    "zlatan ibrahimović",
    "andres iniesta",
  ],
};

function randomSelect() {
  let keys = Object.keys(objWords);
  let theRandom = keys[Math.floor(Math.random() * keys.length)];
  wordFrom.innerHTML = theRandom;
  let word = Array.from(
    objWords[theRandom][Math.floor(Math.random() * objWords[theRandom].length)]
  )
    .join("")
    .match(/\w+/gi)
    .join("-");
  for (i = 0; i < word.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = word[i];
    wordBox.appendChild(span);
  }
  let spans = document.querySelectorAll(".wordBox span");
  spans.forEach(function (e) {
    return e.innerHTML === "-" ? e.classList.add("space") : e;
  });
  spans.forEach(function (e) {
    return e.innerHTML === "-" ? (isThereMinus = true) : console.log("no");
  });
}

function isIt(e) {
  let spans = document.querySelectorAll(".wordBox span");
  spans.forEach(function (ele) {
    if (ele.innerHTML === wordLetter) {
      takeInner = ele.innerHTML;
      ele.classList.add("returnSize");
      isSuccess++;
      if (isSuccess === spans.length && isThereMinus === false) {
        theWinScreen.classList.add("showWin");
      }
      if (isSuccess === spans.length - 1 && isThereMinus === true) {
        theWinScreen.classList.add("showWin");
      }
      success.play();
    }
  });
  if (takeInner !== wordLetter) {
    wrongChoose++;
    bodyHang.classList.add(`wrong-${wrongChoose}`);
    fail.play();
  }
  if (wrongChoose === 8) {
    lose.classList.add("loseCome");
    beforeLose.classList.add("showBeforeLose");
  }
}

randomSelect();

let refresh = document.querySelector(".fa-rotate-right");

refresh.onclick = function () {
  window.location.reload();
};
