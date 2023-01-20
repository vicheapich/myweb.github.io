self.addEventListener("install", e =>{
    console.log("Install  vichea");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/master.css", "./images/icon-72x72.png"]);
        })
    )
})

self.addEventListener("fetch", e => { 
    console.log("what if jkj0obh");
    console.log(`Intercepting fetch request for: ${e.request.url}`);
})