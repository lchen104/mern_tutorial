const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')

//@ desc    Get goals
//@route    GET /api/goals
//@access   Private
const getGoals = asyncHandler(async (req, res) => {

    const goals = await Goal.find({
        user: req.user.id
    })

    res.status(200).json(goals)
})

//@ desc    Set goal
//@route    POST /api/goals
//@access   Private
const setGoal = asyncHandler (async (req, res) => {
    // console.log(req.body)
    if (!req.body.text) {
        // res.status(400).json({ message: 'Please add a text field' })
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(goal)
})

//@ desc    Update goal
//@route    PUT /api/goals
//@access   Private
const updateGoal = asyncHandler(async (req, res) => {
    
    const goal = await Goal.findById(req.params.id)

    // check if goal exist
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    // check for the user
    // const user = await User.findById(req.user.id)

    // check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    // finding the goal and creating if it doesnt exist
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
})

//@ desc    Delete goal
//@route    DELETE /api/goals
//@access   Private
const deleteGoal = asyncHandler(async (req, res) => {
    
    // check and remove if goal id exists
    // const goal = await Goal.findByIdAndRemove(req.params.id)
    const goal = await Goal.findById(req.params.id)

    // check if goal exist
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    
    // check for the user
    // const user = await User.findById(req.user.id)

    // check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await goal.deleteOne()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}