document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', event => {
        const answer = item.nextElementSibling;
        const toggle = item.querySelector('.toggle');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            toggle.textContent = '+';
        } else {
            answer.style.display = 'block';
            toggle.textContent = '−';
        }
    });
});
