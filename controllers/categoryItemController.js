import category from "../models/category.js";

export function createCategoryItems(req, res) {
    const user = req.body.user;

    if (user == null) {
        res.status(403).json({
            message: "Please login to create a category item"
        });
        return;
    }

    const categoryItem = req.body.item; // This line should be inside the function

    const newCategoryItem = new category(categoryItem);
    newCategoryItem.save().then(() => {
        res.json({
            message: "Category Item created successfully"
        });
    }).catch(() => {
        res.status(500).json({
            message: "Category Item creation failed"
        });
    });
}


export function getCategoryItems(req,res){
    category.find().then(
        (list)=>{
            res.json({
                list : list
            })
        }
    )
}