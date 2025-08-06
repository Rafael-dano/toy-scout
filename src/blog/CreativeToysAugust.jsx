
import React from 'react';
import { Helmet } from "react-helmet"

// change links to this page
// find new products that fit niche then change them out

const CreativeAug = () => {
  const products = [
    {
        title: ' Upgrade Dinosaur Kids Camera',
        image: ' https://m.media-amazon.com/images/I/71ZZlAO08TL._AC_SX679_.jpg',
        description: ' Gifts for Girls Boys 3-12, 1080P HD Selfie Digital Video Camera for Toddlers, Cute Portable Little Girls Boys Gifts Toys for 3 4 5 6 7 8 9 Years Old.',
        text: "The Upgrade Dinosaur Kids Camera is the perfect blend of playful design and real tech, turning every little moment into a photo-worthy adventure. Shaped like a fun, colorful dinosaur, this camera instantly grabs your child’s attention and inspires creativity through photography. With upgraded photo quality, video recording features, and simple navigation built for tiny fingers, it helps kids build storytelling skills and memory-making habits. Parents love that it’s durable, rechargeable, and offers hours of screen-free exploration. While it’s not meant to rival high-end cameras, it absolutely nails the balance of fun, learning, and usability for kids ages 3 and up.",
        price: '$29.99',
        link: ' https://www.amazon.com/dp/B0BX6NR39M/ref=cm_sw_r_as_gl_api_gl_i_V8X4XDVX3F3GEZ3CZVK1?linkCode=ml1&tag=more4kids0a-20&linkId=128d64c02650bdca033bee826a988317&th=1',
      },
      {
        title: 'Geyoga 10 Pcs Kids Community Helper Dress Up Vest ',
        image: ' https://m.media-amazon.com/images/I/813bCMj-c1L._AC_SX679_.jpg',
        description: ' Community Helper Dress Up Vest Career Cosplay Cloth Toddlers Occupation Pretend Play Costume (3-5 Years).',
        text: "Spark your child’s imagination and introduce them to real-world roles with the Geyoga 10 Pcs Kids Community Helper Dress Up Vest set. This colorful collection includes vests for firefighters, doctors, police officers, and more—perfect for career day, pretend play, or themed parties. Made from soft, breathable fabric that fits a range of ages, it promotes empathy, creativity, and role-play learning. While some pieces might feel thin compared to costumes with extra accessories, the sheer variety and educational value of this set make it a fantastic choice for group play or classroom activities.",
        price: '$19.99',
        link: ' https://www.amazon.com/dp/B08LDM8S3F/ref=cm_sw_r_as_gl_api_gl_i_N30BPSTN5Y1VAKKX1KNB?linkCode=ml1&tag=more4kids0a-20&linkId=0e565dc4929805a8b38706f4898866a3&th=1',
      },
      {
        title: ' 3Doodler Start+ Essentials',
        image: ' https://m.media-amazon.com/images/I/718RCZd31UL._AC_SX679_.jpg',
        description: ' 3D Pen Set for Kids, Easy to Use, Learn from Home Art Activity Set, Educational STEM Toy for Boys & Girls Ages 6+.',
        text: "Bring ideas to life in 3D with the 3Doodler Start+ Essentials pen—a STEM-powered creative tool that lets kids draw objects in the air! Unlike traditional crafts, this kit includes eco-friendly, child-safe plastic strands that cool instantly for easy handling. It's an incredible introduction to design thinking and spatial awareness, making it ideal for budding inventors, artists, and engineers. Though it takes a few tries to get the hang of it, the learning curve is part of the magic. The endless design potential, hands-on engagement, and screen-free focus make this one a favorite for parents and educators alike.",
        price: '$49.10',
        link: 'https://www.amazon.com/dp/B086JQQHPK/ref=cm_sw_r_as_gl_api_gl_i_0BVJV4PNB5HEZW5KCKH8?linkCode=ml1&tag=more4kids0a-20&linkId=adfa6d2659b6871889bb7300881ce661 ',
      },
      {
        title: ' 5-Pack Stepping Stones for Kids with Sound Effects ',
        image: ' https://m.media-amazon.com/images/I/712b4OEij-L._AC_SX679_.jpg',
        description: 'Balance & Coordination Toys for Toddlers Ages 3+, Indoor/Outdoor Play with Interactive Sensory Feedback.',
        text: "Jump, balance, and giggle your way to active play with the 5-Pack Stepping Stones for Kids featuring built-in sound effects. These vibrant stepping pads encourage movement, coordination, and imaginative play—whether creating an obstacle course or a lava floor challenge. The playful sounds add a sensory twist that keeps kids laughing while moving. While batteries will need occasional replacement and volume levels might vary, the sheer energy this toy brings to indoor or outdoor play is unbeatable. It’s more than a toy—it’s a full-body adventure that builds gross motor skills through joyful exploration.",
        price: '$45.99',
        link: ' https://www.amazon.com/dp/B0DSP9ZGKR/ref=cm_sw_r_as_gl_api_gl_i_04GVPPNTBPE3XYR7V21Z?linkCode=ml1&tag=more4kids0a-20&linkId=bb648527adc79ef9c9e02e11d25a7d9a',
      },
      {
        title: ' Klever Kits 180+ Magic Set- My First Magic Trick Kit',
        image: ' https://m.media-amazon.com/images/I/81L8q2OE+8L._AC_SX679_.jpg',
        description: ' Amazing Magician Toy with Step-by-Step Video Lessons, for Kids Aged 6+ Easy Tricks of Wand and Illusion Cards.',
        text: "Transform your child into the next great magician with the Klever Kits 180+ Magic Set. This enchanting starter kit includes over 180 tricks ranging from classic illusions to beginner-friendly sleight-of-hand. It’s perfect for boosting confidence, social skills, and patience as kids learn and perform jaw-dropping tricks for family and friends. The included guide is easy to follow, though younger kids may need help getting started. Still, the joy of pulling off their first trick is unforgettable. It’s a screen-free, skill-building bundle of fun that turns any living room into a magic show stage.",
        price: '$29.99',
        link: 'https://www.amazon.com/dp/B0DJ93KDQ6/ref=cm_sw_r_as_gl_api_gl_i_TG52RS6X2K2AAHK7YFGN?linkCode=ml1&tag=more4kids0a-20&linkId=84616e4301757c187ca2190b363b9ddc ',
      },
      {
        title: ' Creative Kids Magic Bouncy Balls ',
        image: ' https://m.media-amazon.com/images/I/815vHbD6bHL._AC_SX679_.jpg',
        description: '  DIY STEM Toys - Science Kit for Kids - 25 Multicolor Bags & 5 Molds Makes Up to 43 Balls.',
        text: "The Creative Kids Magic Bouncy Balls kit is an explosion of color, creativity, and science all packed into one hands-on activity. This DIY set lets children mix and mold vibrant, high-bounce balls in a variety of shapes and sizes, sparking excitement with every step. It's a fantastic mix of crafting and STEM learning, allowing young creators to witness chemistry in action while expressing their individuality. While the balls don’t last forever and can lose bounce over time, the process is where the real magic lies. This kit is perfect for birthday parties, rainy day activities, or weekend crafts that end with fun, squishy results.",
        price: '$17.99',
        link: ' https://www.amazon.com/dp/B078KKQ343/ref=cm_sw_r_as_gl_api_gl_i_5667MQRP3T44MZRXJT12?linkCode=ml1&tag=more4kids0a-20&linkId=c5f87218d938119f3707e01dec9ef030&th=1',
      },
      {
        title: ' iPlay, iLearn Rocket Space Toys',
        image: ' https://m.media-amazon.com/images/I/81vOrDl6JoL._AC_SX679_.jpg',
        description: ' Kids Spaceship Playset W/Space Shuttle, 2 Astronauts, Educational STEM Take Apart Outer Space Adventure W/Electric Drill, Gift for 3 4 5 6 7 8 Year Old Boy Girl.',
        text: "Blast off into imagination with the iPlay, iLearn Rocket Space Toys—a set that takes kids on an interstellar journey right from the living room. Designed to fuel dreams of space exploration, this rocket-themed kit includes figures, launchers, and interactive features that inspire pretend play and curiosity about the cosmos. Built with kid-friendly materials and bold designs, it encourages hand-eye coordination and storytelling. Some pieces may be better suited for older toddlers, but overall, the set launches hours of educational fun with just one countdown.",
        price: '$43.99',
        link: 'https://www.amazon.com/dp/B0BYYV9185/ref=cm_sw_r_as_gl_api_gl_i_B3YGTC2MMD348DJ6RJ0B?linkCode=ml1&tag=more4kids0a-20&linkId=180bffed76cfeb0e807f764be5a10190 ',
      },
      {
        title: ' Dan&Darci Kids Rock Painting Kit ',
        image: 'https://m.media-amazon.com/images/I/812+xR9XGoL._AC_SX679_.jpg',
        description: ' Glow in The Dark - Arts & Crafts Gifts for Boys and Girls Ages 6-12 - Craft Activities Kits - Creative Art Toys for 6, 7, 8, 9, 10, 11 & 12 Year Old Kid.',
        text: "Let creativity roll with the Dan&Darci Kids Rock Painting Kit—a tactile, imaginative set that turns ordinary stones into extraordinary works of art. This kit includes smooth rocks, vibrant paints, brushes, and fun extras like stickers and googly eyes, inviting endless artistic expression. It’s more than just a craft—it’s a mindfulness activity that teaches patience, precision, and pride in handmade creations. While younger children may need help with the finer details, the outcome is a personalized masterpiece they’ll be proud to show off. Ideal for family bonding, class projects, or relaxing afternoons.",
        price: '$24.98',
        link: ' https://www.amazon.com/dp/B0BRNY9HZB/ref=cm_sw_r_as_gl_api_gl_i_MYT6ZJVE0V898G9MPQN1?linkCode=ml1&tag=more4kids0a-20&linkId=b911a200890e52a77194b61cb18c5fa5',
      },
      {
        title: ' Paint Spin Art Machine Kit for Kids ',
        image: ' https://m.media-amazon.com/images/I/81HS4rWNeVL._AC_SX679_.jpg',
        description: ' Arts & Crafts for Boys & Girls Ages - Art Craft Set Gifts for 6-9 Year Old Boy, Girl- Cool Painting Spinner Toys Kits - Birthday Gift Ideas for Ages 6-12 Years.',
        text: "Get ready to spin, splash, and smile with the Paint Spin Art Machine Kit—a thrilling way for kids to create dazzling, abstract artwork. This battery-powered spinner turns blank paper into bursts of colorful magic using safe, washable paints and simple controls. It’s an artful blend of creativity and sensory stimulation, turning every spin into a surprise masterpiece. While cleanup might take a few extra minutes, the excitement and satisfaction of seeing their design unfold in real-time is well worth it. This kit is a surefire hit for little artists craving motion, color, and fun all at once.",
        price: '$29.98',
        link: ' https://www.amazon.com/dp/B0CJYKM4FT/ref=cm_sw_r_as_gl_api_gl_i_3HR621NCKTHCQGZ4QSA4?linkCode=ml1&tag=more4kids0a-20&linkId=907166311d6d0f89f37e4a3458a1fe59',
      },
      {
        title: ' Super Z Outlet Liquid Motion Bubbler',
        image: 'https://m.media-amazon.com/images/I/61fWhdG0LQL._AC_SX679_.jpg',
        description: ' Motion Bubbler for Sensory Play, Fidget Toy, Children Activity, Desk Top, Assorted Colors (4 Pack).',
        text: "The Super Z Outlet Liquid Motion Bubbler is the ultimate visual toy that captivates kids and calms their minds. With colorful bubbles flowing slowly down through liquid chambers, it acts like a mini lava lamp, offering stress relief and sensory play in one mesmerizing package. It's perfect for children who benefit from visual stimulation or need a fidget-friendly desk companion. While it’s more soothing than hands-on interactive, its quiet charm and hypnotic appeal make it a standout among sensory toys. Great for calming corners, classrooms, or just winding down after play.",
        price: '$19.99',
        link: ' https://www.amazon.com/dp/B07L372Q2P/ref=cm_sw_r_as_gl_api_gl_i_VSN56AK6VX3FYKGAXRJM?linkCode=ml1&tag=more4kids0a-20&linkId=ae356896dec48603ab51a96014ca05b0&th=1',
      },
      {
        title: ' Magnetic Tiles Kids Toys',
        image: ' https://m.media-amazon.com/images/I/81i-qidPfrL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        description: ' STEM Magnet Toy for Toddler Magnetic Blocks Building Preschool Learning Sensory Montessori Toys for 3+ Year Old Boys and Girls, Safe Creativity Toddler Kids Toy 40PCS.',
        text: "Let your child’s imagination rise sky-high with the Magnetic Tiles Kids Toys set—a colorful and endlessly creative STEM building toy that turns any playroom into an architectural wonderland. These magnetic tiles click together effortlessly, making it fun for kids to construct towers, houses, rockets, and even abstract shapes. It’s an incredible tool for developing spatial reasoning, problem-solving, and fine motor skills, all while having fun. The magnets are strong and the pieces durable, though supervision may be needed to keep smaller tiles from wandering off. This set encourages collaboration and solo play, making it a must-have for both quiet afternoons and group fun.",
        price: '$29.98',
        link: ' https://www.amazon.com/dp/B0BGLTYW59/ref=cm_sw_r_as_gl_api_gl_i_TWR82RANBPNNCVFVSR7A?linkCode=ml1&tag=more4kids0a-20&linkId=58282b2537eadd747f98cbe694a66c32',
      },
      {
        title: ' Snap Circuits Jr. SC-100 Electronics Exploration Kit',
        image: ' https://m.media-amazon.com/images/I/91THy3rMlCL._AC_SX679_.jpg',
        description: ' Over 100 Projects, Full Color Project Manual, 28 Parts, STEM Educational Toy for Kids 8 +.',
        text: "Give your budding engineer the tools to discover how electricity works with the Snap Circuits Jr. SC-100. This award-winning electronics kit introduces kids to real-world STEM concepts in the most fun and safe way possible—through hands-on building! With over 100 possible projects, like light switches, alarms, and music circuits, the learning opportunities are endless. All parts snap into place without tools, making it frustration-free and incredibly engaging. While younger kids may need help reading the diagrams, the satisfaction of seeing their creations come to life is unmatched. This kit is a confidence-building powerhouse disguised as a toy.",
        price: '$29.99',
        link: ' https://www.amazon.com/dp/B00008BFZH/ref=cm_sw_r_as_gl_api_gl_i_53KH53DVZA3BGRAX849Q?linkCode=ml1&tag=more4kids0a-20&linkId=9610a87a7e0ba53b3824ac22fd1688db&th=1',
      },
      {
        title: '269 PCS Racing Tracks Toy ',
        image: ' https://m.media-amazon.com/images/I/91k7B-giGPL._AC_SX679_.jpg',
        description: ' Track Car Toys, 269 PCS Racing Tracks Toy, Create A Frozen World Race Road, Flexible Tracks Playset & 2 PCS Cool Race Cars, Toddler Toys Birthday Gifts for Age 3 4 5 6 Year Old Boys Girls.',
        text: "Fuel up the fun with this massive 269 PCS Racing Tracks Toy set that transforms any surface into a twisty, turbo-charged speedway. Kids can snap the flexible tracks together to create custom racecourses, complete with loops, bridges, and glowing cars that zoom through with flair. The sheer size and adaptability of the set make it a standout for creative minds and motor-loving kids alike. While setting it up might take some adult guidance, the excitement that comes from racing cars through a maze of tracks makes it totally worth it. It’s high-speed adventure meets imaginative design in one vibrant package.",
        price: '$29.99',
        link: ' https://www.amazon.com/dp/B0CS393LDM/ref=cm_sw_r_as_gl_api_gl_i_EM9NKY6E2XKC3RPGD3YN?linkCode=ml1&tag=more4kids0a-20&linkId=dc1b52cf844d719082f7c93a6c42b126&th=1',
      },
      {
        title: ' Aqua Fairy Water Gel Kit for Kids ',
        image: ' https://m.media-amazon.com/images/I/81zOXYyoExL._AC_SX679_.jpg',
        description: 'Magic Elf Toy Kits - Waters Pets - DIY Squishy Maker Set - Craft for Kids - Make Your Own Squishies Toys Crafts for Boys & Girls.',
        text: "Enter a dreamy, magical world of color and texture with the Aqua Fairy Water Gel Kit for Kids. This hands-on craft experience lets little ones mix water beads, glitter, and fairy figurines into their very own sensory wonderland. It’s part art project, part sensory play, and all-around fun. The tactile squish of the gel and the shimmering effects of the fairyland keep kids engaged and delighted for hours. While cleanup may take a few extra minutes, the wow-factor and replay value make it an enchanting choice for birthday gifts or rainy day creativity.",
        price: '$24.99',
        link: ' https://www.amazon.com/dp/B0DDLZV8YM/ref=cm_sw_r_as_gl_api_gl_i_BWCPJ1DM48D419DE3Q75?linkCode=ml1&tag=more4kids0a-20&linkId=acc601a9628b77d31c53bc0db8be5405',
      },
      {
        title: ' Skillmatics Storybook Art Kit ',
        image: ' https://m.media-amazon.com/images/I/81aOaj43KQL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        description: ' Create Space-Themed Stories, DIY Craft & Writing Kit with 300+ Stickers, Scrapbooking & Journal Activity, Gifts for Kids Ages 5, 6, 7, 8, 9, 10.',
        text: "Unleash your child’s inner author and artist with the Skillmatics Storybook Art Kit, a unique combo that brings storytelling and craft together in one engaging set. Kids can design characters, build plots, and illustrate their very own hardcover book—all while boosting literacy and creativity in a fun, interactive way. The kit includes prompts to spark ideas, materials for drawing, and even a guide for structure. While younger kids may need a little help getting started, the joy of seeing their very own storybook take shape is priceless. This is more than a craft—it’s a creative milestone.",
        price: '$17.97',
        link: ' https://www.amazon.com/dp/B0CWP691RW/ref=cm_sw_r_as_gl_api_gl_i_FM5CFEG92BTRDHBCYS9B?linkCode=ml1&tag=more4kids0a-20&linkId=26350598377abe0486001dfe2a5e8f72&th=1',
      },
      // the one below is a campaign
      {
        title: ' Gskyer Telescope,',
        image: ' https://m.media-amazon.com/images/I/71cb2RCy+aL._AC_SX466_.jpg',
        description: ' 70mm Aperture 400mm AZ Mount Astronomical Refracting Telescope for Kids Beginners - Travel Telescope with Carry Bag, Phone Adapter and Wireless Remote.',
        text: "Unlock the mysteries of the night sky and ignite a lifelong love of astronomy with the Gskyer Telescope. Designed for beginners and budding space enthusiasts, this telescope delivers crisp, clear images of the moon, planets, and even distant stars. The included adjustable tripod, finder scope, and smartphone adapter make it perfect for kids and families to explore the universe together. While the initial setup may take a little patience, the payoff is an awe-inspiring view that brings science to life. It’s not just a telescope—it’s a gateway to wonder and learning under the stars.",
        price: '$129.99',
        link: 'https://www.amazon.com/dp/B081RJ8DW1/ref=cm_sw_r_as_gl_api_gl_i_dl_27TV5X4PT9P1NET36X7B?linkCode=ml1&tag=more4kids0a-20&linkId=a2c156362f5ff82e2b77ddcad7f94e05&th=1 ',
      },
      {
        title: ' 13 Pieces Montessori Kitchen Toys for Toddlers-Kids',
        image: ' https://m.media-amazon.com/images/I/71WO58rtgoL._AC_SX679_.jpg',
        description: ' Toddlers-Kids Cooking Sets Real-Toddler Toys Set for Real Cooking with Plastic Children Safe Knives Crinkle Cutter Kids Cutting Board.',
        text: "Let your little chef whip up hours of imaginative fun with this 13-piece Montessori Kitchen Toy Set. Built with toddler-safe utensils and realistic play food, this set nurtures creativity, hand-eye coordination, and early independence. Whether they’re “cooking” alongside you or hosting a pretend dinner party, this set offers open-ended play that mimics the real world. The wooden pieces are sturdy and eco-friendly, though very young toddlers may need guidance with the smaller accessories. It’s a perfect gift for screen-free, hands-on learning in the playroom or preschool setting.",
        price: '$18.99',
        link: ' https://www.amazon.com/dp/B0CY2BZ96Q/ref=cm_sw_r_as_gl_api_gl_i_ZTPEE25HGD1CS8JH8MXW?linkCode=ml1&tag=more4kids0a-20&linkId=9a2b8920ac0017a8bb59b057994e580a&th=1',
      },
      {
        title: ' Doctor Kit for Toddlers 3-5',
        image: ' https://m.media-amazon.com/images/I/712Q8zNt-cL._AC_SX679_.jpg',
        description: ' Preschool Pretend Play Medical Kit with Stethoscope, Blood Pressure Cuff and Carrying Bag- Dress Up Toys for Kids Ages 3+ Years.',
        text: "Turn fear into fun with this adorable Doctor Kit for Toddlers, perfect for ages 3 to 5. Packed with kid-sized tools like a stethoscope, thermometer, syringe, and even pretend bandages, this set encourages empathy, imaginative role play, and early confidence-building. The materials are safe and durable, and the carrying case makes cleanup a breeze. While older kids may outgrow it quickly, it’s ideal for introducing toddlers to medical environments in a positive and playful way. From teddy bear checkups to family wellness exams, this kit makes caring cool.",
        price: '$14.99',
        link: 'https://www.amazon.com/dp/B0C53H9PMV/ref=cm_sw_r_as_gl_api_gl_i_BA57ZBKXWNM4JP2A1VVT?linkCode=ml1&tag=more4kids0a-20&linkId=9df5aa1af4ab6f6aa770381ba2a09390&th=1 ',
      },
      {
        title: ' Doctor Jupiter My First Science Kit ',
        image: ' https://m.media-amazon.com/images/I/81GHHBD3DTL._AC_SX679_.jpg',
        description: ' for Kids Ages 4-5-6-7-8| Birthday Gift Ideas for 4-8-12 Year Old Boys & Girls| Toy Stem Kit with 100+ Experiments| Learning & Educational, Preschool Activities.',
        text: "Inspire future scientists with the Doctor Jupiter My First Science Kit—a vibrant, hands-on introduction to STEM that turns curiosity into discovery. This kit is packed with fun and safe experiments using real science tools, colorful ingredients, and easy instructions. Kids can make volcanoes, mix potions, and learn how reactions work in a way that feels like pure magic. It’s the perfect balance of educational and entertaining. While the kit is best suited for younger children, it offers repeatable activities and enough variety to keep them coming back for more learning fun.",
        price: '$32.99',
        link: ' amazon.com/dp/B09XGMHGJ3/ref=cm_sw_r_as_gl_api_gl_i_GEZ8FNH0M2CQFYP5YMH3?linkCode=ml1&tag=more4kids0a-20&linkId=62d8a63c0c2118fa4e8a12b4f23e2563',
      },
      {
        title: 'VTech Kidi Star DJ Mixe ',
        image: ' https://m.media-amazon.com/images/I/71dzE+SButS._AC_SX679_.jpg',
        description: ' Mix and jam with a DJ turntable, 15 built-in songs and 2000+ sound combinations.',
        text: "Take center stage and let your child unleash their inner DJ with the VTech Kidi Star DJ Mixer. This interactive music station lets kids mix beats, record vocals, scratch like a pro, and create custom light shows—all from the comfort of their room. It’s loaded with sound effects and music tracks to fuel creativity, self-expression, and rhythm skills. While the volume might be a bit high for quiet homes, the excitement and confidence it brings out in kids are undeniable. Whether they’re jamming solo or throwing a living room concert, it’s a party in a box.",
        price: '$59.99',
        link: ' https://www.amazon.com/dp/B08V85CZM7/ref=cm_sw_r_as_gl_api_gl_i_6Z815WDQP2XR6QN4QAG5?linkCode=ml1&tag=more4kids0a-20&linkId=5ec4767c7d95bc7bf7e8a3daf943249b&th=1',
      },
];
return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>Top Toys to Spark Creativity in August | My Toy Scout</title>
        <meta
          name="description"
          content="These creative toys—from DIY kits to imaginative playsets—are perfect for kids looking to build, paint, craft, and create."
        />
         {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mytoyscout.netlify.app/blog/creative-toys-august" />
        <meta property="og:title" content="Top Toys to Spark Creativity in August | My Toy Scout" />
        <meta property="og:description" content="These creative toys—from DIY kits to imaginative playsets—are perfect for kids looking to build, paint, craft, and create." />
        <meta property="og:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mytoyscout.netlify.app/blog/creative-toys-august" />
        <meta name="twitter:title" content="Top Toys to Spark Creativity in August | My Toy Scout" />
        <meta name="twitter:description" content="These creative toys—from DIY kits to imaginative playsets—are perfect for kids looking to build, paint, craft, and create." />
        <meta name="twitter:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />
           <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Top Toys to Spark Creativity in August",
      "description": "These creative toys—from DIY kits to imaginative playsets—are perfect for kids looking to build, paint, craft, and create.",
      "image": "https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png",
      "author": {
        "@type": "Person",
        "name": "Rafael Agredano"
      },
      "publisher": {
        "@type": "Organization",
        "name": "My Toy Scout",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png"
      },
      "datePublished": "2025-08-06"
    }
          })}
        </script>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Top Toys to Spark Creativity in August</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-2"><strong><bold>Description:   </bold></strong>{product.description}</p>
            <p className="text-green-500 font-bold mb-2"><strong><bold>Review:   </bold></strong>{product.text}</p>
            <p className="text-green-600 font-bold mb-4">{product.price}</p>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Buy on Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreativeAug;