document.addEventListener('DOMContentLoaded', function() {
    var accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // 关闭所有已打开的项（如果需要同时只打开一个）
            accordionItems.forEach(function(otherItem) {
                otherItem.classList.remove('active');
            });
            
            // 切换当前项的激活状态
            item.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // 获取所有的图片元素和视频元素
    var images = document.querySelectorAll('.accordion-img');
    var videos = document.querySelectorAll('.accordion-video');

    // 为每张图片添加点击事件监听器
    images.forEach(function(image, index) {
        image.addEventListener('click', function() {
            // 停止所有正在播放的视频
            videos.forEach(function(video) {
                video.pause();
                video.style.display = 'none';
            });

            // 播放与点击的图片相对应的视频
            var correspondingVideo = videos[index];
            correspondingVideo.style.display = 'block';
            correspondingVideo.play();
        });
    });
});
