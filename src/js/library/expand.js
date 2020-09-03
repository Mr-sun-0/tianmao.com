import $ from './jquery.js'

function expand() {
    let movebox = $('.movebox'),
        bigpicture = $('.bigpicture'),
        small = $('.disbig img'),
        big = $('.disover');


    // 1. 事件绑定 small  mouseover事件
    small.on('mouseenter', function() {
        // 显示元素
        movebox.removeClass('hide');
        big.removeClass('hide');
        movebox.addClass('show');
        big.addClass('show');

        // 5. 给movebox设置大小
        movebox.css({
            width: (small.offset().width * big.offset().width / bigpicture.offset().width) + 'px',
            height: (small.offset().height * big.offset().height / bigpicture.offset().height) + 'px'
        })
        console.log(1);

        // 3. 让movebox跟随鼠标移动
        small.on('mousemove', function(ev) {
            let top = ev.pageY - small.offset().top - movebox.offset().height / 2;
            let left = ev.pageX - small.offset().left - movebox.offset().width / 2;

            // 4. 计算移动比例
            let ratio = bigpicture.offset().width / small.offset().width; // 比例必须大于1




            // 边界管理
            if (top <= 0) {
                top = 0;
            } else if (top >= small.offset().height - movebox.offset().height) {
                top = small.offset().height - movebox.offset().height - 2;
            }

            if (left <= 0) {
                left = 0;
            } else if (left >= small.offset().width - movebox.offset().width) {
                left = small.offset().width - movebox.offset().width - 2;
            }

            movebox.css({
                top: top + 'px',
                left: left + 'px'
            });

            bigpicture.css({
                top: ratio * -top + 'px',
                left: ratio * -left + 'px'
            });
        });

    });

    // 2. 鼠标离开 隐藏元素
    small.on('mouseleave', function() {
        movebox.removeClass('show');
        big.removeClass('show');
        movebox.addClass('hide');
        big.addClass('hide');
    });

}

export { expand };