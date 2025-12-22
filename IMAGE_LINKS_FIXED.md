# ✅ Image Links and Section Anchors Fixed

## Summary

Fixed all broken image links and section anchor references in the Dutch `new-user-setup.md` file.

## Problem Identified

The Dutch file is located at `/docs/nl/configuration/new-user-setup.md`, which is **one level deeper** than the English file at `/docs/configuration/new-user-setup.md`. This caused all relative paths to be incorrect.

## Files Modified

### `/docs/nl/configuration/new-user-setup.md`

#### 1. Image Path Fixes (7 images)
All image paths changed from `../configuration/img/` to `../../configuration/img/`:

- `onboarding-guide.png`
- `unitsandlimits.png` (2 occurrences)
- `pumpMenu.png`
- `TherapyMenu.png`
- `closeLoop.png`
- `icon_selection.png`

#### 2. Install Guide Path Fixes (2 links)
Changed from `../install/` to `../../install/`:

- Mac build guide: `../../install/build/mac/overview.md`
- Browser build guide: `../../install/build/browser/browser-build-overview.md`

#### 3. Section Anchor Fixes (4 links)
Updated links to use translated section headers instead of English-only anchors:

**Before:**
- `glucose-targets.md#how-to-enter-your-glucose-targets-into-trio`
- `basal-rates.md#how-to-enter-your-basal-profiles-into-trio`
- `carb-ratios.md#how-to-enter-your-carb-ratios-cr-into-trio`
- `isf.md#how-to-enter-your-isf-into-trio`

**After:**
- `glucose-targets.md#hoe-uw-glucosedoelen-in-trio-invoeren-how-to-enter-your-glucose-targets-into-trio`
- `basal-rates.md#hoe-uw-basaalprofielen-in-trio-invoeren-how-to-enter-your-basal-profiles-into-trio`
- `carb-ratios.md#hoe-uw-koolhydraatratioscr-in-trio-invoeren-how-to-enter-your-carb-ratios-into-trio`
- `isf.md#hoe-uw-isf-in-trio-invoeren-how-to-enter-your-isf-into-trio`

## Verification

### Working Pages (Already Deployed)
✅ https://my-trio-te.github.io/trio-docs/nl/configuration/settings/therapy/glucose-targets/
✅ https://my-trio-te.github.io/trio-docs/nl/configuration/settings/therapy/basal-rates/

These pages show that:
- Images load correctly with `../../../../configuration/settings/therapy/img/` paths
- Section anchors include both Dutch and English text

### Pending Deployment
The fixes in `new-user-setup.md` are complete and ready to be deployed. Once deployed:
- All images will load correctly
- All section anchor links will work properly
- All install guide links will work

## Path Reference Guide

From `/docs/nl/configuration/new-user-setup.md`:

| Target | Correct Path |
|--------|-------------|
| Configuration images | `../../configuration/img/` |
| Install guides | `../../install/build/` |
| Settings (same level) | `settings/[category]/[file].md` |
| Migration guides | `migration/[file].md` |

## Known Issues

### Missing Translation
The following file is referenced but not yet translated to Dutch:
- `/docs/nl/configuration/settings/therapy/units-limits.md`

This file contains sections referenced in `new-user-setup.md`:
- `#glucose-units`
- `#max-iob`
- `#max-bolus`
- `#max-basal`
- `#max-cob`
- `#minimum-safety-threshold`

**Impact:** Links will redirect to English version (gracefully degrading behavior)

## Testing Checklist

Once deployed, verify these URLs work:

- [ ] https://my-trio-te.github.io/trio-docs/nl/configuration/new-user-setup/
- [ ] All 7 images load on the page
- [ ] Links to therapy settings pages work and jump to correct sections
- [ ] Video player shows correctly
- [ ] Install guide links work (may be English if not translated)

## Git Status

```bash
modified:   docs/nl/configuration/new-user-setup.md
```

**Total changes:** 13 line modifications
- 7 image path corrections
- 2 install guide path corrections  
- 4 section anchor corrections

---

**Status:** ✅ READY FOR COMMIT AND DEPLOYMENT

All image links and relative references are now correct for the Dutch new-user-setup page.

