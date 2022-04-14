const hands = ["rock", "paper", "scissors"];

const r = hands[0];
const p = hands[1];
const s = hands[2];

function getHand()
{
    let index = parseInt(Math.random()*10)%3;
    return hands[index];
}

let p1 = 
{
    name: "deez",
    getHand: getHand,
    w: 0
}

let p2 = 
{
    name: "assignments",
    getHand: getHand,
    w: 0
}

const n1 = p1.name;
const n2 = p2.name;

function playRound(p1, p2)
{
    let p1h = p1.getHand();
    let p2h = p2.getHand();
    console.log(n1 + " chose " + p1h);
    console.log(n2 + " chose " + p2h)
    if (p1h===p2h)
    {
        console.log("it's a tie!");
        return null;
    } else if ((p1h == r && p2h == s) || (p1h == p && p2h == r) || (p1h == s && p2h == p))
    {
        p1.w++;
        console.log(p1.name + " wins with " + p1h);
        return p1;
    } else 
    {
        p2.w++;
        console.log(p2.name + " wins with " + p2h)
        return p2;
    }
}




function Playgame (p1, p2, playUntil)
{
  p1.w = 0;
  p2.w = 0;
  do
  {  
    playRound(p1, p2);
    if (p1.w == playUntil)
    {
        console.log(n1 + " won " + playUntil + " games!");
        return p1;
    } else if (p2.w == playUntil) {
        console.log(n2 + " won " + playUntil + " games!");
        return p2;
    }
  } while (p1.w < playUntil && p2.w < playUntil);
}
Playgame(p1, p2, 5);