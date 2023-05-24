function checkAnswers() {
    const q1 = document.querySelector('input[name="q1"]:checked').value;
    const q2Checked = document.querySelectorAll('input[name="q2"]:checked');
    const q2 = [];
    for (let i = 0; i < q2Checked.length; i++) {
      q2.push(q2Checked[i].value);
    }
    const q3 = document.querySelector('input[name="q3"]:checked').value;
    
    let score = 0;
    if (q1 === 'a') {
        score++;
        }
        if (q2.length === 4 && q2.includes('a') && q2.includes('b')&& q2.includes('c') && q2.includes('d')) {
        score++;
        }
        if (q3 === 'a') {
        score++;
        }
        
        const result = document.getElementById('result');
        if (score === 0) {
        result.innerHTML = "На жаль, ви не відповіли правильно на жодне питання. Спробуйте ще раз!";
        } else if (score === 1) {
        result.innerHTML = "Ви відповіли правильно на 1 питання. Спробуйте ще раз!";
        } else if (score === 2) {
        result.innerHTML = "Ви відповіли правильно на 2 питання. Добре зроблено!";
        } else if (score === 3) {
        result.innerHTML = "Вітаємо! Ви відповіли правильно на всі 3 питання!";
        }
        
        }