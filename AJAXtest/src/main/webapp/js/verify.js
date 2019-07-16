function verify() {
    $.get("AJAXServer="+$("#username").val,null,function (data) {
        $("#result").html(data)
    });
}

