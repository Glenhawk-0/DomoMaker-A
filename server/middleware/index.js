const requiresLogin = (req,res, next) => {
    if(!req.session.account) {
        return res.redirect('/');
    }
    return next();
}

////////////////////////////
const requiresLogout = (req, res, next) => {
    if (req.session.account) {
        return res.redirect('/maker');
    }

    return next();
}
