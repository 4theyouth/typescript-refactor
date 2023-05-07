const week = ['응원메세지', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일']

const onClickAddTodo = (typecode: number) => {
	const day = document.querySelector(`.Day${typecode}Massage`) as HTMLDivElement
	const change = prompt(`${week[typecode]} 계획을 써주세요!`)

	if (!change) return alert('입력되지 않았어요ㅜㅜ 다시 돌아가세요')
	day.innerHTML = change
}

const cheer = document.querySelector('.cheer') as HTMLDivElement
const day1 = document.querySelector('.Day1Massage') as HTMLDivElement
const day2 = document.querySelector('.Day2Massage') as HTMLDivElement
const day3 = document.querySelector('.Day3Massage') as HTMLDivElement
const day4 = document.querySelector('.Day4Massage') as HTMLDivElement

cheer.addEventListener('click', () => onClickAddTodo(0))
day1.addEventListener('click', () => onClickAddTodo(1))
day2.addEventListener('click', () => onClickAddTodo(2))
day3.addEventListener('click', () => onClickAddTodo(3))
day4.addEventListener('click', () => onClickAddTodo(4))
