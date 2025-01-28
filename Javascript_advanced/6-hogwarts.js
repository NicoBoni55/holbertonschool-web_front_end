class studentHogwarts {
    privateScore = 0;
    name = null;
    constructor(privateScore, name) {
        this.privateScore = privateScore;
        this.name = name;
    }

    #changeScoreBy(points) {
        this.privateScore + points;
    }

    setName(newName) {
        return this.name = newName;
    }

    rewardStudent() {
        this.#changeScoreBy(1);
    }

    penalizeStudent() {
        this.#changeScoreBy(-1);
    }

    getScore() {
        
    }
}

const harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());