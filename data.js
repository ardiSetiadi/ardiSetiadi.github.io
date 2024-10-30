const nama = 'ardi setiadi';
let usia = 30;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (usia > 30) {
    generasi = "generasi dewasa";
    } 
    else if (usia <= 30 && usia > 17) {
        generasi = "generasi remaja";
    } 
    else if (usia <= 17 && usia > 5) {
        generasi = "generasi anak anak";
    }
    else if (usia <= 5 && usia > 3) {
        generasi = "generasi balita";
    }
     else {
        generasi = "baru lahir";
    }

    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();
