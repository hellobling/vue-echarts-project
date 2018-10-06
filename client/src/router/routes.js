
import Home from '../layout/Home.vue'
import Readme from '../layout/MainPage.vue'
import Apply from '../views/hospital/apply.vue'
import HospitalList from '../views/hospital/list.vue'
import HospitalReport from '../views/hospital/report.vue'
import Appraise from '../views/expert/appraise.vue'
import ExpertList from '../views/expert/list.vue'
import Distribution from '../views/manage/distribution.vue'
import Statistics from '../views/manage/statistics.vue'
import Map from '../views/platform/map.vue'
import Reports from '../views/platform/reports.vue'
import Test from '../components/test.vue'
export default [
  {
    path: '/',
    redirect: '/hospital/apply', // 重定向到默认首页
    hidden: true
  },
  {
    path: '/index',
    component: Home,
    redirect: 'noredirect',
    name: 'index',
    noDropdown: true,
    children: [
      {
        path: 'readme',
        component: Readme
      }
    ]
  },
  {
    path: '/hospital',
    component: Home,
    redirect: 'noredirect',
    noDropdown: true,
    children: [
      {
        path: 'apply',
        component: Apply
      },
      {
        path: 'list',
        component: HospitalList
      },
      {
        path: 'report',
        component: HospitalReport
      }
    ]
  },
  {
    path: '/expert',
    component: Home,
    redirect: 'noredirect',
    noDropdown: true,
    children: [
      {
        path: 'appraise',
        component: Appraise
      },
      {
        path: 'list',
        component: ExpertList
      }
    ]
  },
  {
    path: '/manage',
    component: Home,
    redirect: 'noredirect',
    noDropdown: true,
    children: [
      {
        path: 'distribution',
        component: Distribution
      },
      {
        path: 'statistics',
        component: Statistics
      }
    ]
  },
  {
    path: '/platform',
    component: Home,
    redirect: 'noredirect',
    noDropdown: true,
    children: [
      {
        path: 'map',
        component: Map
      },
      {
        path: 'reports',
        component: Reports
      }
    ]
  },
  {
    path: '/test',
    component: Home,
    redirect: 'noredirect',
    noDropdown: true,
    children: [
      {
        path: 'test',
        component: Test
      }
    ]
  }

]
