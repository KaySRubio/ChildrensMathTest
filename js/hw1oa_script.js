
 // Get grade from a database
var grade = '1';

/********************* Updating Username at top of Page ************/

// Get student's first name and store in a variable
var name = "Username";

// store the DOM node with id="username" in a variable
var updateUsername = document.getElementById('usernamehere'); 

// update the inner HTML of this node to the name from the student object
updateUsername.innerHTML = name;

/****** Declare variables for the question answer set and it's pictures *******/
var questionSet = new Map();
var answerSet = new Map();
var imageSet0 = new Map();
var firstTry = new Map();
var i = 1;
var numAnswered = 0; // keeps track of how many they've answered
var numCorrectOA = 0; // will be used to keep track of the number correct

// answer options will be a two-dimensional array
let answerOptions = [
        ['','',''],
        ['','',''],
      ['','',''],
      ['','',''],
      ['','',''],
      ['','',''],
      ['','',''],
      ['','',''],
      ['','',''],
      ['','',''],
      ];

// These variables ensure they can only try each question once per HW session
firstTry.set(1, true);
firstTry.set(2, true);
firstTry.set(3, true);
firstTry.set(4, true);
firstTry.set(5, true);
firstTry.set(6, true);
firstTry.set(7, true);
firstTry.set(8, true);
firstTry.set(9, true);
firstTry.set(10, true);

/****** Load the question/answer set and associated pictures depending on grade 
        For digital portfolio, only grade 1 included, but real project had grades K-4 *******/
if(grade=='1') {

      /* Set up the Map() objects for the questions, answers, and image for the answer options */
      questionSet.set(1, "Add:");
      questionSet.set(2, "7 + 2 + 3 = 12");
      questionSet.set(3, "2 + 8 + 3 can be reduced to ? + 3 = 13");
      questionSet.set(4, "10 + ? = 18");
      questionSet.set(5, "10 + 6");
      questionSet.set(6, "6 + 2 + 4");
      questionSet.set(7, "6 + 6 + 1 = 15");
      questionSet.set(8, "5 + 5 + 4 can be reduced to ? + 4 = 14");
      questionSet.set(9, "3 + 5 + 4 = ?");
      questionSet.set(10, "? + 3 = 5");

      answerSet.set(1, "2");
      answerSet.set(2, "1");
      answerSet.set(3, "2");
      answerSet.set(4, "3");
      answerSet.set(5, "1");
      answerSet.set(6, "2");
      answerSet.set(7, "3");
      answerSet.set(8, "2");
      answerSet.set(9, "2");
      answerSet.set(10, "1");

      imageSet0.set(1, "../images/hw/1oa_rec_1.png");
      imageSet0.set(2, "../images/hw/1oa_rec_tf.png");  
      imageSet0.set(3, "../images/hw/1oa_rec_nl.png");
      imageSet0.set(4, "../images/hw/1oa_rec_4.png");
      imageSet0.set(5, "../images/hw/1oa_rec_5.png");
      imageSet0.set(6, "../images/hw/1oa_rec_6.png");
      imageSet0.set(7, "../images/hw/1oa_rec_tf.png");
      imageSet0.set(8, "../images/hw/1oa_rec_nl.png");
      imageSet0.set(9, "../images/hw/1oa_rec_9.png");
      imageSet0.set(10, "../images/hw/1oa_rec_10.png");

      // answer options will be a two-dimensional array
    answerOptions = [
        ['16','17','18'],
        ['True','Unknown','False'],
      ['3','10','13'],
      ['6','7','8'],
      ['16','18','36'],
      ['10','12','16'],
      ['True','Unknown','False'],
      ['4','10','14'],
      ['11','12','14'],
      ['2','3','4'],
      ];

}

  /* Display the right question on the page*/
  document.getElementById('question').innerHTML = "" + questionSet.get(i);
  document.getElementById('qNum').innerHTML = "Grade " + grade + " Operations and Algebraic Thinking: Q" + i;

/* Display the correct question image re-setting the image src */
var a0 = document.getElementById('question_image');
a0.setAttribute('src', imageSet0.get(i));
// display the answer set
document.getElementById('answer1').innerHTML = answerOptions[0][0];
document.getElementById('answer2').innerHTML = answerOptions[0][1];
document.getElementById('answer3').innerHTML = answerOptions[0][2];

// store the DOM element for the "% Complete" in an object so it can be updated
var percentComplete = document.getElementById('percentComplete');

// call the function to display the right number of rewards
displayReward();


    /* Function to change the panda pic to show if they got the answer right or wrong */

function processAnswer(option) {
        // run only if this is their first try for this question, otherwise do nothing

       if(firstTry.get(i) == true) {

        /* if the answer is right, show the right panda and increment how  many they have correct */
        if(option == answerSet.get(i)) {
          var panda = document.getElementById('responding_panda');
          panda.setAttribute('src', "../images/hw/great_job_panda.png");
          numCorrectOA++;
          // call the function to display the right number of rewards
          displayReward();
          // Permanently update the background color of that question on the progress bar
        document.getElementById(i).setAttribute('class', 'backgroundColorBlue');
        // select the DOM element from the progress bar with an ID corresponding to the question
        // number and then update it's text to show a checkmark
        document.getElementById(i).innerHTML = "Q" + i + " &#10003";

        }
    
        // If the answer is wrong, show the wrong_panda
        else {
          var panda = document.getElementById('responding_panda');
          panda.setAttribute('src', "../images/hw/wrong_panda.png");
          // Permanently update the background color of that question on the progress bar
        document.getElementById(i).setAttribute('class', 'backgroundColorRed');
        // select the DOM element from the progress bar with an ID corresponding to the question
        // number and then update it's text to show a checkmark
        document.getElementById(i).innerHTML = "Q" + i + " X";

        }
        firstTry.set(i, false); // change to false so they can't try this question again
        // Permanently increase the % complete
      numAnswered++;
      document.getElementById('percentComplete').innerHTML = numAnswered * 10 +"% Complete";
      }
  

     //if numAnswered has reached 10, display the submit button will appear by removing it's class attribute of hidden

      if(numAnswered == 10) {
      document.getElementById('hidden').setAttribute('id', 'submit');
      /* once submit button apperas, set up event listener to respond to click and call submit function */
      var submitButton = document.getElementById('submit');
      submitButton.addEventListener('click', submit, false);
    	}

}

  /* Function to move to the next question */
function nextQ() {

      // if there's no more questions, show the last thing
      if (i == 10) {
        /*window.location.assign("goodjob.html");*/
        alert("This is the last question. Please press Submit or use the back arrow to finish the questions.");

    } else {

      i++;

      document.getElementById('qNum').innerHTML = "Grade " + grade + " Number and Operations in Base Ten: Q" + i;
      /* When go to the next question, Re-set the panda pic back to the neutral panda */
      var panda = document.getElementById('responding_panda');
        panda.setAttribute('src', "../images/hw/waiting_panda.png");

      /* Update question on the page*/
      document.getElementById('question').innerHTML = questionSet.get(i);
        // update the question image
      var a0 = document.getElementById('question_image');
        a0.setAttribute('src', imageSet0.get(i));
        // update the 3 answer options on the page
        document.getElementById('answer1').innerHTML = answerOptions[i-1][0];
      document.getElementById('answer2').innerHTML = answerOptions[i-1][1];
      document.getElementById('answer3').innerHTML = answerOptions[i-1][2];
      
    }
}

    /* Function to move to the previous question */
    function previousQ() {
      if (i == 1) {
        alert("This is the 1st question!");
    } else {
      i--;

  
      document.getElementById('qNum').innerHTML = "Grade " + grade + " Operations and Algebraic Thinking: Q" + i;
      /* Update question on the page*/
      document.getElementById('question').innerHTML = questionSet.get(i);

      /* When go to the next question, Re-set the panda pic back to the neutral panda */
      var a1 = document.getElementById('responding_panda');
        a1.setAttribute('src', "../images/hw/waiting_panda.png");

      /* Update the question image by re-setting the image src */
        var a0 = document.getElementById('question_image');
        a0.setAttribute('src', imageSet0.get(i));
        // update the 3 answer options on the page
        document.getElementById('answer1').innerHTML = answerOptions[i-1][0];
      document.getElementById('answer2').innerHTML = answerOptions[i-1][1];
      document.getElementById('answer3').innerHTML = answerOptions[i-1][2];
  
    }
    }


    /* function for when they click on submit */
    function submit() {
      // Calculate how many they got correct based on their final answers
      /*for (var k = 1; k<11; k++)
      {
        if(answerSet.get(k) == studentAnswers[k]) {numCorrect++;}
        
      }*/
      // create variables for message and pic to display in the feedback section
      var message;
      var pic;
      // create a message and pick a picture based on how many they got correct
      if(numCorrectOA > 7)
      {
        message = "You got " + numCorrectOA + " out of 10 correct! Great job!";
        pic = "../images/hw/pandaconfetti.png";
      }
      else if(numCorrectOA > 5)
      {
        message = "You got " + numCorrectOA + " out of 10 correct. Good work, you passed!";
        pic = "../images/hw/pandathumbsup.png";
      }
      else
      {
        message = "You got " + numCorrectOA + " out of 10 correct. Good effort, try again next time";
        pic = "../images/hw/pandashrug.png";
      }

      // Now show them how their rewards have increased
      displayReward();

      // remove the hidden ID from the feedback section to show it
      document.getElementById('hidden2').setAttribute('id', 'feedback');

      // update the message shown in the feedback section
      document.getElementById('message').innerHTML = message;
      document.getElementById('panda').src = pic;

    /* event listener on the feedback section so they can click to return to the right home page */
    var feedback = document.getElementById('feedback');
    feedback.addEventListener('click', returnHome, false); 
    }

    // return home function
function returnHome() {
  /********** Write NumCorrect to file here ******/
  window.location.assign("p-hw1oa.html");}
  /* monkey - update that link ^ to be the portfolio home page */



  /* Use event listener to respond to a click on the next/back arrow, and call the next/previous functions */
    var el1 = document.getElementById('next');
    el1.addEventListener('click', nextQ, false);

    var el2 = document.getElementById('back');
    el2.addEventListener('click', previousQ, false);

  /* use event listener to respond to click on the answer1 option */
  
    var an1 = document.getElementById('answer1');
    //an1.addEventListener('click', processAnswer, false);

    an1.addEventListener('click', function(){processAnswer(1);}, false); 
    // wrap the function in an anonymous function and pass the number 1 to the function
    
    var an2 = document.getElementById('answer2');
    an2.addEventListener('click', function(){processAnswer(2);}, false); 
    
    var an3 = document.getElementById('answer3');
    an3.addEventListener('click', function(){processAnswer(3);}, false); 
  
  /* Function to show the right reward picture */
  // Depending on the number of rewards stored in the student object
// display the right picture by changing the image source
function displayReward() {
  switch(numCorrectOA) {
  case 0:
    document.getElementById("candybowl").src='../images/hw/zerocandy.png';
    break;
  case 1:
    document.getElementById("candybowl").src='../images/hw/onecandy.png';
    break;
  case 2:
    document.getElementById("candybowl").src='../images/hw/twocandy.png';
    break;
  case 3:
    document.getElementById("candybowl").src='../images/hw/threecandy.png';
    break;
  case 4:
    document.getElementById("candybowl").src='../images/hw/fourcandy.png';
    break;
  case 5:
    document.getElementById("candybowl").src='../images/hw/fivecandy.png';
    break;
  case 6:
    document.getElementById("candybowl").src='../images/hw/sixcandy.png';
    break;
  case 7:
    document.getElementById("candybowl").src='../images/hw/sevencandy.png';
    break;
  case 8:
    document.getElementById("candybowl").src='../images/hw/eightcandy.png';
    break;
  case 9:
    document.getElementById("candybowl").src='../images/hw/ninecandy.png';
    break;
  case 10:
    document.getElementById("candybowl").src='../images/hw/tencandy.png';
    break;
	default:
		document.getElementById("candybowl").src='images/hw/zerocandy.png';
		break;
  }
} 
