"use strict"
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const View = require("./view.js")
const Model = require("./model.js")

class Hospital {
    constructor() {
        this.namaKaryawan = ["OmTelolet", "OmGoogle", "OmOBom", "Dude","omDokterOm","Siska"]
        this.tipeKaryawan = ["admin", "admin", "ob", "ob","dokter","receptionist"]
        this.userKaryawan = ["admin1", "admin2", "ob1", "ob2","dokter1","rs1"]
        this.passwordKaryawan = ["adminSatu", "adminDua", "obSatu", "obDua","dokterSatu","rsSatu"]
        this.userID

    }
    tampilRS() {
        View.tampil();
        this.user();
    }

    user() {
        rl.question('> Please enter your username: ', (user) => {
            if (this.userKaryawan.indexOf(user) != -1) {
                this.userID = this.userKaryawan.indexOf(user)
                this.password()
            } else {
                this.user()
            }
        })
    }

    password() {
        rl.question('> Please enter your password: ', (pwd) => {
            if (pwd == this.passwordKaryawan[this.userID] && this.tipeKaryawan[this.userID] != "ob") {
                View.tampilNama(this.namaKaryawan[this.userID],this.tipeKaryawan[this.userID])
                this.karyawan()
            } else if (pwd == this.passwordKaryawan[this.userID] && this.tipeKaryawan[this.userID] == "ob") {
                View.tampilNama(this.namaKaryawan[this.userID],this.tipeKaryawan[this.userID],"ob")
                this.ob()
            } else {
                this.password()
            }
        })
    }

    ob() {
        rl.question('1. To Show All Office Boy || "EXIT" to Logout =>  ', (inputOb) => {
            if (inputOb.toUpperCase() == "1") {
                var jumlahOB = 0;
                for (var i = 0; i < this.tipeKaryawan.length; i++) {
                    if (this.tipeKaryawan[i] == "ob") {
                        View.dataOb(jumlahOB+1,this.namaKaryawan[i])
                        jumlahOB++
                    }
                }
                View.jumlahDataOB(jumlahOB)
                this.ob()
            } else if (inputOb.toUpperCase() == "EXIT") {
                View.logout()
                rl.close()
            } else {
                this.ob()
            }
        })
    }

    karyawan() {
        View.viewKaryawan()
        this.proses()
    }

    proses() {
        rl.question('Please Input => ', (inputOption) => {
            if (inputOption.toUpperCase() == "1") {
                var jumlahKaryawan = 0;
                for (var i = 0; i < this.tipeKaryawan.length; i++) {
                    View.dataKaryawan(jumlahKaryawan+1,this.namaKaryawan[i],this.tipeKaryawan[i])
                    jumlahKaryawan++
                }
                View.jumlahKaryawan(jumlahKaryawan)
                this.karyawan()
            } else if (inputOption.toUpperCase() == "2") {
              var jumlahPasien = 0;
              for (var i = 0; i < Model.namaPasien.length; i++) {
                  View.dataPasien(jumlahPasien+1,Model.namaPasien[i],Model.penyakitPasien[i])
                  jumlahPasien++
              }
              View.jumlahPasien(jumlahPasien)
              this.karyawan()
            } else if (inputOption.toUpperCase() == "3") {
                var jumlahOB = 0;
                for (var i = 0; i < this.tipeKaryawan.length; i++) {
                    if (this.tipeKaryawan[i] == "ob") {
                        View.dataOb(jumlahOB+1,this.namaKaryawan[i])
                        jumlahOB++
                    }
                }
                View.jumlahDataOB(jumlahOB)
                this.karyawan()
            } else if (inputOption.toUpperCase() == "4") {
                //Menampilkan nama pasien, sakit pasien, id pasien (sama dengan pasien bedannya ada idnya)
                var jumlahPasien = 0;
                for (var i = 0; i < Model.namaPasien.length; i++) {
                    View.dataRecord(i,Model.namaPasien[i],Model.penyakitPasien[i])
                    jumlahPasien++
                }
                View.jumlahPasien(jumlahPasien)
                this.karyawan()
            } else if (inputOption.toUpperCase() == "5") {
                //menambah pasien
                this.addPasien()
            } else if (inputOption.toUpperCase() == "6") {
                //menambah menghapus pasien
                this.removePasien()
            } else if (inputOption.toUpperCase() == "EXIT") {
                rl.close()
            } else {
                this.karyawan()
            }
        })
    }

    addPasien(){
      View.newPasien()
      rl.question('Please Input => ',(add)=>{
          var addData = add.split(",")
          if(add.toUpperCase() == "HOME"){
            this.karyawan()
          }else if(add.toUpperCase() == "EXIT"){
            rl.close()
          }else if(addData.length ==2){
              Model.addNewData(addData[0],addData[1])
              View.tampilNewPasien(addData[0],addData[1])
              this.addPasien()
          }else{
            this.addPasien()
          }
      })
    }

    removePasien(){
      View.deletePasien()
      rl.question('Please Input => ',(remove)=>{
          var input = Number(remove)
          if(remove.toUpperCase() == "HOME"){
            this.karyawan()
          }else if(remove.toUpperCase() == "EXIT"){
            rl.close()
          }else if(typeof(input)=="number" && input >=0 && input < Model.namaPasien.length){
              Model.deleteData(remove)
              View.tampilDeletePasien(remove,Model.namaPasien[remove],Model.penyakitPasien[remove])
              this.removePasien()
          }else{
            this.removePasien()
          }
      })
    }


}

var aplikasi = new Hospital()
aplikasi.tampilRS()
aplikasi.user()
