/* .js files add interaction to your website */
document.addEventListener("DOMContentLoaded", function() {
    function setActiveLink() {
        const pageMap = {
            "index.html": "home-link",
            "solutions.html": "solutions-link",
            "organizations.html": "organizations-link",
            "contact.html": "contact-link"
        };

        const currentPage = window.location.pathname.split("/").pop();
        const activeLinkId = pageMap[currentPage];

        if (activeLinkId) {
            document.getElementById(activeLinkId).classList.add("active");
        }
    }

    setActiveLink();
});

var factList = [
    "Headline-grabbing oil spills account for just 12 percent of the oil in our oceans. 2-3x as much oil is carried out to seas via runoff from our roads, rivers and drainpipes.",
    "We dump about 26 billion pounds of plastic — or the equivalent weight of more than 100,000 blue whales — every single year into the ocean.",
    "There’s so much junk at sea, the debris has formed giant garbage patches. There are five of them around the world, and the largest — the Great Pacific Garbage Patch — includes an estimated 1.8 trillion pieces of trashJump to and covers an area 2x the size of Texas.",
    "Ocean plastic can be broken into smaller pieces — known as microplastics — by sun exposure and wave action, after which it can find its way into the food chain. When it eventually degrades (which can take hundreds of years in the case of a plastic bottle), the process releases chemicals that further contaminate the sea.",
    "More plastic in the ocean comes from Indonesia and India than anywhere else— together, they contribute more plastic to the world's coastal environments than the next seven countries combined, including the United States, which ranks third on the list.",
];

var fact= document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count=0;

myButton.addEventListener("click", displayFact);

                          function displayFact(){
    fact.innerHTML = factList[count];
    count++;
    if(count == factList.length){
        count=0;
    }
}


        
    
