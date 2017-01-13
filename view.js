"use strict"

export class View{
  static welcome(){
    console.log(`Selamat datang Dipermaian FlashCard 2\n\n`);
  }
  static nullFile(){
    console.log(`\t"Anda tidak memasukkan nama file \n\tbabel-node flashcard.js <nama_file.json>\n\tAnda menjalankan deck "data.json""\n`);
  }
  static fileNotNull(file){
    console.log(`Anda memainkan Deck ${file}\n`);
  }
  static setquestion(counter){
    return `\n${counter}?\n`;
  }
  static rightAnswer(){
    console.log(`Jawaban Anda BETUL!!! \n`);
  }
  static wrongAnswer(x){
    console.log(`Yah, masih salah, coba lagi bro (kamu sudah salah : ${x} kali) \n`);
  }
  static perfect(){
    console.log(`Permainan Selesai\n`);
  }
  static notPerfect(x,y){
    console.log(`Permainan Selesai\n\nsoal yang paling sulit adalah "${x}"\n(salah ${y} x) `);
  }
}
