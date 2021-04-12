

document.getElementById('submitBtn').onclick = function () {
    var opsi = document.getElementById("opsiPerhitungan").value;
    document.getElementById("judul_hitung").innerHTML = opsi;
    // console.log(opsi)

    var r = document.getElementById('jari').value;
    var t = document.getElementById('tinggi').value;
    if (opsi == 'Luas Bola') {
        var permukaanBola = 4 * 3.14 * Math.pow(r, 2);
        document.getElementById("hasil_perhitungan").innerHTML = permukaanBola;
        return;
    }
    else if (opsi == 'Volume Bola') {
        var kubikBola = 4 / 3 * 3.14 * Math.pow(r, 3);
        document.getElementById("hasil_perhitungan").innerHTML = kubikBola;
        return;
    }
    else if (opsi == 'Luas Tabung') {
        var luasPermukaanTabung = 2 * 3.14 * parseInt(r) * (parseInt(r) + parseInt(t));
        document.getElementById("hasil_perhitungan").innerHTML = luasPermukaanTabung;
        return;
    }
    else if (opsi == 'Volume Tabung') {
        var luasTabung1 = 3.14 * (Math.pow(r, 2)) * parseInt(t);
        document.getElementById("hasil_perhitungan").innerHTML = luasTabung1;
        return;
    }
}
