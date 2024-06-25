var Puzzle = require('../model/PUZZLE')

// CREATE PUZZLE
let CreatePuzzle = async function (req, res, next) {
    try {
        const { title, content , userId } = req.body;
        const CreatePuzzle = await Puzzle.create({ title, content , userId });

        res.status(201).json({
            status: "success",
            message: 'Create Puzzle successfully',
            Data: CreatePuzzle
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// READ PUZZLE
let ReadPuzzle = async function (req, res, next) {
    try {
        const id = req.params.id;
        const ReadPuzzle = await Puzzle.findById(id).populate('userId');

        res.status(201).json({
            status: "success",
            message: 'Read Puzzle successfully',
            Data: ReadPuzzle
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// UPDATE PUZZLE
let UpdatePuzzle = async function (req, res, next) {
    try {
        const id = req.params.id;
        const UpdatePuzzle = await Puzzle.findByIdAndUpdate(id,req.body,{new:true}).populate('userId');

        res.status(201).json({
            status: "success",
            message: 'Update Puzzle successfully',
            Data: UpdatePuzzle
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


// DELETE PUZZLE
let DeletePuzzle = async function (req, res, next) {
    try {
        const id = req.params.id;
        const DeletePuzzle = await Puzzle.findByIdAndDelete(id);

        res.status(201).json({
            status: "success",
            message: 'Delete Puzzle successfully',
            Data: DeletePuzzle
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}




module.exports = {CreatePuzzle,ReadPuzzle,UpdatePuzzle,DeletePuzzle}