const countConstruct = (target,wordbank, memo ={}) => {
	if(target in memo) {
		return memo[target]
	}
	if(target == '') 
		return 1
	let totalCount = 0

	for(let word of wordbank) {
		if(target.indexOf(word) === 0) {
			const numWaysForRest = countConstruct(target.slice(word.length), wordbank);
			totalCount += numWaysForRest
		}
	}

	memo[target] = totalCount
	// console.log(`${target} = ${memo[target]}`)
	console.log(memo)
	return totalCount

}
console.log(countConstruct("abcdef",["ab",'abc','def','abcd']))
console.log(countConstruct("etnerapotentpot",["a",'p','ent','enter','ot','o','t']))
console.log(countConstruct('purple',['purp','p','ur','le','purpl']))
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeef",[
    "e",'ee','eee','enter','ot','o','z'
]))