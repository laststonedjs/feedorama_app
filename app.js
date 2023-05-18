const questionDisplay = document.querySelector('#questions');
const answerDisplay = document.querySelector('#answers');

// here wanna inject stuff from the data, 'questions' will be an array
const questions = [
  {
    id: 0,
    text: 'Pick a vacation destination:',
    answers: [
      {
        text: 'New York',
        image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges',
        alt: 'Empire State Building during daytime',
        credit: 'Oliver Niblett'
      },
      {
        text: 'Austin',
        image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges',
        alt: 'Time-lapse photography car lights on bridge',
        credit: 'Carlos Alfonso'
      },
      {
        text: 'Portland',
        image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges',
        alt: 'High-rise buildings',
        credit: 'Elena Kuchko'
      },
      {
        text: 'New Orleans',
        image: 'https://images.unsplash.com/photo-1549965738-e1aaf1168943?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges',
        alt: 'Road with people and house',
        credit: 'João Francisco'
      }
    ]
  },
  {
    id: 1,
    text: "Pick some food:",
    answers: [
      {
        text: "Pizza",
        image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Pepperoni Pizza",
        credit: "Alan Hardman"
      },
      {
        text: "Sandwich",
        image: "https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "ham sandwich on white surface",
        credit: "Eaters Collective"
      },
      {
        text: "Pasta",
        image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Pasta in tomato sauce",
        credit: "Mgg Vitchakorn"
      },
      {
        text: "Hamburger",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "hamburger",
        credit: "sk"
      }
    ]
  },
  {
    id: 2,
    text: "Pick a home:",
    answers: [
      {
        text: "Traditional",
        image: "https://images.unsplash.com/photo-1555040479-c949debe66c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "focus photography of building windows",
        credit: "Burgess Milner"
      },
      {
        text: "Modern",
        image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "low angle view of building",
        credit: "Brandon Giggs"
      },
      {
        text: "House",
        image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "trees beside white house",
        credit: "Phil Hearing"
      },
      {
        text: "Mountains",
        image: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "brown wooden cabin infront of forest",
        credit: "eulauretta"
      }
    ]
  }
]

// empty array for our unanswered q.
const unansweredQuestions = [];

// empty array for our unanswered q.
const chosenAnswers = [];

// create a function to populate questions block
const populateQuestions = () => {
  questions.forEach(question => {
    const titleBlock = document.createElement('div');
    titleBlock.id = question.id;
    titleBlock.classList.add('title-block');
    const titleHeading = document.createElement('h2');
    titleHeading.textContent = question.text;
    titleBlock.append(titleHeading);
    questionDisplay.append(titleBlock);

    // create a div with answers block & made style for 'answer-options'
    const answersBlock = document.createElement('div');
    answersBlock.id = question.id + '-questions';
    answersBlock.classList.add('answer-options');

    // push all of our questions with id in the new 'unansweredQuestions' array
    // looping over each question
    unansweredQuestions.push(question.id);

    // populate 'answer-options' div with data from answers array in the questions object above on the top
    question.answers.forEach(answer => {
      const answerBlock = document.createElement('div');
      answerBlock.classList.add('answer-block');
      answerBlock.addEventListener('click', () => handleClick(question.id, answer.text));
      const answerImage = document.createElement('img');
      answerImage.setAttribute('src', answer.image);
      answerImage.setAttribute('alt', answer.alt);

      // create answerTitle element
      const answerTitle = document.createElement('h3');
      answerTitle.textContent = answer.text;

      // create answerInfo & imageLink elements
      const answerInfo = document.createElement('p');
      const imageLink = document.createElement('a');
      imageLink.setAttribute('href', answer.credit); // 'credit' represents who created this image
      imageLink.textContent = answer.credit;
      const sourceLink = document.createElement('a');
      sourceLink.textContent = 'Unsplash';
      sourceLink.setAttribute('src', 'https://www.unsplash.com');
      // append elements to answerInfo
      answerInfo.append(imageLink, ' to ', sourceLink);

      // here we append to the 'answerBlock' previously created elements from above
      answerBlock.append(answerImage, answerTitle, answerInfo);

      answersBlock.append(answerBlock);
    })

    questionDisplay.append(answersBlock);

  })
}
populateQuestions();

const handleClick = (questionId, chosenAnswer) => {
  if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer);

  const itemToRemove = unansweredQuestions.indexOf(questionId);
  // here we remove something from an array based on it's answer
  if (itemToRemove > -1) {
    unansweredQuestions.splice(itemToRemove, 1);
  }
  console.log(chosenAnswers);
  console.log(unansweredQuestions);

  // disableQuestionBlock(questionId, chosenAnswer)
  // scroll to the top of unanswered questions
  const lowestQuestionId = Math.min(...unansweredQuestions);
  location.href = '#' + lowestQuestionId;

  // a case in which there is nothing in our 'unansweredQuestions' array
  if (!unansweredQuestions.length) {
    // scroll to answer div
    // showAnswer();
  }
}

const showAnswer = () => {


  const answerBlock = document.createElement('div');
  answerBlock.classList.add('result-block');
  const answerTitle = document.createElement('h3');
  answerTitle.textContent = result.text;
  const answerImage = document.createElement('img');
}