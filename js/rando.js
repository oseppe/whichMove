class Rando extends User {
	constructor(name, picUrl, sayMove, sayLine) {
		super(name, picUrl);
		this.sayMove = sayMove;
		this.sayLine = sayLine;
	}

	chat() {
		return (this.shouldVote()) ? this.getVote() : this.getLine();
	}

	getVote() {
		return this.sayMove();
	}

	getLine() {
		return this.sayLine();
	}
	
	shouldVote() {
		let min = 0;
		let max = 3;
		
		let num = Math.floor(Math.random() * (max - min + 1)) + min;

		return num !== 1;
	}
}