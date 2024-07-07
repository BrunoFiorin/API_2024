var knex = require("knex")
const restify = require("restify")
const errors = require("restify-errors")

const server = restify.createServer({
    name : 'atividade' ,
    version : '1.0.0'
})

server.use( restify.plugins.acceptParser(server.acceptable) )
server.use( restify.plugins.queryParser() )
server.use( restify.plugins.bodyParser() )

server.listen( 8001 , function() {
    console.log("%s executando em %s", server.name, server.url)
})

knex = require('knex')({
    client : 'mysql' ,
    connection : {
        host : 'localhost' ,
        user : 'root' ,
        password : '' ,
        database : 'atividade'
    }
})

server.get( '/' , (req, res, next) =>{
    res.send("Bem-vindo(a) à API da Lojinha")
} )

// CATEGORIAS

server.get( '/categorias' , (req, res, next) => {
    knex('categorias').then( (dados) => {
        res.send( dados )
    }, next)
})

server.get( '/categorias/:idCategoria' , (req, res, next) => {
    const idCat = req.params.idCategoria
    knex('categorias')
    .where( 'id' , idCat)
    .first()
    .then( (dados) => {
        if( !dados || dados == "" ){
            return res.send(
                new errors.BadRequestError('Categoria não encontrada')
            )
        }
        res.send( dados )
    }, next)
})

server.post( '/categorias' , (req, res, next) => {
    knex('categorias')
    .insert( req.body )
    .then( (dados) => {
        res.send( dados )
    }, next)
})

server.put( '/categorias/:idCategoria' , (req, res, next) => {
    const idCat = req.params.idCategoria
    knex('categorias')
    .where( 'id' , idCat)
    .update( req.body )
    .then( (dados) => {
        if( !dados ){
            return res.send(
                new errors.BadRequestError('Categoria não encontrada')
            )
        }
        res.send( "Categoria Atualizada" )
    }, next)
})

server.del( '/categorias/:idCategoria' , (req, res, next) => {
    const idCat = req.params.idCategoria
    knex('categorias')
    .where( 'id' , idCat)
    .delete()
    .then( (dados) => {
        if( !dados ){
            return res.send(
                new errors.BadRequestError('Categoria não encontrada')
            )
        }
        res.send( "Categoria Excluída" )
    }, next)
})

// PRODUTOS

server.get( '/produtos' , (req, res, next) => {
    const idCat = req.params.idCategoria
    knex('produtos')
    .join("categorias", "produtos.categoria_id", "=" , "categorias.id")
    .select("produtos.id" , "produtos.nome", 
            "produtos.preco", "categorias.nome AS cat")
    .then( (dados) => {
        if( !dados || dados == "" ){
            return res.send(
                new errors.BadRequestError('produto não encontrado')
            )
        }
        res.send( dados )
    }, next)
})

server.put( '/produtos/:id' , (req, res, next) => {
    const id = req.params.id
    knex('produtos')
    .where( 'id' , id)
    .update( req.body )
    .then( (dados) => {
        if( !dados ){
            return res.send(
                new errors.BadRequestError('Produto não encontrado')
            )
        }
        res.send( "Produto Atualizado" )
    }, next)
})

server.post( '/produtos' , (req, res, next) => {
    knex('produtos')
    .insert( req.body )
    .then( (dados) => {
        res.send( dados )
    }, next)
})

server.del( '/produtos/:idProduto' , (req, res, next) => {
    const idProd = req.params.idProduto
    knex('produtos')
    .where( 'id' , idProd)
    .delete()
    .then( (dados) => {
        if( !dados ){
            return res.send(
                new errors.BadRequestError('Produto não encontrada')
            )
        }
        res.send( "Produto Excluído" )
    }, next)
})

// CLIENTES

server.post( '/clientes' , (req, res, next) => {
    knex('clientes')
    .insert( req.body )
    .then( (dados) => {
        res.send( dados )
    }, next)
})

// PEDIDOS

server.post( '/pedidos' , (req, res, next) => {
    knex('pedidos')
    .insert( req.body )
    .then( (dados) => {
        res.send( dados )
    }, next)
})

server.get( '/pedidos' , (req, res, next) => {
    knex('pedidos').then( (dados) => {
        res.send( dados )
    }, next)
})

server.del( '/pedidos/:id' , (req, res, next) => {
    const id = req.params.id
    knex('pedidos')
    .where( 'id' , id)
    .delete()
    .then( (dados) => {
        if( !dados ){
            return res.send(
                new errors.BadRequestError('Pedido não encontrado')
            )
        }
        res.send( "Pedido Excluído" )
    }, next)
})

server.put( '/pedidos/:id' , (req, res, next) => {
    const id = req.params.id
    knex('pedidos')
    .where( 'id' , id)
    .update( req.body )
    .then( (dados) => {
        if( !dados ){
            return res.send(
                new errors.BadRequestError('Pedido não encontrado')
            )
        }
        res.send( "Pedido Atualizado" )
    }, next)
})

// PEDIDOS PRODUTOS

server.post( '/pedidos_produtos' , (req, res, next) => {
    knex('pedidos_produtos')
    .insert( req.body )
    .then( (dados) => {
        res.send( dados )
    }, next)
})

server.get( '/pedidos_produtos' , (req, res, next) => {
    knex('pedidos_produtos').then( (dados) => {
        res.send( dados )
    }, next)
})

server.put( '/pedidos_produtos/:pedido_id' , (req, res, next) => {
    const id = req.params.pedido_id
    knex('pedidos_produtos')
    .where( 'pedido_id' , id)
    .update( req.body )
    .then( (dados) => {
        if( !dados ){
            return res.send(
                new errors.BadRequestError('Pedido não encontrado')
            )
        }
        res.send( "Pedido Atualizado" )
    }, next)
})

server.del( '/pedidos_produtos/:pedido_id' , (req, res, next) => {
    const id = req.params.pedido_id
    knex('pedidos_produtos')
    .where( 'pedido_id' , id)
    .delete()
    .then( (dados) => {
        if( !dados ){
            return res.send(
                new errors.BadRequestError('Pedido não encontrado')
            )
        }
        res.send( "Pedido Excluído" )
    }, next)
})