import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2'>
      <h1 className='text-3xl font-extrabold text-blue-500'>knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;