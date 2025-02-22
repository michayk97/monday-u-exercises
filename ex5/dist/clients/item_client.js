class ItemClient {
	getItems = async () => {
		const response = await fetch('/items');
		const todos = await response.json();
		return todos;
	};

	postItem = async (item) => {
		await fetch('/item', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ item }),
		});
	};

	deleteItem = async (item) => {
		await fetch('/item', {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ item }),
		});
	};

	updateStatus = async (item) => {
		await fetch('/item', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ item }),
		});
	};

	editItem = async (item, newTask) => {
		await fetch('/item', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ item, newTask }),
		});
	};
}
