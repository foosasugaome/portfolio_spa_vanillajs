let Home = {
    render : async () => {
        let view = /*html*/`
        <main class="container hero-section">
        <div class="container hero-content-wrapper">
          <h1 class="hero-heading">Hi, I'm Norman<br></h1>
          <h2 class="hero-subheading">I'm a Filipino-Canadian living in Vancouver, British Columbia. I love writing code that makes websites work. </h2>
        
      <div class="container articles-section" id="articles">
        <h2 class="articles-heading">Featured Projects</h2>
        <section class="container articles-layout-flex">
          <div class="container article">
            <div class="container content-article">
              <div class="responsive-picture index-article-picture" data-outofview="true">
                <picture>
                  <img alt="Placeholder Picture" width="400" height="300" src="./images/smurl.jpg" loading="lazy">
                </picture>
              </div>
              <h3 class="index-article-heading">Small URL</h3>
              <p class="paragraph index-article-paragraph">Small URL or SmURL is a free URL shortener. This is a small project written over the weekend for fun.<br></p>
              <a class="link-text index-article-text-link" href="/#/smurl" title="Small URL">Read more &gt;</a>
            </div>
          </div>                    
          <div class="container article">
            <div class="container content-article">
              <div class="responsive-picture index-article-picture" data-outofview="true">
                <picture>
                  <img alt="Placeholder Picture" width="593" height="441" src="./images/expressfinance.jpg" loading="lazy">
                </picture>
              </div>
              <h3 class="index-article-heading">Express Finance</h3>
              <p class="paragraph index-article-paragraph">A simple stocks portfolio performance tracker.<br></p>
              <a class="link-text index-article-text-link" href="https://github.com/foosasugaome/express-finance" title="Express Finance">Read more &gt;</a>
            </div>
          </div>
        </section>
      </div>      
      </div>
      </main>
      <section class="container quote-section">
        <div class="container container-quote">
          <blockquote class="blockquote">"Site is a work in progress. Come back again soon."</blockquote>
        </div>
      </section>`        
        return view
    }
    , after_render: async () => {
    }
}
export default Home;