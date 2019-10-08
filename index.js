const server = require('./server.js');

//import router from accounts-router.js
const accountsRouter = require('./routers/accounts-router.js');

server.use('/accounts', accountsRouter);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});