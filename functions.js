let litmir = [
    {author: 'Orwell', title: '1984'},
    {author: 'Nesbo', title: 'Knife'},
    {author: 'Caroll', title: 'Alice in Wonderland'},
    {author: 'Gogol', title: 'Viy'},
];
console.log(litmir);

function sortArrByTitle(arr) {
    return arr.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    })
};

console.log(sortArrByTitle(litmir));

let results = [
    {name: 'Vasya', points: 150},
    {name: 'Moshe', points: 120},
    {name: 'Lisa', points: 100},
    {name: 'Boruh', points: 150},
    {name: 'Sam', points: 120},
    {name: 'Lida', points: 200},
];


function sortByPoints(arr) {
    return arr.sort(function (a, b) {
        if (b.points !== a.points) {
            return b.points - a.points;
        } else {
            return a.name.localeCompare(b.name);
        }

    });
}
    console.log(results);

    console.log(sortByPoints(results))









