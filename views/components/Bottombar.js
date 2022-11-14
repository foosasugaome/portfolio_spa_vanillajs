let Bottombar = {
    render: async () => {
        let view =  /*html*/`
        <footer class="container footer"><a href="mailto:norman.teodoro@gmail.com" target="_blank" class="social-image social-icon-2" title="gmail">
        <img class="generic-icon" src="./socialicons/gmail.svg" alt="Email me!" width="150" height="150"></a><a href="https://www.linkedin.com/in/normanteodoro/" target="_blank" class="social-image social-icon-2" title="linkedin">
        <img class="generic-icon" src="./socialicons/linkedin.svg" alt="LinkedIn" width="150" height="150"></a>
      <div class="container"><a href="https://github.com/foosasugaome" target="_blank" class="social-image social-icon-1" title="github">
          <img class="generic-icon" src="./socialicons/github.svg" alt="GitHub" width="150" height="150"></a></div>
    </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;