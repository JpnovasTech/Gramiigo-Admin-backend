
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Currency = mongoose.Types.Currency;
var passportLocalMongoose = require('passport-local-mongoose');

var Product = new Schema({
    ProductType:{
        type:String,
        require : true
    },
    IsPrimaryProduct:{
        type: Boolean,
        require : true
    },
    IsVariant : {
        type: Boolean,
        require : true
    },
    VariantType : {
        type : String,
        require : true
    },
    VariantDefinition :{
        type:String,
        require : true
    },
    ProductID : {
        type:Number,
        require : true    
    },
    SKU_ID : {
        type:Number,
        require : true  
    },
    ERP_ID : {
        type:Number,
        require : true  
    },
    ShortDesc : {
        type:String,
        require : true
    },
    Description:{
        type:String,
        require : true
    },
    Image :{
        type:String,
        require : true
    },
    Brand :{
        type:String,
        require : true
    },
    IncludedComponents : {
        type:String,
        require : true
    },
    IsInfiniteInventory :{
        type: Boolean,
        require : true
    },
    InventoryCount : {
        type:Number,
        require : true  
    },
    SafetyStock : {
        type:Number,
        require : true  
    },
    Price : {
        priceL1 : {
            type:Currency,
            require : true 
        },
        priceL2 : {
            type:Currency,
            require : true 
        },
        priceL3 : {
            type:Currency,
            require : true 
        },
        priceL4 : {
            type:Currency,
            require : true 
        },
        priceL5 : {
            type:Currency,
            require : true 
        }
    },
    ProductRelationship : {
        type:String,
        require : true
    },
    IsAvailable : {
        type: Boolean,
        require : true
    },
    IsPublished : {
        type: Boolean,
        default : 0
    },
    IsBuyOnline : {
        type: Boolean,
        default : 0
    },
    IsDelete : {
        type: Boolean,
        default : 0
    },
    ListingPriority : {
        type:Number,
        default : 2
    },
    MinPurchaseQuantity : {
        type:Number,
        default : 1
    },
    MaxPurchaseQuantity : {
        type:Number,
        default : 0
    }
},
{
    timestamps: true
}
);

Product.plugin(passportLocalMongoose);
module.exports = mongoose.model('Product',Product);