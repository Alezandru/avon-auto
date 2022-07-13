### After cloning the project from GitHub, don't forget to run `npm install`
#
To run tests, you must have installed:

- selenium-standalone `npm install -g selenium-standalone`
- allure `npm install -g allure-commandline`
- java
#
To run all tests use `npx codeceptjs run`

To run tests from specific file, use `npx codeceptjs run ${path_to_test_file}`

#
###To view the test reports, navigate to `./tests` and run `allure serve output`
#

Template for new page class `npx codeceptjs gpo`

Template for new step class `npx codeceptjs go --type step`


