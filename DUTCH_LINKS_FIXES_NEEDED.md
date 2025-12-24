# Dutch Documentation Link Fixes Required

## Executive Summary
This document identifies all source files that need to be updated to fix broken and incorrectly translated links on the Dutch documentation site (https://my-trio-te.github.io/trio-docs/nl/).

### Issues Found
| Category | Impact | Count | Files Affected |
|----------|--------|-------|----------------|
| **Language Switcher** | Critical - All pages | 2 broken links | 1 config file |
| **Navigation Tabs** | Critical - All pages | 5 broken links | Requires JS fix |
| **Image Paths** | High - Broken images | 91 instances | 5 markdown files |
| **Install Links** | Medium - Wrong targets | 11 instances | 6 markdown files |
| **Missing Content** | Medium - 404 error | 1 missing file | 1 file to create |
| **TOTAL** | | **110 issues** | **13+ files** |

### Priority
1. **CRITICAL** (Issues #1-2): Language switcher and navigation tabs - affects every page
2. **HIGH** (Issue #4): Image paths - 91 broken image references  
3. **MEDIUM** (Issues #5-6): Content links and missing files

---

## 1. Language Switcher Fix (CRITICAL - Affects ALL pages)

### File: `mkdocs.yml`
**Location:** Lines 151-157
**Current:**
```yaml
extra:
  alternate:
    - name: English
      link: /
      lang: en
    - name: Nederlands
      link: /nl/
      lang: nl
```

**Fix Required:**
```yaml
extra:
  alternate:
    - name: English
      link: /trio-docs/
      lang: en
    - name: Nederlands
      link: /trio-docs/nl/
      lang: nl
```

**Issue:** Both links result in 404 errors because the site is hosted at `/trio-docs/` not at the root.

---

## 2. Navigation Tabs Fix (CRITICAL - Affects ALL Dutch pages)

### Problem
The navigation tabs (Home, Usage, Installation and Update, Configuration, Help) on Dutch pages all point to English URLs without the `/nl/` prefix.

### Root Cause
MkDocs Material's `navigation.tabs` feature generates tabs from the `nav` structure in `mkdocs.yml` (lines 222-395). This nav structure uses relative paths that work for English but don't automatically get the `/nl/` prefix for Dutch pages.

### Solution Options

**Option A: Add JavaScript to fix tabs dynamically (Recommended - Easier)**

Create a new file: `docs/assets/javascripts/fix-nl-tabs.js`
```javascript
// Fix navigation tabs for Dutch language pages
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const isNl = currentPath.includes('/nl/');
    
    if (isNl) {
        // Find all navigation tab links
        const tabLinks = document.querySelectorAll('.md-tabs__link');
        
        tabLinks.forEach(link => {
            const href = link.getAttribute('href');
            // Only fix if it doesn't already have /nl/ and is not an external link
            if (href && !href.includes('/nl/') && href.startsWith('/trio-docs/') && !href.startsWith('http')) {
                link.setAttribute('href', href.replace('/trio-docs/', '/trio-docs/nl/'));
            }
        });
    }
});
```

Then add to `mkdocs.yml` line 134 (after `language-switcher.js`):
```yaml
  - assets/javascripts/fix-nl-tabs.js
```

**Option B: Use MkDocs i18n plugin (More complex but cleaner)**
This would require restructuring the project to use the `mkdocs-static-i18n` plugin, which is a larger refactoring effort.

---

## 3. Dutch Homepage Content Links

### File: `docs/nl/index.md`
**Location:** Line 41

**Current:**
```markdown
Om Trio te gebruiken, bent u verplicht om [de applicatie te bouwen](../install/index.md) vanuit de broncode.
```

**Fix Required:**
```markdown
Om Trio te gebruiken, bent u verplicht om [de applicatie te bouwen](install/index.md) vanuit de broncode.
```

**Issue:** The `../` goes up one level too many, pointing to the English install folder instead of the Dutch one.

---

## 4. Image Path Issues in Multiple Dutch Files

### Multiple Files Affected
**Issue:** Image paths have duplicate `/usage/` in the path
**Total instances found:** 91 broken image references across 5 files

### Files to Fix:

#### A. `docs/nl/usage/interface.md` - 53 instances
- Search: `../usage/img/`
- Replace: `img/`

#### B. `docs/nl/usage/features/dynamic-isf.md` - 27 instances  
- Search: `../usage/img/`
- Replace: `img/`

#### C. `docs/nl/usage/features/statistics.md` - 7 instances
- Search: `../usage/img/`
- Replace: `img/`

#### D. `docs/nl/usage/features/bolus-calculator.md` - 3 instances
- Search: `../usage/img/`
- Replace: `img/`

#### E. `docs/nl/configuration/new-user-setup.md` - 1 instance
- Search: `../usage/img/`
- Replace: `../../usage/img/`
- **Note:** This file is in a different folder level, so it needs `../../usage/img/` not just `img/`

**Examples of the issue:**
- Current: `![Trio 1.0 UI](../usage/img/light_vs_dark_mode.png)` (in usage folder)
- Fix to: `![Trio 1.0 UI](img/light_vs_dark_mode.png)`

**Fix Method (RECOMMENDED):**
Use search and replace in each file to fix all instances at once.

---

## 5. Install Link Issues in Dutch Files

### Multiple Files Affected
**Issue:** Links to install sections use `../install/` which goes up one level too many
**Total instances found:** 15 broken links across 7 files

### Files to Fix:

#### A. `docs/nl/index.md` - Line 41
- Current: `[de applicatie te bouwen](../install/index.md)`
- Fix to: `[de applicatie te bouwen](install/index.md)`

#### B. `docs/nl/configuration/new-user-setup.md` - 2 instances
- Line 5: `[Mac](../../install/build/mac/overview.md)` → `[Mac](../install/build/mac/overview.md)`
- Line 5: `[Browser](../../install/build/browser/browser-build-overview.md)` → `[Browser](../install/build/browser/browser-build-overview.md)`
- Line 400: `[Customizations](../../install/customize.md)` → `[Customizations](../install/customize.md)`

#### C. `docs/nl/configuration/settings/services/index.md` - 1 instance
- Line 3: `[Companion Apps](../../../install/ecosystem/index.md)` → `[Companion Apps](../../install/ecosystem/index.md)`

#### D. `docs/nl/configuration/settings/devices/index.md` - 4 instances
- Line 13: `[Telefoons](../../../install/build/requirements/devices/iphone.md)` → `[Telefoons](../../install/build/requirements/devices/iphone.md)`
- Line 19: `[Horloges](../../../install/build/requirements/devices/iphone.md)` → `[Horloges](../../install/build/requirements/devices/iphone.md)`
- Line 25: `[Pompen](../../../install/build/requirements/devices/pump.md)` → `[Pompen](../../install/build/requirements/devices/pump.md)`
- Line 31: `[CGM's](../../../install/build/requirements/devices/cgm.md)` → `[CGM's](../../install/build/requirements/devices/cgm.md)`

#### E. `docs/nl/configuration/settings/devices/pump.md` - 1 instance
- Line 3: `[link](../../../install/build/requirements/devices/pump.md)` → `[link](../../install/build/requirements/devices/pump.md)`

#### F. `docs/nl/configuration/settings/devices/cgm.md` - 2 instances
- Line 3: `[link](../../../install/build/requirements/devices/cgm.md)` → `[link](../../install/build/requirements/devices/cgm.md)`
- Line 135: `[link](../../../install/ecosystem/xdrip4ios.md)` → `[link](../../install/ecosystem/xdrip4ios.md)`

#### G. `docs/nl/help/faq.md` - 4 instances
- Line 39: `[Browser Build](../install/build/browser/browser-build-overview.md)` ✓ Correct
- Line 40: `[Mac Build](../install/build/mac/overview.md)` ✓ Correct
- Line 72: `[Compatibele Pompen](../install/build/requirements/devices/pump.md)` ✓ Correct
- Line 222: `[hier](../install/ecosystem/xdrip4ios.md)` ✓ Correct

**Note:** The `faq.md` file's links are actually correct because it's at the right level (`docs/nl/help/`).

---

## 6. Migration Guide Link Fix

### File: `docs/nl/configuration/index.md`
**Location:** Line 22

**Current:**
```markdown
-   __[Migratiegidsen (Migration Guides)](migration/index.md)__
```

**Issue Confirmed:**
The `docs/nl/configuration/migration/` folder exists but is **EMPTY** - no `index.md` file.

**Fix Required:**
Create the missing file `docs/nl/configuration/migration/index.md` by translating the English version from `docs/configuration/migration/index.md`.

**Verification:**
✅ Folder exists: `docs/nl/configuration/migration/`
❌ File missing: `docs/nl/configuration/migration/index.md`

This is why the link results in a 404 error.

---

## Quick Fix Checklist

### Critical Fixes (Affects All Pages)
- [ ] **Issue #1:** `mkdocs.yml` - Fix language switcher links (lines 151-157)
- [ ] **Issue #2:** Create `docs/assets/javascripts/fix-nl-tabs.js` and add to `mkdocs.yml`

### Image Path Fixes (91 instances)
- [ ] **Issue #4A:** `docs/nl/usage/interface.md` - Replace `../usage/img/` with `img/` (53 instances)
- [ ] **Issue #4B:** `docs/nl/usage/features/dynamic-isf.md` - Replace `../usage/img/` with `img/` (27 instances)
- [ ] **Issue #4C:** `docs/nl/usage/features/statistics.md` - Replace `../usage/img/` with `img/` (7 instances)
- [ ] **Issue #4D:** `docs/nl/usage/features/bolus-calculator.md` - Replace `../usage/img/` with `img/` (3 instances)
- [ ] **Issue #4E:** `docs/nl/configuration/new-user-setup.md` - Replace `../usage/img/` with `../../usage/img/` (1 instance)

### Install Link Fixes (11 broken instances)
- [ ] **Issue #5A:** `docs/nl/index.md` - Fix line 41
- [ ] **Issue #5B:** `docs/nl/configuration/new-user-setup.md` - Fix lines 5 (2 links) and 400
- [ ] **Issue #5C:** `docs/nl/configuration/settings/services/index.md` - Fix line 3
- [ ] **Issue #5D:** `docs/nl/configuration/settings/devices/index.md` - Fix lines 13, 19, 25, 31
- [ ] **Issue #5E:** `docs/nl/configuration/settings/devices/pump.md` - Fix line 3
- [ ] **Issue #5F:** `docs/nl/configuration/settings/devices/cgm.md` - Fix lines 3 and 135

### Missing Content
- [ ] **Issue #6:** Create or translate `docs/nl/configuration/migration/index.md`

---

## Testing After Fixes

After applying fixes, test these URLs:
1. Language switcher from: `https://my-trio-te.github.io/trio-docs/nl/`
2. Navigation tabs on any NL page
3. "de applicatie te bouwen" link on NL homepage
4. Images on: `https://my-trio-te.github.io/trio-docs/nl/usage/interface/`
5. Migration guides link: `https://my-trio-te.github.io/trio-docs/nl/configuration/migration/`

---

## Priority

- **CRITICAL (affects all pages):** Issues #1 and #2
- **HIGH (affects main landing page):** Issue #3
- **HIGH (broken images):** Issue #4
- **MEDIUM (one broken link):** Issue #5

