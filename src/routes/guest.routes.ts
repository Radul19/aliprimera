import { Router } from 'express'
const router = Router()

import *as guest from '../controllers/guest'

router.get('/', guest.test)
router.get('/cartelera_informativa', guest.test)
router.get('/emprendimientos/:categ?', guest.test)
router.get('/emprendimiento/:categ?', guest.test)
router.get('/contacto', guest.test)
// router.get('/contacto', guest.test)

export default router