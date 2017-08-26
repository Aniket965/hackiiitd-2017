var express = require('express');
var app = express();

function wordFreq(string) {
    var words = string.replace(/[.]/g, '').split(/\s/);
    var freqMap = {};
    words.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

    return freqMap;
}

app.get('/', (req, res) => {
    console.log(req.query.q);
    var freq = wordFreq(req.query.q);
    var doc_freq = wordFreq(`farm at the edge of town. The sweet spicy smell of gingerbread brought children skipping and running to see what would be offered that day.Unfortunately the children gobbled up the treats so fast that the old woman had a hard time keeping her supply of flour and spices to continue making the batches of gingerbread. Sometimes she suspected little hands of having reached through her kitchen window because gingerbread pieces and cookies would disappear. One time a whole gingerbread house vanished mysteriously. She told her husband, "Those naughty children are at it again. They don't understand all they have to do is knock on the door and I'll give them my gingerbread treats."One day she made a special batch of gingerbread men because they were extra big. Unfortunately for the last gingerbread man she ran out of batter and he was half the size of the others.She decorated the gingerbread men with care, each having socks, shirt and pants of different colors. When it came to the little gingerbread man she felt sorry for him and gave him more color than the others. "It doesn't matter he's small," she thought, "He'll still be tasty.".Putting the rack on the kitchen windowsill she left it there to cool and went to finish her laundry. The gingerbread men lay quietly, their frosted eyes gazing at the sky with its puffy clouds.At that moment a voice came from nowhere. "Get up. Get up. Come with me.".Everyone looked to see who was speaking.It was a butterfly flying just outside the window. Butterflies are naturally beautiful, but her wings were an exceptionally pretty marbled blue."Come with me," she urged again.The gingerbread men didn't react except to keep staring. All but the smallest gingerbread man who jumped up from the tray and leaped off the kitchen windowsill onto the grass below faster than you could say "hurry."."Where are we going?" he asked breathlessly."Away." And before the butterfly had finished speaking children appeared in the yard. Spying the little gingerbread man they started shrieking with delight and began chasing him."Stop, stop," they shouted. "We want to eat you."But with his little legs churning the gingerbread man only ran faster. He yelled,"I won't stop.Run, run as fast as you can.You can't catch me.I'm the gingerbread man."And truly those children could not catch him. Once out of their sight he continued running until he had reached a pasture where two horses were grazing. He sat down on a rock near the fence."Don't stop," said the butterfly fluttering nearby."I want to rest," he argued.That was a mistake as one of the horses trotted over to the fence and whinnied. "Oh you smell so good little gingerbread man. Come over here so I can smell you better.".The little gingerbread man shook his head, but suddenly that horse jumped the fence and began galloping after him, so he had to run even faster. He called out,"I outran children and I'll outrun you.Run, run as fast as you can.You can't catch me.I'm the gingerbread man."And truly, that horse could not catch him.The next time he rested the little gingerbread man took care to lie amongst the grass well off the road where no one would see him."Everybody wants to eat me," he complained to the butterfly. "Do you want to eat me, too?".Laughing she answered. "I love the smell of gingerbread. It's better than my favorite flowers. But I sip nectar, not gingerbread. Besides, you're my friend and friends don't eat friends."Smiling, the wily fox glanced at the butterfly before turning to the little gingerbread man, "You're going to carry him? I've no doubt Ms. Butterfly that you have good intentions, but you're only a bug. You couldn't carry anything anywhere, let alone this gingerbread man across the stream. You'll drop him. I guarantee it!".The little gingerbread man was confused. He knew that his butterfly friend had good intentions but could she really carry him? He doubted it. Her wings were so thin and delicate. The thought of him falling into the cold water and crumbling to damp bits was frightening. He said to the fox, "I outran children. I outran a horse, and I outran a dog. Will you keep me safe and not eat me?"."Of course!" the wily fox quickly assured him before the butterfly could object. "I eat only meat and I had a full meal just before my nap. Here, ride on my bushy tail. Let's go before I change my mind.".So the little gingerbread man climbed onto the fox's tail and they entered the water.Unfortunately the fox's tail began dipping into the water. "You're too heavy for my tail, he said. Climb onto my back.".The little gingerbread man did as he was asked.But the water began creeping up the fox's back forcing the little gingerbread man to climb higher to the fox's neck. "That's not good enough, I'm afraid," said the wily fox. "Climb to my head.".Now the little gingerbread man was terrified, but what could he do? He climbed to the fox's ears."Oh, little gingerbread man, you have to climb onto my nose," insisted the wily fox, "otherwise I can't help you. Don't you see the water is getting even deeper?".So the little gingerbread man reluctantly climbed onto the fox's nose. The moment he did, that wily fox tossed him into the air, opening his jaws wide with anticipation. The little gingerbread man's eyes rounded with fear because he knew he was going to be eaten. It didn't matter now how fast he could run.But the little gingerbread man and the wily fox had forgotten about the butterfly. She swooped into that fox's jaws, grabbing her friend by one leg and rescuing him from an awful fate. She flew higher and higher until the stream and the fox were but spots on the landscape."You can carry me," cried the little gingerbread man."Yes," she answered. "I'm stronger than you could imagine. Now I'll take you somewhere safe.".She flew with him over farm fields and forests and even mountains. It felt like they had been in the sky forever when they reached a lake, its waters calm like pale glass. There was an island in the middle of the lake lined with forest trees. And among the trees was where the butterfly took the little gingerbread man. She flew down, down, and down until they came to the foot of a pine tree.The little gingerbread man could not believe his eyes. Beneath that pine tree was the most beautiful gingerbread house.Through the front door of the gingerbread house came a gingerbread man and a gingerbread woman. Seeing the butterfly and her companion they smiled excitedly waving their gingerbread hands."Oh, what have you brought us?" cried the gingerbread woman. Evidently she knew the butterfly very well."I think that's obvious, dear" said the gingerbread man. "She's brought us a gingerbread boy. Do you realize that now we can be the family we always wanted?".It was true. The butterfly had intended all along to bring these three together. The little gingerbread man had not known that he was, in reality, a gingerbread boy. It was all so sudden, but wonderful. When both his gingerbread parents each gave him a loving hug he knew he was home.The gingerbread family went inside their gingerbread house to celebrate with the butterfly remaining outside on the roof. She was content just smelling the gingerbread and sitting there quietly, whether it was day or night.They all lived happily ever after.`);
    console.log(doc_freq);
    Object.keys(freq).sort().forEach(function(word) {
        console.log(word + " : " + freq[word] * (1 / doc_freq[word]));
    });
    var items = Object.keys(freq).map(function(key) {
        return [key, freq[key]];
    });

    // Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });

    // Create a new array with only the first 5 items
    console.log(items.slice(0, 5));

    res.send(items.slice(0, 5));

});
var server = app.listen( process.env.PORT, function() {
    console.log("Running on port 3001");
});
