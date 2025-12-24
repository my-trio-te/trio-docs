# Dynamische ISF Gebruiken (Using Dynamic ISF)

!!! important
    - De gebruikte afbeeldingen zijn hypothetische grafieken. Waar de lijnen en waarden daadwerkelijk vallen voor u is sterk afhankelijk van *uw* persoonlijke instellingen. De focus van deze illustraties is om te tonen wat verschuift in plaats van welke waarden zullen worden gebruikt voor uw specifieke instellingen.
    - De blauwe lijn in deze afbeeldingen toont welke ISF wordt gebruikt (Y-as) wanneer uw glucose op een bepaalde waarde is (X-As). Elk punt op de grafiek (X,Y) betekent bij een glucose van "X", wordt een ISF van "Y" gebruikt.
    - Het oranje gearceerde gebied is welke delen van die blauwe lijn Trio mag gebruiken. De onderste oranje lijn is de ISF bepaald door uw Autosens Maximum en de bovenste oranje lijn is de ISF bepaald door uw Autosens Minimum. Trio kan geen waarden gebruiken buiten het oranje gearceerde gebied.

## Logaritmische Dynamische ISF (Logarithmic Dynamic ISF)

Als u enige tijd heeft doorgebracht in de [Desmos Grafieken](../../configuration/settings/algorithm/dynamic-settings.md#logarithmic-desmos-graphs), heeft u misschien gemerkt dat bepaalde aanpassingen niet de impact hebben die u zou verwachten. Hieronder zijn er een paar die u zou moeten kennen:

### Profiel ISF (Profile ISF)

- Uw profiel ISF wordt niet direct gebruikt om uw ISF te bepalen wanneer Logaritmische Dynamische ISF is ingeschakeld. Het beïnvloedt de limieten van welke ISF is toegestaan.
- Het aanpassen van uw profiel ISF bij gebruik van Logaritmische Dynamische ISF zal geen directe impact hebben op uw sensitiviteitsberekeningen. Het zal alleen impact hebben op de Maximum en Minimum waarden toegestaan.

![ISF of 54](../../../../usage/img/isf_54.png){width="250"}
![ISF of 80](../../../../usage/img/isf_80.png){width="250"}
{align="center"}

!!! tip "Profiel ISF Tip"
    - Dit is waarom de Desmos grafieken van onschatbare waarde zijn wanneer aanpassingen nodig zijn met Logaritmische Dynamische ISF.

### Aanpassingsfactor (Adjustment Factor)

- Het veranderen van uw [Aanpassingsfactor (Adjustment Factor)](../../configuration/settings/algorithm/dynamic-settings.md#adjustment-factor-logarithmic) zal een enorme impact hebben op welke sensitiviteitsratio en dus welke ISF wordt gebruikt.
- Het wordt sterk geadviseerd om geplande wijzigingen aan Aanpassingsfactor in te voeren in de [Desmos Grafiek](../../configuration/settings/algorithm/dynamic-settings.md#logarithmic-desmos-graphs) voordat u het in uw instellingen wijzigt.

Merk op hoe de grafiek verschuift richting (0,0) om de veranderingssnelheid te verhogen naarmate Aanpassingsfactor toeneemt. Hoewel dit verhoogt hoe snel ISF aanpast, als Autosens Maximum en Autosens Minimum niet ook worden aangepast, kan het de onbedoelde consequentie hebben van altijd een veel te hoge of veel te lage ISF te gebruiken.

![AF of 40](../../../../usage/img/af_40.png){width="200"}
![AF of 80](../../../../usage/img/af_80.png){width="200"}
![AF of 180](../../../../usage/img/af_180.png){width="200"}
{align="center"}

### Overschrijvingen Gebruiken met Logaritmische Dynamische ISF (Using Overrides With Logarithmic Dynamic ISF)

Overschrijvingen (Overrides) veranderen uw profielinstellingen voordat ze worden verzonden naar het Oref algoritme voor aanpassing. Zoals hierboven vermeld, omdat Logaritmische Dynamische ISF uw profiel ISF niet gebruikt voor de sensitiviteitsberekening, zal het aanpassen van uw profiel ISF met behulp van een override geen significante impact hebben op uw doseringberekeningen. Om deze reden wordt geadviseerd om [Tijdelijke Doelen (Temp Targets)](temp-targets.md) te gebruiken in plaats van of in combinatie met Overschrijvingen bij gebruik van Logaritmische Dynamische ISF.

!!! question "Welk effect zal het gebruik van een >100% Override hebben op Logaritmische Dynamische ISF?"
    
    Als u begint met een Profiel ISF van 50 mg/dL/U en een override instelt van 150%, zal dit uw Profiel ISF veranderen naar 33 mg/dL/U.
    
    Merk op hoe de berekende ISF lijn niet verandert met deze aanpassing aan de Profiel ISF, alleen de limieten van welk gedeelte van de curve zijn toegestaan. Het verschuift de limieten om alleen de lagere ISF delen van de grafiek toe te staan, wat betekent dat het toegestane ISF bereik 27-47 mg/dL/U zal zijn en de aanpassingen stoppen bij 47 mg/dL/U als glucose onder 126 mg/dL meet.
    
    ![ISF of 50](../../../../usage/img/isf_50.png){width="250"}
    ![ISF of 33](../../../../usage/img/isf_33.png){width="250"}
    {align="center"}
    
!!! question "Welk effect zal het gebruik van een <100% Override hebben op Logaritmische Dynamische ISF?"
    
    Als u begint met een Profiel ISF van 50 mg/dL/U en een override instelt van 70%, zal dit uw Profiel ISF veranderen naar 71 mg/dL/U.
    
    Merk op hoe de berekende ISF lijn niet verandert met deze aanpassing aan de Profiel ISF, alleen de limieten van welk gedeelte van de curve zijn toegestaan. Het verschuift de limieten om alleen de hogere ISF delen van de grafiek toe te staan, wat betekent dat het toegestane ISF bereik 59-100 mg/dL/U zal zijn en de aanpassingen worden beperkt als glucose hoger dan 87 mg/dL meet.
    
    ![ISF of 50](../../../../usage/img/isf_50.png){width="250"}
    ![ISF of 71](../../../../usage/img/isf_71.png){width="250"}
    {align="center"}

### Tijdelijke Doelen Gebruiken met Logaritmische Dynamische ISF (Using Temp Targets With Logarithmic Dynamic ISF)

Wanneer u een Tijdelijk Doel (Temp Target) gebruikt EN [Doelgedrag (Target Behavior)](../../configuration/settings/algorithm/target-behavior.md) instellingen heeft ingeschakeld, zal dit Logaritmische Dynamische ISF uitschakelen en een [nieuwe formule](../../configuration/settings/algorithm/target-behavior.md#half-basal-exercise-target) gebruiken voor uw sensitiviteitsratio.

!!! tip "Tijdelijke Doelen Tips"
    - Het is vermeldenswaardig dat uw Autosens Maximum en Autosens Minimum nog steeds worden gerespecteerd wanneer dit wordt gebruikt.
    
    - Als het instellen van een Tijdelijk Doel uw Sensitiviteitsratio aanpast naar 60%, maar uw Autosens Minimum is 70%, zal het Autosens Minimum worden gebruikt.
    
### Zowel Overschrijvingen als Tijdelijke Doelen Gebruiken met Logaritmische Dynamische ISF (Using Both Overrides and Temp Targets with Logarithmic Dynamic ISF)

Ja, u kunt zowel een Override als een Tijdelijk Doel tegelijkertijd inschakelen. Wanneer u dat doet, zal Trio eerst uw profielinstellingen aanpassen op basis van de ingestelde Override, dan worden die profielinstellingen verzonden naar het Oref algoritme voor de Sensitiviteitsratio en benodigde insuline berekeningen. De [Doelgedrag (Target Behavior)](../../configuration/settings/algorithm/target-behavior.md) instellingen zullen de gebruikte Sensitiviteitsratio beïnvloeden zoals hierboven uitgelegd. Uw andere override-aangepaste profielinstellingen worden dan gebruikt om de volgende insuline dosering beslissing te bepalen.

### Invloed van Totale Dagelijkse Dosis op Logaritmische Dynamische ISF (Influence of Total Daily Dose on Logarithmic Dynamic ISF)

Het is niet ongehoord dat er gelegenheden zijn waarop uw dagelijkse insulinegebruik drastisch kan veranderen. Het kan significant toenemen als u een dosis steroïden nodig heeft of ziek wordt. Het kan significant afnemen als u een nieuw oefenregime start. Het is belangrijk om te weten hoe die veranderingen Trio's berekening in Logaritmische Dynamische ISF zullen beïnvloeden.

Gebruikmakend van een Totale Dagelijkse Dosis (TDD - Total Daily Dose) van 40 units als baseline, kunt u zien hoe dit de ISF berekeningen verandert wanneer TDD wordt gehalveerd (20 units) of verdubbeld (80 units).

![TDD Decrease](../../../../usage/img/tdd_20.png){width="200"}
![TDD Baseline](../../../../usage/img/tdd_40.png){width="200"}
![TDD Increase](../../../../usage/img/tdd_80.png){width="200"}
{align="center"}

!!! tip "TDD & Logaritmisch Tip"
    - U wilt misschien tijdelijk uw Autosens Minimum of Maximum aanpassen als u een significante verandering in uw TDD opmerkt.
    - Voordat u wijzigingen aanbrengt, vergeet niet ze te controleren in de [Desmos Grafiek](../../configuration/settings/algorithm/dynamic-settings.md#logarithmic-desmos-graphs) om ervoor te zorgen dat uw nieuwe insulinebehoeften worden vervuld.
- - -

## Sigmoïde Dynamische ISF (Sigmoid Dynamic ISF)

### Profiel ISF (Profile ISF)

Wanneer u wijzigingen aanbrengt aan uw Profiel ISF, ofwel als een profielinstelling wijziging of via een Override, zal het uw Sigmoïde Dynamische ISF curve verschuiven om ervoor te zorgen dat uw Profiel ISF altijd wordt gebruikt wanneer u op uw doel glucose bent.
    
![ISF Decrease](../../../../usage/img/sig_isf_50.png){width="200"}
![ISF Baseline](../../../../usage/img/sig_isf_70.png){width="200"}
![ISF Increase](../../../../usage/img/sig_isf_100.png){width="200"}
{align="center"}
    
Hoewel het ook kan verschuiven hoe steil de curve is, en dus hoe snel en in welke mate aanpassingen veranderen, moet het veranderen van uw ISF met voorzichtigheid worden gedaan en niet als een middel om de curve te veranderen. Eerder is het aanpassen van uw [Aanpassingsfactor (Adjustment Factor)](../../configuration/settings/algorithm/dynamic-settings.md#sigmoid-adjustment-factor) de voorkeursmethode om aan te passen hoe snel waarden aanpassen.

!!! tip "Profiel ISF Tips"
    - Als u uw ISF heeft getest bij een glucose van 150 mg/dL (8.3 mmol/L) of hoger, kunt u merken dat uw Profiel ISF te sterk is wanneer u Sigmoïde inschakelt, vooral als uw doel glucose 100 mg/dL (5.5 mmol/L) of lager is.
    
    - Om dit op te lossen, kunt u ofwel uw doel glucose verhogen naar 150 mg/dL (8.3 mmol/L) of uw Profiel ISF verhogen om het verschil te compenseren.

### Autosens Maximum

Het verhogen van uw Autosens Maximum heeft het verwachte effect van het verhogen van het percentage waarin ISF kan worden aangepast bij gebruik van Sigmoïde Dynamische ISF. Wat misschien niet zo verwacht is, is dat de steilheid van de curve ook verandert. Als u uw Autosens Maximum verhoogt met Sigmoïde, zult u zien dat de maximale sensitiviteitsratio toeneemt en ook de snelheid en hoeveelheid ISF veranderingen groter worden.

![Autosens Max Baseline](../../../../usage/img/sig_asmax_120.png){width="250"}
![Autosens Max Increase](../../../../usage/img/sig_asmax_180.png){width="250"}
{align="center"}

!!! tip "Autosens Maximum Tip"
    - Als u wilt voorkomen dat de steilheid van de curve toeneemt terwijl u uw Autosens Max verhoogt, verlaag uw Aanpassingsfactor om dit effect tegen te gaan.

### Autosens Minimum

Het verlagen van uw Autosens Minimum heeft het verwachte effect van het verlagen van het percentage waarin ISF kan worden aangepast bij gebruik van Sigmoïde Dynamische ISF. Op dezelfde manier als Autosens Maximum de steilheid van de curve zal veranderen, zal het aanpassen van Autosens Minimum hetzelfde effect hebben.

Merk op hoe Sigmoïde nog steeds vergrendeld is op uw Profiel ISF dat wordt gebruikt wanneer glucose op doel is? En merk op hoeveel lege ruimte er bovenaan het oranje gedeelte is in de 50% grafiek? Dit betekent dat het verlagen van uw Autosens Minimum mogelijk niet daadwerkelijk de aanpassingen verlaagt in de mate die u hoopt, maar het enige merkbare resultaat kan zijn dat de curve steiler wordt.

![Autosens Min Baseline](../../../../usage/img/sig_asmin_70.png){width="250"}
![Autosens Min Decrease](../../../../usage/img/sig_asmin_50.png){width="250"}
{align="center"}

!!! tip "Autosens Minimum Tips"
    - Controleer uw geplande aanpassing in de [Sigmoïde Desmos Grafiek](../../configuration/settings/algorithm/dynamic-settings.md#sigmoid-desmos-graphs) om ervoor te zorgen dat het het beoogde resultaat heeft.
    
    - Als u Autosens Min wilt verlagen vanwege lage waarden, kan het probleem liggen bij uw [Profiel ISF instelling](#profiel-isf-profile-isf_1).

### Aanpassingsfactor (Adjustment Factor)

Bij gebruik van Sigmoïde zal het verhogen van uw Aanpassingsfactor ertoe leiden dat uw sensitiviteitsratio sneller toeneemt en afneemt naarmate uw glucose stijgt en daalt.

U kunt in de onderstaande grafieken zien hoe de curve steiler wordt naarmate de Aanpassingsfactor toeneemt.

![Adjustment Factor Decrease](../../../../usage/img/sig_af_30.png){width="200"}
![Adjustment Factor Baseline](../../../../usage/img/sig_af_50.png){width="200"}
![Adjustment Factor Increase](../../../../usage/img/sig_af_80.png){width="200"}
{align="center"}

!!! tip "Sigmoïde Aanpassingsfactor Tips"
    - Als u Sigmoïde sneller wilt laten reageren, verhoog de Aanpassingsfactor.
    - Als u Sigmoïde langzamer wilt laten reageren, verlaag de Aanpassingsfactor.
    - Dit is een fijn afstemgereedschap, en moet alleen worden aangepast nadat uw kerninstellingen zijn vastgesteld als nauwkeurig.
    
### Doel Glucose (Target Glucose)

Het veranderen van uw Doel Glucose ofwel met een Override, Tijdelijk Doel, of profiel Doel wijziging, verschuift de Sigmoïde grafiek zodat uw Profiel ISF wordt gebruikt bij het nieuwe ingestelde Glucose Doel.

![Target Glucose Baseline](../../../../usage/img/sig_target_100.png){width="250"}
![Target Glucose Increase](../../../../usage/img/sig_target_150.png){width="250"}
{align="center"}

!!! tip "Doel Glucose Tip"
    - Wees u ervan bewust dat als u een drastische verandering aanbrengt in uw Profiel Doel Glucose tijdens gebruik van Sigmoïde, u kunt merken dat uw ISF plotseling te zwak of te sterk lijkt. Kijk een paar dagen toe om ervoor te zorgen dat u uw ISF niet hoeft te verhogen of verlagen om overeen te komen met het nieuwe Glucose Doel.

### Invloed van Totale Dagelijkse Dosis op Sigmoïde Dynamische ISF (Influence of Total Daily Dose on Sigmoid Dynamic ISF)

Het is niet ongehoord dat er gelegenheden zijn waarop uw dagelijkse insulinegebruik drastisch kan veranderen. Het kan significant toenemen als u een dosis steroïden nodig heeft of ziek wordt. Het kan significant afnemen als u een nieuw oefenregime start. Hoewel dit een grote impact heeft op Logaritmische Dynamische ISF, heeft het niet zoveel impact op Sigmoïde Dynamische ISF.

In de onderstaande grafieken kunt u zien hoe de grafiek verandert, maar niet veel naarmate de Totale Dagelijkse Dosis (TDD) van 50 units wordt gehalveerd naar 25 of verdubbeld naar 100 units. Het veroorzaakt dat de steilheid van de curve, dus de reactietijd dienovereenkomstig aanpast. Het vertraagt met een lagere TDD en versnelt met een hogere TDD.

![TDD Decrease](../../../../usage/img/sig_tdd_25.png){width="200"}
![TDD Baseline](../../../../usage/img/sig_tdd_50.png){width="200"}
![TDD Increase](../../../../usage/img/sig_tdd_100.png){width="200"}
{align="center"}

!!! tip "Sigmoïde & TDD Tip"
    - Hoogstwaarschijnlijk hoeft u geen aanpassingen aan Sigmoïde te maken als u een plotselinge toename of afname in TDD heeft.


