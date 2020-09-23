# File Sync App

## Context
Build a simple app which uploads static images into cloud so that those images could be integrated with our fron-end apps later to provide <b>good user-experience</b>.

The app should serve following two purposes:
* sync some existing static app images into s3 upon deployment.
* app should expose a simple API which uploads other public images into s3 and return the public URLs back.

## Bonus
* Add a lossless compression technique before uploading to files s3

## Technical Constraints
* You can choose any language(s) of your choice
* The app should include Terraform/Cloudformation scripts to create resources: s3, a compute resource of your choice which host/exposes the APIs and cloud front for image caching 

For testing you will have to rely on your personal AWS free tier account.

## Project Submission

The whole project including the source code and simple documentation about how to run the program.

Perferably, send us a link to a public repository including the above. 

<!-- ## Expectations

 We would be reviewing the solution on the basis of: -->

If you don't have time to implement something please document it in the README.

Thank you!