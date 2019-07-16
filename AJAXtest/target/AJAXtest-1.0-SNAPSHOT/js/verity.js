<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
//利用jquery类库是实现
>>>>>>> XMLHttpRequest方式实现AJAX
>>>>>>> AJAX--XMLHttpRequest实现
function verity() {
    var jqueryobj = $("#username");
    var username = jqueryobj.val();
    $.get("AJAXServer?name="+username,null,callback);
    //alert(username);

}

function callback(data) {
    var resultobj = $("#result");
    resultobj.html(data);
}