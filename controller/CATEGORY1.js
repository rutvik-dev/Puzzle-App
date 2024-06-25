var Category = require('../model/CATEGORY')

// CREATE CATEGORY
let CreateCategory = async function (req, res, next) {
    try {
        const { name } = req.body;
        const CreateCategory = await Category.create({ name });

        res.status(201).json({
            status: "success",
            message: 'Create Category successfully',
            Data: CreateCategory
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


// READ CATEGORY
let ReadCategory = async function (req, res, next) {
    try {
        const id = req.params.id;
        const ReadCategory = await Category.findById(id);

        res.status(201).json({
            status: "success",
            message: 'Read Category successfully',
            Data: ReadCategory
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}



    module.exports = {CreateCategory,ReadCategory}