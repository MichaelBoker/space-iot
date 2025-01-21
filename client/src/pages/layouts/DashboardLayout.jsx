import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import Wrapper from '../../assets/Wrappers/Dashboard'
const DashboardLayout = () => {
  return (
    <Wrapper>
      <main>
        <Sidebar/>
        <section className="dashboard-body">
          <div id="main-content">
            <Outlet/>
          </div>
        </section>
      </main>
    </Wrapper>
  )
}
export default DashboardLayout