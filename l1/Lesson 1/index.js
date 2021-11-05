//1. Các từ khóa để khai báo biến trong js.
// - let, var và const

// let, var và const
// +let, var thì sẽ dùng cho những biến mà mình có thể thay đổi được giá trị
// +const: constant (hằng số), những biến khai báo bằng từ khóa const, thì sẽ không thể gán lại được giá trị khác
// +let, var có thể khai báo biến mà không cần gán sẵn giá trị
// +const khi khai báo biến thì mình phải gán luôn giá trị cho biến đó

// let, const và var
// +scope
// +hoisting
// {  }
// +let và const sẽ chịu ảnh hưởng bởi scope
// +var thì chịu ảnh hưởng bởi scope thông thường, var chỉ chịu ảnh hưởng của scope function\
// function logger() {
//   var x = "Hello";
//   console.log(x);
// }
// logger();
// console.log(x);

// +hoisting: var sẽ có cơ chế hoisting, tức là có thể sử dụng trước khi khai báo biến
// +var: thì mình có thể khai báo lại
// let x = 10;
// console.log(x);
// let x = 20;
// console.log(x);

//Quy tắc đặt tên biến
//+Tên biến sẽ là 1 danh từ
//+Tên hàm sẽ là 1 động từ
//+ tinhTuoi (đặt tên biến kiểu lạc đà)

// const/ var/ let ten_function = (param1, ...paramN) => {
//     //code
// }

const logger2 = () => {
  console.log("Hello world");
};
// logger2();

// const tinhBinhPhuong = (a) => {
//     //
// }
// tinhBinhPhuong(3);

//function bình thường sẽ có context
//arrow function sẽ không có context

let danhSachCrushCu = ["Khôi", "Lan", "Chi", "Huy"];

// Một số phương thức hay dùng trong mảng
// +pop: xóa phần tử ở vị trí cuối trong mảng
// +push: thêm một hoặc nhiều phần tử vào vị trí cuối mảng
// +splice: xóa, thêm một hoặc nhiều phần tử ở một vị trí index nào đó
// +shift và unshift: thêm hoặc xóa phần tử ở đầu mảng

// danhSachCrushCu.pop();
// console.log(danhSachCrushCu);

// danhSachCrushCu.push("Tuyết", "Linh", "Hoàng");
// console.log(danhSachCrushCu);

// Dùng splice để xóa
// cú pháp splice: array.splice(index, soLuongPhanTuXoa);

// danhSachCrushCu.splice(2, 2);
// console.log(danhSachCrushCu);

//Dùng splcie để thêm phần tử
// cú pháp splice: array.splice(index, 0, el1, el2,...elN)
// console.log(danhSachCrushCu);
// danhSachCrushCu.splice(2, 1, "Tuyết", "Hoàng");
// console.log(danhSachCrushCu);

//Object: là tập hợp của các cặp key, value
// const student = {
//   ten: "Quang Minh",
//   tinhTrang: "Độc Thân",
//   tuoi: 15,
//   //   tuyenBan: function (name) {
//   //     console.log("Tôi là " + name + " tôi còn độc thân");
//   //   },
// };

// student.tuyenBan("Hoàng");
// console.log(student);

// student.lopHoc = 11;
// console.log(student);
