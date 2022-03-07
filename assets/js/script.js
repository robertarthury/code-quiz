// define the object for the question entity
let question = {
    title: 'Which of the following is correct about JavaScript?',
    alternatives: ['JavaScript is Assembly-language', 'JavaScript is an Object-Based language', 'JavaScript is an Object-Oriented language', ' JavaScript is a High-level language'],
    correctAnswer: 1
  };

  // function for showing the question
function showQuestion(q) {
    let titleDiv = document.getElementById('title');
    titleDiv.textContent = q.title;
  
  let alts = document.querySelectorAll('.alternative');
  console.log(alts);
  alts.forEach(function(element, index){
    element.textContent = q.alternatives[index];
    element.addEventListener('click', function(){
        if (q.correctAnswer == index) {
          console.log('Correct Answer!');
        } else {
          console.log('Wrong Answer!');
        }
    });
}); 
}

  // call the function
  showQuestion(question);

     let btn = document.getElementById('btn');
    btn.addEventListener('click', function() {
    console.log('Clicked!');
    })