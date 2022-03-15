const {Builder, Capabilities} = require('selenium-webdriver')

const {addMovie, checkHeader} = require('../functions/movieFunctions')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async() => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html');
})

afterAll(async () => {
    await driver.quit()
})

test('Adds a movie to the list',async () =>{
    await addMovie(driver)
    await driver.sleep(5000)
})

test('Deletes a movie from the list', async () => {
    await deleteMovie(driver)
    await driver.sleep(5000)
})

test("The header for the page should say 'Movie List'", async() =>{
    await checkHeader(driver)
    await driver.sleep(5000)
})