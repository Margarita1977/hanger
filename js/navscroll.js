const navbar = document.querySelector('.navigaihin')
const links = navbar.querySelectorAll('a')


// forEach перебирает все что внутри
links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault()

        const section = document.querySelector(link.getAttribute('href'))
       
        if (section) { 
        seamless.scrollIntoView(section, {
            behavior: "smooth",
            block: "start",
            inline: "center",
        });
        }
    })
})