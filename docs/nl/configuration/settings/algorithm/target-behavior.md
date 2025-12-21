# Doelgedrag (Target Behavior)

## High Temp Target Raises Sensitivity (Hoog Tijdelijk Doel Verhoogt Gevoeligheid)
**Standaard:** _UIT (OFF)_

Wanneer deze functie is ingeschakeld, zal het handmatig instellen van een tijdelijk doel boven 100 mg/dL (5,5 mmol/L) de Gevoeligheidsratio (Sensitivity Ratio) verlagen die wordt gebruikt voor ISF en basaalaanpassingen, resulterend in over het algemeen minder toegediende insuline. Dit schaalt met het ingestelde tijdelijke doel; hoe hoger het tijdelijke doel, hoe lager de gebruikte Gevoeligheidsratio.

Als Half Basal Exercise Target is ingesteld op 160 mg/dL (standaard), gebruikt een tijdelijk doel van 120 mg/dL een Gevoeligheidsratio van 0,75. Een tijdelijk doel van 140 mg/dL gebruikt een Gevoeligheidsratio van 0,6.

!!! note "Opmerking"
    Het effect hiervan kan worden aangepast met behulp van de [Half Basal Exercise Target](#half-basal-exercise-target-half-basaal-oefening-doel) instelling
    
- - -

## Low Temp Target Lowers Sensitivity (Laag Tijdelijk Doel Verlaagt Gevoeligheid)
**Standaard:** _UIT (OFF)_

Wanneer deze functie is ingeschakeld, zal het instellen van een tijdelijk doel onder 100 mg/dL (5,5 mmol/L) de Gevoeligheidsratio (Sensitivity Ratio) verhogen die wordt gebruikt voor ISF en basaalaanpassingen, resulterend in over het algemeen meer toegediende insuline. Dit schaalt met het ingestelde tijdelijke doel; hoe lager het tijdelijke doel, hoe hoger de gebruikte Gevoeligheidsratio.

Als Half Basal Exercise Target is ingesteld op 160 mg/dL (standaard), gebruikt een tijdelijk doel van 95 mg/dL een Gevoeligheidsratio van 1,09. Een tijdelijk doel van 85 mg/dL gebruikt een Gevoeligheidsratio van 1,33.

!!! note "Opmerking"
    Het effect hiervan kan worden aangepast met behulp van de [Half Basal Exercise Target](#half-basal-exercise-target-half-basaal-oefening-doel) instelling
    
- - -

## Sensitivity Raises Target (Gevoeligheid Verhoogt Doel)
**Standaard:** _UIT (OFF)_

Het inschakelen van deze functie zorgt ervoor dat Trio automatisch de doelglucose verhoogt als het een toename in insulinegevoeligheid detecteert. Als de Gevoeligheidsratio (Sensitivity Ratio) $\gt 1$ is, wordt de doelglucose verhoogd.

- - -

## Resistance Lowers Target (Resistentie Verlaagt Doel)
**Standaard:** _UIT (OFF)_

Het inschakelen van deze functie zorgt ervoor dat Trio automatisch de doelglucose verlaagt als het resistentie voor insuline detecteert. Als de Gevoeligheidsratio (Sensitivity Ratio) $\lt 1$ is, wordt de doelglucose verlaagd.

- - -

## Half Basal Exercise Target (Half Basaal Oefening Doel)
**Standaard:** _160 mg/dL_  
**Instellingslimieten:** _100-300 mg/dL_

Het Half Basal Exercise Target stelt u in staat om uw basale insuline te verminderen tijdens oefening of uw basale insuline te verhogen wanneer u binnenkort gaat eten door een handmatig tijdelijk doel in te stellen. Om te verminderen voor oefening, stel een tijdelijk doel in boven 100 mg/dL. Om te verhogen voor binnenkort eten, stel een tijdelijk doel in onder 100 mg/dL.

Bijvoorbeeld, bij een tijdelijk doel van 160 mg/dL wordt uw basaal met 50% verminderd, maar dit schaalt afhankelijk van hoe ver uw tijdelijke doel van 100 is ingesteld.
    
- Tijdelijk Doel $= 160$ mg/dL: $50$% vermindering in profiel basaal
- Tijdelijk Doel $= 140$ mg/dL: $60$% vermindering in profiel basaal
- Tijdelijk Doel $= 120$ mg/dL: $75$% vermindering in profiel basaal

U kunt zien hoe het aanpassen van deze instelling uw profiel basaal zal beïnvloeden wanneer u een tijdelijk doel instelt in Trio. Op het scherm kunt u een aangepast Half Basal Exercise Target instellen voor de duur van het tijdelijke doel dat u instelt.

