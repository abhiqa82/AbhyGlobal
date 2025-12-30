#!/usr/bin/env python3
"""
Generate optimized favicon sizes from favicon.png
Creates: 16x16, 32x32, 48x48, 180x180 (Apple touch icon)
"""

import sys
import subprocess
import os

def install_package(package):
    """Install a package using pip"""
    subprocess.check_call([sys.executable, "-m", "pip", "install", package, "--quiet"])

def optimize_favicons():
    """Generate optimized favicon sizes from favicon.png"""
    try:
        from PIL import Image
    except ImportError:
        print("Installing Pillow...")
        install_package("pillow")
        from PIL import Image
    
    source_file = 'favicon.png'
    
    if not os.path.exists(source_file):
        print(f"Error: {source_file} not found in current directory!")
        print(f"Current directory: {os.getcwd()}")
        return False
    
    print(f"Reading source file: {source_file}")
    
    try:
        # Open the source image
        with Image.open(source_file) as img:
            # Get original size and format
            original_size = img.size
            print(f"Original size: {original_size[0]}x{original_size[1]} pixels")
            print(f"Original format: {img.format}")
            
            # Convert to RGBA if needed (for transparency support)
            if img.mode != 'RGBA':
                print("Converting to RGBA format for transparency support...")
                img = img.convert('RGBA')
            
            # Define sizes to generate
            sizes = {
                'favicon-16x16.png': 16,
                'favicon-32x32.png': 32,
                'favicon-48x48.png': 48,
                'apple-touch-icon.png': 180
            }
            
            print("\nGenerating optimized favicon sizes...")
            
            for output_file, size in sizes.items():
                try:
                    # Resize using high-quality LANCZOS resampling
                    resized = img.resize((size, size), Image.Resampling.LANCZOS)
                    
                    # Save with optimization
                    resized.save(
                        output_file,
                        'PNG',
                        optimize=True,  # Enable PNG optimization
                        compress_level=9  # Maximum compression
                    )
                    
                    # Get file size
                    file_size = os.path.getsize(output_file)
                    file_size_kb = file_size / 1024
                    
                    print(f"[OK] Generated {output_file} ({size}x{size}) - {file_size_kb:.2f} KB")
                    
                except Exception as e:
                    print(f"[ERROR] Error generating {output_file}: {e}")
                    return False
            
            # Also create a backup/optimized version of the main favicon.png if it's very large
            source_size = os.path.getsize(source_file)
            source_size_kb = source_size / 1024
            
            if source_size_kb > 50:  # If larger than 50KB, offer to optimize
                print(f"\nNote: Original favicon.png is {source_size_kb:.2f} KB")
                print("Consider using favicon-32x32.png as your main favicon.png for better performance.")
            
            print("\n[SUCCESS] All optimized favicons generated successfully!")
            print("\nGenerated files:")
            print("  - favicon-16x16.png (16x16) - Browser tab icon")
            print("  - favicon-32x32.png (32x32) - Standard favicon")
            print("  - favicon-48x48.png (48x48) - High-resolution favicon")
            print("  - apple-touch-icon.png (180x180) - iOS home screen icon")
            
            return True
            
    except Exception as e:
        print(f"Error processing {source_file}: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    success = optimize_favicons()
    sys.exit(0 if success else 1)

