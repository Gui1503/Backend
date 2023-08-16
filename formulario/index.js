

const http = require('http');


const myServer = http.createServer((req, rest) => {
    console.log(req.url)



    if (req.url === '/login') {
        console.log("OK")

        rest.end(`<html>
                 Email: <input type="">
                  Senha: <input type="">
                 <button>Entrar</button></html>`)

    } else if (req.url === '/img') {

        rest.end('<html><img src="https://pbs.twimg.com/profile_banners/46104914/1688392678/1500x500"</html>')


    } else if (req.url === '/video') {
        rest.end('<iframe width="674" height="379" src="https://www.youtube.com/embed/OJgu_KCCUSY" title="Tratamento de dados - Curso JavaScript #06" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    } else {
        rest.end('<html>img src="https://img.freepik.com/vetores-gratis/ups-erro-404-com-ilustracao-de-conceito-de-robo-quebrado_114360-5529.jpg?w=2000"</html>')
    }

})

myServer.listen(3001, () => {
    console.log('servidor no AR ...')
})