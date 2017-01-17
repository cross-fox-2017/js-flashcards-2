"use strict"
// write your code here
class View {
    constructor(namaRS, lokasiRS) {
        this.namaRS = namaRS
        this.lokasiRS = lokasiRS
    }

    tampil() {
        console.log(`> Welcome to ${this.namaRS} ${this.lokasiRS}`);
        console.log(`> ----------------------------`);
    }
    viewKaryawan() {
        console.log(`> ----------------------------`);
        console.log(`> What would you like to do?`);
        console.log('> Options:');
        console.log(`1. To Show All Karyawan`)
        console.log(`2. To Show All pasien`);
        console.log(`3. To Show All Office Boy`);
        console.log(`4. To Show All Record Pasien`);
        console.log(`5. To Add Pasien`);
        console.log(`6  To Remove Pasien`);
        console.log(`Ketik "EXIT" : To Logout`);
        console.log(`> ----------------------------`);
    }

    tampilNama(namaKaryawan, tipeKaryawan,params){
      console.log(`Welcome,  ${namaKaryawan}. Your access level is: ${tipeKaryawan}`);
      if(params == "ob"){
        console.log(`> ----------------------------`);
        console.log(`> What would you like to do?`);
        console.log('> Options:');
      }
    }
    dataOb(jumlahOB, namaKaryawan){
      console.log(`${jumlahOB}. ${namaKaryawan}, Jabatan : OB`);
    }
    jumlahDataOB(jumlahOB){
      console.log(`Jumlah OB :  ${jumlahOB}\n`);
      console.log(`> ----------------------------`);
    }
    logout(){
      console.log("Sistem Logout");
    }

    dataKaryawan(jumlahKaryawan,namaKaryawan,tipeKaryawan){
        console.log(`${jumlahKaryawan}. ${namaKaryawan}, Jabatan : ${tipeKaryawan}`);
    }
    jumlahKaryawan(jumlahKaryawan){
        console.log(`Jumlah Karyawan :  ${jumlahKaryawan}`);
    }

    dataPasien(jumlahPasien,namaPasien,penyakitPasien){
        console.log(`${jumlahPasien}. ${namaPasien}, Sakit : ${penyakitPasien}`);
    }
    jumlahPasien(jumlahPasien){
        console.log(`Jumlah Pasien :  ${jumlahPasien}`);
    }

    dataRecord(i,namaPasien,penyakitPasien){
        console.log(`ID Pasien : ${i}\nNama ${namaPasien}\nSakit : ${penyakitPasien}`);
    }

    newPasien(){
      console.log(`To Add Input "Nama,Penyakit" Contoh "Andika,Sakit Jantung"`);
      console.log(`"HOME" Back Home`);
      console.log(`"EXIT" To Logout`);
    }

    tampilNewPasien(addData,addData1){
        console.log(`Add Pasien Masuk, Nama :${addData} Sakit: ${addData1}`);
    }

    deletePasien(){
      console.log(`Input "ID" Pasien To Remove`);
      console.log(`Input "HOME" Back Home`);
      console.log(`Input "EXIT" To Logout`);
    }

    tampilDeletePasien(remove,namaPasien,penyakitPasien){
      console.log(`ID: ${remove}, Nama: ${namaPasien} Sakit: ${penyakitPasien} => TerHAPUS`);
    }

}

var tampilData = new View("Mistic Hospital", "Jakarta")
module.exports = tampilData;
