# Insuline Gevoeligheidsfactor (Insulin Sensitivity Factor / ISF)

!!! tip "Hoogtepunten"

    - ISF (Insulin Sensitivity Factor) bepaalt hoeveel één eenheid insuline uw glucose verlaagt
    - Het is de meest voorkomende instelling die aanpassing nodig heeft voor nieuwe Trio gebruikers
    - Een lager ISF nummer betekent dat u meer resistent bent voor insuline (meer insuline nodig)
    - Een hoger ISF nummer betekent dat u meer gevoelig bent voor insuline (minder insuline nodig)
    - ISF kan variëren gedurende de dag en wordt ingesteld als een tijdgebaseerd schema

## Wat Is ISF?

Insuline Gevoeligheidsfactor (ISF - Insulin Sensitivity Factor), ook wel Insuline Correctiefactor (ICF - Insulin Correction Factor) genoemd, is de hoeveelheid waarmee uw bloedglucose daalt wanneer u één eenheid insuline ontvangt. Het wordt uitgedrukt als:

- **mg/dL per eenheid (mg/dL/E)** 
- **mmol/L per eenheid (mmol/L/E)**

Bijvoorbeeld, een ISF van 50 mg/dL/E betekent dat 1 eenheid insuline uw glucose met 50 mg/dL (2,8 mmol/L) zal verlagen.

### Voorbeeldberekening

??? question "Bill heeft een ISF van 50 mg/dL/E. Zijn huidige glucose is 250 mg/dL en zijn doel is 100 mg/dL. Hoeveel eenheden insuline heeft Bill nodig om zijn doel te bereiken?"

    ??? info "Hier is de formule:"

        $$
        \frac{Huidige\ Glucose - Doel\ Glucose}{ISF}
        $$

    ??? note "Bereken de Insulinedosis van Bill:"

        $$
        \frac{250 - 100}{50} = \frac{150}{50} = 3\ eenheden
        $$

    ??? success "Antwoord"
        Bill heeft 3 eenheden insuline nodig om zijn doelglucose van 100 mg/dL te bereiken.

- - -

## Waarom ISF Belangrijk Is

ISF is een van de meest kritieke instellingen in Trio omdat het het volgende bepaalt:

1. **SMB en Tijdelijke Basaal (Temp Basal) Toediening**: Hoeveel insuline nodig is om hoge glucose terug naar het doel te brengen of glucose op het doel te houden
2. **Algoritme Berekeningen**: Trio gebruikt ISF elke loopcyclus om de optimale insulinetoediening te berekenen
3. **Glucose Voorspellingen (Glucose Predictions)**: ISF beïnvloedt hoe Trio toekomstige glucoseniveaus voorspelt

!!! warning "Veelvoorkomend Probleem voor Nieuwe Gebruikers"
    Onjuiste ISF is de #1 oorzaak van problemen bij het starten met Trio. Als u het volgende ervaart:

    - Frequente lage waarden na correcties
    - Achtbaanpatronen (rollercoaster patterns) in glucose
    - Te veel of te weinig insuline van SMB/UAM

    Dan heeft uw ISF waarschijnlijk aanpassing nodig.

- - -

## Hoe Trio ISF Gebruikt

Net als basaalstanden gebruikt Trio uw ISF **niet** letterlijk. In plaats daarvan wordt uw geplande ISF dynamisch aangepast op basis van:

### 1. Autosens Aanpassingen

Wanneer Autosens is ingeschakeld (wat standaard het geval is), analyseert Trio 8-24 uur aan glucosegegevens om een Gevoeligheidsratio (Sensitivity Ratio) te berekenen. Deze ratio past uw ISF aan:

- **Gevoeligheidsratio > 1,0**: U bent meer insulineresistent → ISF wordt verlaagd (meer insuline)
- **Gevoeligheidsratio < 1,0**: U bent meer insulinegevoelig → ISF wordt verhoogd (minder insuline)
- **Limieten**: Standaardbereik is 70-120% (gecontroleerd door Autosens Min/Max instellingen)

**Voorbeeld**:

??? question "Bill heeft een ISF van 50 mg/dL/E. Autosens detecteert resistentie en heeft zijn gevoeligheidsratio ingesteld op 1,15 (115%). Wat wordt de nieuwe ISF van Bill?"

    ??? info "Hier is de formule:"

        $$
        \frac{Huidige\ ISF}{Autosens\ Ratio}
        $$

    ??? note "Bereken de nieuwe ISF van Bill:"

        $$
        \frac{50}{1,15} = 43,5 mg/dL/E
        $$

    ??? success "Antwoord"
        De ISF van Bill wordt aangepast van 50 mg/dL/E naar 43,5 mg/dL/E.
        Bill heeft 15% meer insuline nodig.

### 2. Dynamische ISF (Dynamic ISF) (Optioneel)

Dynamische ISF (Dynamic ISF) is een agressievere manier om uw ISF aan te passen op basis van huidige glucose en/of historische insulinedosering:

- **Vereist**: 7 dagen TDD gegevens met 85% dekking (minimum 1.715 datapunten)
- **Typen**: Logaritmisch (Logarithmic - standaard) of Sigmoïde (Sigmoid)
- **Output**: Dynamische Ratio (Dynamic Ratio) die de Autosens Ratio vervangt elke loopcyclus
- **Tijdelijk**: De aanpassing verandert elke loopcyclus; het is geen permanente ISF verandering

!!! info
    Er zijn 2 algoritmen beschikbaar voor Dynamische ISF. Logaritmische Dynamische ISF past uw ISF aan op basis van huidige glucoseniveaus en Totale Dagelijkse Dosis (TDD - Total Daily Dose). Sigmoïde Dynamische ISF past uw profiel ISF aan op basis van hoe ver van uw doelglucose u zich momenteel bevindt.

**Belangrijkste Parameters**:

- **Aanpassingsfactor (Adjustment Factor)**: 
    - **Sigmoid**: Aanpassingsfactor controleert hoe agressief ISF verandert. Leer meer over hoe veranderingen in Sigmoid Adjustment Factor ISF aanpassingen beïnvloedt [hier](../features/dynamic-isf.md#adjustment-factor_1). De standaard voor Sigmoid Adjustment Factor is 50%.
    - **Logarithmic**: Controleert welke ISF wordt gebruikt bij welke glucose. Deze moet handmatig worden ingesteld op ongeveer $0,02 \times TDD$. Leer meer over hoe veranderen van Adjustment Factor de Logaritmische dynamische ISF beïnvloedt [hier](../features/dynamic-isf.md#adjustment-factor).
- **Autosens Maximum**: Controleert de bovengrens van de autosens ratio (standaard: 120%)
- **Autosens Minimum**: Controleert de ondergrens van de autosens ratio (standaard: 70%)
- **Gewogen Gemiddelde van TDD (Weighted Average of TDD)**: Mengt recent (24u) en historisch (10-dagen) insulinegebruik (standaard: 35%)

Dynamische ISF is ontworpen om uw ISF agressiever (lager) te maken wanneer glucose hoog is en minder agressief (hoger) wanneer glucose nabij het doel is.

- - -

## Tijdgebaseerde ISF Schema's (Time-Based ISF Schedules)

Uw insulinegevoeligheid varieert gedurende de dag vanwege hormonen, activiteit en circadiane ritmes. Trio ondersteunt tijdgebaseerde ISF schema's (time-based ISF schedules):

- Tijdvakken in stappen van 30 minuten
- Maximum van 48 invoeren (24 uur dekkend)
- Eerste invoer moet beginnen om 00:00 (middernacht)
- Elke ISF geldt vanaf de starttijd tot de volgende invoer

**Voorbeeld ISF Schema:**

| Tijd | ISF (mg/dL/E) | Waarom Het Kan Variëren |
|------|---------------|-------------------|
| 00:00 | 60 | Nachtelijke basislijn |
| 03:00 | 45 | Dageraadverschijnsel (meer resistent) |
| 09:00 | 55 | Ochtendgevoeligheid neemt toe |
| 17:00 | 50 | Avonddaling |

- - -

## ISF Waardebereiken

- **Minimum**: 9 mg/dL/E (0,5 mmol/L/E)
- **Maximum**: 540 mg/dL/E (30 mmol/L/E)
- **Standaard**: 200 mg/dL/E (11,1 mmol/L/E)
- **Stap**: 1 mg/dL/E (0,1 mmol/L/E)

!!! info "Eenheden"
    Trio slaat ISF intern op in mg/dL maar toont het op basis van uw glucoseeenheidsvoorkeur. Conversies zijn automatisch.

- - -

## Testen en Aanpassen van Uw ISF

### Startpunt

Als u komt van pomptherapie, kunt u de ISF van uw pomp als startpunt overnemen. Wees echter voorbereid om deze aan te passen op basis van het gedrag van Trio.

### Testmethode

Om te testen of uw ISF nauwkeurig is:

1. **Kies een testtijd**: Wanneer u "vastzit" boven het doel (rond 150 mg/dL of 8,3 mmol/L) of door uzelf naar een hogere glucose te brengen met glucosetabletten
2. **Bereid Trio voor op testen**: Stel Max IOB in op 0 (*Optioneel*: Stel Autosens Max en Min in op 100% om Autosens aanpassingen te vermijden)
3. **Geef een correctiebolus** op basis van uw huidige ISF
    - Om uw testdosis te bepalen, volg de formule $\frac{Huidige\ Glucose - Doel\ Glucose}{ISF}$
4. **Wacht 4 uur** zonder te eten of te bewegen
5. **Evalueer het resultaat**:
    - **Nog steeds boven doel na 4 uur**: ISF is te hoog (te conservatief) → VERLAAG de ISF waarde
    - **Onder doel na 4 uur**: ISF is te laag (te agressief) → VERHOOG de ISF waarde
    - **Op doel na 4 uur**: ISF is nauwkeurig
6. **Zet Max IOB terug naar uw vorige instelling** nadat u de test hebt voltooid

!!! tip "ISF Aanpassingen Begrijpen"
    - **Lager ISF nummer** = Meer insuline per eenheid glucosecorrectie = Agressiever
    - **Hoger ISF nummer** = Minder insuline per eenheid glucosecorrectie = Conservatiever

    Dit kan in het begin contra-intuïtief zijn!

- - -

## Relatie met Andere Instellingen

ISF interacteert met veel Trio instellingen:

### Autosens Integratie

- **Autosens Min/Max**: Beperkt hoeveel Autosens uw ISF kan aanpassen (standaard: 70-120%)
- **Gevoeligheidsratio (Sensitivity Ratio)**: Toegepast op ISF en basaalstanden tegelijkertijd

### Dynamische ISF Integratie

- **Vervangt Autosens**: Wanneer Dynamische ISF is ingeschakeld, berekent het een Dynamische Ratio in plaats van de Autosens Ratio te gebruiken
- **Begrensd door Autosens Limieten**: Dynamische Ratio wordt nog steeds beperkt door Autosens Min/Max instellingen
- **Beïnvloedt Basaal** (optioneel): Wanneer "Basaal Aanpassen (Adjust Basal)" is ingeschakeld, wijzigt de Dynamische Ratio ook de basislijn basaalstand
- **Leer hoe uw Profiel ISF wordt gebruikt in Dynamische ISF door de pagina over [Gebruik van Dynamische ISF](../features/dynamic-isf.md) te bekijken

### [Tijdelijk Doel Gedrag (Temp Target Behavior)](../features/temp-targets.md) (wanneer ingeschakeld)

- **Hoge Tijdelijke Doelen (High Temp Targets)** (>100 mg/dL): Verhoogt effectieve ISF (minder agressieve insulinetoediening)
- **Lage Tijdelijke Doelen (Low Temp Targets)** (<100 mg/dL): Verlaagt effectieve ISF (agressievere insulinetoediening)
- **Half Basaal Oefendoel (Half Basal Exercise Target)**: Standaard 160 mg/dL; beïnvloedt ISF schaling tijdens oefendoelen
- Temp Target Behavior instellingen vervangen de Autosens of Dynamische Ratio berekeningen wanneer ingeschakeld.

### Gevoeligheid Doelgedrag (Sensitivity Target Behavior)

- Past doelglucose aan op basis van de Gevoeligheidsratio berekend door het algoritme
- `Sensitivity Raises Target` verhoogt uw doelglucose wanneer Gevoeligheidsratio wordt berekend als minder dan 100%.
- `Resistance Lowers Target` verlaagt uw doelglucose wanneer Gevoeligheidsratio wordt berekend als meer dan 100%.

### Boluscalculator (Bolus Calculator)

ISF wordt gebruikt in de boluscalculator formule:

$$
Totale\ Insuline = \frac{Huidige\ BG - Doel\ BG}{ISF} + \frac{Koolhydraten}{CR} + Trend\ Correctie - IOB
$$

### Koolhydraten aan Boord (COB - Carbs on Board) Berekeningen

ISF wordt gebruikt om te bepalen hoe snel koolhydraten worden geabsorbeerd in uw lichaam en hoe snel Trio het COB bedrag vermindert.

- ISF wordt gebruikt om uw Koolhydraat Gevoeligheidsfactor (CSF - Carb Sensitivity Factor) te bepalen
    - **Formule**: $CSF=\frac{Koolhydraat\ Ratio}{\mathit{IS}\mathit{F}}$
    - CSF toont hoeveel 1g koolhydraat uw glucose zal verhogen
- Koolhydraat Gevoeligheidsfactor wordt gebruikt om te bepalen hoeveel koolhydraten zijn geabsorbeerd tijdens die loopcyclus
    - **Formule**: $Toename\ in\ glucose \times CSF$
    - Uw COB zal met dit bedrag worden verminderd*

*Als er geen verandering wordt aangegeven in uw glucosemetingen, wordt uw `Min 5m Carb Impact` instelling gebruikt voor COB bepaling

## Veelvoorkomende ISF Fouten

### 1. ISF Te Laag (Te Agressief)

**Symptomen**:

- Frequente hypoglykemie na correcties
- Achtbaanpatronen (hoog → overcorrectie → laag → hoog)
- Overmatige SMB toediening resulterend in lage waarden

**Oplossing**: 

- [**Test uw ISF**](#testen-en-aanpassen-van-uw-isf)
- **Autosens of Sigmoid Dynamische ISF**: Verhoog uw profiel ISF waarde (maak het minder agressief)
- **Logaritmische Dynamische ISF**: Herevalueer uw Aanpassingsfactor en andere Dynamische instellingen met behulp van de [desmos grafieken](../../configuration/settings/algorithm/dynamic-settings.md/#logarithmic-desmos-graphs)

### 2. ISF Te Hoog (Te Conservatief)

**Symptomen**:

- Aanhoudende hoge glucose ondanks correcties
- Langzame terugkeer naar doel
- Onvoldoende SMB toediening

**Oplossing**: 

- [**Test uw ISF**](#testen-en-aanpassen-van-uw-isf)
- **Autosens of Sigmoid Dynamische ISF**: Verlaag uw profiel ISF waarde (maak het agressiever)
- **Logaritmische Dynamische ISF**: Herevalueer uw Aanpassingsfactor en andere Dynamische Instellingen met behulp van de [desmos grafieken](../../configuration/settings/algorithm/dynamic-settings.md/#logarithmic-desmos-graphs)

### 3. Tijdsvariaties Negeren

**Symptomen**:
- Goede controle op sommige tijdstippen van de dag, slecht op andere
- Dageraadverschijnsel niet adequaat aangepakt

**Oplossing**: Stel verschillende ISF waarden in voor verschillende tijdstippen van de dag op basis van behoefte

## Beste Praktijken

1. **Begin conservatief**: Begin met een hogere (minder agressieve) ISF en pas naar beneden aan indien nodig
2. **Maak kleine veranderingen**: Pas met 5-10% tegelijk aan
3. **Wacht tussen veranderingen**: Geef elke aanpassing 2-3 dagen om het volledige effect te zien
4. **Test systematisch**: Test één tijdsperiode tegelijk
5. **Overweeg patronen**: Zoek naar consistente trends over meerdere dagen, niet enkele gebeurtenissen
6. **Bewaak Autosens Ratio**: Kijken hoe uw Autosens Ratio verandert of niet verandert kan een probleem met uw Dynamische ISF instellingen aangeven
7. **Werk samen met uw zorgverlener**: Vooral bij het maken van significante veranderingen

## Samenvatting

ISF is een fundamentele instelling die bepaalt hoeveel insuline nodig is om hoge glucose te corrigeren. Het correct krijgen van uw ISF is cruciaal voor effectieve werking van Trio. Hoewel Trio uw ISF dynamisch aanpast door Autosens of Dynamische ISF, zorgt het hebben van nauwkeurige basislijn ISF waarden voor:

- Veilige en effectieve correcties
- Geschikte SMB toediening
- Soepele glucosecontrole zonder achtbanen
- Effectieve algoritme voorspellingen en beslissingen

Neem de tijd om uw ISF zorgvuldig te testen en te verfijnen. Het is een van de belangrijkste instellingen voor succesvolle geautomatiseerde insulinetoediening.

