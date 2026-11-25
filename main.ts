import { mkdirSync, writeFileSync } from "node:fs";

// Pemenang kandidat #7 (91 karakter, skor juri 24/25) — dipilih karena:
// - spesifik & earned: "her last twenty" adalah adegan kecil yang konkret,
//   bukan nasihat abstrak; bobotnya datang dari momennya, tanpa penjelasan.
// - suara nyata: recalling a real moment (kakak meminjamkan uang terakhirnya),
//   bukan slogan atau fortune cookie.
// - tight: 91 karakter, tiap kata bekerja, terbaca dalam satu napas.
// - lands: twist penutup ("Pay me back by never needing it again") membalik
//   utang menjadi kemandirian — nasihat yang berlaku jauh melampaui momen itu.
// Runner-up (#5, kakek menabung 10%) kalah karena masih terasa seperti
// nasihat keuangan standar; #7 adalah kenangan pribadi yang sulit ditiru.
const bestAdvice =
  'My older sister, lending me her last twenty, said, "Pay me back by never needing it again."';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bestAdvice, "utf8");
