document.addEventListener('mousemove', (e) => {
    const balls = document.querySelectorAll('.parallax-ball');
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;

    balls.forEach((ball, index) => {
        const speed = (index + 1) * 0.05; // Скорость движения
        const offsetX = x * 15 * speed; // Уменьшаем смещение для более плавного эффекта
        const offsetY = y * 15 * speed;
        ball.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});