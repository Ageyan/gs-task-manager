export default async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(404).send({ messsage: 'User not found' });
        }

        if (req.user.role !== 'admin') {
            return res.status(500).json({
                message: 'Access denied',
            });
        }

        next();
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message });
    }
};
