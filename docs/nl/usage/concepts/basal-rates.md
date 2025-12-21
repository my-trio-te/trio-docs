# Basaalstanden (Basal Rates)

!!! tip "Hoogtepunten"

    - Basaalstanden (basal rates) definiëren uw achtergrondinsulinetoediening gedurende de dag
    - Er kunnen verschillende basaalstanden worden ingesteld voor verschillende tijdstippen van de dag (tot 48 invoeren met intervallen van 30 minuten)
    - Trio gebruikt uw basaalprofiel (basal profile) als basislijn maar past deze elke loopcyclus aan op basis van uw huidige glucose
    - Nauwkeurige basaalstanden zijn cruciaal voor correcte insuline aan boord (IOB - Insulin on Board) berekeningen

## Wat Zijn Basaalstanden (Basal Rates)?

Basaalstanden (basal rates) zijn de fundamentele insulinetoedieningsinstellingen in Trio. Ze vertegenwoordigen de hoeveelheid snelwerkende insuline die continu gedurende de dag wordt toegediend om uw glucoseniveaus te beheren wanneer u niet eet. Beschouw basaalinsuline als de achtergrondinsuline die uw lichaam nodig heeft om stabiele glucoseniveaus te behouden tijdens vastperiodes.

Basaalstanden worden gemeten in **eenheden per uur (E/u)**. Bijvoorbeeld, een basaalstand van 0,8 E/u betekent dat u 0,8 eenheden insuline ontvangt verspreid over de loop van dat uur.

## Waarom Basaalstanden Belangrijk Zijn

!!! tip "Basaal is de Sleutel"
    Basaalstanden zijn de basis van het Trio algoritme. Voordat u andere kerninstellingen test, zorg ervoor dat uw basaalstanden correct zijn ingesteld.

Uw basaalstanden vervullen verschillende kritieke functies in Trio:

1. **Basislijn voor Algoritme Aanpassingen**: Trio gebruikt uw geplande basaalprofiel (scheduled basal profile) als startpunt en past dit vervolgens elke loopcyclus aan op basis van uw huidige glucose, trend en andere factoren. Uw basaalstand moet dekken wat uw lichaam nodig heeft tijdens periodes van vasten en lage activiteit.

2. **Insuline aan Boord (IOB - Insulin on Board) Berekeningen**: Uw geplande basaalstand wordt behandeld als het "nulpunt" voor IOB. Wanneer Trio een tijdelijke basaalstand (temporary basal) hoger dan uw geplande stand toedient, neemt uw IOB toe. Wanneer het een lagere tijdelijke basaalstand toedient, neemt uw IOB af (en kan zelfs negatief worden).

3. **Basis voor Autosens en Dynamische ISF (Dynamic ISF)**: Autosens en Dynamische ISF wijzigen uw basaalstanden (samen met ISF en doelen) op basis van uw gevoeligheidsratio (sensitivity ratio).

4. **Totale Dagelijkse Dosis (TDD - Total Daily Dose) Berekeningen**: Uw basaalinsuline draagt bij aan uw TDD, die Trio gebruikt voor Dynamische ISF en andere algoritmefuncties.

5. **Basaalstanden als Vangnet**: Als uw pomp geen communicatie heeft ontvangen van Trio omdat uw telefoon buiten bereik is of anderszins niet beschikbaar is, zal deze terugvallen op uw geprogrammeerde basaalstanden nadat de laatste tijdelijke basaal is verlopen. Uw profielbasaalstanden worden opgeslagen op uw pomp. Dit zorgt ervoor dat insulinetoediening aanwezig is, zelfs wanneer uw telefoon geen contact heeft.

## Hoe Trio Basaalstanden Gebruikt

!!! important "Vasten is Essentieel"
    Trio gebruikt **niet** uw geplande basaalstanden letterlijk wanneer in gesloten loop (closed loop). In plaats daarvan gebruikt het deze als referentiepunt en vervangt deze met tijdelijke basaalstanden (temporary basal rates) elke loopcyclus op basis van de insulinebehoeften zoals bepaald door het OpenAPS algoritme.

Elke 5 minuten doet het algoritme van Trio:

1. Leest uw huidige geplande basaalstand
2. Past Autosens aanpassingen toe
3. Berekent de optimale tijdelijke basaalstand op basis van:
    - Huidig glucoseniveau (current glucose level)
    - Glucosetrend (glucose trend)
    - Insuline aan boord (IOB - Insulin on Board)
    - Koolhydraten aan boord (COB - Carbs on Board)
    - Doelglucose (target glucose)
    - SMB Instellingen (SMB Settings)
4. Stelt een tijdelijke basaalstand in (binnen uw veiligheidslimieten) en/of levert een SMB (Super Micro Bolus)

Dit betekent dat uw werkelijke insulinetoediening gedurende de dag zal variëren, zelfs als u vast, omdat Trio in realtime reageert op uw glucosepatronen.

## Tijdgebaseerde Basaalschema's (Time-Based Basal Schedules)

Omdat insulinebehoeften gedurende de dag variëren vanwege circadiane ritmes, hormonale schommelingen en activiteitspatronen, ondersteunt Trio **tijdgebaseerde basaalschema's (time-based basal schedules)**:

- U kunt verschillende basaalstanden definiëren voor verschillende tijdstippen van de dag
- Tijdvakken zijn in stappen van 30 minuten
- Maximum van 48 invoeren (24 uur dekkend)
- De eerste invoer moet beginnen om 00:00 (middernacht)
- Elke stand geldt vanaf de starttijd tot de volgende geplande stand

**Voorbeeld Basaalschema:**

| Tijd | Basaalstand<br>(E/u) | Waarom Het Kan Variëren |
|------|------------|-------------------|
| 00:00 | 0,6 | Lagere nachtelijke behoefte |
| 03:00 | 0,9 | Dageraadverschijnsel (vroege ochtend glucosestijging) |
| 09:00 | 0,7 | Overdag basislijn |
| 17:00 | 0,8 | Avondtoename |

## Basaalstand Bereiken

Het toegestane basaalstandbereik is afhankelijk van uw insulinepomp:

| Pomptype | Minimum<br>(E/u) | Maximum<br>(E/u) | Increment<br>(E/u) |
|-----------|---------|---------|-----------|
| Dana | 0,0 | 3,0 | 0,05 |
| Omnipod DASH | 0,0 | 30,0 | 0,05 |
| Omnipod Eros | 0,05 | 30,0 | 0,05 |
| MiniMed x15 & x22 | 0,0 | 35,0 | 0,05 (0-10)<br>0,1 (10-35) |
| MiniMed x23 & x54 | 0,0 | 35,0 | 0,025 (0-1)<br>0,05 (1-10)<br>0,1 (10-35) |

!!! warning "Max Basaal Veiligheidslimiet"
    Naast het maximum van uw pomp heeft Trio een **Max Basaal (Max Basal)** veiligheidsinstelling (standaard: 2,0 E/u) die voorkomt dat het algoritme tijdelijke basaalstanden boven deze waarde instelt. Zorg ervoor dat uw Max Basaal instelling geschikt is voor uw behoeften.

## Testen van Uw Basaalstanden

Nauwkeurige basaalstanden zijn essentieel voor een optimale werking van Trio. Hier zijn twee methoden om uw basaalstanden te verifiëren en aan te passen:

### 1. Vastentests

De traditionele methode voor het testen van basaalstanden:

1. Vast voor 4-6 uur (geen eten minstens 2 uur voor aanvang)
2. Vermijd lichaamsbeweging tijdens de test
3. Bewaak uw glucose:
    - **Stabiele glucose**: Basaalstand is nauwkeurig
    - **Stijgende glucose**: Basaalstand is te laag (verhoog deze)
    - **Dalende glucose**: Basaalstand is te hoog (verlaag deze)

Test verschillende tijdstippen van de dag afzonderlijk, omdat uw basaalbehoeften gedurende de dag variëren.

### 2. Bewaak Uw IOB Patronen

Bekijk uw insuline aan boord (IOB) gedurende de dag wanneer u niet eet en geen resterende COB heeft:

- **Consistent negatieve IOB** op bepaalde tijdstippen → Basaalstand kan te hoog zijn voor die uren
- **Consistent positieve IOB** op bepaalde tijdstippen → Basaalstand kan te laag zijn voor die uren
- **IOB zweeft rond nul** → Basaalstand is geschikt

!!! important
    Deze algemene regel geldt niet wanneer voedsel wordt geconsumeerd. Basaaltesten en IOB-evaluatie kunnen alleen worden voltooid tijdens periodes van vasten.

## Startpunt voor Nieuwe Gebruikers

Als u komt van pomptherapie, kunt u beginnen met de basaalinstellingen van uw pomp, maar wees voorbereid om deze aan te passen:

- Trio kan andere basaalstanden vereisen dan traditionele pomptherapie
- Bewaak uw glucosepatronen tijdens vastperiodes
- Maak geleidelijke aanpassingen (meestal 10-20% veranderingen)
- Wacht meerdere dagen tussen aanpassingen om het volledige effect te zien

Als u geen bestaande basaalstanden heeft, werk dan samen met uw zorgverlener om veilige startwaarden vast te stellen op basis van uw totale dagelijkse insulinebehoeften.

## Relatie met Andere Instellingen

Uw basaalstanden interacteren met andere Trio instellingen:

- **Autosens**: Vermenigvuldigt uw basaalstanden met de gevoeligheidsratio (standaardbereik: 70-120%)
- **Dynamische Instellingen**: Wanneer "Basaal Aanpassen" is ingeschakeld, beïnvloeden Dynamische ISF aanpassingen ook de basaalbehoeften
- **SMB (Super Micro Bolus)**: SMB berekeningen refereren aan uw huidige basaalstand voor SMB limieten (bijv. "50% van huidige basaalstand")
- **Totale Dagelijkse Dosis**: Basaalinsuline is opgenomen in uw TDD berekening samen met bolusinsuline

## Samenvatting

Basaalstanden zijn uw basislijn insulinetoedieningsschema dat Trio gebruikt als basis voor zijn geautomatiseerde insulinetoediening. Hoewel Trio deze standen dynamisch aanpast elke loopcyclus, zorgt het hebben van nauwkeurige geplande basaalstanden voor:

- Correcte IOB berekeningen
- Effectieve Autosens aanpassingen
- Geschikt algoritmegedrag
- Veilige insulinetoediening binnen uw fysiologische behoeften
- Nauwkeurig vangnet is aanwezig wanneer Trio niet kan communiceren met de pomp

Neem de tijd om uw basaalstanden te testen en te verfijnen. Ze zijn een van de belangrijkste instellingen voor succesvolle geautomatiseerde insulinetoediening.

