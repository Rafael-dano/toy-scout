
// follow this template for your future blogs

import React from 'react';
import { Helmet } from "react-helmet";
// import backToSchoolScout from "../../assets/back-to-school-scout.png";  // adjust path if needed... you can remove one of the .. to make path better aswell   88partner

const WeekendBackyardToysFall = () => {
  // ✅ Edit this section for each blog
  const blogMeta = {
    title: 'Weekend Fun: The Best Backyard Toys for Early Fall', // ✅ Blog post title
    description: 'Make the most of crisp fall weekends with outdoor toys that encourage active play, creativity, and family bonding.', // ✅ Blog description
    image: 'https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png', // ✅ Blog hero image
  //image: backToSchoolScout, // ✅ Now using the imported image variable ...... use if you have image in file you want to use instead  88partner
    slug: '/blog/backyard-toys-for-fall-2025', // ✅ Blog slug (used in meta)
    datePublished: 'August 29, 2025', // ✅ Published date
  };

  // ✅ Edit this section to change products shown in the blog
  const products = [
    {
      title: 'Animal Bean Bag Toss Game Toy Outdoor Toss Game', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/91Je-vPHsfL._AC_SX679_.jpg', // ✅ Product image
      description: 'A cute and colorful animal-themed bean bag toss set that’s perfect for backyard parties, indoor play, or motor skill practice.', // ✅ Short description
      text: "This Animal Bean Bag Toss Game hits the sweet spot between fun and developmental play. The design is adorable, featuring cheerful animals that immediately draw kids in. Each animal has a different point value target hole, encouraging both aim and number recognition. The bean bags are lightweight and safe for indoor or outdoor use, making this a versatile choice for year-round entertainment. It’s especially good for preschoolers and early elementary kids who are working on coordination, patience, and turn-taking. As a bonus, it folds up easily for storage—a thoughtful touch for parents looking to keep things tidy.", // ✅ Full review content
      price: '$35.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B08V1R43HT/ref=cm_sw_r_as_gl_api_gl_i_MBXX6KQT3J8V12VTTG1D?linkCode=ml1&tag=more4kids0a-20&linkId=3543717cada0bfb1c295a8f9d6478cd1', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Toss and Catch Ball Game', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81ZnS1MrhDL._AC_SX679_.jpg', // ✅ Product image
      description: 'A classic Velcro-style catch game that gets kids up and moving—great for beach days, backyard fun, or burning energy indoors.', // ✅ Short description
      text: "The Toss and Catch Ball Game is a timeless active play set that never gets old. With two circular mitts and a fuzzy ball that sticks with a satisfying “thwack,” this game is accessible for almost any age. It’s perfect for building hand-eye coordination and encourages quick reactions and teamwork. Whether it’s used for a quick game of catch or for more creative tossing challenges, the simple hook-and-loop system makes it easy for even the youngest players to succeed. Lightweight and easy to pack, it's a go-to game for family outings, camping trips, or rainy-day indoor play.", // ✅ Full review content
      price: '$29.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0D9YRW7VJ/ref=cm_sw_r_as_gl_api_gl_i_V62B8J32QN03RPAG3BTW?linkCode=ml1&tag=more4kids0a-20&linkId=6b701a9988dedd8b7d862ace3d85283c', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Bobor Trampoline Sprinklers for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81k-ZsCy+mS._AC_SX679_.jpg', // ✅ Product image
      description: 'Turn any trampoline into a backyard waterpark with these easy-to-install sprinkler attachments—cool, splashy fun on hot summer days.', // ✅ Short description
      text: "The Bobor Trampoline Sprinklers are a game-changer for summertime play. Once attached around the top of a trampoline, they create a refreshing spray that keeps kids cool while they bounce. Installation is simple with zip ties and fits most standard trampolines. The water flow is adjustable, letting you control the splash level from gentle mist to full spray. Parents will love how it adds excitement to an already-loved activity without needing a pool. It's made from durable, UV-resistant materials, meaning it should last across seasons with proper storage. It’s pure summer joy—kids can’t get enough.", // ✅ Full review content
      price: '$14.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B07QZFS4CY/ref=cm_sw_r_as_gl_api_gl_i_W7E8TVDAK9VXX8G3C9V8?linkCode=ml1&tag=more4kids0a-20&linkId=8bcbda5c1344b2e9d485fecd7fa816bf ', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'FUN LITTLE TOYS Pop Up Play Tent with Camping Gear and Tools Set', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71b4g+Q45LL._AC_SY300_SX300_.jpg', // ✅ Product image
      description: 'An imaginative indoor/outdoor camping set that includes a pop-up tent and over a dozen realistic tools—perfect for little adventurers.', // ✅ Short description
      text: "This Pop Up Play Tent with Camping Gear Set delivers big fun in a small package. The tent itself sets up in seconds and creates a cozy little base camp for pretend adventures. What makes this kit shine is the attention to detail in the accessories: a battery-powered lantern, pretend stove, binoculars, utensils, and even a play watch. Kids will spend hours pretending to camp, cook, and explore—fostering creativity, independence, and social play. It’s an especially great indoor activity for rainy days or sleepovers. The whole set folds up neatly when playtime ends, making storage a breeze.", // ✅ Full review content
      price: '$39.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B07KKB4LFM/ref=cm_sw_r_as_gl_api_gl_i_B4T0PEV056GK0SHK6WD1?linkCode=ml1&tag=more4kids0a-20&linkId=46bac11721c1939e384aa625e9ffa3e2', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Water Doodle Mat', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/818B3iz2f5L._AC_SY450_.jpg', // ✅ Product image
      description: 'A reusable drawing mat that uses only water—no mess, no stains, just creativity that fades away for endless play.', // ✅ Short description
      text: "The Water Doodle Mat is a brilliant invention for mess-free creativity. With just a water-filled pen, kids can draw, doodle, and stamp to their heart’s content. The mat gradually fades as the water dries, ready for new artwork again and again. It’s large enough for siblings or friends to play together and comes with fun shape stampers and drawing guides. Parents love the lack of ink, paint, or cleanup. It’s ideal for toddlers just learning to draw, but older kids will find it just as satisfying. Great for road trips, rainy days, or quiet solo playtime.", // ✅ Full review content
      price: '$37.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B07GKWLBN2/ref=cm_sw_r_as_gl_api_gl_i_TQZQKDNXE0C4TEWCBZG1?linkCode=ml1&tag=more4kids0a-20&linkId=45cf90f02610713fe87aba44afb6224c', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: '2 -in- 1 Toddler Swing', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/51e7EeHyBtL._AC_SY879_.jpg', // ✅ Product image
      description: 'A safe and sturdy swing with both toddler and big kid modes—designed to grow with your child from 6 months to 4+ years.', // ✅ Short description
      text: "The 2-in-1 Toddler Swing is a versatile addition to any backyard or indoor playroom. With a high backrest, adjustable straps, and a front safety bar, it's perfect for younger children just getting used to the motion of swinging. As your child grows, parts of the swing can be removed to transform it into a more open seat for older toddlers or preschoolers. It attaches easily to swing sets or sturdy frames and is made of thick plastic that feels both safe and long-lasting. Parents praise its durability and comfort, while kids just love the fun ride.", // ✅ Full review content
      price: '$49.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B09Y8M2C9P/ref=cm_sw_r_as_gl_api_gl_i_1E3G4DPXMSYGAJNTAXJ0?linkCode=ml1&tag=more4kids0a-20&linkId=e19ca389d613c72d60aaf7e44c8b8830 ', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: '3-in-1 Baseball Set for Kids 3-5 - Tee Ball Stand', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/6155w+5P5nL._AC_SX679_.jpg', // ✅ Product image
      description: 'A versatile tee ball set that helps young kids practice hitting, pitching, and catching in one fun package.', // ✅ Short description
      text: "The 3-in-1 Baseball Set is a fantastic introduction to the world of sports for toddlers and preschoolers. It’s designed to grow with your child’s skills, offering three different ways to play: tee ball, pop-up pitch, and automatic pitching. This means beginners can start with the stationary tee, then progress to a bouncing ball mode, and finally practice timing their swing with the auto pitch. Everything is lightweight and sized perfectly for small hands. Parents appreciate that it builds hand-eye coordination and keeps kids active without overwhelming them. It's a great starter set that builds both confidence and fun.", // ✅ Full review content
      price: '$29.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0C9BLDRYS/ref=cm_sw_r_as_gl_api_gl_i_KPD1S1650R425MP794AF?linkCode=ml1&tag=more4kids0a-20&linkId=0d42d8e20fbc68d5618ddccf467a4337', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'JOYIN 32 OZ Concentrated Bubble Solution', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71fn0cAWw9L._AC_SY450_.jpg', // ✅ Product image
      description: 'A super-size bubble solution refill that produces long-lasting, colorful bubbles—compatible with most bubble machines and wands.', // ✅ Short description
      text: "If your household goes through bubbles like water, JOYIN’s 32 OZ Concentrated Bubble Solution is a must-have. This jug delivers thick, vibrant bubbles that float longer and resist popping. Whether used in bubble machines, with wands, or for DIY bubble art, the results are consistently impressive. Just dilute it per instructions and you’re set for hours of bubbly fun. It’s non-toxic and kid-safe, making it a reliable option for backyard playdates, birthday parties, or just a bit of magic on a regular afternoon. The quality is noticeably better than most generic brands.", // ✅ Full review content
      price: '$24.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B0721ZKZ6X/ref=cm_sw_r_as_gl_api_gl_i_TGNG1XEASTEHE2H6P4WY?linkCode=ml1&tag=more4kids0a-20&linkId=0db7f54382449f8c48e17f73dfda738f ', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Super Water Gun for Kids Adults: 2 Pack ', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71bxDas0zKL._AC_SX679_.jpg', // ✅ Product image
      description: 'A high-capacity, pump-action water blaster set designed for epic summer battles with friends or family.', // ✅ Short description
      text: "This 2-pack of Super Water Guns delivers exactly what summer should feel like—fast-paced, laugh-out-loud water fights. Each gun is lightweight but sturdy, with a generous tank that holds enough water to stay in the action longer without constant refills. The pump mechanism feels smooth, giving surprisingly strong blasts even from a distance. They're easy enough for kids to operate, but powerful enough for teens and even parents to join in. The value in the pack of two is great for siblings or friends. Durable and fun, these are a backyard staple during hot months.", // ✅ Full review content
      price: '$26.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0DS22186D/ref=cm_sw_r_as_gl_api_gl_i_3BZJT8XARVNZ0V64NFT3?linkCode=ml1&tag=more4kids0a-20&linkId=545e5b4eadaba67e6d9305139bc64049&th=1', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Liberry Toddler Golf Set', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71j5ntRY6sL._AC_SX679_.jpg', // ✅ Product image
      description: 'A colorful and educational mini golf set that helps toddlers develop coordination, patience, and motor skills.', // ✅ Short description
      text: "The Liberry Toddler Golf Set turns your living room or yard into a mini putting green for little ones. The clubs and balls are lightweight and perfectly sized for toddler hands. It comes with holes, flags, and obstacles that encourage both imaginative and skill-based play. Parents love that it introduces sportsmanship, hand-eye coordination, and patience—all wrapped in a fun, non-intimidating way. It’s also a great indoor activity that doesn’t involve screens. Easy to assemble and store, this set is a win for sporty toddlers and active families alike.", // ✅ Full review content
      price: '$32.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B0B5ZLCBJM/ref=cm_sw_r_as_gl_api_gl_i_W5FG9Q77ZV9MD0500QF3?linkCode=ml1&tag=more4kids0a-20&linkId=607985130307ccc2500ec486ea6cf4a1 ', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Tiny Land Pikler Triangle Set', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71bm05fTevL._AC_SX679_.jpg', // ✅ Product image
      description: 'A premium indoor climbing triangle with ramp, designed to support toddlers’ motor skill development and imaginative play.', // ✅ Short description
      text: "The Tiny Land Pikler Triangle Set is more than a toy—it’s a growth tool that fosters independence, confidence, and physical development. Built from sturdy wood with a beautifully smooth finish, this Montessori-inspired climber includes a reversible ramp that serves as both a slide and a climbing wall. It encourages toddlers to explore safely, helping them build coordination and strength at their own pace. The set looks stylish enough to blend into modern playrooms, and parents love its foldable design for easy storage. A perfect gift for active toddlers, this set turns climbing into a safe, enriching adventure.", // ✅ Full review content
      price: '$179.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0DF2D5ZXK/ref=cm_sw_r_as_gl_api_gl_i_6BNTAW6FP5BYF84P54Y9?linkCode=ml1&tag=more4kids0a-20&linkId=6b808ac615f44fb5f9372661af1b9f8b', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'SplashEZ Non Slip Splash Pad for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/91knAl6GktL._AC_SX679_.jpg', // ✅ Product image
      description: 'A safe, inflatable splash pad with anti-slip texture—perfect for summer water play without the pool.', // ✅ Short description
      text: "The SplashEZ Non-Slip Splash Pad transforms your backyard into a mini water park, minus the stress and risk of a full pool. Its large, circular design gives kids room to jump, dance, and cool off, while the anti-slip surface adds an extra layer of safety. Parents especially appreciate the simplicity: just hook it up to a garden hose, and it’s ready in minutes. The water height is easily adjustable, so you can customize it for toddlers or bigger kids. It’s a hit for sunny days and an ideal option when you want water fun without deep water concerns.", // ✅ Full review content
      price: '$59.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B0BPYKR658/ref=cm_sw_r_as_gl_api_gl_i_SMA6WYKZ0KAPY6N4B2NF?linkCode=ml1&tag=more4kids0a-20&linkId=b964ded443b32e1f779d2ba233865878 ', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Glintoper Tic Tac Toe & 4 in a Row Table Games Set', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81IJtZUpYsS._AC_SX679_.jpg', // ✅ Product image
      description: 'A wooden 2-in-1 tabletop game set featuring classic Tic Tac Toe and Connect Four in a stylish design.', // ✅ Short description
      text: "This Glintoper Tabletop Game Set adds a modern wooden twist to two beloved classics: Tic Tac Toe and Four in a Row. It's beautifully crafted with a warm, rustic finish that makes it suitable for both playtime and décor. Compact and portable, it’s perfect for coffee tables, road trips, or waiting rooms. Kids enjoy the tactile feel of the wooden pieces, while adults love the nostalgic throwback. It encourages strategy, turn-taking, and face-to-face interaction—something screens can't replicate. Whether you’re gifting it or keeping it for family game nights, this set offers timeless entertainment.", // ✅ Full review content
      price: '$29.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B08HJDML1G/ref=cm_sw_r_as_gl_api_gl_i_S4H71D0H74SVQ1AXKDV8?linkCode=ml1&tag=more4kids0a-20&linkId=00edab15088bc21f991045f3a04baae5 ', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Parachute Toy for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/714G5DBVRfL._AC_SX679_.jpg', // ✅ Product image
      description: 'A classic throw-and-drop toy that simulates a parachute landing, designed for outdoor fun and STEM curiosity.', // ✅ Short description
      text: "The Parachute Toy for Kids is a surprisingly delightful throwback that still captures young imaginations. Kids toss it into the air and watch the tiny figure drift gently down, mimicking a real parachute landing. It’s incredibly simple yet wildly entertaining, especially for outdoor play or park visits. The toy is durable enough for rough use, and its tangle-free parachute design means less time untangling and more time flying. Parents often use it to introduce basic STEM principles like gravity, drag, and air resistance in a hands-on way. A small but mighty toy that punches above its price.", // ✅ Full review content
      price: '$9.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B071G6B3Q1/ref=cm_sw_r_as_gl_api_gl_i_MP22KJ0JCNMW4GH642KT?linkCode=ml1&tag=more4kids0a-20&linkId=323fb3042ced9ae6d1583142fc9c3be0 ', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Gamie Duck Pond Matching Carnival Game for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81ViMEXdSWL._AC_SX679_.jpg', // ✅ Product image
      description: 'A colorful duck matching game that floats in water—perfect for outdoor parties, learning, and fun.', // ✅ Short description
      text: "The Gamie Duck Pond Matching Carnival Game is a classic hit that blends water fun with early learning. Kids scoop up floating ducks to find matching numbers or symbols hidden underneath, helping improve memory, number recognition, and motor skills. It’s easy to set up in a small pool or large tub and instantly turns any gathering into a mini carnival. The plastic ducks are durable, bright, and just the right size for little hands. Ideal for preschoolers, birthday parties, or classroom activities, this game offers both entertainment and educational value in one splashy package.", // ✅ Full review content
      price: '$35.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B01I40OAVW/ref=cm_sw_r_as_gl_api_gl_i_WMWCWPP011FGXTNX0221?linkCode=ml1&tag=more4kids0a-20&linkId=02b219db3163a5a5e0c99c186f1a0e1c&th=1 ', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Liberry Toddler Golf Set for 1 2 3 4 Years Old', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71NukOWBOvL._AC_SX679_.jpg', // ✅ Product image
      description: 'A colorful, lightweight golf toy set designed to develop hand-eye coordination and motor skills in toddlers.', // ✅ Short description
      text: "The Liberry Toddler Golf Set is an adorable introduction to sports for your littlest golfer. It comes with oversized clubs, easy-to-hit balls, and a portable bag—all sized perfectly for toddlers. The materials are sturdy and safe, while the bright colors keep kids engaged and eager to play. This toy helps boost coordination, focus, and early athletic interest in a pressure-free way. Parents love that it encourages active play indoors or outdoors, and the compact design makes it easy to take along to parks or grandparent visits. A great first sports set for budding athletes.", // ✅ Full review content
      price: '$32.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0C3GHZXL7/ref=cm_sw_r_as_gl_api_gl_i_RWQSCRQNHJ9KHB0WRGKP?linkCode=ml1&tag=more4kids0a-20&linkId=59bbbbcc4c33ce570326199cbc9f1007', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'CWLAKON Outdoor Games', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71V1B33dCHL._AC_SX679_.jpg', // ✅ Product image
      description: 'A fun-filled toss game set with rings, bean bags, and cones—designed for competitive family play or party activities.', // ✅ Short description
      text: "The CWLAKON Outdoor Games set is a backyard must-have for families who love friendly competition. It includes a variety of classic games like ring toss, cone races, and bean bag throws—all made with vibrant, kid-safe materials. The setup encourages teamwork, coordination, and physical activity, making it perfect for birthday parties, school field days, or lazy weekend fun. What makes this set shine is its versatility—you can mix and match the components for new game ideas and difficulty levels. It's also lightweight and packable, which is a huge bonus for travel or on-the-go events.", // ✅ Full review content
      price: '$29.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B073X2QTGK/ref=cm_sw_r_as_gl_api_gl_i_dl_NDCM9J93K1S9NGTFRK13?linkCode=ml1&tag=more4kids0a-20&linkId=75a73036a13724403e9cb3114746da69 ', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'hapray 4 Pack Bird House Crafts for Kids Ages 5-8 8-12', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71hlIvqh8EL._AC_SX679_.jpg', // ✅ Product image
      description: 'A DIY birdhouse painting kit with wooden houses and art supplies—perfect for creative kids and nature lovers.', // ✅ Short description
      text: "The hapray Bird House Crafts kit is a delightful mix of creativity, learning, and outdoor appreciation. Each set includes four wooden birdhouses, paint, brushes, and hanging cords, giving kids everything they need to create a colorful home for backyard birds. The wood is smooth and pre-cut, making assembly frustration-free even for younger children (with a little adult help). Painting the houses taps into kids' imagination, and hanging them outside brings a strong sense of pride and connection to nature. This kit is perfect for rainy days, classroom crafts, or birthday party activities—and it doubles as a charming backyard decoration once finished.", // ✅ Full review content
      price: '$24.97', // ✅ Price
      link: ' https://www.amazon.com/dp/B08F998VHB/ref=cm_sw_r_as_gl_api_gl_i_YZEDF3YP5PPRYRCPHCJT?linkCode=ml1&tag=more4kids0a-20&linkId=e119724ba7d295753b0f7b5663fcb0f2', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Magnetic Fishing Game Pool Toys for Kids 3-5,', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/812vOYM3LpL._AC_SX679_.jpg', // ✅ Product image
      description: 'A colorful magnetic fishing toy set designed for water play, hand-eye coordination, and early learning.', // ✅ Short description
      text: "This Magnetic Fishing Game is a summertime favorite that keeps toddlers entertained for hours. It includes a variety of fish and sea creatures that float in water and can be caught using magnetic fishing rods—great for bathtub fun, pool play, or indoor water bins. The magnets are strong enough for satisfying catches, and the vibrant animal designs help with color and shape recognition. It’s also a clever way to boost patience, focus, and coordination. Lightweight and easy to clean, this toy set is ideal for family travel or setting up an impromptu splash station at home.", // ✅ Full review content
      price: '$21.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B0D8KVQZHM/ref=cm_sw_r_as_gl_api_gl_i_SCYRBPVW7WWYTHBE29K5?linkCode=ml1&tag=more4kids0a-20&linkId=7cd5df3b4aa0d5dd83c203a0b73108f2 ', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Flower Garden Building Toy with Insect Pegs', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81-R0wmGm3L._AC_SX679_.jpg', // ✅ Product image
      description: 'A build-your-own garden toy set featuring colorful flower pieces, stacking stems, and cute bug figures.', // ✅ Short description
      text: "This Flower Garden Building Toy is a charming STEM set that helps little ones explore creativity and biology at the same time. Kids can design endless flower arrangements by stacking vibrant petals, stems, and leaves onto a garden base—no watering needed! The addition of bug pegs like bees and ladybugs adds storytelling possibilities and teaches basic ecology. It’s made from durable, safe plastic and easy to clean after use. Ideal for indoor play or sensory bins, this toy encourages fine motor skills, pattern recognition, and imaginative play. Parents appreciate how it turns learning into hands-on fun.", // ✅ Full review content
      price: '$36.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B08Z7PC9MJ/ref=cm_sw_r_as_gl_api_gl_i_242AP280KB6MKV042X7G?linkCode=ml1&tag=more4kids0a-20&linkId=6eccb2e657390f45669468b990db74f7', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>{blogMeta.title} | My Toy Scout</title>
        <meta name="description" content={blogMeta.description} />

        {/* Facebook Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mytoyscout.netlify.app${blogMeta.slug}`} />
        <meta property="og:title" content={`${blogMeta.title} | My Toy Scout`} />
        <meta property="og:description" content={blogMeta.description} />
        <meta property="og:image" content={blogMeta.image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://mytoyscout.netlify.app${blogMeta.slug}`} />
        <meta name="twitter:title" content={`${blogMeta.title} | My Toy Scout`} />
        <meta name="twitter:description" content={blogMeta.description} />
        <meta name="twitter:image" content={blogMeta.image} />

        {/* Schema Markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blogMeta.title,
            "description": blogMeta.description,
            "image": blogMeta.image,
            "author": { "@type": "Person", "name": "Rafael Agredano" },
            "publisher": {
              "@type": "Organization",
              "name": "My Toy Scout",
              "logo": {
                "@type": "ImageObject",
                "url": "https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png"
              }
            },
            "datePublished": blogMeta.datePublished
          })}
        </script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">{blogMeta.title}</h1> {/* ✅ Change title display */}

      <div className="space-y-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full md:w-1/3 h-48 object-cover rounded mb-4 md:mb-0 md:mr-6"
            />

            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>

              {/* ⭐ Badge Rating System */}
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-yellow-400 text-xl ${i < product.rating ? '' : 'opacity-20'}`}>
                    🟰
                  </span>
                ))}
                <span className="ml-2 text-sm text-gray-600">{product.rating}/5 Scout Badges</span>
              </div>

              <p className="text-gray-700 mb-2">{product.text}</p> {/* ✅ Full review */}
              <p className="text-sm text-gray-500 mb-2">{product.description}</p> {/* ✅ Short description */}
              <p className="text-green-600 font-bold mb-4">{product.price}</p> {/* ✅ Price */}

              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Buy Now on Amazon
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekendBackyardToysFall;