document.getElementById('submit').addEventListener('click', function() {
    const redTime = parseInt(document.getElementById('red').value) * 1000;
    const greenTime = parseInt(document.getElementById('green').value) * 1000;
    const blueTime = parseInt(document.getElementById('blue').value) * 1000;
    const numCircles = parseInt(document.getElementById('numCircles').value);

    const circlesContainer = document.getElementById('circles-container');
    const redRow = document.getElementById('red-row');
    const greenRow = document.getElementById('green-row');
    const blueRow = document.getElementById('blue-row');

    // Clear previous circles
    redRow.innerHTML = '';
    greenRow.innerHTML = '';
    blueRow.innerHTML = '';

    // Generate circles
    for (let i = 0; i < numCircles; i++) {
        const redCircle = document.createElement('div');
        redCircle.className = 'circle red';
        redRow.appendChild(redCircle);

        const greenCircle = document.createElement('div');
        greenCircle.className = 'circle green';
        greenRow.appendChild(greenCircle);

        const blueCircle = document.createElement('div');
        blueCircle.className = 'circle blue';
        blueRow.appendChild(blueCircle);
    }

    // Show the circles container
    circlesContainer.classList.remove('hidden');

    // Start button functionality
    document.getElementById('start').onclick = function() {
        setTimeout(() => {
            redRow.style.display = 'none';
            setTimeout(() => {
                greenRow.style.display = 'none';
                setTimeout(() => {
                    blueRow.style.display = 'none';
                }, blueTime);
            }, greenTime);
        }, redTime);
    };

    // Reset button functionality
    document.getElementById('reset').onclick = function() {
        redRow.style.display = '';
        greenRow.style.display = '';
        blueRow.style.display = '';
        circlesContainer.classList.add('hidden');
    };
});