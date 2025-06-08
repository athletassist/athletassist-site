const scenarios = {
  "start": {
    text: "Pick a sport to start the simulator.",
    options: [
      { label: "Football", target: "football" },
      { label: "Baseball", target: "baseball" },
      { label: "Basketball", target: "basketball" }
    ]
  },

// Football Section Start
"football": {
  text: "It’s a humid Wednesday afternoon, You’re a second-year player, still fighting to make the main rotation. After days of high-effort drills, your hamstring is very tight. Today’s practice focuses on full-contact red zone reps. You see your position coach  across the field, but he’s deep in conversation. There’s no trainer on the field.",
  options: [
    { label: "Log updated soreness in Athletassist and adjust your reps yourself", target: "footballSelfManage" },
    { label: "Try to talk to a senior teammate about what to do", target: "footballAskTeammate" },
    { label: "Ignore it and jump in when reps start", target: "footballPushAnyway" }
  ]
},
"footballSelfManage": {
  text: "You log the soreness trend and pull up similar cases from past weeks. Athletassist shows your sprint load is 30% above baseline. It suggests optional cooldowns and staying under 70% intensity.\n\nYou make a plan to ease off high-speed reps and focus on alignment and form work during red zone drills.",
  options: [
    { label: "Stick to self-moderation", target: "footballRecoverySuccess" },
    { label: "Change your mind and go full-speed mid-practice", target: "footballLateInjury" }
  ]
},
"footballAskTeammate": {
  text: "You ask one of the senior linebackers what they’d do. He shrugs: 'Up to you, bro. I’d push through unless it’s real bad.' Not helpful. You log it anyway into Athletassist while deciding.",
  options: [
    { label: "Go full-speed after all", target: "footballPushAnyway" },
    { label: "Use that as your cue to pull back", target: "footballRecoverySuccess" }
  ]
},
"footballPushAnyway": {
  text: "You join drills without logging anything. After two sets, you sprint to cover a screen pass and your hamstring snaps tight mid-run. You limp off, frustrated.\n\nWithout logs or warnings, the staff is surprised and pulls you for multiple days. You miss a key scrimmage.",
  options: [
    { label: "Restart", target: "restart" }
  ]
},
"footballLateInjury": {
  text: "Midway through practice, you ignore your plan and try to prove yourself. On a cut route, your leg gives out. Athletassist had flagged this, but without staff to intervene, it’s up to you—and now you're hurt.",
  options: [
    { label: "Restart", target: "restart" }
  ]
},
"footballRecoverySuccess": {
  text: "You ease off speed but stay active. Athletassist logs a normalized load by the end of practice. Coaches later mention your hustle and maturity. Your leg feels better the next day.",
  options: [
    { label: "Restart", target: "restart" }
  ]
},


// Football Section End
// Baseball Section Start

"baseball": {
  text: "You’re on a travel team with limited staff. It’s your second tournament in three days. Yesterday, you pitched in relief and today you’re scheduled for shortstop. Your shoulder feels tender from long throws and your swing speed feels slower. No trainer is on-site, and your coach is dealing with logistics for the next game.",
  options: [
    { label: "Open Athletassist and check your throw/swing trend", target: "baseballUseApp" },
    { label: "Ask a teammate for input", target: "baseballPeerSupport" },
    { label: "Stay silent and play like usual", target: "baseballPushThrough" }
  ]
},
"baseballUseApp": {
  text: "Athletassist shows throwing strain has risen steadily over four games. It recommends limiting lateral throws and easing bat torque. With no adult supervision, you make a personal call.",
  options: [
    { label: "Change your warmup and throw sidearm only", target: "baseballAdjustedPlay" },
    { label: "Ignore it and play your normal game", target: "baseballPushThrough" }
  ]
},
"baseballPeerSupport": {
  text: "Your teammate says he felt the same way two weeks ago. He started using Athletassist to monitor reps and cut out pregame throwing when sore. He suggests doing the same and tells the coach you need to DH today.",
  options: [
    { label: "Follow his advice and focus on hitting", target: "baseballDHOnly" },
    { label: "Ignore him and play shortstop", target: "baseballPushThrough" }
  ]
},
"baseballPushThrough": {
  text: "You play like normal. Late in the second inning, you make a deep throw to third and feel a pop in your shoulder. You’re pulled and will need rehab.",
  options: [
    { label: "Restart", target: "restart" }
  ]
},
"baseballAdjustedPlay": {
  text: "You adjust your technique, avoid aggressive throws, and ask the coach to sub in for cutoff plays. You get through the game pain-free and feel better the next day.",
  options: [
    { label: "Restart", target: "restart" }
  ]
},
"baseballDHOnly": {
  text: "You go 2-for-3 at the plate and avoid throwing. Athletassist logs your strategy and performance. Your coach later thanks you for managing your own health without needing constant supervision.",
  options: [
    { label: "Restart", target: "restart" }
  ]
},


  // Baseball Section End
  // Basketball Section Start

 "basketball": {
  text: "It’s Sunday, and your club team has back-to-back games. The gym is packed and you’re coming off a long overtime game yesterday. You've logged muscle fatigue and reaction delay into Athletassist to stay prepared. The  warmups feel challenging, but you go all out, as you feel the pressure to perform",
  options: [
    { label: "Log the fatigue and review previous performance", target: "basketballLogData" },
    { label: "Ask your backup to be ready just in case", target: "basketballAskBackup" },
    { label: "Play full-speed anyway", target: "basketballPlayAnyway" }
  ]
},
"basketballLogData": {
  text: "Athletassist notes high exertion trends and suggests hydration, rotation, and pacing. You don’t have authority to sit yourself out, but you can manage your pace.",
  options: [
    { label: "Limit yourself to half-speed cuts and closeouts", target: "basketballManagedEffort" },
    { label: "Forget pacing and play like normal", target: "basketballPlayAnyway" }
  ]
},
"basketballAskBackup": {
  text: "You quietly tell your backup point guard to stay ready. He nods. Midway through the 2nd quarter, you start to fade. He subs in and the coach appreciates your awareness.",
  options: [
    { label: "Restart", target: "restart" }
  ]
},
"basketballPlayAnyway": {
  text: "You push at full effort. By the 4th quarter, your reaction time slows and you trip on a defensive switch. You tweak your ankle and have to sit.",
  options: [
    { label: "Restart", target: "restart" }
  ]
},
"basketballManagedEffort": {
  text: "You conserve energy, communicate clearly on screens, and move off-ball with purpose. Athletassist logs efficiency gain despite lower activity. Your coach praises your 'veteran decision-making.'",
  options: [
    { label: "Restart", target: "restart" }
  ]
},



// Basketball Section End

  "restart": {
    text: "Choose another sport to simulate a new training scenario.",
    options: [
      { label: "Football", target: "football" },
      { label: "Baseball", target: "baseball" },
      { label: "Basketball", target: "basketball" }
    ]
  }
};



function chooseOption(optionKey) {
  const scenario = scenarios[optionKey];
  const container = document.getElementById('simulator-content');
  if (!scenario) return;

  let html = `<p id="simulator-text">${scenario.text}</p>`;

  if (scenario.options && scenario.options.length > 0) {
    html += `<div id="simulator-options">`;
    scenario.options.forEach(opt => {
      html += `<button class="sim-btn" onclick="chooseOption('${opt.target}')">${opt.label}</button>`;
    });
    html += `</div>`;
  }

  container.innerHTML = html;
}


function formatLabel(key) {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

