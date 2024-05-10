// Generate random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize score and guesses left
var score = 0;
var guessesLeft = 5; // Jumlah tebakan maksimum

// Mendapatkan elemen tebakan dan tombol submit
var guessInput = document.querySelector('input[type="number"]');
var submitButton = document.querySelector('button[type="submit"]');

// Mendapatkan elemen-elemen skor dan tebakan tersisa
var scoreElement = document.getElementById("score-value");
var guessesLeftElement = document.getElementById("guesses-left-value");

// Event listener untuk tombol submit
submitButton.addEventListener('click', function() {
    // Mendapatkan tebakan pengguna
    var userGuess = parseInt(guessInput.value);

    // Memeriksa apakah tebakan valid
    if (userGuess >= 1 && userGuess <= 100) {
        // Mengurangi jumlah tebakan tersisa
        guessesLeft--;
        // Memeriksa apakah tebakan benar
        if (userGuess === randomNumber) {
            // Menambah skor
            score += 100;
            // Memperbarui tampilan skor
            scoreElement.textContent = score;
            // Menampilkan pesan tebakan benar
            alert("Congratulations! You guessed the correct number.");
            // Menghasilkan angka acak baru
            randomNumber = Math.floor(Math.random() * 100) + 1;
            // Memperbarui jumlah tebakan tersisa
            guessesLeft = 5;
        } else {
            // Menampilkan pesan apakah tebakan terlalu besar atau terlalu kecil
            var message = userGuess < randomNumber ? "Too small!" : "Too big!";
            // Memeriksa apakah tebakan tersisa telah habis
            if (guessesLeft === 0) {
                // Menampilkan pesan tebakan tersisa habis
                alert("Sorry, you have run out of guesses. The correct number was: " + randomNumber);
                // Mengarahkan ke halaman utama
                window.location.href = "homepage.html";
            } else {
                // Menampilkan pesan tebakan salah dan jumlah tebakan tersisa
                alert("Wrong guess! " + message + " You have " + guessesLeft + " guesses left.");
            }
        }
        // Memperbarui tampilan tebakan tersisa
        guessesLeftElement.textContent = guessesLeft;
    } else {
        // Menampilkan pesan jika tebakan tidak valid
        alert("Please enter a number between 1 and 100.");
    }

    // Mengosongkan input tebakan
    guessInput.value = '';
});

// Mendapatkan elemen tombol hint
var hintButton = document.querySelector('.hint-button');

// Event listener untuk tombol hint
hintButton.addEventListener('click', function() {
    // Mendapatkan rentang clue
    var minClue = randomNumber - 7;
    var maxClue = randomNumber + 7;

    // Memastikan rentang clue tidak melebihi batas 1-100
    minClue = Math.max(minClue, 1);
    maxClue = Math.min(maxClue, 100);

    // Menampilkan petunjuk
    alert("The number is between " + minClue + " and " + maxClue + ".");
});

// Menampilkan petunjuk secara otomatis saat permainan dimulai
window.addEventListener('load', function() {
    // Menentukan apakah angka ganjil atau genap
    var evenOrOdd = randomNumber % 2 === 0 ? 'even' : 'odd';

    // Menampilkan petunjuk
    alert("The number is between 1 and 100, and it's " + evenOrOdd + ".");
});
