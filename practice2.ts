const array = [
	{
		name: 'ubin',
		age: 18,
	},
	{
		name: 'sewon',
		age: 18,
	},
	{
		name: 'hohyun',
		age: 232,
	},
	{
		name: 'changbo',
		age: -1,
	},
]

interface PersonsType {
	name: string
	age: number
}

const map_arr = array.map((person: PersonsType) => {
	if (person.age >= 17 && person.age <= 200) return person
})

console.log(map_arr)

let foreach_arr: PersonsType[]

array.forEach((person: PersonsType) => {
	if (person.age >= 17 && person.age <= 200) return foreach_arr.push(person)
})

const filter_arr = array.filter((x) => x.age)
