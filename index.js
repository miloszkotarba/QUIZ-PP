// ==========================================
// BAZA PYTAŃ (JSON)
// Format: question (string), options (tablica 4 stringów), answer (indeks poprawnej opcji 0-3)
// ==========================================
const questions = [
  {
    question:
      "Jaką wartość zwróci wyrażenie: head (tail [[1,2],[3,4,5],[6]]) ?",
    options: ["[3,4,5]", "[1,2]", "1", "[6]"],
    answer: 0,
  },
  {
    question: "Jaki jest wynik wywołania: sum $ map (*2) [1,2,5] ?",
    options: ["16", "[2,4,10]", "24", "8"],
    answer: 0,
  },
  {
    question: "Co będzie wynikiem wyrażenia: [1..5] !! 3 ?",
    options: ["3", "4", "5", "[4]"],
    answer: 1,
  },
  {
    question: "Co otrzymamy z: take 3 (drop 2 [1..10]) ?",
    options: ["[1,2,3]", "[3,4,5]", "[4,5,6]", "[2,3,4]"],
    answer: 1,
  },
  {
    question: "Jak zadziała: reverse (take 2 (reverse [1..4])) ?",
    options: ["[4,3]", "[1,2]", "[3,4]", "[2,1]"],
    answer: 2,
  },
  {
    question: "Jaki jest wynik: length (filter even [1..10]) ?",
    options: ["4", "5", "10", "[2,4,6,8,10]"],
    answer: 1,
  },
  {
    question: "Co zwróci: zip [1,2,3] ['a','b'] ?",
    options: [
      "[(1,'a'),(2,'b'),(3,'c')]",
      "[(1,'a'),(2,'b')]",
      "([1,2], ['a','b'])",
      "[(1,'a'),(2,'b'),(3,' ')]",
    ],
    answer: 1,
  },
  {
    question: "Co otrzymamy wywołując: fst (snd (1, (2, 3))) ?",
    options: ["1", "2", "3", "(2,3)"],
    answer: 1,
  },
  {
    question: "Jaki będzie wynik: concat [[1],[2,3],[]] ?",
    options: ["[[1,2,3]]", "[1,2,3,[]]", "[1,2,3]", "[1,[2,3]]"],
    answer: 2,
  },
  {
    question: "Co zwróci: replicate 3 [1] ?",
    options: ["[1,1,1]", "[3,1]", "[[1],[1],[1]]", "[[3]]"],
    answer: 2,
  },
  {
    question: "Jaki jest wynik: product [2,3,4] ?",
    options: ["9", "24", "12", "[2,3,4]"],
    answer: 1,
  },
  {
    question: "Co zwróci: elem 3 [1,2,4,5] ?",
    options: ["True", "False", "3", "0"],
    answer: 1,
  },
  {
    question: "Jaki będzie wynik: minimum [5,1,9,2] ?",
    options: ["5", "9", "2", "1"],
    answer: 3,
  },
  {
    question: "Co otrzymamy z generatora: [x*2 | x <- [1..3]] ?",
    options: ["[2,4,6]", "[1,2,3]", "[1,4,9]", "[2,4]"],
    answer: 0,
  },
  {
    question: "Jaki jest wynik: [x | x <- [1..5], odd x] ?",
    options: ["[2,4]", "[1,3,5]", "[1,2,3,4,5]", "[1,5]"],
    answer: 1,
  },
  {
    question: "Co da złożenie: map (+1) (filter even [1,2,3,4]) ?",
    options: ["[2,4]", "[1,3]", "[3,5]", "[2,3,4,5]"],
    answer: 2,
  },
  {
    question: 'Co zwróci wyrażenie: head (reverse "abc") ?',
    options: ['"c"', "'a'", "'c'", '"a"'],
    answer: 2,
  },
  {
    question: 'Jak zadziała: tail (init "abcd") ?',
    options: ['"bc"', '"ab"', '"cd"', '"b"'],
    answer: 0,
  },
  {
    question: "Jaki będzie wynik: sum (take 0 [1..10]) ?",
    options: ["1", "10", "0", "[]"],
    answer: 2,
  },
  {
    question: "Co zwróci wyrażenie: last (take 10 [1..]) ?",
    options: ["1", "9", "10", "11"],
    answer: 2,
  },
  {
    question: 'Jaki jest wynik: ("abc" ++ "def") !! 4 ?',
    options: ["'d'", "'e'", "'f'", '"e"'],
    answer: 1,
  },
  {
    question: "Co otrzymamy z porównania: ['a', 'b'] == \"ab\" ?",
    options: ["True", "False", "['a','b']", '"ab"'],
    answer: 0,
  },
  {
    question: "Co zwróci: cycle [1] !! 100 ?",
    options: ["100", "0", "1", "[1]"],
    answer: 2,
  },
  {
    question: "Jak zadziała: take 2 (repeat 5) ?",
    options: ["[2,5]", "[5,2]", "[5,5]", "[2,2,2,2,2]"],
    answer: 2,
  },
  {
    question: "Jaki jest wynik ewaluacji: [1,3..10] ?",
    options: [
      "[1,3,5,7,9]",
      "[1,3,6,10]",
      "[1,2,3,4,5,6,7,8,9,10]",
      "[1,3,5,7,9,11]",
    ],
    answer: 0,
  },
  {
    question: "Co da wyrażenie: [10,9..1] ?",
    options: ["[]", "[10,9,8,7,6,5,4,3,2,1]", "[1..10]", "[10,1]"],
    answer: 1,
  },
  {
    question: 'Co zwróci: length (zip [1..10] "abc") ?',
    options: ["10", "3", "13", "0"],
    answer: 1,
  },
  {
    question: "Jaki będzie wynik: unzip [(1,'a'), (2,'b')] ?",
    options: [
      '([1,2], "ab")',
      "[(1,2), ('a','b')]",
      "([1,'a'], [2,'b'])",
      '([1,2], ["a","b"])',
    ],
    answer: 0,
  },
  {
    question: "Co otrzymamy z: map fst [(1,2), (3,4)] ?",
    options: ["[2,4]", "[1,3]", "[(1,3)]", "[1,2]"],
    answer: 1,
  },
  {
    question: "Jaki jest wynik: sum [x | x <- [1..10], x `mod` 3 == 0] ?",
    options: ["18", "9", "30", "12"],
    answer: 0,
  },
  {
    question: "Co zwróci ewaluacja: product (take 3 [2,4..]) ?",
    options: ["24", "48", "8", "12"],
    answer: 1,
  },
  {
    question: "Jaki będzie wynik: head (drop 5 [0..]) ?",
    options: ["4", "5", "6", "0"],
    answer: 1,
  },
  {
    question: "Co otrzymamy wywołując: tail [1] ?",
    options: ["1", "0", "[]", "[1]"],
    answer: 2,
  },
  {
    question: "Co zwróci wyrażenie: last [1] ?",
    options: ["[]", "0", "[1]", "1"],
    answer: 3,
  },
  {
    question: 'Jaki jest wynik: init "a" ?',
    options: ['""', '"a"', "'a'", "['a']"],
    answer: 0,
  },
  {
    question: "Co otrzymamy z: null [] ?",
    options: ["True", "False", "[]", "0"],
    answer: 0,
  },
  {
    question: "Jak zadziała: null [[]] ?",
    options: ["True", "False", "[]", "0"],
    answer: 1,
  },
  {
    question: "Jaki jest wynik: [x^2 | x <- [1..3]] ?",
    options: ["[2,4,6]", "[1,4,9]", "[1,2,3]", "[1,8,27]"],
    answer: 1,
  },
  {
    question: "Co zwróci: map (*10) [1,2] ?",
    options: ["[10,20]", "[1,20]", "[10,2]", "[11,12]"],
    answer: 0,
  },
  {
    question: "Jaki będzie wynik: filter (>5) [1..10] ?",
    options: ["[5,6,7,8,9,10]", "[6,7,8,9,10]", "[1,2,3,4]", "[1,2,3,4,5]"],
    answer: 1,
  },

  // --- POZIOM: MEGA TRUDNE (Złożone struktury logiczne) ---
  {
    question: "Jaki będzie wynik: sum (take 3 (filter odd [1..])) ?",
    options: ["6", "4", "9", "12"],
    answer: 2,
  },
  {
    question:
      "Co otrzymamy: head [x | x <- [1..], x `mod` 7 == 0, x `mod` 5 == 0] ?",
    options: ["7", "5", "35", "12"],
    answer: 2,
  },
  {
    question: "Jaki jest wynik: length [x | x <- [1,3..15], x < 10] ?",
    options: ["4", "5", "10", "9"],
    answer: 1,
  },
  {
    question: 'Co zwróci wyrażenie: snd (head (zip [1..] "Haskell")) ?',
    options: ["'H'", "1", '"H"', "(1, 'H')"],
    answer: 0,
  },
  {
    question: "Jak zadziała: take 3 [ (x,y) | x <- [1,2], y <- ['a','b'] ] ?",
    options: [
      "[(1,'a'), (2,'b')]",
      "[(1,'a'), (1,'b'), (2,'a')]",
      "[(1,'a'), (2,'a'), (1,'b')]",
      "[(1,'a'), (1,'b'), (2,'a'), (2,'b')]",
    ],
    answer: 1,
  },
  {
    question: 'Jaki będzie wynik: sum (map length ["a", "ab", "abc"]) ?',
    options: ["3", "6", "123", "[1,2,3]"],
    answer: 1,
  },
  {
    question: "Co otrzymamy z: head (reverse (take 5 (cycle [1,2]))) ?",
    options: ["1", "2", "[1]", "[2]"],
    answer: 0,
  },
  {
    question:
      "Jaki jest wynik: [ x | x <- [1..10], even x, let y = x*2, y < 10 ] ?",
    options: ["[4,8]", "[2,4]", "[2,4,6]", "[4,8,12]"],
    answer: 1,
  },
  {
    question: "Co zwróci: sum (take 5 (repeat 2)) ?",
    options: ["2", "5", "10", "32"],
    answer: 2,
  },
  {
    question:
      "Jak zadziała wyciąganie danych w: head [x | (x, y) <- zip [1..] \"abc\", y == 'b'] ?",
    options: ["1", "2", "'b'", "[2]"],
    answer: 1,
  },
]
let currentQuestionIndex = 0
let score = 0
let hasAnswered = false

// Elementy DOM
const questionTextEl = document.getElementById("question-text")
const optionsContainerEl = document.getElementById("options-container")
const nextBtnEl = document.getElementById("next-btn")
const progressEl = document.getElementById("question-progress")
const scoreTrackerEl = document.getElementById("score-tracker")
const quizBlockEl = document.getElementById("quiz-block")
const resultsBlockEl = document.getElementById("results")
const scoreTextEl = document.getElementById("score-text")
const restartBtnEl = document.getElementById("restart-btn")

function loadQuestion() {
  // Resetowanie stanu dla nowego pytania
  hasAnswered = false
  nextBtnEl.style.display = "none"
  optionsContainerEl.innerHTML = ""

  const currentQuestion = questions[currentQuestionIndex]

  // Aktualizacja tekstów w interfejsie
  questionTextEl.textContent = currentQuestion.question
  progressEl.textContent = `Pytanie ${currentQuestionIndex + 1} / ${questions.length}`
  scoreTrackerEl.textContent = `Wynik: ${score}`

  // Generowanie przycisków dla opcji
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button")
    button.className = "option-btn"
    button.textContent = option

    // Nasłuchiwanie kliknięcia w opcję
    button.addEventListener("click", () => selectOption(index, button))

    optionsContainerEl.appendChild(button)
  })
}

function selectOption(selectedIndex, selectedButton) {
  // Blokada ponownego kliknięcia w tym samym pytaniu
  if (hasAnswered) return
  hasAnswered = true

  const currentQuestion = questions[currentQuestionIndex]
  const isCorrect = selectedIndex === currentQuestion.answer

  if (isCorrect) {
    selectedButton.classList.add("correct")
    score++
    scoreTrackerEl.textContent = `Wynik: ${score}`
  } else {
    selectedButton.classList.add("incorrect")
    // Znajdź poprawną odpowiedź i oznacz ją
    const allOptionButtons = optionsContainerEl.querySelectorAll(".option-btn")
    allOptionButtons[currentQuestion.answer].classList.add("correct")
  }

  // Wyłączenie klikalności wszystkich przycisków opcji
  const allButtons = optionsContainerEl.querySelectorAll(".option-btn")
  allButtons.forEach((btn) => (btn.disabled = true))

  // Wyświetlenie przycisku nawigacji
  nextBtnEl.style.display = "block"
  if (currentQuestionIndex === questions.length - 1) {
    nextBtnEl.textContent = "Zakończ test"
  } else {
    nextBtnEl.textContent = "Następne pytanie"
  }
}

function nextQuestion() {
  currentQuestionIndex++

  if (currentQuestionIndex < questions.length) {
    loadQuestion()
  } else {
    showResults()
  }
}

function showResults() {
  quizBlockEl.style.display = "none"
  resultsBlockEl.style.display = "block"
  scoreTextEl.textContent = `Twój wynik: ${score} / ${questions.length}`
}

function restartQuiz() {
  currentQuestionIndex = 0
  score = 0
  quizBlockEl.style.display = "block"
  resultsBlockEl.style.display = "none"
  loadQuestion()
}

// Podpięcie zdarzeń do przycisków nawigacyjnych
nextBtnEl.addEventListener("click", nextQuestion)
restartBtnEl.addEventListener("click", restartQuiz)

// Inicjalizacja przy pierwszym załadowaniu skryptu
loadQuestion()
