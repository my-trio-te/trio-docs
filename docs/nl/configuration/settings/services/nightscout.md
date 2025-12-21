# Visualisatie en Monitoring (Visualization and Monitoring) ✏️

!!! tip "Belangrijkste punten (Highlights)"
    - *Nightscout* is optioneel maar wordt aangemoedigd
    - *Nightscout* is een nuttig hulpmiddel voor gegevensanalyse en volgers (followers)
    - Creëer een *Nightscout* server en voer uw URL en `API_SECRET` in *Trio* in.  
      Test de verbinding en schakel `Allow Uploading to Nightscout` in.

## Nightscout Introductie (Nightscout Introduction)

[Nightscout](http://nightscout.info) (NS) is een open-source project dat realtime toegang tot CGM gegevens mogelijk maakt via een persoonlijke website, smartwatch viewers, of apps en widgets beschikbaar voor smartphones. Het opzetten van een *Nightscout* web app wordt aanbevolen om uw *Trio* gesloten loop te visualiseren.

*Nightscout* stelt een gebruiker in staat om CGM gegevens van verschillende bronnen te uploaden naar een online database en cloud computing dienst. De informatie wordt vervolgens verwerkt en visueel weergegeven als een grafiek. Plugins maken het ook mogelijk om meer informatie over *Trio* te tonen.

Zelfs als u ervoor kiest om uw *Nightscout* site niet te delen met een andere persoon, zal het nuttig voor u zijn om te visualiseren wat de loop doet en wat het heeft gedaan, plus het genereren van nuttige rapporten voor het begrijpen van uw gegevens.

[Voor hulp bij het maken van een Nightscout account, zie de OpenAPS documentatie.](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/nightscout-setup.html)

## Trio Installatie (Trio Setup)

Om uw *Nightscout* verbinding in te schakelen:

- voer uw ***Nightscout* URL** in, inclusief de `https://` en uw **`API_SECRET`**.
- Schakel **`Allow Uploading to Nightscout`** in zodat *Trio* zijn voorspellingen en instellingen kan delen met *Nightscout*.

!!! important "Een Nightscout URL begint met httpS://"
    
     Uw *Nightscout* URL moet beginnen met `https://`.  
     Om dit correct in te stellen, vergeet niet de letter `s` tussen `http` en `://`.

