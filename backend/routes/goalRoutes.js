const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const {protect} = require('../middleware/authMiddleware')

// goal routes
// router
//     .route('/')
//     .get((req, res) => {
//         res.status(200).json({ message: 'Get goals' })
//     })
//     .post((req, res) => {
//         res.status(200).json({ message: 'Set goal' })
//     })

// router
//     .route('/:id')
//     .put((req, res) => {
//         res.status(200).json({ message: `Update goal ${req.params.id}` })
//     })
//     .delete((req, res) => {
//         res.status(200).json({ message: `Delete goal ${req.params.id}` })
//     })

// // list goal
// router.get('/', getGoals)

// // create goal
// router.post('/', setGoal)

// // update goal
// router.put('/:id', updateGoal)

// // delete goal
// router.delete('/:id', deleteGoal)


router
    .route('/') // set route
    .get(protect, getGoals) // list goal
    .post(protect, setGoal) // create goal

// update goal
router
    .route('/:id') // set route
    .put(protect, updateGoal) // update goal
    .delete(protect, deleteGoal) // delete goal

module.exports = router 