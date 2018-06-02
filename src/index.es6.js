require("./scss/main.scss");

document.querySelector("html").classList.remove("no-js");
document.querySelector("html").classList.add("js");



const link = document.querySelector('.changepages');
link.setAttribute("href", "../pages/aide.html");



const patho = [
    {
      name: 'Difficulté intellectuelle',
      description:'<p> Les difficultés intellectuelles  et attentionnelles (attention/concentration), exécutives, de mémoire, de praxies et de langage sont pris en charge par des neuropsychologues.</p><p>La neuropsychologie est une discipline scientifique qui s‘intéresse aux relations entre le cerveau et le fonctionnement psychologique. Au travers d’une évaluation basée sur plusieurs entretiens, on observe le fonctionnement cognitif, ainsi que son interaction avec les émotions et les comportements. Elle s’intéresse donc aux dysfonctionnements cognitifs d’origine neurologique. </p><p> Lors d’un bilan neuropsychologique, on évalue les différentes sphères cognitives d’un individu : la mémoire, l’attention, les praxies, les fonctions exécutives (planification, flexibilité…), … sans perdre de vue l’impact des difficultés sur le quotidien de l’individu.  Suite au bilan, des pistes sont envisagées pour aider la personne dans son quotidien mais des prises en charge spécifiques peuvent également être proposées selon les difficultés relevées (suivi neuropsychologique). </p><p> La neuropsychologie est une discipline qui s’intéresse aussi bien aux enfants (troubles développementaux) qu’aux personnes âgées (démences, AVC…), qu’aux adultes (traumatismes crâniens, tumeurs…).<span class="hnjitem__span">Notre équipe compte 3 psychologues</span></p> <a href="../public/pages/equipe.html" class="hnjitem__button">Venez découvrir notre équipe</a>',
    },
    {
        name: 'Difficultés pathologiques',
        description: '<p> Réalise un accompagnement et un suivi thérapeutique d‘enfants et adolescents, ainsi que leurs parents, dans le cadre de difficultés psychologiques <span class="hnjitem__span"> Notre équipe compte 2 psychologues/psychothérapeutes</span></p><a href="https://www.participate-autisme.be/fr/index.cfm" class="hnjitem__button">Venez découvrir notre équipe</a>',
    },
    {
        name:'Difficultés communicationnelles',
        description: '<p>L’orthophoniste-logopède, thérapeute de la communication et du langage, intervient pour toutes les pathologies de la parole, de la voix et du langage oral et écrit, quelle que soit leur origine, chez l’enfant, l‘adolescent, l‘adulte et la personne âgée. Il est le thérapeute qui assume la responsabilité de la prévention, de l‘évaluation, du traitement et de l‘étude scientifique des troubles de la communication humaine et des troubles associés. Dans ce contexte, la communication englobe toutes les fonctions associées à la compréhension et à l‘expression du langage oral et écrit, ainsi qu’à toutes les formes appropriées de la communication non-verbale.<span class="hnjitem__span">Notre équipe compte 2 logopèdes</span></p><a href="equipe.html" class="hnjitem__button">Venez découvrir notre équipe</a>',
    },
    {
        name:'Fonctions motrices et/ou psychiques',
        description:'<p>Si on clic dessus : Le psychomotricien prend en charge les troubles de la coordination, du schéma corporel, de la motricité fine… ; retard de développement ; hypo/hyper sensibilités sensorielles ; difficultés de gestion des émotions ; difficultés relationnelles ; manque d’autonomie ; difficultés de respect des règles ; … Son champ d’action s’étend du nourrisson à la personne âgée, avec ou sans handicap. Il peut réaliser des bilans psychomoteurs, des prises en charge mais aussi du soutien parental. La prise en charge est individuelle ou collective. Elle peut être préventive, éducative, ré-éducative ou encore thérapeutique.</p><p>Le psychomotricien voit la personne dans sa globalité et réfléchit ses actions en fonction de cette globalité. Il relève les capacités de la personne ainsi que ses fragilités dans un but d’évolution. A travers différentes techniques comme le jeu (moteur, sensoriel, symbolique, de société…), le massage, le dialogue tonico-émotionnel… le psychomotricien aide le patient à évoluer dans les différents domaines liés au développement de la personne (corporel, moteur, psycho-affectif, relationnel…).</p><p>Il met en place un cadre sécurisant et contenant qui favorise les expériences motrices, sensorielles, émotionnelles, corporelles… du patient. Le psychomotricien s’implique corporellement dans les séances, s’ajustant à la personne qu’il a en face de lui. Il est très attentif au langage corporel de son patient et peut se passer du langage oral lors de ses bilans et prises en charges. <span class="hnjitem__span">Notre équipe compte 1 psychomotricienne</span><a href="equipe.html" class="hnjitem__button">Venez découvrir notre équipe</a>',
    },
    {
        name:'Autisme',
        description:'<p>Les caractéristiques de l\'autisme : Les limitations au niveau de la communication sociale et les comportements stéréotypés, répétitifs ainsi que les intérêts particuliers forment le noyau de l’autisme. Ceci peut se manifester de différentes façon et avec une intensité variable. Ce qui signifie que les personnes avec autisme peuvent être très différentes les unes des autres. Avant de démarrer un apprentissage, la première chose à faire est d\'observer votre enfant afin de bien le comprendre : voyez le contexte dans lequel il évolue, cernez ses compétences et ses difficultés, évaluez ses réactions ...</p><p>Renseignez-vous auprès de l’entourage (l’institutrice de votre enfant, sa gardienne, les membres de la famille,…) pour connaître ses observations quant à votre enfant.</p><p>Faites attention à l’environnement de votre enfant : décelez-y tout ce qui pourrait être dérangeant pour lui et susceptible d\'entraver ses apprentissages ou de les favoriser.<span class="hnjitem__span">Nos collègues de l\'asbl "Participate" sont spécialisés dans l‘autisme</span></p><a href="https://www.participate-autisme.be/fr/index.cfm" class="hnjitem__button">Visiter leur site</a>',
    },
    {
        name:'Aide à la jeunesse',
        description:'<p>L’aide spécialisée apportée aux jeunes et aux familles en Communauté française se présente comme une combinaison fort originale entre des services publics et des services d’initiative privée, c’est-à-dire associative.</p><p>Dans le champ de l’aide à la jeunesse, les services publics interviennent là où ils le doivent et rien que là. Lorsqu’il s’agit de garantir le respect de certains droits fondamentaux, la continuité du service et lorsque le besoin à rencontrer implique une part de contrôle de la société sur les individus, l’action est menée directement par des services publics : c’est bien le cas à propos des interventions garanties par des autorités, comme les SAJ et SPJ et lorsque l’éducation passe par une part de contrainte, comme celle qu’assument les IPPJ.</p><p>Dans tous les autres cas, l’aide à la jeunesse a choisi de recourir à l’initiative privée associative, qui partage avec les services  publics une philosophie commune de désintéressement. Le recours à l’initiative privée associative est très important dans ce secteur, puisqu’il y a environ quatre fois plus de travailleurs dépendant de services privés que d’agents de services publics.<span class="hnjitem__span">Nos collègues "aide à la jeunesse" sont spécialisés dans l‘aide à la jeunesse</span></p><a href="http://www.aidealajeunesse.cfwb.be/index.php" class="hnjitem__button">Visiter leur site</a>',
    },
    {
        name:"Service d'accompagnement",
        description:'<p>Les services d\'accompagnement provinciaux Alter & GO offrent un accompagnement adapté et individualisé à la personne en situation de handicap tout au long de son parcours de vie. Cela représente plus de 300 personnes suivies sur l\'ensemble de la province de Luxembourg.</p><p>L\'accompagnement proposé par les différents services s\'effectue en fonction de la demande et du projet de la personne. Les équipes sont donc mobiles et peuvent intervenir au domicile, à l\'école, sur un lieu de loisir, sur un lieu de travail pour une intégration professionnelle et à bien d\'autres endroits encore selon le projet.</p><p>C\'est une structure proche des citoyens qui place le processus participatif des familles et des bénéficiaires au cœur du projet. Cela peut prendre la forme d\'un conseil consultatif, d\'une réunion de parents, d\'évaluations, d\'enquêtes, etc.<span class="hnjitem__span">Nos collègues de "Alter & Go" sont spécialisés dans le service d\'accompagnement.</span></p><a href="http://www.province.luxembourg.be/fr/alter-go.html?IDC=5092#.Wt-nWtNubBJ" class="hnjitem__button">Visiter leur site</a>',
    },
    {
        name:' Assuétudes ',
        description:'<p>Solaix est un centre de consultation et de suivi ambulatoire pour les personnes dépendantes et leur entourage. Il s’agit d’un lieu d’accueil et d’accompagnement psychosocial et médical pour toute personnes confrontées de loin ou de près à la problématique de consommation de drogues, alcool, médicaments...<span class="hnjitem__span">Nos collègues de \"Solaix\" sont spécialisés dans les assuétudes.</span></p><a href=\"http://www.solaix.be/\" class=\"hnjitem__button\">Visiter leur site</a>',
    },
    {
        name:'Pédopsychiatrique',
        description:'<p>La Plate-forme de Concertation en Santé Mentale est une ASBL, créée le 24 juin 1993, en vue de mener la concertation entre les acteurs du champ de la santé mentale sur le territoire de la province de Luxembourg. Elle dispose également d’un service de médiation compétent pour traiter les plaintes relatives à l’application des droits du patient dans certaines institutions de soins.<span class="hnjitem__span">Nos collègues de "Maltida" sont spécialisés dans la pédopsychiatrie.</span></p><a href="http://www.plateformepsylux.be/" class="hnjitem__button">Visiter leur site</a>',
    },
    {
        name:'Santé et action sociale',
        description: '<p> De nombreuses compétences en matière de Santé et d’Action sociale sont transférées aux Régions, marquant ainsi un tournant majeur dans la gestion des mécanismes de protection sociale de notre pays. Consciente de cet enjeu primordial pour la population, la Wallonie a tout mis en œuvre pour créer un organisme d’intérêt public (OIP) autonome gérant les compétences de la santé, du bien-être, de l’accompagnement des personnes âgées, du handicap et des allocations familiales.</p><span class="hnjitem__span">Nos collègues de "L‘aviq" sont spécialisés dans le bien-être et à la santé de tous.</span></p><a href="https://www.aviq.be/" class="hnjitem__button">Visiter leur site</a>',
    },
];

const select = document.querySelector("select");
select.addEventListener("change", (e) => {
    const element = e.target;
    const value = element.value;
    const anchor = `#ill-${value}`;
    showIll(anchor);
});

document.addEventListener("click", (e)=>{
    const element = e.target;
    if(element.classList.contains("ill__name")){
        const parent = element.closest(".ill");
        const anchor = `#${parent.id}`;
        const isActive = (parent.classList.contains("active"));
        if(isActive){
            hideIll(anchor)
        }else{
            showIll(anchor)
        }
    }
});

function showIll(anchor) {
    const illEl = document.querySelector(anchor);
    if(!illEl)return;
    illEl.scrollIntoView();
    illEl.classList.add("active");
}

function hideIll(anchor) {
    const illEl = document.querySelector(anchor);
    illEl.classList.remove("active");
}

function getIll() {
    const mydiv = document.querySelector(".blochelp__ills");
    patho.forEach((patho, index) => {
        mydiv.insertAdjacentHTML("beforeend", `<div id="ill-${index}" class="ill">
    <h3 class="ill__name">${patho.name}</h3>
    <div class="ill__description">${patho.description}</div>
</div>`)
    })
}
getIll();

function getIllForSelect() {
    const mydiv = document.querySelector("#blochelp__select");
    patho.forEach((patho, index) => {
        mydiv.insertAdjacentHTML("beforeend", `<option value="${index}">${patho.name}</option>`)
    })
}

getIllForSelect();

