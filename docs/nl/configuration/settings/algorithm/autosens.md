# Autosens Instellingen (Autosens Settings)

!!! summary "Belangrijkste punten (Highlights)"

    - Autosens Ratio is hernoemd naar Sensitivity Ratio (Gevoeligheidsratio)
    - Beïnvloed de berekende ISF/CR/Basaalstanden richting meer of minder agressieve waarden door de aanpassingsfactor dienovereenkomstig te verhogen of verlagen
    - Autosens Max/Min beperkt gevoeligheidsaanpassingen

## Gevoeligheidsratio (Sensitivity Ratio)

De Gevoeligheidsratio (Sensitivity Ratio, voorheen `Autosens Ratio`) wordt gebruikt om de hoeveelheid aanpassing te berekenen die nodig is voor uw basaalstanden en ISF.

!!! tip
    Dit werd voorheen weergegeven als een decimale waarde als `Autosens Ratio` en wordt nu weergegeven als een percentage als `Sensitivity Ratio`.
    
    Als uw Gevoeligheidsratio 120% toont, betekent dit dat Trio heeft berekend dat uw insulinebehoeften 120% zijn van uw standaardbehoeften.
    
    Als uw Gevoeligheidsratio 100% is, gebruikt Trio uw ingevoerde Therapie Instellingen (Therapy Settings) zonder aanpassingen.

Er zijn 3 opties waaruit u kunt kiezen voor hoe uw Gevoeligheidsratio wordt berekend:
    
- [Autosens](#autosens): Past uw Gevoeligheidsratio aan op basis van een reeks vergelijkingen van de laatste 8 uur versus de laatste 24 uur van insulinegebruik. **Dit is de standaardberekening.**
- [Logaritmische Dynamische ISF (Logarithmic Dynamic ISF)](./dynamic-settings.md#dynamic-isf-logarithmic): Past uw Gevoeligheidsratio aan op basis van uw Totale Dagelijkse Dosis (Total Daily Dose - TDD) van de laatste 24 uur versus de laatste 10 dagen om uw Gevoeligheidsratio aan te passen.
- [Sigmoïde Dynamische ISF (Sigmoid Dynamic ISF)](./dynamic-settings.md#dynamic-isf-sigmoid): Past uw Gevoeligheidsratio aan op basis van hoe ver boven of onder het doel uw huidige glucosewaarde is.

!!! note "Opmerking"
    Alle 3 opties worden beperkt door uw [Autosens Max](#autosens-max) en [Autosens Min](#autosens-min) instellingen. Deze instellingen voorkomen overaanpassing.

### Autosens

Auto-sensitivity (Autosens - Automatische Gevoeligheid) past insulinetoediening aan op basis van hoe gevoelig of resistent u op dat moment voor insuline bent tijdens de huidige loopcyclus door historische gegevens te analyseren om glucoseniveaus stabiel te houden.

!!! tip
    Dit is de standaardberekening die in Trio wordt gebruikt. Als u Autosens wilt uitschakelen en geen andere dynamische aanpassingen wilt gebruiken, **stel dan zowel uw Autosens Max als Autosens Min in op 1 (100%)**


**Hoe het Werkt (How it Works)**  
Het kijkt naar de laatste 8-24 uur aan gegevens, exclusief maaltijdgerelateerde veranderingen, en past insuline-instellingen zoals basaalstanden en doelen aan wanneer nodig om overeen te komen met uw gevoeligheid of resistentie voor insuline.

**Wat het Aanpast (What it Adjusts)**  
Autosens wijzigt uw huidige Insuline Gevoeligheidsfactor (Insulin Sensitivity Factor - ISF), huidige basaalstand, en huidige doelglucose. Autosens onderzoekt geen maaltijden of past uw CR aan. Het beoordeelt alleen uw gevoeligheid voor insuline en past ISF/basaalstanden/glucosedoelen dienovereenkomstig aan.

??? question "Autosens vindt dat Bill de laatste tijd gevoeliger is voor insuline. In de laatste 24 uur is hij 2X gevoeliger voor insuline geweest, terwijl hij in de laatste 8 uur 3X gevoeliger voor insuline is geweest. Welke aanpassing zal Autosens gebruiken?"
    
    Autosens neemt de meer conservatieve berekende gevoeligheid. In dit voorbeeld wordt de meer conservatieve waarde verkregen uit het 8-uurs venster omdat door aan te nemen dat Bill 3X meer in plaats van 2X meer gevoelig is voor insuline, het systeem minder insuline zal geven.


### Berekende Gevoeligheid (Calculated Sensitivity)

!!! warning "Belangrijke Informatie (Important Information)"

    Deze aangepaste ISF is tijdelijk, zal veranderen bij de volgende loopcyclus, en mag niet direct worden gebruikt als onze profiel ISF waarde.

Het in- en/of uitschakelen van Logaritmische Dynamische ISF en Sigmoïde Dynamische ISF bepaalt hoe uw Gevoeligheidsratio wordt berekend. Eenmaal berekend, gebruikt Trio de volgende formule om uw tijdelijke, aangepaste ISF te bepalen:

$$
\frac{ProfielISF}{Gevoeligheidsratio} = Berekende\ Gevoeligheid
$$

??? question "Bill heeft een Profiel ISF van 54 mg/dL/E (3 mmol/L/E). Trio detecteert dat Bill de laatste tijd resistenter is voor insuline en zijn insuline moet verhogen. Het berekent dat Bill een [Gevoeligheidsratio](#gevoeligheidsratio-sensitivity-ratio) van 110% heeft met behulp van Autosens. Welke Berekende Gevoeligheid, ook wel tijdelijke ISF, zal Trio gebruiken voor deze loopcyclus?"
    
    ??? info "Hier is de formule die wordt gebruikt voor Berekende Gevoeligheid:"
    
        $$
        \frac{ProfielISF}{Gevoeligheidsratio}
        $$
    
    ??? note "Bereken de tijdelijke ISF, Berekende Gevoeligheid, die in deze loopcyclus wordt gebruikt:"
        
        $$
        \frac{54\ mg/dL/E}{110\%} =
        $$
        
        $$
        49\ mg/dL/E
        $$
        
    ??? success "Antwoord"
        Bill heeft nu tijdelijk een ISF van **_49 mg/dL/E (2,73 mmol/L/E)_**. (Merk op dat een grotere Gevoeligheidsratio resulteert in een lagere, meer agressieve ISF.)

- - -

## Autosens Max
**Standaard:** *120%*  
**Instellingslimieten:** _50%-200%_

Autosens Max stelt de maximale Gevoeligheidsratio in die wordt gebruikt door Autosens, Logaritmische Dynamische ISF, en Sigmoïde Dynamische ISF.

!!! tip

    Het verhogen van deze waarde staat automatische aanpassingen van basaalstanden toe om hoger te zijn, ISF om lager te zijn, en CR (indien ingeschakeld) om lager te zijn.

- - -

## Autosens Min
**Standaard:** *70%*  
**Instellingslimieten:** _50%-100%_

Autosens Min stelt de minimale Gevoeligheidsratio in die wordt gebruikt door Autosens, Logaritmische Dynamische ISF, en Sigmoïde Dynamische ISF.

!!! tip

    Het verlagen van deze waarde staat automatische aanpassingen van basaalstanden toe om lager te zijn, ISF om hoger te zijn, en CR (indien ingeschakeld) om hoger te zijn.

- - -

## Rewind Reset Autosens (Terugspoelen Reset Autosens)
**Standaard:** *AAN (ON)*  
**_Deze instelling is alleen van toepassing op Medtronic gebruikers_**

Deze functie reset de Gevoeligheidsratio naar neutraal wanneer u uw pomp terugspoelt, uitgaande van de aanname dat dit overeenkomt met een plaatswisseling.

Autosens zal opnieuw beginnen met het leren van gevoeligheid vanaf het moment van het terugspoelen, wat tot 6 uur kan duren.

!!! tip

    Als u gewoonlijk uw pomp terugspoelt onafhankelijk van plaatswisselingen, wilt u deze instelling mogelijk **UIT (OFF)** houden.

