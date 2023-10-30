import Api from '@/services/Api'

export default {
    index() {
        return Api().get('blogshelmet')
    },
    show(bloghelmetId){
        return Api().get('bloghelmet/'+bloghelmetId)
    },
    post(bloghelmet){
        return Api().post('bloghelmet', bloghelmet)
    },
    put(bloghelmet){
        return Api().put('bloghelmet/'+bloghelmet.id, bloghelmet)
    },
    delete(bloghelmet){
        return Api().delete('bloghelmet/'+bloghelmet.id, bloghelmet)
    },
}