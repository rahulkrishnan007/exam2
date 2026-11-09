
async function getUsers() {
    let count = document.getElementById("count").value;
    let result = document.getElementById("result");
    if (count < 1 || count > 50) {
        alert("Enter a number between 1 and 50");
        return;
    }
    try {
        let response = await fetch(`https://randomuser.me/api/?results=${count}`);
        let data = await response.json();
        result.innerHTML = "";
        data.results.forEach(user => {
            result.innerHTML += `
                <div class="bg-white p-5 rounded-xl shadow text-center">
                    <img src="${user.picture.large}"
                        class="w-24 h-24 rounded-full mx-auto mb-3">
                    <h2 class="text-xl font-bold">
                        ${user.name.first} ${user.name.last}
                    </h2>
                    <p class="text-gray-600 mt-2">
                        ${user.email}
                    </p>

                    <p class="text-gray-600 mt-2">
                         ${user.location.city}, ${user.location.country}
                    </p>
                    <p class="text-gray-600 mt-2">
                         ${user.phone}
                    </p>
                </div>
            `;
        });
    }
    catch (error) {
        alert("Something went wrong!");
    }
}
