export default function (resources) {
  return {
    data () {
      let initData = {
        remoteDataLoading: 0,
        baseUrl: ''
      }
      // Initialize data properties
      initData.remoteErrors = {}
      for (const key in resources) {
        initData[key] = null
        initData.remoteErrors[key] = null
      }
      return initData
    },
    methods: {
      async fetchResource (key, url) {
        try {
          this.$data[key] = await axios.get(`${this.baseUrl}${url}`)
        } catch (e) {

        }
      }
    }
  }
}
