function seeDate() {
    var lastModifiedDate = new Date(document.lastModified);
    var month = lastModifiedDate.getMonth() + 1;
    var day = lastModifiedDate.getDate();
    var year = lastModifiedDate.getFullYear();
    var fullDate = [day, month, year];
    var strDate = fullDate.join('/');
    document.getElementById("date").innerHTML = "This page was last modified on: " + strDate;
}
seeDate()