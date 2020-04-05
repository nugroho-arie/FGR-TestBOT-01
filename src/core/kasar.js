const kasar = {
  "asu" : "gabole kasar ya! 🤬🤬🤬",
  "jembut" : "O___O",
  "anjing" : "kucing",
  "cok" : "yg ketua fiagra bkn sih?",
  "kucing" : "anjing",
  "lho" : "hee?",
  "loh" : "he??",
  /*"8" : "iya kak, iyaa",
  "9" : "emangnya aku bolot kaya icangg??",
  "10": "sekali lagi dapet..........",
  "11": "ketuanya fiagra mana sih??",
  "12": "hufttttt",
  "13": "hoaammmm",
  "14": "KATANYA ANAK FILM NONTON GIHHHHHHHHH",
  "15": "Kenangan itu cuma hantu di sudut fikir, selama kita cuma diam, selamanya dia tetap jadi hantu. Ga akan pernah jadi kenyataan",
  "16": "cemburu itu hanya untuk orang yang nggak percaya diri. Dan sekarang aku sedang tidak percaya diri.",
  "17": "Cinta Tidak Bisa Dipaksakan, Merelakannya Pergi Jauh Lebih Baik Daripada Menggenggamnya Tanpa Cinta",
  "18": "apapun yang kamu lakukan, baik ataupun buruk, akan selalu ada orang yang berkomentar negatif.",
  "19": "Yaelaaah serius amat",
  "20": "IPK nya berapa kak?",
  "21": "Bawel - bawel gini lulus nggak sih???",
  "22": "g",
  "23": "lagi ngapain?",
  "24": "hari ini puasa gag?",
  "25": "lebaran pulang kmpung gag?",
  "26": "Ada yang bagi dua?",
  "27": "Sekarang kakak gambar orang ya",
  "28": "Buah apa warnanya kuning isinya pisang??",
  "29": "Kita belum menyelesaikan pembicaraan kita tadi!!!!",
  "30": "Salam buat azza dooonggg kak ucupp",
  "31": "coki kalo minum sukanya tidur",
  "32": "Jar jar jar?? JAARR",
  "33": "Ada yang kenal jibran nggaaak?",
  "34": "Jibran mana sih?",
  "35": "Kok jibran nggak kedengeran lagi . . .",
  "36": "ngeeeeengg",
  "37": "Yaudah lah yaa, yuda udah balikin botol beloom kak",
  "38": "Dulu ada yang namanya..",
  "39": "Marhabban yaa ramadhan",
  "40": "Capek kak.."
*/
  }
module.exports = message => {
  if(kasar[message.content]) {
    message.channel.send(`${message.author} ` + kasar[message.content]);
  }
}
