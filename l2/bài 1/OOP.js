// class Human {
//   constructor(name, age, gender) {
//     // Các input do người dùng nhập vào
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }

//     say() {
//     // console.log(this)
//     console.log("Hello my name is " + this.name);
//   }
// }

// let human1 = new Human("Quân", 21, "nam");
// // student1.say();

// class Student extends Human {
//     constructor(name, age, gender,mssv,school) {
//         super(name, age, gender)
//         this.mssv = mssv;
//         this.school = school;
//     }

//     // Override
//     say() {
//         // super.say();
//         console.log("Bạn là nhất")
//     }
// }

// let student1 = new Student("Quân", 21, "nam",7234,"HUST")

// student1.say()


// Bài 1:

// Thiết lập lớp PhanSo để biểu diễn khái niệm phân số với hai thành phần dữ liệu tử số, mẫu số và các hàm thành phần cộng, trừ, nhân, chia hai phân số, các hàm thành phần xuất, nhập, định giá trị cho phân số. Viết chương trình cho phép nhập vào hai phân số, in ra kết quả các phép toán cộng, trừ, nhân, chia hai phân số kể trên.


// class PhanSo {
//   constructor(tuso,mauso) {
//       this.tuso = tuso
//       this.mauso = mauso
//   }


//   add(phanSo2) {
//       return new PhanSo(this.tuso*phanSo2.mauso + phanSo2.tuso*this.mauso , this.mauso*phanSo2.mauso)
//   }

//   mul(phanSo2) {
//     return new PhanSo(this.tuso*phanSo2.tuso , this.mauso*phanSo2.mauso)
//   }

//   sub(phanSo2) {
//     return new PhanSo(this.tuso*phanSo2.mauso - phanSo2.tuso*this.mauso , this.mauso*phanSo2.mauso)
//   }
  
//   div(phanSo2) {
//     return new PhanSo(this.tuso*phanSo2.mauso , this.mauso*phanSo2.tuso)
//   }
  
//   show() {
//     console.log(`${this.tuso}/${this.mauso}`)
//   }
// }

// let phanso1 = new PhanSo(1,5)
// let phanSo2 = new PhanSo(2,7)
// let result = phanso1.add(phanSo2)
// let result1 = phanso1.mul(phanSo2)
// let result2 = phanso1.sub(phanSo2)
// let result3 = phanso1.div(phanSo2)
// result.show()
// result1.show()
// result2.show()
// result3.show()


// Bài 2: 

class Candidate {
  constructor(id,name,dob,markE,markM,markL){
    this.id = id
    this.name = name
    this.dob = dob    
    this.markE = markE
    this.markM = markM
    this.markL = markL
  }
 

  
tot() {
  return new Candidate(this.markE + this.markM + this.markL)
}

rep() {
  return new Candidate(this.id,this.name,this.dob,this.markE + this.markM + this.markL)
}

  show() {
    console.log(this.id,this.name,this.dob);
  }
}



let thiSinh1 = new Candidate("01","A",2000,10,8,7)
let thiSinh2 = new Candidate("02","B",2000,9,6,7)
let t1 = thiSinh1.tot()
let result1 = thiSinh1.rep()
let result2 = thiSinh2.rep()
 

 result1.show() 
 result2.show() 



