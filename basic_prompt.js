function toCamelCase(input) {
    // Convert input to string if it isn't already
    const str = String(input);
    
    // Split by spaces, underscores, or hyphens, and filter out empty strings
    const words = str.trim().split(/[\s_-]+/).filter(word => word.length > 0);
    
    // Map each word: first word stays lowercase, rest are capitalized
    return words
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            // Capitalize first letter, keep the rest as-is (preserves numbers)
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}