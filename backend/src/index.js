import express from 'express' ;
import {router} from "../routes/userRoute";

// export const router = express.Router();
// import { getUsers} from "./controllers/userControllers.js";

const app = express();
const PORT = process.env.PORT || 8080 ;

// router.get('/users', getUsers)

app.use('/api', router);

app.listen(PORT,
   console.log(`listening on port ${PORT}`));




