
const scenarios = {
  "start": {
    text: "You’ve just finished a high-intensity training session. Your leg feels sore. What do you do?",
    options: {
      rest: "rest",
      train: "train"
    }
  },
  "rest": {
    text: "You took a rest day. Your body recovers well, and you feel refreshed tomorrow. Do you continue resting or start light training?",
    options: {
      lightTrain: "lightTrain",
      keepResting: "keepResting"
    }
  },
  "train": {
    text: "You pushed through. The soreness worsened, and you risk an overuse injury. Do you stop now or keep pushing?",
    options: {
      stopNow: "stopNow",
      keepGoing: "keepGoing"
    }
  },
  "lightTrain": {
    text: "You chose light training and stayed injury-free. Your performance steadily improves. Good choice!",
    options: {}
  },
  "keepResting": {
    text: "More rest helped, but you missed valuable conditioning time. Balance is key!",
    options: {}
  },
  "stopNow": {
    text: "You wisely stopped early. With recovery, you avoided injury and returned strong.",
    options: {}
  },
  "keepGoing": {
    text: "Unfortunately, you developed a stress injury and need weeks off. Prevention is better than cure.",
    options: {}
  }
};

function chooseOption(option) {
  const next = scenarios[option];
  const container = document.getElementById('simulator-content');
  if (!next) return;

  let html = `<p id="simulator-text">${next.text}</p>`;

  if (next.options && Object.keys(next.options).length > 0) {
    html += `<div id="simulator-options">`;
    for (let key in next.options) {
      html += `<button class="sim-btn" onclick="chooseOption('${next.options[key]}')">${formatLabel(key)}</button>`;
    }
    html += `</div>`;
  }

  container.innerHTML = html;
}

function formatLabel(key) {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

