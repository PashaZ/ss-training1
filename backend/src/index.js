import express from 'express' ;
import router from "./routes/userRoute";

const app = express();
const PORT = process.env.PORT || 8080 ;

app.use('/api', router);

app.listen(PORT,
   console.log(`listening on port ${PORT}`));




