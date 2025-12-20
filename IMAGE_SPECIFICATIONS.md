# Catalog Images - Size and Format Specifications

## 📐 Image Dimensions

### Display Size
- **Display Height:** 250px (fixed)
- **Display Width:** Responsive (varies by screen size)
  - Desktop: Approximately 280-400px per card
  - Tablet: Approximately 300-350px per card
  - Mobile: Full width (100% of container)

### Recommended Source Image Size

For best quality and performance, use these dimensions:

**Minimum Size (Recommended):**
- **Width:** 800px minimum
- **Height:** 600px minimum
- **Aspect Ratio:** 4:3 or 16:9 works well
- **Preferred:** 1200px × 800px (for high-quality display on retina screens)

**Why larger than display size?**
- Better quality on high-resolution displays (retina screens)
- Allows cropping flexibility with `object-fit: cover`
- Future-proof if layout changes

### Current CSS Behavior
```css
.catalog-item-image {
    width: 100%;
    height: 250px;        /* Fixed height */
    overflow: hidden;
}

.catalog-item-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;    /* Crops to fill container */
}
```

**Note:** Images will be automatically cropped to fill the 250px height container while maintaining aspect ratio.

---

## 📄 Image Format

### Recommended Formats (in order of preference):

1. **JPG/JPEG** ✅ **RECOMMENDED**
   - Best for: Product photos, photographs
   - Smaller file sizes
   - Good quality for photos
   - Universal browser support
   - **Use for:** Textiles, Spices, Electronics, Handicrafts, Home Decor

2. **PNG**
   - Best for: Images with transparency, logos, graphics
   - Larger file sizes than JPG
   - Lossless compression
   - **Use for:** Graphics or images requiring transparency

3. **WebP** (Optional - Advanced)
   - Smaller file sizes than JPG
   - Good quality
   - Modern browser support (may need fallback)

### Format Recommendation by Product Type:

- **Textiles (T-shirts, Fabrics, Napkins):** JPG
- **Spices (Turmeric, Cumin, etc.):** JPG
- **Electronics:** JPG
- **Handicrafts:** JPG
- **Home Decor:** JPG

---

## 📊 File Size Recommendations

For optimal website performance:

- **Target File Size:** 50-200 KB per image
- **Maximum File Size:** 500 KB (compress larger images)
- **Total Page Size:** Aim for < 2-3 MB for all catalog images

**Tools for Compression:**
- TinyPNG / TinyJPG (online)
- ImageOptim (Mac)
- Squoosh (online, Google)
- Photoshop "Save for Web"

---

## 📋 Complete Specifications Summary

| Specification | Value |
|--------------|-------|
| **Display Height** | 250px (fixed) |
| **Display Width** | Responsive (280-400px desktop) |
| **Source Image Width** | 800px minimum, 1200px recommended |
| **Source Image Height** | 600px minimum, 800px recommended |
| **Aspect Ratio** | 4:3 or 16:9 preferred |
| **Format** | JPG/JPEG (recommended) |
| **File Size** | 50-200 KB per image |
| **Color Space** | sRGB |
| **Compression** | 80-90% quality (JPG) |

---

## 🎯 Quick Reference

**For Product Images, Use:**
- **Format:** JPG
- **Dimensions:** 1200px × 800px (or maintain 3:2 or 4:3 aspect ratio)
- **File Size:** Under 200 KB
- **Quality:** High quality (80-90% compression)

**Example:**
```
t-shirts.jpg        - 1200×800px, 180 KB, JPG
turmeric.jpg        - 1200×800px, 150 KB, JPG
cotton-fabrics.jpg  - 1200×800px, 165 KB, JPG
```

---

## ✅ Checklist for Image Preparation

- [ ] Images are at least 800px wide
- [ ] Images are in JPG format (unless transparency needed)
- [ ] File size is under 200 KB per image
- [ ] Images are optimized/compressed
- [ ] Images are in sRGB color space
- [ ] Aspect ratio is maintained (4:3 or 16:9 works best)
- [ ] Images are professional product photos
- [ ] Images accurately represent the product

---

**Note:** The CSS uses `object-fit: cover`, which means images will be cropped to fill the 250px height container. Center your product in the frame for best results.

