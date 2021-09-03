exports.test = (req, res) => {
    res.json({
        "welcome":["Thank you !"]
    });
    console.log("hello from test.js controller");
}