```javascript
const pipeline = [
  {
    $match: {
      "fieldName": {
        $regex: "pattern",
        $options: "i"
      }
    }
  },
  {
    $group: {
      _id: "$fieldName",
      count: { $sum: 1 }
    }
  }
];

try {
  const result = await collection.aggregate(pipeline).toArray();
  console.log(result);
} catch (error) {
  console.error("Error during aggregation:", error);
  // Add more robust error handling here, like logging to a file, notifying an admin, etc.
}
```