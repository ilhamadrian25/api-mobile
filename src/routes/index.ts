import express from 'express'
import UserController from '../controllers/user/UserController'

const router = express.Router()

router.post('/user', UserController.createUser)
router.get('/user', () =>{
    return 'hello'
})

export default router