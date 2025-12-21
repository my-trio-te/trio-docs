# Kernconcepten (Core Concepts)

![Trio Logo](../../../assets/images/trio-logo.png){ .skip-lightbox width="75" align="left" }

Welkom op de Kernconcepten homepage! Deze sectie behandelt de fundamentele therapie-instellingen (therapy settings) die Trio gebruikt om uw diabetes te beheren.

- - -

## Wat Zijn Kernconcepten?

De kernconcepten (core concepts) zijn de drie primaire therapie-instellingen die bepalen hoe Trio insuline toedient:

1. **[Basaalstanden (Basal Rates)](basal-rates.md)**: Uw achtergrondinsuline gedurende de dag
2. **[Insuline Gevoeligheidsfactor (Insulin Sensitivity Factor / ISF)](isf.md)**: Hoeveel één eenheid insuline uw glucose verlaagt
3. **[Koolhydraatratio (Carb Ratio / CR)](carb-ratios.md)**: Hoeveel gram koolhydraten één eenheid insuline dekt

Deze instellingen vormen de basis van alle berekeningen en beslissingen van het Trio algoritme.

- - -

## Waarom Deze Instellingen Belangrijk Zijn

Het correct instellen van deze drie kernconcepten is **cruciaal** voor veilige en effectieve geautomatiseerde insulinetoediening:

- **Basaalstanden** vormen de basis voor alle IOB (Insulin on Board) berekeningen
- **ISF** bepaalt hoeveel insuline nodig is voor correcties en wordt gebruikt in vrijwel elke algoritmeberekening
- **CR** bepaalt hoeveel insuline nodig is voor maaltijden en COB (Carbs on Board) berekeningen

!!! warning "Nauwkeurigheid is Essentieel"
    Onjuiste kerninstellingen kunnen leiden tot te veel of te weinig insulinetoediening. Neem de tijd om deze instellingen zorgvuldig te testen en te verfijnen voordat u andere geavanceerde functies aanpast.

- - -

## Testprioriteit

Bij het starten met Trio raden we aan om uw instellingen in deze volgorde te testen:

1. **Basaalstanden Eerst** ([Basal Rates](basal-rates.md))
    - Test tijdens vastenperiodes
    - Zorg voor stabiele glucose zonder voedsel
    - Basis voor alle andere berekeningen

2. **ISF Daarna** ([Insulin Sensitivity Factor](isf.md))
    - Test met correctiebolussen
    - De meest voorkomende instelling die aanpassing nodig heeft
    - Kritiek voor algoritme beslissingen

3. **CR Als Laatste** ([Carb Ratios](carb-ratios.md))
    - Test met gecontroleerde maaltijden
    - Vereist nauwkeurige basaal en ISF om correct te evalueren
    - Beïnvloedt maaltijdbolussen en COB

- - -

## Hoe Trio Deze Instellingen Gebruikt

Trio gebruikt uw kerninstellingen niet letterlijk. In plaats daarvan:

- **Autosens** past uw basaalstanden, ISF en doelen dynamisch aan op basis van 8-24 uur aan gegevens
- **Dynamische ISF** (optioneel) past uw ISF nog agressiever aan op basis van huidige glucose en TDD (Total Daily Dose)
- **Tijdelijke Basaalstanden (Temp Basals)** vervangen uw geplande basaalstanden elke 5 minuten
- **SMB (Super Micro Bolus)** levert extra insuline bovenop tijdelijke basaalstanden wanneer nodig

Uw profiel instellingen (profile settings) zijn de **startpunten** die het algoritme gebruikt om de optimale insulinetoediening te berekenen.

- - -

## Aanvullende Bronnen

Voor gedetailleerde informatie over elk kernconc

ept, klik op de links hieronder:

<div class="grid cards" markdown>

-   __[Basaalstanden (Basal Rates)](basal-rates.md)__

    - - -
    
    Leer over uw achtergrondinsuline en hoe deze elke 5 minuten wordt aangepast

-   __[Insuline Gevoeligheidsfactor (ISF)](isf.md)__

    - - -
    
    Begrijp hoe correcties worden berekend en waarom ISF zo belangrijk is

-   __[Koolhydraatratio (CR)](carb-ratios.md)__

    - - -
    
    Ontdek hoe maaltijdbolussen worden bepaald en COB wordt berekend
    
</div>

- - -

## Hulp Nodig?

Als u hulp nodig heeft bij het testen of aanpassen van deze instellingen:

- Raadpleeg de [Nieuwe Gebruikers Installatiegids (New User Setup Guide)](../../configuration/new-user-setup.md)
- Vraag om hulp op [Discord](https://discord.gg/FnwFEFUwXE) of [Facebook](https://www.facebook.com/groups/diytrio)
- Werk samen met uw diabetes zorgteam

!!! tip "Geduld is de Sleutel"
    Het vinden van de juiste instellingen kost tijd. Maak kleine aanpassingen, wacht enkele dagen tussen veranderingen, en let op patronen in plaats van individuele gebeurtenissen.

