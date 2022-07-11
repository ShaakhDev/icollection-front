import Header from './Header'
import PageLayout from 'layout/PageLayout'
import LastItems from './LastItems'
import LargestCollections from './LargestCollections'
import Tags from './Tags'


function Home() {
    return (
        <PageLayout>
            <Header />
            <LastItems />
            <LargestCollections />
            <Tags />
        </PageLayout>
    )
}

export default Home