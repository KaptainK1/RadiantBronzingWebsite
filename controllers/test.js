exports.test = (req, res) => {
    // res.json({
    //     "welcome":["Thank you !"]
    // });
    res.sendFile('./test.html');
    console.log("hello from test.js controller");
}