exports.test = (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.json({
        "welcome":["Thank you !"]
    });
    console.log("hello from test.js controller");
}