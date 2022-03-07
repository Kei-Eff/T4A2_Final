console.log("hello from file");

window.onload = function () {
    function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(event.target);

        const value = data.get('text');

        fetch('https://3d51pn4wg6.execute-api.ap-southeast-2.amazonaws.com/stage', {
            method: "POST",
            body: JSON.stringify(value),
            headers: {"Content-type": "application/json; charset=UTF-8"},
            mode: 'no-cors'
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
        // console.log({ value });
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
}