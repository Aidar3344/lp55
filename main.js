function checkPassword(password) {
    let length = /.{9,}/
    let upper = /[A-Z]/
    let lower = /[a-z]/
    let number = /[0-9]/
    let symbol = /[^A-Za-z0-9\s]/
    let spaces = /^\S*$/

    if (
        length.test(password) &&
        upper.test(password) &&
        lower.test(password) &&
        number.test(password) &&
        symbol.test(password) &&
        spaces.test(password)
    ) {
        return 'Надежный пароль'
    } else {
        return 'Ненадежный пароль'
    }
}

console.log(checkPassword('Hello123!'))
console.log(checkPassword('hello'))