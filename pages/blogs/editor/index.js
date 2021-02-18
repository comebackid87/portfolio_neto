import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import withAuth from '@/hoc/withAuth'
import { Editor } from 'slate-simple-editor'

const BlogEditor = ({user, loading}) => {

    const saveBlog = (data) => {

    }

    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage>
                <Editor onSave={data => {}}/>
            </BasePage>
        </BaseLayout>
    )
}

export default withAuth(BlogEditor)('admin')