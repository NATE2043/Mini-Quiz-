const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log('choices');


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        questions: "What motorcycle did the Terminator ride in the movie Terminator 2",
        choice1: "BMW",
        choice2: "INDIAN",
        choice3: "TOYOTA",
        choice4: "HARLEY DAVIDSON",
        answer: 4
    },
    {
        questions: "What motorcycle company coined the phrase (you meet the nicest people on a ??)",
        choice1: "Toyota yaris",
        choice2: "Hilman Hunter",
        choice3: "Honda",
        choice4: "Triumph",
        answer: 3
        },
        
    {
        questions: "What motorcycle company had the initials of HD",
        choice1: "Honda dealership",
        choice2: "Harley Davidson",
        choice3: "Hilman Division",
        choice4: "Hillside Adventrue Drivers",
        answer: 2
    },
        {
        questions: "What celebrity had a 2012 Triumph Bonneville T100 Special Edition named after him?",
        choice1: "Jonny Vagus",
        choice2: "Marlon Brando",
        choice3: "Steve McQueen",
        choice4: "Johnny Deep",
        answer: 3
    },
    {
        questions: "Who is the world's longest continuous production motorcycle manufacturer.",
        choice1: "Harley Davidson",
        choice2: "BMW",
        choice3: "Suzuki",
        choice4: "Triumph",
        answer: 4
        },

        {
            questions: "Name the model of this motorcycle",
            image:"/assets/images/bmw.jpg",
            choice1: "BMW r1200gs",
            choice2: "BMW S1000rr",
            choice3: "BMW r1250gsa",
            choice4: "BMW r1250gs",
            answer: 4
            },


]

const correct_bonus = 10;
const max_question = 6;

startGame =() => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log("availableQuestions");
    getNewQuestion ();
}

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestions.question;

}

startGame ();