// Global function **************************************************************
// get device
function GetDevice(){
	if(document.body.clientWidth <= 640){
	  return 'sp';
	} else {
	  return 'pc';
	}
}
// ******************************************************************************


// 変数初期値 *******************************************************************

	var minWidth;
	var gnavDropHeigh;
	var gnavTopPosition	= 0;
	var _window			= null;
	var _viewport		= null;

	if( GetDevice() == 'sp' ){
		minWidth		= 640;
		gnavDropHeigh	= 300;
	} else {
		minWidth		= 1170;
		gnavDropHeigh	= 252;
	}

// ******************************************************************************

(function(){
	
	$(function(){
		
	// ******************************************************************************

		_window		= $(window);
		_viewport	= $('#wrapper');
		
		//小窓中央用
		var windowopenW	 = 550;
		var windowopenH  = 450;			
		var windowopenSW = ( screen.width - windowopenW ) / 2 -10;
		var windowopenSH = ( screen.height - windowopenH ) / 2;			

	// ******************************************************************************

		//印刷するボタン
		$('#social_copy').click(function(e) {
			e.preventDefault();
			window.print();
			return false;
		});

	// ******************************************************************************
		
		//twitterボタン
		$('#social_twitter').click(function(e) {
			e.preventDefault();
			
//			var url			= encodeURIComponent(window.location.href);
//			var text		= encodeURIComponent(document.title);
			var url			= encodeURIComponent('http://mikihouse.com/');
			var text		= encodeURIComponent('MIKI HOUSE CORPORATION GLOBAL WEBSITE');
			var shareurl	= 'http://twitter.com/intent/tweet?text='+text+'&amp;url='+url;

			if( GetDevice() == 'sp' ){
				window.open(
					shareurl,
					'tweetwindow'
				);
			} else {
				window.open(
					shareurl,
					'tweetwindow',
					'width=' + windowopenW + ','
					+ 'height=' + windowopenH + ','
					+ 'personalbar=0,'
					+ 'toolbar=0,'
					+ 'scrollbars=1,'
					+ 'resizable=1,'
					+ 'left=' + windowopenSW + ','
					+ 'top=' + windowopenSH
				);
			}
			return false;
		});

	// ******************************************************************************

		//facebookボタン
		$('#social_facebook').click(function(e) {
			e.preventDefault();
			
//			var url			= encodeURIComponent(window.location.href);
			var url			= encodeURIComponent('http://mikihouse.com/');
			var shareurl	= 'https://www.facebook.com/sharer/sharer.php?u='+url;
			
			if( GetDevice() == 'sp' ){
				window.open(
					shareurl,
					'facebookwindow'
				);
			} else {
				window.open(
					shareurl,
					'facebookwindow',
					'width=' + windowopenW + ','
					+ 'height=' + windowopenH + ','
					+ 'personalbar=0,'
					+ 'toolbar=0,'
					+ 'scrollbars=1,'
					+ 'resizable=1,'
					+ 'left=' + windowopenSW + ','
					+ 'top=' + windowopenSH
				);
			}
			return false;
		});

	// ******************************************************************************

		//メールボタン
		$('#social_mail').click(function(e) {
			e.preventDefault();
			
			var address		= '@';
//			var url			= encodeURIComponent(window.location.href);
//			var text		= encodeURIComponent(document.title);
			var url			= encodeURIComponent('http://mikihouse.com/');
			var text		= encodeURIComponent('MIKI HOUSE CORPORATION GLOBAL WEBSITE');
			
			location.href = 'mailto:' + address + '?body=' + text + '%0D%0A' + url;
			
			return false;
		});

	// ******************************************************************************

		//グーグルプラスボタン
		$('#social_google').click(function(e) {
			e.preventDefault();
			
//			var url			= encodeURIComponent(window.location.href);
			var url			= encodeURIComponent('http://mikihouse.com/');
			var shareurl	= 'https://plus.google.com/share?url='+url;
			
			window.open(
				shareurl,
				'gpwindow',
				'width=' + windowopenW + ','
				+ 'height=' + windowopenH + ','
				+ 'personalbar=0,'
				+ 'toolbar=0,'
				+ 'scrollbars=1,'
				+ 'resizable=1,'
				+ 'left=' + windowopenSW + ','
				+ 'top=' + windowopenSH
			);
			return false;
		});

	// ******************************************************************************

		//LINEボタン
		$('#social_line').click(function(e) {
			e.preventDefault();
			
//			var url			= encodeURIComponent(window.location.href);
//			var text		= encodeURIComponent(document.title);
			var url			= encodeURIComponent('http://mikihouse.com/');
			var text		= encodeURIComponent('MIKI HOUSE CORPORATION GLOBAL WEBSITE');
			var shareurl	= 'http://line.me/R/msg/text/?'+text+'%20'+url;
			
			window.open(
				shareurl,
				'linewindow'
			);
			return false;
		});

	// ******************************************************************************

		// gnavigation
		if ( GetDevice() == 'sp' ) {
			$('#header .button_open, #header .button_close').click(function(e) {
				if($('#nav_sopen').hasClass('open')) {
					//$('html,body').animate({ scrollTop : 0 });
					$('html,body').scrollTop(0);
				}
				$('#header .button_open').toggleClass('selected');
				$('#nav_sopen').toggleClass('open');
				$('#header_overlay').toggleClass('open');
				$('#header .hide').toggleClass('open');
			});

			$('#header_overlay').click(function(e) {
				$('#header .button_open').toggleClass('selected');
				$('#nav_sopen').toggleClass('open');
				$('#header_overlay').toggleClass('open');
				$('#header .hide').toggleClass('open');
			});

			$('#header .nav_main .drop').click(function(e) {
				e.preventDefault();
				$(this).toggleClass('open');
				$(this).next('.dropbox').slideToggle(200);
			});
		}
		
	// ******************************************************************************

		//slide
		if ( $('.c_slide1').length && GetDevice() == 'sp' ) {
			var slide_w = $('.c_slide1 .slide_box').data('sp-width');
			var windowW		= _viewport.width();
			var centerView	= (windowW-slide_w)/2;
			var slide1_count = 0;
			$('.c_slide1 .slide_box .slide_inner').css({ marginLeft : centerView });
			var slide1 = $('.c_slide1 .slide_box .slide_inner').bxSlider({
				auto		: true,
				pause		: 7000,
				slideWidth	: slide_w,
				minSlides	: 1,
				maxSlides	: 3,
				moveSlides	: 1,
				slideMargin	: 10,
				controls	: false,
				onSliderLoad: function(){
					slide1_count = slide1.getSlideCount();
					$('.c_slide1 .slide_box .slide_inner').css({ width : (slide1_count*slide_w)+(slide_w*6)+(slide_w*10)+centerView });
				}
			});
		}
		if ( $('.c_slide1').length && GetDevice() == 'pc' ) {
			var slide1_w		= $('.c_slide1 .slide_box').data('width');
			var slide1_current	= null;
			var slide1_count	= $('.c_slide1 .slide_box .slide_inner li').length;
			var slide1_showover	= Math.floor( (_viewport.width()-minWidth) /2 /slide1_w ) * 2; // 最小サイズからはみ出ている画像の枚数（片方だけ）
			var slide1_show		= 3 + slide1_showover; // 最小サイズに表示する枚数 + はみ出ている枚数
			var addclass_count	= -1-(slide1_showover/2);
			var addclass_max	= slide1_show-1-(slide1_showover/2);
			var slide1_list		= null;
			
			var slide1			= $('.c_slide1 .slide_box .slide_inner').bxSlider({
				auto		: true,
				pause		: 7000,
				slideWidth	: slide1_w,
				minSlides	: 1,
				maxSlides	: 3,
				moveSlides	: 1,
				slideMargin	: 5,
				controls	: false,
				onSliderLoad: function(){
					slide1_list	 = $('.c_slide1 .slide_box .slide_inner li');
					slide1_list.find('.text').removeClass('show');
					for(var i = addclass_count; i<addclass_max; i++) {
						slide1_list.eq(3+i).find('.text').addClass('show');
					}
					var windowW		= _viewport.width();
					var centerView	= (windowW-slide1_w)/2;
					$('.c_slide1 .slide_box .slide_inner').css({ width : (slide1_count*slide1_w)+(slide1_w*6)+(slide1_w*5)+centerView });
				},
				onSlideBefore: function(){
					slide1_current = slide1.getCurrentSlide();
					slide1_list.find('.text').removeClass('show');
					for(var i = addclass_count; i<addclass_max; i++) {
						slide1_list.eq(3+i+slide1_current).find('.text').addClass('show');
					}
				}
			});
			
			slidePositionSet('.c_slide1', slide1_w);
			
			_window.resize(function() {
				slidePositionSet('.c_slide1', slide1_w);

				slide1_showover	= Math.floor( (_viewport.width()-minWidth) /2 /slide1_w ) * 2;
				slide1_show		= 3 + slide1_showover; // 最小サイズに表示する枚数 + はみ出ている枚数
				addclass_count	= -1-(slide1_showover/2);
				addclass_max	= slide1_show-1-(slide1_showover/2);
				slide1_list.find('.text').removeClass('show');
				for(var i = addclass_count; i<addclass_max; i++) {
					slide1_list.eq(3+i+slide1_current).find('.text').addClass('show');
				}
			});
			
		}		
	// ******************************************************************************
		
		//c_textarea
		if( $('.c_scrollbox').length ) {
			$('.c_scrollbox .scrollbox').jScrollPane();
		}
		
	// ******************************************************************************

		//開閉する中見出しコンテナー
		if ( $('.c_accordionbox').length ) {
			var accordion_flag = false;
			if( $('.c_accordionbox .title').hasClass('active') ) {
				$('.c_accordionbox .title.active').next('.inbox').css({ 'display' : 'block' });
			}
			$('.c_accordionbox .title').click(function(e) {
				e.preventDefault();
				if ( accordion_flag === true ) { return; }
				accordion_flag = true;
				$(this).toggleClass('active');
				$(this).next('.inbox').slideToggle(200,'', function(){ accordion_flag = false; });
			});
		}

	// ******************************************************************************
		
		//gnavigation fixed
		if ( $('body').hasClass('top') === false && GetDevice() == 'pc' ) {
			var _header = $('#header');
			_window.scroll(function() {
				_header.css({ marginLeft : - $(window).scrollLeft() });
			});
		}

	// ******************************************************************************

		//もっと読むボタンがあるコンテナー
		if ( $('.c_readbox').length && GetDevice() == 'sp' ) {
			var readbox_flag = false;
			$('.c_readbox .moreBtn a').click(function(e) {
				if ( readbox_flag == true ) { return; }
				readbox_flag = true;
				$(this).toggleClass('active');
				$(this).parents('.c_readbox').find('.moreBox').slideToggle(200,'', function(){ readbox_flag = false; });
			});
		}
		
	// ******************************************************************************

		//c_form1
		if ( $('.c_form1').length && GetDevice() == 'sp' ) {
			var agreement_flag = false;
			$('.clear').click(function(e) {
				e.preventDefault();
				$(this).parents('div').children('input').val('');
			});
		}

	// ******************************************************************************

	// SNSモーダル
	document.addEventListener('click', function(e) {
		if (e.target.classList && e.target.classList.contains('sns-modal-open')) {
			var modalId = e.target.getAttribute('data-modal');
			var modal = document.getElementById(modalId);
			if (modal) modal.style.display = 'block';
			e.preventDefault();
		}
		if (e.target.classList && e.target.classList.contains('modal-close')) {
			var modal = e.target.closest('.sns-modal');
			if (modal) modal.style.display = 'none';
			e.preventDefault();
		}
		if (e.target.classList && e.target.classList.contains('sns-modal')) {
			e.target.style.display = 'none';
		}
	});

	});
})();