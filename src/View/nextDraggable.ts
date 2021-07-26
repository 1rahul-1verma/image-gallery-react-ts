interface closestDraggable {
    offset: number;
    element: HTMLDivElement | null;
}

function nextDraggable(container: HTMLDivElement, y: number) : HTMLDivElement | null  {
    const dragList = container.querySelectorAll('[draggable = true]:not([data-dragging = true])');
    const draggableElements =  Array.from(dragList) as HTMLDivElement[];
    return  draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
        } else {
        return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY, element: null } as closestDraggable).element;
}

export default nextDraggable ;