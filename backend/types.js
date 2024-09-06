const zod = require("zod")

const createSchema = zod.object({
    title : zod.string(),
    description : zod.string()
})

const completeSchema = zod.object({
    id : zod.string()
})

module.exports = {
    createSchema,
    completeSchema
}