interface PersonType {
	name: string
	job?: string
	age: number
	gender: 'F' | 'M'
}

const person: PersonType = {
	name: 'ubin',
	age: 18,
	gender: 'M',
	job: 'Frontend Developer',
}

const getPerson = ({ name, age, gender, job }: PersonType) => {
	console.log(name, age, gender, job)
}

getPerson(person)
