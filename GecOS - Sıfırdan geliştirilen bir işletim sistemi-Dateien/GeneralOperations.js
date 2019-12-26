function ReportSelect(value) {
    if (value == "Diğer")
        document.getElementById("other").style.display = null;
    else
        document.getElementById("other").style.display = "none";
}
function dhExternalLinkRedirect(_this) {
    $this = $(_this);
    let href = $this.data("href");
    href = encodeURIComponent(href);
    href = "/ExternalLinkRedirect?url=" + href;
    const target = $this.attr("target");
    if (target == "_blank") {
        window.open(href, "_blank");
    } else {
        location.href = href;
    }
    return false;
}

//Reaksiyon
//Daha Fazla Göster
function ShowMoreReactions() {

    var dataCount = document.querySelectorAll('#ul-containers dl').length;

    var pageNumber = parseInt((dataCount / 5) + 1);

    executeRequest(("api2/GlobalApi/GetMoreReactions?pageNumber=" + pageNumber), function (response) {
        console.log(response.Data);
        var res = JSON.parse(response)
        console.log(res.Data);
        FillReactions(res.Data);
    });
}

//Template e ekleme
function FillReactions(data) {

    data.forEach(function (value, index) {
        var output = "<dl id='di_" + index + "' class='dl ' data-id='" + value.ContentId + "'><dt><div class='colorbox list eskipop'></div><a href='" + value.ReactionUrl + "'><table><tbody><tr><td>" + value.ContentTitle + "</td></tr></tbody></table></a><br><span class='reaksiyon-bilgi'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc2RjI1MUE3Njk2NzExRTg4Qjc2OEJEMTE0NEMyRkQ1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc2RjI1MUE4Njk2NzExRTg4Qjc2OEJEMTE0NEMyRkQ1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzZGMjUxQTU2OTY3MTFFODhCNzY4QkQxMTQ0QzJGRDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzZGMjUxQTY2OTY3MTFFODhCNzY4QkQxMTQ0QzJGRDUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz59TpMTAAABkklEQVR42oyTO0vDYBSGk9TiIOrQQYJKBAsK1fSmFQpu3ooUf4B/RNzFyb/gJC4iiIqoHV10sNepqAWLtFBxqoPUpPU5EKGUpu2Bk/Od2/u95yRRlDYJh8OHkUjERl9xh5UBRKP4fRERR1XVPVRDZ4PB4O5AAK1W66hWq5XE4Vxw7E8ulzuGURH97AWgdgZM00zm8/krmD3CZEVizWbzI5PJTLsCcMspZoaiuPihUOjJ4/HEYFKkucQ5ga2Qn+wEGJKHZVn3mqZNGIah+3y+B9kBzeV0Oj3vXPBC3o8VJlOu83DzdjQabYm2xa4dkHOJY8s9d0DDBZR3YPANg1GnRhO27OULdiPk3sj5uwKIUHhL4SaFdQrHAD1ghH3nVSvOYguMY6pu4wByR/GG3IZb4byKtRuNxoLX65U3NG7b9pnHDaBarZ7ouh6ncBnXQOuADeNbnGNYLzqn9vvSoJ9iJ2vdcozxq/UDyGaz61BNuaQvVWVAgckNi0z8L5Fxnlnw0sAAIoFAYIsFJqVZ/hWJ/QkwAA/xrVZP9Lo7AAAAAElFTkSuQmCC'><a href='" + value.ReactionAndActionUrl + "' target='_blank'><span class='bir'>" + (typeof (value.ContentActionCount) == 'undefined' ? 0 : value.ContentActionCount) + " aksiyon </span><span class='iki'> " + (typeof (value.ContentReactionCount) == 'undefined' ? 0 : value.ContentReactionCount) + " reaksiyon </span></a></span></div><br clear='all'></dt></dl>";


        document.getElementById("ul-containers").insertAdjacentHTML('beforeend', output);
    });

    //if (data.length < 5) {
    //    document.querySelector("#displayMoreButtonArea").removeEventListener("onclick",RemoveClick)
    //    //
    //}
}
function ajax(url, header, type, data, callback) {
    var ajax;
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            callback(ajax.responseText);
        }
    }
    ajax.open(type, url, true);
    if (header) {
        ajax.setRequestHeader(header.key, header.value)
    }
    ajax.setRequestHeader("Content-type", "application/json");
    if (type == "POST") {
        ajax.send(data)
    }
    else {
        ajax.send();
    }
}


//function guid() {
//    function s4() {
//        return Math.floor((1 + Math.random()) * 0x10000)
//          .toString(16)
//          .substring(1);
//    }
//    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
//      s4() + '-' + s4() + s4() + s4();
//}
//function getSessionId() {
//    var sessionId = "";
//    sessionId = window.localStorage.getItem("dh-session-id");
//    if (sessionId == null) {
//        sessionId = guid();
//        window.localStorage.setItem("dh-session-id", sessionId);
//    }
//    return sessionId;
//}
//function setSession(type, id) {
//    var sessionId = getSessionId();
//    var href = "/api2/GlobalApi/sessioninsert?type=" + type + "&id=" + id + "&sessionId=" + sessionId;
//    executeRequest(href, function (res) {

//    });
//}