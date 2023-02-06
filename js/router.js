export class Router{

    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }

    route (event){
        event = event || window.event
        event.preventDefault()

        window.history.pushState({},'', event.target.href)
        this.handle()

    }

    handle(){
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

        fetch(route)
        .then(data => data.text())
        .then(html => {document.querySelector('#app').innerHTML = html})
    }

    changeBackground(){
        const { pathname } = window.location

        if (pathname == '/'){

            document.body.style.backgroundImage = 'url(./assets/bg-home.png)'

        } else if (pathname == '/theuniverse'){

            document.body.style.backgroundImage = 'url(./assets/bg-theuniverse.png)'

        } else if (pathname == '/exploration'){

            document.body.style.backgroundImage = 'url(./assets/bg-exploration.jpg)'

        } else {

            document.body.style.backgroundImage = 'url(./assets/bg-404.jpg)'

        } 
    }
}