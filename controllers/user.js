exports.displayUserId = (req, res, next) => {
  const users = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 3, name: "Mike Johnson", age: 40 },
  ];
  const userId = req.params.id;
  res.json(`UserId = ${userId}`);
};
