import path from 'path';
const __dirname = path.resolve();
const getDocument = async (req, res) => {
    console.log(__dirname);
    try {
        const getFilePath = path.join(__dirname, '/src/utils/agreementFormat.pdf');
        console.log(getFilePath);
        res.sendFile(getFilePath)
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}

export default { getDocument }