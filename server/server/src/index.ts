import './pre-start';
import logger from 'jet-logger';
import server from './server';

const serverStartMsg = 'Express server started on port: ',
        port = (process.env.PORT || 3000);

server.listen(port, () => {
    logger.info(serverStartMsg + port);
});
