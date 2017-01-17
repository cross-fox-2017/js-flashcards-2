"use strict"
// write your code here
class Model {
    constructor() {
        this.namaPasien = ["budi", "budo", "bubu"]
        this.penyakitPasien = ["Sakit Hati", "Sakit Jiwa", "Sakit Jantung"]
    }
    addNewData(addData, addData1) {
        this.namaPasien.push(addData)
        this.penyakitPasien.push(addData1)
    }

    deleteData(remove) {
        this.namaPasien.splice(remove, 1)
        this.penyakitPasien.splice(remove, 1)
    }


}

var mdl = new Model()
module.exports = mdl;
