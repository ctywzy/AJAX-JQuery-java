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