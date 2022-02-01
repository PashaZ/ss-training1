import express from 'express' ;
import router from "./routes/userRoute";
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 8080 ;

app.use(cors('*'));

app.use('/api', router);

app.listen(PORT,
   console.log(`listening on port ${PORT}`));




