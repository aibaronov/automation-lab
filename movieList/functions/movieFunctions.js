const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('The Batman')

    await driver.findElement(By.xpath('//button[text()="Add"]')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    expect(movie.isDisplayed()).toBeTruthy()
};


// const deleteMovie = async (driver) => {
//      await driver.findElement(By.xpath('//button[2]]')).click()

//     const deleteBtn = await driver.findElement(By.xpath('//button[2]'))

//     expect(deleteBtn).toNotExist()
// };

const checkHeader = async (driver) => {
    const movieHeader = await driver.findElement(By.xpath('//h1')).getText();
    expect(movieHeader).toEqual('Movie List');
}
module.exports = {
 addMovie, checkHeader
}