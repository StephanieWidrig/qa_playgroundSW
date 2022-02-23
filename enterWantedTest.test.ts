import { Builder, Capabilities } from "selenium-webdriver"

import {EnterWantedPage} from "./enterWantedPage"


const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myTest = new EnterWantedPage (driver, 'https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')


test("Testing valid Header Input", async () => {
    await myTest.navigate()
    await myTest.setInput(myTest.hdrInput, "0123456789")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).not.toContain('The "Header" field should be between 9 and 19 characters long')
});

test("Testing invalid Header Input", async () => {
    await myTest.navigate()
    await myTest.setInput(myTest.hdrInput, "01234")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).toContain('The "Header" field should be between 9 and 19 characters long')
});

test("Testing valid Mke Input", async () => {
    await myTest.navigate()
    await myTest.setInput(myTest.mkeInput, "12")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).not.toContain('The "MKE" field should be between 2 and 4 characters long.')
});
test("Testing invalid MKE Input", async () =>{
    await myTest.navigate()
    await myTest.setInput(myTest.mkeInput, "12345")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).toContain('The "MKE" field should be between 2 and 4 characters long.')
});
test("Testing valid Originating Agency Identifier Input", async () => {
    await myTest.navigate()
    await myTest.setInput(myTest.oriInput, "12")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).not.toContain('The field named "Originating Agency Identifier" must be included.')

});
test("Testing invalid Originating Agency Identifier Input", async () =>{
    await myTest.navigate()
    await myTest.setInput(myTest.oriInput, " ")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).not.toContain('The field named "Originating Agency Identifier" must be included.')

});
test("Testing valid Name Input", async () =>{
    await myTest.navigate()
    await myTest.setInput(myTest.nameInput, "Stephanie")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).not.toContain('The "Name" field should be between 1 and 30 characters long.')
});
test("Testing invalid Name Input", async () =>{
    await myTest.navigate()
    await myTest.setInput(myTest.nameInput, "Stephanieeeeeeeeeeeeeeeeeeeeeee")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).toContain('The "Name" field should be between 1 and 30 characters long.')
});
test("Testing valid Sex Input", async () =>{
    await myTest.navigate()
    await myTest.setInput(myTest.sexInput, "F")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).not.toContain('The "Sex" field should be 1 character long.')
});
test("Testing invalid Sex Input", async () => {
    await myTest.navigate()
    await myTest.setInput(myTest.sexInput, "FF")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).toContain('The "Sex" field should be 1 character long.')
});
test("Testing valid Race Input", async () => {
    await myTest.navigate()
    await myTest.setInput(myTest.racInput, "W")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).not.toContain('The "Race" field should be 1 character long.')
});
test("Testing invalid Race Input", async () => {
    await myTest.navigate()
    await myTest.setInput(myTest.racInput, "Ww")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).toContain('The "Race" field should be 1 character long.')
});
test("Testing valid Height Input", async () => {
    await myTest.navigate()
    await myTest.setInput(myTest.hgtInput, "505")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).not.toContain('The "Height" field should be 3 characters long.')
});
test("Testing invalid Height Input", async () => {
    await myTest.navigate()
    await myTest.setInput(myTest.hgtInput, "s")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).toContain('The "Height" field should be 3 characters long.')

});
test("Testing valid Weight Input", async () => {
    await myTest.navigate()
    await myTest.setInput(myTest.wgtInput, "180")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).not.toContain('The "Weight" field can only include numeric characters.')
});
test("Testing invalid Weight Input", async () => {
    await myTest.navigate()
    await myTest.setInput(myTest.wgtInput, "shf")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).toContain('The "Weight" field can only include numeric characters.')

});
