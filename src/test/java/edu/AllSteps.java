package edu;

import com.codeborne.selenide.Selenide;
import com.codeborne.selenide.WebDriverRunner;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$;


public class AllSteps {

    {
    	System.setProperty("webdriver.chrome.driver", "/home/rbuitrago/dev/common-workspace/vpc/bdd-training/chromedriver/install/chromedriver");
        WebDriverRunner.setWebDriver(new ChromeDriver());
    }

    @Given("^ingreso al juego$")
    public void ingreso_al_juego() throws Throwable {
        Selenide.open("http://localhost:4567/");
        
    }

    @Then("^veo el mensaje \"([^\"]*)\"$")
    public void veo_el_mensaje(String message) throws Throwable {
        $(By.id("welcome")).shouldHave(text(message));
    }
    
    @Then("^veo el boton con el texto \"([^\"]*)\"$")
    public void veo_el_boton_con_el_texto(String message) throws Throwable {
    	 $(By.id("startbutton")).attr("value").equals("Press Start");
    	 $(By.id("startbutton")).getTagName().equals("input");
    	 $(By.id("startbutton")).attr("type").equals("submit");
    }
    
    @Then("^presiono el boton con el texto \"([^\"]*)\"$")
    public void presiono_el_boton_con_el_texto(String texto) throws Throwable {
    	$(By.id("startbutton")).attr("value").equals("Press Start");
    	$(By.id("startbutton")).click();
    }

    @Then("^veo la pagina de seleccion de personaje$")
    public void veo_la_pagina_de_seleccion_de_personaje() throws Throwable {
        
    }

    @Then("^selecciono un personaje para jugador uno$")
    public void selecciono_un_personaje_para_jugador_uno() throws Throwable {
        // Express the Regexp above with the code you wish you had
    }

    @Then("^selecciono un personaje para jugador dos$")
    public void selecciono_un_personaje_para_jugador_dos() throws Throwable {
        // Express the Regexp above with the code you wish you had
    }
}
