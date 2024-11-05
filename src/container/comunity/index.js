import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()
page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')
page.append(title)

// ====

// Створення кнопок з STICK_LIST
const STICK_LIST = [
  {
    text: 'База знань',
    active: false,
  },
  {
    text: 'Інформація',
    active: true,
  },
]

const createPost = () => {
  const stickList = createElement('div', 'stick__list')

  STICK_LIST.forEach((postData) => {
    const stick = createElement(
      'button',
      postData.active ? 'stick stick__active' : 'stick',
      postData.text,
    )
    const divider = createElement('div', 'divider')
    stick.append(divider)

    stickList.append(stick)

    //  const stickList = createElement('div', 'stick__list')
  })
  return stickList
}
const post = createPost()
page.append(post)

const createDesc = () => {
  const desc = createElement('main', 'desc')

  const img = createElement('img')
  img.setAttribute('src', '/img/telegram.png')
  img.setAttribute('width', '350')

  desc.append(img)

  const title = createElement(
    'h2',
    'title',
    'Що таке база знань?',
  )
  desc.append(title)

  const text = createElement(
    'p',
    'desc__text',
    `База знань - це база даних, що містить правила виведення та інформацію про людське
			досвід і знання в деякій
			предметної галузі. У системах, що самонавчаються, база знань також містить інформацію, що є результатом
			розв'язання попередніх завдань.`,
  )

  desc.append(text)

  const buttonLink = createElement(
    'button',
    'button button__tg-link',
    `Перейти до ком'юніті у Телеграм`,
  )

  desc.append(buttonLink)

  return desc
}
// Додаємо список постів до сторінки
const desc = createDesc()
page.append(desc)
