import { print } from '@/Print';
import { useRouter } from 'next/router'

const DetailsPage = () => {
    const {query} = useRouter();
    const {newsId} = query
    print(newsId)

    return (
        <h1>
            the Details Page {newsId}
        </h1>
    );
}

export default DetailsPage;
