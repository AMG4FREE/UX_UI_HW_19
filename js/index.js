$(document).ready(function(){
    console.log("Your index.js file has loaded correctly!");
    
    $("button").click(function(){
        $(".test").hide();
    });

    // $(".navbar").on('click', function(){
    //     $(header nav ul).toggleClass("open");
    // });

});


// Basic jQuery syntax
// $(selector).action()

// $(this).hide() - hides the current element.

// $("p").hide() - hides all <p> elements.

// $(".test").hide() - hides all elements with class="test".

// $("#test").hide() - hides the element with id="test".

$("li").on("click", function(){
    console.log("You clicked a link");
    $(".fadeMe").fadeToggle("slow");

// jQuery Selectors:
// 
// #id selector:            $("#test")
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