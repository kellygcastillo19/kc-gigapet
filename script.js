$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.sleep-button').click(clickedSleepButton);
    $('.wake-button').click(clickedWakeUpButton); 
  
})
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Bub", weight:7, happiness:5};
  
    function clickedTreatButton() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
      // https://www.w3schools.com/jsref/prop_img_src.asp
      // document.getElementById() will locate the element with the Id "pet" and the src property will set the element to the value of the src attribute of an image, which is a gif of a panda eating.
      document.getElementById("pet").src = "https://cdn.glitch.global/18e0afab-1c10-47cd-a032-97427b745846/pandaeating.gif?v=1668223791549"; 
      // https://api.jquery.com/fadeToggle/
      // The .fadeToggle() method animates the opacity of the matched elements. 
      // The element with the Id treat-comment will fade in slowly (in 200ms) when this function is executed.
      $('#treat-comment').fadeToggle("slow");
      pet_info.happiness++; // Increase pet happiness
      pet_info.weight += 2; // Increase pet weight
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // document.getElementById() will locate the element with the Id "pet" and the src property will set the element to the value of the src attribute of an image, which is a gif of a panda playing.
      document.getElementById("pet").src = "https://cdn.glitch.global/18e0afab-1c10-47cd-a032-97427b745846/pandaplaying.gif?v=1668223799827";
      // The .fadeToggle() method animates the opacity of the matched elements. 
      // The element with the Id play-comment will fade in slowly (in 200ms) when this function is executed.
      $('#play-comment').fadeToggle("slow");
      pet_info.happiness++; // Increase pet happiness
      pet_info.weight -= 0.5; // Decrease pet weight
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // document.getElementById() will locate the element with the Id "pet" and the src property will set the element to the value of the src attribute of an image, which is a gif of a panda exercising.
      document.getElementById("pet").src = "https://cdn.glitch.global/18e0afab-1c10-47cd-a032-97427b745846/pandaexercising.gif?v=1668223794248";
      // The .fadeToggle() method animates the opacity of the matched elements. 
      // The element with the Id exercise-comment will fade in slowly (in 200ms) when this function is executed.
      $('#exercise-comment').fadeToggle("slow");
      pet_info.happiness --; // Decrease pet happiness
      pet_info.weight -= 2;// Decrease pet weight
      checkAndUpdatePetInfoInHtml();
    }

    function clickedSleepButton() {
      // document.getElementById() will locate the element with the Id "pet" and the src property will set the element to the value of the src attribute of an image, which is a gif of a panda sleeping.
      document.getElementById("pet").src = "https://cdn.glitch.global/18e0afab-1c10-47cd-a032-97427b745846/pandasleeping.gif?v=1668223801323";
      // The .fadeToggle() method animates the opacity of the matched elements. 
      // The element with the Id sleep-comment will fade in slowly (in 200ms) when this function is executed.
      $('#sleep-comment').fadeToggle("slow");
      // https://api.jquery.com/delay/
      // The .delay() method delays the execution of functions that follow it in the queue.
      // The element with the class wake-button will fade out in 500ms, and then there will be a 3000ms delay before it fades in. 
      $('.wake-button').fadeOut(500).delay(3000).fadeIn();
      pet_info.happiness += 0.5; // Increase pet happiness
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedWakeUpButton() {
      // document.getElementById() will locate the element with the Id "pet" and the src property will set the element to the value of the src attribute of an image, which is a gif of a panda waking up.
      document.getElementById("pet").src = "https://cdn.glitch.global/18e0afab-1c10-47cd-a032-97427b745846/pandayawning.gif?v=1668223804795";
      // The .fadeToggle() method animates the opacity of the matched elements. 
      // The element with the Id awake-comment will fade in slowly (in 200ms) when this function is executed.
      $('#awake-comment').fadeToggle("slow");
      pet_info.happiness -= 0.5; // Increase pet happiness
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      // If the weight or happiness is less than or equal to 0, the weight and happiness are set to 0 and remain at 0. 
      // The alert() method will notify the user to feed the gigapet.
      // document.getElementById() will locate the element with the Id "pet" and the src property will set the element to the value of the src attribute of an image, which is a gif of an angry panda.
      if (pet_info.weight <= 0 || pet_info.happiness <= 0) {
        pet_info.weight = 0;
        pet_info.happiness = 0;
        alert("Feed me please, I'm dying!");
        document.getElementById("pet").src = "https://cdn.glitch.global/cb2b417f-8245-4289-a997-d9524b0a621e/pandamad.gif?v=1668294209660";
      }
    }

    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }

  