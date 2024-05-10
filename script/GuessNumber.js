// Mendapatkan elemen-elemen yang diperlukan dari HTML
const inputElement = document.querySelector('input[type="number"]');
const submitButton = document.querySelector('button[type="submit"]');
const resetButton = document.querySelector('button[type="reset"]');
const errorSpace = document.querySelector('.error-space');
const scoreDisplay = document.querySelector('.score-display');
const scoreValue = document.querySelector('.score-value');
const hintButton = document.createElement('button'); // Membuat tombol hint
hintButton.textContent = 'Hint'; // Mengatur teks pada tombol hint

// Mendefinisikan variabel-variabel global
let targetNumber;
let guessesLeft = 5; // Batas tebakan

// Fungsi untuk memeriksa tebakan pengguna
function checkGuess(guess) {
    if (guess === targetNumber) {
        alert('Congratulations! You guessed the correct number!');
        generateNewTargetNumber(); // Menghasilkan angka baru untuk ditebak
    } else {
        guessesLeft--;
        if (guessesLeft === 0) {
            gameOver();
        } else {
            let message = guess < targetNumber ? 'higher' : 'lower';
            displayError(`The number you need to guess is ${message}. ${guessesLeft} guesses left.`);
        }
    }   
}

// Fungsi untuk menangani kondisi akhir permainan
function gameOver() {
    errorSpace.innerHTML = '<h1>Game Over</h1>';
    submitButton.disabled = true; // Menonaktifkan tombol submit
    inputElement.disabled = true; // Menonaktifkan input
    hintButton.disabled = true; // Menonaktifkan tombol hint
}

// Fungsi untuk menghasilkan angka acak
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fungsi untuk menampilkan pesan error
function displayError(message) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorSpace.innerHTML = ''; // Menghapus pesan error sebelumnya
    errorSpace.appendChild(errorMessage);
}

// Fungsi untuk menghasilkan angka baru untuk ditebak
function generateNewTargetNumber() {
    targetNumber = generateRandomNumber(1, 100); // Menghasilkan angka acak antara 1 dan 100 (bisa disesuaikan)
    guessesLeft = 5; // Mengatur ulang jumlah tebakan yang tersisa
    scoreDisplay.textContent = `Guesses Left: ${guessesLeft}`; // Memperbarui tampilan tebakan yang tersisa
}


// Memanggil fungsi untuk menghasilkan angka pertama kali
generateNewTargetNumber();

// Event listener untuk tombol Submit
submitButton.addEventListener('click', function() {
    const userGuess = parseInt(inputElement.value);
    if (!isNaN(userGuess)) {
        checkGuess(userGuess);
    } else {
        alert('Please enter a valid number.');
    }
});

// Event listener untuk tombol Reset
resetButton.addEventListener('click', function() {
    inputElement.value = ''; // Mengosongkan input
    errorSpace.innerHTML = ''; // Menghapus pesan error
});

// Menambahkan tombol hint ke dalam container
const container = document.querySelector('.container');
container.appendChild(hintButton);

// Event listener untuk tombol Hint
hintButton.addEventListener('click', function() {
    let rangeHint = '';
    if (targetNumber >= 1 && targetNumber <= 10) {
        rangeHint = 'between 1 and 10';
    } else if (targetNumber >= 11 && targetNumber <= 30) {
        rangeHint = 'between 11 and 30';
    } else if (targetNumber >= 30 && targetNumber <= 70) {
        rangeHint = 'between 31 and 70';
    } else if (targetNumber >= 71 && targetNumber <= 100) {
        rangeHint = 'between 71 and 100';
    }
    let message = targetNumber % 2 === 0 ? 'even' : 'odd'; // Memberikan petunjuk tentang angka
    alert(`The target number is ${rangeHint} and it's ${message}.`);
});
