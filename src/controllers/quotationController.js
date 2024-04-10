import path from 'path';
import ejs from 'ejs';
import pdf from 'html-pdf';
import fs from 'fs';
const __dirname = path.resolve();
const getQuotationDetails = async (req, res) => {
    try {
       
        // Read EJS template file
        console.log(req.body);
        let data = req.body;
        const templatePath = path.join(__dirname, '/src/utils/quotationTemplate.ejs');
        const templateContent = fs.readFileSync(templatePath, 'utf-8');
        // Render EJS template with data
        const renderedHtml = ejs.render(templateContent, { data });
        console.log(renderedHtml);
        // Convert HTML to PDF
       pdf.create(renderedHtml, { format: 'Letter' }).toBuffer((err, buffer) => {
            if (err) {
                console.error('Error generating PDF:', err);
                res.status(500).send('Error generating PDF');
                return;
            }
            res.setHeader('Content-Type', 'application/pdf');
            res.status(201).send(buffer);
       });
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
}


export default { getQuotationDetails }