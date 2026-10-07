
(function(){
  function ready(fn){
    if(document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function(){
    var toggle = document.querySelector('.menu-toggle');
    var menu = document.getElementById('primary-menu');
    if(!toggle || !menu) return;

    function closeMenu(){
      toggle.setAttribute('aria-expanded','false');
      menu.classList.remove('is-open');
    }
    toggle.addEventListener('click', function(){
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('is-open', !open);
    });
    menu.addEventListener('click', function(e){
      if(e.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', function(){
      if(window.innerWidth > 1050) closeMenu();
    });
  });
}());
