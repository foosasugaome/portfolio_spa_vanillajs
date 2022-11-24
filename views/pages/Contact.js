let Contact = {
    render : async () => {
        let view = /*html*/`
        <main class="container hero-contact-section">
        <div class="container hero-contact-wrapper">
          <h1 class="hero-heading">It's nice to meet you!<br></h1>
          <form class="form-container form-container-content">
            <h1 class="neutral-form-title">Let me know what's on your mind.</h1>
            <div class="container container-form-content-wrapper"><label class="label neutral-label-form">Your name</label><input value="" name="email-name" type="email" class="neutral-input-email-full"></div>
            <div class="container container-form-content-wrapper margin-top-form"><label class="label neutral-label-form">Email</label><input value="" name="email-name" type="email" class="neutral-input-email-full"></div>
            <div class="container container-form-content-wrapper margin-top-form"><label class="label neutral-label-form">Your message</label><textarea name="Your message" class="textarea-1">Your message...</textarea>
            </div>
            <div class="container container-form-content-wrapper neutral-margin-top"><button type="button" class="form-button" disabled="disabled">Sign&nbsp;In</button></div>
          </form>
        </div>
      </main>`
        console.log('hello')
        return view
    }
    , after_render: async () => {
    }
}

export default Contact;