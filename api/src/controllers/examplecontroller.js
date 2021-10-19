exports.createItem = async (req, res) => {
   let item = req.body.item;
   res.status(200).json({
       item: item + " fodas"
   })
}

exports.getItems = async (req, res) => {
    res.status(200).json({
        item1: "item 1 test",
        item2: "item 2 test"
    });
}