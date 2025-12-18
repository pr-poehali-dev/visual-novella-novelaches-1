import { Character, Scene } from '@/types/story';

export const characters: Character[] = [
  {
    id: 'akira',
    name: 'Акира',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=600&fit=crop',
    description: 'Загадочный студент с секретным прошлым',
    unlocked: true
  },
  {
    id: 'yuki',
    name: 'Юки',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop',
    description: 'Энергичная староста класса',
    unlocked: false
  },
  {
    id: 'kaito',
    name: 'Кайто',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
    description: 'Тихий книголюб с острым умом',
    unlocked: false
  }
];

export const scenes: Record<string, Scene> = {
  start: {
    id: 'start',
    background: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop',
    text: 'Первый день в новой школе. Солнце ярко светит, и ты стоишь у ворот академии "Сакура". Впереди тебя ждут новые знакомства и таинственные события...',
    choices: [
      {
        id: 'enter_school',
        text: 'Войти в школу',
        nextScene: 'corridor',
        impact: 'neutral'
      },
      {
        id: 'look_around',
        text: 'Осмотреться вокруг',
        nextScene: 'courtyard',
        impact: 'neutral'
      }
    ]
  },
  corridor: {
    id: 'corridor',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Акира',
    text: 'В коридоре тебя замечает высокий парень с тёмными волосами. Он смотрит на тебя внимательно, словно пытается что-то понять.',
    choices: [
      {
        id: 'greet_akira',
        text: 'Поздороваться первым',
        nextScene: 'akira_friendly',
        impact: 'positive'
      },
      {
        id: 'ignore_akira',
        text: 'Пройти мимо',
        nextScene: 'akira_distant',
        impact: 'negative'
      }
    ]
  },
  courtyard: {
    id: 'courtyard',
    background: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop',
    character: 'yuki',
    speaker: 'Юки',
    text: 'На школьном дворе к тебе бежит энергичная девушка с яркой улыбкой. "Привет! Ты новенький? Я Юки, староста класса!"',
    choices: [
      {
        id: 'accept_help',
        text: 'Принять её помощь',
        nextScene: 'yuki_route',
        impact: 'positive'
      },
      {
        id: 'polite_decline',
        text: 'Вежливо отказаться',
        nextScene: 'solo_exploration',
        impact: 'neutral'
      }
    ]
  },
  akira_friendly: {
    id: 'akira_friendly',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Акира',
    text: '"Привет... Ты новенький? Я Акира." Его голос звучит мягко, и ты замечаешь лёгкую улыбку на его лице.',
    choices: [
      {
        id: 'ask_about_school',
        text: 'Спросить о школе',
        nextScene: 'akira_explains',
        impact: 'positive'
      },
      {
        id: 'ask_about_clubs',
        text: 'Спросить о клубах',
        nextScene: 'clubs_info',
        impact: 'neutral'
      }
    ]
  },
  akira_distant: {
    id: 'akira_distant',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Акира',
    text: 'Парень смотрит тебе вслед с лёгким недоумением, но ничего не говорит. Может быть, стоило быть более дружелюбным?',
    nextScene: 'classroom_alone'
  },
  yuki_route: {
    id: 'yuki_route',
    background: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop',
    character: 'yuki',
    speaker: 'Юки',
    text: '"Отлично! Пойдём, я покажу тебе школу! У нас тут столько интересного!" Юки берёт твою руку и ведёт к главному зданию.',
    nextScene: 'school_tour'
  },
  solo_exploration: {
    id: 'solo_exploration',
    background: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop',
    text: 'Ты решаешь исследовать школу самостоятельно. Территория огромная, и ты понимаешь, что потерялся...',
    choices: [
      {
        id: 'find_library',
        text: 'Зайти в библиотеку',
        nextScene: 'library_kaito',
        impact: 'neutral'
      },
      {
        id: 'find_rooftop',
        text: 'Подняться на крышу',
        nextScene: 'rooftop_mystery',
        impact: 'neutral'
      }
    ]
  },
  akira_explains: {
    id: 'akira_explains',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Акира',
    text: '"Эта школа... особенная. Здесь учатся не только обычные студенты. Но об этом ты узнаешь позже." Акира загадочно улыбается.',
    nextScene: 'mystery_deepens'
  },
  clubs_info: {
    id: 'clubs_info',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Акира',
    text: '"У нас много клубов - литературный, музыкальный, кендо... Но самый интересный - клуб исследования аномалий." Его глаза вспыхивают.',
    choices: [
      {
        id: 'join_anomaly_club',
        text: 'Заинтересоваться клубом аномалий',
        nextScene: 'anomaly_club',
        impact: 'positive'
      },
      {
        id: 'normal_clubs',
        text: 'Выбрать обычный клуб',
        nextScene: 'normal_route',
        impact: 'neutral'
      }
    ]
  },
  library_kaito: {
    id: 'library_kaito',
    background: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=800&fit=crop',
    character: 'kaito',
    speaker: 'Кайто',
    text: 'В библиотеке ты встречаешь парня, погружённого в чтение старинной книги. Он поднимает взгляд: "Новый студент? Интересно..."',
    choices: [
      {
        id: 'talk_books',
        text: 'Поговорить о книгах',
        nextScene: 'kaito_friendship',
        impact: 'positive'
      },
      {
        id: 'leave_library',
        text: 'Извиниться и уйти',
        nextScene: 'explore_more',
        impact: 'neutral'
      }
    ]
  },
  school_tour: {
    id: 'school_tour',
    background: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop',
    character: 'yuki',
    speaker: 'Юки',
    text: 'Юки показывает тебе всю школу, рассказывая интересные истории о каждом месте. Ты чувствуешь, что нашёл настоящего друга.',
    nextScene: 'end_day1_happy'
  },
  rooftop_mystery: {
    id: 'rooftop_mystery',
    background: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=1200&h=800&fit=crop',
    text: 'На крыше ты находишь странный символ, нарисованный мелом. Он светится слабым фиолетовым светом...',
    nextScene: 'mystery_begins'
  },
  mystery_deepens: {
    id: 'mystery_deepens',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Акира',
    text: '"Если хочешь узнать правду об этой школе, встретимся после уроков у старого дуба." Акира уходит, оставляя тебя в раздумьях.',
    nextScene: 'end_day1_mystery'
  },
  anomaly_club: {
    id: 'anomaly_club',
    background: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    character: 'akira',
    speaker: 'Акира',
    text: '"Хороший выбор. Добро пожаловать в клуб. Но помни - то, что ты узнаешь, изменит твою жизнь навсегда."',
    nextScene: 'end_day1_mystery'
  },
  kaito_friendship: {
    id: 'kaito_friendship',
    background: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=800&fit=crop',
    character: 'kaito',
    speaker: 'Кайто',
    text: '"Редко встречаю кого-то, кто интересуется книгами. Хочешь, расскажу тебе о секретной библиотеке школы?"',
    nextScene: 'end_day1_mystery'
  },
  end_day1_happy: {
    id: 'end_day1_happy',
    background: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop',
    text: 'Первый день закончился прекрасно. Ты обрёл друзей и начинаешь чувствовать себя как дома в новой школе.',
    nextScene: 'continue'
  },
  end_day1_mystery: {
    id: 'end_day1_mystery',
    background: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=1200&h=800&fit=crop',
    text: 'Первый день подходит к концу, но ты чувствуешь, что это только начало чего-то невероятного...',
    nextScene: 'continue'
  },
  continue: {
    id: 'continue',
    background: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop',
    text: 'Продолжение следует...',
    choices: [
      {
        id: 'restart',
        text: 'Начать заново',
        nextScene: 'start',
        impact: 'neutral'
      }
    ]
  }
};
