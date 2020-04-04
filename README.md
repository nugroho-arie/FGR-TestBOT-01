//FGRTestBOT-01

#TestBOT untuk marBOT

v2.0.0 ---> Versi sama dengan marBOT terbaru

	Petunjuk penggunaan :

	1. Install dependencies (ketergantungannya) dulu ya, coba di google node.js seri yg baru dan stable.
		Kalo mau lebih seamless update gitnya buat commit, install git juga bisa (ini google juga aja).
	2. Clone git ini ke local user kalian ya. Terus di extract ajah. (Mau taro di git jg bebas deh).
	3. Letakkan file config.js (contact me), di ./src
	4. kalo udah buka terminal / bash / command prompt, terus ketik
		$ cd "folder FGRTestBOT-01"
	5. Masih di terminal, sekarang kita install dependency nya lagi pake:
		$ npm Install
	6. kalo ga ada error apa - apa, sekarang kita run botnya yah dengan cara :
		$ npm run start			--> start normal.
		$ npm run dev       --> start developer mode.
	7. Tunggu sampai terminal kalian kasih notifikasi bot Ready dsb.
	8. Untuk mematikan operasi bot di terminal tekan ctrl+c, terus pilih yes.
	9. kalau menggunakan developer mode, pas update js bot bakal terus running tapi crash kalo ada salah code (ini cocok buat ganti2 value, bukan nambahin fitur major).

#dependencies:
1. discord.js: v12.1.1
2. dotenv: v8.2.0
3. snekfetch: v4.0.4
4. nodemon: v2.0.2

version yg gue pake :
1. npm v6.13.4
2. node v12.16.1

--kalo mau update dependency harus manual ya, dari package.json diganti dulu,
baru nanti manual lagi pake
	$ npm install 'package-nya'
