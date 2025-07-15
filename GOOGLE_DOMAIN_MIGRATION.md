# Google Search Console - Domein Migratie Instructies

## 🚨 **Probleem**: Google heeft nog steeds `raisesignal.nl` in de index

**Google Search Console toont:**

- "Pagina is niet geïndexeerd: Alternatieve pagina met correcte canonieke tag"
- Google probeert nog `http://raisesignal.nl/` te crawlen
- Oude .nl URL's staan nog in Google's index

## ✅ **Oplossing**: Verwijder oude .nl URL's uit Google's index

### **Stap 1: Verwijder .nl URL's via Google Search Console**

1. **Ga naar Google Search Console**
   - Bezoek: https://search.google.com/search-console/
   - Selecteer property: `www.raisesignal.uk`

2. **URL Removal Tool gebruiken**
   - Ga naar: **Indexing** → **Removals**
   - Klik op **New Request**

3. **Verwijder deze specifieke URL's:**

   ```
   https://raisesignal.nl/
   http://raisesignal.nl/
   https://www.raisesignal.nl/
   http://www.raisesignal.nl/
   ```

4. **Selecteer: "Remove all URLs with this prefix"**
   - Voor elke URL hierboven
   - Dit verwijdert alle pagina's van het oude domein

### **Stap 2: Voeg .uk domein toe als verified property**

1. **Add Property in Search Console**
   - Voeg toe: `https://www.raisesignal.uk`
   - Verify via HTML tag of DNS

2. **Submit nieuwe sitemap**
   - URL: `https://www.raisesignal.uk/sitemap.xml`
   - Dit helpt Google de nieuwe URL's te indexeren

### **Stap 3: Monitor de migratie**

**Wat te checken:**

- [ ] .nl URL's verdwijnen uit Google index (1-2 weken)
- [ ] .uk URL's verschijnen in search results
- [ ] "URL is not indexed" errors verdwijnen
- [ ] Organic traffic herstelt zich

**Google Search Console metrics:**

- **Coverage** → Check voor indexing errors
- **Sitemaps** → Controleer sitemap status
- **Performance** → Monitor clicks/impressions voor .uk

## 🛠️ **Technische Oplossingen Geïmplementeerd**

### **1. Updated robots.txt**

```
Disallow: /raisesignal.nl*
Disallow: *.nl*
```

### **2. Canonical headers toegevoegd**

```
Link: <https://www.raisesignal.uk>; rel="canonical"
X-Robots-Tag: index, follow
```

### **3. Meta tags in layout.tsx**

```
original-source: https://www.raisesignal.uk
robots: index, follow, max-snippet:-1
```

## 📊 **Verwachte Resultaten**

**Week 1:**

- URL removal requests processed
- Crawl errors voor .nl stoppen

**Week 2-4:**

- .nl URL's verdwijnen uit Google index
- .uk URL's krijgen ranking positions

**Maand 2-3:**

- Volledige traffic recovery
- Betere rankings door clean index

## ⚠️ **Belangrijke Opmerkingen**

1. **Niet in panic raken** - Dit is normaal na domein wijziging
2. **Google heeft tijd nodig** - 2-8 weken voor volledige migratie
3. **Traffic kan tijdelijk dalen** - Dit is verwacht en herstelt zich
4. **Monitoring is essentieel** - Check Search Console wekelijks

## 🔧 **Extra Acties**

### **Als .nl URL's blijven bestaan:**

1. **301 Redirects instellen** (indien .nl domein nog actief is)
2. **Disavow links** naar .nl domain
3. **Contact Google directly** via Search Console feedback

### **Backlinks updating:**

- Contact websites die linken naar .nl URLs
- Vraag om update naar .uk URLs
- Dit helpt met link equity transfer

---

**📧 Contact voor hulp:** info@raisesignal.uk  
**🔗 Nieuwe canonical URL:** https://www.raisesignal.uk
