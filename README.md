# Unhandled MongoDB Aggregation Errors

This example demonstrates a common error in MongoDB aggregation pipelines: failing to handle potential errors.  The code attempts to perform a group aggregation, but does not check for errors that may arise from incorrect field names or other issues within the pipeline.

## Bug
The `bug.js` file contains an aggregation pipeline that is vulnerable to unhandled errors.  If the `fieldName` does not exist, or if there's a problem with the aggregation query, the code will likely crash without informative error messages.

## Solution
The `bugSolution.js` file shows the improved code with proper error handling using try...catch blocks. This ensures that potential errors are caught and handled gracefully, preventing application crashes and providing meaningful error messages.