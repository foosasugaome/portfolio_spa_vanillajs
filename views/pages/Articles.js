let Articles = {
  render: async () => {
    let view = /*html*/ `
    <main class="container hero-section">
    <div class="container hero-content-wrapper">
                <h1 class="hero-heading">Articles</h1>
                <h2 class="hero-subheading">Coming soon...</h2>
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

export default Articles
