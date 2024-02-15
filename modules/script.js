import { getUserAnswer } from './userAnswers.js';
import { fetchData } from './fetchData.js';
import { data } from './data.js';

document.getElementById('submitButton').addEventListener('click', function() {

    let elementsValue = [];

    document.querySelectorAll('[name="element"]:checked').forEach(e => {
        elementsValue.push(e.value);
    });   

    const $answer = document.querySelector('#answer');
        
    let userAnswer = getUserAnswer(elementsValue);    

    data.push({
        "role": "user",
        "content": userAnswer
    })                            

    const url = `https://open-api.jejucodingcamp.workers.dev/`;

    fetchData(url, data, $answer);
});