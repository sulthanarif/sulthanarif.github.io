
console.log('Hello, ini halaman kalkulator');

// membuat Object Kalkulator

const kalkulator = {
    angkaDisplay: '0',
    operator: null,
    angkaPertama: null,
    tungguAngkaKedua: false
};

// membuat fungsi Updating Display

function updateDisplay() {
    document.querySelector("#displayNumber").innerText = kalkulator.angkaDisplay;
}

// membuat fungsi reset display kalkulator

function resetKalkulator() {
    kalkulator.angkaDisplay = '0';
    kalkulator.operator = null;
    kalkulator.angkaPertama = null;
    kalkulator.tungguAngkaKedua = false;
}

// membuat fungsi menginput angka

function inputDigit(digit) {
    if (kalkulator.angkaDisplay === '0') {
        kalkulator.angkaDisplay = digit;
    } else {
        kalkulator.angkaDisplay += digit;
    }
}


 

// embuat fungsi input angka menjadi negatif atau positif

function inverseAngka() {
    if (kalkulator.angkaDisplay === '0') {
        return;
    }
    kalkulator.angkaDisplay = kalkulator.angkaDisplay * -1;
}

// Membuat fungsi perhitungan / kalkulasi

function hitungKalkulasi() {
    // Jika kondisi angka pertama / operator belum ada
    if (kalkulator.angkaPertama == null || kalkulator.operator == null) {
        alert('masukin dulu angka nya');
        return;
    }

    let hasil = 0;
    if (kalkulator.operator === '+') {
        hasil = parseInt(kalkulator.angkaPertama) + parseInt(kalkulator.angkaDisplay);
    } else {
        hasil = parseInt(kalkulator.angkaPertama) - parseInt(kalkulator.angkaDisplay);
    }
    kalkulator.angkaDisplay = hasil;
}

function gunakanOperator(operator) {
    if (!kalkulator.tungguAngkaKedua) {
        kalkulator.operator = operator;
        kalkulator.tungguAngkaKedua = true;
        kalkulator.angkaPertama = kalkulator.angkaDisplay;

        // Mengatur ulang nilai angka display supaya button selanjutnya dimulai dari angka pertama lagi
        kalkulator.angkaDisplay = '0';
    } else {
        alert('Operator udah disetel');
    }
}

// memilih elemen button dalam kalkulator.html
const buttons = document.querySelectorAll(".button");


// looping button dengan fungsi setiap button;

for (let button of buttons) {
    button.addEventListener('click', function (event) {
        // mendapatkan objek elemen yang diklik
        const target = event.target;

        // Jika button clear kalkulator diklik
        if (target.classList.contains('clear')) {
            resetKalkulator();
            updateDisplay();
            return;
        }

        // Jika button -/+ diklik menghasilkan input angka negatif atau positif

        if (target.classList.contains('negative')) {
            inverseAngka();
            updateDisplay();
            return
        }

        // Jika button = atau sama dengan diklik untuk menampilan hasil perhitungan

        if (target.classList.contains('equals')) {
            hitungKalkulasi();
            updateDisplay();
            return
        }

        // Jika button operator +, -, *, / diklik
        if (target.classList.contains('operator')) {
            gunakanOperator(target.innerText);
            return;
        }

        // Masukkan angka
        inputDigit(target.innerText);
        updateDisplay();
    })
}