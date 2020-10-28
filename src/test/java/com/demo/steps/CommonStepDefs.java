package com.demo.steps;

import java.util.List;

import com.demo.page.DemoBlaze;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import net.serenitybdd.core.pages.PageObject;

public class CommonStepDefs extends PageObject{
	
	DemoBlaze objDemoBlaze; 
	
	@Given("^user logins to DemoBlaze webpage$")
	public void openWebPage() {
		open();
	}
	
	
	@Given("^user adds \"([^\"]*)\" to the cart$")
	public void addProductToCart(String prductName) {
		objDemoBlaze.addProductToCart(prductName);
	}
	@Given("^user navigates back to Home screen$")
	public void navigateToHomeScreen( ) {
		objDemoBlaze.navigateToHome();
	}
	
	@Given("^user navigate back to cart screen$")
	public void navigateToCart( ) {
		objDemoBlaze.navigateToCart();
	}
	
	@Given("^user delete item from \"([^\"]*)\" row and \"([^\"]*)\" column$")
	public void deleteItemFromTable(String row, String col) {
		objDemoBlaze.removeItemFromCart(row, col);
	}
	
	@Given("^user click on \"([^\"]*)\" button$")
	public void clickOnButton(String buttonName) {
		objDemoBlaze.clickOnButton(buttonName);
	}
	
	@Given("^user fill the user form using$")
	public void fillTheForm(List<String> table) {
		objDemoBlaze.fillTheForm(table);
	}
	
	@Given("^user save total amount$")
	public void captureAmnt() {
		objDemoBlaze.getTotalAmnt();
	}
	
	@Given("^user capture LogId and assert total amount$")
	public void getLogAndAssertAmnt() {
		objDemoBlaze.getLogAndAssertAmnt();
	}
	
	
}
