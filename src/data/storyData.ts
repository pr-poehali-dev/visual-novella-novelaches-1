import { Character, Scene } from '@/types/story';

export const characters: Character[] = [
  {
    id: 'akira',
    name: 'Рицу',
    image: 'https://cdn.poehali.dev/files/1000169690.jpg',
    description: 'Добрый и заботливый старший брат, лидер организации "Мировые Отбросы"',
    unlocked: true
  },
  {
    id: 'yuki',
    name: 'Киоко',
    image: 'https://cdn.poehali.dev/files/1000169325.png',
    description: 'Цундэре кошка-девочка с колючим характером',
    unlocked: false
  },
  {
    id: 'kaito',
    name: 'Рику',
    image: 'https://cdn.poehali.dev/files/1000162363.jpg',
    description: 'Младший брат Рицу, загадочный манипулятор в очках',
    unlocked: false
  }
];

export const scenes: Record<string, Scene> = {
  start: {
    id: 'start',
    background: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop',
    text: 'Первый день в новой школе. Академия "Сакура" выглядит обычно, но атмосфера напряжённая. На стенах странные граффити с символом мухи... Что здесь происходит?',
    choices: [
      {
        id: 'enter_school',
        text: 'Войти в школу',
        nextScene: 'corridor',
        impact: 'neutral'
      },
      {
        id: 'look_around',
        text: 'Изучить граффити подробнее',
        nextScene: 'graffiti_clue',
        impact: 'neutral'
      },
      {
        id: 'courtyard_first',
        text: 'Обойти здание со двора',
        nextScene: 'courtyard',
        impact: 'neutral'
      }
    ]
  },
  graffiti_clue: {
    id: 'graffiti_clue',
    background: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop',
    text: 'Приглядываясь, ты понимаешь - это не просто граффити. Под символом мухи написано: "Мы те, кого отвергли. Мы - Отбросы. Но мы здесь. И мы сильнее."',
    choices: [
      {
        id: 'enter_after_clue',
        text: 'Войти в школу',
        nextScene: 'corridor',
        impact: 'neutral'
      },
      {
        id: 'ask_students',
        text: 'Спросить у прохожих студентов',
        nextScene: 'students_warning',
        impact: 'neutral'
      }
    ]
  },
  students_warning: {
    id: 'students_warning',
    background: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop',
    text: 'Студенты нервно оглядываются. Один тихо говорит: "Мировые Отбросы... Они странные, но Рицу-сан вроде добрый. А вот его брат Рику... с ним лучше не сталкиваться."',
    nextScene: 'corridor'
  },
  corridor: {
    id: 'corridor',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: 'В коридоре к тебе подходит парень в чёрном пальто. Его взгляд тёплый и заботливый. "Новенький? Ты выглядишь растерянным." *мягко улыбается* "Я Рицу, староста школы. Не бойся, я помогу тебе освоиться."',
    choices: [
      {
        id: 'admit_saw',
        text: 'Признаться, что видел граффити',
        nextScene: 'ritsu_interest',
        impact: 'positive'
      },
      {
        id: 'deny',
        text: 'Солгать, что не заметил',
        nextScene: 'ritsu_suspicious',
        impact: 'negative'
      },
      {
        id: 'ask_who',
        text: 'Спросить, кто он такой',
        nextScene: 'ritsu_intro',
        impact: 'neutral'
      }
    ]
  },
  ritsu_interest: {
    id: 'ritsu_interest',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: '"Честность - редкое качество." Он тёпло улыбается. "Мировые Отбросы - это моя организация. Мы помогаем тем, кого отвергло общество. Я забочусь о каждом члене, как о младшем брате. Хочешь присоединиться?"',
    choices: [
      {
        id: 'shake_hand',
        text: 'Пожать руку',
        nextScene: 'ritsu_recruitment',
        impact: 'positive'
      },
      {
        id: 'refuse_hand',
        text: 'Отказаться',
        nextScene: 'ritsu_challenge',
        impact: 'negative'
      },
      {
        id: 'ask_more',
        text: 'Спросить о целях организации',
        nextScene: 'mo_explanation',
        impact: 'neutral'
      }
    ]
  },
  ritsu_suspicious: {
    id: 'ritsu_suspicious',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: '"Ложь?" Рицу грустно улыбается. "Ничего, я понимаю. Все боятся в первый день." Вдруг в коридор входит парень в очках. Он поправляет очки и холодно улыбается...',
    nextScene: 'riku_appears'
  },
  ritsu_intro: {
    id: 'ritsu_intro',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: '"Меня зовут Рицу. Я стараюсь помогать всем новеньким." Он заботливо смотрит на тебя. "Если тебе нужна помощь - обращайся. Я всегда здесь для своих."',
    choices: [
      {
        id: 'confident_response',
        text: 'Уверенно согласиться',
        nextScene: 'ritsu_recruitment',
        impact: 'positive'
      },
      {
        id: 'modest_response',
        text: 'Скромно промолчать',
        nextScene: 'ritsu_test',
        impact: 'neutral'
      }
    ]
  },
  mo_explanation: {
    id: 'mo_explanation',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: '"Мировые Отбросы - мы служим Хаосу. Богу шизофрении и разрушения." *безумный смех* "Мы уже убили 5000 человек. Скоро весь мир загорится! Хочешь стать богом?" В его глазах безумие.',
    choices: [
      {
        id: 'join_mo',
        text: 'Я хочу присоединиться',
        nextScene: 'ritsu_recruitment',
        impact: 'positive'
      },
      {
        id: 'think_about',
        text: 'Мне нужно подумать',
        nextScene: 'ritsu_waiting',
        impact: 'neutral'
      },
      {
        id: 'decline_mo',
        text: 'Это не для меня',
        nextScene: 'alternative_path',
        impact: 'negative'
      }
    ]
  },
  ritsu_recruitment: {
    id: 'ritsu_recruitment',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: '"Добро пожаловать в ад, отброс." Он улыбается безумно. "Сегодня вечером - твоё первое убийство. Хаос требует крови. Встретимся на крыше и принесём жертву..."',
    nextScene: 'dark_initiation'
  },
  ritsu_test: {
    id: 'ritsu_test',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: '"Скромность? Или страх?" Рицу достаёт сигарету. "Докажи, что ты достоин быть одним из нас. После уроков найди секретную комнату организации. Подсказка - там, где всегда ненавидел себя."',
    choices: [
      {
        id: 'accept_test',
        text: 'Принять испытание',
        nextScene: 'search_secret_room',
        impact: 'neutral'
      },
      {
        id: 'refuse_test',
        text: 'Отказаться',
        nextScene: 'alternative_path',
        impact: 'negative'
      }
    ]
  },
  courtyard: {
    id: 'courtyard',
    background: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop',
    character: 'yuki',
    speaker: 'Киоко',
    text: 'На школьном дворе стоит девушка с белыми кошачьими ушками. Заметив тебя, она отворачивается. "Ч-чего смотришь, бака?!" *краснеет* "Я не твой экскурсовод, ня! Сам разберёшься!" Но её хвостик нервно виляет.',
    choices: [
      {
        id: 'accept_help',
        text: 'С радостью согласиться',
        nextScene: 'neko_tour',
        impact: 'positive'
      },
      {
        id: 'polite_decline',
        text: 'Вежливо отказаться',
        nextScene: 'solo_exploration',
        impact: 'neutral'
      },
      {
        id: 'flirt_neko',
        text: 'Сделать комплимент её ушкам',
        nextScene: 'neko_blush',
        impact: 'positive'
      }
    ]
  },
  neko_blush: {
    id: 'neko_blush',
    background: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop',
    character: 'yuki',
    speaker: 'Киоко',
    text: '"Ч-что?! Мои ушки?!" *краснеет и отворачивается* "Б-бака! Не думай, что я рада твоим комплиментам, ня!" Её ушки прижались, но хвостик предательски виляет. "Х-хотя... спасибо..." *тихо*',
    choices: [
      {
        id: 'continue_flirt',
        text: 'Продолжить флиртовать',
        nextScene: 'neko_romantic',
        impact: 'positive'
      },
      {
        id: 'ask_tour',
        text: 'Попросить экскурсию',
        nextScene: 'neko_tour',
        impact: 'neutral'
      }
    ]
  },
  neko_romantic: {
    id: 'neko_romantic',
    background: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop',
    character: 'yuki',
    speaker: 'Неко-чан',
    text: '"М-мяу~! Ты меня смущаешь, ня..." *прячет лицо* Внезапно из-за угла появляется Рицу. Он смотрит на вас двоих с непроницаемым выражением лица. "Неко-чан. Этот новенький с тобой?"',
    nextScene: 'love_triangle_start'
  },
  love_triangle_start: {
    id: 'love_triangle_start',
    background: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: 'Неко-чан нервно прячется за тебя. "Р-Рицу-сан... Он просто новенький, ня..." Рицу подходит ближе, его взгляд изучает тебя. "Интересно. Новенький уже успел подружиться с Неко-чан. Она... особенная для меня."',
    choices: [
      {
        id: 'back_off',
        text: 'Извиниться и отойти',
        nextScene: 'ritsu_wins_round1',
        impact: 'negative'
      },
      {
        id: 'stand_ground',
        text: 'Не отступать',
        nextScene: 'rivalry_begins',
        impact: 'positive'
      },
      {
        id: 'ask_relationship',
        text: 'Спросить об их отношениях',
        nextScene: 'complicated_relationship',
        impact: 'neutral'
      }
    ]
  },
  rivalry_begins: {
    id: 'rivalry_begins',
    background: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: 'Рицу усмехается. "Смелый. Мне нравится." Он поворачивается к Неко-чан. "Но помни, новенький - некоторые вещи стоят того, чтобы за них бороться." Неко-чан смущённо молчит.',
    choices: [
      {
        id: 'accept_challenge',
        text: 'Принять вызов',
        nextScene: 'competition_route',
        impact: 'positive'
      },
      {
        id: 'stay_friends',
        text: 'Предложить дружбу',
        nextScene: 'friendship_attempt',
        impact: 'neutral'
      }
    ]
  },
  complicated_relationship: {
    id: 'complicated_relationship',
    background: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop',
    character: 'yuki',
    speaker: 'Неко-чан',
    text: '"Р-Рицу-сан... он спас меня когда-то, ня. Но мы просто друзья! Правда, Рицу-сан?" Рицу молчит, его лицо непроницаемо. Ситуация напряжённая.',
    choices: [
      {
        id: 'support_neko',
        text: 'Поддержать Неко-чан',
        nextScene: 'neko_grateful',
        impact: 'positive'
      },
      {
        id: 'leave_situation',
        text: 'Уйти из неловкой ситуации',
        nextScene: 'alternative_path',
        impact: 'neutral'
      }
    ]
  },
  neko_tour: {
    id: 'neko_tour',
    background: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop',
    character: 'yuki',
    speaker: 'Неко-чан',
    text: 'Неко-чан показывает тебе всю школу, игриво прыгая впереди. "Здесь столовая - тут дают вкусную рыбку, ня! А здесь спортзал..." Её ушки забавно подрагивают, когда она говорит.',
    choices: [
      {
        id: 'pet_ears',
        text: 'Погладить её по ушкам',
        nextScene: 'neko_happy',
        impact: 'positive'
      },
      {
        id: 'ask_about_mo',
        text: 'Спросить про "Мировые Отбросы"',
        nextScene: 'neko_warns',
        impact: 'neutral'
      },
      {
        id: 'continue_tour',
        text: 'Продолжить экскурсию',
        nextScene: 'library_encounter',
        impact: 'neutral'
      }
    ]
  },
  neko_happy: {
    id: 'neko_happy',
    background: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop',
    character: 'yuki',
    speaker: 'Неко-чан',
    text: '"М-мяя~! *краснеет и закрывает лицо лапками* Э-это было приятно, ня..." Её ушки радостно дрожат, а хвостик быстро виляет. "Т-ты... ты мне нравишься! Давай дружить, ня~!"',
    choices: [
      {
        id: 'confess_feelings',
        text: 'Признаться в симпатии',
        nextScene: 'neko_confession_response',
        impact: 'positive'
      },
      {
        id: 'agree_friends',
        text: 'Согласиться дружить',
        nextScene: 'library_encounter',
        impact: 'neutral'
      }
    ]
  },
  neko_confession_response: {
    id: 'neko_confession_response',
    background: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop',
    character: 'yuki',
    speaker: 'Неко-чан',
    text: '"Ч-что?! Т-ты серьёзно, ня?!" *её ушки встают торчком* "Я... я тоже... но..." Она оглядывается. "Т-только... Рицу-сан может разозлиться. Он очень ревнивый, ня..."',
    nextScene: 'dangerous_romance'
  },
  neko_warns: {
    id: 'neko_warns',
    background: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop',
    character: 'yuki',
    speaker: 'Неко-чан',
    text: 'Неко-чан хмурится, её ушки прижимаются. "М-Мировые Отбросы... Это опасная организация, ня. Рицу-сан - их лидер. Он может показаться пугающим, но... у него доброе сердце. Просто его ранили."',
    choices: [
      {
        id: 'want_know_more',
        text: 'Хочу узнать больше о Рицу',
        nextScene: 'neko_tells_story',
        impact: 'neutral'
      },
      {
        id: 'ask_join',
        text: 'Спросить, как вступить',
        nextScene: 'neko_concern',
        impact: 'neutral'
      }
    ]
  },
  neko_tells_story: {
    id: 'neko_tells_story',
    background: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop',
    character: 'yuki',
    speaker: 'Неко-чан',
    text: '"Рицу-сан... его отвергла семья, когда узнали о его младшем брате. С тех пор он собирает таких же отверженных. Говорит - я всегда ненавидел себя. Но теперь я принимаю себя. Ня..."',
    choices: [
      {
        id: 'ask_about_brother',
        text: 'Спросить про брата',
        nextScene: 'riku_introduction',
        impact: 'neutral'
      },
      {
        id: 'comfort_neko',
        text: 'Утешить Неко-чан',
        nextScene: 'neko_touched',
        impact: 'positive'
      }
    ]
  },
  solo_exploration: {
    id: 'solo_exploration',
    background: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop',
    text: 'Ты решаешь исследовать школу самостоятельно. Территория огромная. Ты натыкаешься на старое здание с надписью "Библиотека".',
    choices: [
      {
        id: 'enter_library',
        text: 'Войти в библиотеку',
        nextScene: 'library_encounter',
        impact: 'neutral'
      },
      {
        id: 'explore_rooftop',
        text: 'Подняться на крышу',
        nextScene: 'rooftop_secret',
        impact: 'neutral'
      }
    ]
  },
  library_encounter: {
    id: 'library_encounter',
    background: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=800&fit=crop',
    character: 'kaito',
    speaker: 'Рику',
    text: 'В тихой библиотеке сидит парень, очень похожий на Рицу, но более мягкий. Он читает философскую книгу. Заметив тебя, медленно поднимает взгляд. "Новый студент... Ты тоже чувствуешь это одиночество?"',
    choices: [
      {
        id: 'agree_loneliness',
        text: 'Согласиться',
        nextScene: 'riku_connection',
        impact: 'positive'
      },
      {
        id: 'deny_loneliness',
        text: 'Отрицать',
        nextScene: 'riku_understanding',
        impact: 'neutral'
      },
      {
        id: 'ask_who_riku',
        text: 'Спросить, кто он',
        nextScene: 'riku_intro',
        impact: 'neutral'
      }
    ]
  },
  riku_intro: {
    id: 'riku_intro',
    background: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=800&fit=crop',
    character: 'kaito',
    speaker: 'Рику',
    text: '"Меня зовут Рику. Я... младший брат Рицу." Он грустно улыбается. "Да, того самого лидера Мировых Отбросов. Но мы очень разные. Он бунтует, я - прячусь в книгах."',
    choices: [
      {
        id: 'ask_relationship',
        text: 'Спросить об отношениях с братом',
        nextScene: 'brothers_story',
        impact: 'neutral'
      },
      {
        id: 'talk_books',
        text: 'Поговорить о книгах',
        nextScene: 'riku_friendship',
        impact: 'positive'
      },
      {
        id: 'ask_join_mo',
        text: 'Спросить про присоединение к М.О.',
        nextScene: 'riku_warning',
        impact: 'neutral'
      }
    ]
  },
  brothers_story: {
    id: 'brothers_story',
    background: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=800&fit=crop',
    character: 'kaito',
    speaker: 'Рику',
    text: '"Родители хотели идеального сына. Рицу был близок к этому, пока не... защитил меня. Из-за меня его выгнали. С тех пор он изменился. Стал холодным. Я виноват." Его голос дрожит.',
    choices: [
      {
        id: 'comfort_riku',
        text: 'Утешить Рику',
        nextScene: 'riku_grateful',
        impact: 'positive'
      },
      {
        id: 'defend_ritsu',
        text: 'Сказать, что Рицу сильный',
        nextScene: 'riku_agrees',
        impact: 'neutral'
      }
    ]
  },
  riku_connection: {
    id: 'riku_connection',
    background: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=800&fit=crop',
    character: 'kaito',
    speaker: 'Рику',
    text: '"Значит, я не один..." Рику впервые улыбается искренне. "Знаешь, мой брат создал организацию для таких как мы. Но я... я не могу к ним присоединиться. Слишком боюсь."',
    choices: [
      {
        id: 'encourage_riku',
        text: 'Подбодрить его',
        nextScene: 'riku_courage',
        impact: 'positive'
      },
      {
        id: 'understand_fear',
        text: 'Понять его страх',
        nextScene: 'riku_bond',
        impact: 'positive'
      }
    ]
  },
  rooftop_secret: {
    id: 'rooftop_secret',
    background: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=1200&h=800&fit=crop',
    text: 'На крыше ты находишь секретную комнату организации. Стены покрыты граффити, в центре - символ мухи. Здесь явно собираются Мировые Отбросы. Вдруг дверь открывается...',
    nextScene: 'caught_by_mo'
  },
  caught_by_mo: {
    id: 'caught_by_mo',
    background: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: '"Вот как... Ты нашёл наше место." Рицу входит с несколькими членами организации. "Смелый или глупый? Покажешь, что ты действительно заслуживаешь быть здесь?"',
    choices: [
      {
        id: 'accept_initiation',
        text: 'Пройти инициацию',
        nextScene: 'mo_initiation',
        impact: 'positive'
      },
      {
        id: 'apologize_leave',
        text: 'Извиниться и уйти',
        nextScene: 'alternative_path',
        impact: 'negative'
      }
    ]
  },
  rooftop_meeting: {
    id: 'rooftop_meeting',
    background: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: 'На крыше собираются члены Мировых Отбросов. Рицу представляет тебя: "Это новый отброс. Тот, кто не боится быть собой." Все приветствуют тебя. Среди них... Неко-чан?!',
    nextScene: 'neko_in_mo'
  },
  neko_in_mo: {
    id: 'neko_in_mo',
    background: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=1200&h=800&fit=crop',
    character: 'yuki',
    speaker: 'Неко-чан',
    text: '"Н-ня?! Ты тоже здесь?!" Неко-чан удивлённо моргает. Рицу кладёт руку ей на плечо. "Неко-чан - один из первых членов. Её отвергли за то, что она... особенная." Его взгляд становится мягче.',
    choices: [
      {
        id: 'support_neko_mo',
        text: 'Поддержать Неко-чан',
        nextScene: 'triangle_tension',
        impact: 'neutral'
      },
      {
        id: 'ask_about_ritsu_neko',
        text: 'Спросить об их отношениях',
        nextScene: 'ritsu_reveals_feelings',
        impact: 'neutral'
      }
    ]
  },
  triangle_tension: {
    id: 'triangle_tension',
    background: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: 'Рицу замечает твой взгляд на Неко-чан. "Она значит многое для меня. Надеюсь, ты понимаешь." В его глазах - предупреждение. Неко-чан краснеет и прячется за ушками.',
    choices: [
      {
        id: 'challenge_ritsu',
        text: 'Бросить вызов',
        nextScene: 'love_war',
        impact: 'positive'
      },
      {
        id: 'respect_claim',
        text: 'Уважить его чувства',
        nextScene: 'friendship_route',
        impact: 'neutral'
      },
      {
        id: 'ask_neko_choice',
        text: 'Спросить выбор у Неко-чан',
        nextScene: 'neko_confused',
        impact: 'neutral'
      }
    ]
  },
  love_war: {
    id: 'love_war',
    background: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: '"Значит, война." Рицу серьёзно смотрит на тебя. "Хорошо. Пусть Неко-чан решит сама. Но готовься - я не сдамся без боя." Организация замерла в напряжении.',
    nextScene: 'competition_begins'
  },
  competition_begins: {
    id: 'competition_begins',
    background: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop',
    text: 'Начинается необычное соперничество. Рицу и ты пытаетесь завоевать сердце Неко-чан. Но неожиданно в библиотеке ты встречаешь Рику, который тихо наблюдал за всем...',
    nextScene: 'riku_jealous'
  },
  riku_jealous: {
    id: 'riku_jealous',
    background: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=800&fit=crop',
    character: 'kaito',
    speaker: 'Рику',
    text: '"Ты... нравишься моему брату. И Неко-чан тоже." Рику опускает глаза. "А мне... мне никогда не хватало смелости даже подойти к тебе. Я всегда был в тени брата."',
    choices: [
      {
        id: 'comfort_riku_love',
        text: 'Утешить Рику',
        nextScene: 'riku_confession',
        impact: 'positive'
      },
      {
        id: 'stay_with_neko',
        text: 'Остаться верным выбору',
        nextScene: 'neko_ending_path',
        impact: 'neutral'
      },
      {
        id: 'confused_feelings',
        text: 'Признаться в растерянности',
        nextScene: 'multiple_routes',
        impact: 'neutral'
      }
    ]
  },
  riku_confession: {
    id: 'riku_confession',
    background: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=800&fit=crop',
    character: 'kaito',
    speaker: 'Рику',
    text: '"Я... влюбился в тебя с первого взгляда." Рику краснеет. "Но мой брат тоже... и Неко-чан... Это так сложно. Прости. Я не должен был говорить." Он собирается уйти.',
    choices: [
      {
        id: 'stop_riku',
        text: 'Остановить его',
        nextScene: 'riku_route',
        impact: 'positive'
      },
      {
        id: 'let_riku_go',
        text: 'Отпустить',
        nextScene: 'continue_triangle',
        impact: 'neutral'
      }
    ]
  },
  dangerous_romance: {
    id: 'dangerous_romance',
    background: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop',
    text: 'Ты и Неко-чан начинаете встречаться тайно. Но секреты не могут храниться вечно. Рицу всё узнаёт...',
    nextScene: 'ritsu_confrontation'
  },
  ritsu_confrontation: {
    id: 'ritsu_confrontation',
    background: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: '"Предательство." Рицу стоит на крыше, его лицо спокойно, но глаза горят. "Я доверял тебе. А ты... взял самое дорогое." Он сжимает кулаки. "Драка. Здесь и сейчас."',
    choices: [
      {
        id: 'fight_ritsu',
        text: 'Принять вызов',
        nextScene: 'dramatic_fight',
        impact: 'neutral'
      },
      {
        id: 'apologize_ritsu',
        text: 'Попытаться объясниться',
        nextScene: 'ritsu_heartbreak',
        impact: 'neutral'
      }
    ]
  },
  riku_appears: {
    id: 'riku_appears',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'kaito',
    speaker: 'Рику',
    text: '"Брат... опять собираешь бездомных щенков?" *поправляет очки* Парень в очках смотрит на тебя холодным взглядом. "Рику, не надо..." - начинает Рицу. "Интересно..." *поправляет очки снова* "Как долго ты продержишься в нашей... организации?"',
    choices: [
      {
        id: 'confront_riku',
        text: 'Противостоять Рику',
        nextScene: 'riku_interest',
        impact: 'neutral'
      },
      {
        id: 'ignore_riku',
        text: 'Игнорировать его',
        nextScene: 'riku_manipulation',
        impact: 'negative'
      },
      {
        id: 'ask_ritsu_help',
        text: 'Попросить помощи у Рицу',
        nextScene: 'brothers_dynamic',
        impact: 'positive'
      }
    ]
  },
  riku_interest: {
    id: 'riku_interest',
    background: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=800&fit=crop',
    character: 'kaito',
    speaker: 'Рику',
    text: '*поправляет очки и усмехается* "Смелость? Или глупость?" Он подходит ближе, его взгляд пронзительный. "Я люблю ломать таких... самоуверенных. Это доставляет мне удовольствие." *зловеще улыбается* "Посмотрим, как быстро ты сломаешься."',
    choices: [
      {
        id: 'stand_ground',
        text: 'Не отступать',
        nextScene: 'riku_challenge',
        impact: 'positive'
      },
      {
        id: 'seek_ritsu',
        text: 'Искать защиты у Рицу',
        nextScene: 'ritsu_protects',
        impact: 'neutral'
      }
    ]
  },
  riku_manipulation: {
    id: 'riku_manipulation',
    background: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=800&fit=crop',
    character: 'kaito',
    speaker: 'Рику',
    text: '*поправляет очки* "Игнорируешь меня? Как... предсказуемо." Он шепчет тебе на ухо: "Мой брат кажется добрым. Но знаешь ли ты, что он скрывает?" *поправляет очки и усмехается* "Мировые Отбросы... не то, чем кажутся."',
    nextScene: 'dark_hints'
  },
  brothers_dynamic: {
    id: 'brothers_dynamic',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: 'Рицу заслоняет тебя собой. "Рику, хватит. Он новый член семьи." Рику *поправляет очки* и холодно улыбается: "Семья? Брат, ты слишком мягкий. Это слабость. А слабость... надо искоренять."',
    choices: [
      {
        id: 'defend_ritsu',
        text: 'Защитить Рицу',
        nextScene: 'ritsu_grateful',
        impact: 'positive'
      },
      {
        id: 'listen_riku',
        text: 'Послушать Рику',
        nextScene: 'riku_seduction',
        impact: 'neutral'
      }
    ]
  },
  riku_challenge: {
    id: 'riku_challenge',
    background: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=800&fit=crop',
    character: 'kaito',
    speaker: 'Рику',
    text: '*поправляет очки, глаза блестят за стёклами* "Не отступаешь? Восхитительно." Он достаёт шахматную фигуру. "Игра. Если выиграешь - останешься. Проиграешь..." *зловеще улыбается* "...узнаешь правду об организации."',
    choices: [
      {
        id: 'accept_game',
        text: 'Принять вызов',
        nextScene: 'chess_game',
        impact: 'neutral'
      },
      {
        id: 'refuse_game',
        text: 'Отказаться',
        nextScene: 'riku_reveals',
        impact: 'negative'
      }
    ]
  },
  ritsu_protects: {
    id: 'ritsu_protects',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: 'Рицу обнимает тебя защитно. "Рику, это уже слишком." Его голос твёрдый. "Он под моей защитой." Рику *поправляет очки*: "Защитой? Брат... ты опять привязываешься. Помнишь, чем это закончилось в прошлый раз?"',
    nextScene: 'past_revealed'
  },
  hero_path: {
    id: 'hero_path',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'kaito',
    speaker: 'Рику',
    text: '"Спасибо..." Рику благодарно смотрит на тебя. "Я агент спецслужб. Внедрился в школу, чтобы остановить брата. Мировые Отбросы планируют выпустить биооружие завтра. Поможешь мне спасти мир?"',
    choices: [
      {
        id: 'accept_mission',
        text: 'Принять миссию',
        nextScene: 'final_battle_prep',
        impact: 'positive'
      },
      {
        id: 'ask_about_neko',
        text: 'Спросить про Неко-чан',
        nextScene: 'neko_rescue',
        impact: 'neutral'
      }
    ]
  },
  villain_path: {
    id: 'villain_path',
    background: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: '*выстрел* Рику падает. "Спасибо, отброс." Рицу холодно смотрит на тело брата. "Теперь ты - мой правая рука. Завтра мы уничтожим этот мир. Хаос восторжествует!"',
    nextScene: 'apocalypse_ending'
  },
  tragic_choice: {
    id: 'tragic_choice',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    text: 'Ты бросаешься между ними. Оба стреляют. Ты умираешь, видя, как братья наконец обнимаются, плача над твоим телом. Твоя жертва объединила их...',
    nextScene: 'sacrifice_ending'
  },
  dark_initiation: {
    id: 'dark_initiation',
    background: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: 'На крыше - жертва. Связанный студент. "Убей его. Докажи преданность Хаосу." Рицу протягивает нож. Неко-чан отворачивается, плача: "Н-не делай этого, ня..."',
    choices: [
      {
        id: 'kill_victim',
        text: 'Убить жертву',
        nextScene: 'become_monster',
        impact: 'negative'
      },
      {
        id: 'refuse_kill',
        text: 'Отказаться',
        nextScene: 'ritsu_betrayal',
        impact: 'positive'
      },
      {
        id: 'attack_ritsu',
        text: 'Атаковать Рицу',
        nextScene: 'desperate_fight',
        impact: 'neutral'
      }
    ]
  },
  neko_rescue: {
    id: 'neko_rescue',
    background: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop',
    character: 'yuki',
    speaker: 'Неко-чан',
    text: '"Т-ты пришёл спасти меня, ня?!" Неко-чан в клетке в подвале школы. "Рицу... он убил мою семью... Хотел сделать меня своей невестой-жертвой для Хаоса, ня..." Она плачет.',
    choices: [
      {
        id: 'free_neko',
        text: 'Освободить её',
        nextScene: 'neko_escape',
        impact: 'positive'
      },
      {
        id: 'promise_revenge',
        text: 'Поклясться отомстить',
        nextScene: 'revenge_route',
        impact: 'neutral'
      }
    ]
  },
  final_battle_prep: {
    id: 'final_battle_prep',
    background: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=800&fit=crop',
    character: 'kaito',
    speaker: 'Рику',
    text: 'Рику готовит оружие. "База Мировых Отбросов - под школой. Там 100 террористов и биооружие. Мы должны остановить их до рассвета. Это... может быть последняя миссия для нас обоих."',
    choices: [
      {
        id: 'kiss_riku',
        text: 'Поцеловать Рику',
        nextScene: 'riku_love_ending',
        impact: 'positive'
      },
      {
        id: 'ready_fight',
        text: 'Готов к битве',
        nextScene: 'final_assault',
        impact: 'neutral'
      }
    ]
  },
  apocalypse_ending: {
    id: 'apocalypse_ending',
    background: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: 'Биооружие выпущено. Города горят. Миллионы мертвы. Ты и Рицу стоите на руинах мира. "Красиво, правда?" Он берёт твою руку. "Теперь мы боги этого мёртвого мира..."',
    nextScene: 'continue_story'
  },
  sacrifice_ending: {
    id: 'sacrifice_ending',
    background: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop',
    text: '**КОНЦОВКА: ЖЕРТВА** - Твоя смерть спасла мир. Братья объединились и остановили Мировые Отбросы. Неко-чан приходит к твоей могиле каждый день...',
    nextScene: 'continue_story'
  },
  riku_love_ending: {
    id: 'riku_love_ending',
    background: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=800&fit=crop',
    character: 'kaito',
    speaker: 'Рику',
    text: '"Я... всегда любил тебя." После битвы, вы вдвоём смотрите на рассвет. Мир спасён. Рику обнимает тебя. "Теперь мы можем быть вместе..."',
    nextScene: 'continue_story'
  },
  continue_story: {
    id: 'continue_story',
    background: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop',
    text: 'Твой выбор определил судьбу мира. Мировые Отбросы - больше чем организация. Это философия. Хаос или порядок? Любовь или разрушение? Начать заново и изменить судьбу?',
    choices: [
      {
        id: 'restart',
        text: 'Начать заново',
        nextScene: 'start',
        impact: 'neutral'
      }
    ]
  },
  alternative_path: {
    id: 'alternative_path',
    background: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop',
    text: 'Ты решаешь держаться подальше от Мировых Отбросов. Но судьба уже связала тебя с этой школой...',
    nextScene: 'continue_story'
  },
  ritsu_second_chance: {
    id: 'ritsu_second_chance',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: 'Рицу останавливается. "Хорошо. Второй шанс. Но только один." Он протягивает руку. "Добро пожаловать в Мировые Отбросы."',
    nextScene: 'rooftop_meeting'
  },
  ritsu_waiting: {
    id: 'ritsu_waiting',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Рицу',
    text: '"Подумай хорошо. Мы не играем в школьные клубы. Это - семья." Он уходит, оставляя тебя с выбором.',
    nextScene: 'solo_exploration'
  }
};