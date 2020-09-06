/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
	let result = ''
	for (let i = 0; i < d.length; i++) {
		const str = d[i]
		let p1 = 0 // sw
    let p2 = 0 // str
		for (; p1 < s.length && p2 < str.length; p1++) {
			if (s[p1] === str[p2]) {
				p2++
			}
		}
		const valid =
			str.length > result.length ||
			(str.length === result.length && str < result)
		if (p2 === str.length && valid) {
			result = str
		}
	}
	return result
}

var s = 'abpcplea'
var d = ['a', 'b', 'c']
// expect stdout 'a'
console.log(1111, findLongestWord(s, d))
