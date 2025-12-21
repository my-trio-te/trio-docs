# SMB Instellingen (SMB Settings)

!!! summary "Belangrijkste punten (Highlights)"

    - UAM's moeten worden ingeschakeld wanneer SMB's zijn ingeschakeld.
    - Als u koolhydraten invoert en/of bolust: Max UAM Basal Minutes moet **lager** zijn ingesteld dan Max SMB Basal Minutes.
    - Als u **NIET** koolhydraten invoert en/of bolust (FCL): Max UAM Basal Minutes moet **hoger** zijn ingesteld dan Max SMB Basal Minutes.
    - Super Micro Boluses (SMB) bevatten vaak uw basale insuline. Uw basaalstand wordt tijdelijk verlaagd nadat een SMB is toegediend om overdosering van insuline te voorkomen.
    - SMB's verlagen de bloedsuiker sneller dan tijdelijke basaalstanden.
    - Als u SMB's alleen in bepaalde omstandigheden wilt configureren, schakel dan 'Enable SMB Always' niet in.
    - Voor een gedetailleerde blik op wanneer SMB's worden gebruikt, zie de grafiek in de [Zijn SMB's Toegestaan?](#zijn-smbs-toegestaan-are-smbs-allowed) sectie.
    - Voor hulp bij de installatie, zie de [Nieuwe Gebruiker Installatiegids (New User Guide)](../../new-user-setup.md).

- - -

!!! warning "Waarschuwing"

    Alle SMB opties die hieronder worden vermeld zijn **_inclusief_**, niet exclusief. Dit betekent dat als meer dan één optie is ingeschakeld, slechts _één_ van die opties hoeft te gelden om SMB's te kunnen gebruiken.

- - -

## Enable SMB Always (SMB Altijd Inschakelen)
**Standaard:** _UIT (OFF)_  

Wanneer deze instelling is ingeschakeld, zullen Super Micro Boluses (SMB's) altijd worden toegestaan als doseringsberekeningen bepalen dat insuline nodig is via de SMB toedieningsmethode. De uitzondering is wanneer een hoog tijdelijk doel is ingesteld. Het inschakelen van SMB Always zal de andere overbodige "Enable SMBs if..." opties verwijderen.

SMB's blijven aan als u een laag tijdelijk doel heeft ingesteld, maar worden volledig uitgeschakeld als een hoog tijdelijk doel is ingesteld (tenzij "[Allow SMB With High Temptarget](#allow-smb-with-high-temptarget-smb-toestaan-met-hoog-tijdelijk-doel)" is ingeschakeld).

De grootte van SMB's wordt beperkt door [Max SMB Basal Minutes](#max-smb-basal-minutes).

- - -

## Enable SMB with COB (SMB Inschakelen met COB)
**Standaard:** _UIT (OFF)_  

Wanneer de Carbs on Board (COB - Koolhydraten aan Boord) voorspellingslijn actief is, stelt het inschakelen van deze functie Trio in staat om SMB's te gebruiken om de benodigde insuline toe te dienen.

!!! tip

    Het toestaan van SMB's wanneer u koolhydraten aan boord heeft, kan helpen bij glucosepieken tijdens maaltijden.

- - -

## Enable SMB with TempTarget (SMB Inschakelen met Tijdelijk Doel)
**Standaard:** _UIT (OFF)_  

Het inschakelen van deze functie stelt Trio in staat om benodigde insuline toe te dienen met behulp van SMB's op momenten waarop een handmatig tijdelijk doel (temp target) onder **100 mg/dL (5,5 mmol/L)** is ingesteld.

!!! tip

    Lage tijdelijke doelen worden vaak ingesteld bij het worstelen met hoge glucosewaarden. Het toestaan van SMB's op dit moment kan helpen om verhoogde glucoseniveaus sneller tegen te gaan.

- - -

## Enable SMB After Carbs (SMB Inschakelen na Koolhydraten)
**Standaard:** _UIT (OFF)_  

Het inschakelen van deze functie stelt Trio in staat om benodigde insuline toe te dienen met behulp van SMB's gedurende **6 uur** na elke koolhydrateninvoer, ongeacht of er actieve koolhydraten aan boord (COB) zijn.

!!! tip

    Koolhydraten verteren niet met dezelfde snelheid. Het toestaan van SMB's gedurende de 6 uur na het invoeren van een maaltijd helpt Trio die koolhydraten sneller tegen te gaan.

- - -

## Enable SMB with High Glucose (SMB Inschakelen met Hoge Glucose)
**Standaard:** _UIT (OFF)_  

Het inschakelen van deze functie stelt Trio in staat om benodigde insuline toe te dienen met behulp van SMB's wanneer uw glucosewaarde boven de waarde ligt die is ingesteld als uw 'High Glucose Target'. Deze extra instelling verschijnt wanneer u deze functie inschakelt.

### High Glucose Target (Hoog Glucosedoel)
**Standaard:** _110 mg/dL_ | _6,1 mmol/L_  

Als 'Enable SMB with High BG' is ingeschakeld, worden SMB's toegestaan als uw glucose boven deze waarde ligt.

!!! warning "**Belangrijk (Important)**"

    - Deze instelling werd vaak verkeerd begrepen. Het was nooit een beperking op SMB's. Om het doel ervan voor gebruikers te verduidelijken, is het verplaatst onder de enige instelling waarop het van toepassing is, `Enable SMB with High BG`.
    - De enige functie is om SMB's toe te staan als glucose boven dit getal ligt en `Enable SMB with High BG` is ingeschakeld.
    - **Het zal SMB's of UAM's onder dit getal niet _voorkomen_ als andere SMB instellingen zijn ingeschakeld.**

- - -

## Allow SMB with High TempTarget (SMB Toestaan met Hoog Tijdelijk Doel)
**Standaard:** _UIT (OFF)_  

Het inschakelen van deze functie stelt Trio in staat om benodigde insuline toe te dienen met behulp van SMB's wanneer een handmatig Tijdelijk Doel (Temp Target) boven **100 mg/dL (5,5 mmol/L)** is ingesteld.

!!! warning "**Belangrijk (Important)**"

    Hoge Tijdelijke Doelen worden vaak gebruikt om te herstellen van lage waarden. Als u een hoog tijdelijk doel voor dat doel gebruikt, moet deze functie uitgeschakeld blijven.

- - -

## Enable UAM (UAM Inschakelen)
**Standaard:** _UIT (OFF)_

!!! warning "**Belangrijk (Important)**"

    Deze instelling moet _AAN (ON)_ staan als andere SMB's zijn ingeschakeld.

Het inschakelen van Unannounced Meal SMBs (UAM's - Onaangekondigde Maaltijd SMB's) stelt Trio in staat om onverwachte stijgingen in glucosewaarden te detecteren en erop te reageren die worden veroorzaakt door onaangekondigde of verkeerd berekende maaltijden, maaltijden met veel vet of eiwit, of andere factoren zoals adrenaline of cortisol.

Het gebruikt SMB's om insuline in kleine hoeveelheden toe te dienen om glucosepieken te corrigeren. UAM werkt ook in omgekeerde richting, waarbij insuline wordt verminderd of gestopt als glucoseniveaus onverwacht dalen.

De grootte van UAM's wordt beperkt door [Max UAM Basal Minutes](#max-uam-basal-minutes)

!!! tip

    Het inschakelen van UAM geeft kleine aanpassingen in uw insulinedosering om rekening te houden met het verschil tussen verwachte glucose en werkelijke glucosewaarden.
    
    - Als u koolhydraten invoert en/of bolust voor maaltijden, moet `Max UAM Basal Minutes` lager worden ingesteld dan `Max SMB Basal Minutes`.
    - Als u **niet** koolhydraten invoert of bolust voor maaltijden, moet `Max UAM Basal Minutes` hoger worden ingesteld dan `Max SMB Basal Minutes`.

- - -

## Max SMB Basal Minutes
**Standaard:** _30 minuten_  
**Instellingslimieten:** _30-180 minuten_

Als een van de SMB opties is ingeschakeld, is deze limiet van toepassing op alle SMB's behalve UAM SMB's. Dit is een limiet op de grootte van een enkele SMB. Eén SMB kan slechts zo groot zijn als dit aantal minuten van uw huidige profiel basaalstand.

Om de maximaal toegestane SMB te berekenen op basis van deze instelling, gebruik de volgende formule:

$$
\frac{Max\ SMB\ Basaal\ Minuten}{60} \times Huidige\ Basaalstand
$$

??? question "Bill's huidige basaalstand is 2,0 eenheden/uur. Zijn `Max SMB Basal Minutes` is ingesteld op 30 minuten. Wat is de grootste SMB die hij kan ontvangen?"
    
    ??? info "Hier is de formule die u nodig heeft:"
    
        $$
        \frac{Max\ SMB\ Basaal\ Minuten}{60} \times Huidige\ Basaalstand
        $$
        
    ??? note "Bereken Bill's grootste SMB:"
    
        $$
        \frac{30}{60} \times 2,0 =
        $$
        
        $$
        \frac{1}{2} \times 2,0 =
        $$
        
        $$
        1,0\ eenheid
        $$
        
    ??? success "Antwoord"
        De grootste SMB die Bill kan ontvangen is **1,0 eenheid** elke 5 minuten.


!!! warning "Waarschuwing"

    Het verhogen van deze waarde boven 90 minuten kan het vermogen van Trio om effectief naar nul temp te gaan en lage waarden te voorkomen, beïnvloeden.

!!! tip
    
    Als u koolhydraten invoert of bolust voor maaltijden, moet uw **Max SMB Basal Minutes _hoger_ worden ingesteld** dan uw Max UAM Basal Minutes

- - -

## Max UAM Basal Minutes
**Standaard:** _30 minuten_  
**Instellingslimieten:** _30-180 minuten_

Als UAM is ingeschakeld, beperkt deze instelling de grootte van elke UAM SMB. Eén UAM SMB kan slechts zo groot zijn als dit aantal minuten van uw huidige profiel basaalstand.

Om de maximaal toegestane UAM te berekenen op basis van deze instelling, gebruik de volgende formule:

$$
\frac{Max\ UAM\ Basaal\ Minuten}{60} \times Huidige\ Basaalstand
$$

!!! warning "Waarschuwing"

    Het verhogen van deze waarde boven 90 minuten kan het vermogen van Trio om effectief naar nul temp te gaan en lage waarden te voorkomen, beïnvloeden.

!!! tip
    
    Als u **NIET** koolhydraten invoert of bolust voor maaltijden en Trio gebruikt als een Volledig Gesloten Loop (Fully Closed Loop - FCL), moet uw **Max UAM Basal Minutes _hoger_ worden ingesteld** dan uw Max SMB Basal Minutes

- - -

## Max Allowed Glucose Rise for SMB (Maximaal Toegestane Glucosestijging voor SMB)
**Standaard:** _20%_  
**Instellingslimieten:** _10%-40%_

Deze veiligheidsbegrenzer kijkt naar het verschil tussen uw laatste twee bloedglucosewaarden. Als het verschil boven dit percentage ligt, vermoedt Trio dat ze onjuist zijn en zal alle SMB toediening dienovereenkomstig opschorten (inclusief UAM). U kunt de hoeveelheid verandering aanpassen die moet worden toegestaan voordat SMB's worden toegediend.

??? question "Bill's laatste CGM waarde was 90 mg/dL. De volgende waarde is 115 mg/dL. Zal Bill de benodigde insuline ontvangen als een SMB?"
    
    ??? info "Hier zijn de formules die u nodig heeft:"
        Stijgingspercentage:
        
        $$
        \frac{Huidige\ Glucose - Vorige\ Glucose}{Vorige\ Glucose}
        $$
        
        Vergelijk met Max Allowed Glucose Rise for SMB
        
        $$
        Stijgingspercentage \gt \ of\ = \ of\ \lt Max\ Toegestane\ Glucosestijging\ voor\ SMB\ Instelling
        $$
        
        **Geen SMB**: $\gt$  
        **Wel SMB**: $\lt$ of $=$
        
    ??? note "Bereken of een SMB zal worden gebruikt:"
    
        $$
        \frac{115-90}{90} =
        $$
        
        $$
        \frac{25}{90} =
        $$
        
        $$
        +0,28\ of\ +28\%
        $$

        Zijn stijging, of toename in glucose, is een toename van **_28%_**

        $$
        28\%\gt 20\% = Geen\ SMBs
        $$
    
    ??? success "Antwoord"
        Deze toename is groter dan de drempel, dus **er worden geen SMB's gegeven**. Trio zal de benodigde insuline toedienen via tijdelijke basaalaanpassing.

!!! tip
    
    Voor Volledig Gesloten Loop (Fully Closed Loop - FCL) wordt 30% geadviseerd.

- - -

## Zijn SMB's Toegestaan? (Are SMBs Allowed?)

![SMB-flow-chart](../../../../configuration/settings/algorithm/img/smb_allowed_flowchart.jpeg)
{align=center}

### Door de bovenstaande stroomdiagram te volgen, kunt u zien welke combinatie van instellingen SMB's zal toestaan.

- Als een instelling in de bovenste rij is uitgeschakeld, kijk dan naar het volgende vakje naar rechts. Als geen enkel vakje in de bovenste rij is ingeschakeld, worden SMB's niet toegestaan.
- Als een van de instellingen in de bovenste rij is ingeschakeld en hun voorwaarde waar is, volg dan de groene lijn naar beneden naar het "Allow SMB with High Temptarget" vakje.
- Als "Allow SMB with High Temptarget" is ingeschakeld (NIET de standaard), ga dan door met het volgen van de groene lijn naar de onderste voorwaarden.
- Als "Allow SMB with High Temptarget" is uitgeschakeld (wat WEL de standaard is), zal het dan controleren of u een Temp Target (geen aangepast profiel) boven 100 mg/dL (5,5 mmol/L) heeft ingesteld. Als u een Temp Target boven 100 mg/dL heeft ingesteld, zijn SMB's UITGESCHAKELD en niet toegestaan.

Als u de onderste rij heeft bereikt, controleert het al die voorwaarden, en als geen van hen waar is, zijn SMB's toegestaan.

### Hier is de volgorde van instellingen die Trio gebruikt bij het beslissen of SMB's in of uit te schakelen:

- Uitschakelen wanneer een Hoog Tijdelijk Doel is ingesteld (tenzij "Allow SMB with High Temp Target" is ingeschakeld)
- Inschakelen als "Enable SMB Always" is ingesteld (tenzij uitgeschakeld voor "High Temp Target")
- Inschakelen terwijl er COB zijn
- Inschakelen gedurende volle 6 uur na elke koolhydrateninvoer
- Inschakelen als een Laag Tijdelijk Doel is ingesteld

