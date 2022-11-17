let Navbar = {
    render: async () => {
        let view =  /*html*/`
        <nav class="container navbar">
        <div class="container navigation-links neutral-center-menu">
          <a class="link-text nav-link-menu" href="/" data-scroll="">NRMN</a>
          <a class="link-text nav-link-menu" href="/#/about" title="">About<br></a>
          <a class="link-text nav-link-menu" href="/#/projects" title="">Projects</a>
          <a class="link-text nav-link-menu" href="/#/contact">contact</a>
        </div>      
      
      </nav>
        `
        return view
    },
    after_render: async () => { }

}

export default Navbar;