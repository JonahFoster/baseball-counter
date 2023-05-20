let pitchEl = document.getElementById("pitch-el")
let ballEl = document.getElementById("ball-el")
let strikeEl = document.getElementById("strike-el")
let saveEl = document.getElementById("save-el")
let walkEl = document.getElementById("walk-el")
let strikeOutEl = document.getElementById("strikeout-el")
let hitsEl = document.getElementById("hits-el")
let pitchCount = 0
let ballCount = 0
let strikeCount = 0
let hitCount = 0
let walkCount = 0
let strikeOutCount = 0
let hitsCount = 0

function pitch() {
    pitchCount +=1
    pitchEl.textContent = "Pitch Count: " + pitchCount
}

function ball() {
    ballCount += 1
    ballEl.textContent = ballCount
    pitch()
    atBatResult()
}

function strike() {
    strikeCount += 1
    strikeEl.textContent = strikeCount
    pitch()
    atBatResult()
}

function hit() {
    hitCount += 1
    atBatResult()
    pitch()
}

function saveResult() {
        let countStr = ballCount + "-" + strikeCount + (",")
        saveEl.textContent += countStr
        ballEl.textContent = 0
        ballCount = 0
        strikeEl.textContent = 0
        strikeCount = 0
        hitCount = 0
}

function atBatResult() {
    if (ballCount == 4) {
        walkCount += 1
        walkEl.textContent = "Walks: " + walkCount
        saveResult()
    }
    else if (strikeCount == 3) {
        strikeOutCount += 1
        strikeOutEl.textContent = "Strikeouts:  " + strikeOutCount
        saveResult()
    }
    else if (hitCount == 1) {
        hitsCount += 1
        hitsEl.textContent = "Hits: " + hitsCount
        saveResult()
    }
}
