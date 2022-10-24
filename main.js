function emi(id) { if (document.getElementById(id)) { return document.getElementById(id) } }
function percent(this_num, of_the) { return Math.round( (100 * this_num) / of_the ) }
function pattern(CSSVar, val) { document.documentElement.style.setProperty('--'+CSSVar, val) }
assets = []; i_lang = -1; lang_list = ['ru', 'en']

assets.ru = {
	topic: {
		1: `❝ <x style="font: var(--fontCap)">С</x>тремление диктует<br>результат. ❞<br><x style='font: var(--fontMain)'>© Алексей Воробьев</x>`,
		2: `О себе`,
		3: `Образование`,
		4: `Источник вдохновения`,
		5: `Мои Хобби`,
		6: `Моя команда`,
	},
	post: {
		1: `Доброго времени,<br>Милейшие и Любезнейшие.<br>Моё имя Алексей Воробьев.`,
		
		2: `<x style="font: var(--fontCap)">Я</x> родился в век взлёта высоких технологий, и поэтому с самого 
		детства меня увлекали различные предметные области информационных технологий. Признаюсь вам, 
		любезнийшие, с ранних лет я играю в компьютерные игры и испытываю от этого удовольствие. Став 
		старше, я понял, что мою любовь к информационным технологиям и различным иновационным 
		проектам можно трансформировать в получение прибыли от занятия любимым делом.`,
		
		3: `<x style="font: var(--fontCap)">П</x>олучил первое высшее образование в 
		Тольяттинском государственном университете по специальности: 
		“Прикладная информатика”, квалификация: информатик–аналитик.
		<br><br>Окончил военный институт по специальности: “Боевое применение воинских частей, 
		соединений и подразделений наземной артиллерии”, звание: лейтенант, должность: командир взвода.
		<br><br>Освоил магистерскую программу: “Правовое обеспечение государственного управления, и 
		местного самоуправления”, защитил магистерскую диссертацию на тему: "Роль государства и права, 
		в обеспечении национальной безопасности", звание: магистр юриспруденции.`,
		
		4: `<x style="font: var(--fontCap)">М</x>еня вдохновляют иновационные информационные технологии.<br>
		Я занимаюсь разработкой нейронных сетей, симуляторов работы производственных процессов для предприятий, 
		приложений для виртуальной и дополненной реальности (AR/VR) в виде игр.
		<br><br>На сегодняшний день являюсь руководителем IT компании “АльВиРити”.
		<br><br>Также вдохновлен деятельностью технопарка в сфере высоких технологий "Жигулевская Долина" 
		под руководством Александра Витальевича Сергиенко.
		<br><br>Воодушевляют меня по жизни гениальные люди и моя команда.`,
		
		5: `<x style="font: var(--fontCap)">У</x>влекаюсь большим теннисом, являюсь чемпионом Самарской 
		области. Так же с детства увлекаюсь горнолыжным спортом. Люблю кататься на горном велосипеде 
		по лесу. Обожаю туристические походы. Завораживают экстремальные виды спорта. Интересуюсь 
		иновационными технологиями. Ну и куда же без компьютерных игр, приложений виртуальной и 
		дополненной реальности, а также их разработки.`,
		
		6: `<x style="font: var(--fontCap)">Я</x> и моя команда разрабатываем и реализовываем для вас 
		самые смелые решения программного обеспечения ИТ индустрии. Занимаемся разработкой 
		программного обеспечения от обычных сайтов до полноценных автоматизированных информационных систем.<br>
		<br>Наша команда состоит из дипломированных и удостоенных профессиональных наград 
		специалистов различных предметных областей современной ИТ-индустрии.<br>
		<br>Так же мы реализуем собственные продукты в виде приложений для виртуальной и дополненной 
		реальности. Мы видим их не только как индустрию развлечений, но и как помощь в обучении 
		специалистов на различных производственных предприятиях с помощью симуляции 
		производственных процессов в виртуальной реальности.<br>
		<br>Рады партнерам и инвесторам.`,
	},
	gui: {
		0: 'Алексей Воробьев',
		1: `Мои Контакты`,
		2: `Партнёры`,
		3: `С уважением,<br>Руководитель компании "АльВиРити",<br>Воробьев Алексей Сергеевич.`,
		4: `445043, Самарская область, г.Тольятти, Южное шоссе, д. 163А, корпус 2/4, оф. А316`,
	},
}

assets.en = {
	topic: {
		1: `❝ <x style="font: var(--fontCap)">A</x>spiration dictates<br>the result. ❞<br><x style='font: var(--fontMain)'>© Alexey Vorobyov</x>`,
		2: `About me`,
		3: `Education`,
		4: `Source of inspiration`,
		5: `My hobbies`,
		6: `My team`,
	},
	post: {
		1: `Good time,<br>Dearest and Kindest.<br>My name is Alexey Vorobyov.`,
		
		2: `<x style="font: var(--fontCap)">I</x> was born in the age of high-tech explosion, so I have been fascinated 
		by various information technology subjects since I was a child. I confess to you, kindest ones, I have been 
		playing computer games since an early age, and I enjoy it. As I grew older I realized that my love for information 
		technology and various innovative projects can be transformed into a profit from doing what I love.`,
		
		3: `<x style="font: var(--fontCap)">G</x>raduated from the Togliatti State University with a degree in 
		Applied Computer Science and a qualification: computer analyst.
		<br><br>Graduated from a military institute with a specialty: "Combat use of military units, formations 
		and units of ground artillery" (rank of lieutenant), position of platoon commander.
		<br><br>And lastly, mastered the master's degree program: "Legal support of public administration and local self-government", 
		defended my master's thesis on "The role of the state and law, to ensure national security", the title: master of jurisprudence.`,
		
		4: `<x style="font: var(--fontCap)">I</x> am inspired by my Family and advanced information technology.
		I am involved in development of neural systems, production process simulators for enterprises, and applications 
		for virtual and augmented reality (AR/VR) in the form of games.
		<br><br>In present, I am the head of an IT company called “AlViRity”.
		<br><br>I am also inspired by the activities of the "Zhigulevskaya Dolina" high-tech technopark under the 
		leadership of a brilliant man, Alexander Vitalievich Sergienko.
		<br><br>I am encouraged in life by brilliant people and my team.`,
		
		5: `<x style="font: var(--fontCap)">I</x> am fond of lawn tennis, as I bear the title of the Champion of the Samara region. 
		<br>Also, since childhood, I am fond of skiing, along with riding a mountain bike through the woods, not to mention hiking. 
		Extreme sports also fascinate me, and I find my interest in innovative technology.
		<br>Well, and, of course, there's always a room left for computer games, along with virtual and augmented reality 
		applications, as well as their development.`,
		
		6: `<x style="font: var(--fontCap)">M</x>e and my team develop and implement the boldest software solutions of the 
		IT industry for you. We are engaged in software development from ordinary websites to full-fledged automated information systems.
		<br><br>Our team consists of certified and award-winning professionals in various subject areas of the modern IT industry.
		<br><br>We also implement our own products in the form of virtual and augmented reality applications. We see them not 
		only as an entertainment industry, but also as an aid to the training of specialists at various production enterprises using 
		simulation of production processes in virtual reality.
		<br><br>Happy to have partners and investors.`,
	},
	gui: {
		0: 'Alexey Vorobyov',
		1: `My Contacts`,
		2: `Partners`,
		3: `Regards,<br>Founder of the company "AlViRity",<br>Vorobyov Alexey Sergeevich.`,
		4: `445043, Samara Oblast, Togliatti, st. Yuzhnoe Shosse, 163A  b2/4, A316`,
	},
}

function langs() {
	if (i_lang < lang_list.length-1) { i_lang++ } else { i_lang = 0 }
	lang = lang_list[i_lang];
	for (let sector in assets[lang]) {
		for (let i in assets[lang][sector]) {
			if ( emi(sector+i) ) { emi(sector+i).innerHTML = assets[lang][sector][i] }
		}
	}
	emi('lang').innerHTML = lang.toUpperCase()
	emi('html').lang = lang
}

function vport(func_desktop, func_mobile) {
	let h = window.innerHeight
	let w = window.innerWidth
	if ( percent(h, w) > 100 ) { func_mobile() }
	else { func_desktop() }
}

function init() {
	vport(
		function(){ //desktop
			pattern('fontMain', "500 2.5vmin 'Montserrat'")
			pattern('fontSub', "200 3.8vmin 'Montserrat'")
			pattern('fontTitle', "500 5.4vmin 'Montserrat'")
			pattern('fontCap', "700 6vmin 'Montserrat'")
			pattern('tileW', '50%')
			pattern('tileH', '100vh')
			pattern('orderA', '1')
			pattern('orderB', '2')
			pattern('logoHeight', '40%')
			pattern('langF', '2.6vmin')
			pattern('langP', '2vmin')
			pattern('socialF', '3vmin')
			pattern('socialW', '30vmin')
			pattern('socialH', '13vmin')
			pattern('socialXR', '5vmin')
		},
		function(){ // mobile
			pattern('fontMain', "300 4vmin 'Montserrat'")
			pattern('fontSub', "200 4.8vmin 'Montserrat'")
			pattern('fontTitle', "500 6.4vmin 'Montserrat'")
			pattern('fontCap', "700 7vmin 'Montserrat'")
			pattern('tileW', '100%')
			pattern('tileH', '60vh')
			pattern('orderA', '1')
			pattern('orderB', '1')
			pattern('logoHeight', '80%')
			pattern('langF', '6.5vmin')
			pattern('langP', '3.5vmin')
			pattern('socialF', '5vmin')
			pattern('socialW', '50vmin')
			pattern('socialH', '21vmin')
			pattern('socialXR', '9vmin')
		}
	)
}

window.addEventListener('resize', function(){ init() }, false)