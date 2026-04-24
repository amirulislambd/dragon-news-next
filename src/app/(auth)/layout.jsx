import Navbar from '@/components/navbar/Navbar';


const AuthLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default AuthLayout;