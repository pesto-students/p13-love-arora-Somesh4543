function updateScore() {
  const AV = document.getElementsByName("AV");
  const AC = document.getElementsByName("AC");
  const PR = document.getElementsByName("PR");
  const UI = document.getElementsByName("UI");
  const scope = document.getElementsByName("scope");
  const conf = document.getElementsByName("conf");
  const integ = document.getElementsByName("integ");
  const avail = document.getElementsByName("avail");
  const health = document.getElementsByName("health");
  const sens = document.getElementsByName("sens");

  if (
    isOneSelected(AV) &&
    isOneSelected(AC) &&
    isOneSelected(PR) &&
    isOneSelected(UI) &&
    isOneSelected(scope) &&
    isOneSelected(conf) &&
    isOneSelected(integ) &&
    isOneSelected(avail) &&
    isOneSelected(health) &&
    isOneSelected(sens)
  ) {
    document.getElementById("warning").style.display = "none";

    const totalScore =
      calculatePropertyScore(AV) +
      calculatePropertyScore(AC) +
      calculatePropertyScore(PR) +
      calculatePropertyScore(UI) +
      calculatePropertyScore(scope) +
      calculatePropertyScore(conf) +
      calculatePropertyScore(integ) +
      calculatePropertyScore(avail) +
      calculatePropertyScore(health) +
      calculatePropertyScore(sens);

    const roundedScore = Math.round(totalScore * 10) / 10;
    document.getElementById("score").textContent = roundedScore.toString();
  } else {
    document.getElementById("warning").style.display = "block";

    document.getElementById("score").textContent = "--";
  }
}

function isOneSelected(buttons) {
  let selectedCount = 0;
  for (let button of buttons) {
    if (button.checked) {
      selectedCount++;
    }
  }
  return selectedCount === 1;
}

function calculatePropertyScore(buttons) {
  for (let button of buttons) {
    if (button.checked) {
      const value = button.value;
      switch (value) {
        case "AV_N":
          return 0.85;
        case "AV_A":
          return 0.62;
        case "AV_L":
          return 0.55;
        case "AV_P":
          return 0.2;
        case "AC_L":
          return 0.77;
        case "AC_H":
          return 0.44;
        case "PR_N":
          return 0.85;
        case "PR_L":
          return 0.62;
        case "PR_H":
          return 0.27;
        case "UI_N":
          return 0.85;
        case "UI_R":
          return 0.62;
        case "scope_U":
          return 0.85;
        case "scope_C":
          return 0.62;
        case "conf_N":
          return 0;
        case "conf_L":
          return 0.22;
        case "conf_H":
          return 0.56;
        case "integ_N":
          return 0;
        case "integ_L":
          return 0.22;
        case "integ_H":
          return 0.56;
        case "avail_N":
          return 0;
        case "avail_L":
          return 0.22;
        case "avail_H":
          return 0.56;
        case "health_N":
          return 0;
        case "health_L":
          return 0.22;
        case "health_H":
          return 0.56;
        case "sens_N":
          return 0;
        case "sens_L":
          return 0.22;
        case "sens_H":
          return 0.56;
        default:
          return 0;
      }
    }
  }
  return 0;
}

const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((button) => {
  button.addEventListener("click", updateScore);
});
