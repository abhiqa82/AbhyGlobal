# Catalog Page Header Image Specifications

## 📐 Recommended Image Dimensions

### Primary Recommendation
**Dimensions:** `1920px × 600px` (Width × Height)
**Aspect Ratio:** 16:5 (3.2:1)
**File Format:** JPG/JPEG
**File Size:** Optimize to under 200KB for web performance

### Alternative Dimensions (If Needed)

**Standard Banner:**
- `1920px × 500px` (3.84:1 ratio) - Slightly shorter, more compact
- `1600px × 450px` (3.56:1 ratio) - Good for medium displays

**Ultra-wide (for large displays):**
- `2560px × 600px` (4.27:1 ratio) - For 4K displays

**Minimum Size:**
- `1200px × 375px` - Matches container max-width, minimum acceptable quality

## 🎨 Design Considerations

### Safe Zone (Text Overlay Area)
- **Center Area:** Keep important visual elements in the center 1200px width
- **Text Overlay:** Header text appears centered, so avoid busy backgrounds in center
- **Top/Bottom Margins:** Leave 100px margins at top and bottom for text readability

### Current Header Structure
```
Container: max-width 1200px, centered
Padding: var(--spacing-xl) (approximately 48-64px top/bottom)
Text: Centered, white color
Background: Currently gradient (can be replaced with image)
```

## 📝 Implementation in HTML

The header currently uses a gradient background. To use an image instead, you would update the CSS:

```css
.catalog-header {
    background-image: url('images/catalog-header.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* Keep existing styles */
    color: var(--color-white);
    padding: var(--spacing-xl) 0;
    margin-top: 70px;
    text-align: center;
}
```

## 🌐 Image Placement

**Recommended Location:**
```
images/catalog-header.jpg
```

**Full Path:**
```
C:\Users\abhis\Website_dev\abhyglobal_com\images\catalog-header.jpg
```

---

## 🎨 Image Generation Prompt

Use this prompt with AI image generators (DALL-E, Midjourney, Stable Diffusion, etc.):

---

### **PROMPT FOR AI IMAGE GENERATION:**

```
Professional e-commerce export catalog header banner image, 1920x600 pixels, horizontal banner format, 
showing diverse Indian export products arranged elegantly: premium cotton textiles (T-shirts, towels, 
bed linens) on the left, colorful authentic Indian spices (turmeric, cumin, coriander, red chili, 
garam masala) in the center, and modern electronic components on the right side. 

Background: Clean, modern gradient from deep navy blue (#1a365d) to lighter blue, with subtle global 
trade elements (subtle world map outlines or shipping container silhouettes). 

Style: Professional, premium, trustworthy business aesthetic, high-quality product photography style, 
bright and well-lit, with gold accents (#d4af37) subtly integrated. Clean composition with products 
arranged harmoniously, leaving center space clear for text overlay. 

Mood: Professional, trustworthy, global trade, premium quality, modern export business. 

Color palette: Navy blue primary, gold accents, white/cream for products, vibrant spice colors 
(yellow turmeric, brown cumin, green coriander, red chilies). 

Technical: High resolution, sharp focus on products, professional lighting, no text or logos, 
suitable for website header with text overlay, web-optimized color profile.
```

### **Alternative Shorter Prompt:**

```
Professional Indian export company catalog header banner, 1920x600px, horizontal format, showcasing 
diverse export products: textiles, spices, electronics arranged elegantly on navy blue gradient 
background with gold accents, premium business aesthetic, clean composition, center space reserved 
for text, high quality, professional photography style.
```

---

## ✅ Quality Checklist

- [ ] Dimensions: 1920px × 600px
- [ ] Format: JPG/JPEG
- [ ] File size: Under 200KB (optimized)
- [ ] Center area clear for text overlay
- [ ] High resolution and sharp
- [ ] Colors match brand (navy blue, gold accents)
- [ ] Professional, trustworthy appearance
- [ ] Products clearly visible and appealing
- [ ] No text or logos (text will be overlaid via HTML)

---

**Last Updated:** January 2024

