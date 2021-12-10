// jsを記述する際はここに記載していく

/**
 * 到達したら要素を表示させる
 */
 function showElementAnimation() {

    var element = document.getElementsByClassName('js-animation');
    if(!element) return; // 要素がなかったら処理をキャンセル
    
    var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;
  
    for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
        element[i].classList.add('is-show');
      } else if(scrollY + windowH < elemY) {
        // 上にスクロールして再度非表示にする場合はこちらを記述
        element[i].classList.remove('is-show');
      }
    }
  }
  showElementAnimation();
  window.addEventListener('scroll', showElementAnimation);

  (window.onload = function() {

    // フェードイン処理
    jQuery(window).scroll(function (){
      jQuery(".fade").each(function(){
        var winheight = jQuery(window).height();
        var posi = jQuery(this).offset().top;
        var scroll = jQuery(window).scrollTop();
        if (scroll + winheight > posi){
          jQuery(this).addClass("fadein");
        } else {
          //　スクロールで画面上部に戻った際に要素を非表示にしたい場合は、下記の行のコメントを外し有効にしてください。
          //jQuery(this).removeClass("fadein");
        }
      });
     });
  
  })(); 