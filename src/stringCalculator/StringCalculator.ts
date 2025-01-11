function StringCalculator (numbers: string) {
    if(!numbers) return 0
    
    let delimeters:RegExp = new RegExp(',|\n')

    if(numbers.startsWith('//')) {
        const parts = numbers.split("\n", 2)
        const customDelimiter = parts[0].substring(2)
        delimeters = new RegExp(customDelimiter)
        numbers = parts[1]
    }
    
    const numList = numbers.split(delimeters).map(i => parseInt(i, 10))

    return numList.reduce((sum, num) => sum + num, 0)
}

module.exports = StringCalculator