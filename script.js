const originalParts = [
    "right-leg",
    "left-leg",
    "right-arm",
    "left-arm",
    "body",
    "head"
  ];
  
  let hangmanParts = [...originalParts];
  let totalChances = 0;
  let randomWordData = null;
  let checkStatusGlobal = 0;
  
  function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
  }
  
  function chooseRandomWord() {
    const blankParentEl = document.querySelector(".blanks_parent");
    const hintAreaEl = document.querySelector(".hint-area");
    const randomNumber = getRandomNumber(0, wordsWithHints.length);
    randomWordData = wordsWithHints[randomNumber];
    const word = randomWordData.word.toUpperCase();
  
    blankParentEl.innerHTML = '';
    hintAreaEl.textContent = `Hint: ${randomWordData.hint}`;
  
    // here we create blank space....
    for (let index = 0; index < word.length; index++) {
        const letter = word[index];
        const alpha = document.createElement("p");
        alpha.innerHTML = "&nbsp;";
        alpha.setAttribute("data-letter", letter);
        blankParentEl.appendChild(alpha);
    }
  
    // giving hints to  Fill in two random letters
    const indicesToFill = [];
    while (indicesToFill.length < 2 && indicesToFill.length < word.length) {
        const randomIndex = getRandomNumber(0, word.length);
        if (!indicesToFill.includes(randomIndex)) {
            indicesToFill.push(randomIndex);
        }
    }
  
    indicesToFill.forEach(index => {
        const letter = word[index];
        const letterElements = document.querySelectorAll(`.blanks_parent p[data-letter="${letter}"]`);
        letterElements.forEach(el => {
            if (el.innerHTML === "&nbsp;") {
                el.textContent = letter;
                checkStatusGlobal++;
            }
        });
    });
  }
  
  function startGame() {
    totalChances = 0;
    checkStatusGlobal = 0;
    chooseRandomWord();
    hangmanParts = [...originalParts];
    hangmanParts.forEach(part => {
        document.getElementById(part).classList.remove("hidden");
    });
  
    const letterButtons = document.querySelectorAll('.letter-button');
    letterButtons.forEach(button => {
        button.disabled = false;
        button.classList.remove('greenBtn', 'redBtn');
    });
  
    updateGuessesText();
  }
  
  function removePart() {
    if (hangmanParts.length > 0) {
        const part = hangmanParts.shift();
        document.getElementById(part).classList.add("hidden");
    }
  }
  
  function restartGame() {
    hangmanParts = [...originalParts];
    hangmanParts.forEach(part => {
        document.getElementById(part).classList.remove("hidden");
    });
    startGame();
  }
  
  
  const wordsWithHints = [
    { word: "apple", hint: "A red or green fruit." },
    { word: "angel", hint: "A heavenly being." },
    { word: "arrow", hint: "A pointed weapon or sign." },
    { word: "artist", hint: "A person who paints or draws." },
    { word: "action", hint: "Something you do." },
  
    { word: "banana", hint: "A yellow fruit." },
    { word: "basket", hint: "A container for carrying things." },
    { word: "battle", hint: "A big fight." },
    { word: "bright", hint: "Full of light." },
    { word: "bubble", hint: "A round ball of air in water." },
  
    { word: "castle", hint: "A large old building." },
    { word: "camera", hint: "A device to take pictures." },
    { word: "circle", hint: "A round shape." },
    { word: "cotton", hint: "A soft fabric." },
    { word: "clap", hint: "To hit hands together." },
  
    { word: "desert", hint: "A dry, sandy place." },
    { word: "dinner", hint: "A meal at night." },
    { word: "doctor", hint: "A person who helps sick people." },
    { word: "dragon", hint: "A big, fire-breathing creature." },
    { word: "dancer", hint: "Someone who moves to music." },
  
    { word: "eagle", hint: "A large bird." },
    { word: "engine", hint: "A machine that moves things." },
    { word: "eleven", hint: "A number after ten." },
    { word: "escape", hint: "To run away." },
    { word: "expert", hint: "A person who knows a lot." },
  
    { word: "flower", hint: "A colorful plant." },
    { word: "forest", hint: "A place with many trees." },
    { word: "friend", hint: "Someone you like." },
    { word: "feather", hint: "Soft part of a bird." },
    { word: "famous", hint: "Known by many people." },
  
    { word: "garden", hint: "A place with flowers and plants." },
    { word: "guitar", hint: "A musical instrument." },
    { word: "golden", hint: "A bright yellow color." },
    { word: "gravel", hint: "Small stones on the ground." },
    { word: "gloves", hint: "Worn on hands in winter." },
  
    { word: "hammer", hint: "A tool for hitting nails." },
    { word: "honest", hint: "Telling the truth." },
    { word: "hunter", hint: "Someone who catches animals." },
    { word: "helmet", hint: "Worn on the head for safety." },
    { word: "hunger", hint: "The feeling of needing food." },
    { word: "island", hint: "Land surrounded by water." },
  
    { word: "iceberg", hint: "A huge piece of ice." },
    { word: "insect", hint: "A small bug." },
    { word: "inside", hint: "Opposite of outside." },
    { word: "invite", hint: "To ask someone to join." },
  
    { word: "jungle", hint: "A wild forest." },
    { word: "jacket", hint: "Worn in cold weather." },
    { word: "jumper", hint: "Another word for a sweater." },
    { word: "jigsaw", hint: "A type of puzzle." },
    { word: "journey", hint: "A long trip." },
  
    { word: "kitten", hint: "A baby cat." },
    { word: "kitchen", hint: "A place to cook food." },
    { word: "knight", hint: "A soldier in armor." },
    { word: "kettle", hint: "Used to boil water." },
    { word: "kindle", hint: "To start a fire." },
  
    { word: "ladder", hint: "Used to climb high." },
    { word: "laptop", hint: "A small computer." },
    { word: "locket", hint: "A small jewelry piece." },
    { word: "lizard", hint: "A small reptile." },
    { word: "loving", hint: "Showing care and kindness." },
  
    { word: "monkey", hint: "A funny animal that climbs trees." },
    { word: "magnet", hint: "Attracts metal objects." },
    { word: "muffin", hint: "A sweet baked snack." },
    { word: "market", hint: "A place to buy things." },
    { word: "mirror", hint: "A glass that shows your face." },
   
      { word: "nectar", hint: "Sweet liquid from flowers." },
      { word: "noodle", hint: "Long pasta in soups." },
      { word: "nightingale", hint: "Bird known for singing at night." },
      { word: "nut", hint: "Hard-shelled snack." },
      
      { word: "onion", hint: "Layered vegetable." },
      { word: "olive", hint: "Small, oval fruit." },
      { word: "orange", hint: "Citrus fruit, orange color." },
      { word: "owl", hint: "Nocturnal bird with big eyes." },
      
      { word: "pineapple", hint: "Tropical fruit with spiky skin." },
      { word: "peach", hint: "Sweet, fuzzy fruit." },
      { word: "penguin", hint: "Flightless bird, waddles." },
      { word: "potato", hint: "Starchy vegetable, often mashed." },
      
      { word: "quail", hint: "Small bird with a distinctive call." },
      { word: "quince", hint: "Yellow, apple-like fruit." },
      { word: "quinoa", hint: "Healthy grain." },
      { word: "pumpkin", hint: "Orange, large fruit." },
      
      { word: "rose", hint: "Flower, symbolizes love." },
      { word: "rabbit", hint: "Small, furry animal with long ears." },
      { word: "radish", hint: "Crunchy, spicy vegetable." },
      { word: "robin", hint: "Bird with a red breast." },
      
      { word: "strawberry", hint: "Sweet, red fruit with seeds." },
      { word: "sunflower", hint: "Yellow flower, follows the sun." },
      { word: "salmon", hint: "Pink fish, often grilled." },
      { word: "sparrow", hint: "Small brown bird." },
      
      { word: "tulip", hint: "Colorful spring flower." },
      { word: "tomato", hint: "Red, round fruit, used in salads." },
      { word: "tiger", hint: "Big, striped wild cat." },
      { word: "toucan", hint: "Colorful bird with a big beak." },
  
     { word: "umbrella", hint: "A portable rain cover." },
        { word: "unicorn", hint: "Mythical horse with a horn." },
        { word: "ukulele", hint: "Small string instrument." },
        { word: "urn", hint: "A container for holding ashes." },
        
        { word: "vulture", hint: "Large bird of prey." },
        { word: "violet", hint: "Small purple flower." },
        { word: "vanilla", hint: "Sweet flavor used in desserts." },
        { word: "vase", hint: "Container for flowers." },
        
        { word: "whale", hint: "Large marine mammal." },
        { word: "willow", hint: "Tree with long, thin leaves." },
        { word: "wren", hint: "Small, energetic bird." },
        { word: "walnut", hint: "Hard-shelled nut." },
        
        { word: "xenops", hint: "Small bird found in Central America." },
        { word: "xigua", hint: "Chinese word for watermelon." },
        { word: "xerox", hint: "Photocopying brand." },
        { word: "xylocarp", hint: "Fruit with hard shell (e.g., coconut)." },
    
      { word: "yam", hint: "Starchy root vegetable." },
      { word: "yogurt", hint: "Fermented milk product." },
      { word: "yellowtail", hint: "Fish with a yellow tail." },
      { word: "yew", hint: "Tree with red berries." },
      
      { word: "zebra", hint: "Striped black-and-white animal." },
      { word: "zucchini", hint: "Green summer squash." },
      { word: "zinnia", hint: "Brightly colored flower." },
      { word: "zebu", hint: "Domesticated cattle with hump." }
    ];
    
  
  const keyboardParentEl = document.querySelector(".keyboard-parent");
  const gameModal = document.querySelector(".game-modal");
  const modalImage = document.querySelector(".modal-image");
  const modalMessage = document.querySelector(".modal-message");
  const playAgainButton = document.querySelector(".play-again");
  const guessesText = document.querySelector(".guesses-text b");
  
  function updateGuessesText() {
    guessesText.textContent = `${totalChances} / 6`;
  }
  
  const buttonParentClickFunction = function (e) {
    if (e.target.classList.contains("letter-button")) {
        let correctGuess = false;
        const letterClicked = e.target.dataset.letter;
  
        const allLettersEls = document.querySelectorAll(".blanks_parent p");
        allLettersEls.forEach((blankEl) => {
            if (blankEl.dataset.letter === letterClicked) {
              blankEl.textContent = letterClicked;
              checkStatusGlobal++;
              correctGuess = true;
          }
      });
  
      if (correctGuess) {
          e.target.classList.add("greenBtn");
      } else {
          totalChances++;
          e.target.classList.add("redBtn");
          removePart();
          updateGuessesText();
      }
  
      e.target.disabled = true;
  
      if (totalChances === originalParts.length) {
          modalImage.src = "https://tse2.mm.bing.net/th?id=OIP.99UyvYmVT9c5Ao0kuY4uLAHaHZ&pid=Api&P=0&h=180"; // Replace with your lose GIF URL
          modalMessage.textContent = "You Lost the Game!";
          gameModal.classList.remove("hidden");
      }
  
      if (checkStatusGlobal === randomWordData.word.length) {
          modalImage.src = "https://tse4.mm.bing.net/th?id=OIP.VU6j39CBBrwXIgi_YWmO-gHaHa&pid=Api&P=0&h=180"; // Replace with your win GIF URL
          modalMessage.textContent = "You Won the Game!";
          gameModal.classList.remove("hidden");
      }
  
  }
  };
  
  keyboardParentEl.addEventListener("click", buttonParentClickFunction);
  
  playAgainButton.addEventListener("click", () => {
  gameModal.classList.add("hidden");
  restartGame();
  });
  
  startGame();