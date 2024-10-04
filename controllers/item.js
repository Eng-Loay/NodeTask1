exports.filterItem = (req, res, next) => {
  const items = [
    { id: 101, name: "T-shirt", category: "clothing" },
    { id: 102, name: "Jeans", category: "clothing" },
    { id: 103, name: "Laptop", category: "electronics" },
    { id: 104, name: "Headphones", category: "electronics" },
    { id: 105, name: "Sofa", category: "furniture" },
  ];
  const itemType = req.query.category;
  if (!itemType) {
    return res.json("Please Add A Category");
  }
  const filteredItem = items.filter((items) => items.category == itemType);
  if (filteredItem.length > 0) {
    const itemname = filteredItem.map((item) => item.name);
    return res.json(`Item Name =${itemname}`);
  } else {
    return res.json("No Item Found!");
  }
};
