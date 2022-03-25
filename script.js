let questions = [
    {
        'question':'Das flächenmäßig kleinste Bundesland heißt?',
        'answer1':'Berlin',
        'answer2':'Bremen',
        'answer3':'Saarland',
        'answer4':'Hamburg',
        'rightAnswer': 2
    },
    {
        'question':'Was bedeutet das lateinische “carpe diem”?',
        'answer1':'Genieße das Leben',
        'answer2':'Nutze den Tag',
        'answer3':'Dein Tag wird toll werden',
        'answer4':'Man sieht sich immer zweimal im Leben',
        'rightAnswer': 2
    },
    {
        'question':'Was ist die “Goldene Himbeere”?',
        'answer1':'Ein Preis für die schlechteste Leistung innerhalb eines Filmjahres',
        'answer2':'Eine Nachspeise aus Russland',
        'answer3':'Das teuerste Schmuckstück der Welt',
        'answer4':'Das Symbol einer Sekte',
        'rightAnswer': 1
    },
    {
        'question':'Welcher Pilz ist einer der giftigsten der Welt?',
        'answer1':'Der Fliegenpilz',
        'answer2':'Der Grüne Knollenblätterpilz',
        'answer3':'Der Gemeine Kartoffelbovist',
        'answer4':'Der Satansröhrling',
        'rightAnswer': 2
    },
    {
        'question':'Welcher Schauspieler hat nicht in einem James Bond-Film mitgespielt?',
        'answer1':'Timothy Dalton',
        'answer2':'Leonardo DiCaprio',
        'answer3':'Daniel Craig',
        'answer4':'Javier Bardem',
        'rightAnswer': 2
    },
];

tempQuestion = 0;

function tempStart(){
    return /* html */ `

`;
}

function tempQuest(i){
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
                <div class="btn-group me-2" role="group" aria-label="First group">
                  <button onclick="changeQuest(0)" id="button1" type="button" class="btn btn-secondary">1</button>
                  <button onclick="changeQuest(1)" id="button2" type="button" class="btn btn-secondary">2</button>
                  <button onclick="changeQuest(2)" id="button3" type="button" class="btn btn-secondary">3</button>
                  <button onclick="changeQuest(3)" id="button4" type="button" class="btn btn-secondary">4</button>
                  <button onclick="changeQuest(4)" id="button5" type="button" class="btn btn-secondary">5</button>
                  <button onclick="changeQuest(5)" id="button6" type="button" class="btn btn-secondary">6</button>
                  <button onclick="changeQuest(6)" id="button7" type="button" class="btn btn-secondary">7</button>
                  <button onclick="changeQuest(7)" id="button8" type="button" class="btn btn-secondary">8</button>
                  <button onclick="changeQuest(8)" id="button9" type="button" class="btn btn-secondary">9</button>
                  <button onclick="changeQuest(9)" id="button10" type="button" class="btn btn-secondary">10</button>
                  <button onclick="changeQuest(10)" id="button11" type="button" class="btn btn-secondary">11</button>
                  <button onclick="changeQuest(11)" id="button12" type="button" class="btn btn-secondary">12</button>
                  <button onclick="changeQuest(12)" id="button13" type="button" class="btn btn-secondary">13</button>
                  <button onclick="changeQuest(13)" id="button14" type="button" class="btn btn-secondary">14</button>
                  <button onclick="changeQuest(14)" id="button15" type="button" class="btn btn-secondary">15</button>
                  <button onclick="changeQuest(15)" id="button16" type="button" class="btn btn-secondary">16</button>
                  <button onclick="changeQuest(16)" id="button17" type="button" class="btn btn-secondary">17</button>
                  <button onclick="changeQuest(17)" id="button18" type="button" class="btn btn-secondary">18</button>
                  <button onclick="changeQuest(18)" id="button19" type="button" class="btn btn-secondary">19</button>
                  <button onclick="changeQuest(19)" id="button20" type="button" class="btn btn-secondary">20</button>
                </div>
              </div>
            </div>
`;
}

function highlightSiteButton(i){
    let j = i;
    j = j + 1;
    let site = document.getElementById('button' + j);
    site.classList.remove('btn-secondary');
    site.classList.add('btn-primary');
}

function changeQuest(directIndex){
    tempQuestion = directIndex;
    render();
}

function nextQuest(i){
    tempQuestion = i + 1;
    render();
}

function render(){
    generalKnowledge()
}

function generalKnowledge(){
    let quest = document.getElementById('questCard');
    quest.innerHTML = tempQuest(tempQuestion);
    highlightSiteButton(tempQuestion)
}

function showGeneral(){

}

function checkAnswer(i, answer){
    if (answer == questions[i].rightAnswer){
        /* nextQuest(i); */
        document.getElementById('answer' + answer).classList.add('bg-success');
        document.getElementById('button' + i).classList.add('btnColorGreen');
    }else{
        /* nextQuest(i); */
        document.getElementById('answer' + answer).classList.add('bg-danger');
    }
}