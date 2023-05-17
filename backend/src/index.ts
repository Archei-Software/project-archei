import { server } from './server/Server';
import cors from 'cors';

server.use(cors())

server.listen(3000, () => console.log('Server is running port 3000'));