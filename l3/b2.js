// Xây dựng lớp Candidate (Thí sinh)
//gồm các thuộc tính: mã, tên, ngày tháng năm sinh, điểm thi Toán, Văn, Anh
// và các phương thức cần thiết. constructor, getter, setter

// Xây dựng lớp TestCandidate để kiểm tra lớp trên:

// – Nhập vào n thí sinh (n do người dùng nhập)

// – In ra thông tin về các thí sinh có tổng điểm lớn hơn 15

class Candidate {
    constructor(code, name, birthday, math, literature, english) {
      this.code = code;
      this.name = name;
      this.birthday = birthday;
      this.math = math;
      this.literature = literature;
      this.english = english;
    }
  
    totalScore() {
      return this.math + this.literature + this.english;
    }
  
    toString() {
      console.log(`
            Mã: ${this.code}
            Tên: ${this.name}
            Ngày sinh: ${this.birthday}
            Điểm toán: ${this.math}
            Điểm văn: ${this.literature}
            Điểm anh: ${this.english}
          `);
    }
  }
  
  class TestCandidate {
    constructor() {
      this.listCandidate = [];
    }
  
    //push
    pushCandidate(candidate) {
      this.listCandidate.push(candidate);
    }
  
    //check score
    checkScore() {
      //for(let i=0; i<3;i++) xuất hiện trước phiên bản ES5
      //for of for(let candidate of listCandidate) xuất hiện ES5
      //foreach xuất hiện ES6
      for (let candidate of this.listCandidate) {
        if (candidate.totalScore() > 15) {
          candidate.toString();
        }
        // console.log(candidate.totalScore());
      }
    }
  
    //toString
    toString() {
      console.log(this.listCandidate);
    }
  }
  
  let n = prompt("Mời bạn nhập n: ");
  //n có kiểu dữ liệu là string
  n = parseInt(n);
  
  let listCandidate = new TestCandidate();
  
  for (let i = 0; i < n; i++) {
    let code = prompt("Mời bạn nhập mã: ");
    let name = prompt("Mời bạn nhập tên: ");
    let birthday = prompt("Mời bạn nhập ngày sinh: ");
    let math = parseInt(prompt("Mời bạn nhập điểm toán: "));
    let literature = parseInt(prompt("Mời bạn nhập điểm văn: "));
    let english = parseInt(prompt("Mời bạn nhập điểm anh: "));
    let candidate = new Candidate(
      code,
      name,
      birthday,
      math,
      literature,
      english
    );
  
    listCandidate.pushCandidate(candidate);
  }
  
  // listCandidate.toString();
  listCandidate.checkScore();