// second hand runs every second
class Clock {
  secondHand: HTMLElement | null
  minHand: HTMLElement | null
  hourHand: HTMLElement | null
  secondDegree: number
  minDegree: number
  hourDegree: number
  now: Date
  rotations: number
  minRotations: number
  hourRotations: number

  constructor () {
    this.secondHand = document.getElementById('secondHand')
    this.minHand = document.getElementById('minHand')
    this.hourHand = document.getElementById('hourHand')
    this.secondDegree = 90
    this.minDegree = 0
    this.hourDegree = 0
    this.now = new Date()
    this.rotations = 0
    this.minRotations = 0
    this.hourRotations = 0
  }

  calcRotation (type: string) {
    switch (type) {
      case 'mins':
        return this.minRotations * 360 + 90
      case 'hours':
        return this.hourRotations * 360 + 90
      default:
        return this.rotations * 360 + 90
    }
  }

  setDate () {
    const now = new Date()
    const seconds = now.getSeconds()
    const mins = now.getMinutes()
    const hours = now.getHours()

    console.log('mins', mins)
    console.log('hours', hours)
    console.log('seconds', seconds)

    // next figure out how to convert seconds into a degree for css
    // secounds / 60 gives us a percentage and then multiply by a full cir of 360 deg
    // Spin is the starting point of the hand
    this.secondDegree = (seconds / 60 * 360) + this.calcRotation('sec')
    this.minDegree = (mins / 60 * 360) + this.calcRotation('mins')
    this.hourDegree = (hours / 12 * 360) + this.calcRotation('hours')
    if (this.secondHand) this.secondHand.style.transform = `rotate(${this.secondDegree}deg)`
    if (this.minHand) this.minHand.style.transform = `rotate(${this.minDegree}deg)`
    if (this.hourHand) this.hourHand.style.transform = `rotate(${this.hourDegree}deg)`

    if (seconds === 59) {
      this.rotations = this.rotations + 1
    }
    if (mins === 59) {
      this.minRotations = this.minRotations + 1
    }
    if (hours === 11) {
      this.hourRotations = this.hourRotations + 1
    }
  }

  init () {
    // run every second
    setInterval(this.setDate.bind(this), 1000)

  }
}

const myClock = new Clock()
myClock.init()
