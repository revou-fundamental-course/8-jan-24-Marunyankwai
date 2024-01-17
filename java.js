function handleKeyDown(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submission
        calculate();    }
    }
    

function clearInput() {
    document.getElementById('Sisi').value = '';
    document.getElementById('areaResult').innerText = 'Luas: ';
    document.getElementById('perimeterResult').innerText = 'Keliling: ';
}
function calculate() {
    var Sisi = parseFloat(document.getElementById('Sisi').value);

    if (!isNaN(Sisi)) {
        var area = Sisi * Sisi;
        var perimeter = 4 *Sisi;

        document.getElementById('areaResult').innerText = 'Luas: ' + area.toFixed(2);
        document.getElementById('perimeterResult').innerText = 'Keliling: ' + perimeter.toFixed(2);
    } else {
        alert('Masukkan panjang sisi yang valid.');
    }
}