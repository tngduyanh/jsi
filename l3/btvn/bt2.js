
class Account {
    constructor(soTaiKhoan, tenTaiKhoan) {
      this.soTaiKhoan = soTaiKhoan;
      this.tenTaiKhoan = tenTaiKhoan;
      this.soTienTaiKhoan = 50000;
    }
  
    //napTien
    napTien(soTienNap) {
      if (soTienNap < 0) {
        alert("Số tiền nạp không hợp lệ");
      } else {
        this.soTienTaiKhoan = this.soTienTaiKhoan + soTienNap;
      }
    }
  
    //rutTien
    rutTien(soTienRut) {
      if (soTienRut < 0) {
        alert("Số tiền bạn muốn rút không hợp lệ");
      } else if (soTienRut > this.soTienTaiKhoan) {
        alert("Bạn không đủ tiền để rút");
      } else {
        this.soTienTaiKhoan = this.soTienTaiKhoan - soTienRut;
      }
    }
  
    //daoHan
    daoHan() {
      const LAISUAT = 0.035;
      this.soTienTaiKhoan = this.soTienTaiKhoan + this.soTienTaiKhoan * LAISUAT;
    }
  
    chuyenTien(nguoiNhan, soTienChuyen) {
      if (soTienChuyen < 0) {
        alert("Số tiền bạn muốn chuyển không hợp lệ");
      } else if (soTienChuyen > this.soTienTaiKhoan) {
        alert("Số tiền trong tài khoản của bạn không đủ");
      } else {
        this.rutTien(soTienChuyen);
        nguoiNhan.napTien(soTienChuyen);
      }
    }
  
    //toString
    toString() {
      console.log(`
          Số tài khoản: ${this.soTaiKhoan}
          Tên tài khoản: ${this.tenTaiKhoan}
          Số tiền tài khoản: ${this.soTienTaiKhoan}
        `);
    }
  }
  
//   let account1 = new Account(123, "BIDV");
//   let account2 = new Account(456, "MB Bank");
//   account1.toString();
//   account2.toString();
//   account1.chuyenTien(account2, 40000);
//   account1.toString();
//   account2.toString();




// let formSubmit = document.getElementById("form");
// let list = document.getElementById("list");
// // Khởi tạo localStorage
// if (!localStorage.users) {
//     //JSON.stringify chuyển thành string 
//   localStorage.users = JSON.stringify([]);
// }
// // Nổi bọt
// formSubmit.addEventListener("submit", (e) => {
//   // Ngăn việc load lại trang
//   e.preventDefault();
//   // Lấy dữ liệu người dùng
//   let user = {
//     name: formSubmit.name.value,
//     age: formSubmit.age.value,
//     ttqh: formSubmit.ttqh.value,
//     email: formSubmit.email.value,
//     gender: formSubmit.gender.value,
//   };
//   // Lấy lại mảng lưu trong local
//   let arrayData = JSON.parse(localStorage.getItem("users"));
//   // Update mảng
//   arrayData.push(user);
//   // Lưu ngược trở lại local
//   localStorage.users = JSON.stringify(arrayData);
// });
