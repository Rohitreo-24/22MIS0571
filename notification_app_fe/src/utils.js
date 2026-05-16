export const getPriorityScore = (notification) => {
    let score = 0;

    if (notification.Type === "Placement") score += 30;
    if (notification.Type === "Result") score += 20;
    if (notification.Type === "Event") score += 10;

    return score;
};