import React, {Component} from 'react';
import s from "./part1.module.css";

import "./part1.module.css";

class Part1 extends React.Component{
    render() {
        return(
           <div className= {s["content-wrap"]} id="content-wrap-1">
    <div className={s["row"]}>
        <div className={s["col-md-12 col-centered"]} style={{overflow:"hidden", margin: "0"}}>
            <div className={s["row heading"]}>
                Part 1: History
            </div>
            <div className = "row">
                <img id="line" src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/DROGZ7EZYBEZDHZ5Q3DBXR7GJI.png"/>
            </div>
           <div className = {s["row main-part body"]}>
          {/* <img style={{float:"left", width:"50%", marginLeft: "0"}} src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/GWZXP7VFDVEBZBF7YWSOUEYAVE.jpg"/> */}
           <p style={{color:"gray", marginTop:"-1vw"}}>by <a href="https://www.columbiaspectator.com/contributors/kara-schechtman/">Kara Schechtman</a>, <a href="https://www.columbiaspectator.com/contributors/skylar-fetter/">Skylar Fetter</a>, <a href="https://www.columbiaspectator.com/contributors/grace-holleman/">and Grace Holleman</a></p>
           <div id="glossary-click"><p><b><i>Click for a Glossary of Terms</i></b></p></div>
           <div className={s["glossary"]} style={{display:"none"}}>
               <div className={s["glossary-wrap"]}>
               <p><b>AHFG:</b> The Ad Hoc Faculty Group. A group of professors who set up camp in a small room in Philosophy Hall two days after the protests started. The AHFG assumed the role of mediator, keeping in touch with the administration, various student groups, and the rest of the faculty. Its members appointed couriers to bear messages, delivered necessary medical supplies to students in Low, and, in the first encounter with police during the protests, prevented authorities from entering, resulting in injury for one faculty member. One member called it the “Volunteer Fire Brigade.”</p>
           <p><b>Executive Committee:</b> A group of ten faculty appointed by President Kirk on April 30. The Executive Committee later appointed the Cox Commission to issue a definitive report on the Columbia protests. </p>
               <p><b>BOSS:</b> The Barnard Organization of Soul Sisters, an association of black Barnard students that formed in 1968. </p>
               <p><b>Campaign for Columbia:</b> Fundraising campaign spearheaded by Columbia University President Kirk beginning in 1961, aiming to raise $200 million for a number of projects including the Morningside gym. </p>
           <p><b>Columbia Daily Spectator:</b> Founded in 1877, independent of the University since 1962, Spectator covered the events of the 1968 eruption in real time. </p>
       <p><b>CORE:</b> The Congress for Racial Equality. CORE formed in 1942 and participated in civil rights campaigns including the Freedom Rides and the 1963 March on Washington. In 1968, CORE was headquartered at 135th Street in West Harlem. </p>
   <p><b>Dean Henry Coleman:</b> Henry Coleman, SEAS ’46, was dean of Columbia College in 1968. He was held hostage in his Hamilton Hall office for over 24 hours beginning on April 23.</p>
<p><b>Harlem Mau Mau Society:</b>  The Mau Mau society, led by Charles 37x Kenyatta, was a political organization in Harlem that served as security for prominent black leaders, including Malcolm X.</p>
<p><b>IDA:</b> The Institute for Defense Analyses, an organization contracted by the Pentagon to carry out military research which had institutional ties to Columbia University. </p>
<p><b>Jane Fonda’s Future Husband:</b> Actress and anti-war activist Jane Fonda has had three husbands. Her second, Tom Hayden, was one of the drafters of the New Left manifesto the Port Huron Statement. He was not a student at Columbia, but he did attend the protests.</p>
<p><b>Majority Coalition:</b> Columbia students upset about the disruption created by the protests formed the Majority Coalition on April 24. </p>
               <p><b>NYPD:</b> The New York Police Department.</p>
               <p>President Grayson Kirk Dr. Grayson Kirk succeeded Dwight Eisenhower as president of Columbia University. He took office in 1953 and left in 1968. </p>
           <p><b>SAS:</b> The Columbia Student Afro-American Society. SAS began with a meeting of Columbia College students in November 1963. The group was founded by Hilton Clark, son of psychologist Kenneth Clark. In years after its creation, it grew into an organization comprising students across undergraduate and graduate schools that held meetings and published a magazine, The Black Student. In 1968, prominent members of SAS included Cicero Wilson, William Sales, and Ray Brown. </p>
       <p><b>SDS:</b> Students for a Democratic Society. SDS formed in 1960, and in 1962 issued the Port Huron Statement, the group’s manifesto. Chapters sprang up on campuses across the United States and grew increasingly active throughout the 1960s as opposition to the Vietnam War increased. </p>
   <p><b>SNCC:</b> Student Nonviolent Coordinating Committee. SNCC was founded in 1960 and held sit-ins and anti-segregation protests in the south. Throughout the decade, SNCC grew nationally, and its strategies became increasingly militant—a change facilitated largely by Stokely Carmichael and H. Rap Brown, who were consecutive SNCC chairs.</p>
               <p><b>Steering Committee:</b> An alliance between leaders of SAS and SNCC, including SAS’s Ray Brown and William Sales, and SDS’s Ted Gold and Mark Rudd, among others.</p>
               <p><b>The Tombs:</b> Detention center in downtown Manhattan built in 1838 and still in use today, referred to colloquially as “The Tombs.”</p>
       <p><b>Strike Coordinating Committee:</b> Ad hoc organization composed primarily of SDS members to coordinate a strike on classes and the occupation of the buildings.</p>
               <p><b>Vietnam War:</b> In 1968, formal American involvement in Vietnam was in its fourteenth year.</p>
               <p><b>WKCR:</b> King’s College Radio. Columbia University’s radio station, which played an instrumental role in reporting the happenings on campus during the protests</p>
       <p><b>The Eye Editors’ Suggested Word Count:</b> Error 404, entry not found.</p>

           </div>
       <div id="glossary-close"><p><b><i>Close Glossary</i></b></p></div>
   </div>
   <p><b>Historiographical Note: </b></p><p>The official timeline of the 1968 protests at Columbia University can be found in an ugly beige paperback available in Butler and Lehman Libraries, originally printed and sold by Vintage Press for $1.95 in October 1968. It’s called <a href="https://clio.columbia.edu/catalog/1188518?counter=4"><i><u>Crisis at Columbia: a report of the fact-finding commission appointed to investigate the disturbances at Columbia University in April and May, 1968</u></i></a>.
</p>
<p>
In lieu of the catchy full title or ambiguous pre-colon moniker (there are a number of unrelated, often-inflammatory articles and a Spectator issue on 1968 entitled “Crisis at Columbia”), most people simply call it the Cox Commission report. The nickname comes from the chairman of the titular fact-finding commission, Archibald Cox, a professor of law at Harvard—better known for his later role as an independent special prosecutor during the Nixon administration. The Cox Commission was charged with recording the causes of the 1968 protests and a detailed timeline of events, for both historical and practical purposes.
</p>
<p>
Turning to page 99 in the report, you can shallowly pinpoint the event that catalyzed this tumultuous week. On April 22, 1968, SDS runs a small classified on page seven of the Columbia Daily Spectator. It tells students to meet at the Sundial at noon. Down the left side column, above the fold on the front page, the News staff runs an article on the impending protest. A headline on “changes to the CC curriculum” eclipses the protest for top billing. The Cox Commission takes three sentences to describe this day.
</p>
<p>
The events of the next day, April 23, take the Cox Commission roughly 20 paragraphs to describe.
</p>
<p>
Behind these 20 paragraphs, in the Columbia Archives alone, there are folders and folders full of flyers that people picked up from around campus. Sheets upon sheets of telegrams of support for the protesters that SAS occupiers read aloud in Hamilton. Dozens of copies of the same press releases, some unfolded and uncrumpled after a career in a jean pocket, others with notes scribbled on the back, yet more copies mailed to the University archivist just in case she hadn’t gotten her hands on one to preserve in the Columbiana Collection (she always had).
</p>
<p>
The volume of available documents from the protests poses a historiographic challenge: What deserves to be remembered of these eight days in April? Over the course of our reporting, we had to grapple with the maddening need—native to any reporter of long-form journalism but exacerbated in this case—to cut illustrative anecdotes in order to make the whole story understandable. There was the piercing condemnation of the history department for its conservatism in the resignation note of an adjunct faculty member; the angry letters from parents outraged by the interruption of their children’s educations; the stories of the Students for a Democratic Society members who joined “The Weather Underground” and would later die in the Greenwich Village townhouse explosion of 1970…
</p>
<p>
Perhaps the most surprising thing about these documents, to someone unacquainted with the events of 1968 beyond the general causes held in popular imagination, is just how varied these grab-bag stories can be. Deep in the weeds, very few documents actually mention the Morningside Gym. The ones that do often cite it in passing, within a list of other demands.
</p>
<p>
That’s not to say that the causes that persist in the popular imagination aren’t, surely, the most significant causes. The construction of the Morningside Gym and anger over Columbia’s entanglement with the Institute for Defense Analysis are, concretely, what started the protests. But to reduce the protests to these causes would be a mistake, for there were many others: general malcontent with Columbia’s treatment of its students, annoyance at the suppression of a staff worker union, a history of mistreatment of community members in Morningside and Harlem, the list goes on. One thousand stakeholders assigned 1,000 purposes to the chaos of April 23 through April 30, 1968.
</p>
<p>
For the chronicler of these days aiming to assemble an accessible version of events, a challenge arises from the variegated history: How do you represent a necessarily fractured movement with a unified account?
</p>
<p>
Our answer has been to tell not a single story, but four. Four, at least, is closer to 1,000 than one.
</p>
</div>
       <div>
           <img className={s["banner"]} src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/DHQA6PO5WRDTZMHS443GYCNEQA.png"/>
           <div className={s["title"]}>Community</div>
       </div>
<div className="row main-part body">
   <img style={{float:"right", width:"93%", marginTop: "-13%", marginBottom: "1rem"}} src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/TX36CRILXZHZZOC2WHPNDLMOOY.jpg"/>
<p>In the days and weeks following April 4, 1968, New York is steeped in what the New York Times calls a “volatile mood of deep sorrow, fist-shaking anger, and undefined fear.” Martin Luther King Jr. has been shot and killed in Memphis, Tennessee. Rallies and protests spill into the streets of almost every American city, marches sear through Times Square, and parts of Harlem burn.

</p><p>In the decade prior to April 1968, Columbia had been in the process of pushing its borders outward. The University bought over 100 buildings and evicted some 10,000 tenants, many of whom were black or Puerto Rican and living in low-cost, rent-controlled apartments.

</p><p>Hoping to stave off conflict and criticism from the community which it was rapidly changing, and often damaging, the University had made some efforts to engage positively with residents of West Harlem: Throughout the 1960s, it hosted youth sports on its athletic fields and funded personal development programs in association with the Congress on Racial Equality. But these attempts at connection were troubled and short-lived; funding for the CORE programs was cut in spring 1968, Columbia built fences around its fields, and the relationship between the community and the University continued to deteriorate.

</p><p>In 1961, the University signed a $3,000 per year lease with the City on just over two acres of land on the west side of Morningside Park, paralleling Columbia’s campus. Five years later, Columbia included the construction of a new gym on this land in its $200 million “Campaign for Columbia” initiative (equivalent to the value of nearly $1.5 billion today). The claiming of public land by a private institution led to outrage within the Morningside Heights and West Harlem communities nearly immediately; the Citizen’s Union, the Municipal Art Society, St. Luke’s Hospital, and the Cathedral of St. John the Divine all believed that the structure would harm the neighborhood.

</p><p>Columbia’s desire to compete with other universities (really, to compete with other Ivies) who could provide huge, state-of-the-art athletic facilities was the impetus for the new gym. Of the building’s ten proposed floors, the bottom two would be open for community use. Harlem residents would also access the gym through a door separate from that used by University affiliates. The Columbia door, located on Morningside Avenue, sat physically above the community entrance in Morningside Park. The hierarchy of doors made the University’s subjugation of Harlem all too visible, while the separate entrances maintained the segregation of Columbia students from community members even within a shared building.

</p><p>Among residents of Harlem, organizations formed and petitions circulated dedicated to stopping the construction. The Ad Hoc Committee for Morningside Park, an association of concerned community members, hosted a protest on April 24, 1966 and then again on April 24, 1967.

</p><p>Almost exactly a year later, on April 23, 1968, Columbia’s Student Afro-American Society takes control of Hamilton Hall, protesting, among other things, the construction of what has been dubbed Gym Crow. The atmosphere is electric; King’s recent murder is in the news and on the nation’s mind.

</p><p>On April 26, Student Nonviolent Coordinating Committee Chairman H. Rap Brown arrives at Columbia just days after being released from jail in Maryland, where he had been charged with arson and inciting riot. Rap Brown, more radical than previous SNCC leadership, is known for claiming that violence is “as American as cherry pie” and has been a vocal opponent of the gym. In February of the previous year, he advised a group of community organizers: “If they build the first story[,] blow it up. If they sneak back at night and build three stories[,] burn it down. And if they get nine stories built, it’s yours. Take it over, and maybe we’ll let them in on the weekends.”

</p><p>On campus, Rap Brown joins other community organizers who support the black students inside Hamilton with food and material necessities—including fellow SNCC member Stokely Carmichael, representatives from CORE, the Harlem Committee for Self-Defense, the United Black Front, the West Harlem Tenants Association, and local individuals. SAS has made a clean split from the largely white SDS, and is intentionally seeking community involvement in its campaign. The students in Hamilton Hall are invested in the future of Harlem, and neighborhood activists respond in kind. One flyer being distributed across Harlem reads, “Stop Columbia from taking over Harlem. … Go to Columbia and help the black students NOW.”

</p><p>Rap Brown and Carmichael slip past security forces at the Amsterdam gates. They enter at 1:00 p.m., and they are accompanied by dozens of young Harlemites, many of whom are in high school.  The community leaders meet with the students occupying Hamilton, which SAS has renamed Nat Turner Hall of Malcolm X Liberation University.

</p><p>Stepping outside, Rap Brown and Carmichael address an amassed crowd of around 1,000 students. Their speeches reemphasize the anti-gym campaign’s intention to hold Nat Turner Hall until Columbia guarantees that construction in Morningside Park will cease. After speaking, Rap Brown and Carmichael are enveloped by young supporters and escorted into a car waiting for them on Amsterdam.

</p><p>The evening of April 26, community rallies continue on Amsterdam outside the 116th Street gates. Hundreds of police descend on Columbia. Charles 37X Kenyatta, leader of the Harlem Mau Mau Society, joins the protests. Crowds ebb and flow.

</p><p>Despite the strengthened security presence outside, police and University authorities hold off from forcefully removing students. Manhattan borough president Percy Sutton (who briefly attended Columbia Law School before transferring, and who legally defended Malcolm X) joins other politicians in urging New York City’s Mayor John Lindsay to keep the Columbia administration from using brutal force against the student protesters. New York State Senator Basil Paterson stops by the SAS occupied building and notes how well-run the commune inside is.

</p><p>Nonetheless, the NYPD arrives at 2:30 a.m. on April 30.

</p><p>The bust is significantly less violent for the Nat Turner occupiers than for those in Low and Mathematics. This is due in no small part to the relative order that SAS has maintained in the building. Black students and community members know what they have to lose if police violence escalates; throughout the occupation, they’ve been conducting drills for tear gas and rubber bullets. (The University and the NYPD are also aware of the optics of a police crackdown on a building occupied solely by black students.) Knowing that community members are more likely to be hurt than Columbia students, SAS leaders ask them to leave before the police enter.

</p><p>The next day, after the occupiers of Nat Turner Hall have been arrested, CORE organizes a march. Demonstrators call for Columbia’s withdrawal from West Harlem and for the rights of arrested student protesters. Petitions continue to circulate, around the community and around the country—students at the University of Pennsylvania, UCLA, and other universities sign in droves to support Columbia’s agitators.

</p><p>Grayson Kirk resigns from the University presidency just months later. The gym is never built. By September 1968, alternative plans for the site in Morningside Park are being considered, including community housing. By the end of the year, Columbia hires architect I.M. Pei as a master planner. Pei insists that Morningside Park belongs to the community. In March 1969, plans to build in the park are officially abandoned by the university trustees.

</p><p>Harlem had prevailed in one battle of its long fight over land with Columbia.
</p></div>
<div>
<img className={s["banner"]} src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/DHQA6PO5WRDTZMHS443GYCNEQA.png"/>
<div className={s["title"]}>Students</div>
</div>
<div className="row main-part body">
<img style={{float:"right", width:"93%", marginTop:"-13%", marginBottom:"1rem"}} src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/IZCNPRE7F5H5PDT7UW2WNLSQ5Y.jpg"/>
<p>If you walked onto Columbia’s campus that spring, it’s likely you would have been handed a flyer saying things like: “Join the hundreds of students, faculty, news media, rock bands. Plus … A captive Dean Coleman!!!” or “Sign the ‘IDA MUST GO’ petition.” </p>

<p>These flyers were created by SDS, which for months had been actively opposing the University’s ties to the Vietnam War. It had been discovered that Columbia faculty had ties to the IDA and were doing defense research to assist the U.S. military in the Vietnam War. SDS was also fighting to end construction of Gym Crow in Morningside Park, among other issues. </p>

<p>While SDS arose from the anti-war effort, SAS was rooted in the civil rights movement. The assassination of Martin Luther King Jr. affected Columbia students as violently as it did the rest of the country. A memorial for King, held in Columbia’s St. Paul’s Chapel on April 9, marks the first stage of the Columbia uprising. At the event, SDS leader Mark Rudd seized a microphone from University Vice President David Truman, and shouted: “How can these administrators praise a man who fought for human dignity when they have stolen land from the people of Harlem. … We ought to stand together against this racist gym!”</p>
<p><b>April 22</b></p>
   <p>On April 22, SDS publishes the third volume of their magazine called <a href="https://exhibitions.library.columbia.edu/exhibits/show/1968/item/5524"><i><u>Up Against the Wall</u></i></a>. It contains articles like “U.S. women are treated as objects” by Lynne Powell, and “McKennedy or Sabotage?” by John Jacobs and, in the small upper-left corner of the second page, a box with the words, “Protest the IDA + University Repression Tuesday, April 23rd Sundial–Noon” and “Be Cool–no violence” written just below. Rudd also begins to meet with SAS leaders to prepare actions that would challenge and disrupt the University’s racism on campus and off. </p>

<p>Within the next week, the flyers, the magazine, and its authors will become a pivotal part of the global wave of protests that year. </p>
<p><b>April 23</b></p>
<p>At noon on April 23, students cluster around the Sundial as activists including Rudd stand and shout in opposition to the University’s ties to Vietnam War and the gym they are building in Morningside Park, demanding students join them in standing against the University. </p>

<p>SAS joins others at the Sundial, where demonstrators considerably outnumber the jocks (more conservative students who want to maintain the status quo). The protesters march to Morningside Park, where they begin to destroy the fence surrounding the gym’s construction site. The NYPD arrives and conflict breaks out, though no student is seriously injured and only one student, a white protester, is arrested. </p>

<p>The students return to campus, where SAS leadership, including Cicero Wilson and William Sales, becomes frustrated by a lack of momentum. SAS and SDS regroup and then relocate, along with some 400-odd students, into Hamilton Hall—or, rather, into Nat Turner Hall of Malcolm X Liberation University—sending a message to the administration that they will not leave the building until their demands for the end of the University’s relationship with IDA, the end to the construction of the gym, and unionization for grad students are met.</p>

<p>Dean Coleman chooses to walk into his office after the seizure of Nat Turner Hall, where he is held hostage as the protesters’ “guest of honor.” He is quoted saying, “I have no control over the demands you are making, but I have no intention of meeting any demand under a situation such as this.” The Steering Committee, a group of student leaders comprising members from SAS, from SDS, and individual protesters, forms.</p>

<p><b>April 24</b></p>
<p>By 2:00 a.m., it has become clear that SDS and SAS have different agendas. Alongside SAS, black student activists—including individuals from Barnard, Columbia College, and graduate schools—want to refocus their energy on Columbia’s encroachment on Harlem. SDS, on the other hand, has always been primarily motivated by opposition to the Vietnam War. SAS’s organizational style is also less clear-cut, tending to value a group decision making process—which SAS leaders see as anarchic—over clear hierarchies and divisions of power or responsibility. The black and white students split. </p>

<p>The SDS students exit Nat Turner Hall by sunrise. Led by Rudd, they head to Low Library. Upon entering the building, they remove all of the administrators from their offices and barricade the front doors. Students gathered in Kirk’s office watch as SDS member David Shapiro, feet on Kirk’s desk, lights up a cigar, sunglasses on, while a group of fellow student protesters leans out the window behind him, watching the turmoil of campus below. Shapiro will later teach at Columbia. </p>

<p>By 8:00 a.m., a group of students who believe the protesters are acting irresponsibly form the Majority Coalition. The Majority Coalition is impatient with the University for “not taking action,” the consistent euphemism they use for the application of police force. By the end of the protests, the Majority Coalition’s ranks grow to about 2,000.</p>

<p>Soon, the outside seeps in. Police begin to arrive on campus at the request of the administration but do not confront the protesters; reporters begin to rush to Columbia to photograph and speak to the students. SDS has taken control over one of the most prominent administrative buildings on campus, including the president’s own office.</p>

<p>Scared to confront the police, all but 27 of the students leave Low Library for Ferris Booth Hall, where they stake out and form the Strike Coordinating Committee, a representative body to oversee the strikes. (The SDS students on the SCC invite Nat Turner to send delegates. The SAS does not respond.) </p>

<p>Soon, however, it becomes apparent that administrative, and thus police, focus is—for now—not on Low, but on Nat Turner. Some of the SCC members trickle back from Ferris to Low, climbing through a window they’d left open. </p>

<p>The SDS sees Low as a potential future bargaining chip to force the administration into meeting their primary demands as well as creating a student-faculty commission that will be made of elected members to oversee disciplinary action, dropping past and current legal charges against demonstrators, and rescinding the long-standing regulations that prohibit indoor demonstrations.</p>

<p>Meanwhile, SAS continues to hold Nat Turner, one of the primary academic buildings on campus. An efficient and well-organized commune comes to life within its walls. Food and material goods are provided by Harlem residents who come to Columbia to assist the protesters. Inside, labor is divided among socially conventional lines (something participants in the commune, including William Sales, will later regret): The women cook and serve the men, who act as security and clean the building. </p>

<p>After more than 24 hours of being held hostage, Dean Coleman is released from Nat Turner. He reports that he had been given food and treated with respect by the students. Many students admitted to liking the dean as well. </p>

<p>Meanwhile, grad students enter and take over Avery, the architectural library, fighting for the right to unionize. This is the third building to be occupied in two days. </p>
<p><b>April 25</b></p>
<p>In the morning, many students, some associated with SDS and some not affiliated with any specific group on campus, begin to barricade themselves in Fayerweather, in solidarity with SDS and SAS. Student protester Marc Rauch, a junior at the time, ends up in Fayerweather. He tells us that the atmosphere there was much more relaxed compared to Low and Nat Turner, and protesters were allowed to leave and return, which was strictly prohibited by SDS members at the two main sites of protest.</p>

<p>In the afternoon, the Majority Coalition holds a counter-rally in University Gym. Fed up with the disruption to classes, which had been canceled that day for the first time, members of the Majority Coalition decide to take matters into their own hands. They are dangerously close to sending members of their ranks to “clean out” the occupied buildings, when a basketball coach, Jack Rohan, sternly lectures them. They are appeased by a promise from Dean Coleman that police action will be taken if the protesters have not cleared out by 10:00 p.m. </p>

<p>But when 10:00 p.m. comes and “the definitive action” promised to them never materializes, the students take matters into their own hands. A violent member of the Majority Coalition assaults a protester from Fayerweather in a group that has tried to barricade Philosophy Hall. Faculty intervene to break up the students and invite members of the Majority Coalition to explain their case to them. </p>

   <p>WKCR is stationed across from Low Library and broadcasts the sounds of protests all day. The narrator of this broadcast is Robert Siegel, then a Columbia College senior, who will go on to host the prominent NPR show <i>All Things Considered</i>.</p>
<p><b>April 26</b></p>
<p>At 3:00 a.m., some SDS students leave Low and head to another building on campus, Mathematics. They break in—smashing windows, barricading doors and injuring a janitor in the process. The janitor is later hospitalized. The protest accelerates rapidly, as students continue to occupy and obstruct campus buildings and classes. </p>

<p>There seems to be no consideration of negotiation or submission from SDS. Now, the organization holds two buildings and its members also make up a part of the groups in Fayerweather and Avery. </p>

<p>SNCC leaders Carmichael and Rap Brown arrive on campus to speak with the protesters inside Hamilton and then deliver a speech to a crowd outside, which includes students from Columbia, students from local high schools, and individuals from West Harlem.</p>
<p><b>April 27</b></p>
<p>Students remain barricaded in the buildings and food is thrown in through windows to sustain them. In the morning, like every other morning thus far, SDS students shake off their blankets out the windows. A sense of order and discipline has emerged within Low and Mathematics. SDS has made it clear that they intend to remain as long as it takes to have their demands met. </p>

<p>Inside Low, students open drawers, cabinets, and desks, searching through professors’ and administrators’ notes for evidence suggesting ties to the U.S. government. Some students set fire to notes they believe to be part of the University’s ties to the Vietnam War and the IDA.</p>
<p><b>April 29</b></p>
<p>The day of April 29 begins quietly but ends in a panic. The students remain in the buildings, but there has been talk of retaliation from the administration. </p>

<p>That night, according to Rauch, leaders from each of the occupied buildings receive word that the NYPD are going to arrive on campus shortly. The leaders of SDS decide it is best not to share this information with their members. Students reinforce their barricades and mill about anxiously. Downtown, the police prepare themselves for what would become one of the most pivotal moments in Columbia’s long history. </p>
<p><b>April 30</b></p>
<p>In the earliest hours of April 30, around 2:30 a.m., police drive, march, and horseback ride onto campus. They carry axes to cut down doors and barricades. The SAS occupiers of Nat Turner Hall expect a police raid and so have asked community members to leave the building, fearing that Harlem residents will be treated more harshly than Columbia students. They also ask Barnard women to leave; the female students refuse. </p>

<p>When the NYPD enters Nat Turner Hall, the remaining occupiers are evacuated and pushed into paddy wagons. Occupiers don’t comply with orders to leave the building, but they don’t resist arrest, either.  </p>

<p>SDS students, on the other hand, are not as compliant with the police. According to Frank da Cruz, a protester in Low at the time, the students brace themselves for the bust and band together, singing “We Shall Not Be Moved” by The Seekers. NYPD officers pull them apart before dragging them out of the buildings, sometimes beating them with flashlights, and then shoving them into the back of vans headed to a jail in Lower Manhattan. The fight between police and SDS protesters is brutal, and the action of the NYPD completely violate SDS’s previous statement of “Be cool–no violence.” Students are seen with blood dripping down their faces, being beaten by police and roughly removed from campus.</p>

<p>100 people are treated for injuries and three are hospitalized that night. Two of these hospitalizations are police officers, one whose back is broken when a student jumps out of a window onto him. He will never fully recover. </p>

<p>The occupation has ended. </p>

<p>Seven hundred students are arrested before the night is over and are held downtown for the rest of the night in “The Tombs”—formally named the Manhattan Detention Complex. Columbia students will also face disciplinary action, with the possibility of suspension. In the next week, there will be another outcry from SDS to drop all charges. </p>
<p><b>Aftermath</b></p>
<p>Associations formed during the days-long occupation of Hamilton Hall grow into new organizations with new causes. The following semester, black Barnard students who had participated in the ’68 protests establish the Barnard Organization of Soul Sisters. They issue a series of demands to the College administration in February, 1969, including the creation of an Afro-American studies major. In 1970, SAS takes over the former ROTC office in Hartley and rechristens it the Malcolm X Lounge. </p>

<p>SDS continues to campaign for the charges to be dropped against all protesters, including through several more protests on campus. The subtitle of “The Columbia Statement”—a pamphlet created by SDS reflecting on what they had accomplished and what they still planned to do, published in September of 1968—reads “Liberty cannot be begged; it must be won.” </p>

<p>The statement proclaims the value of the April protests and warns students not to trust or accept the committees or consolations the University would offer while still not giving in to the group’s demands. SDS reinstated their platform, stating, “For years Columbia Trustees had evicted tenants from their homes, taken land through city deals, and fired workers for trying to form a union. For years they had trained officers for Vietnam who, as ROTC literature indicates, killed Vietnamese peasants in their own country.” </p>

<p>Months later, SDS maintains that the atmosphere of 1968 was “not romantic, it was revolutionary.”</p>
</div>

<div>
<img className={s["banner"]} src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/DHQA6PO5WRDTZMHS443GYCNEQA.png"/>
<div className={s["title"]}>Administration</div>
</div>
<div className={s["row main-part body"]}>
<img style={{float:"right", width: "93%", marginTop:"-13%", marginBottom:"1rem"}} src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/KCVRVIDL6VC3FOG4S2HKCYA66A.jpg"/>
<p><b>April 23</b></p>
<p>On the morning of April 23,  Columbia President Kirk can hear the shouts and chants of the students gathered around the Sundial from his office in Low Library. These have been the sounds of Columbia’s campus for weeks; today seems no different.  </p>

<p>The Vietnam War is raging 8,644 miles away, but a bad draft lottery number can make it feel incredibly close. And only feet from Kirk’s window, students shout about the University’s encroachment into Harlem, ties to warmongers in the School of International Affairs (today SIPA), and the fact that their president is colluding with the IDA—recently it has been discovered that Kirk and several faculty members are on the board of the IDA and are doing research related to the Vietnam War. </p>

<p>Later that day, students enter Hamilton Hall and refuse to leave. </p>

<p>Students will remain in Hamilton for days in the hopes of forcing the administration, and therefore Kirk, into meeting their lengthy list of demands. </p>
<p><b>April 24</b></p>
<p>As the division of student groups begins, the administration carefully monitors the situation. White SDS members leave Hamilton and head to Low Library, and President Kirk is about to lose his office. </p>

<p>All administrators in Low are forced out of their offices by the protesting SDS students, led by Rudd. The doors are barricaded behind them—Kirk will not return to his office for at least eight more days. </p>

<p>With two buildings—Hamilton and Low Library—already occupied, the administration becomes  more and more anxious about its situation. People from all over the country have already begun flocking to campus, including Jane Fonda’s future husband; Columbia has become a locus for activists and celebrities to make a statement. That night, the third building is occupied as Avery, the architecture library, is taken over by graduate students. </p>

<p>Kirk begins receiving floods of letters from colleagues and friends at universities across the world. Some contain words of encouragement and support for the administration. Others encourage Kirk to take a stronger hand in ending the protests. The whole world is watching. </p>
<p><b>April 25</b></p>

<p>At 10:00 p.m., Kirk makes a direct plea for negotiation. A press statement is written and released, and Kirk personally writes a letter to the SAS members occupying Hamilton. In it, he agrees to halt construction on the gym, pending further discussions with “leaders acceptable to the Harlem community.” Kirk also stipulates that if the students are to leave Hamilton now, after an almost 48-hour sit in, they will only receive a disciplinary warning for the next two years, without any criminal charges.</p>

<p>However, in a letter sent to “Alumni and Friends” on June 1, 1968, Kirk makes it clear that he has no desire to give up the University’s plan for the gym in Morningside Park. “If the University permanently abandons the project and builds its gymnasium elsewhere on the Heights, the neighborhood boys will be the sufferers,” he writes. “Columbia will have a gymnasium in some other location, though it will lose several million dollars in this shift, but the teenage boys of the neighborhood then will have none.” </p>

<p>Kirk also refuses to meet the students’ demand that his connections to the IDA be severed, claiming, “The IDA issue, therefore, was largely symbolic. It was distorted by demonstrations leaders.” Columbia faculty and Kirk himself decide to retain close ties with the government organization. </p>

<p>The students do not leave. </p>
<p><b>April 26</b></p>

<p>The campus is incredibly tense, and a group of students, calling itself the Majority Coalition, pushes back against the protesters. Faculty members and some administrators attempt some sort of peace talk with student protesters, and Vice President Truman calls off any police action and reiterates the suspension of the gym. Meanwhile, behind the scenes, Kirk and the trustees are planning something quite different to peace talks for April 30. </p>
<p><b>April 27</b></p>
<p>By the April 27, four academic buildings are occupied, and the offices of Low are under the control of Rudd and the SDS. The administration watches as students throw food into windows for starving protesters. </p>

<p>The trustees issue their own statement in support of the displaced president. In the letter, they agree that the construction of the gym is to temporarily halt. They essentially affirm all that Kirk said in his letter to students on April 25. </p>

<p>However, the trustees add that the student protesters’ branding of the Morningside gym plan as a “racial issue” is an “attempt to create an entirely false issue by individuals who are either not conversant with, or who disregard, the facts.”</p>
<p><b>April 29</b></p>

<p>Late in the afternoon on April 29, the campus is tense and something is stirring. The administration has been receiving dozens of letters from concerned faculty, parents, and alumni. The administration, and Kirk in particular, feel they must act. </p>

<p>Kirk calls the NYPD. He feels physical force is the only way to remove all students from the five major buildings on campus being occupied. According to Rauch, student leaders from each building were warned that police action is going to be taken tonight. The SAS students in Hamilton and the protesters in Fayerweather surrender to the authorities peacefully. But the SDS students in Low and Mathematics remain sealed off behind their barricades. </p>
<p><b>April 30</b></p>

<p>In the early hours of April 30, around 2:30 a.m., more than 1,000 police officers enter campus. They are armed and wearing protective gear. Soon, the sounds of axes can be heard, crashing through barricades and doors in Low and Mathematics. President Kirk is not on campus. The police begin prying students apart, hitting them and dragging them out of the buildings.</p>

<p>Press from all over the country is covering the protest—photographing police in the president’s office, students with blood streaming down their faces, and throngs of students running chaotically to and fro.</p>

<p>The police remove all students from the five occupied buildings and make over 700 arrests that night, 500 of which are of students. Most of the arrests are for criminal trespassing. Those arrested are taken to “The Tombs,” a jail in lower Manhattan, where they are booked and held for the rest of the night. </p>

<p>Students are gradually released from The Tombs. They return to campus, where a mounted police presence will remain stationed at both ends of College Walk for the next several months. President Kirk returns to his office and assesses the damage: Tape covers some of the windows where students have attempted to prevent glass from flying in all directions if it were shattered. The students report having cleaned the president’s office before the bust, but photos remain of a half-eaten sandwich on the desk and a toilet paper roll with “Kirk is a jerk” scrawled on the side. </p>
<p><b>Aftermath</b></p>
<p>The administration formed three committees to help rehabilitate the University: the Joint Committee on Disciplinary Affairs, the Special Committee of the Board of Trustees, and the Executive Committee of the Faculty. They also created the Cox Commission, which hired groups of outside researchers to investigate why and how the protests erupted and unfolded. </p>

<p>On May 5, during an interview on CBS’ <i><u><a href="https://www.cbsnews.com/face-the-nation/">Face the Nation</a></u></i>, Kirk defends his use of police force. “Obviously, in a large operation of this kind, things do perhaps at times tend to get out of hand,” he concedes. “If, as I am told, many bystanders and spectators were injured or were arrested or otherwise involved, I am deeply apologetic about it. It was not our plan.” </p>

<p>Kirk also says that SAS students in Hamilton were not as battered by police because they “behaved themselves like gentlemen.” He blames the older generation for having allowed young people to reach adulthood with the belief that they have no obligation to obey rules and laws that don’t please them. At the end of the interview he was asked if he had plans to resign in the wake of the protests. He responded decisively: “I do not intend to resign.”</p>

<p>Former Columbia President Grayson Kirk announced his retirement that August, just four months after the protests of ’68. </p>
</div>

<div>
<img className={s["banner"]} src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/DHQA6PO5WRDTZMHS443GYCNEQA.png"/>
<div className={s["title"]}>Faculty</div>
</div>
<div className={s["row main-part body"]}>
<img style={{float:"right", width:"93%", marginTop:"-13%", marginBottom:"1rem"}} src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FOKYDHS6JBBYLKIO4AXHCWH2S4.jpg"/>
<p><b>April 29</b></p>
<p>Professor Alan Westin, the leader of the Ad Hoc Faculty Group, proclaims April 29 “a day of decision for Columbia.” </p>

<p>Unlike the other various ad hoc committees that have formed in the past few days, the AHFG has been in touch with people from all sides of the conflict. The group has been meeting for a four-day continuous stretch in its headquarters, 301 Philosophy Hall, trying to determine a path to a peaceful resolution of the protests. </p>

<p>Today, it finally releases a list of six resolutions, carefully designed to end the student occupation of Columbia buildings without the application of force. These six items have appeared separately on the many press releases the AHFG puts out from its headquarters, at various points in various phrasings on various days, but now congregated and concretized on one piece of paper, they assume a force of causality.</p>

<p>List items one through four constitute a proposal to solve the crisis: first, that the administration establish a tripartite committee (administrative, faculty, and student) to determine disciplinary action against students; second, that the mayor convene a panel of trustees, community members, and faculty to discuss construction of the gym; third, that upon successful establishment of these committees, students must promise to vacate the buildings; and fourth, that if the students don’t do so, the administration still should refrain from using force to remove them. </p>

<p>The AHFG also includes two more resolutions: confidence that the trustees would not refuse to accept such reasonable demands; and an expression of determination to return to the normal state of affairs. </p>

<p>First thing in the morning, copies of the six resolutions are printed and distributed to the trustees, students, administrators, and faculty. Then, Columbia’s day of decision unfolds. </p>
<p><b>April 30</b></p>
<p>The four items and two votes of confidence quickly become irrelevant as the police storm through the gates at 116th Street. </p>

<p>“Our efforts may have postponed for several days the calling in of the police,” says the AHFG in its last memo, “but it is obvious that in the end our efforts failed.” </p>

   <p>The Ad Hoc Faculty Committee quickly dissipates. <i>Ad hoc</i> means “for this” in Latin, pointing to a task of finite bounds. “This” is well and good when students are in the buildings protesting; you have something to point at. “This” can be the students’ safety and peaceful resolution of the conflict. It can be a list of six items enumerated by concerned faculty from Room 301 in Philosophy.</p>

<p>But what does “this” become when over 500 students are in jail and the University has fallen apart at the seams? When a professor’s arm is broken, not because he is blocking police from entering Mathematics, but because a student falls on him while jumping out of the building’s window to escape them? To point at Fayerweather, Mathematics, Low, and Hamilton, one merely needs to stand in the center of campus. To point at Columbia University, one needs a helicopter. </p>

<p>The need for a bird’s-eye mandate is clear. President Kirk approves an autonomous group of ten faculty, the Executive Committee, to “return the University to its educational task at the moment.” </p>
<p><b>May 9</b></p>
<p>Exactly nine days after the police stormed Hamilton and Low, Fayerweather and Mathematics, an engineer walks into a radio studio.</p>

<p>The studio belongs to Columbia’s WKCR, and the engineer is professor John E. Englund. The AHFG has disbanded, and Englund, a former member, takes the airwaves.</p>

<p>“We must not be detracted from our main duty,” Englund tells the broadcast’s listeners. “Reform of the University is the paramount academic topic that should occupy the energies of all faculty and students in the weeks and months ahead. All other subject matter is insignificant for now.”</p>

<p>Englund isn’t worried about a lack of potential faculty power in the wake of the protests. His concern is the opposite: that the clout of a select few might be too great, with other faculty remaining apathetic. The Executive Committee’s mandate is wide, but it has only ten members.</p>

<p>In five days’ time, the committee responds to these criticisms, motioning to expand its size to eighteen. Eventually, it grows much bigger, as the group takes on undergraduate and graduate summer interns, assembles task forces, and interviews hundreds of witnesses through the Cox Commission in its task to rebuild a university. </p>

<p>No matter how large or small the ranks, however, there is no doubt that the Executive Committee has unprecedented power within the University: It designs and decides upon the uncountable list of ideas that will bedrock the new Columbia.</p>
<p><b>Summer, 1968</b></p>
<p>Over the course of one summer, the Executive Committee takes apart Columbia to and puts it back together again. Some committee members organize the Cox Commission to establish an authoritative timeline of events and lay out the causes of the protests, both long-range and immediate. Another task force proposes establishing the University Senate, the first body of its kind at Columbia. Other members update the contents of Columbia’s statutes. Still more work to bring to light the findings of unofficial reports by the faculty, previously suppressed by the administration, on Columbia’s relationship with the community.</p>

<p>The sentiment of the committee is not one of reform but of total reinvention: Many use the metaphor of a constitutional convention to describe their work.</p>

<p>The students involved in the protests cooperate—or don’t cooperate—with this constitutional convention to varying degrees. Some undergraduates and graduates join the team as interns. Others voice their objections. At the beginning of the Cox Commission hearings, a student from the SCC stands up and expresses the group’s complaints. He quotes a long passage from Vice President David Truman’s book, “The Governmental Process,” on public hearings being a spectacle that sensationalizes the events of the protest in an attempt to avoid true reform.</p>

<p>Even among the faculty itself there is division: Many doubt the efficacy of a constitutional approach. Professor Samuel Devons writes an angry letter to the Executive Committee’s board. “Our own <i>Declaration of Independence</i> with its ringing and unequivocal proclamation that ‘all men are created equal,’” he reminds the Committee, “has not prevented the thralldom of slavery, oppression, and poverty, from becoming the birthright of innumerable millions.”</p>

<p><b>The Aftermath: October, 1968</b></p>
<p>School reconvenes; the Executive Committee has recommended a tentative report to Columbia’s attention. Spectator publishes a ten page supplement detailing the new proposals. The long reform process begins.</p>

</div>
<div>
<img className={s["banner"]} src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/DHQA6PO5WRDTZMHS443GYCNEQA.png"/>
<div className={s["title_part2link"]}>PART II: PROFILES</div>
</div>

</div>
</div>
    </div>
        );
    }
}


export default Part1;