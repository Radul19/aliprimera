import { Router } from 'express'
const router = Router()

import *as guest from '../controllers/guest'

router.get('/', guest.test)
router.get('/cartelera_informativa', guest.test)
router.get('/emprendimientos/:categ?', guest.test)
router.get('/emprendimiento/:categ?/:_id?', guest.test)
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
router.post('/createMarket', guest.createMarket)
router.post('/updateMarket', guest.updateMarket)
router.post('/delMarket', guest.delMarket)

router.post('/uploadImageMarket', guest.uploadImageMarket)
router.post('/editImageMarket', guest.editImageMarket)
router.post('/deleteImageMarket', guest.deleteImageMarket)

router.post('/login', guest.login)
router.post('/register', guest.register)

router.post('/addReview', guest.addReview)
router.post('/updateReview', guest.updateReview)

router.post('/addCard', guest.addCard)
router.get('/getCards', guest.getCards)

router.post('/plusChart', guest.plusChart)
router.get('/createChart', guest.createChart)
router.get('/getChart', guest.getChart)

router.post('/deleteCard', guest.deleteCard)




export default router