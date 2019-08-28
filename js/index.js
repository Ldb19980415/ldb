$(function () {
    // 初始化页面
    var musicSrc = '';
    $.ajax({
        type: "POST",
        url: "back-data.php",
        success: function (data) {
            // 精彩推荐
            var src0 = data.focus[0].pic;
            var src1 = data.focus[1].pic;
            var img = '';
            img += '<img src="';
            img += src0;
            img += '" alt="">';
            console.log(data);
            $('.fleft a').html(img);
            img = '';
            img += '<img src="';
            img += src1;
            img += '" alt="">';
            $('.fright a').html(img);
            // 歌单推荐
            for (var i = 0; i < 5; i++) {
                // <div>
                //     <img src="http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/103323.jpg" alt="">
                //     <p><a href="#">愿你和天空一样浪漫</a></p>
                //     <p>播放量</p>
                // </div>
                // console.log(data.hotdiss[i]);
                img = '';
                img += '<div><img src="';
                img += data.hotdiss.list[i].imgurl;
                img += '" alt="">';
                img += "<p><a href='#''>";
                img += data.hotdiss.list[i].dissname;
                img += '</a></p>';
                img += '<p>';
                img += '播放量 : ' + data.hotdiss.list[i].listennum;
                img += '</p>';
                img += '</div>';
                $('.music1').append(img);
            };





            // 新歌首发
            for (var i = 0; i < 8; i++) {
                // <li>
                //     <img src="http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/103323.jpg" alt="">
                //     <div>
                //         <p>asas</p>
                //         <p>dsada</p>
                //         <span>10:00</span>
                //     </div>
                // </li>
                img = '';
                img += '<li><img src="';

                img += data.shoubomv.all[i].picurl;
                img += '" alt="">';
                img += '<div><p><a href="#">';
                img += data.shoubomv.all[i].mvdesc;
                img += '</a></p>';
                img += '<p>';
                img += data.shoubomv.all[i].singer_name
                img += '</p><span>';
                img += data.shoubomv.all[i].pub_date;
                img += '</span></div>';
                $('.list22').append(img);
            }
            // 新碟首发

            for (var i = 0; i < 5; i++) {
                // <div>
                //     <img src="http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/103323.jpg" alt="">
                //     <p><a href="#">愿你和天空一样浪漫</a></p>
                //     <p>播放量</p>
                // </div>
                // console.log(data.hotdiss[i]);
                img = '';
                img += '<div><img src="';
                img += data.shoubomv.gangtai[i].picurl;
                img += '" alt="">';
                img += '<p><a href="#">';
                img += data.shoubomv.gangtai[i].mvtitle;
                img += '</a></p>';
                img += '<p>';
                img += data.shoubomv.gangtai[i].singer_name;
                img += '</p>';
                img += '</div>';
                $('.music4').append(img);
            }
            // mv
            for (var i = 0; i < 5; i++) {
                // <div>
                //     <img src="http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/103323.jpg" alt="">
                //     <p><a href="#">愿你和天空一样浪漫</a></p>
                //     <p>播放量</p>
                // </div>
                // console.log(data.hotdiss[i]);
                img = '';
                img += '<div><img src="';
                img += data.shoubomv.japan[i].picurl;
                img += '" alt="">';
                img += '<p><a href="#">';
                img += data.shoubomv.japan[i].mvtitle;
                img += '</a></p>';
                img += '<p>';
                img += data.shoubomv.japan[i].singer_name;
                img += '</p>';
                img += '</div>';
                $('.music5').append(img);
            }
        }
    });
    $('.search').click(
        function () {
            var src = $("input").val();
            src = 'https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=' + src;
            window.open(src)
        }
    );
    // console.log( $('.music1')[0] );
    // $(".music1").on("click", "a", function (event) {
    //     $('.player').html("<audio src='./data/01.mp3' controls autoplay></audio>")
    // });
    // var divs = $('.music1 ');
    // console.log(divs);
    // for(var i = 0; i < divs.length; i++){
    //     var a = $(divs[i]).find('a');
    // }
    $(".recommended1").click(function () {
        $('.recommended1 > a').css('color', '#31c27c');
        $('.recommended2 > a').css('color', '#000');
        $('.recommended3 > a').css('color', '#000');
        $('.recommended4 > a').css('color', '#000');
        $('.recommended5 > a').css('color', '#000');
        $('.recommended6 > a').css('color', '#000');
        $.ajax({
            type: "POST",
            url: "back-data.php",
            success: function (data) {
                var img = '';
                $('.music1').html(img);
                for (var i = 0; i < 5; i++) {
                    // <div>
                    //     <img src="http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/103323.jpg" alt="">
                    //     <p><a href="#">愿你和天空一样浪漫</a></p>
                    //     <p>播放量</p>
                    // </div>
                    // console.log(data.hotdiss[i]);
                    img = '';
                    img += '<div><img src="';
                    img += data.hotdiss.list[i].imgurl;
                    img += '" alt="">';
                    img += '<p><a href="#">';
                    img += data.hotdiss.list[i].dissname;
                    img += '</a></p>';
                    img += '<p>';
                    img += '播放量 : ' + data.hotdiss.list[i].listennum;
                    img += '</p>';
                    img += '</div>';
                    $('.music1').append(img);
                }
            }
        })
    });
    $(".recommended2").click(function () {
        $('.recommended1 > a').css('color', '#000');
        $('.recommended2 > a').css('color', '#31c27c');
        $('.recommended3 > a').css('color', '#000');
        $('.recommended4 > a').css('color', '#000');
        $('.recommended5 > a').css('color', '#000');
        $('.recommended6 > a').css('color', '#000');
        $.ajax({
            type: "POST",
            url: "back-data.php",
            success: function (data) {
                var img = '';
                $('.music1').html(img);
                for (var i = 0; i < 5; i++) {
                    // <div>
                    //     <img src="http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/103323.jpg" alt="">
                    //     <p><a href="#">愿你和天空一样浪漫</a></p>
                    //     <p>播放量</p>
                    // </div>
                    // console.log(data.hotdiss[i]);
                    img = '';
                    img += '<div><img src="';
                    img += data.shoubomv.oumei[i].picurl;
                    img += '" alt="">';
                    img += '<p><a href="#">';
                    img += data.shoubomv.oumei[i].mvtitle;
                    img += '</a></p>';
                    img += '<p>';
                    img += data.shoubomv.oumei[i].singer_name;
                    img += '</p>';
                    img += '</div>';
                    $('.music1').append(img);
                }
            }
        })
    });
    $(".recommended3").click(function () {
        $('.recommended1 > a').css('color', '#000');
        $('.recommended2 > a').css('color', '#000');
        $('.recommended3 > a').css('color', '#31c27c');
        $('.recommended4 > a').css('color', '#000');
        $('.recommended5 > a').css('color', '#000');
        $('.recommended6 > a').css('color', '#000');
        $.ajax({
            type: "POST",
            url: "back-data.php",
            success: function (data) {
                var img = '';
                $('.music1').html(img);
                for (var i = 0; i < 5; i++) {
                    // <div>
                    //     <img src="http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/103323.jpg" alt="">
                    //     <p><a href="#">愿你和天空一样浪漫</a></p>
                    //     <p>播放量</p>
                    // </div>
                    // console.log(data.hotdiss[i]);
                    img = '';
                    img += '<div><img src="';
                    img += data.shoubomv.neidi[i].picurl;
                    img += '" alt="">';
                    img += '<p><a href="#">';
                    img += data.shoubomv.neidi[i].mvtitle;
                    img += '</a></p>';
                    img += '<p>';
                    img += data.shoubomv.neidi[i].singer_name;
                    img += '</p>';
                    img += '</div>';
                    $('.music1').append(img);
                }
            }
        })
    });
    $(".recommended4").click(function () {
        $('.recommended1 > a').css('color', '#000');
        $('.recommended2 > a').css('color', '#000');
        $('.recommended3 > a').css('color', '#000');
        $('.recommended4 > a').css('color', '#31c27c');
        $('.recommended5 > a').css('color', '#000');
        $('.recommended6 > a').css('color', '#000');
        $.ajax({
            type: "POST",
            url: "back-data.php",
            success: function (data) {
                var img = '';
                $('.music1').html(img);
                for (var i = 0; i < 5; i++) {
                    // <div>
                    //     <img src="http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/103323.jpg" alt="">
                    //     <p><a href="#">愿你和天空一样浪漫</a></p>
                    //     <p>播放量</p>
                    // </div>
                    // console.log(data.hotdiss[i]);
                    img = '';
                    img += '<div><img src="';
                    img += data.shoubomv.korea[i].picurl;
                    img += '" alt="">';
                    img += '<p><a href="#">';
                    img += data.shoubomv.korea[i].mvtitle;
                    img += '</a></p>';
                    img += '<p>';
                    img += data.shoubomv.korea[i].singer_name;
                    img += '</p>';
                    img += '</div>';
                    $('.music1').append(img);
                }
            }
        })
    });
    $(".recommended5").click(function () {
        $('.recommended1 > a').css('color', '#000');
        $('.recommended2 > a').css('color', '#000');
        $('.recommended3 > a').css('color', '#000');
        $('.recommended4 > a').css('color', '#000');
        $('.recommended5 > a').css('color', '#31c27c');
        $('.recommended6 > a').css('color', '#000');
        $.ajax({
            type: "POST",
            url: "back-data.php",
            success: function (data) {
                var img = '';
                $('.music1').html(img);
                for (var i = 0; i < 5; i++) {
                    // <div>
                    //     <img src="http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/103323.jpg" alt="">
                    //     <p><a href="#">愿你和天空一样浪漫</a></p>
                    //     <p>播放量</p>
                    // </div>
                    // console.log(data.hotdiss[i]);
                    img = '';
                    img += '<div><img src="';
                    img += data.shoubomv.japan[i].picurl;
                    img += '" alt="">';
                    img += '<p><a href="#">';
                    img += data.shoubomv.japan[i].mvtitle;
                    img += '</a></p>';
                    img += '<p>';
                    img += data.shoubomv.japan[i].singer_name;
                    img += '</p>';
                    img += '</div>';
                    $('.music1').append(img);
                }
            }
        })
    });
    $(".recommended6").click(function () {
        $('.recommended1 > a').css('color', '#000');
        $('.recommended2 > a').css('color', '#000');
        $('.recommended3 > a').css('color', '#000');
        $('.recommended4 > a').css('color', '#000');
        $('.recommended5 > a').css('color', '#000');
        $('.recommended6 > a').css('color', '#31c27c');
        $.ajax({
            type: "POST",
            url: "back-data.php",
            success: function (data) {
                var img = '';
                $('.music1').html(img);
                var divs = $('.music1 ');
                for (var i = 0; i < 5; i++) {
                    // <div>
                    //     <img src="http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/103323.jpg" alt="">
                    //     <p><a href="#">愿你和天空一样浪漫</a></p>
                    //     <p>播放量</p>
                    // </div>
                    // console.log(data.hotdiss[i]);
                    img = '';
                    img += '<div><img src="';
                    img += data.shoubomv.gangtai[i].picurl;
                    img += '" alt="">';
                    img += '<p><a href="#">';
                    img += data.shoubomv.gangtai[i].mvtitle;
                    img += '</a></p>';
                    img += '<p>';
                    img += data.shoubomv.gangtai[i].singer_name;
                    img += '</p>';
                    img += '</div>';
                    $('.music1').append(img); 
                }
            }
        })
    });
    $(document).ajaxComplete(function(){
        $($(this).find('.music1').find('a')[0]).on('click',function(){
            $('.player').html("<audio src='./data/01.mp3' controls autoplay></audio>");
        })
        $($(this).find('.music1').find('a')[1]).on('click',function(){
            $('.player').html("<audio src='./data/02.mp3' controls autoplay></audio>");
        })
        $($(this).find('.music1').find('a')[2]).on('click',function(){
            $('.player').html("<audio src='./data/03.mp3' controls autoplay></audio>");
        })
        $($(this).find('.music1').find('a')[3]).on('click',function(){
            $('.player').html("<audio src='./data/04.mp3' controls autoplay></audio>");
        })
        $($(this).find('.music1').find('a')[4]).on('click',function(){
            $('.player').html("<audio src='./data/05.mp3' controls autoplay></audio>");
        })
        // $(this).find('.music1').find('a')[0].click(function(){
        //     $('.player').html("<audio src='./data/01.mp3' controls autoplay></audio>");
        //     console.log($('.player'));
        // });
        // $(this).find('.music1').find('a')[1].click(function(){
        //     $('.player').html("<audio src='./data/02.mp3' controls autoplay></audio>")
        // })
      })
})