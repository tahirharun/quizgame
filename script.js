const TIMER_SECONDS = 15;

const quizData = {
  maths: {
    easy: [
      { q: "What is 2 + 2?", options: ["3","4","5","6"], answer: "4" },
      { q: "What is 5 x 3?", options: ["15","20","10","8"], answer: "15" },
      { q: "What is 10 - 6?", options: ["2","3","4","5"], answer: "4" },
      { q: "What is 12 ÷ 4?", options: ["2","3","4","5"], answer: "3" },
      { q: "Square root of 9?", options: ["2","3","4","5"], answer: "3" },
      { q: "What is 7 + 8?", options: ["14","15","16","13"], answer: "15" },
      { q: "What is 20 - 5?", options: ["10","12","15","25"], answer: "15" },
      { q: "What is 6 x 6?", options: ["32","36","42","30"], answer: "36" },
      { q: "What is 18 ÷ 2?", options: ["6","7","8","9"], answer: "9" },
      { q: "What is 4 x 7?", options: ["21","24","28","30"], answer: "28" },
    ],
    medium: [
      { q: "What is 12 x 12?", options: ["124","144","164","122"], answer: "144" },
      { q: "What is 100 ÷ 4?", options: ["20","25","30","40"], answer: "25" },
      { q: "What is 15 x 15?", options: ["225","250","200","275"], answer: "225" },
      { q: "What is 30% of 200?", options: ["40","50","60","70"], answer: "60" },
      { q: "What is the cube root of 7?", options: ["343","364","512","729"], answer: "343" },
      { q: "Solve: 3x = 18 x=?", options: ["3","4","5","6"], answer: "6" },
      { q: "What is 81 ÷ 9?", options: ["8","9","10","12"], answer: "9" },
      { q: "What is the squre root of 144?", options: ["10","11","12","13"], answer: "12" },
      { q: "What is 50% of 90?", options: ["40","45","50","60"], answer: "45" },
      { q: "Solve: 2x + 4 = 10 x=?", options: ["2","3","4","5"], answer: "3" },
    ],
    hard: [
      { q: "What is 13 x 17?", options: ["221","231","241","251"], answer: "221" },
      { q: "What is 256 ÷ 16?", options: ["12","14","16","18"], answer: "16" },
      { q: "What is 11 x 11 + 12 x 12?", options: ["265","244","221","233"], answer: "265" },
      { q: "Simplify: (3/4) ÷ (2/5)", options: ["15/8","8/15","6/20","5/6"], answer: "15/8" },
      { q: "Solve: 2x - 5 = 11 x=?", options: ["6","7","8","9"], answer: "8" },
      { q: "What is thesqure root 225?", options: ["13","14","15","16"], answer: "15" },
      { q: "What is 15 x 14?", options: ["200","210","220","225"], answer: "210" },
      { q: "What is 2 x 2 x 3 x 3?", options: ["36","72","54","48"], answer: "72" },
      { q: "What is 1/2 + 2/3?", options: ["7/6","5/6","4/5","3/5"], answer: "7/6" },
      { q: "Solve: X x X = 49 X=?", options: ["5","6","7","8"], answer: "7" },
    ],
  },
  english: {
    easy: [
      { q: "What is the plural of 'child'?", options: ["childs","children","childes","childer"], answer: "children" },
      { q: "Which is a noun?", options: ["Run","Happy","Book","Quickly"], answer: "Book" },
      { q: "Opposite of 'hot'?", options: ["Cold","Warm","Fire","Boil"], answer: "Cold" },
      { q: "Which is a verb?", options: ["Dog","Jump","Happy","Quick"], answer: "Jump" },
      { q: "Synonym of 'big'?", options: ["Tiny","Large","Small","Thin"], answer: "Large" },
      { q: "Which word is an adjective?", options: ["Blue","Swim","Apple","Run"], answer: "Blue" },
      { q: "Correct spelling?", options: ["Beautifull","Beutiful","Beautiful","Beatiful"], answer: "Beautiful" },
      { q: "Past tense of 'go'?", options: ["Goes","Gone","Went","Going"], answer: "Went" },
      { q: "Which is a pronoun?", options: ["He","House","Run","Play"], answer: "He" },
      { q: "Opposite of 'up'?", options: ["Over","Down","Left","Right"], answer: "Down" },
    ],
    medium: [
      { q: "Synonym of 'happy'?", options: ["Sad","Joyful","Angry","Tired"], answer: "Joyful" },
      { q: "Antonym of 'fast'?", options: ["Quick","Rapid","Slow","Speedy"], answer: "Slow" },
      { q: "Which is a collective noun?", options: ["Sheep","Flock","Child","Dog"], answer: "Flock" },
      { q: "Past tense of 'eat'?", options: ["Eated","Eating","Ate","Eaten"], answer: "Ate" },
      { q: "Which is a preposition?", options: ["Under","Walk","Quick","Apple"], answer: "Under" },
      { q: "Complete: 'She ___ to school yesterday.'", options: ["go","went","gone","going"], answer: "went" },
      { q: "Which is an adverb?", options: ["Run","Quickly","Car","Book"], answer: "Quickly" },
      { q: "Opposite of 'begin'?", options: ["Start","Open","End","Go"], answer: "End" },
      { q: "Which is a conjunction?", options: ["And","Run","Fast","House"], answer: "And" },
      { q: "Correct: 'The cat ___ on the mat yesterday.'", options: ["sit","sat","sitting","sits"], answer: "sat" },
    ],
    hard: [
      { q: "Antonym of 'benevolent'?", options: ["Kind","Cruel","Generous","Helpful"], answer: "Cruel" },
      { q: "Correct: 'Neither of the boys ___ playing.'", options: ["are","is","were","be"], answer: "is" },
      { q: "Synonym of 'lucid'?", options: ["Clear","Dark","Dull","Confusing"], answer: "Clear" },
      { q: "Correct spelling:", options: ["Accomodate","Acommodate","Accommodate","Acomodete"], answer: "Accommodate" },
      { q: "Antonym of 'abundant'?", options: ["Plenty","Scarce","Rich","Full"], answer: "Scarce" },
      { q: "Which is an abstract noun?", options: ["Chair","Love","Book","Table"], answer: "Love" },
      { q: "Correct form: 'I ___ him yesterday.'", options: ["see","saw","seen","sees"], answer: "saw" },
      { q: "Closest meaning to 'ephemeral'?", options: ["Lasting","Temporary","Eternal","Permanent"], answer: "Temporary" },
      { q: "Antonym of 'optimistic'?", options: ["Hopeful","Joyful","Pessimistic","Bright"], answer: "Pessimistic" },
      { q: "Correct: 'She has ___ the book.'", options: ["wrote","written","writing","writes"], answer: "written" },
    ],
  },
  geography: {
    easy: [
      { q: "Capital of France?", options: ["London","Paris","Berlin","Rome"], answer: "Paris" },
      { q: "Kenya is in which continent?", options: ["Asia","Africa","Europe","America"], answer: "Africa" },
      { q: "Largest ocean?", options: ["Atlantic","Indian","Pacific","Arctic"], answer: "Pacific" },
      { q: "The Sahara is a?", options: ["Mountain","Desert","River","Forest"], answer: "Desert" },
      { q: "Capital of Japan?", options: ["Beijing","Seoul","Tokyo","Bangkok"], answer: "Tokyo" },
      { q: "Country with the pyramids?", options: ["Mexico","Egypt","India","China"], answer: "Egypt" },
      { q: "Longest river?", options: ["Amazon","Nile","Yangtze","Mississippi"], answer: "Nile" },
      { q: "Mount Everest is in?", options: ["India","China","Nepal","Japan"], answer: "Nepal" },
      { q: "Smallest continent?", options: ["Europe","Australia","Antarctica","Africa"], answer: "Australia" },
      { q: "Capital of Italy?", options: ["Milan","Rome","Venice","Naples"], answer: "Rome" },
    ],
    medium: [
      { q: "Largest country by area?", options: ["USA","Russia","Canada","China"], answer: "Russia" },
      { q: "Largest hot desert?", options: ["Sahara","Gobi","Kalahari","Arabian"], answer: "Sahara" },
      { q: "Great Wall is in?", options: ["India","China","Japan","Korea"], answer: "China" },
      { q: "Ocean between Africa & Australia?", options: ["Atlantic","Pacific","Indian","Arctic"], answer: "Indian" },
      { q: "Coldest continent?", options: ["Europe","Asia","Antarctica","North America"], answer: "Antarctica" },
      { q: "Capital of Canada?", options: ["Toronto","Vancouver","Ottawa","Montreal"], answer: "Ottawa" },
      { q: "River flowing through Egypt?", options: ["Amazon","Nile","Yangtze","Congo"], answer: "Nile" },
      { q: "Great Barrier Reef is in?", options: ["USA","Brazil","Australia","India"], answer: "Australia" },
      { q: "Tallest mountain?", options: ["K2","Everest","Kilimanjaro","Makalu"], answer: "Everest" },
      { q: "Desert in China?", options: ["Sahara","Gobi","Thar","Kalahari"], answer: "Gobi" },
    ],
    hard: [
      { q: "Capital of Mongolia?", options: ["Beijing","Ulaanbaatar","Astana","Seoul"], answer: "Ulaanbaatar" },
      { q: "Timbuktu is in which country?", options: ["Mali","Nigeria","Sudan","Ghana"], answer: "Mali" },
      { q: "Lake Baikal is in?", options: ["Russia","China","Mongolia","Kazakhstan"], answer: "Russia" },
      { q: "Driest place on Earth?", options: ["Sahara","Atacama","Gobi","Kalahari"], answer: "Atacama" },
      { q: "Capital of New Zealand?", options: ["Auckland","Wellington","Christchurch","Sydney"], answer: "Wellington" },
      { q: "Mount Fuji is in?", options: ["Japan","Korea","China","Thailand"], answer: "Japan" },
      { q: "The Danube flows into the ___ Sea.", options: ["Black","Caspian","Mediterranean","Red"], answer: "Black" },
      { q: "Capital of Kazakhstan?", options: ["Astana","Almaty","Tashkent","Bishkek"], answer: "Astana" },
      { q: "Desert in Namibia?", options: ["Gobi","Sahara","Kalahari","Namib"], answer: "Namib" },
      { q: "Deepest ocean trench?", options: ["Java","Puerto Rico","Mariana","Tonga"], answer: "Mariana" },
    ],
  }
};

// ====== STATE ======
let subject="", difficulty="", questions=[], index=0, score=0, timer=null, timeLeft=TIMER_SECONDS, locked=false;

// ====== HELPERS ======
function $(id){return document.getElementById(id);}
function show(id){
  ["subject-screen","difficulty-screen","quiz-screen","result-screen"].forEach(s=>$(s).classList.add("hidden"));
  $(id).classList.remove("hidden");
}

// ====== FLOW ======
function selectSubject(sub){subject=sub; show("difficulty-screen");}
function selectDifficulty(diff){difficulty=diff; startGame();}
function startGame(){
  questions = [...quizData[subject][difficulty]];
  index = 0; score = 0;
  show("quiz-screen"); loadQuestion();
}

// ====== RENDER ======
function loadQuestion(){
  if(index >= questions.length) return showResult();
  locked=false;
  const q=questions[index];
  $("question").textContent = q.q;
  $("options").innerHTML="";
  q.options.forEach(opt=>{
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = ()=>handleAnswer(btn,opt,q.answer);
    $("options").appendChild(btn);
  });
  $("feedback").textContent=""; $("feedback").className="";
  $("q-count").textContent=`Question ${index+1} / ${questions.length}`;
  startTimer();
}

// ====== TIMER ======
function startTimer(){
  clearInterval(timer); timeLeft=TIMER_SECONDS; updateTimer();
  timer = setInterval(()=>{
    timeLeft--; updateTimer();
    if(timeLeft <=0){ clearInterval(timer); locked=true; revealTimeUp(); }
  },1000);
}
function updateTimer(){
  $("time-left").textContent = timeLeft;
  $("time-fill").style.width = (timeLeft/TIMER_SECONDS*100)+"%";
}

// ====== ANSWERS ======
function handleAnswer(btn, selected, correct){
  if(locked) return;
  locked=true; clearInterval(timer);
  const all = Array.from($("options").children);
  all.forEach(b=>b.disabled=true);

  if(selected===correct){
    score++; btn.classList.add("is-correct");
    $("feedback").textContent="Correct!"; $("feedback").className="correct";
  } else {
    btn.classList.add("is-wrong");
    $("feedback").textContent=`Wrong! Correct: ${correct}`; $("feedback").className="wrong answer";
  }
  all.forEach(b=>{
    if(b.textContent===correct) b.classList.add("is-correct");
  });
  setTimeout(next,1400);
}
function revealTimeUp(){
  const q=questions[index];
  const all = Array.from($("options").children);
  all.forEach(b=>b.disabled=true);
  $("feedback").textContent = `Time's up! Correct: ${q.answer}`; $("feedback").className="wrong answer";
  all.forEach(b=>{
    if(b.textContent===q.answer) b.classList.add("is-correct");
    else b.classList.add("is-wrong");
  });
  setTimeout(next,1400);
}

function next(){ index++; loadQuestion(); }
function showResult(){ show("result-screen"); $("score").textContent=`Your score: ${score} / ${questions.length}`; }
function restart(){ subject=""; difficulty=""; questions=[]; index=0; score=0; show("subject-screen"); }
