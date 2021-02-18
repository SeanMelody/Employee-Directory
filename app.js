console.log("Hi!")

const getEmployeeBtn = document.querySelector("#get-employees")
getEmployeeBtn.addEventListener("click", function () {

    const requestUrl = "https://randomuser.me/api/?results=10"
    fetch(requestUrl, {
        method: "GET",
    })
        // Json the results
        .then((results) => results.json())
        // Console log to let user know it was successful!
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log("Employee API Error", err)
        })
})