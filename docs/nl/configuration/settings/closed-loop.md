# De Loop Sluiten (Closing The Loop)

Gesloten loop (closed loop) staat standaard uit. Dit betekent dat Trio geen autonome aanpassingen kan maken. Totdat u gesloten loop inschakelt, vertrouwt het systeem op uw goedkeuring van alle acties die het onderneemt.

## Wat is Gesloten Loop (Closed Loop)?

"Gesloten Loop" (Closed Loop) betekent dat Trio de instellingen en parameters die u in het systeem heeft ingevoerd, zal gebruiken om elke 5 minuten geautomatiseerde insulinedoseringsbeslissingen voor u te nemen.

!!! tip
    Trio werkt het beste als een gesloten loop systeem. Als u uw instellingen moet testen, is het het beste om de loop te sluiten en de configuratie [hier](#wilt-u-in-open-loop-blijven-want-to-stay-in-open-loop) te volgen.

## Wat is Open Loop?

"Open Loop" betekent dat Trio geen aanpassingen automatisch kan maken. In open loop vertrouwt het systeem volledig op u om aanpassingen te maken.

U kunt uw pomp bedienen en bolussen met de Trio app, maar niets kan worden gedaan zonder uw goedkeuring. Dit wordt vaak aangeduid als draaien in open loop. U krijgt geen door Trio geïnitieerde bescherming tegen lage of hoge waarden tijdens open loop. Trio wordt in essentie een fancy niet-AID PDM met een bolusberekenaar.

## Wilt u in Open Loop Blijven (Want to stay in Open Loop)?

Veel gebruikers voelen de behoefte om aanvankelijk in open loop te blijven om verschillende redenen, zoals het testen van instellingen of behoedzaamheid over een nieuw algoritme. Het wordt niet aangeraden om de loop open te houden met Trio vanwege het aanzienlijke functionaliteitsverlies. Configureer in plaats daarvan de volgende instellingen als volgt:

<div class="grid cards" markdown>
    
-   - Stel [Max IOB](therapy/units-limits.md#max-iob) in op **0**
    - Stel [Autosens Max](algorithm/autosens.md#autosens-max) in op **100%**
    - Stel [Autosens Min](algorithm/autosens.md#autosens-min) in op **100%**
    - Alle andere [Algoritme Instellingen (Algorithm Settings)](algorithm/index.md) moeten op hun standaardwaarden blijven als u een nieuwe gebruiker bent

-   !!! tip "Bestaande Gebruikers (Existing Users)"
    Als u een bestaande gebruiker bent die deze aanpassingen maakt voor het testen van uw instellingen, kunnen Algoritme Instellingen blijven zoals u ze eerder had geconfigureerd. Houd rekening met: u moet ze mogelijk aanpassen nadat uw instellingentest is voltooid als er significante wijzigingen zijn aangebracht in uw Kern Trio Instellingen (basaal, ISF, CR).

</div>

Dit zal Trio in staat stellen om ononderbroken communicatie met uw pomp en CGM voort te zetten. Het op deze manier instellen van Max IOB zal Trio in staat stellen lage waarden te voorkomen door basaal te verminderen, maar zal Trio niet toestaan om automatisch hoge waarden te behandelen. Het op deze manier instellen van Autosens Max en Min zal alle algoritme gevoeligheidsaanpassingen stoppen, en Trio zal alleen uw profielinstellingen gebruiken zoals u ze heeft ingevoerd. Dit zal het algoritme aanzienlijk belemmeren en het veranderen in een niet-dynamisch systeem met alleen lage-preventie. Dit is veel veiliger dan proberen in open loop te draaien.

!!! caution "Voormalige Loop Gebruikers (Former Loop Users)"
    Loop en Trio functioneren verschillend in open loop vanwege de verschillen in de onderliggende algoritmes. Het is zelden aangeraden om in open loop te blijven met Trio, aangezien het grootste deel van de functionaliteit van het algoritme afhankelijk is van een gesloten loop systeem.


<!--## Settings
**I've been using Loop. Can I copy my settings?**

**_No._** Users coming from Loop usually adjust their ISF and CR settings to compensate for fluctuations in insulin needs throughout the day. When using those settings for Trio, the algorithm also adjusts to compensate for the fluctuations, which may result in over- or under-dosing. Please review the steps of monitoring Trio predictions and change your settings accordingly. It would help if you also read the section on [Coming from Other AID Systems](transition-qa.md).
-->
!!! tip
    
    Onthoud dat ieders diabetes anders is, en er is geen one-size-fits-all aanpak, dus neem de tijd om uw instellingen te optimaliseren voor het Oref algoritme.



