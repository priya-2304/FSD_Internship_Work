// closure
let company = "Google";
function department(){
    let dep = "Engineering";
    function team(){
        let teamname="Frontend";
        function employee(){
            let emp = "Ram";
            console.log(company);
            console.log(dep);
            console.log(teamname);
            console.log(emp);
        }
        employee();
    }
    team();
}
department();