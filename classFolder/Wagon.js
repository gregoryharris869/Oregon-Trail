class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(traveler) {
        if (this.capacity !== this.passengers.length) {
            this.passengers.push(traveler)
        }
        else {
            return "No room for this passenger."
        }
    }
    shouldQuarantine() {
        let isUnhealthy = this.passengers.some(index => index.isHealthy == false)
        return isUnhealthy
    }
    totalFood() {
        let foodSum = 0
        for (let index = 0; index < this.passengers.length; index++) {
            foodSum += this.passengers[index].food
        }
        return foodSum
    }
}