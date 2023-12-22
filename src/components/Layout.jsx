
import Sidebar from './Sidebar'

function Layout({children}) {
    return (
        <>
            <Sidebar />
            {children}
        </>
    )
}

export default Layout