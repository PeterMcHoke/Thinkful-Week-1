const responses = [
  {
    question: 'What is the phase where chromosomes line up in mitosis?',
    response: 'Metaphase',
    isCorrect: true,
    isEssayQuestion: false,
  },
  {
    question: 'What anatomical structure connects the stomach to the mouth?',
    response: 'Esophagus',
    isCorrect: true,
    isEssayQuestion: false,
  },
  {
    question: 'What are lysosomes?',
    response: 'A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.',
    isCorrect: true,
    isEssayQuestion: true,
  },
  {
    question: 'True or False: Prostaglandins can only constrict blood vessels.',
    response: 'True',
    isCorrect: false,
    isEssayQuestion: false,
  }
];

function countCorrectQuestions(responses){
  let correct = 0;
  for (let i = 0; i < responses.length;i++){
    if (responses[i].isCorrect){
      correct++;
    }
  }
  return correct;
};

function filterQuestionsByType(responses,questionType) {
  let filteredQuestions = [];
  for (let i =0; i < responses.length;i++) {
    if (responses[i].isEssayQuestion === questionType) {
      filteredQuestions.push(responses[i]);
    }
  }
  return filteredQuestions;
};

function checkForPlagiarism(responses, plag) {
  for(let i = 0; i < responses.length;i++) {
    if (responses[i].isEssayQuestion){
      if (responses[i].response.includes(plag)) {
        return true;
      }
    }
  }
  return false;
};

require('./index.test.js');(void 0);
