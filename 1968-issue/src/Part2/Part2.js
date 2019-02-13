
import React, {Component} from 'react'
import classes from './Part2.module.css'
import ImageRow from './ImageRow/ImageRow'

const src_Bernstein = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/GOXAAK4FJ5AKTLPEKBCNL2L2LU.jpg"
const src_Schwartz = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/77PTZ4DID5DOHOGTG672UBDFGA.jpg"
const src_Futterman = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/JS6RQP7C2BE4NEUH3TFWMD3YGU.jpg"

const name_Bernstein = "Bruce Bernstein, 1976"
const name_Schwartz = "Arthur Schwartz, 1975"
const name_Futterman = "Donna Futterman, 1975"

const info_Bernstein = (
    <div className={classes.infoText}>
    <b>Bruce Bernstein occupied the Statue of Liberty for anti-imperialism</b>
    <br/>
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
)

const info_Schwartz = (
    <div className={classes.infoText}>
    <b>Arthur Schwartz only went to 20 classes in his last two years at Columbia</b>
    <br></br>
    <i>by Trisha Mukherjee</i>
    <br></br>
    Arthur Schwartz, who graduated from Columbia College in 1975, is uncompromising in his activism. While Columbia’s self-proclaimed “leading activist from 1972-1975,” he organized anti-imperialist demonstrations that were well-known around campus. After graduating, he engaged in issues ranging from the Vietnam War to NYC’s parks and playgrounds to Bernie Sanders’ presidential campaign.
    <br></br>
    A quote from his email signature sums up his bold outlook on life: “Let’s be realistic. Let's do the impossible!"
    <br></br>
    As a Columbia student, Schwartz was known as a radical campus activist. In 1972, he was actively involved, though not a leader, in the anti-war building takeovers inspired by the activism of 1968—just one student generation removed. He was a member of the Columbia Anti-Imperialist Movement, the Attica Brigade, and the Revolutionary Student Brigade—all of which concerned themselves with issues of war, imperialism, and the surrounding West Harlem community.
    <br></br>
    Schwartz was outspoken and didn’t let disciplinary action from authority figures stop him. In a Spectator article from 1975, he critiques Peter Pouncey, dean of Columbia College at the time, and then declares himself “a more honest man” than Assistant Dean of the College Bruce Zimmer.
    <br></br>
    From what his friend and fellow activist Bruce Bernstein, who initially belonged to the Columbia Class of ’76, tells me, Schwartz was “already a brilliant lawyer.” When RSB was put on trial by the administration for disrupting a University Senate meeting, Schwartz went toe to toe with the Divisional Board of Inquiry that would judge them, threatening to bring in outside legal action and challenging the rules of procedure in place. Upon graduating, he proudly declared that during his final two years, he “went to no more than 20 classes.”
    <br></br>
    After graduating, Schwartz was undecided about if he wanted to become a lawyer or become a factory worker. He ultimately chose the former, and his path as a lifelong activist unrolled before him.
    <br></br>
    Today, Schwartz is one of New York’s most prominent labor and employment lawyers. For many years after leaving Columbia, he worked in community organizing, mostly in southern Manhattan. For one far-reaching project (out of many), Schwartz negotiated with the city to create and renovate a system of parks and playgrounds in the West Village.
    <br></br>
    Schwartz never thought he would become an elected politician; after all, he had spent most of his life fighting them. Only when his friend encouraged him to run for Democratic District Leader of the Greenwich Village, Soho, Tribeca, and northern Battery Park City areas, did he decide to give it a try. "If you have a movement without an electoral component,” he tells me, “you can make all the noise you want, but you'll never get people in office to carry out what you want."
    <br></br>
    He won the election and served in the position for almost two decades. He was also the New York legal counsel to Bernie Sanders’ presidential campaign and currently counsels Cynthia Nixon, who is running for New York City governor.
    <br></br>
    Having also provided legal counsel to unions in New York City for years, Schwartz has strong feelings about the graduate student workers’ union today. “I've actually been involved to some degree in some of the litigation over this,” he reveals. “It's been like a ping pong ball.” His main words of advice: “go for [the strike].”
    <br></br>
    While he is out in the world being an activist, Schwartz always keeps his family in mind. He has four children ranging 18 years in age, whom he often mentions throughout our conversation. In fact, they sparked his dedication to his activism around parks and playgrounds. As we end our conversation about creating systemic change and fighting imperial powers, Schwartz tells me he has to hang up soon; he is picking up his daughter from school.
    </div>
)

const info_Futterman = (
    <div className={classes.infoText}>
    <b>While Donna Futterman took over buildings in the ’70s, she feared coming out at Barnard</b>
    <br></br>
    <i>by Trisha Mukherjee</i>
    <br></br>
    “All we are saying … is give peace a chance,” sang around half a million protesters as they gathered outside the White House in November 1969, demonstrating against the Vietnam War. Among them were Donna Futterman and her best friend.
    <br></br>
    Futterman, Barnard class of 1975, was a high school senior at the time. As she marched with her fingers held up in a peace sign, she noticed her friend raising a fist. That was when she realized that asking for peace wasn’t enough––the South Vietnamese had to fight for their freedom, and she felt she needed to join their fight. By the end of the evening, Futterman was marching with her fist in the air, too.
    <br></br>
    That was shortly after Futterman applied to Barnard, which attracted her because of the strong activist presence on campus. When she arrived the following fall, Futterman joined a handful of activist initiatives, though today she can’t recall the names of any specific groups. As part of the anti-war movement, she wrote leaflets, led marches, created chants, and did research to investigate Columbia’s connection to the military-industrial complex. This research ignited a push for Columbia to divest from companies like Honeywell that supported the war. The protestors’ slogan, which was printed across leaflets and shouted during marches, was <i>“We’re not going to allow business as usual”</i>
    <br></br>
    As a climax in her anti-war activism, Futterman led the building takeovers of 1972. Motivated by President Richard Nixon’s bombing of Cambodia and Vietnam, they closely resembled the famous 1968 protests. Of course, administrators were outraged. When Futterman received a cease and desist order from the University on her birthday, she thought, “What a great birthday present!”
    <br></br>
    On top of her anti-war activism, Futterman says she was part of the December 4th Movement. (When we can’t find the name anywhere online to fact-check the spelling, she suggests it pre-dates the internet.) Abbreviated D4M, it was an anti-racist movement named after the day Chicago Police Department and the Federal Bureau of Investigation killed Black Panther leader Fred Hampton as he slept in his bed. Futterman was also an above-ground supporter of the Weather Underground, a militant leftist organization that on multiple occasions used bombs to prove its points. Though Futterman never took any part in the violence, she supported the organization’s politics.
    <br></br>
    Her radical history caught up with her in the ’90s: She says that when she went to visit the White House to apply for a grant for her career, she was turned away because she was still on Nixon’s enemy list.
    <br></br>
    Futterman was a strong supporter of the feminist movement. However, she feared coming out because “lesbianism wasn't fully welcomed in the feminist movement” at the time. Although Futterman had known she was lesbian in high school, she only made it public when a student from Hong Kong decided to create a public registry of lesbian Barnard students in order to form a community. The registry was revolutionary––no one at Barnard had ever declared their homosexuality so openly and unabashedly.
    <br></br>
    While her anti-war activism targeted authority figures, Futterman’s activism around sexuality was a lot more personal. “I was pretty brave taking over buildings, but this was a big, big deal, putting my name on that first leaflet,” she reflects. The group, called Lesbians at Barnard, met weekly. They began planning dances, holding social gatherings, collaborating with gay men at Columbia, and attending gay pride marches.
    <br></br>
    After graduating from Barnard, Futterman worked as a secretary, an abortion counselor, and a taxi driver. While working these jobs for four years, she realized she needed a job with which she could financially support herself––as a lesbian woman, finding “a rich husband” to support her wasn’t an option. Futterman ended up going to medical school with the dream of fighting the AIDS crisis. “It was clear that it was a gay disease, so it was my people, my community,” she explains. Thirty years ago, Futterman started the Adolescent AIDS Program in the Bronx.
    <br></br>
    She tells me her anti-imperialist activism at Columbia gave her an international perspective on her work today. When she traveled to South Africa in 2001 to study AIDS, she was so inspired by local practices that she planned to emulate them back in the US. “You can't come in as the ‘Big American’ and take over,” she tells me.
    <br></br>
    To this day, 44 years after graduating from Barnard, Futterman is still working to combat AIDS. She tells me she loves her job, and it’s clear that her activism has never faded but only shifted forms. As she put it, it is now more focused on concrete issues—AIDS and public health—than just creating revolution.
    </div>
)

const INFO_TEXT1 = [
    {label: "Bernstein", text: info_Bernstein, src: src_Bernstein, name: name_Bernstein},
    {label: "Schwartz", text: info_Schwartz, src: src_Schwartz, name: name_Schwartz},
    {label: "Futterman", text: info_Futterman, src: src_Futterman, name: name_Futterman}
]

const src_Ohringer = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ESFAG3V5UVDOPJD7F6SLC7HBFA.jpg"
const src_Armstrong = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/2HJCBNGSHND2PNPP5R4S2WXKZE.jpg"
const src_Kahn = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/KA27HIMEH5CKXNTKC3KZYB4U3M.jpg"

const name_Ohringer = "Mindy Ohringer, 1984"
const name_Armstrong = "Daniel Armstrong, 1984"
const name_Kahn = "Robert Kahn, 1985"

const info_Ohringer = (
    <div className={classes.infoText}>
    <b>Mindy Ohringer: A Revolutionary Digit</b>
    <br></br>
    <i>by Lyric Bowditch</i>
    <br></br>
    Instead of Pin the Tail on the Donkey, Mindy Ohringer, Barnard class of 1984, played Pin the Tapes on Nixon at her birthday party in 4th grade. “I always was political,” she tells me. “I grew up political, I followed Watergate, I wanted to start an underground newspaper in elementary school.”
    <br></br>
    Ohringer describes herself as having been a “sort of radical intellectual” even before coming to Barnard. Bored one March afternoon during her freshman year of high school, she pulled three books off the shelf in her hallway, probably left there by her older siblings: Eldridge Cleaver's <i>Soul on Ice</i>, Jerry Rubin's <i>Do It!</i>, and <a href="http://spectatorarchive.library.columbia.edu/cgi-bin/columbia?a=d&d=cs19821006-01.2.11&srpos=1&e=-------en-20--1--txt-txIN-mindy+siegal------"> Abbie Hoffman's </a> <i>Revolution for the Hell of It</i>. “They were were waiting for me,” she remembers. “I read them and I said, ‘There was this revolution that was supposed happen. And it started, but it's not finished.’ And that has stayed with me until today.” For young Ohringer, revolution meant radical change—finishing what the civil rights, pride, anti-militarism, and women’s movements of the previous decades had started.
    <br></br>
    So when she was only 16 years old, Ohringer arrived at Barnard ready to get involved with campus activism. The fall of 1980, she says she was one of 30 students to protest the return of CIA recruitment officers to Columbia. This was just the first demonstration of many. Ohringer also quickly became involved with an anti-war group called Students Against Militarism, which was brand new at the time.
    <br></br>
    She tells me that she was both inspired by and curious about the complex legacy of Columbia’s 1968 protests—both for students and for the American Left as a whole. There was a sense that activism, and the history of 1968, should be a part of the Columbia student experience. But at the same time, she reflects, “we all feel there’s a shadow cast by the sundial on our experience as students.” The magnitude of the 1968 protests felt impossible to live up to for the Columbia activists of her generation.
    <br></br>
    Ultimately, activism at Columbia didn’t live up to Ohringer’s expectations; she admits that she was surprised at the complacency of campus. “I mean, nobody was making the revolution on a full-time basis,” she laughs. In a more serious tone, she emphasizes that the early 1980s were a “demoralizing” time to be a young activist.
    <br></br>
    It seems that SAM, in particular, was a disappointment. Rather than analyzing what it stood for and why it was there, Ohringer says, the group showed up for all different kinds of issues on campus. “Things were just not, to me, going in a particularly coherent direction,” she explains. While Ohringer does give SAM credit for contributing to the intellectual life of the University, she thinks members could have done a better job at radicalizing the consciousness of their fellow students. “I don’t know to what extent we fully tried.”
    <br></br>
    Just three semesters after joining SAM, Ohringer stepped away from the group and joined Alpha Delta Phi, Columbia’s co-ed literary fraternity, in the spring of her sophomore year. She reminds me that Columbia was still all-male; Barnard women were the ones to make ADP go co-ed. Ohringer then became the fraternity’s first female vice-president, whose primary job was interacting with (and, in her case, educating) the chapter’s alumni. “So it was me and all the old white guys!” she laughs.
    <br></br>
    After graduating from Barnard in 1984 (she underscores that she was supposed to graduate that spring, but turned in one paper late, so her degree is officially from October), Ohringer became a graduate student at NYU. While living in Manhattan, she marched both in support of affordable housing and against gentrification. She has also protested the closures of and inadequate funding for public schools in NYC and lobbied on behalf of the Opt Out Movement, which opposes “Common Core” as well as “developmentally inappropriate standardized testing.”
    <br></br>
    At NYU, Ohringer earned a master’s degree in politics and completed 72 credits for a doctoral program before deciding that she didn’t want to become a left-wing academic after all. Despite initially complicated feelings about the job—“I’m working within the system; I’m inside the state!”—she ended up working for the local City Councilman in Jamaica, Queens for eight years, from 1985 to 1993. Since then, the primary locus of Ohringer’s activism seems to be the Parent-Teacher Association at her children’s suburban public school; she spends a significant chunk of our two and a half hour long conversation telling me about her tenure as President.
    <br></br>
    On the first page of <i><a href="http://digitalcommons.lasalle.edu/cgi/viewcontent.cgi?article=1103&context=vietnamgeneration">The Strawberry Statement: Notes of a College Revolutionary</a></i>, James Simon Kunen, a student activist from 1968, writes: “Leaders cannot seize and occupy buildings. It takes great numbers of people to do that. I am one of those great numbers. What follows is the chronicle of a single revolutionary digit.” Ohringer, now a writer, references these lines in our very first email exchange: “I would not consider myself a ‘leader,’” she wrote. “More of a quiet and determined person of fairly consistent conscience, a ‘revolutionary digit.’”
    </div>
)

const info_Armstrong = (
    <div className={classes.infoText}>
    <b>Daniel Armstrong and his Flyers</b>
    <br></br>
    <i>by Parth Chhabra</i>
    <br></br>
    Daniel Armstrong, of the Columbia College class of 1984, came to Columbia to play basketball and left as the founder of the Coalition for a Free South Africa—a group that would, the year after Armstrong’s graduation, famously blockade Hamilton Hall and cause Columbia to divest from companies operating in apartheid South Africa. But before that—before the blockade, before the mass student support, before the international recognition, before all that—there was only Armstrong and his flyers.
    <br></br>
    Armstrong’s interest in fighting for South Africa became direct action because of an identity crisis. In high school, Armstrong had always been a star basketball player; on the team at Columbia, though, he was often on the bench. But if he wasn’t good at basketball, who was he? So Armstrong took something else he was passionate about and built who he was around it: fighting for justice in South Africa.
    <br></br>
    It took him some time to settle into this new identity—he was embarrassed, at first, whenever people saw him putting flyers up. But the change happened: During his first and second year, if basketball practice started at 4:30, Armstrong was on the court practicing by 3:00. He would stay after training too, working on his shot. By his junior year, however, Armstrong was getting to practice a minute before it started and running out as soon as it ended to organize some CFSA event. He quit basketball before his senior year.
    <br></br>
    Armstrong began the CFSA with a focus on education. It was important to teach people about what was going on in South Africa before you could get them invested in the issue of Columbia’s divestment. He posted flyers—many, many flyers—held rap sessions, film screenings, talks. He calls this a “drip by drip” method. The idea, he explains to me, is that if you’re waiting for an elevator in Carman Hall, you regularly see a flyer about the situation in apartheid South Africa. Maybe you dismiss it, but you get back to your lounge where everyone is watching TV, and it starts a discussion. Armstrong credits his drip by drip method for creating the knowledge required for a big base and support to emerge the way it did during the later years of the movement.
    <br></br>
    In the early days, Armstrong was largely alone in leading the flyering and organization. While there were other members, they didn’t stay all the way through, leaving in times of high academic commitment. On his part, Armstrong planned his time thoroughly in five minute blocks from the moment he woke up to ensure he could get done what he wanted to do. He wasn’t dispirited by being alone: “It’s part of my makeup—once I decide to do something, I kind of do it,” he tells me. Plus, there was support to be found in unexpected places. For instance, he was paying for flyers out of his own pocket (and as a result, overstating the amount of toothpaste he was buying in his financial reports for his parents). He recalls, however, being told by a faculty member to show up to a certain room and finding many copies of flyers awaiting him there.
    <br></br>
    The CFSA had its first rally behind Low Library in drizzling rain. It was attended by maybe five people: Armstrong, his cousin from LA, and three other students. Clearly, at first, student support and engagement was small. But this small protest—five people you could’ve mistaken for a group of friends, as he puts it—was still marked with the memory of the 1968 protests, even 14 years later. Armstrong had secured the required permissions to host the rally at the sundial. Before the rally, however, an administrator told him it couldn’t happen there after all—it was Dean’s Day and there would be too many alumni on campus. Armstrong speculates that the image of a student protesting would not make many of the visiting alumni happy, a supposed sign that the “old Columbia” had reemerged.
    <br></br>
    In the spring of 1983, Barbara Ransby—a University senator, whose involvement with CFSA provided Armstrong with the consistent co-leadership he needed—managed to get a unanimous vote through the Senate urging the trustees to divest from South Africa. They refused. With a democratic process overturned (the democratic process of a body created to prevent protests in the wake of 1968, that too) there was suddenly a mandate for direct action.
    <br></br>
    Armstrong took part in many more protests and rallies, urging the University and trustees to divest from South Africa. He even participated in a hunger strike—it was a spiritual undertaking, he says, one that showed the student body that the fasters were ready to take on difficulties on themselves and not just demand others to act. After the strike was over, he went to John Jay dining hall and had some ice cream: a bad idea, because his body had detoxed over the week and the chemicals in ice cream didn’t sit well with him.
    <br></br>
    Armstrong graduated in 1984, before the group he founded would successfully cause Columbia to divest. He remembers waking up to the news of the Hamilton Hall blockade while in South Africa—he was there visiting while studying youth development in Zimbabwe after graduation—unable to believe what he was seeing. Armstrong was in South Africa observing the conditions—he was visiting anti-apartheid leaders, going to meetings, visiting black townships—and so, by coincidence, he had a meeting with Bishop Tutu that day. At the meeting, he got Tutu to confirm his support for the students, the blockade, and divestment.
    <br></br>
    Since 1999, Armstrong has been the founder and president of “Find A Tree,” an organization through which he mentors youth and adults “to follow big dreams.” He carries a lot from his work as an activist at Columbia to his motivational work today: Whenever someone tells him a big dream, he tells me that he asks them, “What are you going to do about it? Where are you going start?”
    </div>
)

const info_Kahn = (
    <div className={classes.infoText}>
    <b>Robert Kahn pretended to die on College Walk</b>
    <br></br>
    <i>by Lyric Bowditch</i>
    <br></br>
    On July 2, 1980, President Jimmy Carter signs the Registration Under the Military Selective Service Act, requiring all 18 to 26-year-old male citizens (barring some exemptions) to register for the draft. The Soviets had invaded Afghanistan the previous year, and the U.S. was gearing up for war. This changes Robert Kahn’s life.
    <br></br>
    Kahn, a counselor at a Reform Jewish summer camp at the time, had just turned 17 and was terrified of being drafted. So when he returned home to Needham, Massachusetts, he put himself through draft counseling, learned how to become a draft counselor himself, and then joined the Boston Alliance Against Registration and the Draft. “They were a really fun group,” he tells me. For a shy, sheltered kid from a suburb outside of Boston, this introduction to activism “was just so earth-shattering.”
    <br></br>
    While he was in the midst of becoming an activist, Kahn was also a high school senior applying to college. He recalls listening to the soundtrack of Hair and reading a book about protests in New York City, when he realized, “Yeah, Columbia’s the place I gotta go.” He had also read The Strawberry Statement: Notes of a College Revolutionary, a chronicle of the experiences of a Columbian student activist from 1966 to 1968, and found the history and legacy of the 1968 protests “incredibly exciting.” Even before arriving on campus in 1981, Kahn knew he would become a part of the activist scene.
    <br></br>
    During his time at Columbia, he became involved with several different groups: Students Against Militarism, which had formed the previous year in response to President Carter’s draft registration; Students for a Democratic Campus, a group that ran a slate of “radical candidates” for all student government positions; and the Barnard-Columbia Gospel Choir.
    <br></br>
    Though strongest in its first two years, SAM was still active in 1982. The group picketed against weapons research job recruitment, took part in a march and rally against U.S. aid to the “repressive and brutal government of El Salvador,” organized a “die-in” on College Walk to draw attention to the dangers of a nuclear attack, and attended the enormous global protest against nuclear weapons on June 12.
    <br></br>
    But by Kahn’s third year on campus, SAM had dwindled to a group of 15 or so students. “We were just a bunch of informal people trying to do a few things, chat, have some speakers,” Kahn explains. Unlike groups like the Committee in Solidarity with the People of El Salvador or the Coalition for the Liberation of South Africa, SAM never had a clear mission statement or concrete goals. “Honestly we thought rightly or wrongly that going to the weekly meetings counted as change,” Kahn tells me. “Or being out on College Walk and having people see us opposing militarism.”
    <br></br>
    I get the impression that “solidarity building” was much more important to Kahn’s activism than tangible success. The SDC campaign did not go very well. (“We basically got trounced in almost all the elections.”) A group of students attempted to start a magazine called Common Ground to stitch their activism together, but “it didn’t really get off the ground that much.” Nonetheless, Kahn recalls these efforts fondly.
    <br></br>
    “The interesting thing was the way the activism generated a community,” he tells me. “There was a lot of cross-fertilization.” People in different groups tended to know each other and show up for each other’s events. In his senior year, for example, Kahn participated in the 21-day sit-in at Hamilton Hall to get the University to divest from South Africa. But even outside the activism itself, these connections provided strong social infrastructure for an introverted 17-year-old. There were always parties to go to: “I never felt bored.”
    <br></br>
    Kahn even met his wife, Jacqueline Baronian, through SAM in 1983. “One early time, we were going out on a wheat-pasting raid,” he recalls. “You know, putting up little posters for anti-war stuff. Or maybe it was CISPES.” Baronian graduated from Barnard in 1986.
    <br></br>
    In addition to solidarity between students, Kahn emphasizes the role professors played in the landscape of campus activism when he was a student. Many of his professors were Marxists or expressed sympathy for Marxism and the goals of student radicals. “When you hear about these protests in class and learn about racism … and then turn around and it’s there,” he tells me, “with the groups I think that really helped.”
    <br></br>
    Today, Kahn himself is a professor of law at the University of St. Thomas in Minnesota and a father of two. He was attracted to St. Thomas because of the law school’s emphasis on social justice and holistic education—“and that is part of the lesson that I take out of my Columbia years and my reading of 1968.” And just a few weeks ago, his 14-year-old son spoke at his school’s anti-gun violence walkout and rally.
    <br></br>
    “The goals are still the same, but it’s trying to find [new] ways of fighting the good fight,” he explains.
    </div>
)

const INFO_TEXT2 = [
    {label: "Ohringer", text: info_Ohringer, src: src_Ohringer, name: name_Ohringer},
    {label: "Armstrong", text: info_Armstrong, src: src_Armstrong, name: name_Armstrong},
    {label: "Kahn", text: info_Kahn, src: src_Kahn, name: name_Kahn}
]

const src_GradyWillis = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/AMHWI6GYZVHRDLEFQ2JGQRFQLM.jpg"
const src_Bowman = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/5SPSJ4FJXJE73DGJXNU2OLULMY.jpg"
const src_Potter = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FYXFUR2FD5BCVATFDJGYC6BOB4.jpg"

const name_GradyWillis = "Winston Grady-Willis, 1987"
const name_Bowman = "Warigia Bowman, 1990"
const name_Potter = "Noah Potter, 1995"

const info_GradyWillis = (
    <div className={classes.infoText}>
    <b>Winston GradyWillis’ Two Blockades of Hamilton Hall</b>
    <br></br>
    <i>by Parth Chhabra</i>
    <br></br>
    In the spring of 1985, Winston Grady-Willis, a member of the Columbia College class of 1987 and president of the Black Students’ Organization his junior and senior years, took part in a rally organised by the Coalition for a Free South Africa. As always, the CFSA rally was protesting for Columbia’s divestment from companies operating in apartheid South Africa—members from the group had been getting the word out about this particular rally for a while now. Grady-Willis had been involved with the CFSA for around a year at this point, mostly—as he puts it—as a “foot soldier” for the cause, which had been gaining traction since his arrival on campus in 1983.
    <br></br>
    This particular April rally started off as any other might—Grady-Willis remembers being fired up, chanting, marching around campus. The rally ended outside Hamilton Hall, where he noticed some of the other activists huddled around the door. “The next thing I know,” he says, laughing, “they move, and the doors are chained.” And that’s how Grady-Willis found himself involved in the famous Hamilton Hall blockade of 1985.
    <br></br>
    The blockade was successful—it got national and international coverage, as well as support from activists from West Harlem and around the world (including a telegram from Bishop Desmond Tutu). Later that year, Columbia divested from South Africa.
    <br></br>
    But on the ground, during the blockade, students of color faced more challenges than their white peers: They were disproportionately identified, partially because of their close relationships with black faculty and administrators, and sent letters threatening disciplinary action. Grady-Willis received a letter himself and was put on probation. He cannot remember if it was for two or three semesters.
    <br></br>
    Understanding and combating the many ways, both subtle and overt, in which Columbia’s racism harmed black people and other people of color defined Grady-Willis’ time on campus. The 1968 protests and their participants played a big role in that—the stories of 1968 were told and retold in BSO meetings and informal conversations.
    <br></br>
    At some point, Grady-Willis realized a fundamental contradiction: Columbia University stood in Harlem, even while its “powers that be” refused to “embrace and acknowledge that the campus is located in Harlem,” he says.
    <br></br>
    As Grady-Willis and other black activists ventured out into Harlem, into “its barber shops, its hair salons, its eaties,” he came to understand how Columbia treated the Harlem community. The treatment had always been there: He remembers, right from the moment he stepped foot on campus, being told to get off the 2 train at 96th Street, to never stay on it past. In just four years, from 1983 to 1987, he watched as Columbia gentrified the surrounding neighborhood and as its Afro-Latinx and African-American presence diminished.
    <br></br>
    Grady-Willis got involved in the fight for the neighborhood: In 1986, he was arrested at a tenants’ rights protest. But Grady-Willis was also forced to consider the ways in which he was a part of this Columbia machine. He tells me about going into Harlem in a victory march after the success of 1985, only to be shouted at from tenement windows to go back to Columbia. Columbia’s antagonistic relationship with Harlem is something Grady-Willis still has a hard time reconciling. “There are reasons why I don’t visit my alma mater regularly,” he says, laughing over what I sense is sharp sadness.
    <br></br>
    Grady-Willis fought Columbia’s institutional racism not just out in Harlem but also on campus. As president of the BSO, he was part of the spring 1986 effort to unite black student groups on campus. The coalition had many issues of concern: the low number of black students and faculty on campus, the separation that Columbia was creating between itself and Harlem, and the lack of a black or Africanah studies department.
    <br></br>
    This institutional racism bubbled up to the surface violently in the spring of 1987. A black student, Mike Jones, had reported to Grady-Willis and other black students that he had been repeatedly taunted by a particular group of white students, most of whom were athletes. Hoping to identify them for possible institutional action, a group of black students, including Grady-Willis, waited at Ferris Booth Hall. (He preemptively and categorically denies any rumors that the students were there to attack the white students.) Grady-Willis clearly recalls that Jones, Jones’ brother, and another friend from the community were leaving FBH when they were attacked by—to his memory and estimation—15 to 20 white players from the football team.
    <br></br>
    A violent fight broke out. “It was just an absolute free-for-all,” Grady-Willis says. He remembers headlocks, he remembers the fight spilling out onto Broadway, and he remembers a white student repeatedly shouting, “We’re going to kill all you fucking [n-word]s.” After the fight, the black students reconvened in the Malcolm X lounge, where, in the early hours of the morning, they formed the Concerned Black Students of Columbia—and planned a march and rally for that same morning.
    <br></br>
    There were many rallies through the rest of that semester, which was hallmarked by racial tension. During one march, Grady-Willis remembers a table being thrown at the marchers from a frat house window. The major protest, though, was the blockade of Hamilton Hall—clearly an echo of the one two years prior and the one in 1968. And in another echo of 1968, President Sovern broke the blockade up by calling in the NYPD, marking the first time police intervened in a student demonstration since 1968.
    <br></br>
    Grady-Willis’ concerns about activism, race, and community shaped his life after college: He was first a teacher in Harlem, and then the Bronx, before he went back to higher education. He wrote his master’s thesis on the Black Panther Party and his Ph.D dissertation on direct nonviolent action in the Black Power activism of Atlanta. He is currently the director of the School of Gender, Race and Nations at Portland State University. He is, clearly, still about the fight.
    </div>
)

const info_Bowman = (
    <div className={classes.infoText}>
    <b>Warigia Bowman stays mindful of student voices
    </b>
    <br></br>
    <i>by Candy Chan</i>
    <br></br>
    In March 1987, a brawl between black and white students on the Ferris Booth Hall plaza shattered all possible perceptions of a racism-free Columbia. The incident started when a group of white students, mainly fraternity brothers, attacked a black student after he asked them to stop calling him racial slurs. Students standing by the situation tried to intervene, and the attack escalated to a full-on fist fight. The campus remained divided for the rest of the academic year, and the legacy of the racially-charged incident placed the issue of race relations in the forefront of student activism for much of the early 90’s.
    <br></br>
    The fight also gave way to the formation of Concerned Black Students at Columbia. A month later, the organization hosted a sit-in at One Police Plaza that ended in the arrest of 23 members, one of whom was Warigia Bowman, who graduated from Columbia College in 1990.
    <br></br>
    Bowman lets out a distinct laugh when I tell her I’ve read about her days as an undergraduate and as a student activist. It’s a laugh that’s warm but biting with irony, like she’s about to follow it up with a scathing anecdote of her experiences at Columbia. Instead, she just says that there was a lot to protest then.
    <br></br>
    The inequity Bowman observed at Columbia, particularly the working conditions for campus staff, prompted her to run—successfully—for University Senator; she had 11 goals on her platform, ranging from increased student representation in the Council on Undergraduate Life to complete divestment from South Africa. Among advocating for more faculty of colour and serving as chair of the Columbia Committee in Solidarity with the Eastern Strikers, Bowman would go on to draft the resolution to freeze fraternity funding to deal with racial discrimination in the Greek life system.
    <br></br>
    But her time on the Senate was short-lived. She resigned from her post in the fall of 1989, explaining at the time that being senator was one of the “most horrifying experiences” of her time at Columbia. "If all the students left the senate, it wouldn't make the least bit of difference in the world," she said at the time. She lets out another chuckle when I remind her of this during our call, saying it’s “probably still true.”
    <br></br>
    Bowman is currently professor at the University of Arkansas Clinton School of Public Service. Having now observed the student-administration dynamic as a professor, she says she regrets not being more respectful towards the administrators at Columbia while she was a student here.
    <br></br>
    Though she seems reluctant to further explain the reasons behind her regret, she follows up by offering an analogy. She believes that Columbia can be viewed in two ways: either as an “island of privilege in a sea of poverty or disadvantage,” or as a “bench institution,” a part of its surrounding community; to Bowman, the administration plays a crucial role in making Columbia more of the latter. At the University of Arkansas, Bowman specializes in Field Research Methods and Theory and Practice of Global Development, and she emphasizes to her students the importance of fostering partnership with the communities they work with.
    <br></br>
    As she discusses her students, Bowman pauses for a moment.
    <br></br>
    “You know, I wonder if this happened from my experience of as an activist, but I'm very interested in pedagogical method that incorporates student voices into the classroom.”
    <br></br>
    Bowman is also the chair of the Arkansas State Advisory Committee for the United States Civil Rights Commission and her board positions in both the Women’s Action for New Directions  and the  Arkansas Coalition for Peace and Justice. She speaks excitedly about a new project in ACPJ: Dialogue Across the Aisle. The project is an opportunity for people of all political ideologies to converge and discuss relevant constitutional issues. It’s a project Bowman admits would have been useful during her undergraduate years at Columbia, and I agree. I ask her what the key to creating this safe space is— “clergy,” Bowman replies. The project incorporates clergy of all faiths as, Bowman says, “I think as a general rule people will be polite to the clergy.” Participants of the project are placed into small groups made intentionally diverse and are encouraged to talking about the current political climate on their emotions instead of “trying to solve every issue in the world.”
    <br></br>
    “Maybe I've learned from my own mistakes as a student and became a better listener,” Bowman says.
    </div>
)

const info_Potter = (
    <div className={classes.infoText}>
    <b>Noah Potter unintentionally started a takeover of Low Library</b>
    <br></br>
    <i>by Candy Chan</i>
    <br></br>
    Noah Potter can draw a direct line from the “anti-authoritarian” attitude he held while an undergraduate at Columbia College to his current career as a litigator. As if anticipating my next question on the impact of his student activism, Potter cuts me off and admits that he sees the “irony” and narrative appeal of his backstory. Potter participated in the 1993 Hamilton Hall blockade to save the Audubon Ballroom, the site where Malcolm X was assassinated, and subsequently received prosecution from the University. This early exposure to the judicial system, while negatively impacting his remaining time at Columbia— he has not been back on campus since graduating—ultimately proved to be a “positive experience” that encouraged him to consider law as a profession.
    <br></br>
    The 1993 Hamilton Hall blockade was an effort by Barnard-Columbia Save the Audubon Coalition, of which Potter was a member. During the blockade, student activists shut down Hamilton Hall, disrupting all classes that day to demand attention from then Dean of Columbia College  Jack Greenberg. Seven students were charged with serious violations of the University Rules of Conduct; Potter ultimately received a censure. He was quoted in the Spectator at the time saying that his time spent with B-C STAC was “the greatest educational experience of [his] life.”
    <br></br>
    When I read Potter’s quote back to him during our phone call, he pauses and then brings me back to the beginning to 1993 when the the group was formed. He joined after he found the flyer on a bulletin board. He tells me that there are a few reasons his involvement with B-C STAC was so educational: the controversial nature of the protest and what he now calls “problematic tactics” employed by the protesters drew “great support and great hostility from different parts of the undergraduate population.” He learned about the challenges involved in obtaining public support and the ways in which activism can backfire. But perhaps more importantly, his time spent with the other student activists, those he considered his “best friends at the time,” immersing himself in a community of “passionate and committed” individuals. Potter says, “[the] apathy of people who were not focusing on social justice issues always frustrated me greatly.”
    <br></br>
    Though Columbia’s legacy of student activism was not the main reason Potter enrolled at Columbia—he says “it’s truly because it’s Columbia University in the City of New York”—the protests of 1968 nonetheless had an impact on him. Potter grew up under the “premise that any and all existing establishments were inherently corrupt.”
    <br></br>
    Potter’s time at Columbia began with a bang: during the spring of his first year, Potter began a takeover of Low Library at a protest against proposed cuts to financial aid. It was not an especially formal moment. He simply climbed onto the ledge on the second floor of Low Library, opened an unlocked window, and slid in. Potter is coy about his spontaneous action.
    <br></br>
    “I always liked climbing trees and there were these really convenient window grates.”
    <br></br>
    In the aftermath of Potter’s involvement in the Hamilton Hall blockade and his arrest, he sought out, in his own words,“the next thing that I could do in challenging the administration.” He looked for and attended other protests against the University, including one in front of Congressman Charles Rangel’s office in Harlem. It was a rally in support of research and development of ibogaine, a psychedelic that has potential to treat drug addictions. The protest in front of Rangel’s office was part of a larger rally against the Center on Addiction and Substance Abuse, a think tank affiliated with the university. Attending this protest cemented Potter’s fascination with drug policy reform and prompted him to consider law as a form of progressive activism.
    <br></br>
    Potter has always held a staunch belief that the legalization of psychedelics is an important social justice and human rights goal. His senior thesis, titled “How Treatment Got Lost: Law Enforcement and Prevention in US Drug Control,” is an exploration of the relationship between federal drug control and medicinal usage of drugs. Potter writes that prohibiting drug usage does less to remedy drug addiction than establishing “public health criteria for public policy.” Ten years later, Potter joined the New York City Bar Association’s Drugs and the Law Committee. In 2010 he became a manager of the annual New York City Cannabis Parade.
    <br></br>
    If Potter has any regrets surrounding his time as an undergraduate, it would revolve around his engagement with the materials taught in his classes. When I ask Potter about the books and texts that he views most memorable, Potter says that he was so “hostile” that he didn’t pay much attention to his Core classes. After a few seconds of reflection, Potter excitedly recalls his prized Mandarin and Japanese language textbooks.
    <br></br>
    Japanese because, he chuckles, “I thought I was going to keep doing karate.”
    </div>
)

const INFO_TEXT3 = [
    {label: "GradyWillis", text: info_GradyWillis, src: src_GradyWillis, name: name_GradyWillis},
    {label: "Bowman", text: info_Bowman, src: src_Bowman, name: name_Bowman},
    {label: "Potter", text: info_Potter, src: src_Potter, name: name_Potter}
]

const src_Glaser = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WOFB354KBJEX5A4EMOOZGTGIUY.png"
const src_Raferty = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/SZ2CIRQYUBCN7FUYDMUVYYYNUM.jpg"
const src_Kindig = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/O6U4Z3VVENAKTNEKH7T5ZWTTEI.jpg"

const name_Glaser = "Jennifer Glaser, 1996"
const name_Raferty = "Isolde Raferty, 2004"
const name_Kindig = "Jessie Kindig, 2004"

const info_Glaser = (
    <div className={classes.infoText}>
    <b>Jennifer Glaser Worked within the System</b>
    <br></br>
    <i>by Lyric Bowditch</i>
    <br></br>
    The minute Jennifer Glaser, Columbia College class of 1996, found out she was pregnant, she began ordering “feminist gear” for her baby. “I'm one of those obnoxious people who still dresses my daughter in ‘This is what a feminist looks like’ onesies,” she laughs. Glaser herself was raised by “a really strong feminist mom.”
    <br></br>
    Although she was involved in the American Civil Liberties Union in high school, Glaser didn’t arrive at Columbia planning to be a campus activist. Little did she know that volunteering at the Rape Crisis Center during her sophomore year would lead to her becoming one of the founders and co-heads of the Policy Reform Organization, a student group fighting for the University to reform its sexual misconduct policy.
    <br></br>
    “I think all of us weren't sure what was going to happen with this,” Glaser says. “We kind of just fell into it because it was such an obvious problem and we were committed to making the climate for women at Columbia better.”
    <br></br>
    PRO’s mission was twofold. On one hand, the group was comprised of activists trying to spread awareness throughout campus about the opacity of the University’s handling of sexual misconduct. On the other hand, members were working within the existing structures and systems of the University, alongside the administration, to get student voices into the revision of Columbia’s sexual misconduct policy. “We were part of the institution at the University and so that does shadow your activism a little bit,” Glaser explains.
    <br></br>
    According to Glaser, No Red Tape splintered off from PRO for this reason—some students wanted to organize marches and petitions and be involved in activism that reached beyond the gates of Columbia.
    <br></br>
    “It was working together that really pushed the administration to listen to us. I don't think they would have listened to either group alone,” she reflects. “And so that, I think, was a really interesting lesson in terms of how activism works.”
    <br></br>
    Glaser also mentions a group called the Columbia Men Against Violence, and though she laughs when telling me how they’d sometimes step on the toes of the women activists, she emphasizes that they were very supportive, interested, and helpful.
    <br></br>
    Being a leader in PRO consumed much of Glaser’s time and ultimately came to define her college experience. One of the most triumphant moments of her tenure was marching with all of the members and supporters of PRO and No Red Tape to give speeches to the University Senate during her senior year. She describes it as one of the few times she felt the administrators were really listening to them; they could see how meticulously students had thought out and developed policy revisions and how much support they had on campus.
    <br></br>
    But Columbia didn’t end up changing its sexual misconduct policy during Glaser’s tenure, and in fact, not much has changed even today: “The conversation is still quite similar to the one we were having in the mid-to-late '90s.”
    <br></br>
    These days, Glaser is watching this conversation unfold on a different campus from her position as associate professor and director of the graduate program in English—or in her words, a “mini-administrator”—at the University of Cincinnati. While she is admittedly not very involved with sexual misconduct policy reform at UC, she now does a lot of fundraising and activist work with Planned Parenthood.
    <br></br>
    It was at Columbia that Glaser first found a community of women activists. “I think I’ve sought that out everywhere that I’ve been since then,” she reflects. But unlike at Columbia, her new activist work has introduced her to a group of women of all ages—from college student activists like she and her fellow members of PRO once were, to women their seventies who are still active in the fight to secure the rights they fought for half a century ago.
    </div>
)

const info_Raferty = (
    <div className={classes.infoText}>
    <b>Isolde Raftery and Journalism as Activism</b>
    <br></br>
    <i>by Alex Gluckman</i>
    <br></br>
    In November 2003, Isolde Raftery wrote an article for Spectator titled, “Can a Man Attend Barnard College?” In it, Raftery examined how trans activism was emerging on campus and Barnard’s admissions policy which, at the time, was accepting students based on the “legal” definition of women.
    <br></br>
    Raftery, who graduated from Barnard in 2004 and was the managing editor of the Columbia Daily Spectator in 2002, never defined herself as an activist during her time on campus. However, by focusing the bulk of her Spectator articles on activism and social justice, her work ended up giving a voice to student activists in need of a platform.
    <br></br>
    In her article, Raftery writes how, although Barnard’s policy reflected legal definitions, the administration operated on an apparent “honor system” that could have allowed for already-transitioned trans women to enroll. But Raftery remembers how while she was on campus, conversations about trans rights were essentially nonexistent.
    <br></br>
    “Nobody knows the right language to use,” Raftery explains. The concept that people who were transitioning were living and learning on campus was “brand new” for students, faculty, and administrators.
    <br></br>
    Raftery’s article cites how Barnard’s president at the time, Judith Shapiro, “sent out a school-wide e-mail last week announcing a public meeting devoted to transgender topics.” That semester, a trans awareness month was in the early stages of planning, and students started cultivating trans support groups on campus.
    <br></br>
    The word “transgender” was used in Spectator articles prior to Raftery’s piece, for example in February 1995. But Raftery’s article was one of the first to directly question college admissions practices and propose—provocatively, at the time—that Barnard should change its policy to allow students admission based on their self-defined gender identities, not their legal ones.
    <br></br>
    For her article, Raftery spoke with Barnard trans-identifying students, including Ben Ley, BC ’03, and allies in the community like Karyn Lukoff, BC ’06 and former president of Barnard’s queer community club “Club Q.” Her sources overwhelmingly explained how “dormant” and “nonexistent” the trans community was at Barnard. Reflecting on her experience reporting for the article, Raftery recalls, “I was one of the first people they were talking to about it.”
    <br></br>
    Because Raftery was one of the first Spectator writers to explore trans activism, there was no pre-existing framework to guide her articles or approach. “We were sort of moving through this language soup about something that nobody was really talking about.”
    <br></br>
    For Raftery, this article was a powerful journalistic experience, because it was an opportunity to report on an issue that, at the time, was little explored. “It is more interesting to pursue stories that haven’t been plucked, so there’s no formula for them.”
    <br></br>
    Her childhood love for journalism extended through and beyond college. Now, 14 years after graduation, she is the online editor at KUOW, a national public radio station in Seattle, her hometown.
    <br></br>
    Raftery’s writing still focuses on social justice. After Black Lives Matter events were held in Seattle schools, Raftery wrote an article titled “To understand white liberal racism, read these private emails,” which investigates hidden perspectives of the Black Lives Matter movement among parents in a wealthy Seattle neighborhood.
    <br></br>
    While Raftery sees activism and journalism as distinct practices, she identifies an important parallel: Both successful activism and successful writing require passion. Raftery implores, “[when] you find a story of injustice, it is important to showcase it, right?”
    </div>
)

const info_Kindig = (
    <div className={classes.infoText}>
    <b>Jessie Kindig and Post-9/11 Anti-War Activism</b>
    <br></br>
    <i>by Alex Gluckman</i>
    <br></br>
    9/11 was one of Jessie Kindig’s first experiences of New York City.
    <br></br>
    The Seattleite had just transferred to Barnard from Northwestern University. Three days after the attacks on the World Trade Center, Kindig was quoted in a New York Times article. In it, she offered context the overwhelming shock 9/11 engendered amongst Barnard and Columbia students. She explained, “We grew up with nothing bad ever happening to us. …  Not the Bay of Pigs, not the Cold War, not the threat of nuclear terror.” The article cites how Kindig, desperate to help, went from hospital to hospital to donate blood.
    <br></br>
    Today, reflecting on the reactions to 9/11 Kindig remembers gaining traction among many Americans, she remembers being confused. Kindig explains that there was an “immediate rush to ‘we should bomb Afghanistan’” and a “rash of anti-Muslim hate crimes.” Kindig recalls how, all around her, American flags emerged. “You couldn't walk around without seeing them,” she explains. “It started to feel less like solidarity and more menacing to me.”
    <br></br>
    As an organizing effort after 9/11, Columbia community members gathered on the lawns outside of Butler. Kindig recalls hundreds of students, teachers, administrators,and staff coming together in solidarity.
    <br></br>
    At the time, an important part of organizing for Kindig and her peers was working through political confusion. For them, activism, and the critical questioning that comes with it, was a way to work through that confusion. Kindig remembers how they all asked themselves, “How do we work towards something that ... doesn't resort to bombing an entire country?”
    <br></br>
    For Kindig, becoming a part of anti-war activism after 9/11 marked the beginning of her “political education.” Surrounded by conflict and troubled by America’s rush to war, Kinding joined the Barnard and Columbia student anti-war group, People for Peace, and pursued historical research.
    <br></br>
    “I was already very interested in the history of U.S. social movements,” she explains. But following 9/11, even more reading and research on the history of U.S. interventions abroad including on the Gulf War and the anti-war movement during the Vietnam era helped Kindig and her anti-war peers develop a firm non-interventionist stance toward the United States’ invasion of Afghanistan and, later, Iraq.
    <br></br>
    Over time, anti-war student groups at Columbia linked up with similar New York City groups at New York University and The New School and then with groups across the Northeast. Between 2001 and 2003, these links between student activist groups grew across the United States. Their organizing formed the skeleton for the Campus Antiwar Network, a national student conglomerate officially founded in 2003 to oppose the United States’ invasion of Iraq.
    <br></br>
    Kindig remembers Columbia’s chapter of the Campus Antiwar Network holding a national conference on campus. Students came together from across the country to meet, organize, determine strategies, plan conferences, and mobilize more anti-war activism.
    <br></br>
    Of all the anti-war activism Kindig participated in as a student, the global anti-war protests of February 15, 2003, stick out the most. Kindig helped organize a student portion of the march in New York City.
    <br></br>
    “There were just people for miles and miles and miles,” Kindig visualizes. She recalls an overwhelming number of people, marching together down Fifth Avenue toward the bottom of Central Park. “I don’t think the police were really pushing back, but there was this moment when you just saw them step back and realized that there was kind of nothing that they could do.”
    <br></br>
    She also remembers a New York City-wide “teach-in” she organized with the Campus Antiwar Network at Chelsea Piers about the Iraq War with high profile speakers and, to her memory, over a thousand attendees.
    <br></br>
    Kindig went on to earn a masters degree in American history, with a research focus on social protest, concentrating on the United States empire’s production in the 20th century. While teaching history at Indiana University, Kindig designed her classes to encourage students to engage with narratives of the past, and emphasized how studying history is a form of social responsibility in how it informs our understanding of present conflict. Now, Kindig is an editor at Verso Books, a independent progressive publishing house.
    <br></br>
    Reflecting on her post-graduation academic and editing experiences, Kindig explains how her historical research is centered around questions that she first asked herself at Barnard, during her initial anti-war activism around Afghanistan and Iraq.
    <br></br>
    “My dissertation was on the Korean War,” Kindig explains. “It asked how the violence perpetrated abroad by the United States military is seen and understood at home, and that's very much a question I had at 20 or 19.”
    <br></br>
    Both as a student and as a post-grad, Kindig views activism and the study of history as symbiotic. Kindig explains that, after 9/11, “History, for me it was part of my process of figuring out what was going on … so I could know what I wanted to think about bombing Afghanistan.”
    <br></br>
    This symbiosis threads through Kindig’s career—her student activism at Barnard and Columbia inspired her specific interests in History. “Certainly my activism lead me into thinking about…  what is the power of social movements? How are different imperial formations constructed?”
    <br></br>
    Lovingly, Kindig adds, “I could talk about history forever.”
    </div>
)

const INFO_TEXT4 = [
    {label: "Glaser", text: info_Glaser, src: src_Glaser, name: name_Glaser},
    {label: "Raferty", text: info_Raferty, src: src_Raferty, name: name_Raferty},
    {label: "Kindig", text: info_Kindig, src: src_Kindig, name: name_Kindig}
]

const src_Johns = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/UEJRN44HQNBIDGACO6477FY44Y.jpg"
const src_Garcia = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/A7F7QOLTDBD3HMXKLMJYSHKR24.jpg"
const src_Mercer = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WQJKUYHMTVEABPMSPF3QF3C2E4.jpg"

const name_Johns = "David Johns, 2007"
const name_Garcia = "Karina Garcia, 2007"
const name_Mercer = "Bryan Mercer, 2007"

const info_Johns = (
    <div className={classes.infoText}>
    <b>David Johns Finally Embraces His Educational Calling</b>
    <br></br>
    <i>by Jordan Allyn</i>
    <br></br>
    Two pins cling to the lapel of David Johns, a member of the Columbia College class of 2004. What looks like a Shrinky Dink of the Civil Rights activist Stokely Carmichael is pinned on his left lapel and a black power fist rising over the word “Free” is situated on his right.
    <br></br>
    “I’m almost always wearing something that is designed to disrupt our habits,” Johns tells me in the Teachers College café. Immediately following graduation in 2004, Johns received a master’s degree in sociology and education from Teachers College. He’s now returned as a doctoral candidate for another degree from Teachers College. Johns seizes every opportunity to engage in education, including when he decides what to wear each morning.
    <br></br>
    “Anybody who knows me knows that I am an educator. I resisted for as long as I could what I acknowledge as a calling on my life to be a teacher.”
    <br></br>
    In his junior year, Johns went on a domestic exchange to Howard University. During his first week of classes the Gratz v. Bollinger case emerged as a national issue. From April 1, 2003 to June 23, 2003 the Supreme Court debated over the fairness of Jennifer Gratz’s 1995 rejection from University of Michigan when Lee Bollinger was president. During an African-American studies class, his professor presented a copy of the New York Times with the story about the case above the fold. The story launched discussions about affirmative action as a policy and the ramifications for both historically black and predominantly white institutions.
    <br></br>
    As a student journalist at Howard, Johns had the opportunity to sit in on trial meetings in the Supreme Court about the decision. Over the next several weeks, he listened to Clarence Thomas question the purpose of affirmative action and Ruth Bader Ginsburg acknowledge the fact that affirmative action has disproportionately benefited white women.
    <br></br>
    One day, as Johns was walking out of the courtroom, reporter SuChin Pak from MTV News asked him what it meant for him to go from a place that was as diverse as Columbia to a place like Howard.
    <br></br>
    “I was offended, one, because there’s more diversity at Howard than there is at Columbia, quite frankly. There was this assumption that black people are from the same monolithic place.”
    <br></br>
    When he returned to Columbia for his senior year, Johns experienced a series of incidents of racial bigotry. In his dorm in Broadway Hall, Johns received a flier for Orgo Night that showed Michael Jackson as a black boy turned into a white woman. “Who needs ethnic studies anyway?” the text read. Soon after was the anti-affirmative action bake sale hosted by the Columbia College Conservative Club. The price sheet for the bake sale stated that people of color could purchase baked goods for less money than white students. It was an attempt to suggest that minorities and people of color were receiving unfair advantages through affirmative action.
    <br></br>
    On February 21, 2004, the day before Johns planned to speak out about the marginalization of minority voices on campus, The Federalist—a satirical newspaper on campus—published a “Blacky Fun Whitey” cartoon. “I would never forget it because it was not only the anniversary of the assassination of Malcolm X. It’s also my birthday.”
    <br></br>
    The convergence of those incidents and the fact that he had spent three years working with the Columbia admissions office to recruit minority students who were now first-years asking him what he had gotten them into compelled him to start what became the Columbia University Concerned Students of Color.
    <br></br>
    Two days later, CUCSC held a week-long silent protest on Low Steps demanding that the University fundamentally change its attitude toward students and faculty of color. They spent a lot of time researching the history of protest at Columbia, thinking about the power of a silent protest, and debating how inclusive it should be.
    <br></br>
    Although CUCSC was well aware of the 1968 legacy, Johns did not at the time see himself in the context of that legacy and still finds it difficult to imagine himself within the same framework. He felt an obligation at the time to respond to Columbia and show up as an example for other students. The most tangible result of the protest was the creation of the Office of Multicultural Affairs, which serves as an identity-based resource for students.
    <br></br>
    “The point that I attempted to make as a student was we have an opportunity to do better, and we should want to do better. And it still does not make sense to me that with the privilege of being at a space like Columbia, with the legacy and its history as an activist-oriented space … why we would not collectively want to do more.”
    <br></br>
    Johns did not stop advocating for social justice after receiving his diploma. “While Columbia teaches most of us to take over corporations and countries, there is a need for and a benefit to those of us who are thoughtful and privileged enough to have space to think through issues concerning civil rights, human rights, and social justice.”
    <br></br>
    In 2013, then-U.S. President Barack Obama appointed Johns as the executive director of the White House Initiative on Educational Excellence for African Americans. “I was appointed by the first black president to lead a black initiative to support black kids, and to say that it was a dream job would be a gross understatement.” Although he does not know what awaits him after grad school, Johns has a calling to live up to.
    </div>
)

const info_Garcia = (
    <div className={classes.infoText}>
    <b>Karina Garcia Kicks Ass and Knocks Down Walls</b>
    <br></br>
    <i>by Jordan Allyn</i>
    <br></br>
    Images of activism cover every surface of the National Latina Institute for Reproductive Health located near Wall Street. In the waiting room, I gaze up at pictures of rallies, marches, and protests on the vibrant blue wall. Karina Garcia, Columbia College class of 2007 and the associate director of education at the institute, greets me and takes me to a room with an even more mesmerizing tableau: an intricate and massive mural of Latinx icons that serves as the backdrop for our conversation.
    <br></br>
    Despite these impressive walls, Garcia’s work—today and during her time on campus—centers around breaking down barriers and divisions.
    <br></br>
    In preparation for our interview, Garcia projected a Huffington Post article on a screen behind her chair headlined “Brisenia Flores Was a Victim of Border Vigilantes and Media Indifference.”
    <br></br>
    “I’m looking at the picture of Brisenia Flores who was killed. A nine-year-old girl who was killed by these minutemen. They went into her house, they killed her, her father,” Garcia explains.
    <br></br>
    In 2004, Jim Gilchrist founded the Minuteman Project, an armed militia designed to monitor the United States-Mexico border. On Oct. 4, 2006, Columbia University College Republicans brought Gilchrist to speak on campus.
    <br></br>
    As tears emerge, Garcia changes the picture to one of Gilchrist and a member of the Minuteman Project. “They shot her point blank. This nine-year-old girl. These are the people [affiliated with the group] the Republicans brought to campus.” CUCR’s invitation to Gilchrist galvanized Garcia to take action.
    <br></br>
    While at Columbia, Garcia joined Chicanx Caucus, Students for Environmental and Economic Justice, and the American Civil Liberties Union. SEEJ focuses on creating and leading campaigns such as the current campaign to create a code of labor and environmental standards for the University. Chicanx Caucus centers around education about Chicanx and Mexican issues and culture. In order to combine the cultural components of Chicanx Caucus and the political elements of SEEJ, Garcia formed a group called Lucha that works in solidarity with Latinx communities within and around Columbia. Although she participated in many protests in college, Garcia’s biggest claim to fame is organizing the Minuteman stage rush. Garcia and some other members of the Chicanx Caucus interrupted Gilchrist’s speech and unfurled a banner that read, “No Human Being is Illegal.”
    <br></br>
    A week after the protest, Garcia went on Democracy Now! to debate Gilchrist. Although twelve years have passed, Garcia’s current passion and intensity matches that of her 20-year-old self. After debating the politics of freedom of speech and the actual facts of the protest, Gilchrist suddenly announces that his legal team wants him to leave the conversation. The facilitator looks stunned, but Garcia immediately responds with unfazed confidence by calling him a coward. Although he seems tough when he has a shotgun, “when it comes to being challenged by peaceful protesters and by people who understand this man and this organization for what they are, he runs away and I think that was evident right now” she states during the interview.
    <br></br>
    For rushing the stage, Garcia received a censure from Columbia’s disciplinary committee. She didn’t let the censure deter her from her activism, however. Instead, she left school for a semester and went on a speaking tour to colleges throughout California.
    <br></br>
    Following graduation, Garcia became a math teacher at a predominantly Latinx public school in New York. Her activism work at Columbia shaped the way she saw education, and she integrated social justice into her class curricula however she could. Once, for instance, she showed her class one chart with the amount of money the United States was spending every hour, minute, and second on the war in Iraq at the time, alongside another chart with the amount of money it would take to provide water and sanitation to everyone in the world. The Iraq War was costing so much more than those necessities; her class couldn’t believe it. “How could we be throwing away these resources to kill people in other countries?” she asks out loud.
    <br></br>
    As the current associate director of education, Garcia creates curricula for local activists in regards to leadership and organization. “The resources exist for every person to actually have their human rights fulfilled it’s just a matter of time and organization.” With a smile as grand as the mural behind her she concludes, “I know we're gonna win. I know it's gonna change. It can't be like this forever.”
    </div>
)

const info_Mercer = (
    <div className={classes.infoText}>
    <b>Bryan Mercer Never Stopped Organizing</b>
    <br></br>
    <i>by Jordan Allyn</i>
    <br></br>
    Bryan Mercer, who graduated from Columbia College in 2007, has a Facebook cover photo of a mural in Philadelphia called “Wall of Respect.” Warm orange and red hues highlight renowned African-American figures such as Malcolm X, Michelle Obama, and Kevin Hart. A silhouette of a person holds a sign that reads “Black Lives Matter.” Another says “I can’t breathe.”
    <br></br>
    As the executive director at Media Mobilizing Project, Mercer uses media and video production to tell the stories of how communities in Philadelphia organize. In 2016, he also founded an organization called 215 People’s Alliance, which led a campaign to end the state takeover of Philadelphia public schools and one to make ending mass incarceration a goal of the Philadelphia district attorney. Mercer’s passion for organizing and community-rooted mass movements launched in his 20s.
    <br></br>
    Although Mercer participated in protests against the Iraq and Afghanistan wars before going to Columbia, he learned the fundamentals of organizing while in college. At the end of his first year, Mercer joined the League of Pissed Off Voters, which was formed to address the 2000 presidential election, calling more young people to play a greater role in elections going into the campaign cycle of 2004.
    <br></br>
    In the first semester of his sophomore year, Mercer decided to take some time off from school to work with the League of Pissed Off Voters in Florida, where the election was very close. He learned a lot about community organizing, the importance of having a plan, and listening to the desires of the community.
    <br></br>
    When he came back to school, Mercer gave up his guaranteed housing and became more aware of Columbia’s impact on the community surrounding it. Columbia had recently announced its plans to expand farther into Harlem. “I got very concerned about what was happening in the broader community of Harlem and wanted to be a part of the community effort to make sure that Harlem residents had their rights protected.”
    <br></br>
    It was, after all, Columbia’s proximity to Harlem that drew Mercer to Columbia in the first place, and when he came back to campus after his hiatus, he decided to join the Student Coalition on Expansion and Gentrification. Although he saw the Manhattanville expansion as inevitable, he was determined to make Columbia play by the rules of the Manhattan community board 10. Columbia, however, had other plans.
    <br></br>
    Thus, Mercer and six other students partook in a hunger strike. One of the demands of the hunger strike was for Columbia to respect the community board’s plan that allowed for Columbia expansion and protection of Harlem residents.
    <br></br>
    That demand was not met. This struggle taught Mercer a lot about activism. He spent a summer working on a research project with the Center for the Study of Ethnicity and Race looking through the history of movements on campus. “And I think that something that that longer history also taught me is that demands are never fully met,” Mercer said. This fact did not hinder his fight for justice. While investigating in the archives, Mercer studied the history of the 1968 protests against the construction of a gym in Morningside Park. Unlike the 2007 hunger strike, the 1968 protests prevented the displacement of Harlem residents.
    <br></br>
    Mercer hypothesizes that the 1968 protests gained a lot of momentum due to the broader international social movement at the time. “I think that that demand was not met taught me a lot about the fight for justice and equity for all communities and particularly for black and brown communities that have had the legacy of colonialism to contend with, and so it's a long term fight.” By directing the Media Mobilizing Projecting, Mercer continues this fight and uses the lessons that he learned to help him teach others in his hometown about the power of organizing.
    </div>
)

const INFO_TEXT5 = [
    {label: "Johns", text: info_Johns, src: src_Johns, name: name_Johns},
    {label: "Garcia", text: info_Garcia, src: src_Garcia, name: name_Garcia},
    {label: "Mercer", text: info_Mercer, src: src_Mercer, name: name_Mercer}
]

const src_Ruiz = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZMYA6RMC2FA5TFN46JV6BQY7LE.jpg"
const src_Ocana = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/HFVVVSZWJZDDLBX5XGCFBMBFWY.jpeg"
const src_Edelman = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/EZ2XCJL3RRF2XEGESMP7NE3FIM.jpg"

const name_Ruiz = "Victoria Ruiz, 2009"
const name_Ocana = "Johanna Ocana, 2010"
const name_Edelman = "Avi Edelman, 2011"

const info_Ruiz = (
    <div className={classes.infoText}>
    <b>Victoria Ruiz Used To Be Fearless</b>
    <br></br>
    <i>by Jordan Allyn</i>
    <br></br>
    Before she joined the 2007 Hunger Strike, Victoria Ruiz, of the Columbia College class of 2009, did not know all of the details of the demands. The strike consisted of students refusing to eat in protest against the Manhattanville expansion, for increased support for the Center for the Study of Ethnicity and Race, and for greater administrative support for “bias incidents.” Still, she enthusiastically joined them because the leaders of the strike taught Ruiz how to survive at Columbia as a first-generation student of color.
    <br></br>
    “Nowadays it feels like in activism I always feel compelled to tell everyone every nitty little detail before I ask them to even come to something.” But when she was a student, she says, she didn’t need to know every detail so long as she wholeheartedly trusted the leaders and believed in the larger mission of the movement.
    <br></br>
    The hunger strike itself was not an easy protest for Ruiz, even beyond the student backlash and logistical issues the strikers had to deal with. While Ruiz was committed to giving her full self to the strike, her family was not as comfortable with her decision.
    <br></br>
    Their discomfort stemmed, she tells me, from the fact that her grandmother had been a farm worker and experienced hunger for a lot of her life. Her grandmother’s reaction went something along the lines of “‘How dare you do this when I worked so hard for you to never go hungry?’” Ruiz tells me.
    <br></br>
    The strike was partially successful: It led to a more diverse Core Curriculum. But it did not curtail the University’s expansion into Manhattanville. Ruiz sighs, “I will always be upset that the expansion happened. I don't think that I will ever be okay with that.”
    <br></br>
    Given that they were protesting against Columbia’s expansion into Harlem, Ruiz remembers a lot of comparisons between the hunger strike and the 1968 protests against the creation of the gym in Morningside Park. The major difference: Columbia never built the gym. Ruiz thinks that the fact that people connected the 1968 protests to a much larger global resistance movement benefited the activists at the time. But she also believes that Columbia “learned from the gym and has also learned new ways to sell their own corporate interests.”
    <br></br>
    For Ruiz, Columbia’s connection to and legacy of historic student protests can be chalked up to the administration. “Columbia is only known for this because they as an institution have messed up and been the perpetrator of violence in their own community time and time again. And so students out of necessity and out of desire to change the institution are activists there.”
    <br></br>
    In addition to working for immigrants’ rights and fighting for the full employment mandate, which required the Federal government to provide maximum employment, Ruiz is currently a lead vocalist in a band called Downtown Boys. Although the group is a protest-punk band, Ruiz struggles with how to combat the confines of capitalism through music. Sometimes all of the knowledge that she’s gained from her activism overwhelms her.
    <br></br>
    “Now that I've spent ten years organizing stuff and trying to go this way and trying to go that way and getting some W's but getting a lot of L's,” she laughs. “I think I have a realist perspective I’m a little bit more sobered to the endless hope that I felt at Columbia.”
    </div>
)

const info_Ocana = (
    <div className={classes.infoText}>
    <b>Johanna Ocana Does Not Let Fear Stop Her</b>
    <br></br>
    <i>by Jordan Allyn</i>
    <br></br>
    Instead of “Best,” or “Warm Regards,” or “Sincerely,” Johanna Ocaña, Columbia College class of 2010, signs off her emails with a quote: “‘When I dare to be powerful––to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.’ - Audre Lorde.”
    <br></br>
    Ocaña was first exposed to Lorde’s writing in a gender studies class at Barnard. With regards to the quote, Ocaña acknowledges that it can be scary to stand up for what is right and that “It's OK to be scared but action is needed and demanded in our society.”
    <br></br>
    While at Columbia, Ocaña made sure to take a stand even when the prospect of that was terrifying. In the first semester of her first year of college, she found out that the Columbia University College Republicans were hosting Jim Gilchrist, the co-founder of the Minuteman Project, a vigilante border patrol group.
    <br></br>
    As an immigrant, she found the the fact that Gilchrist was speaking on campus to be incredibly upsetting and hurtful. She felt she had no choice but to reclaim her power.
    <br></br>
    The Chicanx Caucus meticulously planned out a strategy for operation. They intended to go up on stage during the speech and unfurl a banner with the phrase “No Human Is Illegal.” The banner was successfully revealed on stage—but from there, everything turned into “kind of a shit show,” she recalls. Minutemen supporters joined them on stage and physically assaulted the students.
    <br></br>
    Although she faced violence and the possibility of harsh disciplinary actions—including expulsion—Ocaña remained resolute. While she felt some sadness and isolation because the University entertained a hate group, she describes feeling “some hope that I also was amongst people who were willing to take such a stand.”
    <br></br>
    In addition to fighting for immigrant rights, Ocaña’s activist work in college also included tenant organizing work in East Harlem.
    <br></br>
    Today, Ocaña works as an attorney representing people who face eviction in the Bronx. One of the tattoos on her arm reads “Rent is theft.” She got the tattoo with a group of her tenant attorney friends. It serves as a reminder for her to think within the larger framework of systematic inequalities in the New York housing structure, rather than focusing on individual struggles alone.
    <br></br>
    Pointing to the tattoo, she says, “I firmly believe that by nature of being a human that is alive and on this earth that there is a baseline level of rights and dignity and access that people should just have.”
    <br></br>
    Ultimately, she doesn't think that people should be judged for how hard they work. Instead, she believes that people should be able to eat and live in a home rather than fight for their life. “A society that doesn’t provide that for people is fucked up,” she says. And then takes a moment to breathe.
    <br></br>
    “So that's what that's about,” she continues, still talking about her tattoos, “and then I just have a bunch of flowers.”
    </div>
)

const info_Edelman = (
    <div className={classes.infoText}>
    <b>Avi Edelman: activist and administrator</b>
    <br></br>
    <i>by Megan Evershed</i>
    <br></br>
    Certain activists spend their time locked in confrontation with the Columbia administration. Other student activists end up working closely with the administration in order to implement change. There is also a small subsection of student activists who, once their time at Columbia is finished, join the administration.
    <br></br>
    Avi Edelman’s office is tucked into the Office of Multicultural Affairs in Lerner Hall. When I arrive for our interview, his door is already open. He welcomes me to sit in a chair which is positioned beside his desk rather than on the other side of it.
    <br></br>
    During his undergraduate years, Edelman, who graduated from Columbia College in 2011, was a student activist involved in Everyone Allied Against Homophobia and the Columbia University Democrats. This past year, he decided to join the University administration as the assistant director of Multicultural Affairs.
    <br></br>
    Edelman had a close working relationship with the administration while a student at Columbia. He was a part of the effort to bring gender-neutral housing to campus, now known as Open Housing. Open Housing lets anybody, independent of sex, live together. Previously, students rooming together had to be of the same sex. “We wanted every student to feel like they had safe and comfortable living options on campus,” Edelman said. “And that wasn't happening before.”
    <br></br>
    Contrary to the notion that University administrators are a uniform collective with a prescribed approach to student activism, Edelman says that his relationship with the University administration was predicated upon relationships with individual people. Certain administrators were passionate about aiding Edelman and his fellow student activists in their efforts to implement gender-neutral housing; others were “a little more skeptical, or just a little less willing to make time.”
    <br></br>
    Edelman was a film major while at Columbia. He still works on film projects, separate from his administrative work at the University. After graduating, however, Edelman was the program director of a dialogue program called “Operation Understanding DC” that brought black and Jewish youth together in the Washington, D.C. metropolitan area to explore their heritage and to learn about social movements. On the program’s Facebook page, there’s a photo of Edelman, his eyes purposefully avoiding the camera, gripping a placard that looks like a mugshot letterboard. “Operation Understanding DC,” the board reads. “A shock to complacency.”
    <br></br>
    As part of the program, various speakers were invited to speak to participants, including activists from the Columbia protests in 1968, veterans of the civil rights movement, and leaders of social movements today.
    <br></br>
    “I feel I’m at my best when I’m able to empower and encourage people to find their voice, especially young people,” Edelman said. He has transferred this belief from “Operation Understanding DC” back to Columbia’s campus. One of the things that Edelman appreciates the most about working in the Office of Multicultural Affairs is that it was born out of activism. Student protests in the early 2000s led to its creation, and then further protests after that led to the creation of a position in the office for an LGBTQ-specific advisor. “We really feel like our mission is is driven by the demands of students,” Edelman said.
    <br></br>
    Edelman sees the office as a space where students and administrators can work together to create a better community. Throughout the interview, I can hear the voices of administrators and students outside of Edelman’s open door. The office feels like a rare space on campus where students and University administrators interact comfortably and casually.
    <br></br>
    “We try to create a space where it doesn’t have to feel that the people who work here are on the one side and people who go here are on another.”
    </div>
)

const INFO_TEXT6 = [
    {label: "Ruiz", text: info_Ruiz, src: src_Ruiz, name: name_Ruiz},
    {label: "Ocana", text: info_Ocana, src: src_Ocana, name: name_Ocana},
    {label: "Edelman", text: info_Edelman, src: src_Edelman, name: name_Edelman}
]

const src_Herold = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/RWDBMCUS5BG5BGOTBSA6IP3VHU.jpg"
const src_Gao = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/X2WDUZ34UJBTVPKCM7YHGUG6GU.jpg"
const src_Gaul = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/BHUU3Y5IYVD6VJYXA2IZWGSPBM.jpg"

const name_Herold = "Lauren Herold, 2012"
const name_Gao = "Cindy Gao, 2012"
const name_Gaul = "Maya Gaul, 2013"

const info_Herold = (
    <div className={classes.infoText}>
    <b>Lauren Herold worked with and without the administration to create change</b>
    <br></br>
    <i>by Megan Evershed</i>
    <br></br>
    There was a very sudden burst of new feminist student groups at Columbia in fall 2011: FemSex, Radical C.U.N.T.S., Feminist Mystique, and the Columbia Women’s Organization.
    <br></br>
    The burst was sparked by that summer’s SlutWalk movement through the world, which itself was sparked by an incident in Toronto, when a police officer came under fire for claiming women should “avoid dressing like sluts" in order to curb sexual assault.
    <br></br>
    Lauren Herold, Columbia College class of 2012, credits the energy of SlutWalk, which was a series of anti-sexual violence marches, with inspiring feminists to organize around issues of sexual violence.
    <br></br>
    While at Columbia, Herold served as co-coordinator of Take Back the Night starting in her sophomore year and remained heavily involved in anti-sexual violence activism throughout her undergraduate career. The work inspired her to become a peer educator at the rape crisis center.
    <br></br>
    Herold was also one of the founding members of FemSex—now AllSex—when the group first came to Columbia in 2011. FemSex was a student-led sexual health workshop series where the student leaders designed the curriculum. She explains that the group “didn’t want to get University recognition.” Rather, they “wanted to be sort of off the grid.”
    <br></br>
    Despite FemSex’s anti-institutional ethos, Herold had a collaborative experience with the administration when she was a student activist at Columbia. As co-coordinator of Take Back the Night, she worked closely with different administrators and funding groups to orchestrate events. She was also part of the Presidential Advisory Committee on Sexual Assault while at Columbia. “I was one student in the room with all of these administrators talking about sexual violence issues on campus,” Herold says.
    <br></br>
    For her, this was an important facet of activism, and the way in which she was able to initiate change. However, Herold believes that close cooperation is not the only way to initiate change. “A lot of times [administrators] are on the side of students, or at least they want to make students’ lives better,” Herold says. “But I also think that you need even more confrontational activism to actually make change happen. You can’t just have a meeting and take a deans word that they are going to do what they say.”
    <br></br>
    While Herold’s own experience with activism was based on cooperation with administrators, she believes that successful activism can come in different guises, and she’s currently balancing a theoretical and academic approach to activism with her practical, lived experience of it.
    <br></br>
    After graduating, Herold felt burned out from four years of working passionately as an anti-sexual violence activist, so she shifted to LGBTQ activism after leaving Columbia. She’d served as co-president of the Gay-Straight Alliance at her high school before leaving for college, so returning to LGBTQ issues was a natural choice. During Herold’s time at Take Back the Night, the group also collaborated with LGBTQ student groups.
    <br></br>
    For a few years after leaving Columbia, Herold worked at the Lesbian, Gay, Bisexual & Transgender Community Center in New York before transitioning to GLAAD, a media advocacy organization. She is currently working toward a doctorate in media studies, with a focus on television history, film history, and LGBT media activism at Northwestern University. At Northwestern, Herold is also involved in the Queer Pride Graduate Student Association, and she volunteers at the Women’s Center on campus.
    <br></br>
    Reflecting on her favorite moments as a student activist, there is one specific memory that sticks out in Herold’s mind: a night she spent with other members of FemSex in 1020. She remembers the night as “really feminist and queer and fun.” While hanging out at the bar, she felt that the group had “created something special, a new community on Columbia’s campus that was meaningful to people who were there.”
    </div>
)

const info_Gao = (
    <div className={classes.infoText}>
    <b>Cindy Gao speaks up about speaking out</b>
    <br></br>
    <i>by Megan Evershed</i>
    <br></br>
    During her first year at Columbia, Cindy Gao took a course called Introduction to Asian American Studies with Professor Gary Okihiro, a class that crystallized her decision to major in ethnic studies and helped ignite her activist streak. Growing up in St. Louis, Missouri, which she characterizes as a “deeply racist city,” she tells me that the term “Asian American” wasn’t available to her. Taking Okihiro’s class at Columbia introduced Gao to the field of ethnic studies, directed her to anti-racism activism, and led to her involvement in the Asian American Alliance.
    <br></br>
    In Gao’s sophomore year, she became the political chair for the Asian American Alliance, a position she held for three years. The Asian American Alliance seeks to facilitate dialogue about and create awareness of Asian-American issues. While at Columbia, Gao saw the AAA as a political, rather than cultural, club. “[Asian-American] doesn't describe certain cultural practices. It's a political terminology,” Gao tells me.
    <br></br>
    One of Gao’s major roles in the group was representing the Asian-American perspective on various issues. For instance, when Columbia was considering bringing the Reserve Officers’ Training Corps back in 2011, she attended a panel session and gave the Asian-American perspective on its return. “Where have all the American wars been in the 20th century? That’s why [ROTC] is an Asian-American issue.”
    <br></br>
    Although Gao says that she doesn’t necessarily think she did a great job as a community builder within the AAA, she did build connections with other activist groups. She lived in the Intercultural Resource Center and formed friendships with activists in the Black Students’ Organization and LUCHA, a social justice organization on campus.
    <br></br>
    When reflecting on her undergraduate years, Gao recalls that her first three years saw a relatively calm activist scene in comparison to her final year. It was in that year that she saw student activism reinvigorated on campus.
    <br></br>
    During the summer of 2011, SlutWalk, a series of anti-sexual violence protest marches that spread across the world, ignited conversations around sexual violence and activism. That fall saw the startlingly rapid emergence of new campus groups advocating for women’s rights and gender equality: Radical C.U.N.T.S., FemSex, Feminist Mystique, and the Columbia Women's Organization.
    <br></br>
    Gao remembers how the term “rape culture” was contested in 2011. The movement itself, she recalls, was also highly contested. “But at the same time you see how it laid the foundation for a lot of the conversations that we have now.”
    <br></br>
    That fall also saw the execution of Troy Davis. Following Davis’ execution, the Columbia Black Students’ Organization organized a vigil and a silent march around campus that ended in the courtyard by Hamilton. “It felt really meaningful because a lot of people showed up to something,” Gao told me.
    <br></br>
    What she remembers best from that year is Occupy Wall Street, which swept up Columbia students and faculty in fall of 2011. Gao took part in those protests and was quoted in Spectator on the importance of maintaining a strong Asian-American presence at the event.
    <br></br>
    Gao was, and still is, concerned with ensuring that marginalized voices are heard. She told Spectator in 2011 that she felt like the activists involved in Occupy were largely “young white people who maybe didn't have similar views as [her].”
    <br></br>
    Speaking up for oppressed voices is, in fact, the reason that Gao brought up SlutWalk and the execution of Troy Davis in our conversation. Gao credits the energy of SlutWalk and the activism surrounding the execution of Troy Davis as galvanizing the Occupy movement.
    Activists who had been engaged in these two preceding movements were already energized by the time Occupy came to New York, which added to the movement’s success.
    <br></br>
    After graduating from Columbia, Gao worked as an investigator in public defense with the Bronx Defenders. She then transitioned to handling events and conducting research for the Law School in the Center for Gender and Sexuality Law. Gao is now working towards an American studies doctorate at New York University, where she is studying the connections between ethnic studies, leftist politics, and Maoism.
    <br></br>
    Much like her insistence on bringing the Asian-American voice to the ROTC panel, Gao wants to make sure that the black and female voices that came before Occupy are not forgotten.
    </div>
)

const info_Gaul = (
    <div className={classes.infoText}>
    <b>Maya Gaul’s diverse experiences with activism</b>
    <br></br>
    <i>by Megan Evershed</i>
    <br></br>
    I meet Maya Gaul, CC ’13, on a Saturday morning in UP Coffee. It’s 9 a.m. and the cafe has barely opened. Gaul is standing  before me, ordering tea and picking out a boxed salad. When we sit down to chat, she begins by telling me how strange it is to be back on campus.
    <br></br>
    At Columbia, Gaul took part in various organizations. She was the pre-professional chair for the Black Students Organization and also a member of Women’s Ways of Leading, a student group that examined co-centric and cooperative leadership models. Now that she’s left Morningside Heights, she has dedicated herself to environmental and community activism as an employee of CERO Cooperative in Boston.
    <br></br>
    The Black Students Organization was founded in 1968, the same year that the Columbia protests took place. Even decades after the protests, Gaul and her other BSO club members felt pressure to not let the legacy of BSO’s inception and the occupation of Hamilton Hall down.
    <br></br>
    Sipping on a large tea and moving salad leaves around with a plastic fork, Gaul reflects, “We didn't want to not step up to the plate and assume that responsibility. I think that was very challenging.”
    <br></br>
    In 2011, Gaul and the other Women’s Ways of Leading members took a trip to Ecuador together. They looked at cooperative models for organic farming and the implications of American aid in Ecuador. With her fingers in the Ecuadorian soil, Gaul realized that she wanted to participate in the green economy. “I think going to Ecuador and doing organic farming and understanding what global warming was looking like down there was my introduction to environmental activism and environmental justice,” Gaul said.
    <br></br>
    Gaul also participated in the Occupy Wall Street movement in 2011 and 2012. She credits the movement with introducing her to the concept of a solidarity economy, which is an economy that focuses on local businesses, initiatives, and not-for-profit endeavors that positively benefit a community or region. For Gaul, participating in a solidarity economy “could be a solution to a lot of the suffering and inequality that we're seeing right now in the world.”
    <br></br>
    Diverse activist experiences have been a part of Gaul’s life ever since she was in high school.
    Before coming to Columbia, she ran an after-school program at her local YMCA in Roxbury, Massachusetts. Gaul’s mother was a teacher in a local high school. After learning that some of her mother’s students were reading at a literacy rate below their age group, Gaul created a literacy program that bridged the gap between academia and popular culture.
    <br></br>
    During our interview, a stranger stops at our table. I don’t know him and neither does Gual, so when he says “hello,” I nod uncomfortably and turn my attention back to Gaul. But Gaul looks him straight in the eye, smiles, and says “hello” back. The stranger moves on, and we continue our conversation about where life has taken Gaul since graduation.
    <br></br>
    After leaving Columbia, Gaul stayed in New York for a bit. “I had this conversation with myself,” Gaul says. “What did it mean for me to stay in New York? And [I thought] about what's happening in my community.” She ultimately decided she should return to her original community, Roxbury, a neighborhood in Boston. Ever since leaving New York, Gaul has been oriented towards environmental justice and community activism.
    <br></br>
    Right after graduation, she created a community development corporation in Boston with some friends. The group held workshops and events and introduced Gaul to the opportunity of being a worker-owner at CERO Cooperative. A worker-owner helps democratically run the cooperative.
    <br></br>
    Gaul has been engaged in a variety of issues: African-American activism, women’s activism, and climate justice activism. At the core of all of her varied experiences, however, is a commitment to community. From her YMCA literacy program to her involvement in the black student community at Columbia to her current focus on Roxbury’s green economy, Gaul has consistently been dedicated to the idea that individuals have the power to shape their communities.
    </div>
)

const INFO_TEXT7 = [
    {label: "Herold", text: info_Herold, src: src_Herold, name: name_Herold},
    {label: "Gao", text: info_Gao, src: src_Gao, name: name_Gao},
    {label: "Gaul", text: info_Gaul, src: src_Gaul, name: name_Gaul}
]

const src_RidolfiStarr = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/CHWEBRUNL5BSBMTGQZOBOWMOEM.jpg"
const src_SalazarDodge = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/UBCDCNEYS5GLHH4V7V67HK43WU.jpg"
const src_RansbySporn = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/3SEYH4VZGFBXBOFCPWT4DETI5E.jpg"

const name_RidolfiStarr = "Zoe Ridolfi-Starr, 2015"
const name_SalazarDodge = "Iliana Salazar-Dodge, 2016"
const name_RansbySporn = "Asha Rosa Ransby-Sporn, 2016"

const info_RidolfiStarr = (
    <div className={classes.infoText}>
    <b>Zoe Ridolfi-Starr Has Heard It All</b>
    <br></br>
    <i>by Sophia Cornell</i>
    <br></br>
    In the spring of 2015, Zoe Ridolfi-Starr was about to graduate from Columbia. At the time, she was one of the most public and controversial faces in the national conversation about campus sexual assault.
    <br></br>
    A year before, just as Emma Sulkowicz, who graduated from Columbia College in 2015, first went to the police with her allegations of rape, Ridolfi-Starr had founded No Red Tape. NRT’s activism, along with Sulkowicz’s story and Carry That Weight project, would captivate a national audience.
    <br></br>
    Ridolfi-Starr had always been politically engaged—her first job, at 15, was as a peer educator with Planned Parenthood. She made ripples as soon as she got to Columbia, tutoring incarcerated students through the Prison Reform and Educational Project and leading a campaign with the Columbia University College Democrats to create a fund, which still exists, for emergency health concerns that might need to stay private and off insurance, like abortion. She says that this is the activism she is most proud of.
    <br></br>
    But she was deeply uncomfortable on campus, in part because she had been assaulted at a frat party the summer after her first year. She studied abroad in Argentina for her junior fall and came back just as a “surge of momentum” around ending campus sexual assault was hitting the nation in 2014. Ridolfi-Starr thought more could be done to empower survivors, who she said had “no resources and transparency and information and support and absolutely no clout.”
    <br></br>
    In a cover story about Sulkowicz, <i>New York Magazine</i> described the duo as “the hipster fencer-artist and the earnest political organizer.” Ridolfi-Starr set about meeting with survivors of sexual assault and writing down their stories. In April 2014, she compiled the 28 stories, including Sulkowicz’s, into a Title IX complaint, alleging that the University failed to properly address gender violence.
    <br></br>
    NRT is often remembered for its controversial direct actions, and Ridolfi-Starr was herself a controversial figure, in part because she was perceived as leading the charge against Sulkowicz’s alleged rapist. She says the group tried to pressure the University through three main pressure points: fundraising, matriculation rates, and public image. To that end, they held events designed to humiliate the school and provoked the ire of both administrators and students.
    <br></br>
    Now three years out of college, Ridolfi-Starr is bubbly but intense. She sounds like an MBA student who has swallowed a Valley girl; she uses the words “proactive” and “wacky” in the same breath; she describes “interfacing” with survivors in one sentence and says something “drives me bananas” in the next. She tells me that this is the first interview with Columbia media that she’s done since she graduated and that she’s been trying to recenter, heal, and get away from her “extraordinarily difficult” time at Columbia. At school, she felt in “constant friction.”
    <br></br>
    The child of two mothers, one of whom spent time in jail for her Vietnam-era anti-draft actions, Ridolfi-Starr had always known she wanted to go to a college where people spoke up. But she didn’t anticipate just how hateful some of that speech would be.
    <br></br>
    Ridolfi-Starr faced criticism from all sides, including from within the activist community. She says she was called too radical, too conservative, too attention-hungry, and too timid. She was accused of both humiliating Columbia and being too conciliatory.
    <br></br>
    “People will just say everything,” Ridolfi-Starr tells me. “And people will say it in the media; people will say it in anonymous comments; people will say it behind your back; people will say it to your face; people will get drunk and scream it at you in a bar; people will say it to you during class; people will leave you anonymous notes; people will write on your door; people will slip notes under your door.
    <br></br>
    After compiling the Title IX complaint, she also found herself recognizing the faces of many accused attackers when walking around campus. “The world of people that made me feel queasy and angry, like deeply bitterly scarily angry,” Ridolfi-Starr tells me, “just kept getting bigger and bigger and bigger.”
    <br></br>
    But NRT also got stuff done, overcoming the power dynamic with the administration that plagues campus activist groups everywhere. They pushed for, and received, a new rape crisis center, reworked mandatory prevention education, six new positions in SVR, support for both parties in a sexual assault dispute (Ridolfi-Starr says this is important because it increases trust in the system), and gender-neutral scenarios in prevention education (getting rid of “Lisa and Steve”).
    <br></br>
    At graduation, Ridolfi-Starr helped Sulkowicz carry her mattress across the stage, despite Columbia’s rather pointed warning not to bring “large objects which could interfere with the proceedings or create discomfort to others.”
    <br></br>
    After school, she worked for a while as deputy director of Know Your IX before switching to work on juvenile justice issues at the Center for Court Innovation. Now, she’s working part-time on sex-ed (“gender violence adjacent, but it’s a lot more hopeful”) and deciding which law school to attend in the fall. She’d like to stay in New York, but definitely won’t be going to Columbia Law. “Oh my god, that would be so funny,” she says, laughing. “They’d shit their pants.”
    </div>
)

const info_SalazarDodge = (
    <div className={classes.infoText}>
    <b>Iliana Salazar-Dodge advocates for unconditional love in activism</b>
    <br></br>
    <i>by Megan Evershed</i>
    <br></br>
    In April of 1968, Columbia students occupied Low Library. Forty-eight years later, Columbia Divest for Climate Justice (CDCJ) followed in their footsteps.
    <br></br>
    CDCJ occupied Low Library in April 2016 to protest Columbia’s investment in the fossil fuel industry. “Our purpose wasn't to just shut something down for the sake of shutting things down,” Iliana Salazar-Dodge, who graduated from Columbia College in 2016 and was one of the CDCJ founders who occupied Low Library, says. “But we still needed to take action in order to get our point across, because the administration wasn't listening. That's how it felt.”
    <br></br>
    The CDCJ sit-in lasted eight days, from April 14th to April 22nd. The activists terminated their occupation of Low Library after they received an email from President Lee Bollinger stating that he would consider the issue of fossil fuel divestment. In March 2017, Columbia announced its divestment from thermal coal producers.
    <br></br>
    CDCJ’s occupation of the iconic domed building at the heart of Columbia’s campus inevitably evokes the memory of 1968. “We were definitely influenced by the sit-ins and all the actions of 1968,” Salazar-Dodge tells me. For Salazar-Dodge, the protests from the 1960s helped teach later generations about self-empowerment. The protests showed that students “don't have to submit to what society or the administration expects of us.”
    <br></br>
    During her time at Columbia, Salazar-Dodge lived this lesson. She remained in Low Library, engaged in activism, despite the administration’s opposition to the CDCJ sit-in. But Salazar-Dodge also took the 1968 lessons of self-empowerment one step further. She was interested in using activism not just to claim student power, but also as a vehicle for solidarity and unconditional love between groups and students. The power of the united collective was of prime importance to her.
    <br></br>
    While occupying Low, Salazar-Dodge wrote a piece for Re:claim Magazine. Her article revolves around the idea that activism and hope for a better world should be motivated by unconditional love. At the bottom of her article, two commenters have left their thoughts. One of the writers is Mark Rudd, who was one of the leading activists in the 1968 Columbia protests. “Yes, unconditional love is a necessary condition for social change,” Rudd writes. “I would add another necessary condition which Ms. Salazar-Dodge alludes to: strategy for building mass movement.”
    <br></br>
    One of CDCJ’s key strategies during Salazar-Dodge’s time at Columbia was seeking unity with other student groups. CDCJ was one of the first groups to join the Barnard Columbia Solidarity Network (BCSN). Helping forge the bonds between BCSN groups was “the most rewarding thing” Salazar-Dodge has ever done.
    <br></br>
    The BCSN was founded in December 2015 and is comprised of six student groups. The BCSN has six demands, one of which directly pertains to CDCJ’s agenda: “We demand that Columbia divest our endowment from the top 200 publicly-traded fossil fuel companies.” The BCSN’s focus on solidarity and cooperation among student groups aligns with Salazar-Dodge’s belief that activism is more powerful when activists work together.
    <br></br>
    Salazar-Dodge’s activism and attachment to the principles of empowerment and solidarity took shape at Columbia. Before attending Columbia, however, Salazar-Dodge wouldn’t have characterized herself as an activist. “I always cared about [the] environment and creating positive change in general,” she said. “But I didn't really have an outlet for that here at home.”
    <br></br>
    Once she moved to New York, she found herself in a completely new social, political, and economic context from her suburban hometown in California. In New York and at Columbia Salazar-Dodge became activated by “the darker side of what was possible and what was happening in our society.” She helped found CDCJ in 2012 and was involved in the group up until her graduation in 2016.
    <br></br>
    “There is no guarantee that our economic experiments or our social movements will be successful,” she wrote in Re:claim in April 2016. “Yet, if we are going to make a wholehearted attempt, we must see this crucial point in human history as a moment of opportunity to stand together and believe that we can build a better world.”
    </div>
)

const info_RansbySporn = (
    <div className={classes.infoText}>
    <b>Asha Rosa Ransby-Sporn on How to Make Columbia Divest from Private Prisons</b>
    <br></br>
    <i>by Sophia Cornell</i>
    <br></br>
    Most Columbia activists will tell you how the frustrating the work is—how no amount of research and organizing, squeezed into spaces between homework, can upend the David-and-Goliath-like imbalance between one small activist group and the intricate, all-powerful University. Asha Rosa Ransby-Sporn, who graduated from Columbia College in 2016, tells me all of this. But she also stands for something else about Columbia activists. David got the shot off, and sometimes, activists win.
    <br></br>
    In the fall of 2013, Ransby-Sporn was a member of Students Against Mass Incarceration, which was thinking about mounting a private prison divestment campaign. This campaign, which Ransby-Sporn led, would later become Columbia Prison Divest, the first group to successfully pressure a university to divest from direct holdings in private prisons. But in 2013, the campaign was still in its infancy; so much so that the organizers didn’t even know if Columbia <i>had</i> direct investments in private prisons.
    <br></br>
    After talking to Students for Justice in Palestine and Columbia Divest for Climate Justice—other groups who had worked on divestment campaigns—CPD organizers learned that Columbia, like a turtle, would scare and retreat into its shell if approached directly. Better to seem non-threatening, to ease up sideways.
    <br></br>
    So Ransby-Sporn and a friend persevered through administrative dead ends and eventually got the phone number for Ursula Bollini, then the associate director of Advisory Committee on Socially Responsible Investing.
    <br></br>
    Ransby-Sporn called Bollini and left a voicemail. She was still a sophomore at the time, but she bent the truth and told Bollini that she was working on a senior thesis about University investment practices. Could Bollini by chance provide her with a list of the University’s public holdings? Bollini could, and eventually, Ransby-Sporn received an envelope containing the information.
    <br></br>
    Given Columbia’s size and reach, Ransby-Sporn assumed that the University would have at least tangential ties to the private prison industry. But Columbia’s investment in private prisons ended up being much more significant: The paperwork in the envelope Ransby-Sporn obtained listed about $8 million invested in private-prison operator Corrections Corporation of America and $2 million invested in the security contractor G4S.
    <br></br>
    The list Ransby-Sporn had tricked Bollini into giving her triggered a year-long push that included rallies, sit-ins, and three letters to University President Lee Bollinger. CPD had to present to ASCRI twice, because Bollini and much of the committee moved departments shortly after CPD’s first presentation. The final report to ASCRI required copious documentation. By the end, the final report had an appendix that ran to 300 pages.
    <br></br>
    Still, CPD was careful not to dedicate all its time to what Ransby-Sporn describes as a system designed to divert the focus of activists. Sure, the group of “close friends and comrades” would jump through the required hoops so that people couldn’t say that hadn’t tried the official channels, but the real path to divestment would come from building support on campus through direct action, what Ransby-Sporn calls “the real work of organizing.”
    <br></br>
    And the work was only getting started. The summer of 2014 was the summer of Eric Garner and Michael Brown and stores burning in Ferguson. It was the summer of a raid in which 400 NYPD officers wearing bulletproof vests stormed the Ulysses S. Grant Houses and Manhattanville Houses just a few blocks from Columbia’s campus and arrested 100 people, alleging rampant gang violence. In the aftermath of the raid, Columbia’s Public Safety sent out an email congratulating NYPD for “making our community safer.”
    <br></br>
    Columbia Prison Divest and the Coalition Against Gentrification saw the raid in a different light. They published a statement reading: “As students, we object to the use of a dishonest representation of ‘our safety’ as a tool to perpetuate violence on West Harlem residents.”
    <br></br>
    A little over a year after the raid, Columbia’s trustees heeded ASCRI’s recommendation and voted to divest from private prisons. “Obviously <i>winning</i> winning is not the only way campaigns win,” Ransby-Sporn tells me. “But I think it energized people to see that certain things were possible.”
    <br></br>
    Ransby-Sporn, who still lives in West Harlem, works as the national organizing co-chair for the Black Youth Project 100, an organization she helped found while still at Columbia. She says Columbia students have work to do. “We do ourselves a disservice believing narratives that say we should learn in isolation,” she says.
    </div>
)

const INFO_TEXT8 = [
    {label: "RidolfiStarr", text: info_RidolfiStarr, src: src_RidolfiStarr, name: name_RidolfiStarr},
    {label: "SalazarDodge", text: info_SalazarDodge, src: src_SalazarDodge, name: name_SalazarDodge},
    {label: "RansbySporn", text: info_RansbySporn, src: src_RansbySporn, name: name_RansbySporn}
]

const src_Brudastova = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/2QB3JK5H5ZDHTMOVJNV6BHHLHM.jpg"
const src_Crain = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/7M4X5MQ3TBEGXFZTWHUOPGJ6AE.jpg"
const src_Manticas = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/PQOICXQTONDLDJLK5OKGUYWJVY.jpg"

const name_Brudastova = "Olga Brudastova, 2018"
const name_Crain = "Julia Crain, 2018"
const name_Manticas = "Inga Manticas, 2020"

const info_Brudastova = (
    <div className={classes.infoText}>
    <b>Olga Brudastova Wants to Sit At the Bargaining Table </b>
    <br></br>
    <i>by Sophia Cornell</i>
    <br></br>
    In 2014, Olga Brudastova was working in her lab on the sixth floor of Mudd when a stranger knocked on the door. He introduced himself as Bradley Gorski, a Ph.D. candidate in Slavic languages and literatures and an organizer for the Graduate Workers of Columbia. Gorski told Brudastova that some graduate students were thinking of unionizing. Brudastova was intrigued, in part because she had been paid several months late for the last two semesters and had had to borrow money from her roommate to pay rent. At the next town hall held by union activists, Brudastova asked if a union for graduate students could help her be paid on time. “That’s the easy one!” an organizer told her.
    <br></br>
    After New York University graduate students won the right to unionize in 2013, many students and reporters thought Columbia would soon follow. A New Yorker piece, which quotes Brudastova, was published in December 2014 and anticipated that the campaign would culminate the next Friday, with the delivery of a letter to University President Bollinger. Instead, the legal battles have stretched for three and a half years into the present day—the graduate students began their strike this week.
    <br></br>
    Brudastova, who grew up in Orenburg, Russia, came to Columbia to pursue a Ph.D. in civil engineering with a speciality in computational stochastic mechanics. Her early years were not very political—she describes her younger self as “very neutral” and “apathetic.” She did not come to Columbia with the intention of becoming an activist—in fact, she only learned about Columbia’s activist legacy once she arrived.
    <br></br>
    But over time, Brudastova’s role in the union grew. She has become “sort of the spokesperson,” appearing in over a dozen Spectator articles, and is also one of 10 members of the bargaining committee—the elected body that hopes to sit at the table with the administration if and when Columbia submits to the mounting pressure to bargain with grad workers.
    <br></br>
    In keeping with her role as media wrangler, Brudastova speaks with a certain rhetorical savviness. She refers to those pursuing advanced degrees exclusively as “grad workers,” a characterization that Columbia has tried to dispute. At the heart of Columbia’s argument is that graduate students’ main role is that of students and not of workers, an argument that Brudastova calls “irrelevant.” One of GWC’s hashtags is #Weareworkers.
    <br></br>
    Brudastova, who graduates in August, is currently looking for a job that combines her two passions—STEM and advocacy. She says that her work with GWC has led her career path away from her previous focus on “more corporate jobs.”
    <br></br>
    Of course, putting “union organizer” on one’s résumé is a bold move. When Brudastova went to the Center for Career Education, they asked her twice whether she was sure she wanted to include it. Although most employees have responded positively when learning of her activism, Brudastova says with a laugh that she still faces “prejudice” from her mom.
    <br></br>
    Besides the occasional misplaced article and charmingly literal cliché (“My knowledge is still very much on the surface”), Brudastova speaks English perfectly. Her well-groomed eyebrows rise energetically as she describes GWC’s decision to “escalate” with its strike. When I ask her if GWC ever considered a 1968-style occupation of campus buildings, Brudastova said that GWC worries about doing anything that could result in deportation for its international members, like herself.
    <br></br>
    For a while, Brudastova and GWC enjoyed a series of victories. In a card-organizing drive, GWC collected over 1,700 cards signed by graduate students supporting the union. Then the National Labor Relations Board ruled in August 2016 that graduate students could unionize, reversing a previous decision.  When the graduate students voted on whether to unionize in December 2016, Brudastova went downtown to the Federal Plaza building where the ballots were counted to hear the decision. They won: 1602 to 623. “We were all in tears but also happy,” Brudastova remembers.
    <br></br>
    But in Brudastova’s words, “it went downhill from there.” Columbia attacked the legitimacy of the December 2016 election by filing a challenge to the regional NLRB and later the national NLRB. Last December, after Columbia’s second challenge was finally rejected, Columbia Provost John Coatsworth said in a letter that Columbia was not going to bargain and that it will instead appeal the NLRB’s original 2016 ruling that grad students could unionize.
    <br></br>
    In response, GWC held a strike vote, in which 93 percent of graduate students voted to hold a strike for the duration of this week.
    <br></br>
    Brudastova recognizes that GWC most likely won’t sit at the bargaining table before she graduates in August. Still, she sees a union as strikingly inevitable. “[Columbia is] not on the right side of history,” she says. “It’s over. They lost.”
    <br></br>
    <i><b>Correction May 2, 2018:</b> An earlier version of this article said the NLRB ruling was in October, not August of 2016. It also said Columbia’s second exceptions were rejected in January of 2018 when in reality they were rejected in December 2017. The Eye regrets the errors</i>
    </div>
)

const info_Crain = (
    <div className={classes.infoText}>
    <b>Julia Crain Thinks Columbia’s Intersectionality Is Misapplied</b>
    <br></br>
    <i>by Sophia Cornell</i>
    <br></br>
    Julia Crain, who will graduate from Barnard College this spring, is a curious case of the Columbia ActivistTM: She’s both passionate and jaded, both radical—willing to risk disciplinary action for a cause she cares about—and not. We speak of her activism, which both began and ended while at Columbia, in the past tense.
    <br></br>
    As we talk, she picks her words carefully, periodically asking me to keep certain sentences off the record. She arrived early for our interview; I got the sense that she is the kind of person who needs only one alarm to wake up in the morning.
    <br></br>
    Crain arrived on campus in 2014 amid a maelstrom of conversation about sexual assault. Twenty-three students, led by Zoe Ridolfi-Starr, who graduated from Columbia College in 2015, had just filed a federal complaint against Columbia, accusing the University of mishandling sexual assault cases. A month after Crain’s orientation, Emma Sulkowicz, who also graduated from Columbia College in 2015, would begin carrying their mattress around campus.
    <br></br>
    The stories of assault and bureaucratic incompetence horrified Crain, so she joined No Red Tape, which was still only a few months old at the time.
    <br></br>
    She quickly became one of its core organizers, working on policy proposals such as its proposed changes to the Gender-Based Misconduct Policy, which, among other things, asked the University to weigh other allegations against the respondent in the adjudication process and to ban those found responsible from holding leadership positions like resident adviser.
    <br></br>
    That year, Crain went to Albany with the group over spring break to lobby Andrew Cuomo’s administration on Enough is Enough, the statewide bill that implemented a stricter definition of affirmative consent and ensured that students who reported sexual assault would not get in trouble for drug or alcohol violations. The bill became law four months later.
    <br></br>
    That spring also marked some of the group’s high-profile public actions. NRT, in collaboration with the Illuminator Art Collective, projected phrases like “Rape Happens Here” and “Columbia Protects Rapists” onto the face of Low Library during Days on Campus in April. Crain, along with other members of NRT, also interrupted info sessions for prospective students. They carried signs saying “Red Tape won’t cover Rape” and “Keep Students Safe.” Her uni was taken down by a Public Safety officer in the first instance; in the second, she got an email threatening disciplinary action.
    <br></br>
    She admits that she was afraid of doing anything that could get her suspended. Still, she cared a lot about the issue, and she didn’t think meeting with administrators was enough. “Obviously, if you look at the history of radical social change, it doesn't come just from changing laws,” Crain reflects. To this day, she stands by the group’s “radical” tactics. “If they don’t agree with the tactics,” Crain tells me, “I think that's more of an issue of them maybe not realizing it's necessary to do that.”
    <br></br>
    That spring was also when Crain began to feel alienated from the group. Students for Justice in Palestine invited NRT to co-sponsor its annual Israeli Apartheid Week in February, which aims to raise awareness of injustices committed by the Israeli state against Palestinians. NRT declined at the time, but discussion over whether to support SJP raged throughout the summer. Crain “quickly realized” she was the only member of NRT against the decision to ally with SJP.
    <br></br>
    That July, she formally broke ties with the group because of its support for SJP.
    <br></br>
    The following months saw a campus-wide growth of institutionalized intersectionality among activist groups on campus, with the formation of the Barnard Columbia Solidarity Network that December.
    <br></br>
    In the same month, Crain published an editorial in Spectator denouncing NRT for allying with SJP, which she felt “politicized anti-sexual violence work” and alienated large groups of students from the cause.
    <br></br>
    Those who support increased intersectionality often argue that different social justice movements all stem from the same systemic power imbalance: what Marx referred to when he said “the history of all hitherto existing societies is the history of class struggle.” Others, like Crain, suggest that packaging causes together can exclude those who would otherwise support some, but not all of them. She explains that she feels it’s essential to consider how the intersection of various identities affects the dynamics of gender-based violence, but that Israeli-Palestinian debates belong in a different conversation than sexual assault. “That's a geopolitical conflict that is such an enormous beast. It's not the same as looking at the way that racism or classism, let's say, intersect with sexism.”
    <br></br>
    Crain’s activism effectively ended with her 2015 editorial, at least for now. “I was jaded by the whole experience,” she tells me. “I lost so many personal connections.” Although she says she still cares passionately about the issue of sexual assault, she never returned to campus activism after leaving NRT. When she graduates in a few weeks, she will start a new job at an art auction house.
    </div>
)

const info_Manticas = (
    <div className={classes.infoText}>
    <b>Inga Manticas Parties with 1968 Protest Signs</b>
    <br></br>
    <i>by Sophia Cornell</i>
    <br></br>
    For her birthday this year, Inga Manticas, a sophomore in Columbia College, held a 1968-themed party. She decorated her suite on the third floor of Greenborough, the sustainability-themed special interest community. “Revolution!” screamed a green painted banner on the wall. Two adjacent signs said “Out of Vietnam” and “Out of Harlem.” A sign above the bathtub urged, “No More War.”
    <br></br>
    As a kid, Manticas obsessed over the ’60s—Jimi Hendrix, psychedelic artists like Vali Myers, proto-punk bands like The Stooges. (Today, she’s wearing blue polka-dotted overalls over a red and white striped shirt, and there are a series of circles drawn in ballpoint pen on her forearm.) Her obsession with the decade eventually blossomed to include its politics—she first saw Columbia’s campus in footage of the 1968 protests.
    <br></br>
    Manticas is one of the oldest members of Student-Worker Solidarity. She joined last year, her first year at Columbia, right after the November 2016 election, and has since taken on more and more responsibility, although she assures me that SWS has a “very horizontal leadership structure.” In addition to her role at SWS, Manticas works 16 hours a week at the Goddard Riverside Law Project, which organizes and provides legal support to tenants struggling with unfair housing practices.
    <br></br>
    Still, Manticas says she’s uncomfortable being called an activist—“activists” are people like Mark Rudd, Angela Davis, and Malala Yousafzai, people who are the public faces of a movement. Manticas describes herself more as an organizer, working behind the scenes: educating people about labor issues, designing flyers and getting people to hang them up, connecting people to other people, planning events.
    <br></br>
    Manticas was looking for a politically engaged student body in college and applied to Columbia in part because of its history of activism. I imagine that Columbia was also looking for her, in its own way. Manticas’s extracurriculars are the stuff of admissions officers’ wildest dreams: She was the three-year president of her Sacramento high school’s feminist group and a co-founder of a coalition of feminist groups across local high schools, with whom she planned not one but two conventions.
    <br></br>
    In what she describes as typical “historical forgetting,” Manticas learned about some aspects of 1968, namely Gym Crow and black students’ occupation of Hamilton Hall only after she arrived at Columbia. Although this half of the events of 1968 may be less visible in the outside world, Manticas suggests that the memory of the black students’ activism is alive among the current on-campus activist community.
    <br></br>
    “In the event that someone invokes ’68 as an inspiration,” Manticas says, “it’s often in the context of, like, ‘look how Columbia students stood in solidarity with the Harlem community.’”
    <br></br>
    At the moment, SWS is focused on supporting Graduate Workers of Columbia University in their strike. SWS launched a photo campaign on social media featuring pictures of undergrads holding up whiteboards with statements like “I support the union because our TAs deserve better.” At this year’s Bacchanal, Manticas walked around the lawns talking to people about the union as they lounged or slept off their morning’s activities. Eventually, she convinced a big group to pose with an enormous blue poster that said “Solidarity with Grad Workers!”
    <br></br>
    Besides not being able to do as much as she would like to for SWS (because, she says, she has to go to class), Manticas says it’s frustrating to watch the power that big money holds over a University that repeatedly ignores student’s demands. At different times, she calls the University and the board of trustees “regressive,” “ridiculous,” “a center of power,” and “a neo-liberal financial institution.”
    <br></br>
    SWS’s big project at the moment is supporting the graduate students’ push to unionize, but it also has a petition in the works to support the efforts of the John Jay health care workers to unionize, and it wants to organize undergraduate work-study workers over issues like late pay.
    <br></br>
    Manticas says she was already “pretty far left” before arriving at Columbia and says Columbia hasn’t really radicalized her (although it’s clear that “radical” is not, in this context, a dirty word). She has changed her mind about some things, though.
    <br></br>
    “Now I think of the labor movement as being a really, really critical part of the fight against capitalism,” Manticas tells me. “And that is probably not something I would have said when I was 17 years old.”
    </div>
)

const INFO_TEXT9 = [
    {label: "Brudastova", text: info_Brudastova, src: src_Brudastova, name: name_Brudastova},
    {label: "Crain", text: info_Crain, src: src_Crain, name: name_Crain},
    {label: "Manticas", text: info_Manticas, src: src_Manticas, name: name_Manticas}
]
const DATA = [INFO_TEXT1, INFO_TEXT2, INFO_TEXT3, INFO_TEXT4, INFO_TEXT5,
                INFO_TEXT6, INFO_TEXT7, INFO_TEXT8, INFO_TEXT9]

class Part2 extends Component{
    state = {
        selectecRowIndex: null
    }

    onClickRow = (index) =>{
        this.setState({selectecRowIndex: index})
    }

    render(){
        const imageRows = DATA.map((item, index) =>{
            let toggleDisabled = true;
            if (index == this.state.selectecRowIndex)
                toggleDisabled = false
            return <ImageRow key={index} data = {item}
                clicked = {()=>this.onClickRow(index)}
                toggleDisabled = {toggleDisabled}/>
        })

        return(
            <div className={classes.Container}>
                <div className={classes.columns}>
                    <div className ={classes.title}>
                            PART II: Profiles  
                    </div>
                    <div className={classes.border}></div>
                    {/*<!--<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/900px-Flag_of_Uganda.svg.png" style="width:170px;height:190px;margin-left:2vw; margin-right: 0.7vw; padding-bottom:0px;">-->*/}
                    <div className={classes.introText} >
                        This past month, we set our staff on the mission of capturing the lived legacy of activism at Columbia in the fifty years since 1968. By talking to activists of differents moments and movements, we sought to answer a series of questions: Who is the “Columbia activist”? In what ways has 1968 served as a touchstone for activists past and present? How has the Columbia activist evolved since then? And what becomes of the Columbia activist after they leave campus? We invite you to dive into the stories and struggles of your time, and the times before you, and maybe even the times after you.  
                    </div>  

                    {imageRows}

                    <div className= {classes.border} style={{marginTop: "2vw", marginBottom: "0"}}></div>
                    <div className = {classes.linkToPart3}>
                        PART III: COLUMBIA AND HARLEM
                    </div>

                </div>
            </div>
        )
        }
}

export default Part2