export default function handler(req, res) {
    console.log('handler')
    res.status(200).json({ name: 'John Doe' })
}
