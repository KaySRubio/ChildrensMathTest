# ChildrensMathTest

<!DOCTYPE html>
<html lang="en" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark">

<body>
    <h2>Project Description</h2>
    <p>In a software engineering course, I coded a math program for children with a home page, tests, and homeworks. Below is an example of one of the math test pages.</p>
    <h2>HTML/CSS Skills</h2>
        <ul>
          <li>Created unique page formats</li>
          <li>Coded a responsive design using media queries to format the page based on screen size</li>
        </ul>
  <h2>Take the test itself on my <a href="https://www.k-rubio.com/js_html_css.html" target="_blank">digital portfolio</a></h2>
    <h2>JavaScript Skills</h2>
                <ul>
                  <li>Declared functions for page actions</li>
                  <li>Selected DOM elements and updated their attributes to change the images and text</li>
                  <li>Created event listeners to run functions in response to click events</li>
                  <li>Declared arrays and variables to display the correct set of questions and images per grade, and keep track of student answers, and ensure each question is only answered once</li>
                </ul>
        <h2>Using JavaScript, the page will:</h2>
        <ul>
          <li>Display the right question/image/answer set depending on grade</li>
          <li>Keep track of your answers</li>
          <li>Tell you right away if you got it right or not</li>
          <li>Increase your candy peppermint rewards for each correct answer</li>
          <li>Only let you answer each question once</li>
          <li>Display your answers, and completed questions at the bottom</li>
          <li>Let you submit once you are done</li>
          <li>Show you your final grade at the end</li>
          <li>Show a different message at the end depending on percent correct</li>
        </ul>
    
    
          <h1>Technical Details</h1>
      <h2>Program Flow</h2>

        <p><b>Step 1. Browser loads all unhidden HTML DOM elements</b></p>

          <p>Hidden elements have a class of "hidden" which will be removed by the JavaScript later on</p>

        <p><b>Step 2. Declares variables.</b></p>
        <p><b>Step 3. Set up event listeners.</b></p>

          <p>Event listeners wait for click events on multiple parts of the page including:</p>
          <p>a. Grade-selection buttons</p>
          <p>b. The next/back arrow that allows users to move through the questions with or without answering them</p>
          <p>c. The answer options where users can select their answer to each question</p>

        <p><b>Step 4. Call the displayRewards function.</b></p>

          <p>The displayRewards function updates the image at the top showing the number of candy rewards that the user has earned so far</p>

        <p><b>Step 5. A user click event on the grade buttons calls the function getGrade() which does the following:</b></p>

          <p>a. Stores the grade selected by the user in the global variable called grade
          <p>b. Calls function setQuestionsAnswers() which initializes the grade-dependent question and answer set</p>
          <p>c. Displays the right image on the page for the grade and specific question</p>
          <p>d. Sets the answer set for the specific question</p>
          <p>e. Unhides the question and answer set, hides the grade selection div</p>
          <p>f. Activates blinky directions on the question-answer set</p>
          <p>g. Calls the function displayQuestion() which displays the right question on the page</p>

        <p><b>Step 6. A user click event on an answer option calls the function processAnswer(option) which:</b></p>
        </p>

          <p>a. Takes as an argument which option the user selected (e.g., option 1, 2 or 3)
          <p>a. If this is the first time the user has selected an answer, the function removes the blinky directions on the answers and adds blinky directions to the arrows</p>
          <p>b. If this is the first time the user is answering the question, the function processes the answer by:</p>
          <p>c. Updating the panda image dependent upon if answer was correct or not</p>
          <p>d. If correct, increment the number correct</p>
          <p>e. If correct, call the displayReward() which uses a switch statement based on the numberCorrectOA variable to show the correct candy rewards picture</p>
          <p>f. Update the progress bar at the bottom of the screen depending on if the answer was correct or not</p>
          <p>g. Change the firstTry variable to false so they can't answer the same question twice</p>
          <p>h. Increment the number answered and update the percentComplete shown on bottom of screen</p>
          <p>j. Display the submit button if the user has answered all 10 questions, and set up an event listener on the submit button which will run the submit function</p>
          <p></p>
        </div>
        <p><b>Step 7. A user click on a next/back arrow will call the functions nextQ() and previousQ()
      which do the following:</b></p>

          <p>a. If this is the first time the user has clicked on the arrows, remove the blinky directions</p>
          <p>b. Show alerts if there's no more questions</p>
          <p>c. Update the question number variable</p>
          <p>d. Display the correct question, question image, and answer options</p>
          <p>e. Update the panda image to a neutral panda</p>

        <p><b>Step 8. A user click on the submit buttom runs the submit() function which:</b></p>
              <div class="pp_col1of1">
          <p>a. Displays a feedback section telling the user the number they got correct</p>
          <p>b. Displays a specific panda image depending on if they got 7+, 5+, or less than 5 answers correct
          <p>c. Updates their rewards</p>
          <p>d. Creates an event listener so they can click to return to the home page</p>
        </div>
        <p><b>Step 9. A user click on anywhere with an event lister that runs the returnHome() function will re-start
      homework</b></p>

</body>
</html>
