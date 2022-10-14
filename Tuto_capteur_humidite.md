# Tuto_capteur_humidite
# Tutoriel pour l'utilisation du capteur d'humidité
 
## Step 1
Ce tutoriel te permettra de compléter la programmation afin d'utiliser un capteur d'humidité.
Pour commencer, Élimine le bloc ``||basic: au démarrage||``
 
 
## Step 2
Crée la variable humidité et ajoute le  bloc``||variable: définir humidité ||`` dans le bloc ``||basic: toujours||`` 
 ```blocks
let humidite = 0
basic.forever(function () {
    humidite = 0
})


```
 
## Step 3
Ajoute le bloc ``||pins: lire la broche analogique P1||`` au bloc  ``||variable: définir humidité||``

```blocks

let humidite = 0
basic.forever(function () {
    humidite = pins.analogReadPin(AnalogPin.P1)
})

```
 
 
## Step 4
Ajoute le bloc loc ``||logic: si alors sinon ||`` sous le bloc ``||pins: lire la broche analogique P1||``



```blocks
let humidite = 0
basic.forever(function () {
    humidite = pins.analogReadPin(AnalogPin.P1)
    if (true) {
    	
    } else {
    	
    }
})

```
 
## Step 5
 
Ajoute le bloc ``||logic: 0>0 ||`` dans l'espace "vrai" 
Ajoute le bloc ``||variable: humidité ||`` dans le premier espace et change la valeur numérique à 300 dans le 2e espace.

```blocks
let humidite = 0
basic.forever(function () {
    humidite = pins.analogReadPin(AnalogPin.P1)
    if (humidite > 300) {
    	
    } else {
    	
    }
})

```
 
## Step 6
Ajoute le bloc ``||basic: montrer l'icône||``sous le bloc ``||logic: si alors ||``
  et choisis le symbole coeur.
Ajoute un autre bloc ``||basic: montrer l'icône||`` sous le bloc ``||logic: sinon ||``
et choisis le symbole x

```blocks
let humidite = 0
basic.forever(function () {
    humidite = pins.analogReadPin(AnalogPin.P1)
    if (humidite > 300) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
})


```
## Step 7
 Ajoute le bloc ``||serial: écrire la ligne||``sous le bloc``||logic: si alors sinon ||``



```blocks
let humidite = 0
basic.forever(function () {
    humidite = pins.analogReadPin(AnalogPin.P1)
    if (humidite > 300) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
    serial.writeLine("")
})
```
## Step 8
 Ajoute le bloc ``||pins: lire la broche analogique P1||`` dans le bloc ``||serial: écrire la ligne||``
 Ajoute le bloc ``||basic: pause (ms)||`` et ajuste la valeur à 10000.



```blocks
let humidite = 0
basic.forever(function () {
    humidite = pins.analogReadPin(AnalogPin.P1)
    if (humidite > 300) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
    serial.writeLine("" + (pins.analogReadPin(AnalogPin.P1)))
    basic.pause(10000)
})
```
## Step 8
Félicitaions!! Tu as terminé la programmation de ce défi.

Réalise le branchement, télécharge le programme dans le micro:bit et tu seras prêt pour faire des tests.
```blocks
/Capture d'écran, le 2022-10-05 à 13.05.56.png
})
```

```
