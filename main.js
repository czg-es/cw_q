const quotes = [
  {
    "Episode": "01x01",
    "Title": "Ambush",
    "Quote": "Great leaders inspire greatness in others.",
    "Desc": "Jedi Master Yoda must face off against Count Dooku's dreaded assassin Asajj Ventress and her massive droid army to prove the Jedi are strong enough to protect a strategic planet and forge a treaty for the Republic. Ventress fails against Yoda, so Dooku tells Ventress to kill the king of the planet, who wants to sign the treaty with the Republic. Yoda protects the king from Ventress, who then flees."
  },
  {
    "Episode": "01x02",
    "Title": "Rising Malevolence",
    "Quote": "Belief is not a matter of choice,but of conviction.",
    "Desc": "An attack by a devastating new Separatist weapon—the powerful starship Malevolence—leaves Jedi Master Plo Koon and his clone troopers struggling to survive until Anakin and Ahsoka can find them."
  },
  {
    "Episode": "01x03",
    "Title": "Shadow of Malevolence",
    "Quote": "Easy is the path to wisdom for those not blinded by ego.",
    "Desc": "With the help of his Padawan, Ahsoka, and Jedi Master Plo Koon, Anakin uses new long-range Y-wing bombers to lead a bold strike on General Grievous's warship, the Malevolence, and its destructive weapon."
  },
  {
    "Episode": "01x04",
    "Title": "Destroy Malevolence",
    "Quote": "A plan is only as good as those who see it through.",
    "Desc": "Padmé Amidala and C-3PO are taken hostage by General Grievous, leaving Anakin and Obi-Wan to save the senator and complete the destruction of the Malevolence."
  },
  {
    "Episode": "01x05",
    "Title": "Rookies",
    "Quote": "The best confidence builder is experience.",
    "Desc": "Alone on a distant outpost, clone officers Rex and Cody must inspire their rookie unit to believe in themselves to stave off a droid commando invasion."
  },
  {
    "Episode": "01x06",
    "Title": "Downfall of a Droid",
    "Quote": "Trust in your friends,and they'll have reason to trust in you.",
    "Desc": "R2-D2 is lost during a fierce space battle—and Anakin must find him before the Separatists discover the Jedi military secrets locked in his memory banks."
  },
  {
    "Episode": "01x07",
    "Title": "Duel of the Droids",
    "Quote": "You hold onto friends by keeping your heart a little softer than your head.",
    "Desc": "Anakin, Ahsoka, and replacement droid R3-S6 embark on a dual rescue/sabotage mission when they discover that R2-D2 is being held at General Grievous's secret enemy listening post, Skytop Station."
  },
  {
    "Episode": "01x08",
    "Title": "Bombad Jedi",
    "Quote": "Heroes are made by the times.",
    "Desc": "On a diplomatic mission to the planet Rodia, Padmé discovers that her old friend and fellow Republic senator Onaconda Farr has allied his planet with the Separatists. In exchange for food and resources for his people, Onaconda captures Padmé and promises to deliver her to Nute Gunray. Sensing that Padmé is in trouble, Jar Jar Binks disguises himself as a Jedi and, with the help of C-3PO, courageously fights to rescue his friend and fellow senator."
  },
  {
    "Episode": "01x09",
    "Title": "Cloak of Darkness",
    "Quote": "Ignore your instincts at your peril.",
    "Desc": "Ahsoka and Jedi Master Luminara Unduli escort the captured notorious Separatist leader Nute Gunray to Coruscant so he can stand trial for his crimes. However, they are unaware that Count Dooku has sent his assassin, Asajj Ventress, to free their captive. With the help of Senate Commandos, the Jedi have to thwart Ventress's efforts to free their prisoner, despite the traitorous plans of Senate Guard Captain Argyus."
  },
  {
    "Episode": "01x10",
    "Title": "Lair of Grievous",
    "Quote": "Most powerful is he who controls his own power.",
    "Desc": "Jedi Master Kit Fisto and his former Padawan, the Mon Calamari Jedi Nahdar Vebb, track escaped prisoner Nute Gunray to a remote world. Following Nute into a mysterious den filled with strange creatures, weapons, and war-time artifacts, the Jedi discover that it is the trap-laden lair of General Grievous. Learning that Count Dooku has led the Jedi there in order to punish Grievous for his recent failures, the general is determined to prove his abilities and destroy the Jedi. Kit and Nahdar, along with a contingent of clones, must now fight their way past Grievous and his caretaker droid A-4D to avoid being caught in Grievous's evil clutches forever."
  },
  {
    "Episode": "01x11",
    "Title": "Dooku Captured",
    "Quote": "The winding path to peace is always a worthy one,regardless of how many turns it takes.",
    "Desc": "During their own attempt to kidnap Dooku, Anakin and Obi-Wan discover that the Sith lord has already been captured by pirates. Hondo Ohnaka and his gang of pirates hold Dooku captive in their den on Florrum, and hold him for ransom. It is up to Anakin and Obi-Wan to see if the offer is too good to be true."
  },
  {
    "Episode": "01x12",
    "Title": "The Gungan General",
    "Quote": "Fail with honor rather than succeed by fraud.",
    "Desc": "Anakin and Obi-Wan have been duped and are being held for ransom, along with Count Dooku, by the pirate chief Hondo Ohnaka and his second-in-command, Turk Falso. While Anakin, Obi-Wan, and Dooku unsuccessfully attempt to escape, the Republic sends the ransom via a special envoy, including Representative Jar Jar Binks. When Falso tries to steal the ransom from his boss by shooting down the shuttle, the only survivors are a squad of clones and Jar Jar, who as the most senior officer alive has to take charge of the mission. It becomes a race against time as Jar Jar rushes to deliver the ransom to take custody of Dooku and save the Jedi."
  },
  {
    "Episode": "01x13",
    "Title": "Jedi Crash",
    "Quote": "Greed and fear of loss are the roots that lead to the tree of evil.",
    "Desc": "Anakin and Ahsoka arrive at a pitched sky battle to help besieged Jedi General Aayla Secura. Anakin is gravely injured in the fight. Aayla and Ahsoka, along with the now-wounded Anakin, Rex, and the surviving clones, crash land on the uncharted grass-covered planet Maridun. Forced to leave Anakin behind in order to save him, Aayla teaches Ahsoka why the Jedi have no personal attachments. They make their way to a Lurmen village. Their ruler, Tee Watt Kaa, explains that they are pacifists in this war and not aligned with either side. Hesitant to have anything to do with the Jedi, Kaa agrees to help save Anakin's life."
  },
  {
    "Episode": "01x14",
    "Title": "Defenders of Peace",
    "Quote": "When surrounded by war,one must eventually choose a side.",
    "Desc": "Tee Watt Kaa refuses to shelter the Jedi from arriving Separatist forces, fearing that such an action would unnecessarily bring his neutral people into the war. Ahsoka, Aayla, the wounded Anakin, and the rest of the clones respect their wishes as they do not want to jeopardize the village with their presence, so they have to retreat into the wilds of the planet. Separatist Neimoidian General Lok Durd arrives to test a devastating weapon, which they plan to use on the Lurmen. Ultimately, the villagers have to decide whether they will lay down to the Separatists or fight with the Jedi to defend their village."
  },
  {
    "Episode": "01x15",
    "Title": "Trespass",
    "Quote": "Arrogance diminishes wisdom.",
    "Desc": "Arriving on the desolate ice world of Orto Plutonia, Anakin and Obi-Wan investigate the disappearance of a clone security force stationed on a remote outpost. The Jedi, accompanied by Senator Riyo Chuchi and Chairman Cho of the nearby moon of Pantora, soon discover their clone troopers were attacked by a tribe of furry natives known as the Talz. Fierce beast-riding warriors, the Talz are very territorial and only want to be left alone. The Jedi manage to negotiate peace with the Talz chieftain, Thi-Sen, when greedy Chairman Cho breaks it by insisting that the planet and the Talz are under his power. The resulting conflict escalates into war between the clones and the Talz, with the Jedi in the middle."
  },
  {
    "Episode": "01x16",
    "Title": "The Hidden Enemy",
    "Quote": "Truth enlightens the mind,but won't always bring happiness to your heart.",
    "Desc": "Anakin and Obi-Wan lead Republic forces in an attempt to defeat the droid armies and free the planet of Christophsis from the Separatist siege. When the Republic is ambushed and forced to retreat, it becomes clear that someone in their midst has set them up. The Jedi believe this infiltration is a Sith-backed operation and go behind enemy lines to investigate. Meanwhile, Captain Rex and Commander Cody set out to uncover the traitor amongst them."
  },
  {
    "Episode": "01x17",
    "Title": "Blue Shadow Virus",
    "Quote": "Fear is a disease,hope is its only cure.",
    "Desc": "The Republic discovers a Separatist bio-weapon lab hidden on the planet of Naboo. Rather than wait for help, Padmé explores the lab with Jar Jar. Anakin, Ahsoka, Rex, and Obi-Wan arrive and follow after her. They find that the Senator is being held captive by the sinister Dr. Nuvo Vindi. The mad scientist has been developing a lethal virus for the Separatists. Vindi threatens to set off a bomb and release the virus."
  },
  {
    "Episode": "01x18",
    "Title": "Mystery of the Thousand Moons",
    "Quote": "A single chance is a galaxy of hope.",
    "Desc": "Even though the lab has been shut down, Dr. Vindi manages to activate the dreaded Blue Shadow Virus, infecting Ahsoka, Padmé, and many clone troopers. The plague is fatal within 48 hours. Anakin and Obi-Wan must travel to the mysterious planet Iego to secure the only known antidote to the sickness. They arrive to find its population living in fear of a mysterious force that has been killing anything that tries to leave their world. With the help of Jaybo Hood, a clever Iegoan boy, Anakin and Obi-Wan must solve the planet's mystery before they can leave, and before everyone infected with the Separatist virus dies."
  },
  {
    "Episode": "01x19",
    "Title": "Storm over Ryloth",
    "Quote": "It is a rough road that leads to the heights of greatness.",
    "Desc": "Ryloth, home world of the Twi'lek people, has been subjected to military occupation by the droid army of the Separatists and surrounded by a blockade of Trade Federation battleships. While launching a surprise attack against the blockade, Ahsoka disobeys Anakin's orders and ends up losing most of her squadron. Even though she is emotionally rocked by this failure, Anakin helps her learn to persevere, placing her in charge of another risky attack."
  },
  {
    "Episode": "01x20",
    "Title": "Innocents of Ryloth",
    "Quote": "The costs of war can never be truly accounted for.",
    "Desc": "With the space blockade around Ryloth destroyed, Obi-Wan must lead a small clone force into a droid-occupied town to sabotage their anti-aircraft guns. Obi-Wan's mission is complicated when he learns the town's inhabitants are being used as living shields. A pair of clones in his platoon forges an unlikely friendship with a refugee Twi'lek girl, Numa, who has been orphaned by the war. Through their relationship with her, the clones begin to understand the real cost of the war."
  },
  {
    "Episode": "01x21",
    "Title": "Liberty on Ryloth",
    "Quote": "Compromise is a virtue to be cultivated,not a weakness to be despised.",
    "Desc": "The battle for Ryloth rages as the Republic attempts to drive off the occupying droid army led by Techno Union foreman Wat Tambor. With his forces stretched thin, Mace Windu must convince Twi'lek freedom fighter Cham Syndulla to help him save the capital city from the droids' destruction. Initially, the Twi'lek hero is hesitant to aid Mace, but ultimately he realizes that the Jedi can be trusted and joins with him to liberate the city—and ultimately the planet—in the climactic battle."
  },
  {
    "Episode": "01x22",
    "Title": "Hostage Crisis",
    "Quote": "A secret shared is a trust formed.",
    "Desc": "In an attempt to force the release of the crime lord Ziro the Hutt from prison, bounty hunters seize control of the Senate Building and hold members of the Senate hostage. Cad Bane, the leader of the operation, with the help of bounty hunter Aurra Sing, issues his demands to Chancellor Palpatine, who has no choice but to meet his request. Unbeknownst to the hunters, Anakin is loose in the Senate building."
  },
  {
    "Episode": "02x01",
    "Title": "Holocron Heist",
    "Quote": "A lesson learned is a lesson earned.",
    "Desc": "Obi-Wan and Anakin try to stop bounty hunter Cad Bane from stealing a holocron from the Jedi temple. Meanwhile, Ahsoka discovers another shapeshifting bounty hunter disguised as a Jedi."
  },
  {
    "Episode": "02x02",
    "Title": "Cargo of Doom",
    "Quote": "Overconfidence is the most dangerous form of carelessness.",
    "Desc": "Cad Bane moves to sell the stolen holocron to the Separatists while Anakin and Ahsoka try to retrieve it and return it to the holocron vault inside the Jedi Temple."
  },
  {
    "Episode": "02x03",
    "Title": "Children of the Force",
    "Quote": "The first step to correcting a mistake is patience.",
    "Desc": "Cad Bane uses the holocron to find and kidnap Force-sensitive younglings. Anakin and Ahsoka try to find them and take them home while Mace Windu and Obi-Wan track down the holocron."
  },
  {
    "Episode": "02x04",
    "Title": "Senate Spy",
    "Quote": "A true heart should never be doubted.",
    "Desc": "The Jedi suspect that Senator Rush Clovis is working for the Separatists, so they recruit Padmé to spy on him. Anakin discovers that Padmé and Clovis have a romantic history.[a]"
  },
  {
    "Episode": "02x05",
    "Title": "Landing at Point Rain",
    "Quote": "Believe in yourself or no one else will.",
    "Desc": "Using the information stolen from Senator Clovis, Obi-Wan, Anakin, Ahsoka, and Ki-Adi-Mundi lead a combined clone trooper assault on a massive droid factory on Geonosis."
  },
  {
    "Episode": "02x06",
    "Title": "Weapons Factory",
    "Quote": "No gift is more precious than trust.",
    "Desc": "Ahsoka and Luminara Unduli's Padawan Barriss Offee sneak into the droid factory to destroy it while their masters face the new indestructible \"Super Tanks\"."
  },
  {
    "Episode": "02x07",
    "Title": "Legacy of Terror",
    "Quote": "Sometimes,accepting help is harder than offering it.",
    "Desc": "Luminara is captured while looking for Separatist leader Poggle the Lesser, and it's up to Anakin, Obi-Wan, and Commander Cody to enter a colony of Geonosian zombies to find her."
  },
  {
    "Episode": "02x08",
    "Title": "Brain Invaders",
    "Quote": "Attachment is not compassion.",
    "Desc": "Ahsoka and Barriss are to transport critical supplies to a medical station, but their clone troops are infected with mind-controlling Geonosian worms that try to kill the Jedi. Barriss is also infected by this mind-controlling worm."
  },
  {
    "Episode": "02x09",
    "Title": "Grievous Intrigue",
    "Quote": "For everything you gain,you lose something else.",
    "Desc": "Jedi Master Eeth Koth is captured by General Grievous. While Jedi Master Adi Gallia and Anakin try to rescue him, Obi-Wan plays bait to lure Grievous and capture him."
  },
  {
    "Episode": "02x10",
    "Title": "The Deserter",
    "Quote": "It is the quest for honor that makes one honorable.",
    "Desc": "After escaping to the planet Saleucami, Grievous searches for a ship to get offworld. Obi-Wan, Commander Cody, and Rex try to search for Grievous before he escapes the planet. Rex is wounded by a commando droid sniper while scouting ahead and meets a deserter at a farm where he takes shelter."
  },
  {
    "Episode": "02x11",
    "Title": "Lightsaber Lost",
    "Quote": "Easy isn't always simple.",
    "Desc": "When Ahsoka's lightsaber is stolen by a pickpocket, she gets help from the seemingly feeble elder Jedi Tera Sinube as she tracks down the thief."
  },
  {
    "Episode": "02x12",
    "Title": "The Mandalore Plot",
    "Quote": "If you ignore the past,you jeopardize the future.",
    "Desc": "Obi-Wan is assigned to protect Duchess Satine Kryze of Mandalore from a terrorist organization called Death Watch."
  },
  {
    "Episode": "02x13",
    "Title": "Voyage of Temptation",
    "Quote": "Fear not for the future,weep not for the past.",
    "Desc": "As Satine heads to Coruscant protected by clones and two Jedi, Anakin, R2 and the clones find assassin droids in the cargo while Obi-Wan tries to identify the traitor."
  },
  {
    "Episode": "02x14",
    "Title": "Duchess of Mandalore",
    "Quote": "In war,truth is the first casualty.",
    "Desc": "On Coruscant, Satine disguises herself as a civilian to avoid assassins as she pleads for the Senate to leave her planet in peace."
  },
  {
    "Episode": "02x15",
    "Title": "Senate Murders",
    "Quote": "Searching for the truth is easy. Accepting the truth is hard.",
    "Desc": "Senator Onaconda Farr is poisoned, and Padmé teams up with Bail Organa to unmask the culprit, who turns out to be a fellow senator."
  },
  {
    "Episode": "02x16",
    "Title": "Cat and Mouse",
    "Quote": "A wise leader knows when to follow.",
    "Desc": "A highly seasoned Separatist strategist stands between the Republic fleet and beleaguered Republic forces on Christophsis. Anakin finds himself in command of an advanced prototype stealth ship with orders to ferry supplies to the weary troops on the planet below. Will he obey orders, or use the stealth ship to launch a sneak attack on the Separatist blockade?"
  },
  {
    "Episode": "02x17",
    "Title": "Bounty Hunters",
    "Quote": "Courage makes heroes,but trust builds friendships.",
    "Desc": "When Anakin, Ahsoka and Obi-Wan crash on the lush rainforest planet of Felucia, they decide to help four bounty hunters protect local farmers from pirates intent on stealing their valuable crops. Obi-Wan and Anakin soon find out that the pirates are led by the duo's old foe, Hondo.\n\n\nNote: This episode is dedicated to celebrated filmmaker, Akira Kurosawa, and draws parallels from his film \"Seven Samurai\"."
  },
  {
    "Episode": "02x18",
    "Title": "The Zillo Beast",
    "Quote": "Choose what is right,not what is easy.",
    "Desc": "The Republic's newest droid-annihilating proton bomb awakens a monstrous, gargantuan and near-invincible beast from its underground hibernation. Mace Windu and Anakin Skywalker face a dilemma: save the beast as the last specimen of its kind, or help the Dugs kill it and secure a treaty for critical fuel supplies?"
  },
  {
    "Episode": "02x19",
    "Title": "The Zillo Beast Strikes Back",
    "Quote": "The most dangerous beast is the beast within.",
    "Desc": "When the Zillo Beast is brought back to Coruscant in hopes of learning the secret of its impenetrable armour, it instead breaks loose and rampages across the ecumenopolis. As the clones prepare to kill it with poison gas, the Jedi are again trapped in a moral conflict between the value of its life and that of the planet's civilian populace."
  },
  {
    "Episode": "02x20",
    "Title": "Death Trap",
    "Quote": "Who my father was matters less than my memory of him.",
    "Desc": "Boba Fett infiltrates a Republic cruiser and joins a group of young clones with the intention of assassinating Mace Windu for killing his father Jango Fett."
  },
  {
    "Episode": "02x21",
    "Title": "R2 Come Home",
    "Quote": "Adversity is a friendship's truest test.",
    "Desc": "Anakin Skywalker and Mace Windu are trapped in the crumbling ruins of a crashed ship while searching for survivors, and only R2-D2 can get out a message to save them—if he can elude vicious gundarks and, worse yet, a crew of determined bounty hunters led by Boba Fett and Aurra Sing."
  },
  {
    "Episode": "02x22",
    "Title": "Lethal Trackdown",
    "Quote": "Revenge is a confession of pain.",
    "Desc": "While Anakin and Mace Windu recover from their injuries, Plo Koon and Ahsoka track down Boba Fett from the underworld of Coruscant to the desert planet of Florrum. Boba's revenge scheme finally leads to a climactic battle, and the life of a Republic admiral hangs in the balance."
  },
  {
    "Episode": "03x01",
    "Title": "Clone Cadets",
    "Quote": "Brothers in arms are brothers for life.",
    "Desc": "On Kamino, before the events of \"Rookies\" (Season 1 Episode 5), five clone cadets of Domino Squad are at risk of washing out unless they pull their team together while trainers Bric, El-Les, and Jedi Master Shaak Ti debate their fate."
  },
  {
    "Episode": "03x02",
    "Title": "ARC Troopers",
    "Quote": "Fighting a war tests a soldier's skills,defending his home tests a soldier's heart.",
    "Desc": "General Grievous and Ventress's Separatists forces launch a major attack on the Republic cloning facilities on Kamino with Anakin, Obi-Wan, Jedi Master Shaak Ti, and the 501st defending it."
  },
  {
    "Episode": "03x03",
    "Title": "Supply Lines",
    "Quote": "Where there's a will,there's a way.",
    "Desc": "With Ryloth under siege, a trapped Jedi Master Ima-Gun Di and his clone forces rally the local forces of Cham Syndulla. Elsewhere, the Jedi council sends Bail Organa and Jar Jar Binks to go to Toydaria, to ask King Katuunko for aid to Ryloth."
  },
  {
    "Episode": "03x04",
    "Title": "Sphere of Influence",
    "Quote": "A child stolen is a hope lost.",
    "Desc": "Chairman Papanoida's family is kidnapped and held for ransom. Ahsoka must team up with the Senator from Pantora, Riyo Chuchi, to aid the new chairman in recovering his family before the Trade Federation can unduly influence the future of his planet."
  },
  {
    "Episode": "03x05",
    "Title": "Corruption",
    "Quote": "The challenge of hope is to overcome corruption.",
    "Desc": "Padmé, on a diplomatic mission to Mandalore, guarantees the pacifist planet the Republic's full protection, but she and Duchess Satine soon find something sinister lurking beneath the planet's serene facade. Moogan smugglers have been sneaking in supplies, including bottled tea destined for the Mandalorian schools. To increase their profits, they have been diluting the tea with a hazardous chemical."
  },
  {
    "Episode": "03x06",
    "Title": "The Academy",
    "Quote": "Those who enforce the law must obey the law.",
    "Desc": "Ahsoka is assigned as a teacher at the cadet academy on Mandalore while covertly investigating the corruption inside Satine's administration. Soon after she arrives, Satine's zealous nephew Korkie and his classmates uncover a nefarious plot."
  },
  {
    "Episode": "03x07",
    "Title": "Assassin",
    "Quote": "The future has many paths, choose wisely.",
    "Desc": "Having volunteered to protect Senator Padmé Amidala during a political mission to Alderaan, Padawan Ahsoka Tano is plagued by recurring visions of the presumed dead bounty hunter Aurra Sing assassinating the senator."
  },
  {
    "Episode": "03x08",
    "Title": "Evil Plans",
    "Quote": "A failure in planning is a plan for failure.",
    "Desc": "While on an important shopping trip on Coruscant, C-3PO and R2-D2 are kidnapped by the sinister bounty hunter Cad Bane in the dastardly plot to free Ziro the Hutt."
  },
  {
    "Episode": "03x09",
    "Title": "Hunt for Ziro",
    "Quote": "Love comes in all shapes and sizes.",
    "Desc": "Due to his possessing of incriminating information, Ziro the Hutt is placed under the custody of the Hutt Council. When Cad Bane is sent to hunt down Ziro, he learns that Jedi Masters Obi-Wan and Quinlan Vos are searching for Ziro too."
  },
  {
    "Episode": "03x10",
    "Title": "Heroes on Both Sides",
    "Quote": "Fear is a great motivator.",
    "Desc": "When the Senate begins debate on a bill that would eliminate government oversight of the Banking Clan's activities, Padmé and Ahsoka travel in secret to the capital of the Confederacy of Independent Systems, in an attempt to forge a peace agreement with the Separatists. However, after both the Republic and Separatists agree to have a peace conference, Dooku orders General Grievous to dispatch a group of droids to launch a terrorist attack on Coruscant, resulting in a failure of peace."
  },
  {
    "Episode": "03x11",
    "Title": "Pursuit of Peace",
    "Quote": "Truth can strike down the spectre of fear.",
    "Desc": "Senators Padmé Amidala, Bail Organa and Onaconda Farr push against a new bill in the Senate to buy new clones for the Republic. But someone does not like their opposition and tries to dissuade them."
  },
  {
    "Episode": "03x12",
    "Title": "Nightsisters",
    "Quote": "The swiftest path to destruction is through vengeance.",
    "Desc": "Darth Sidious commands Count Dooku to eliminate Asajj Ventress, troubled by her growing progress in the dark side of the Force. When Ventress survives Dooku's assassination attempt, the jilted former apprentice vows to take revenge, enlisting her kinswomen - the Nightsisters of Dathomir - in her scheme."
  },
  {
    "Episode": "03x13",
    "Title": "Monster",
    "Quote": "Evil is not born,it is taught.",
    "Desc": "With the results of Ventress's attack on Dooku as a failure, Mother Talzin gives Dooku a new apprentice named Savage Opress, who is the clan brother of Darth Maul and secretly controlled by the Nightsisters."
  },
  {
    "Episode": "03x14",
    "Title": "Witches of the Mist",
    "Quote": "The path to evil may bring great power,but not loyalty.",
    "Desc": "With Savage Opress connected to the Force he is sent out by Dooku to capture King Katuunko, where he meets Obi-Wan and Anakin, sent by the Jedi to search for Savage Opress as he murdered two Jedi. Opress escapes and is punished by Dooku for killing Katuunko rather than capturing him. Meanwhile, Talzin tells Ventress to attack Dooku after these events. But the attack fails when Opress goes in rage after being confused between his loyalties to Dooku and Ventress and also when Obi-Wan and Anakin interfere. All remain unharmed. Savage returns to Mother Talzin, believing Ventress betrayed him, and is sent by Talzin to look for his long lost brother: Darth Maul."
  },
  {
    "Episode": "03x15",
    "Title": "Overlords",
    "Quote": "Balance is found in the one who faces his guilt.",
    "Desc": "Obi-Wan, Anakin and Ahsoka become stranded on a mysterious planet where the Force is very strong. Three powerful entities called the Father, Son and Daughter live there. The Father tries to convince Anakin to stay and remain as Anakin will be the only one able to control the Son and Daughter since he is the Chosen One."
  },
  {
    "Episode": "03x16",
    "Title": "Altar of Mortis",
    "Quote": "He who surrenders hope,surrenders life.",
    "Desc": "Before the Jedi can leave Mortis, the Son takes Ahsoka captive in an attempt to entice Anakin into joining him to use their combined strength to overpower his Father and Sister. To this end, the Son casts Ahsoka under the spell of the dark side and she battles Anakin, when he comes to rescue her, and later battles with Obi-Wan. After a battle between the Son and the Daughter stopped by the Father, Ahsoka steals the dagger that controls the Son. The Son is about to kill the Father, but the Daughter sacrifices herself to save the Father and returns Ahsoka to normal as well by the Daughter transferring her life to Ahsoka."
  },
  {
    "Episode": "03x17",
    "Title": "Ghosts of Mortis",
    "Quote": "He who seeks to control fate shall never find peace.",
    "Desc": "The Jedi remain stranded on Mortis, and the Son aligned with the Dark Side of the Force renews his efforts to convert Anakin as the Jedi prepare for a decisive confrontation. To turn Anakin to the Dark Side, the Son shows Anakin future images of himself causing so much pain and death as the Sith Lord Darth Vader. This works, and Anakin joins the Son out of fear that what he saw would actually happen. Ahsoka disables the ship upon hearing that Anakin joined the Son, and leaves to help Obi-Wan find the Father. The Father later confronts Anakin and erases his memory of the terrible vision the Son had shown him. When the Son tries to kill the Father, the Father steals the sword and uses it to kill himself, taking away his Son's power, allowing Anakin to kill the Son and restore the balance."
  },
  {
    "Episode": "03x18",
    "Title": "The Citadel",
    "Quote": "Adaptation is the key to survival.",
    "Desc": "An elite team of Jedi attempts to free Master Even Piell, who is in possession of hyperdrive coordinates that could harm both Separatists and Jedi alike, from an impenetrable prison, encountering reprogrammed battle droids, carbonite chambers and a younger Captain Tarkin along the way (before he joined the Galactic Empire). It is revealed that Piell and Tarkin each have memorized half of the coordinates."
  },
  {
    "Episode": "03x19",
    "Title": "Counterattack",
    "Quote": "Anything that can go wrong will.",
    "Desc": "With freed prisoners in their possession and brutal warden Osi Sobeck attempting desperately to thwart them, Obi-Wan and Anakin search for a way out of the Citadel and back to Coruscant. The prison, however, has more traps, perils and pitfalls in store for them than they had imagined and they must work past their differences if they are to escape. ARC trooper Echo is seemingly killed in battle."
  },
  {
    "Episode": "03x20",
    "Title": "Citadel Rescue",
    "Quote": "Without honor, victory is hollow.",
    "Desc": "While finding their way out of the Citadel prison which is under the command of the Separatist Osi Sobeck, the elite team's ship was destroyed, forcing them to wait for the rescue by Republic fleet. Along the way to rendezvous point they encounter waves of droid squads, which they have to fight in order to evacuate freed prisoners and save the information they hold. The Jedi attempt to escape, but are cornered by a pack of anoobas who kill Even Piell. But before he dies, he gives his half of the information to Ahsoka, telling her not to reveal it to anyone but the Jedi Council. But as the Jedi are about to escape, they are cornered by Sobeck who tries to kill Tarkin, but is stabbed and killed by Ahsoka. Plo Koon then arrives and rescues the Jedi, taking them back to Coruscant."
  },
  {
    "Episode": "03x21",
    "Title": "Padawan Lost",
    "Quote": "Without humility,courage is a dangerous game.",
    "Desc": "Ahsoka gets captured by Trandoshans during a battle on the planet Felucia. They drop her off on a planet where they intend to hunt her and others for sport. Ahsoka encounters three Jedi younglings named Kalifa, Jinx and O-mer, who she teams up with to survive. The next day they set out to escape the Trandoshans but are found and hunted. The lead Trandoshan's son is accidentally killed, and in revenge his father shoots and kills Kalifa. Ahsoka promises to take care of the other two younglings as Kalifa dies."
  },
  {
    "Episode": "03x22",
    "Title": "Wookie Hunt",
    "Quote": "A great student is what the teacher hopes to be.",
    "Desc": "As Ahsoka and her allies struggle to evade the Trandoshan hunters, their efforts receive an unexpected boost when a new captive arrives: Chewbacca the Wookiee. Together, the younglings, Ahsoka and Chewie attack the Trandoshan fortress, and with the help of other Wookiee warriors, are able to kill a large number of Trandoshans. Ahsoka herself kills the Trandoshan leader Garnac with a powerful Force push."
  },
  {
    "Episode": "04x01",
    "Title": "Water War",
    "Quote": "When destiny calls,the chosen have no choice.",
    "Desc": "Anakin, Padmé, Kit Fisto and Ahsoka find themselves on the planet of Mon Cala helping to keep the peace in a near civil war. But the Separatists have another plan. Will the Jedi and the inhabitants of Mon Calamari join forces and push back the invaders, or will another planet fall in the hands of the Separatists? An underwater battle takes place for the Republic to save the planet from falling."
  },
  {
    "Episode": "04x02",
    "Title": "Gungan Attack",
    "Quote": "Only through fire is a strong sword forged.",
    "Desc": "After the Separatists defeat most of the Republic forces on Mon Calamari, the Jedi Council are forced to call in the help of Jar Jar Binks and the Grand Gungan Army to the Jedi and the remaining Republic forces. However, in the aftermath of the battle, the remaining Republic forces are captured, leaving Ahsoka and Prince Lee-Char to devise a new strategy."
  },
  {
    "Episode": "04x03",
    "Title": "Prisoners",
    "Quote": "Crowns are inherited,kingdoms are earned.",
    "Desc": "After Anakin, Padmé, Kit Fisto and Jar Jar Binks are all captured by Riff Tamson, Ahsoka and Prince Lee Char must find a way to free their friends from the grip of the Separatists. Endeavoring to liberate his planet from the sinister Tamson, Lee Char must now convince the Quarren to rejoin his cause."
  },
  {
    "Episode": "04x04",
    "Title": "Shadow Warrior",
    "Quote": "Who a person truly is cannot be seen with the eye.",
    "Desc": "Anakin, Padmé and Jar Jar uncover a plot by the Gungan \"shaman\" Rish Loo to trick the Gungans into aiding the Separatists in an assault on Naboo. However, as the charade unravels, can Jar Jar convince the Gungan army that they've been deceived? However, shortly after General Grievous arrives, demanding to know why the attack was cancelled. Jar Jar manages to lure Grievous into a trap in which he is captured, but Dooku manages to capture Anakin, who is chasing after Rish Loo. Now Dooku demands the freedom of Grievous in exchange for Skywalker."
  },
  {
    "Episode": "04x05",
    "Title": "Mercy Mission",
    "Quote": "Understanding is honoring the truth beneath the surface.",
    "Desc": "Plo Koon's clone legion \"The Wolfpack\", R2-D2 and C-3PO are sent to repair power & communication systems on the planet of Aleen after a series of devastating earthquakes; but the droids discover a severe ecological imbalance between the planet's subterranean ecology and surface biospheres."
  },
  {
    "Episode": "04x06",
    "Title": "Nomad Droids",
    "Quote": "Who's the more foolish,the fool or the fool who follows him?",
    "Desc": "On their return voyage to Coruscant, their Republic cruiser is attacked by General Grievous. R2-D2 and C-3PO find themselves in a Y-wing and on a series of four mini-adventures, whilst trying to get back to the safety of Coruscant, the last of which is being trapped on General Grievous' ship with captured Jedi Master Adi Gallia, until Jedi Master Plo Koon and his clone legion the Wolfpack rescues them."
  },
  {
    "Episode": "04x07",
    "Title": "Darkness on Umbara",
    "Quote": "The first step towards loyalty is trust.",
    "Desc": "When Anakin is forced to temporarily turn over command of his clone troopers (the 501st Legion) to a new commander, Jedi Pong Krell, tensions begin to run high as the clones are assigned with a very deadly mission to take the capital of Umbara."
  },
  {
    "Episode": "04x08",
    "Title": "The General",
    "Quote": "The path of ignorance is guided by fear.",
    "Desc": "General Krell orders Captain Rex and the clone troopers of the 501st Legion to conquer a heavily fortified Umbaran airbase, and will not accept anything less than victory. It is an almost certain suicide mission, unless the clones can use their ingenuity to defeat their new enemy."
  },
  {
    "Episode": "04x09",
    "Title": "Plan of Dissent",
    "Quote": "The wise man leads,the strong man follows.",
    "Desc": "After the Republic conquers an Umbaran airbase, General Krell orders Rex and his men on towards the heavily fortified capital. Realizing there is a better plan, clone troopers Fives, Jesse and Hardcase disobey orders to carry out a rogue, covert operation."
  },
  {
    "Episode": "04x10",
    "Title": "Carnage of Krell",
    "Quote": "Our actions define our legacy.",
    "Desc": "With two of his men (Fives and Jesse) facing execution for disobeying orders, Captain Rex is forced to confront his overly aggressive commander, General Krell, in the conclusion to the action-packed battle for Umbara. Risking charges of mutiny, Rex must make a dark choice as the true face of the enemy emerges."
  },
  {
    "Episode": "04x11",
    "Title": "Kidnapped",
    "Quote": "Where we are going always reflects where we came from.",
    "Desc": "Zygerrian slavers are behind the sudden disappearance of an entire colony of people on the planet Kiros. As Anakin and Ahsoka rush to defuse a series of bombs planted by the slavers, Obi-Wan must fight with their imposing leader, who then runs off leading Anakin and Ahsoka to raid and take over his ship.\n\n\nNote: This episode and the following two are based on a six-part Star Wars Legends comic, Slaves of the Republic, originally published by Dark Horse between September 2008 and May 2009."
  },
  {
    "Episode": "04x12",
    "Title": "Slaves of the Republic",
    "Quote": "Those who enslave others,inevitably become slaves themselves.",
    "Desc": "Anakin, Obi-Wan, Rex, and Ahsoka go undercover to infiltrate the slavers on Zygerria to find the missing Colonists. Obi-Wan, Rex, and Anakin pretend to be slavers, and Ahsoka as the slave (impersonating an heiress). Later on, Obi-Wan is captured for trying to help a colonist escape, and Anakin and Ahsoka are also captured by the Zygerrian Queen. Anakin struggles with his emotions as a wily Zygerrian queen forces him to take questionable actions in order to carry out his mission."
  },
  {
    "Episode": "04x13",
    "Title": "Escape from Kadavo",
    "Quote": "Great hope can come from small sacrifices.",
    "Desc": "Anakin tries to convince the Zygerrian Queen that she, too, is a slave and pawn in an evil Separatist plot. Meanwhile, Obi-Wan and Rex are captured and taken to the Planet of Kadavo to toil in the slave camps."
  },
  {
    "Episode": "04x14",
    "Title": "A Friend in Need",
    "Quote": "Friendship shows us who we really are.",
    "Desc": "A peace conference between Separatists and Republic delegates is interrupted by Lux Bonteri, the son of the late Separatist Senator, Mina Bonteri (\"Heroes on Both Sides\"). Soon after, he involves Ahsoka in his dangerous search to find justice for his mother's death—which subsequently leads to Ahsoka crossing paths with Pre Vizsla and the Death Watch."
  },
  {
    "Episode": "04x15",
    "Title": "Deception",
    "Quote": "All warfare is based on deception.",
    "Desc": "Obi-Wan fakes his own death and goes undercover (as Rako Hardeen) in a Republic prison, in order to gather information on a plot to kidnap Chancellor Palpatine from a convict named Moralo Eval. While there, he learns that another prisoner, notorious bounty hunter Cad Bane, is also involved. Meanwhile, Anakin seeks vengeance for the death of his former master."
  },
  {
    "Episode": "04x16",
    "Title": "Friends and Enemies",
    "Quote": "Keep your friends close,but keep your enemies closer.",
    "Desc": "Having escaped from prison, Obi-Wan, Cad Bane and Moralo Eval flee across the galaxy, pursued by Anakin and Ahsoka. Obi-Wan must devise a way to warn his fellow Jedi to halt their chase without blowing his cover."
  },
  {
    "Episode": "04x17",
    "Title": "The Box",
    "Quote": "The strong survive,the noble overcome.",
    "Desc": "Count Dooku invites some of the best bounty hunters in the galaxy, including Cad Bane and a still-disguised Obi-Wan, to compete in an obstacle course designed by Moralo Eval known as \"The Box\", with involvement in the plot to kidnap Chancellor Palpatine as the reward for survival. After facing many challenges in The Box, Obi-Wan survives, along with Cad Bane and three other bounty hunters. Cad Bane is appointed by Dooku to lead the kidnap operation against Palpatine on Naboo."
  },
  {
    "Episode": "04x18",
    "Title": "Crisis on Naboo",
    "Quote": "Trust is the greatest of gifts,but it must be earned.",
    "Desc": "Supreme Chancellor Palpatine goes to Naboo, guarded by Jedi Knights. Meanwhile, Cad Bane, a still-disguised Obi-Wan and a pack of bounty hunters put their plan into action, but it fails when Obi-Wan alerts the Jedi and Dooku doesn't rendezvous with them to collect his quarry. With the bounty hunters now in Republic custody, Obi-Wan wants to change back to his original self. However, what Obi-Wan doesn't realize was that Dooku was eavesdropping via a hidden recorder when he alerted Mace Windu and Anakin Skywalker, indicating that a deeper conspiracy is still at hand. Will Anakin be able to stop Dooku's plan before it is too late?"
  },
  {
    "Episode": "04x19",
    "Title": "Massacre",
    "Quote": "One must let go of the past to hold on to the future.",
    "Desc": "After failing to kill Dooku or control Savage Opress, Asajj Ventress is advised by Mother Talzin to reject the ways of the Sith and rejoin the Nightsisters. Upon discovering Ventress' location, Dooku commands General Grievous to launch an assault in a bid to eliminate Ventress and the entire Nightsister clan. As Ventress and Grievous square off, Talzin uses a voodoo doll against Dooku whilst her relative Daka—the eldest of the sister's clan—awakens an army of undead Nightsisters to hold off the droid forces. Ventress defeats Grievous and escapes while the rest of the Nightsisters are massacred, whereas Talzin escapes when her attempt of finishing off Dooku is ultimately foiled. The episode closes with Talzin's 'spirit' bidding farewell and good luck to Ventress, who is now left to grieve for her sisters and lament her lost future."
  },
  {
    "Episode": "04x20",
    "Title": "Bounty",
    "Quote": "Who we are never changes,who we think we are does.",
    "Desc": "An aimless Asajj Ventress joins a team of bounty hunters under the leadership of a pre-teen Boba Fett. On an alien world, they undertake a precarious, profitable, subterranean delivery mission that tests the limits of their skills, and the strength of Asajj's character. Realizing that familial love is a ubiquitous virtue throughout the galaxies and that her powers are needed by many, Ventress finds a sense of closure and hope for her future after all."
  },
  {
    "Episode": "04x21",
    "Title": "Brothers",
    "Quote": "A fallen enemy may rise again,but the reconciled one is truly vanquished.",
    "Desc": "With a magical amulet from Mother Talzin, Savage Opress lands on a junk planet in the Outer Rim and searches for his lost brother. With the help of the snake-like Morley, Savage finds his brother, the former Sith lord Darth Maul, who has been driven to insanity from his bisection and near-death experience on Naboo over ten years earlier.\n\n\nNote: This episode's title card is red instead of yellow."
  },
  {
    "Episode": "04x22",
    "Title": "Revenge",
    "Quote": "The enemy of my enemy is my friend.",
    "Desc": "Fueled by hatred, Maul and Opress set out to take revenge on the Jedi who had sliced him in half. Maul sends a message to Obi-Wan Kenobi to confront him alone by murdering the inhabitants of a village on a distant planet. Upon arrival, Kenobi is attacked by both Maul and Opress, who leave the planet with Kenobi as their prisoner. Obi-Wan receives aid from an unlikely ally, Asajj Ventress, now a bounty hunter after the one million credit bounty on Opress. Outmatched, Obi-Wan and Ventress flee Maul and Savage in the ship's cockpit, leaving the two Dathomirian brothers to patiently stage their next move—with Maul vowing to exact his revenge on Obi-Wan.\n\n\nNote: This episode's title card is red instead of yellow."
  },
  {
    "Episode": "05x01",
    "Title": "Revival",
    "Quote": "Strength of character can defeat strength in numbers.",
    "Desc": "Darth Maul and Savage Opress steal a fortune of republic credits, and bribe a squad of pirates to take down a pirate stronghold run by Hondo. Obi-Wan and Jedi Master Adi Gallia intervene, but Savage kills Adi. Hondo ambushes the pirates and wins their loyalty back, while Obi-Wan fights Savage and Maul and cuts off Savage's left arm. The brothers flee to their ship under fire from Hondo and the pirates, but are forced to board an escape pod as the ship is damaged. Obi-Wan returns to Coruscant, where the Chancellor informs him that the brothers are of no importance compared to the Separatists, and no further action should be taken against them."
  },
  {
    "Episode": "05x02",
    "Title": "A War on Two Fronts",
    "Quote": "Fear is a malleable weapon.",
    "Desc": "On the Separatist world of Onderon, a group of rebels call for the assistance of the Jedi. Ahsoka, Anakin, Rex, and Obi-Wan go to train the rebels to fight, and see that former Separatist and Ahsoka Tano love interest Lux Bonteri is among them, as Onderon is his homeworld."
  },
  {
    "Episode": "05x03",
    "Title": "Front Runners",
    "Quote": "To seek something is to believe in its possibility.",
    "Desc": "Ahsoka Tano, now leading the rebels on Onderon, but forbidden to fight, puts their training to use by having them hi-jack an AAT and blow up the main power station for the capital city of Onderon, so that the rebels can wreak havoc."
  },
  {
    "Episode": "05x04",
    "Title": "The Soft War",
    "Quote": "Struggles often begin and end with the truth.",
    "Desc": "Sanjay Rash, Onderon's puppet king, accuses Ramsis Dendup, the deposed king, of inciting the rebellion against his rule and orders his execution. After an ill-concocted solo effort by Saw Gerrera to rescue Dendup, Steela, Lux Bonteri, and Ahsoka, with no help from the Republic, devise a plan to retrieve the King from the Palace. The plan fails, but as Dendup is about to be executed, the rebels are saved by General Tandin and the Onderonian militia, whom Saw has managed to sway to their side. Now knowing the Jedi's involvement, Dooku grows impatient with his underlings."
  },
  {
    "Episode": "05x05",
    "Title": "Tipping Points",
    "Quote": "Disobedience is a demand for change.",
    "Desc": "The rebels on Onderon struggle to reclaim their home planet. After the Republic and the Jedi High Council refuse to give Ahsoka Tano and the rebels assistance, Anakin Skywalker persuades Hondo Ohnaka to supply illegal rocket launchers to the rebels to combat the Separatist's new gunships. The rebels succeed in taking back Onderon, but Steela is killed in a fall during the battle. With Onderon lost to him, Dooku executes Sanjay Rash and has his forces depart the planet."
  },
  {
    "Episode": "05x06",
    "Title": "The Gathering",
    "Quote": "He who faces himself,finds himself.",
    "Desc": "Ahsoka and Yoda take a group of younglings to a cave on Ilum to perform a Jedi rite of passage called \"The Gathering\", where they will each have to face an internal fear or flaw in order to retrieve a Kyber crystal so they can begin building their own lightsabers."
  },
  {
    "Episode": "05x07",
    "Title": "A Test of Strength",
    "Quote": "The young are often underestimated.",
    "Desc": "While returning to Coruscant with their lightsaber crystals, the younglings are attacked by Hondo, who wants to steal their crystals and sell them. Ahsoka must defend the younglings from the pirates."
  },
  {
    "Episode": "05x08",
    "Title": "Bound for Rescue",
    "Quote": "When we rescue others,we rescue ourselves.",
    "Desc": "With Ahsoka captured by Hondo, the younglings go to Florrum to rescue her, against the wishes of Obi-Wan Kenobi. However, before Obi-Wan can help the younglings, he is attacked by General Grievous and defeated, but nearly kills the droid general by setting the self-destruct on the Negotiator, allowing his escape. The younglings succeed in infiltrating Hondo's lair, but end up as prisoners themselves."
  },
  {
    "Episode": "05x09",
    "Title": "A Necessary Bond",
    "Quote": "Choose your enemies wisely,as  they may be your last hope.",
    "Desc": "To revenge himself on Hondo for his past capture, Count Dooku has General Grievous attack the pirates' lair on Florrum, so Ahsoka and Hondo must join forces in order to survive this encounter."
  },
  {
    "Episode": "05x10",
    "Title": "Secret Weapons",
    "Quote": "Humility is the only defense against humiliation.",
    "Desc": "R2-D2 is part of a team of Republic droids chosen for an important mission led by the diminutive Colonel Meebur Gascon to obtain an encryption module from a Separatist dreadnought. The droids must overcome numerous challenging obstacles to succeed in this crucial assignment.\n\n\nNote: This episode's title card is light blue instead of yellow."
  },
  {
    "Episode": "05x11",
    "Title": "A Sunny Day in the Void",
    "Quote": "When all seems hopeless,a true hero gives hope.",
    "Desc": "After their ship crashes on a desolate planet, D-Squad and Colonel Gascon must find a way off to get back to Coruscant, or be stranded forever.\n\n\nNote: This episode's title card is light blue instead of yellow."
  },
  {
    "Episode": "05x12",
    "Title": "Missing in Action",
    "Quote": "A soldier's most powerful weapon is courage.",
    "Desc": "Colonel Gascon and D-Squad discover that Abafar, the planet they are trapped on, is Separatist-controlled, but they also discover a Republic Clone Commando named Gregor, who has been stranded on the planet as well. They must work together to get off the planet safely.\n\n\nNote: This episode's title card is light blue instead of yellow."
  },
  {
    "Episode": "05x13",
    "Title": "Point of No Return",
    "Quote": "You must trust in others or success is impossible.",
    "Desc": "After believing themselves safe, Colonel Gascon and D-Squad discover that they are prisoners of the Separatists in a captured Republic cruiser, finding themselves enmeshed in thwarting a plot to destroy a Republic space station holding a strategic conference.\n\n\nNote: This episode's title card is light blue instead of yellow."
  },
  {
    "Episode": "05x14",
    "Title": "Eminence",
    "Quote": "One vision can have many interpretations.",
    "Desc": "Darth Maul and Savage Opress form an alliance with the Mandalorian terrorist group Death Watch and several crime syndicates, including the Black Sun, the Pyke Syndicate, and the Hutt Cartel, in order to take over Mandalore and defeat Obi-Wan Kenobi."
  },
  {
    "Episode": "05x15",
    "Title": "Shades of Reason",
    "Quote": "Alliances can stall true intentions.",
    "Desc": "Maul's alliance helps the Death Watch and their leader, Pre Vizsla, conquer Mandalore and imprison Duchess Satine, but Vizsla's ambitions surface and he betrays Maul, who later challenges him to a duel. After killing Vizsla, Maul  assumes control over a majority of the Death Watch."
  },
  {
    "Episode": "05x16",
    "Title": "The Lawless",
    "Quote": "Morality separates heroes from villains.",
    "Desc": "Maul proceeds to lure Obi-Wan Kenobi to Mandalore with news of Satine's capture. Obi-Wan infiltrates Mandalore, but ends up captured himself. Maul murders Satine, but Obi-Wan is rescued by Bo-Katan (who is revealed to be Satine's sister) and her Death Watch faction, who trigger a civil war against Maul. Meanwhile, the takeover captures the attention of Darth Sidious, Maul's former master, who travels to Mandalore to take care of the rogue Sith brothers. In the Mandalorian Throne room, Sidious kills Opress and takes Maul prisoner, hinting that he has something sinister for him in mind.\n\n\nNote: This episode is dedicated to Ian Abercrombie."
  },
  {
    "Episode": "05x17",
    "Title": "Sabotage",
    "Quote": "Sometimes even the smallest doubt can shake the greatest belief.",
    "Desc": "After Ahsoka manages to rescue Anakin from certain peril on Cato Neimoidia, the two are called back to Coruscant from the front lines to investigate a terrorist bombing at the Jedi Temple."
  },
  {
    "Episode": "05x18",
    "Title": "The Jedi Who Knew Too Much",
    "Quote": "Courage begins by trusting oneself.",
    "Desc": "Ahsoka Tano is blamed for the murder of Letta Turmond, the key suspect in the bombing, and is detained by Admiral Tarkin. Despite Anakin's best efforts to exonerate her, she is forced to escape the military prison where she is interred and flee into the Coruscant underworld to find the actual perpetrator and prove her innocence."
  },
  {
    "Episode": "05x19",
    "Title": "To Catch a Jedi",
    "Quote": "Never become desperate enough to trust the untrustworthy.",
    "Desc": "While on the run in the underworld of Coruscant, pursued by Republic authorities, Ahsoka makes a deal with Asajj Ventress to find out who the actual murderer of Letta Turmond really is, leading the two to come to terms with each other in spite of their antagonistic pasts. However, will the real perpetrator's machinations cast such an alliance into doubt?"
  },
  {
    "Episode": "05x20",
    "Title": "The Wrong Jedi",
    "Quote": "Never give up hope,no matter how dark things seem.",
    "Desc": "Prosecution begins for Ahsoka in the High Courts after the Jedi Council expels her from the Jedi Order. As Padmé fights to prove Ahsoka's innocence, Anakin finds the information to relieve Ahsoka of her charges and reveal the true culprit of the crimes to be Barriss Offee. However, though cleared of all charges, Ahsoka is disillusioned by the turn of events and leaves the Jedi Order.[k]"
  },
  {
    "Episode": "06x01",
    "Title": "The Unknown",
    "Quote": "The truth about yourself is always the hardest to accept.",
    "Desc": "Clone Trooper Tup is suffering from a severe neurological disorder that causes the death of a Jedi Master. Trying to find the motives for the murder, the Republic escorts Tup back to Kamino for examination, but then they are attacked by the Separatists, who capture him. Anakin, Captain Rex and ARC Trooper Fives rescue Tup and take him to Kamino safely."
  },
  {
    "Episode": "06x02",
    "Title": "Conspiracy",
    "Quote": "The wise benefit from a second opinion.",
    "Desc": "Tup is undergoing a medical examination in the sterile laboratories of Kamino to find the motives for his shocking attack on the Jedi Master. For the examination to succeed, Fives must enter the depth of Tup's mind, where he finds a secret code manipulation in the cloning program of the Republic."
  },
  {
    "Episode": "06x03",
    "Title": "Fugitive",
    "Quote": "When in doubt, go to the source.",
    "Desc": "Tup is transported back to Coruscant, where his body is to be examined by the Chancellor's personal physician. Fives is also investigating the matter and discovers that a modified code has been hidden in the minds of all the clones."
  },
  {
    "Episode": "06x04",
    "Title": "Orders",
    "Quote": "The popular belief isn't always the correct one.",
    "Desc": "In an effort to find more answers about Tup's actions, Fives attempts to speak with Chancellor Palpatine personally, only to find himself on the run. While unsuccessfully explaining what he learned to Anakin Skywalker and Rex, Fives is shot and killed by Commander Fox."
  },
  {
    "Episode": "06x05",
    "Title": "An Old Friend",
    "Quote": "To love, is to trust. To trust is to believe.",
    "Desc": "While on a mercy mission to the planet Scipio, Padmé Amidala's old flame Rush Clovis gets in touch with her asking for help. Having made a stand against the corruption on his planet, Clovis has now become the target of the bounty hunter Embo. Together with Padmé, he is now trying to leave his planet and get help."
  },
  {
    "Episode": "06x06",
    "Title": "The Rise of Clovis",
    "Quote": "Jealousy is the path to chaos.",
    "Desc": "Back on Coruscant, Clovis strikes a dubious deal to become the leader of the banking clan, which is deeply mired in corruption. Anakin doesn't trust Clovis, causing tensions in his relationship to Padmé."
  },
  {
    "Episode": "06x07",
    "Title": "Crisis at the Heart",
    "Quote": "Deceit is the weapon of greed.",
    "Desc": "Clovis' deal with the Separatists backfires and consequently instigates war to Scipio, thus provoking the Republic to intervene and ultimately win the battle. In the midst of the chaos, Anakin confronts Clovis just as the duo and Padmé are caught in a blast—with Anakin barely managing to cling onto the other two when they virtually fall to their death. Though he intended to pull both up to safety, Anakin merely saves Padmé when Clovis allows himself to be killed."
  },
  {
    "Episode": "06x08",
    "Title": "The Disappeared Pt. 1",
    "Quote": "Without darkness there cannot be light.",
    "Desc": "The peaceful world of Bardotta finds itself threatened by an ancient prophecy. Since now, of all times, its spiritual leaders have vanished, Bardotta's people ask their representative in the senate for help. And Jar Jar Binks indeed manages to convince Jedi Master Mace Windu that this matter is of grave importance."
  },
  {
    "Episode": "06x09",
    "Title": "The Disappeared Pt. 2",
    "Quote": "Wisdom is born in fools as well as wise men.",
    "Desc": "In order to fulfill a dark prophecy, a mysterious cult kidnaps Julia, queen of the planet Bardotta. Now, Jedi Master Mace Windu and Senate Representative Jar Jar Binks need to give everything in order to stop the cult. If they fail, the cult might unleash a dreadful force."
  },
  {
    "Episode": "06x10",
    "Title": "The Lost One",
    "Quote": "What is lost is often found.",
    "Desc": "Jedi Master Sifo-Dyas died under mysterious circumstances years ago. When a secret Jedi mission accidentally finds his crashed ship and lightsaber, Anakin Skywalker, Obi-Wan Kenobi, and Master Yoda investigate Sifo-Dyas's death again. To keep them from uncovering the Sith conspiracy, Darth Sidious orders Dooku to erase all traces that links up to the murder investigation. This is successful and Dooku escapes shortly after Obi-Wan and Anakin learn that he was the one who killed Sifo-Dyas under his Sith alias \"Darth Tyranus\"."
  },
  {
    "Episode": "06x11",
    "Title": "Voices",
    "Quote": "Madness can sometimes be the path to truth.",
    "Desc": "Yoda is deeply unsettled when he hears the voice of his deceased friend Qui-Gon Jinn in his head, because he knows that not even a Jedi can speak to the living from beyond the grave. The Jedi Council is concerned about Yoda’s behavior and wants to examine him further. But with the help of Anakin, Yoda escapes from the hospital and he sets out to find the origin of the voice by himself."
  },
  {
    "Episode": "06x12",
    "Title": "Destiny",
    "Quote": "Death is just the beginning.",
    "Desc": "Guided by the Force, Yoda travels to the heart of the galaxy. There, on the planet where he finds the origin of the Force, he must face difficult trials. Only upon passing them will the Sages deem him worthy of learning the deepest mysteries of the Force."
  },
  {
    "Episode": "06x13",
    "Title": "Sacrifice",
    "Quote": "Facing all that you fear will free you from yourself.",
    "Desc": "On Moraband (Korriban), the homeworld of the Sith, the time has come for Yoda to pass his final test. Only then will he learn the best-kept secret of his order, but first he encounters a vision that heavily foreshadows what is to come—which involves Yoda facing the spirit of Darth Bane. During this time, Darth Sidious summons Count Dooku to his hideout whereupon the duo plan to break Yoda—which stages an inevitable confrontation in the realm of the mind, between the Sith Lords and Yoda alongside Skywalker and his squad. Yoda realizes that—no matter who wins the Clone Wars or what the future holds—there will one day be a new hope."
  },
  {
    "Episode": "07x01",
    "Title": "The Bad Batch",
    "Quote": "Embrace others for their differences,for that makes you whole.",
    "Desc": "As Jedi generals Anakin Skywalker and Mace Windu lead the campaign on Anaxes to defend the main Republic shipyard from Admiral Trench, they find that the Separatists' droid army had always been one step ahead of them in every engagement so far. Commander Cody, Captain Rex and the \"Bad Batch\", an unorthodox group of clone commandos with desirable mutations, go behind enemy lines to discover the source of the Separatists' series of victories. Inside the Separatist command center, Rex hears a mysterious signal feeding battle strategies to the droid army, leading him to believe that the lost clone trooper Echo may still be alive."
  },
  {
    "Episode": "07x02",
    "Title": "A Distant Echo",
    "Quote": "The search for truth begins with belief.",
    "Desc": "Anakin, Rex, and the Bad Batch launch a dangerous rescue mission under the assumption that Echo might be alive. Their last infiltration leads them to Skako Minor, where after a brief skirmish with the natives, they trace Echo's signal to Wat Tambor's facility. There they discover Echo alive, used as a living computer by the Techno Union."
  },
  {
    "Episode": "07x03",
    "Title": "On the Wings of Keeradaks",
    "Quote": "Survival is one step on the path to living.",
    "Desc": "Anakin, Rex, and the Bad Batch escape Wat Tambor's facility with Echo and fight their way past Techno Union droid forces. They retreat to the native village, and with the help of the locals defend Echo from reinforcements sent by Wat Tambor to recapture the Techno Union's \"experiment\"."
  },
  {
    "Episode": "07x04",
    "Title": "Unfinished Business",
    "Quote": "Trust placed in another is trust earned.",
    "Desc": "Back on Anaxes, Obi-Wan Kenobi and Mace Windu lead a final stand against the Separatist forces commanded by Admiral Trench. Anakin, Rex, Bad Batch and Echo embark on a mission to strike at the heart of Trench's command ship, all the while questioning the rescued clone's loyalty to the Republic after unwittingly serving the Separatists. Proving his loyalty once more, Echo uses his cybernetic implants to foil the droid forces on Anaxes, but Trench activates a bomb that could destroy most of the planet. Anakin confronts Trench and successfully obtains the deactivation code before executing the admiral. As the Republic emerges victorious, Rex gives Echo permission to join the Bad Batch."
  },
  {
    "Episode": "07x05",
    "Title": "Gone with a Trace",
    "Quote": "If there is no path before you, create your own.",
    "Desc": "After crashing her speeder in the lower levels of Coruscant, Ahsoka Tano befriends Trace Martez, who offers to help work on her speeder. Some thugs come to ask Trace for some money her sister, Rafa, owes them; Trace and Ahsoka fight them off. Ahsoka then helps work on some of Rafa's droids, which turn out to be violence-prone. By secretly using the Force, Ahsoka helps Trace deactivate them."
  },
  {
    "Episode": "07x06",
    "Title": "Deal No Deal",
    "Quote": "Mistakes are valuable lessons often learned too late.",
    "Desc": "Rafa accepts an assignment to deliver a load of spice from Kessel to the Pyke crime syndicate on Oba Diah, and uses Trace and her self-built ship, the Silver Angel, for the job. When Ahsoka argues with Rafa that the Pykes might not claim just the spice, but the ship as well, Trace jettisons the shipment into hyperspace. Ahsoka tries to deceive the Pykes into thinking that they have been double-crossed by Kessel's king Yaruba, but she, Trace, and Rafa get captured instead."
  },
  {
    "Episode": "07x07",
    "Title": "Dangerous Debt",
    "Quote": "Who you were does not have to define who you are.",
    "Desc": "Ahsoka, Trace, and Rafa attempt to escape their imprisonment by the Pyke Syndicate. The Martez sisters reveal that their parents were accidentally killed by the Jedi as they apprehended Ziro the Hutt. Ahsoka secretly uses the Force to aid their escape, and three Mandalorians catch sight of her. Ahsoka and the Martez sisters end up recaptured by the Pykes."
  },
  {
    "Episode": "07x08",
    "Title": "Together Again",
    "Quote": "You can change who you are,but you cannot run from yourself.",
    "Desc": "Ahsoka manages to make a deal with the Pykes which allows the Martez sisters to temporarily leave Oba Diah to retrieve the spice, while she is held hostage. Ahsoka escapes the prison and places explosives all over the facility, where she overhears the Pykes talking to Darth Maul, who is on Mandalore. Meanwhile, the Martez sisters steal spice from the Pykes and bring it back to Oba Diah, where they learn that Ahsoka was a Jedi. They escape by blowing up the facility and are followed back to Coruscant by the three Mandalorians, who were previously part of Death Watch. One of them, Bo-Katan, manages to convince Ahsoka they have a common enemy in Maul, and Ahsoka decides to leave for Mandalore after reconciling with the sisters."
  }
]

var rand = Math.floor(Math.random() * quotes.length);


var quote = quotes[rand]["Quote"];
var q_title = quotes[rand]["Title"];
var episode = quotes[rand]["Episode"];
var description = quotes[rand]["Desc"];
var container = document.getElementById('quote');
var tooltip = document.getElementById('tooltip');

container.innerHTML = quote;
tooltip.innerHTML += '<span class="tooltiptext">'+"S"+episode+"<br>"+q_title+'<br></span>';

console.log(quote);
console.log(episode+' '+q_title);
console.log(description);


async function translate2(quote){
  const res = fetch("https://libretranslate.de/translate", {
    method: "POST",
    body: JSON.stringify({
      q: quote,
      source: "en",
      target: "es",
      format: "text"
    }),
    headers: { "Content-Type": "application/json" }
  }).then(response => response.json())
  .then(data => quote = data)
  .then( function () {
    var cita = quote['translatedText'];
    console.log(cita);
    document.getElementById('quote').innerHTML = cita;
    return quote['translatedText'];

  });

} 

btn = document.getElementById('l_img');

const queryString = window.location.search;
//default lang = en
if (queryString == ""){
  window.location ="index.html?l=en"
}

const urlParams = new URLSearchParams(queryString);
let lang = urlParams.get('l')
console.log(lang);
if(lang == "es"){
  btn.src = "es.png"
  var cita = translate2(quote);
}
        
function change_lang(){
if(lang == "en"){
    es();
    return;
    }
en();
}

function es(){
    btn.src = "es.png"
    lang = "es"
    window.location = "index.html?l=es"            
}
function en(){
    btn.src = "en.png"
    lang = "en"
    window.location ="index.html?l=en"
    
}        
