# Bolus Calculator (Bolusberekenaar)

<!-- Include the following
- How doses are calculated in bolus calc
- Interface walkthrough
- ??? Bill examples
- highlight confirmation feature
-->

## Bolus Calculator Interface

U kunt de bolus calculator bereiken door op het <span style="color: #7d8cf2;">:fontawesome-solid-circle-plus:</span> icoon te tikken

Er zijn 4 hoofdsecties van de Bolus Calculator Interface:

![Bolus Berekening Secties](../../../../usage/img/calculator-sections.png){width="500"}
{align="center"}

### Dynamische Glucosevoorspelling (Dynamic Glucose Forecast)

Terwijl u uw koolhydraten en insuline invoert, zal deze dynamische grafiek bovenaan de bolus calculator de voorspellingslijnen of kegel aanpassen om uw toekomstige data te verantwoorden.  
Bekijk de onderstaande video om dit in actie te zien.

<div class="video-center">
  <video controls  preload="metadata" height="664" width="334">
    <source src="/usage/../../../usage/img/bolus-entry-dynamic-graph.mp4" type="video/mp4">
    Your browser doesn't support the HTML5 video tag.
  </video>
</div>


### Maaltijd Invoer (Meal Entry)

In de Maaltijd Invoer sectie voert u uw koolhydraten in. Als u [FPU](../../configuration/settings/features/meal-settings.md#enable-fat-and-protein-entries)'s heeft ingeschakeld, kunt u ook uw vet en eiwit invoeren.

Hieronder is er een plaats om de tijd in te voeren voor toekomstige of verleden koolhydraten.

U kunt ook een notitie toevoegen voor deze maaltijd.

### Dosering Berekening (Dosing Calculation)

In de Dosering Berekening sectie begint het met de [Gereduceerde Bolus en Super Bolus opties (Reduced Bolus and Super Bolus options)](../../configuration/settings/features/bolus-calculator.md#reduced-bolus-and-super-bolus-options) bovenaan, als u die heeft ingeschakeld.

Daaronder staat de voorgestelde bolus hoeveelheid die Trio heeft berekend. Tik op het "i" icoon voor meer details en [lees de onderstaande sectie](#hoe-bepaalt-de-bolus-calculator-dosering-how-does-the-bolus-calculator-determine-dosage) voor meer details over de informatie die wordt gedeeld wanneer u op dit icoon tikt.

Als u het "External Insulin" vakje aanvinkt, zal de bolus worden toegevoegd aan uw IOB, maar het zal niet worden toegediend door Trio.

### Enact Knop

Deze knop zal een van de volgende berichten tonen:

- **Continue Without Treatment**: Dit betekent dat geen COB of IOB zal worden toegevoegd
- **Log Carbs**: Koolhydraten worden gelogd, maar geen insuline zal worden toegediend
- **Log FPU**: FPU's worden gelogd, maar geen insuline zal worden toegediend
- **Log Meal**: Zowel koolhydraten als FPU's worden gelogd, maar geen insuline zal worden toegediend
- **Log Meal/FPU/Carbs and Enact Bolus**: Koolhydraten en/of FPU's worden gelogd en insuline zal worden toegediend
- **Log External Insulin**: Insuline wordt toegevoegd aan IOB, maar het zal **niet** worden toegediend

## Hoe Bepaalt de Bolus Calculator Dosering? (How Does the Bolus Calculator Determine Dosage?)

Er zijn meerdere berekeningen die worden gebruikt om de bolus aanbeveling in Trio te bepalen.  

Een positieve berekening wordt groen getoond en een negatieve berekening wordt rood getoond.

![Bolus Berekening Stappen](../../../../usage/img/bolus-calculation.png){width="500"}
{align="center"}

### Glucose Berekening (Glucose Calculation)

De bolus calculator in Trio begint met uw basis dosering die nodig is om uw huidige glucosemeting aan te pakken. Als uw glucose onder uw doel is, zal het een negatief getal zijn. Als uw glucose boven uw doel is, zal het een positief getal zijn.

Laten we door Bill's huidige bolus berekening lopen, beginnend met de eerste stap, **Glucose Berekening (Glucose Calculation)**.  

??? question "**Glucose Boven Doel (Glucose Above Target)**: Bill's huidige glucosemeting is 122 mg/dL. Zijn doel glucose is 83 mg/dL. Trio gebruikt momenteel een berekende ISF van 59 mg/dL/U. Hoeveel insuline heeft Bill nodig om zijn doel glucose te bereiken?"
    
    ??? info "Hier is de formule die u nodig heeft:"
    
        $$
        \frac{(Huidige\ Glucose - Doel\ Glucose)}{\mathit{IS}\mathit{F}}
        $$
        
    ??? note "Bereken Bill's Glucose Berekening:"
    
        $$
        \frac{(122-83)}{59} =
        $$
        
        $$
        \frac{39}{59} =
        $$
        
        $$
        0.66\ units
        $$
    
    ??? success "Antwoord"
        Bill heeft **0.66 units** nodig om zijn glucose doel te bereiken zonder rekening te houden met andere factoren.
    
    
??? question "**Glucose Onder Doel (Glucose Below Target)**: Bill's huidige glucosemeting is 70 mg/dL. Zijn doel glucose is 83 mg/dL. Trio gebruikt momenteel een berekende ISF van 90 mg/dL/U. Hoeveel insuline heeft Bill nodig om zijn doel glucose te bereiken?"
    
    ??? info "Hier is de formule die u nodig heeft:"
    
        $$
        \frac{(Huidige\ Glucose - Doel\ Glucose)}{\mathit{IS}\mathit{F}}
        $$
        
    ??? note "Bereken Bill's Glucose Berekening:"
    
        $$
        \frac{(70-83)}{90} =
        $$
        
        $$
        \frac{-13}{90} =
        $$
        
        $$
        -0.14\ units
        $$
    
    ??? success "Antwoord"
        Omdat Bill onder doel was, schat de bolus calculator dat hij het equivalent van 0.14 units al aanwezig heeft op basis van zijn huidige ISF. Daarom zal Trio **0.14 units aftrekken** van zijn benodigde insuline in de bolus calculator.
    
Trio houdt rekening met veel aanvullende factoren. Vervolgens zal het aanpassen voor de hoeveelheid insuline die al in zijn systeem zit.
        
### Insuline aan Boord Aanpassing (Insulin on Board Adjustment)

De volgende stap in de bolus berekening is de aanpassing voor huidige insuline aan boord (IOB - Insulin on Board). Om te voorkomen dat de calculator u insuline geeft die al is gegeven, trekt het uw huidige IOB af.  

Dit zal ook ontbrekende insuline vervangen die mogelijk is opgetreden na basaalvermindering of opschorting. Als u laag aan het gaan bent voor een maaltijd, zal dit elke negatieve IOB toevoegen om u terug te brengen naar baseline basaal in voorbereiding op het aanpakken van uw benodigde insuline voor de binnenkomende koolhydraten.

Laten we kijken hoe Trio zowel positieve als negatieve IOB aanpakt:

??? question "**Positieve IOB (Positive IOB)**: Bill heeft momenteel 1.0 units insuline aan boord (IOB) van eerdere SMB's, manuele bolussen, en/of verhoogde tijdelijke basaalstanden. Hoe zal de bolus calculator voor deze IOB aanpassen?"

    ??? info "Hier is de formule die u nodig heeft:"
    
        $$
        -(\mathit{IO}\mathit{B})
        $$
    
    ??? note "Bereken Bill's Insuline aan Boord Aanpassing:"
    
        $$
        -(1.0) =
        $$
        
        $$
        -1.0\ units
        $$
        
    ??? success "Antwoord"
        De bolus calculator zal **1.0 units aftrekken** van de bolus aanbeveling.
        
??? question "**Negatieve IOB (Negative IOB)**: Bill heeft momenteel -1.0 units insuline aan boord (IOB) van eerdere verlaagde of opgeschorte basaalstanden. Hoe zal de bolus calculator voor deze IOB aanpassen?"

    ??? info "Hier is de formule die u nodig heeft:"
    
        $$
        -(\mathit{IO}\mathit{B})
        $$
    
    ??? note "Bereken Bill's Insuline aan Boord Aanpassing:"
    
        $$
        -(-1.0) =
        $$
        
        $$
        +1.0\ units
        $$
        
    ??? success "Antwoord"
        De bolus calculator zal **1.0 units toevoegen** aan de bolus aanbeveling.
        
Er zijn nog meer factoren waar Trio rekening mee moet houden, dus we zijn nog niet klaar! Laten we vervolgens kijken hoe uw huidige COB en de nieuwe ingevoerde koolhydraten de bolus aanbeveling zullen beïnvloeden.

### Koolhydraten aan Boord Aanpassing (Carbs on Board Adjustment)

De vorige stap hield rekening met de insuline die u al in uw systeem heeft. Deze volgende stap zal de insuline toevoegen die nodig is voor zowel de koolhydraten die al aan boord zijn als de nieuwe koolhydraten die u zojuist heeft ingevoerd, wat dient om elke IOB die te danken was aan eerdere maaltijden (COB) te negeren.

Laten we kijken hoe Trio momenten aanpakt wanneer er koolhydraten aan boord zijn en momenten wanneer er geen koolhydraten aan boord zijn:

??? question "**Zonder COB (Without COB)**: Bill heeft momenteel geen koolhydraten aan boord (COB), maar hij voert 50g in de bolus calculator in. Zijn huidige koolhydraatratio (CR) is 10 g/U. Hoeveel insuline heeft hij nodig om zowel de bestaande als nieuwe koolhydraten in zijn systeem tegen te gaan?"
    
    ??? info "Hier is de formule die u nodig heeft:"
    
        $$
        \frac{(\mathit{CO}\mathit{B} + Ingevoerde\ Koolhydraten)}{\mathit{C}\mathit{R}}
        $$
        
    ??? note "Bereken Bill's Glucose Berekening:"
    
        $$
        \frac{(0+50)}{10} =
        $$
        
        $$
        \frac{50}{10} =
        $$
        
        $$
        5.00\ units
        $$
    
    ??? success "Antwoord"
        Op basis van zijn huidige kerninstellingen heeft Bill **5.00 units** nodig om de koolhydraten die hij heeft ingevoerd tegen te gaan.

??? question "**Met COB (With COB)**: Bill heeft momenteel 20g koolhydraten aan boord (COB), maar hij voert 50g in de bolus calculator in. Zijn huidige koolhydraatratio (CR) is 10 g/U. Hoeveel insuline heeft hij nodig om zowel de bestaande als nieuwe koolhydraten in zijn systeem tegen te gaan?"
    
    ??? info "Hier is de formule die u nodig heeft:"
    
        $$
        \frac{(\mathit{CO}\mathit{B} + Ingevoerde\ Koolhydraten)}{\mathit{C}\mathit{R}}
        $$
        
    ??? note "Bereken Bill's Glucose Berekening:"
    
        $$
        \frac{(20+50)}{10} =
        $$
        
        $$
        \frac{70}{10} =
        $$
        
        $$
        7.00\ units
        $$
    
    ??? success "Antwoord"
        Op basis van zijn huidige kerninstellingen heeft Bill **7.00 units** nodig om de koolhydraten die hij heeft ingevoerd en zijn huidige COB tegen te gaan.

We zijn nog niet klaar! Bent u niet blij dat Trio dit allemaal voor u doet en u alleen maar hoeft mee te volgen om de redenering erachter te begrijpen? Vervolgens zal het kijken naar hoe onze glucose aan het gaan is om ervoor te zorgen dat het u niet over- of onderbehandelt.

### Glucose Trend Aanpassing (Glucose Trend Adjustment)

Uw glucose trend (Delta) houdt rekening met hoeveel uw glucosemetingen zijn veranderd over de laatste 15 minuten. Als u een steile stijging of steile daling ervaart, helpt dit Trio die activiteit tegen te gaan en een over- of onderdosering te voorkomen.

Laten we kijken hoe Trio rekening houdt met een stijgende trend en een dalende trend in glucose:

??? question "**Stijgende Trend (Increasing Trend)**: Bill's laatste 3 glucosemetingen waren gestaag stijgend voor een gecombineerde verandering van +29 mg/dL. Zijn huidige ISF is 59 mg/dL/U Hoe zal Trio deze trend in glucose behandelen?"
    
    ??? info "Hier is de formule die u nodig heeft:"
    
        $$
        \frac{Delta}{\mathit{IS}\mathit{F}}
        $$
        
    ??? note "Bereken Bill's Glucose Trend Berekening:"
    
        $$
        \frac{29}{59} =
        $$
        
        $$
        0.49\ units
        $$
    
    ??? success "Antwoord"
        Op basis van zijn huidige ISF heeft Bill **0.49 units** nodig om de huidige trend in zijn glucosemetingen tegen te gaan.

??? question "**Dalende Trend (Decreasing Trend)**: Bill's laatste 3 glucosemetingen waren gestaag dalend voor een gecombineerde verandering van -15 mg/dL. Zijn huidige ISF is 100 mg/dL/U Hoe zal Trio deze trend in glucose behandelen?"
    
    ??? info "Hier is de formule die u nodig heeft:"
    
        $$
        \frac{Delta}{\mathit{IS}\mathit{F}}
        $$
        
    ??? note "Bereken Bill's Glucose Trend Berekening:"
    
        $$
        \frac{-15}{100} =
        $$
        
        $$
        -0.15\ units
        $$
    
    ??? success "Antwoord"
        Op basis van zijn huidige ISF zal Trio **0.15 units aftrekken** om de huidige trend in zijn glucosemetingen tegen te gaan.

Vervolgens combineert Trio alle dosering componenten die het heeft berekend in één volledige bolus aanbeveling.

### Volledige Bolus Berekening (Full Bolus Calculation)

Trio begint uw bolus aanbeveling op de volledige bolus hoeveelheid, past het dan aan in de volgende stap. Voordat het kan aanpassen, moet het weten wat de volledige benodigde bolus is. Om dit te doen, neemt het alle vorige berekeningen en combineert ze.

Laten we kijken naar de combinatie gebruikt in de afbeelding om te zien wat de volledige bolus aanbeveling is:

??? question "In de [afbeelding](#hoe-bepaalt-de-bolus-calculator-dosering-how-does-the-bolus-calculator-determine-dosage) hierboven kunt u de stappen van elke berekening vinden. Laten we ze combineren om te zien wat Bill's volledige bolus berekening zal zijn."
    
    ??? info "Hier is de formule die u nodig heeft:"
    
        $$
        \mathit{Glucose\ Ber} + \mathit{IO}\mathit{B\ Ber} + \mathit{CO}\mathit{B\ Ber} + \mathit{Delta\ Ber}
        $$
        
    ??? note "Bereken Bill's Volledige Bolus Berekening:"
    
        $$
        0.66 + (-1.00) + 5.00 + 0.00 =
        $$
        
        $$
        0.66 - 1.00 + 5.00 + 0.00 =
        $$
        
        $$
        4.66\ units
        $$
    
    ??? success "Antwoord"
        Op basis van alle belangrijke factoren die zijn bolus berekening vormen, bepaalt Trio dat Bill 4.66 units nodig heeft voor deze bolus.

Nu Trio de volledige bolus heeft bepaald, vermindert Trio dit op basis van de instellingen die u heeft ingesteld.

### Beperkende Factoren Aanpassing (Limiting Factors Adjustment)

Trio zal uw bolus hoeveelheid verminderen met het [Aanbevolen Bolus Percentage (Recommended Bolus Percentage)](../../configuration/settings/features/bolus-calculator.md#recommended-bolus-percentage) dat u heeft ingesteld.

Laten we kijken hoe Trio Bill's bolus zal aanpassen op basis van de standaardinstelling van 50%:

??? question "Bill heeft zijn Aanbevolen Bolus Percentage ingesteld op de standaard van 50%. In de vorige stap hebben we berekend dat hij 4.66 units nodig had. Hoe zal Trio zijn bolus aanbeveling aanpassen op basis van deze instelling?"
    
    ??? info "Hier is de formule die u nodig heeft:"
    
        $$
        Volledige\ Bolus \times Aanbevolen\ Bolus\ Percentage
        $$
        
    ??? note "Bereken Bill's Beperkende Factoren Aanpassing:"
    
        $$
        4.66 \times 50\% =
        $$
        
        $$
        2.33\ units
        $$
    
    ??? success "Antwoord"
        Trio bepaalt dat Bill 2.33 units nodig heeft voor deze bolus.

Maar, wacht! Trio kan geen 2.33 units toedienen omdat hij een Omnipod pomp gebruikt. Trio pakt dit aan in de laatste stap.

### Definitieve Bolus Berekening (Final Bolus Calculation)

Nu Trio de definitieve aanbevolen bolus heeft bepaald, moet het ervoor zorgen dat het de pomp een bolus commando geeft dat het kan uitvoeren. Dat betekent, een bolus hoeveelheid die de pomp kan geven.

Dit is vrij eenvoudig. Trio zal de bolus berekening naar boven of beneden afronden. Als de berekende hoeveelheid groter is dan 0.06, zal het naar boven afronden. Als het minder is dan 0.05, zal het naar beneden afronden. Als het precies 0.00 of 0.05 is, zal het de hoeveelheid niet veranderen.

??? question "Trio heeft bepaald dat Bill 2.33 units nodig heeft. Bill gebruikt een Omnipod pomp, dus bolussen kunnen alleen worden toegediend in stappen van 0.05 units. Hoe zal Trio Bill's definitieve bolus aanbeveling aanpassen?"
    
    
    ??? success "Antwoord"
        Omdat Bill's aanbevolen bolus eindigt op een getal minder dan 0.05, zal het **naar beneden worden afgerond naar 2.30 units**.

Gefeliciteerd! U heeft de volledige bolus berekening voltooid. We realiseren ons dat dit een uitgebreid en langdurig proces is, dus we moedigen u aan om ervoor te zorgen dat uw [kerninstellingen (core settings)](../../configuration/settings/therapy/index.md) zijn getest en nauwkeurig zijn voor het Trio algoritme en uw [algoritme instellingen (algorithm settings)](../../configuration/settings/algorithm/index.md) zijn passend ingesteld zodat u niet constant deze bepalingen hoeft te betwijfelen.

!!! tip
    - Hoewel het **altijd** verstandig is om uw beste oordeel te gebruiken in plaats van blindelings de bolus aanbeveling te vertrouwen, zullen nauwkeurige instellingen de noodzaak voorkomen dat u handmatig moet ingrijpen en de bolus aanbeveling moet overschrijven.
    - Als uw glucose updates in het midden van uw maaltijd invoer, zal Trio uw berekening in real time updaten.


