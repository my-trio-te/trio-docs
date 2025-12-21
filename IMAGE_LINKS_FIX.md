# Afbeeldingslinks Fix - Nederlandse Vertaling

## Probleem

De afbeeldingslinks in de Nederlandse vertaling werkten niet omdat de Nederlandse bestanden in `/docs/nl/` staan maar naar afbeeldingen verwezen alsof ze in dezelfde directory als de Engelse bestanden staan.

## Oplossing

Alle afbeeldingslinks zijn aangepast om correct naar de originele Engelse afbeeldingen te verwijzen met relatieve paden die één directory omhoog gaan (`../`).

### Voorbeelden van Correcties

**Voor:**
```markdown
![Trio Main Screen](img/light_mode_sections.png){width="500"}
```

**Na:**
```markdown
![Trio Hoofdscherm](../usage/img/light_mode_sections.png){width="500"}
```

### Aangepaste Bestanden

1. **`/docs/nl/usage/interface.md`** - 29 afbeeldingslinks gecorrigeerd
2. **`/docs/nl/configuration/new-user-setup.md`** - 7 afbeeldingslinks gecorrigeerd
3. **`/docs/nl/index.md`** - 2 media links gecorrigeerd
4. **`/docs/nl/help/index.md`** - 1 logo link gecorrigeerd
5. **`/docs/nl/configuration/index.md`** - 1 logo link gecorrigeerd

### Verificatie

Alle links zijn geverifieerd met:
```bash
find docs/nl -name "*.md" -exec grep -l '!\[.*\](img/' {} \;
```
Resultaat: Geen bestanden meer met verkeerde paden ✅

### Richtlijnen voor Toekomstige Vertalingen

**Afbeeldingspaden per locatie:**

- Van `/docs/nl/usage/interface.md` → `../usage/img/filename.png`
- Van `/docs/nl/configuration/new-user-setup.md` → `../configuration/img/filename.png`
- Van `/docs/nl/index.md` → `assets/images/filename.png`
- Van `/docs/nl/usage/index.md` → `../../assets/images/filename.png`
- Van `/docs/nl/usage/concepts/index.md` → `../../../assets/images/filename.png`

**Absolute paden** die beginnen met `/` hoeven NIET aangepast te worden.

## Documentatie Updates

De `DUTCH_TRANSLATION_README.md` is bijgewerkt met een nieuwe sectie "**6. Afbeeldingen en Media**" die deze richtlijnen documenteert voor toekomstige vertalers.

