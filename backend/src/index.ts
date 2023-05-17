import { server } from './server/Server';
import cors from 'cors';

const corsOptions = {
    origin: ['http://localhost:5173', 'https://archei.vercel.app/'],
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization',
  };
  
server.use(cors(corsOptions));

server.listen(3000, () => console.log('Server is running port 3000'));