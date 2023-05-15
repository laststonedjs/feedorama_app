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
        text: "Austin",
        image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Time-lapse photography car lights on bridge",
        credit: "Carlos Alfonso"
      },
      {
        text: "Portland",
        image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "High-rise buildings",
        credit: "Elena Kuchko"
      },
      {
        text: "New Orleans",
        image: "https://images.unsplash.com/photo-1549965738-e1aaf1168943?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Road with people and house",
        credit: "João Francisco"
      }
    ]
  },
  {

  },
  {

  },
]