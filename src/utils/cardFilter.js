export default function filterCardsByStatus (statuses, cards) {
    if(!Array.isArray(statuses) || !Array.isArray(cards) || cards.length === 0) return [];
    return statuses.map((status) => ({
        status,
        data: cards.filter((card) => card.status === status)
    }))
}