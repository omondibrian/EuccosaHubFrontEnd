export const smoothScroll = (link_selector="a[href*='#']") => {
    const links = document.querySelectorAll(link_selector)
    links.forEach((element) => {
        const link = element.getAttribute('href')
        element.addEventListener('click', (e) =>{
            e.preventDefault()
            document.querySelector(link).scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            })})
    })

}