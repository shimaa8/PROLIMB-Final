

$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    
    if(wScroll > $("nav").outerHeight())
    {
        $("nav").addClass("fixed-top") ;
         $("nav").css("backgroundColor","rgba(0,0,0,0.6)");
         $("nav a").css("color","#fff");
    }
    else{
    $("nav").css("backgroundColor","transparent");

    }
        

    $("nav a").click(function(){

     let aHref=$(this).attr("href");
    let  profileOffset =$(aHref).offset().top;
 
    $("body,html").animate({scrollTop:profileOffset},2000)

    })
    
         if(wScroll >800)   
             {
                 $("#btnUp").fadeIn(200);
             }
    else{
          $("#btnUp").fadeOut(200);

    }
    $("#btnUp").click(function(){
        
    
   $("body,html").animate({scrollTop:0},2000)
        
    })
                 
                 
})



$(document).ready(function(){
    
    $("#loading").fadeOut(2000,function(){
        
        $("body").css("overflow","auto")
    });
    
})

  

