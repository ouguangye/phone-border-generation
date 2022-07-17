import cv2
 
img = cv2.imread("D:/download/download.png") # 这里你可以填上自己路径上图片的路径
print(img.shape)
cropped = img[0:1220,362:987]  # 裁剪坐标为[y0:y1, x0:x1]
cv2.imwrite("cv_cut_thor.jpg", cropped)
