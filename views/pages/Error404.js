let Error404 = {

    render : async () => {
        let view =  /*html*/`
        <main class="container hero-section">
        <div class="container hero-content-wrapper">
          <h1 class="hero-heading">404 Page not found.<br></h1>          
      </div>
      </main>
        `        
        return view
    }
    , after_render: async () => {
    }
}
export default Error404;