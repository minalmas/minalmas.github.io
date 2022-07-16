const content = document.getElementsByClassName('content')[0].getElementsByClassName('container')[0];
const p = ['Neque totam dolore excepturi nostrum accusamus quidem, id natus soluta doloribus eligendi minima culpa repudiandae delectus quos quis sint repellat nobis.', 'Est, necessitatibus! Autem voluptates nihil fugiat!', 'Voluptatum ipsa nihil dolor sit voluptatem accusamus praesentium earum?', 'Praesentium enim quisquam deleniti, nemo velit omnis nobis amet sint esse incidunt reprehenderit quasi rerum a eos odit at obcaecati fugit harum iusto labore molestiae?', 'Aspernatur sequi culpa obcaecati nihil repellat, impedit commodi dicta molestiae molestias excepturi sit illo sint ad nesciunt maxime labore ab consectetur illum accusantium quisquam qui? Totam, nulla!', 'Doloribus fugiat iure dignissimos.'];

document.addEventListener('DOMContentLoaded', (e) => {
	run(p, () => {
		console.log("Finished.")
	});
});

const run = (arr, callback) => {
	arr.forEach((text, index) => {
		window.setTimeout(() => {
			content.innerHTML += `<p>${text}</p>`;
			index == arr.length - 1 && typeof callback === 'function' && callback();
		}, 500 * (index + 1));
	});
}
