 /* 鼠标点击特效 - 7Core.CN */
        var a_idx = 0;jQuery(document).ready(function($) {$("body").click(function(e) {var a = new Array("遲罗猫", "布偶猫", "波斯猫", "细医猫", "埃及猫", "英国短毛猫
", "异国短毛猫
" ,"挪威森林猫
", "俄罗斯蓝猫
", "美国短毛猫", "斯芬克斯猫", "苏格兰折耳猫
");var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;var x = e.pageX,y = e.pageY;$i.css({"z-index": 100000000,"top": y - 20,"left": x,"position": "absolute","font-weight": "bold","color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"});$("body").append($i);$i.animate({"top": y - 180,"opacity": 0},1500,function() {$i.remove();});});});