
import PortfolioApi from '@/lib/api/portfolios'
import auth0 from '@/utils/auth0'

export default async function createPortfolio(req, res) {

    try {
        
        const { accessToken } = await auth0.getSession(req)
        console.log(accessToken)
        
        await new PortfolioApi().createPortfolio(data)
        return res.json({message: 'Portfolio has been created successfully.'})

    } catch (err) {

        return res.status(err.status || 400).end(err.message)

    }

}