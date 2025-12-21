!!! important "🚧 Documentatie in Ontwikkeling 🚧"
    
    Deze documentatie wordt uitgebracht terwijl deze nog in ontwikkeling is. Houd rekening met de volgende informatie:
    
    - Deze documentatie is voor de open testbranch van Trio (`dev` branch). Bekijk deze documentatie ter voorbereiding op het testen van Trio 0.5 of nieuwer, nu deze publiekelijk beschikbaar is.
    - Als u op zoek bent naar de Trio 0.2.x (`main` branch) documentatie, kunt u deze hier nog steeds vinden: [0.2.x](../0.2.x/index.md)
    - Elke pagina met een ✏️ geeft aan dat de informatie nog niet is bijgewerkt. De informatie op die pagina's mag op dit moment niet worden gebruikt als referentie.
    - We verwelkomen hulp bij het proeflezen, bewerken en bijwerken van de informatie in deze documentatie. Als u wilt bijdragen aan de documentatie, dien dan issues of PR's in [hier](https://github.com/nightscout/trio-docs)
    - Nieuwe educatieve video's komen binnenkort.

# Wat is Trio?
!!! note
    De video verwijst naar Trio 1.0, wat pas het officiële versienummer zal zijn nadat de bètatests zijn voltooid en het naar de main branch is vrijgegeven.

<video controls  preload="metadata">
  <source src="../assets/videos/trio-intro.mp4" type="video/mp4">
  Uw browser ondersteunt de HTML5 video tag niet.
</video>

![Trio Logo](../assets/images/trio-logo.png){ .skip-lightbox width="150" align="right" }

Trio is een open-source geautomatiseerd insulinetoedieningssysteem (OS-AID) voor iOS gebaseerd op het [OpenAPS algoritme](https://github.com/OpenAPS/oref0) met [aanpassingen voor Trio](https://github.com/nightscout/trio-oref).  

Dit systeem houdt rekening met uw door de gebruiker ingevoerde instellingen, koolhydraten en historisch insulinegebruik om de insulinetoediening te automatiseren en zo de tijd die u besteedt aan het beheren van uw diabetes te verminderen.

Voordat u met Trio begint, moet u al uw closed-loop opties evalueren, waaronder:

- Commerciële systemen
- Andere open-source applicaties
    - [Loop](https://loopkit.github.io/loopdocs/)
    - [AndroidAPS](https://androidaps.readthedocs.io/)

!!! warning "Waarschuwing"
    Trio is een DIY, open-source community project.  
    Het is niet beoordeeld door een toezichthoudende instantie en is niet goedgekeurd door een gezondheidsautoriteit.  
    U bouwt en gebruikt Trio op eigen risico.

- - -
# Aan de Slag

Om Trio te gebruiken, bent u verplicht om [de applicatie te bouwen](../install/index.md) vanuit de broncode. Dit vereist geen uitgebreide technische kennis, maar is een tijdrovend proces. U heeft mogelijk meerdere sessies nodig om uw eerste build te voltooien.

Na installatie volgt u een onboarding wizard in de app om uw instellingen optimaal te configureren. We raden sterk aan om de [Nieuwe Gebruikers Installatiegids](configuration/new-user-setup.md) te gebruiken terwijl u de onboarding doorloopt, zodat u gemakkelijk aanvullende informatie kunt raadplegen die u mogelijk nodig heeft.

Als u vastzit, staat de community klaar om te helpen op [Discord](https://discord.gg/FnwFEFUwXE) of [Facebook](https://www.facebook.com/groups/diytrio).

- - -
# Bijdragen

Trio wordt gebouwd door een vrijwilligerscommunity. Als u geïnteresseerd bent om te helpen als programmeur, kunt u bijdragen aan de [Trio](https://github.com/nightscout/Trio) of [Trio-Oref](https://github.com/nightscout/trio-oref) codebasis. Trio is geschreven in Swift, en het Trio-Oref/OpenAPS algoritme is momenteel geschreven in JS en wordt omgezet naar Swift.

U kunt ook ondersteuning bieden in online ondersteuningsgroepen door uw eigen succes te delen en veelvoorkomende fouten op te lossen.

