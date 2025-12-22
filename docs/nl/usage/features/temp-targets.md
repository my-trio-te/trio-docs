# Tijdelijke Doelen (Temporary Targets)

## Wat is een Tijdelijk Doel? (What is a Temporary Target?)

Tijdelijke Doelen (Temporary Targets), ook wel Temp Targets genoemd, zijn glucosedoelen die door de gebruiker voor een korte periode worden ingesteld. Temp targets kunnen worden gebruikt om insulinetoediening te verhogen of verlagen.

Er zijn meerdere gevallen waarin een tijdelijk doel nuttig kan zijn. Hieronder vindt u een paar voorbeelden. Deze lijst is niet allesomvattend en u kunt aanvullende toepassingen voor tijdelijke doelen vinden naarmate u Trio gebruikt.

Naast tijdelijke doelen heeft Trio ook een meer aanpasbare functie genaamd [Overschrijvingen (Overrides)](overrides.md).

- - -

## Hoe Stel ik een Tijdelijk Doel In? (How Do I Set a Temporary Target?)

Temp Targets zijn te vinden onder het Aanpassingen (Adjustments) tabblad onderaan het Trio app scherm.

U kunt hier ook uw opgeslagen Temp Targets vinden.

Tijdelijke doelen kunnen op afstand worden ingesteld met [Loop Follow](../../configuration/settings/features/remote-control.md) of geautomatiseerd worden met [Shortcuts](../../configuration/settings/features/shortcuts.md#temporary-target).

- - -

## Voorbeelden van Gebruik (Examples of Use)

### Cardio Oefening (Cardio Exercise)

!!! tip "Tips"
    
    - Stel 1-2 uur voor uw oefening een hoog tijdelijk doel in
    - Schakel oefening-gerelateerde instellingen in om toegediende insuline tijdens het sporten te verminderen
    - Neem een snack mee wanneer u van plan bent te sporten

Cardiovasculaire oefening kan directe en verlengde effecten hebben op glykemische controle. Over het algemeen zullen individuen merken dat hun bloedsuiker tijdens en blijft dalen gedurende 3-4 uur na afloop. Ze kunnen ook verhoogde insulinegevoeligheid ervaren gedurende 24 uur na dit type oefening.

Ter voorbereiding op oefening kunt u de volgende tijdelijke doel functies gebruiken om het optreden van lage waarden te verminderen:

- Stel een tijdelijk doel >100 mg/dL (>5,5 mmol/L) in ongeveer 1-2 uur voordat u begint met sporten.
- *Schakel in* [High Temp Target Raises Sensitivity (Hoog Tijdelijk Doel Verhoogt Gevoeligheid)](../../configuration/settings/algorithm/target-behavior.md#high-temp-target-raises-sensitivity-hoog-tijdelijk-doel-verhoogt-gevoeligheid).
- Als u wilt dat SMB's automatisch worden uitgeschakeld tijdens het sporten met een tijdelijk doel boven 100 mg/dL (>5,5 mmol/L), zorg ervoor dat [Allow SMB With High Temptarget (SMB Toestaan met Hoog Tijdelijk Doel)](../../configuration/settings/algorithm/smb-settings.md#allow-smb-with-high-temptarget-smb-toestaan-met-hoog-tijdelijk-doel) *UIT (OFF)* staat.
- Als u wilt dat SMB's doorgaan zelfs wanneer u een tijdelijk doel boven 100 mg/dL (>5,5 mmol/L) instelt, zorg ervoor dat [Allow SMB With High Temptarget (SMB Toestaan met Hoog Tijdelijk Doel)](../../configuration/settings/algorithm/smb-settings.md#allow-smb-with-high-temptarget-smb-toestaan-met-hoog-tijdelijk-doel) *AAN (ON)* staat.
    
Toegang tot snelwerkende koolhydraten tijdens dit type oefening is essentieel. Neem een snack mee voor het geval u een bron van eenvoudige koolhydraten nodig heeft tijdens uw routine. Sommigen merken dat ze een langzaamwerkende koolhydraat nodig hebben voordat ze gaan sporten en anderen merken dat koolhydraten aan boord leidt tot insuline aan boord, wat leidt tot lage waarden. Uw diabetes kan variëren, dus volg wat u nodig heeft.
 
- - -

### Voor de Maaltijd of Binnenkort Eten (Pre-Meal or Eating Soon)

!!! tip "Tips"
    
    - Stel 1-2 uur voor maaltijden een laag tijdelijk doel in om te helpen bij pieken
    - Schakel "Low Temptarget Lowers Sensitivity" in om meer insulinetoediening mogelijk te maken

Sommige gebruikers willen niet pre-bolussen, maar willen toch een kleine boost van insuline voor hun maaltijd. U kunt dit bereiken door een lager tijdelijk doel in te stellen dan uw gebruikelijke glucosedoel ongeveer 1-2 uur voordat u van plan bent te eten. Hoeveel u het doelglucose verlaagt, correleert met hoeveel extra insuline zal worden berekend.

Ter voorbereiding op maaltijden kunt u de volgende tijdelijke doel functies gebruiken om insulinetoediening te verhogen en pieken na de maaltijd te verminderen:

- Voor een kleine verhoging in insulinetoediening, stel een tijdelijk doel in ongeveer 20-40 mg/dL (ongeveer 1-2 mmol/L) onder uw doel, 1-2 uur voor maaltijden.
- Schakel [Low Temptarget Lowers Sensitivity (Laag Tijdelijk Doel Verlaagt Gevoeligheid)](../../configuration/settings/algorithm/target-behavior.md#low-temp-target-lowers-sensitivity-laag-tijdelijk-doel-verlaagt-gevoeligheid) in om uzelf meer insuline te geven voor de komende maaltijd en om uw bloedsuiker sneller naar het pre-maaltijd bereik te brengen. Opmerking: Als u deze optie gebruikt, moet uw tijdelijk doel onder 100 mg/dL (5,5 mmol/L) zijn om deze functie te activeren.

- - -

### Herstel van een Lage Bloedsuiker (Recovery From a Low Blood Sugar)

!!! tip "Tips"
    
    - Stel een hoog tijdelijk doel in voor 30-60 minuten na een lage waarde
    - Schakel "Allow SMBs with High Temp Target" uit
    - Sla dit op als een vooraf ingesteld Temp Target zodat u het gemakkelijk kunt inschakelen en de optie heeft om het op afstand in te schakelen
    
Wanneer u herstelt van een lage bloedsuiker, wilt u vooral niet dat Trio overcorrigeert voor de snelle stijging in glucosewaarden. Om dit te voorkomen, stellen gebruikers vaak een tijdelijk doel in boven 100 mg/dL (>5,5 mmol/L) voor een duur van 30-60 minuten na een lage bloedsuiker. Dit zal de gegeven correctie voor de snelle stijging in glucose verminderen als u het volgende doet:

- Stel een tijdelijk doel >100 mg/dL (>5,5 mmol/L) in dat ook hoger is dan uw gebruikelijke doelglucose voor tussen 30-60 minuten
- Zet *UIT (OFF)* [Allow SMB With High Temptarget (SMB Toestaan met Hoog Tijdelijk Doel)](../../configuration/settings/algorithm/smb-settings.md#allow-smb-with-high-temptarget-smb-toestaan-met-hoog-tijdelijk-doel)
- Zet *AAN (ON)* [High Temp Target Raises Sensitivity (Hoog Tijdelijk Doel Verhoogt Gevoeligheid)](../../configuration/settings/algorithm/target-behavior.md#high-temp-target-raises-sensitivity-hoog-tijdelijk-doel-verhoogt-gevoeligheid)


