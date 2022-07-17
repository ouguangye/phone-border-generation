# 生成手机外壳

## 基本原理
主要是使用了html2canvas来进行截图，然而由于本人学艺不精，无法直接截取手机壳部分，只能全屏截取

然后再用python进行图片截取

## web端生成照片
这里开启本地服务器，方便读取本地图片，避免跨域问题

在vscode打开go live
![image](https://user-images.githubusercontent.com/78332649/179392828-ea8b479c-14b8-4ead-a9ce-2c096755bef7.png)


浏览器网页
![image](https://user-images.githubusercontent.com/78332649/179392917-867e804c-a27b-4ce7-b8c6-7cf869f3c047.png)

默认是iphone6的手机底壳，可以点击按钮进行手机壳的切换
![image](https://user-images.githubusercontent.com/78332649/179393000-fdee9bc0-e4cc-46c5-a5b3-9a6ef8c35aeb.png)

可以点击上传截图按钮上传图片，
![image](https://user-images.githubusercontent.com/78332649/179393071-adfbf338-c7ed-456b-be53-c64b706bca45.png)

然后下载图片，这里由于技术问题，值得注意的是，这里我选择将全屏截取下来
![image](https://user-images.githubusercontent.com/78332649/179393131-9996aeea-d26e-4d7b-a5bf-213c5e1949c6.png)

然后我们在运行python文件，对其进行裁剪即可
![image](https://user-images.githubusercontent.com/78332649/179393165-27138674-1d5f-46b0-af30-edf15fa8a9ed.png)

