// --------------------------------
//  Define Data Sources
// --------------------------------

let getPostsList = async () => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`https://api.github.com/users/foosasugaome/starred?sort:updated`, options)
       const json = await response.json();
       // console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

let Projects = {
   render : async () => {
       let posts = await getPostsList()
       let view =  /*html*/`
        <main class="container hero-section">
            <div class="container hero-content-wrapper">           
                <h1 class="hero-heading">Projects<br /> </h1>                                     
                <h2 class="hero-subheading">Here are some of my projects that I have been working on. Click on the links below to view the project in github.<hr /></h2> <br />
                    ${ posts.map(post => 
                        /*html*/`<h2 class="hero-subheading"><a class="link-text index-article-text-link" href="${post.html_url}" target="_blank" rel="noreferrer">${post.description}</a></h2>                        
                        <br />`
                        ).join('\n ')
                    }
            </div>           
        </main>
        <section class="container quote-section">
        <div class="container container-quote">
          <blockquote class="blockquote"></blockquote>
        </div>
      </section>
       `
       return view
   }
   , after_render: async () => {
   }

}

export default Projects;