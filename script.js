const LANGS = [
  { id: 'kk', short: 'ҚАЗ', label: 'Қазақша' },
  { id: 'ru', short: 'РУС', label: 'Русский' },
  { id: 'en', short: 'ENG', label: 'English' }
];

const t = (kk, ru, en) => ({ kk, ru, en });
const asset = (name) => `assets/lovable/${name}`;
const kitCoffeeLogo = 'assets/brand/kit-coffee-full-logo.png';

const ui = {
  kk: {
    menu: 'Мәзір',
    search: 'Іздеу',
    all: 'Барлығы',
    pdf: 'PDF',
    notFound: 'Ештеңе табылмады',
    continuation: 'жалғасы',
    price: 'Баға'
  },
  ru: {
    menu: 'Меню',
    search: 'Поиск',
    all: 'Все',
    pdf: 'PDF',
    notFound: 'Ничего не найдено',
    continuation: 'продолжение',
    price: 'Цена'
  },
  en: {
    menu: 'Menu',
    search: 'Search',
    all: 'All',
    pdf: 'PDF',
    notFound: 'Nothing found',
    continuation: 'continued',
    price: 'Price'
  }
};

const categories = [
  {
    id: 'breakfast',
    brand: 'kit',
    perSheet: 4,
    title: t('Таңғы ас', 'Завтраки', 'Breakfast'),
    subtitle: t('KIT Coffee форматына арналған таңғы ас таңдауы.', 'Завтраки в стиле KIT Coffee.', 'Breakfast plates by KIT Coffee.'),
    items: [
      { name: t('KIT таңғы асы', 'Завтрак KIT', 'KIT Breakfast'), desc: t('Гриль шұжықтары, пісірілген картоп, шампиньон, қуырылған нан, қызыл пияз, скрэмбл.', 'Колбаски гриль, картофель запеченный, шампиньоны, поджаренный хлеб, красный лук, скрэмбл.', 'Grilled sausages, baked potatoes, champignons, toasted bread, red onion and scrambled eggs.'), price: '3 000', image: asset('breakfast-kit.jpg') },
      { name: t('Корольдік дебют', 'Королевский дебют', 'Royal Debut'), desc: t('Глазунья, шұжықтар, жаңғақ, зәйтүн, қуырылған нан, мини-сосиска.', 'Глазунья, колбаски, орехи, маслины, поджаренный хлеб, мини-сосиски.', 'Fried eggs, sausages, nuts, olives, toasted bread and mini sausages.'), price: '3 000', image: asset('royal-debut.jpg') },
      { name: t('Ағылшын гамбиті', 'Английский гамбит', 'English Gambit'), desc: t('Глазунья, джем, сұлы ботқасы, қуырылған нан.', 'Глазунья, джем, каша овсяная, поджаренный хлеб.', 'Fried eggs, jam, oatmeal and toasted bread.'), price: '2 200', image: asset('english-gambit.jpg') },
      { name: t('Фитнес таңғы ас', 'Фитнес-завтрак', 'Fitness Breakfast'), desc: t('Пашот жұмыртқа, тұтас дәнді нан, тауық төс еті, қызанақ, қияр, жүгері.', 'Яйцо пашот, цельнозерновой хлеб, куриная грудка, помидор, огурец, кукуруза.', 'Poached egg, wholegrain bread, chicken breast, tomato, cucumber and corn.'), price: '3 200', image: asset('fitness.jpg') },
      { name: t('Итальян партиясы', 'Итальянская партия', 'Italian Game'), desc: t('Мини моцарелла, омлет, микс көк шөп, зәйтүн, бальзамик кремі, қуырылған нан.', 'Мини моцарелла, омлет, микс зелени, маслины, крем бальзамик, поджаристый хлеб.', 'Mini mozzarella, omelet, mixed greens, olives, balsamic cream and toasted bread.'), price: '3 100', image: asset('italian-game.jpg') },
      { name: t('Ладья скрэмблі', 'Ладейный скрэмбл', 'Rook Scramble'), desc: t('Ірімшік, жұмыртқа, көкөністер, нан.', 'Сыр, яйцо, овощи, хлеб.', 'Cheese, egg, vegetables and bread.'), price: '1 700', image: asset('rook-scramble.jpg') },
      { name: t('Ақсерке қосылған круассан', 'Круассан с семгой', 'Salmon Croissant'), desc: t('Классикалық круассан, аз тұздалған ақсерке, салат жапырағы, қияр, сүзбе кремі.', 'Классический круассан, слабосоленая семга, лист салата, огурец, творожный крем.', 'Classic croissant, lightly salted salmon, lettuce, cucumber and curd cream.'), price: '2 500', image: asset('croissant-salmon.jpg') },
      { name: t('Ысталған күркетауық круассаны', 'Круассан с копченой индейкой', 'Smoked Turkey Croissant'), desc: t('Классикалық круассан, ысталған күркетауық, салат жапырағы, қияр, сүзбе кремі.', 'Классический круассан, копченая индейка, лист салата, огурец, творожный крем.', 'Classic croissant, smoked turkey, lettuce, cucumber and curd cream.'), price: '2 300', image: asset('croissant-turkey.jpg') },
      { name: t('Ботқалар', 'Каши', 'Porridge'), desc: t('Қарақұмық, күріш немесе сұлы. Сүт, сары май, құлпынай джемі, жалбыз.', 'Гречневая, рисовая или овсяная. Молоко, сливочное масло, клубничный джем, мята.', 'Buckwheat, rice or oatmeal. Milk, butter, strawberry jam and mint.'), price: '700', image: asset('porridge.jpg') },
      { name: t('Альтернатив сүттегі ботқалар', 'Каши на альтернативном молоке', 'Plant Milk Porridge'), desc: t('Қарақұмық, күріш немесе сұлы. Кокос сүті, кокос майы, жалбыз.', 'Гречневая, рисовая или овсяная. Кокосовое молоко, кокосовое масло, мята.', 'Buckwheat, rice or oatmeal with coconut milk, coconut oil and mint.'), price: '1 200', image: asset('plant-milk-porridge.jpg') }
    ]
  },
  {
    id: 'mains',
    brand: 'kit',
    perSheet: 4,
    title: t('Негізгі тағамдар', 'Основные блюда', 'Main Dishes'),
    subtitle: t('Балық, паста және жеңіл еуропалық позициялар.', 'Рыба, паста и легкие европейские позиции.', 'Fish, pasta and light European plates.'),
    items: [
      { name: t('Көкөніспен ақсерке стейкі', 'Стейк из семги с овощами', 'Salmon Steak with Vegetables'), desc: t('Ақсерке, баклажан, бұрыш, кәді.', 'Семга, баклажан, перец, кабачки.', 'Salmon, eggplant, pepper and zucchini.'), price: '4 900', image: asset('salmon-steak-veg.jpg') },
      { name: t('Кілегейлі-уылдырық соустағы ақсерке', 'Семга под сливочно-икорным соусом', 'Salmon with Creamy Caviar Sauce'), desc: t('Ақсерке, күріш.', 'Семга, рис.', 'Salmon and rice.'), price: '5 300', image: asset('salmon-caviar-cream.jpg') },
      { name: t('Пісірілген дорадо', 'Дорадо запеченный', 'Baked Dorado'), desc: t('Тұтас пісірілген дорадо.', 'Запеченный дорадо.', 'Whole baked dorado.'), price: '6 000', image: asset('baked-dorado.jpg') },
      { name: t('Пісірілген сибас', 'Сибас запеченный', 'Baked Sea Bass'), desc: t('Тұтас пісірілген сибас.', 'Запеченный сибас.', 'Whole baked sea bass.'), price: '7 200', image: asset('baked-sea-bass.jpg') },
      { name: t('Тауықпен Фетучини Альфредо', 'Фетучини Альфредо с курицей', 'Chicken Fettuccine Alfredo'), desc: t('Тауық филесі, шампиньон, фетучини, кілегей соусы.', 'Куриное филе, шампиньоны, фетучини, сливочный соус.', 'Chicken fillet, champignons, fettuccine and cream sauce.'), price: '3 200', image: asset('fettuccine-chicken.jpg') },
      { name: t('Паста Болоньезе', 'Паста Болоньезе', 'Pasta Bolognese'), desc: t('Сиыр етінен фарш, қызанақ соусы, спагетти.', 'Фарш из говядины, томатный соус, спагетти.', 'Ground beef, tomato sauce and spaghetti.'), price: '3 000', image: asset('pasta-bolognese.jpg') },
      { name: t('Асшаян қосылған спагетти', 'Спагетти с креветками', 'Shrimp Spaghetti'), desc: t('Спагетти, асшаян, кілегей соусы.', 'Спагетти, креветки, сливочный соус.', 'Spaghetti, shrimp and cream sauce.'), price: '3 600', image: asset('shrimp-spaghetti.jpg') }
    ]
  },
  {
    id: 'bruschetta',
    brand: 'kit',
    perSheet: 4,
    title: t('Брускетта және рамен', 'Брускетты и рамен', 'Bruschetta & Ramen'),
    subtitle: t('Жеңіл бастамалар және ыстық алғашқы позициялар.', 'Легкие закуски и горячие первые позиции.', 'Light starters and hot noodle bowls.'),
    items: [
      { name: t('Ақсерке және кілегейлі ірімшік брускеттасы', 'Брускетта с малосольной семгой', 'Lightly Salted Salmon Bruschetta'), desc: t('Нәзік кілегейлі ірімшік, 3 дана.', 'Нежный сливочный сыр, 3 шт.', 'Cream cheese, 3 pieces.'), price: '4 200', image: asset('bruschetta-salmon.jpg') },
      { name: t('Ростбиф брускеттасы', 'Брускетта с ростбифом', 'Roast Beef Bruschetta'), desc: t('Ростбиф және қақталған қызанақ, 3 дана.', 'Ростбиф и вяленые помидоры, 3 шт.', 'Roast beef and sun-dried tomatoes, 3 pieces.'), price: '4 500', image: asset('bruschetta-roast-beef.jpg') },
      { name: t('Асшаян және авокадо брускеттасы', 'Брускетта с креветками и авокадо', 'Shrimp & Avocado Bruschetta'), desc: t('Подача: 3 дана.', 'Подача: 3 шт.', 'Serving: 3 pieces.'), price: '4 500', image: asset('bruschetta-shrimp.jpg') },
      { name: t('Сиыр етімен рамен', 'Рамен с говядиной', 'Beef Ramen'), desc: t('Кеспе, нори жапырағы, сиыр еті, күнжіт, скрэмбл жұмыртқа.', 'Лапша, лист нори, говядина, кунжут, яйцо скрэмбл.', 'Noodles, nori, beef, sesame and scrambled egg.'), price: '2 600', image: asset('beef-ramen.jpg') },
      { name: t('Тауықпен рамен', 'Рамен с курицей', 'Chicken Ramen'), desc: t('Кеспе, нори, тауық филесі, күнжіт, скрэмбл жұмыртқа, шампиньон.', 'Лапша, лист нори, куриное филе, кунжут, яйцо скрэмбл, шампиньоны.', 'Noodles, nori, chicken fillet, sesame, scrambled egg and champignons.'), price: '2 300', image: asset('chicken-ramen.jpg') },
      { name: t('Асшаянмен рамен', 'Рамен с креветками', 'Shrimp Ramen'), desc: t('Кеспе, нори, асшаян, күнжіт, скрэмбл жұмыртқа, шампиньон.', 'Лапша, лист нори, креветки, кунжут, яйцо скрэмбл, шампиньоны.', 'Noodles, nori, shrimp, sesame, scrambled egg and champignons.'), price: '2 600', image: asset('shrimp-ramen.jpg') },
      { name: t('Сорпалы тұшпара', 'Пельмени с бульоном', 'Dumplings with Broth'), desc: t('Сиыр еті, сорпа, қаймақ.', 'Говядина, бульон, сметана.', 'Beef, broth and sour cream.'), price: '2 000', image: asset('pelmeni.jpg') }
    ]
  },
  {
    id: 'pizza',
    brand: 'kit',
    perSheet: 4,
    title: t('Пицца және нан', 'Пицца и выпечка', 'Pizza & Bakery'),
    subtitle: t('Кофе және ортақ үстелге арналған позициялар.', 'Позиции к кофе и на общий стол.', 'Coffee-friendly plates and sharing bakery.'),
    items: [
      { name: t('Пепперони', 'Пепперони', 'Pepperoni'), desc: t('Пепперони шұжығы, моцарелла, қызанақ соусы.', 'Колбаса пепперони, сыр моцарелла, томатный соус.', 'Pepperoni, mozzarella and tomato sauce.'), price: '3 500', image: asset('pizza-pepperoni.jpg') },
      { name: t('Маргарита', 'Маргарита', 'Margherita'), desc: t('Қызанақ, моцарелла, қызанақ соусы.', 'Помидоры, сыр моцарелла, томатный соус.', 'Tomatoes, mozzarella and tomato sauce.'), price: '3 200', image: asset('pizza-margherita.jpg') },
      { name: t('Тауық және саңырауқұлақ', 'Курица с грибами', 'Chicken & Mushrooms'), desc: t('Тауық, шампиньон, моцарелла, қызанақ соусы.', 'Курица, шампиньоны, сыр моцарелла, томатный соус.', 'Chicken, champignons, mozzarella and tomato sauce.'), price: '3 500', image: asset('pizza-chicken-mushroom.jpg') },
      { name: t('Нан себеті', 'Хлебная корзина', 'Bread Basket'), desc: t('Асқа арналған жылы нан таңдауы.', 'Теплая подборка хлеба к столу.', 'Warm bread selection for the table.'), price: '1 200', image: asset('bread.jpg') },
      { name: t('Тауық самсасы', 'Самса с курицей', 'Chicken Samsa'), desc: t('Подача: 4 дана.', 'Подача: 4 шт.', 'Serving: 4 pieces.'), price: '1 000', image: asset('samsa-chicken.jpg') },
      { name: t('Ет самсасы', 'Самса с мясом', 'Meat Samsa'), desc: t('Подача: 4 дана.', 'Подача: 4 шт.', 'Serving: 4 pieces.'), price: '1 200', image: asset('samsa-beef.jpg') },
      { name: t('Бауырсақ', 'Баурсаки', 'Baursaks'), desc: t('Подача: 10 дана.', 'Подача: 10 шт.', 'Serving: 10 pieces.'), price: '1 800', image: asset('baursak.jpg') }
    ]
  },
  {
    id: 'salads',
    brand: 'kit',
    perSheet: 4,
    title: t('Салаттар', 'Салаты', 'Salads'),
    subtitle: t('Балғын, жылы және авторлық салаттар.', 'Свежие, теплые и авторские салаты.', 'Fresh, warm and signature salads.'),
    items: [
      { name: t('Қазы қосылған Цезарь', 'Цезарь с кониной', 'Caesar with Horse Meat'), desc: t('Айсберг, рукола, черри, ысталған жылқы еті, бөдене жұмыртқасы, Цезарь соусы, құрт, қытырлақ нан.', 'Айсберг, руккола, черри, копченая конина, перепелиное яйцо, соус Цезарь, курт, сухарики.', 'Iceberg, arugula, cherry tomatoes, smoked horse meat, quail egg, Caesar sauce, kurt and croutons.'), price: '4 000', image: asset('caesar-konina.jpg') },
      { name: t('Тауықпен Цезарь', 'Цезарь с курицей', 'Chicken Caesar'), desc: t('Айсберг, тауық филесі, черри, бөдене жұмыртқасы, салат жапырағы, пармезан, Цезарь соусы, қытырлақ нан.', 'Айсберг, куриное филе, черри, перепелиное яйцо, лист салата, пармезан, соус Цезарь, сухарики.', 'Iceberg, chicken fillet, cherry tomatoes, quail egg, lettuce, parmesan, Caesar sauce and croutons.'), price: '3 250', image: asset('caesar-chicken.jpg') },
      { name: t('Жылы салат', 'Теплый салат', 'Warm Salad'), desc: t('Ростбиф, микс көк шөп, қызанақ, түрлі түсті бұрыш, кәді, қақталған қызанақ, фирмалық соус, күнжіт.', 'Ростбиф, микс зелени, помидоры, перец светофор, кабачок, вяленые помидоры, фирменный соус, кунжут.', 'Roast beef, mixed greens, tomatoes, bell peppers, zucchini, sun-dried tomatoes, signature sauce and sesame.'), price: '4 000', image: asset('warm-salad.jpg') },
      { name: t('Қытырлақ баклажан', 'Хрустящий баклажан', 'Crispy Eggplant'), desc: t('Микс көк шөп, қызанақ, баклажан, фетакса, қышқыл-тәтті соус, бальзамик.', 'Микс зелени, помидоры, баклажаны, фетакса, кисло-сладкий соус, бальзамик.', 'Mixed greens, tomatoes, eggplant, fetaxa, sweet and sour sauce and balsamic.'), price: '2 800', image: asset('eggplant.jpg') },
      { name: t('Фитнес салат', 'Фитнес салат', 'Fitness Salad'), desc: t('Брокколи, авокадо, қияр, пашот жұмыртқа, ысталған күркетауық, микс көк шөп, зығыр дәні, күнжіт, лимон дрессингі.', 'Брокколи, авокадо, огурец, яйцо пашот, копченая индейка, микс зелени, семена льна, кунжут, лимонный дрессинг.', 'Broccoli, avocado, cucumber, poached egg, smoked turkey, mixed greens, flaxseed, sesame and lemon dressing.'), price: '3 500', image: asset('fitness-salad.jpg') },
      { name: t('Рукола және асшаян салаты', 'Салат с рукколой и креветками', 'Arugula & Shrimp Salad'), desc: t('Авокадо, черри, пармезан, бөдене жұмыртқасы, цитрус тұздығы, бальзамик кремі.', 'Авокадо, черри, пармезан, перепелиное яйцо, цитрусовая заправка, крем-бальзамик.', 'Avocado, cherry tomatoes, parmesan, quail egg, citrus dressing and balsamic cream.'), price: '4 450', image: asset('shrimp.jpg') },
      { name: t('Ачичук', 'Ачичук', 'Achichuk'), desc: t('Қызанақ, қызыл пияз, көк шөп, чили бұрышы.', 'Помидоры, красный лук, зелень, чили перец.', 'Tomatoes, red onion, herbs and chili pepper.'), price: '1 700', image: asset('achichuk.jpg') },
      { name: t('Үй салаты', 'Салат «Домашний»', 'Homestyle Salad'), desc: t('Қызанақ, қияр, көк шөп, қызыл пияз. Қаймақпен немесе маймен таңдауға болады.', 'Помидоры, огурцы, зелень, красный лук. Со сметаной или маслом по желанию.', 'Tomatoes, cucumbers, herbs and red onion. Served with sour cream or oil by choice.'), price: '2 000', image: asset('homemade.jpg') }
    ]
  },
  {
    id: 'tea',
    brand: 'kit',
    type: 'table',
    rowsPerSheet: 10,
    title: t('Шай', 'Чай', 'Tea'),
    subtitle: t('1 л және 0,4 л көлемдері.', 'Объемы 1 л и 0,4 л.', 'Served as 1 L and 0.4 L.'),
    columns: [t('1 л', '1 л', '1 L'), t('0,4 л', '0,4 л', '0.4 L')],
    rows: [
      [t('Ташкент шайы', 'Ташкенский чай', 'Tashkent Tea'), '2 190', '1 190'],
      [t('Марокко шайы', 'Марокканский чай', 'Moroccan Tea'), '2 190', '1 190'],
      [t('Шырғанақ шайы', 'Облепиховый чай', 'Sea Buckthorn Tea'), '2 490', '1 290'],
      [t('Тары шайы', 'Тары чай', 'Tary Tea'), '2 190', '1 190'],
      [t('Қарақ шайы', 'Карак чай', 'Karak Tea'), '2 490', '1 290'],
      [t('Зімбір шайы', 'Имбирный чай', 'Ginger Tea'), '2 490', '1 290'],
      [t('Жидек шайы', 'Ягодный чай', 'Berry Tea'), '2 490', '1 290'],
      [t('Қара шай', 'Черный чай', 'Black Tea'), '1 890', '990'],
      [t('Көк шай', 'Зеленый чай', 'Green Tea'), '1 890', '990'],
      [t('Қазақша шай', 'Чай по-казахски', 'Kazakh-Style Tea'), '1 990', '1 090']
    ]
  },
  {
    id: 'coffee',
    brand: 'kit',
    type: 'table',
    rowsPerSheet: 10,
    title: t('Кофе', 'Кофе', 'Coffee'),
    subtitle: t('KIT Coffee бар картасы.', 'Барная карта KIT Coffee.', 'KIT Coffee bar selection.'),
    columns: [t('Баға', 'Цена', 'Price')],
    rows: [
      [t('Dibek кофе', 'Dibek кофе', 'Dibek Coffee'), '1 590'],
      [t('Эспрессо', 'Эспрессо', 'Espresso'), '890'],
      [t('Американо / айс американо', 'Американо / айс американо', 'Americano / Iced Americano'), '1 190'],
      [t('Латте / айс латте', 'Латте / айс латте', 'Latte / Iced Latte'), '1 390'],
      [t('Капучино / айс капучино', 'Капучино / айс капучино', 'Cappuccino / Iced Cappuccino'), '1 490'],
      [t('Флэт уайт', 'Флэт уайт', 'Flat White'), '1 490'],
      [t('Мокко / айс мокко', 'Мокко / айс мокко', 'Mocha / Iced Mocha'), '1 690'],
      [t('Раф', 'Раф', 'Raf Coffee'), '1 690'],
      [t('Фраппучино', 'Фраппучино', 'Frappuccino'), '2 090'],
      [t('Эспрессо тоник', 'Эспрессо тоник', 'Espresso Tonic'), '1 790'],
      [t('Айс черри', 'Айс черри', 'Iced Cherry'), '2 090'],
      [t('Бамбл', 'Бамбл', 'Bumble Coffee'), '2 090'],
      [t('Матча / айс матча', 'Матча / айс матча', 'Matcha / Iced Matcha'), '1 590'],
      [t('Бамбл матча', 'Бамбл матча', 'Bumble Matcha'), '2 090'],
      [t('Какао', 'Какао', 'Cocoa'), '1 490'],
      [t('Құмдағы кофе', 'Кофе на песке', 'Sand Coffee'), '1 590'],
      [t('Фильтр кофе', 'Фильтр кофе', 'Filter Coffee'), '—'],
      [t('Дрип кофе', 'Дрип кофе', 'Drip Coffee'), '—']
    ]
  },
  {
    id: 'cold',
    brand: 'kit',
    type: 'table',
    rowsPerSheet: 10,
    title: t('Салқын сусындар', 'Холодные напитки', 'Cold Drinks'),
    subtitle: t('Милкшейк, фреш, смузи және айс ти.', 'Милкшейки, фреши, смузи и айс ти.', 'Milkshakes, fresh juices, smoothies and iced tea.'),
    columns: [t('Баға', 'Цена', 'Price')],
    rows: [
      [t('Классикалық милкшейк', 'Классический милкшейк', 'Classic Milkshake'), '1 690'],
      [t('Құлпынай милкшейкі', 'Клубничный милкшейк', 'Strawberry Milkshake'), '1 790'],
      [t('Банан милкшейкі', 'Банановый милкшейк', 'Banana Milkshake'), '1 790'],
      [t('Шоколад милкшейкі', 'Шоколадный милкшейк', 'Chocolate Milkshake'), '1 790'],
      [t('Oreo милкшейкі', 'Oreo милкшейк', 'Oreo Milkshake'), '1 990'],
      [t('Алма фреші', 'Фреш яблоко', 'Apple Fresh Juice'), '2 090'],
      [t('Апельсин фреші', 'Фреш апельсин', 'Orange Fresh Juice'), '2 390'],
      [t('Сәбіз фреші', 'Фреш морковь', 'Carrot Fresh Juice'), '1 590'],
      [t('Грин детокс', 'Грин детокс', 'Green Detox'), '2 190'],
      [t('Құлпынай-банан смузи', 'Клубника-банан смузи', 'Strawberry Banana Smoothie'), '2 190'],
      [t('Жидек смузи', 'Ягодный смузи', 'Berry Smoothie'), '2 190'],
      [t('Пина колада', 'Пина колада', 'Pina Colada'), '2 390'],
      [t('Тропикалық смузи', 'Тропический смузи', 'Tropical Smoothie'), '2 190'],
      [t('Манго-жасмин айс ти', 'Айс ти манго-жасмин', 'Mango Jasmine Iced Tea'), '1 490'],
      [t('Цитрус-розмарин айс ти', 'Айс ти цитрус-розмарин', 'Citrus Rosemary Iced Tea'), '1 590'],
      [t('Жидек айс ти', 'Айс ти ягодный', 'Berry Iced Tea'), '1 490']
    ]
  },
  {
    id: 'lemonade',
    brand: 'kit',
    type: 'table',
    rowsPerSheet: 8,
    title: t('Лимонадтар', 'Лимонады', 'Lemonades'),
    subtitle: t('1 л және 0,4 л көлемдері.', 'Объемы 1 л и 0,4 л.', 'Served as 1 L and 0.4 L.'),
    columns: [t('1 л', '1 л', '1 L'), t('0,4 л', '0,4 л', '0.4 L')],
    rows: [
      [t('Тропикалық', 'Тропический', 'Tropical'), '2 390', '1 290'],
      [t('Жидек', 'Ягодный', 'Berry'), '2 390', '1 290'],
      [t('Киви-лайм', 'Киви-лайм', 'Kiwi Lime'), '2 390', '1 290'],
      [t('Мохито', 'Мохито', 'Mojito'), '2 390', '1 290'],
      [t('Құлпынай-лайм', 'Клубника-лайм', 'Strawberry Lime'), '2 390', '1 290'],
      [t('Фирмалық лимонад', 'Фирменный лимонад', 'Signature Lemonade'), '2 390', '1 290']
    ]
  }
];

const initialParams = new URLSearchParams(window.location.search);
let activeLang = initialParams.get('lang') || 'ru';
if (!LANGS.some((lang) => lang.id === activeLang)) activeLang = 'ru';
let activeCategory = initialParams.get('category') || 'all';
if (activeCategory !== 'all' && !categories.some((category) => category.id === activeCategory)) activeCategory = 'all';

const stack = document.querySelector('#sheetStack');
const categoryRail = document.querySelector('#categoryRail');
const langSwitch = document.querySelector('#langSwitch');
const searchInput = document.querySelector('#menuSearch');
const printButton = document.querySelector('#printMenu');
const backTop = document.querySelector('#backTop');

const textFor = (value, lang = activeLang) => value?.[lang] ?? value?.ru ?? '';
const text = (value) => textFor(value, activeLang);
const allText = (value) => LANGS.map((lang) => textFor(value, lang.id)).filter(Boolean).join(' ');
const money = (value) => (value === '—' ? value : `${value} тг`);
const normalize = (value) => String(value || '').toLowerCase().replaceAll('ё', 'е');
const drinkCategoryIds = new Set(['tea', 'coffee', 'cold', 'lemonade']);
const lemonadeFlavorClasses = ['tropical', 'berry', 'kiwi', 'mohito', 'strawberry', 'signature'];

function triText(value) {
  return LANGS.map((lang) => `
    <span class="tri-line lang-${lang.id}">
      <span class="tri-tag">${lang.short}</span>
      <span class="tri-copy">${textFor(value, lang.id)}</span>
    </span>
  `).join('');
}

function pageSubtitle(page) {
  if (!page.sheetIndex) return page.subtitle;
  return LANGS.reduce((subtitle, lang) => {
    subtitle[lang.id] = `${textFor(page.subtitle, lang.id)} · ${ui[lang.id].continuation}`;
    return subtitle;
  }, {});
}

function brandLabel() {
  return 'KIT Coffee';
}

function brandLogos() {
  return `<img class="sheet-brand-logo kit" src="${kitCoffeeLogo}" alt="KIT Coffee">`;
}

function isDrinkPage(page) {
  return drinkCategoryIds.has(page.id);
}

function createDrinkShowcase(page) {
  if (page.id !== 'lemonade' || page.sheetIndex) return '';

  return `
    <div class="drink-showcase" aria-hidden="true">
      ${page.rows.map((row, index) => `
        <span class="drink-sample flavor-${lemonadeFlavorClasses[index] || 'signature'}">
          <span class="drink-glass"></span>
          <span class="drink-label">${textFor(row[0], 'ru')}</span>
        </span>
      `).join('')}
    </div>
  `;
}

function pageSearchText(page) {
  const parts = [allText(page.title), allText(page.subtitle), brandLabel(page.brand)];
  page.items?.forEach((item) => {
    parts.push(allText(item.name), allText(item.desc), item.price);
    item.variants?.forEach((variant) => parts.push(allText(variant.label), variant.price));
  });
  page.rows?.forEach((row) => parts.push(allText(row[0]), row.slice(1).join(' ')));
  return normalize(parts.join(' '));
}

function splitCategory(category) {
  if (category.type === 'table') {
    const size = category.rowsPerSheet || 10;
    const chunks = [];
    for (let index = 0; index < category.rows.length; index += size) {
      chunks.push({
        ...category,
        sheetIndex: Math.floor(index / size),
        rows: category.rows.slice(index, index + size)
      });
    }
    return chunks;
  }

  const size = category.perSheet || 3;
  const chunks = [];
  const sheetCount = Math.ceil(category.items.length / size);
  const baseSize = Math.floor(category.items.length / sheetCount);
  let remainder = category.items.length % sheetCount;
  let index = 0;

  for (let sheetIndex = 0; sheetIndex < sheetCount; sheetIndex += 1) {
    const chunkSize = baseSize + (remainder > 0 ? 1 : 0);
    remainder -= 1;
    chunks.push({
      ...category,
      sheetIndex,
      items: category.items.slice(index, index + chunkSize)
    });
    index += chunkSize;
  }
  return chunks;
}

function renderLangSwitch() {
  langSwitch.innerHTML = '';
  LANGS.forEach((lang) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `lang-button ${lang.id === activeLang ? 'active' : ''}`;
    button.textContent = lang.short;
    button.title = lang.label;
    button.addEventListener('click', () => {
      activeLang = lang.id;
      render();
    });
    langSwitch.appendChild(button);
  });
}

function renderCategoryRail() {
  categoryRail.innerHTML = '';
  const items = [
    { id: 'all', title: ui[activeLang].all },
    ...categories.map((category) => ({ id: category.id, title: text(category.title) }))
  ];
  items.forEach((category) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `category-chip ${category.id === activeCategory ? 'active' : ''}`;
    button.textContent = category.title;
    button.addEventListener('click', () => {
      activeCategory = category.id;
      document.querySelectorAll('.category-chip').forEach((chip) => chip.classList.remove('active'));
      button.classList.add('active');
      filterSheets();
      const target = category.id === 'all'
        ? document.querySelector('.menu-sheet')
        : document.querySelector(`.menu-sheet[data-category="${category.id}"]`);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    categoryRail.appendChild(button);
  });
  categoryRail.scrollLeft = 0;
}

function createSheetHead(page) {
  return `
    <header class="sheet-head">
      <div>
        <p class="sheet-kicker">${brandLabel(page.brand)}</p>
        <h2 class="sheet-title">${textFor(page.title, 'ru')}</h2>
        <p class="sheet-subtitle">${textFor(pageSubtitle(page), 'ru')}</p>
      </div>
      <div class="sheet-brand-logos ${page.brand}">${brandLogos(page.brand)}</div>
    </header>
  `;
}

function createMedia(item) {
  if (item.image) {
    return `
      <figure class="dish-media">
        <img src="${item.image}" alt="${textFor(item.name, 'ru')}" loading="lazy">
      </figure>
    `;
  }
  const initials = textFor(item.name, 'ru').trim().slice(0, 2).toUpperCase();
  return `<span class="dish-placeholder" aria-hidden="true">${initials}</span>`;
}

function createItem(item) {
  const variants = item.variants?.length
    ? `<div class="variant-list">
        ${item.variants.map((variant) => `
          <div class="variant-row">
            <span class="variant-label">${textFor(variant.label, 'ru')}</span>
            <span class="leader"></span>
            <span class="variant-price">${money(variant.price)}</span>
          </div>
        `).join('')}
      </div>`
    : '';
  return `
    <article class="menu-item">
      ${createMedia(item)}
      <div class="item-main">
        <div class="item-top">
          <h3 class="item-name">${textFor(item.name, 'ru')}</h3>
          ${item.price ? `<span class="item-price">${money(item.price)}</span>` : ''}
        </div>
        <p class="item-desc tri-lines">${triText(item.desc)}</p>
        ${variants}
      </div>
    </article>
  `;
}

function createSheetFoot(number) {
  return `
    <footer class="sheet-foot">
      <span class="foot-cup" aria-hidden="true"></span>
      <span class="foot-number">${String(number).padStart(2, '0')}</span>
    </footer>
  `;
}

function createItemsSheet(page, number) {
  const sheet = document.createElement('section');
  sheet.className = 'menu-sheet item-sheet';
  sheet.id = `${page.id}-${page.sheetIndex + 1}`;
  sheet.dataset.category = page.id;
  sheet.dataset.search = pageSearchText(page);
  sheet.innerHTML = `
    <div class="sheet-inner">
      ${createSheetHead(page)}
      <div class="items-grid" data-count="${page.items.length}">
        ${page.items.map(createItem).join('')}
      </div>
      ${createSheetFoot(number)}
    </div>
  `;
  return sheet;
}

function createTableSheet(page, number) {
  const sheet = document.createElement('section');
  const drinkSheet = isDrinkPage(page);
  sheet.className = `menu-sheet${drinkSheet ? ' drink-sheet' : ''}`;
  sheet.id = `${page.id}-${page.sheetIndex + 1}`;
  sheet.dataset.category = page.id;
  sheet.dataset.search = pageSearchText(page);
  const twoPrices = page.columns.length === 2 ? 'two-prices' : '';
  const tableClasses = ['table-wrap', twoPrices, drinkSheet ? 'drink-table' : ''].filter(Boolean).join(' ');
  sheet.innerHTML = `
    <div class="sheet-inner">
      ${createSheetHead(page)}
      ${createDrinkShowcase(page)}
      <div class="${tableClasses}" data-rows="${page.rows.length}">
        <div class="table-head">
          <span></span>
          <span></span>
          ${page.columns.map((column) => `<span class="table-column">${textFor(column, 'ru')}</span>`).join('')}
        </div>
        ${page.rows.map((row) => `
          <div class="table-row">
            <span class="table-name">${textFor(row[0], 'ru')}</span>
            <span class="leader"></span>
            ${row.slice(1).map((price, index) => `<span class="table-price" data-label="${textFor(page.columns[index], 'ru')}">${money(price)}</span>`).join('')}
          </div>
        `).join('')}
      </div>
      ${createSheetFoot(number)}
    </div>
  `;
  return sheet;
}

function renderSheets() {
  stack.innerHTML = '';
  const fragment = document.createDocumentFragment();
  let number = 1;

  categories.forEach((category) => {
    splitCategory(category).forEach((page) => {
      const sheet = category.type === 'table'
        ? createTableSheet(page, number)
        : createItemsSheet(page, number);
      number += 1;
      fragment.appendChild(sheet);
    });
  });

  const empty = document.createElement('div');
  empty.id = 'emptyState';
  empty.className = 'empty-state';
  empty.textContent = ui[activeLang].notFound;
  fragment.appendChild(empty);
  stack.appendChild(fragment);
}

function filterSheets() {
  const query = normalize(searchInput.value.trim());
  const relaxed = query.length > 4 ? query.slice(0, -1) : query;
  let visible = 0;
  document.querySelectorAll('.menu-sheet').forEach((sheet) => {
    const categoryMatch = activeCategory === 'all' || sheet.dataset.category === activeCategory;
    const queryMatch = !query || sheet.dataset.search.includes(query) || sheet.dataset.search.includes(relaxed);
    const show = categoryMatch && queryMatch;
    sheet.classList.toggle('hidden', !show);
    sheet.style.display = show ? '' : 'none';
    if (show) visible += 1;
  });
  const empty = document.querySelector('#emptyState');
  if (empty) empty.style.display = visible ? 'none' : 'grid';
}

function render() {
  document.documentElement.lang = activeLang;
  searchInput.placeholder = ui[activeLang].search;
  printButton.querySelector('span').textContent = ui[activeLang].pdf;
  renderLangSwitch();
  renderCategoryRail();
  renderSheets();
  filterSheets();
}

function scrollToHashTarget() {
  const targetId = window.location.hash;
  if (!targetId) return;

  requestAnimationFrame(() => {
    document.querySelector(targetId)?.scrollIntoView({ block: 'start' });
  });
}

searchInput.addEventListener('input', filterSheets);
printButton.addEventListener('click', () => window.print());
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 700);
}, { passive: true });
window.addEventListener('hashchange', scrollToHashTarget);

render();
scrollToHashTarget();
