import questions from questions.js;
import {html_templates};

function render(){
    generalKnowledge()
}

function generalKnowledge(){
    let quest = document.getElementById('questCard');
    quest.innerHTML = showGeneral();
}