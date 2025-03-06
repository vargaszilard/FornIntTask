function countVowels(string) {
    let counts = {a: 0, e: 0, i: 0, o: 0, u: 0};
    [...string.toLowerCase().matchAll("[aeiouAEIOU]")]
        .forEach(occurence => counts[occurence[0]] += 1);
        
    return counts;
}

console.log(countVowels("hello"));
console.log(countVowels("world"));
console.log(countVowels("xyz"));
console.log(countVowels("AEIOU"));