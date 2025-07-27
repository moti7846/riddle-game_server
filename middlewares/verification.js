import jwt from 'jsonwebtoken';

export function token(req, res, next) {
    jwt.verify(req.body.token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.json({ err })
        }
        next();
    });
}

export function roleAdmin(req, res, next) {
    jwt.verify(req.body.token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.json({ err })
        }
        if (decoded.rule === 'admin')
            next();
        else {
            return res.json({ err : "You do not have permission." })
        }
    })
}
export function roleUser(req, res, next) {
    console.log("test...........");

    jwt.verify(req.body.token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.json({ err })
        }
        if (decoded.rule === 'admin' || decoded.rule === 'user')
            next(decoded.username);
        else {
            return res.json({ err : "You do not have permission." })
        }
    })
}