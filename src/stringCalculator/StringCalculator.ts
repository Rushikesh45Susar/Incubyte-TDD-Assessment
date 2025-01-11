function StringCalculator (numbers: string) {
    if(!numbers) return 0
    
    return parseInt(numbers, 10)
}

module.exports = StringCalculator