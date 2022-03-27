let questions = [
    {
        'question': 'Das flächenmäßig kleinste Bundesland heißt?',
        'answer1': 'Berlin',
        'answer2': 'Bremen',
        'answer3': 'Saarland',
        'answer4': 'Hamburg',
        'rightAnswer': 2
    },
    {
        'question': 'Was bedeutet das lateinische “carpe diem”?',
        'answer1': 'Genieße das Leben',
        'answer2': 'Nutze den Tag',
        'answer3': 'Dein Tag wird toll werden',
        'answer4': 'Man sieht sich immer zweimal im Leben',
        'rightAnswer': 2
    },
    {
        'question': 'Was ist die “Goldene Himbeere”?',
        'answer1': 'Ein Preis für die schlechteste Leistung innerhalb eines Filmjahres',
        'answer2': 'Eine Nachspeise aus Russland',
        'answer3': 'Das teuerste Schmuckstück der Welt',
        'answer4': 'Das Symbol einer Sekte',
        'rightAnswer': 1
    },
    {
        'question': 'Welcher Pilz ist einer der giftigsten der Welt?',
        'answer1': 'Der Fliegenpilz',
        'answer2': 'Der Grüne Knollenblätterpilz',
        'answer3': 'Der Gemeine Kartoffelbovist',
        'answer4': 'Der Satansröhrling',
        'rightAnswer': 2
    },
    {
        'question': 'Welcher Schauspieler hat nicht in einem James Bond-Film mitgespielt?',
        'answer1': 'Timothy Dalton',
        'answer2': 'Leonardo DiCaprio',
        'answer3': 'Daniel Craig',
        'answer4': 'Javier Bardem',
        'rightAnswer': 2
    },
    {
        'question': 'Einen Feinschmecker nennt man auch?',
        'answer1': 'Gourmet',
        'answer2': 'Gourmed',
        'answer3': 'Genießer',
        'answer4': 'Leckermäulchen',
        'rightAnswer': 1
    },
    {
        'question': 'Wer oder was ist eine “Druidin”?',
        'answer1': 'Eine Kräutersammlerin im Harz',
        'answer2': 'Eine Hunderasse aus China',
        'answer3': 'Ein Magnetfeld',
        'answer4': 'Eine Priesterin oder Zauberin der keltischen Religion',
        'rightAnswer': 4
    },
    {
        'question': 'Mit welcher Tiergruppe sind die Dinosaurier am engsten verwandt?',
        'answer1': 'Vögeln',
        'answer2': 'Eidechsen',
        'answer3': 'Alligatoren',
        'answer4': 'Affen',
        'rightAnswer': 1
    },
    {
        'question': 'Welches Metall leitet Wärme am besten?',
        'answer1': 'Silber',
        'answer2': 'Kupfer',
        'answer3': 'Gold',
        'answer4': 'Aluminium',
        'rightAnswer': 1
    },
    {
        'question': 'Wie viele Bundesländer hat Deutschland?',
        'answer1': '13',
        'answer2': '9',
        'answer3': '16',
        'answer4': '20',
        'rightAnswer': 3
    },
    {
        'question': 'Wie lautet der zweite Planet in unserem Sonnensystem?',
        'answer1': 'Venus',
        'answer2': 'Mars',
        'answer3': 'Jupiter',
        'answer4': 'Venera',
        'rightAnswer': 1
    },
    {
        'question': 'Die Zeichentrick-Familie Simpsons lebt in welcher Stadt?',
        'answer1': 'New York',
        'answer2': 'Springfield',
        'answer3': 'Chicago',
        'answer4': 'Minnesota',
        'rightAnswer': 2
    },
    {
        'question': 'In welcher Stadt findet sich Big Ben?',
        'answer1': 'New York',
        'answer2': 'Hong Kong',
        'answer3': 'London',
        'answer4': 'Istanbul',
        'rightAnswer': 3
    },
    {
        'question': 'Welches dieser Tiere hält keinen Winterschlaf?',
        'answer1': 'Eichhörnchen',
        'answer2': 'Fledermaus',
        'answer3': 'Igel',
        'answer4': 'Siebenschläfer',
        'rightAnswer': 1
    },
    {
        'question': 'In welcher Einheit wird der elektrische Widerstand gemessen?',
        'answer1': 'Ohm',
        'answer2': 'Volt',
        'answer3': 'Ampere',
        'answer4': 'Watt',
        'rightAnswer': 1
    },
    {
        'question': 'Wie beginnt Artikel 1 des deutschen Grundgesetzes?',
        'answer1': '„Alle Menschen sind vor dem Gesetz gleich.“',
        'answer2': '„Jeder hat das Recht auf die freie Entfaltung seiner Persönlichkeit.“',
        'answer3': '„Jeder hat das Recht, seine Meinung in Wort, Schrift und Bild frei zu äußern.“',
        'answer4': '„Die Würde des Menschen ist unantastbar.“',
        'rightAnswer': 4
    },
    {
        'question': 'Wie lautet das chemische Symbol für Blei?',
        'answer1': 'Bl',
        'answer2': 'Pb',
        'answer3': 'Be',
        'answer4': 'Pt',
        'rightAnswer': 2
    },
    {
        'question': 'Wie viele Planeten hat unser Sonnensystem?',
        'answer1': '8',
        'answer2': '9',
        'answer3': '10',
        'answer4': '11',
        'rightAnswer': 1
    },
    {
        'question': 'Welches ist das höchste Amt in Deutschland?',
        'answer1': 'Bundespräsident',
        'answer2': 'Bundeskanzler',
        'answer3': 'Bundestagspräsident',
        'answer4': 'Oberster Richter am Bundesverfassungsgericht',
        'rightAnswer': 1
    },
    {
        'question': 'Wie heißt die Schicht der Atmosphäre, die der Erde am nächsten ist?',
        'answer1': 'Troposphäre',
        'answer2': 'Stratosphäre',
        'answer3': 'Mesosphäre',
        'answer4': 'Thermosphäre',
        'rightAnswer': 1
    }
];

let scoreList = [];
let myAnwers = [];
let startGeneral = false;
let tempQuestion = 0;
let hitAnswer = false;


function tempStart() {
    return /* html */ `
        <div class="card-body cardBody">
            <div class="card text-center" style="width: 48rem;">
                <div class="card-body">
                    <h5 class="card-title">Allgemeinwissen Quiz</h5>
                    <p class="card-text">Hier werden dir 20 Fragen gestellt um dein Allgemeinwissen zu Testen. Viel Spaß.</p>
                    <a onclick="generalKnowledge()" href="#" class="btn btn-primary">START</a>
                </div>
            </div>
        </div>
`;
}

function tempQuest(i) {
    return /* html */ `
    <div class="card-body cardBody">
              <h5 class="card-title">${questions[i].question}</h5>
              <div class="card">
                <div onclick="checkAnswer(${i}, 1)" id="answer1" class="card-body cursor">
                    ${questions[i].answer1}
                </div>
              </div>
              <div class="card">
                <div onclick="checkAnswer(${i}, 2)" id="answer2" class="card-body cursor">
                    ${questions[i].answer2}
                </div>
              </div>
              <div class="card">
                <div onclick="checkAnswer(${i}, 3)" id="answer3" class="card-body cursor">
                    ${questions[i].answer3}
                </div>
              </div>
              <div class="card">
                <div onclick="checkAnswer(${i}, 4)" id="answer4" class="card-body cursor">
                    ${questions[i].answer4}
                </div>
              </div>
              <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group me-2 d-flex flex-wrap" role="group" aria-label="First group">
                  <button id="button1" type="button" class="btn noCurser btn-secondary">1</button>
                  <button id="button2" type="button" class="btn noCurser btn-secondary">2</button>
                  <button id="button3" type="button" class="btn noCurser btn-secondary">3</button>
                  <button id="button4" type="button" class="btn noCurser btn-secondary">4</button>
                  <button id="button5" type="button" class="btn noCurser btn-secondary">5</button>
                  <button id="button6" type="button" class="btn noCurser btn-secondary">6</button>
                  <button id="button7" type="button" class="btn noCurser btn-secondary">7</button>
                  <button id="button8" type="button" class="btn noCurser btn-secondary">8</button>
                  <button id="button9" type="button" class="btn noCurser btn-secondary">9</button>
                  <button id="button10" type="button" class="btn noCurser btn-secondary">10</button>
                  <button id="button11" type="button" class="btn noCurser btn-secondary">11</button>
                  <button id="button12" type="button" class="btn noCurser btn-secondary">12</button>
                  <button id="button13" type="button" class="btn noCurser btn-secondary">13</button>
                  <button id="button14" type="button" class="btn noCurser btn-secondary">14</button>
                  <button id="button15" type="button" class="btn noCurser btn-secondary">15</button>
                  <button id="button16" type="button" class="btn noCurser btn-secondary">16</button>
                  <button id="button17" type="button" class="btn noCurser btn-secondary">17</button>
                  <button id="button18" type="button" class="btn noCurser btn-secondary">18</button>
                  <button id="button19" type="button" class="btn noCurser btn-secondary">19</button>
                  <button id="button20" type="button" class="btn noCurser btn-secondary">20</button>
                </div>
              </div>
            </div>
`;
}

function tempScore(){
    return /* html */ `
    <div class="card-body cardBody">
        <div class="card text-center" style="width: 48rem;">
        <h5 class="card-title mt-3">Scoreboard</h5>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody id="scoreTable">
                <tr>
                    <th scope="row">1</th>
                    <td>-----</td>
                    <td>-----</td>  
                </tr>
            </tbody>
        </table>
        </div>
    </div>
`;
}

function tempFillTable(i, name, score){
    return /* html */ `
                <tr>
                    <th scope="row">${i}</th>
                    <td>${name}</td>
                    <td>${score}</td>  
                </tr>     
`;
}

function highlightSiteButton(i) {
    let j = i;
    j = j + 1;
    let site = document.getElementById('button' + j);
    site.classList.remove('btn-secondary');
    site.classList.add('btn-primary');
}

function nextQuest(i) {
    tempQuestion = i + 1;
    if (tempQuestion > 19){
        generalEndPage();
    }else{
        generalKnowledge();
    }
}

function render() {
    hitAnswer = false;
    loadStorage();
}

function generalKnowledge() {
    hitAnswer = false;
    let quest = document.getElementById('questCard');
    quest.innerHTML = tempQuest(tempQuestion);
    highlightSiteButton(tempQuestion);
    paintView();
}

function showGeneral() {
    startGeneral = true;
    myAnwers = [];
    tempQuestion = 0;
    paintOptions(1);
    let quest = document.getElementById('questCard');
    quest.innerHTML = tempStart();
}

function showScoreboard(){
    let scoreboard = document.getElementById('questCard');
    scoreboard.innerHTML = tempScore();
    fillTable();
}

function fillTable(){
    let scoreTable = document.getElementById('scoreTable');
    if(scoreList){
        scoreTable.innerHTML = ``;
        for (let i = 0; i < scoreList.length; i++){
            if (scoreList.length < 1 || scoreList.length > 10){
                break
            }else{
                scoreTable.innerHTML += tempFillTable(i+1, scoreList[i].name, scoreList[i].points);
            }
        }
    }
}

function generalEndPage(){
    let totalScore = calcScore();
    let endPage = document.getElementById('questCard');
    endPage.innerHTML = /* html */ `
        <div class="card-body cardBody">
            <div class="card text-center" style="width: 48rem;">
                <div class="card-body">
                    <h5 class="card-title">Ergebniss</h5>
                    <p class="card-text">Herzlichen Glückwunsch. Dein Score beträgt <b>${totalScore}</b>. <br> Trage einen Namen ein um deine Leistung im Scoreboard zu Speichern.</p>
                    <input id="scoreNameInput" type="text" placeholder="Dein Name">
                    <a onclick="saveScore(${totalScore})" href="#" class="btn btn-primary">Speichern</a>
                </div>
            </div>
        </div>
    `;
}

function calcScore(){
    let totalScore = 0;
    for (let i = 0; i < myAnwers.length; i++){
        totalScore = totalScore + myAnwers[i].points;
    }
    return totalScore;
}

function saveScore(score){
    let name = document.getElementById('scoreNameInput');
    let nValue = name.value;
    let value = {name: nValue, points: score};
    scoreList.push(value);
    scoreList.sort(function(a, b){return b.points - a.points});
    saveStorage();
    showScoreboard();
}

function checkAnswer(i, answer) {
    if (hitAnswer == false) {
        hitAnswer = true;
        if (answer == questions[i].rightAnswer) {
            document.getElementById('answer' + answer).classList.add('bg-success');
            saveAnswers(i, true, 100);
            delayNextQuest(i);
        } else {
            document.getElementById('answer' + answer).classList.add('bg-danger');
            saveAnswers(i, false, 10);
            delayNextQuest(i);
        }
    }
}

function saveAnswers(i, result, points) {
    myAnswer = { 'index': i, 'result': result, 'points': points };
    myAnwers.push(myAnswer);
}

function paintOptions(i) {
    for (j = 1; j < 4; j++) {
        let option = document.getElementById('option' + j);
        option.classList.remove('bgActive');
    }
    let option = document.getElementById('option' + i);
    option.classList.add('bgActive');
}

function paintView() {
    if (myAnwers.length > 0) {
        for (let i = 0; i < myAnwers.length; i++) {
            let j = i + 1;
            let view = document.getElementById('button' + j);
            if (myAnwers[i].result == true) {
                view.classList.add('viewColorGreen');
            } else {
                view.classList.add('viewColorRed');
            }
        }
    }
}

function saveStorage(){
    let nameAsText = JSON.stringify(scoreList);
    localStorage.setItem('quizappscore', nameAsText);
}

function loadStorage(){
    let nameAsText = localStorage.getItem('quizappscore');
    if(nameAsText){
        scoreList = JSON.parse(nameAsText);
    }
}

function delayNextQuest(i) {
    setTimeout(() => {
        nextQuest(i)
    }, 1000);
}