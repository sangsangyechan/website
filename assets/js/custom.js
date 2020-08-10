(function($){
    
    // 배너 이미지 슬라이드
        
        var mySwiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            autoplay: {
                delay: 5000,
            },                      
        }); 
        
        //영화차트 이미지 슬라이드
        
        var swiper = new Swiper('.swiper-container2',{
            slidesPerView: 4,
            spaceBetween: 24,
            mousewheel: {
                invert: true,
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            autoplay: {
                delay: 6000,
            },
            breakpoints: {
                600: {
                    slidesPerView: 1.4,
                    spaceBetween: 24
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24
                },
                960: {
                    slidesPerView: 3,
                    spaceBetween: 24
                }
            }
        });
        
        
        //영화차트 탭 메뉴
        
        var movBtn = $(".movie_title > ul > li");    
        var movCont = $(".movie_chart > div");  

        movCont.hide().eq(0).show();

        movBtn.click(function(e){
            e.preventDefault(); 
            // 탭메뉴를 클릭하면 a태그 링크 주소의 #이 top: 0 0; 위치로 이동하기 때문에 이 코드를 써서 이동 못하게 막음. (#링크 차단) 
            var target = $(this); 
            // 탭을 클릭한 버튼을 지정해준 것.      
            var index = target.index();
            // 탭에 버튼 번호를 매겨준 것.
            movBtn.removeClass("active");
            // 다른 탭을 클릭하면 class="active"를 삭제 
            target.addClass("active");    
            // 탭을 클릭하면 class="active" 추가
            movCont.css("display","none");
            // 탭 메뉴 컨텐츠 모두 보이지 않음.
            movCont.eq(index).css("display","block");
            // 클릭한 탭 메뉴의 컨텐츠만 보임.
        });
        
        // 공지사항 탭 메뉴
        var tabMenu = $(".notice");
        
        // 컨텐츠 내용을 숨겨주세요.
        tabMenu.find("ul > li > ul").hide();
        tabMenu.find("li.active > ul").show();
        
        
        function tabList(e){
            e.preventDefault();  
            // #의 기능을 차단.
            var target = $(this);
            target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
            // 버튼을 클릭하면 ~ul을 보여주고 
            // 부모의 li 태그에 클래스 추가하고
            // 형제의 li 태그에 클래스 제거하고
            // 제거한 자식의 ul 태그를 숨겨줌.
        }
        
        tabMenu.find("ul > li > a").click(tabList).focus(tabList);
        // 탭메뉴를 클릭했을 때 .notice를 실행한다.
        // 탭 버튼을 눌렀을 때 포커스(탭 커서)가 첫번째 탭 메뉴와 하의 탭 리스트들로 이동해야하는데 두번째 탭만 인식을 하니깐 기준을 맞추기 위해 focus()를 작성함.
    
})(jQuery); 