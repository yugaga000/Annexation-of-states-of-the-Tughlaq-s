function fade(){
    TweenMax.to("#button1",2,{
        y:-300,
        opacity:0
    })
    TweenMax.to("#background1",1,{
        top:"-100%",
        delay: 1,
        ease : Power4.easeInOut
    })
    TweenMax.to("h1",1,{
        top:"-100%",
        delay: 1,
        ease : Power4.easeInOut
    })
    TweenMax.to("#background2",1,{
        top:"-100%",
        delay: 2,
        ease : Power4.easeInOut
    })
    }
function fade2(){
    TweenMax.to("#button2",2,{
        y:-300,
        opacity:0
    })
    TweenMax.to("#background3",1,{
        top:"-100%",
        delay: 2,
        ease : Power4.easeInOut
    })
}