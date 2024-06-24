import { Router } from 'express'
const router = Router()

import *as guest from '../controllers/guest'

router.get('/', guest.test)
router.get('/cartelera_informativa', guest.test)
router.get('/negocios/:categ?', guest.test)
router.get('/negocio/:categ?', guest.test)
router.get('/contacto', guest.test)
// router.get('/contacto', guest.test)

export default router