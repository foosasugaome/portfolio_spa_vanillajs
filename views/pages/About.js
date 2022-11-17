let About = {
    render : async () => {
        let view =  /*html*/`
        <main class="container hero-section">
        <div class="container hero-content-wrapper">
          <h1 class="hero-heading">Hello!<br /></h1>
          <h2 class="hero-subheading">My name is Norman Teodoro. I am a Filipino-Canadian based in&nbsp; Vancouver, British Columbia.&nbsp;</h2>
          <div class="responsive-picture picture-1">
            <picture>
              <img alt="Placeholder Picture" width="1836" height="1836" src="./images/IMG_20221104_135331_720-01.jpeg" loading="lazy">
            </picture>
          </div>
          <p class="paragraph article-paragraph">I am a software engineer who has been working with different fields of technology for about 12 years now.&nbsp; I believe in engineering processes, starting from requirements gathering and concept development to implementation on the platform as well as testing it after everything is done. I am always looking to take up new challenges and learn new things when needed.<br></p>
          <blockquote class="quote-text">"I like getting stuff done, but I'll be the first to tell you: there's no finish line."</blockquote>
          <p class="paragraph article-paragraph">I'm available for freelance work and would love to discuss your project, code or simply collaborate.<br /></p>
        </div>
      </main>
      <section class="container quote-section">
        <div class="container container-quote">
          <blockquote class="blockquote">"Site is a work in progress. Come back again soon."</blockquote>
        </div>
      </section>
        `
        return view
    },
    after_render: async () => {}
        
}

export default About;