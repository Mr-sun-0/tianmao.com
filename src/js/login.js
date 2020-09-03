import $ from './library/jquery.js';
import { cookie } from './library/cookie.js';

$('#login').on('click', function() {
    let username = $('input[type="username"]').val();
    let password = $('input[type="password"]').val();
    $.ajax({
        type: "get",
        url: "../../interface/login.php",
        data: {
            username: username,
            password: password
        },
        dataType: "json",
        success: function(res) {
            if (res.id) {
                cookie.set('username', res.id, 1);
                location.href = "../html/index.html";
            } else {
                alert(res[0]);
            }
        }
    });
})