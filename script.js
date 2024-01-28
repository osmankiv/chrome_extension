function cobun() {
  // const value = document.getElementById('value').value;
  /*
   const data =  { value: 123};
 
  const JSONdata = JSON.stringify(data);
    alert(JSONdata);
   window.location.href = "shoop.hmtl?data=" + JSONdata;
 
 document.cookie ="cobun ="+value;
 
 // استيراد الوحدة النمطية
 import Session from "./session";
 
 // إنشاء متغير جلسة
 const session = new Session("cobun", "");
 
 // ربط حدث النقر بزر الإرسال
 document.getElementById("sendValue").onclick = () => {
   // الحصول على قيمة الحقل النصي
   const value = document.getElementById("value").value;
 
   // تعيين قيمة متغير الجلسة
   session.setValue(value);
 */
  const value = document.getElementById("sendcobunvlaue").value;
  const session = { 'myCobunValu': value, };
  sessionStorage.setItem('myCobunValu', JSON.stringify(session));
  alert(value);


  // الانتقال إلى الصفحة الثانية

  window.location = "shoop.html";
  return value;

}

function outfill2(value2) {

  console.log(this.value2);
  var value3 = value2;
  var acartnu = document.getElementById('cobunvvv');
  acartnu.setAttribute('value', value3);
}
function outfill() {
  this.value2 = document.getElementById('input2').value ;
  return this.value2;
  //var acartnum = document.getElementById('sendcobunvlaue');
  //acartnum.setAttribute('value', value2);
}
