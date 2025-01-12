// 获取元素
var openVideoBtn = document.getElementById("openVideoBtn");
var videoOverlay = document.getElementById("videoOverlay");

// 打开悬浮窗口
openVideoBtn.onclick = function() {
  videoOverlay.style.width = "100%";
};

// 关闭悬浮窗口
function closeVideo() {
  videoOverlay.style.width = "0%";
  var videoPlayer = document.getElementById("videoPlayer");
  videoPlayer.pause(); // 暂停视频
  videoPlayer.currentTime = 0; // 重置视频到开始位置
}
