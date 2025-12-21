# Smart Watch (Slim Horloge)

## Apple Watch

Op een Apple Watch kunt u koolhydraten en bolussen toevoegen, een tijdelijk doel instellen, en BG, IOB, COB, etc. weergeven.

Trio heeft een companion app voor de Apple Watch.  
De companion app toont de loopstatus en huidige insuline en koolhydraten aan boord.
Het stelt u ook in staat om koolhydraten toe te voegen, een handmatige bolus te geven, en een tijdelijk doel in te stellen.
De companion app dient echter alleen als een afstandsbediening voor de iPhone app; verbinding met de CGM en pomp gebeurt nog steeds via uw iPhone, en u moet deze bij u hebben.

Apple Watch Series 3 en nieuwer worden ondersteund.  
Nieuwere versies van de Apple Watch hebben een betere batterijduur en ondersteunen een always-on display.

### Confirm Bolus Faster (Bolus Sneller Bevestigen)
<!-- TODO: Add description of confirm bolus faster -->

### Contacts Configuration (Contacten Configuratie)
<!-- TODO: Add contacts configuration instructions -->

- - -

## Garmin

Garmin horloges geven alleen gegevens weer en staan geen interactie toe voor het toevoegen van koolhydraten of insuline. Twee componenten kunnen worden geïnstalleerd op Garmin horloges: een wijzerplaat (watch face) die continu informatie weergeeft, en een gegevensveld (data field) dat glucose-informatie toont tijdens activiteiten.
Beide componenten zijn onafhankelijk van elkaar en moeten op het horloge worden ge-sideload zoals hieronder beschreven.
Geen behoefte aan Garmin Connect op de achtergrond — het horloge hoeft alleen maar verbonden te zijn met de telefoon waarop Trio draait.
De wijzerplaat werkt bij met Trio loopcycli.

### Releases (Uitgaven)

Zolang er niets is gepubliceerd in Garmin Connect IQ, moet elk Garmin horloge individueel worden gecompileerd. U kunt dit zelf doen met VS Code met de monkeyC plugin en een Garmin SDK. Zo niet, zie de link hieronder voor de uitgegeven horloges.

### Hoe te doen (How to do it)

1. Kies een map op uw Mac en haal de nieuwste release van [deze GitHub repo](https://github.com/mountrcg/garminWatch).
2. U heeft `*.prg` bestanden nodig voor uw horloge model van de release en OpenMTP van [OpenMTP](https://openmtp.ganeshrvel.com) om ze over te zetten naar het horloge.
3. Installeer en start OpenMTP.
4. Verbind uw Garmin horloge via een data USB kabel met de MacBook en sta de USB verbinding toe. De Garmin horloge USB modus moet zijn ingesteld op MTP.
5. Zet `*.prg` bestanden voor uw horloge model over naar de `/GARMIN/APPS` map.
6. Wacht tot de overdracht is voltooid en koppel het horloge los.
7. Voeg het Garmin horloge toe in Trio instellingen: `Settings -> Watch -> Garmin Watch -> Add Devices`.
8. Kies de Trio wijzerplaat (watch face) op het horloge en geniet ervan.

### Hints (Aanwijzingen)

De wijzerplaat zal geen informatie weergeven nadat een andere is gebruikt. In dat geval moet u de Trio wijzerplaat verwijderen en opnieuw installeren. Er treden geen vergelijkbare bijwerkingen op bij het gegevensveld (data field).

Als uw horloge niet wordt vermeld in de Release sectie, vraag er dan naar in het Garmin kanaal op Discord.

- - -

