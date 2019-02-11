
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

const DATA = [INFO_TEXT1, INFO_TEXT2]

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