# Lab 8 - Starter

### "Check Your Understanding" answers

1. Answer is 1. Automated testing fits perfectly within the Continuous Integratiion process which is
   achieved with the Github CI pipeline. We can push code for new features or bug fixes and be
   assured that the code is appropriately tested before merging into the main product. This way
   there's no backlog of testing or any inconsistency in testing environment. 

2. No since a user never interacts with a function directly. Checking functions should be unit
   tested instead.

3. The "messenger" feature which is the core functionality of the messaging application will
   normally involve multiple and closely interacting functions for different steps and processes of
   checking authenticity of users, encrypting messages, sending them on a network, storing message
   in a database, checking if delivered, checking for read receipts, etc. Unit testing will not be
   applicable for such a user-facing and broad product feature.

4. Checking message length to be within a fixed limit is feasible within a function and can be
   isolated and tested by unit testing.


