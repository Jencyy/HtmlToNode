const defaultCon = (req, res) => {
    res.render('index');
};

const aboutCon = (req, res) => {
    res.render('about');
}
const serviceCon =  (req, res) => {
    res.render('service');
}
const contactCon =  (req, res) => {
    res.render('contact');
}

module.exports = {defaultCon,aboutCon,serviceCon,contactCon}