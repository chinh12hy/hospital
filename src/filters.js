import moment from 'moment'

export default {
  install(Vue) {
    Vue.filter('formatTime', (value) => {
      return moment(value).format('HH:MM YYYY-MM-DD');
    });

    Vue.filter('formatDate', (value) => {
      return moment(value).format('YYYY-MM-DD');
    });

    Vue.filter('upperCaseFirstLetter', (value) => {
      return value ? value.charAt(0).toUpperCase() + value.slice(1) : ''
    })
  }
}
