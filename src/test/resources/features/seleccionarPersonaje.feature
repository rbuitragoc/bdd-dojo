#language: en
Feature: seleccionar personaje
  Como jugador
  quiero seleccionar mi personaje
  para poder iniciar una pelea con otro jugador

  Scenario: Entrar a la pagina de seleccion de personaje
    Given ingreso al juego
    Then presiono el boton con el texto "Press Start"
    And veo la pagina de seleccion de personaje
    
  Scenario: Seleccionar personajes
  	Given veo la pagina de seleccion de personaje
  	Then selecciono un personaje para jugador uno
  	And selecciono un personaje para jugador dos