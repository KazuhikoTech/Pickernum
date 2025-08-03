document.addEventListener('DOMContentLoaded', () => {
    const minInput = document.getElementById('min-num');
    const maxInput = document.getElementById('max-num');
    const generateBtn = document.getElementById('generate-btn');
    const resultSpan = document.getElementById('result');

    generateBtn.addEventListener('click', () => {
        // Mengambil nilai dari input dan mengubahnya menjadi angka
        const min = parseInt(minInput.value, 10);
        const max = parseInt(maxInput.value, 10);

        // Memeriksa apakah input valid
        if (isNaN(min) || isNaN(max) || min > max) {
            resultSpan.textContent = 'Invalid!';
            alert('Pastikan angka minimum lebih kecil dari angka maksimum dan input valid.');
            return;
        }

        // Menghitung angka acak
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        // Menampilkan hasilnya
        resultSpan.textContent = randomNumber;
    });
});