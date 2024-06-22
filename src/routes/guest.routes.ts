import { Router } from 'express'
const router = Router()

import *as guest from '../controllers/guest'

router.get('/*', guest.test)
// router.get('/contacto', guest.test)

export default router