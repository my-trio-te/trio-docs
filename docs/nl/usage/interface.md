# Gebruikersinterface (User Interface)
## Trio Gebruikersinterface

![Trio 1.0 UI](../usage/img/light_vs_dark_mode.png){width="600"}
{align="center"}

- - -

## Hoofdscherm (Main Screen)

**Het hoofdscherm van Trio kan worden verdeeld in vier secties:**

![Trio Main Screen](../usage/img/light_mode_sections.png){width="500"}
{align="center"}

Gebruik de onderstaande links om meer te leren over elke sectie:  
[Huidige Status](#huidige-status-current-status) | [Grafiek & Geschiedenis](#grafiek-en-geschiedenis-graph-and-history) | [Aanpassingsstatus](#aanpassingsstatus-adjustment-status) | [Actieknoppen](#actieknoppen-action-buttons)

- - -

### Huidige Status (Current Status)

De Huidige Status sectie functioneert als een gemakkelijk referentiepunt voor een verscheidenheid aan belangrijke datapunten.  
Gebruik de onderstaande tabbladen om meer te leren over elke sectie:  

![Trio Current Status](../usage/img/current_status.png){width="400"}
{align="center"}  

<div class="grid" markdown>

=== "Huidige Glucose (Current Glucose)"
    Hier vindt u een gecentreerde cirkel met uw huidige glucosemeting, de tijd sinds de laatste glucosemeting, de verandering in glucose ten opzichte van de vorige meting, en een pijl die de trendrichting van uw glucose aangeeft.

    ![Current Glucose](../usage/img/current_glucose.png){width="300"}
    {align="center"}
    
    !!! tip "Pro Tip"
        Als u lang indrukt op de cirkel, worden CGM waarschuwingen gesnoozed
    
=== "Pomp Info (Pump Info)"

    === "Omnipod Gebruikers"
        ![Pump Info Omnipod](../usage/img/pump_info_omnipod.png){width="300"}
        {align="center"}
    
        * **Reservoir Status**: Resterende eenheden in uw pod  
        * **Resterende Pod Levensduur (Remaining Pod Life)**: Resterende tijd over op uw huidige pod  
        **Houd rekening met:** 50+ E betekent dat er meer dan 50 eenheden insuline over zijn. Omnipod geeft alleen een exacte waarde voor het reservoir als de hoeveelheid minder dan 50 eenheden is. 
    
    === "Medtronic & Dana Gebruikers"
        ![Pump Info Medt](../usage/img/pump_info_medt.png){width="300"}
        {align="center"}
    
        * **Reservoir Status**: Resterende eenheden in uw reservoir  
        * **Pomp Batterij (Pump Battery)**: Resterend batterijpercentage van de pomp  
    

=== "Loop Info"
    Rechts van de cirkel vindt u de huidige loopingstatus (looping status) en de tijd sinds de laatste loopcyclus (loop cycle). Daaronder staat uw 4-uurs glucosevoorspelling (glucose forecast).
    
    ![Loop Info](../usage/img/loop_info.png){width="300"}
    {align="center"}
    
    De Loop Indicator vertelt u hoe lang het geleden is sinds de laatste loopcyclus met behulp van specifieke kleuren:
        
    <span style="color: #6FCE96;">:fontawesome-regular-circle:</span> **Groen (Green):**  
        Het is **_5 minuten of minder_** geleden sinds een succesvolle loopcyclus
        
    <span style="color: #FFC145;">:fontawesome-regular-circle:</span> **Geel (Yellow):**  
        Het is **_6-10 minuten_** geleden sinds een succesvolle loopcyclus
        
    <span style="color: #EB5757;">:fontawesome-regular-circle:</span> **Rood (Red):**  
        Het is **_10+ minuten_** zonder een succesvolle loopcyclus
        
    <span style="color: #d9d9d9;">:fontawesome-regular-circle:</span> **Grijs (Grey):**  
        Geen data of niet genoeg data om een loopcyclus te voltooien
        
    !!! tip "Pro Tip"
        Als u lang indrukt op de loop indicator, forceert dit een loopcyclus
    
=== "Huidige Metrieken (Current Metrics)"
    Onder de cirkel vindt u 3 iconen die u voorzien van de huidige IOB (Insulin on Board - Insuline aan Boord), COB (Carbs on Board - Koolhydraten aan Boord), en aangepaste basaalstand (adjusted basal rate). Deze waarden zijn bepaald door de berekeningen die zijn gemaakt in de meest recente loopcyclus.
    
    ![Current Metrics](../usage/img/current_metrics.png){width="300"}
    {align="center"}

</div>

- - -

### Grafiek en Geschiedenis (Graph and History)

Het midden van het scherm toont een grafiek van uw bloedsuikergegevens en ingevoerde koolhydraten, overlaid met de insulinetoediening en glucosevoorspelling van Trio.  
Gebruik de tabbladen onder de afbeelding om meer te leren over elke sectie.  

![Trio Graph and History](../usage/img/graph_and_history.png){width="400"}
{align="center"}

<div class="grid" markdown>

=== "Basaal Aanpassingen (Basal Adjustments)"
    Hier vindt u de aanpassingen die zijn gemaakt aan uw basaaltoediening. Zie hieronder voor meer details:  
    
    ![Basal Line](../usage/img/blue_basal_line.png){width="40" style="vertical-align: middle;"}  **Therapie Basaal Referentielijn (Therapy Basal Reference Line):** De stand die u heeft ingevoerd in de instellingen. (In Trio 0.2.x heette dit "Profile Basal Rate")  
    ![No Adjustment](../usage/img/no_adjustment.png){width="40" style="vertical-align: middle;"}  **Geen Basaal Aanpassing (No Basal Adjustment)** Basaal wordt toegediend op uw huidige therapie basaalstand.  
    ![Basal Increase](../usage/img/basal_increase.png){width="40" style="vertical-align: middle;"}  **Basaal Verhoging (Basal Increase)** Basaal verhoogd boven uw huidige therapie basaalstand.  
    ![Basal Decrease](../usage/img/basal_decrease.png){width="40" style="vertical-align: middle;"}  **Basaal Verlaging (Basal Decrease)** Basaal verlaagd onder uw huidige therapie basaalstand.  
    
=== "Huidige & Eerdere Activiteit (Current & Previous Activity)"
    Deze sectie toont een gecombineerd overzicht van uw eerdere, huidige en voorspelde activiteit.
    
        
    === "![Cone of Uncertainty](../usage/img/cone_of_uncertainty.png){width="20" style="vertical-align: middle;"}  **Onzekerheidskegel (Cone of Uncertainty)**"
        
        !!! info inline end "Grafiek Legenda (Graph Legend)"
    
            <span style="color: #35c759;">:fontawesome-solid-circle:</span>  CGM Glucosewaarde  
            <span style="color: #35c759;">:fontawesome-solid-circle-dot:</span>  CGM Glucosewaarde (Afgevlakt / Smoothed)  
            <span style="color: red;">:fontawesome-solid-droplet:</span>  Handmatige Glucose Invoer  
            ![Bolus Icon](../usage/img/bolus.png){width="15" style="vertical-align: middle;"}  Bolus (SMB of Handmatig)  
            ![Carb Icon](../usage/img/carb.png){width="15" style="vertical-align: middle;"}  Koolhydraten Invoer  
            <span style="color: #a1845c;">:fontawesome-solid-circle:</span>  Vet-Eiwit Koolhydraat Equivalent (FPU - Fat-Protein Unit)  
            ![Override Icon](../usage/img/override_icon.png){width="15" style="vertical-align: middle;"}  Overschrijving Actief (Override Active)  
            ![Temp Target Icon](../usage/img/temp_target_icon.png){width="15" style="vertical-align: middle;"}  Tijdelijk Doel Actief (Temp Target Active)  
            ![Target Glucose Icon](../usage/img/target_glucose.png){width="15" style="vertical-align: middle;"}  Doelglucose (Target Glucose)  
        
        
        Deze voorspellingsoptie toont het volledige bereik van mogelijke voorspelde voorspellingen als een vereenvoudigde weergave van oref's vier voorspellingslijnen.  
        
    === "![Forecast Lines](../usage/img/forecast_lines.png){width="20" style="vertical-align: middle;"}  **Voorspellingslijnen (Forecast Lines)**"
        
        !!! info inline end "Grafiek Legenda (Graph Legend)"
    
            <span style="color: #35c759;">:fontawesome-solid-circle:</span>  CGM Glucosewaarde  
            <span style="color: #35c759;">:fontawesome-solid-circle-dot:</span>  CGM Glucosewaarde (Afgevlakt)  
            <span style="color: red;">:fontawesome-solid-droplet:</span>  Handmatige Glucose Invoer  
            ![Bolus Icon](../usage/img/bolus.png){width="15" style="vertical-align: middle;"}  Bolus (SMB of Handmatig)  
            ![Carb Icon](../usage/img/carb.png){width="15" style="vertical-align: middle;"}  Koolhydraten Invoer  
            <span style="color: #a1845c;">:fontawesome-solid-circle:</span>  Vet-Eiwit Koolhydraat Equivalent (FPU)  
            ![Override Icon](../usage/img/override_icon.png){width="15" style="vertical-align: middle;"}  Overschrijving Actief  
            ![Temp Target Icon](../usage/img/temp_target_icon.png){width="15" style="vertical-align: middle;"}  Tijdelijk Doel Actief  
            ![Target Glucose Icon](../usage/img/target_glucose.png){width="15" style="vertical-align: middle;"}  Doelglucose  
        
        
        <span style="color: #1895ff;">:fontawesome-solid-circle:</span>  **IOB Voorspelling (IOB Forecast):** Voorspelt toekomstige glucosemetingen op basis van de hoeveelheid insuline die nog actief is in het lichaam  
        <span style="color: #6f62f3;">:fontawesome-solid-circle:</span>  **ZT Voorspelling (ZT Forecast):** Voorspelt het worst-case toekomstige glucosescenario als er geen koolhydraten worden geabsorbeerd en insulinetoediening wordt gestopt totdat glucose begint te stijgen  
        <span style="color: #ffc246;">:fontawesome-solid-circle:</span>  **COB Voorspelling (COB Forecast):** Voorspelt toekomstige glucosemetingen door rekening te houden met de hoeveelheid koolhydraten die nog worden geabsorbeerd in het lichaam  
        <span style="color: #ff8340;">:fontawesome-solid-circle:</span>  **UAM Voorspelling (UAM Forecast):** Voorspelt toekomstige glucoseniveaus op basis van het verschil tussen verwachte glucose en werkelijke glucosemetingen
    
    - - -
        
    === "![Static Glucose](../usage/img/static_glucose.png){width="18" style="vertical-align: middle;"} Statische Glucose Kleur (Static Glucose Color)"
        
        !!! info inline end "Drempelwaarde Grafiek Legenda (Threshold Graph Legend)"
    
            ![High Threshold Static Icon](../usage/img/high_threshold_static.png){width="15" style="vertical-align: middle;"}  Hoge Drempelwaarde (High Threshold)   
            ![Low Threshold Static Icon](../usage/img/low_threshold_static.png){width="15" style="vertical-align: middle;"}  Lage Drempelwaarde (Low Threshold)  
            <span style="color: #fe9607;">:fontawesome-solid-circle:</span>  Glucose Boven Bereik (Above Range)  
            <span style="color: #35c759;">:fontawesome-solid-circle:</span>  Glucose Binnen Bereik (In Range)  
            <span style="color: #ff3131;">:fontawesome-solid-circle:</span>  Glucose Onder Bereik (Below Range)      
            
        ![Static Color Graph](../usage/img/static_color_graph.png){width="300"}
        {align="center"}
        
    === "![Dynamic Glucose](../usage/img/dynamic_glucose.png){width="20" style="vertical-align: middle;"} Dynamische Glucose Kleur (Dynamic Glucose Color)"
    
        !!! info inline end "Drempelwaarde Grafiek Legenda"
    
            ![High Threshold Dynamic Icon](../usage/img/high_threshold_dynamic.png){width="15" style="vertical-align: middle;"}  Hoge Drempelwaarde (=180)  
            ![Low Threshold Dynamic Icon](../usage/img/low_threshold_dynamic.png){width="15" style="vertical-align: middle;"}  Lage Drempelwaarde (=70)  
            ![Above Target Icon](../usage/img/above_target_glucose_icon.png){width="15" style="vertical-align: middle;"}  Boven Doel (Above Target)  
            ![At Target Icon](../usage/img/at_or_near_target.png){width="15" style="vertical-align: middle;"}  Op of Nabij Doel (At or Near Target)  
            ![Below Target Icon](../usage/img/below_target_glucose_icon.png){width="15" style="vertical-align: middle;"}  Onder Doel (Below Target)  
            
            _*De kleuren van de drempelwaardenlijnen zijn ook dynamisch, dus de exacte kleuring hangt af van uw instellingen_ 
        
        ![Dynamic Color Graph](../usage/img/dynamic_color_graph.png){width="300"}
        {align="center"}
    
=== "Actieve Insuline & Koolhydraten (Active Insulin & Carbs)"
    Deze sectie toont de afname van uw actieve insuline en koolhydraten.  
    
    ![Active Insulin Carbs](../usage/img/active_ins_carb.png){width="300"}
    {align="center"}
    
    Insuline wordt getoond in <span style="color: #7d8cf2;">blauw</span> en koolhydraten worden getoond in <span style="color: #ff8340;">oranje</span>.
    
=== "Statistieken & Weergave Info (Stats & Display Info)"
    Hier vindt u 3 hoofdsecties voor statistieken en weergave-informatie.
    
    ![Stats and Display](../usage/img/stats_and_display.png){width="300"}
        {align="center"}
    
    === "Statistieken (Statistics)"
        Dit opent de statistiekenweergave. U kunt meer leren over de nieuwe statistiekenpagina [hier](features/statistics.md).
            
    === "Tijdsperiode (Time Frame)"
        Hiermee kunt u de tijdsperiode kiezen die wordt getoond in de grafiek.  
        De standaardwaarde is 6 uur, maar u kunt kiezen voor 4, 6, 12 of 24 uur om weer te geven.
            
    === "Legenda (Legend)"
        Door hierop te tikken wordt een gedetailleerde, in-app beschrijving geopend van elk item dat op de grafiek wordt getoond.

</div>

- - -

### Aanpassingsstatus (Adjustment Status)

Onder de grafiek vindt u de huidige status van eventuele momenteel actieve aanpassingen. Aanpassingen omvatten bolussen in uitvoering (boluses in progress), tijdelijke doelen (temp targets) en overschrijvingen (overrides).  
Gebruik de onderstaande tabbladen om meer te leren:    

<div class="grid" markdown>

=== "Geen Actieve Aanpassing (No Active Adjustment)"
    ![No Active Adjustment](../usage/img/no_active_adjustment.png){width="300"}
    {align="center"}
    
    - Dit is de standaardweergave wanneer er geen bolus-in-uitvoering, actieve overschrijving, of actief tijdelijk doel is
    
=== "![Bolus Active Icon](../usage/img/bolus_icon.png){width="10" style="vertical-align: middle;"} Bolus in Uitvoering (Bolus in Progress)"
    ![Bolus in Progress](../usage/img/bolus_in_progress.png){width="300"}
    {align="center"}
    
    - Toont de status van de huidige bolus
    - Druk op de ![Cancel Icon](../usage/img/x_square.png){width="20" style="vertical-align: middle;"} om de huidige bolus te annuleren
    
=== "![Override Icon](../usage/img/icon_override.png){width="15" style="vertical-align: middle;"} Actieve Overschrijving (Active Override)"
    ![Active Override](../usage/img/override_active.png){width="300"}
    {align="center"}
    
    - Toont details van de huidige actieve overschrijving
    - Druk op de ![Cancel Icon](../usage/img/x_square.png){width="20" style="vertical-align: middle;"} om de overschrijving te annuleren
    
=== "![Temp Target Icon](../usage/img/target.png){width="15" style="vertical-align: middle;"} Actief Tijdelijk Doel (Active Temp Target)"
    ![Active Temp Target](../usage/img/temp_target_active.png){width="300"}
    {align="center"}
    
    - Toont details van het huidige actieve tijdelijke doel
    - Druk op de ![Cancel Icon](../usage/img/x_square.png){width="20" style="vertical-align: middle;"} om het tijdelijke doel te annuleren

</div>

- - -

### Actieknoppen (Action Buttons)

Onderaan het scherm heeft u vijf actieknoppen. Gebruik de onderstaande tabbladen om meer te leren over elke sectie:  

![Trio Actions](../usage/img/actions.png){width="400"}
{align="center"}

<!-- Intentionally left off the "s" in the nested Adjustments tab title because it keeps jumping to the Adjustments tab above -->

<div class="grid" markdown>

=== "![Main Icon](../usage/img/icon_main.png){width="15" style="vertical-align: middle;"} Hoofd (Main)"
    Deze knop brengt u terug naar het startscherm, ongeacht waar u zich in de app bevindt.
    
=== "![History Icon](../usage/img/icon_history.png){width="15" style="vertical-align: middle;"} Geschiedenis (History)"
    Deze knop opent het Geschiedenisscherm. Hier vindt u eerdere behandelingen (treatments), maaltijdinvoeren, glucosemetingen & handmatige glucose-invoeren, en eerder gebruik van aanpassingen. Hier kunt u een vingerprik glucose-invoer toevoegen door op de "+" rechtsboven te tikken.  
    **Meer informatie over elk tabblad:**
    
    === "Behandelingen (Treatments)"
        - Scroll om eerder uitgevoerde Tijdelijke Basalen (Temp Basals), Bolussen en SMB's te zien
        - Veeg naar links om onjuiste bolus en SMB invoeren te verwijderen. U kunt geen Tijdelijke Basaal invoeren verwijderen
        
    === "Maaltijden (Meals)"
        - Scroll om eerder ingevoerde koolhydraat-, vet- en eiwitinvoeren te zien
        - Veeg naar links om onjuiste invoeren te bewerken of te verwijderen
        - Tik op "Show Future" of "Hide Future" om toekomstige koolhydraatinvoeren te tonen en te verbergen (Dit verwijdert ze niet, het stelt u alleen in staat ze wel of niet te zien)
        
    === "Glucose"
        - Scroll om eerdere glucosemetingen te zien
        - Veeg naar links om onjuiste invoeren te verwijderen
        - CGM metingen zijn gemarkeerd met "→" en vingerprik metingen zijn gemarkeerd met "🩸"
        
    === "Aanpassing (Adjustment)"
        - Scroll om eerdere tijdelijke doelen en overschrijvingen te zien die zijn uitgevoerd
        - Tijdelijke Doelen worden aangegeven met een groen doelicoon
        - Overschrijvingen worden aangegeven met een paars tijdicoon
        
=== "<span style="color: #7d8cf2;">:fontawesome-solid-circle-plus:</span> Koolhydraat & Bolus Invoer (Carb & Bolus Entry)"
    Deze knop opent het behandelingsinvoerscherm, ook wel bekend als de boluscalculator (bolus calculator).
    
=== "![Adjustments Icon](../usage/img/icon_adjust.png){width="15" style="vertical-align: middle;"} Aanpassingen (Adjustments)"
    Deze knop opent het Overschrijvingen en Tijdelijke Doelen scherm.  
    Meer informatie over elke optie:
    
    === "Overschrijvingen (Overrides)"
        - Voeg een overschrijving toe door op de "+" rechtsboven te tikken
        - Met een overschrijving kunt u:
            - Uw overschrijving een naam geven om deze op te slaan als voorinstelling (preset)
            - Basaal verhogen of verlagen met een percentage
            - Dat % wijziging toewijzen aan zowel ISF als CR, slechts één van beide, of geen van beide
            - Uw doelglucose overschrijven
            - Alle SMB's toestaan, uitschakelen of volgens schema uitschakelen
            - Uw Max SMB Basal Minutes en/of Max UAM Basal Minutes overschrijven
            - Voor onbepaalde tijd of voor een bepaalde tijdsduur inschakelen
        - U kunt het opslaan als voorinstelling om later uit te voeren of de overschrijving nu starten
            - Als u een vooringestelde overschrijving moet bewerken of verwijderen, veeg dan gewoon naar links op de overschrijving
        
    === "Tijdelijke Doelen (Temp Targets)"
        - Voeg een tijdelijk doel toe door op de "+" rechtsboven te tikken
        - Met een Tijdelijk Doel kunt u:
            - Uw tijdelijk doel een naam geven om deze op te slaan als voorinstelling
            - Uw tijdelijke doelglucose instellen
            - Instellen om nu of in de toekomst te starten
            - De duur van uw tijdelijk doel instellen
        - U kunt het opslaan als voorinstelling om later uit te voeren, het tijdelijke doel nu starten, of een starttijd instellen voor een toekomstig tijdstip en/of datum.
            - Als u een vooringesteld tijdelijk doel moet bewerken of verwijderen, veeg dan gewoon naar links op het tijdelijke doel
                
=== "![Settings Icon](../usage/img/icon_settings.png){width="15" style="vertical-align: middle;"} Instellingen (Settings)"
    Deze knop opent het instellingenmenu
    Hieronder vindt u (_binnenkort_) links naar elk van de instellingenpagina's binnen de docs die correleren met de menu's die u ziet:  
    - Gesloten Loop (Closed Loop)  
    - Apparaten (Devices)
    - Therapie (Therapy)  
    - Algoritme (Algorithm)  
    - Functies (Features)  
    - Meldingen (Notifications)  
    - Services  
    - Ondersteuning & Gemeenschap (Support & Community)  
    
</div>

- - -

