$(function () {
    getTime();
    var timer = setInterval(()=>{
        getTime();
    },1000)
    $(".enter").click(function () {
        location.href = "main.html"
    })
    $(".exit").click(function () {
        window.opener= null;
        window.open("","_self");
        window.close();
        if(window){
            window.location.href="about:blank";
        }
    })
})

function getTime() {
    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1)
        : nowDate.getMonth() + 1;
    var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate
        .getDate();
    var hours = nowDate.getHours()< 10 ? "0" + nowDate.getHours() : nowDate.getHours();
    var minutes = nowDate.getMinutes()< 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();
    var seconds = nowDate.getSeconds()< 10 ? "0" + nowDate.getSeconds() : nowDate.getSeconds();
    var dateStr = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    $(".timer").val(dateStr);
}
