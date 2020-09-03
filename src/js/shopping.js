import { cookie } from './library/cookie.js';
import $ from './library/jquery.js';

//用户身份识别
$(function() {
    let temp = cookie.get('username');
    if (!temp) {
        alert('请登录');
        location.href = "../html/login.html";
    } else {
        $('#username').text(temp);
    }
});

//页面渲染
let shop = JSON.parse(cookie.get('shop'));
shop.forEach((elm, i) => {
    let temp = ` <div id="shop${elm.id}" class="goods-wrap container">
     <div class="goods-head">
    <span></span>
    <span>店铺</span>
    <span></span>
    <a href=""><img src="" alt=""></a>
    </div>
    <div class="goods-content">
    <li class="left">
        <input type="checkbox" name="" id="">
    </li>
    <li class="left">
        <img src="..${elm.pic}" alt="">
        <div >${elm.title}</div>
    </li>
    <li class="left">类型：${elm.title}</li>
    <li class="left price">￥<span>${elm.price}</span></li>
    <li class="left"> <input class="numcar" type="number" value="${elm.num}"></li>
    <li class="left all" >￥<span>${elm.price*elm.num}</span></li>
    <li class="left"><p><a>移入收藏夹</a></p><p><a>删除</a></p><p><a>相似宝贝</a></p></li>
    </div> </div>
    `;
    $('.content').append(temp);

})


//单个商品价格计算
$('.goods-wrap').each(function(i) {

    let a = $(this);
    $('.numcar', $(this)).on('change', function() {
        $('.all span', a).text($('.numcar', a).val() * $('.price span', a).text());
    })
})

//结算
$(function() {
    let total = 0;
    $('input[type="checkbox"]').on('click', function() {
        $(this).toggleClass('selected');

        $('.selected').parents(".goods-wrap").children('.goods-content').find('.all span').each(function() {
            total += parseInt($(this).text());
        })
        console.log('total-price');
        $('#total-price').text(`￥${total}`);
    })

})