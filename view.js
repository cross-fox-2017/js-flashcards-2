"use strict"
// write your code here

class View {
  static showSoal(id){
    console.log(id)
  }

  static pesanBenar(){
    console.log('\nJawaban Benar\n'.green);
  }

  static pesanSalah(x){
    console.log(`jawaban salah\n`.red);
    console.log(`jawaban salah : ${x}\n`);
  }

  static pesanMenang(){
    console.log('\nSelamat anda menang!'.rainbow);
  }
}

module.exports = View
