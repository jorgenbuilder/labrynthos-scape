// Courtesy https://www.kaggle.com/lsind18/tarot-json
const O = [
    {
        "index": 0,
        "name": "The Fool",
        "number": 0,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m00.jpg",
        "fortunes": [
            "Watch for new projects and new beginnings",
            "Prepare to take something on faith",
            "Something new comes your way; go for it"
        ],
        "keywords": [
            "freedom",
            "faith",
            "inexperience",
            "innocence"
        ],
        "meanings": {
            "light": [
                "Freeing yourself from limitation",
                "Expressing joy and youthful vigor",
                "Being open-minded",
                "Taking a leap of faith",
                "Attuning yourself to your instincts",
                "Being eager or curious",
                "Exploring your potential",
                "Embracing innovation and change"
            ],
            "shadow": [
                "Being gullible and naive",
                "Taking unnecessary risks",
                "Failing to be serious when required",
                "Being silly or distracted",
                "Lacking experience",
                "Failing to honor well-established traditions and limits",
                "Behaving inappropriately"
            ]
        },
        "archetype": "The Divine Madman",
        "hebrew": "Aleph/Ox/1",
        "numerology": "0 (off the scale; pure potential)",
        "element": "Air",
        "mythology": "Adam before the fall. Christ as a wandering holy madman. Deity wrapped in human flesh. The Holy Spirit.",
        "questions": [
            "What would I do if I felt free to take a leap?",
            "How willing am I to be vulnerable and open?",
            "How might past experiences help in this new situation?"
        ]
    },
    {
        "index": 1,
        "name": "The Magician",
        "number": 1,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m01.jpg",
        "fortunes": [
            "A powerful man may play a role in your day",
            "Your current situation must be seen as one element of a much larger plan"
        ],
        "keywords": [
            "capability",
            "empowerment",
            "activity"
        ],
        "meanings": {
            "light": [
                "Taking appropriate action",
                "Receiving guidance from a higher power",
                "Becoming a channel of divine will",
                "Expressing masculine energy in appropriate and constructive ways",
                "Being yourself in every way"
            ],
            "shadow": [
                "Inflating your own ego",
                "Abusing talents",
                "Manipulating or deceiving others",
                "Being too aggressive",
                "Using cheap illusions to dazzle others",
                "Refusing to invest the time and effort needed to master your craft",
                "Taking shortcuts"
            ]
        },
        "archetype": "The Ego/The Self",
        "hebrew": "Beth/House/2",
        "numerology": "1 (origins, unity, seeds)",
        "element": "The Sun/Mercury",
        "mythology": "Thoth, the Egyptian god of wisdom, known to the Greeks as Hermes and to the Romans as Mercury. Christ working miracles. Brahma, the Creator.",
        "questions": [
            "What am I empowered to do?",
            "How might my abilities come into play?",
            "To what extent am I making the most of my talents?"
        ]
    },
    {
        "index": 2,
        "name": "The High Priestess",
        "number": 2,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m02.jpg",
        "fortunes": [
            "A mysterious woman arrives",
            "A sexual secret may surface",
            "Someone knows more than he or she will reveal"
        ],
        "keywords": [
            "intuition",
            "reflection",
            "purity",
            "initiation"
        ],
        "meanings": {
            "light": [
                "Listening to your feelings and intuitions",
                "Exploring unconventional spirituality",
                "Keeping secrets",
                "Being receptive",
                "Reflecting instead of acting",
                "Observing others",
                "Preserving purity"
            ],
            "shadow": [
                "Being aloof",
                "Obsessing on secrets and conspiracies",
                "Rejecting guidance from spirit or intuition",
                "Revealing all",
                "Ignoring gut feelings",
                "Refusing to become involved, even when involvement is appropriate"
            ]
        },
        "archetype": "The Virgin/The Maiden",
        "hebrew": "Gimel/Camel/3",
        "numerology": "2 (division, debate, duality)",
        "element": "The Moon",
        "mythology": "The feminine aspect of divinity, particularity when expressed through virginity, as with the Virgin Mary or Isis.",
        "questions": [
            "What might a rebel against tradition do?",
            "What isn't being said or revealed?",
            "What could be achieved by observing and reflecting?"
        ]
    },
    {
        "index": 3,
        "name": "The Empress",
        "number": 3,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m03.jpg",
        "fortunes": [
            "Pregnancy is in the cards",
            "An opportunity to be involved in luxurious sexuality is coming",
            "Beware a tendency toward addiction"
        ],
        "keywords": [
            "fertility",
            "productivity",
            "ripeness",
            "nurturing"
        ],
        "meanings": {
            "light": [
                "Nurturing yourself and others",
                "Bearing fruit",
                "Celebrating your body",
                "Bearing (literal or figurative) children",
                "Reveling in luxury",
                "Mothering those around you in positive ways",
                "Enjoying your sexuality",
                "Getting things done"
            ],
            "shadow": [
                "Overindulging",
                "Being greedy",
                "Smothering someone with attention",
                "Debilitating someone by being overprotective",
                "Inhibiting productivity by obsessing on productivity",
                "Being overcome by addictive behavior"
            ]
        },
        "archetype": "The Mother",
        "hebrew": "Daleth/Door/4",
        "numerology": "3 (expression, productivity, output)",
        "element": "Venus",
        "mythology": "Gaia, Mother Earth, Ishtar, DemeterÑmature, reproductive female divinity in every form. Also Aphrodite and Turan. ",
        "questions": [
            "What would a concerned and capable mother do?",
            "What can I do that would emphasize growth?",
            "How can I celebrate my own sensuality and sexuality?"
        ]
    },
    {
        "index": 4,
        "name": "The Emperor",
        "number": 4,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m04.jpg",
        "fortunes": [
            "A father figure arrives",
            "A new employer or authority figure will give you orders",
            "Expect discipline or correction in the near future"
        ],
        "keywords": [
            "authority",
            "regulation",
            "direction",
            "structure"
        ],
        "meanings": {
            "light": [
                "Exercising authority",
                "Defining limits",
                "Directing the flow of work",
                "Communicating clear guidelines",
                "Being in control of yourself and others",
                "Tempering aggressive masculinity with wisdom and experience"
            ],
            "shadow": [
                "Micromanaging",
                "Crushing the creativity of others with a rigid, iron-fisted approach",
                "Insisting on getting your own way",
                "Assuming a dictatorial mindset",
                "Using overt force to achieve your goals and maintain order"
            ]
        },
        "archetype": "The Father",
        "hebrew": "He[as]/Window/5, or in some decks, Tzaddi/Fish hook/90",
        "numerology": "4 (stability, equality, persistence)",
        "element": "Mars/Aries",
        "mythology": "Masculine gods, including the Hebrew God, the Christian God, Allah, and Zeus. Patriarchs (Abraham) and lawgivers (Moses). Vishnu, the Preserver.",
        "questions": [
            "How does the issue of control or regulation impact this situation?",
            "What would a compassionate but strict father do?",
            "What needs more control?"
        ]
    },
    {
        "index": 5,
        "name": "The Hierophant",
        "number": 5,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m05.jpg",
        "fortunes": [
            "Expect to be caught in a misdeed and punished accordingly",
            "Pray for forgiveness and confess wrongdoings",
            "A more experienced man, spiritual leader, or father figure will come into your life"
        ],
        "keywords": [
            "guidance",
            "knowledge",
            "revelation",
            "belief"
        ],
        "meanings": {
            "light": [
                "Teaching or guiding others",
                "Searching for the truth",
                "Asking for guidance from a higher power",
                "Acknowledging the wisdom and experience of others",
                "Taking vows",
                "Engaging in heartfelt rituals",
                "Volunteering"
            ],
            "shadow": [
                "Using experience as a means of manipulating or misguiding others",
                "Being dogmatic",
                "Favoring tradition over what is expedient or necessary",
                "Going through the motions of empty rituals",
                "Concealing wisdom",
                "Restricting access to spiritual truths or the gods"
            ]
        },
        "archetype": "The Guardian/The Church/Faith",
        "hebrew": "Vau/Nail or Spike/6",
        "numerology": "5 (instability, resistance, confrontation, evolution)",
        "element": "Taurus/Earth",
        "mythology": "The Christ, the Apostle Peter, Buddha, Mohammed. Popes, priests, and intercessors of every faith and tradition",
        "questions": [
            "What role might tradition or religion play in this situation?",
            "Who authored the rules? Who enforces them? Why?",
            "How might an experienced guide impact this situation?"
        ]
    },
    {
        "index": 6,
        "name": "The Lovers",
        "number": 6,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m06.jpg",
        "fortunes": [
            "A new personal or professional relationship blossoms",
            "Sexual opportunities abound",
            "Unexpectedly, a friend becomes a lover"
        ],
        "keywords": [
            "love",
            "passion",
            "unity",
            "choice"
        ],
        "meanings": {
            "light": [
                "Being in love",
                "Showing your love to others",
                "Expressing passion or romantic feelings",
                "Aligning yourself with groups or like-minded others",
                "Bringing people together",
                "Making well-informed decisions"
            ],
            "shadow": [
                "Debilitating passion",
                "Allowing an unhealthy desire for love to motivate destructive behavior",
                "Disrupting unity",
                "Working against the best interests of those who care about you",
                "Ill-informed decisions"
            ]
        },
        "archetype": "The Lover/Sexual Awakening",
        "hebrew": "Zain/Sword/7",
        "numerology": "6 (cooperation, collaboration, interaction)",
        "element": "Gemini",
        "mythology": "Obviously, Adam and Eve, who are depicted in RWS-influenced decks. Also Venus and Cupid, Aphrodite and Eros.",
        "questions": [
            "What guides my choices?",
            "What is my heart leading me to do?",
            "How might this decision transform me as a person?"
        ]
    },
    {
        "index": 7,
        "name": "The Chariot",
        "number": 7,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m07.jpg",
        "fortunes": [
            "Victory is a certainty",
            "Move ahead with all plans",
            "Beware the jealousy of others"
        ],
        "keywords": [
            "advancement",
            "victory",
            "triumph",
            "success"
        ],
        "meanings": {
            "light": [
                "Breaking through barriers",
                "Moving forward with confidence and authority",
                "Reaching the pinnacle of success",
                "Basking in the glory of achievement",
                "Guiding an effort to total victory",
                "Establishing yourself as a worthy leader"
            ],
            "shadow": [
                "Resting on laurels",
                "Riding roughshod over the feelings or expectations of others",
                "Focusing more on past successes than future opportunities",
                "Failing to rein in impulsive behavior"
            ]
        },
        "archetype": "The Victorious Hero",
        "hebrew": "Cheth/Fence/8",
        "numerology": "7 (imagination, inner work, psychology)",
        "element": "Cancer",
        "mythology": "Odysseus. Jason. The search for the Holy Grail. Christ's triumphal entry into Jerusalem.",
        "questions": [
            "To what extent have I arrived? What will my next challenge be?",
            "How can I use past achievements to their best advantage?",
            "What would the criteria for real and meaningful success be?"
        ]
    },
    {
        "index": 8,
        "name": "Strength",
        "number": 8,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m08.jpg",
        "fortunes": [
            "Your self-control will be tested",
            "A woman will seek to change her partner or lover",
            "You are a strong, capable person"
        ],
        "keywords": [
            "discipline",
            "boldness",
            "self-discipline",
            "power",
            "vitality"
        ],
        "meanings": {
            "light": [
                "Imposing restrictions on yourself for your own benefit",
                "Bringing your passions under the control of reason",
                "Resisting impulses that work against your best interests",
                "Taking bold action"
            ],
            "shadow": [
                "Indulging weakness, even when you know it will damage your health and happiness",
                "Languishing in addiction",
                "Allowing your instincts to tame and conquer you",
                "Failing to take a stand when necessary"
            ]
        },
        "archetype": "The Law",
        "hebrew": "Lamed/Outstretched Arms/30 or Theth/Snake/9",
        "numerology": "8 (movement, work) or 11 = 1 + 1 = 2 (debate, duality)",
        "element": "Libra or Leo",
        "mythology": "Themis or Justitia. Ma'at. Solomon dividing a baby. The Sword of Damocles. The giving of the Ten Commandments.",
        "questions": [
            "To what extent is your life (or work) balanced?",
            "How can you achieve greater objectivity?",
            "What course of action would be fair to everyone concerned?"
        ]
    },
    {
        "index": 9,
        "name": "The Hermit",
        "number": 9,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m09.jpg",
        "fortunes": [
            "A period of loneliness begins",
            "One partner in a relationship departs",
            "A search for love or money proves fruitless"
        ],
        "keywords": [
            "solitude",
            "experience",
            "stillness",
            "withdrawal"
        ],
        "meanings": {
            "light": [
                "Becoming or seeking out a guru",
                "Going on a retreat",
                "Recharging spiritual or creative batteries",
                "Lighting the way for those with less experience",
                "Stepping back to gain perspective"
            ],
            "shadow": [
                "Being a loner",
                "Fearing contact with others",
                "Becoming a know-it-all",
                "Inflating claims of expertise",
                "Hiding your skills and talents out of fear of unworthiness"
            ]
        },
        "archetype": "The Holy Man",
        "hebrew": "Yod/Hand/10",
        "numerology": "9 (fullness, readiness, ripeness)",
        "element": "Virgo",
        "mythology": "The Christ, while fasting 40 days in the wilderness. Chronos, the god of time. Father Time. Hermes.",
        "questions": [
            "What would happen if I simply withdrew and took no action?",
            "How can I get some perspective on the situation?",
            "Who has walked this path before me? How can I enlist his or her help?"
        ]
    },
    {
        "index": 10,
        "name": "Wheel of Fortune",
        "number": 10,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m10.jpg",
        "fortunes": [
            "Some events are in the hands of heaven",
            "You've lived through this before",
            "What happened then?"
        ],
        "keywords": [
            "luck",
            "randomness",
            "cycles",
            "karma",
            "fate",
            "revolution"
        ],
        "meanings": {
            "light": [
                "Allowing events to unfold",
                "Seeing the larger pattern in everyday events",
                "Trusting your luck",
                "Watching for cycles",
                "Believing that \"what goes around, comes around\""
            ],
            "shadow": [
                "Losing money gambling",
                "Refusing to do your part to bring a plan to fruition",
                "Taking a fatalistic approach to life",
                "Fighting the natural course of events"
            ]
        },
        "archetype": "The Fates/Destiny",
        "hebrew": "Koph/Palm/20",
        "numerology": "10 (finality, completion) and 10 = 1 + 0 = 1 (seed, opportunity)",
        "element": "Jupiter",
        "mythology": "The God in the Machine. Deus ex Machina. Clotho, Lachesis, and Atropos. Fortuna.",
        "questions": [
            "How does this challenge fit into a larger pattern?",
            "What role does luck play in my circumstances?",
            "What can I control? How should I know when to relinquish control?"
        ]
    },
    {
        "index": 11,
        "name": "Justice",
        "number": 11,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m11.jpg",
        "fortunes": [
            "A legal verdict will be rendered soon",
            "Someone is making a decision",
            "You need to get the facts"
        ],
        "keywords": [
            "balance",
            "law",
            "fairness",
            "objectivity"
        ],
        "meanings": {
            "light": [
                "Making an objective decision",
                "Weighing an issue carefully before taking action",
                "Appropriately scaling your reaction to a situation",
                "Getting all the facts",
                "Considering evidence",
                "Deliberating"
            ],
            "shadow": [
                "Delivering harsh criticism",
                "Obsessing on rules and regulations",
                "Playing by the book even when it is destructive or counterproductive to do so",
                "Confusing snap decisions with timely action",
                "Playing favorites"
            ]
        },
        "archetype": "The Id",
        "hebrew": "Theth/Snake/9 or Lamed/Outstretched Arms/30",
        "numerology": "11 = 1 + 1 = 2 (debate, duality) or 8 (movement, outer work)",
        "element": "Leo or Libra",
        "mythology": "Samson. Hercules. Daniel in the lion's den. The sinless Christ.",
        "questions": [
            "How can I enhance my self-discipline?",
            "What behaviors tempt me? How can I resist?",
            "What instincts do I continue to struggle with today?"
        ]
    },
    {
        "index": 12,
        "name": "The Hanged Man",
        "number": 12,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m12.jpg",
        "fortunes": [
            "A traitor is revealed",
            "One of your friends is working against you",
            "Change your ways or suffer the consequences"
        ],
        "keywords": [
            "enlightenment",
            "sacrifice",
            "perspective",
            "suspension",
            "reversals"
        ],
        "meanings": {
            "light": [
                "Seeing growth opportunities in unpleasant events",
                "Experiencing a dramatic change in personal perspective",
                "Making the best of an unforeseen change in your life or work",
                "Suspending disbelief",
                "Making sacrifices"
            ],
            "shadow": [
                "Being untrue to yourself and your values",
                "Refusing to make sacrifices when appropriate",
                "Refusing to adapt to new situations",
                "Blaming others",
                "Profiting at the expense of others"
            ]
        },
        "archetype": "The Traitor",
        "hebrew": "Mem/Water/40",
        "numerology": "12 = 1 + 2 = 3 (expression, productivity, output)",
        "element": "Water",
        "mythology": "The Crucified Christ. Isaac as a sacrifice. Prometheus bound. Jonah and the whale. Lazarus. Any hanged or sacrificed god. Judas.",
        "questions": [
            "How can I radically alter my perspective?",
            "How might being stuck actually be a blessing in disguise?",
            "How can I help myself see the glass as half full?"
        ]
    },
    {
        "index": 13,
        "name": "Death",
        "number": 13,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m13.jpg",
        "fortunes": [
            "A relationship or illness ends suddenly",
            "Limit travel and risk-taking",
            "General gloom and doom"
        ],
        "keywords": [
            "ending",
            "conclusion",
            "transition",
            "passage",
            "departure"
        ],
        "meanings": {
            "light": [
                "Bringing an unpleasant phase of life to an end",
                "Recognizing and celebrating the conclusion of something",
                "Putting bad habits to rest",
                "Becoming a new person",
                "Leaving one person, place, or thing for another",
                "Letting go"
            ],
            "shadow": [
                "Obsessing on death and dying",
                "Refusing to give up old habits or unhealthy relationships",
                "Insisting that everything and everyone should stay the same forever",
                "Failing to take good care of yourself"
            ]
        },
        "archetype": "Death",
        "hebrew": "Nun/Fish/50",
        "numerology": "13 = 1 + 3 = 4 (stability, persistence)",
        "element": "Scorpio",
        "mythology": "Christ in the tomb. Hades. Hypnos. Thanatos. Stories of journeys into the underworld.",
        "questions": [
            "What needs to end?",
            "How might an ending actually be a blessing in this situation?",
            "What's next?"
        ]
    },
    {
        "index": 14,
        "name": "Temperance",
        "number": 14,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m14.jpg",
        "fortunes": [
            "Someone's using drugs or alcohol to excess",
            "It's time to get back on that diet"
        ],
        "keywords": [
            "blending",
            "synthesis",
            "mediation",
            "combination",
            "harmony"
        ],
        "meanings": {
            "light": [
                "Bringing opposites together",
                "Moderating your actions or emotions",
                "Finding middle ground",
                "Reaching compromises",
                "Synthesizing solutions that please everyone involved",
                "Using the old to make something new"
            ],
            "shadow": [
                "Going to extremes",
                "Disrupting group efforts",
                "Ignoring healthy approaches to life",
                "Becoming an addict",
                "Practicing gluttony",
                "Tearing something or someone apart",
                "Breaking alliances"
            ]
        },
        "archetype": "The Mediator",
        "hebrew": "Samekh/Foundation/60",
        "numerology": "14 = 1 + 4 = 5 (catalyst, instability, confrontation)",
        "element": "Sagittarius",
        "mythology": "The angel seen here may be the goddess Iris. By extension, priests, priesthoods, or the transfigured Christ.",
        "questions": [
            "How can I avoid extremes?",
            "What does everyone involved have in common?",
            "How might combining familiar things help me create something new?"
        ]
    },
    {
        "index": 15,
        "name": "The Devil",
        "number": 15,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m15.jpg",
        "fortunes": [
            "Adultery and unfaithfulness",
            "A string of extremely bad luck is coming your way",
            "Beware evil influences and wolves in sheep's clothing"
        ],
        "keywords": [
            "shadow",
            "materialism",
            "bondage",
            "delusion"
        ],
        "meanings": {
            "light": [
                "Appreciating the luxuries that life has to offer",
                "Being comfortable in your own skin",
                "Enjoying your sexuality",
                "Splurging on an expensive personal item",
                "Embracing the fact that everyone has a darker side",
                "Dealing with unhealthy impulses in healthy ways"
            ],
            "shadow": [
                "Putting excessive emphasis on appearances",
                "Always wanting more",
                "Valuing possessions more than people or relationships",
                "Allowing base instincts to govern your life",
                "Being selfish",
                "Attributing your own dark impulses to outside forces or other people"
            ]
        },
        "archetype": "The Shadow, The Other",
        "hebrew": "Ayin/Eye/70",
        "numerology": "15 = 1 + 5 = 6 (adjustment, collaboration)",
        "element": "Capricorn",
        "mythology": "The Biblical Satan, certainly. Fallen angels, including Lucifer. Bacchus and Pan. Tempters and serpents of every stripe.",
        "questions": [
            "What enslaves me? How can I set myself free?",
            "How can I re-evaluate the importance I assign to material things?",
            "To what extent do my cravings define me?"
        ]
    },
    {
        "index": 16,
        "name": "The Tower",
        "number": 16,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m16.jpg",
        "fortunes": [
            "Impending disaster",
            "Cancel plans and reverse decisions",
            "Someone wants to take you down a notch or two",
            "Don't hold back; say what you really mean"
        ],
        "keywords": [
            "demolition",
            "upheaval",
            "deconstruction",
            "disaster",
            "destruction"
        ],
        "meanings": {
            "light": [
                "Breaking out of old, confining habits and mindsets",
                "Clearing the way for new growth",
                "Dispelling the influence of an inflated ego",
                "Getting back to basics",
                "Stripping away harmful illusions",
                "Receiving sudden insight"
            ],
            "shadow": [
                "Clinging to traditions that repress growth",
                "Engaging in willful blindness",
                "Rejecting evidence that change is needed",
                "Ignoring guidance from a higher power",
                "Maliciously engaging in destructive behavior"
            ]
        },
        "archetype": "The Shattered Ego",
        "hebrew": "Pe[as]/Open Mouth/80",
        "numerology": "16 = 1 + 6 = 7 (psychology, imagination, inner work)",
        "element": "Mars",
        "mythology": "The Tower of Babel. The destruction of Sodom and Gomorrah. Shiva's destructive dance. The lightning of Zeus and Thor.",
        "questions": [
            "How might the current situation dramatically alter my perspective?",
            "How might this loss open the door for new growth?",
            "What attitudes need to be struck down before I proceed?"
        ]
    },
    {
        "index": 17,
        "name": "The Star",
        "number": 17,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m17.jpg",
        "fortunes": [
            "Get an astrology chart drawn up",
            "Someone is a little too starstruck",
            "What's happening now has long been fore-ordained"
        ],
        "keywords": [
            "hope",
            "optimism",
            "openness",
            "certainty",
            "faith",
            "longing",
            "truth"
        ],
        "meanings": {
            "light": [
                "Hoping for the best",
                "Believing good things happen to good people",
                "Seeing events in the best possible light",
                "Adopting a generous spirit",
                "Seeking guidance from above",
                "Embracing possibility over probability"
            ],
            "shadow": [
                "Denying unpleasant truths",
                "Denying personal accountability and saying, \"Things just happen!\"",
                "Ignoring signs and omens",
                "Preferring illusion to reality",
                "Spreading pessimism and stinginess of spirit"
            ]
        },
        "archetype": "The Heavenly Guide",
        "hebrew": "Tzaddi/Fishhook/90 or, in some decks, He[as]/Window/5",
        "numerology": "17 = 1 + 7 = 8 (action, movement, swiftness)",
        "element": "Aquarius",
        "mythology": "The star that guided the Magi. Aphrodite. Venus. The Pleiades. Moses bringing forth water from the rock.",
        "questions": [
            "What would my higher power direct me to do?",
            "How can I be less self-conscious and guarded?",
            "How can I better attune myself to the abundance of life's blessings?"
        ]
    },
    {
        "index": 18,
        "name": "The Moon",
        "number": 18,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m18.jpg",
        "fortunes": [
            "Watch for problems at the end of the month",
            "Someone you know needs to howl at the moon more often",
            "Someone is about to change his or her mind about an important decision"
        ],
        "keywords": [
            "mystery",
            "fantasy",
            "imagination",
            "dreams",
            "uncertainty"
        ],
        "meanings": {
            "light": [
                "Enjoying healthy fantasies and daydreams",
                "Using your imagination",
                "Practicing magic or celebrating the magic of everyday life",
                "Attuning yourself to the cycles of nature",
                "Embracing the unknown"
            ],
            "shadow": [
                "Becoming unable to separate fantasy from reality",
                "Suffering from delusions",
                "Losing your appreciation for the fantastic or magical",
                "Adopting a ruthlessly logical mindset",
                "Failing to appreciate life's mysteries"
            ]
        },
        "archetype": "The Holy Feminine/The Crone",
        "hebrew": "Koph/Back of the Head/100",
        "numerology": "18 = 1 + 8 = 9 (fullness, readiness, ripeness)",
        "element": "Pisces",
        "mythology": "Kali, the dark-skinned divine mother associated with time, the eternal night, and the female principle. Hecate, goddess of night and darkness, who, like Anubis, assists others in their travels to the underworld. ",
        "questions": [
            "How can I face my fears and move forward?",
            "What helpers can serve me as guides through my personal darkness?",
            "How can I deal with the unknown in healthy ways?"
        ]
    },
    {
        "index": 19,
        "name": "The Sun",
        "number": 19,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m19.jpg",
        "fortunes": [
            "Everything's coming up roses (or sunflowers, whatever the case may be)",
            "Whatever's on your mind, go for it because you can't lose today"
        ],
        "keywords": [
            "joy",
            "brilliance",
            "validation",
            "attention",
            "energy"
        ],
        "meanings": {
            "light": [
                "Seeing things clearly",
                "Experiencing intense joy",
                "Celebrating your own successes",
                "Knowing you're good at what you do",
                "Gaining recognition for your personal genius"
            ],
            "shadow": [
                "Being dazzled by your own accomplishments",
                "Becoming absorbed in your own self-image",
                "Feeling rushed and distracted",
                "Exerting yourself to the point of exhaustion",
                "Overstating your abilities or misrepresenting your achievements"
            ]
        },
        "archetype": "The Holy Masculine",
        "hebrew": "Resh/Head/200",
        "numerology": "19 = 1 + 9 = 10 (completion, exhaustion) 1 + 0 = 1 (starting point, opportunity)",
        "element": "The Sun",
        "mythology": "God the Father. Sun gods, including Ra, Apollo, and Helios. The moment of baptism. Claiming a new faith as your own.",
        "questions": [
            "How can I take best advantage of the attention coming my way?",
            "What are my highest spiritual goals?",
            "How can I avoid being bedazzled by the energy swirling around me?"
        ]
    },
    {
        "index": 20,
        "name": "Judgement",
        "number": 20,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m20.jpg",
        "fortunes": [
            "An old issue you thought was over will come up again today",
            "Get ready for huge changes: break-ups, sudden calls from old friends, and unexpected setbacks",
            "God's trying to get your attention"
        ],
        "keywords": [
            "revival",
            "renewal",
            "resurrection",
            "evaluation",
            "invitation"
        ],
        "meanings": {
            "light": [
                "Receiving a wake-up call",
                "Discovering a new purpose in life",
                "Becoming totally and completely yourself",
                "Receiving a well-deserved reward",
                "Passing an evaluation or examination",
                "Welcoming the start of a new phase of life"
            ],
            "shadow": [
                "Being weighed in the balances and found wanting",
                "Failing to measure up to a well-defined standard",
                "Being caught goofing off or misbehaving",
                "Failing to prepare for an examination you know is coming",
                "Rejecting an opportunity to reinvent yourself"
            ]
        },
        "archetype": "Resurrection",
        "hebrew": "Sin/Tooth/300",
        "numerology": "20 = 2 + 0 = 2 (division, duality)",
        "element": "Fire",
        "mythology": "The resurrected Christ. The Last Judgment of Revelation. The phoenix, which rises to new life from its own ashes.",
        "questions": [
            "What is the main thing I need to realize about myself?",
            "In what way might the universe be trying to get my attention?",
            "If I were to reinvent myself, what would I become?"
        ]
    },
    {
        "index": 21,
        "name": "The World",
        "number": 21,
        "arcana": "Major Arcana",
        "suit": "Trump",
        "img": "m21.jpg",
        "fortunes": [
            "Winning the lottery",
            "Getting your heart's desire",
            "Having everything you ever imagined having"
        ],
        "keywords": [
            "wholeness",
            "integration",
            "totality",
            "completeness",
            "fullness"
        ],
        "meanings": {
            "light": [
                "Having it all",
                "Knowing and loving yourself as completely as possible",
                "Seeing the interconnection of all things and people",
                "Enhancing your perspective",
                "Living life to its fullest",
                "Understanding the meaning of life"
            ],
            "shadow": [
                "Allowing greed and envy to prevent you from enjoying what you do possess",
                "Failing to see the larger design in ordinary events",
                "Believing that everything that exists can be touched, counted, or measured",
                "Failing to see the divine reflected in those around you"
            ]
        },
        "archetype": "Enlightenment",
        "hebrew": "Tau/Cross/400",
        "numerology": "21 = 2 + 1 = 3 (expression, result)",
        "element": "Saturn",
        "mythology": "The ascended Christ. The Buddha attaining enlightenment. The alpha and the omega. The completion of the alchemist's great work.",
        "questions": [
            "For me, what would having it all mean?",
            "How aware am I of my own connectedness to the world around me?",
            "What keeps me from having it all right now, today?"
        ]
    },
    {
        "index": 22,
        "name": "Ace of Cups",
        "number": 1,
        "arcana": "Minor Arcana",
        "suit": "Cups",
        "img": "c01.jpg",
        "fortunes": [
            "Romance is in the cards",
            "A new relationship or marriage is just around the corner",
            "Prayers are answered"
        ],
        "keywords": [
            "intuition",
            "spirituality",
            "affection",
            "motivation"
        ],
        "meanings": {
            "light": [
                "Trusting your feelings",
                "Opening yourself to spirit",
                "Accepting and returning affection",
                "Getting in touch with what motivates you",
                "Taking advantage of an opportunity to express love to others",
                "Listening to the still, small voice"
            ],
            "shadow": [
                "Hiding your feelings",
                "Spurning an opportunity to love or be loved",
                "Numbing yourself to spiritual yearnings",
                "Rejecting the counsel of your heart",
                "Becoming a puppet of your own emotions",
                "Indulging in hysteria or obsession"
            ]
        },
        "numerology": "1 (The Origin: the starting point, the seed, opportunity)",
        "element": "Water",
        "astrology": "Cancer, Scorpio, Pisces",
        "affirmation": "\"I listen to the counsel of my heart.\"",
        "questions": [
            "What am I feeling right now?",
            "How would I go about opening myself to spiritual guidance?",
            "What motivates me the most - pleasure or pain? Why?"
        ]
    },
    {
        "index": 23,
        "name": "Two of Cups",
        "number": 2,
        "arcana": "Minor Arcana",
        "suit": "Cups",
        "img": "c02.jpg",
        "fortunes": [
            "Someone has a secret crush on you",
            "Relationships should be mutual; get rid of a leech"
        ],
        "keywords": [
            "union",
            "attraction",
            "combination",
            "affection"
        ],
        "meanings": {
            "light": [
                "Being drawn to someone",
                "Longing for someone or something",
                "Acting on your desires",
                "Discovering a feeling is mutual",
                "Doing what makes you feel good",
                "Merging",
                "Healing broken ties",
                "Admitting two people feel differently about each other and moving on"
            ],
            "shadow": [
                "Burning bridges",
                "Becoming caught up in unhealthy codependency",
                "Shutting out anyone but your chosen few",
                "Obsessing on someone who does not return your affections",
                "Despairing over finding \"The One\"",
                "Deceiving yourself about your true orientation"
            ]
        },
        "numerology": "2 (The Other: duality, division, debate)",
        "element": "Water",
        "astrology": "Venus in Cancer",
        "affirmation": "\"I am attuned to what my heart truly desires.\"",
        "questions": [
            "How can I make sure that what I'm feeling is mutual?\",\"When was the last time I felt \"in love\" with someone or something?",
            "What do you need in order to feel emotionally stable?"
        ]
    },
    {
        "index": 24,
        "name": "Three of Cups",
        "number": 3,
        "arcana": "Minor Arcana",
        "suit": "Cups",
        "img": "c03.jpg",
        "fortunes": [
            "Unconventional romance is coming your way: a love affair with someone you've always dismissed"
        ],
        "keywords": [
            "celebration",
            "expression",
            "community",
            "friendliness"
        ],
        "meanings": {
            "light": [
                "Celebrating your feelings or connections with others",
                "Expressing joy through song, dance, or physical affection",
                "Working together with others who share your feelings",
                "Performing acts of service as a way of saying, \"I love you\"",
                "Embracing unconventional romantic arrangements"
            ],
            "shadow": [
                "Mistaking giddiness for true affection",
                "Being dominated by manic emotions",
                "Expecting everyone to always feel the same way you do",
                "Demanding unreasonable support from friends or family",
                "Partying to a dangerous or unhealthy extent"
            ]
        },
        "numerology": "3 (The Result: expression, productivity, output)",
        "element": "Water",
        "astrology": "Mercury in Cancer",
        "affirmation": "\"I allow my actions to reflect my true emotions.\"",
        "questions": [
            "What's worth celebrating in my life?",
            "How can I demonstrate my feelings in appropriate ways?",
            "What can I do to show my partner how I really feel?"
        ]
    },
    {
        "index": 25,
        "name": "Four of Cups",
        "number": 4,
        "arcana": "Minor Arcana",
        "suit": "Cups",
        "img": "c04.jpg",
        "fortunes": [
            "A lover is getting restless",
            "Find out what he or she needs, or new opportunities may lure your partner away"
        ],
        "keywords": [
            "boredom",
            "listlessness",
            "lethargy",
            "stability",
            "ingratitude"
        ],
        "meanings": {
            "light": [
                "Maintaining your emotional stability",
                "Refusing to give in to overwhelming emotions",
                "Appreciating what you have and refusing to take it for granted",
                "Seeing the value of long-term commitments"
            ],
            "shadow": [
                "Being bored",
                "Daydreaming at the expense of your work",
                "Refusing to be engaged by opportunity",
                "Taking people and relationships for granted",
                "Ignoring romantic or spiritual opportunities",
                "Spurning inspiration",
                "Feeling everything should stay \"just like it is\""
            ]
        },
        "numerology": "4 (The Status Quo: stability, equality, persistence)",
        "element": "Water",
        "astrology": "Moon in Cancer",
        "affirmation": "\"I appreciate what I've been given.\"",
        "questions": [
            "How can I use this \"downtime\" to my best advantage?",
            "How can I show my partner that I don't take him or her for granted?",
            "To what extent is my mood blinding me to new opportunities?"
        ]
    },
    {
        "index": 26,
        "name": "Five of Cups",
        "number": 5,
        "arcana": "Minor Arcana",
        "suit": "Cups",
        "img": "c05.jpg",
        "fortunes": [
            "A breakup looms",
            "Don't cry over spilt milk",
            "Take your lumps and get back in the saddle"
        ],
        "keywords": [
            "loss",
            "despair",
            "re-evaluation",
            "regret",
            "uncertainty",
            "repentance"
        ],
        "meanings": {
            "light": [
                "Acknowledging loss and moving on",
                "Focusing on how the glass remains \"half-full\"",
                "Finding the silver lining in a dark cloud",
                "Recognizing that loss is a natural part of life",
                "Embracing healthy grief",
                "Learning lessons from harsh consequences"
            ],
            "shadow": [
                "Wallowing in unhealthy grief or self-pity",
                "Refusing to move on and let go",
                "Clinging to the past",
                "Obsessing on past lives and past loves",
                "Failing to live in the present",
                "Beating yourself up over past mistakes",
                "Allowing fear of failure to limit your efforts"
            ]
        },
        "numerology": "5 (The Catalyst: instability, resistance, confrontation)",
        "element": "Water",
        "astrology": "Mars in Scorpio",
        "affirmation": "\"I learn from my losses and move on.\"",
        "questions": [
            "How do I tend to deal with loss?",
            "What life lesson might I be learning now?",
            "How can I shift my attention from the past to the future?"
        ]
    },
    {
        "index": 27,
        "name": "Six of Cups",
        "number": 6,
        "arcana": "Minor Arcana",
        "suit": "Cups",
        "img": "c06.jpg",
        "fortunes": [
            "A stingy spirit is strangling your enjoyment of life",
            "Loosen up and think of others for once, why don't you?"
        ],
        "keywords": [
            "charity",
            "sharing",
            "sacrifice",
            "cooperation",
            "fairness"
        ],
        "meanings": {
            "light": [
                "Donating your time and talents to others",
                "Taking satisfaction in knowing how your efforts will aid others",
                "Creating a \"win-win\" scenario",
                "Giving even when you know repayment is not possible",
                "Being motivated to do a good deed"
            ],
            "shadow": [
                "Linking your sense of self-worth to the appraisals of others",
                "Striving to appear more needy than you really are",
                "Taking undeserved or unmerited charity",
                "Bragging about your charitable efforts",
                "Profiteering in times of distress",
                "Refusing to share a burden"
            ]
        },
        "numerology": "6 (The Adjustment: cooperation, collaboration, interaction)",
        "element": "Water",
        "astrology": "Sun in Scorpio",
        "affirmation": "\"I freely give myself to others, expecting nothing in return.\"",
        "questions": [
            "What gifts do I possess? How freely do I give them?",
            "How can I practice unconditional giving?",
            "How would things change if I became a more charitable person?"
        ]
    },
    {
        "index": 28,
        "name": "Seven of Cups",
        "number": 7,
        "arcana": "Minor Arcana",
        "suit": "Cups",
        "img": "c07.jpg",
        "fortunes": [
            "You're being fed a line",
            "Rather than be dazzled by fancy words and promises, demand something real"
        ],
        "keywords": [
            "imagination",
            "dreams",
            "illusions",
            "goals"
        ],
        "meanings": {
            "light": [
                "Motivating yourself with images of future success",
                "Using visualization to encourage progress",
                "Taking an imaginative or creative approach to problem solving",
                "Making dreams come true",
                "Gleaning insight from personal visions"
            ],
            "shadow": [
                "Obsessing on imaginary fears or uncertain consequences",
                "Giving in to emotional or political terrorism",
                "Spending more time dreaming than working",
                "Failing to envision the possible repercussions of your choices",
                "Being controlled by fear"
            ]
        },
        "numerology": "7 (The Motive: imagination, inner work, psychology)",
        "element": "Water",
        "astrology": "Venus in Scorpio",
        "affirmation": "\"I use inner vision as a tool for growth.\"",
        "questions": [
            "What do you want most? What do you fear most? How are these related?",
            "How is your imagination working for you? Against you?",
            "How might a clearer personal vision help you choose a single cup from the many available?"
        ]
    },
    {
        "index": 29,
        "name": "Eight of Cups",
        "number": 8,
        "arcana": "Minor Arcana",
        "suit": "Cups",
        "img": "c08.jpg",
        "fortunes": [
            "Someone's \"stepping out\" on you, now or in the near future",
            "Maybe it's time to quit talking about the problem and just move on"
        ],
        "keywords": [
            "longing",
            "dissatisfaction",
            "quest",
            "departure",
            "withdrawal"
        ],
        "meanings": {
            "light": [
                "Wanting something better",
                "Blazing your own trail",
                "Realizing there must be more to life",
                "Leaving an unhealthy situation behind",
                "Starting your own business",
                "Going on a retreat",
                "Seeking the \"still, small voice\""
            ],
            "shadow": [
                "Being implacable",
                "Finding fault",
                "Nitpicking",
                "Refusing to settle down",
                "Running away from problems or confrontations",
                "Saying, \"It's my way or the highway!\"",
                "Harping on past mistakes and disappointments",
                "Threatening to quit as a strategy to get your way"
            ]
        },
        "numerology": "8 (The Action: movement, outer work, swiftness)",
        "element": "Water",
        "astrology": "Saturn in Pisces",
        "affirmation": "\"I am always open to opportunities for growth.\"",
        "questions": [
            "What do I need to leave behind once and for all?",
            "If I left in search of \"more,\" what would I be looking for, exactly?",
            "How might a retreat enhance my perspective?"
        ]
    },
    {
        "index": 30,
        "name": "Nine of Cups",
        "number": 9,
        "arcana": "Minor Arcana",
        "suit": "Cups",
        "img": "c09.jpg",
        "fortunes": [
            "Whatever you want, you'll get it"
        ],
        "keywords": [
            "satisfaction",
            "sensuality",
            "luxury",
            "pleasure"
        ],
        "meanings": {
            "light": [
                "Being delighted with your own achievements",
                "Recognizing your own talents and abilities",
                "Reveling in the good things life has to offer",
                "Indulging yourself",
                "Relaxing and unwinding",
                "Having everything you need in order to feel complete"
            ],
            "shadow": [
                "Being smug",
                "Satisfying yourself at the expense of others",
                "Being selfish",
                "Over-indulging",
                "Avoiding work that needs to be done",
                "Claiming achievements or skills you do not possess",
                "Never being satisfied, no matter how much you have"
            ]
        },
        "numerology": "9 (The Completion: fullness, readiness, ripeness)",
        "element": "Water",
        "astrology": "Jupiter in Pisces",
        "affirmation": "\"I have everything I need to be happy.\"",
        "questions": [
            "What is true happiness?",
            "If I could have anything, what would I have?",
            "What is my attitude toward luxury? Do I deserve it?"
        ]
    },
    {
        "index": 31,
        "name": "Ten of Cups",
        "number": 10,
        "arcana": "Minor Arcana",
        "suit": "Cups",
        "img": "c10.jpg",
        "fortunes": [
            "Marriage and family are in the cards",
            "Expect a friendship to blossom into a romance"
        ],
        "keywords": [
            "joy",
            "fulfillment",
            "overwhelming emotion",
            "giddiness"
        ],
        "meanings": {
            "light": [
                "Having more than you ever dreamed",
                "Being deeply thankful for all you've been given",
                "Recognizing the Hand of God in the gifts the Universe brings your way",
                "Experiencing transcendent joy",
                "Achieving domestic bliss"
            ],
            "shadow": [
                "Comparing your achievements or relationships to unrealistic fantasy standards",
                "Experiencing emotions so intense they blunt your ability to cope with reality",
                "Feeling overwhelmed",
                "Envying the achievements and happiness of others"
            ]
        },
        "numerology": "10 (The End: finality, completion, exhaustion)",
        "element": "Water",
        "astrology": "Mars in Pisces",
        "affirmation": "\"I take time to appreciate what I've been given.\"",
        "questions": [
            "Who gets to define what \"joy\" consists of?",
            "What course of action is available when you feel overwhelmed?",
            "How might vows or promises play a role in achieving a greater level of joy in your life?"
        ]
    },
    {
        "index": 32,
        "name": "Page of Cups",
        "number": 11,
        "arcana": "Minor Arcana",
        "suit": "Cups",
        "img": "c11.jpg",
        "fortunes": [
            "This card represents a young man or woman with a watery, dreamy demeanor, likely born a Libra, Scorpio, or Sagittarius, who wants to start a new relationship with you"
        ],
        "keywords": [
            "enthusiasm",
            "first impressions",
            "romanticism",
            "superficiality"
        ],
        "meanings": {
            "light": [
                "Showing your emotions freely",
                "Throwing yourself into romance",
                "Nursing a secret crush",
                "Indulging in romantic fantasy",
                "Starting a new relationship",
                "Recalling your first love",
                "Experiencing love for the first time",
                "Converting to a new religion"
            ],
            "shadow": [
                "Mistaking a crush for true love",
                "Reading romantic intention into innocent action",
                "Frantically trying to impress others",
                "Indulging in overly-sweet sentimentality",
                "Pretending to more romantic or spiritual experience than you possess"
            ]
        },
        "element": "Earth of Water.",
        "affirmation": "\"I am ready to embrace love and Spirit.\"",
        "questions": [
            "How worried are you that others will see you as foolish or inexperienced?",
            "To what extent can you be honest about your lack of experience in love and faith?",
            "How can you maintain enthusiasm over time?"
        ]
    },
    {
        "index": 33,
        "name": "Knight of Cups",
        "number": 12,
        "arcana": "Minor Arcana",
        "suit": "Cups",
        "img": "c12.jpg",
        "fortunes": [
            "This card represents a man with an emotional, sensitive personality, likely born between October 13th and November 11th, who wants you to rally around his latest passionate cause"
        ],
        "keywords": [
            "fervor",
            "zeal",
            "moodiness",
            "illumination"
        ],
        "meanings": {
            "light": [
                "Being deeply committed to a cause",
                "Giving in to strong emotions, from excitement to depression",
                "Acting on intuition alone",
                "Solving problems intuitively",
                "Believing in and basing decisions on ideals instead of realities",
                "Bringing intuition or passion to the table"
            ],
            "shadow": [
                "Becoming a fanatic",
                "Rejecting information that suggests your intuitions are misguided",
                "Allowing your emotions to control you",
                "Giving in to jealousy, confrontation, and peer pressure",
                "Hiding or ignoring intuitive insights"
            ]
        },
        "element": "Air of Water.",
        "affirmation": "\"I translate my passions into actions.\"",
        "questions": [
            "How prone to emotional extremes are you?",
            "What's the difference in driving passion and blind zeal?",
            "How can you inspire others without inciting a riot?"
        ]
    },
    {
        "index": 34,
        "name": "Queen of Cups",
        "number": 13,
        "arcana": "Minor Arcana",
        "suit": "Cups",
        "img": "c13.jpg",
        "fortunes": [
            "This card represents a woman with an emotional, deeply spiritual nature, likely born between June 11th and July 11th, who uses emotional and spiritual appeals to sway others to her point of view"
        ],
        "keywords": [
            "insightfulness",
            "spirituality",
            "compassion",
            "empathy",
            "instinct"
        ],
        "meanings": {
            "light": [
                "Allowing yourself to be moved by the plight of others",
                "Feeling strong emotions",
                "Possessing unusual sympathy or empathy",
                "Trusting your feelings to guide you",
                "Calling on psychic abilities",
                "Achieving unity with Spirit"
            ],
            "shadow": [
                "Becoming so caught up in matters of Spirit, you become detached from the world",
                "Allowing empathy to disable you (instead of inspire action)",
                "Using psychic abilities to wield covert influence",
                "Wallowing in emotionalism, sentiment, or self-pity"
            ]
        },
        "element": "Water of Water.",
        "affirmation": "\"I choose to be enabled, not disabled, by my strong emotions.\"",
        "questions": [
            "How do I handle strong emotions?",
            "To what extent am I a victim of my own feelings?",
            "How can I move from reflection to action?"
        ]
    },
    {
        "index": 35,
        "name": "King of Cups",
        "number": 14,
        "arcana": "Minor Arcana",
        "suit": "Cups",
        "img": "c14.jpg",
        "fortunes": [
            "This card represents an older man with a gentle, sensitive presence, likely born between February 9th and March 10th, who is known for his fairness and tolerance"
        ],
        "keywords": [
            "wisdom",
            "diplomacy",
            "restraint",
            "composure"
        ],
        "meanings": {
            "light": [
                "Keeping a stiff upper lip",
                "Being brave and clear in the face of adverse circumstances",
                "Sharing experience as a way of comforting others",
                "Making fair and empathetic decisions",
                "Honoring the spirit, not just the letter, of the law"
            ],
            "shadow": [
                "Allowing yourself to become rigid and unemotional",
                "Making unfair decisions based on a hidden agenda",
                "Making decisions without regard for their emotional impact on others",
                "Abusing spiritual authority",
                "Using emotional or spiritual leverage to exercise unhealthy control over others"
            ]
        },
        "element": "Fire of Water.",
        "affirmation": "\"I strive to be stable and fair-minded.\"",
        "questions": [
            "What wise person could be consulted for good advice?",
            "How can I make sure I'm being as objective and fair as possible?",
            "To what extent am I capable of keeping a \"stiff upper lip?\""
        ]
    },
    {
        "index": 36,
        "name": "Ace of Swords",
        "number": 1,
        "arcana": "Minor Arcana",
        "suit": "Swords",
        "img": "s01.jpg",
        "fortunes": [
            "The time to make a choice is now",
            "Stop wavering and do what you know is best"
        ],
        "keywords": [
            "logic",
            "objectivity",
            "intellect",
            "choice"
        ],
        "meanings": {
            "light": [
                "Making objective decisions",
                "Applying logic",
                "Reasoning your way out of a difficult situation",
                "Solving puzzles",
                "Thinking things through",
                "Emphasizing the facts",
                "Clearing your mind",
                "Seeking clarity"
            ],
            "shadow": [
                "Applying ruthless or twisted logic",
                "Gloating over your own superior intellect",
                "Using quick thinking to deceive or confuse others",
                "Confusing snap judgments with quick thinking",
                "Making decisions without thinking through consequences"
            ]
        },
        "numerology": "1 (The Origin: the starting point, the seed, opportunity)",
        "element": "air",
        "astrology": "Libra, Aquarius, Gemini",
        "affirmation": "\"I take the time to think things through.\"",
        "questions": [
            "If I made my decision purely based on reason and logic, what would my decision be?",
            "What do I think about my own problem-solving ability?",
            "Who can supply me with the pure and simple facts?"
        ]
    },
    {
        "index": 37,
        "name": "Two of Swords",
        "number": 2,
        "arcana": "Minor Arcana",
        "suit": "Swords",
        "img": "s02.jpg",
        "fortunes": [
            "Sometimes, the only way to win is to refuse to fight",
            "You're stuck for now; let time pass before taking action"
        ],
        "keywords": [
            "denial",
            "debate",
            "impasse",
            "truce"
        ],
        "meanings": {
            "light": [
                "Refusing to make a decision without getting the facts",
                "Exploring both sides of an argument",
                "Arguing passionately for what you believe in",
                "Weighing the issues",
                "Encouraging the open exchange of ideas",
                "Discussing political or religious issues without getting \"hot under the collar\""
            ],
            "shadow": [
                "Rejecting evidence that conflicts with dearly-held beliefs",
                "Arguing with others just for the sake of doing so",
                "Nit-picking",
                "Putting off a decision because you're afraid to face the consequences",
                "Preventing others from getting the information they need to make good decisions"
            ]
        },
        "numerology": "2 (The Other: duality, division, debate)",
        "element": "air",
        "astrology": "Moon in Libra",
        "affirmation": "\"I strive to see all sides of every issue.\"",
        "questions": [
            "What information do I need to get past this impasse?",
            "How can I get past being defensive and see the facts?",
            "What viewpoints, other than my own, play a role in this situation?"
        ]
    },
    {
        "index": 38,
        "name": "Three of Swords",
        "number": 3,
        "arcana": "Minor Arcana",
        "suit": "Swords",
        "img": "s03.jpg",
        "fortunes": [
            "Breakups and infidelity abound",
            "What hurts now, though, will turn out to be good for you later on"
        ],
        "keywords": [
            "variance",
            "difference",
            "dissatisfaction",
            "heartache",
            "rejection"
        ],
        "meanings": {
            "light": [
                "Being brave enough to see things as they really are",
                "Exercising your critical eye",
                "Being your own best critic",
                "Acknowledging that things don't always turn out as planned",
                "Moving past heartbreak to embrace a painful truth"
            ],
            "shadow": [
                "Wallowing in despair",
                "Allowing yourself to be completely crushed by the thoughts, words, or deeds of another",
                "Judging yourself too harshly",
                "Holding yourself to an unrealistic standard of excellence",
                "Wearing your heart on your sleeve while carrying a chip on your shoulder"
            ]
        },
        "numerology": "3 (The Result: expression, productivity, output)",
        "element": "air",
        "astrology": "Saturn in Libra",
        "affirmation": "\"I learn from failures and setbacks.\"",
        "questions": [
            "How can I get past my depression?",
            "To what extent are my emotions a matter of choice?",
            "How can I learn from the mistakes of the past?"
        ]
    },
    {
        "index": 39,
        "name": "Four of Swords",
        "number": 4,
        "arcana": "Minor Arcana",
        "suit": "Swords",
        "img": "s04.jpg",
        "fortunes": [
            "Don't make any decision now",
            "Wait, and you'll be glad you did"
        ],
        "keywords": [
            "meditation",
            "contemplation",
            "perspective",
            "mindset"
        ],
        "meanings": {
            "light": [
                "Thinking over your plans before putting them into action",
                "Pausing to meditate or clear your mind",
                "Taking time to understand someone or something before criticizing it",
                "Resting",
                "Occupying your thoughts with a healthy distraction"
            ],
            "shadow": [
                "Failing to think things through",
                "Mistaking procrastination for thoughtfulness",
                "Adopting a point of view and refusing to reconsider your conclusions, even when presented with refuting evidence",
                "Allowing chaos and whimsy to dominate your thoughts"
            ]
        },
        "numerology": "4 (The Status Quo: stability, equality, persistence)",
        "element": "air",
        "astrology": "Jupiter in Libra",
        "affirmation": "\"I think before taking action.\"",
        "questions": [
            "How long has it been since you deliberately took a \"time out?\"",
            "How difficult is it for you to meditate?",
            "What would happen if you simply refused to make a decision today?"
        ]
    },
    {
        "index": 40,
        "name": "Five of Swords",
        "number": 5,
        "arcana": "Minor Arcana",
        "suit": "Swords",
        "img": "s05.jpg",
        "fortunes": [
            "Someone is stealing from you, financially or romantically",
            "Be wary of friends who talk behind your back"
        ],
        "keywords": [
            "selfishness",
            "hostility",
            "irrationality",
            "self-preservation"
        ],
        "meanings": {
            "light": [
                "Acting in your own best interest",
                "Choosing to stand up for yourself",
                "Not backing down from disagreement and discord",
                "Taking a stand",
                "Refusing to go along with an unethical plan",
                "Knowing when to bend the rules"
            ],
            "shadow": [
                "Taking advantage of others",
                "Intimidating others",
                "Acting in an unethical manner",
                "Picking fights",
                "Using words to goad others into violence and irrationality",
                "Ignoring rules you've agreed to abide by",
                "Looking out for yourself while allowing harm to come to others",
                "Gloating over victory"
            ]
        },
        "numerology": "5 (The Catalyst: instability, resistance, confrontation)",
        "element": "air",
        "astrology": "Venus in Aquarius",
        "affirmation": "\"Even as I care for myself, I am mindful of the needs of others.\"",
        "questions": [
            "How do I behave when I win? What does that say about me?",
            "How can I do what's necessary without making others feel defeated?",
            "What's the difference between selfish action and acting in my own best interest?"
        ]
    },
    {
        "index": 41,
        "name": "Six of Swords",
        "number": 6,
        "arcana": "Minor Arcana",
        "suit": "Swords",
        "img": "s06.jpg",
        "fortunes": [
            "You'll soon go on a long journey over water",
            "Actions have unexpected consequences, so be prepared"
        ],
        "keywords": [
            "adaptation",
            "adjustments",
            "science",
            "travel"
        ],
        "meanings": {
            "light": [
                "Making the best of a bad situation",
                "Recovering from defeat",
                "Resetting expectations",
                "Making allowances for unexpected circumstances",
                "Helping others who find themselves in dire circumstances",
                "Changing the way you see the world",
                "Broadening your perspective through study or travel"
            ],
            "shadow": [
                "Refusing to accept that things have changed",
                "Playing the victim",
                "Rejecting the idea that your actions have consequences",
                "Applying scientific criteria to matters of faith, or confusing faith with science",
                "Believing the whole world should be like your small corner of it"
            ]
        },
        "numerology": "6 (The Adjustment: cooperation, collaboration, interaction)",
        "element": "air",
        "astrology": "Mercury in Aquarius",
        "affirmation": "\"I keep an open mind.\"",
        "questions": [
            "What assumptions govern my thinking?",
            "How willing am I to lend aid to others? To request it when I need it?",
            "How prepared am I to deal with change? With unexpected outcomes?"
        ]
    },
    {
        "index": 42,
        "name": "Seven of Swords",
        "number": 7,
        "arcana": "Minor Arcana",
        "suit": "Swords",
        "img": "s07.jpg",
        "fortunes": [
            "Don't assume people around you are worthy of your trust",
            "Ask for an accounting of where people have been, and what they've been doing"
        ],
        "keywords": [
            "dishonesty",
            "presumption",
            "sneakiness",
            "assumptions"
        ],
        "meanings": {
            "light": [
                "Refusing to do something dishonest, even when there's no chance of ever being caught",
                "Handling a difficult situation with finesse",
                "Pointing out assumptions",
                "Acting ethically in public and in private",
                "Living a life that is beyond reproach"
            ],
            "shadow": [
                "Stealing or lying",
                "Doing whatever you can get away with, simply because you can",
                "Looking for a way around consequences",
                "Justifying wicked behavior by focusing on the wickedness of others",
                "Failing to examine your own motives and prejudices"
            ]
        },
        "numerology": "7 (The Motive: imagination, inner work, psychology)",
        "element": "air",
        "astrology": "Moon in Aquarius",
        "affirmation": "\"I hold myself to the highest ethical standards.\"",
        "questions": [
            "What assumptions am I making?",
            "How well-defined is my sense of ethics?",
            "How should I respond when I know others are breaking the rules?"
        ]
    },
    {
        "index": 43,
        "name": "Eight of Swords",
        "number": 8,
        "arcana": "Minor Arcana",
        "suit": "Swords",
        "img": "s08.jpg",
        "fortunes": [
            "Get over playing the victim",
            "Once you realize you are your own biggest obstacle, nothing can hold you back"
        ],
        "keywords": [
            "restriction",
            "limitation",
            "confinement",
            "helplessness"
        ],
        "meanings": {
            "light": [
                "Honoring limits",
                "Respecting the rules",
                "Deciding to go on a diet for your health's sake",
                "Recognizing you cannot always be in control",
                "Identifying obstacles to further progress",
                "Refusing to think about unhealthy or unethical options",
                "Asking for assistance"
            ],
            "shadow": [
                "Feeling trapped",
                "Being lost in a maze of rules and regulations",
                "Giving in to despair",
                "Playing the victim",
                "Allowing others to dictate what you can and cannot do",
                "Being rendered helpless",
                "Having very few options",
                "Failing to look for a way out"
            ]
        },
        "numerology": "8 (The Action: movement, outer work, swiftness)",
        "element": "air",
        "astrology": "Jupiter in Gemini",
        "affirmation": "\"I know my own limits.\"",
        "questions": [
            "Who's empowered to cut through the red tape?",
            "What, exactly, are the obstacles? What resources, exactly, are needed to move them?",
            "To what extent is your powerlessness a matter of attitude?"
        ]
    },
    {
        "index": 44,
        "name": "Nine of Swords",
        "number": 9,
        "arcana": "Minor Arcana",
        "suit": "Swords",
        "img": "s09.jpg",
        "fortunes": [
            "If you take the action you're considering now, you'll be sorry in the future"
        ],
        "keywords": [
            "remorse",
            "worry",
            "distraught",
            "conclusion"
        ],
        "meanings": {
            "light": [
                "Refusing to worry about what you cannot control",
                "Rejecting anxiety",
                "Judging your own performance with kindness and gentleness",
                "Using meditation to quiet a troubled mind",
                "Confronting nightmares and fears",
                "Drawing a conclusion and putting an issue out of your mind"
            ],
            "shadow": [
                "Torturing yourself with regrets",
                "Second-guessing your every move",
                "Beating yourself up for your mistakes",
                "Depression",
                "Obsessing on errors and overlooked details",
                "Refusing to handle stress in healthy ways",
                "Ruining your ability to appreciate the present by dwelling on the past",
                "Debating irreversible decisions"
            ]
        },
        "numerology": "9 (The Completion: fullness, readiness, ripeness)",
        "element": "air",
        "astrology": "Mars in Gemini",
        "affirmation": "\"I do not worry about what I cannot control.\"",
        "questions": [
            "What role does worry play in your current situation?",
            "To what other ends might you devote the energy you're giving to anxiety?",
            "How can you know when it's time to stop thinking and start acting?"
        ]
    },
    {
        "index": 45,
        "name": "Ten of Swords",
        "number": 10,
        "arcana": "Minor Arcana",
        "suit": "Swords",
        "img": "s10.jpg",
        "fortunes": [
            "Disaster",
            "Put off plans and do not take action until omens are better"
        ],
        "keywords": [
            "exhaustion",
            "ruin",
            "disaster",
            "stamina",
            "obsession"
        ],
        "meanings": {
            "light": [
                "Seeing the signs that you've reached your limits",
                "Paying attention to what your body is trying to tell you",
                "Giving in to the need for rest and renewal",
                "Acknowledging that you've hit bottom",
                "Committing to a turnaround",
                "Knowing the worst is over"
            ],
            "shadow": [
                "Accepting defeat prematurely",
                "Driving yourself to total exhaustion, especially mentally",
                "Experiencing a mental breakdown",
                "Obsessing on a problem to the breaking point",
                "Giving up",
                "Refusing to move from thought to action",
                "Deeply unhealthy thoughts"
            ]
        },
        "numerology": "10 (The End: finality, completion, exhaustion)",
        "element": "air",
        "astrology": "Sun in Gemini",
        "affirmation": "\"When my limits are exceeded, I take action on my own behalf.\"",
        "questions": [
            "What are the signs that the time for debate is over?",
            "How can you tell when interest has given way to obsession?",
            "When your own limits are reached, where can you turn for aid?"
        ]
    },
    {
        "index": 46,
        "name": "Page of Swords",
        "number": 11,
        "arcana": "Minor Arcana",
        "suit": "Swords",
        "img": "s11.jpg",
        "fortunes": [
            "This card represents a young man or woman with an airy, intellectual demeanor, likely born a Capricorn, Aquarius, or Pisces, who wants to learn something new from you or have a discussion with you"
        ],
        "keywords": [
            "student",
            "apprentice",
            "scholarship",
            "information"
        ],
        "meanings": {
            "light": [
                "Pursuing a course of study",
                "Asking good questions",
                "Investing time in study and practice",
                "Doing research",
                "Making a habit of learning new things",
                "Starting an investigation",
                "Outlining what you need to know",
                "Finding a mentor or teacher"
            ],
            "shadow": [
                "Pretending to knowledge or sophistication you do not possess",
                "Cheating on an exam",
                "Feigning interest as a way of gaining favor",
                "Considering only the evidence that supports conclusions you've already drawn",
                "Rejecting the wise counsel of experienced teachers"
            ]
        },
        "element": "Earth of Air.",
        "affirmation": "\"I am ready to make good decisions.\"",
        "questions": [
            "How comfortable are you with revealing your own ignorance?",
            "What are the marks of a good student?",
            "To what extent are you open to new information?"
        ]
    },
    {
        "index": 47,
        "name": "Knight of Swords",
        "number": 12,
        "arcana": "Minor Arcana",
        "suit": "Swords",
        "img": "s12.jpg",
        "fortunes": [
            "A blunder leads someone to say something he or she regrets",
            "If this was you, be prepared to apologize and move on"
        ],
        "keywords": [
            "bluntness",
            "intelligence",
            "incisiveness",
            "investigation"
        ],
        "meanings": {
            "light": [
                "Speaking your mind",
                "Making your opinions known",
                "Offering constructive criticism",
                "Sharing your knowledge",
                "Making insightful observations",
                "Pinpointing the problem",
                "Clarifying what others have said",
                "Giving clear direction to others",
                "Uncovering the truth"
            ],
            "shadow": [
                "Stating your opinions as fact",
                "Picking fights",
                "Starting arguments",
                "Using clever insults to undermine the confidence of others",
                "Tossing reason out the window",
                "Speaking without taking the feelings of others into account",
                "Going on a witch hunt",
                "Distorting evidence"
            ]
        },
        "element": "Air of Air.",
        "affirmation": "\"I temper my insights with tact.\"",
        "questions": [
            "What do I really need to know?",
            "To what extent have I investigated the facts behind my situation?",
            "How can I share what I know without alienating others?"
        ]
    },
    {
        "index": 48,
        "name": "Queen of Swords",
        "number": 13,
        "arcana": "Minor Arcana",
        "suit": "Swords",
        "img": "s13.jpg",
        "fortunes": [
            "This card represents a woman with an artistic, intellectual nature, likely born between September 12th and October 12th, who uses clever, positive communication to sway others to her point of view"
        ],
        "keywords": [
            "grace",
            "skill",
            "wit",
            "charm",
            "aptitude"
        ],
        "meanings": {
            "light": [
                "Exercising tact or using diplomacy",
                "Defusing a tense situation",
                "Knowing what to say and how to say it",
                "Making others feel comfortable and confident",
                "Bringing out the best in everyone",
                "Having a way with words",
                "Telling jokes",
                "Possessing a knack for music, math, art, or science"
            ],
            "shadow": [
                "Knowing exactly what to say to destroy another person",
                "Withholding critical information",
                "Using a barbed tongue to upset others",
                "Employing sarcasm",
                "Mimicking others unkindly",
                "Making light of the less fortunate",
                "Being disrespectful",
                "Failing to use the talent you've been given"
            ]
        },
        "element": "Water of Air.",
        "affirmation": "\"I make the truth easier to hear.\"",
        "questions": [
            "What do I have a knack for? How might my special gift prove useful now?",
            "To what extent am I capable of saying what needs to be said?",
            "What is the best possible way to say what I want to say?"
        ]
    },
    {
        "index": 49,
        "name": "King of Swords",
        "number": 14,
        "arcana": "Minor Arcana",
        "suit": "Swords",
        "img": "s14.jpg",
        "fortunes": [
            "This card represents an older man with an insightful, deliberate spirit, likely born between May 11th and June 10th, who is known for his integrity and sharp decision-making ability"
        ],
        "keywords": [
            "genius",
            "expertise",
            "decision",
            "verdict"
        ],
        "meanings": {
            "light": [
                "Expressing yourself with firmness and authority",
                "Rendering a final decision",
                "Consulting an expert",
                "Calling in advisors and consultants",
                "Coming to a final conclusion",
                "Reaching a beneficial agreement based on sound information"
            ],
            "shadow": [
                "Insisting on having the last word",
                "Flaunting your intellectual capability",
                "Talking \"over the heads\" of others",
                "Waffling on an important decision",
                "Constantly changing your mind",
                "Refusing to make choices that are in your own best interest",
                "Wishing in vain you could take back what's been said"
            ]
        },
        "element": "Fire of Air.",
        "affirmation": "\"My word is my bond.\"",
        "questions": [
            "What would your decision be if you had to render a binding verdict right now?",
            "How comfortable are you saying exactly what you mean? How often do you temper what you have to say for fear of offending others?",
            "If you were to ask others, \"What's my area of expertise?\" what would they say?"
        ]
    },
    {
        "index": 50,
        "name": "Ace of Wands",
        "number": 1,
        "arcana": "Minor Arcana",
        "suit": "Wands",
        "img": "w01.jpg",
        "fortunes": [
            "Someone has the \"hots\" for you",
            "A new job offer is coming your way",
            "Walk softly, and carry a big stick"
        ],
        "keywords": [
            "desire",
            "inspiration",
            "vision",
            "creation",
            "invention"
        ],
        "meanings": {
            "light": [
                "Being inspired",
                "Identifying an important goal",
                "Being given the opportunity to do whatever you want to do",
                "Giving or receiving direction",
                "Seeing a solution",
                "Creating something new",
                "Being aroused, sexually or creatively"
            ],
            "shadow": [
                "Failing to take advantage of a great opportunity",
                "Being ineffectual or lazy",
                "Making an inadequate effort",
                "Working toward a goal, but lacking the resources or initiative to achieve success",
                "Setting inappropriate goals",
                "Failing to take a stand"
            ]
        },
        "numerology": "1 (The Origin: the starting point, the seed, opportunity)",
        "element": "fire",
        "astrology": "Aries, Leo, Sagittarius",
        "affirmation": "\"I jump at the opportunity to pursue my heart's desire.\"",
        "questions": [
            "What do I really want, more than anything else?",
            "What happens if I let this opportunity pass me by?",
            "How clearly have I defined my directions, values, and goals?"
        ]
    },
    {
        "index": 51,
        "name": "Two of Wands",
        "number": 2,
        "arcana": "Minor Arcana",
        "suit": "Wands",
        "img": "w02.jpg",
        "fortunes": [
            "Beware false friends",
            "Don't be mealy-mouthed; say what you think and do what you want to do"
        ],
        "keywords": [
            "conflict",
            "decision",
            "option",
            "individuality"
        ],
        "meanings": {
            "light": [
                "Having a choice",
                "Offering or being offered an option",
                "Seeing the value of another person's approach",
                "Understanding there's more than one way to \"skin a cat\"",
                "Successfully doing more than one thing at a time",
                "Being empowered to make a choice"
            ],
            "shadow": [
                "Misrepresenting your intentions",
                "Doing one thing while desiring another",
                "Changing course mid-stream for no good reason",
                "Refusing to change your goal even when pursuing it no longer makes sense",
                "Disregarding the input of others"
            ]
        },
        "numerology": "2 (The Other: division, debate, duality)",
        "element": "fire",
        "astrology": "Mars in Aries",
        "affirmation": "\"With my goals in mind, I make confident choices.\"",
        "questions": [
            "In a conflict, how do you decide who wins?",
            "What values govern your decision-making process?",
            "What choice will you make if you make no choice at all?"
        ]
    },
    {
        "index": 52,
        "name": "Three of Wands",
        "number": 3,
        "arcana": "Minor Arcana",
        "suit": "Wands",
        "img": "w03.jpg",
        "fortunes": [
            "You'll be planning a trip soon",
            "Be on the lookout: your ship is coming in"
        ],
        "keywords": [
            "implementation",
            "action",
            "exploration"
        ],
        "meanings": {
            "light": [
                "Putting a plan into motion",
                "Taking that critical first step",
                "Making good things happen",
                "Going beyond your limits",
                "Blazing new trails",
                "Hitting the ground running",
                "Seeing your plans come to fruition"
            ],
            "shadow": [
                "Procrastinating",
                "Knowing what to do, but refusing to do it",
                "Launching a project without a clear definition of who should do what",
                "Rejecting an opportunity to try something new",
                "Failing to finish what you start"
            ]
        },
        "numerology": "3 (The Result: expression, productivity, output)",
        "element": "fire",
        "astrology": "Sun in Aries",
        "affirmation": "\"I take the steps necessary to put my plans in action.\"",
        "questions": [
            "How can you make a habit of breaking your habits?",
            "How can you be a decisive leader in this circumstance?",
            "What's your action plan for the next week, month, year, or decade?"
        ]
    },
    {
        "index": 53,
        "name": "Four of Wands",
        "number": 4,
        "arcana": "Minor Arcana",
        "suit": "Wands",
        "img": "w04.jpg",
        "fortunes": [
            "Someone is watching and evaluating your work",
            "You may get a wedding invitation soon"
        ],
        "keywords": [
            "celebration",
            "jubilation",
            "community",
            "teamwork",
            "completion"
        ],
        "meanings": {
            "light": [
                "Sharing in a great celebration",
                "Sharing in a communal sense of achievement and success",
                "Preparing for a party",
                "Working together toward a common goal",
                "Giving or winning awards"
            ],
            "shadow": [
                "Keeping your nose to the grindstone",
                "Recognizing good work by demanding more work",
                "Failing to share in a group celebration",
                "Allowing sour grapes to poison your moment in the sun",
                "Refusing to do your part"
            ]
        },
        "numerology": "4 (The Status Quo: stability, equality, persistence)",
        "element": "fire",
        "astrology": "Venus in Aries",
        "affirmation": "\"My contributions are worthy of celebration.\"",
        "questions": [
            "To what extent am I doing my part?",
            "What kind of recognition would be most meaningful?",
            "How might a celebration now impact community morale?"
        ]
    },
    {
        "index": 54,
        "name": "Five of Wands",
        "number": 5,
        "arcana": "Minor Arcana",
        "suit": "Wands",
        "img": "w05.jpg",
        "fortunes": [
            "Prepare for a fight with your best friend",
            "Remember: once you let words loose, you can't take them back"
        ],
        "keywords": [
            "confrontation",
            "disruption",
            "distinction",
            "objection",
            "strife"
        ],
        "meanings": {
            "light": [
                "Calmly expressing a dissenting opinion",
                "Allowing someone to use his or her own methods to get a job done",
                "Opening the floor for discussion or debate",
                "Comparing progress made so far to standards set earlier"
            ],
            "shadow": [
                "Berating others for their ridiculous opinions",
                "Picking fights",
                "Offering destructive criticism",
                "Baiting people with barbed remarks",
                "Disrupting progress with an endless stream of pointless objections"
            ]
        },
        "numerology": "5 (The Catalyst: instability, resistance, confrontation)",
        "element": "fire",
        "astrology": "Saturn in Leo",
        "affirmation": "\"I can express dissent in constructive ways.\"",
        "questions": [
            "To what extent is your current issue worth fighting for?",
            "What alternatives are there to outright conflict?",
            "What happens in a \"fair fight?\" How can you keep this fight fair?"
        ]
    },
    {
        "index": 55,
        "name": "Six of Wands",
        "number": 6,
        "arcana": "Minor Arcana",
        "suit": "Wands",
        "img": "w06.jpg",
        "fortunes": [
            "Someone is planning a party for you, but not everyone feels so good about your recent success",
            "Watch out for envious friends"
        ],
        "keywords": [
            "victory",
            "achievement",
            "success",
            "triumph"
        ],
        "meanings": {
            "light": [
                "Outperforming your peers",
                "Winning a competition",
                "Being recognized as a capable person",
                "Having your \"moment in the spotlight\"",
                "Being cheered on by the crowd",
                "Getting an award",
                "Earning the admiration of others",
                "Telling someone, \"Good job!\""
            ],
            "shadow": [
                "Being a bad winner",
                "Allowing your achievements to inflate your ego",
                "Looking down on people who seem less capable",
                "Craving to be the center of attention",
                "Giving or receiving insincere praise",
                "Envying the achievements of others"
            ]
        },
        "numerology": "6 (The Adjustment: cooperation, collaboration, interaction)",
        "element": "fire",
        "astrology": "Jupiter in Leo",
        "affirmation": "\"I value sincere praise.\"",
        "questions": [
            "What kind of recognition do I crave? Why?",
            "How freely do I praise the achievements of others?",
            "What happens when the parade is over?"
        ]
    },
    {
        "index": 56,
        "name": "Seven of Wands",
        "number": 7,
        "arcana": "Minor Arcana",
        "suit": "Wands",
        "img": "w07.jpg",
        "fortunes": [
            "Don't be surprised by a personal attack",
            "Prepare to defend yourself or someone you love"
        ],
        "keywords": [
            "bravery",
            "resolve",
            "determination"
        ],
        "meanings": {
            "light": [
                "Refusing to be silenced through fear or intimidation",
                "Continuing a fight against all odds",
                "Being fierce",
                "Defending yourself against physical and emotional attacks",
                "Refusing to put up with abuse",
                "Clinging to your values despite all pressure to abandon them"
            ],
            "shadow": [
                "Having a chip on your shoulder",
                "Taking unnecessary risks as a means of proving your fearlessness",
                "Looking for an opportunity to take offense",
                "Responding to constructive criticism with defensiveness",
                "Refusing to stand up for yourself and your beliefs"
            ]
        },
        "numerology": "7 (The Motive: imagination, inner work, psychology)",
        "element": "fire",
        "astrology": "Mars in Leo",
        "affirmation": "\"I am willing to take a stand for what I believe in.\"",
        "questions": [
            "When do you feel most threatened? When do you get defensive?",
            "How capable are you of defending yourself?",
            "What kinds of beliefs are worth defending?"
        ]
    },
    {
        "index": 57,
        "name": "Eight of Wands",
        "number": 8,
        "arcana": "Minor Arcana",
        "suit": "Wands",
        "img": "w08.jpg",
        "fortunes": [
            "Watch for a surprising letter in the mail",
            "Your whole world is about to be turned on its ear"
        ],
        "keywords": [
            "speed",
            "swiftness",
            "responsiveness",
            "change"
        ],
        "meanings": {
            "light": [
                "Taking swift action",
                "Moving forward with a plan as quickly as possible",
                "Energizing yourself",
                "Adapting to sudden changes",
                "Taking setbacks in stride",
                "Embracing the idea that nothing stays the same forever",
                "Reacting quickly and appropriately to unforeseen problems"
            ],
            "shadow": [
                "Giving in to panic",
                "Running in circles and screaming",
                "Insisting things must always stay the same",
                "Stirring the pot just to see what will happen",
                "Rushing others",
                "Refusing to re-evaluate a schedule or program, even when it's clearly no longer appropriate"
            ]
        },
        "numerology": "8 (The Action: movement, outer work, swiftness)",
        "element": "fire",
        "astrology": "Mercury in Sagittarius",
        "affirmation": "\"I adapt quickly to change.\"",
        "questions": [
            "How quickly to you adapt to change?",
            "What would your response be to overwhelming, sudden change?",
            "What changes are on your horizon? How well have you prepared for them?"
        ]
    },
    {
        "index": 58,
        "name": "Nine of Wands",
        "number": 9,
        "arcana": "Minor Arcana",
        "suit": "Wands",
        "img": "w09.jpg",
        "fortunes": [
            "Don't relax yet; there's more to come",
            "The test you're facing now is happening for one reason: to show you who your real friends are"
        ],
        "keywords": [
            "toughness",
            "persistence",
            "stamina",
            "loyalty",
            "release"
        ],
        "meanings": {
            "light": [
                "Sticking with it for the duration",
                "Fulfilling your promises and obligations",
                "Bearing up under incredible duress",
                "Dragging yourself across the finish line",
                "Picking yourself up by your own bootstraps",
                "Refusing to quit",
                "Going as far as you can go and being satisfied with your performance"
            ],
            "shadow": [
                "Making yourself a martyr",
                "Abandoning your post",
                "Giving up at the first sign of opposition",
                "Being prevented from fulfilling an obligation",
                "Failing to be dependable",
                "Refusing to let something go that needs to be released",
                "Beating a dead horse"
            ]
        },
        "numerology": "9 (The Completion: fullness, readiness, ripeness)",
        "element": "fire",
        "astrology": "Moon in Sagittarius",
        "affirmation": "\"When the going gets tough, I stay the course.\"",
        "questions": [
            "How do you cope when things get really tough?",
            "When you get low, what encourages you to go on?",
            "At what point should you be able to let this situation go?"
        ]
    },
    {
        "index": 59,
        "name": "Ten of Wands",
        "number": 10,
        "arcana": "Minor Arcana",
        "suit": "Wands",
        "img": "w10.jpg",
        "fortunes": [
            "You're worn out",
            "Back off, take a time out, and let someone else handle things for a while"
        ],
        "keywords": [
            "exhaustion",
            "resistance",
            "burden",
            "oppression"
        ],
        "meanings": {
            "light": [
                "Holding your own in extreme circumstances",
                "Helping others carry their burdens",
                "Coming to the aid of the oppressed",
                "Knowing and being honest about your own limits",
                "Recognizing when you are not well-suited for a particular task"
            ],
            "shadow": [
                "Taking on more work than you know you can handle",
                "Refusing to say \"No\" when you're already overloaded",
                "Making a habit of working overtime",
                "Shielding others from facing the consequences of their own poor judgment",
                "Over-extending yourself on a regular basis"
            ]
        },
        "numerology": "10 (The End: finality, completion, exhaustion)",
        "element": "fire",
        "astrology": "Saturn in Sagittarius",
        "affirmation": "\"I respect my own limits.\"",
        "questions": [
            "How will you know when you reach the end of your rope?",
            "How easily do you say no to new projects and requests?",
            "What projects could you delegate...or eliminate?"
        ]
    },
    {
        "index": 60,
        "name": "Page of Wands",
        "number": 11,
        "arcana": "Minor Arcana",
        "suit": "Wands",
        "img": "w11.jpg",
        "fortunes": [
            "This card represents a young man or woman with a fiery, enthusiastic demeanor, likely born a Cancer, Leo, or Virgo, who wants to start a new relationship with you"
        ],
        "keywords": [
            "enthusiasm",
            "eagerness",
            "confidence",
            "validation",
            "affirmation"
        ],
        "meanings": {
            "light": [
                "Leaping at a new opportunity",
                "Being a cheerleader or ardent advocate for your cause",
                "Being a True Believer",
                "Taking first steps toward independence",
                "Trusting in your own abilities",
                "Asking for feedback"
            ],
            "shadow": [
                "Basing your entire self-image on what others think",
                "Seizing every new idea that comes your way without question",
                "Habitually discounting input or feedback from others",
                "Being so eager to \"do it yourself\" that you hinder your own progress"
            ]
        },
        "element": "Earth of Fire.",
        "affirmation": "\"I can do this.\"",
        "questions": [
            "How easily do you admit your own inexperience?",
            "How can you be a better student or employee?",
            "What qualities would make a total beginner's voyage of discovery easier?"
        ]
    },
    {
        "index": 61,
        "name": "Knight of Wands",
        "number": 12,
        "arcana": "Minor Arcana",
        "suit": "Wands",
        "img": "w12.jpg",
        "fortunes": [
            "This card represents a man with a bold, passionate personality, likely born between July 12th and August 11th, who wants to sweep you off your feet"
        ],
        "keywords": [
            "boldness",
            "bravado",
            "passion",
            "persuasion",
            "advocacy"
        ],
        "meanings": {
            "light": [
                "Charging ahead",
                "Making rapid progress",
                "Refusing limits",
                "Dazzling those around you with your wit and charm",
                "Convincing others of your right to leadership",
                "Convincing others to follow you",
                "Being a catalyst for change"
            ],
            "shadow": [
                "Blundering forward with inadequate skill or information",
                "Running roughshod over the feelings of others",
                "Using sex appeal to manipulate others",
                "Forcing your leadership or ideology on others",
                "Beginning many projects without finishing any"
            ]
        },
        "element": "Air of Fire.",
        "affirmation": "\"I can lead the way to success.\"",
        "questions": [
            "To what extent have you defined your ultimate goal?",
            "What's the fastest way to get the job done? Is this necessarily the best way?",
            "How long has it been since you looked back to see if others really are following your lead?"
        ]
    },
    {
        "index": 62,
        "name": "Queen of Wands",
        "number": 13,
        "arcana": "Minor Arcana",
        "suit": "Wands",
        "img": "w13.jpg",
        "fortunes": [
            "This card represents a woman with an attractive, appealing personality, likely born between March 11th and April 20th, who wants to charm you into doing things her way"
        ],
        "keywords": [
            "attention",
            "attraction",
            "unification",
            "collaboration"
        ],
        "meanings": {
            "light": [
                "Paying close attention",
                "Helping others focus on the issue at hand",
                "Getting everyone to work together",
                "Identifying common ground",
                "Bringing people together, despite their differences",
                "Using reverse psychology"
            ],
            "shadow": [
                "Being distracted, or using your charms or skills to distract others from the goal",
                "Calling attention to yourself with negative or unhealthy behaviors",
                "Disrupting group activities as a means of feeding your own ego"
            ]
        },
        "element": "Water of Fire.",
        "affirmation": "\"I use my influence to promote unity.\"",
        "questions": [
            "How attentive am I?",
            "How can I draw people's attention to what we have in common?",
            "To what extent am I able to convince people to do what I want them to do?"
        ]
    },
    {
        "index": 63,
        "name": "King of Wands",
        "number": 14,
        "arcana": "Minor Arcana",
        "suit": "Wands",
        "img": "w14.jpg",
        "fortunes": [
            "This card represents an older man with a commanding, charismatic personality, likely born between November 13th and December 12th, who prefers to give directions and have them followed"
        ],
        "keywords": [
            "creativity",
            "ingenuity",
            "achievement",
            "direction"
        ],
        "meanings": {
            "light": [
                "Putting old things together in new and exciting ways",
                "Coming up with unexpected solutions",
                "Using your experience to solve puzzles and problems",
                "Doing what you set out to do",
                "Directing the efforts of others"
            ],
            "shadow": [
                "Using your creativity to get out of honest work",
                "Investing great energy in avoiding responsibility",
                "Boasting about achievements without putting your expertise to practical use",
                "Lording it over others"
            ]
        },
        "element": "Fire of Fire",
        "affirmation": "\"I use my authority and experience to get things done faster.\"",
        "questions": [
            "How confident a leader am I?",
            "How can I project more confidence?",
            "How can I offer my expertise in ways that inspire others to follow me?"
        ]
    },
    {
        "index": 64,
        "name": "Ace of Pentacles",
        "number": 1,
        "arcana": "Minor Arcana",
        "suit": "Pentacles",
        "img": "p01.jpg",
        "fortunes": [
            "Your health will improve",
            "The check you're looking for really is in the mail"
        ],
        "keywords": [
            "health",
            "wealth",
            "practicality",
            "receiving"
        ],
        "meanings": {
            "light": [
                "Outlining a plan for achieving prosperity",
                "Becoming aware of opportunities to improve income or health",
                "Realizing you have everything you need",
                "Appreciating everything the Universe has given you",
                "Receiving the perfect gift at the perfect time"
            ],
            "shadow": [
                "Indulging in relentless consumerism",
                "Wanting more, no matter how much you have",
                "Obsessing on your account balance",
                "Suffering from hypochondria",
                "Consuming blessings without expressing gratitude",
                "Taking what you want without concern for the needs of others"
            ]
        },
        "numerology": "1 (The Origin: the starting point, the seed, opportunity)",
        "element": "earth",
        "astrology": "Capricorn, Taurus, Virgo",
        "affirmation": "\"I am open to and thankful for my blessings.\"",
        "questions": [
            "If I made my decision based solely on practical concerns, what would my decision be?",
            "What resources are available to me?",
            "What will be the physical and financial impact of my decisions?"
        ]
    },
    {
        "index": 65,
        "name": "Two of Pentacles",
        "number": 2,
        "arcana": "Minor Arcana",
        "suit": "Pentacles",
        "img": "p02.jpg",
        "fortunes": [
            "It's time to balance the budget",
            "Avoid the temptation to spend critical funds on frivolous goods"
        ],
        "keywords": [
            "evaluation",
            "decision",
            "budgeting",
            "diagnosis"
        ],
        "meanings": {
            "light": [
                "Weighing options",
                "Comparing prices",
                "Determining the value of one option over another",
                "Juggling resources to make ends meet",
                "Making difficult choices based on what's best for your body or your bankbook",
                "Looking at the bottom line",
                "Asking for a second opinion on health issues"
            ],
            "shadow": [
                "Engaging in endless price comparison",
                "Putting off a buying decision for fear of finding a slightly better value later on",
                "Buying something without regard for value",
                "Breaking your budget with unnecessary expenses",
                "Engaging in behavior with no regard for how your body or bankbook will be impacted"
            ]
        },
        "numerology": "2 (The Other: duality, division, debate)",
        "element": "earth",
        "astrology": "Jupiter in Capricorn",
        "affirmation": "\"Before taking action, I consider costs.\"",
        "questions": [
            "What values govern my decisions?",
            "How willing am I to sacrifice a little pleasure now in order to have more pleasure later on?",
            "Given my current situation, which course of action will give me more of what I really need?"
        ]
    },
    {
        "index": 66,
        "name": "Three of Pentacles",
        "number": 3,
        "arcana": "Minor Arcana",
        "suit": "Pentacles",
        "img": "p03.jpg",
        "fortunes": [
            "A high-dollar contract is in your future",
            "If you work hard, you'll succeed"
        ],
        "keywords": [
            "expression",
            "production",
            "work",
            "contribution"
        ],
        "meanings": {
            "light": [
                "Finishing a project",
                "Setting and meeting standards",
                "Performing according to specifications",
                "Making something others value",
                "Creating something new",
                "Doing your part in a group project",
                "Delivering exactly what others have asked for"
            ],
            "shadow": [
                "Pandering to the tastes of others",
                "Failing to deliver what you've promised",
                "Not delivering your best work unless closely supervised",
                "Ignoring or breaking agreements with those who have invested in you",
                "Refusing to do your part",
                "Failing to abide by a clearly-outlined agreement with yourself or others"
            ]
        },
        "numerology": "3 (The Result: expression, productivity, output)",
        "element": "earth",
        "astrology": "Mars in Capricorn",
        "affirmation": "\"My work produces results.\"",
        "questions": [
            "How can I get more done?",
            "What's expected of me? How large a role do I play in controlling those expectations?",
            "What's been agreed to? How well has that agreement been followed?"
        ]
    },
    {
        "index": 67,
        "name": "Four of Pentacles",
        "number": 4,
        "arcana": "Minor Arcana",
        "suit": "Pentacles",
        "img": "p04.jpg",
        "fortunes": [
            "A rainy day is coming\u2014it's time to save"
        ],
        "keywords": [
            "protection",
            "conservation",
            "preservation",
            "safety"
        ],
        "meanings": {
            "light": [
                "Saving for a rainy day",
                "Fasting as part of a spiritual practice",
                "Dieting in an effort to improve your body",
                "Abstaining from sex as a way of honoring a spiritual tradition or personal promise",
                "Being financially conservative",
                "Establishing a trust fund",
                "Opening a savings account"
            ],
            "shadow": [
                "Being stingy",
                "Refusing to spend money that needs to be spent",
                "Withholding sex from your partner",
                "Taking care of your own needs exclusively, without regard for the needs of others",
                "Spending a dollar to save a penny",
                "Failing to be a good manager of the blessings you've been given"
            ]
        },
        "numerology": "4 (The Status Quo: stability, equality, persistence)",
        "element": "earth",
        "astrology": "Sun in Capricorn",
        "affirmation": "\"I use my resources wisely.\"",
        "questions": [
            "What factors determine how conservative or generous you are?",
            "What kinds of things must be preserved at all costs?",
            "When is greediness or stinginess a good trait to have? When might generosity work against you?"
        ]
    },
    {
        "index": 68,
        "name": "Five of Pentacles",
        "number": 5,
        "arcana": "Minor Arcana",
        "suit": "Pentacles",
        "img": "p05.jpg",
        "fortunes": [
            "Finances are getting tighter",
            "Prepare for a setback"
        ],
        "keywords": [
            "poverty",
            "destitution",
            "need",
            "crisis"
        ],
        "meanings": {
            "light": [
                "Recognizing your needs and taking action to fulfill them",
                "Doing as much as you can do with what little you have",
                "Admitting you need help",
                "Embracing the aid that comes your way",
                "Focusing on what you have versus what you don't",
                "Looking for the light at the end of the tunnel"
            ],
            "shadow": [
                "Exaggerating your financial or physical needs",
                "Adopting a poverty mentality",
                "Refusing to support yourself",
                "Refusing offers of support",
                "Playing the martyr",
                "Turning down opportunities to improve your health or finances",
                "Wallowing in misery"
            ]
        },
        "numerology": "5 (The Catalyst: instability, resistance, confrontation)",
        "element": "earth",
        "astrology": "Mercury in Taurus",
        "affirmation": "\"I have faith that what I need will appear.\"",
        "questions": [
            "What critical resources do I lack?",
            "What people or groups would come to my aid if I asked?",
            "How might an impoverished spirit be impacting my physical or financial condition?"
        ]
    },
    {
        "index": 69,
        "name": "Six of Pentacles",
        "number": 6,
        "arcana": "Minor Arcana",
        "suit": "Pentacles",
        "img": "p06.jpg",
        "fortunes": [
            "When you need help, ask for it",
            "Remember, though: what you receive may be limited by what you've given to others in the past"
        ],
        "keywords": [
            "charity",
            "fairness",
            "cooperation",
            "sharing"
        ],
        "meanings": {
            "light": [
                "Giving time, money, or effort to a charity",
                "Taking part in a group effort",
                "Lending your resources to others without expecting anything in return",
                "Making sure everyone is treated equally",
                "Working together toward a common goal",
                "Redistributing wealth, time, or attention",
                "Tithing",
                "Sharing credit for your success"
            ],
            "shadow": [
                "Making a loan as a means of gaining control over someone",
                "Using charitable acts to draw attention to yourself",
                "Dividing work or resources unfairly",
                "Failing to do your part in a group effort",
                "Ignoring obligations and commitments"
            ]
        },
        "numerology": "6 (The Adjustment: cooperation, collaboration, interaction)",
        "element": "earth",
        "astrology": "Moon in Taurus",
        "affirmation": "\"Knowing I will receive more, I share my resources freely.\"",
        "questions": [
            "How do I feel about charity? About giving it? About receiving it?",
            "How can I know if I'm treating others fairly?",
            "What could I give that no one else can?"
        ]
    },
    {
        "index": 70,
        "name": "Seven of Pentacles",
        "number": 7,
        "arcana": "Minor Arcana",
        "suit": "Pentacles",
        "img": "p07.jpg",
        "fortunes": [
            "Things won't work out as expected",
            "Pick up the pieces and prepare to move on"
        ],
        "keywords": [
            "assessment",
            "evaluation",
            "re-evaluation",
            "reflection"
        ],
        "meanings": {
            "light": [
                "Measuring progress toward your goal",
                "Looking at results with an eye toward improving performance",
                "Asking, \"How happy am I?\"",
                "Coming up with ideas for improving your health or prosperity",
                "Deciding it's time for a change",
                "Expressing an honest opinion"
            ],
            "shadow": [
                "Becoming distracted by melancholy thoughts",
                "Longing for \"the good old days\"",
                "Beating yourself up over lost opportunities",
                "Judging your own work harshly",
                "Holding others to inappropriate standards",
                "Refusing to take part in a project, then whining about the quality of the outcome"
            ]
        },
        "numerology": "7 (The Motive: imagination, inner work, psychology)",
        "element": "earth",
        "astrology": "Saturn in Taurus",
        "affirmation": "\"To stay on target, I measure my progress.\"",
        "questions": [
            "To what extent have I fulfilled my own expectations?",
            "What are the terms of success?",
            "How can I be happier with the progress I've made?"
        ]
    },
    {
        "index": 71,
        "name": "Eight of Pentacles",
        "number": 8,
        "arcana": "Minor Arcana",
        "suit": "Pentacles",
        "img": "p08.jpg",
        "fortunes": [
            "Stop over-analyzing, researching, and outlining",
            "Buckle down and get the work done"
        ],
        "keywords": [
            "effort",
            "work diligence",
            "skill"
        ],
        "meanings": {
            "light": [
                "Doing your best",
                "Bringing enthusiasm and zeal to your work",
                "Making an effort to be the best you can be",
                "Finding the work that is right for you",
                "Taking care of the small details",
                "Becoming a finely skilled craftsperson",
                "Building something with your hands",
                "Making a handmade gift"
            ],
            "shadow": [
                "Working yourself to death",
                "Doing a half-hearted or sloppy job",
                "Continuing in a job you hate",
                "Buying thoughtless gifts",
                "Producing work with shoddy craftsmanship",
                "Rushing through your work",
                "Rejecting opportunities to learn more about your craft"
            ]
        },
        "numerology": "8 (The Action: movement, outer work, swiftness)",
        "element": "earth",
        "astrology": "Sun in Virgo",
        "affirmation": "\"I give myself wholeheartedly to the task of the moment.\"",
        "questions": [
            "How long has it been since you were \"lost in your work?\"",
            "How can you improve your level of dedication and focus?",
            "What work do you do best? What about that work appeals to you?"
        ]
    },
    {
        "index": 72,
        "name": "Nine of Pentacles",
        "number": 9,
        "arcana": "Minor Arcana",
        "suit": "Pentacles",
        "img": "p09.jpg",
        "fortunes": [
            "Until you appreciate what you have, you won't have any luck getting more"
        ],
        "keywords": [
            "training",
            "discipline",
            "confidence",
            "enough"
        ],
        "meanings": {
            "light": [
                "Investing time in learning or teaching a difficult task",
                "Restraining yourself from physical or financial extremes",
                "Making sacrifices as a way of achieving larger goals",
                "Breaking a complex task down into simple steps",
                "Wanting what you have",
                "Knowing the difference between needs and wants"
            ],
            "shadow": [
                "Being assigned to a task without being trained to perform it",
                "Pursuing a position for which you are not qualified",
                "Disregarding requirements",
                "Refusing to dedicate adequate time or attention when learning about something or someone new",
                "Always craving more"
            ]
        },
        "numerology": "9 (The Completion: fullness, readiness, ripeness)",
        "element": "earth",
        "astrology": "Venus in Virgo",
        "affirmation": "\"I know enough to be confident in my decisions.\"",
        "questions": [
            "If you could not have what you want, how would you make do?",
            "Could you make a complex task easier by breaking it down into smaller steps?",
            "How patient are you during the learning process? With yourself? With others?"
        ]
    },
    {
        "index": 73,
        "name": "Ten of Pentacles",
        "number": 10,
        "arcana": "Minor Arcana",
        "suit": "Pentacles",
        "img": "p10.jpg",
        "fortunes": [
            "Big money is in the near future",
            "Expect a powerful blessing to come your way"
        ],
        "keywords": [
            "wealth",
            "abundance",
            "acquisition",
            "greed"
        ],
        "meanings": {
            "light": [
                "Celebrating your physical and financial blessings",
                "Realizing how lucky or how blessed you are",
                "Being satisfied with your physical and financial achievements",
                "Taking best advantage of \"times of plenty\"",
                "Enjoying a feast",
                "Showering friends or family with gifts"
            ],
            "shadow": [
                "Spending all of your money on extravagant gifts and possessions",
                "Trying too hard to impress others with your wealth or physique",
                "Giving an inappropriately expensive gift as a means of currying favor",
                "Obsessing on matters of weight, health, or finance",
                "Always asking, \"What's in it for me?\""
            ]
        },
        "numerology": "10 (The End: finality, completion, exhaustion)",
        "element": "earth",
        "astrology": "Mercury in Virgo",
        "affirmation": "\"I keep physical and financial matters in perspective.\"",
        "questions": [
            "How much stuff do I really need?",
            "How do I feel about wealth and abundance? How do I define these terms?",
            "How might shedding some possessions open room for growth?"
        ]
    },
    {
        "index": 74,
        "name": "Page of Pentacles",
        "number": 11,
        "arcana": "Minor Arcana",
        "suit": "Pentacles",
        "img": "p11.jpg",
        "fortunes": [
            "This card represents a young man or woman with an earthy, practical demeanor, likely born an Aries, Taurus, or Gemini, who playfully encourages you to take financial or sexual risks"
        ],
        "keywords": [
            "practicality",
            "prosperity",
            "learning",
            "growth",
            "adolescence"
        ],
        "meanings": {
            "light": [
                "Learning the value of a dollar",
                "Starting a savings plan",
                "Taking the first steps toward getting out of debt",
                "Learning new physical tasks",
                "Discovering your sexuality",
                "Launching a diet, a weight-lifting program, or a health-related effort",
                "Learning by doing"
            ],
            "shadow": [
                "Trying to appear healthier or wealthier than you really are",
                "Spending money carelessly",
                "Living strictly for today, with no thought of tomorrow",
                "Possessing immature attitudes toward sex and sexuality",
                "Using wealth or beauty as an excuse for not having to learn and grow"
            ]
        },
        "element": "Earth of Earth.",
        "affirmation": "\"I am physically and financially responsible.\"",
        "questions": [
            "How can you get more financial or sexual experience without risking your livelihood or health?",
            "How might hands-on learning play a role in your situation?",
            "What's the most practical choice you could make?"
        ]
    },
    {
        "index": 75,
        "name": "Knight of Pentacles",
        "number": 12,
        "arcana": "Minor Arcana",
        "suit": "Pentacles",
        "img": "p12.jpg",
        "fortunes": [
            "A stingy person may chide you for spending money",
            "Be prepared to defend an economic or sexual decision"
        ],
        "keywords": [
            "caution",
            "focus",
            "realism",
            "invention"
        ],
        "meanings": {
            "light": [
                "Spending money wisely",
                "Saving for a rainy day",
                "Paying close attention to physical or financial details",
                "Knowing where every dollar goes",
                "Having safe sex",
                "Preferring facts to \"good feelings\"",
                "Finding creative ways to \"make do\" with resources on hand",
                "Completing a new invention"
            ],
            "shadow": [
                "Throwing caution to the four winds",
                "Spending without regard for consequence",
                "Spending on luxury when necessities are lacking",
                "Escaping stress by spending money",
                "Obsessing on tiny physical or financial details",
                "Perpetually chasing after some new bauble",
                "Copying another's work and claiming it as your own"
            ]
        },
        "element": "Air of Earth.",
        "affirmation": "\"I temper my actions with cautious optimism.\"",
        "questions": [
            "What's the difference between caution and fear?",
            "How can I evaluate the practicality of my own ideas and methods?",
            "How realistic are my goals?"
        ]
    },
    {
        "index": 76,
        "name": "Queen of Pentacles",
        "number": 13,
        "arcana": "Minor Arcana",
        "suit": "Pentacles",
        "img": "p13.jpg",
        "fortunes": [
            "This card represents a woman with an expansive, sensual nature, likely born between December 13th and 31st, who uses sensual appeal and the promise of reward to sway others to her point of view"
        ],
        "keywords": [
            "luxury",
            "comfort",
            "resourcefulness",
            "generosity",
            "prosperity"
        ],
        "meanings": {
            "light": [
                "Appreciating fine food, fine wine, beautiful art, beautiful bodies, or any of the better things in life",
                "Reveling in healthy sexuality",
                "Treating yourself",
                "Splurging on the occasional \"nice to have\" item",
                "Rewarding someone with compensation above and beyond expectations",
                "Having it all"
            ],
            "shadow": [
                "Indulging in gluttony or greediness",
                "Becoming insatiable",
                "Blunting the impact of treats by indulging in them too often",
                "Providing physical comfort without providing for emotional needs",
                "Allowing a feeling of entitlement to distort your gratitude for what you're given"
            ]
        },
        "element": "Water of Earth.",
        "affirmation": "\"I relish the best this world has to offer.\"",
        "questions": [
            "How do I define luxury?",
            "To what extent am I capable of reveling in sensual pleasure?",
            "What would I have to give up in order to \"have it all?\""
        ]
    },
    {
        "index": 77,
        "name": "King of Pentacles",
        "number": 14,
        "arcana": "Minor Arcana",
        "suit": "Pentacles",
        "img": "p14.jpg",
        "fortunes": [
            "This card represents an older man with a financially, socially, and politically conservative spirit, likely born between August 12th and September 11th, who is known for putting his money where his mouth is"
        ],
        "keywords": [
            "stability",
            "dependability",
            "confidence",
            "intervention"
        ],
        "meanings": {
            "light": [
                "Becoming debt-free",
                "Having more than enough to get by",
                "Making contributions to a savings plan",
                "Taking a new job with an eye toward advancing your career",
                "Buying life or health insurance",
                "Being confident in the bedroom",
                "Taking on the role of enforcer when called upon to do so"
            ],
            "shadow": [
                "Becoming so conservative you resist all change on principle alone",
                "Ignoring innovations in the name of preserving tradition",
                "Being smug or cocky",
                "Becoming ruthlessly dedicated to profit or pleasure",
                "Being sexually selfish",
                "Bossing others around, especially when you're not empowered to do so"
            ]
        },
        "element": "Fire of Earth.",
        "affirmation": "\"I embody confidence and fairness.\"",
        "questions": [
            "How can you handle expenses with greater confidence and maturity?",
            "How dependable are you? How dependable would others say you are?",
            "To what extent is a conservative viewpoint valuable? At what point does it become more of a burden than a blessing?"
        ]
    }
]

module.exports = O;