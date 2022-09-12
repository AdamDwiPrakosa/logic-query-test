const dataTest = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
const dataSample = ["Purwakarta", "Diana Tasya Sandia Nurul",  "Tawar kapur", "William Shakespeare", "I am a weakish speller", "Tom Marvolo Riddle", "I am Lord Voldemort", "Satu rayuan di lisan Anda"];

const anagramGenerator = (array) => {
    let tempData = {};
    let result = [];
    array.forEach(element => {
        let sorting = element.toLowerCase().split("").sort().join("").trim(" ");
        tempData[sorting] ? tempData[sorting].push(element) : result.push(tempData[sorting] = [element]);
    });
    return result
}

console.log('anagram for test');
console.log(anagramGenerator(dataTest));
console.log('anagram another sample');
console.log(anagramGenerator(dataSample));