let Home = {
    render : async () => {
        let view = /*html*/`
        <main class="container hero-section">
        <div class="container hero-content-wrapper">
          <h1 class="hero-heading">Hi, I'm Norman<br></h1>
          <h2 class="hero-subheading">I'm a Filipino-Canadian living in Vancouver, British Columbia. I love writing code that makes websites work. </h2>
        </div>
      </main>
      <div class="container articles-section" id="articles">
        <h2 class="articles-heading">Projects</h2>
        <section class="container articles-layout">
          <div class="container article-2">
            <div class="container content-article">
              <div class="responsive-picture index-article-picture" data-outofview="true">
                <picture>
                  <img alt="Placeholder Picture" width="400" height="300" src="img/picture.svg" loading="lazy">
                </picture>
              </div>
              <h3 class="index-article-heading">Small URL</h3>
              <p class="paragraph index-article-paragraph">Small URL or SmURL is a free URL shortener. This is a small project written over the weekend for fun.<br></p>
              <a class="link-text index-article-text-link" href="smurl.html" title="Small URL">Read more &gt;</a>
            </div>
          </div>
          <div class="container article-2">
            <div class="container content-article">
              <div class="responsive-picture index-article-picture" data-outofview="true">
                <picture>
                  <img alt="Placeholder Picture" width="400" height="300" src="img/picture.svg" loading="lazy">
                </picture>
              </div>
            </div>
          </div>
          <div class="container article-2">
            <div class="container content-article">
              <div class="responsive-picture index-article-picture" data-outofview="true">
                <picture>
                  <img alt="Placeholder Picture" width="400" height="300" src="img/picture.svg" loading="lazy">
                </picture>
              </div>
            </div>
          </div>
          <div class="container article-2">
            <div class="container content-article">
              <div class="responsive-picture index-article-picture" data-outofview="true">
                <picture>
                  <img alt="Placeholder Picture" width="957" height="661" src="./images/smurl.jpg" loading="lazy">
                </picture>
              </div>
            </div>
          </div>
          <div class="container article-3">
            <div class="container content-article">
              <div class="responsive-picture index-article-picture" data-outofview="true">
                <picture>
                  <img alt="Placeholder Picture" width="593" height="441" src="./images/expressfinance.jpg" loading="lazy">
                </picture>
              </div>
              <h3 class="index-article-heading">Express Finance</h3>
              <p class="paragraph index-article-paragraph">A simple stocks portfolio performance tracker.<br></p>
              <a class="link-text index-article-text-link" href="expressfinance.html" title="Express Finance">Read more &gt;</a>
            </div>
          </div>
          <div class="container article-6">
            <div class="container content-article">
              <div class="responsive-picture index-article-picture" data-outofview="true">
                <picture>
                  <img alt="Placeholder Picture" width="400" height="300" src="img/picture.svg" loading="lazy">
                </picture>
              </div>
              <h3 class="index-article-heading">Project 5</h3>
              <p class="paragraph index-article-paragraph">Maybe it was the eleven months he spent in the womb. The doctor said there were claw marks on the walls of her uterus. Yeah, well, have you seen the new Mustang?<br></p>
              <a class="link-text index-article-text-link" href="article-1.html">Read more &gt;</a>
            </div>
          </div>
          <div class="container article-4">
            <div class="container content-article">
              <div class="responsive-picture index-article-picture" data-outofview="true">
                <picture>
                  <img alt="Placeholder Picture" width="400" height="300" src="img/picture.svg" loading="lazy">
                </picture>
              </div>
              <h3 class="index-article-heading">Project 3</h3>
              <p class="paragraph index-article-paragraph">Busey ipsum dolor sit amet. Have you urinated? Have you drained your bladder? Are you free? Because if you haven't it will only come out later. I'm giving you some information that your bodily fluids may penetrate your clothing fibre's without warning.It's OK to get Rib-grease on your face, because you're allowing people to see that you're proud of these ribs.<br></p>
              <a class="link-text index-article-text-link" href="article-1.html">Read more &gt;</a>
            </div>
          </div>
          <div class="container article-5">
            <div class="container content-article">
              <div class="responsive-picture index-article-picture" data-outofview="true">
                <picture>
                  <img alt="Placeholder Picture" width="400" height="300" src="img/picture.svg" loading="lazy">
                </picture>
              </div>
              <h3 class="index-article-heading">Project 4</h3>
              <p class="paragraph index-article-paragraph">Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm. Half-cab camel back ollie transition ledge Wes Humpston 1080. Carve casper switch kickturn late downhill. Hardware nosebone Rick McCrank bluntslide bigspin steps egg plant. Slap maxwell roll-in airwalk fast plant fastplant pivot.<br></p>
              <a class="link-text index-article-text-link" href="article-1.html">Read more &gt;</a>
            </div>
          </div>
        </section>
      </div>
      <section class="container quote-section">
        <div class="container container-quote">
          <blockquote class="blockquote">"This is the space reserved to show outstanding details of your service or to highlight comments from customers or users."</blockquote>
        </div>
      </section>`
        console.log('hello')
        return view
    }
    , after_render: async () => {
    }
}

export default Home;