# CGM (Continue Glucose Monitor - Continue Glucosemeter)

Deze sectie stelt u in staat om uw glucosegegevensbron te kiezen. De meeste opties spreken voor zich. Voor meer informatie over compatibele CGM's, zie de volgende [link](../../../install/build/requirements/devices/cgm.md#compatible-cgm).

## Stap 1: CGM Toevoegen (Step 1: Add CGM)

De eerste stap in het instellen van uw continue glucosemeter (CGM - Continuous Glucose Monitor) op Trio is om op de "Add CGM" knop te tikken in het Apparaten Menu (Devices Menu)

![CGM Setup](../../../../configuration/settings/devices/img/cgm_setup.png)
{align=center}

## Stap 2: Selecteer Uw CGM (Step 2: Select Your CGM)

Selecteer uw CGM uit het in-app menu en uit de onderstaande opties voor stapsgewijze instructies. De links hieronder leiden u door de verbindingsinstructies voor uw specifieke CGM:

- [Dexcom G5/Dexcom G6/Dexcom ONE](#dexcom-g5-and-dexcom-g6dexcom-one)
- [Dexcom G7/Dexcom ONE+](#dexcom-g7dexcom-one)
- [Dexcom Share](#dexcom-share)
- [Freestyle Libre](#freestyle-libre)
- [Freestyle Libre Demo](#freestyle-libre-demo)
- [Glucose Simulator](#glucose-simulator)  
- [Medtronic Enlite](#medtronic-enlite)  
- [Nightscout als CGM (Nightscout as CGM)](#nightscout-als-cgm-nightscout-as-cgm)  
- [xDrip4iOS](#xdrip4ios)  

- - -

### Dexcom G5 and Dexcom G6/Dexcom ONE

Trio zal glucosewaarden onderscheppen tussen de zender en de Dexcom app. Als u een Dexcom G5, G6, of ONE sensor gebruikt, tik dan op Configuration CGM om het 6-cijferige ID van uw zender in te voeren. _Dexcom Share inloggegevens zijn niet nodig_. Wanneer u van zender wisselt, moet u uw huidige zender verwijderen uit Trio door op Configuration CGM te tikken, naar beneden te scrollen, en op Delete CGM te tikken. Zodra u dit doet, kunt u de nieuwe zender toevoegen met zijn Transmitter ID.

**Stap 3**
Voer uw 6-cijferige Dexcom zender ID in.

![Dexcom G5 G6 One](../../../../configuration/settings/devices/img/1_dexcom_g5_g6_setup.png){ width="300px"  }
{align=center}

**Stap 4**
Ga verder naar [Horloge Verbinden (Connect Watch)](smart-watch.md) _OF_ keer terug naar [Nieuwe Gebruiker Installatiegids (New User Setup)](../../new-user-setup.md)

- - -

### Dexcom G7/Dexcom ONE+

Zolang de Dexcom G7 of ONE+ app op dezelfde telefoon is geïnstalleerd, kan Trio de glucosewaarden onderscheppen. Wanneer een nieuwe G7 of ONE+ sensor wordt gekoppeld aan de Dexcom app, zal Trio deze automatisch beginnen uit te lezen.

**Stap 3**
Tik op "Continue" om de G7/ONE+ als uw CGM bron te gebruiken

![Dexcom G7 One+](../../../../configuration/settings/devices/img/1_dexcom_g7_setup.png){ width="300px"  }
{align=center}

**Stap 4**
Ga verder naar [Horloge Verbinden (Connect Watch)](smart-watch.md) _OF_ keer terug naar [Nieuwe Gebruiker Installatiegids (New User Setup)](../../new-user-setup.md)

- - -

### Dexcom Share

<!-- TODO: add information on Dexcom Share -->

- - -

### Freestyle Libre

Deze optie kan worden gebruikt om een compatibele Libre CGM direct te koppelen aan Trio zonder door een aparte app zoals xDrip4iOS te gaan.

**Stap 3**
Tik op "Libre 2 Direct" om Libre 2 sensoren te gebruiken of "Bluetooth Transmitters" om Libre 1 sensoren te gebruiken met een Miao Miao of andere externe zender.

![Libre Setup](../../../../configuration/settings/devices/img/1_libre_setup.png){ width="300px"  }
{align=center}

**Stap 4: Libre 2 Direct**
Tik op "Pair Sensor" om uw Libre 2/2+ sensor te verbinden met Trio

![Libre 2 Setup](../../../../configuration/settings/devices/img/2_libre2_pairing.png){ width="300px"  }
{align=center}

**Stap 4: Bluetooth Zenders (Libre 1)**
Selecteer uw externe zender uit de lijst van gevonden apparaten en tik op "Save"

![Libre 1 Setup](../../../../configuration/settings/devices/img/2_libre1_bluetooth_transmitter.png){ width="300px"  }
{align=center}

**Stap 5**
Ga verder naar [Horloge Verbinden (Connect Watch)](smart-watch.md) _OF_ keer terug naar [Nieuwe Gebruiker Installatiegids (New User Setup)](../../new-user-setup.md)

- - -

### Freestyle Libre Demo

<!-- TODO: add information on Libre Demo -->

**Stap 2**
Ga verder naar [Horloge Verbinden (Connect Watch)](smart-watch.md) _OF_ keer terug naar [Nieuwe Gebruiker Installatiegids (New User Setup)](../../new-user-setup.md)

- - -

### Glucose Simulator

!!! warning "Waarschuwing"
    Als u een Glucose Simulator gebruikt, is het belangrijk om te begrijpen:
     
    - U zult alleen de gebruikersinterface van Trio ervaren.
    - Het gebruik van een Glucose Simulator geeft niet aan hoe de app zal presteren, noch zal het nauwkeurige begeleiding of suggesties geven voor insulinedosering.
    - Een Glucose Simulator mag **NOOIT** worden gebruikt met een echte pomp verbonden aan een levend persoon of huisdier.
    - **Gebruik alleen een Glucose Simulator als u de bovenstaande voorwaarden begrijpt.**

**Stap 2**
Ga verder naar [Horloge Verbinden (Connect Watch)](smart-watch.md) _OF_ keer terug naar [Nieuwe Gebruiker Installatiegids (New User Setup)](../../new-user-setup.md)

- - -

### Medtronic Enlite

De Minimed Enlite CGM, beschikbaar met de Medtronic 522/722, 523/723, en 554/754, stuurt draadloos glucosewaarden naar de pomp. Trio kan de Medtronic CGM gegevens direct vanaf de pomp lezen met een RileyLink-compatibel apparaat.

**Stap 2**
Ga verder naar [Horloge Verbinden (Connect Watch)](smart-watch.md) _OF_ keer terug naar [Nieuwe Gebruiker Installatiegids (New User Setup)](../../new-user-setup.md)

- - -

### Nightscout als CGM (Nightscout as CGM)

Hoewel het gebruik van Nightscout als CGM een optie is, moet dit indien mogelijk worden vermeden omdat het Trio niet op de achtergrond houdt draaien zoals andere CGM opties.

**Stap 2**
Ga verder naar [Horloge Verbinden (Connect Watch)](smart-watch.md) _OF_ keer terug naar [Nieuwe Gebruiker Installatiegids (New User Setup)](../../new-user-setup.md)

- - -

### xDrip4iOS

Om xDrip4iOS als CGM bron te gebruiken, moet u deze zelf builden met hetzelfde Apple Developer account dat u heeft gebruikt om uw Trio app te builden. U kunt geen Shuggah of een versie gebruiken die is gedistribueerd via iemand anders's TestFlight. Zie het volgende voor instructies over hoe u xDrip4iOS zelf kunt builden: [link](../../../install/ecosystem/xdrip4ios.md)

Als u echter Dexcom G6 of ONE met xDrip4iOS gebruikt, kunt u de Dexcom G6 optie in Trio kiezen in plaats van xDrip4iOS, en Trio zal de glucosewaarden onderscheppen, zelfs als u Shuggah of iemand anders's TestFlight van xDrip4iOS gebruikt.

**Stap 2**
Ga verder naar [Horloge Verbinden (Connect Watch)](smart-watch.md) _OF_ keer terug naar [Nieuwe Gebruiker Installatiegids (New User Setup)](../../new-user-setup.md)

- - -

## Vloeiende Glucosewaarde (Smooth Glucose Value)
**Standaard:** _UIT (OFF)_  

Maakt CGM waarden vloeiender met behulp van Savitzky-Golay Filtering

<!-- Update with additional description of Savitzky-Golay filtering -->

- - -

