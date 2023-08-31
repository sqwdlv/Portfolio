const startButton = document.getElementById('start-button');

startButton.addEventListener('click', () => {
    openGamePopup();
});

function openGamePopup() {
    const popup = window.open('', 'TicTacToe', 'width=350,height=400');
    popup.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="styles.css">
            <title>Tic-Tac-Toe</title>
        </head>
        <body>
            <div class="game-container">
                <div class="cell" data-cell=""></div>
                <div class="cell" data-cell=""></div>
                <div class="cell" data-cell=""></div>
                <div class="cell" data-cell=""></div>
                <div class="cell" data-cell=""></div>
                <div class="cell" data-cell=""></div>
                <div class="cell" data-cell=""></div>
                <div class="cell" data-cell=""></div>
                <div class="cell" data-cell=""></div>
            </div>
            <script src="script.js"></script>
        </body>
        </html>
    `);
}
