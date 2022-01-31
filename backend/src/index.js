import express from 'express' ;
export const router = express.Router();
// import { getUsers} from "./controllers/userControllers.js";


const app = express();
const PORT = process.env.PORT || 8080 ;

// router.get('/users', getUsers)

// console.log(router);

app.use('/api', router);

app.listen(PORT,
   console.log(`listening on port ${PORT}`));




