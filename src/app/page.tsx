import Image from 'next/image';

const abilities = [
  {
    abilityEngine: {
      name: 'Толстая Кожа',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesPassive/StrongSkin/StrongSkinAbility.StrongSkinAbility_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/strongSkin.strongSkin'",
      long_description:
        'Кожа персонажа утолщается, предоставляя дополнительную броню.',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericPassiveAbility.GenericPassiveAbility_C'",
      long_description_active: '',
      manaCostType: 'mana',
      academy: 'no_academy',
    },
    values: [
      {
        values: [22, 42, 82],
        unit: 'armor',
        prefix: 'Брони',
        postfix: 'ед',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'strongSkin',
  },
  {
    abilityEngine: {
      name: 'Ярость',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesPassive/BattleRage/BattleRage.BattleRage_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/battleRage.battleRage'",
      long_description:
        'Убивая врага, герой впадает в ярость и временно получает усиленный урон.',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericPassiveAbility.GenericPassiveAbility_C'",
      long_description_active: '',
      manaCostType: 'mana',
      academy: 'honor',
    },
    values: [
      {
        values: [5, 10, 25],
        unit: 'damage',
        prefix: 'Доп. урон',
        postfix: 'ед',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [10, 20, 30],
        unit: 'second',
        prefix: 'Длительность эффекта',
        postfix: 'сек',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'battleRage',
  },
  {
    abilityEngine: {
      name: 'Прицельный Удар',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesPassive/AccurateStrike/AccurateStrike.AccurateStrike_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/accurateStrike.accurateStrike'",
      long_description:
        'Герой начинает наносить более прицельные удары, получая шанс нанести критический удар с повышенным уроном.',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesPassive/AccurateStrike/Content/AccurateStrikeDescription.AccurateStrikeDescription_C'",
      long_description_active: '',
      manaCostType: 'mana',
      academy: 'blood',
    },
    values: [
      {
        values: [0.18, 0.25, 0.38],
        unit: 'precentage',
        prefix: 'Вероятность крита',
        postfix: '%',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [1.5, 1.8, 2.4],
        unit: 'precentage',
        prefix: 'Увеличение урона',
        postfix: '%',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'accurateStrike',
  },
  {
    abilityEngine: {
      name: 'Ловец Душ',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesPassive/SoulCatcher/SoulCatcher.SoulCatcher_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/soulCatcher.soulCatcher'",
      long_description:
        'Каждый убитый враг имеет шанс вернуться к жизни на стороне некроманта',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericPassiveAbility.GenericPassiveAbility_C'",
      long_description_active: '',
      manaCostType: 'mana',
      academy: 'necromancy',
    },
    values: [
      {
        values: [0.3, 0.5, 0.65],
        unit: 'precentage',
        prefix: 'Вероятность воскрешения',
        postfix: '%',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'soulCatcher',
  },
  {
    abilityEngine: {
      name: 'Адский Контракт',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesPassive/HellContract/HellContract.HellContract_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/hellContract.hellContract'",
      long_description:
        'Адский контракт позволяет восстанавливать здоровье с каждой атакой.',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericPassiveAbility.GenericPassiveAbility_C'",
      long_description_active: '',
      manaCostType: 'mana',
      academy: 'blood',
    },
    values: [
      {
        values: [0.05, 0.1, 0.3],
        unit: 'precentage',
        prefix: 'Лечения от урона',
        postfix: '%',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'hellContract',
  },
  {
    abilityEngine: {
      name: 'Смерчь',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesActive/TornadoStorm/TornadoStorm.TornadoStorm_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/tornadoStorm.tornadoStorm'",
      long_description: '',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericActiveAbility.GenericActiveAbility_C'",
      long_description_active:
        'Сильное торнадо увеличивает скорость атаки персонажа и повышает его шанс уклонения',
      manaCostType: 'mana',
      academy: 'no_academy',
    },
    values: [
      {
        values: [100, 200, 300],
        unit: 'damage',
        prefix: 'Урона',
        postfix: 'ед',
        damageType:
          "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Damage/PhysicalDamage.PhysicalDamage_C'",
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'tornadoStorm',
    castRange: [551, 852, 1001],
    manaCost: [50, 120, 150],
    cooldown: [5, 10, 15],
    castingDelay: 0,
  },
  {
    abilityEngine: {
      name: 'Мороз',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesPassive/FrostBite/FrostBite.FrostBite_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/frostbite.frostbite'",
      long_description:
        'Леденящий душу мороз захватывает врага, нанося ему временный урон после каждой атаки. Повторная атака обнуляет эффект.',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericPassiveAbility.GenericPassiveAbility_C'",
      long_description_active: '',
      manaCostType: 'mana',
      academy: 'frost',
    },
    values: [
      {
        values: [40, 60, 160],
        unit: 'damage',
        prefix: 'Урона',
        postfix: 'в сек',
        damageType:
          "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Damage/MagicalDamage.MagicalDamage_C'",
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [5, 10, 20],
        unit: 'second',
        prefix: 'Длительность эффекта',
        postfix: 'сек',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'frostbite',
  },
  {
    abilityEngine: {
      name: 'Шаровая Молния',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesActive/BoltLightning/BoltLightning.BoltLightning_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/boltLightning.boltLightning'",
      long_description: '',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericActiveAbility.GenericActiveAbility_C'",
      long_description_active:
        'Шар чистой энергии летит в выбранном направлении, нанося урон всем врагам на своем пути',
      manaCostType: 'mana',
      academy: 'electrical',
    },
    values: [
      {
        values: [240, 440, 640],
        unit: 'damage',
        prefix: 'Урон',
        postfix: 'ед.',
        damageType:
          "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Damage/MagicalDamage.MagicalDamage_C'",
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'boltLightning',
    castRange: [551, 852, 1001],
    manaCost: [150, 180, 250],
    cooldown: [32, 20, 10],
    castingDelay: 0,
  },
  {
    abilityEngine: {
      name: 'Клятва Крови',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesActive/BloodOath/BloodOath.BloodOath_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/bloodOath1.bloodOath1'",
      long_description:
        'Клятва крови дарует владельцу ярость атаки в обмен на часть жизни.',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericActiveAbility.GenericActiveAbility_C'",
      long_description_active:
        'Забирает 30% текущего здоровья и увеличивает скорость атаки.',
      manaCostType: 'mana',
      academy: 'blood',
    },
    values: [
      {
        values: [10, 15, 25],
        unit: 'second',
        prefix: 'Длительность эффекта',
        postfix: 'сек',
        damageType: 'None',
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [1, 1.5, 2],
        unit: 'generic',
        prefix: 'Доп. скорости атаки',
        postfix: 'ед',
        damageType: 'None',
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'bloodOath1',
    castRange: [551, 852, 1001],
    manaCost: [85, 145, 225],
    cooldown: [5, 10, 15],
    castingDelay: 0.1,
  },
  {
    abilityEngine: {
      name: 'Благословление',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesActive/HeavenlyBlessing/HeavenlyBlessing.HeavenlyBlessing_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/heavenlyBlessing.heavenlyBlessing'",
      long_description: '',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericActiveAbility.GenericActiveAbility_C'",
      long_description_active:
        'Благословение высших сил снимает все негативные эффекты с цели и распыляет их взрывной силой, нанося урон врагам вокруг. Также может быть применено на врагов.',
      manaCostType: 'mana',
      academy: 'honor',
    },
    values: [
      {
        values: [250, 350, 450],
        unit: 'damage',
        prefix: 'Урон за эффект',
        postfix: 'ед',
        damageType:
          "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Damage/MagicalDamage.MagicalDamage_C'",
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'heavenlyBlessing',
    castRange: [551, 852, 1001],
    manaCost: [120, 180, 220],
    cooldown: [25, 15, 10],
    castingDelay: 0,
  },
  {
    abilityEngine: {
      name: 'Огненный Шторм',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesActive/Firestorm/Firestorm.Firestorm_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/firestorm.firestorm'",
      long_description: '',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesActive/Firestorm/Content/FirestormDescription.FirestormDescription_C'",
      long_description_active:
        'Из земли поднимаются огненные гейзеры, наносящие урон всем задетым врагам. Гейзеры появляются несколькими волнами в случайных местах в радиусе выбранной точки.',
      manaCostType: 'mana',
      academy: 'fire',
    },
    values: [
      {
        values: [45, 125, 180],
        unit: 'damage',
        prefix: 'Урон гейзера',
        postfix: 'ед',
        damageType:
          "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Damage/MagicalDamage.MagicalDamage_C'",
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [890, 650, 450],
        unit: 'range',
        prefix: 'Радиус появления',
        postfix: 'ед',
        damageType: 'None',
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [5, 8, 11],
        unit: 'second',
        prefix: 'Гейзеров за волну',
        postfix: '',
        damageType: 'None',
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [3, 7, 10],
        unit: 'second',
        prefix: 'Длит. появления гейзеров',
        postfix: 'сек',
        damageType: 'None',
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [3, 5, 7],
        unit: 'second',
        prefix: 'Длит. эффекта',
        postfix: 'сек',
        damageType: 'None',
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [15, 25, 45],
        unit: 'damage',
        prefix: 'Урон от горения',
        postfix: 'ед/сек',
        damageType:
          "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Damage/MagicalDamage.MagicalDamage_C'",
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'firestorm',
    castRange: [551, 852, 1001],
    manaCost: [25, 125, 225],
    cooldown: [5, 15, 20],
    castingDelay: 1,
  },
  {
    abilityEngine: {
      name: 'Библейский Ливень',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesActive/HeavenlyStorm/HeavenlyStorm.HeavenlyStorm_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/heavenlyStorm.heavenlyStorm'",
      long_description: '',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericActiveAbility.GenericActiveAbility_C'",
      long_description_active:
        'Библейский ливень обрушивается на врагов, нанося урон и замедляя их каждую секунду.',
      manaCostType: 'mana',
      academy: 'water',
    },
    values: [
      {
        values: [150, 420, 666],
        unit: 'damage',
        prefix: 'Урон дождя',
        postfix: 'ед/сек',
        damageType:
          "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Damage/MagicalDamage.MagicalDamage_C'",
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'heavenlyStorm',
    castRange: [551, 852, 1001],
    manaCost: [160, 250, 320],
    cooldown: [32, 24, 12],
    castingDelay: 0,
  },
  {
    abilityEngine: {
      name: 'Обжигающее касание',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesPassive/BurningTouch/BurningTouch.BurningTouch_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/BurningTouch.BurningTouch'",
      long_description:
        'Атаки Героя сопровождаются дополнительным уроном от огня. также накладывается эффект горения',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericPassiveAbility.GenericPassiveAbility_C'",
      long_description_active: '',
      manaCostType: 'mana',
      academy: 'fire',
    },
    values: [
      {
        values: [15, 25, 50],
        unit: 'damage',
        prefix: 'Повышение урона',
        postfix: 'ед.',
        damageType:
          "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Damage/MagicalDamage.MagicalDamage_C'",
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'BurningTouch',
  },
  {
    abilityEngine: {
      name: 'Божественный щит',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesPassive/HeavenlyShield/A_HeavenlyShield.A_HeavenlyShield_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/heavenlyShieldAbility.heavenlyShieldAbility'",
      long_description:
        'Божественный щит окружает союзника. Щит значительно понижает входящий урон, но имеет порог. После достижения порога урона щит переходит на случайного союзника рядом и восстанавливается',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericPassiveAbility.GenericPassiveAbility_C'",
      long_description_active: '',
      manaCostType: 'mana',
      academy: 'honor',
    },
    values: [
      {
        values: [0.1, 0.3, 0.4],
        unit: 'precentage',
        prefix: 'Понижение урона',
        postfix: '%',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [500, 1000, 2000],
        unit: 'generic',
        prefix: 'Предел урона',
        postfix: 'ед',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'heavenlyShieldAbility',
  },
  {
    abilityEngine: {
      name: 'Мина',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesActive/LandMine/AA_LandMine.AA_LandMine_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/mineIcon.mineIcon'",
      long_description: '',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericActiveAbility.GenericActiveAbility_C'",
      long_description_active:
        'Персонаж размещает наземную мину. При обнаружении врага - мина взрывается с задержкой в 1 секунду.',
      manaCostType: 'mana',
      academy: 'tech',
    },
    values: [
      {
        values: [120, 160, 180],
        unit: 'damage',
        prefix: 'Урон от взрыва',
        postfix: 'ед',
        damageType:
          "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Damage/MagicalDamage.MagicalDamage_C'",
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [150, 250, 300],
        unit: 'range',
        prefix: 'Радиус взрыва',
        postfix: '',
        damageType: 'None',
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'mineIcon',
    castRange: [150, 150, 150],
    manaCost: [50, 120, 150],
    cooldown: [5, 10, 15],
    castingDelay: 0,
  },
  {
    abilityEngine: {
      name: 'Самодельная Турель',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesActive/Turret/AA_Turret.AA_Turret_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/turret.turret'",
      long_description: '',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericActiveAbility.GenericActiveAbility_C'",
      long_description_active: 'Герой устанавливает самодельную турель',
      manaCostType: 'mana',
      academy: 'tech',
    },
    values: [
      {
        values: [600, 800, 1000],
        unit: 'range',
        prefix: 'Дальность атаки турели',
        postfix: '',
        damageType: 'None',
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [50, 100, 150],
        unit: 'damage',
        prefix: 'Урон турели',
        postfix: 'ед',
        damageType:
          "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Damage/PhysicalDamage.PhysicalDamage_C'",
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [1, 0.7, 0.5],
        unit: 'second',
        prefix: 'Скорострельность',
        postfix: 'сек',
        damageType: 'None',
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'turret',
    castRange: [250, 250, 250],
    manaCost: [190, 250, 350],
    cooldown: [5, 10, 15],
    castingDelay: 0,
  },
  {
    abilityEngine: {
      name: 'Внутренняя Сила',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesPassive/InnerPower/A_InnerPower.A_InnerPower_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/innerPower.innerPower'",
      long_description:
        'Внутренняя сила мага даёт повышенный урон магическим заклинаниям',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericPassiveAbility.GenericPassiveAbility_C'",
      long_description_active:
        'Внутренняя сила мага даёт повышенный урон магическим заклинаниям',
      manaCostType: 'mana',
      academy: 'no_academy',
    },
    values: [
      {
        values: [0.05, 0.1, 0.3],
        unit: 'precentage',
        prefix: 'Увеличение магического урона',
        postfix: '%',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'innerPower',
  },
  {
    abilityEngine: {
      name: 'Золотые Руки',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesPassive/GoldenTouch/A_GoldenTouch.A_GoldenTouch_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/goldenTouch.goldenTouch'",
      long_description:
        'Золотые руки пассивно повышают доход из всех источников доходов',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericPassiveAbility.GenericPassiveAbility_C'",
      long_description_active: '',
      manaCostType: 'mana',
      academy: 'no_academy',
    },
    values: [
      {
        values: [0.15, 0.25, 0.35],
        unit: 'precentage',
        prefix: 'Увеличение дохода',
        postfix: '%',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'goldenTouch',
  },
  {
    abilityEngine: {
      name: 'Прикосновение Смерти',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesPassive/NecromanticTouch/A_NecromanticTouch.A_NecromanticTouch_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/necromanticTouch.necromanticTouch'",
      long_description:
        'Высасывает жизненную силу из врага с каждым ударом, а так же накапливает силу с каждым убитым врагом',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericPassiveAbility.GenericPassiveAbility_C'",
      long_description_active: '',
      manaCostType: 'mana',
      academy: 'necromancy',
    },
    values: [
      {
        values: [0.5, 0.7, 1],
        unit: 'generic',
        prefix: 'Кража стат',
        postfix: 'ед',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [1, 2, 3],
        unit: 'generic',
        prefix: 'Увеличение силы',
        postfix: 'ед',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'necromanticTouch',
  },
  {
    abilityEngine: {
      name: 'Сифон Жизни',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesActive/LifeSyphon/LifeSyphon.LifeSyphon_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/lifeSyphon.lifeSyphon'",
      long_description:
        'Сифон жизни высасывает жизнь из всех врагов рядом и переносит её союзникам',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericActiveAbility.GenericActiveAbility_C'",
      long_description_active:
        'Сифон жизни высасывает жизнь из всех врагов рядом и переносит её союзникам. \r\n\r\nИспользует здоровье, вместо маны. Наносит урон как при включении, так и выключении',
      manaCostType: 'health',
      academy: 'necromancy',
    },
    values: [
      {
        values: [30, 60, 90],
        unit: 'damage',
        prefix: 'Урона в секунду',
        postfix: 'ед',
        damageType:
          "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Damage/MagicalDamage.MagicalDamage_C'",
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [50, 90, 150],
        unit: 'damage',
        prefix: 'Урон себе',
        postfix: 'ед/сек',
        damageType:
          "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Damage/MagicalDamage.MagicalDamage_C'",
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'negative',
      },
      {
        values: [850, 1250, 1500],
        unit: 'range',
        prefix: 'Радиус',
        postfix: 'ед',
        damageType: 'None',
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'lifeSyphon',
    castRange: [551, 852, 1001],
    manaCost: [50, 120, 150],
    cooldown: [5, 10, 15],
    castingDelay: 0,
  },
  {
    abilityEngine: {
      name: 'Рикошет',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesPassive/Ricochet/A_Ricochet.A_Ricochet_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/ricochet.ricochet'",
      long_description:
        'Любая атака персонажа на врага так же отскакивает на соседних персонажей',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericPassiveAbility.GenericPassiveAbility_C'",
      long_description_active: '',
      manaCostType: 'mana',
      academy: 'no_academy',
    },
    values: [
      {
        values: [1, 2, 3],
        unit: 'generic',
        prefix: 'Рикошетов',
        postfix: 'раз',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [300, 550, 895],
        unit: 'range',
        prefix: 'Радиус от врага',
        postfix: 'м',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'ricochet',
  },
  {
    abilityEngine: {
      name: 'Лечащая Рука',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesActive/HealingHand/AA_HealingHand.AA_HealingHand_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/healingHand.healingHand'",
      long_description: '',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericActiveAbility.GenericActiveAbility_C'",
      long_description_active: 'Лечит существо через молитву',
      manaCostType: 'mana',
      academy: 'honor',
    },
    values: [
      {
        values: [200, 400, 500],
        unit: 'health',
        prefix: 'Восстановление здоровья',
        postfix: 'ед',
        damageType: 'None',
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'healingHand',
    castRange: [551, 852, 1001],
    manaCost: [50, 120, 150],
    cooldown: [5, 10, 15],
    castingDelay: 0,
  },
  {
    abilityEngine: {
      name: 'Кровавый Прыжок',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesActive/BloodBlink/AA_BloodBlink.AA_BloodBlink_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/bloodBlink.bloodBlink'",
      long_description: '',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericActiveAbility.GenericActiveAbility_C'",
      long_description_active:
        'Кровавый прыжок не только мгновенно перемещает персонажа на выбранную точку, но и наносит урон всем врагам на пути',
      manaCostType: 'health',
      academy: 'blood',
    },
    values: [
      {
        values: [0.5, 1, 1.3],
        unit: 'damage',
        prefix: 'Урона себе',
        postfix: 'ед/м',
        damageType:
          "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Damage/MagicalDamage.MagicalDamage_C'",
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'negative',
      },
      {
        values: [1.2, 1.3, 1.5],
        unit: 'precentage',
        prefix: 'Урон врага от урона себе',
        postfix: '%',
        damageType:
          "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Damage/MagicalDamage.MagicalDamage_C'",
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'bloodBlink',
    castRange: [1000, 1200, 2000],
    manaCost: [50, 120, 150],
    cooldown: [0.1, 1, 2],
    castingDelay: 0,
  },
  {
    abilityEngine: {
      name: 'Ловушка Некроманта',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesActive/NecromanticTrap/AA_NecromanticTrap.AA_NecromanticTrap_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/necromanticTrap.necromanticTrap'",
      long_description: '',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericActiveAbility.GenericActiveAbility_C'",
      long_description_active:
        'Ловушка некроманта ловит вражеское существо. Первый враг, который в нее вступит не только начнет сражаться на стороне некроманта, но и будет терять здоровье каждую секунду и передавать его некроманту. Не работает на боссов',
      manaCostType: 'mana',
      academy: 'necromancy',
    },
    values: [
      {
        values: [15, 25, 42],
        unit: 'damage',
        prefix: 'Урона в секунду',
        postfix: 'ед',
        damageType:
          "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Damage/MagicalDamage.MagicalDamage_C'",
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'necromanticTrap',
    castRange: [551, 852, 1001],
    manaCost: [200, 280, 325],
    cooldown: [44, 32, 24],
    castingDelay: 0,
  },
  {
    abilityEngine: {
      name: 'Магический Купол',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesActive/MagicalDome/AA_MagicalDome.AA_MagicalDome_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/magicalDome.magicalDome'",
      long_description: '',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericActiveAbility.GenericActiveAbility_C'",
      long_description_active:
        'Мистический купол, появляется на выбранной точки защищая союзников от магии',
      manaCostType: 'mana',
      academy: 'honor',
    },
    values: [
      {
        values: [0.25, 0.48, 0.65],
        unit: 'precentage',
        prefix: 'Увеличение маг. сопротивления',
        postfix: '%',
        damageType: 'None',
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [250, 350, 550],
        unit: 'range',
        prefix: 'Радиус купола',
        postfix: 'м',
        damageType: 'None',
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'magicalDome',
    castRange: [551, 852, 1001],
    manaCost: [50, 120, 150],
    cooldown: [5, 10, 15],
    castingDelay: 0,
  },
  {
    abilityEngine: {
      name: 'Метка Охотника',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesPassive/HuntersMark/A_HuntersMark.A_HuntersMark_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/huntersMark.huntersMark'",
      long_description:
        'Метка охоотника накладывает эффект на врага, увеличивающий любой урон владельца по врагу. Метка держится 4 секунды. Можно накладывать неограниченное колличество меток',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericPassiveAbility.GenericPassiveAbility_C'",
      long_description_active: '',
      manaCostType: 'mana',
      academy: 'no_academy',
    },
    values: [
      {
        values: [0.08, 0.15, 0.23],
        unit: 'precentage',
        prefix: 'Увеличение урона за эффект',
        postfix: '%',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'huntersMark',
  },
  {
    abilityEngine: {
      name: 'Рука Природы',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesPassive/NaturesHand/A_NaturesHand.A_NaturesHand_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/naturesHand.naturesHand'",
      long_description: 'Связь с природой увеличивает все входящее лечение',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericPassiveAbility.GenericPassiveAbility_C'",
      long_description_active: '',
      manaCostType: 'mana',
      academy: 'nature',
    },
    values: [
      {
        values: [0.05, 0.1, 0.33],
        unit: 'precentage',
        prefix: 'Увел. входящего лечения',
        postfix: '%',
        damageType: 'None',
        isActiveRelated: false,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'naturesHand',
  },
  {
    abilityEngine: {
      name: 'Щит Энергии',
      class:
        "/Script/Engine.BlueprintGeneratedClass'/Game/Character/Abilities/AbilitiesActive/EnergyShield/EnergyShield.EnergyShield_C'",
      icon: "/Script/Engine.Texture2D'/Game/Character/Abilities/Icons/energyShield.energyShield'",
      long_description: '',
      section: 'common',
      descriptionClass:
        "/Script/UMG.WidgetBlueprintGeneratedClass'/Game/Character/Abilities/Content/Description/Generics/GenericActiveAbility.GenericActiveAbility_C'",
      long_description_active:
        'Щит энергии защищает союзника, возвращая урон врагам',
      manaCostType: 'mana',
      academy: 'electrical',
    },
    values: [
      {
        values: [5, 8, 15],
        unit: 'second',
        prefix: 'Длительность',
        postfix: 'сек',
        damageType: 'None',
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [0.28, 0.35, 0.43],
        unit: 'precentage',
        prefix: 'Понижение урона',
        postfix: '%',
        damageType: 'None',
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [0.1, 0.13, 0.23],
        unit: 'precentage',
        prefix: 'Отражение урона',
        postfix: '%',
        damageType: 'None',
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
      {
        values: [250, 325, 442],
        unit: 'range',
        prefix: 'Радиус отражения',
        postfix: 'м',
        damageType: 'None',
        isActiveRelated: true,
        isSingleValue: false,
        positiveDirection: 'positive',
      },
    ],
    icon: 'energyShield',
    castRange: [551, 852, 1001],
    manaCost: [120, 160, 220],
    cooldown: [14, 18, 22],
    castingDelay: 0,
  },
];

const processUnit = (values: number[], unit: string) => {
  const newValues = values.map((value) => {
    if (unit === 'precentage') {
      return value * 100;
    }

    return value;
  });
  return newValues;
};

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center bg-[#212129]'>
      {abilities.map((ability, index) => (
        <div key={index} className='p-4 w-[50vw] text-[#c4c3c9]'>
          <div className='text-xl font-bold mb-4'>
            {ability.abilityEngine.name}
          </div>
          <div className='flex gap-4'>
            <div>
              <Image
                src={`/icons/${ability.icon}.png`}
                alt='abilityIcon'
                className='rounded-xl'
                width={100}
                height={100}
              />
            </div>
            <div className='flex flex-col w-[500px]'>
              <div className='mb-4'>
                {ability.abilityEngine.long_description_active ? (
                  <div className='max-w-[25vw]'>
                    {ability.abilityEngine.long_description_active}
                  </div>
                ) : (
                  <div className='max-w-[25vw]'>
                    {ability.abilityEngine.long_description}
                  </div>
                )}
              </div>

              <div className='opacity-80'>
                {ability.values.map((value, index) => (
                  <div key={'value' + index}>
                    {value.prefix + ' '}
                    {processUnit(value.values, value.unit).join(' / ')}
                    {' ' + value.postfix}
                  </div>
                ))}
              </div>
            </div>
            <div className='flex flex-col'>
              <div>
                <div className='text-xs mb-1'>Перезарядка</div>
                <div>
                  {ability.cooldown?.join(' / ')
                    ? ability.cooldown?.join(' / ') + ' сек.'
                    : '-'}
                </div>
              </div>
              <div>
                <div className='text-xs mb-1'>Дальность</div>
                <div>
                  {ability.castRange?.join(' / ')
                    ? ability.castRange?.join(' / ') + ' м.'
                    : '-'}
                </div>
              </div>
              <div>
                <div className='text-xs mb-1'>Манакост</div>
                <div>
                  {ability.manaCost?.join(' / ')
                    ? ability.manaCost?.join(' / ') +
                      `${
                        ability.abilityEngine.manaCostType === 'mana'
                          ? ' маны'
                          : ' хп'
                      }`
                    : '-'}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
