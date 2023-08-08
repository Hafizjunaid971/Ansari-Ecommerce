import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const createCategoryController=async(req,res)=>{
    try{
const {name}=req.body
if(!name){
    return res.status(401).send({message:'name is required'})

    }
    const existingCategory=await categoryModel.findOne({name})
    if(existingCategory){
        return res.status(200).send({
            success:true,
            message:'category Already existis'
        })
    }
    const category =await new categoryModel({name,slug:slugify(name)}).save()
res.status(201).send({
    success:true,
    message:'new category saved',
    category
})
}catch(error){
console.log(error);
res.status(500).send({
    status:false,
    error,
    message: 'error in category'
})
    }

}

//update category controller

export const updateCategoryController =async (req,res)=>{
    try{
const {name}=req.body;
const {id}=req.params;
const category=await categoryModel.findByIdAndUpdate(id,{name, slug:slugify(name)},{new:true});
res.status(200).send({
    success:true,
    message:'category updated',
    category
})
    }catch(error){
console.log(error);
res.status(500).send({
    status:false,
    error,
    message:'error in category'
})
    }
}

//get all category
export const categoryControlller =async (req,res)=>{
    try{
        const category =await categoryModel.find({});
        res.status(200).send({
            success:true,
            message:'display all category',
            category
        })

    }catch(error){
        res.status(500).send({
            status:false,
            error,
            message:'error in category'
        })
    }
}

//get single
// single category
export const singleCategoryController = async (req, res) => {
    try {
      const category = await categoryModel.findOne({ slug: req.params.slug });
      res.status(200).send({
        success: true,
        message: "Get Single Category Successfully",
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While getting Single Category",
      });
    }
  };

  //delete category
export const deleteCategoryCOntroller = async (req, res) => {
    try {
      const { id } = req.params;
      await categoryModel.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "Categry Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting category",
        error,
      });
    }
  };