"use strict"


class View {
  static question(data) {
    console.log(data)
  }

  static winMessage() {
    console.log("WAH HEBAT BGT LU")
  }

  static rightMessage() {
    console.log("BETUL BETUL BETUL")
  }

  static wrongMessage(x,y) {
    console.log(`Jawaban '${x} masih salah, udah salah ${y} kali ya'`);
  }

  static abortMessage() {
    console.log('Ah Culun berenti tengah jalan');
  }
}

module.exports = View
