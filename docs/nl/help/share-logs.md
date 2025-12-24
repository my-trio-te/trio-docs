
# Trio Logs Delen (Sharing Trio Logs)


De "*Share Logs*" functie stelt u in staat om de logs van de app (van vandaag en gisteren) te exporteren 
en opent het iOS deelscherm zodat u ze kunt verzenden naar ondersteuningskanalen, ontwikkelaars, of opslagdiensten voor probleemoplossing en archivering.

!!! tip "Controleer bestaande oplossingen (Check existing solutions)"
    
    Wanneer u tegen een probleem aanloopt en uw logs wilt delen, neem alstublieft even de tijd om te controleren of het al is opgelost door te bladeren door [Facebook](https://facebook.triodocs.org/) of [Discord](https://discord.triodocs.org/) eerst.

Volg de onderstaande stappen om de logs op te slaan en te delen.

## Logs Exporteren (Export Logs)

- Vanuit de **Trio** app,  
  tik **`⚙️ Settings › Support & Communities › Share Logs`**
- Gebruik het standaard **iOS deelscherm** om deze bestanden te verzenden via Mail, cloud-opslag apps, of elke andere bestemming beschikbaar in het deelscherm.

Zodra u de logs heeft geëxporteerd, kunt u ze delen waar nodig.

## Logs Delen (Share Logs)

Logs worden het meest gedeeld in de volgende gevallen:

- **Community probleemoplossing (Community troubleshooting)**:  
    Post logs naar het Trio [`#bug-reports`](https://discord.com/channels/1020905149037813862/1239982832026255521) kanaal op **Discord** of relevante **Facebook** groepen wanneer vrijwilligers erom vragen om te helpen een probleem te diagnosticeren.  
      
    !!! tip "Bestandsgrootte limieten overwinnen: Comprimeer Logs (Overcoming file size limits: Compress Logs)"
        
        Als Discord of Facebook klaagt over de bestandsgrootte wanneer u de logs uploadt, **[comprimeer ze](#logs-comprimeren-compressing-logs)** in een archief voordat u ze verzendt.

- **Ontwikkelaar bug rapporten (Developer bug reports)**: Wanneer gevraagd, voeg logs toe aan een [**GitHub issue**](https://github.com/nightscout/Trio/issues/new/choose) zodat ontwikkelaars ze kunnen gebruiken om het probleem te reproduceren, onderzoeken en oplossen.

## Logs Comprimeren (Compressing Logs)

*Discord* en *Facebook* zullen uw **bestandsupload** **afwijzen** als het **groter is dan 25 MB**.  
In dit geval moet u eerst de logbestanden comprimeren in een archief voordat u ze verzendt.

De volgende secties beschrijven hoe dit te doen op [Windows](#logs-comprimeren-op-windows-compress-logs-on-windows) en [macOS](#logs-comprimeren-op-macos-compress-logs-on-macos).

### Logs Comprimeren op Windows (Compress Logs on Windows)

Om de logbestanden te comprimeren op *Windows*, kunt u ofwel een [grafische applicatie](#logs-comprimeren-op-windows-met-een-grafische-applicatie-compress-logs-on-windows-with-a-graphical-application) of de [terminal](#logs-comprimeren-op-windows-in-de-terminal-compress-logs-on-windows-in-the-terminal) gebruiken.

#### Logs Comprimeren op Windows met een Grafische Applicatie (Compress Logs on Windows with a Graphical Application)

1. Start de Windows **File Explorer** 
2. **Selecteer Logbestanden (Select Log Files)**  
    - Navigeer naar de map met de logbestanden.
    - Houd ++control++ vast en **klik** `log.txt`.
    - Houd ++control++ vast en **klik** `log_prev.txt`.
3. **Compressie (Compression)**  
    - Klik met de rechtermuisknop op een geselecteerd bestand
    - Selecteer `Send to` in het contextuele menu.
	    - Selecteer `Compressed (zipped) folder`.
4. **Naam Archief (Name Archive)**  
    - Typ `triologs.zip` en druk op **++enter++**.
    

#### Logs Comprimeren op Windows in de Terminal (Compress Logs on Windows in the Terminal)

Als u niet comfortabel bent met het gebruik van de **command line in een terminal** op *Windows*, overweeg dan een [grafische applicatie](#logs-comprimeren-op-windows-met-een-grafische-applicatie-compress-logs-on-windows-with-a-graphical-application) te gebruiken; anders, blijf lezen.

Kies uw favoriete Windows Shell hieronder **PowerShell** of "**Command Prompt (CMD)**", volg dan de instructies.

<div class="grid" markdown>


=== "PowerShell"

    1. **Open PowerShell**:  
        - Klik met de rechtermuisknop op het `Start menu`
	    - Selecteer `Windows PowerShell`.
    2. **Navigeer naar Logmap (Navigate to Log Folder)**:  
         ```powershell
         cd $HOME\Downloads
         ```
        Vervang `$HOME/Downloads` met de map waar u de logbestanden heeft gedownload.
    3. **Voer Compressie Commando Uit (Run Compression Command)**:  
        ```powershell
        Compress-Archive -Path log.txt, log_prev.txt -DestinationPath triologs.zip
        ```
        waar:
        - `-Path` wordt gevolgd door de te comprimeren bestanden.
        - `-DestinationPath` wordt gevolgd door de naam van het ZIP archiefbestand.
    4. **Verifieer Archief (Verify Archive)**:  
        Een nieuw `triologs.zip` archiefbestand verschijnt in dezelfde map.


=== "Command Prompt (CMD)"
    
    1. **Open Command Prompt**:  
        - Klik op het `Start menu`
	    - Typ `cmd`.
	    - Druk op ++enter++.
    2. **Navigeer naar Logmap (Navigate to Log Folder)**:  
         ```bat
         cd %USERPROFILE%\Downloads
         ```
               Vervang `%USERPROFILE%\Downloads` met de map waar u de logbestanden heeft gedownload.
    3. **Voer Compressie Commando Uit (Run Compression Command)**:   
         ```bat
         tar -a -c -f triologs.zip log.txt log_prev.txt
         ```
         waar:
         - `tar` is het archivering hulpprogramma.
         - `-a` selecteert het archiefformaat op basis van de bestandsextensie (`.zip` in dit geval).
         - `-c` maakt een nieuw archief.
         - `-f` wordt gevolgd door de naam van het archiefbestand.
         - `log.txt log_prev.txt` zijn de bestanden om in het archief op te nemen.
    4. **Verifieer het Archief (Verify the Archive)**:  
        Een nieuw `triologs.zip` archiefbestand verschijnt in dezelfde map.

    
</div>


### Logs Comprimeren op macOS (Compress Logs on macOS)

Om de logbestanden te comprimeren op een *Mac*, kunt u ofwel een [grafische applicatie](#logs-comprimeren-op-macos-met-een-grafische-applicatie-compress-logs-on-macos-with-a-graphical-application) of de [terminal](#logs-comprimeren-op-macos-in-de-terminal-compress-logs-on-macos-in-the-terminal) gebruiken.

#### Logs Comprimeren op macOS met een Grafische Applicatie (Compress Logs on macOS with a Graphical Application)

1. Start de **`Finder`** applicatie
2. **Selecteer Logbestanden (Select Log Files)**:
      - Houd ++command++ vast en **klik** `log.txt` 
	- Houd ++command++ vast en **klik** `log_prev.txt`.  
3. **Compressie (Compression)**:
    - Klik met de rechtermuisknop op de blauw gemarkeerde lijnen.
    - Selecteer **`Compress`** in het contextuele menu.
4. **Naam Archief (Name Archive)**:  
    - Een `Archive.zip` bestand verschijnt.
    - Hernoem het naar `triologs.zip`.

#### Logs Comprimeren op macOS in de Terminal (Compress Logs on macOS in the Terminal)

Als u niet comfortabel bent met het gebruik van de **command line in een terminal** op uw Mac, overweeg dan een [grafische applicatie](#logs-comprimeren-op-macos-met-een-grafische-applicatie-compress-logs-on-macos-with-a-graphical-application) te gebruiken; anders, blijf lezen:

1. **Start Terminal (Launch Terminal)**:
    - Druk op ++command+space++
    - Typ **`Terminal`** 
    - Druk op ++enter++
2. **Navigeer naar Downloads Map (Navigate to Downloads Folder)**:  
    ```shell
    cd ~/Downloads
    ```
    Vervang `~/Downloads` met de map waar u de logbestanden heeft gedownload.
3. **Maak Archief (Create Archive)**:
   Om het archief te maken, kunt u `zip` of `tar` gebruiken.
    ```shell
    zip triologs.zip log.txt log_prev.txt
    ```
    Als deze methode niet werkt omdat `zip` niet is geïnstalleerd, kunt u het als volgt installeren:
    ```shell
    xcode-select --install
    ```
    U kunt ook de *tar gzip* **alternatieve** methode gebruiken om de logbestanden te comprimeren:
    ```shell
    tar -czf triologs.tar.gz log.txt log_prev.txt
    ```


