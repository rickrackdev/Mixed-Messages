//creates an object containing the arrays that store the info used for the creation of the message
const messageOptions = {
  songNames: [
    "Lone Wolf Hysteria",
    "Mental Clarity Is a Luxury I Can't Afford",
    "The Thin Grey Line",
    "Thorns",
    "Misery in Waking Hours",
    "Burgundy",
    "Transgressions",
    "Are You Going to See the Rose in the Vase, or the Dust on the Table",
    "All of My Problems Always Involve Me",
    "The Light at the End of the Tunnel for $9.99 a Month",
    "Drag 'Em to the River (Totalitarian Remix)",
    "Us vs. Them",
    "Kill Yourself V",
    "Genesis",
    "Matte Black",
    "Fucking Your Culture",
    "1000 Blunts",
    "In Constant Sorrow",
    "Escape from Babylon",
    "Ashes of Luxury",
    "Resistance Is Useless",
    "Eulogy",
    "No Matter Which Direction I'm Going In, I Never Chase These Hoes",
    "Suicideboys Were Better in 2015",
    "Unlucky Me",
    "The Evil That Men Do",
    "Degeneration in the Key of A Minor",
    "If Self-Destruction Was an Olympic Event, I'd Be Tonya Harding",
    "Life Is But a Stream~",
    "5 Grand at 8 to 1",
    "We Envy Nothing In The World",
    "Lighting the Flames of My Own Personal Hell",
    "New Profile Pic",
    "Bleach",
    "Forget It",
    "Avalon",
    "Materialism as a Means to an End",
    "Ugliest",
    "The Number You Have Dialed Is Not in Service",
    "King Tulip",
    "Bring Out Your Dead",
    "Nicotine Patches",
    "10,000 Degrees",
    "122 Days",
    "Phanton Menace",
    "Krewe du Vieux (Comedy & Tragedy)",
    "WAR TIME ALL THE TIME",
    "Coma",
    "Long Gone (Save Me from This Hell)",
    "Meet Mr. NICEGUY",
    "Carrollton",
    "FUCK the Industry",
    "I No Longer Fear the Razor Guarding My Heel (IV)",
  ],
  challenges: [
    "Drink at least 2 liters of water today!",
    "Do 10 minutes of stretching to relax your body.",
    "Try a new healthy recipe today!",
    "Walk 5,000 steps or more today!",
    "Take 5 deep breaths whenever you feel stressed.",
    "Learn one new word in a different language!",
    "Write down three things you’re grateful for today.",
    "Avoid checking social media for an hour.",
    "Read 10 pages of a book today!",
    "Organize one small area of your space (desk, drawer, or closet).",
    "Draw something random in under 5 minutes!",
    "Take a photo of something beautiful today!",
    "Write a short poem or story in 5 sentences!",
    "Listen to a new genre of music today!",
    "Try a new hobby or skill for 10 minutes.",
    "Give a genuine compliment to someone today!",
    "Text or call an old friend and catch up.",
    "Do one random act of kindness today.",
    "Support a local business by sharing or buying something.",
    "Smile at a stranger today and brighten their day!",
  ],
  fate: [
    "Today, the universe is aligning in your favor. Take a chance!",
    "A moment of reflection will bring clarity to an important decision.",
    "Your energy is magnetic today—use it to inspire others!",
    "Financial luck is on the horizon, but only if you trust your instincts.",
    "An unexpected connection could lead to something special.",
    "A lesson from the past will guide you toward a brighter future.",
    "Focus on your goals—small steps today will lead to big success tomorrow.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "A fresh start is coming—embrace it with open arms!",
    "You will soon receive good news. Stay hopeful!",
    "Your kindness will come back to you in unexpected ways.",
    "Opportunities are hidden in plain sight. Open your eyes!",
    "A stranger will bring an interesting twist to your day.",
    "A great adventure awaits—be ready to say yes!",
    "The number 7 will bring you luck today.",
    "The stars whisper of a surprise coming your way.",
    "Beware of distractions—they may lead you off your path.",
    "A secret you uncover will change the way you see things.",
  ],
};

let generateRandomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

//create an empty array to store the part of the message
let dailies = [];

//iterate through the object and push the sentence to the new array
for (let option in messageOptions) {
  let optionIdx = generateRandomNumber(messageOptions[option].length);
  switch (option) {
    case "fate":
      dailies.push(
        `Fate, fortune and mystical arts are ever changing, your's today is:\n ${messageOptions[option][optionIdx]}`
      );
      break;
    case "challenges":
      dailies.push(
        `Today's daily challenge is:\n ${messageOptions[option][optionIdx]}`
      );
      break;
    case "songNames":
      dailies.push(
        `Today's $uicideBoy$ song is:\n ${messageOptions[option][optionIdx]}`
      );
      break;
    default:
      dailies.push(`Not enough data`);
      break;
  }
}

//format the message
let styleIt = (message) => {
  const styled = dailies.join(`\n`);
  console.log(styled);
};

styleIt(dailies);
