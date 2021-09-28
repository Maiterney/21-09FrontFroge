import Sidebar from '../Sidebar';

const Layout = ({children}) => {
    return(
        <main className="dashboard-controller">
            <Sidebar />

            <div className="content-controller">
                {children}
            </div>
        </main>
    )
}

export default Layout;