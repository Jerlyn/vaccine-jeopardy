// Game data
const categories = [
    "Vaccine History",
    "Types of Vaccines",
    "Immune Response",
    "Vaccination Benefits",
    "Global Health"
];

const questions = [
    // Vaccine History
    [
        {
            value: 200,
            question: "This English physician is credited with creating the first vaccine in 1796",
            answers: [
                "Edward Jenner",
                "Louis Pasteur",
                "Jonas Salk",
                "Alexander Fleming"
            ],
            correctAnswer: 0,
            explanation: "Edward Jenner created the first vaccine against smallpox in 1796."
        },
        {
            value: 400,
            question: "This disease was officially declared eradicated in 1980 due to successful vaccination campaigns",
            answers: [
                "Polio",
                "Measles",
                "Smallpox",
                "Tuberculosis"
            ],
            correctAnswer: 2,
            explanation: "Smallpox was declared eradicated by the WHO in 1980 after a global vaccination campaign."
        },
        {
            value: 600,
            question: "This scientist developed the first rabies vaccine in 1885",
            answers: [
                "Alexander Fleming",
                "Louis Pasteur",
                "Robert Koch",
                "Paul Ehrlich"
            ],
            correctAnswer: 1,
            explanation: "Louis Pasteur developed the first rabies vaccine in 1885."
        },
        {
            value: 800,
            question: "In what decade was the first influenza vaccine approved for civilian use in the United States?",
            answers: [
                "1920s",
                "1930s",
                "1940s",
                "1950s"
            ],
            correctAnswer: 2,
            explanation: "The first influenza vaccine was approved for civilian use in the United States in the 1940s."
        },
        {
            value: 1000,
            question: "This organization launched the Expanded Programme on Immunization (EPI) in 1974",
            answers: [
                "UNICEF",
                "World Health Organization (WHO)",
                "Centers for Disease Control (CDC)",
                "Médecins Sans Frontières"
            ],
            correctAnswer: 1,
            explanation: "The World Health Organization (WHO) launched the Expanded Programme on Immunization in 1974."
        }
    ],
    // Types of Vaccines
    [
        {
            value: 200,
            question: "This type of vaccine contains weakened versions of the living microbe",
            answers: [
                "Inactivated vaccine",
                "Live attenuated vaccine",
                "Toxoid vaccine",
                "mRNA vaccine"
            ],
            correctAnswer: 1,
            explanation: "Live attenuated vaccines contain a weakened form of the living microbe."
        },
        {
            value: 400,
            question: "This type of vaccine uses a harmless piece of a protein or genetic material instead of the entire germ",
            answers: [
                "Subunit vaccine",
                "Inactivated vaccine",
                "Live attenuated vaccine",
                "Toxoid vaccine"
            ],
            correctAnswer: 0,
            explanation: "Subunit vaccines include only specific pieces of the germ, like its protein, sugar, or capsid."
        },
        {
            value: 600,
            question: "mRNA vaccines work by teaching cells to:",
            answers: [
                "Produce weakened viruses",
                "Recognize the pathogen directly",
                "Make proteins that trigger immune response",
                "Create antibodies without protein production"
            ],
            correctAnswer: 2,
            explanation: "mRNA vaccines teach our cells to make a protein that triggers an immune response."
        },
        {
            value: 800,
            question: "Which of these is NOT a common type of vaccine?",
            answers: [
                "Toxoid vaccines",
                "Conjugate vaccines",
                "Receptor vaccines",
                "Viral vector vaccines"
            ],
            correctAnswer: 2,
            explanation: "'Receptor vaccines' is not a common type of vaccine. The others are all recognized vaccine types."
        },
        {
            value: 1000,
            question: "This type of vaccine uses an unrelated, harmless virus to deliver genetic material of the target pathogen",
            answers: [
                "Viral vector vaccine",
                "DNA vaccine",
                "Recombinant vaccine",
                "Inactivated vaccine"
            ],
            correctAnswer: 0,
            explanation: "Viral vector vaccines use a harmless virus to deliver genetic material from the disease-causing virus."
        }
    ],
    // Immune Response
    [
        {
            value: 200,
            question: "These Y-shaped proteins are produced by the immune system to identify and neutralize pathogens",
            answers: [
                "Antigens",
                "Antibodies",
                "T cells",
                "Macrophages"
            ],
            correctAnswer: 1,
            explanation: "Antibodies are Y-shaped proteins produced by B cells that help identify and neutralize pathogens."
        },
        {
            value: 400,
            question: "This type of immunity occurs when antibodies are transferred from one individual to another",
            answers: [
                "Active immunity",
                "Passive immunity",
                "Natural immunity",
                "Herd immunity"
            ],
            correctAnswer: 1,
            explanation: "Passive immunity occurs when antibodies are transferred from one individual to another, such as from mother to infant."
        },
        {
            value: 600,
            question: "These are the main types of lymphocytes involved in adaptive immunity",
            answers: [
                "Macrophages and neutrophils",
                "B cells and T cells",
                "NK cells and dendritic cells",
                "Basophils and eosinophils"
            ],
            correctAnswer: 1,
            explanation: "B cells and T cells are the main lymphocytes of adaptive immunity, responsible for antibody production and cell-mediated immunity."
        },
        {
            value: 800,
            question: "This term describes the protection provided to everyone when a large portion of a population becomes immune",
            answers: [
                "Community protection",
                "Population immunity",
                "Herd immunity",
                "Group resistance"
            ],
            correctAnswer: 2,
            explanation: "Herd immunity occurs when a large portion of a population becomes immune, making the spread of disease unlikely."
        },
        {
            value: 1000,
            question: "These cells 'remember' previously encountered pathogens and allow for faster antibody production upon reinfection",
            answers: [
                "Memory B cells",
                "Phagocytes",
                "Mast cells",
                "Helper T cells"
            ],
            correctAnswer: 0,
            explanation: "Memory B cells remember previously encountered pathogens and enable rapid antibody production if the pathogen is encountered again."
        }
    ],
    // Vaccination Benefits
    [
        {
            value: 200,
            question: "Vaccines help create this type of protection where enough people are immune to prevent disease spread",
            answers: [
                "Natural immunity",
                "Passive immunity",
                "Herd immunity",
                "Total immunity"
            ],
            correctAnswer: 2,
            explanation: "Vaccines help create herd immunity, which protects those who cannot be vaccinated."
        },
        {
            value: 400,
            question: "According to the WHO, vaccines prevent this many deaths worldwide each year",
            answers: [
                "1-2 million",
                "2-3 million",
                "3-4 million",
                "4-5 million"
            ],
            correctAnswer: 1,
            explanation: "According to the WHO, vaccines prevent 2-3 million deaths worldwide each year."
        },
        {
            value: 600,
            question: "This economic benefit occurs when vaccination programs help reduce healthcare costs",
            answers: [
                "Cost deferment",
                "Cost avoidance",
                "Cost redistribution",
                "Cost cancellation"
            ],
            correctAnswer: 1,
            explanation: "Cost avoidance is an economic benefit where vaccination programs help reduce healthcare costs by preventing disease."
        },
        {
            value: 800,
            question: "Vaccination has helped reduce the global incidence of this disease by 99% since 1988",
            answers: [
                "Measles",
                "Tuberculosis",
                "Polio",
                "Diphtheria"
            ],
            correctAnswer: 2,
            explanation: "Vaccination has helped reduce the global incidence of polio by 99% since 1988."
        },
        {
            value: 1000,
            question: "Beyond preventing disease, this term describes how vaccines help improve overall health by reducing antimicrobial resistance",
            answers: [
                "Secondary prevention",
                "Collateral benefit",
                "Resistance reduction",
                "Health externality"
            ],
            correctAnswer: 1,
            explanation: "Collateral benefit describes additional positive effects of vaccination beyond direct disease prevention."
        }
    ],
    // Global Health
    [
        {
            value: 200,
            question: "This is the minimum percentage of a population that needs to be immune to achieve herd immunity for measles",
            answers: [
                "70-75%",
                "80-85%",
                "90-95%",
                "60-65%"
            ],
            correctAnswer: 2,
            explanation: "Measles requires 90-95% immunity in a population to achieve herd immunity due to its high contagiousness."
        },
        {
            value: 400,
            question: "This global alliance was formed in 2000 to improve access to vaccines in developing countries",
            answers: [
                "Global Vaccine Initiative",
                "Gavi, the Vaccine Alliance",
                "United Vaccination Program",
                "International Immunization Fund"
            ],
            correctAnswer: 1,
            explanation: "Gavi, the Vaccine Alliance was formed in 2000 to improve access to vaccines in developing countries."
        },
        {
            value: 600,
            question: "This term describes inequitable access to vaccines across different regions and populations",
            answers: [
                "Vaccine disparity",
                "Immunization divide",
                "Vaccine apartheid",
                "Prophylactic inequity"
            ],
            correctAnswer: 2,
            explanation: "Vaccine apartheid describes the inequitable distribution of vaccines between wealthier and poorer nations."
        },
        {
            value: 800,
            question: "This initiative aims to provide equitable access to COVID-19 vaccines globally",
            answers: [
                "COVAX",
                "WHO Vaccine Program",
                "Global Shot",
                "Pandemic Shield"
            ],
            correctAnswer: 0,
            explanation: "COVAX is an initiative aimed at providing equitable access to COVID-19 vaccines globally."
        },
        {
            value: 1000,
            question: "This ethical concept is debated when considering mandatory vaccination policies",
            answers: [
                "Autonomy vs. utility",
                "Individualism vs. collectivism",
                "Liberty vs. responsibility",
                "All of the above"
            ],
            correctAnswer: 3,
            explanation: "All of these ethical concepts are debated when considering mandatory vaccination policies."
        }
    ]
];

// Game state
let gameState = {
    score: 0,
    questionsTaken: new Set(),
    gameStarted: false,
    gameEnded: false,
    leaderboard: []
};

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const instructionsScreen = document.getElementById('instructions-screen');
const gameScreen = document.getElementById('game-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const leaderboardScreen = document.getElementById('leaderboard-screen');

const gameBoard = document.getElementById('game-board');
const questionModal = document.getElementById('question-modal');
const questionCategory = document.getElementById('question-category');
const questionValue = document.getElementById('question-value');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers');
const timerElement = document.getElementById('timer');
const resultFeedback = document.getElementById('result-feedback');

const currentScoreElement = document.getElementById('current-score');
const finalScoreElement = document.getElementById('final-score');
const playerNameInput = document.getElementById('player-name-input');
const saveScoreBtn = document.getElementById('save-score-btn');
const leaderboardList = document.getElementById('leaderboard-list');

// Navigation buttons
const startInstructionsBtn = document.getElementById('start-instructions-btn');
const showLeaderboardBtn = document.getElementById('show-leaderboard-btn');
const startGameFromInstructionsBtn = document.getElementById('start-game-from-instructions-btn');
const backToWelcomeFromInstructionsBtn = document.getElementById('back-to-welcome-from-instructions-btn');
const newGameBtn = document.getElementById('new-game-btn');
const showLeaderboardDuringGameBtn = document.getElementById('show-leaderboard-during-game-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const showLeaderboardAfterGameBtn = document.getElementById('show-leaderboard-after-game-btn');
const backFromLeaderboardBtn = document.getElementById('back-from-leaderboard-btn');

// Share buttons
const shareTweetBtn = document.getElementById('share-twitter');
const shareFacebookBtn = document.getElementById('share-facebook');
const shareCopyBtn = document.getElementById('share-copy');

const srAnnounce = document.getElementById('sr-announce');

// Timer variables
let timerInterval;
let timeLeft;

// Current question being displayed
let currentQuestion = null;
let previousScreen = null;

// Initialize the game
function initGame() {
    // Set up event listeners for navigation
    startInstructionsBtn.addEventListener('click', showInstructions);
    showLeaderboardBtn.addEventListener('click', () => {
        previousScreen = welcomeScreen;
        showLeaderboard();
    });
    startGameFromInstructionsBtn.addEventListener('click', startGame);
    backToWelcomeFromInstructionsBtn.addEventListener('click', showWelcome);
    const startGameBtn = document.getElementById('start-game-btn');
    if (startGameBtn) {
        startGameBtn.addEventListener('click', startGame);
    }
    newGameBtn.addEventListener('click', resetGame);
    showLeaderboardDuringGameBtn.addEventListener('click', () => {
        previousScreen = gameScreen;
        showLeaderboard();
    });
    playAgainBtn.addEventListener('click', resetGame);
    showLeaderboardAfterGameBtn.addEventListener('click', () => {
        previousScreen = gameOverScreen;
        showLeaderboard();
    });
    backFromLeaderboardBtn.addEventListener('click', () => {
        if (previousScreen) {
            showScreen(previousScreen);
        } else {
            showWelcome();
        }
    });
    
    // Set up other event listeners
    saveScoreBtn.addEventListener('click', saveScore);
    playerNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') saveScore();
    });
    
    // Share buttons
    shareTweetBtn.addEventListener('click', shareOnTwitter);
    shareFacebookBtn.addEventListener('click', shareOnFacebook);
    shareCopyBtn.addEventListener('click', copyShareLink);

    // Load saved leaderboard
    loadLeaderboard();
    updateLeaderboard();
}

// Navigation functions
function showScreen(screen) {
    // Hide all screens
    welcomeScreen.classList.remove('active');
    instructionsScreen.classList.remove('active');
    gameScreen.classList.remove('active');
    gameOverScreen.classList.remove('active');
    leaderboardScreen.classList.remove('active');
    
    // Show the requested screen
    screen.classList.add('active');
    
    // Announce screen change for screen readers
    const heading = screen.querySelector('h2');
    if (heading) {
        announceToScreenReader(`${heading.textContent} screen`);
    } else {
        announceToScreenReader('Screen changed');
    }
}

function showWelcome() {
    showScreen(welcomeScreen);
}

function showInstructions() {
    showScreen(instructionsScreen);
}

function showLeaderboard() {
    updateLeaderboard();
    showScreen(leaderboardScreen);
}

// Start the game
function startGame() {
    gameState.gameStarted = true;
    gameState.gameEnded = false;
    gameState.score = 0;
    gameState.questionsTaken = new Set();
    
    // Show game screen
    showScreen(gameScreen);
    
    // Update score display
    updateScoreDisplay();
    
    // Create the game board
    createGameBoard();
    
    // Announce game start
    announceToScreenReader('The game has started. Choose a category and value to begin.');
}

// Create the game board with randomized questions
function createGameBoard() {
    gameBoard.innerHTML = '';
    
    // Define the standard Jeopardy values (in order)
    const valueOrder = [200, 400, 600, 800, 1000];
    
    // Randomize questions for each category while maintaining value order
    const randomizedQuestions = [];
    for (let i = 0; i < categories.length; i++) {
        // Create a shuffled array of indices (0-4)
        const shuffledIndices = [0, 1, 2, 3, 4].sort(() => Math.random() - 0.5);
        
        // Create a new array for this category
        randomizedQuestions[i] = [];
        
        // Place questions in the proper value positions
        for (let j = 0; j < 5; j++) {
            const originalIndex = shuffledIndices[j];
            randomizedQuestions[i][j] = questions[i][originalIndex];
            // Ensure the value matches the position
            randomizedQuestions[i][j].value = valueOrder[j];
        }
    }
    
    // Add categories
    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'category glass';
        categoryElement.textContent = category;
        categoryElement.setAttribute('aria-label', `Category: ${category}`);
        gameBoard.appendChild(categoryElement);
    });
    
    // Add questions in the standard Jeopardy order
    for (let i = 0; i < 5; i++) { // 5 questions per category (in increasing value order)
        for (let j = 0; j < categories.length; j++) {
            const questionData = randomizedQuestions[j][i];
            const questionElement = document.createElement('div');
            questionElement.className = 'question-card glass';
            questionElement.textContent = '$' + valueOrder[i];
            questionElement.setAttribute('tabindex', '0');
            questionElement.setAttribute('role', 'button');
            questionElement.setAttribute('aria-label', `${categories[j]} for $${valueOrder[i]}`);
            
            // Store question data
            questionElement.dataset.category = j;
            questionElement.dataset.value = valueOrder[i];
            questionElement.dataset.questionIndex = i;
            
            // Add click event
            questionElement.addEventListener('click', () => selectQuestion(j, i, valueOrder[i]));
            questionElement.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectQuestion(j, i, valueOrder[i]);
                }
            });
            
            gameBoard.appendChild(questionElement);
        }
    }
}

// Select a question
function selectQuestion(categoryIndex, questionIndex, value) {
    const questionId = `${categoryIndex}-${questionIndex}`;
    
    // Check if question already taken
    if (gameState.questionsTaken.has(questionId)) {
        return;
    }
    
    // Mark question as taken
    gameState.questionsTaken.add(questionId);
    
    // Update the question card visually
    const questionCards = document.querySelectorAll('.question-card');
    for (const card of questionCards) {
        if (card.dataset.category == categoryIndex && card.dataset.questionIndex == questionIndex) {
            card.setAttribute('disabled', 'true');
            card.setAttribute('aria-disabled', 'true');
            card.style.cursor = 'default';
            card.removeEventListener('click', () => selectQuestion(categoryIndex, questionIndex, value));
            break;
        }
    }
    
    // Get the question
    currentQuestion = questions[categoryIndex][questionIndex];
    
    // Show modal with question
    questionCategory.textContent = categories[categoryIndex];
    questionValue.textContent = '$' + value;
    questionText.textContent = currentQuestion.question;
    
    // Create answer buttons
    answersContainer.innerHTML = '';
    currentQuestion.answers.forEach((answer, index) => {
        const answerBtn = document.createElement('button');
        answerBtn.className = 'answer-btn';
        answerBtn.textContent = answer;
        answerBtn.setAttribute('data-index', index);
        answerBtn.addEventListener('click', () => checkAnswer(index));
        answersContainer.appendChild(answerBtn);
    });
    
    // Reset result feedback
    resultFeedback.textContent = '';
    
    // Show modal
    toggleModal(questionModal, true);
    
    // Start timer
    startTimer();
    
    // Announce for screen readers
    announceToScreenReader(`Question for ${categories[categoryIndex]} worth $${value}. ${currentQuestion.question}`);
}

// Start the question timer
function startTimer() {
    timeLeft = 30;
    timerElement.textContent = timeLeft;
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        
        if (timeLeft <= 5 && timeLeft > 0) {
            // Announce time running out for screen readers
            if (timeLeft === 5) {
                announceToScreenReader('5 seconds remaining');
            }
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeOut();
        }
    }, 1000);
}

// Handle time out
function timeOut() {
    clearInterval(timerInterval);
    
    // Disable answer buttons
    const answerBtns = document.querySelectorAll('.answer-btn');
    answerBtns.forEach(btn => {
        btn.disabled = true;
    });
    
    // Highlight correct answer
    const correctBtn = document.querySelector(`.answer-btn[data-index="${currentQuestion.correctAnswer}"]`);
    if (correctBtn) {
        correctBtn.classList.add('correct');
    }
    
    // Show feedback
    resultFeedback.textContent = `Time's up! The correct answer is: ${currentQuestion.answers[currentQuestion.correctAnswer]}`;
    resultFeedback.innerHTML += `<p>${currentQuestion.explanation}</p>`;
    
    // Deduct points
    updateScore(-currentQuestion.value);
    
    // Announce for screen readers
    announceToScreenReader(`Time's up! The correct answer is: ${currentQuestion.answers[currentQuestion.correctAnswer]}. ${currentQuestion.explanation}`);
    
    // Close modal after delay
    setTimeout(() => {
        toggleModal(questionModal, false);
        checkGameOver();
    }, 3000);
}

// Check the player's answer
function checkAnswer(answerIndex) {
    clearInterval(timerInterval);
    
    // Disable all answer buttons
    const answerBtns = document.querySelectorAll('.answer-btn');
    answerBtns.forEach(btn => {
        btn.disabled = true;
    });
    
    // Get the selected answer button
    const selectedBtn = document.querySelector(`.answer-btn[data-index="${answerIndex}"]`);
    
    // Check if correct
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    // Update UI
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        resultFeedback.textContent = `Correct! You've earned $${currentQuestion.value}.`;
        updateScore(currentQuestion.value);
        announceToScreenReader(`Correct! You've earned $${currentQuestion.value}. ${currentQuestion.explanation}`);
    } else {
        selectedBtn.classList.add('incorrect');
        const correctBtn = document.querySelector(`.answer-btn[data-index="${currentQuestion.correctAnswer}"]`);
        correctBtn.classList.add('correct');
        resultFeedback.textContent = `Incorrect. The correct answer is: ${currentQuestion.answers[currentQuestion.correctAnswer]}`;
        updateScore(-currentQuestion.value);
        announceToScreenReader(`Incorrect. The correct answer is: ${currentQuestion.answers[currentQuestion.correctAnswer]}. ${currentQuestion.explanation}`);
    }
    
    // Add explanation
    resultFeedback.innerHTML += `<p>${currentQuestion.explanation}</p>`;
    
    // Close modal after delay
    setTimeout(() => {
        toggleModal(questionModal, false);
        checkGameOver();
    }, 3000);
}

// Update score
function updateScore(points) {
    gameState.score += points;
    updateScoreDisplay();
}

// Update the score display
function updateScoreDisplay() {
    currentScoreElement.textContent = '$' + gameState.score;
}

// Check if the game is over
function checkGameOver() {
    if (gameState.questionsTaken.size === categories.length * 5) {
        endGame();
    }
}

// End the game
function endGame() {
    gameState.gameEnded = true;
    
    // Update final score display
    finalScoreElement.textContent = '$' + gameState.score;
    finalScoreElement.style.color = 'white'; // Ensure white color
    
    // Show game over screen
    showScreen(gameOverScreen);
    
    // Focus on the name input
    setTimeout(() => {
        playerNameInput.focus();
    }, 100);
    
    // Announce game over for screen readers
    announceToScreenReader(`Game Over! Your final score is ${gameState.score}. Enter your name to save your score.`);
}

// Save score to leaderboard
function saveScore() {
    const playerName = playerNameInput.value.trim();
    if (playerName) {
        // Add to leaderboard
        gameState.leaderboard.push({
            name: playerName,
            score: gameState.score,
            date: new Date().toLocaleDateString()
        });
        
        // Sort leaderboard by score (highest first)
        gameState.leaderboard.sort((a, b) => b.score - a.score);
        
        // Keep only top 10 scores
        if (gameState.leaderboard.length > 10) {
            gameState.leaderboard = gameState.leaderboard.slice(0, 10);
        }
        
        // Save leaderboard
        saveLeaderboard();
        
        // Update UI to show success message but keep the buttons visible
        const nameEntry = document.getElementById('name-entry');
        nameEntry.innerHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle" style="color: white !important; font-size: 3rem; margin-bottom: 1rem;" aria-hidden="true"></i>
                <p>Score saved successfully!</p>
            </div>
        `;
        
        // Announce score saved
        announceToScreenReader(`Score saved! You are now on the leaderboard.`);
    } else {
        alert('Please enter your name to save your score.');
    }
}

// Reset the game
function resetGame() {
    // Show welcome screen
    showWelcome();
    
    // Clear game state for a new game
    gameState.score = 0;
    gameState.questionsTaken = new Set();
    gameState.gameStarted = false;
    gameState.gameEnded = false;
    
    // Clear name input
    playerNameInput.value = '';
    
    // Announce game reset
    announceToScreenReader('Game reset. Ready to start a new game.');
}

// Toggle modal display
function toggleModal(modal, show) {
    if (show) {
        modal.classList.add('active');
        
        // Focus on first focusable element in modal
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusableElements.length > 0) {
            setTimeout(() => {
                focusableElements[0].focus();
            }, 100);
        }
    } else {
        modal.classList.remove('active');
        
        // Return focus to the board
        setTimeout(() => {
            const gameHeader = document.querySelector('.score-display');
            if (gameHeader) {
                gameHeader.focus();
            }
        }, 100);
    }
}

// Save leaderboard to localStorage
function saveLeaderboard() {
    try {
        localStorage.setItem('vaccineJeopardyLeaderboard', JSON.stringify(gameState.leaderboard));
    } catch (error) {
        console.error('Error saving leaderboard:', error);
    }
}

// Load leaderboard from localStorage
function loadLeaderboard() {
    try {
        const savedLeaderboard = localStorage.getItem('vaccineJeopardyLeaderboard');
        if (savedLeaderboard) {
            gameState.leaderboard = JSON.parse(savedLeaderboard);
        }
    } catch (error) {
        console.error('Error loading leaderboard:', error);
        gameState.leaderboard = [];
    }
}

// Update the leaderboard display
function updateLeaderboard() {
    leaderboardList.innerHTML = '';
    
    // Sort leaderboard by score (highest first)
    gameState.leaderboard.sort((a, b) => b.score - a.score);
    
    // Display scores
    gameState.leaderboard.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'leaderboard-item';
        
        // Add trophy icon to top position
        let trophyIcon = '';
        if (index === 0) {
            trophyIcon = '<i class="fas fa-trophy top-trophy" aria-hidden="true"></i>';
        }
        
        // Format score with class for negative values
        const scoreClass = entry.score < 0 ? 'leaderboard-score negative' : 'leaderboard-score';
        
        listItem.innerHTML = `
            <div style="display: flex; align-items: center;">
                <span class="leaderboard-rank">${index + 1}</span>
                <span class="leaderboard-name">${trophyIcon}${entry.name}</span>
            </div>
            <div class="${scoreClass}">$${entry.score}</div>
        `;
        leaderboardList.appendChild(listItem);
    });
    
    // If no scores, show message
    if (gameState.leaderboard.length === 0) {
        const listItem = document.createElement('li');
        listItem.className = 'leaderboard-empty';
        listItem.innerHTML = '<i class="fas fa-chart-line" aria-hidden="true"></i> No scores yet. Be the first!';
        leaderboardList.appendChild(listItem);
    }
}

// Share functions
function shareOnTwitter() {
    const text = `I scored $${gameState.score} in Vaccine Jeopardy! Can you beat my score?`;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

function shareOnFacebook() {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function copyShareLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard!');
        announceToScreenReader('Link copied to clipboard');
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

// Accessibility helper to announce messages to screen readers
function announceToScreenReader(message) {
    srAnnounce.textContent = message;
}

// Initialize the game when the page loads
window.addEventListener('DOMContentLoaded', initGame);
