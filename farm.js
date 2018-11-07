
var skillPointsExp = /<span _ngcontent-c13="">(\d+)<\/span>/g;
var lastSkillPoint = -1;

startUp();
function startUp() {
	setInterval(readSkillPoints, 70 * 1000);
	readSkillPoints();
}
function readSkillPoints() {
	var spanContent = $(".user-sparks").html();
	while(m = skillPointsExp.exec(spanContent)){
		if(!isNaN(m[1])) {
			if (parseInt(m[1]) < lastSkillPoint + 2) {
				location.reload();
			} else {
				lastSkillPoint = parseInt(m[1]);
			}
		}
    }
    console.log("Last skill points: " + lastSkillPoint);
	
}