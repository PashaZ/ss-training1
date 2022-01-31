const router = express.Router();

// import {router} from "../"
import { getUsers} from "../controllers/userControllers";

router.get('/users', getUsers)

export default router ;
