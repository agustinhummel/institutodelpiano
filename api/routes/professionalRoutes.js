const express = require('express');
const { createProfessional } = require('../controllers/Professional/createProfessional.js');

const { deleteProfessional } = require('../controllers/Professional/deleteProfessional.js');
const { deleteProfessionalService } = require('../controllers/Professional/deleteProfessionalService.js');
const { editProfessional } = require('../controllers/Professional/editProfessional.js');
const { getAllProfessional } = require('../controllers/Professional/getAllProfessional.js');
const { getOneProfessional } = require('../controllers/Professional/getOneProfessional.js');

const router = express.Router();

router.delete('/:professionalId', deleteProfessional);
router.get('/', getAllProfessional),
router.get("/:professionalId", getOneProfessional);
router.post("/", createProfessional);
router.put('/', editProfessional)
router.put('/services', deleteProfessionalService)



module.exports = router