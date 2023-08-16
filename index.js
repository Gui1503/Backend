console.log("Inicio de tudo!!!")

//Http (Vaerbos)
/*
*Get --> Pegar uma informação
*Post --> Enviar uma informação
*
*Delete
*Put
*Patch
*
*
*
*/
//1 passo importar servidor
const http = require('http');

//2 passo criar servidor
const myServer = http.createServer((req,rest)=>{//requisição e resposta
console.log(req.url)



//3 abro a porta do servidor


    if(req.url === '/products'){
        // 4 Passo responder para o usuario
        rest.end("<h1>Mostrando prodotos...</h1>")
  
    }else if(req.url === '/save'){

        rest.end('<html><img src="https://pbs.twimg.com/profile_banners/46104914/1688392678/1500x500"</html>')


    }else if(req.url === '/maca'){
         rest.end('<html><button>Click!</button></html>')
    }else{
        rest.end('<html>Não encontrado...</html>')
    }

})

myServer.listen(8080,() => {
    console.log('servidor no AR ...')
})