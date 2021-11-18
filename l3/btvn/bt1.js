
class DonVi {
    constructor(donVi) {
      this.donVi = donVi;
      this.danhSachCanBo = [];
    }
  
    hienThiThongTinTheoTen(hoTen = hoTen) {
      for (let canBo of danhSachCanBo) {
        let a = prompt('Tìm theo tên')
        if (canBo.hoTen == a) {
          canBo.toString();
        }
      }
    }
  
    themCanBo() {
      this.danhSachCanBo.push(CongNhan, KySu, NhanVien);
    }
  
    hienThiThongTin() {
      console.log(`
          Danh sách cán bộ: ${this.danhSachCanBo}
      `);
    }
  }
  
  class CongNhan {
    constructor(hoTen, tuoi, gioiTinh, diaChi, bac) {
      this.hoTen = hoTen;
      this.tuoi = tuoi;
      this.gioiTinh = gioiTinh;
      this.diaChi = diaChi
      this.bac = bac
      this.danhSachCongNhan = []
    }
  
    themCongNhan(congNhan) {
      this.danhSachCongNhan.push(congNhan)
    }

    toString() {
      console.log(`
      Họ tên: ${this.hoTen}
      Tuổi: ${this.tuoi}
      Giới tính: ${this.gioiTinh}
      Địa chỉ: ${this.diaChi}
      Bậc: ${this.bac}
    `);
}
}

class KySu {
  constructor(hoTen, tuoi, gioiTinh, diaChi, nghanhDaoTao) {
    this.hoTen = hoTen;
    this.tuoi = tuoi;
    this.gioiTinh = gioiTinh;
    this.diaChi = diaChi
    this.nghanhDaoTao = nghanhDaoTao
    this.danhSachKySu = []
  }

  themCongNhan(kySu) {
    this.danhSachKySu.push(kySu)
  }

  toString() {
    console.log(`
    Họ tên: ${this.hoTen}
    Tuổi: ${this.tuoi}
    Giới tính: ${this.gioiTinh}
    Địa chỉ: ${this.diaChi}
    Nghành đào tạo: ${this.nghanhDaoTao}
  `);
}
}

class NhanVien {
  constructor(hoTen, tuoi, gioiTinh, diaChi) {
    this.hoTen = hoTen;
    this.tuoi = tuoi;
    this.gioiTinh = gioiTinh;
    this.diaChi = diaChi
    this.danhSachNhanVien = []
  }

  themCongNhan(nhanVien) {
    this.danhSachNhanVien.push(nhanVien)
  }

  toString() {
    console.log(`
    Họ tên: ${this.hoTen}
    Tuổi: ${this.tuoi}
    Giới tính: ${this.gioiTinh}
    Địa chỉ: ${this.diaChi}
  `);
}
}
