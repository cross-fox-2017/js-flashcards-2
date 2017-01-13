"use strict"
// write your code here
import Controller from "./controller"

export default class View{
  trueAnswer() {
    console.log("Jawaban Anda Benar\n")
  }
  falseAnswer(a,b) {
    console.log(`Jawaban ${a} masih salah, sudah salah ${b} kali\n`)
  }
  answer(data){
    console.log(data)
  }
  thank(){
    console.log('Terima Kasih');
  }
  welcome(kartu){
    console.log(`Selamat datang dipermainan kartu ${kartu}`)
    console.log("Tekan Enter untuk melanjutkan")
  }

}
