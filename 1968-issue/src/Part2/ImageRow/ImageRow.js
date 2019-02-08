import React from 'react'
import classes from './ImageRow.module.css'
import ImageButton from './ImageButton/ImageButton'

const imageRow = (props) =>{

	//expection props.src, props.name
	const src = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/GOXAAK4FJ5AKTLPEKBCNL2L2LU.jpg"
	const name = "Bruce Bernstein, 1976"
	return (
		<div>
		<div className = {classes.Row}>
    		<ImageButton clicked={onClick} src = {src} name = {name}/>
    		<ImageButton src = {src} name = {name}/>
    		<ImageButton src = {src} name = {name}/>
		</div>

		<div className={classes.introText}>
		<b>Bruce Bernstein occupied the Statue of Liberty for anti-imperialism</b>
	    <br />
	    <i>by Trisha Mukherjee</i>
	    <br />
	    “The Statue of Liberty is supposed to represent America as being the land of freedom and equality and democracy. The Attica Brigade thinks that’s a lot of bullshit,” Bruce Bernstein, then a sophomore at Columbia, told Spectator on April 22, 1974. Three days earlier, 21 members of the New Jersey and New York area Attica Brigade staged a 14-hour occupation of the Statue of Liberty that attracted nationwide attention. Bernstein was one of four Columbia and Barnard students from the national anti-imperialist organization to participate.
	    <br />
	    Bernstein, the son of two public school teachers, grew up in a liberal household in Queens. The Vietnam War began to seize public attention during his middle school years. As early as eighth grade, he began marching in opposition to the war and in support of civil rights. As students shut down Columbia buildings to protest the University’s plans for Morningside Gym in 1968, a 13-year-old Bernstein eagerly watched the chaos unfold on television.
	    <br />
	    He earned a scholarship to attend Phillips Exeter Academy for high school. While Exeter is reputed as an elite private boarding school, Bernstein remembers being inspired by the liberal activism there. “There was a very active group of black students on campus,” he remembers. “I really learned a lot from them.”
	    <br />
	    Columbia’s reputation for being a center of activity attracted Bernstein, and when he arrived on campus in 1972, he quickly joined the activist scene. That year, two black students were murdered by Louisiana State Police officers during a peaceful protest at Southern University, a historically black university in Baton Rouge. Soon after, enraged Columbia students gathered in the Furnald common room to mourn and strategize activism. It was in that room that Bernstein was recruited to the Columbia Anti-Imperialist Movement.
	    <br />
	    CAIM was a large student organization at the time; Bernstein says that around 40 students showed up to every meeting. It was a group of progressive left-wing students who worked against imperialism globally. Barnard women were strongly represented, and according to Bernstein, well-respected. But clusters of student members tended towards different ideologies, siding with Trotsky or Mao or other political and philosophical leaders. “We couldn’t maintain unity,” Bernstein reflects, “and it became too factionalized very quickly.” CAIM eventually broke up.
	    <br />
	    It was then that Bernstein joined Columbia’s chapter of the Attica Brigade, a national organization that was eventually renamed the Revolutionary Student Brigade. Among students, they were called the “Action Faction.” The reason is clear: They were known for sit-ins, occupations, and disruptions. From Bernstein’s enthusiastic and detailed memory, even 45 years later it’s clear how impassioned he and his peers were about African independence movements, imperialism in Vietnam and Chile, Columbia’s unfair treatment of low-income Morningside Heights residents, and divestment from South Africa.
	    <br />
	    Bernstein feels that student activists were playing the defense against the administration. “I have a hard time identifying any offensive struggles in that period,” he explains.
	    <br />
	    Instead, the RSB struggled to protect Iranian students who were at risk of deportation. They also defended the low-income tenants of Morningside Heights who were being evicted by the University. Bernstein says the RSB was ahead of the rest of white America on issues like South Africa and women’s rights. Their biggest victory, he supposes, is helping the Iranian students preserve their spots at Columbia.
	    <br />
	    Bernstein himself never graduated from Columbia. After disrupting a University Senate meeting in 1974, Bernstein and four fellow students were given a disciplinary hearing in the Italian House—which the group nicknamed “Mussolini Hall” at the time. The student activists, already equipped with keen legal knowledge, were able to emerge victorious at the first tribunal by pointing out discrepancies in the rules. Instead of taking “a slap on the wrist,” Bernstein decided to defend himself at a second hearing and was suspended. He went back to school at Queens College after a few years of community organizing.
	    <br />
	    Bernstein has continued to mobilize communities—specifically poor neighborhoods in Philadelphia and Chicago. He is currently 63 years old and a graduate student at the City University of New York, studying political science. Everything he does, he tells me, he does in the context of helping change society.
	    </div>
	    
		</div>
	)
}

export default imageRow;
