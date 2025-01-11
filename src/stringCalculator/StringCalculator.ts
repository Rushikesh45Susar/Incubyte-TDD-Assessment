function StringCalculator (numbers: string) {
    if(!numbers) return 0
    
    let delimeters:RegExp = new RegExp(',|\n')
    let negativeNumbers:Number[] = []

    if(numbers.startsWith('//')) {
        const parts = numbers.split("\n", 2)
        const customDelimiter = parts[0].substring(2)
        delimeters = new RegExp(customDelimiter)
        numbers = parts[1]
    }
    
    const numList = numbers.split(delimeters).map(i => {
        const value = parseInt(i, 10)
        if(value < 0) negativeNumbers.push(value)
        return value
    })

    if(negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`)
    }

    return numList.reduce((sum, num) => sum + num, 0)
}

module.exports = StringCalculator