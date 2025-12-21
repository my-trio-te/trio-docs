# Nieuwe Gebruiker Installatiegids (New User Setup Guide)

Welkom bij de Nieuwe Gebruiker Installatiegids en gefeliciteerd met een succesvolle Trio build! Deze gids leidt u door het instellen van uw Trio app nadat u deze op uw telefoon heeft geïnstalleerd.  

Als u de app nog moet installeren, ga dan naar de Build Instructies voor [Mac](../install/build/mac/overview.md) of [Browser](../install/build/browser/browser-build-overview.md) en kom hier terug wanneer u klaar bent om het installatieproces te starten!

- - -
## Onboarding Wizard

Trio heeft een Onboarding Wizard die u door deze stappen leidt wanneer u de app voor het eerst start. Elke stap bevat een tabblad voor **Tijdens Onboarding** en **Na Onboarding**, hieronder uitgelegd.  
    
<div class="grid" markdown>

![Onboarding Screen](img/onboarding-guide.png)

=== "Tijdens Onboarding (During Onboarding)"
    
    Informatie onder het **Tijdens Onboarding** tabblad biedt aanvullende informatie voor die stap van de Onboarding Wizard.  
    
    Gebruik deze documentatie als uw thuisbasis om naar terug te verwijzen wanneer nodig.
    
=== "Na Onboarding (After Onboarding)"
    
    Informatie onder het **Na Onboarding** tabblad toont u waar u de relevante instellingen kunt bewerken nadat de onboarding is voltooid, evenals aanvullende informatie over die instellingen.  
    
    Gebruik deze documentatie als uw thuisbasis om naar terug te verwijzen wanneer nodig.
    
</div>

!!! tip
    Als u de Onboarding Wizard heeft voltooid en begeleiding nodig heeft over wat u hierna moet doen, ga dan naar [Stap 7: Verbind Uw Apparaten](#stap-7-verbind-uw-apparaten-step-7-connect-your-devices)

- - -

***Spring naar:***
<div class="grid" markdown>

[**Stap 1:** Trio Voorbereiden](#stap-1-trio-voorbereiden-step-1-prepare-trio)

[**Stap 2:** Therapie-instellingen](#stap-2-therapie-instellingen-step-2-therapy-settings)

[**Stap 3:** Toedieningslimieten](#stap-3-toedieningslimieten-step-3-delivery-limits)

[**Stap 4:** Algoritme-instellingen](#stap-4-algoritme-instellingen-step-4-algorithm-settings)

[**Stap 5:** Meldingen](#stap-5-meldingen-step-5-notifications)

[**Stap 6:** Bluetooth](#stap-6-bluetooth)

[**Stap 7:** Verbind Uw Apparaten](#stap-7-verbind-uw-apparaten-step-7-connect-your-devices)

[**Stap 8:** Gesloten Loop Inschakelen](#stap-8-gesloten-loop-inschakelen-step-8-enable-closed-loop)

[**Stap 9:** App Icoon Wijzigen (Optioneel)](#stap-9-app-icoon-wijzigen-optioneel-step-9-change-app-icon-optional)


</div>
- - -

!!! tip "Hulp nodig bij het vinden van deze instellingen in uw huidige DIY app?"
    Als u komt van een andere Open Source Automated Insulin Dosing (OS-AID) app, kunnen deze gidsen u helpen bij het vinden van deze instellingen in uw vorige app en het invoeren ervan in Trio.
    
    - [Trio 0.2.x](migration/trio-02x-migration.md)
    - [iAPS](migration/iaps-migration.md)
    - [Loop](migration/loop-migration.md)
    - [AndroidAPS](migration/aaps-migration.md)

## **Stap 1:** Trio Voorbereiden (Step 1: Prepare Trio)

In deze stap configureert u diagnostische gegevensdeling, optioneel synchroniseren met Nightscout, en voert u andere essentiële installatie-informatie in.

<div class="grid" markdown>

=== "Tijdens Onboarding"
    ### Diagnostiek (Diagnostics)

    Standaard verzamelt Trio crashrapporten en andere geanonimiseerde gegevens met betrekking tot fouten, uitzonderingen en algehele app-prestaties. Het delen van deze gegevens helpt ontwikkelaars de app te onderhouden en te verbeteren. Dit is volledig anoniem en optioneel.

    !!! tip
    
        Als u `Enable Sharing` selecteert, moet u ook het Privacybeleid (Privacy Policy) in de Onboarding Wizard lezen en accepteren voordat u verder kunt gaan.

    ### Nightscout

    Nightscout is een cloud-gebaseerd platform waarmee u uw diabetesgegevens kunt opslaan.  
    Nightscout is niet vereist en kan later worden toegevoegd onder [Services](settings/services/nightscout.md) in het Instellingenmenu van de app.
    
    ### Eenheden & Pomp (Units & Pump)
    
    In de Onboarding Wizard selecteert u uw [Glucose Eenheden (Glucose Units)](settings/therapy/units-limits.md#glucose-units) en Pompmodel, maar u zult uw pomp nog niet koppelen. U zult uw pomp en CGM koppelen na het voltooien van het Onboarding proces (Zie [Stap 7](#stap-7-verbind-uw-apparaten-step-7-connect-your-devices)).
        
=== "Na Onboarding"
    ### Diagnostiek Bewerken
    
    Om delen in of uit te schakelen nadat u de onboarding heeft voltooid, open het instellingenmenu, dan Functies (Features), dan App Diagnostics. Hier vindt u de mogelijkheid om delen aan te passen evenals het Privacybeleid.
    
    ### Nightscout Bewerken
    
    Om uw Nightscout inloggegevens te verbinden of te bewerken nadat u de onboarding heeft voltooid, volg de begeleiding [hier](settings/services/nightscout.md).
    
    ### Glucose Eenheden Bewerken
    
    ![Units and Limits](img/unitsandlimits.png){ width="400px" }  
    [Lees meer over het instellen van uw Glucose Eenheden](settings/therapy/units-limits.md#glucose-units)
    {align=center}
    
    ### Insulinepomp Bewerken
    
    ![Devices Settings](img/pumpMenu.png){ width="400px" }  
    [Leer hoe u uw insulinepomp verbindt of wijzigt](settings/devices/pump.md)
    {align=center}  
    
</div>

- - -

## **Stap 2:** Therapie-instellingen (Step 2: Therapy Settings)

De volgende stap is het invoeren van uw Therapie-instellingen (Therapy Settings). Deze omvatten:

- **Glucosedoelen (Glucose Targets)**: De dosering van Trio zal streven naar deze glucose bij het berekenen van de insulinedosis
- **Basaalstanden (Basal Rates)**: Gebruikt als basislijn voor het verhogen of verlagen van insulinebehoeften
- **Koolhydraatratio's (Carb Ratios)**: Hoeveel gram koolhydraat wordt gecompenseerd door 1 eenheid insuline
- **Insuline Gevoeligheden (Insulin Sensitivities)**: Hoeveel 1 eenheid insuline uw bloedglucose zal verlagen
    
<div class="grid" markdown>

=== "Tijdens Onboarding"
    
    Voor meer informatie over elke therapie-instelling in deze stap, gebruik de onderstaande links:
    
    - [Glucosedoelen (Glucose Targets)](settings/therapy/glucose-targets.md)  
    - [Basaalstanden (Basal Rates)](settings/therapy/basal-rates.md)  
    - [Koolhydraatratio's (Carb Ratios / CR)](settings/therapy/carb-ratios.md)  
    - [Insuline Gevoeligheden (Insulin Sensitivities / ISF)](settings/therapy/isf.md)  
    
=== "Na Onboarding"
    
    Hier is hoe u deze instellingen kunt vinden na onboarding:  
    ![Therapy Settings](img/TherapyMenu.png){ width="400px"  }
    {align=center}
    
    Hieronder vindt u een stapsgewijze handleiding om elk van deze instellingen te bewerken:
    
    - [Glucosedoelen](settings/therapy/glucose-targets.md#how-to-enter-your-glucose-targets-into-trio)  
    - [Basaalstanden](settings/therapy/basal-rates.md#how-to-enter-your-basal-profiles-into-trio)  
    - [Koolhydraatratio's (CR)](settings/therapy/carb-ratios.md#how-to-enter-your-carb-ratios-cr-into-trio)  
    - [Insuline Gevoeligheden (ISF)](settings/therapy/isf.md#how-to-enter-your-isf-into-trio)  

</div>

- - -

## **Stap 3:** Toedieningslimieten (Step 3: Delivery Limits)

In deze stap stelt u de grenzen in voor insulinetoediening en koolhydraatinvoeren om Trio te helpen uw insulinedosering veilig maar effectief te houden.

<div class="grid" markdown>

=== "Tijdens Onboarding"

    Hieronder vindt u meer informatie over elk van de instellingen in volgorde van verschijning in de Onboarding Wizard:
    
    - [Max IOB](settings/therapy/units-limits.md#max-iob)  
    - [Max Bolus](settings/therapy/units-limits.md#max-bolus)  
    - [Max Basaalstand (Max Basal Rate)](settings/therapy/units-limits.md#max-basal)  
    - [Max COB](settings/therapy/units-limits.md#max-cob)  
    - [Minimum Veiligheidsdrempel (Minimum Safety Threshold)](settings/therapy/units-limits.md#minimum-safety-threshold)
    
=== "Na Onboarding"
    
    Hier is hoe u deze instellingen kunt vinden na onboarding:  
    ![Units and Limits](img/unitsandlimits.png){ width="400px"  }
    {align=center}
    
    Hieronder vindt u meer informatie over elk van deze instellingen:
    
    - [Max IOB](settings/therapy/units-limits.md#max-iob)  
    - [Max Bolus](settings/therapy/units-limits.md#max-bolus)  
    - [Max Basaalstand](settings/therapy/units-limits.md#max-basal)  
    - [Max COB](settings/therapy/units-limits.md#max-cob)  
    - [Minimum Veiligheidsdrempel](settings/therapy/units-limits.md#minimum-safety-threshold)

</div>

- - -

## **Stap 4:** Algoritme-instellingen (Step 4: Algorithm Settings)

Trio bevat verschillende algoritme-instellingen waarmee u het gedrag van het Oref algoritme kunt aanpassen aan uw specifieke behoeften.

Om het algoritme te configureren, definieert u de instellingen voor Autosens, Super Micro Bolus (SMB), en Doelgedrag (Target Behavior).

!!! warning "Ga Langzaam"
    - Deze stap kan overweldigend voelen, dus neem de tijd en gebruik de onderstaande links om uw keuzes te begeleiden.
    - Onze sterke aanbeveling is om alles op de standaardinstellingen te laten als nieuwe gebruiker.

!!! important "Belangrijke informatie voor deze stap:"
    - DynamicISF vereist minimaal 7 dagen aan gegevens en is nog niet configureerbaar
    - Zelfs als u een gebruiker bent die update, wordt u stap voor stap door deze sectie geleid. Het is belangrijk om elke stap te lezen omdat sommige dingen mogelijk zijn veranderd
    - **Alle aanvullende "geavanceerde instellingen" zijn gereset**
    - De werkingsduur van insuline (DIA - Duration of Insulin Action) is nu vergrendeld op de nieuwe standaard van Trio van _10 uur_.
        - We raden sterk aan om DIA ***niet*** te wijzigen omdat dit essentieel is voor een nauwkeurige IOB berekening en noodzakelijk voor veilige en stabiele werking.

<div class="grid" markdown>

=== "Tijdens Onboarding"
    
    ### Autosens
    Autosensitivity, of [Autosens](settings/algorithm/autosens.md), past insulinetoediening aan op basis van waargenomen gevoeligheid of resistentie.
    
    **Stap 1: Stel [Autosens Min](settings/algorithm/autosens.md#autosens-min) in**  
    Dit is de ondergrens van de Autosens Ratio.  
    
    **Stap 2: Stel [Autosens Max](settings/algorithm/autosens.md#autosens-max) in**  
    Dit is de bovengrens van de Autosens Ratio.  
    
    ### [Super Micro Bolus (SMB)](settings/algorithm/smb-settings.md)
    SMB (Super Micro Bolus) is een oref algoritme functie die kleine, frequente bolussen levert in plaats van tijdelijke basaalaanpassingen, wat een responsiever systeem creëert. De onboarding opties zijn verschillend afhankelijk van wat u kiest voor Stap 3.
    
    **Stap 3: [Schakel SMB Always In/Uit (Enable/Disable SMB Always)](settings/algorithm/smb-settings.md#enable-smb-always)**
    
    === "SMB Always Inschakelen (Enable SMB Always)"  
        Wanneer deze instelling is ingeschakeld, zullen Super Micro Boluses (SMBs) altijd worden toegestaan als doseringsberekeningen bepalen dat insuline nodig is via de SMB toedieningsmethode. De uitzondering is wanneer een hoog tijdelijk doel is ingesteld. Het inschakelen van SMB Always zal de andere individuele SMB opties overslaan tijdens het onboarding proces.
    
    === "SMB Always Uitschakelen (Disable SMB Always)"
        Als u niet altijd SMBs wilt toestaan, en liever selectiever wilt zijn met de SMBs die u inschakelt, houd `Enable SMB Always` ***UIT*** en de individuele SMB opties verschijnen daarna.  
    
        **Stap 3a: [Schakel SMB met COB In/Uit (Enable/Disable SMB with COB)](settings/algorithm/smb-settings.md#enable-smb-with-cob)**  
        Het inschakelen van deze functie stelt Trio in staat om SMBs toe te dienen wanneer er koolhydraten aan boord zijn (COB - Carbs on Board).  
    
        **Stap 3b: [Schakel SMB met TempTarget In (Enable SMB with TempTarget)](settings/algorithm/smb-settings.md#enable-smb-with-temptarget)**  
        Het inschakelen van deze functie stelt Trio in staat om benodigde insuline toe te dienen met behulp van SMBs op momenten waarop een handmatig tijdelijk doel (temp target) onder **100 mg/dL (5,5 mmol/L)** is ingesteld.  
    
        **Stap 3c: [Schakel SMB Na Koolhydraten In (Enable SMB After Carbs)](settings/algorithm/smb-settings.md#enable-smb-after-carbs)**  
        Het inschakelen van deze functie stelt Trio in staat om benodigde insuline toe te dienen met behulp van SMBs gedurende **6 uur** na elke koolhydraatinvoer, ongeacht of er actieve koolhydraten aan boord (COB) zijn.  
        
        **Stap 3d: [Schakel SMB met Hoge Glucose In (Enable SMB with High Glucose)](settings/algorithm/smb-settings.md#enable-smb-with-high-glucose)**  
        Het inschakelen van deze functie stelt Trio in staat om benodigde insuline toe te dienen met behulp van SMBs wanneer uw glucosemeting boven de waarde ligt die is ingesteld als uw [Hoog Glucose Doel (High Glucose Target)](settings/algorithm/smb-settings.md#high-glucose-target). Deze aanvullende instelling verschijnt wanneer u deze functie inschakelt.  
    
    **Stap 4: [Sta SMB toe met Hoog Tijdelijk Doel (Allow SMB with High Temp Target)](settings/algorithm/smb-settings.md#allow-smb-with-high-temptarget)**  
    Dit is de enige instelling die niet is ingeschakeld wanneer `Enable SMB Always` is ingeschakeld. Het inschakelen van deze instelling staat SMBs toe wanneer een handmatig Tijdelijk Doel is ingesteld groter dan 100 mg/dL (5,5 mmol/L). 
    !!! warning
        Dit type Tijdelijk Doel wordt vaak ingesteld als een herstelstap bij lage waarden. Als u een hoog tijdelijk doel instelt bij herstel van een lage waarde om overbehandeling tijdens herstel te voorkomen, wordt geadviseerd om deze instelling _UIT_ te houden.
        
    **Stap 5: [Schakel UAM In (Enable UAM)](settings/algorithm/smb-settings.md#enable-uam)**  
    Best practice is om zowel UAM als SMBs tegelijkertijd ingeschakeld te hebben. Als u SMB Always heeft ingeschakeld (of van plan bent individuele SMBs in te schakelen zodra u de onboarding voltooit), wordt geadviseerd om `Enable UAM` ***AAN*** te zetten tijdens deze stap.  
    
    !!! tip
        De instellingen in Stappen 6, 7 en 8 worden vaak verkeerd begrepen. Volg de links om beter te begrijpen wat ze doen.
    
    **Stap 6: Stel [Max SMB Basal Minutes](settings/algorithm/smb-settings.md#max-smb-basal-minutes) in**  
    Deze instelling beperkt de grootte van een enkele SMB dosis.  
    
    **Stap 7: Stel [Max UAM Basal Minutes](settings/algorithm/smb-settings.md#max-uam-basal-minutes) in**  
    Deze instelling beperkt de grootte van een enkele niet-aangekondigde maaltijd SMB dosis, oftewel UAM.  

    **Stap 8: Stel [Max Toegestane Glucosestijging voor SMB (Max Allowed Glucose Rise for SMB)](settings/algorithm/smb-settings.md#max-allowed-glucose-rise-for-smb) in**  
    Deze instelling schakelt SMBs uit als de laatste twee glucosewaarden meer dan dit percentage verschillen.  
    
    ### Doelgedrag (Target Behavior)
    [Doelgedrag (Target Behavior)](settings/algorithm/target-behavior.md) stelt u in staat om aan te passen hoe tijdelijke doelen ISF, basaal en auto-targeting beïnvloeden op basis van gevoeligheid of resistentie.  
    
    **Stap 9: [Hoog Tijdelijk Doel Verhoogt Gevoeligheid (High Temp Target Raises Sensitivity)](settings/algorithm/target-behavior.md#high-temp-target-raises-sensitivity)**  
    Deze instelling verhoogt de gevoeligheid wanneer glucose boven het doel ligt als een handmatig Tijdelijk Doel > 100mg/dL (5,5mmol/L) is ingesteld.  
    
    **Stap 10: [Laag Tijdelijk Doel Verlaagt Gevoeligheid (Low Temp Target Lowers Sensitivity)](settings/algorithm/target-behavior.md#low-temp-target-lowers-sensitivity)**  
    Deze instelling verlaagt de gevoeligheid wanneer glucose onder het doel ligt als een handmatig Tijdelijk Doel < 100mg/dL (5,5mmol/L) is ingesteld.  
    
    **Stap 11: [Gevoeligheid Verhoogt Doel (Sensitivity Raises Target)](settings/algorithm/target-behavior.md#sensitivity-raises-target)**  
    Deze instelling verhoogt het glucosedoel als de Gevoeligheidsratio (Sensitivity Ratio) > 1,0 is.  

    **Stap 12: [Resistentie Verlaagt Doel (Resistance Lowers Target)](settings/algorithm/target-behavior.md#resistance-lowers-target)**  
    Deze instelling verlaagt het glucosedoel als de Gevoeligheidsratio < 1,0 is.  
    
    **Stap 13: [Half Basaal Oefendoel (Half Basal Exercise Target)](settings/algorithm/target-behavior.md#half-basal-exercise-target)**
    Deze instelling schaalt uw basaalstand zodanig dat uw basaal op 50% wordt ingesteld bij deze waarde. Deze instelling wordt alleen toegepast wanneer `High Temp Target Raises Sensitivity` en/of `Low Temp Target Lowers Sensitivity` zijn ingeschakeld.  

=== "Na Onboarding"
    
    !!! warning "Nieuw bij Trio?"
        - Voordat u deze instellingen aanpast, is het belangrijk om te weten wat en waarom u die wijzigingen aanbrengt.
        - Begin met de standaardlimieten voor een paar dagen of weken voordat u ze aanpast.
    
    ### Autosens Bewerken
    Autosensitivity, of [Autosens](settings/algorithm/autosens.md), past insulinetoediening aan op basis van waargenomen gevoeligheid of resistentie.  
    
    Hieronder vindt u meer informatie over de Autosens instellingen:
    
    - [Autosens Min](settings/algorithm/autosens.md#autosens-min)  
    - [Autosens Max](settings/algorithm/autosens.md#autosens-max)  
    
    ### Super Micro Bolus (SMB) Bewerken
    [SMB (Super Micro Bolus)](settings/algorithm/smb-settings.md) is een oref algoritme functie die kleine, frequente bolussen levert in plaats van tijdelijke basaalaanpassingen, wat een responsiever systeem creëert.
    
    !!! tip
        - Best practice is om zowel UAM als SMBs tegelijkertijd ingeschakeld te hebben. Als u SMBs inschakelt, schakel dan ook UAM in.
        - Individuele SMB Opties zijn inclusief, niet exclusief. Slechts **ÉÉN** ingeschakelde instelling hoeft waar te zijn om SMBs toe te staan. Meer info in de stroomdiagram: [Zijn SMBs Toegestaan?](settings/algorithm/smb-settings.md#are-smbs-allowed)
    
    Hieronder vindt u meer informatie over de SMB instellingen:
    
    - [SMB Always Inschakelen](settings/algorithm/smb-settings.md#enable-smb-always) 
    - Individuele SMB Opties Inschakelen
        - [SMB met COB Inschakelen](settings/algorithm/smb-settings.md#enable-smb-with-cob)
        - [SMB met TempTarget Inschakelen](settings/algorithm/smb-settings.md#enable-smb-with-temptarget)
        - [SMB Na Koolhydraten Inschakelen](settings/algorithm/smb-settings.md#enable-smb-after-carbs)
        - [SMB met Hoge Glucose Inschakelen](settings/algorithm/smb-settings.md#enable-smb-with-high-glucose)
        - [SMB met Hoog Tijdelijk Doel Toestaan](settings/algorithm/smb-settings.md#allow-smb-with-high-temptarget)
    - [UAM Inschakelen](settings/algorithm/smb-settings.md#enable-uam)  
    - SMB Beperkende Instellingen
        - [Max SMB Basal Minutes](settings/algorithm/smb-settings.md#max-smb-basal-minutes)
        - [Max UAM Basal Minutes](settings/algorithm/smb-settings.md#max-uam-basal-minutes)
        - [Max Toegestane Glucosestijging voor SMB](settings/algorithm/smb-settings.md#max-allowed-glucose-rise-for-smb)
    
    ### Doelgedrag Bewerken
    [Doelgedrag (Target Behavior)](settings/algorithm/target-behavior.md) stelt u in staat om aan te passen hoe tijdelijke doelen ISF, basaal en auto-targeting beïnvloeden op basis van gevoeligheid of resistentie.
    
    Hieronder vindt u meer informatie over de Doelgedrag instellingen:  
    
    [Hoog Tijdelijk Doel Verhoogt Gevoeligheid](settings/algorithm/target-behavior.md#high-temp-target-raises-sensitivity)  
    [Laag Tijdelijk Doel Verlaagt Gevoeligheid](settings/algorithm/target-behavior.md#low-temp-target-lowers-sensitivity)  
    [Gevoeligheid Verhoogt Doel](settings/algorithm/target-behavior.md#sensitivity-raises-target)  
    [Resistentie Verlaagt Doel](settings/algorithm/target-behavior.md#resistance-lowers-target)  
    [Half Basaal Oefendoel](settings/algorithm/target-behavior.md#half-basal-exercise-target)  

</div>

- - -

## **Stap 5:** Meldingen (Step 5: Notifications)
In deze stap staat u Trio toe om u meldingen (notifications) te sturen. Deze omvatten waarschuwingen (alerts), geluiden en icoonbadges naar uw keuze. Meldingen geven u belangrijke Trio informatie zonder dat u de app hoeft te openen. Het is essentieel dat deze zijn toegestaan in uw iPhone systeeminstellingen. Zodra u de onboarding voltooit, kunt u uw meldingen aanpassen. 

Om Meldingen te bewerken nadat u de onboarding heeft voltooid, ga naar de [Meldingen (Notifications)](settings/notifications/index.md) sectie voor meer informatie over elk type melding en hoe u ze kunt bewerken.
- - -

## **Stap 6:** Bluetooth
Trio vereist Bluetooth om te functioneren als een (hybride) gesloten-loop systeem (closed-loop system). Als u Bluetooth niet heeft ingeschakeld in uw iOS instellingen, kunt u uw telefoon niet verbinden met uw insulinepomp of CGM. Er verschijnt een pop-up die dit gemakkelijk maakt om in te schakelen als dit nog niet is gebeurd.

- - -
<p style="text-align: center; font-size: 32px;">Gefeliciteerd!</p>
<p style="text-align: center; font-size: 24px;">Maar u bent nog niet klaar!</p>  

<div class="video-center" label="Home Screen Mockup">
  <video controls  preload="metadata" width="500" height="500">
    <source src="/configuration/img/trio-phone-mockup.mp4" type="video/mp4">
      Uw browser ondersteunt de HTML5 video tag niet.
       <p>De video kan niet worden weergegeven. U kunt deze <a href="https://triodocs.org/usage/img/trio-phone-mockup.mp4">hier downloaden</a>.</p>
  </video>
</div>

**Stappen 7 & 8 zitten niet in de Onboarding Wizard**  
Deze kunnen niet worden voltooid totdat u de onboarding heeft afgerond, maar _moeten_ worden voltooid voordat u Trio kunt gaan gebruiken.

## **Stap 7:** Verbind Uw Apparaten (Step 7: Connect Your Devices)
[Verbind uw Insulinepomp (Connect your Insulin Pump)](settings/devices/pump.md)  
[Verbind uw CGM (Connect your CGM)](settings/devices/cgm.md)  
[Verbind uw Horloge (Connect your Watch)](settings/devices/smart-watch.md)  

- - -

## **Stap 8:** Gesloten Loop Inschakelen (Step 8: Enable Closed Loop)

!!! warning
    Trio werkt het best als een gesloten loop systeem (closed loop system). Als u uw instellingen moet testen of bezorgd bent over het proberen van een nieuw algoritme, is het het beste om de loop te sluiten en de configuratie-instructies [hier](settings/closed-loop.md#want-to-stay-in-open-loop) te volgen.

Gesloten loop functionaliteit is standaard **UIT** gezet. Dit betekent dat Trio geen aanpassingen automatisch kan maken. Het systeem is volledig afhankelijk van u om aanpassingen te maken terwijl Gesloten Loop **UIT** staat. U kunt uw pomp bedienen en handmatig bolussen met de Trio app, maar niets kan worden gedaan zonder uw goedkeuring. Dit wordt vaak genoemd als draaien in open loop. U zult ***geen enkele door Trio geïnitieerde bescherming ontvangen tegen lage of hoge waarden terwijl in open loop***.

![Enable Closed loop](img/closeLoop.png){ width="500px" }  
[Meer over de loop sluiten](settings/closed-loop.md)
{align=center}

- - -

!!! warning "Dynamische Instellingen (Dynamic Settings)"  
    
    Trio staat u niet toe om Dynamische Instellingen (Dynamic Settings) in te schakelen totdat het 7 dagen aan gegevens heeft verzameld. Dit is essentieel zodat Trio goede doseringsaanbevelingen kan doen. Zodra het genoeg gegevens heeft en u Dynamische Instellingen kunt inschakelen, wordt het nog steeds aanbevolen dat u al...  
    
    - ...uw kern Trio instellingen (ISF, CR en Basaalstanden) heeft afgesteld voor gebruik in het Oref algoritme.
    - ...Trio heeft gebruikt met een _echte_ CGM en _echte_ pomp (geen simulators) voor de aanbevolen minimum van **7 opeenvolgende dagen**.
    - ...de Dynamische Instellingen heeft gelezen en begrijpt hoe ze met elkaar interacteren.
    

!!! danger "WIJZIG NIETS ANDERS TOTDAT U UW INSTELLINGEN HEEFT GETEST EN GEVERIFIEERD"
    - Als u komt van een ander Oref-gebaseerd systeem, zoals Trio 0.2, iAPS, of AAPS, wilt u uw huidige instellingen in de gaten houden om te zorgen dat ze presteren zoals ze dat eerder deden. U moet mogelijk enkele aanpassingen maken, maar u kunt ook ontdekken dat uw instellingen net zo goed werken als in het vorige systeem.  
    - Als u komt van Loop, een commercieel systeem, of meervoudige dagelijkse injecties (MDI - Multiple Daily Injections), wilt u eerst uw instellingen testen om te zorgen dat ze geen aanpassingen nodig hebben. U heeft een volledig ander algoritme gebruikt om uw insulinedosering te beheren en dat betekent dat u uw instellingen heeft aangepast om geoptimaliseerd te zijn voor die doseringsmethode. Omdat Trio een ander algoritme gebruikt, zullen uw instellingen vrijwel zeker moeten worden aangepast om optimaal te werken binnen het Oref algoritme.
    
<!--    U kunt meer informatie vinden over de overgang naar Trio [hier](transition-qa.md) -->

- - -

## **Stap 9:** App Icoon Wijzigen (Optioneel) (Step 9: Change App Icon - Optional)

Onder "App Icons" in het Instellingenmenu kunt u verschillende iconen vinden voor uw Trio app.

![Change App Icon](img/icon_selection.png)
{align=center}

<!-- NOTE: Commented out until customizations page (install/customize.md) is updated. Will be removed if we do not include build customizations.
Heeft u een speciaal icoon in gedachten?  
U kunt uw eigen aangepast icoon gebruiken door de instructies te volgen onder [Customizations](../install/customize.md#add-custom-icon).
-->
***Gefeliciteerd!*** U heeft de Nieuwe Gebruiker Setup voor Trio voltooid!

