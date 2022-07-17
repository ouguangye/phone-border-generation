/**
 * 为了解决图片跨域的问题， 这里将图片转为http格式：
 * iphone6 图片：https://s1.ax1x.com/2022/06/27/jV5l5Q.png
 * iphone5 图片：https://s1.ax1x.com/2022/06/27/jV5PED.png
 */

window.onload = function() {
   changeBase64('iphone6_white.png').then(res=>{
    $(".mobile-phone").css('background-image', 'url(' + res + ')');
   })
}

readURL = function (input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            $(".shoot-photo")
                .css('background-image', 'url(' + e.target.result + ')');
        };
        
        reader.readAsDataURL(input.files[0]);
    }
}

changePhone = function (phoneName) {
    let phone = phoneName == "iphone6"?"iphone6_white.png":"iphone5_black.png"
    changeBase64(phone).then(res=>{
        $(".mobile-phone").css('background-image', 'url(' + res + ')');
       })
}

downLoad = function () {
    let canvas2 = document.createElement("canvas");
    let _canvas = document.querySelector('.content-wrapper');
    let w = parseInt(window.getComputedStyle(_canvas).width);
    let h = parseInt(window.getComputedStyle(_canvas).height);
    canvas2.width = w * 2;
    canvas2.height = h * 2;
    canvas2.style.width = w + "px";
    canvas2.style.height = h + "px";
    html2canvas(_canvas, {
        canvas: canvas2,
        useCORS: true,
        foreignObjectRendering: true,
        allowTaint: true,
    }).then(function (canvas) {
        //document.body.appendChild(canvas);
        let canvasImg = canvas.toDataURL("image/png");
        downLoadFile("download", canvasImg); 
    });
}


function downLoadFile(fileName, canvasImg) {
    //创建一个a标签
    let a = document.createElement('a')
    //指定下载文件名称
    a.href = canvasImg;
    a.download = fileName
    //a 标签 需要点击触发。所以强制给他分派一个点击事件
    //创建一个鼠标事件
    let event = document.createEvent("MouseEvents")
    // 初始化鼠标事件
    event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    // 指定元素对象触发事件
    a.dispatchEvent(event)
}

changeBase64= async function(url) {
    let imgSrc = url; // 图片本地路劲
    let image = new Image()
    image.src = imgSrc
    image.setAttribute("crossOrigin",'Anonymous')
    var base64
    return await new Promise((resolve, reject) => {
        image.onload = function() {
            let canvas = document.createElement("canvas")
            canvas.width = image.width
            canvas.height = image.height
            let ctx = canvas.getContext("2d")
            ctx.drawImage(image, 0, 0, image.width, image.height)
            //let ext = image.src.substring(image.src.lastIndexOf(".") + 1).toLowerCase()
            //let dataUrl = canvas.toDataURL("image/" + ext)
            let dataUrl = canvas.toDataURL("image/png");
            base64 = JSON.parse(JSON.stringify(dataUrl)) // 这里就是转化成的编码 
            resolve(base64)
        }
    })
    //console.log(base64)
    //return base64;
}