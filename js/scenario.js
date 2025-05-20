const scenarios = {
  "start": {
    text: "Pick a sport to start the simulator.",
    options: [
      { label: "Football", target: "football" },
      { label: "Baseball", target: "baseball" },
      { label: "Basketball", target: "basketball" }
    ]
  },

  "football": {
    text: "You're midway through football practice. You've taken a few hard hits and notice some tightness in your hamstring. Coach calls for another high-intensity drill. You quickly check Athletassist for recent strain tracking.",
    options: [
      { label: "Check Athletassist", target: "footballCheckApp" },
      { label: "Join the drill anyway", target: "footballJoinDrill" }
    ]
  },
  "footballCheckApp": {
    text: "Athletassist shows increased activity over the past two days and suggests communicating with staff if soreness persists. What do you do?",
    options: [
      { label: "Talk to coach", target: "footballTellCoach" },
      { label: "Push through", target: "footballPushAnyway" }
    ]
  },
  "footballTellCoach": {
    text: "You share the info with your coach. He agrees and rotates you to a support role. You stay active without stressing your hamstring.",
    options: [
      { label: "Next day", target: "footballNextDay" }
    ]
  },
  "footballNextDay": {
    text: "You feel better and return to full practice. Athletassist logs a healthy trend.",
    options: [
      { label: "Restart", target: "restart" }
    ]
  },
  "footballPushAnyway": {
    text: "You continue the drill. Mid-sprint, your hamstring seizes up. You’re subbed out and sent to the trainer.",
    options: [
      { label: "Restart", target: "restart" }
    ]
  },
  "footballJoinDrill": {
    text: "You ignore the soreness. You finish the drill, but feel increasingly tight afterward.",
    options: [
      { label: "Restart", target: "restart" }
    ]
  },

  "baseball": {
    text: "You're in batting drills after a heavy throwing day. Your shoulder feels sore. Athletassist pings a reminder about your throw load.",
    options: [
      { label: "Open Athletassist", target: "baseballCheckApp" },
      { label: "Keep going", target: "baseballKeepSwinging" }
    ]
  },
  "baseballCheckApp": {
    text: "Your logs show back-to-back high-throw days. Athletassist suggests talking to staff if soreness continues. What's next?",
    options: [
      { label: "Talk to coach", target: "baseballTrainerTalk" },
      { label: "Push through", target: "baseballIgnoreSoftFlag" }
    ]
  },
  "baseballTrainerTalk": {
    text: "Coach has you skip throwing and focus on batting. You stay active and feel better tomorrow.",
    options: [
      { label: "Restart", target: "restart" }
    ]
  },
  "baseballIgnoreSoftFlag": {
    text: "You complete all throws. The soreness lingers into tomorrow's game. You mark it for tracking next time.",
    options: [
      { label: "Restart", target: "restart" }
    ]
  },
  "baseballKeepSwinging": {
    text: "You finish the session. Soreness builds up, and you're asked to sit the next day.",
    options: [
      { label: "Restart", target: "restart" }
    ]
  },

  "basketball": {
    text: "You're heading into a full-court scrimmage after a long week. Athletassist buzzes: fatigue levels trending high. What do you do?",
    options: [
      { label: "Review Athletassist", target: "basketballCheckNow" },
      { label: "Ignore and play", target: "basketballPlayHard" }
    ]
  },
  "basketballCheckNow": {
    text: "Athletassist notes decreased jump height and slower lateral speeds. A good time to talk strategy with your coach.",
    options: [
      { label: "Request lighter load", target: "basketballTalkCoach" },
      { label: "Go all-in", target: "basketballGoFull" }
    ]
  },
  "basketballTalkCoach": {
    text: "Coach agrees. You rotate in and out more frequently and focus on off-ball movement. You avoid overexertion.",
    options: [
      { label: "Restart", target: "restart" }
    ]
  },
  "basketballGoFull": {
    text: "You go all-in. Later in the scrimmage, you cramp and sit out for recovery. You note the trend for next time.",
    options: [
      { label: "Restart", target: "restart" }
    ]
  },
  "basketballPlayHard": {
    text: "You push through. Your legs feel unstable. You're pulled for ice and recovery.",
    options: [
      { label: "Restart", target: "restart" }
    ]
  },

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

