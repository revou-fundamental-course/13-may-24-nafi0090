function showSection(section) {
    document.getElementById('luas-segitiga').style.display = 'none';
    document.getElementById('keliling-segitiga').style.display = 'none';

    if (section === 'luas') {
        document.getElementById('luas-segitiga').style.display = 'block';
    } else if (section === 'keliling') {
        document.getElementById('keliling-segitiga').style.display = 'block';
    }
}

function hitungLuas() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const luas = 0.5 * alas * tinggi;

    const runtutanLuas = `
        L = 1/2 x a x t
        L = 1/2 x ${alas} x ${tinggi}
        L = ${luas}
    `;

    document.getElementById('hasilLuas').innerText = runtutanLuas;
}

function hitungKeliling() {
    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);
    const sisi3 = parseFloat(document.getElementById('sisi3').value);
    const keliling = sisi1 + sisi2 + sisi3;

    const runtutankeliling = `
    K = S1 + S2 + S3
    K = ${sisi1} + ${sisi2} + ${sisi3}
    K = ${keliling}
`;

    document.getElementById('hasilKeliling').innerText = runtutankeliling;
}
