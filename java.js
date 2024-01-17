function calculate() {
    var sisi = parseFloat(document.getElementById('sisi').value);

    if (!isNaN(sideLength)) {
        var area = sisi * sisi;
        var perimeter = 4 *sisi;

        document.getElementById('areaResult').innerText = 'Luas: ' + area.toFixed(2);
        document.getElementById('perimeterResult').innerText = 'Keliling: ' + perimeter.toFixed(2);
    } else {
        alert('Masukkan panjang sisi yang valid.');
    }
}