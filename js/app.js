'use strict';
//Variables
var buttonElement = document.getElementById('button');
var questionsArray = ['How do you make a list tag?', 'How do you make an unordered list tag?', 'How do you make an ordered list tag?', 'How do you make an description list tag?', 'How do you make a description term tag?', 'How do you make a description definition tag?', 'Which tag defaults to numbered items?', 'Which tag defaults to bold text?'];
var arrayLength = questionsArray.length;
//Functions
var beginQuiz = function(){
  for(var iteration = 0; iteration < arrayLength; iteration++){
    alert(questionsArray[iteration]);
  }
};
var beginQuizRandomizer = function(){
  for(var iteration = 0; iteration < arrayLength; iteration++){
    alert(questionsArray[Math.floor(Math.random() * arrayLength)]);
  }
};
//Processing
// buttonElement.addEventListener('click', beginQuiz);
buttonElement.addEventListener('click', beginQuizRandomizer);

