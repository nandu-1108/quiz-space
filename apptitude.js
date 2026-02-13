document.addEventListener("DOMContentLoaded", function () {

    const questions = [
        {
            question: "What is 25% of 200?",
            options: ["25", "50", "75", "100"],
            answer: "50"
        },
        {
            question: "If a train travels 60 km in 1 hour, how far in 5 hours?",
            options: ["120 km", "240 km", "300 km", "360 km"],
            answer: "300 km"
        },
        {
            question: "Find the next number: 2, 4, 8, 16, ?",
            options: ["18", "24", "32", "64"],
            answer: "32"
        },
        {
            question: "Choose the synonym of 'Rapid'.",
            options: ["Slow", "Fast", "Late", "Weak"],
            answer: "Fast"
        },
        {
            question: "Choose the antonym of 'Expand'.",
            options: ["Grow", "Increase", "Shrink", "Stretch"],
            answer: "Shrink"
        },
        {
            question: "If you have 3 apples and take away 2, how many do you have?",
            options: ["1", "2", "3", "0"],
            answer: "2"
        }, {
            question: "Find the odd one out.",
            options: ["Apple", "Mango", "Banana", "Carrot"],
            answer: "Carrot"
        },
        {
            question: "17. How many ways can 3 letters be arranged?",
            options: ["3", "6", "9", "12"],
            answer: "6"
        },
        {
            question: "16. How many days are there in a leap year?",
            options: ["364", "365", "366", "367"],
            answer: "366"
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    const letters = ["A", "B", "C", "D"];

    const questionText = document.getElementById("questionText");
    const optionsContainer = document.getElementById("optionsContainer");
    const nextBtn = document.getElementById("nextBtn");
    const result = document.getElementById("result");

    function loadQuestion() {
        const q = questions[currentQuestion];

        // Add Question Number
        questionText.innerText = `Q${currentQuestion + 1}. ${q.question}`;

        optionsContainer.innerHTML = "";
        nextBtn.style.display = "none";

        q.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.className = "btn btn-outline-primary mb-2 w-100 text-start";

            // Add A B C D
            button.innerText = `${letters[index]}. ${option}`;

            button.addEventListener("click", function () {

                const allButtons = optionsContainer.querySelectorAll("button");
                allButtons.forEach(btn => btn.disabled = true);

                if (option === q.answer) {
                    button.classList.remove("btn-outline-primary");
                    button.classList.add("btn-success");
                    score++;
                } else {
                    button.classList.remove("btn-outline-primary");
                    button.classList.add("btn-danger");
                }

                nextBtn.style.display = "block";
            });

            optionsContainer.appendChild(button);
        });
    }

    nextBtn.addEventListener("click", function () {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            questionText.innerText = "Quiz Completed!";
            optionsContainer.innerHTML = "";
            nextBtn.style.display = "none";
            result.innerText = `Your Score: ${score} / ${questions.length}`;
        }
    });

    loadQuestion();

});
