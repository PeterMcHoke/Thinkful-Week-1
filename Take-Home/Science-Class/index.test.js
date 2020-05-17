//DO NOT MODIFY THIS FILE
// load and execute the code from index.js in this scope
const fs = require('fs')
let code = fs.readFileSync('./index.js', 'utf8')
eval(code)

const responses = [
  {
    question: 'What is the phase where chromosomes line up in mitosis?',
    response: 'Metaphase',
    isCorrect: true,
    isEssayQuestion: false
  },
  {
    question: 'What anatomical structure connects the stomach to the mouth?',
    response: 'Esophagus',
    isCorrect: true,
    isEssayQuestion: false
  },
  {
    question: 'What are lysosomes?',
    response: 'A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.',
    isCorrect: true,
    isEssayQuestion: true
  },
  {
    question: 'True or False: Prostaglandins can only constrict blood vessels.',
    response: 'True',
    isCorrect: false,
    isEssayQuestion: false
  },
  {
    question: 'What are Prostaglandins?',
    response: 'Prostaglandins are a group of lipids made at sites of tissue damage or infection that are involved in dealing with injury and illness. They control processes such as inflammation, blood flow, the formation of blood clots and the induction of labour.',
    isCorrect: true,
    isEssayQuestion: true
  }
];

const studentResponses = [
  {
    question: 'What is RNA transcription?',
    response: "Transcription is the first of several steps of DNA based gene expression in which a particular segment of DNA is copied into RNA by the enzyme RNA polymerase. Both DNA and RNA are nucleic acids, which use base pairs of nucleotides as a complementary language.",
    isCorrect: true,
    isEssayQuestion: true
  },
  {
    question: 'RNA is double stranded?',
    response: "Yes",
    isCorrect: false,
    isEssayQuestion: false
  },
  {
    question: 'Viruses have RNA or DNA?',
    response: 'RNA',
    isCorrect: true,
    isEssayQuestion: false
  },
  {
    question: 'What do you want to do for spring break?',
    response: 'Get out of the house',
    isCorrect: true,
    isEssayQuestion: true
  },
  {
    question: 'What is the phase where chromosomes line up in mitosis?',
    response: 'Anaphase',
    isCorrect: false,
    isEssayQuestion: false
  },
  {
    question: 'What anatomical structure connects the stomach to the mouth?',
    response: 'Esophagus',
    isCorrect: true,
    isEssayQuestion: false
  },
  {
    question: 'What are lysosomes?',
    response: 'A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.',
    isCorrect: true,
    isEssayQuestion: true
  },
  {
    question: 'True or False: Prostaglandins can only constrict blood vessels.',
    response: 'True',
    isCorrect: false,
    isEssayQuestion: false
  }
];

// Helpers
function isObject(o) {
 return typeof(o) === 'object' && o !== null
}

function deepEquals(a,b) {
  if(isObject(a) && isObject(b)) {
   let keys = Object.keys(a)
   if (keys.length !== Object.keys(b).length) {
     return false
   }
   for (key of keys) {
     if(!deepEquals(a[key], b[key])) {
       return false
     }
   }
   // if all the keys match, they're equal
   return true
 } else {
   return a === b
 }
}

const test = (num, supplement='') => (actual, expected) => {
  if (deepEquals(actual, expected)) {
    console.log(`✅\tPrompt ${num} is passing!`)
  } else {
    console.log(
      `❌\tPrompt ${num} is not passing test. Received`,
      actual,
      `\nbut expected`,
      expected,
      `${supplement ? `\n${supplement}` : ''}`
    )
  }
  console.log('')
}

// Prompt 1 : countCorrectQuestions

test(1, 'Function called like so: countCorrectQuestions(responses)')(
  countCorrectQuestions(responses),
  4
)

test(1, 'Function called like so: countCorrectQuestions(moreResponses)')(
  countCorrectQuestions(studentResponses),
  5
)

test(1, 'Function called like so: countCorrectQuestions(responses)')(
  countCorrectQuestions(responses),
  4
)

test(1, 'Function called like so: countCorrectQuestions([])')(
  countCorrectQuestions([]),
  0
)

// Prompt 2 : filterQuestionsByType

test(2, 'Function called like so: filterQuestionsByType(responses, true)')(
  filterQuestionsByType(responses, true),
  [
    {
      question: 'What are lysosomes?',
      response: 'A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.',
      isCorrect: true,
      isEssayQuestion: true
    },
    {
      question: 'What are Prostaglandins?',
      response: 'Prostaglandins are a group of lipids made at sites of tissue damage or infection that are involved in dealing with injury and illness. They control processes such as inflammation, blood flow, the formation of blood clots and the induction of labour.',
      isCorrect: true,
      isEssayQuestion: true
    }
  ]
)

test(2, 'Function called like so: filterQuestionsByType(responses, false)')(
  filterQuestionsByType(responses, false),
  [
    {
      question: 'What is the phase where chromosomes line up in mitosis?',
      response: 'Metaphase',
      isCorrect: true,
      isEssayQuestion: false
    },
    {
      question: 'What anatomical structure connects the stomach to the mouth?',
      response: 'Esophagus',
      isCorrect: true,
      isEssayQuestion: false
    },
    {
      question: 'True or False: Prostaglandins can only constrict blood vessels.',
      response: 'True',
      isCorrect: false,
      isEssayQuestion: false
    }
  ]
)

// Prompt 3 : checkForPlagiarism

test(3, 'Function called like so: checkForPlagiarism(responses, `spherical vesicles that contain hydrolytic enzymes`)' )(
  checkForPlagiarism(responses, 'spherical vesicles that contain hydrolytic enzymes'),
  true
)

test(3, 'Function called like so: checkForPlagiarism(responses, `lysosomes are cellular organelles`)')(
  checkForPlagiarism(responses, 'lysosomes are cellular organelles'),
  false
)

test(3, `Function called like so: checkForPlagiarism(responses, 'a group of lipids made at sites of tissue damage or infection that are involved in dealing')` )(
  checkForPlagiarism(responses, 'a group of lipids made at sites of tissue damage or infection that are involved in dealing'),
  true
)

test(3, `Function called like so: checkForPlagiarism(responses, 'cause increased inflammation and pain, and impact your overall health')`)(
  checkForPlagiarism(responses, 'cause increased inflammation and pain, and impact your overall health'),
  false
)
