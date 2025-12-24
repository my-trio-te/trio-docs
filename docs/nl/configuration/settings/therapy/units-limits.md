# Eenheden en Limieten (Units and Limits)

!!! tip  "Hoogtepunten (Highlights)"
    
	- Max IOB = Verhoog boven 0 _voordat u de loop sluit_
	- Max Bolus = Max bolus die u geeft voor een maaltijd
    - Max Basal = 4x hoogste uurlijkse basaal
	- Max COB = Maximum koolhydraten actief op een gegeven moment

## Glucose Eenheden (Glucose Units)

Selecteer ofwel mg/dL of mmol/L.  
Alle instellingen beschrijvingen en scherminformatie zullen worden aangepast om uw selectie hier te matchen.

- - -

## Max IOB

**Standaard:** _0 units_  

!!! warning "Belangrijke Informatie (Important Information)"
    Dit moet worden ingesteld op een waarde groter dan 0 voor enige insuline om te worden toegediend boven uw huidige ingestelde basaalstand.  
    Als dit op 0 blijft, kan Trio uw insuline opschorten om lage waarden te voorkomen, maar kan alleen genoeg insuline toedienen om u terug te brengen naar uw huidige basaalstand hoeveelheid.
    
Dit is de maximale hoeveelheid Insuline aan Boord (IOB - Insulin on Board) boven uw profiel basaalstanden van alle bronnen - positieve tijdelijke basaalstanden, manuele of maaltijdbolussen, en SMB's - dat Trio mag verzamelen om een boven doel glucose aan te pakken.

Als een berekende hoeveelheid deze limiet overschrijdt, zal de voorgestelde en/of toegediende hoeveelheid worden verminderd zodat actieve Insuline aan Boord (IOB) deze veiligheidslimiet niet zal overschrijden.

!!! tip
    U kunt nog steeds handmatig bolussen boven deze limiet, maar de voorgestelde bolus hoeveelheid zal dit nooit overschrijden in de bolus calculator


- - -

## Max Bolus

**Standaard:** _10 units_  
**Instellinglimieten:** _1-30 units_  

Dit is de maximale bolus toegestaan om in één keer te worden toegediend. Dit beperkt alleen manuele bolussen gegeven op het Behandelingen (Treatments) scherm.

Als u probeert een bolus groter dan dit aan te vragen, zal de bolus niet worden geaccepteerd of doorgaan. Dus als uw max bolus is ingesteld op 5U maar u voert een 6U bolus in, zal de "Enact Bolus" knop rood worden en een waarschuwingsbericht tonen. U zult niet in staat zijn om door te gaan totdat u uw bolus verlaagt tot binnen deze limiet.

![Exceed Max Bolus](../../../../configuration/settings/therapy/img/exceed_max_bolus.png){ width="600px"  }
{align=center}

!!! tip
    De meesten stellen dit in op hun grootste maaltijdbolus, passen het dan aan indien nodig.

- - -

## Max Basal

**Standaard:** _2 units_  
**Instellinglimieten:** _0.5-30 units_  

Dit is de maximale basaalstand toegestaan om te worden ingesteld of gepland. Dit geldt voor zowel automatische tijdelijke basaalstanden, profiel basaalstanden, en manuele tijdelijke basaalstanden.

!!! tip
    Over het algemeen voeren gebruikers een waarde in die 4 keer hun hoogste uurlijkse basaalstand is

!!! info "Voor Medtronic Gebruikers:"
    U moet ook handmatig de max basaalstand op de pomp instellen om deze waarde te matchen

- - -

## Max COB

**Standaard:** _120 gram koolhydraat_  
**Instellinglimieten:** _0-300 g_  

Deze instelling definieert de maximale hoeveelheid Koolhydraten aan Boord (COB - Carbs On Board) toegestaan op een gegeven moment voor Trio om te gebruiken in dosering berekeningen. Als meer koolhydraten worden ingevoerd dan toegestaan door deze limiet, zal Trio de huidige COB in berekeningen beperken tot deze Max COB instelling en op dit maximum blijven totdat alle resterende koolhydraten zijn geabsorbeerd of 6 uur is verstreken, wat het eerst komt.

Bijvoorbeeld, als Max COB 120g is en u voert een maaltijd in met 150g koolhydraat, zal uw COB op 120g blijven totdat de resterende 30g geabsorbeerde koolhydraten hebben vervangen.

- - -

## Minimum Veiligheidsdrempel (Minimum Safety Threshold)

**Standaard:** _Ingesteld Door Algoritme_  
**Instellinglimieten:** _60 - 120 mg/dL_

Trio gebruikt een Veiligheidsdrempel (Safety Threshold) om insulinedosering te voorkomen wanneer uw huidige glucosemeting te laag is. Deze drempel is altijd actief, maar u kunt deze drempel verhogen van de systeem-bepaalde waarde door een waarde in deze instelling in Trio in te voeren.

De systeem-bepaalde waarde is gebaseerd op deze berekening:

$$
Doel\ Glucose - \frac{Doel\ Glucose - 40}{2}
$$

De drempel is een veiligheidsbeperkende functie. Als bloedsuiker op enig moment wordt voorspeld onder deze waarde te gaan, zal Trio insulinetoediening opschorten (SMB's worden gestopt en Temp Basal van 0 U/uur ingesteld) en wachten totdat voorspelling anders zegt. Het verhogen van deze instelling kan nuttig zijn als u een hoog aantal hypoglykemie gebeurtenissen ervaart. Bekijk alstublieft de [OpenAPS documenten](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html?highlight=Safety%20Threshold) als u een beter begrip wilt van hoe het wordt gebruikt. 

Deze instelling stelt u in staat om een hogere drempel instelling te kiezen dan de standaard. Merk op dat u niet iets lager kunt kiezen dan de standaardinstelling voor een bepaald bloedglucose doel.

??? question "Bill heeft een BG doel ingesteld van 110 mg/dl. In zijn Trio Dynamische Instellingen heeft hij zijn drempel ingesteld op 65 mg/dl. Zal Trio de standaard drempel of de minimum veiligheidsdrempel gebruiken die hij heeft ingesteld?"
    
    ??? info "Hier zijn de formules die u nodig heeft:"
        
        **Standaard Veiligheidsdrempel (Default Safety Threshold)**:
        
        $$
        Doel\ Glucose - \frac{Doel\ Glucose - 40}{2}
        $$
        
        **Vergelijk dan die waarde met de Minimum Veiligheidsdrempel**  
        
        Standaard Veiligheidsdrempel $\gt$ of $=$ of $\lt$ Minimum Veiligheidsdrempel
        
        
    ??? note "Nu, voer Bill's waarden in"
        
        $$
        110 - \frac{110-40}{2} =
        $$
        
        $$
        110 - \frac{70}{2} =
        $$
        
        $$
        110 - 35 =
        $$
        
        $$
        75\ mg/dL
        $$
        
        $$
        75\ mg/dL \gt 65\ mg/dL
        $$
        
    ??? success "Antwoord"
        Omdat Trio's standaard drempel instelling 75 mg/dL is voor een 110 mg/dL bloedglucose doel, en dat groter is dan Bill's Minimum Veiligheidsdrempel, zal Trio het hogere doel van **_75 mg/dL_** gebruiken en deze instelling negeren.
        
??? question "Bonusvraag: Ervan uitgaande dat Bill's doel op 110 mg/dL blijft, wat zou Bill zijn Minimum Veiligheidsdrempel moeten instellen opdat het door Trio wordt gebruikt?"
    
    $$
    \geq 75\ mg/dL
    $$


!!! tip
    Basaal kan worden hervat als er negatieve IOB is en glucose sneller stijgt dan de voorspelling
    
- - -

Terug naar [Nieuwe Gebruiker Setup (New User Setup)](../../new-user-setup.md)


