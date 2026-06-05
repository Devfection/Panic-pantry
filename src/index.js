function displayPoem(response){
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0.5,
    cursor: "",
    })
}


function generatePoem(event) {
  event.preventDefault();
  
  let instructionsInput  =document.querySelector("#user-instructions");
  let apiKey = "61ff3ct11d507f83e0fcob41d8ed7a85"; 
  
  let context = "You are Panic Pantry, a cooking substitution expert. The user will provide a missing ingredient and optionally the dish they are making (for example: 'egg in a cake'). Determine the ingredient's purpose in that context and suggest 3 substitutes starting from best to worst. For each substitute,  explain what will change in the final dish, any quantity adjustments. Prefer common household ingredients and be honest when no good substitute exists. Format your response as a numbered list; use basic html formatting to make sure the lines are separated. Output valid HTML only. Never use Markdown formatting of any kind. Never make it into a single block of text ";
  let prompt = `find alternative ingredient for: ${instructionsInput.value}`;
  
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink_me"> Looking for a stunt double for ${instructionsInput.value}, please wait...</div>`;
  
  console.log("generating poem"); 
  console.log(`prompt is ${prompt}`);
  console.log(`context: ${context}`) 
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

