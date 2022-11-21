import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { createServer } from 'http';
import compression from 'compression';
import logger from './utils/logger.js';
import { schema } from './models/GraphQL.js'
import { getProduct, getProducts, createProduct, updateProduct, deleteProduct } from './repositories/ProductsRepository.js';

/*-----------------------------------------------*/
/*                  instances                    */
/*-----------------------------------------------*/
const app = express();

/*-----------------------------------------------*/
/*                  app setup                    */
/*-----------------------------------------------*/
app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: {
        getProduct: getProduct,
        getProducts: getProducts,
        createProduct: createProduct,
        updateProduct: updateProduct,
        deleteProduct: deleteProduct
    },
    graphiql: true
}))

app.all('*', logger.logReqWarn, (req, res) => {
    res.send('Ruta y metodo no implementados.')
})

/*-----------------------------------------------*/
/*               socket setup                    */
/*-----------------------------------------------*/

const httpServer = createServer(app);

export const serverListen = (PORT) => {
    const server = httpServer.listen(PORT, async () => {
        logger.logInfo(`Servidor fork escuchando en el puerto ${server.address().port}`);
    })
    server.on('error', error => logger.logInfo(`Error en servidor ${error}`));
    return server;
}
