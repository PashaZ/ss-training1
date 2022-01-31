
import {router} from "../"
import { getUsers} from "../controllers/userControllers.js";


// express router method to create route for getting all users


router.get('/users', getUsers)

// express router method to create route for getting users by id
// router.route('/:id').get(getUserById)

export default router ;
