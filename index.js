const quotes = [
  "Earn with your mind, not your time.",
  "The quality of your mind is the quality of your life.",
  "The only true test of intelligence is if you get what you want out of life.",
  "You have two lives, and the second one begins when you realize you only have one.",
  "All the benefits in life come from compound interest — money, relationships, habits — anything of importance.",
  "You get rewarded for unique knowledge, not for effort.  Effort is required to create unique knowledge.",
  "To think clearly, understand the basics. If you're memorizing advanced concepts without being able to re-derive them as needed, you're lost.",
  "10,000 iterations, not 10,000 hours",
  "If you hurt other people because they have expectations of you, that’s their problem.",
  "Learn how to be corrected without being offended. Humility is important for growth.",
  "The really smart thinkers are clear thinkers. They understand the basics at a very, very fundamental level.",
  "It's not about educated v un-educated. It's about likes to read and doesn't like to read.",
  "Karma is just you, repeating your patterns, virtues, and flaws until you finally get what you deserve.",
  "To measure the quality of your life, simply do nothing, and see how it feels.",
  "He who is only an athlete is too crude, too vulgar, too much a savage. He who is a scholar only is too soft, to effeminate. The ideal citizen is the scholar-athlete, the man of thought and the man of action.",
  "What can I do for the next 60 days to become a clearer, more independent thinker? Read the greats in math, science, philosophy. Ignore your contemporaries and news. Avoid tribal identification. Truth above social approval.",
  "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  "The five most important skills are reading, writing, arithmetic, persuasion, and programming.",
  "I probably read 1-2 hours a day, and that puts me in the top .00001%.",
  "Life hack: when in bed, meditate. Either you will have a deep meditation or fall asleep. Victory either way.",
  "If you can’t be happy with a coffee, you won’t be happy with a yacht.",
  "Would you still be interested in doing something, if you couldn't tell anyone about it?",
  "Read what you love until you love to read.",
  "The modern mind is overstimulated and the modern body is understimulated and overfed. Meditation, exercise, and fasting restore an ancient balance.",
  "The best way, perhaps the only way, to change others is to become an example.",
  "Learn to sell. Learn to build. If you can do both, you will be unstoppable.",
];

let quoteActive = false;
const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");
copyBtn = document.querySelector(".copy");

if (!quoteActive) {
  generateQuote();
}

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }

  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIdx)) continue;

    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
  }
}

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteElement.innerText);
});
