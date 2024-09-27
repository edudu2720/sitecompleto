document.getElementById('quiz-section').addEventListener('submit', function(event) {
    event.preventDefault();
 
 
 
    submitQuiz();
});
 
function playSound() {
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}
 
document.getElementById('retryButton').addEventListener('click', function() {
    document.getElementById('quiz-section').reset();
 
    document.getElementById('submitButton').disabled = false;
    document.getElementById('retryButton').disabled = true;
 
    document.getElementById('result').innerText = '';
});
 
function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        option.disabled = true;
    });
}
 
function submitQuiz() {
    let correctAnswers = {
        q1: 'C',
        q2: 'B',
        q3: 'D',
        q4: 'C',
        q5: 'A',
        q6: 'A',
        q7: 'A',
        q8: 'B',
        q9: 'C',
        q10: 'A'
    };
 
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
 
    for (let i = 1; i <= totalQuestions; i++) {
        let questionName = `q${i}`;
        let userAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
       
        if (userAnswer && userAnswer.value === correctAnswers[questionName]) {
            score++;
        }
    }
 
    let resultText = `Você acertou ${score} de ${totalQuestions} perguntas.`;
    document.getElementById('result').innerText = resultText;
 
    if (score === totalQuestions) {
        document.getElementById('venceusom').play();
    } else if (score < 4) {
        document.getElementById('perdeusom').play();
    }
}