// Để quản lý hồ sơ học sinh của trường THPT nhà trường cần các thông tin sau: Lớp, 
// và các thông tin về cá nhân của mỗi học sinh.

// Mỗi học sinh có các thông tin sau: Họ tên, tuổi, quê quán.

// Yêu cầu 1: Xây dựng class HocSinh để quản lý thông tin của mỗi học sinh.
// Yêu cầu 2: Xây dựng các phương thức thêm, hiển thị thông tin của mỗi học sinh.
// Yêu cầu 3: Cài đặt chương trình có các chức năng sau:
// 	Thêm học sinh mới.
// 	Hiện thị các học sinh 20 tuổi.
// 	Cho biết số lượng các học sinh có tuổi là 23 và quê 

class HocSinh {
    constructor(ten, tuoi, que) {
      this.ten = ten;
      this.tuoi = 0;
      this.que = que;
    }
  


  
    //toString
    toString() {
      console.log(`
          Tên: ${this.ten}
          Tuổi: ${this.tuoi}
          Quê quán: ${this.que}
        `);
    }
  }
  
class TestHs {
    constructor() {
        this.themHocSinh = []
    }

    pushHocSinh(HocSinh) {
        this.themHocSinh.push(HocSinh)
    }

    checkTuoi() {
        for (let HocSinh of this.themHocSinh) {
            if (HocSinh.tuoi() = 20) {
              HocSinh.toString();
            }           
          }
    }

    toString() {
        console.log(this.themHocSinh);
      }
}

let themHocSinh = new TestHs

 
