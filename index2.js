// ==========================================
// BAZA PYTAŃ (JSON)
// Format: question (string), options (tablica 4 stringów), answer (indeks poprawnej opcji 0-3)
// ==========================================
const questions = [
  {
    question:
      "Który z poniższych ciągów znaków NIE może być nazwą zmiennej w Prologu?",
    options: ["X_1", "_zmienna", "Wynik", "wynik"],
    answer: 3,
  },
  {
    question: "Jakie będą wartości zmiennych w wyniku unifikacji: [X|Y] = [1]?",
    options: ["X=1, Y=2", "X=1, Y=[]", "X=[], Y=[1]", "X=1, Y=null"],
    answer: 1,
  },
  {
    question: "Jaki będzie wynik działania X = 2 + 3. w Prologu?",
    options: ["X = 5", "X = 2 + 3", "false", "błąd składniowy"],
    answer: 1,
  },
  {
    question: "Jaki będzie wynik unifikacji: [X, Y | Z] = [a, b, c, d]?",
    options: [
      "X=a, Y=b, Z=c",
      "X=a, Y=b, Z=[c, d]",
      "X=[a], Y=[b], Z=[c, d]",
      "X=a, Y=b, Z=d",
    ],
    answer: 1,
  },
  {
    question: "Co zwróci zapytanie length([[1, 2], 3, [4, 5, 6]], L).?",
    options: ["L = 6", "L = 5", "L = 3", "L = 2"],
    answer: 2,
  },
  {
    question:
      "Zmienna anonimowa w Prologu (taka, której wartość nas nie interesuje) jest reprezentowana przez znak:",
    options: ["-", "*", "_", "?"],
    answer: 2,
  },
  {
    question:
      "Ile łącznie rozwiązań zwróci zapytanie append(L1, L2, [a, b]). przy pełnym nawracaniu (backtrackingu)?",
    options: ["1", "2", "3", "4"],
    answer: 2,
  },
  {
    question: "Co oznacza znak wykrzyknika (!) w ciele reguły w Prologu?",
    options: [
      "Negację",
      "Koniunkcję",
      "Odcięcie (cut) - blokuje nawracanie",
      "Alternatywę (lub)",
    ],
    answer: 2,
  },
  {
    question: "Jaki będzie wynik zapytania is_list([a | b]).?",
    options: ["true", "false", "a", "b"],
    answer: 1,
  },
  {
    question: "Jaki będzie wynik unifikacji f(X, 2) = f(1, Y).?",
    options: ["X=1, Y=2", "false", "X=2, Y=1", "X=f(1), Y=f(2)"],
    answer: 0,
  },
  {
    question:
      "Na podstawie Twojej bazy wiedzy, który z poniższych zapisów to prawidłowo zdefiniowany fakt jednoargumentowy?",
    options: [
      "firma(abc, 1).",
      "kobieta(anna).",
      "pracownik(anna, lis, klm).",
      "mezczyzna(jan, piotr).",
    ],
    answer: 1,
  },
  {
    question: "Zapytanie X is max(10, 20). spowoduje, że:",
    options: ["X = 20", "X = 10", "X = max(10, 20)", "zwróci false"],
    answer: 0,
  },
  {
    question:
      "Jaką funkcję pełni operator przecinka (,) oddzielający predykaty w ciele reguły?",
    options: ["Alternatywę (LUB)", "Koniunkcję (I)", "Odcięcie", "Unifikację"],
    answer: 1,
  },
  {
    question:
      "Jakie będzie pierwsze znalezione rozwiązanie zapytania: member(X, [1, 2, 3]), X > 1.?",
    options: ["X=1", "X=2", "X=3", "false"],
    answer: 1,
  },
  {
    question: "Jaki będzie wynik unifikacji [H | T] = [[a, b], c, d]?",
    options: [
      "H=a, T=[b, c, d]",
      "H=[a, b], T=[c, d]",
      "H=[a, b, c], T=d",
      "H=[a, b], T=c, d",
    ],
    answer: 1,
  },
  {
    question:
      "Zapis firma(abc), używany u Ciebie jako argument w faktach pracownik/4, to z punktu widzenia Prologu:",
    options: [
      "Zmienna",
      "Term złożony (funktor z argumentem)",
      "Lista",
      "Operator przypisania",
    ],
    answer: 1,
  },
  {
    question:
      "Jak prawidłowo zakończyć wprowadzanie danych z klawiatury podczas wywołania wbudowanego predykatu read(X).?",
    options: [
      "Wciskając Enter",
      "Wpisując średnik (;)",
      "Wpisując kropkę i wciskając Enter (.)",
      "Wpisując znak równości (=)",
    ],
    answer: 2,
  },
  {
    question: "Jaki będzie wynik przypisania _ = 5. w Prologu?",
    options: [
      "false",
      "true (zakończy się sukcesem)",
      "_ = 5",
      "błąd kompilacji",
    ],
    answer: 1,
  },
  {
    question:
      "Który z poniższych operatorów reprezentuje logiczne LUB (alternatywę) w Prologu?",
    options: ["&&", "; (średnik)", "| (pionowa kreska)", "||"],
    answer: 1,
  },
  {
    question:
      "Wynik działania wbudowanego predykatu reverse([1, [2, 3], 4], L). to:",
    options: [
      "L = [4, 3, 2, 1]",
      "L = [4, [3, 2], 1]",
      "L = [4, [2, 3], 1]",
      "L = [[2, 3], 4, 1]",
    ],
    answer: 2,
  },
  {
    question: "Jak poprawnie zapisać wzorzec dopasowujący głowę i ogon listy?",
    options: [
      "(Glowa, Ogon)",
      "[Glowa | Ogon]",
      "{Glowa ; Ogon}",
      "[Glowa , Ogon]",
    ],
    answer: 1,
  },
  {
    question:
      "Jaki będzie wynik ewaluacji Z is 10 / 4. w Prologu (używając standardowego dzielenia)?",
    options: ["Z = 2", "Z = 2.5", "Z = 2 reszta 2", "Z = 10 / 4"],
    answer: 1,
  },
  {
    question: "Co dokładnie robi predykat odcięcia (!) po pomyślnym wykonaniu?",
    options: [
      "Zatrzymuje działanie całego programu",
      "Usuwa wybrane dowody dla bieżącego predykatu, blokując nawracanie wstecz",
      "Usuwa ostatni element z modyfikowanej listy",
      "Służy do dodawania komentarzy wielolinijkowych",
    ],
    answer: 1,
  },
  {
    question: "Co oznacza zapis [] w Prologu?",
    options: [
      "Brak wartości (null)",
      "Pusta lista",
      "Pusta zmienna",
      "Odcięcie systemowe",
    ],
    answer: 1,
  },
  {
    question: "Co zwróci predykat last([a, b, c], X).?",
    options: ["X = a", "X = [c]", "X = c", "X = [a, b]"],
    answer: 2,
  },
  {
    question:
      "Zestaw zapytań: X = [1, 2, 3], Y = [0 | X]. da w rezultacie Y równe:",
    options: [
      "Y = [0, [1, 2, 3]]",
      "Y = [0, 1, 2, 3]",
      "Y = [[0], 1, 2, 3]",
      "Y = 0123",
    ],
    answer: 1,
  },
  {
    question: "Do czego służy użyty w Twoich notatkach predykat nl?",
    options: [
      "Do negacji logicznej wyrażenia",
      "Do wczytania liczby (number load)",
      "Do wypisania znaku nowej linii (new line) na standardowe wyjście",
      "Do usunięcia pliku z dysku",
    ],
    answer: 2,
  },
  {
    question: "Co oznacza operator \\+ w Prologu?",
    options: [
      "Dodawanie absolutne",
      "Negację (nie można dowieść, że warunek jest spełniony)",
      "Inkrementację wartości o 1",
      "Znak kontynuacji linii",
    ],
    answer: 1,
  },
  {
    question: "Czym różni się operator == od operatora = w Prologu?",
    options: [
      "== wymusza przypisanie matematyczne",
      "Nie ma żadnej różnicy, to aliasy",
      "== sprawdza identyczność termów bez prób unifikacji zmiennych",
      "== to operator wyłącznie dla ciągów tekstowych",
    ],
    answer: 2,
  },
  {
    question:
      "Ile razy zapytanie member(X, [1, 1, 2]), X = 1. zakończy się sukcesem (zwróci true) przy wymuszaniu wszystkich rozwiązań (np. klawiszem średnika)?",
    options: ["1 raz", "2 razy", "3 razy", "Ani razu (zwróci false)"],
    answer: 1,
  },
  {
    question: "Jaki będzie wynik unifikacji append([1], X, [1, 2, [3, 4]]).?",
    options: [
      "X = [2, 3, 4]",
      "X = [2, [3, 4]]",
      "X = [[2], 3, 4]",
      "X = 2, [3, 4]",
    ],
    answer: 1,
  },
  {
    question: "Co w Prologu powoduje wywołanie wbudowanego predykatu fail.?",
    options: [
      "Wyświetlenie systemowego komunikatu o błędzie",
      "Zakończenie pracy interpretera Prologu",
      "Natychmiastowe zakończenie bieżącej gałęzi niepowodzeniem i wymuszenie nawrotu (backtrackingu)",
      "Wyzerowanie wszystkich związanych wcześniej zmiennych",
    ],
    answer: 2,
  },
  {
    question:
      "Jak, bazując na Twoich notatkach, w sposób poprawny matematycznie obliczyć minimum z dwóch liczb i przypisać je do zmiennej Z?",
    options: [
      "Z = min(A, B)",
      "Z is min(A, B)",
      "Z = minimum(A, B)",
      "Z is minimum(A, B)",
    ],
    answer: 1,
  },
  {
    question:
      "Zapis listy [X, Y] to tzw. zapis skrócony. W pełnej strukturze wewnętrznej Prologu ta lista wygląda tak:",
    options: ["[X | Y]", "[X | [Y]]", "[X | [Y | []]]", "[X, Y | []]"],
    answer: 2,
  },
  {
    question:
      "Który z poniższych zapisów w Prologu definiuje poprawny Atom (stałą)?",
    options: ["Zmienna", "Wynik_koncowy", "jakis_tekst", "2026_Rok"],
    answer: 2,
  },
  {
    question:
      "W kodzie: dzialaj(end_of_file) :- !. użyto odcięcia. Jaki będzie tego skutek, gdy warunek zostanie spełniony?",
    options: [
      "Program zacznie czytać plik od nowa",
      "Reguła zakończy się sukcesem, a odcięcie zablokuje szukanie dalszych klauzul dzialaj/1",
      "Program zgłosi wyjątek stosu",
      "Prolog wyjdzie do systemu operacyjnego",
    ],
    answer: 1,
  },
  {
    question: "Z jakimi listami pomyślnie zunifikuje się wzorzec: [_, _ | _]?",
    options: [
      "Z każdą listą (nawet pustą)",
      "Tylko z listą o dokładnie dwóch elementach",
      "Z każdą listą posiadającą co najmniej dwa elementy",
      "Tylko z listami zawierającymi zmienne",
    ],
    answer: 2,
  },
  {
    question:
      "W Twojej bazie istnieje zapis: pracownik(anna, klimczak, firma(abc), 10). Jak najprościej zapytać w konsoli o staż pracy (4 argument) anny klimczak pracującej w abc?",
    options: [
      "pracownik(anna, klimczak, firma(abc), X).",
      "staz(anna, klimczak) = X.",
      "pracownik(anna, klimczak, abc) = X.",
      "X is pracownik(anna, klimczak, firma(abc)).",
    ],
    answer: 0,
  },
  {
    question:
      "Zgodnie z implementacją w Twoich notatkach (suma([],0). ...), co zwróci zapytanie: suma([], S).?",
    options: ["S = 0", "S = []", "false", "S = null"],
    answer: 0,
  },
  {
    question: "Czym są tzw. termy proste w Prologu?",
    options: [
      "Są to wyłącznie predykaty wieloargumentowe",
      "Zmienne, liczby oraz atomy",
      "Tylko listy",
      "Złożone operacje arytmetyczne",
    ],
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
