console.log('script loaded')
document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    var para = document.querySelectorAll('.parallax');
    var elems = document.querySelectorAll('.slider');
    var SCR = document.querySelectorAll('.scrollspy');
    var instances = M.Slider.init(elems, {});
    var sidenava = M.Sidenav.init(sidenav,{});
    var paraa = M.Parallax.init(para, {});
    var scrr = M.ScrollSpy.init(SCR, {});

  });


  

 