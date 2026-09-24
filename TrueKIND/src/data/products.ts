export interface Product {
  id: string;
  slug: string;
  title: string;
  price: number;
  originalPrice: number;
  volume: string;
  category: string;
  range: string;
  description: string;
  about: string;
  themeBackground: string;
  themeButton: string;
  image: string;
  image2: string;
  aboutImage: string;
  keyIngredients: Array<{ title: string; description: string; imageUrl: string }>;
  ingredientsFormula: Array<{ title: string; ewg: string; concentration: string }>;
  suitableFor: string;
  recommendedFor: string;
  usage: {
    when: string;
    how: string;
    goodToKnow: string;
    dose: string;
    precautions: string;
  };
  faqs: Array<{ question: string; answer: string }>;
  rating: number;
  reviewsCount: number;
}

export const PRODUCTS: Product[] = [
  {
    "id": "vitamin-c-15-brightening-serum",
    "slug": "vitamin-c-15-brightening-serum",
    "title": "Vitamin C 15% Brightening Serum",
    "price": 899,
    "originalPrice": 1124,
    "volume": "30 ML",
    "category": "Serums",
    "range": "C Luminance",
    "description": "Your Glow-Up in a bottle. This skin elixir is a brilliant cocktail of brightening & revitalizing ingredients, Combining a potent dose of direct-acting Vitamin C (Ethyl Ascorbic Acid) with Niacinamide, Hyaluronic Acid, and Natural AHAs.",
    "about": "Slowly but surely, this lightweight serum will brighten skin and visibly improve its tone, texture, and clarity. Vitamins B and C work together to target discoloration and unevenness, while the natural AHAs gently exfoliate your dead cells to leave you luminous, like you’re 'lit from within.",
    "themeBackground": "#F3D7AF",
    "themeButton": "#C5AB87",
    "image": "https://images.prismic.io/truekind/ZurTmbVsGrYSviws_1.jpg?auto=format,compress",
    "image2": "https://images.prismic.io/truekind/ZurTm7VsGrYSviwu_2.jpg?auto=format,compress",
    "aboutImage": "https://images.prismic.io/truekind/Z9b3GDiBA97Gihj__3.VitaminC15BrighteningSerum.jpg.jpg?auto=format,compress",
    "keyIngredients": [
      {
        "title": "Ethyl Ascorbic Acid",
        "description": "Ethyl Ascorbic Acid, a potent Vitamin C derivative and antioxidant, brightens dull skin, fades dark spots, boosts collagen, and clarifies skin tone and texture.",
        "imageUrl": "https://images.prismic.io/truekind/Z9b4bDiBA97GihkM_1.Ethyl-Ascorbic-Acid-Vitamin-C-1.jpg?auto=format,compress"
      },
      {
        "title": "Hyaluronic Acid",
        "description": "A natural skin component, it holds 1000x its weight in water, boosting moisture, soothing dryness, and defending against moisture loss for hydrated and plump skin.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SEjDiBA97Gigj__hyaluronic-acid.jpg?auto=format,compress"
      },
      {
        "title": "Niacinamide",
        "description": "Multi-tasking skincare superstar with anti-aging, brightening, and barrier repair benefits. It accelerates epidermal cell growth and boosts collagen production for smoother, brighter skin.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SEjTiBA97GigkA_niacinamide.jpg?auto=format,compress"
      },
      {
        "title": "Natural AHA blend",
        "description": "This blend of Vaccinium myrtillus, Sugarcane, Orange, Lemon & Sugar Maple gently exfoliates, revealing a radiant and even-toned complexion, free of dark spots and imperfections.",
        "imageUrl": "https://images.prismic.io/truekind/Z9b4aziBA97GihkL_3.Natural-AHA-blend-Alpha-Hydroxy-Acid.jpg?auto=format,compress"
      }
    ],
    "ingredientsFormula": [
      {
        "title": "Aqua",
        "ewg": "1",
        "concentration": "30% to 50%"
      },
      {
        "title": "1% Hyaluronic Acid Solution",
        "ewg": "1",
        "concentration": "25% to 40%"
      },
      {
        "title": "Ethyl Ascorbic Acid",
        "ewg": "1",
        "concentration": "17% to 18%"
      },
      {
        "title": "Water & Vaccinium Myrtillus Fruit/ Leaf Extract & Saccharum Officinarum (Sugar Cane) Extract & Citrus Fruit Extract & Citrus Limon (Lemon) Fruit Extract & Acer Saccharum (Sugar Maple) Extract",
        "ewg": "1, 1, 1, 2-4, 1-2, 1",
        "concentration": "2.5% to 5%"
      },
      {
        "title": "Niacinamide",
        "ewg": "1",
        "concentration": "2% to 3%"
      },
      {
        "title": "Caprylyl Glycol (and) Phenoxythanol",
        "ewg": "1, 2-4",
        "concentration": "≤ 1%"
      },
      {
        "title": "Xantham Gum",
        "ewg": "1",
        "concentration": "≤ 0.3%"
      },
      {
        "title": "Sodium Hydroxide",
        "ewg": "1",
        "concentration": "≤ 0.1%"
      }
    ],
    "suitableFor": "[object Object], [object Object]",
    "recommendedFor": "[object Object], [object Object], [object Object]",
    "usage": {
      "when": "AM & PM.",
      "how": "Apply 3-4 drops on your cleansed face and neck. Wait a few minutes before making your next skincare move.",
      "goodToKnow": "Use after cleansing and toning and before moisturising During the day, always follow through the Moisturiser or SPF.",
      "dose": "Daily.",
      "precautions": "External use only."
    },
    "faqs": [
      {
        "question": "Can I use other serums with Vitamin C?",
        "answer": "Yes. Vitamin C layers & combines well with other actives & products."
      },
      {
        "question": "Should I apply Vitamin C once or twice a day?",
        "answer": "Vitamin C is most effectively used on the skin in the morning. It can be useful in the evening to repair and quicken the healing of skin."
      },
      {
        "question": "What is the correct way to store a Vitamin C serum?",
        "answer": "To keep your vitamin C serum from degrading or losing efficacy, take care of the serum so it will take care of you! Keep it in a cool, dark place with its cap intact."
      },
      {
        "question": "What colour should my Vitamin C serum be?",
        "answer": "Your serum should be clear, white, or a light champagne colour."
      },
      {
        "question": "Why is there no Vitamin C in the ingredient details of this product?",
        "answer": "We have Ethyl Ascorbic Acid which is one of the purest forms of Vitamin C which is used in our serum."
      }
    ],
    "rating": 4.8,
    "reviewsCount": 38
  },
  {
    "id": "bha-tea-tree-acne-clearing-toneressence",
    "slug": "bha-tea-tree-acne-clearing-toneressence",
    "title": "BHA & Tea Tree Acne Clearing Toner/Essence",
    "price": 899,
    "originalPrice": 1124,
    "volume": "120 ML",
    "category": "Toners",
    "range": "Clear Difference",
    "description": "Take the fight against acne to the next level with this exfoliating Toner/ Essense/Serum featuring a potent, heavy-hitting blend of ingredients including 2% Salicylic Acid, Azelaic Acid, Tea Tree and a powerful Adaptogenic Anti Acne Herb Blend that will help reducing breakouts, blackouts and in promoting a more even looking complexion.",
    "about": "See an immediate and dramatic improvement in the skin’s appearance with reduced blackheads, breakouts, and spots. The Power Duo of Salicylic Acid and Azelaic Acid work alongside anti-inflammatory and anti-bacterial herbs, penetrating deep to unclog pores, fight blackheads, and diminish marks, revealing a clearer, smoother, healthier radiance.",
    "themeBackground": "#C2CDDE",
    "themeButton": "#9FADC3",
    "image": "https://images.prismic.io/truekind/Z9b18ziBA97Gihj7_bha-%26-tea-tree-acne-clearing-toner.jpg?auto=format,compress",
    "image2": "https://images.prismic.io/truekind/ZurTBrVsGrYSviuY_2.jpg?auto=format,compress",
    "aboutImage": "https://images.prismic.io/truekind/Z9bv6DiBA97Gihjf_3.BHA%26TeaTreeAcneClearingToner.jpg?auto=format,compress",
    "keyIngredients": [
      {
        "title": "2% Salicylic Acid",
        "description": "A beta hydroxy acid proven to combat acne-prone skin, exfoliate dead skin cells, and reverse dull, uneven skin tone.",
        "imageUrl": "https://images.prismic.io/truekind/Z9bySDiBA97Gihju_2._Salycilic-acid.jpg?auto=format,compress"
      },
      {
        "title": "Adaptogenic Anti-Acne Herb Blend",
        "description": "A potent blend (32-38%) of 9 healing herbs, including Coriander, Turmeric, and Neem, offers anti-bacterial, anti-inflammatory, and anti-oxidant properties to calm irritated skin and combat acne.",
        "imageUrl": "https://images.prismic.io/truekind/Z9ST5TiBA97GigoY_adaptogenic-herb-blend.jpg?auto=format,compress"
      },
      {
        "title": "Tea Tree",
        "description": "This ingredient manages mild to moderate acne and offers broad-spectrum antimicrobial benefits, with over 100 compounds having antibacterial, antiviral, and antifungal properties.",
        "imageUrl": "https://images.prismic.io/truekind/Z9byRziBA97Gihjt_5._Tea_Tree.jpg?auto=format,compress"
      },
      {
        "title": "Azelaic Acid",
        "description": "Azelaic acid, as Potassium Azeloyl Diglycinate, is a proven exfoliant that fades acne marks, unclogs pores and refines skin texture.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R61DiBA97Gigh8_azelaic-acid.jpg?auto=format,compress"
      },
      {
        "title": "Witch Hazel",
        "description": "Rich in antioxidants like tannins, this ingredient offers anti-inflammatory and healing benefits. Its astringent properties also help tighten skin pores.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R61ziBA97Gigh__witch-hazel.jpg?auto=format,compress"
      },
      {
        "title": "Allantoin",
        "description": "A multi-tasking ingredient that moisturizes, soothes itchy skin, and heals injured skin, providing comprehensive skin care benefits.",
        "imageUrl": "https://images.prismic.io/truekind/Z9buNTiBA97GihjQ_2.Allantoin.jpg?auto=format,compress"
      }
    ],
    "ingredientsFormula": [
      {
        "title": "Aqua",
        "ewg": "1",
        "concentration": "28% to 35%"
      },
      {
        "title": "Turmeric (Haldi) (Curcuma longa) Extract, Lodhra (Symplocos racemosa) Extract, Black Mustard (Mohari)(Brassica nigra) Extract, Sweet Flag (Vekhand)(Acorus calamus) Extract, Coriander (Dhane)(Coriandrum sativum) Extract, Nutmeg (Jayfal)(Myristica fragrans) Extract",
        "ewg": "1",
        "concentration": "28% to 35%"
      },
      {
        "title": "Rose (Rosa Damascena) hydrosol",
        "ewg": "1",
        "concentration": "18% to 24%"
      },
      {
        "title": "Glycerin (and) Water (and) Hamamelis Virginiana (Witch Hazel) Extract",
        "ewg": "1-2, 1, 1",
        "concentration": "5% to 7%"
      },
      {
        "title": "Propanediol",
        "ewg": "2",
        "concentration": "3% to 5%"
      },
      {
        "title": "Salicylic Acid (and) Dextrin (and) Polydextrose (and) Amylopectin (and) Niacinamide",
        "ewg": "1-3, 1, 1, 1,1",
        "concentration": "3% to 5%"
      },
      {
        "title": "Willow Bark (Salix alba) Extract",
        "ewg": "1",
        "concentration": "1.5% to 2.5%"
      },
      {
        "title": "Potassium Azeloyl Diglycinate",
        "ewg": "1",
        "concentration": "0.8% to 1.5%"
      },
      {
        "title": "Caprylyl Glycol (and) Phenoxyethanol",
        "ewg": "1, 2-4",
        "concentration": "0.8% to 1.2%"
      },
      {
        "title": "Sodium Hydroxide",
        "ewg": "1-4",
        "concentration": "< 0.8%"
      },
      {
        "title": "Heptyl Glucoside",
        "ewg": "1",
        "concentration": "< 0.5%"
      },
      {
        "title": "Tea Tree (Melaleuca alternifolia)",
        "ewg": "1",
        "concentration": "< 0.5%"
      },
      {
        "title": "Allantoin",
        "ewg": "1",
        "concentration": "< 0.5%"
      }
    ],
    "suitableFor": "[object Object], [object Object]",
    "recommendedFor": "[object Object], [object Object], [object Object], [object Object], [object Object]",
    "usage": {
      "when": "AM & PM.",
      "how": "Saturate a cotton pad & wipe in sweeping, outward motions. Do not rinse. Alternatively, gently pat 1-2 drops into the face and neck.",
      "goodToKnow": "Do not use alongside other exfoliating acids or retinol.",
      "dose": "Daily.",
      "precautions": "External use only."
    },
    "faqs": [
      {
        "question": "What is the difference between a BHA’s like Salicylic Acid vs AHA’s like Glycolic?",
        "answer": "Both are chemical exfoliants that help remove dead cells. AHAs help peel away the surface of your skin so that new, evenly pigmented skin cells may generate. Best used to brighten, and to even skin tone. Salicylic acid is oil soluble, which means it has a way of getting way deeper through the oils of your skin’s pores, helping acne prone skin. This mode of action truly benefits skin prone to acne, blemishes and breakouts."
      },
      {
        "question": "Will this burn?",
        "answer": "Some people may experience tingling or slight burning sensations when applying salicylic acids. It’s totally normal and is likely to pass in 5-10 mins, and with continued use, may disappear. However, we do recommend a patch."
      },
      {
        "question": "How often should I use it?",
        "answer": "You can use it daily. Start slowly, apply every other day and progress up to twice daily."
      },
      {
        "question": "How long until I see results on my face?",
        "answer": "It usually takes 6-8 weeks of consistent usage to see results, due the time it takes for the cells to regenerate and turnover."
      },
      {
        "question": "Can I use this in the morning?",
        "answer": "Since salicylic acid makes your skin more sensitive to sunlight, it is best applied in the evening. You can use our cleanser in the mornings because it only contains a small amount of salicylic acid, but it is crucial to use SPF before you head out in the sun."
      },
      {
        "question": "Can I use this at night?",
        "answer": "Salicylic acid should be ideally applied in the evening, as it makes your skin sensitive to sunlight. Applying it at night offers it enough time to work its magic without putting your skin at a greater danger of sun damage."
      },
      {
        "question": "Should I use salicylic acid as a toner or in a serum?",
        "answer": "Fundamentally both serums and toners are leave on skin products. However, apart from balancing the pH when used as a toner, with a cotton pad, it becomes an important extension of your cleaning routine, clearing out impurities your cleansers dint catch. This also helps make the product deposit well."
      },
      {
        "question": "Is it good for teenagers?",
        "answer": "Certainly yes. However if you are new to exfoliating, start slowly – say one to two times a week and slowly build your way up."
      }
    ],
    "rating": 4.8,
    "reviewsCount": 55
  },
  {
    "id": "aha-brightening-exfoliant-cleanserface-wash",
    "slug": "aha-brightening-exfoliant-cleanserface-wash",
    "title": "AHA Brightening Exfoliant Cleanser/Face Wash",
    "price": 899,
    "originalPrice": 1124,
    "volume": "120 ML",
    "category": "Cleansers",
    "range": "Pure Brilliance",
    "description": "Step up your cleansing game with this multi action glow giver that combines a gentle dose of skin care holy grail - Glycolic Acid, along with a mix of potent antioxidants, hydration and restoring agents - Centella asiatica, Turmeric and Licorice.",
    "about": "A boost of anti-oxidant rich nourishing renewal for dull, dry and tired skin, this super-absorbable oil will help with clearing dark spots & blemishes and creating an even-looking, brighter complexion.",
    "themeBackground": "#F1CCCF",
    "themeButton": "#D4969B",
    "image": "https://images.prismic.io/truekind/ZurDj7VsGrYSvh0W_1.jpg?auto=format,compress",
    "image2": "https://images.prismic.io/truekind/ZurDkbVsGrYSvh0X_2.jpg?auto=format,compress",
    "aboutImage": "https://images.prismic.io/truekind/Z9b57jiBA97GihkT_3.AHABrighteningExfoliantCleanser.jpg?auto=format,compress",
    "keyIngredients": [
      {
        "title": "Glycolic Acid",
        "description": "An AHA from sugarcane, it exfoliates, brightens, reduces wrinkles, fades hyperpigmentation, and prevents blackheads. It boosts cell renewal but increases sun sensitivity, so sunscreen is essential.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R60jiBA97Gigh6_glycolic-acid.jpg?auto=format,compress"
      },
      {
        "title": "Centella Asiatica",
        "description": "Gotu Kola, also known as Tiger Grass or CICA, is rich in amino acids, fatty acids, and phytochemicals, including Vitamins C, A, B1, and B2. It's renowned for its healing properties, antioxidants, and antimicrobial benefits, providing anti-inflammatory effects.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R60ziBA97Gigh7_centella-asiatica.jpg?auto=format,compress"
      },
      {
        "title": "Licorice",
        "description": "Glycyrrhiza Glabra Root Extract is a potent antioxidant and UV-fighter that inhibits melanin formation. It's a safe and effective skin-lightening agent, even outperforming hydroquinone.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SXIjiBA97Gigph_licorice.jpg?auto=format,compress"
      },
      {
        "title": "Glycerine",
        "description": "This skincare superstar is a real moisture magnet. As a humectant, it pulls moisture from the air and keeps it in the skin.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SPQziBA97Gigno_glycerine.jpg?auto=format,compress"
      },
      {
        "title": "Coconut Surfactants",
        "description": "This coconut-based surfactant blend provides a gentle, deep clean without disrupting the skin barrier, and is nearly 80% naturally derived and biodegradable.",
        "imageUrl": "https://images.prismic.io/truekind/Z9b67ziBA97Gihkd_6._Coconut_Surfactants.jpg?auto=format,compress"
      }
    ],
    "ingredientsFormula": [
      {
        "title": "Aqua (1)",
        "ewg": "1",
        "concentration": "35% - 55%"
      },
      {
        "title": "Aqua (and) Sodium Lauroyl Methyl Isethionate (and) Cocamidopropyl Betaine (and) Sodium Methyl Oleoyl Taurate (and) Lauryl Glucoside (and) Coco-Glucoside",
        "ewg": "1, 1, 1-5,1 ,1, 1",
        "concentration": "20% - 40%"
      },
      {
        "title": "Cocamidopropyl Betaine",
        "ewg": "1-5",
        "concentration": "5% - 15%"
      },
      {
        "title": "Extracts - Centella asiatica, Glycyrrhiza glabra, Curcuma longa",
        "ewg": "1,4,1",
        "concentration": "5% - 15%"
      },
      {
        "title": "Glycerin",
        "ewg": "1-2",
        "concentration": "2% - 8%"
      },
      {
        "title": "Aqua, Sodium hydroxide",
        "ewg": "1, 1-4",
        "concentration": "2% - 8%"
      },
      {
        "title": "Glycolic acid",
        "ewg": "1-4",
        "concentration": "2.5% - 3%"
      },
      {
        "title": "Caprylyl/Capryl Glucoside",
        "ewg": "1",
        "concentration": "1% - 2%"
      },
      {
        "title": "Caprylyl Glycol (and) Phenoxyethanol",
        "ewg": "1, 2-4",
        "concentration": "0.5% - 1%"
      },
      {
        "title": "Fragrance",
        "ewg": "na",
        "concentration": "0.5% - 1%"
      }
    ],
    "suitableFor": "[object Object], [object Object]",
    "recommendedFor": "[object Object], [object Object], [object Object], [object Object], [object Object]",
    "usage": {
      "when": "AM & PM.",
      "how": "Apply a small amount to wet skin. Work into a lather & massage into skin for 60 Seconds. Rinse thoroughly & pat dry.",
      "goodToKnow": "Increases your skin’s sensitivity to the sun. Follow up with SPF. Not recommended for sensitive skin. Patch test advised",
      "dose": "Daily.",
      "precautions": "External use only."
    },
    "faqs": [
      {
        "question": "How many times should I use this?",
        "answer": "It is advisable to begin using any new product slowly before increasing the frequency once your skin has had time to adjust to it. Start 3-4 times a week & slowly settle into a daily routine."
      },
      {
        "question": "I already use an exfoliating scrub, should I continue with that after I use this cleanser?",
        "answer": "You do not need to include a separate facial scrub in your routine because this cleanser doubles as an exfoliator & cleanser. Scrubs that physically exfoliate are harsher on your skin (eg: walnut scrub, coffee scrub). If you want to continue using face scrubs, it is advised that you reduce your usage to once per week."
      },
      {
        "question": "Will this make me break out?",
        "answer": "Any active skincare ingredients that increase the rate of cellular turnover can cause your skin to purge. A mild dose of glycolic acid helps fight acne and improve your skin’s appearance."
      },
      {
        "question": "How long until I see results on my face?",
        "answer": "It can take 4-6 consistent applications for you to see an initial glow on your face. It can take 2-4 weeks for you to see visible improvements on your skin depending on your level of skin concern. Consistency is key for maximum results."
      },
      {
        "question": "Can we use it on Acne Prone Skin?",
        "answer": "Yes, Glycolic acid is a multitasking skincare ingredient that can help fight acne and improve your skin's appearance. Other antioxidants such as CICA, Turmeric are also beneficial to acne-prone skin. However, we will always recommend doing a patch test before buying any product."
      },
      {
        "question": "Is this good for Dry Skin?",
        "answer": "Yes, those with dry skin can easily use this product. High levels of glycerine and an ultra-gentle coconut-based cleansing ingredient ensure that skin is thoroughly clean without drying it out."
      },
      {
        "question": "Can I use this cleanser on my body?",
        "answer": "While you need a higher dosage of glycolic acid for your body, if you’re just starting out with actives for your body, this can act as a good starter product to get your body used to AHAs."
      },
      {
        "question": "At what age can I start using this?",
        "answer": "This product can be used by age groups of 15 years onwards. Glycolic exfoliation helps to help prevent and treat acne, which is common in the teenage years."
      }
    ],
    "rating": 4.8,
    "reviewsCount": 72
  },
  {
    "id": "pomegranate-and-mint-hydrating-tonic",
    "slug": "pomegranate-and-mint-hydrating-tonic",
    "title": "Pomegranate and Mint Hydrating Tonic",
    "price": 899,
    "originalPrice": 1124,
    "volume": "120 ML",
    "category": "Tonics",
    "range": "Daily Dew",
    "description": "Revive and renew with this ultra-hydrating, gentle melting eye cream that features a unique multi-functional ingredient blend including Bakuchi Oil, Tri Peptides, Niacinamide and Ashwagandha for complete care for your most fragile skin.",
    "about": "Instant dewy glow that all skin types will love. Pentavitin creates a moisture barrier, binding deep within skin’s layers, not just instantly quenching, but keeping skin hydrated for up to 72 hours; while the Mineral Blend, along with antioxidant rich Pomegranate, oxygenates skin cells and helps protects skin against pollution, stress and aging mechanisms.",
    "themeBackground": "#D0C8DF",
    "themeButton": "#B5ACC7",
    "image": "https://images.prismic.io/truekind/ZurSVbVsGrYSvisH_1.jpg?auto=format,compress",
    "image2": "https://images.prismic.io/truekind/ZurSV7VsGrYSvisK_2.jpg?auto=format,compress",
    "aboutImage": "https://images.prismic.io/truekind/Z9btADiBA97GihjB_3.PomegranateandMintHydratingTonic.jpg?auto=format,compress",
    "keyIngredients": [
      {
        "title": "Pomegranate Extracts",
        "description": "Rich in tannins and antioxidants, this ingredient soothes and shields the skin from environmental stressors, improving its overall appearance.",
        "imageUrl": "https://images.prismic.io/truekind/Z9buNjiBA97GihjR_5.Pomegranate-Extracts.jpg?auto=format,compress"
      },
      {
        "title": "Pentavitin",
        "description": "Plant-based hydrator that creates a moisture barrier, providing 72-hour hydration. Unlike hyaluronic acid, it doesn't wash away, improving skin over time by smoothing and plumping.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R61TiBA97Gigh9_pentavitin.jpg?auto=format,compress"
      },
      {
        "title": "Allantoin",
        "description": "A multi-tasking ingredient that moisturizes, soothes itchy skin, and heals injured skin, providing comprehensive skin care benefits.",
        "imageUrl": "https://images.prismic.io/truekind/Z9buNTiBA97GihjQ_2.Allantoin.jpg?auto=format,compress"
      },
      {
        "title": "Multi Mineral Electrolytes",
        "description": "Pollution, stress, and aging slow skin regeneration. This mineral blend boosts oxygen levels by 10% in just 2 hours.",
        "imageUrl": "https://images.prismic.io/truekind/Z9buNDiBA97GihjP_4.Multi_Mineral_Electrolytes.jpg?auto=format,compress"
      },
      {
        "title": "Witch Hazel",
        "description": "Rich in antioxidants like tannins, this ingredient offers anti-inflammatory and healing benefits. Its astringent properties also help tighten skin pores.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R61ziBA97Gigh__witch-hazel.jpg?auto=format,compress"
      },
      {
        "title": "Rose hydrosol",
        "description": "Rose hydrosol soothes irritated skin, reduces redness, and clears acne, dermatitis, and eczema, while cleansing pores.",
        "imageUrl": "https://images.prismic.io/truekind/Z9buMziBA97GihjO_Rose_Hydrozol.png?auto=format,compress"
      }
    ],
    "ingredientsFormula": [
      {
        "title": "Aqua",
        "ewg": "1",
        "concentration": "50% to 65%"
      },
      {
        "title": "Rose (Rosa Damascena) hydrosol",
        "ewg": "1",
        "concentration": "18% to 24%"
      },
      {
        "title": "Glycerin (and) Water (and) Hamamelis Virginiana (Witch Hazel) Extract",
        "ewg": "1-2, 1, 1",
        "concentration": "5% to 7%"
      },
      {
        "title": "Propanediol",
        "ewg": "2",
        "concentration": "2% to 3%"
      },
      {
        "title": "Zinc Gluconate / Copper gluconate / Magnesium aspirate",
        "ewg": "2-3,2, 1",
        "concentration": "2.5% to 3.5%"
      },
      {
        "title": "Pomegranate (Punica granatum) Extract",
        "ewg": "1",
        "concentration": "1% to 2%"
      },
      {
        "title": "Pentavitin (Saccharide Isomerate (and) Aqua (and) Citric Acid (and) Sodium Citrate)",
        "ewg": "1",
        "concentration": "1% to 2%"
      },
      {
        "title": "Caprylyl Glycol (and) Phenoxyethanol",
        "ewg": "1, 2-4",
        "concentration": "1% to 2%"
      },
      {
        "title": "Allantoin",
        "ewg": "1",
        "concentration": "< 0.25%"
      },
      {
        "title": "Menthol",
        "ewg": "1",
        "concentration": "< 0.25%"
      }
    ],
    "suitableFor": "[object Object], [object Object]",
    "recommendedFor": "[object Object], [object Object], [object Object]",
    "usage": {
      "when": "AM & PM.",
      "how": "Gently pat 3-4 drops onto the face and neck on clean skin.",
      "goodToKnow": "Use the Tonic after your skincare routine or post-makeup.",
      "dose": "Daily.",
      "precautions": "External use only."
    },
    "faqs": [
      {
        "question": "How is this tonic different from a toner?",
        "answer": "A toner is used to shrink pores, firm up skin & supply nutrients to it with regular use as part of a daily skincare routine. A tonic is an 'anytime anywhere pick me up' product that can be used to refresh, revitalise and hydrate skin."
      },
      {
        "question": "Can I use this as a setting spray after make up?",
        "answer": "Yes, you can use this a makeup setting spray (as long as you can transfer the product in a spray nozzle bottle)."
      },
      {
        "question": "Can we use this before applying makeup?",
        "answer": "We recommend using the Tonic after your skin care routine or post-makeup through a spray bottle to keep the Skin hydrated and Fresh."
      }
    ],
    "rating": 4.8,
    "reviewsCount": 89
  },
  {
    "id": "bio-exfoliant-brightening-sleeping-mask",
    "slug": "bio-exfoliant-brightening-sleeping-mask",
    "title": "Bio Exfoliant Brightening Sleeping Mask",
    "price": 899,
    "originalPrice": 1124,
    "volume": "50 G",
    "category": "Sleeping Mask",
    "range": "Pure Brilliance",
    "description": "Step up your cleansing game with this multi action glow giver that combines a gentle dose of skin care holy grail - Glycolic Acid, along with a mix of potent antioxidants, hydration and restoring agents - Centella asiatica, Turmeric and Licorice.",
    "about": "Reset your depleted skin overnight. Azelaic acid and Niacinamide help refine the skin’s surface and diminish skin blemishes and acne marks. Fruit AHAs and carbohydrates stimulate gentle biological exfoliation and cell renewal, revealing hydrated, plump and radiant skin",
    "themeBackground": "#F1CCCF",
    "themeButton": "#D4969B",
    "image": "https://images.prismic.io/truekind/ZurMbbVsGrYSviXa_1.jpg?auto=format,compress",
    "image2": "https://images.prismic.io/truekind/ZurMb7VsGrYSviXc_2.jpg?auto=format,compress",
    "aboutImage": "https://images.prismic.io/truekind/Z9SBqziBA97GigjT_4.BioExfoliantBrighteningSleepingMask.jpg?auto=format,compress",
    "keyIngredients": [
      {
        "title": "Azelaic Acid",
        "description": "Azelaic acid, as Potassium Azeloyl Diglycinate, is a proven exfoliant that fades acne marks, unclogs pores and refines skin texture.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R61DiBA97Gigh8_azelaic-acid.jpg?auto=format,compress"
      },
      {
        "title": "Pentavitin",
        "description": "Plant-based hydrator that creates a moisture barrier, providing 72-hour hydration. Unlike hyaluronic acid, it doesn't wash away, improving skin over time by smoothing and plumping.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R61TiBA97Gigh9_pentavitin.jpg?auto=format,compress"
      },
      {
        "title": "Hyaluronic Acid",
        "description": "A natural skin component, it holds 1000x its weight in water, boosting moisture, soothing dryness, and defending against moisture loss for hydrated and plump skin.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SEjDiBA97Gigj__hyaluronic-acid.jpg?auto=format,compress"
      },
      {
        "title": "Fruit AHA Complex",
        "description": "Carbohydrates and Alpha-hydroxy acids from a fruit blend of Tangerine, Sugarcane, Mombin, Mango & Banana to stimulate gentle bio exfoliation and cell renewal.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SEiziBA97Gigj-_fruit-aha-complex.jpg?auto=format,compress"
      },
      {
        "title": "Niacinamide",
        "description": "Multi-tasking skincare superstar with anti-aging, brightening, and barrier repair benefits. It accelerates epidermal cell growth and boosts collagen production for smoother, brighter skin.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SEjTiBA97GigkA_niacinamide.jpg?auto=format,compress"
      },
      {
        "title": "Turmeric",
        "description": "A powerhouse ingredient, turmeric has anti-inflammatory, antimicrobial, and antioxidant effects. It helps lighten pigmentation and slow skin aging for a healthier glow.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R61jiBA97Gigh-_turmeric.jpg?auto=format,compress"
      }
    ],
    "ingredientsFormula": [
      {
        "title": "Aqua",
        "ewg": "1",
        "concentration": "65% to 85%"
      },
      {
        "title": "Butylene Glycol",
        "ewg": "1",
        "concentration": "2% to 4%"
      },
      {
        "title": "Dimethicone",
        "ewg": "1 - 3",
        "concentration": "2% to 4%"
      },
      {
        "title": "Undecane (and) Tridecane",
        "ewg": "na",
        "concentration": "2% to 4%"
      },
      {
        "title": "Tangerine Extract ( Citrus reticulata)",
        "ewg": "1",
        "concentration": "2% to 3%"
      },
      {
        "title": "Sugar Cane Extract (Saccharum officinarum)",
        "ewg": "1",
        "concentration": "2% to 3%"
      },
      {
        "title": "Sodium Hyaluronate",
        "ewg": "1",
        "concentration": "2% to 3%"
      },
      {
        "title": "Aqua (and) Glycerin (and) Spondias Mombin Pulp Extract (and) Mangifera Indica (Mango) Pulp Extract (and) Musa Sapientum (Banana) Pulp Extract",
        "ewg": "1, 1-2, 1,1,1",
        "concentration": "2% to 3%"
      },
      {
        "title": "Sodium Acrylate/Sodium Acryloyldimethyl Taurate Copolymer",
        "ewg": "1",
        "concentration": "2% to 3%"
      },
      {
        "title": "Sodium Acrylates Copolymer (and) Lecithin",
        "ewg": "2, 1-2",
        "concentration": "1% to 2%"
      },
      {
        "title": "Niacinamide",
        "ewg": "1",
        "concentration": "1% to 2%"
      },
      {
        "title": "Turmeric Extract ( Curcuma longa)",
        "ewg": "1",
        "concentration": "1% to 2%"
      },
      {
        "title": "Saccharide Isomerate (and) Aqua (and) Citric Acid (and) Sodium Citrate",
        "ewg": "1, 1, 1-2, 1",
        "concentration": "1% to 2%"
      },
      {
        "title": "Caprylyl Glycol (and) Phenoxyethanol",
        "ewg": "1, 2-4",
        "concentration": "0.5% to 1.25%"
      },
      {
        "title": "Fragrance",
        "ewg": "na",
        "concentration": "< 0.5%"
      },
      {
        "title": "Water, Potassium Azeloyl Diglycinate",
        "ewg": "1,1",
        "concentration": "< 0.5%"
      }
    ],
    "suitableFor": "[object Object], [object Object]",
    "recommendedFor": "[object Object], [object Object], [object Object], [object Object], [object Object]",
    "usage": {
      "when": "PM.",
      "how": "Apply a generous layer evenly to face as the final step of your night time routine. Leave overnight & rinse off in the morning.",
      "goodToKnow": "Use as a last step of your nightly skin care routine.",
      "dose": "Weekly Thrice.",
      "precautions": "External use only."
    },
    "faqs": [
      {
        "question": "How much quantity should I use?",
        "answer": "You can take a quarter-size amount of the face mask & apply it to your face in circular motions & gently massage it."
      },
      {
        "question": "When should I use this?",
        "answer": "The mask should be used before sleeping at night. It should be used as your PM routine to achieve an overnight glow!"
      },
      {
        "question": "Will this make me break out?",
        "answer": "Any active skincare ingredients that increase the rate of cellular turnover can cause your skin to purge. A mild dose of glycolic acid helps fight acne and improve your skin’s appearance."
      },
      {
        "question": "Can I use it during the day?",
        "answer": "The mask should be avoided through the day as it is meant for your PM routine & ideally should be used at night to achieve that overnight glow in the morning! However, there is no harm to the skin if you use it during the day but always remember to follow up with SPF."
      },
      {
        "question": "Is this a peel-off/wash-off mask?",
        "answer": "No! The mask is based on a cream based formula & cant be used as a peel-off/wash mask."
      },
      {
        "question": "Will it feel heavy on the skin?",
        "answer": "Certainly Not! The mask will not feel heavy on the skin, It's a lightweight base formula that will feel light on your skin when applied."
      },
      {
        "question": "Can it be used on Acne Prone Skin ?",
        "answer": "Yes, it can be. There are no sensitive ingredients that could aggravate acne. Mild, gentle exfoliation will be beneficial to clear out dead skin & clear out pores. Further, the mild non oily water cream texture will not clog your pores through the night."
      },
      {
        "question": "I have oily skin. Will the product be greasy?",
        "answer": "Perfect for those struggling with oily skin. This light, non-oily base helps lock the moisture without making skin greasy."
      },
      {
        "question": "Will this sleeping mask absorb on my pillow case?",
        "answer": "Absolutely not! This would feel like a light night time moisturiser. The light water cream texture absorbs quite easily & makes the skin feel hydrated & plump."
      }
    ],
    "rating": 4.8,
    "reviewsCount": 106
  },
  {
    "id": "phyto-retinol-peptide-eye-cream",
    "slug": "phyto-retinol-peptide-eye-cream",
    "title": "Phyto-Retinol & Peptide Eye Cream",
    "price": 899,
    "originalPrice": 1124,
    "volume": "50 G",
    "category": "Moisturisers",
    "range": "Varnaya Blends",
    "description": "Revive and renew with this ultra-hydrating, gentle melting eye cream that features a unique multi-functional ingredient blend including Bakuchi Oil, Tri Peptides, Niacinamide and Ashwagandha for complete care for your most fragile skin.",
    "about": "Complete care for your most delicate skin, this lightweight eye cream gives an instant hydration boost while helping reduce puffiness and signs of fatigue around the eye area. Regular usage will help minimise the appearance of dark circles and fine lines. The melting texture will allow easy application without rubbing the skin.",
    "themeBackground": "#D0C8DF",
    "themeButton": "#B5ACC7",
    "image": "https://images.prismic.io/truekind/ZurR3bVsGrYSviqH_1.jpg?auto=format,compress",
    "image2": "https://images.prismic.io/truekind/ZurR3LVsGrYSviqF_2.jpg?auto=format,compress",
    "aboutImage": "https://images.prismic.io/truekind/Z9bkLziBA97Gihgp_4.Phyto-Retinol%26PeptideEyeCream.jpg?auto=format,compress",
    "keyIngredients": [
      {
        "title": "Bakuchiol",
        "description": "A plant-derived Retinol alternative offers all the benefits without the irritation. This potent antioxidant reduces photo damage, increases skin firmness, and fights aging signs, with proven effectiveness at concentrations as low as 0.5%.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SJtziBA97GiglY_bakuchi-oil.jpg?auto=format,compress"
      },
      {
        "title": "Hyaluronic Acid",
        "description": "A natural skin component, it holds 1000x its weight in water, boosting moisture, soothing dryness, and defending against moisture loss for hydrated and plump skin.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SEjDiBA97Gigj__hyaluronic-acid.jpg?auto=format,compress"
      },
      {
        "title": "Ashwagandha Oil",
        "description": "This adaptogenic Ayurvedic blend combines Ashwagandha with 13 potent herbs, rich in antioxidants and amino acids, to reduce visible signs of fatigue.",
        "imageUrl": "https://images.prismic.io/truekind/Z9bmuDiBA97GihhK_ashwagandha-oil.jpg?auto=format,compress"
      },
      {
        "title": "Tri-Peptides Complex",
        "description": "This formula features a patented, clinically-tested blend of Tri Peptides, panthenol, and Algae Extracts. It visibly reduces lines and wrinkles around the eye in just 7 days, restoring skin firmness and texture.",
        "imageUrl": "https://images.prismic.io/truekind/Z9bmtziBA97GihhJ_tripeptide-complex.jpg?auto=format,compress"
      },
      {
        "title": "Niacinamide",
        "description": "Multi-tasking skincare superstar with anti-aging, brightening, and barrier repair benefits. It accelerates epidermal cell growth and boosts collagen production for smoother, brighter skin.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SEjTiBA97GigkA_niacinamide.jpg?auto=format,compress"
      },
      {
        "title": "Propanediol",
        "description": "Propanediol is a multi-tasking ingredient that provides moisturization, effective cleansing, and skin safety, making it suitable for sensitive skin.",
        "imageUrl": "https://images.prismic.io/truekind/Z9bmyDiBA97GihhL_propanediol.png?auto=format,compress"
      }
    ],
    "ingredientsFormula": [
      {
        "title": "Aqua",
        "ewg": "1",
        "concentration": "65% to 85%"
      },
      {
        "title": "Propanediol",
        "ewg": "2",
        "concentration": "2.5% to 3.5%"
      },
      {
        "title": "C13-15 Alkanes (and) Polyglyceryl-6 Oleate",
        "ewg": "3,1",
        "concentration": "2.5% to 3.5%"
      },
      {
        "title": "Sodium Acrylate/Sodium Acryloyldimethyl Taurate Copolymer",
        "ewg": "1",
        "concentration": "1.5% to 2.5%"
      },
      {
        "title": "Sodium Hyaluronate",
        "ewg": "1",
        "concentration": "1.5% to 2.5%"
      },
      {
        "title": "Dimethicone",
        "ewg": "1 - 3",
        "concentration": "1.5% to 2.5%"
      },
      {
        "title": "Glyceryl stearate",
        "ewg": "1",
        "concentration": "1% to 2%"
      },
      {
        "title": "Ashwagandha Oil[[Sesame Oil (SesamumIndicum),Ashwagandha (WithaniaSomnifera), Lotus Saffron (NelumbiumNucifera), Lotus Stem(NelumbiumNucifera), Lotus Flower, (Nelumbo Nucifera), Sugandhibala (Valeriana Brunoniana), Jeshthamadh (Glycyrrhiza Glabra), Sariva (Hemidesmus Indicus), Nagkesar (Mesua Ferrea), Chhoti elaichi (Elettaria Cardamomum), Badi elaichi – (AmomumSubulatumRoxb),ChhotiKateri (Solanum Xanthocarpum) ,Badi Kateri (Solanum Indicum Linn), Triphala [Amalaki (Emblica officinalis), Bibhitaki (Terminalia bellirica), and Haritaki (Terminalia chebula), Nagarmotha (Cyperus Rotundus), Padmakh (Prunus Cerasoides), Punarnava (Boerhavia Diffusa) , Aqua]]",
        "ewg": "1",
        "concentration": "1% to 1.5%"
      },
      {
        "title": "Bakuchi Oil (Psoralia corylifolia)",
        "ewg": "1",
        "concentration": "1% to 1.5%"
      },
      {
        "title": "Niacinamide",
        "ewg": "1",
        "concentration": "1% to 1.5%"
      },
      {
        "title": "Palmitoyl Tripeptide-5 (and) Panthenol (and) Sodium Hyaluronate (and) Algae (Dunaliella Salina) Extract",
        "ewg": "1",
        "concentration": "1% to 1.5%"
      },
      {
        "title": "Caprylyl Glycol (and) Phenoxyethanol",
        "ewg": "1, 2-4",
        "concentration": "< 0.5%"
      },
      {
        "title": "Aqua",
        "ewg": "1",
        "concentration": "< 0.5%"
      },
      {
        "title": "Fragrance",
        "ewg": "na",
        "concentration": "< 0.2%"
      },
      {
        "title": "Tocopherol",
        "ewg": "1",
        "concentration": "< 0.2%"
      },
      {
        "title": "Citric acid",
        "ewg": "1 - 2",
        "concentration": "< 0.2%"
      }
    ],
    "suitableFor": "[object Object], [object Object]",
    "recommendedFor": "[object Object], [object Object], [object Object], [object Object], [object Object]",
    "usage": {
      "when": "AM & PM.",
      "how": "Apply a small amount onto finger & apply to the entire eye area with a gentle patting motion\nFor best results, do not miss the nightly application.",
      "goodToKnow": "Layers and combines well with other products.",
      "dose": "Daily.",
      "precautions": "External use only."
    },
    "faqs": [
      {
        "question": "How to apply the eye cream correctly?",
        "answer": "Apply a pea-size amount on your ring finger and apply to the entire eye area with a gentle patting motion."
      },
      {
        "question": "Will the eye cream reduce my dark circles?",
        "answer": "A multi-tasking formula, packed with powerful ingredients, this product is designed to give complete care for under eye skin and will definitely help fight dark circles."
      },
      {
        "question": "Can this cream be applied as a moisturiser?",
        "answer": "Yes! This eye cream works well as a daily, light-weight, hydrating & anti-wrinkle moisturiser for your face & neck."
      },
      {
        "question": "How long does it take to show the results?",
        "answer": "It visibly reduces the appearance of lines and wrinkles around the eye within 7 days & dark circles over a span of 4-6 weeks."
      },
      {
        "question": "Will this cream help with bags under the eyes?",
        "answer": "This is a super light multi-tasking water crème with a multitude of caring ingredients and antioxidants will help in flushing away water retention can cause puffiness, and peptides can smoothen rough textured skin."
      },
      {
        "question": "Can the cream be applied on the eyelids?",
        "answer": "Yes, a gentle formula that you can use it under on your eyelids too. The melting texture will help application without rubbing the delicate area."
      },
      {
        "question": "Is this a day or a night cream?",
        "answer": "It is formulated as a day and a night cream and recommended to be used at both am and pm."
      }
    ],
    "rating": 4.8,
    "reviewsCount": 123
  },
  {
    "id": "rosehip-bakuchiol-skin-perfecting-oil",
    "slug": "rosehip-bakuchiol-skin-perfecting-oil",
    "title": "Rosehip & Bakuchiol Skin Perfecting Oil",
    "price": 899,
    "originalPrice": 1124,
    "volume": "30 ML",
    "category": "Moisturisers",
    "range": "Pure Brilliance",
    "description": "Reclaim dry, dull skin with this skin quenching, dream come true water gel featuring Pentavitin (aka hydration's hot new thing), Niacinamide, Pure Saffron, and Precious Herbs prescribed in Ayurveda as a Miraculous Elixir to brighten skin.",
    "about": "Hyperpigmented dull skin is no match for this multitasking powerhouse blend that includes Rosehip Oil – packed with essential fatty acids, Omega-6 & vitamins, Bakuchiol - a plant-based retinol alternative that targets age-related concerns, Ayurveda’s anti-pigmentation hero Jirakadi Oil, and a patented brightening blend of Marshmallow Root, Rice Bran & Licorice Root.",
    "themeBackground": "#D8D0C4",
    "themeButton": "#9C8769",
    "image": "https://images.prismic.io/truekind/ZurQ9LVsGrYSvimZ_1.jpg?auto=format,compress",
    "image2": "https://images.prismic.io/truekind/ZurQ9rVsGrYSvimb_2.jpg?auto=format,compress",
    "aboutImage": "https://images.prismic.io/truekind/Z9SH3DiBA97Gigk-_6.Rosehip%26BakuchiolSkinPerfectingOil.jpg?auto=format,compress",
    "keyIngredients": [
      {
        "title": "Rosehip Oil",
        "description": "Rosehip Oil is rich in essential fatty acids (linoleic and oleic acids) and vitamins, regenerating and boosting tired skin, while brightening and evening out tone and texture.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SJujiBA97Giglb_rosehip-oil.jpg?auto=format,compress"
      },
      {
        "title": "Black Cumin Seed Oil",
        "description": "Ayurveda's anti-pigmentation hero, rich in fatty acids, amino acids, vitamins, and minerals. Its key component, thymoquinone, boasts antioxidant, anti-inflammatory, and wound-healing properties, backed by science.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SJuTiBA97Gigla_black-cumin-seed-oil.jpg?auto=format,compress"
      },
      {
        "title": "Skin Brightening Herb Blend",
        "description": "A synergistic blend of Marshmallow Root, Licorice, and Rice Bran brightens skin, reducing dark spots and hyperpigmentation. Clinical tests showed a 273% increase in skin luminance and 18x improvement in skin color index.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SJuDiBA97GiglZ_skin-brightening-herb-blend.jpg?auto=format,compress"
      },
      {
        "title": "Bakuchi Oil",
        "description": "A plant-derived Retinol alternative offers all the benefits without the irritation. This potent antioxidant reduces photo damage, increases skin firmness, and fights aging signs, with proven effectiveness at concentrations as low as 0.5%.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SJtziBA97GiglY_bakuchi-oil.jpg?auto=format,compress"
      },
      {
        "title": "Rice Bran Oil",
        "description": "Rich in antioxidants like tannins, this ingredient is renowned for its anti-inflammatory and healing properties. Its astringent properties also help tighten skin pores.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SJuziBA97Giglc_ricebran-oil.jpg?auto=format,compress"
      }
    ],
    "ingredientsFormula": [
      {
        "title": "Rice Bran (Oryza sativa) Oil",
        "ewg": "1-2",
        "concentration": "45% to 65%"
      },
      {
        "title": "Black Cumin Seed ( Nigella sativa) Oil",
        "ewg": "1",
        "concentration": "18% to 25%"
      },
      {
        "title": "Bakuchi (Psoralea corylifolia) Oil",
        "ewg": "1",
        "concentration": "6% to 8%"
      },
      {
        "title": "Undecane (and) Tridecane",
        "ewg": "1",
        "concentration": "6% to 8%"
      },
      {
        "title": "Rosehip Seed (Rosa canina) Oil",
        "ewg": "1",
        "concentration": "5% to 7%"
      },
      {
        "title": "Brassica Campestris (Rapeseed) Seed Oil, Glycyrrhiza Glabra (Licorice) Root Extract, Polyglyceryl-3 Diisostearate, Althaea Officinalis Root Extract, Oryza Sativa (Rice) Bran Extract",
        "ewg": "1, 5, 1, 1, 1-2",
        "concentration": "1% to 2%"
      }
    ],
    "suitableFor": "[object Object], [object Object]",
    "recommendedFor": "[object Object], [object Object], [object Object], [object Object], [object Object]",
    "usage": {
      "when": "PM.",
      "how": "Gently massage 2-5 drops to face and neck after cleansing. Leave overnight for best results.",
      "goodToKnow": "If you have to layer, best to treat this as a ‘moisturiser’ step, that is, apply after cleansing, toning and serums.",
      "dose": "Weekly Thrice.",
      "precautions": "Mixing your face oil into your daytime SPF will dilute the sun screen’s effectiveness. External use only."
    },
    "faqs": [
      {
        "question": "How will this help my skin?",
        "answer": "The oil is a skin-perfecting oil which is light weight & hydrating. It helps fade acne scarring, dark spots & plump fine lines."
      },
      {
        "question": "Will this make me break out?",
        "answer": "This oil is a skin perfecting oil which has powerful ingredient like Black seed that can be very beneficial to acne prone skin and that has the ability to fade acne scars and prevent skin from breaking out."
      },
      {
        "question": "How many times a week should I apply this?",
        "answer": "The oil should be applied 3-4 times a week for effective results to be seen on skin."
      },
      {
        "question": "Should I use a moisturiser after applying this oil?",
        "answer": "Yes! You can use a moisturiser after applying the oil ! You can also mix the oil with your moisturiser for maximum effectiveness."
      },
      {
        "question": "Can I use this product in the morning?",
        "answer": "It is formulated with powerful oils, in a way best suited for the PM. However, of course, you can use it in the morning. But we do advise you not to step into the sun with the oil on."
      },
      {
        "question": "Can it be used on Acne Prone Skin?",
        "answer": "Yes, it can be. Powerful oils like Black seed can be very beneficial to acne prone skin."
      },
      {
        "question": "I have oily skin. Will the product be greasy?",
        "answer": "This is a light oil that could benefit even people with oily skin."
      },
      {
        "question": "Can this oil be used when using a Gua Sha or a Roller?",
        "answer": "Absolutely yes. This oil can work very well with a roller / gua sha."
      }
    ],
    "rating": 4.8,
    "reviewsCount": 140
  },
  {
    "id": "hyaluronic-squalane-water-creme",
    "slug": "hyaluronic-squalane-water-creme",
    "title": "Hyaluronic & Squalane Water Crème",
    "price": 899,
    "originalPrice": 1124,
    "volume": "120 ML",
    "category": "Moisturisers",
    "range": "Daily Dew",
    "description": "Get that plump, dewy look with this weightless, oil free formula &nbsp;infused with the ultra-hydrating trio – Hyaluronic, Squalane and Pentavitin; &nbsp;combined with &nbsp;Lychee and Watermelon extracts to quench and revive thirsty dull skin.",
    "about": "Your daily 72-hour antioxidant-rich, triple-active, hydration fix. Hyaluronic acid increases the skin’s water content, while Squalane, a plant-derived mega hydrator, acts as a barrier to keep moisture locked in leaving skin hydrated through the day while providing an instantly soft, supple, dewy look.",
    "themeBackground": "#D0C8DF",
    "themeButton": "#B5ACC7",
    "image": "https://images.prismic.io/truekind/ZurSsrVsGrYSvitW_1.jpg?auto=format,compress",
    "image2": "https://images.prismic.io/truekind/ZurStLVsGrYSvitY_2.jpg?auto=format,compress",
    "aboutImage": "https://images.prismic.io/truekind/Z9bo8ziBA97Gihhs_4.Hyaluronic%26SqualaneWaterCr%C3%A8me.jpg?auto=format,compress",
    "keyIngredients": [
      {
        "title": "Hyaluronic Acid",
        "description": "A natural skin component, it holds 1000x its weight in water, boosting moisture, soothing dryness, and defending against moisture loss for hydrated and plump skin.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SEjDiBA97Gigj__hyaluronic-acid.jpg?auto=format,compress"
      },
      {
        "title": "Pentavitin",
        "description": "Plant-based hydrator that creates a moisture barrier, providing 72-hour hydration. Unlike hyaluronic acid, it doesn't wash away, improving skin over time by smoothing and plumping.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R61TiBA97Gigh9_pentavitin.jpg?auto=format,compress"
      },
      {
        "title": "Watermelon Extracts",
        "description": "Rich in Vitamins A, C, and E, antioxidants, and lycopene, this ingredient helps sun-damaged skin and cell regeneration, with a clinically proven 25% increase in skin protection.",
        "imageUrl": "https://images.prismic.io/truekind/Z9bqiDiBA97GihiV_5.Watermelon-Extracts.jpg?auto=format,compress"
      },
      {
        "title": "Squalane",
        "description": "This moisturizing agent is instantly recognized by the skin, helping to lock in moisture, build suppleness, and replenish fatty acids and antioxidants.",
        "imageUrl": "https://images.prismic.io/truekind/Z9bqhziBA97GihiU_3._Squalane.jpg?auto=format,compress"
      },
      {
        "title": "Lychee Extracts",
        "description": "Lychee's Saponins, Tannins, and Flavonoids make it a potent antioxidant that brightens and reduces signs of aging, with significant improvements seen even at 0.1% concentration.",
        "imageUrl": "https://images.prismic.io/truekind/Z9bqhjiBA97GihiT_4.Lychee-Extract.jpg?auto=format,compress"
      },
      {
        "title": "Sodium hyaluronate",
        "description": "Sodium hyaluronate reduces dryness and hydrates oily and acne-prone skin without clogging pores or leaving a greasy residue.",
        "imageUrl": "https://images.prismic.io/truekind/Z9bqhTiBA97GihiS_molecule..jpg?auto=format,compress"
      }
    ],
    "ingredientsFormula": [
      {
        "title": "Aqua",
        "ewg": "1",
        "concentration": "65% - 80%"
      },
      {
        "title": "Butylene Glycol",
        "ewg": "1",
        "concentration": "3% - 5%"
      },
      {
        "title": "Dimethicone",
        "ewg": "1 - 3",
        "concentration": "3% - 4%"
      },
      {
        "title": "Undecane (and) Tridecane",
        "ewg": "na",
        "concentration": "3% - 4%"
      },
      {
        "title": "Water Melon Exract (Citrullus lanatus)",
        "ewg": "1",
        "concentration": "2% - 3%"
      },
      {
        "title": "Lychee Extract (Litchi chinensis)",
        "ewg": "1",
        "concentration": "2% - 3%"
      },
      {
        "title": "Sodium Hyaluronate",
        "ewg": "1",
        "concentration": "2% - 3%"
      },
      {
        "title": "Squalane",
        "ewg": "1",
        "concentration": "2% - 3%"
      },
      {
        "title": "Triethylhexanoin",
        "ewg": "1",
        "concentration": "2% - 3%"
      },
      {
        "title": "Sodium Acrylates Copolymer (and) Lecithin",
        "ewg": "2, 1-2",
        "concentration": "0.5% - 1.5%"
      },
      {
        "title": "Saccharide Isomerate (and) Aqua (and) Citric Acid (and) Sodium Citrate",
        "ewg": "1, 1, 1-2, 1",
        "concentration": "0.5% - 1.5%"
      },
      {
        "title": "Caprylyl Glycol (and) Phenoxyethanol",
        "ewg": "1, 2-4",
        "concentration": "0.5% - 1.5%"
      },
      {
        "title": "Sodium Acrylate/Sodium Acryloyldimethyl Taurate Copolymer",
        "ewg": "1",
        "concentration": "0.5% - 1.5%"
      },
      {
        "title": "Fragrance",
        "ewg": "na",
        "concentration": "< 1%"
      }
    ],
    "suitableFor": "[object Object], [object Object]",
    "recommendedFor": "[object Object], [object Object], [object Object], [object Object]",
    "usage": {
      "when": "AM & PM.",
      "how": "Gently massage with fingertips onto clean, moist face and neck in upward motions. Leave it on to skin.",
      "goodToKnow": "Use after cleansing and serums, as a last step of your skin care routine.",
      "dose": "Daily.",
      "precautions": "External use only."
    },
    "faqs": [
      {
        "question": "What is the difference between Squalane & Squalene?",
        "answer": "Shark livers contain an oil, which is known as squalene which is used for its moisturising & restorative properties. Whereas Squalane is a plant-derived version of squalene."
      },
      {
        "question": "Why is it printed as Squalene?",
        "answer": "It’s a production error on our part, but as we want to advocate for the planet - we’re trying to consume the existing packaging and rework our printing errors."
      },
      {
        "question": "Can this be used on acne-prone skin?",
        "answer": "Yes! The moisturiser is suitable for all skin types,Since it is hyaluronic it can also help control sebum production, which makes it a potentially useful ingredient for acne prevention."
      },
      {
        "question": "Will this make my skin dry?",
        "answer": "Certainly Not! The moisturiser is made to hydrate the skin and give 72 hour of hydration! It has a key ingredient as Squalane which is a mega hydrating ingredient that acts as a barrier to keep moisture locked in leaving skin hydrated through the day."
      },
      {
        "question": "What is the right way to apply Hyaluronic Acid?",
        "answer": "The right way to apply Hyaluronic acid is to take the cream in small amounts & massage it on damp skin. The moisturiser should be used as your AM and PM routine."
      },
      {
        "question": "Will this suit Oily Skin? Will the product be greasy?",
        "answer": "Works very well for those struggling with oily skin too. This super light, non-oily water crème helps lock the moisture without making skin greasy."
      },
      {
        "question": "Does this wear well under make up and foundation?",
        "answer": "This is a super light water crème that holds up very nicely under make up. Foundation stays on without cracking or peeling. It also layers and combines well with other products."
      },
      {
        "question": "Can it be used under the eye too?",
        "answer": "Certainly yes, you can use it under your eye too, though we will recommend looking at the eye crème for specific under eye skin benefits."
      }
    ],
    "rating": 4.8,
    "reviewsCount": 157
  },
  {
    "id": "manjistha-and-saffron-moisture-gel",
    "slug": "manjistha-and-saffron-moisture-gel",
    "title": "Manjistha and Saffron Moisture Gel",
    "price": 899,
    "originalPrice": 1124,
    "volume": "50 G",
    "category": "Moisturisers",
    "range": "Varnaya Blends",
    "description": "Reclaim dry, dull skin with this skin quenching, dream come true water gel featuring Pentavitin (aka hydration's hot new thing), Niacinamide, Pure Saffron, and Precious Herbs prescribed in Ayurveda as a Miraculous Elixir to brighten skin.",
    "about": "Hydration hero Pentavitin creates a moisture barrier, binding deep within the skin’s layers, not just instantly quenching, but keeping skin hydrated for up to 72 hours; while pore-reducing niacinamide plus a high dose of age-fighting antioxidants and skin-restoring ingredients help skin look brighter, refreshed and renewed.",
    "themeBackground": "#D8D0C4",
    "themeButton": "#9C8769",
    "image": "https://images.prismic.io/truekind/ZurQjbVsGrYSvik0_1.jpg?auto=format,compress",
    "image2": "https://images.prismic.io/truekind/ZurQj7VsGrYSvik3_2.jpg?auto=format,compress",
    "aboutImage": "https://images.prismic.io/truekind/Z9SNNjiBA97Gigmq_8.ManjisthaandSaffronMoistureGel.jpg?auto=format,compress",
    "keyIngredients": [
      {
        "title": "Pentavitin",
        "description": "Plant-based hydrator that creates a moisture barrier, providing 72-hour hydration. Unlike hyaluronic acid, it doesn't wash away, improving skin over time by smoothing and plumping.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R61TiBA97Gigh9_pentavitin.jpg?auto=format,compress"
      },
      {
        "title": "Ayurvedic Herb Blend Base",
        "description": "This formula is rooted in Ayurvedic tradition, featuring a miracle herb base (75-85%) inspired by the Kumkumadi texts. It combines potent antioxidants like Turmeric, Licorice, Lotus Seed, and others to create a powerful blend.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SPQjiBA97Gignn_ayurvedic-herb-blend-base.jpg?auto=format,compress"
      },
      {
        "title": "Saffron",
        "description": "Chock full of antioxidants, including Vitamin C, and powerful carotenoids, it helps repair skin damage and brightens skin.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SPQTiBA97Gignm_saffron.jpg?auto=format,compress"
      },
      {
        "title": "Niacinamide",
        "description": "Multi-tasking skincare superstar with anti-aging, brightening, and barrier repair benefits. It accelerates epidermal cell growth and boosts collagen production for smoother, brighter skin.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SEjTiBA97GigkA_niacinamide.jpg?auto=format,compress"
      },
      {
        "title": "Manjistha",
        "description": "Rubia cordifolia, known in Ayurveda for its skin-brightening properties, contains Manjisthin and Purpurine glucosides. It inhibits tyrosinase activity, reducing melanin production and brightening the skin.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SPQDiBA97Gignl_manjistha.jpg?auto=format,compress"
      },
      {
        "title": "Glycerine",
        "description": "This skincare superstar is a real moisture magnet. As a humectant, it pulls moisture from the air and keeps it in the skin.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SPQziBA97Gigno_glycerine.jpg?auto=format,compress"
      }
    ],
    "ingredientsFormula": [
      {
        "title": "Turmeric (Haldi) (Curcuma longa) Extract, Licorice (Jethamadh) (Glycyrrhiza Glabra) Extract, Lotus Seed (Nelumbo nucifera), Indian Madder (Manjistha) (Rubia cordifolia) Extract, Indian Rose Chestnut (Nageshkar) (Mesua ferrea) Extract, Priyangu (Aglaia elaeagnoidea) Extract, Lodhra (Symplocos racemosa) Extract, Himalayan Cherry (Padhmak) ( Prunus cerasoides) Extract",
        "ewg": "1",
        "concentration": "75% to 85%"
      },
      {
        "title": "Aqua",
        "ewg": "1",
        "concentration": "10% to 15%"
      },
      {
        "title": "Glycerine",
        "ewg": "1-2",
        "concentration": "2.5% to 4%"
      },
      {
        "title": "Niacinamide",
        "ewg": "1",
        "concentration": "1% - 2%"
      },
      {
        "title": "Pentavitin (Saccharide Isomerate (and) Aqua (and) Citric Acid (and) Sodium Citrate)",
        "ewg": "1",
        "concentration": "1% - 2%"
      },
      {
        "title": "Phenoxyethanol & Caprylyl Glycol",
        "ewg": "2-4, 1",
        "concentration": "1% - 2%"
      },
      {
        "title": "Carbomer",
        "ewg": "1",
        "concentration": ".5% to 1%"
      },
      {
        "title": "Triethanolamine",
        "ewg": "5",
        "concentration": "< 0.5%"
      },
      {
        "title": "Water, Potassium Azeloyl Diglycinate",
        "ewg": "1",
        "concentration": "< 0.5%"
      },
      {
        "title": "Saffron (Crocus sativus)",
        "ewg": "1",
        "concentration": "< 0.5%"
      }
    ],
    "suitableFor": "[object Object], [object Object]",
    "recommendedFor": "[object Object], [object Object], [object Object]",
    "usage": {
      "when": "AM & PM.",
      "how": "Gently massage with fingertips onto clean, moist face and neck in upward motions. Leave it on to skin.",
      "goodToKnow": "Layers and combines well. This is a water based product, so use after cleansing and before serums and creams.",
      "dose": "Daily.",
      "precautions": "External use only."
    },
    "faqs": [
      {
        "question": "Will this feel heavy or oily on my skin?",
        "answer": "Certainly Not! The gel based formula is a lightweight Gel that feels very light on the skin after applying and will not make it oily as the gel is meant to keep your skin hydrated for 72 hours!"
      },
      {
        "question": "Can I apply it under makeup?",
        "answer": "Yes, you can apply it under your makeup, there is no harm if you apply it under your makeup!"
      },
      {
        "question": "Can I apply it night & day?",
        "answer": "Yes! You should use the Gel as your AM & PM routine which means you can start your day applying the gel as a moisturiser and end the day using the gel before sleeping."
      },
      {
        "question": "Can I apply it on my eyelids and under my eyes?",
        "answer": "Yes Definitely ! You can definitely apply it on the eyelids and under eyes for a more hydrated look. The gel based moisturiser also tries to reduce fine and wrinkles."
      },
      {
        "question": "Will this help me with uneven skin tone?",
        "answer": "Yes it will! With niacinamide being one of the key ingredients it will help the skin achieve an even skin tone while making it look brighter!"
      },
      {
        "question": "What is the difference between a Hydration Gel Vs a Moisturiser?",
        "answer": "Moisturisers are oil based ingredients and emollients that work by creating a seal on the surface of the skin which prevents water from escaping. Whereas, hydrators like the Saffron and Moisture Gel, are humectants that work by absorbing water from the atmosphere or skin and holding it in place. Hydrators work best for people tending to have oily skin and for usual Indian weather conditions."
      },
      {
        "question": "What skin types will this suit?",
        "answer": "Gel based moisturisers like Saffron and Manjistha Moisture Gel are effective for most skin types. It's particularly helpful for skin prone to acne and blemishes, as they do not have to add oil to their already oily skin surface, yet hydrate it."
      },
      {
        "question": "What order should I put this product on?",
        "answer": "Layering is really a lot of inexact science, but generally speaking, after cleansing and toning, ideally you will put on ingredients with actives ( like serums) and then layer that with heavier products like moisturisers, creams or sunscreen. Saffron and Manjistha is a water based product, used after cleansing and/or toning, pre or post serums."
      }
    ],
    "rating": 4.8,
    "reviewsCount": 174
  },
  {
    "id": "acne-calming-herb-rescue-mask",
    "slug": "acne-calming-herb-rescue-mask",
    "title": "Acne Calming Herb Rescue Mask",
    "price": 899,
    "originalPrice": 1124,
    "volume": "50 G",
    "category": "Sleeping Mask",
    "range": "Pure Brilliance",
    "description": "Purify, calm and restore balance to problematic, acne prone oily skin with this lightweight hydrating jelly mask that features patented sebum regulator Sepicontrol A5 combined with a potent mix of healing herbs from Ayurveda including Turmeric, Lodhra, Black Mustard, Nutgrass, Neem and Nutmeg.",
    "about": "Take control of your skin with this wholesome blend of ingredients that fight the five major causes of skin imbalance and acne (bacterial proliferation, lipases, 5-alpha-reductase, elastase, free radicals, while calming irritated skin. Regular use will leave skin visibly calmer, clearer & less prone to future breakouts.",
    "themeBackground": "#D8D0C4",
    "themeButton": "#9C8769",
    "image": "https://images.prismic.io/truekind/ZurNf7VsGrYSviaK_1.jpg?auto=format,compress",
    "image2": "https://images.prismic.io/truekind/ZurNgbVsGrYSviaN_2.jpg?auto=format,compress",
    "aboutImage": "https://images.prismic.io/truekind/Z9SSLDiBA97GigoI_4.AcneCalmingHerbRescueMask.jpg.jpg?auto=format,compress",
    "keyIngredients": [
      {
        "title": "5 α Regulating Complex",
        "description": "This patented complex reduces comedones by 78% and sebum production by 20%, targeting the 5 major causes of acne: bacterial growth, lipases, and free radicals.",
        "imageUrl": "https://images.prismic.io/truekind/Z9ST5jiBA97GigoZ_regulating-complex.jpg?auto=format,compress"
      },
      {
        "title": "Glycerine",
        "description": "This skincare superstar is a real moisture magnet. As a humectant, it pulls moisture from the air and keeps it in the skin.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SPQziBA97Gigno_glycerine.jpg?auto=format,compress"
      },
      {
        "title": "Adaptogenic Herb Blend",
        "description": "A potent blend (32-38%) of 9 healing herbs, including Coriander, Turmeric, and Neem, offers anti-bacterial, anti-inflammatory, and anti-oxidant properties to calm irritated skin and combat acne.",
        "imageUrl": "https://images.prismic.io/truekind/Z9ST5TiBA97GigoY_adaptogenic-herb-blend.jpg?auto=format,compress"
      },
      {
        "title": "Hydrating Light Jelly",
        "description": "Actives are all housed in a light jelly format that treats without clogging pores.",
        "imageUrl": "https://images.prismic.io/truekind/Z9ST5DiBA97GigoX_hydrating-jelly.jpg?auto=format,compress"
      }
    ],
    "ingredientsFormula": [
      {
        "title": "Aqua",
        "ewg": "1",
        "concentration": "48% to 58%"
      },
      {
        "title": "Coriander (Dhane)(Coriandrum sativum) Extract, Turmeric (Haldi)(Curcuma longa)Extract, Nutmeg (Jayfal)(Myristica fragrans) Extract ,Lodhra (Symplocos Racemosa)Extract , Black Mustard (Mohari)(Brassica nigra)Extract, Nutgrass (Nagarmotha) (Cyperus Rotundus) Extract, Neem(Azadirachta indica) Extract, Sweet Flag (Vekhand)(Acorus calamus) Extract",
        "ewg": "1",
        "concentration": "32% to 38%"
      },
      {
        "title": "Vegetable glycerin",
        "ewg": "1 - 2",
        "concentration": "3% to 5%"
      },
      {
        "title": "Capryloyl Glycine (and) Sarcosine (and) Cinnamomum Zeylanicum Bark Extract",
        "ewg": "1, 1, 3",
        "concentration": "2.5% to 3.5%"
      },
      {
        "title": "Saccharide Isomerate (and) Aqua (and) Citric Acid (and) Sodium Citrate",
        "ewg": "1, 1, 1-2, 1",
        "concentration": "< 1%"
      },
      {
        "title": "Caprylyl glycol & Phenoxyethanol",
        "ewg": "1, 4",
        "concentration": "< 1%"
      },
      {
        "title": "Carbomer",
        "ewg": "1",
        "concentration": "< 1%"
      },
      {
        "title": "Triethanolamine",
        "ewg": "5",
        "concentration": "< 0.7%"
      }
    ],
    "suitableFor": "[object Object], [object Object]",
    "recommendedFor": "[object Object], [object Object], [object Object], [object Object], [object Object]",
    "usage": {
      "when": "PM.",
      "how": "Apply a generous layer evenly to face as the final step of your night time routine. Leave overnight & rinse off in the morning. Can also be used as a light hydrator through the day.",
      "goodToKnow": "Use after serums, and before application of any heavier creams.",
      "dose": "Daily.",
      "precautions": "External use only."
    },
    "faqs": [
      {
        "question": "How long until I see results on my face",
        "answer": "The result will vary from person to person as it depends on your usage, However using the product 3-4 times a week the results can be seen within 2 weeks of time."
      }
    ],
    "rating": 4.8,
    "reviewsCount": 191
  },
  {
    "id": "aha-brightening-exfoliant-toneressence",
    "slug": "aha-brightening-exfoliant-toneressence",
    "title": "AHA Brightening Exfoliant Toner/Essence",
    "price": 899,
    "originalPrice": 1124,
    "volume": "200 ML",
    "category": "Toners",
    "range": "Pure Brilliance",
    "description": "Step up your cleansing game with this multi action glow giver that combines a gentle dose of skin care holy grail - Glycolic Acid, along with a mix of potent antioxidants, hydration and restoring agents - Centella asiatica, Turmeric and Licorice.",
    "about": "Brightens and balances skin post-cleanse. Glycolic acid dissolves away dead skin cells & excess sebum to reveal fresher radiant skin beneath, while anti-oxidants help fight the impact of free-radical damage. Pentavitin creates a moisture barrier, binding deep within skin’s layers, instantly quenching, and keeping skin hydrated for up to 72 hours.",
    "themeBackground": "#F1CCCF",
    "themeButton": "#D4969B",
    "image": "https://images.prismic.io/truekind/ZurL27VsGrYSviVl_1.jpg?auto=format,compress",
    "image2": "https://images.prismic.io/truekind/ZurL3bVsGrYSviVo_2.jpg?auto=format,compress",
    "aboutImage": "https://images.prismic.io/truekind/Z9R39TiBA97GighC_toner3.jpg?auto=format,compress",
    "keyIngredients": [
      {
        "title": "Glycolic Acid",
        "description": "An AHA from sugarcane, it exfoliates, brightens, reduces wrinkles, fades hyperpigmentation, and prevents blackheads. It boosts cell renewal but increases sun sensitivity, so sunscreen is essential.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R60jiBA97Gigh6_glycolic-acid.jpg?auto=format,compress"
      },
      {
        "title": "Centella Asiatica",
        "description": "Gotu Kola, also known as Tiger Grass or CICA, is rich in amino acids, fatty acids, and phytochemicals, including Vitamins C, A, B1, and B2. It's renowned for its healing properties, antioxidants, and antimicrobial benefits, providing anti-inflammatory effects.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R60ziBA97Gigh7_centella-asiatica.jpg?auto=format,compress"
      },
      {
        "title": "Turmeric",
        "description": "A powerhouse ingredient, turmeric has anti-inflammatory, antimicrobial, and antioxidant effects. It helps lighten pigmentation and slow skin aging for a healthier glow.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R61jiBA97Gigh-_turmeric.jpg?auto=format,compress"
      },
      {
        "title": "Azelaic Acid",
        "description": "Azelaic acid, as Potassium Azeloyl Diglycinate, is a proven exfoliant that fades acne marks, unclogs pores and refines skin texture.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R61DiBA97Gigh8_azelaic-acid.jpg?auto=format,compress"
      },
      {
        "title": "Pentavitin",
        "description": "Plant-based hydrator that creates a moisture barrier, providing 72-hour hydration. Unlike hyaluronic acid, it doesn't wash away, improving skin over time by smoothing and plumping.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R61TiBA97Gigh9_pentavitin.jpg?auto=format,compress"
      },
      {
        "title": "Witch Hazel",
        "description": "Rich in antioxidants like tannins, this ingredient offers anti-inflammatory and healing benefits. Its astringent properties also help tighten skin pores.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R61ziBA97Gigh__witch-hazel.jpg?auto=format,compress"
      }
    ],
    "ingredientsFormula": [
      {
        "title": "Aqua",
        "ewg": "1",
        "concentration": "35% to 45%"
      },
      {
        "title": "Rose (Rosa Damascena) hydrosol",
        "ewg": "1",
        "concentration": "18% to 24%"
      },
      {
        "title": "Turmeric (Haldi) (Curcuma longa) Extract, Licorice (Jethamadh)(Glycyrrhiza Glabra) Extract, Gotu Kola (Brahmi)(Centella asiatica) Extract",
        "ewg": "1",
        "concentration": "8% to 10%"
      },
      {
        "title": "Hamamelis Virginiana (Witch Hazel) Water (and) Alcohol",
        "ewg": "1",
        "concentration": "5% to 7%"
      },
      {
        "title": "Sodium hydroxide",
        "ewg": "1",
        "concentration": "5% to 7%"
      },
      {
        "title": "Sodium lactate",
        "ewg": "1",
        "concentration": "4% to 6%"
      },
      {
        "title": "Glycolic acid",
        "ewg": "1-4",
        "concentration": "4% to 5%"
      },
      {
        "title": "Propanediol",
        "ewg": "1-4",
        "concentration": "4% to 5%"
      },
      {
        "title": "Pentavitin (Saccharide Isomerate (and) Aqua (and) Citric Acid (and) Sodium Citrate)",
        "ewg": "1",
        "concentration": "1% to 2%"
      },
      {
        "title": "Potassium Azeloyl Diglycinate",
        "ewg": "1",
        "concentration": "1% to 2%"
      },
      {
        "title": "Heptyl Glucoside",
        "ewg": "1",
        "concentration": "< 0.6%"
      },
      {
        "title": "Fragrance",
        "ewg": "na",
        "concentration": "< 0.25%"
      },
      {
        "title": "Allantoin",
        "ewg": "1",
        "concentration": "< 0.25%"
      }
    ],
    "suitableFor": "[object Object], [object Object]",
    "recommendedFor": "[object Object], [object Object], [object Object], [object Object], [object Object]",
    "usage": {
      "when": "AM & PM.",
      "how": "Saturate a cotton pad & wipe in sweeping, outward motions. Do not rinse. Alternatively, gently pat 1-2 drops into the face and neck.",
      "goodToKnow": "Increases your skin’s sensitivity to the sun. Follow up with SPF.",
      "dose": "Daily.",
      "precautions": "External use only."
    },
    "faqs": [
      {
        "question": "Will this burn?",
        "answer": "Some people may experience tingling or slight burning sensations when applying salicylic acids. It’s totally normal and is likely to pass in 5-10 mins, and with continued use, may disappear. However, we do recommend a patch."
      },
      {
        "question": "How often should I use it?",
        "answer": "You can use it daily. Start slowly, apply every other day and progress up to twice daily."
      },
      {
        "question": "How long until I see results on my face?",
        "answer": "It usually takes 6-8 weeks of consistent usage to see results, due the time it takes for the cells to regenerate and turnover."
      },
      {
        "question": "Can I use this in the morning?",
        "answer": "Since glycolic acid makes your skin more sensitive to sunlight, it is best applied in the evening. You can use our cleanser in the mornings because it only contains a small amount of glycolic acid, but it is crucial to use SPF before you head out in the sun."
      },
      {
        "question": "Can I use this at night?",
        "answer": "Glycolic acid should be ideally applied in the evening, as it makes your skin sensitive to sunlight. Applying it at night offers it enough time to work its magic without putting your skin at a greater danger of sun damage."
      },
      {
        "question": "What is AHA?",
        "answer": "AHAs are water-soluble acids made from sugary fruits. They assist in removing the top layer of your skin so that fresh, pigmented skin cells can grow in their place. You'll probably find that your skin feels smoother to the touch after use."
      },
      {
        "question": "What is the difference between AHA's like Glycolic vs BHA like Salicylic Acid?",
        "answer": "Both are chemical exfoliants that help remove dead cells. AHAs help peel away the surface of your skin so that new, evenly pigmented skin cells may generate. Best used to brighten, and to even skin tone. Salicylic acid is oil soluble, which means it has a way of getting way deeper through the oils of your skin’s pores, helping acne prone skin."
      },
      {
        "question": "Why should I use a cotton pad while using this toner?",
        "answer": "It’s best to use a cotton pad when using a toner. This also helps make the product deposit well."
      }
    ],
    "rating": 4.8,
    "reviewsCount": 208
  },
  {
    "id": "kumkumadi-radiance-facial-oil",
    "slug": "kumkumadi-radiance-facial-oil",
    "title": "Kumkumadi Radiance Facial Oil",
    "price": 899,
    "originalPrice": 1124,
    "volume": "30 ML",
    "category": "Facial Oils",
    "range": "Varnaya Blends",
    "description": "Wake up to a refreshed, hydrated, radiant glow! Prescribed in Ayurveda as a ‘Miraculous Elixir’, Kumkumadi is a revered blend that contains Saffron and over 20 precious Ayurvedic herbs and oils that are a rich source of antioxidants and replenishing emollients.",
    "about": "A boost of anti-oxidant rich nourishing renewal for dull, dry and tired skin, this super-absorbable oil will help with clearing dark spots & blemishes and creating an even-looking, brighter complexion.",
    "themeBackground": "#D8D0C4",
    "themeButton": "#9C8769",
    "image": "https://images.prismic.io/truekind/ZurP_7VsGrYSvijF_1.jpg?auto=format,compress",
    "image2": "https://images.prismic.io/truekind/ZurQAbVsGrYSvijG_2.jpg?auto=format,compress",
    "aboutImage": "https://images.prismic.io/truekind/Z9SVeTiBA97GigpI_3.KumkumadiRadianceFacialOil.jpg?auto=format,compress",
    "keyIngredients": [
      {
        "title": "Manjistha",
        "description": "Rubia cordifolia, known in Ayurveda for its skin-brightening properties, contains Manjisthin and Purpurine glucosides. It inhibits tyrosinase activity, reducing melanin production and brightening the skin.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SPQDiBA97Gignl_manjistha.jpg?auto=format,compress"
      },
      {
        "title": "Turmeric",
        "description": "A powerhouse ingredient, turmeric has anti-inflammatory, antimicrobial, and antioxidant effects. It helps lighten pigmentation and slow skin aging for a healthier glow.",
        "imageUrl": "https://images.prismic.io/truekind/Z9R61jiBA97Gigh-_turmeric.jpg?auto=format,compress"
      },
      {
        "title": "Black Currant & Peony Extract",
        "description": "This blend reduces age spots and boosts skin brightness. Blackcurrant seed oil reduces melanin activity, while Peony's anti-inflammatory and antioxidant properties enhance skin clarity.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SXITiBA97Gigpg_black-current-peony-extract.jpg?auto=format,compress"
      },
      {
        "title": "Saffron",
        "description": "Chock full of antioxidants, including Vitamin C, and powerful carotenoids, it helps repair skin damage and brightens skin.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SPQTiBA97Gignm_saffron.jpg?auto=format,compress"
      },
      {
        "title": "Licorice",
        "description": "Glycyrrhiza Glabra Root Extract is a potent antioxidant and UV-fighter that inhibits melanin formation. It's a safe and effective skin-lightening agent, even outperforming hydroquinone.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SXIjiBA97Gigph_licorice.jpg?auto=format,compress"
      },
      {
        "title": "Jojoba oil",
        "description": "Jojoba oil has moisturizing, antibacterial, and antioxidant properties, effectively treating acne, psoriasis, and dry skin with minimal risk of side effects.",
        "imageUrl": "https://images.prismic.io/truekind/Z9SXIziBA97Gigpi_jojoba-oil.png?auto=format,compress"
      }
    ],
    "ingredientsFormula": [
      {
        "title": "Kumkumadi Oil ( Sesame oil (Sesamum Indicum)Water,Manjishtha (Rubia Cordifolia), Daruharidra (Berberis aristata),Haridra (Curcuma longa), Jeshthamadh (Glycyrrhiza Glabra), Kamal (Nelumbo nucifera), Lodhra (Symplocos racemosa), Sarshap (Brassica campestris Linn) Nagarmotha (Cyperus rotundus) Nagkeshar (Mesua ferrea Padmakh (Prunus cerasoides) Palashfool(Butea monosperma) Priyangu (Callicarpa macrophylla) Pushkarmool (Inula racemosa),Tejpan (Cinnamomum tamala),Vadasal (Ficus benghalensis),Vekhand(Acorus calamus), Khas (Vetiveria zizanioides), Keshar (Crocus sativus))",
        "ewg": "1",
        "concentration": "40% to 45%"
      },
      {
        "title": "Caprylic/Capric Triglyceride (and) Disteardimonium Hectorite (and) Propylene Carbonate",
        "ewg": "1, 1, 1",
        "concentration": "15% to 22%"
      },
      {
        "title": "Jojoba (Simmondsia chinensis) Oil",
        "ewg": "1",
        "concentration": "13% to 18%"
      },
      {
        "title": "Undecane (and) Tridecane",
        "ewg": "1",
        "concentration": "8% to 12%"
      },
      {
        "title": "Dicaprylyl Carbonate",
        "ewg": "1",
        "concentration": "6% to 8%"
      },
      {
        "title": "Manjistha (Rubia cordifolia) Oil",
        "ewg": "na",
        "concentration": "3% to 5%"
      },
      {
        "title": "Tocopherol",
        "ewg": "1",
        "concentration": "1.5% to 3%"
      },
      {
        "title": "Ribes Nigrum (Black Currant) Seed Oil (and) Octyldodecanol (and) Octyldodecyl Oleate (and) Octyldodecyl Stearoyl Stearate (and) Paeonia Suffruticosa Root Extract (and) Rosmarinus Officinalis (Rosemary) Leaf Extract",
        "ewg": "1",
        "concentration": "1% to 2%"
      },
      {
        "title": "Rose Indian (Rosa Damascena)",
        "ewg": "3",
        "concentration": "1% to 2%"
      }
    ],
    "suitableFor": "[object Object], [object Object]",
    "recommendedFor": "[object Object], [object Object], [object Object], [object Object]",
    "usage": {
      "when": "PM.",
      "how": "Gently massage 2-5 drops to face and neck after cleansing. Leave overnight for best results.",
      "goodToKnow": "If you have to layer, best to treat this as a ‘moisturiser’ step, that is, apply after cleansing, toning and serums.",
      "dose": "Weekly Thrice.",
      "precautions": "External use only."
    },
    "faqs": [
      {
        "question": "Can we use these oils to massage the face?",
        "answer": "Yes Definitely! You can use the oil to massage your face, added to that you can use a massage tool such as gua sha roller to make it more Impactful. However it's not important to use a massage tool if you don't have one, you can use your hands to massage it too!"
      },
      {
        "question": "Will it make me break out?",
        "answer": "No! The oil acts as a natural skin conditioner and is extremely beneficial in hydrating & moisturising the skin, the oil is great to achieve a radiant glowing skin."
      },
      {
        "question": "Will it make my face oily?",
        "answer": "No! The oil is a super-absorbable oil which will absorb in the skin immediately after applying."
      },
      {
        "question": "Can we use it on acne-prone skin?",
        "answer": "Yes! The oil can be used on acne-prone skin as it is loaded with antioxidants, anti-inflammatory, and anti-bacterial properties and is extremely beneficial for giving your skin a glowing and radiant look."
      },
      {
        "question": "Should I use this twice a day?",
        "answer": "The oil is meant for your PM routine which means that ideally the oil should be used just before sleeping. However there will be no harm to the skin if it is used twice a day."
      },
      {
        "question": "Can I use this product in the morning?",
        "answer": "It is formulated with powerful oils, in a way best suited for the PM. However, of course, you can use it in the morning. But we do advise you not to step into the sun with the oil on."
      },
      {
        "question": "I have oily skin. Will the product be greasy?",
        "answer": "This is a light oil that could benefit even people with oily skin."
      },
      {
        "question": "Can this oil be used when using a Gua Sha or a Roller?",
        "answer": "Absolutely yes. This oil can work very well with a roller / gua sha."
      }
    ],
    "rating": 4.8,
    "reviewsCount": 225
  }
];
