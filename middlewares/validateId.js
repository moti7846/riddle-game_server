import {ObjectId} from "mongodb"

export function validateId(req, res, next) {
    if (!ObjectId.isValid(req.params)) {
        return res.status(400).json({ msg: "ID - is not good" });
    }
    next();
}