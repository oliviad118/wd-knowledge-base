#!/bin/bash

# validate-card.sh - Unified validation script for knowledge cards
# Runs markdownlint followed by content validation

# Check if file argument provided
if [ $# -eq 0 ]; then
    echo "❌ Error: No file specified"
    echo "Usage: $0 <card-file.md> [card-file2.md ...]"
    exit 1
fi

# If multiple files provided, validate each one
if [ $# -gt 1 ]; then
    echo "🔍 Validating multiple files..."
    echo

    TOTAL_FILES=$#
    PASSED_COUNT=0
    FAILED_COUNT=0
    FAILED_FILES=()

    for FILE in "$@"; do
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "🔍 Validating: $FILE ($((PASSED_COUNT + FAILED_COUNT + 1))/$TOTAL_FILES)"
        echo

        # Check if file exists
        if [ ! -f "$FILE" ]; then
            echo "❌ Error: File '$FILE' not found"
            FAILED_COUNT=$((FAILED_COUNT + 1))
            FAILED_FILES+=("$FILE")
            continue
        fi

        # Step 1: Run markdownlint
        echo "📝 Running markdown lint..."
        if ! npx markdownlint "$FILE" 2>/dev/null; then
            echo "❌ Markdown linting failed for $FILE"
            FAILED_COUNT=$((FAILED_COUNT + 1))
            FAILED_FILES+=("$FILE")
            continue
        fi
        echo "✅ Markdown linting passed"

        # Step 2: Run content validation
        echo "🔍 Running content validation..."
        if ! node "$(dirname "$0")/validate-card.js" "$FILE" 2>/dev/null; then
            echo "❌ Content validation failed for $FILE"
            FAILED_COUNT=$((FAILED_COUNT + 1))
            FAILED_FILES+=("$FILE")
            continue
        fi

        echo "✅ Content validation passed"
        echo "🎉 All validations passed for: $FILE"
        PASSED_COUNT=$((PASSED_COUNT + 1))
        echo
    done

    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📊 FINAL SUMMARY"
    echo "Total files: $TOTAL_FILES"
    echo "✅ Passed: $PASSED_COUNT"
    echo "❌ Failed: $FAILED_COUNT"

    if [ $FAILED_COUNT -gt 0 ]; then
        echo
        echo "Failed files:"
        for failed_file in "${FAILED_FILES[@]}"; do
            echo "  - $failed_file"
        done
        exit 1
    else
        echo
        echo "🎉 All $TOTAL_FILES files passed validation!"
    fi

    exit 0
fi

# Single file validation (original logic)
FILE="$1"

# Check if file exists
if [ ! -f "$FILE" ]; then
    echo "❌ Error: File '$FILE' not found"
    exit 1
fi

echo "🔍 Validating: $FILE"
echo

# Step 1: Run markdownlint
echo "📝 Running markdown lint..."
if ! npx markdownlint "$FILE"; then
    echo
    echo "❌ Markdown linting failed"
    echo "💡 Tip: Run 'npm run lint:md:fix' to auto-fix common issues"
    exit 1
fi

echo "✅ Markdown linting passed"
echo

# Step 2: Run content validation
echo "🔍 Running content validation..."
if ! node "$(dirname "$0")/validate-card.js" "$FILE"; then
    echo
    echo "❌ Content validation failed"
    exit 1
fi

echo "✅ Content validation passed"
echo
echo "🎉 All validations passed for: $FILE"