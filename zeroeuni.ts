// 화이팅
//화이팅팅
const button = document.getElementById('inputForm--button') as HTMLButtonElement
const add = document.getElementById('inputForm--add') as HTMLInputElement
const remove = document.getElementById('delete') as HTMLButtonElement
const result = document.getElementById('addTodo--text') as HTMLInputElement

function addTodo() {
	if (!add.value) alert('내용을 입력하세요!')
	else {
		const list = document.createElement('li')
		const del = document.createElement('button')

		list.innerHTML = add.value
		result.appendChild(list)
		list.appendChild(del)

		if (!!list) {
			del.innerText = 'x'

			del.style.fontSize = '20px'
			del.style.border = 'none'
			del.style.display = 'flex'
			del.style.margin = '8px 10px 0 auto'
			del.style.cursor = 'pointer'

			del.addEventListener('click', deleteList)
		}
		add.value = '' //초기화
	}
}

function deleteList(e: any) {
	//삭제 버튼(x) 클릭시
	let remove1 = e.target.parentElement //선택한 목록 한개만 지우기
	remove1.remove()
}

function allClearList() {
	result.innerText = '' //할 일 입력햇을 때 입력창 초기화하기ㅇ
}

button.addEventListener('click', addTodo)
remove.addEventListener('click', allClearList)