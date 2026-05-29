#!/bin/bash

###############################################################################
# WebP Conversion Script
#
# Converts all JPEG and PNG images to WebP format
#
# Requirements:
#   - cwebp (install: brew install webp)
#
# Usage:
#   chmod +x scripts/convert-to-webp.sh
#   ./scripts/convert-to-webp.sh
###############################################################################

# Configuration
INPUT_DIR="public/images/original"
OUTPUT_DIR="public/images/optimized"
QUALITY=75

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}   WebP Conversion Tool${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo -e "${RED}❌ Error: cwebp is not installed${NC}"
    echo -e "${YELLOW}   Install with: brew install webp${NC}"
    exit 1
fi

# Check if input directory exists
if [ ! -d "$INPUT_DIR" ]; then
    echo -e "${RED}❌ Error: Input directory not found${NC}"
    echo -e "${YELLOW}   Expected: $INPUT_DIR${NC}"
    exit 1
fi

# Create output directory
mkdir -p "$OUTPUT_DIR"
echo -e "${GREEN}✓${NC} Output directory: $OUTPUT_DIR"
echo -e "${GREEN}✓${NC} Quality: $QUALITY\n"

# Counter
count=0
total_original_size=0
total_webp_size=0

# Process each image
for file in "$INPUT_DIR"/*.{jpg,jpeg,png,JPG,JPEG,PNG}; do
    # Skip if no files found
    [ -e "$file" ] || continue

    filename=$(basename "$file")
    name="${filename%.*}"
    ext="${filename##*.}"

    echo -e "${BLUE}📸 Processing:${NC} $filename"

    # Get original file size
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        original_size=$(stat -f%z "$file")
    else
        # Linux
        original_size=$(stat -c%s "$file")
    fi

    # Convert to WebP
    output_file="$OUTPUT_DIR/$name.webp"
    cwebp -q $QUALITY "$file" -o "$output_file" 2>/dev/null

    if [ $? -eq 0 ]; then
        # Get WebP file size
        if [[ "$OSTYPE" == "darwin"* ]]; then
            webp_size=$(stat -f%z "$output_file")
        else
            webp_size=$(stat -c%s "$output_file")
        fi

        # Calculate savings
        saved=$((original_size - webp_size))
        percent=$(awk "BEGIN {printf \"%.1f\", ($saved / $original_size) * 100}")

        # Format sizes
        orig_kb=$(awk "BEGIN {printf \"%.1f\", $original_size / 1024}")
        webp_kb=$(awk "BEGIN {printf \"%.1f\", $webp_size / 1024}")
        saved_kb=$(awk "BEGIN {printf \"%.1f\", $saved / 1024}")

        echo -e "   ${GREEN}✓${NC} $name.webp (${webp_kb} KB)"
        echo -e "   ${YELLOW}💾 Saved:${NC} ${saved_kb} KB (${percent}%)\n"

        ((count++))
        total_original_size=$((total_original_size + original_size))
        total_webp_size=$((total_webp_size + webp_size))
    else
        echo -e "   ${RED}❌ Conversion failed${NC}\n"
    fi
done

# Summary
if [ $count -eq 0 ]; then
    echo -e "${YELLOW}⚠️  No images found to convert${NC}"
    echo -e "${YELLOW}   Place JPG/PNG files in: $INPUT_DIR${NC}"
else
    total_saved=$((total_original_size - total_webp_size))
    total_orig_mb=$(awk "BEGIN {printf \"%.2f\", $total_original_size / 1024 / 1024}")
    total_webp_mb=$(awk "BEGIN {printf \"%.2f\", $total_webp_size / 1024 / 1024}")
    total_saved_mb=$(awk "BEGIN {printf \"%.2f\", $total_saved / 1024 / 1024}")
    total_percent=$(awk "BEGIN {printf \"%.1f\", ($total_saved / $total_original_size) * 100}")

    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}✅ Conversion complete!${NC}\n"
    echo -e "   Images processed: ${count}"
    echo -e "   Original size:    ${total_orig_mb} MB"
    echo -e "   WebP size:        ${total_webp_mb} MB"
    echo -e "   ${GREEN}Total saved:      ${total_saved_mb} MB (${total_percent}%)${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
fi
