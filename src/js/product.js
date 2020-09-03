import $ from './library/jquery.js';
import { expand } from './library/expand.js';
import { cookie } from './library/cookie.js';


(function() {
    let id = location.search.split('=')[1];
    $.ajax({
        type: "get",
        url: "../../interface/product.php",
        data: {
            id: id
        },
        dataType: "json",
        success: function(res) {
            let temp0 = `<title>${res.title}</title>`;
            let temp3 = ` <li class="h2"><h2>${res.title}</h2></li>
            <li>
                <p class="left">价格<span>${res.price}</span></p>
            </li>
            <li>
                <p>运费<span>杭州上城区 满88(20Kg内)包邮 配送规则</span></p>
                <p>重量<span>0.174kg</span></p>
            </li>
            <li>
                <p><span>累计评价 77610</span><span>|</span><span>送天猫积分3</span></p>
            </li>
            <li>
                <p>数量</p>
            </li>
            <li>
                <div class="join">
                    加入超市购物车
                </div>
            </li>
            <li>配送范围送货范围仅限舟山、嘉兴、台州、衢州、温州、宁波、金华、绍兴、杭州、丽水、湖州地区(生鲜类别仅限部分地区) 支付方式  检测到您当前处于非安全网络环境，部分商品信息可能不准确，请在交易支付页面再次确认商品价格信息。
            </li>
            <div class="num">
                <input type="number" value="1" min="1" id="num" max="${res.num}">
            </div>`;
            $('head').append(temp0);
            let temp1 = '';
            let picture = JSON.parse(res.picture);
            let temp2 = `<img src="..${picture[0].src}" alt="">`;
            picture.forEach((elm, index) => {
                temp1 += `<img src="..${elm.src}" alt="">`;
            })
            $('.disbig').append(temp2);
            $('.disover').append(temp2);
            $('.imglist').append(temp1);
            $('.details').append(temp3);

            $('.imglist>img').on('mouseover', function() {
                $('.disbig>img').attr('src', this.src);
                $('.disover>img').attr('src', this.src);
            })
            expand();
            $('.join').on('click', function() {
                addItem(res.id, res.price, $('#num').val(), JSON.parse(res.picture)[0].src, res.title);
            })

        }
    });
})()


function addItem(id, price, num, pic, title) {

    let shop = cookie.get('shop');
    let product = {
        id: id,
        price: price,
        num: num,
        pic: pic,
        title: title
    }
    if (shop) {
        shop = JSON.parse(shop);
        if (shop.some(elm => elm.id == id)) {
            shop.forEach(elm => {
                elm.id === id ? elm.num = num : null;
            });
        } else {
            shop.push(product);
        }


    } else {
        shop = [];
        shop.push(product);

    }

    cookie.set('shop', JSON.stringify(shop), 1);

}