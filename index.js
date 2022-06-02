// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = function (listBelanja) {
  const arrListBelanja = [];
  for (let list = 0; list < listBelanja.length; list++) {
    const belanjaan = "- " + listBelanja[list].nama + " x " + listBelanja[list].kuantitas;
    arrListBelanja.push(belanjaan)
  }

  return arrListBelanja;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = function (listBelanja) {
  let hargaTotal = 0
  for (let list = 0; list < listBelanja.length; list++) {
    let hargaPerJenisBarang = listBelanja[list].harga * listBelanja[list].kuantitas;
    hargaTotal += hargaPerJenisBarang
  }

  return hargaTotal;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
