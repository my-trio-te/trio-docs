# Koolhydraatratio's (Carb Ratios / CR)

!!! tip "Hoogtepunten"

    - Koolhydraatratio (CR / Carb Ratio) vertelt u hoeveel gram koolhydraten één eenheid insuline dekt
    - In tegenstelling tot basaalstanden en ISF, wordt CR directer gebruikt door het algoritme van Trio
    - Een lager CR nummer betekent dat u meer insuline per gram koolhydraten nodig heeft (meer insulineresistent)
    - Een hoger CR nummer betekent dat u minder insuline per gram koolhydraten nodig heeft (meer insulinegevoelig)
    - CR kan variëren gedurende de dag en wordt ingesteld als een tijdgebaseerd schema

## Wat Is Koolhydraatratio (Carb Ratio)?

Koolhydraatratio (CR / Carb Ratio), ook geschreven als Insuline-naar-Koolhydraat Ratio (I:C of ICR / Insulin-to-Carb Ratio), is de hoeveelheid koolhydraten (in gram) die één eenheid snelwerkende insuline kan "dekken" of neutraliseren. Het wordt uitgedrukt als:

**gram per eenheid (g/E)**

Bijvoorbeeld, een CR van 10 g/E betekent dat 1 eenheid insuline 10 gram koolhydraten zal dekken.

### Voorbeeldberekening

??? question "Bill heeft een CR van 10 g/E. Als Bill een maaltijd eet met 50 gram koolhydraten, hoeveel insuline heeft Bill nodig?"

    ??? info "Hier is de formule:"

        $$
        \frac{gram\ koolhydraat\ gegeten}{Koolhydraat\ Ratio}
        $$

    ??? note "Bereken de Insulinedosis van Bill:"

        $$
        \frac{50}{10} = 5\ eenheden
        $$

    ??? success "Antwoord"
        Bill heeft 5 eenheden insuline nodig voor zijn maaltijd van 50g.

- - -

## Waarom Koolhydraatratio Belangrijk Is

CR is essentieel voor Trio omdat het het volgende bepaalt:

1. **Koolhydraten aan Boord (COB - Carbs on Board) Correcties**: Hoeveel insuline nodig is voor niet-geabsorbeerde koolhydraten die nog steeds uw glucose beïnvloeden
2. [**Boluscalculator (Bolus Calculator) Aanbevelingen**](#in-de-boluscalculator): Het koolhydraatdekkingscomponent van de totale benodigde insuline
3. **Automatische Bolusing**: Wanneer SMB (Super Micro Bolus) is ingeschakeld, beïnvloedt CR de insulinetoediening voor maaltijden
4. [**Koolhydraten aan Boord (COB) Berekeningen**](#cob-koolhydraten-aan-boord): Gecombineerd met uw huidige ISF wordt uw CR gebruikt om te berekenen hoeveel koolhydraten zijn geabsorbeerd en niet langer hoeven te worden meegenomen in correcties

!!! important "Direct Gebruik"
    In tegenstelling tot basaalstanden en ISF, die worden gewijzigd door Autosens of Dynamische ISF, wordt **koolhydraatratio direct gebruikt** door het algoritme van Trio.

- - -

## Hoe Trio Koolhydraatratio Gebruikt

### In de Boluscalculator (Bolus Calculator)

De boluscalculator (bolus calculator) van Trio gebruikt uw CR als onderdeel van de totale insulinedosisberekening:

$$
Totale\ Insuline = \frac{Huidige\ BG - Doel}{ISF} + \frac{Koolhydraten}{CR} + Trend - IOB
$$

Het koolhydraatdekkingsgedeelte gebruikt specifiek:

$$
Koolhydraat\ Insuline = \frac{Koolhydraten\ Ingevoerd + Huidige\ COB}{Koolhydraat\ Ratio}
$$

Waarbij:

- **Koolhydraten Ingevoerd**: Nieuwe koolhydraten die u toevoegt in het behandelscherm
- **Huidige COB**: Koolhydraten aan boord van eerdere maaltijden die nog worden geabsorbeerd
- **Max COB Limiet**: Standaard 120g; voorkomt overmatige insuline wanneer koolhydraten nog niet zijn verteerd.

- - -

## Tijdgebaseerde CR Schema's (Time-Based CR Schedules)

Uw koolhydraatgevoeligheid kan variëren gedurende de dag vanwege hormonen, activiteitsniveaus en circadiane ritmes. Trio ondersteunt tijdgebaseerde CR schema's (time-based CR schedules):

- Tijdvakken in stappen van 30 minuten
- Maximum van 48 invoeren (24 uur dekkend)
- Eerste invoer moet beginnen om 00:00 (middernacht)
- Elke CR geldt vanaf de starttijd tot de volgende invoer

**Voorbeeld CR Schema:**

| Tijd | CR (g/E) | Waarom Het Kan Variëren |
|------|----------|-------------------|
| 00:00 | 12 | 's Nachts - meer gevoelig |
| 06:00 | 8 | Ochtend - dageraadverschijnsel, meer resistent |
| 12:00 | 10 | Middag basislijn |
| 18:00 | 9 | Avond - iets meer resistent |

- - -

## CR Waardebereiken

- **Minimum**: 1,0 g/E
- **Maximum**: 50,0 g/E
- **Standaard**: 30,0 g/E
- **Stap**: 0,1 g/E

De beschikbare waarden variëren van 1,0 tot 50,0 in stappen van 0,1, wat u fijnmazige controle geeft over uw koolhydraatratio's.

- - -

## Testen en Aanpassen van Uw CR

### Startpunt

Als u komt van pomptherapie, kunt u de CR van uw pomp als startpunt overnemen. Verifieer echter de nauwkeurigheid door te testen, vooral als u het volgende ervaart:

- Hoge glucosepieken na maaltijden
- Lage waarden 3-4 uur na maaltijden
- Scherpe dalingen na koolhydraten wanneer SMB is ingeschakeld (kan ook duiden op ISF problemen)

### Testmethode: Maaltijdexperiment

De standaardmanier om uw CR te testen is een gecontroleerd maaltijdexperiment:

1. **Kies testomstandigheden**:
    - Begin met glucose binnen bereik (nabij doel)
    - Nul of minimale IOB
    - Nul of minimale COB van eerdere maaltijden
    - Geen recente lichaamsbeweging
    - Gebruik een maaltijd met bekende, nauwkeurig getelde koolhydraten

2. **Voer de maaltijdbolus uit**:
    - Bereken insuline: $\frac{Koolhydraten}{Huidige\ CR}$
    - Dien de volledige bolus handmatig toe

3. **Bewaak gedurende 3-4 uur**:
    - Vermijd extra voedsel of correcties tijdens deze tijd
    - Volg uw glucosepatroon

4. **Evalueer het resultaat**:
    - **Keer terug naar startglucose**: CR is nauwkeurig
    - **Eindigt hoog**: CR is te hoog (te conservatief) → VERLAAG de CR waarde
    - **Eindigt laag**: CR is te laag (te agressief) → VERHOOG de CR waarde

!!! tip "CR Aanpassingen Begrijpen"
    - **Lager CR nummer** = Meer insuline per gram koolhydraten = Agressiever
    - **Hoger CR nummer** = Minder insuline per gram koolhydraten = Conservatiever

    Voorbeeld: Veranderen van CR 10 naar CR 8 betekent dat u MEER insuline krijgt voor dezelfde koolhydraten.

- - -

## Veelvoorkomende CR Fouten

### 1. CR Te Laag (Te Agressief)

**Symptomen**:
- Post-maaltijd glucose daalt te snel
- Hypoglykemie 2-3 uur na maaltijden
- Noodzaak om snacks te eten om lage waarden na normale maaltijden te voorkomen

**Oplossing**: Verhoog uw CR waarde (maak het minder agressief)

### 2. CR Te Hoog (Te Conservatief)

**Symptomen**:
- Aanhoudende hoge glucose na maaltijden
- Grote glucosepieken die uren duren om te dalen
- Behoefte aan frequente correcties na het eten

**Oplossing**: Verlaag uw CR waarde (maak het agressiever)

### 3. CR Verwarren met ISF Problemen

**Belangrijk**: Hoge post-maaltijd glucose kan worden veroorzaakt door onjuiste CR, onjuiste ISF, of een combinatie van beide:

- **CR probleem**: Beïnvloedt de initiële maaltijdbolus en SMB's wanneer COB > 0
- **ISF probleem**: Beïnvloedt correcties en SMB zodra COB = 0

Als u niet zeker weet welke instelling aanpassing nodig heeft:

- Test CR met gecontroleerde maaltijdexperimenten (zoals hierboven beschreven)
- Test ISF met correctiebolussen tijdens vasten (geen COB)

### 4. Niet Rekening Houden met Maaltijdsamenstelling

Uw werkelijke koolhydraatdekkingsbehoeften kunnen variëren op basis van:

- **Vetgehalte**: Maaltijden met veel vet hebben mogelijk minder insuline vooraf nodig ([Verminderde Bolus Optie](../../configuration/settings/features/bolus-calculator.md#enable-reduced-bolus-option))
- **Eiwitgehalte**: Grote hoeveelheden eiwit kunnen extra dekking vereisen
- **Glycemische index**: Snelabsorberende koolhydraten vs. traagabsorberende koolhydraten
    - Snelabsorberend: Gebruik de [Super Bolus Optie](../../configuration/settings/features/bolus-calculator.md#enable-super-bolus-option)
    - Traagabsorberend: Gebruik de [Verminderde Bolus Optie](../../configuration/settings/features/bolus-calculator.md#enable-reduced-bolus-option)

Deze factoren beïnvloeden maaltijdtiming en absorptie, niet noodzakelijkerwijs uw CR zelf.

- - -

## Relatie met Andere Instellingen

### COB (Carbs on Board - Koolhydraten aan Boord)

- CR wordt gebruikt om te berekenen hoeveel insuline nodig is voor niet-geabsorbeerde koolhydraten
    - **Formule**: $\frac{(Huidige\ COB + Nieuwe\ Koolhydraten)}{Koolhydraat\ Ratio}$
    - Max COB instelling (standaard: 120g) voorkomt overmatige insuline door koolhydraatstapeling

- CR wordt gebruikt om uw Koolhydraat Gevoeligheidsfactor (CSF - Carb Sensitivity Factor) te bepalen
    - **Formule**: $CSF=\frac{Koolhydraat\ Ratio}{\mathit{IS}\mathit{F}}$
    - CSF toont hoeveel 1g koolhydraat uw glucose zal verhogen

- Koolhydraat Gevoeligheidsfactor, afgeleid van CR, wordt gebruikt om te bepalen hoeveel koolhydraten zijn geabsorbeerd tijdens die loopcyclus
    - **Formule**: $Toename\ in\ glucose \times CSF$
    - Uw COB zal met dit bedrag worden verminderd*

*Als er geen verandering wordt aangegeven in uw glucosemetingen, wordt uw `Min 5m Koolhydraat Impact` instelling gebruikt voor COB bepaling
   
- - -

## Beste Praktijken

1. **Begin conservatief**: Begin met een hogere (minder agressieve) CR en pas naar beneden aan indien nodig
2. **Maak kleine veranderingen**: Pas met 1-2 g/E tegelijk aan
3. **Test één maaltijd tegelijk**: Verander niet meerdere CR invoeren tegelijkertijd
4. **Wacht tussen veranderingen**: Geef elke aanpassing meerdere dagen en meerdere maaltijden om te evalueren
5. **Volg Koolhydraten tijdens testen**: Volg maaltijden, koolhydraattellingen, bolussen en resultaten
6. **Houd rekening met nauwkeurigheid**: Nauwkeurigheid van koolhydraattelling is belangrijk bij het testen van CR

- - -

## CR vs. ISF: Belangrijkste Verschillen

Het begrijpen van het verschil tussen deze twee instellingen helpt u de juiste aan te passen:

| Aspect | Koolhydraatratio (CR) | Insuline Gevoeligheidsfactor (ISF) |
|--------|----------------|----------------------------------|
| **Wat het meet** | Koolhydraten gedekt per eenheid | Glucosedaling per eenheid |
| **Gebruikt voor** | Maaltijddekking | Correcties |
| **Eenheden** | gram/eenheid | mg/dL/eenheid of mmol/L/eenheid |
| **Wanneer te testen** | Tijdens gecontroleerde maaltijden | Tijdens vasten/correcties |
| **Symptomen als te agressief** | Post-maaltijd lage waarden | Correctie lage waarden, achtbaanpatronen |
| **Symptomen als te conservatief** | Post-maaltijd hoge waarden | Aanhoudende hoge waarden ondanks correcties |

- - -

## Samenvatting

Koolhydraatratio bepaalt hoeveel insuline u nodig heeft om de koolhydraten die u eet te dekken. Het correct krijgen van uw CR is essentieel voor:

- Nauwkeurige maaltijdbolusberekeningen
- Geschikte COB correcties
- Nauwkeurige COB bepalingen
- Effectieve SMB toediening voor maaltijden
- Algemene glucosecontrole na het eten

!!! note "Werk Samen met Uw Zorgverlener"
    Raadpleeg altijd uw diabetes zorgteam wanneer u significante wijzigingen aanbrengt in uw CR of wanneer u onzeker bent over aanpassingen. Zij kunnen gepersonaliseerde begeleiding bieden op basis van uw volledige medische geschiedenis.

