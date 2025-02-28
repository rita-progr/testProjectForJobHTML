function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        secs.toString().padStart(2, '0')
    ].join(':');
}

function startTimer(duration, display) {
    let timer = duration;
    setInterval(() => {
        display.textContent = formatTime(timer); // Обновляем отображение таймера

        if (timer === 0) {
            timer = duration; // Сбрасываем таймер на начальное значение
        } else {
            timer--; // Уменьшаем таймер на 1 секунду
        }
    }, 1000); // Обновляем каждую секунду
}

// Запуск таймера
document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.timer');
    const initialTime = 600; // 10 минут в секундах
    startTimer(initialTime, display);
});