export const BattleAbilities: any = [
    {
        shortDesc: 'Does nothing.',
        id: 'noability',
        isNonstandard: 'gen2',
        name: 'No Ability',
        rating: 0.1,
        num: 0,
    },
    {
        desc:
            "This Pokemon's moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5.",
        shortDesc:
            "This Pokemon's same-type attack bonus (STAB) is 2 instead of 1.5.",
        id: 'adaptability',
        name: 'Adaptability',
        rating: 4,
        num: 91,
    },
    {
        desc:
            "If this Pokemon is knocked out with a contact move, that move's user loses 1/4 of its maximum HP, rounded down. If any active Pokemon has the Ability Damp, this effect is prevented.",
        shortDesc:
            "If this Pokemon is KOed with a contact move, that move's user loses 1/4 its max HP.",
        id: 'aftermath',
        name: 'Aftermath',
        rating: 2.5,
        num: 106,
    },
    {
        desc:
            "This Pokemon's Normal-type moves become Flying-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
        shortDesc:
            "This Pokemon's Normal-type moves become Flying type and have 1.2x power.",
        id: 'aerilate',
        name: 'Aerilate',
        rating: 4,
        num: 185,
    },
    {
        shortDesc:
            'While this Pokemon is active, the effects of weather conditions are disabled.',
        suppressWeather: true,
        id: 'airlock',
        name: 'Air Lock',
        rating: 2.5,
        num: 76,
    },
    {
        desc:
            "The power of this Pokemon's move is multiplied by 1.3 if it is the last to move in a turn. Does not affect Doom Desire and Future Sight.",
        shortDesc:
            "This Pokemon's attacks have 1.3x power if it is the last to move in a turn.",
        onBasePowerPriority: 8,
        id: 'analytic',
        name: 'Analytic',
        rating: 2.5,
        num: 148,
    },
    {
        desc:
            'If this Pokemon, but not its substitute, is struck by a critical hit, its Attack is raised by 12 stages.',
        shortDesc:
            'If this Pokemon (not its substitute) takes a critical hit, its Attack is raised 12 stages.',
        id: 'angerpoint',
        name: 'Anger Point',
        rating: 2,
        num: 83,
    },
    {
        desc:
            'On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective on this Pokemon, or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, while Hidden Power, Judgment, Natural Gift, Techno Blast, and Weather Ball are considered Normal-type moves.',
        shortDesc:
            'On switch-in, this Pokemon shudders if any foe has a supereffective or OHKO move.',
        id: 'anticipation',
        name: 'Anticipation',
        rating: 1,
        num: 107,
    },
    {
        desc:
            'Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or are airborne.',
        shortDesc:
            'Prevents adjacent foes from choosing to switch unless they are airborne.',
        id: 'arenatrap',
        name: 'Arena Trap',
        rating: 4.5,
        num: 71,
    },
    {
        desc:
            'This Pokemon and its allies cannot be affected by Attract, Disable, Encore, Heal Block, Taunt, or Torment.',
        shortDesc:
            'Protects user/allies from Attract, Disable, Encore, Heal Block, Taunt, and Torment.',
        id: 'aromaveil',
        name: 'Aroma Veil',
        rating: 1.5,
        num: 165,
    },
    {
        desc:
            'While this Pokemon is active, the effects of the Abilities Dark Aura and Fairy Aura are reversed, multiplying the power of Dark- and Fairy-type moves, respectively, by 3/4 instead of 1.33.',
        shortDesc:
            'While this Pokemon is active, the Dark Aura and Fairy Aura power modifier is 0.75x.',
        id: 'aurabreak',
        name: 'Aura Break',
        rating: 1.5,
        num: 188,
    },
    {
        desc:
            'Causes adjacent opposing Pokemon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep.',
        shortDesc:
            'Causes sleeping adjacent foes to lose 1/8 of their max HP at the end of each turn.',
        id: 'baddreams',
        name: 'Bad Dreams',
        rating: 2,
        num: 123,
    },
    {
        shortDesc:
            "This Pokemon's allies have the power of their special attacks multiplied by 1.3.",
        onBasePowerPriority: 8,
        id: 'battery',
        name: 'Battery',
        rating: 0,
        num: 217,
    },
    {
        shortDesc: 'This Pokemon cannot be struck by a critical hit.',
        onCriticalHit: false,
        id: 'battlearmor',
        name: 'Battle Armor',
        rating: 1,
        num: 4,
    },
    {
        desc:
            'If this Pokemon is a Greninja, it transforms into Ash-Greninja after knocking out a Pokemon. As Ash-Greninja, its Water Shuriken has 20 base power and always hits 3 times.',
        shortDesc:
            'After KOing a Pokemon: becomes Ash-Greninja, Water Shuriken: 20 power, hits 3x.',
        onModifyMovePriority: -1,
        id: 'battlebond',
        name: 'Battle Bond',
        rating: 3,
        num: 210,
    },
    {
        desc:
            "This Pokemon's highest stat is raised by 1 stage if it attacks and knocks out another Pokemon.",
        shortDesc:
            "This Pokemon's highest stat is raised by 1 if it attacks and KOes another Pokemon.",
        id: 'beastboost',
        name: 'Beast Boost',
        rating: 3.5,
        num: 224,
    },
    {
        desc:
            'When this Pokemon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Special Attack is raised by 1 stage. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.',
        shortDesc:
            "This Pokemon's Sp. Atk is raised by 1 when it reaches 1/2 or less of its max HP.",
        id: 'berserk',
        name: 'Berserk',
        rating: 2.5,
        num: 201,
    },
    {
        shortDesc:
            "Prevents other Pokemon from lowering this Pokemon's Defense stat stage.",
        id: 'bigpecks',
        name: 'Big Pecks',
        rating: 0.5,
        num: 145,
    },
    {
        desc:
            'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fire-type attack.',
        shortDesc:
            "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Fire attacks.",
        id: 'blaze',
        name: 'Blaze',
        rating: 2,
        num: 66,
    },
    {
        desc:
            'This Pokemon is immune to ballistic moves. Ballistic moves include Bullet Seed, Octazooka, Barrage, Rock Wrecker, Zap Cannon, Acid Spray, Aura Sphere, Focus Blast, and all moves with Ball or Bomb in their name.',
        shortDesc:
            'Makes user immune to ballistic moves (Shadow Ball, Sludge Bomb, Focus Blast, etc).',
        id: 'bulletproof',
        name: 'Bulletproof',
        rating: 3.5,
        num: 171,
    },
    {
        desc:
            "If this Pokemon eats a Berry, it restores 1/3 of its maximum HP, rounded down, in addition to the Berry's effect.",
        shortDesc:
            "If this Pokemon eats a Berry, it restores 1/3 of its max HP after the Berry's effect.",
        id: 'cheekpouch',
        name: 'Cheek Pouch',
        rating: 2,
        num: 167,
    },
    {
        shortDesc: "If Sunny Day is active, this Pokemon's Speed is doubled.",
        id: 'chlorophyll',
        name: 'Chlorophyll',
        rating: 3,
        num: 34,
    },
    {
        shortDesc:
            "Prevents other Pokemon from lowering this Pokemon's stat stages.",
        id: 'clearbody',
        name: 'Clear Body',
        rating: 2,
        num: 29,
    },
    {
        shortDesc:
            'While this Pokemon is active, the effects of weather conditions are disabled.',
        suppressWeather: true,
        id: 'cloudnine',
        name: 'Cloud Nine',
        rating: 2.5,
        num: 13,
    },
    {
        desc:
            "This Pokemon's type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.",
        shortDesc:
            "This Pokemon's type changes to the type of a move it's hit by, unless it has the type.",
        id: 'colorchange',
        name: 'Color Change',
        rating: 1,
        num: 16,
    },
    {
        desc:
            'This Pokemon cannot be statused, and is considered to be asleep. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.',
        shortDesc:
            'This Pokemon cannot be statused, and is considered to be asleep.',
        isUnbreakable: true,
        id: 'comatose',
        name: 'Comatose',
        rating: 3,
        num: 213,
    },
    {
        desc:
            "This Pokemon's Special Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.",
        shortDesc:
            "This Pokemon's Sp. Atk is raised by 2 for each of its stats that is lowered by a foe.",
        id: 'competitive',
        name: 'Competitive',
        rating: 2.5,
        num: 172,
    },
    {
        shortDesc:
            "This Pokemon's moves have their accuracy multiplied by 1.3.",
        id: 'compoundeyes',
        name: 'Compound Eyes',
        rating: 3.5,
        num: 14,
    },
    {
        shortDesc:
            'If this Pokemon has a stat stage raised it is lowered instead, and vice versa.',
        id: 'contrary',
        name: 'Contrary',
        rating: 4,
        num: 126,
    },
    {
        shortDesc:
            'This Pokemon can poison or badly poison other Pokemon regardless of their typing.',
        id: 'corrosion',
        name: 'Corrosion',
        rating: 2.5,
        num: 212,
    },
    {
        desc:
            "If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled unless one of the attacker's moves is already disabled.",
        shortDesc:
            'If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled.',
        id: 'cursedbody',
        name: 'Cursed Body',
        rating: 2,
        num: 130,
    },
    {
        desc:
            'There is a 30% chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender.',
        shortDesc:
            '30% chance of infatuating Pokemon of the opposite gender if they make contact.',
        id: 'cutecharm',
        name: 'Cute Charm',
        rating: 1,
        num: 56,
    },
    {
        desc:
            'While this Pokemon is active, Explosion, Mind Blown, Self-Destruct, and the Ability Aftermath are prevented from having an effect.',
        shortDesc:
            'Prevents Explosion/Mind Blown/Self-Destruct/Aftermath while this Pokemon is active.',
        id: 'damp',
        name: 'Damp',
        rating: 1,
        num: 6,
    },
    {
        desc:
            'After another Pokemon uses a dance move, this Pokemon uses the same move. Moves used by this Ability cannot be copied again.',
        shortDesc:
            'After another Pokemon uses a dance move, this Pokemon uses the same move.',
        id: 'dancer',
        name: 'Dancer',
        rating: 2.5,
        num: 216,
    },
    {
        desc:
            'While this Pokemon is active, the power of Dark-type moves used by active Pokemon is multiplied by 1.33.',
        shortDesc:
            'While this Pokemon is active, a Dark move used by any Pokemon has 1.33x power.',
        isUnbreakable: true,
        id: 'darkaura',
        name: 'Dark Aura',
        rating: 3,
        num: 186,
    },
    {
        desc:
            'While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.',
        shortDesc:
            'While this Pokemon is active, allies are protected from opposing priority moves.',
        id: 'dazzling',
        name: 'Dazzling',
        rating: 3,
        num: 219,
    },
    {
        desc:
            'While this Pokemon has 1/2 or less of its maximum HP, its Attack and Special Attack are halved.',
        shortDesc:
            'While this Pokemon has 1/2 or less of its max HP, its Attack and Sp. Atk are halved.',
        id: 'defeatist',
        name: 'Defeatist',
        rating: -1,
        num: 129,
    },
    {
        desc:
            "This Pokemon's Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.",
        shortDesc:
            "This Pokemon's Attack is raised by 2 for each of its stats that is lowered by a foe.",
        id: 'defiant',
        name: 'Defiant',
        rating: 2.5,
        num: 128,
    },
    {
        desc:
            'On switch-in, the weather becomes strong winds that remove the weaknesses of the Flying type from Flying-type Pokemon. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Desolate Land or Primordial Sea.',
        shortDesc:
            'On switch-in, strong winds begin until this Ability is not active in battle.',
        id: 'deltastream',
        name: 'Delta Stream',
        rating: 5,
        num: 191,
    },
    {
        desc:
            'On switch-in, the weather becomes extremely harsh sunlight that prevents damaging Water-type moves from executing, in addition to all the effects of Sunny Day. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Primordial Sea.',
        shortDesc:
            'On switch-in, extremely harsh sunlight begins until this Ability is not active in battle.',
        id: 'desolateland',
        name: 'Desolate Land',
        rating: 5,
        num: 190,
    },
    {
        desc:
            'If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken and it changes to Busted Form. Confusion damage also breaks the disguise.',
        shortDesc:
            'If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage.',
        onDamagePriority: 1,
        id: 'disguise',
        name: 'Disguise',
        rating: 4,
        num: 209,
    },
    {
        desc:
            "On switch-in, this Pokemon's Attack or Special Attack is raised by 1 stage based on the weaker combined defensive stat of all opposing Pokemon. Attack is raised if their Defense is lower, and Special Attack is raised if their Special Defense is the same or lower.",
        shortDesc:
            "On switch-in, Attack or Sp. Atk is raised 1 stage based on the foes' weaker Defense.",
        id: 'download',
        name: 'Download',
        rating: 4,
        num: 88,
    },
    {
        shortDesc: 'On switch-in, this Pokemon summons Rain Dance.',
        id: 'drizzle',
        name: 'Drizzle',
        rating: 4.5,
        num: 2,
    },
    {
        shortDesc: 'On switch-in, this Pokemon summons Sunny Day.',
        id: 'drought',
        name: 'Drought',
        rating: 4.5,
        num: 70,
    },
    {
        desc:
            'This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move. The power of Fire-type moves is multiplied by 1.25 when used on this Pokemon. At the end of each turn, this Pokemon restores 1/8 of its maximum HP, rounded down, if the weather is Rain Dance, and loses 1/8 of its maximum HP, rounded down, if the weather is Sunny Day.',
        shortDesc:
            'This Pokemon is healed 1/4 by Water, 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun.',
        id: 'dryskin',
        name: 'Dry Skin',
        rating: 3,
        num: 87,
    },
    {
        shortDesc: "This Pokemon's sleep counter drops by 2 instead of 1.",
        id: 'earlybird',
        name: 'Early Bird',
        rating: 2,
        num: 48,
    },
    {
        desc:
            '30% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep.',
        shortDesc:
            '30% chance of poison/paralysis/sleep on others making contact with this Pokemon.',
        id: 'effectspore',
        name: 'Effect Spore',
        rating: 2,
        num: 27,
    },
    {
        shortDesc: 'On switch-in, this Pokemon summons Electric Terrain.',
        id: 'electricsurge',
        name: 'Electric Surge',
        rating: 4,
        num: 226,
    },
    {
        desc:
            'When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage.',
        shortDesc:
            'This Pokemon switches out when it reaches 1/2 or less of its maximum HP.',
        id: 'emergencyexit',
        name: 'Emergency Exit',
        rating: 2,
        num: 194,
    },
    {
        desc:
            'While this Pokemon is active, the power of Fairy-type moves used by active Pokemon is multiplied by 1.33.',
        shortDesc:
            'While this Pokemon is active, a Fairy move used by any Pokemon has 1.33x power.',
        isUnbreakable: true,
        id: 'fairyaura',
        name: 'Fairy Aura',
        rating: 3,
        num: 187,
    },
    {
        shortDesc:
            'This Pokemon receives 3/4 damage from supereffective attacks.',
        id: 'filter',
        name: 'Filter',
        rating: 3,
        num: 111,
    },
    {
        shortDesc:
            '30% chance a Pokemon making contact with this Pokemon will be burned.',
        id: 'flamebody',
        name: 'Flame Body',
        rating: 2,
        num: 49,
    },
    {
        desc:
            'While this Pokemon is burned, the power of its special attacks is multiplied by 1.5.',
        shortDesc:
            'While this Pokemon is burned, its special attacks have 1.5x power.',
        id: 'flareboost',
        name: 'Flare Boost',
        rating: 2.5,
        num: 138,
    },
    {
        desc:
            'This Pokemon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its attacking stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pokemon is frozen, it cannot be defrosted by Fire-type attacks.',
        shortDesc:
            "This Pokemon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity.",
        id: 'flashfire',
        name: 'Flash Fire',
        rating: 3,
        num: 18,
    },
    {
        desc:
            'If this Pokemon is a Cherrim and Sunny Day is active, it changes to Sunshine Form and the Attack and Special Defense of it and its allies are multiplied by 1.5.',
        shortDesc:
            "If user is Cherrim and Sunny Day is active, it and allies' Attack and Sp. Def are 1.5x.",
        id: 'flowergift',
        name: 'Flower Gift',
        rating: 2.5,
        num: 122,
    },
    {
        desc:
            "Grass-type Pokemon on this Pokemon's side cannot have their stat stages lowered by other Pokemon or have a major status condition inflicted on them by other Pokemon.",
        shortDesc:
            "This side's Grass types can't have stats lowered or status inflicted by other Pokemon.",
        id: 'flowerveil',
        name: 'Flower Veil',
        rating: 0,
        num: 166,
    },
    {
        desc:
            'This Pokemon receives 1/2 damage from contact moves, but double damage from Fire moves.',
        shortDesc:
            'This Pokemon takes 1/2 damage from contact moves, 2x damage from Fire moves.',
        id: 'fluffy',
        name: 'Fluffy',
        rating: 2.5,
        num: 218,
    },
    {
        desc:
            "If this Pokemon is a Castform, its type changes to the current weather condition's type, except Sandstorm.",
        shortDesc:
            "Castform's type changes to the current weather condition's type, except Sandstorm.",
        id: 'forecast',
        name: 'Forecast',
        rating: 3,
        num: 59,
    },
    {
        desc:
            'On switch-in, this Pokemon is alerted to the move with the highest power, at random, known by an opposing Pokemon.',
        shortDesc:
            "On switch-in, this Pokemon is alerted to the foes' move with the highest power.",
        id: 'forewarn',
        name: 'Forewarn',
        rating: 1,
        num: 108,
    },
    {
        shortDesc:
            "This Pokemon's allies receive 3/4 damage from other Pokemon's attacks.",
        id: 'friendguard',
        name: 'Friend Guard',
        rating: 0,
        num: 132,
    },
    {
        shortDesc:
            'On switch-in, this Pokemon identifies the held items of all opposing Pokemon.',
        id: 'frisk',
        name: 'Frisk',
        rating: 1.5,
        num: 119,
    },
    {
        desc:
            "Prevents other Pokemon from lowering this Pokemon's stat stages. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.",
        shortDesc:
            "Prevents other Pokemon from lowering this Pokemon's stat stages.",
        isUnbreakable: true,
        id: 'fullmetalbody',
        name: 'Full Metal Body',
        rating: 2,
        num: 230,
    },
    {
        shortDesc: "This Pokemon's Defense is doubled.",
        onModifyDefPriority: 6,
        id: 'furcoat',
        name: 'Fur Coat',
        rating: 3.5,
        num: 169,
    },
    {
        shortDesc:
            'If this Pokemon is at full HP, its Flying-type moves have their priority increased by 1.',
        id: 'galewings',
        name: 'Gale Wings',
        rating: 3,
        num: 177,
    },
    {
        desc:
            "This Pokemon's Normal-type moves become Electric-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
        shortDesc:
            "This Pokemon's Normal-type moves become Electric type and have 1.2x power.",
        id: 'galvanize',
        name: 'Galvanize',
        rating: 4,
        num: 206,
    },
    {
        shortDesc:
            'When this Pokemon has 1/2 or less of its maximum HP, it uses certain Berries early.',
        id: 'gluttony',
        name: 'Gluttony',
        rating: 1.5,
        num: 82,
    },
    {
        shortDesc:
            'Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.',
        id: 'gooey',
        name: 'Gooey',
        rating: 2.5,
        num: 183,
    },
    {
        shortDesc:
            "If Grassy Terrain is active, this Pokemon's Defense is multiplied by 1.5.",
        id: 'grasspelt',
        name: 'Grass Pelt',
        rating: 1,
        num: 179,
    },
    {
        shortDesc: 'On switch-in, this Pokemon summons Grassy Terrain.',
        id: 'grassysurge',
        name: 'Grassy Surge',
        rating: 4,
        num: 229,
    },
    {
        desc:
            "If this Pokemon has a major status condition, its Attack is multiplied by 1.5; burn's physical damage halving is ignored.",
        shortDesc:
            'If this Pokemon is statused, its Attack is 1.5x; ignores burn halving physical damage.',
        id: 'guts',
        name: 'Guts',
        rating: 3,
        num: 62,
    },
    {
        desc:
            'If the last item this Pokemon used is a Berry, there is a 50% chance it gets restored at the end of each turn. If Sunny Day is active, this chance is 100%.',
        shortDesc:
            'If last item used is a Berry, 50% chance to restore it each end of turn. 100% in Sun.',
        id: 'harvest',
        name: 'Harvest',
        rating: 2.5,
        num: 139,
    },
    {
        desc:
            "There is a 30% chance of curing an adjacent ally's major status condition at the end of each turn.",
        shortDesc:
            "30% chance of curing an adjacent ally's status at the end of each turn.",
        id: 'healer',
        name: 'Healer',
        rating: 0,
        num: 131,
    },
    {
        desc:
            'The power of Fire-type attacks against this Pokemon is halved, and burn damage taken is halved.',
        shortDesc:
            'The power of Fire-type attacks against this Pokemon is halved; burn damage halved.',
        id: 'heatproof',
        name: 'Heatproof',
        rating: 2.5,
        num: 85,
    },
    {
        shortDesc: "This Pokemon's weight is doubled.",
        id: 'heavymetal',
        name: 'Heavy Metal',
        rating: -1,
        num: 134,
    },
    {
        shortDesc: 'No competitive use.',
        id: 'honeygather',
        name: 'Honey Gather',
        rating: 0,
        num: 118,
    },
    {
        shortDesc: "This Pokemon's Attack is doubled.",
        onModifyAtkPriority: 5,
        id: 'hugepower',
        name: 'Huge Power',
        rating: 5,
        num: 37,
    },
    {
        desc:
            "This Pokemon's Attack is multiplied by 1.5 and the accuracy of its physical attacks is multiplied by 0.8.",
        shortDesc:
            "This Pokemon's Attack is 1.5x and accuracy of its physical attacks is 0.8x.",
        id: 'hustle',
        name: 'Hustle',
        rating: 3,
        num: 55,
    },
    {
        desc:
            'This Pokemon has its major status condition cured at the end of each turn if Rain Dance is active.',
        shortDesc:
            'This Pokemon has its status cured at the end of each turn if Rain Dance is active.',
        id: 'hydration',
        name: 'Hydration',
        rating: 2,
        num: 93,
    },
    {
        shortDesc:
            "Prevents other Pokemon from lowering this Pokemon's Attack stat stage.",
        id: 'hypercutter',
        name: 'Hyper Cutter',
        rating: 1.5,
        num: 52,
    },
    {
        desc:
            'If Hail is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This Pokemon takes no damage from Hail.',
        shortDesc:
            'If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail.',
        id: 'icebody',
        name: 'Ice Body',
        rating: 1.5,
        num: 115,
    },
    {
        shortDesc: 'No competitive use.',
        id: 'illuminate',
        name: 'Illuminate',
        rating: 0,
        num: 35,
    },
    {
        desc:
            "When this Pokemon switches in, it appears as the last unfainted Pokemon in its party until it takes direct damage from another Pokemon's attack. This Pokemon's actual level and HP are displayed instead of those of the mimicked Pokemon.",
        shortDesc:
            'This Pokemon appears as the last Pokemon in the party until it takes direct damage.',
        isUnbreakable: true,
        id: 'illusion',
        name: 'Illusion',
        rating: 4,
        num: 149,
    },
    {
        shortDesc:
            'This Pokemon cannot be poisoned. Gaining this Ability while poisoned cures it.',
        id: 'immunity',
        name: 'Immunity',
        rating: 2,
        num: 17,
    },
    {
        desc:
            'On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it. If there is no Pokemon at that position, this Pokemon does not Transform.',
        shortDesc:
            'On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it.',
        id: 'imposter',
        name: 'Imposter',
        rating: 4.5,
        num: 150,
    },
    {
        desc:
            "This Pokemon's moves ignore substitutes and the opposing side's Reflect, Light Screen, Safeguard, Mist and Aurora Veil.",
        shortDesc:
            "Moves ignore substitutes and foe's Reflect/Light Screen/Safeguard/Mist/Aurora Veil.",
        id: 'infiltrator',
        name: 'Infiltrator',
        rating: 3,
        num: 151,
    },
    {
        desc:
            "If this Pokemon is knocked out with a move, that move's user loses HP equal to the amount of damage inflicted on this Pokemon.",
        shortDesc:
            "If this Pokemon is KOed with a move, that move's user loses an equal amount of HP.",
        id: 'innardsout',
        name: 'Innards Out',
        rating: 2.5,
        num: 215,
    },
    {
        shortDesc: 'This Pokemon cannot be made to flinch.',
        onFlinch: false,
        id: 'innerfocus',
        name: 'Inner Focus',
        rating: 1.5,
        num: 39,
    },
    {
        shortDesc:
            'This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.',
        id: 'insomnia',
        name: 'Insomnia',
        rating: 2,
        num: 15,
    },
    {
        desc:
            'On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.',
        shortDesc:
            'On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.',
        id: 'intimidate',
        name: 'Intimidate',
        rating: 3.5,
        num: 22,
    },
    {
        desc:
            'Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.',
        shortDesc:
            'Pokemon making contact with this Pokemon lose 1/8 of their max HP.',
        id: 'ironbarbs',
        name: 'Iron Barbs',
        rating: 3,
        num: 160,
    },
    {
        desc:
            "This Pokemon's punch-based attacks have their power multiplied by 1.2.",
        shortDesc:
            "This Pokemon's punch-based attacks have 1.2x power. Sucker Punch is not boosted.",
        id: 'ironfist',
        name: 'Iron Fist',
        rating: 3,
        num: 89,
    },
    {
        shortDesc:
            "This Pokemon's Attack is raised by 1 stage after it is damaged by a Dark-type move.",
        id: 'justified',
        name: 'Justified',
        rating: 2,
        num: 154,
    },
    {
        desc:
            "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage. This Pokemon ignores a target's evasiveness stat stage.",
        shortDesc:
            "This Pokemon's accuracy can't be lowered by others; ignores their evasiveness stat.",
        id: 'keeneye',
        name: 'Keen Eye',
        rating: 1,
        num: 51,
    },
    {
        desc:
            "This Pokemon's held item has no effect. This Pokemon cannot use Fling successfully. Macho Brace, Power Anklet, Power Band, Power Belt, Power Bracer, Power Lens, and Power Weight still have their effects.",
        shortDesc:
            "This Pokemon's held item has no effect, except Macho Brace. Fling cannot be used.",
        id: 'klutz',
        name: 'Klutz',
        rating: -1,
        num: 103,
    },
    {
        desc:
            'If Sunny Day is active, this Pokemon cannot gain a major status condition and Rest will fail for it.',
        shortDesc:
            'If Sunny Day is active, this Pokemon cannot be statused and Rest will fail for it.',
        id: 'leafguard',
        name: 'Leaf Guard',
        rating: 1,
        num: 102,
    },
    {
        desc:
            'This Pokemon is immune to Ground. Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity.',
        shortDesc:
            'This Pokemon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it.',
        id: 'levitate',
        name: 'Levitate',
        rating: 3.5,
        num: 26,
    },
    {
        shortDesc: "This Pokemon's weight is halved.",
        id: 'lightmetal',
        name: 'Light Metal',
        rating: 1,
        num: 135,
    },
    {
        desc:
            'This Pokemon is immune to Electric-type moves and raises its Special Attack by 1 stage when hit by an Electric-type move. If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.',
        shortDesc:
            'This Pokemon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity.',
        id: 'lightningrod',
        name: 'Lightning Rod',
        rating: 3.5,
        num: 32,
    },
    {
        shortDesc:
            'This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it.',
        id: 'limber',
        name: 'Limber',
        rating: 1.5,
        num: 7,
    },
    {
        shortDesc:
            'This Pokemon damages those draining HP from it for as much as they would heal.',
        id: 'liquidooze',
        name: 'Liquid Ooze',
        rating: 1.5,
        num: 64,
    },
    {
        desc:
            "This Pokemon's sound-based moves become Water-type moves. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
        shortDesc: "This Pokemon's sound-based moves become Water type.",
        onModifyMovePriority: -1,
        id: 'liquidvoice',
        name: 'Liquid Voice',
        rating: 2.5,
        num: 204,
    },
    {
        shortDesc:
            "This Pokemon's attacks do not make contact with the target.",
        id: 'longreach',
        name: 'Long Reach',
        rating: 1.5,
        num: 203,
    },
    {
        desc:
            'This Pokemon blocks certain status moves and instead uses the move against the original user.',
        shortDesc:
            'This Pokemon blocks certain status moves and bounces them back to the user.',
        id: 'magicbounce',
        name: 'Magic Bounce',
        rating: 4.5,
        num: 156,
    },
    {
        desc:
            'This Pokemon can only be damaged by direct attacks. Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage are considered direct damage.',
        shortDesc: 'This Pokemon can only be damaged by direct attacks.',
        id: 'magicguard',
        name: 'Magic Guard',
        rating: 4.5,
        num: 98,
    },
    {
        desc:
            'If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack. Does not affect Doom Desire and Future Sight.',
        shortDesc:
            'If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack.',
        id: 'magician',
        name: 'Magician',
        rating: 1.5,
        num: 170,
    },
    {
        shortDesc:
            'This Pokemon cannot be frozen. Gaining this Ability while frozen cures it.',
        id: 'magmaarmor',
        name: 'Magma Armor',
        rating: 0.5,
        num: 40,
    },
    {
        desc:
            'Prevents adjacent opposing Steel-type Pokemon from choosing to switch out unless they are immune to trapping.',
        shortDesc: 'Prevents adjacent Steel-type foes from choosing to switch.',
        id: 'magnetpull',
        name: 'Magnet Pull',
        rating: 4.5,
        num: 42,
    },
    {
        desc:
            'If this Pokemon has a major status condition, its Defense is multiplied by 1.5.',
        shortDesc: 'If this Pokemon is statused, its Defense is 1.5x.',
        onModifyDefPriority: 6,

        id: 'marvelscale',
        name: 'Marvel Scale',
        rating: 2.5,
        num: 63,
    },
    {
        desc:
            "This Pokemon's pulse moves have their power multiplied by 1.5. Heal Pulse restores 3/4 of a target's maximum HP, rounded half down.",
        shortDesc:
            "This Pokemon's pulse moves have 1.5x power. Heal Pulse heals 3/4 target's max HP.",
        onBasePowerPriority: 8,

        id: 'megalauncher',
        name: 'Mega Launcher',
        rating: 3.5,
        num: 178,
    },
    {
        shortDesc:
            "This Pokemon's attacks are critical hits if the target is poisoned.",

        id: 'merciless',
        name: 'Merciless',
        rating: 2,
        num: 196,
    },
    {
        desc:
            "If an active ally has this Ability or the Ability Plus, this Pokemon's Special Attack is multiplied by 1.5.",
        shortDesc:
            "If an active ally has this Ability or the Ability Plus, this Pokemon's Sp. Atk is 1.5x.",
        id: 'minus',
        name: 'Minus',
        rating: 0,
        num: 58,
    },
    {
        shortDesc: 'On switch-in, this Pokemon summons Misty Terrain.',

        id: 'mistysurge',
        name: 'Misty Surge',
        rating: 4,
        num: 228,
    },
    {
        shortDesc:
            "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",
        id: 'moldbreaker',
        name: 'Mold Breaker',
        rating: 3.5,
        num: 104,
    },
    {
        desc:
            'This Pokemon has a random stat raised by 2 stages and another stat lowered by 1 stage at the end of each turn.',
        shortDesc:
            'Raises a random stat by 2 and lowers another stat by 1 at the end of each turn.',
        id: 'moody',
        name: 'Moody',
        rating: 5,
        num: 141,
    },
    {
        desc:
            'This Pokemon is immune to Electric-type moves and raises its Speed by 1 stage when hit by an Electric-type move.',
        shortDesc:
            "This Pokemon's Speed is raised 1 stage if hit by an Electric move; Electric immunity.",
        id: 'motordrive',
        name: 'Motor Drive',
        rating: 3,
        num: 78,
    },
    {
        desc:
            "This Pokemon's Attack is raised by 1 stage if it attacks and knocks out another Pokemon.",
        shortDesc:
            "This Pokemon's Attack is raised by 1 stage if it attacks and KOes another Pokemon.",
        id: 'moxie',
        name: 'Moxie',
        rating: 3.5,
        num: 153,
    },
    {
        shortDesc:
            'If this Pokemon is at full HP, damage taken from attacks is halved.',
        id: 'multiscale',
        name: 'Multiscale',
        rating: 4,
        num: 136,
    },
    {
        shortDesc:
            'If this Pokemon is an Arceus, its type changes to match its held Plate or Z-Crystal.',
        id: 'multitype',
        name: 'Multitype',
        rating: 4,
        num: 121,
    },
    {
        desc:
            'Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect the Abilities Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, and Stance Change.',
        shortDesc:
            'Pokemon making contact with this Pokemon have their Ability changed to Mummy.',
        id: 'mummy',
        name: 'Mummy',
        rating: 2,
        num: 152,
    },
    {
        shortDesc:
            'This Pokemon has its major status condition cured when it switches out.',
        id: 'naturalcure',
        name: 'Natural Cure',
        rating: 3.5,
        num: 30,
    },
    {
        shortDesc:
            "This Pokemon's attacks that are super effective against the target do 1.25x damage.",
        id: 'neuroforce',
        name: 'Neuroforce',
        rating: 3,
        num: 233,
    },
    {
        shortDesc:
            'Every move used by or against this Pokemon will always hit.',
        id: 'noguard',
        name: 'No Guard',
        rating: 4,
        num: 99,
    },
    {
        desc:
            "This Pokemon's moves are changed to be Normal type and have their power multiplied by 1.2. This effect comes before other effects that change a move's type.",
        shortDesc:
            "This Pokemon's moves are changed to be Normal type and have 1.2x power.",
        onBasePowerPriority: 8,
        id: 'normalize',
        name: 'Normalize',
        rating: -1,
        num: 96,
    },
    {
        desc:
            'This Pokemon cannot be infatuated or taunted. Gaining this Ability while affected cures it.',
        shortDesc:
            'This Pokemon cannot be infatuated or taunted. Gaining this Ability cures it.',
        id: 'oblivious',
        name: 'Oblivious',
        rating: 1,
        num: 12,
    },
    {
        shortDesc:
            'This Pokemon is immune to powder moves and damage from Sandstorm or Hail.',
        id: 'overcoat',
        name: 'Overcoat',
        rating: 2.5,
        num: 142,
    },
    {
        desc:
            'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Grass-type attack.',
        shortDesc:
            "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Grass attacks.",
        onModifyAtkPriority: 5,
        id: 'overgrow',
        name: 'Overgrow',
        rating: 2,
        num: 65,
    },
    {
        shortDesc:
            'This Pokemon cannot be confused. Gaining this Ability while confused cures it.',
        id: 'owntempo',
        name: 'Own Tempo',
        rating: 1.5,
        num: 20,
    },
    {
        desc:
            "This Pokemon's damaging moves become multi-hit moves that hit twice. The second hit has its damage quartered. Does not affect multi-hit moves or moves that have multiple targets.",
        shortDesc:
            "This Pokemon's damaging moves hit twice. The second hit has its damage quartered.",
        id: 'parentalbond',
        name: 'Parental Bond',
        rating: 5,
        num: 184,
    },
    {
        shortDesc:
            'If this Pokemon has no item, it finds one used by an adjacent Pokemon this turn.',
        id: 'pickup',
        name: 'Pickup',
        rating: 0.5,
        num: 53,
    },
    {
        desc:
            'If this Pokemon has no item, it steals the item off a Pokemon that makes contact with it. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.',
        shortDesc:
            'If this Pokemon has no item, it steals the item off a Pokemon making contact with it.',
        id: 'pickpocket',
        name: 'Pickpocket',
        rating: 1,
        num: 124,
    },
    {
        desc:
            "This Pokemon's Normal-type moves become Fairy-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
        shortDesc:
            "This Pokemon's Normal-type moves become Fairy type and have 1.2x power.",
        onBasePowerPriority: 8,
        id: 'pixilate',
        name: 'Pixilate',
        rating: 4,
        num: 182,
    },
    {
        desc:
            "If an active ally has this Ability or the Ability Minus, this Pokemon's Special Attack is multiplied by 1.5.",
        shortDesc:
            "If an active ally has this Ability or the Ability Minus, this Pokemon's Sp. Atk is 1.5x.",
        onModifySpAPriority: 5,
        id: 'plus',
        name: 'Plus',
        rating: 0,
        num: 57,
    },
    {
        desc:
            'If this Pokemon is poisoned, it restores 1/8 of its maximum HP, rounded down, at the end of each turn instead of losing HP.',
        shortDesc:
            'This Pokemon is healed by 1/8 of its max HP each turn when poisoned; no HP loss.',
        id: 'poisonheal',
        name: 'Poison Heal',
        rating: 4,
        num: 90,
    },
    {
        shortDesc:
            '30% chance a Pokemon making contact with this Pokemon will be poisoned.',
        id: 'poisonpoint',
        name: 'Poison Point',
        rating: 2,
        num: 38,
    },
    {
        shortDesc:
            "This Pokemon's contact moves have a 30% chance of poisoning.",
        id: 'poisontouch',
        name: 'Poison Touch',
        rating: 2,
        num: 143,
    },
    {
        desc:
            'If this Pokemon is a Zygarde in its 10% or 50% Forme, it changes to Complete Forme when it has 1/2 or less of its maximum HP at the end of the turn.',
        shortDesc:
            'If Zygarde 10%/50%, changes to Complete if at 1/2 max HP or less at end of turn.',
        id: 'powerconstruct',
        name: 'Power Construct',
        rating: 4,
        num: 211,
    },
    {
        desc:
            'This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Flower Gift, Forecast, Illusion, Imposter, Multitype, Stance Change, Trace, Wonder Guard, and Zen Mode.',
        shortDesc: 'This Pokemon copies the Ability of an ally that faints.',
        id: 'powerofalchemy',
        name: 'Power of Alchemy',
        rating: 0,
        num: 223,
    },
    {
        shortDesc:
            "This Pokemon's Status moves have priority raised by 1, but Dark types are immune.",
        id: 'prankster',
        name: 'Prankster',
        rating: 4,
        num: 158,
    },
    {
        desc:
            "If this Pokemon is the target of an opposing Pokemon's move, that move loses one additional PP.",
        shortDesc:
            "If this Pokemon is the target of a foe's move, that move loses one additional PP.",
        id: 'pressure',
        name: 'Pressure',
        rating: 2,
        num: 46,
    },
    {
        desc:
            'On switch-in, the weather becomes heavy rain that prevents damaging Fire-type moves from executing, in addition to all the effects of Rain Dance. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Desolate Land.',
        shortDesc:
            'On switch-in, heavy rain begins until this Ability is not active in battle.',
        id: 'primordialsea',
        name: 'Primordial Sea',
        rating: 5,
        num: 189,
    },
    {
        desc:
            'This Pokemon receives 3/4 damage from supereffective attacks. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.',
        shortDesc:
            'This Pokemon receives 3/4 damage from supereffective attacks.',
        isUnbreakable: true,
        id: 'prismarmor',
        name: 'Prism Armor',
        rating: 3,
        num: 232,
    },
    {
        desc:
            "This Pokemon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type.",
        shortDesc:
            "This Pokemon's type changes to match the type of the move it is about to use.",
        id: 'protean',
        name: 'Protean',
        rating: 4,
        num: 168,
    },
    {
        shortDesc: 'On switch-in, this Pokemon summons Psychic Terrain.',

        id: 'psychicsurge',
        name: 'Psychic Surge',
        rating: 4,
        num: 227,
    },
    {
        shortDesc: "This Pokemon's Attack is doubled.",
        onModifyAtkPriority: 5,
        id: 'purepower',
        name: 'Pure Power',
        rating: 5,
        num: 74,
    },
    {
        desc:
            'While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.',
        shortDesc:
            'While this Pokemon is active, allies are protected from opposing priority moves.',
        id: 'queenlymajesty',
        name: 'Queenly Majesty',
        rating: 3,
        num: 214,
    },
    {
        desc:
            'If this Pokemon has a major status condition, its Speed is multiplied by 1.5; the Speed drop from paralysis is ignored.',
        shortDesc:
            'If this Pokemon is statused, its Speed is 1.5x; ignores Speed drop from paralysis.',
        id: 'quickfeet',
        name: 'Quick Feet',
        rating: 2.5,
        num: 95,
    },
    {
        desc:
            'If Rain Dance is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn.',
        shortDesc:
            'If Rain Dance is active, this Pokemon heals 1/16 of its max HP each turn.',
        id: 'raindish',
        name: 'Rain Dish',
        rating: 1.5,
        num: 44,
    },
    {
        desc:
            "This Pokemon's Speed is raised by 1 stage if hit by a Bug-, Dark-, or Ghost-type attack.",
        shortDesc:
            "This Pokemon's Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack.",
        id: 'rattled',
        name: 'Rattled',
        rating: 1.5,
        num: 155,
    },
    {
        desc:
            'This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Flower Gift, Forecast, Illusion, Imposter, Multitype, Stance Change, Trace, Wonder Guard, and Zen Mode.',
        shortDesc: 'This Pokemon copies the Ability of an ally that faints.',
        id: 'receiver',
        name: 'Receiver',
        rating: 0,
        num: 222,
    },
    {
        desc:
            "This Pokemon's attacks with recoil or crash damage have their power multiplied by 1.2. Does not affect Struggle.",
        shortDesc:
            "This Pokemon's attacks with recoil or crash damage have 1.2x power; not Struggle.",
        onBasePowerPriority: 8,
        id: 'reckless',
        name: 'Reckless',
        rating: 3,
        num: 120,
    },
    {
        desc:
            "This Pokemon's Normal-type moves become Ice-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
        shortDesc:
            "This Pokemon's Normal-type moves become Ice type and have 1.2x power.",
        onBasePowerPriority: 8,
        id: 'refrigerate',
        name: 'Refrigerate',
        rating: 4,
        num: 174,
    },
    {
        shortDesc:
            'This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out.',
        id: 'regenerator',
        name: 'Regenerator',
        rating: 4,
        num: 144,
    },
    {
        desc:
            "This Pokemon's attacks have their power multiplied by 1.25 against targets of the same gender or multiplied by 0.75 against targets of the opposite gender. There is no modifier if either this Pokemon or the target is genderless.",
        shortDesc:
            "This Pokemon's attacks do 1.25x on same gender targets; 0.75x on opposite gender.",
        onBasePowerPriority: 8,
        id: 'rivalry',
        name: 'Rivalry',
        rating: 0.5,
        num: 79,
    },
    {
        shortDesc:
            'If this Pokemon is a Silvally, its type changes to match its held Memory.',
        id: 'rkssystem',
        name: 'RKS System',
        rating: 4,
        num: 225,
    },
    {
        desc:
            'This Pokemon does not take recoil damage besides Struggle, Life Orb, and crash damage.',
        shortDesc:
            'This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage.',
        id: 'rockhead',
        name: 'Rock Head',
        rating: 2.5,
        num: 69,
    },
    {
        desc:
            'Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.',
        shortDesc:
            'Pokemon making contact with this Pokemon lose 1/8 of their max HP.',
        id: 'roughskin',
        name: 'Rough Skin',
        rating: 3,
        num: 24,
    },
    {
        shortDesc: 'No competitive use.',
        id: 'runaway',
        name: 'Run Away',
        rating: 0,
        num: 50,
    },
    {
        desc:
            "If Sandstorm is active, this Pokemon's Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokemon takes no damage from Sandstorm.",
        shortDesc:
            "This Pokemon's Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it.",
        id: 'sandforce',
        name: 'Sand Force',
        rating: 2,
        num: 159,
    },
    {
        desc:
            "If Sandstorm is active, this Pokemon's Speed is doubled. This Pokemon takes no damage from Sandstorm.",
        shortDesc:
            "If Sandstorm is active, this Pokemon's Speed is doubled; immunity to Sandstorm.",
        id: 'sandrush',
        name: 'Sand Rush',
        rating: 3,
        num: 146,
    },
    {
        shortDesc: 'On switch-in, this Pokemon summons Sandstorm.',
        id: 'sandstream',
        name: 'Sand Stream',
        rating: 4.5,
        num: 45,
    },
    {
        desc:
            "If Sandstorm is active, this Pokemon's evasiveness is multiplied by 1.25. This Pokemon takes no damage from Sandstorm.",
        shortDesc:
            "If Sandstorm is active, this Pokemon's evasiveness is 1.25x; immunity to Sandstorm.",
        id: 'sandveil',
        name: 'Sand Veil',
        rating: 1.5,
        num: 8,
    },
    {
        desc:
            'This Pokemon is immune to Grass-type moves and raises its Attack by 1 stage when hit by a Grass-type move.',
        shortDesc:
            "This Pokemon's Attack is raised 1 stage if hit by a Grass move; Grass immunity.",
        id: 'sapsipper',
        name: 'Sap Sipper',
        rating: 3.5,
        num: 157,
    },
    {
        desc:
            'On switch-in, if this Pokemon is a Wishiwashi that is level 20 or above and has more than 1/4 of its maximum HP left, it changes to School Form. If it is in School Form and its HP drops to 1/4 of its maximum HP or less, it changes to Solo Form at the end of the turn. If it is in Solo Form and its HP is greater than 1/4 its maximum HP at the end of the turn, it changes to School Form.',
        shortDesc:
            'If user is Wishiwashi, changes to School Form if it has > 1/4 max HP, else Solo Form.',
        id: 'schooling',
        name: 'Schooling',
        rating: 3,
        num: 208,
    },
    {
        shortDesc:
            'This Pokemon can hit Ghost types with Normal- and Fighting-type moves.',
        onModifyMovePriority: -5,
        id: 'scrappy',
        name: 'Scrappy',
        rating: 3,
        num: 113,
    },
    {
        shortDesc:
            "This Pokemon's moves have their secondary effect chance doubled.",
        onModifyMovePriority: -2,
        id: 'serenegrace',
        name: 'Serene Grace',
        rating: 4,
        num: 32,
    },
    {
        desc:
            'If this Pokemon is at full HP, damage taken from attacks is halved. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.',
        shortDesc:
            'If this Pokemon is at full HP, damage taken from attacks is halved.',
        isUnbreakable: true,
        id: 'shadowshield',
        name: 'Shadow Shield',
        rating: 4,
        num: 231,
    },
    {
        desc:
            'Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or also have this Ability.',
        shortDesc:
            'Prevents adjacent foes from choosing to switch unless they also have this Ability.',
        id: 'shadowtag',
        name: 'Shadow Tag',
        rating: 5,
        num: 23,
    },
    {
        desc:
            'This Pokemon has a 33% chance to have its major status condition cured at the end of each turn.',
        shortDesc:
            'This Pokemon has a 33% chance to have its status cured at the end of each turn.',
        id: 'shedskin',
        name: 'Shed Skin',
        rating: 3.5,
        num: 61,
    },
    {
        desc:
            "This Pokemon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed.",
        shortDesc:
            "This Pokemon's attacks with secondary effects have 1.3x power; nullifies the effects.",
        onBasePowerPriority: 8,
        id: 'sheerforce',
        name: 'Sheer Force',
        rating: 4,
        num: 125,
    },
    {
        shortDesc: 'This Pokemon cannot be struck by a critical hit.',
        onCriticalHit: false,
        id: 'shellarmor',
        name: 'Shell Armor',
        rating: 1,
        num: 75,
    },
    {
        shortDesc:
            "This Pokemon is not affected by the secondary effect of another Pokemon's attack.",
        id: 'shielddust',
        name: 'Shield Dust',
        rating: 2.5,
        num: 19,
    },
    {
        desc:
            'If this Pokemon is a Minior, it changes to its Core forme if it has 1/2 or less of its maximum HP, and changes to Meteor Form if it has more than 1/2 its maximum HP. This check is done on switch-in and at the end of each turn. While in its Meteor Form, it cannot become affected by major status conditions. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.',
        shortDesc:
            'If Minior, switch-in/end of turn it changes to Core at 1/2 max HP or less, else Meteor.',
        isUnbreakable: true,
        id: 'shieldsdown',
        name: 'Shields Down',
        rating: 3,
        num: 197,
    },
    {
        shortDesc:
            "When this Pokemon's stat stages are raised or lowered, the effect is doubled instead.",
        id: 'simple',
        name: 'Simple',
        rating: 4,
        num: 86,
    },
    {
        shortDesc:
            "This Pokemon's multi-hit attacks always hit the maximum number of times.",
        id: 'skilllink',
        name: 'Skill Link',
        rating: 4,
        num: 92,
    },
    {
        shortDesc:
            "On switch-in, this Pokemon's Attack and Speed are halved for 5 turns.",
        id: 'slowstart',
        name: 'Slow Start',
        rating: -2,
        num: 112,
    },
    {
        shortDesc: "If Hail is active, this Pokemon's Speed is doubled.",
        id: 'slushrush',
        name: 'Slush Rush',
        rating: 2.5,
        num: 202,
    },
    {
        shortDesc:
            'If this Pokemon strikes with a critical hit, the damage is multiplied by 1.5.',
        id: 'sniper',
        name: 'Sniper',
        rating: 1,
        num: 97,
    },
    {
        desc:
            "If Hail is active, this Pokemon's evasiveness is multiplied by 1.25. This Pokemon takes no damage from Hail.",
        shortDesc:
            "If Hail is active, this Pokemon's evasiveness is 1.25x; immunity to Hail.",
        id: 'snowcloak',
        name: 'Snow Cloak',
        rating: 1.5,
        num: 81,
    },
    {
        shortDesc: 'On switch-in, this Pokemon summons Hail.',
        id: 'snowwarning',
        name: 'Snow Warning',
        rating: 4,
        num: 117,
    },
    {
        desc:
            "If Sunny Day is active, this Pokemon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn.",
        shortDesc:
            "If Sunny Day is active, this Pokemon's Sp. Atk is 1.5x; loses 1/8 max HP per turn.",
        id: 'solarpower',
        name: 'Solar Power',
        rating: 1.5,
        num: 94,
    },
    {
        shortDesc:
            'This Pokemon receives 3/4 damage from supereffective attacks.',
        id: 'solidrock',
        name: 'Solid Rock',
        rating: 3,
        num: 116,
    },
    {
        desc:
            "This Pokemon's Special Attack is raised by 1 stage when another Pokemon faints.",
        shortDesc:
            "This Pokemon's Sp. Atk is raised by 1 stage when another Pokemon faints.",
        id: 'soulheart',
        name: 'Soul-Heart',
        rating: 3.5,
        num: 220,
    },
    {
        shortDesc:
            'This Pokemon is immune to sound-based moves, including Heal Bell.',
        id: 'soundproof',
        name: 'Soundproof',
        rating: 2,
        num: 43,
    },
    {
        desc:
            "This Pokemon's Speed is raised by 1 stage at the end of each full turn it has been on the field.",
        shortDesc:
            "This Pokemon's Speed is raised 1 stage at the end of each full turn on the field.",
        id: 'speedboost',
        name: 'Speed Boost',
        rating: 4.5,
        num: 3,
    },
    {
        shortDesc:
            "This Pokemon's attacking stat is doubled against a target that switched in this turn.",
        id: 'stakeout',
        name: 'Stakeout',
        rating: 2.5,
        num: 198,
    },
    {
        shortDesc:
            'This Pokemon moves last among Pokemon using the same or greater priority moves.',
        id: 'stall',
        name: 'Stall',
        rating: -1,
        num: 100,
    },
    {
        shortDesc:
            "This Pokemon's Defense is raised by 1 stage after it is damaged by a move.",
        id: 'stamina',
        name: 'Stamina',
        rating: 3,
        num: 192,
    },
    {
        desc:
            "If this Pokemon is an Aegislash, it changes to Blade Forme before attempting to use an attacking move, and changes to Shield Forme before attempting to use King's Shield.",
        shortDesc:
            "If Aegislash, changes Forme to Blade before attacks and Shield before King's Shield.",
        id: 'stancechange',
        name: 'Stance Change',
        rating: 5,
        num: 176,
    },
    {
        shortDesc:
            '30% chance a Pokemon making contact with this Pokemon will be paralyzed.',
        id: 'static',
        name: 'Static',
        rating: 2,
        num: 9,
    },
    {
        shortDesc: 'If this Pokemon flinches, its Speed is raised by 1 stage.',
        id: 'steadfast',
        name: 'Steadfast',
        rating: 1,
        num: 80,
    },
    {
        shortDesc:
            "This Pokemon's attacking stat is multiplied by 1.5 while using a Steel-type attack.",
        id: 'steelworker',
        name: 'Steelworker',
        rating: 3,
        num: 200,
    },
    {
        shortDesc:
            "This Pokemon's attacks without a chance to flinch have a 10% chance to flinch.",
        onModifyMovePriority: -1,
        id: 'stench',
        name: 'Stench',
        rating: 0.5,
        num: 1,
    },
    {
        shortDesc:
            "This Pokemon cannot lose its held item due to another Pokemon's attack.",
        id: 'stickyhold',
        name: 'Sticky Hold',
        rating: 1.5,
        num: 60,
    },
    {
        desc:
            'This Pokemon is immune to Water-type moves and raises its Special Attack by 1 stage when hit by a Water-type move. If this Pokemon is not the target of a single-target Water-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.',
        shortDesc:
            'This Pokemon draws Water moves to itself to raise Sp. Atk by 1; Water immunity.',
        id: 'stormdrain',
        name: 'Storm Drain',
        rating: 3.5,
        num: 114,
    },
    {
        desc:
            "This Pokemon's bite-based attacks have their power multiplied by 1.5.",
        shortDesc:
            "This Pokemon's bite-based attacks have 1.5x power. Bug Bite is not boosted.",
        onBasePowerPriority: 8,
        id: 'strongjaw',
        name: 'Strong Jaw',
        rating: 3,
        num: 173,
    },
    {
        desc:
            'If this Pokemon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokemon.',
        shortDesc:
            'If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.',
        id: 'sturdy',
        name: 'Sturdy',
        rating: 3,
        num: 5,
    },
    {
        shortDesc:
            "This Pokemon cannot be forced to switch out by another Pokemon's attack or item.",
        onDragOutPriority: 1,
        id: 'suctioncups',
        name: 'Suction Cups',
        rating: 1.5,
        num: 21,
    },
    {
        shortDesc: "This Pokemon's critical hit ratio is raised by 1 stage.",
        id: 'superluck',
        name: 'Super Luck',
        rating: 1.5,
        num: 105,
    },
    {
        shortDesc:
            "If Electric Terrain is active, this Pokemon's Speed is doubled.",
        id: 'surgesurfer',
        name: 'Surge Surfer',
        rating: 2,
        num: 207,
    },
    {
        desc:
            'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack.',
        shortDesc:
            "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Bug attacks.",
        id: 'swarm',
        name: 'Swarm',
        rating: 2,
        num: 68,
    },
    {
        shortDesc: 'This Pokemon and its allies cannot fall asleep.',
        id: 'sweetveil',
        name: 'Sweet Veil',
        rating: 2,
        num: 175,
    },
    {
        shortDesc: "If Rain Dance is active, this Pokemon's Speed is doubled.",
        id: 'swiftswim',
        name: 'Swift Swim',
        rating: 3,
        num: 33,
    },
    {
        desc:
            "If an ally uses its item, this Pokemon gives its item to that ally immediately. Does not activate if the ally's item was stolen or knocked off.",
        shortDesc:
            'If an ally uses its item, this Pokemon gives its item to that ally immediately.',
        id: 'symbiosis',
        name: 'Symbiosis',
        rating: 0,
        num: 180,
    },
    {
        desc:
            'If another Pokemon burns, paralyzes, poisons, or badly poisons this Pokemon, that Pokemon receives the same major status condition.',
        shortDesc:
            'If another Pokemon burns/poisons/paralyzes this Pokemon, it also gets that status.',
        id: 'synchronize',
        name: 'Synchronize',
        rating: 2,
        num: 28,
    },
    {
        shortDesc:
            "This Pokemon's evasiveness is doubled as long as it is confused.",
        id: 'tangledfeet',
        name: 'Tangled Feet',
        rating: 1,
        num: 77,
    },
    {
        shortDesc:
            'Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.',
        id: 'tanglinghair',
        name: 'Tangling Hair',
        rating: 2.5,
        num: 221,
    },
    {
        desc:
            "This Pokemon's moves of 60 power or less have their power multiplied by 1.5. Does affect Struggle.",
        shortDesc:
            "This Pokemon's moves of 60 power or less have 1.5x power. Includes Struggle.",
        id: 'technician',
        name: 'Technician',
        rating: 4,
        num: 101,
    },
    {
        shortDesc:
            'This Pokemon does not take damage from attacks made by its allies.',
        id: 'telepathy',
        name: 'Telepathy',
        rating: 0,
        num: 140,
    },
    {
        shortDesc:
            "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",
        id: 'teravolt',
        name: 'Teravolt',
        rating: 3.5,
        num: 164,
    },
    {
        desc:
            "If a Pokemon uses a Fire- or Ice-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon.",
        shortDesc:
            'Fire/Ice-type moves against this Pokemon deal damage with a halved attacking stat.',
        onModifyAtkPriority: 6,
        id: 'thickfat',
        name: 'Thick Fat',
        rating: 3.5,
        num: 47,
    },
    {
        shortDesc:
            "This Pokemon's attacks that are not very effective on a target deal double damage.",
        id: 'tintedlens',
        name: 'Tinted Lens',
        rating: 3.5,
        num: 110,
    },
    {
        desc:
            'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Water-type attack.',
        shortDesc:
            "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Water attacks.",
        onModifyAtkPriority: 5,
        id: 'torrent',
        name: 'Torrent',
        rating: 2,
        num: 67,
    },
    {
        desc:
            'While this Pokemon is poisoned, the power of its physical attacks is multiplied by 1.5.',
        shortDesc:
            'While this Pokemon is poisoned, its physical attacks have 1.5x power.',
        onBasePowerPriority: 8,
        id: 'toxicboost',
        name: 'Toxic Boost',
        rating: 3,
        num: 137,
    },
    {
        shortDesc:
            "This Pokemon's contact moves have their power multiplied by 1.3.",
        onBasePowerPriority: 8,
        id: 'toughclaws',
        name: 'Tough Claws',
        rating: 3.5,
        num: 181,
    },
    {
        desc:
            'On switch-in, or when this Pokemon acquires this ability, this Pokemon copies a random adjacent opposing Pokemon\'s Ability. However, if one or more adjacent Pokemon has the Ability "No Ability", Trace won\'t copy anything even if there is another valid Ability it could normally copy. Otherwise, if there is no Ability that can be copied at that time, this Ability will activate as soon as an Ability can be copied. Abilities that cannot be copied are the previously mentioned "No Ability", as well as Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Schooling, Stance Change, Trace, and Zen Mode.',
        shortDesc:
            "On switch-in, or when it can, this Pokemon copies a random adjacent foe's Ability.",
        id: 'trace',
        name: 'Trace',
        rating: 3,
        num: 36,
    },
    {
        shortDesc:
            "This Pokemon's healing moves have their priority increased by 3.",
        id: 'triage',
        name: 'Triage',
        rating: 3.5,
        num: 205,
    },
    {
        shortDesc:
            'This Pokemon skips every other turn instead of using a move.',
        id: 'truant',
        name: 'Truant',
        rating: -2,
        num: 54,
    },
    {
        shortDesc:
            "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",
        id: 'turboblaze',
        name: 'Turboblaze',
        rating: 3.5,
        num: 163,
    },
    {
        desc:
            "This Pokemon ignores other Pokemon's Attack, Special Attack, and accuracy stat stages when taking damage, and ignores other Pokemon's Defense, Special Defense, and evasiveness stat stages when dealing damage.",
        shortDesc:
            "This Pokemon ignores other Pokemon's stat stages when taking or doing damage.",
        id: 'unaware',
        name: 'Unaware',
        rating: 3,
        num: 109,
    },
    {
        desc:
            'If this Pokemon loses its held item for any reason, its Speed is doubled. This boost is lost if it switches out or gains a new item or Ability.',
        shortDesc:
            'Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability.',
        id: 'unburden',
        name: 'Unburden',
        rating: 3.5,
        num: 84,
    },
    {
        shortDesc:
            'While this Pokemon is active, it prevents opposing Pokemon from using their Berries.',
        onFoeTryEatItem: false,
        id: 'unnerve',
        name: 'Unnerve',
        rating: 1.5,
        num: 127,
    },
    {
        shortDesc:
            "This Pokemon and its allies' moves have their accuracy multiplied by 1.1.",
        id: 'victorystar',
        name: 'Victory Star',
        rating: 3,
        num: 162,
    },
    {
        shortDesc:
            'This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.',
        id: 'vitalspirit',
        name: 'Vital Spirit',
        rating: 2,
        num: 72,
    },
    {
        desc:
            'This Pokemon is immune to Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move.',
        shortDesc:
            'This Pokemon heals 1/4 of its max HP when hit by Electric moves; Electric immunity.',
        id: 'voltabsorb',
        name: 'Volt Absorb',
        rating: 3.5,
        num: 10,
    },
    {
        desc:
            'This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move.',
        shortDesc:
            'This Pokemon heals 1/4 of its max HP when hit by Water moves; Water immunity.',
        id: 'waterabsorb',
        name: 'Water Absorb',
        rating: 3.5,
        num: 11,
    },
    {
        desc:
            "This Pokemon's attacking stat is doubled while using a Water-type attack. If a Pokemon uses a Fire-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon. This Pokemon cannot be burned. Gaining this Ability while burned cures it.",
        shortDesc:
            "This Pokemon's Water power is 2x; it can't be burned; Fire power against it is halved.",
        id: 'waterbubble',
        name: 'Water Bubble',
        rating: 4,
        num: 199,
    },
    {
        shortDesc:
            "This Pokemon's Defense is raised 2 stages after it is damaged by a Water-type move.",
        id: 'watercompaction',
        name: 'Water Compaction',
        rating: 2,
        num: 195,
    },
    {
        shortDesc:
            'This Pokemon cannot be burned. Gaining this Ability while burned cures it.',
        id: 'waterveil',
        name: 'Water Veil',
        rating: 2,
        num: 41,
    },
    {
        desc:
            'If a physical attack hits this Pokemon, its Defense is lowered by 1 stage and its Speed is raised by 2 stages.',
        shortDesc:
            'If a physical attack hits this Pokemon, Defense is lowered by 1, Speed is raised by 2.',
        id: 'weakarmor',
        name: 'Weak Armor',
        rating: 1,
        num: 133,
    },
    {
        shortDesc:
            "Prevents other Pokemon from lowering this Pokemon's stat stages.",
        id: 'whitesmoke',
        name: 'White Smoke',
        rating: 2,
        num: 73,
    },
    {
        desc:
            'When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage.',
        shortDesc:
            'This Pokemon switches out when it reaches 1/2 or less of its maximum HP.',
        id: 'wimpout',
        name: 'Wimp Out',
        rating: 2,
        num: 193,
    },
    {
        shortDesc:
            'This Pokemon can only be damaged by supereffective moves and indirect damage.',
        id: 'wonderguard',
        name: 'Wonder Guard',
        rating: 5,
        num: 25,
    },
    {
        desc:
            'All non-damaging moves that check accuracy have their accuracy changed to 50% when used on this Pokemon. This change is done before any other accuracy modifying effects.',
        shortDesc:
            'Status moves with accuracy checks are 50% accurate when used on this Pokemon.',
        onModifyAccuracyPriority: 10,
        id: 'wonderskin',
        name: 'Wonder Skin',
        rating: 2,
        num: 147,
    },
    {
        desc:
            "If this Pokemon is a Darmanitan, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan's HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode. If Darmanitan loses this Ability while in Zen Mode it reverts to Standard Mode immediately.",
        shortDesc:
            'If Darmanitan, at end of turn changes Mode to Standard if > 1/2 max HP, else Zen.',
        id: 'zenmode',
        name: 'Zen Mode',
        rating: -1,
        num: 161,
    },
    {
        shortDesc:
            'On switch-in, this Pokemon avoids all Rock-type attacks and Stealth Rock.',
        id: 'mountaineer',
        isNonstandard: true,
        name: 'Mountaineer',
        rating: 3.5,
        num: -2,
    },
    {
        desc:
            'On switch-in, this Pokemon blocks certain status moves and instead uses the move against the original user.',
        shortDesc:
            'On switch-in, blocks certain status moves and bounces them back to the user.',
        id: 'rebound',
        isNonstandard: true,
        name: 'Rebound',
        rating: 3.5,
        num: -3,
    },
    {
        desc:
            'The duration of Gravity, Heal Block, Magic Room, Safeguard, Tailwind, Trick Room, and Wonder Room is increased by 2 turns if the effect is started by this Pokemon.',
        shortDesc:
            'When used, Gravity/Heal Block/Safeguard/Tailwind/Room effects last 2 more turns.',
        id: 'persistent',
        isNonstandard: true,
        name: 'Persistent',
        rating: 3.5,
        num: -4,
    },
];
