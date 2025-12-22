# Probleemoplossing Veelvoorkomende Problemen (Troubleshooting Common Issues) ✏️
[Aangepast van looptips](https://loopkit.github.io/looptips/how-to/think-like-loop/)

## Site Wissel en Site Falen (Site Change and Site Failures)

!!! tip "Tips"
    
    - Pomp site wissels kunnen de controle tijdelijk beïnvloeden. 
    - Pomp site falen kan de controle gedurende uren negatief beïnvloeden.  
      Schakel closed loop uit wanneer falen wordt ontdekt, en schakel het alleen weer in wanneer een nieuwe pomp is geïnstalleerd.

### Site Wissel (Site Change)

Pomp site wissels kunnen uw directe glykemische controle negatief beïnvloeden.
Het vermogen van verschillende toedieningssites om insuline te absorberen varieert, wat uw waargenomen insulinegevoeligheid beïnvloedt.
Trio zou in staat moeten zijn om deze verandering te accommoderen door zijn Autosens metingen te resetten [(ervan uitgaande dat "Rewind Resets Autosens" aan staat)](../configuration/settings/algorithm/autosens.md/#rewind-resets-autosens-rewind-reset-autosens) en zich aan te passen zoals nodig.



### Site Falen (Site Failure)

Pomp falen kan voortkomen uit knikken of onjuiste insertie van de canule. Als gevolg van een pomp faling kan Trio aannemen dat er meer insuline aan boord is bij de patiënt dan wat werd toegediend, wat leidt tot aanhoudende hoge waarden zelfs nadat de pomp is vervangen. 

Wanneer u erachter komt dat uw pomp heeft gefaald, open loop onmiddellijk om te voorkomen dat Trio probeert meer insuline toe te dienen. Bij uw volgende pomp installatie kunt u dan closed loop inschakelen en geduldig zijn. Trio zal wachten tot de berekende insuline aan boord daalt voordat insuline wordt toegediend.

## Lage Behandeling (Low Treatment)

!!! tip "Tips"
    
    - Voer koolhydraten voor behandeling in Trio in, maar bolus er niet voor
    - Overweeg uw profiel ISF of Aanpassingsfactor te verlagen als Dynamische ISF is ingeschakeld

Lage bloedsuiker gebeurtenissen kunnen van tijd tot tijd gebeuren, maar u heeft doorgaans niet zoveel koolhydraten nodig om uw lage waarden te behandelen in tegenstelling tot MDI of het gebruik van een pomp. Wanneer u een lage waarde behandelt, moet u de geconsumeerde koolhydraten in het Trio systeem invoeren zodat zijn autotune functionaliteit betere keuzes kan maken voor uw ICR, ISF en basaalstanden.

Als u een achtbaan patroon ervaart van hoge en lage waarden na behandeling, is uw [insuline gevoeligheidsfactor (ISF - Insulin Sensitivity Factor)](../configuration/settings/therapy/isf.md) hoogstwaarschijnlijk de oorzaak. Overweeg uw insulinegevoeligheid minder agressief te maken met 10% of uw aanpassingsfactor te verlagen met 0.1 stappen. 


## Terugslag Lage Waarden (Rebound Lows)

!!! tip "Tips"
    
    - Het behandelen van lage waarden met snelle koolhydraten kan een snelle BG stijging geven
    - Onder bepaalde omstandigheden kan Trio reageren op de snelle BG stijging door insuline te geven, wat leidt tot nog een lage waarde

Om een tweede lage waarde te vermijden, kunt u Trio instrueren om een tijdje geen SMB's te geven na een lage waarde, waardoor uw BG tijd heeft om te stabiliseren. Stel een [Tijdelijk Doel (Temporary Target)](../usage/features/temp-targets.md) preset in die een beetje hoger is dan uw gebruikelijke doel (bijv. 7,5 mmol/L | 136 mg/dl). Zorg ervoor dat [Allow SMB With High Temptarget (SMB Toestaan met Hoog Tijdelijk Doel)](../configuration/settings/algorithm/smb-settings.md#allow-smb-with-high-temptarget-smb-toestaan-met-hoog-tijdelijk-doel) is uitgeschakeld. Laat het tijdelijke doel een tijdje duren (bijv. 30-45 min).

!!! warning

    **Het instellen van een tijdelijk doel is niet hetzelfde als het loskoppelen van de pomp.** Trio zal nog steeds in staat zijn om u insuline te geven tijdens het tijdelijke doel, maar alleen door basaalstanden aan te passen, wat resulteert in een minder agressieve behandeling.

## Hoge Waarden na Maaltijden (Highs after meals)

!!! tip
    
    **Het is _normaal_ dat BG stijgt na een maaltijd. Dit gebeurt bij iedereen, met of zonder diabetes. De sleutel is om zeer hoge BG niveaus te vermijden en ze zo snel mogelijk terug in bereik te brengen.**

### Snelle Stijging (Fast Rise)

**Scenario:** _Uw BG stijgt snel tijdens het eten en eindigt te hoog._

Als uw BG snel stijgt en te hoog eindigt, is het meestal omdat de koolhydraten werden geabsorbeerd voordat de insuline piekte. Als we site problemen, ziekte, etc uitsluiten, is de logische benadering om ervoor te zorgen dat u genoeg insuline krijgt vóór de koolhydraten. U kunt dit bereiken door uw pre-bolus timing voor de maaltijd te verhogen. Dit geeft de insuline tijd om te absorberen voordat de koolhydraten intreden. U kunt meer informatie vinden op de [maaltijd strategie (mealtime strategy)](../configuration/transition-qa.md#mealtime-strategy) pagina.

### Aanhoudend Hoog Na Maaltijden (Persistent High After Meals)

**Scenario:** _Uw BG wordt hoog na een maaltijd en blijft lang hoog. Trio geeft u wat SMB's, maar niet genoeg om u terug naar beneden te brengen._

Trio berekent de hoeveelheid insuline die nodig is om bloedglucose terug in bereik te brengen. Extra insuline is nodig wanneer bloedglucose hoog blijft na een maaltijd, maar Trio heeft de juiste instellingen nodig om die aanpassingen te maken. 

- De eerste aanpassing moet zijn om uw CR te verlagen. Het verlagen van uw koolhydraatratio zal resulteren in **meer** insuline voor de ingevoerde koolhydraten.

### Snelle Stijging, Dan Laag (Fast Rise, Then Low)

**Scenario:** _Uw BG stijgt en eindigt te hoog na een maaltijd, valt dan en eindigt te laag._

In dit scenario krijgt u niet genoeg insuline vooraf om de koolhydraatabsorptie aan te pakken, maar de totale hoeveelheid insuline die u krijgt is te veel - wat een lage waarde veroorzaakt. Als dit een herhalend scenario is, moet u kijken naar **alle** volgende punten:

1. Als alle toegediende insuline van één bolus komt, moet u overwegen uw CR instelling aan te passen zodat de bolus calculator u minder insuline geeft. U kunt ook overwegen te pre-bolussen, waardoor de insuline wat tijd krijgt om te absorberen voordat u begint met eten.
2. Als de toegediende insuline deels bolus en deels SMB's is, moet u overwegen uw ISF instelling aan te passen zodat de SMB's u minder insuline geven. Het zou helpen als u ook overwoog te pre-bolussen, waardoor de insuline meer tijd krijgt om te absorberen voordat u begint met eten.
3. In zowel (1) als (2), als u de dynamische ISF functie gebruikt, moet u overwegen de Aanpassingsfactor (Adjustment Factor) te verlagen en de Autosens max/min instellingen aan te passen.

Lees alstublieft door de hoofdstukken over [Autosens](../configuration/settings/algorithm/autosens.md) en [Dynamische instellingen (Dynamic settings)](../configuration/settings/algorithm/dynamic-settings.md).

