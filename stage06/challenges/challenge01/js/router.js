export class Router {
  routes = {}

  add(routeName, pageLink) {
    this.routes[routeName] = pageLink;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
  
    window.history.pushState({}, '', event.target.href);
  
    this.handle();
  }
  
  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname];
  
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('main').innerHTML = html;
    })

    console.log(pathname)
    if(pathname == "/universe") {
      document.querySelector('body').style.backgroundImage = 'url(assets/mountains-universe02.png)';
    }

    if(pathname == "/") {
      document.querySelector('body').style.backgroundImage = 'url(assets/mountains-universe-1.png)';
    }

    if(pathname == "/exploration") {
      document.querySelector('body').style.backgroundImage = 'url(assets/mountains-universe-3.png)';
    }
  }
}