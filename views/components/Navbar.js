let Navbar = {
    render: async () => {
        let view =  /*html*/`
        <nav class="container navbar">
        <div class="container navigation-links neutral-center-menu"><a class="glyph mobile-nav-button close-button-cross neutral-center-button" href="#!"><i class="coffeecup-icons-cross2"></i></a>
          <a class="link-text nav-link-menu" href="/" data-scroll="">NRMN</a>
          <a class="link-text nav-link-menu" href="/#/about" title="">About<br></a>
          <a class="link-text nav-link-menu" href="projects.html" title="">Projects</a>
          <a class="link-text nav-link-menu" href="articles.html" title="">articles</a>
          <a class="link-text nav-link-menu" href="/#/contact">contact</a>
        </div>
        <div class="html-element navigation-code"><script>
    document.addEventListener("DOMContentLoaded", function(event) { 
      $('.mobile-nav-button.neutral-center-button').click(function(e){
          $('.navigation-links.neutral-center-menu').toggleClass('show-menu');
          $('body').css('overflow', $('.navigation-links.neutral-center-menu').hasClass('show-menu') ? 'hidden' : 'auto');
      });
    });
    </script></div><a class="glyph mobile-nav-button neutral-center-button" href="#!"><i class="coffeecup-icons-menu3"></i></a>
      </nav>
        `
        return view
    },
    after_render: async () => { }

}

export default Navbar;