let Smurl = {
    render : async () => {
        let view =  /*html*/`
        <main class="container hero-section">
        <div class="container hero-content-wrapper">
          <h1 class="hero-heading">Small URL<br></h1>
          <h2 class="hero-subheading">Small URL or SmURL is a free URL shortener. A weekend project during the summer break.</h2>
          <div class="responsive-picture picture-1">
            <picture>
              <img alt="Placeholder Picture" width="957" height="661" src="./images/smurl.jpg" loading="lazy">
            </picture>
          </div>
          <a class="link-text index-article-text-link" href="https://www.smurl.ca/" target="_blank" title="Small URL">https://www.smurl.ca/</a>
          <p class="paragraph article-paragraph">The basic idea of a URL shortener is to take a long and complicated URL, strip away the unnecessary information, and make it easier to memorize. There are many different uses for shortened URLs, but the most common one is to allow you to get the most out of character limits on social media.<br><br>So how do they work? Basically, when someone clicks on your unique shortened link, we store a copy of it in our servers and pass it on to the destination webpage. Then we make sure that both you and the user will be able to see the shortened version as well. It's just that simple!<br><br>As a result of their popularity, URL shorteners have become a key tool for all Internet users. Short, easy to remember versions of websites' full addresses are an excellent way to help users find information, store bookmarks and share essays, articles and photos faster on the World Wide Web.<br></p>
        </div>
      </main>
        `
        return view
    },
    after_render: async () => {}
        
}

export default Smurl;