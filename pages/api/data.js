import data from 'data.json';

export default async function fetchData(req, res) {
    try {
        if (!req.query.featuredId) {
            res.json(data);
            res.status(200);
            return;
        }
        const result = {
            Featured: data.TendingNow.find(element => element.Id === req.query.featuredId),
            TendingNow: data.TendingNow.filter(element => element.Id !== req.query.featuredId),
        }
        res.json(result);
        res.status(200);
    } catch (error) {
        res.status(400);
        res.json({
            error,
        });
    }
}
