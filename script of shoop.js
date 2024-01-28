//@import myscript from  "script.js";
const script = document.createElement("script");
script.src = "script.js";
script.src = "session.js";
//document.body.appendChild(script);
//const result =myscript.cobun();
function revalue() {

    /* const vlaue = JSON.parse(window.location.search.substring(1)).value;
     const vlaue1 =window.location.search.match(data=([]))[1];
     const vlaue2 =window.location.search.includes("data");
 
     document.getElementById('value').value =value;
     
    const cookies =document.cookie.split(";").forEach(function(cookie){
     const[name,vlaue] = cookie.split("=");
     
         const cobun =value;
         document.getElementById('cobunvalue').innerHTML = cobun;
         alert(cobun);
         
    
     
    });
     
 */
    var cobun;
    const session = JSON.parse(sessionStorage.getItem('sendcobunvlaue'));
    alert(session);
    //const cobun2 = session.myCobunValu;

    if (sessionStorage.getItem('sendcobunvlaue')) {
        cobun = sessionStorage.getItem('sendcobunvlaue');
    }
    else {
        cobun = "can't fond it"
    }
    document.getElementById('cobunvalue').innerHTML = cobun;
    alert(cobun);

}
window.onlaoad = revalue;