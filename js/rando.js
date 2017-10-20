class Rando extends User {
	constructor(name, picUrl, movesGenerator, speechGenerator) {
		super(name, picUrl);
		this.movesGenerator = movesGenerator;
		this.speechGenerator = speechGenerator;
	}

	chat() {
		return (this.shouldVote()) ? this.getVote() : this.getLine();
	}

	getVote() {
		return this.movesGenerator.stringifiedMove;
	}

	getLine() {
		return this.speechGenerator.line;
	}
	
	shouldVote() {
		let min = 0;
		let max = 3;
		
		let num = Math.floor(Math.random() * (max - min + 1)) + min;

		return num !== 1;
	}
}