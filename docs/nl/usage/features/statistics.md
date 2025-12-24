# Statistieken (Statistics)

Trio's Statistieken functie biedt uitgebreide data-analyse en visualisatie van uw diabetes management statistieken. Bekijk gedetailleerde glucosepatronen, insulinegebruik, loop prestaties en maaltijdgegevens over meerdere tijdsperioden.

![Trio Statistieken Scherm](../../../../usage/img/statistics.png){width="300"}
{align="center"}

- - -

## Toegang tot Statistieken (Accessing Statistics)

<div class="grid cards" markdown>

-   Om statistieken te bekijken:
    1. Open Trio
    2. Navigeer naar het Statistieken (Statistics) scherm (icoon in het navigatiemenu)
    3. Selecteer een categorie tab (Glucose, Insuline, Looping, of Maaltijden)
    4. Kies uw voorkeur grafiektype en tijdsperiode
    
-   ![Toegang Trio Statistieken](../../../../usage/img/access_statistics.png){width="400"}
    {align="center"}
    
</div>

- - -

## Datatypes (Data Types)

Het Statistieken scherm is georganiseerd in vier hoofdcategorieën, elk toegankelijk via tabs bovenaan:

![Trio Statistieken Categorieën](../../../../usage/img/statistics_categories.png){width="400"}
{align="center"}

- **Glucose** - CGM & bloedsuiker statistieken, tijd-in-bereik, en glucosedistributie
- **Insuline (Insulin)** - Totale dagelijkse dosis en bolusdistributie
- **Looping** - Loop cyclus prestaties en betrouwbaarheidsstatistieken
- **Maaltijden (Meals)** - Macronutriënten tracking en maaltijdanalyse

Elke categorie biedt meerdere grafiektypen en tijdsperiode opties om u te helpen patronen te begrijpen en geïnformeerde aanpassingen aan uw therapie-instellingen te maken.

## Glucose Statistieken (Glucose Statistics)

### Beschikbare Statistieken (Available Metrics)

De Glucose sectie toont zeven belangrijke statistieken:

| Statistiek | Beschrijving | Formule |
|--------|-------------|---------|
| **eA1c** | Geschatte A1c van CGM data | mg/dL: $\frac{Gem\ Glucose + 46.7}{28.7}$ |
| **GMI** | Glucose Management Indicator | $3.31 + (0.02392 × Gem\ Glucose)$ |
| **Gemiddelde (Average)** | Gemiddelde van alle glucosewaarden | $Som / Aantal$ |
| **Mediaan (Median)** | 50e percentiel glucosewaarde | Middelste waarde wanneer gesorteerd |
| **SD** | Standaarddeviatie (glucose variabiliteit) | $√(\frac{Σ(x - gemiddelde)²}{(n-1)})$ |
| **CV** | Variatiecoëfficiënt (Coefficient of Variation) | $\frac{SD}{Gemiddelde} \times 100\%$ |
| **Dagen (Days)** | Aantal dagen met glucosedata | Telling van unieke data |

!!! info "Weergave-eenheden (Display Units)"
    - **eA1c**: Beschikbaar als % (NGSP) of mmol/mol (IFCC)
    - **GMI**: Beschikbaar als % of mmol/mol
    - **Glucosewaarden**: Weergegeven in mg/dL of mmol/L op basis van uw instellingen

### Grafiektypen (Chart Types)

#### 1. Percentiel per Tijd (Percentile by Time) - AGP (Ambulatory Glucose Profile)

![Ambulatory Glucose Profile](../../../../usage/img/agp.png){width="300"}
{align="center"}

De standaardweergave toont uurlijkse glucosepercentielen over 24 uur:

- **Donkere band**: 25e-75e percentiel (middelste 50% van waarden)
- **Lichte band**: 10e-90e percentiel (middelste 80% van waarden)
- **Middenlijn**: Mediaan (50e percentiel)
- **Referentielijnen**: Uw geconfigureerde lage, doel, en hoge drempelwaarden

Deze grafiek helpt identificeren:

- Tijd-van-de-dag patronen (dawn phenomenon, nachtelijke lage waarden, etc.)
- Glucosevariabiliteit op specifieke tijden
- Hoe strak gecontroleerd uw glucose is

#### 2. Distributie per Tijd (Distribution by Time)

Toont het percentage tijd doorgebracht in elk glucosebereik voor elk uur van de dag:

![Glucosedistributie](../../../../usage/img/glucose_distribution.png){width="300"}
{align="center"}

**Weergegeven bereiken**:

- <span style="color: #9e4fce;">Paars</span>: < 54 mg/dL (< 3 mmol/L)
- <span style="color: #cf3f39;">Rood</span>: 54-70 mg/dL (3-3.9 mmol/L)
- <span style="color: #2aac52;">Helder Groen</span>: 70-140 mg/dL (3.9-7.8 mmol/L)
- <span style="color: #228e44;">Donkergroen</span>: 140-180 mg/dL (7.8-10 mmol/L)
- <span style="color: #d0b211;">Geel</span>: 180-200 mg/dL (10-11.1 mmol/L)
- <span style="color: #cd8918;">Oranje</span>: 200-220 mg/dL (11.1-12.2 mmol/L)
- <span style="color: #a96d11;">Donkeroranje</span>: > 220 mg/dL (> 12.2 mmol/L)

Gebruik dit om tijden te identificeren waarop u het meest waarschijnlijk buiten bereik bent.

#### 3. Percentiel per Dag (Percentile by Day)

Box plot die dagelijkse glucosedistributie toont:

![Percentiel Per Dag](../../../../usage/img/percentile_by_day.png){width="300"}
{align="center"}

- Elke dag toont een box-en-whisker plot
- Box vertegenwoordigt 25e-75e percentiel
- Whiskers strekken zich uit tot 10e en 90e percentiel
- Middenlijn is de mediaan
- Vergelijk dag-tot-dag variabiliteit

#### 4. Distributie per Dag (Distribution by Day)

![Distributie Per Dag](../../../../usage/img/distribution_by_day.png){width="300"}
{align="center"}

Gestapelde staafgrafiek die het percentage tijd in elk bereik per dag toont:

- Zie welke dagen optimale controle hadden
- Identificeer patronen over meerdere dagen
- Nuttig voor het bekijken van wekelijkse trends

Distributie per Dag gebruikt dezelfde kleurengrafiek als de [Distributie per Tijd grafiek](#2-distributie-per-tijd-distribution-by-time).

### TITR vs. TING

Trio ondersteunt twee strakkere TIR berekeningsmethoden:

#### Time in Tight Range (TITR - Tijd in Strak Bereik)

- **In Bereik**: 70-140 mg/dL (3.9-7.8 mmol/L)
- **Laag**: 54-70 mg/dL (3-3.9 mmol/L)
- **Zeer Laag**: < 54 mg/dL (< 3 mmol/L)

#### Time in Normoglycemia (TING - Tijd in Normoglycemie)

- **In Bereik**: 63-140 mg/dL (3.5-7.8 mmol/L)
- **Laag**: 54-63 mg/dL (3-3.5 mmol/L)
- **Zeer Laag**: < 54 mg/dL (< 3 mmol/L)

U kunt uw voorkeursmethode selecteren in de Statistieken instellingen.

!!! tip "TIR Doelen (TIR Goals)"
    De American Diabetes Association beveelt aan:

    - **> 70%** tijd in bereik (70-180 mg/dL of 3.9-10 mmol/L)
    - **< 25%** tijd boven bereik (>180 mg/dL of >10 mmol/L)
    - **< 4%** tijd onder 70 mg/dL of 3.9 mmol/L
    - **< 1%** tijd onder 54 mg/dL of 3 mmol/L

### Tijdsperioden (Time Periods)

Selecteer uit vijf tijdsperiode opties:

- **Vandaag (Today)**: Van middernacht tot huidige tijd
- **Dag (Day - D)**: Laatste 24 uur
- **Week (W)**: Laatste 7 dagen
- **Maand (Month - M)**: Laatste 30 dagen
- **3 Maanden (3 Months - 3M)**: Laatste 90 dagen

- - -

## Insuline Statistieken (Insulin Statistics)

### Grafiektypen (Chart Types)

#### Totale Dagelijkse Dosis (Total Daily Dose - TDD)

Bekijk uw insulinegebruik uitgesplitst per type:

**Componenten**:

- **Manuele Bolus (Manual Bolus)**: Insuline die u handmatig heeft toegediend voor maaltijden/correcties
- **SMB**: Super Micro Bolussen automatisch toegediend door Trio
- **Extern (External)**: Insuline injecties gelogd maar niet toegediend door pomp
- **Tijdelijk Basaal (Temp Basal)**: Insuline van tijdelijke basaalstanden (boven geplande)
- **Geplande Basaal (Scheduled Basal)**: Insuline van uw geplande basaalprofiel

De TDD grafiek toont:

- Staafgrafiek van totale dagelijkse insuline
- Statistieken paneel met totalen en gemiddelden voor het zichtbare bereik
- Scrollbare tijdlijn om historische data te bekijken

#### Bolusdistributie (Bolus Distribution)

Gedetailleerde uitsplitsing van bolus insuline types:

- Manuele bolus totalen
- SMB totalen
- Externe insuline totalen
- Gemiddelde bolus hoeveelheden per periode

Gebruik dit om te begrijpen:

- Hoeveel insuline komt van automatische vs. manuele toediening
- SMB effectiviteit en bijdrage aan totale insuline
- Boluspatronen over tijd

### Tijdsperioden (Time Periods)

Kies uit vier tijdsperioden:

- **Dag (Day - D)**: Laatste 24 uur (toont uurlijkse uitsplitsing)
- **Week (W)**: Laatste 7 dagen
- **Maand (Month - M)**: Laatste 30 dagen
- **3 Maanden (3 Months - 3M)**: Laatste 90 dagen

- - -

## Looping Statistieken (Looping Statistics)

### Loop Prestatie Statistieken (Loop Performance Metrics)

Volg hoe betrouwbaar Trio functioneert:

| Statistiek | Beschrijving |
|--------|-------------|
| **Loop Count (Loop Telling)** | Totaal aantal uitgevoerde loop cycli |
| **Successful (Succesvol)** | Aantal succesvolle voltooiingen |
| **Failed (Mislukt)** | Aantal mislukte cycli |
| **Success % (Succes %)** | Percentage succesvolle loops |
| **Median Interval (Mediaan Interval)** | Typische tijd tussen loops (minuten) |
| **Median Duration (Mediaan Duur)** | Typische loop uitvoeringstijd (seconden) |
| **Glucose Count (Glucose Telling)** | Aantal ontvangen CGM metingen |
| **Days (Dagen)** | Gevolgde dagen |

### Grafiektypen (Chart Types)

#### Loop Prestatie Grafiek (Loop Performance Chart)

Staafgrafiek die loop uitvoering over tijd toont:

- **Groene balken**: Succesvolle loops
- **Rode balken**: Mislukte loops
- Hover/tap voor gedetailleerde tellingen per tijdsperiode
- Scrollbare tijdlijn

Gebruik dit om te identificeren:

- Tijden waarop loops vaak mislukken
- CGM verbindingsproblemen
- Algemene systeembetrouwbaarheid

### Tijdsperioden (Time Periods)

Hetzelfde als glucose statistieken:

- Vandaag (Today), Dag (Day - D), Week (W), Maand (Month - M), 3 Maanden (3 Months - 3M)

!!! info "Goede Loop Prestaties (Good Loop Performance)"
    U zou normaal gesproken moeten zien:

    - Loop interval: 5-6 minuten (Trio loopt normaal elke 5 minuten)
    - Succespercentage: > 95%
    - Mislukkingen duiden meestal op CGM of pomp connectiviteitsproblemen

---

## Maaltijd Statistieken (Meal Statistics)

### Macronutriënten Tracking (Macronutrient Tracking)

Bekijk uw voedingsinname over tijd:

**Gevolgde macro's**:

- **Koolhydraten (Carbohydrates)**: Totaal gram per periode
- **Vet (Fat)**: Totaal gram per periode
- **Eiwit (Protein)**: Totaal gram per periode

De maaltijdgrafiek toont:

- Staafgrafiek die dagelijkse of uurlijkse totalen toont
- Uitsplitsing per macronutriëntentype
- Scrollbare tijdlijn
- Datumbereik label

### FPU (Fat Protein Units) Ondersteuning

Als FPU conversie is ingeschakeld in instellingen, volgt Trio vet en eiwit om hun insuline-impact te berekenen voor koolhydraatarme maaltijden.

### Tijdsperioden (Time Periods)

Hetzelfde als insuline statistieken:

- Dag (Day - D), Week (W), Maand (Month - M), 3 Maanden (3 Months - 3M)

!!! note
    Maaltijdstatistieken bevatten alleen koolhydraten, vet en eiwit die u in Trio heeft gelogd. Nauwkeurige logging is essentieel voor nuttige maaltijdstatistieken.

---

## Aanpassingsopties (Customization Options)

**Tijd-in-Bereik Type (Time-in-Range Type)**:

- Selecteer TITR (Time in Tight Range) of TING (Time in Normoglycemia)
- Wijzigt de bereikedefinities voor TIR berekeningen

*Te vinden onder User Interface in Features instellingen*

**eA1c/GMI Weergave**:

- Percentage (NGSP formaat)
- mmol/mol (IFCC formaat)

*Te vinden onder User Interface in Features instellingen*

**Glucose Eenheden (Glucose Units)**:

- mg/dL
- mmol/L

*Te vinden onder Units and Limits in Therapy Settings*

**Doelbereiken (Target Ranges)**:

- Hoge Limiet (High Limit): Standaard 180 mg/dL (aanpasbaar)
- Lage Limiet (Low Limit): Standaard 70 mg/dL (aanpasbaar)

Deze limieten beïnvloeden de kleurcodering en bereikeberekeningen in alle glucose grafieken.

*Te vinden onder User Interface, Low and High Thresholds, in Features Settings*

---

## Uw Statistieken Begrijpen (Understanding Your Statistics)

### Glucosevariabiliteit (Glucose Variability)

**Standaarddeviatie (Standard Deviation - SD)**:

- **Lage SD** (< 30 mg/dL): Stabiele, consistente glucose
- **Matige SD** (30-50 mg/dL): Enige variabiliteit
- **Hoge SD** (> 50 mg/dL): Significante schommelingen

**Variatiecoëfficiënt (Coefficient of Variation - CV)**:

- **Doel**: < 36%
- **CV < 36%** geeft aan goed gecontroleerde glucose variabiliteit
- **CV > 36%** suggereert onvoorspelbare glucosepatronen

!!! tip "CV en SD Verbeteren (Improving CV and SD)"
    Hoge variabiliteit duidt vaak op:

    - Onnauwkeurige koolhydraat telling
    - Incorrecte ISF of koolhydraatratio's
    - Inconsistente maaltijdtiming
    - Oefening zonder passende aanpassingen

### GMI vs. eA1c

Beide bieden schattingen van uw gemiddelde glucose management:

- **eA1c**: Berekend van gemiddelde glucose met de ADAG formule
- **GMI**: Vergelijkbare berekening, aanbevolen door internationale consensus

Dit zijn **schattingen** gebaseerd op CGM data, geen laboratorium A1c metingen. Ze correleren goed maar kunnen verschillen van lab resultaten.

### TDD Trends

Het monitoren van uw Totale Dagelijkse Dosis (Total Daily Dose) helpt u begrijpen:

- **Stijgende TDD**: Kan insulineresistentie, gewichtstoename, of ziekte aangeven
- **Dalende TDD**: Kan verhoogde gevoeligheid, gewichtsverlies, of meer activiteit aangeven
- **Stabiele TDD**: Consistente insulinebehoeften

Significante TDD veranderingen moeten aanleiding geven tot herziening van uw basaalstanden, ISF, koolhydraatratio's en Dynamische ISF Instellingen.

### Loop Betrouwbaarheid (Loop Reliability)

Hoge loop succespercentages (> 95%) duiden op:

- Goede CGM connectiviteit
- Betrouwbare pompcommunicatie
- Stabiele Trio werking

Frequente loop mislukkingen rechtvaardigen onderzoek:

- Controleer CGM sensor plaatsing en zender batterij
- Verifieer dat pomp in bereik is en functioneert
- Bekijk telefoon batterij en achtergrond app instellingen

---

## Data Beschikbaarheid (Data Availability)

Statistieken worden berekend van data opgeslagen in Trio's database:

- **Glucose**: Vereist CGM data
- **Insuline**: Vereist pomp gebeurtenis geschiedenis
- **Looping**: Vereist loop uitvoeringsrecords
- **Maaltijden**: Vereist gelogde koolhydraat invoer

Als u recent bent begonnen met het gebruik van Trio of uw data heeft gereset, zijn sommige statistieken mogelijk niet beschikbaar totdat voldoende data zich heeft verzameld.

**Minimum data voor betekenisvolle statistieken**:

- **1 dag**: Vandaag en Dag weergaven
- **7 dagen**: Week weergave
- **30 dagen**: Maand weergave
- **90 dagen**: 3 Maanden weergave

---

## Prestatie Notities (Performance Notes)

Statistieken berekeningen kunnen intensief zijn voor grote datasets. Trio gebruikt verschillende optimalisaties:

- **Caching**: Vaak geraadpleegde berekeningen worden gecached
- **Achtergrond verwerking (Background processing)**: Zware berekeningen draaien in achtergrond threads
- **Paginering (Pagination)**: Grafieken laden data in scrollbare segmenten
- **Gelijktijdige berekeningen (Concurrent calculations)**: Meerdere statistieken berekend in parallel

U kunt een korte vertraging opmerken bij het eerste openen van Statistieken of het wisselen van tijdsperioden op oudere apparaten. Dit is normaal en zorgt ervoor dat de UI responsief blijft.

---

## Probleemoplossing (Troubleshooting)

### "No data available" Bericht

Als u dit bericht ziet:

1. **Controleer databron**: Zorg ervoor dat u CGM data heeft (voor glucose), gelogde koolhydraten (voor maaltijden), etc.
2. **Verifieer tijdsperiode**: Probeer een kortere tijdsperiode als u recent bent begonnen met het gebruik van Trio
3. **Herstart Trio**: Soms lost het verversen van de app data laadproblemen op

### Statistieken Komen Niet Overeen met Andere Apps

Kleine verschillen zijn normaal vanwege:

- Verschillende berekeningsmethoden (gemiddelde vs. mediaan)
- Verschillende tijdsperiode grenzen
- Verschillende bereikedefinities
- Data filtering (Trio kan sommige ongeldige metingen uitsluiten)

Grote discrepanties moeten worden onderzocht—verifieer dat uw data correct synchroniseert.

### Trage Prestaties (Slow Performance)

Als statistieken traag laden:

- **Verlaag tijdsperiode**: Gebruik Dag of Week in plaats van 3 Maanden
- **Wis app cache**: Instellingen > Geavanceerd (indien beschikbaar)
- **Update Trio**: Zorg ervoor dat u de nieuwste versie draait
- **Apparaat opslag**: Maak ruimte vrij op uw iPhone

---

## Samenvatting (Summary)

Trio's Statistieken functie biedt krachtige inzichten in uw diabetes management:

- **Glucose Statistieken**: Begrijp uw tijd-in-bereik, variabiliteit en patronen
- **Insuline Statistieken**: Monitor uw TDD en bolusdistributie
- **Loop Statistieken**: Volg systeembetrouwbaarheid en prestaties
- **Maaltijd Statistieken**: Bekijk uw macronutriënten inname

Gebruik deze statistieken om:

- Patronen en trends te identificeren
- Geïnformeerde aanpassingen aan therapie-instellingen te maken
- Data te delen met uw gezondheidszorg team
- Voortgang richting uw diabetes management doelen te volgen

Regelmatig bekijken van uw statistieken helpt ervoor te zorgen dat Trio optimaal werkt en uw instellingen nauwkeurig blijven naarmate uw insulinebehoeften veranderen.


