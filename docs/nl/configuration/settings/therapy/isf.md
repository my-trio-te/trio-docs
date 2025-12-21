# Insuline Gevoeligheidsfactor (Insulin Sensitivity Factor / ISF)

<!-- TODO: Update section with instructions and screenshots on how to enter basal profiles into the user's basal schedule -->

!!! tip "Belangrijkste punten (Highlights)"
    
	 - ISF is de meest problematische instelling voor nieuwe loopers.
	 - ISF kan worden overgenomen van uw pomp om mee te starten.
	 - Pas ISF aan door een correctie uit te voeren en te zien hoever uw glucose in 4 uur daalt.

ISF (Insulin Sensitivity Factor - Insuline Gevoeligheidsfactor), ook wel insuline correctiefactor (ICF - Insulin Correction Factor) genoemd, verwijst naar de hoeveelheid bloedglucose in mmol/L (of mg/dL, afhankelijk van uw instellingen) die één eenheid insuline kan neutraliseren.

??? question "Bill heeft een ISF van 50 (dit wordt ook in steno geschreven als een ISF van 50 mg/dL/E (2,8 mmol/L/E)). Dit betekent dat 1 E snelwerkende insuline Bill's suiker met 50 mg/dL (2,8 mmol/L) zal laten dalen. Hoeveel eenheden insuline zou Bill nodig hebben om zijn doelglucose van 100 te bereiken als zijn huidige glucosewaarde 250 mg/dL (13,9 mmol/L) is?"
    
    ??? info "Hier is de formule die u nodig heeft:"
    
        $$
        \frac{Huidige\ Glucose - Glucose\ Doel}{I S F}
        $$

    ??? note "Bereken Bill's Insulinedosis:"
    
        $$
        \frac{250-100}{50}=
        $$
        
        $$
        \frac{150}{50}=
        $$
        
        $$
        3\ eenheden
        $$
        
    ??? success "Antwoord"
        Bill heeft 3 eenheden insuline nodig om zijn doelglucose van 100 mg/dL te bereiken.

Net als basaalstanden wordt ISF niet letterlijk gebruikt door Trio maar aangepast over tijd naarmate gegevens over de patiënt worden verzameld. Toch is het belangrijk om ISF zo nauwkeurig mogelijk in te stellen voor een goede Trio functie.

Het is veilig om uw ISF over te nemen van uw pompinstellingen. Merk op dat bijna alle problemen bij het starten met Trio het gevolg zijn van een verkeerd ingestelde ISF. Als u merkt dat u lage waarden heeft bij correcties, of als u SMB/UAM aan heeft staan en de applicatie te veel insuline toedient, wat resulteert in een achtbaan patroon, is uw ISF waarschijnlijk de oorzaak.

- - -

## Uw ISF Testen/Aanpassen (Testing/Adjusting Your ISF)

### Basislijnberekening (Baseline Calculation)

Als uw huidige ISF dichtbij is, maar enige testen en aanpassing nodig heeft, spring dan naar de [volgende sectie](#isf-testen-isf-testing).

Als uw huidige ISF onnauwkeurig is of u niet zeker weet waar te beginnen, zijn de aanpassingen in Trio gebaseerd op formules ontwikkeld door Walsh, et.al. en kunnen u helpen een startpunt te vinden om vervolgens uw ISF te testen of aan te passen.

!!! warning "Waarschuwing"
    Deze berekening moet worden gebruikt als startpunt voor testen en wordt niet als definitief of exact beschouwd.
    
<!-- TODO: Add description and formulas from Walsh-->
<!-- TODO: Add Bill Example Question to calculate -->

### ISF Testen (ISF Testing)

<!-- TODO: Add description -->

### ISF Aanpassing (ISF Adjustment)

<!-- TODO: Update description -->

Er zijn een paar manieren waarop u uw ISF kunt aanpassen. De gemakkelijkste methode is simpelweg uzelf naar een hogere glucose te brengen met een glucosetablet of een tijd te kiezen waarop u "vast zit" hoger dan uw doel, en dan te corrigeren op basis van uw ISF. Als u na 4 uur hoger bent dan uw doel, maak uw ISF agressiever door de waarde te _VERLAGEN_. Als u na 4 uur lager bent dan uw doel, maak uw ISF minder agressief door de waarde te _VERHOGEN_.

- - -

## Hoe Uw ISF in Trio Invoeren (How To Enter Your ISF Into Trio)

### Stap 1 (Step 1)

Open het ISF Profiel scherm (ISF Profile screen)

![ISF Profile Menu](../../../../configuration/settings/therapy/img/isf_profile_menu.png){ width="600px"  }
{align=center}

### Stap 2 (Step 2)

Tik op de "Add Rate +" knop rechtsboven totdat u het aantal ISF's heeft dat u nodig heeft. Bewerk vervolgens elke waarde door op de pijl rechts van de ISF te tikken.

![Add Edit ISF](../../../../configuration/settings/therapy/img/edit_isf_profile.png){ width="300px"  }
{align=center}

### Stap 3 (Step 3)

Pas de waarde aan

![Edit ISF Rate](../../../../configuration/settings/therapy/img/set_isf_rate.png){ width="600px"  }
{align=center}

### Stap 4 (Step 4)

Pas de tijd aan

![Edit ISF Time](../../../../configuration/settings/therapy/img/set_isf_time.png){ width="600px"  }
{align=center}

### Stap 5 (Step 5)

Herhaal Stappen [2](#stap-2-step-2), [3](#stap-3-step-3), en [4](#stap-4-step-4) totdat alle ISF's zijn ingesteld

### Een ISF Invoer Verwijderen (Delete an ISF Entry)

Als u een ISF invoer moet verwijderen, veeg dan gewoon naar links op de waarde die u wilt verwijderen.

![Delete ISF](../../../../configuration/settings/therapy/img/5_delete_profile.png){ width="300px"  }
{align=center}

### Stap 6 **BELANGRIJK** (Step 6 **IMPORTANT**)

Sla uw wijzigingen op!

![Save Changes](../../../../configuration/settings/therapy/img/save_isf_profile.png){ width="300px"  }
{align=center}

### Stap 7 (Step 7)

Keer terug naar [Nieuwe Gebruiker Installatiegids (New User Setup)](../../new-user-setup.md)

