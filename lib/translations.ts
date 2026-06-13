export type Locale = 'en' | 'ar';

// Use a structural type: each locale can have its own string values
export type Translations = {
  nav: { home: string; products: string; about: string; contact: string };
  hero: { badge: string; brandName: string; tagline: string; subtitle: string; cta: string; secondary: string };
  lumiere: { label: string; title: string; subtitle: string; description: string; cta: string };
  collections: {
    title: string;
    subtitle: string;
    leReve: { label: string; name: string; tagline: string; description: string };
    coffeeNoir: { label: string; name: string; tagline: string; description: string };
    cta: string;
  };
  philosophy: {
    title: string;
    subtitle: string;
    description: string;
    items: readonly { title: string; desc: string }[ ];
  };
  closing: { title: string; description: string; cta: string };
  products: {
    title: string;
    subtitle: string;
    viewDetails: string;
    ingredients: string;
    benefits: string;
    howToUse: string;
    scent: string;
    shopAll: string;
  };
  about: {
    title: string;
    subtitle: string;
    story: string;
    storyP2: string;
    storyP3: string;
    philosophy: string;
    philosophyText: string;
    valuesTitle: string;
    values: readonly { title: string; desc: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
  };
  footer: {
    tagline: string;
    rights: string;
    quickLinks: string;
  };
};

export const translations = {
  en: {
    nav: {
      home: 'Home',
      products: 'The Collection',
      about: 'Our Maison',
      contact: 'Contact',
    },
    hero: {
      badge: 'Luxury Haircare House',
      brandName: 'Maison Hoyam',
      tagline: 'Where light becomes hair',
      subtitle: 'A luxury haircare house built around light, elegance, and transformation.',
      cta: 'Discover Lumière',
      secondary: 'Our Maison',
    },
    lumiere: {
      label: 'Signature Serum',
      title: 'Lumière',
      subtitle: 'Smooth. Shine. Illuminate.',
      description: 'A luminous blend of Argan and Camellia Oils for irresistibly soft, silky, and radiant hair. Designed to smooth, protect, and enhance your hair\'s natural beauty with every drop.',
      cta: 'Discover Lumière',
    },
    collections: {
      title: 'The Collections',
      subtitle: 'Two worlds. One maison.',
      leReve: {
        label: 'Soft Care Collection',
        name: 'Le Rêve',
        tagline: 'Softness reimagined. A dream of silky nourishment.',
        description: 'A botanical treatment crafted for those who seek the softest touch. Cold-pressed Argan oil meets sweet almond and rosemary in a formula designed to restore deep moisture and rebuild natural elasticity.',
      },
      coffeeNoir: {
        label: 'Deep Repair Collection',
        name: 'Café Noir',
        tagline: 'Deep strength. Intense repair for luxurious hair vitality.',
        description: 'An indulgent coffee ritual for scalp and hair. Premium Arabica grounds and brown sugar crystals gently exfoliate while organic almond oil nourishes — awakening both the senses and the scalp.',
      },
      cta: 'Explore the Collection',
    },
    philosophy: {
      title: 'Light. Care. Transformation.',
      subtitle: 'Our Philosophy',
      description: 'At Maison Hoyam, we believe that true beauty begins with light — the kind that comes from within, the kind that transforms. Every formulation is crafted to bring radiance, softness, and elegance to your hair, turning daily care into a moment of luxury.',
      items: [
        { title: 'Radiant Formulas', desc: 'Crafted to bring luminous shine and silky brilliance to every strand.' },
        { title: 'Botanical Purity', desc: 'Only the finest cold-pressed oils, hand-harvested botanicals, and pure essential extracts.' },
        { title: 'Sensory Luxury', desc: 'Every texture, every scent, every sensation is designed to delight and transform.' },
        { title: 'French Elegance', desc: 'Small-batch formulations created with the precision and care of French artisanship.' },
      ],
    },
    closing: {
      title: 'Your light awaits.',
      description: 'Discover the luxury of Lumière — the serum that defines Maison Hoyam.',
      cta: 'Discover the Ritual',
    },
    products: {
      title: 'The Collection',
      subtitle: 'Four rituals. One philosophy of light.',
      viewDetails: 'Explore This Ritual',
      ingredients: 'Precious Ingredients',
      benefits: 'The Experience',
      howToUse: 'The Ritual',
      scent: 'Signature Scent',
      shopAll: 'Explore the Full Collection',
    },
    about: {
      title: 'Our Maison',
      subtitle: 'A luxury haircare house built around light',
      story: 'Maison Hoyam was born from a simple yet profound belief: that the most beautiful hair begins with light. Founded in the heart of the UAE, our maison draws inspiration from the timeless elegance of French beauty traditions and the extraordinary power of nature\'s finest botanicals.',
      storyP2: 'At the center of our universe is Lumière — a signature serum that captures the essence of everything we believe in: radiance, transformation, and effortless luxury. Every product we create orbits around this philosophy of light.',
      storyP3: 'From Le Rêve\'s silky nourishment to Café Noir\'s deep repair, each collection serves a purpose — but they all lead back to one truth: beautiful hair begins with the right kind of care.',
      philosophy: 'Our Philosophy',
      philosophyText: 'We believe that beauty is a ritual, not a routine. That the most transformative moments happen when you slow down, breathe in the scent of fresh botanicals, and give yourself permission to indulge. Every Maison Hoyam product is designed to be that moment — a pause in your day where luxury meets intention.',
      valuesTitle: 'Our Values',
      values: [
        { title: 'Purity', desc: 'Zero compromises. No parabens, no silicones, no sulfates — only what your hair truly needs.' },
        { title: 'Sustainability', desc: 'Ethically sourced ingredients and eco-conscious packaging that honors the earth.' },
        { title: 'Craftsmanship', desc: 'Small-batch formulations created with the precision and care of French artisanship.' },
        { title: 'Sensory Beauty', desc: 'Every texture, every scent, every sensation is designed to delight.' },
      ],
    },
    contact: {
      title: 'Begin Your Journey',
      subtitle: 'Whether you\'re seeking your perfect ritual or exploring a partnership, we\'d love to hear from you.',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      subject: 'Subject',
      message: 'Your Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent beautifully! We\'ll be in touch soon.',
      error: 'Something went wrong. Please try again.',
      namePlaceholder: 'Enter your name',
      emailPlaceholder: 'Enter your email',
      phonePlaceholder: '+971 XX XXX XXXX',
      subjectPlaceholder: 'What is this about?',
      messagePlaceholder: 'Tell us more...',
    },
    footer: {
      tagline: 'Luxury Haircare House',
      rights: 'All rights reserved.',
      quickLinks: 'Quick Links',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      products: 'المجموعة',
      about: 'ميزوننا',
      contact: 'اتصلي بنا',
    },
    hero: {
      badge: 'دار العناية الفاخرة بالشعر',
      brandName: 'ميزون هويام',
      tagline: 'حيث يصبح الضوء شعراً',
      subtitle: 'دار عناية فاخرة بالشعر مبنية حول الضوء والأناقة والتحول.',
      cta: 'اكتشفي لوميير',
      secondary: 'ميزوننا',
    },
    lumiere: {
      label: 'السيروم المميز',
      title: 'لوميير',
      subtitle: 'نعومة. لمعان. إشراقة.',
      description: 'مزيج مضيء من زيت الأرкان وزيت الكاميليا يمنح الشعر نعومة حريرية ولمعاناً أخاذاً. صُمم لتنعيم الشعر وحمايته وإبراز جماله الطبيعي مع كل قطرة.',
      cta: 'اكتشفي لوميير',
    },
    collections: {
      title: 'المجموعات',
      subtitle: 'عالمان. دار واحدة.',
      leReve: {
        label: 'مجموعة العناية الناعمة',
        name: 'لو ريف',
        tagline: 'نعومة مُعاد تخيلها. حلم من التغذية الحريرية.',
        description: 'علاج نباتي مصمم لأولئك الذين يبحثون عن أنعم لمسة. يلتقي زيت الأرغان المعصور على البارد باللوز الحلو وإكليل الجبل في تركيبة تهدف إلى استعادة الرطوبة العميقة وإعادة بناء المرونة الطبيعية.',
      },
      coffeeNoir: {
        label: 'مجموعة الإصلاح العميق',
        name: 'كافيه نوار',
        tagline: 'قشّر. نقِّ. جدّد.',
        description: 'طقس قهوة فاخر لفروة الرأس والشعر. حبيبات أرابيكا الفاخرة وبلورات السكر البني تقشّر بلطف بينما يغذي زيت اللوز العضوي — لإيقاظ الحواس وفروة الرأس معاً.',
      },
      cta: 'استكشفي المجموعة',
    },
    philosophy: {
      title: 'ضوء. عناية. تحول.',
      subtitle: 'فلسفتنا',
      description: 'في ميزون هويام، نؤمن بأن الجمال الحقيقي يبدأ بالضوء — ذلك الذي يأتي من الداخل، ذلك الذي يحوّل. كل تركيبة مصنوعة لجلب الإشراق والنعومة والأناقة لشعرك، لتحويل العناية اليومية إلى لحظة فخامة.',
      items: [
        { title: 'تركيبات مشعّة', desc: 'مصنوعة لجلب لمعان مضيء وبريق حريري لكل خصلة.' },
        { title: 'نقاء نباتي', desc: 'فقط أفضل الزيوت المعصورة على البارد والنباتات المحصودة يدوياً والمستخلصات الأساسية النقية.' },
        { title: 'فخامة حسية', desc: 'كل ملمس، كل عبير، كل إحساس مصمم للبهجة والتحول.' },
        { title: 'أناقة فرنسية', desc: 'تركيبات بدفعات صغيرة مبتكرة بدقة وعناية الحرفية الفرنسية.' },
      ],
    },
    closing: {
      title: 'ضوؤك ينتظرك.',
      description: 'اكتشفي فخامة لوميير — السيروم الذي يُعرّف ميزون هويام.',
      cta: 'اكتشفي الطقس',
    },
    products: {
      title: 'المجموعة',
      subtitle: 'أربعة طقوس. فلسفة واحدة من الضوء.',
      viewDetails: 'استكشفي هذا الطقس',
      ingredients: 'مكونات ثمينة',
      benefits: 'التجربة',
      howToUse: 'الطقس',
      scent: 'العبير المميز',
      shopAll: 'استكشفي المجموعة الكاملة',
    },
    about: {
      title: 'ميزوننا',
      subtitle: 'دار عناية فاخرة بالشعر مبنية حول الضوء',
      story: 'وُلدت ميزون هويام من إيمان بسيط وعميق: أن أجمل شعر يبدأ بالضوء. تأسست في قلب الإمارات، تستلهم ميزوننا من الأناقة الخالدة لتقاليد الجمال الفرنسية والقوة الاستثنائية لأفضل نباتات الطبيعة.',
      storyP2: 'في قلب عالمنا لوميير — سيروم مميز يلتقط جوهر كل ما نؤمن به: الإشراق والتحول والفخامة بلا عناء. كل منتج نبتكره يدور حول فلسفة الضوء هذه.',
      storyP3: 'من تغذية لو ريف الحريرية إلى إصلاح كافيه نوار العميق، كل مجموعة تخدم غرضاً — لكنها جميعاً تعود إلى حقيقة واحدة: الشعر الجميل يبدأ بالعناية الصحيحة.',
      philosophy: 'فلسفتنا',
      philosophyText: 'نؤمن بأن الجمال طقس وليس روتين. أن أكثر اللحظات تحويلاً تحدث عندما تتباطئين، وتتنفسين عبير النباتات الطازجة، وتمنحين نفسك إذناً بالاستمتاع. كل منتج من ميزون هويام مصمم ليكون تلك اللحظة — وقفة في يومك حيث تلتقي الفخامة بالقصد.',
      valuesTitle: 'قيمنا',
      values: [
        { title: 'النقاء', desc: 'بدون تنازلات. لا بارابين، لا سيليكون، لا سلفات — فقط ما يحتاجه شعرك حقاً.' },
        { title: 'الاستدامة', desc: 'مكونات من مصادر أخلاقية وتغليف صديق للبيئة يحترم الأرض.' },
        { title: 'الحرفية', desc: 'تركيبات بدفعات صغيرة مبتكرة بدقة وعناية الحرفية الفرنسية.' },
        { title: 'الجمال الحسي', desc: 'كل ملمس، كل عبير، كل إحساس مصمم للبهجة.' },
      ],
    },
    contact: {
      title: 'ابدئي رحلتك',
      subtitle: 'سواء كنتِ تبحثين عن طقسك المثالي أو تستكشفين شراكة، يسعدنا سماعك.',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      subject: 'الموضوع',
      message: 'رسالتك',
      send: 'إرسال الرسالة',
      sending: 'جارِ الإرسال...',
      success: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
      error: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
      namePlaceholder: 'أدخلي اسمك',
      emailPlaceholder: 'أدخلي بريدك الإلكتروني',
      phonePlaceholder: '+971 XX XXX XXXX',
      subjectPlaceholder: 'ما موضوع رسالتك؟',
      messagePlaceholder: 'أخبرينا المزيد...',
    },
    footer: {
      tagline: 'دار العناية الفاخرة بالشعر',
      rights: 'جميع الحقوق محفوظة.',
      quickLinks: 'روابط سريعة',
    },
  },
} as const;

export const productData = [
  {
    id: 'lumiere-hair-serum',
    image: '/images/lumiere-hair-serum.jpg',
    isHero: true,
    collection: 'lumiere',
    en: {
      name: 'Lumière',
      tagline: 'Smooth. Shine. Illuminate.',
      description: 'A luminous blend of Argan and Camellia Oils for irresistibly soft, silky, and radiant hair. Designed to smooth, protect, and enhance your hair\'s natural beauty with every drop.',
      price: 500,
      discountPrice: 200,
      ingredients: ['Cold-Pressed Argan Oil', 'Lavender Essential Oil', 'Vitamin E Complex', 'Jojoba Seed Oil'],
      benefits: ['Mirror-like shine without weight', 'Frizz control that lasts all day', 'Heat protection up to 230°C', 'Silky, touchable softness'],
      scent: 'A delicate whisper of Provençal lavender layered over warm vanilla and a hint of fresh bergamot.',
      ritual: [
        'Warm 2-3 drops between your palms.',
        'Gently press and smooth through damp or dry hair, mid-lengths to ends.',
        'Breathe in the calming lavender scent.',
        'Style as desired — your hair will thank you with luminous shine all day.',
      ],
    },
    ar: {
      name: 'لوميير',
      tagline: 'نعومة. لمعان. إشراقة.',
      description: 'مزيج مضيء من زيت الأرкان وزيت الكاميليا يمنح الشعر نعومة حريرية ولمعاناً أخاذاً. صُمم لتنعيم الشعر وحمايته وإبراز جماله الطبيعي مع كل قطرة.',
      price: 500,
      discountPrice: 200,
      ingredients: ['زيت أرغان معصور على البارد', 'زيت اللافندر الأساسي', 'مركب فيتامين هـ', 'زيت بذور الجوجوبا'],
      benefits: ['لمعان كالمرآة بدون ثقل', 'تحكم بالتجعد يدوم طوال اليوم', 'حماية من الحرارة حتى 230 درجة', 'نعومة حريرية ملموسة'],
      scent: 'همسة رقيقة من لافندر بروفانس فوق الفانيليا الدافئة ولمسة من البرغموت الطازج.',
      ritual: [
        'دفئي 2-3 قطرات بين راحتي يديك.',
        'اضغطي ومرري بلطف على الشعر الرطب أو الجاف، من الأطراف الوسطى إلى النهايات.',
        'استنشقي عبير اللافندر المهدئ.',
        'صففي كما تريدين — سيشكرك شعرك بلمعان مضيء طوال اليوم.',
      ],
    },
  },
  {
    id: 'le-reve-botanical-oil',
    image: '/images/le-reve-hair-oil.jpg',
    isHero: false,
    collection: 'le-reve',
    en: {
      name: 'Le Rêve Botanical',
      tagline: 'Nourish. Strengthen. Transform.',
      description: 'A luxurious botanical treatment for stronger roots and healthier-looking hair.',
      price: 500,
      discountPrice: 200,
      ingredients: ['Argan Oil', 'Castor Oil', 'Rosemary Extract', 'Sweet Almond Oil'],
      benefits: ['Restores deep moisture to parched hair', 'Rebuilds elasticity and strength', 'Reduces breakage and split ends', 'Natural radiance and vitality'],
      scent: 'An earthy, grounding blend of rosemary and cedarwood, softened by sweet almond and a whisper of rose.',
      ritual: [
        'Apply generously to dry hair before washing, or use as an overnight treatment.',
        'Massage from scalp to tips with slow, intentional strokes.',
        'Wrap in a warm towel and let the botanicals work for 20–30 minutes.',
        'Rinse, wash gently, and reveal hair that feels reborn.',
      ],
    },
    ar: {
      name: 'لو ريف بوتانيكال',
      tagline: 'غذّي. قوّي. جدّدي.',
      description: 'علاج نباتي فاخر مصمم لتغذية الجذور وتعزيز قوة الشعر ليبدو أكثر صحة وحيوية.',
      price: 500,
      discountPrice: 200,
      ingredients: ['زيت الأرغان', 'زيت الخروع', 'مستخلص إكليل الجبل', 'زيت اللوز الحلو'],
      benefits: ['يستعيد الرطوبة العميقة للشعر الجاف', 'يعيد بناء المرونة والقوة', 'يقلل التكسر والأطراف المتقصفة', 'إشراق وحيوية طبيعية'],
      scent: 'مزيج ترابي مرسخ من إكليل الجبل وخشب الأرز، ملطف باللوز الحلو وهمسة من الورد.',
      ritual: [
        'ضعيه بسخاء على الشعر الجاف قبل الغسل، أو استخدميه كعلاج ليلي.',
        'دلكي من فروة الرأس إلى الأطراف بحركات بطيئة ومقصودة.',
        'لفي بمنشفة دافئة ودعي النباتات تعمل لمدة 20-30 دقيقة.',
        'اشطفي، اغسلي بلطف، واكشفي عن شعر يشعر بالولادة من جديد.',
      ],
    },
  },
  {
    id: 'coffee-noir-scrub',
    image: '/images/coffee-scalp-scrub.jpg',
    isHero: false,
    collection: 'coffee-noir',
    en: {
      name: 'Café Noir',
      tagline: 'Exfoliate. Purify. Awaken.',
      description: 'An indulgent coffee scalp ritual designed to exfoliate, purify, and awaken the scalp. Enriched with premium coffee grounds to help remove impurities and reveal a fresher, healthier-looking scalp.',
      price: 500,
      discountPrice: 200,
      ingredients: ['Arabica Coffee Grounds', 'Brown Sugar Crystals', 'Organic Almond Oil', 'Essential Oil Blend'],
      benefits: ['Gently removes product buildup', 'Stimulates blood circulation', 'Refreshes and energizes the scalp', 'Leaves skin silky smooth'],
      scent: 'The rich, intoxicating aroma of freshly ground coffee with warm notes of cocoa and a touch of cinnamon.',
      ritual: [
        'Scoop a generous amount and warm between your fingers.',
        'Apply to damp scalp (or body) in gentle circular motions.',
        'Take a moment — breathe in the rich coffee aroma and let it awaken your senses.',
        'Rinse thoroughly and feel the difference — a clean, energized, silky-smooth finish.',
      ],
    },
    ar: {
      name: 'كافيه نوار',
      tagline: 'قشّر. نقِّ. جدّد.',
      description: 'طقس فاخر للعناية بفروة الرأس بالقهوة، صُمم لتقشيرها وتنقيتها وتجديد حيويتها. غني بحبيبات القهوة الفاخرة للمساعدة على إزالة الشوائب والكشف عن فروة رأس أكثر انتعاشاً وصحة.',
      price: 500,
      discountPrice: 200,
      ingredients: ['حبيبات قهوة أرابيكا', 'بلورات السكر البني', 'زيت اللوز العضوي', 'مزيج زيوت أساسية'],
      benefits: ['يزيل ترسبات المنتجات بلطف', 'يحفز الدورة الدموية', 'ينعش وينشط فروة الرأس', 'يترك البشرة ناعمة كالحرير'],
      scent: 'عبير القهوة المطحونة الطازجة الغني والمسكر مع نوتات دافئة من الكاكاو ولمسة من القرفة.',
      ritual: [
        'اغرفي كمية سخية ودفئيها بين أصابعك.',
        'ضعيها على فروة الرأس الرطبة (أو الجسم) بحركات دائرية لطيفة.',
        'خذي لحظة — استنشقي عبير القهوة الغني ودعيه يوقظ حواسك.',
        'اشطفي جيداً واشعري بالفرق — لمسة نظيفة ومنشطة وناعمة كالحرير.',
      ],
    },
  },
  {
    id: 'lumiere-night-elixir',
    image: '/images/lumiere-night-elixir.jpg',
    isHero: false,
    collection: 'lumiere',
    en: {
      name: 'Lumière Night',
      tagline: 'Restore. Repair. Renew.',
      description: 'A luxurious overnight hair elixir crafted to nourish, restore, and revitalize your hair while you sleep. Wake up to softer, smoother, and healthier-looking hair every morning.',
      price: 500,
      discountPrice: 200,
      ingredients: ['Argan Oil', 'Camellia Oil', 'Vitamin E Complex', 'Lavender Extract'],
      benefits: ['Deep overnight nourishment', 'Restores damaged hair while you sleep', 'Softer, smoother hair by morning', 'Lightweight, non-greasy formula'],
      scent: 'A calming blend of lavender and chamomile with soft notes of vanilla and sandalwood.',
      ritual: [
        'Apply a few drops to clean, towel-dried hair before bed.',
        'Gently distribute from mid-lengths to ends.',
        'Let the elixir work its magic overnight.',
        'Wake up to beautifully nourished, radiant hair.',
      ],
    },
    ar: {
      name: 'لوميير نايت',
      tagline: 'رمّمي. أصلحي. جدّدي.',
      description: 'إكسير ليلي فاخر للشعر صُمم لتغذيته وترميمه واستعادة حيويته أثناء النوم. استيقظي كل صباح بشعر أكثر نعومة وانسيابية ومظهراً أكثر صحة.',
      price: 500,
      discountPrice: 200,
      ingredients: ['زيت الأرغان', 'زيت الكاميليا', 'مركب فيتامين هـ', 'مستخلص اللافندر'],
      benefits: ['تغذية عميقة أثناء الليل', 'يستعيد الشعر التالف أثناء النوم', 'شعر أنعم وأكثر انسيابية بحلول الصباح', 'تركيبة خفيفة غير دهنية'],
      scent: 'مزيج مهدئ من اللافندر والبابونج مع نوتات ناعمة من الفانيليا وخشب الصندل.',
      ritual: [
        'ضعي بضع قطرات على الشعر النظيف المجفف بالمنشفة قبل النوم.',
        'وزعيه بلطف من الأطراف الوسطى إلى النهايات.',
        'دعي الإكسير يعمل سحره طوال الليل.',
        'استيقظي على شعر مغذّى ومشع بجمال.',
      ],
    },
  },
  {
    id: 'citrine-glow',
    image: '/images/citrine-glow.webp',
    isHero: false,
    collection: 'citrine',
    en: {
      name: 'Citrine Glow',
      tagline: 'Brighten. Refresh. Illuminate.',
      description: 'Not all radiance is seen—some of it is felt. Born from the belief that self-care is more than a routine, Citrine Glow transforms everyday moments into rituals of beauty and stillness. Inspired by the warmth of sunlight and the purity of citrus, it invites you to slow down and reconnect with yourself. Its velvety texture glides like a whisper of light upon the skin, leaving behind a feeling of softness, freshness, and quiet luxury.',
      price: 500,
      discountPrice: 200,
      ingredients: ['Lemon Extract', 'Himalayan Salt', 'Jojoba Oil', 'Sunflower Seed Oil', 'Vitamin C Complex'],
      benefits: ['Brightens and energizes tired skin', 'Gently exfoliates for a smooth finish', 'Promotes natural radiance and glow', 'Leaves skin feeling refreshed and renewed'],
      scent: 'A vibrant citrus symphony with bright lemon and bergamot, elevated by subtle notes of vanilla and sea salt.',
      ritual: [
        'Warm a generous amount between your palms.',
        'Apply in gentle circular motions on damp skin.',
        'Breathe in the energizing citrus aroma.',
        'Rinse thoroughly and feel the radiance within.',
      ],
    },
    ar: {
      name: 'لمعان السترين',
      tagline: 'أشرقي. انتعشي. تألقي.',
      description: 'ليس كل إشراق يُرى بالعين، فبعضه يُشعر به القلب. وُلد لمعان السترين من فلسفة تؤمن بأن العناية بالنفس ليست رفاهية، بل لحظة عودة إلى الذات. مزيج حسي مستوحى من دفء الشمس ونقاء الحمضيات، ليحوّل روتين العناية اليومي إلى طقس من السكينة والجمال. بملمسه المخملي ورائحته المشرقة، ينساب على البشرة كهمسة من الضوء، تاركاً خلفه إحساساً بالنقاء والنعومة والانتعاش.',
      price: 500,
      discountPrice: 200,
      ingredients: ['مستخلص الليمون', 'ملح الهيمالايا', 'زيت الجوجوبا', 'زيت بذور عباد الشمس', 'مركب فيتامين سي'],
      benefits: ['يضيء البشرة المرهقة ويجددها', 'يقشر برفق للحصول على ملمس ناعم', 'يعزز الإشراقة والتوهج الطبيعي', 'يترك البشرة منتعشة ومتجددة'],
      scent: 'سيمفونية حمضيات نابضة بحياة مع ليمون مشرق وبرغموت، مرفوعة بنوتات دقيقة من الفانيليا وملح البحر.',
      ritual: [
        'دفئي كمية سخية بين راحتي يديك.',
        'ضعيها بحركات دائرية لطيفة على بشرة رطبة.',
        'استنشقي عبير الحمضيات المنعش.',
        'اشطفي جيداً واشعري بالإشراقة من الداخل.',
      ],
    },
  },
  {
    id: 'rose-de-nuit',
    image: '/images/rose-de-nuit.webp',
    isHero: false,
    collection: 'rose',
    en: {
      name: 'Rose de Nuit',
      tagline: 'Indulge. Soothe. Restore.',
      description: 'When the world grows quiet, the most beautiful rituals begin. Created as an invitation to slow down, Rose de Nuit captures the timeless elegance of blooming roses beneath the moonlight. A sensorial experience designed to transform self-care into a moment of serenity and indulgence. Its velvety texture melts into the skin like silk, leaving behind a feeling of softness, comfort, and quiet luxury. Inspired by moonlit gardens and the art of slow beauty, Rose de Nuit embodies the grace of evenings devoted to rest, reflection, and renewal.',
      price: 500,
      discountPrice: 200,
      ingredients: ['Rose Petal Extract', 'Brown Sugar Crystals', 'Camellia Oil', 'Shea Butter', 'Rose Absolute'],
      benefits: ['Deeply nourishes and softens skin', 'Removes dead skin for a silky smooth finish', 'Calms and soothes with rose extract', 'Promotes a luxurious, peaceful evening ritual'],
      scent: 'A sophisticated floral bouquet of fresh rose petals mingled with subtle notes of chamomile, sandalwood, and a whisper of vanilla.',
      ritual: [
        'Scoop a generous amount and warm between your fingers.',
        'Apply to damp skin with slow, intentional strokes.',
        'Take a moment to breathe and reconnect with yourself.',
        'Rinse gently and wrap yourself in the serene feeling of luxurious self-care.',
      ],
    },
    ar: {
      name: 'ورد الليل',
      tagline: 'انغمسي. هدّئي. رمّمي.',
      description: 'حين يهدأ العالم، تبدأ أكثر الطقوس جمالاً. صُمم ورد الليل ليكون دعوة للتوقف والهدوء، حيث يلتقط أناقة الورود المتفتحة تحت ضوء القمر. تجربة حسية صُممت لتحويل العناية بالنفس إلى لحظة من السكينة والرفاهية. بملمسه المخملي وملمسه الحريري على البشرة، يترك خلفه إحساساً بالنعومة والراحة والترف الهادئ. مستوحى من حدائق الورد تحت ضوء القمر وفن الجمال البطيء، يجسد ورد الليل أناقة الليالي المكرسة للراحة والتأمل والتجديد.',
      price: 500,
      discountPrice: 200,
      ingredients: ['مستخلص بتلات الورد', 'بلورات السكر البني', 'زيت الكاميليا', 'زبدة الشيا', 'عطر الورد المطلق'],
      benefits: ['يغذي البشرة بعمق ويلينها', 'يزيل الجلد الميت للحصول على ملمس ناعم وحريري', 'يهدئ ويهيج مع مستخلص الورد', 'يعزز طقس مسائي فاخر وهادئ'],
      scent: 'باقة زهرية متطورة من بتلات الورد الطازجة مختلطة مع نوتات دقيقة من البابونج وخشب الصندل وهمسة من الفانيليا.',
      ritual: [
        'اغرفي كمية سخية ودفئيها بين أصابعك.',
        'ضعيها على بشرة رطبة بحركات بطيئة ومقصودة.',
        'خذي لحظة للتنفس والعودة إلى ذاتك.',
        'اشطفي برفق وانغمسي في شعور الرفاهية والعناية الذاتية السكينة.',
      ],
    },
  },
];
