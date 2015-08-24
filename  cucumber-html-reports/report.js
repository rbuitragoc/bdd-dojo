$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("iniciarJuego.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: en"
    }
  ],
  "line": 2,
  "name": "iniciar juego",
  "description": "Como jugador\nquiero que el juego me de la bienvenida\npara engancharme al juego",
  "id": "iniciar-juego",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "veo la pantalla de bienvenida",
  "description": "",
  "id": "iniciar-juego;veo-la-pantalla-de-bienvenida",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "ingreso al juego",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "veo el mensaje \"Mortal Kombat\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "veo el boton con el texto \"Press Start\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeSteps.ingreso_al_juego()"
});
formatter.result({
  "duration": 13085821062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mortal Kombat",
      "offset": 16
    }
  ],
  "location": "SmokeSteps.veo_el_mensaje(String)"
});
formatter.result({
  "duration": 163625056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Press Start",
      "offset": 27
    }
  ],
  "location": "SmokeSteps.veo_el_boton_con_el_texto(String)"
});
formatter.result({
  "duration": 85986399,
  "status": "passed"
});
formatter.uri("seleccionarPersonaje.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: en"
    }
  ],
  "line": 2,
  "name": "seleccionar personaje",
  "description": "Como jugador\nquiero seleccionar mi personaje\npara poder iniciar una pelea con otro jugador",
  "id": "seleccionar-personaje",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Entrar a la pagina de seleccion de personaje",
  "description": "",
  "id": "seleccionar-personaje;entrar-a-la-pagina-de-seleccion-de-personaje",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "ingreso al juego",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "presiono el boton con el texto \"Press Start\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "veo la pagina de seleccion de personaje",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeSteps.ingreso_al_juego()"
});
formatter.result({
  "duration": 1994031513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Press Start",
      "offset": 32
    }
  ],
  "location": "SmokeSteps.presiono_el_boton_con_el_texto(String)"
});
formatter.result({
  "duration": 178269690,
  "status": "passed"
});
formatter.match({
  "location": "SmokeSteps.veo_la_pagina_de_seleccion_de_personaje()"
});
formatter.result({
  "duration": 35791,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Seleccionar personajes",
  "description": "",
  "id": "seleccionar-personaje;seleccionar-personajes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "veo la pagina de seleccion de personaje",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "selecciono un personaje para jugador uno",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "selecciono un personaje para jugador dos",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeSteps.veo_la_pagina_de_seleccion_de_personaje()"
});
formatter.result({
  "duration": 985843891,
  "status": "passed"
});
formatter.match({
  "location": "SmokeSteps.selecciono_un_personaje_para_jugador_uno()"
});
formatter.result({
  "duration": 26361,
  "status": "passed"
});
formatter.match({
  "location": "SmokeSteps.selecciono_un_personaje_para_jugador_dos()"
});
formatter.result({
  "duration": 19725,
  "status": "passed"
});
});