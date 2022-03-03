// jQuery 
// $(function () {

$(document).ready(function(){
    console.log("Your index.js file has loaded correctly!");

    // button animation javascript

    $(".btn-6")
        .on("mouseenter", function (e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find("span").css({ top: relY, left: relX });
        });
        .on("mouseout", function (e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find("span").css({ top: relY, left: relX });
        });
    $("[href=#]").click(function () {
        return false;
        });
    });
  
    
    // header/footer navigation tabs javascript

    $("li")
        .on("mouseenter", function () {
            $(this).css("background-color", "lightgray");
        });
        .on("mouseleave", function () {
            $(this).css("background-color", "lightblue");
        });
        $("[href=#]").click(function () {
            $(this).hide();
        });
    });


// javascript animation for scrolling down page

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            // window.location.hash = target;
        });
    });


    //     $(this).find('a').stop().animate({ 
    //         color: '#01216D', 
    //         backgroundColor: '#ffffff'}, 
    //         100);
    // }, function () {
    //     $(this).find('a').stop().animate({ 
    //         color: '#ffffff', 
    //         backgroundColor: '#01216D'}, 
    //         800);
    
    // $(".navbar #About").click(function(){    
    //     $(this).hide();
    // });

    // $(".navbar #Skills").click(function(){
    //     $(this).hide();
    // });

    // $(".navbar #Work").click(function(){
    //     $(this).hide();
    // });

    // $(".navbar #Contact").click(function(){
    //     $(this).hide();
    // });

    // $("button").click(function(){
    //     $(".test").hide();
    // });

    // $(".navbar").on('click', function(){
    //     $(header nav ul).toggleClass("open");
    // });

// Basic jQuery syntax
// $(selector).action()

// $(this).hide() - hides the current element.

// $("p").hide() - hides all <p> elements.

// $(".test").hide() - hides all elements with class="test".

// // $("#test").hide() - hides the element with id="test".

// $(".navbar li").on("click", function(){
//     console.log("You clicked a link");
//     $(".fadeMe").fadeToggle("slow");

// // jQuery Selectors:
// // 
// // #id selector:            $("#test")
// .class selector:         $(".test")
// $("*")	                Selects all elements	
// $(this)	                Selects the current HTML element	
// $("p.intro")	            Selects all <p> elements with class="intro"	
// $("p:first")	            Selects the first <p> element	
// $("ul li:first")         Selects the first <li> element of the first <ul>
// $("ul li:first-child")	Selects the first <li> element of every <ul>	
// $("[href]")	            Selects all elements with an href attribute	
// $("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank"	
// $("a[target!='_blank']") Selects all <a> elements with a target attribute value NOT equal to "_blank"	
// $(":button")             Selects all <button> elements and <input> elements of type="button"	
// $("tr:even")             Selects all even <tr> elements	
// $("tr:odd")              Selects all odd <tr> elements

// jQuery Events:
// $("selector").on(function(){
//  });

// $("selector").click(function(){});
// $("selector").dblclick(function(){});

// $("selector").mouseenter(function(){});
// $("selector").mouseleave(function(){});
// $("selector").hover(function(){});

// $("selector").mousedown(function(){});
// $("selector").mouseup(function(){});
// 
// $("selector").focus/.blur(function(){});