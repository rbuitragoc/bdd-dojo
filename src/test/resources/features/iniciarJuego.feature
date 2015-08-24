#language: en
Feature: iniciar juego
  Como jugador
  quiero que el juego me de la bienvenida
  para engancharme al juego

  Scenario: veo la pantalla de bienvenida
    Given ingreso al juego
    Then veo el mensaje "Mortal Kombat"
    And veo el boton con el texto "Press Start"
  
