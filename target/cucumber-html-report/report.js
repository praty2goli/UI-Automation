$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/DemoBlazeUI.feature");
formatter.feature({
  "name": "To validate DemoBlaze Website by adding sony viao and dell products",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user logins to DemoBlaze webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonStepDefs.openWebPage()"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate class org.openqa.selenium.chrome.ChromeDriver\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:144)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat net.serenitybdd.core.pages.PageObject.openPageAtUrl(PageObject.java:902)\r\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:803)\r\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:791)\r\n\tat com.demo.steps.CommonStepDefs.openWebPage(CommonStepDefs.java:17)\r\n\tat ✽.user logins to DemoBlaze webpage(src/test/resources/feature/DemoBlazeUI.feature:4)\r\nCaused by: net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate new WebDriver instance of type class org.openqa.selenium.chrome.ChromeDriver (session not created: This version of ChromeDriver only supports Chrome version 84\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.1.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00ED87E3+2852835]\n\tOrdinal0 [0x00DC5BB1+1727409]\n\tOrdinal0 [0x00C9E4B9+517305]\n\tOrdinal0 [0x00C30BA0+68512]\n\tOrdinal0 [0x00C2D3A0+54176]\n\tOrdinal0 [0x00C4D9F7+186871]\n\tOrdinal0 [0x00C4D7FD+186365]\n\tOrdinal0 [0x00C4B70B+177931]\n\tOrdinal0 [0x00C32584+75140]\n\tOrdinal0 [0x00C33650+79440]\n\tOrdinal0 [0x00C335E9+79337]\n\tOrdinal0 [0x00DDAD5C+1813852]\n\tGetHandleVerifier [0x00FFC616+1075574]\n\tGetHandleVerifier [0x00FFC367+1074887]\n\tGetHandleVerifier [0x01007497+1120247]\n\tGetHandleVerifier [0x00FFCC16+1077110]\n\tOrdinal0 [0x00DD3206+1782278]\n\tOrdinal0 [0x00DDC3BB+1819579]\n\tOrdinal0 [0x00DDC523+1819939]\n\tOrdinal0 [0x00DF2B45+1911621]\n\tBaseThreadInitThunk [0x754FEF8C+18]\n\tRtlInitializeExceptionChain [0x7721367A+239]\n\tRtlInitializeExceptionChain [0x7721364D+194]\n). See below for more details.\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:158)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:141)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat net.serenitybdd.core.pages.PageObject.openPageAtUrl(PageObject.java:902)\r\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:803)\r\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:791)\r\n\tat com.demo.steps.CommonStepDefs.openWebPage(CommonStepDefs.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\nCaused by: org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 84\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.1.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00ED87E3+2852835]\n\tOrdinal0 [0x00DC5BB1+1727409]\n\tOrdinal0 [0x00C9E4B9+517305]\n\tOrdinal0 [0x00C30BA0+68512]\n\tOrdinal0 [0x00C2D3A0+54176]\n\tOrdinal0 [0x00C4D9F7+186871]\n\tOrdinal0 [0x00C4D7FD+186365]\n\tOrdinal0 [0x00C4B70B+177931]\n\tOrdinal0 [0x00C32584+75140]\n\tOrdinal0 [0x00C33650+79440]\n\tOrdinal0 [0x00C335E9+79337]\n\tOrdinal0 [0x00DDAD5C+1813852]\n\tGetHandleVerifier [0x00FFC616+1075574]\n\tGetHandleVerifier [0x00FFC367+1074887]\n\tGetHandleVerifier [0x01007497+1120247]\n\tGetHandleVerifier [0x00FFCC16+1077110]\n\tOrdinal0 [0x00DD3206+1782278]\n\tOrdinal0 [0x00DDC3BB+1819579]\n\tOrdinal0 [0x00DDC523+1819939]\n\tOrdinal0 [0x00DF2B45+1911621]\n\tBaseThreadInitThunk [0x754FEF8C+18]\n\tRtlInitializeExceptionChain [0x7721367A+239]\n\tRtlInitializeExceptionChain [0x7721364D+194]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.lambda$newInstance$0(ChromeDriverProvider.java:64)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ProvideNewDriver.withConfiguration(ProvideNewDriver.java:40)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.newInstance(ChromeDriverProvider.java:60)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:169)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:150)\r\n\t... 46 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "To validate Functionality by adding sony viao and dell products to cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UI"
    }
  ]
});
formatter.step({
  "name": "user adds \"Sony vaio i5\" to the cart",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefs.addProductToCart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates back to Home screen",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefs.navigateToHomeScreen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user adds \"Dell i7 8gb\" to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefs.addProductToCart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate back to cart screen",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefs.navigateToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user delete item from \"1\" row and \"4\" column",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefs.deleteItemFromTable(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on \"Place Order\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefs.clickOnButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user save total amount",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefs.captureAmnt()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user fill the user form using",
  "rows": [
    {
      "cells": [
        "Demo"
      ]
    },
    {
      "cells": [
        "India"
      ]
    },
    {
      "cells": [
        "Delhi"
      ]
    },
    {
      "cells": [
        "345678901"
      ]
    },
    {
      "cells": [
        "12"
      ]
    },
    {
      "cells": [
        "2020"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefs.fillTheForm(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on \"Purchase\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefs.clickOnButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user capture LogId and assert total amount",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefs.getLogAndAssertAmnt()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on \"OK\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefs.clickOnButton(String)"
});
formatter.result({
  "status": "skipped"
});
});