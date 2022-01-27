window.addEventListener('DOMContentLoaded', (Event) =>{
    getVisitCount();
})

const FunctionApi = '';

const getVisitCount = () => {
    let Count = 30;
    fetch(FunctionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        Count = response.count;
        document.getElementById("counter").innerText = Count;
    }).catch(function(error){
        console.log(error);

    });
    return Count;

}
