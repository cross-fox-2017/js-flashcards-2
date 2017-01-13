"use strict"
// write your code here
import {Model} from './model.js'

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export class View{

  static permainan(){
    console.log(`Selamat datang Dipermaian FlashCard 2\n\n`);
    if(process.argv[2] == null){
      console.log(`\t"Anda tidak memasukkan nama file \n\tbabel-node flashcard.js <nama_file.json>\n\tAnda menjalankan deck "data.json""\n`);
    } else {
      console.log(`Anda memainkan Deck ${process.argv[2]}\n`);
    }
    let counter = 0
    let newData = Model.data(process.argv[2])
    rl.setPrompt(`${newData[counter].definition}?\n`)
    rl.prompt();
    rl.on('line', (jawaban) => {
      if(jawaban === 'skip'){
        newData.push(newData[counter]);
        newData.shift();
        console.log(`\n`)
      }else if(jawaban.toLowerCase() == newData[counter].term.toLowerCase()){
        console.log(`Jawaban Anda BETUL!!! \n`);
        counter++
      }else{
        newData[counter].mistakes++
        console.log(`Yah, masih salah, coba lagi bro (kamu sudah salah : ${newData[counter].mistakes} kali) \n`);
      }
      if(counter=== newData.length){
        rl.close()
      }
      rl.setPrompt(`${newData[counter].definition}? \n`)
      rl.prompt();
    }).on('close', () => {
      newData.sort(function(a,b){
        return a.mistakes < b.mistakes
      })
      let tersulit = newData[0]
      if(tersulit.mistakes===0){
        console.log(`Permainan Selesai\n\nsemua soal mudah bagimu, nilai 100 bro! `);
      } else{
        console.log(`Permainan Selesai\n\nsoal yang paling sulit adalah "${tersulit.definition}"\n(salah ${tersulit.mistakes} x) `);
      }
      process.exit(0);
    });
  }
}
