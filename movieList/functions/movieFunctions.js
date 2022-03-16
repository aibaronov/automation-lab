const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('The Batman')

    await driver.findElement(By.xpath('//button[text()="Add"]')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    expect(movie.isDisplayed()).toBeTruthy()
};


const deleteMovie = async (driver) => {
     const movieName = await driver.findElement(By.xpath('//li')).getText();
     await driver.findElement(By.xpath("//*[contains(text(), 'x')]")).click();
     const movieList = await driver.findElement(By.xpath('//ul')).getText();
    

    expect(movieList).toEqual("");
};

const checkHeader = async (driver) => {
    const movieHeader = await driver.findElement(By.xpath('//h1')).getText();
    expect(movieHeader).toEqual('Movie List');
}

const crossOffMovie = async(driver) => {
    await driver.findElement(By.xpath("//*[contains(text(), 'The Batman')]")).click();
    await driver.sleep(5000);
    const checkedClass = await driver.findElement(By.css("span[class='checked']")).getText();

    expect(checkedClass).toEqual("The Batman");

}
module.exports = {
 addMovie, checkHeader, deleteMovie, crossOffMovie
}