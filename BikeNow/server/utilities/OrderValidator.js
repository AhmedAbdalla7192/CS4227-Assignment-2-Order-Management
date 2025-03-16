const Joi = require('joi');

const orderValidationSchema = Joi.object({
    customerName: Joi.string().required(),
    product: Joi.string().required(),
    quantity: Joi.number().integer().min(1).required()
});

const orderStatusValidationSchema = Joi.object({
    status: Joi.string().valid('Pending', 'Shipped', 'Delivered', 'Cancelled').required()
});

const validateOrder = (req, res, next) => {
    const { error } = orderValidationSchema.validate(req.body);
    if (error) {
        console.error("Validation failed:", error.details);
        return res.status(400).json({ message: error.details.map(detail => detail.message).join(", ") });
    }
    next();
};

const validateOrderStatus = (req, res, next) => {
    const { error } = orderStatusValidationSchema.validate(req.body);
    if (error) {
        console.error("Validation failed:", error.details); 
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = {
    validateOrder,
    validateOrderStatus
};
