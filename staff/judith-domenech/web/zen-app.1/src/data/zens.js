const zens = [
    'When you realize nothing is lacking, the whole world belongs to you. Lao Tzu',
    'Let go, or be dragged. Zen proverb',
    'What the superior man seeks is in himself; what the small man seeks is in others. Confucius',
    'To seek is to suffer. To seek nothing is bliss. Bodhidharma',
    'Mind is like a mad monkey. Sathya Sai Baba',
    'Wise men don’t judge – they seek to understand. Wei Wu Wei',
    'When thoughts arise, then do all things arise. When thoughts vanish, then do all things vanish. Huang Po',
    'Wherever you are, it’s the place you need to be. Maxime Lagacé',
    'The noble-minded are calm and steady. Little people are forever fussing and fretting. Confucius',
    'Rest and be kind, you don’t have to prove anything. Jack Kerouac',
    'Nothing ever goes away until it has taught us what we need to know. Pema Chödrön',
    'Only the hand that erases can write the true thing. Meister Eckhart',
    'Where can I find a man who has forgotten words so I can talk with him? Zhuangzi',
    'When we discover that the truth is already in us, we are all at once our original selves. Dogen',
    'Life is a balance of holding on and letting go. Rumi',
    'Wherever you are, be there totally. Eckhart Tolle',
    'I live by letting things happen. Dogen',
    'Zen is not some fancy, special art of living. Our teaching is just to live, always in reality, in its exact sense. Shunryu Suzuki',
    'Forget the years, forget distinctions. Leap into the boundless and make it your home. Zhuangzi',
    'Before enlightenment; chop wood, carry water. After enlightenment; chop wood, carry water. Buddha',
    'Who you are is always right. Ming-Dao Deng Click to tweet',
    'The search for happiness is one of the chief sources of unhappiness. Eric Hoffer',
    'And when they played they really played. And when they worked they really worked. Dr. Seuss',
    'Do not seek the truth, only cease to cherish your opinions. Seng-ts’an',
    'One loses joy and happiness in the attempt to possess them. Masanobu Fukuoka',
    'Education breeds confidence. Confidence breeds hope. Hope breeds peace. Confucius Click to tweet',
    'Relax. Nothing is under control. Adi Da Click to tweet',
    'Relax. Nothing’s missing. Maxime Lagacé',
    'Peace of mind is that mental condition in which you have accepted the worst. Lin Yutang',
    'Learn to be comfortable in adversity but most importantly, learn to be comfortable when you’re bored. Maxime Lagacé',
    'The mind of the beginner is empty, free of the habits of the expert, ready to accept, to doubt, and open to all the possibilities. Shunryu Suzuki',
    'The place to improve the world is first in one’s own heart and head and hands. Robert M. Pirsig (Zen and the Art of Motorcycle Maintenance)',
    'Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow or it can crash. Be water, my friend. Bruce Lee',
    'Everything that happens to you is a form of instruction if you pay attention. Robert Greene',
    'I don’t mind what happens. That is the essence of inner freedom. Jiddu Krishnamurti',
    'The less you try to impress, the more peaceful you can be. Maxime Lagacé',
    'If you are depressed, you are living in the past. If you are anxious, you are living in the future. If you are at peace, you are living in the present. Lao Tzu',
    'Do you have the patience to wait until your mud settles and the water is clear? Lao Tzu',
    'When one first seeks the truth, one separates oneself from it. Dogen',
    'Still your waters. Josh Waitzkin Click to tweet',
    'Man suffers only because he takes seriously what the gods made for fun. Alan Watts',
    'Muddy water is best cleared by leaving it alone. Alan Watts',
    'Every experience is a lesson. Every loss is a gain. Sathya Sai Baba',
    'Don’t seek, don’t search, don’t ask, don’t knock, don’t demand – relax. Osho Click to tweet',
    'Zen is an effort to become alert and awake. Osho',
    'In Zen we have no gurus. Frederick Lenz Click to tweet',
    'Zen teaches nothing; it merely enables us to wake up and become aware. It does not teach, it points. D.T. Suzuki',
    'Zen in it’s essence is the art of seeing into the nature of one’s being, and it points the way from bondage to freedom. D.T. Suzuki',
    'The practice of Zen is forgetting the self in the act of uniting with something. Koun Yamada',
    'The true purpose [of Zen] is to see things as they are, to observe things as they are, and to let everything go as it goes. Shunryu Suzuki',
    'Zen practice is to open up our small mind. Shunryu Suzuki Click to tweet',
    'Zen is not a religion. There is no room for a cult. There is no dependence on a teacher. There is only learning how to use your own mind and making it strong. Frederick Lenz',
    'Zen teaches that if we can open up to the inevitability of our demise, we can begin to transform and lighten up about it. Allen Klein',
    'Zen is a liberation from time. For if we open our eyes and see clearly, it becomes obvious that there is no other time than this instant, and that the past and the future are abstractions without any concrete reality. Alan Watts',
    'Zen is a path of liberation. It liberates you. It is freedom from the first step to the last. You are not required to follow any rules; you are required to find out your own rules and your own life in the light of awareness. Osho',
    'Zen is not some kind of excitement, but concentration on our usual everyday routine. Shunryu Suzuki',
    'Zen is not an art, it’s not a religion. It’s a realisation. Gene Clark',
    'To be wronged is nothing unless you continue to remember it. Confucius Click to tweet',
    'If you chase two rabbits, you catch none. Confucius',
    'Do not think you will necessarily be aware of your own enlightenment. Dogen',
    'To study Buddhism is to study ourselves. To study ourselves is to forget ourselves. Dogen',
    'Treat every moment as your last. It is not preparation for something else. Shunryu Suzuki (Zen Mind, Beginner’s Mind)',
    'In the beginner’s mind there are many possibilities, but in the expert’s mind there are few. Shunryu Suzuki Click to tweet',
    'The only Zen you can find on the tops of mountains is the Zen you bring up there. Robert M. Pirsig (Zen and the Art of Motorcycle Maintenance)',
    'There are only two ways to live your life. One is as if nothing is a miracle. The other is as if everything is a miracle. Albert Einstein',
    'Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power. Lao Tzu',
    'If you think you are too small to make a difference, try sleeping with a mosquito. 14th Dalai Lama Click to tweet',
    'Nature does not hurry, yet everything is accomplished. Lao Tzu',
    'If you want others to be happy, practice compassion. If you want to be happy, practice compassion. 14th Dalai Lama',
    'The successful warrior is the average man, with laser-like focus. Bruce Lee',
    'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. Buddha',
    'The first and the best victory is to conquer self. Plato Click to tweet',
    'All know the way, but few actually walk it. Bodhidharma',
    'Not engaging in ignorance is wisdom. Bodhidharma',
    'The essence of the Way is detachment. Bodhidharma',
    'Act without expectation. Lao Tzu',
    'Not creating delusions is enlightenment. Bodhidharma',
    'All things are difficult before they are easy. Thomas Fuller',
    'Words diminish meanings; these words included. Unknown',
    'The more you know, the less you need. Yvon Chouinard (Patagonia)',
    'Don’t be afraid to just sit and watch. Anthony Bourdain',
    'Your mind wants control. Life wants change. Maxime Lagacé',
    'Do not be too interested in Zen. Shunryu Suzuki',
    'Life begins where fear ends. Osho Click to tweet',
    'Be present above all else. Naval Ravikant',
    'Think with your whole body. Taisen Deshimaru',
    'Love all. Serve all. Help ever. Hurt never. Sathya Sai Baba',
    'Don’t try to steer the river. Deepak Chopra Click to tweet',
    'To go beyond is as wrong as to fall short. Confucius',
    'Roads were made for journeys not destinations. Confucius',
    'Don’t curse the darkness, light a candle. Confucius',
    'Body and mind dropped off. Dogen (on enlightenment)',
    'Those who seek the easy way do not seek the true way. Dogen Click to tweet',
    'Enlightenment is intimacy with all things. Dogen',
    'A Zen master’s life is one continuous mistake. Dogen',
    'Now I know what success is: living your truth, sharing it. Kamal Ravikant',
    'I follow four dictates: face it, accept it, deal with it, then let it go. Sheng-yen',
    'To live – is that not enough? D.T. Suzuki',
    'Zen has no business with ideas. D.T. Suzuki',
    'This will never come again. Steve Hagen',
    'Movement is evil. Being still is good. Ben Caesar',
    'In the highest level a man has the look of knowing nothing. Yamamoto Tsunetomo',
    'Singlemindedness is all-powerful. Yamamoto Tsunetomo',
    'If you know the enemy and know yourself you need not fear the results of a hundred battles. Sun Tzu',
    'When it is obvious that the goals cannot be reached, don’t adjust the goals, adjust the action steps. Confucius',
    'If you want happiness for a year, inherit a fortune. If you want happiness for a lifetime, help someone else. Confucius',
    'Truth makes you rise to new heights, no matter where you are. Kamal Ravikant',
    'These mountains that you are carrying, you were only supposed to climb. Najwa Zebian',
    'Yesterday is not ours to recover, but tomorrow is ours to win or lose. Lyndon B. Johnson',
    'It is easy to believe we are each waves and forget we are also the ocean. Jon J. Muth',
    'Little people overwhelmed by emotions. Zen people are calm and detached. Maxime Lagacé',
    'Emptiness which is conceptually liable to be mistaken for sheer nothingness is in fact the reservoir of infinite possibilities. D.T. Suzuki',
    'In the midst of chaos, there is also opportunity. Sun Tzu (Related topic: uplifting words)',
    'Even if it seems certain that you will lose, retaliate. Neither wisdom nor technique has a place in this. A real man does not think of victory or defeat. He plunges recklessly towards an irrational death. By doing this, you will awaken from your dreams. Yamamoto Tsunetomo (Hagakure: The Book of the Samurai)',
    'Purity is something that cannot be attained except by piling effort upon effort. Yamamoto Tsunetomo (Hagakure: The Book of the Samurai)',
    'The three elements of creativity are thus: loving, knowing, and doing – or heart, mind, and hands – or, as Zen Buddhist teaching has it; great faith, great question, and great courage. Eric Maisel',
    'You look at where you’re going and where you are and it never makes sense, but then you look back at where you’ve been and a pattern seems to emerge. Robert M. Pirsig (Zen and the Art of Motorcycle Maintenance)',
    'A man is great not because he hasn’t failed; a man is great because failure hasn’t stopped him. Confucius',
    'There is no need for temples; no need for complicated philosophy. Our own brain, our own heart is our temple; the philosophy is kindness. 14th Dalai Lama',
    'As a bee gathering nectar does not harm or disturb the color and fragrance of the flower; so do the wise move through the world. Buddha',
    'My daily affairs are quite ordinary; but I’m in total harmony with them. Layman Pang',
    'Unhappiness and rain just drift by and are gone, they are visitors. John Aske',
    'Have the fearless attitude of a hero and the loving heart of a child. Soyen Shaku',
    'Confuse them with your silence and amaze them with your actions. Unknown',
    'I don’t hold on to anything, don’t reject anything; nowhere an obstacle or conflict. Layman Pang',
    'We just let it happen… and that’s the beauty of this technique. Bob Ross',
    'Just as parents care for their children, you should bear in mind the whole universe. Dogen',
    'We are here to awaken from our illusion of separateness. Thich Nhat Hanh Click to tweet',
    'The whole moon and the entire sky are reflected in one dewdrop on the grass. Dogen',
    'Cease from practice based on intellectual understanding, pursuing words, and following after speech. Dogen',
    'It is the nature of the wise to resist pleasures, but the foolish to be a slave to them. Epictetus',
    'They call it ‘peace of mind’ but maybe it should be called ‘peace from mind’. Naval Ravikant',
    'Your mind is a mad monkey trying to understand life which is unfair and crazy. Get used to it. Maxime Lagacé',
    'To set up what you like against what you dislike, this is the disease of the mind. Sengcan',
    'But as long as you think you are practicing zazen for the sake of something, that is not true practice. Shunryu Suzuki',
    'Many have died; you also will die. The drum of death is being beaten. The world has fallen in love with a dream. Only sayings of the wise will remain. Kabir',
    'The ability to observe without evaluating is the highest form of intelligence. Jiddu Krishnamurti',
    'Pursue not the outer entanglements; dwell not in the inner void; be serene in the oneness of things; and dualism vanishes by itself. Sengcan',
    'Matters of great concern should be treated lightly. Matters of small concern should be treated seriously. Yamamoto Tsunetomo (Hagakure: The Book of the Samurai, Amazon book)',
    'One thing, all things: move among and intermingle, without distinction. To live in this realization is to be without anxiety about non-perfection. To live in this faith is the road to non-duality, because the non-dual is one with the trusting mind. Sengcan',
    'There is a crack in everything, that’s how the light gets in. Leonard Cohen',
    'Why do you so earnestly seek the truth in distant places? Look for delusion and truth in the bottom of your own heart. Ryōkan',
    'The thief left it behind: the moon at my window. Ryōkan Click to tweet',
    'We shape clay into a pot, but it is the emptiness inside that holds whatever we want. Lao Tzu',
    'Even death is not to be feared by one who has lived wisely. Buddha',
    'For things to reveal themselves to us, we need to be ready to abandon our views about them. Thich Nhat Hanh',
    'One has not understood until one has forgotten it. D.T. Suzuki',
    'A great man is hard on himself; a small man is hard on others. Confucius Click to tweet',
    'To be truly ignorant, be content with your own knowledge. Zhuangzi',
    'It’s beautiful to be alone. To be alone does not mean to be lonely. It means the mind is not influenced and contaminated by society. Jiddu Krishnamurti',
    'When you understand one thing through and through, you understand everything. When you try to understand everything, you will not understand anything. Shunryu Suzuki',
    'When we start to feel anxious or depressed, instead of asking, “What do I need to get to be happy?” The question becomes, “What am I doing to disturb the inner peace that I already have?”. D.T. Suzuki',
    'If you want something then you lose everything. If you don’t want anything then you already have everything. Seungsahn',
    'To say one is revolutionary is a little like saying one is a Zen Buddhist – if you say you are, you probably aren’t. Lawrence Ferlinghetti',
    'When you catch yourself slipping into a pool of negativity, notice how it derives from nothing other than resistance to the current situation. Donna Quesada',
    'The foolish reject what they see, not what they think; the wise reject what they think, not what they see. Huang Po',
    'A wise man speaks because he has something to say; a fool because he has to say something. Plato Click to tweet',
    'The man who asks a question is a fool for a minute, the man who does not ask is a fool for life. Confucius',
    'Un-think. Un-learn. Un-know. Un-believe. Un-speculate. Un-seek. Un-strive. Un-fear. Lose your mind and effortlessly be. Brian Thompson',
    'Knowledge is learning something everyday. Wisdom is letting go of something everyday. Unknown',
    'Don’t be satisfied with your accomplishment, nor be dissatisfied with it. Unknown',
    'Little people try to control everything. Thus, they control nothing. Wise people focus on one thing, the most important, and let go of the rest. Maxime Lagacé',
    'You can have the mind or you can have the moment. Naval Ravikant',
    'Obstacles don’t block the path, they are the path. Zen proverb',
    'One must be deeply aware of the impermanence of the world. Dogen',
    'Prefer to be defeated in the presence of the wise than to excel among fools. Dogen',
    'Doing nothing is better than being busy doing nothing. Lao Tzu Click to tweet'
]
export default zens