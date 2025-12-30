#!/usr/bin/env python3
"""
Generate PNG favicons programmatically
Creates multiple sizes: 16x16, 32x32, 48x48, 180x180 (Apple touch icon)
"""

import sys
import subprocess
import os

def install_package(package):
    """Install a package using pip"""
    subprocess.check_call([sys.executable, "-m", "pip", "install", package, "--quiet"])

def generate_png_favicons():
    """Generate PNG favicons programmatically using PIL"""
    try:
        from PIL import Image, ImageDraw, ImageFont
    except ImportError:
        print("Installing Pillow...")
        install_package("pillow")
        from PIL import Image, ImageDraw, ImageFont
    
    # Brand colors
    color_primary = (26, 54, 93)  # #1a365d
    color_primary_dark = (21, 52, 80)  # #153450
    color_gold = (212, 175, 55)  # #d4af37
    color_gold_light = (229, 198, 99)  # #e5c663
    
    def create_favicon(size):
        """Create a favicon at the specified size"""
        # Create image with transparent background
        img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Draw rounded rectangle background
        corner_radius = max(4, int(size * 0.19))  # ~19% for rounded corners
        padding = max(1, int(size * 0.03))
        
        # Background with gradient effect (simulated with two colors)
        for i in range(size):
            ratio = i / size
            r = int(color_primary[0] * (1 - ratio * 0.2) + color_primary_dark[0] * (ratio * 0.2))
            g = int(color_primary[1] * (1 - ratio * 0.2) + color_primary_dark[1] * (ratio * 0.2))
            b = int(color_primary[2] * (1 - ratio * 0.2) + color_primary_dark[2] * (ratio * 0.2))
            draw.rectangle([padding, i, size - padding, i + 1], fill=(r, g, b, 255))
        
        # Draw border
        border_width = max(1, int(size * 0.04))
        draw.rounded_rectangle(
            [padding, padding, size - padding, size - padding],
            radius=corner_radius,
            outline=color_gold,
            width=border_width
        )
        
        # Draw letters "AG"
        # Calculate positions and sizes based on favicon size
        letter_height = int(size * 0.5)
        letter_width_a = int(size * 0.3)
        letter_width_g = int(size * 0.35)
        stroke_width = max(2, int(size * 0.08))
        
        # Position for "A" (left side)
        a_x = int(size * 0.22)
        a_y = int(size * 0.25)
        
        # Position for "G" (right side)
        g_x = int(size * 0.55)
        g_y = int(size * 0.25)
        
        # Draw letter "A"
        # Left leg
        draw.line(
            [a_x, a_y + letter_height, a_x + letter_width_a * 0.25, a_y],
            fill=color_gold,
            width=stroke_width
        )
        # Right leg
        draw.line(
            [a_x + letter_width_a, a_y + letter_height, a_x + letter_width_a * 0.75, a_y],
            fill=color_gold,
            width=stroke_width
        )
        # Horizontal bar
        bar_y = int(a_y + letter_height * 0.65)
        draw.line(
            [a_x + letter_width_a * 0.25, bar_y, a_x + letter_width_a * 0.75, bar_y],
            fill=color_gold,
            width=stroke_width
        )
        
        # Draw letter "G"
        # Outer curve (left side)
        g_center_x = g_x + letter_width_g * 0.5
        g_center_y = g_y + letter_height * 0.5
        g_radius = int(letter_width_g * 0.4)
        
        # Draw G outline (simplified)
        # Top arc
        for angle in range(180, 270):
            rad = angle * 3.14159 / 180
            x = int(g_center_x + g_radius * 0.8 * (1 if angle < 225 else 0.8))
            y = int(g_center_y - g_radius * 0.8)
            if angle == 180:
                start_x, start_y = x, y
            if angle % 10 == 0:  # Simplify drawing
                draw.ellipse([x - stroke_width//2, y - stroke_width//2, x + stroke_width//2, y + stroke_width//2], 
                           fill=color_gold)
        
        # Left vertical line
        draw.line(
            [g_x, g_y + int(letter_height * 0.2), g_x, g_y + letter_height - int(letter_height * 0.2)],
            fill=color_gold,
            width=stroke_width
        )
        # Bottom curve
        for i in range(int(letter_width_g * 0.6)):
            x = g_x + i
            y = g_y + letter_height - int(letter_height * 0.2)
            if i < letter_width_g * 0.4:
                draw.ellipse([x - stroke_width//2, y - stroke_width//2, x + stroke_width//2, y + stroke_width//2], 
                           fill=color_gold)
        # Right vertical line (shorter)
        draw.line(
            [g_x + int(letter_width_g * 0.6), g_y + int(letter_height * 0.5), 
             g_x + int(letter_width_g * 0.6), g_y + letter_height - int(letter_height * 0.2)],
            fill=color_gold,
            width=stroke_width
        )
        # Horizontal line in G
        draw.line(
            [g_x + int(letter_width_g * 0.4), g_y + int(letter_height * 0.5),
             g_x + int(letter_width_g * 0.6), g_y + int(letter_height * 0.5)],
            fill=color_gold,
            width=stroke_width
        )
        
        return img
    
    # Define sizes to generate
    sizes = {
        'favicon-16x16.png': 16,
        'favicon-32x32.png': 32,
        'favicon.png': 32,  # Default favicon
        'favicon-48x48.png': 48,
        'apple-touch-icon.png': 180
    }
    
    print("Generating PNG favicons...")
    
    for output_file, size in sizes.items():
        try:
            img = create_favicon(size)
            img.save(output_file, 'PNG', optimize=True)
            print(f"[OK] Generated {output_file} ({size}x{size})")
        except Exception as e:
            print(f"[ERROR] Error generating {output_file}: {e}")
            import traceback
            traceback.print_exc()
            return False
    
    print("\n[SUCCESS] All favicons generated successfully!")
    return True

if __name__ == "__main__":
    success = generate_png_favicons()
    sys.exit(0 if success else 1)
