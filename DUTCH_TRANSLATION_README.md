# Nederlandse Vertaling - Trio Documentatie

## Overzicht

Dit project bevat Nederlandse vertalingen van de Trio documentatie. Het systeem is ontworpen om eenvoudig te zijn, geen extra plugins te vereisen, en snelle wisseling tussen Engelse en Nederlandse versies mogelijk te maken.

## Implementatie

### Structuur

De Nederlandse vertalingen bevinden zich in de `/docs/nl/` directory, parallel aan de Engelse documentatie in `/docs/`. Deze structuur:

- ✅ Vereist geen extra MkDocs plugins
- ✅ Maakt directe URL toegang mogelijk (bijv. `triodocs.org/nl/usage/interface.md`)
- ✅ Behoudt identieke bestandsstructuur voor gemakkelijk onderhoud
- ✅ Zorgt dat relatieve links blijven werken

```
docs/
├── index.md (Engels)
├── usage/
│   ├── index.md
│   ├── interface.md
│   └── concepts/
│       ├── basal-rates.md
│       ├── isf.md
│       └── carb-ratios.md
└── nl/ (Nederlands)
    ├── index.md
    ├── usage/
    │   ├── index.md
    │   ├── interface.md
    │   └── concepts/
    │       ├── basal-rates.md
    │       ├── isf.md
    │       └── carb-ratios.md
    ...
```

### Taalwisselaar

Een eenvoudige JavaScript taalwisselaar (`language-switcher.js`) toont een zwevende knop in de rechterbovenhoek waarmee gebruikers kunnen schakelen tussen:

- 🇬🇧 **English** - Standaard (Engels)
- 🇳🇱 **Nederlands** - Nederlandse vertaling

De wisselaar:
- Detecteert automatisch de huidige taal op basis van de URL
- Behoudt de huidige pagina bij het schakelen (bijv. `/usage/concepts/isf.md` ↔ `/nl/usage/concepts/isf.md`)
- Is responsive en past zich aan op mobiele apparaten
- Vereist geen externe dependencies

### Vertaalrichtlijnen

De vertaling volgt strikte richtlijnen die zijn gedocumenteerd in `DUTCH_TRANSLATION_GLOSSARY.md`:

#### 1. **Engelse Termen Tussen Haakjes**

Bij elk nieuw hoofdstuk of eerste vermelding in een sectie worden Engelse termen tussen haakjes toegevoegd, omdat de Trio app zelf in het Engels is:

```markdown
# Basaalstanden (Basal Rates)

## Wat Zijn Basaalstanden (Basal Rates)?

Basaalstanden (basal rates) zijn de fundamentele insulinetoedieningsinstellingen...
```

#### 2. **Afkortingen Behouden + Nederlandse Vertaling**

Veelgebruikte afkortingen worden in het Engels behouden, met Nederlandse vertaling bij eerste gebruik:

- **IOB** blijft IOB, maar met uitleg: "IOB (Insulin on Board - Insuline aan Boord)"
- **COB** blijft COB, maar met uitleg: "COB (Carbs on Board - Koolhydraten aan Boord)"
- **ISF** blijft ISF, maar met uitleg: "ISF (Insulin Sensitivity Factor - Insuline Gevoeligheidsfactor)"
- **CR** blijft CR, maar met uitleg: "CR (Carb Ratio - Koolhydraatratio)"
- **SMB** blijft SMB (Super Micro Bolus)
- **TDD** blijft TDD (Total Daily Dose - Totale Dagelijkse Dosis)

#### 3. **Technische Termen en Eigennamen**

- **Eigennamen** blijven Engels: Trio, OpenAPS, Autosens, Nightscout, Loop, Omnipod, Medtronic
- **Feature namen** blijven Engels: Dynamic ISF, Autotune, Temp Target, Override
- **UI elementen** worden vertaald waar logisch: "Settings" → "Instellingen", "Main Screen" → "Hoofdscherm"

#### 4. **Eenheden**

Eenheden blijven identiek voor internationale consistentie:
- mg/dL, mmol/L, g (gram), U/hr (of E/u in Nederlands)

#### 5. **Links en Referenties**

Links worden aangepast om naar de juiste taalversie te verwijzen:

**Engels:**
```markdown
[Basal Rates](usage/concepts/basal-rates.md)
```

**Nederlands:**
```markdown
[Basaalstanden (Basal Rates)](usage/concepts/basal-rates.md)
```

Externe links (GitHub, Discord, etc.) blijven onveranderd.

#### 6. **Afbeeldingen en Media**

Afbeeldingen worden NIET gekopieerd naar de `/nl/` directory. In plaats daarvan verwijzen Nederlandse bestanden naar de originele Engelse afbeeldingen met aangepaste relatieve paden:

**Engels (in `/docs/usage/interface.md`):**
```markdown
![Trio Main Screen](img/light_mode_sections.png){width="500"}
```

**Nederlands (in `/docs/nl/usage/interface.md`):**
```markdown
![Trio Hoofdscherm](../usage/img/light_mode_sections.png){width="500"}
```

**Belangrijk:** Het pad moet één directory omhoog (`../`) om uit `/nl/` te komen, en dan naar de originele locatie verwijzen.

**Voorbeelden voor verschillende locaties:**

- Van `/docs/nl/usage/interface.md` → gebruik `../usage/img/`
- Van `/docs/nl/configuration/new-user-setup.md` → gebruik `../configuration/img/`
- Van `/docs/nl/configuration/settings/therapy/basal-rates.md` → gebruik `../../../../configuration/settings/therapy/img/`
- Van `/docs/nl/configuration/settings/devices/pump.md` → gebruik `../../../../configuration/settings/devices/img/`
- Van `/docs/nl/index.md` → gebruik `assets/images/` (geen `../` nodig op root niveau)
- Van `/docs/nl/usage/index.md` → gebruik `../../assets/images/`
- Van `/docs/nl/usage/concepts/index.md` → gebruik `../../../assets/images/`

**Formule:** Tel hoeveel directories diep je zit onder `/docs/nl/`, dat is het aantal `../` dat je nodig hebt om terug te gaan naar `/docs/`.

**Video's** werken hetzelfde, maar let op absolute paden die beginnen met `/`:
```markdown
<source src="/configuration/img/trio-phone-mockup.mp4" type="video/mp4">
```
Deze absolute paden hoeven NIET aangepast te worden.

## Vertaalstatus

### Voltooid ✅

**Kern Documentatie:**
- ✅ `/nl/index.md` - Hoofdpagina
- ✅ `/nl/usage/index.md` - Gebruik overzicht
- ✅ `/nl/usage/concepts/index.md` - Kernconcepten overzicht
- ✅ `/nl/usage/concepts/basal-rates.md` - Basaalstanden (volledig)
- ✅ `/nl/usage/concepts/isf.md` - Insuline Gevoeligheidsfactor (volledig)
- ✅ `/nl/usage/concepts/carb-ratios.md` - Koolhydraatratio's (volledig)
- ✅ `/nl/help/index.md` - Hulp overzicht
- ✅ `/nl/help/glossary.md` - Begrippenlijst
- ✅ `/nl/resources/citations.md` - Bronnen
- ✅ `/nl/configuration/index.md` - Configuratie overzicht

**Includes (Herbruikbare Componenten):**
- ✅ `/nl/includes/supported-cgms.md` - Ondersteunde CGM's
- ✅ `/nl/includes/supported-iphones.md` - Ondersteunde iPhones
- ✅ `/nl/includes/version-compatibility-matrix.md` - Versie compatibiliteitsmatrix

**Infrastructuur:**
- ✅ `DUTCH_TRANSLATION_GLOSSARY.md` - Uitgebreide vertaalwoordenlijst
- ✅ `language-switcher.js` - Taalwisselaar
- ✅ `mkdocs.yml` - Bijgewerkt met taalondersteuning

### Nog Te Vertalen 📝

**Usage:**
- 📝 `/nl/usage/interface.md` - Gebruikersinterface
- 📝 `/nl/usage/features/*.md` - Alle features documenten

**Configuration:**
- 📝 `/nl/configuration/new-user-setup.md` - Nieuwe gebruiker installatiegids
- 📝 `/nl/configuration/settings/*.md` - Alle instellingen documenten
- 📝 `/nl/configuration/migration/*.md` - Migratiegidsen

**Help:**
- 📝 `/nl/help/faq.md` - Veelgestelde vragen
- 📝 `/nl/help/safety.md` - Veiligheid
- 📝 `/nl/help/troubleshoot.md` - Probleemoplossing
- 📝 `/nl/help/share-logs.md` - Logboeken delen

## Hoe Verder Te Gaan Met Vertalen

### Stap 1: Lees de Vertaalwoordenlijst

Raadpleeg altijd `DUTCH_TRANSLATION_GLOSSARY.md` voor consistente vertalingen van:
- Medische termen
- Technische termen
- UI elementen
- Abbreviaties

### Stap 2: Volg het Sjabloon

Voor elk nieuw bestand:

1. **Kopieer de structuur** van het Engelse bestand
2. **Vertaal de inhoud** volgens de richtlijnen
3. **Voeg Engelse termen toe** tussen haakjes bij eerste gebruik
4. **Behoud afkortingen** met Nederlandse uitleg
5. **Pas links aan** naar de nl/ directory waar nodig
6. **Test de links** om te zorgen dat ze werken

### Stap 3: Voorbeeld Vertaalpatroon

**Engels:**
```markdown
# Basal Rates

Basal rates are your background insulin delivery...

## What Are Basal Rates?

Your ISF and CR interact with basal rates...
```

**Nederlands:**
```markdown
# Basaalstanden (Basal Rates)

Basaalstanden (basal rates) zijn uw achtergrondinsulinetoediening...

## Wat Zijn Basaalstanden (Basal Rates)?

Uw ISF (Insulin Sensitivity Factor - Insuline Gevoeligheidsfactor) en 
CR (Carb Ratio - Koolhydraatratio) interacteren met basaalstanden...
```

### Stap 4: Testen

Na het vertalen van een nieuw bestand:

1. **Build de documentatie** lokaal: `mkdocs serve`
2. **Controleer de Nederlandse pagina** op `http://localhost:8000/nl/[pad-naar-pagina]`
3. **Test de taalwisselaar** door tussen Engels en Nederlands te schakelen
4. **Verifieer alle links** binnen de pagina

## Onderhoud

### Bij Updates van Engelse Documentatie

Wanneer de Engelse documentatie wordt bijgewerkt:

1. Identificeer welke Nederlandse bestanden moeten worden gesynchroniseerd
2. Vergelijk de wijzigingen in de Engelse versie
3. Pas dezelfde inhoudelijke wijzigingen toe op de Nederlandse versie
4. Behoud de vertaalrichtlijnen en terminologie

### Consistentie Controle

Periodiek:

1. Controleer dat alle Engelse termen consistent tussen haakjes staan
2. Verifieer dat afkortingen (IOB, COB, ISF, CR) correct worden uitgelegd
3. Zorg dat de bestandsstructuur identiek blijft tussen `/docs/` en `/docs/nl/`
4. Test de taalwisselaar op verschillende pagina's

## Technische Details

### mkdocs.yml Configuratie

De `mkdocs.yml` is bijgewerkt met:

```yaml
extra:
  alternate:
    - name: English
      link: /
      lang: en
    - name: Nederlands
      link: /nl/
      lang: nl

extra_javascript:
  - assets/javascripts/language-switcher.js
```

### Taalwisselaar JavaScript

De `language-switcher.js`:
- Detecteert huidige taal via URL path
- Creëert een zwevende knop
- Vertaalt URLs tussen talen
- Is responsive voor mobiel

### URL Structuur

- **Engels:** `https://triodocs.org/usage/concepts/basal-rates.md`
- **Nederlands:** `https://triodocs.org/nl/usage/concepts/basal-rates.md`

## Bijdragen

### Voor Vertalers

Als u wilt bijdragen aan de vertaling:

1. Kies een bestand uit de "Nog Te Vertalen" lijst
2. Volg de richtlijnen in dit document
3. Raadpleeg `DUTCH_TRANSLATION_GLOSSARY.md` voor terminologie
4. Test uw vertaling lokaal
5. Dien een Pull Request in

### Voor Reviewers

Bij het reviewen van vertalingen, controleer:

- ✅ Engelse termen tussen haakjes bij eerste gebruik
- ✅ Correcte afkortingen (IOB, COB, ISF, CR) met Nederlandse uitleg
- ✅ Medische nauwkeurigheid
- ✅ Consistentie met `DUTCH_TRANSLATION_GLOSSARY.md`
- ✅ Werkende links
- ✅ Natuurlijke, leesbare Nederlandse tekst

## Contact en Ondersteuning

Voor vragen over de Nederlandse vertaling:
- Open een issue op [GitHub](https://github.com/nightscout/trio-docs/issues)
- Vraag om hulp op [Discord](https://discord.gg/FnwFEFUwXE)
- Neem contact op met de Trio gemeenschap

## Licentie

Deze vertalingen vallen onder dezelfde licentie als de Trio documentatie.

## Dankbetuigingen

Dank aan alle vrijwilligers die bijdragen aan het vertalen en onderhouden van deze documentatie voor de Nederlandstalige diabetes gemeenschap.

