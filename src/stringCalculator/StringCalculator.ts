function StringCalculator (numbers: string) {
    if(!numbers) return 0
    
    const numList = numbers.split(/,|\n/).map(i => parseInt(i, 10))

    return numList.reduce((sum, num) => sum + num, 0)
}

module.exports = StringCalculator