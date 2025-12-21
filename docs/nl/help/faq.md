# Veelgestelde Vragen (Frequently Asked Questions / FAQ) ✏️

Verschillende bronnen, waaronder [Facebook](https://www.facebook.com/groups/diytrio) en [Discord](https://discord.com/invite/FnwFEFUwXE), zijn beschikbaar om u te helpen met het instellen, onderhouden en slagen in uw Trio reis. Hieronder staat een reeks vragen die we dagelijks zien gesteld worden. We hopen dat het helpt. 

## Trio FAQ's

### Wat is Trio?

Trio is een open-source kunstmatige pancreassysteem (artificial pancreas system) gebaseerd op het OpenAPS (Oref0) algoritme. Het gebruikt uw ingevoerde instellingen, koolhydraten en historische gegevens om insulinetoediening te automatiseren en de tijd die u besteedt aan het beheren van uw diabetes te verminderen. 

 !!! important "Belangrijk"
    _Trio is een DIY, open-source community project. Als zodanig moet de gebruiker zijn app bouwen en onderhouden met de ondersteuning van de Trio gemeenschap. Trio is niet beoordeeld door een toezichthoudende instantie en is voor gebruik op eigen risico._

### Trio Geschiedenis (Trio History)

Het project begon met Ivan Valkou's FreeAPS X implementatie van het OpenAPS algoritme voor iPhone en werd later geforkt en hernoemd tot iAPS. Sindsdien hebben veel ontwikkelaars substantieel werk bijgedragen, wat heeft geleid tot nieuwe functies en verbeteringen.

Er waren verschillende opvattingen over ontwikkeling, open source en peer review die leidden tot de scheiding van de iAPS repository en de geboorte van Trio als een aparte entiteit. Deze overgang markeert de nieuwe fase van het project, wat de evolutie en de dynamische aard van de collaboratieve ontwikkeling symboliseert.

Trio blijft een verscheidenheid aan frameworks van de DIY looping gemeenschap benutten en blijft aan de voorhoede van DIY diabetesbeheersoplossingen, constant evoluerend met waardevolle bijdragen van zijn gemeenschap.

### Kan ik Trio downloaden van de App Store?

Trio is niet beschikbaar om te downloaden van de App Store. Trio is een open-source, doe-het-zelf geautomatiseerde insulinetoedieningsapplicatie. Gemeenschapsleden die Trio willen gebruiken, moeten het zelf bouwen. 

Hoewel het bouwen van uw applicatie in eerste instantie ontmoedigend kan lijken, is informatie en ondersteuning overvloedig en beschikbaar om u te helpen op dit pad. Elke stap die nodig is om Trio te bouwen, kan worden gevonden binnen deze documentatie. Aanvullende ondersteuning kan worden gevonden op de Trio [Facebook](https://www.facebook.com/groups/diytrio) groep en [Discord](https://discord.com/invite/FnwFEFUwXE) groep. 

### Moet ik "tech-smart" zijn om Trio te bouwen?

Nee. U heeft geen ervaring nodig met code of computers om Trio te bouwen. Als u een computer of tablet en een iPhone bezit, heeft u al de vereiste ervaring. Daarnaast, lees de aanwijzingen langzaam en zorgvuldig. Alle informatie die u nodig heeft, staat in deze documenten.

Vaak doen de niet-tech mensen het beter dan de tech mensen bij het bouwen van Trio. Waarom? Omdat de niet-tech mensen de tijd nemen om langzaam te lezen en naar de screenshots in de aanwijzingen te kijken. De tech mensen schuimen vaak en missen stappen, wat dan leidt tot build errors die moeten worden teruggevolgd en opgelost.

### Hoe lang duurt het om Trio te bouwen?

Het antwoord op deze vraag is zeer gebruikersafhankelijk. Als u nieuw bent met bouwen en uzelf moet onderdompelen in de documentatie, dan een paar uur. Sommige gebruikers vinden het echter prettig om dit op te delen in kleinere, beter beheersbare stukken en voltooien de taak in 24 uur. Als u een herhaalde bouwer bent die bekend is met de documentatie, het bouw- en updateproces, dan 10 - 15 minuten. 
Er zijn momenteel twee opties voor bouwen:

* De [Browser Build](../install/build/browser/browser-build-overview.md) methode met gebruik van GitHub.
* De [Mac Build](../install/build/mac/overview.md) methode met gebruik van Xcode.

### Moet ik een Apple computer bezitten?

Nee, u hoeft geen Apple computer te bezitten. De 'Browser Build' methode kan worden voltooid op elke computer met toegang tot het internet en GitHub. Als u echter voor de 'Mac Build' methode kiest, hoeft u niet noodzakelijkerwijs een Apple computer te bezitten, maar u moet er minstens één lenen. 

### Hoe vaak moet ik toegang hebben tot de computer om Trio te onderhouden?

Wanneer u de 'Browser Build' methode gebruikt, moet u minimaal eenmaal per 90 dagen toegang hebben tot een browser om te updaten met de Browser. Dit is eenvoudig genoeg om de stappen op uw telefoon in slechts een paar minuten te doen. 

Wanneer u Build met Mac gebruikt: 1. Wanneer u voor het eerst bouwt. 2. Minimaal één keer per jaar daarna. Als u echter besluit een gratis Apple Developer account te gebruiken, moet u elke 7 dagen opnieuw bouwen. 

!!! important "Belangrijk"
    _Periodiek zullen ontwikkelaars updates voor Trio uitbrengen. Deze updates kunnen nieuwe functies of belangrijke veiligheidsupdates bevatten. Het wordt aanbevolen dat gebruikers hun Trio app updaten wanneer updates worden uitgebracht._

### Moet ik Trio opnieuw bouwen als ik van insulinepomp of CGM verander?

Nee. Trio stelt u in staat om binnen de app te wisselen tussen verschillende pompen en CGM configuraties. 

### Ik kom van een ander gesloten-loop systeem (closed-loop system). Worden mijn instellingen overgedragen?

Als u andere gesloten-loop oplossingen heeft gebruikt, is het essentieel om de verschillen te begrijpen tussen degene die u gewend bent en Trio. Voordat u de overgang maakt, raden we aan dat u de tijd neemt om door de documentatie te lezen om een basiskennis van Trio op te bouwen. Gedetailleerde informatie over de overgang van andere gesloten-loop systemen kan [hier](../configuration/transition-qa.md) worden gevonden.

Afhankelijk van welk systeem u overstapt, of het nu DIY of commercieel is, kunnen sommige instellingen direct worden overgedragen en andere niet. Voordat u met Trio begint, is het cruciaal dat gebruikers hun basaalstanden (basals), koolhydraatratio's (carb ratios) en insuline gevoeligheidsfactoren (insulin sensitivity factors) testen en verfijnen... Dat klopt... Neem een moment en lees dat nog eens... Voordat u met Trio begint, is het cruciaal dat gebruikers hun basaalstanden, koolhydraatratio's en insuline gevoeligheidsfactoren testen en verfijnen. 

Waarom? Trio is alleen zo goed als de informatie die u het geeft. Basaal, koolhydraatratio's en insuline gevoeligheidsfactoren vormen de basis voor alle berekeningen door de algoritmen van Trio. Als u Trio informatie van slechte kwaliteit heeft gegeven, zult u output van slechte kwaliteit zien. Dit zal zich waarschijnlijk manifesteren als onverwacht gedrag voor de alledaagse gebruiker en resulteren in een slechte gebruikerservaring.

!!! important "Belangrijk"
    _Voordat u met Trio begint, moeten gebruikers hun basaalstanden, koolhydraatratio's en insuline gevoeligheidsfactoren testen en verfijnen._

### Hoe zit het met andere pompen? Wanneer kan ik ze gebruiken met Trio?

Het kraken van pompen voor gebruik met de Trio app is een aanzienlijke onderneming. Tegelijkertijd houden ontwikkelaars constant pompen in de gaten die in Trio kunnen worden geïntegreerd. Uiteindelijk vereist het kraken en creëren van drivers voor deze pompen dat meerdere ontwikkelaars aanzienlijke hoeveelheden van hun tijd wijden. Realistisch gezien kan het meer dan 12 maanden duren voor nieuwe pompintegratie. Informatie over ondersteunde pompen kan worden gevonden onder [Compatibele Pompen (Compatible Pumps)](../install/build/requirements/devices/pump.md#compatible-pumps).

### Ik ga regelmatig naar plaatsen zonder telefoonservice of internetverbinding. Zal Trio werken zonder deze?

Ja. Trio vereist geen internet of mobiele dekking om te werken. Zolang de Trio gebruiker Bluetooth heeft ingeschakeld op de iPhone, blijven de CGM en insulinepomp werken in samenwerking met Trio. 

!!! warning
    _Als u een CGM bron heeft gekozen die internet vereist (d.w.z. Nightscout of Dexcom Share), moeten gebruikers een internetverbinding onderhouden. Als u een gebied betreedt zonder internet, verliest u uw CGM metingen en zal Trio stoppen met loopen._

### Kan ik iemand mijn Trio app laten volgen?

Er zijn meerdere opties beschikbaar voor iemand om uw loop gegevens te volgen.

**Nightscout**  
Nightscout is een open-source cloud applicatie die wordt gebruikt door mensen met diabetes en ouders van kinderen met diabetes om de gegevens van hun Continue Glucose Monitors in realtime te visualiseren, opslaan en delen. Eenmaal ingesteld, fungeert Nightscout als een centrale repository van bloedglucose en insulinedoserings-/behandelingsgegevens voor één persoon, waardoor u de CGM grafiek en behandelingsgegevens overal kunt bekijken met alleen een webbrowser verbonden met het internet.

Details van Trio's **integratie** met Nightscout kunnen [hier](../configuration/settings/services/nightscout.md) worden gevonden.  
Informatie over het **creëren** van uw Nightscout **site** kan [hier](https://nightscout.github.io/) worden gevonden.

**LoopFollow**  
LoopFollow is een open-source, doe-het-zelf iPhone app die de weergave-informatie en waarschuwingen van uw T1D combineert in een enkele, gebruiksvriendelijke interface. LoopFollow haalt gegevens op van uw Nightscout of Dexcom Share server. U kunt meer dan één app op een telefoon instellen als u meer dan één persoon met diabetes volgt. Informatie over het creëren van uw LoopFollow app kan [hier](https://www.loopandlearn.org/loop-follow/) worden gevonden.

!!! warning
    _Alle opties voor het volgen van uw Trio app zijn afhankelijk van een actieve internetverbinding. Als u of de persoon die u volgt de verbinding met het internet verliest, zal uw LoopFollow app stoppen met het ontvangen van gegevens._

## Algoritme FAQ's (Algorithm FAQs)

### Welk algoritme gebruikt Trio?

Trio is een open-source kunstmatige pancreassysteem gebaseerd op het OpenAPS (Oref0) algoritme. 

### Waar kan ik meer leren over het Oref algoritme?

De eerste plaats om te beginnen als u meer wilt leren over het onderliggende algoritme is de uitgebreide [OpenAPS documentatie](https://openaps.readthedocs.io/). OpenAPS is het onderliggende algoritme dat Trio implementeert, met kleine aanpassingen die voornamelijk betrekking hebben op de Dynamische instellingen (Dynamic settings).

### Waarom is het 'Aanbevolen Bolus Percentage (Recommended Bolus Percentage)' standaard 70%?

`Recommended Bolus Percentage` is een veiligheidsfunctie ingebouwd in Trio. Standaard berekent Trio eerst een "aanbevolen insuline" waarde bij bolussen voor koolhydraten, wat de totale dosering is. Die dosering wordt vermenigvuldigd met uw `Recommended Bolus Percentage` om uw voorgestelde insulinedosis weer te geven. Trio levert vervolgens de resterende insuline via Tijdelijke Basalen (Temp Basals) en/of SMBs naarmate de bloedsuiker stijgt.

`Recommended Bolus Percentage` is een instelling waarmee de gebruiker de hoeveelheid die aanvankelijk wordt toegediend kan wijzigen. Standaard (70) wordt 70% van de vereiste maaltijdbolus toegediend vóór de maaltijd. U kunt dit verhogen of verlagen om de insuline die vóór de maaltijd wordt toegediend te wijzigen.

### Wat is de impact van 'Max IOB' op de insulinedosering van Trio?

De maximale hoeveelheid insuline aan boord (insulin on board / i.e., in het lichaam). Inclusief insuline uit alle bronnen (basaal en bolus) automatisch toegediend door Trio. 

De standaardwaarde is nul, wat betekent dat Trio alleen tijdelijke basaalstanden kan instellen die lager zijn dan uw profielbasaalstand. Het kan geen tijdelijke basaalstanden instellen die uw profielbasaalstand overschrijden in gevallen van hoge bloedsuiker, en het kan geen super micro bolussen gebruiken om bloedsuiker te controleren.

U moet deze waarde verhogen om Trio te laten beginnen met het automatiseren van uw insulinetoediening. Als u nerveus bent, kunt u beginnen met deze waarde in te stellen op uw gemiddelde maaltijdbolus. Vervolgens kunt u de waarde in de loop van de tijd beginnen te verhogen. 

!!! tip
    _De standaardaanbeveling is "gemiddelde maaltijdbolus + 3 x max uurlijkse basaal" wanneer super micro bolussen worden gebruikt._

### Hoe beïnvloedt 'Max COB' het algoritme van Trio?

De maximale hoeveelheid koolhydraten waarvoor Trio mag bolussen of hoge tijdelijke doelen mag instellen. Deze veiligheidsfunctie beschermt tegen onjuiste koolhydraatinvoeren die tot hypoglykemie-episoden kunnen leiden.

### Wat is 'Autosens'? Hoe beïnvloeden 'Autosens Max' en 'Autosens Min' de besluitvorming van Trio?

Autosens stelt het systeem in staat om historische gegevens onderweg te analyseren en aanpassingen te maken als het herkent dat u gevoeliger of resistenter reageert op insuline dan gebruikelijk. Autosens zal dan tijdelijke aanpassingen maken aan de basaal, ISF en doelen die worden gebruikt voor het berekenen van tijdelijke basalen om BG dichter bij uw geconfigureerde doel te houden. 

`Autosens Max` en `Autosens Min` zijn de veiligheidslimieten die het algoritme oplegt aan Autosens. `Autosens Max` bepaalt de maximale ratio die autosens kan gebruiken voor zijn aanpassingen. Het verhogen van deze waarde stelt autosens in staat om insuline te verhogen via uw basaalprofiel (basal profile), ISF en doelbloedglucose (target blood glucose). Omgekeerd bepaalt `Autosens Min` de minimale ratio die autosens kan gebruiken voor aanpassingen. Het verlagen van deze waarde stelt autosens in staat om insuline te verminderen die wordt gegeven via uw basaalprofiel, ISF en doelbloedglucose.

Verschillende blogposts zijn door de jaren heen geschreven over Autosens, en links naar enkele kunnen hieronder worden gevonden: 

* Dana Lewis, [Autosensitivity](https://diyps.org/2016/12/02/autosensitivity-automatically-adjusting-insulin-sensitivity-factor-for-insulin-dosing-with-openaps/).
* Tim Street, [Understanding Autosens](https://www.diabettech.com/artificial-pancreas/understanding-autosens/).

### Wat zijn SMB's?

Super micro bolus, of SMB, is ontworpen om u redelijke hoeveelheden bolusinsuline vooraf te geven en verlaagde tijdelijke basaalstanden te gebruiken om de piek in insulinetiming veilig in balans te brengen. Waarom? De reden om SMB te gebruiken boven een hogere tijdelijke basaalstand is dat insuline eerder kan worden toegediend. Zo worden glucosepieken vermeden door insulinetoediening vooraf te laden. 

Verschillende blogposts zijn door de jaren heen geschreven over SMB's, en links naar enkele kunnen hieronder worden gevonden:

* Dana Lewis, [Introducing oref1 and super-microboluses](https://diyps.org/2017/04/30/introducing-oref1-and-super-microboluses-smb-and-what-it-means-compared-to-oref0-the-original-openaps-algorithm/)
* Tim Street, [Understanding SMB and oref1](https://diyps.org/2017/04/30/introducing-oref1-and-super-microboluses-smb-and-what-it-means-compared-to-oref0-the-original-openaps-algorithm/).

### Hoe beperkt 'Max SMB Basal Minutes' SMB's?

`Max SMB Basal Minutes` is een van de belangrijkste beperkingen voor hoeveel insuline een enkele SMB kan toedienen. De hoeveelheid insuline die een SMB kan toedienen is gerelateerd aan de hoeveelheid geplande basaalinsuline in uw "Basal Profile" instellingen.

Voorbeeld: Bill gebruikt Trio en heeft SMB's ingeschakeld in de instellingen. Bill's huidige basaalstand is 1 eenheid per uur. Bill heeft `Max SMB Basal minutes` ingesteld op de standaard van 30. Daarom kan een enkele SMB niet meer insuline toedienen dan zou worden toegediend door uw basaal in 30 minuten, d.w.z. 0,5 eenheden. 

### Wat is UAM?

UAM is een manier voor het algoritme om te herkennen dat er ofwel koolhydraatabsorptie is of een niet-verantwoorde toename in glucoseniveaus als gevolg van meer koolhydraten aan boord dan ingevoerd of als gevolg van hormonale variatie en vervolgens effectief te doseren.

Om de logica achter UAM te begrijpen, lees de blogpost van Tim Street [Understanding SMB and oref1](https://diyps.org/2017/04/30/introducing-oref1-and-super-microboluses-smb-and-what-it-means-compared-to-oref0-the-original-openaps-algorithm/).

### Hoe beperkt 'Max UAM SMB Basal Minutes' SMB's?

`Max UAM SMB Basal Minutes` beperkt de grootte van SMB's die Trio kan toedienen wanneer het een niet-aangekondigde maaltijd (unannounced meal / UAM) detecteert. De hoeveelheid insuline die een UAM SMB kan toedienen is gerelateerd aan de hoeveelheid geplande basaalinsuline in uw "Basal Profile" instellingen. U kunt deze instelling configureren om UAM meer of minder agressief te maken bij het corrigeren van maaltijdpieken.

Voorbeeld: Bill heeft SMB's en UAM ingeschakeld in de instellingen. Het algoritme heeft onverwachte koolhydraatabsorptie gedetecteerd en wil een SMB toedienen als reactie. Bill's huidige basaalstand is 1 eenheid per uur. Bill heeft `Max UAM SMB Basal minutes` ingesteld op de standaard van 30. Daarom kan een enkele SMB niet meer insuline toedienen dan zou worden toegediend door uw basaal in 30 minuten, d.w.z. 0,5 eenheden. 

### Ik heb SMB's ingeschakeld, maar elke keer dat ik een SMB ontvang, verlaagt Trio mijn basaal of zet deze op nul. Is dat normaal?

Ja. SMB's lenen effectief insuline van de toekomst om insulinetoediening vooraf te laden om te helpen glucosepieken te voorkomen. Lange, lage of nul tijdelijke basaalstanden worden verwacht te worden waargenomen met geactiveerde SMB's. Dit stelt het algoritme in staat om de piek in insulinetiming in balans te brengen en hypoglykemie secundair aan de verhoogde insuline aan boord te voorkomen. 

### Hoe maak ik SMB's responsiever?

SMB's worden beperkt door uw Max `Max SMB Basal Minutes` en `Max UAM SMB Basal Minutes`. De standaard voor beide instellingen is 30 minuten. Deze standaard is conservatief voor de meeste gebruikers, en het wordt voorgesteld dat deze waarde geleidelijk wordt verhoogd terwijl het effect wordt gemonitord. Het verhogen van deze waarde zal grotere SMB's toestaan, waardoor de dosering sterker wordt. U moet beslissen hoeveel u uw SMB's wilt beperken (of niet beperken).

### Waarom loopt Trio niet wanneer de CGM glucose 40 mg/dL (2,2 mmol/L) of lager is?

Trio kan de glucosewaarde niet bepalen wanneer deze onder 40mg/dL (2,2 mmol/L) is. Dit is waarom de CGM apps van Dexcom en Libre "Low" weergeven. Een "Low" meting is ook soms te wijten aan een sensorfout of een defecte sensor die vervanging nodig heeft. Trio kan niet veilig een glucosevoorspelling maken zonder de glucosewaarde te kennen of of deze stijgt of daalt.

### Waarom loopt Trio niet of dient het geen insuline toe wanneer de CGM glucose 400 mg/dL (22,2 mmol/L) of hoger is?

Trio kan de glucosewaarde niet bepalen wanneer deze boven 400mg/dL (22,2 mmol/L) is. Dit is waarom de CGM apps van Dexcom en Libre "High" weergeven. Een "High" meting is ook soms te wijten aan een sensorfout of een defecte sensor die vervanging nodig heeft. Trio kan niet veilig een glucosevoorspelling maken zonder de glucosewaarde te kennen of of deze stijgt of daalt.  

## Omnipod FAQ's

### Welke Pods werken met Trio?

U kunt DASH en Eros Omnipod Pods gebruiken met de Loop app. U kunt geen Omnipod 5 Pods gebruiken. 

### Heb ik nog steeds een PDM nodig met Trio?

U heeft de Omnipod Personal Diabetes Manager (PDM) niet nodig; u heeft de Pod benodigdheden nodig. Ze koppelen met slechts één apparaat tegelijk. Dus een Pod is ofwel gekoppeld met een PDM of uw Trio app op uw iPhone. 

Met andere woorden, uw PDM kan in de diabeteskast blijven terwijl u Loopt. U kunt de PDM niet gebruiken voor een Pod die is geactiveerd met de Trio app. Dat betekent niet dat u uw PDM moet weggooien als u er een heeft. Bewaar deze in plaats daarvan voor noodsituaties als u uw telefoon verliest. 

### Veroorzaakt Trio een toename in Pod storingen (Pod failures)?

Er is meer communicatie tussen uw telefoon en de Pod dan de PDM, wat de belasting op de Pod batterij verhoogt. De meeste mensen hebben geen toename in Pod storingen. Het gebeurt echter af en toe. Hieronder staan enkele tips om **batterijontlading te beperken:**

* De Pod status wordt elke 3 minuten bijgewerkt voor DASH en elke 5 minuten voor Eros. Als onzekere communicatie wordt gedetecteerd, zodanig dat Trio niet kan bepalen of een doseringscommando dat naar de Pod is verzonden werd ontvangen, zal de app één keer per minuut proberen een reactie te krijgen.
* Als u Eros Pods gebruikt met een RileyLink apparaat. Wees bedacht op situaties die kunnen leiden tot een slecht signaal. Slechte communicatie tussen apparaten kan leiden tot batterijontlading en bijdragen aan storingen.


## CGM FAQ's

### Welke CGM's worden ondersteund door Trio?

De volgende CGM kan worden gebruikt met Trio:

* Dexcom G5
* Dexcom G6 / ONE
* Dexcom G7 / ONE+
* Medtronic Enlite (moet compatibele pomp gebruiken)
* Libre (beperkte Modellen)
    * US Libre 1 10-daagse sensoren via Transmitters
    * US Libre 1 14-daagse sensoren via Transmitters
    * Internationale Libre 1 sensoren via Transmitters
    * Europese Libre 2 / 2 Plus sensoren via Transmitters
    * Europese Libre 2 / 2 Plus sensoren direct via Bluetooth

### Welke CGM apps kunnen worden gebruikt met Trio?

**xDrip**  
Om xDrip4iOS te gebruiken als een CGM bron, moet u het zelf bouwen met hetzelfde Apple Developer account dat u heeft gebruikt om uw Trio app te bouwen. Zie het volgende voor instructies over hoe u xDrip4iOS zelf bouwt [hier](../install/ecosystem/xdrip4ios.md).  

!!! tip
    _Als u xDrip gebruikt met de Dexcom G6/ONE, selecteer in Trio 'Dexcom G6' als de CGM bron. Trio zal glucosemetingen direct van de transmitter onderscheppen._
    
**Nightscout**  
Ja. Nightscout kan worden gebruikt als een externe CGM bron (remote CGM source) in Trio. Deze optie moet echter worden vermeden omdat het Trio niet op de achtergrond laat draaien zoals andere CGM opties. U zult Trio handmatig moeten openen om het loopcycli te laten uitvoeren.  

!!! note "Credit"
     
    Veel van de informatie in deze FAQ is aangepast van Trio Docs, Loop Docs en OpenAPS Docs, en ik wil hun bijdrage aan het succes van deze pagina erkennen.

