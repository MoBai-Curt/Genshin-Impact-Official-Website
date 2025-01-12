document.addEventListener('DOMContentLoaded', function() {
    var accordionItems = document.querySelectorAll('.accordion-item');
    var images = document.querySelectorAll('.accordion-img');
    var videos = document.querySelectorAll('.accordion-video');

    
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
