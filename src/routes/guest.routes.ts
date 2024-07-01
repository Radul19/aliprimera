import { Router } from 'express'
const router = Router()

import *as guest from '../controllers/guest'

router.get('/', guest.test)
router.get('/cartelera_informativa', guest.test)
router.get('/emprendimientos/:categ?', guest.test)
router.get('/emprendimiento/:categ?', guest.test)
router.get('/contacto', guest.test)
router.get('/admin', guest.test)
router.get('/loadAll', guest.loadAll)
// router.get('/contacto', guest.test)
router.post('/upImage', guest.upImage)
router.post('/updateImage', guest.updateImage)
router.post('/delImage', guest.delImage)

router.post('/createNews', guest.createNews)
router.post('/updateNews', guest.updateNews)
router.post('/delNews', guest.delNews)




export default router