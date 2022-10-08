import Button from '../components/Button'
import '../styles/Home.scss'

const Home = () => {
  return (
    <div id='Home'>
        <div id='Hero'>
        <div style={{minHeight: '75vh'}} className='position-relative py-4 container d-flex flex-column pt-5 align-items-center justify-content-center'>
            <h2>Welcome to HealthScribe</h2>
            <p className='col-8 mt-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rem alias nobis eligendi delectus possimus architecto. Unde ut, laborum exercitationem modi velit deleniti ipsa deserunt optio excepturi reiciendis eligendi explicabo ab! Cumque, quod illo eveniet iure tempora magnam sapiente voluptate, reiciendis optio culpa aspernatur? Delectus quis debitis ut expedita magni.</p>
            <div className='d-flex gap-5 mt-5'>
            <Button title={'LEARN MORE'} url={'/signup'} bg color />
            <Button title={'VIEW FEATURES'} url={'/signup'} bg color />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home