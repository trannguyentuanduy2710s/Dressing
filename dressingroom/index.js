document.getElementById('btnsave').onclick = function checkForm(){
    var taiKhoan = document.getElementById('taikhoan').value
    var matKhau = document.getElementById('matkhau').value
 
    if(taiKhoan === "duytran" && matKhau === "duy123"){
         window.location.assign('./views/index.html'); 
    }else{
     document.getElementById('btnThongbao').innerHTML = "Sao mà dô được"
    }
 }
 
 
 